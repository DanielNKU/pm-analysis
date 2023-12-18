## Static Analysis

TwoFish.h

```c++
class TwoFish : public Fish
{
public:
  static const unsigned int BLOCKSIZE = 16;
  TwoFish(const unsigned char* key, int keylen);
  ~TwoFish();
  void Encrypt(const unsigned char *in, unsigned char *out) const;
  void Decrypt(const unsigned char *in, unsigned char *out) const;
  unsigned int GetBlockSize() const {return BLOCKSIZE;}

private:
  twofish_key key_schedule;
};
```

PWSfile.h

```c++
// HASH_ITERATIONS is used by the key stretching algorithm.
// MIN_HASH_ITERATIONS is a lower limit - anything lower than this
// is considered inherently insecure.
#define MIN_HASH_ITERATIONS 2048
// MAX_USABLE_HASH_ITERS is a guesstimate on what's acceptable to a user
// with a reasonably powerful CPU. Real limit's 2^32-1.
#define MAX_USABLE_HASH_ITERS (1 << 22)
```

PWSfile.cpp

```c++
bool PWSfile::Encrypt(const stringT &fn, const StringX &passwd, stringT &errmess)
{
  FILE* out = nullptr;
  Fish *fish = nullptr;
  bool status = true;
  const stringT out_fn = fn + CIPHERTEXT_SUFFIX;
  unsigned char *pass = nullptr;
  unsigned char* ivthing = nullptr;
  size_t passlen = 0;
  size_t file_len = 0, orig_filelen = 0;
  size_t nread = 0;
  unsigned char thesalt[SaltLength];
  unsigned int BS = 0;
  const unsigned char* bufp = nullptr;
  bool isBigFile = false;

  
  FILE *in = pws_os::FOpen(fn, _T("rb"));
  if (in == nullptr) {
    status = false; goto exit;
  }

  file_len = pws_os::fileLength(in);

  isBigFile = (file_len > fileThresholdSize);

  out = pws_os::FOpen(out_fn, _T("wb"));
  if (out == nullptr) {
    status = false; goto exit;
  }

  ConvertPasskey(passwd, pass, passlen);
  PWSrand::GetInstance()->GetRandomData(thesalt, SaltLength);

  if (isBigFile)
    fish = makeFish<TwoFish, SHA256>(pass, static_cast<unsigned int>(passlen), thesalt, SaltLength);
  else
    fish = makeFish<BlowFish, SHA1>(pass, static_cast<unsigned int>(passlen), thesalt, SaltLength);

  trashMemory(pass, passlen);
  delete[] pass; // gross - ConvertPasskey allocates.
  BS = fish->GetBlockSize();

  unsigned char randstuff[StuffSize];
  unsigned char randhash[SHA1::HASHLEN];   // HashSize
  PWSrand::GetInstance()->GetRandomData(randstuff, StuffSize);

  if (!isBigFile) {
    // miserable bug - have to fix this way to avoid breaking existing files
    randstuff[StuffSize - 2] = randstuff[StuffSize - 1] = TCHAR('\0');
  }
  
  GenRandhash(passwd, randstuff, randhash);
  if (isBigFile)
    SAFE_FWRITE(randstuff, 1, StuffSize, out)
  else
    SAFE_FWRITE(randstuff, 1, StuffSize - 2, out)

  SAFE_FWRITE(randhash, 1, sizeof(randhash), out)
  SAFE_FWRITE(thesalt, 1, SaltLength, out)

  ivthing = new unsigned char[BS];
  PWSrand::GetInstance()->GetRandomData(ivthing, BS);
  SAFE_FWRITE(ivthing, 1, BS, out)

  unsigned char buf[BUFSIZ];
  bufp = buf;
  nread = fread(buf, 1, BUFSIZ, in);
  orig_filelen = file_len;

  try {
    //write first block: length + dummy type +  bytes of data
    size_t nwritten = _writecbc1st(out, &bufp, &file_len, 0, fish, ivthing, isBigFile);
    if (nwritten != BS) {
      status = false;
      goto exit;
    }
    // write rest of first buffer
    nread -= orig_filelen - file_len;
    nwritten = _writecbcRest(out, bufp, nread, fish, ivthing);
    if (nwritten < nread) {
      status = false;
      goto exit;
    }


    do { // main read/encrypt/write loop
      nread = fread(buf, 1, BUFSIZ, in);
      if (ferror(in)) { // this is how to detect fread errors
       status = false;
        goto exit;
      }

      if (nread == 0) // save writing a block or two.
        break;

      _writecbcRest(out, buf, nread, fish, ivthing);
    
    } while (!feof(in));

  } catch (...) { // _writecbc* throws an exception if it fails to write
    errno = EIO;
    status = false;
    goto exit;
  } // catch

  status = (pws_os::FClose(out, true) == 0); out = nullptr;

 exit:
  if (!status)
    errmess = ErrorMessages();
  delete fish;
  trashMemory(buf, BUFSIZ);
  delete[] ivthing;
  pws_os::FClose(in, false);
  pws_os::FClose(out, true);
  return status;
}
```

```c++
bool PWSfile::Decrypt(const stringT &fn, const StringX &passwd, stringT &errmess)
{
  ulong64 file_len;
  bool status = true;
  unsigned char salt[SaltLength];
  unsigned char *ivthing = nullptr;
  unsigned char randstuff[StuffSize];
  unsigned char randhash[SHA1::HASHLEN];
  unsigned char temphash[SHA1::HASHLEN];
  FILE* out = nullptr;
  bool isBigFile(false);
  size_t stuffLen(0);

  FILE *in = pws_os::FOpen(fn, _T("rb"));
  if (in == nullptr) {
    status = false;
    goto exit;
  }

  file_len = pws_os::fileLength(in);

  if (file_len < (8 + sizeof(randhash) + 8 + SaltLength)) {
    pws_os::FClose(in, false);
    LoadAString(errmess, IDSC_FILE_TOO_SHORT);
    return false;
  }

  isBigFile = (file_len > fileThresholdSize);

  stuffLen = isBigFile ? StuffSize : (StuffSize - 2);

  if (fread(randstuff, 1, stuffLen, in) != stuffLen) {
    status = false;
    goto exit;
  }
  if (!isBigFile) {
    randstuff[StuffSize - 2] = randstuff[StuffSize - 1] = TCHAR('\0'); // ugly bug workaround
  }
  if (fread(randhash, 1, sizeof(randhash), in) != sizeof(randhash)) {
    status = false;
    goto exit;
  }

  GenRandhash(passwd, randstuff, temphash);
  if (memcmp(reinterpret_cast<char *>(randhash), reinterpret_cast<char *>(temphash), SHA1::HASHLEN) != 0) {
    pws_os::FClose(in, false);
    LoadAString(errmess, IDSC_BADPASSWORD);
    return false;
  }

  { // decryption in a block, since we use goto


    unsigned char *pwd = nullptr;
    size_t passlen = 0;
    Fish* fish;

    ConvertPasskey(passwd, pwd, passlen);
    if (fread(salt, 1, SaltLength, in) != SaltLength) {
      status = false;
      goto exit;
    }
    if (isBigFile)
      fish = makeFish<TwoFish, SHA256>(pwd, static_cast<unsigned int>(passlen), salt, SaltLength);
    else
      fish = makeFish<BlowFish, SHA1>(pwd, static_cast<unsigned int>(passlen), salt, SaltLength);

    trashMemory(pwd, passlen);
    delete[] pwd; // gross - ConvertPasskey allocates.
    const unsigned int BS = fish->GetBlockSize();

    ivthing = new unsigned char[BS];

    if (fread(ivthing, 1, BS, in) != BS) {
      status = false;
      goto exit;
    }

    // read first block, containing plaintext length
    size_t plaintext_length;
    if (readcbc1st(in, plaintext_length, fish, ivthing, isBigFile) != BS) {
      delete fish;
      status = false;
      goto exit;
    }

    // Open output file
    size_t suffix_len = CIPHERTEXT_SUFFIX.length();
    size_t filepath_len = fn.length();

    stringT out_fn = fn;
    out_fn = out_fn.substr(0, filepath_len - suffix_len);

    out = pws_os::FOpen(out_fn, _T("wb"));
    if (out == nullptr) {
      delete fish;
      status = false;
      goto exit;
    }

    // now iterate over rest of file
    unsigned char buf[BUFSIZ];
    size_t nleft = plaintext_length;

    do {
      size_t nread = _readcbc(in, buf, BUFSIZ, fish, ivthing);
      if (ferror(in)) {
        delete fish;
        status = false;
        goto exit;
      }
      if (nread == 0) { // no plaintext or we hit the exact end. In any case, break loop peacefully
        break;
      }
      // write plaintext
      auto nwrite = nleft > BUFSIZ ? BUFSIZ : nleft;
      if (fwrite(buf,1, nwrite, out) != nwrite) {
        delete fish;
        status = false;
        goto exit;
      }
      nleft -= nwrite;
    } while (!feof(in));

    if (nleft != 0) {
      // truncated ciphertext?
      status = false;
    }
    delete fish;
  } // write decrypted
 exit:
  delete[] ivthing;
  if (!status)
    errmess = ErrorMessages();
  pws_os::FClose(in, false);
  pws_os::FClose(out, true);

  return status;
}
```

Util.cpp

```c++
void ConvertPasskey(const StringX &text,
                   unsigned char *&txt,
                   size_t &txtlen)
{
  bool isUTF8 = pws_os::getenv("PWS_PK_CP_ACP", false).empty();
  LPCTSTR txtstr = text.c_str();
  txtlen = text.length();

  size_t dstlen = pws_os::wcstombs(nullptr, 0, txtstr, txtlen, isUTF8);
#ifdef _MSC_VER
  dstlen++; // ugly, but no easy way around this now
#endif
  char *dst = new char[dstlen];

  size_t res = pws_os::wcstombs(dst, dstlen, txtstr, txtlen, isUTF8);
  ASSERT(res != 0); UNREFERENCED_PARAMETER(res);
  txt = reinterpret_cast<unsigned char *>(dst);
  txtlen = dstlen - 1;
  txt[txtlen] = '\0'; // not strictly needed, since txtlen returned, but helps debug
}
```

Fish.h

```c++
/*
* Returns a Fish object set up for encryption or decryption.
*
* The main issue here is that the key is SHA1(passphrase|salt)
* Aside from saving duplicate code, we win here by minimizing the exposure
* of the actual key.
* The lose is that the FishT object is now dynamically allocated.
* This could be fixed by having a ctor of BlowFish that works without a key,
* which would be set by another member function, but I doubt that it's worth the bother.
*
* Note that it's the caller's responsibility to delete the FishT object allocated here
*/
template<typename FishT, typename HashT>
FishT *makeFish(const unsigned char* pass, unsigned int passlen,
  const unsigned char* salt, unsigned int saltlen)
{
  unsigned char passkey[HashT::HASHLEN];
  pws_os::mlock(passkey, sizeof(passkey));

  HashT context;
  context.Update(pass, passlen);
  context.Update(salt, saltlen);
  context.Final(passkey);

  FishT* retval = new FishT(passkey, sizeof(passkey));
  trashMemory(passkey, sizeof(passkey));
  pws_os::munlock(passkey, sizeof(passkey));
  return retval;
}
```

PWSfileV4.cpp

```c++
void PWSfileV4::StretchKey(const unsigned char *salt, unsigned long saltLen,
                           const StringX &passkey,
                           unsigned int N, unsigned char *Ptag, unsigned long PtagLen)
{
  /*
  * P' is the "stretched key" of the user's passphrase and the SALT, as defined
  * by the hash-function-based key stretching algorithm PBKDF2, with SHA-256
  * as the hash function, and N iterations.
  */
  ASSERT(N >= MIN_HASH_ITERATIONS); // minimal value we're willing to use
  size_t passLen = 0;
  unsigned char *pstr = nullptr;

  HMAC<SHA256, SHA256::HASHLEN, SHA256::BLOCKSIZE> hmac;
  ConvertPasskey(passkey, pstr, passLen);
  pbkdf2(pstr, static_cast<unsigned long>(passLen), salt, saltLen, N, &hmac, Ptag, &PtagLen);

#ifdef UNICODE
  trashMemory(pstr, passLen);
  delete[] pstr;
#endif
}
```

```c++
bool PWSfileV4::CKeyBlocks::GetKeys(const StringX &passkey, uint32 nHashIters,
                                     unsigned char K[KLEN], unsigned char L[KLEN])
{
  // Note that nHashIters is only used if m_kbs is empty
  // Which will happen if this file is used 'single user'
  // and not with an externally managed CKeyBlocks.
  
  if (m_kbs.empty())
    AddKeyBlock(passkey, passkey, nHashIters);

  KeyBlockFinder find_kb(passkey);
  auto kb_iter = find_if(m_kbs.begin(), m_kbs.end(), find_kb);
  if (kb_iter == m_kbs.end())
    return false;

  unsigned char Ptag[SHA256::HASHLEN];
  PWSfileV4::StretchKey(kb_iter->m_salt, sizeof(kb_iter->m_salt),
                        passkey, kb_iter->m_nHashIters,
                        Ptag, sizeof(Ptag));
  TwoFish Fish(Ptag, sizeof(Ptag)); // XXX generalize to support AES as well
  KeyWrap kwK(&Fish);
  if (!kwK.Unwrap(kb_iter->m_kw_k, K, sizeof(kb_iter->m_kw_k)))
    ASSERT(0);
  KeyWrap kwL(&Fish);
  if (!kwL.Unwrap(kb_iter->m_kw_l, L, sizeof(kb_iter->m_kw_l)))
    ASSERT(0);
  return true;
}
```

```c++
int PWSfileV4::Open(const StringX &passkey)
{
  PWS_LOGIT;

  int status = SUCCESS;

  ASSERT(m_curversion == V40);
  if (passkey.empty()) { // Can happen if db 'locked'
    pws_os::Trace(_T("PWSfileV4::Open(empty_passkey)\n"));
    return WRONG_PASSWORD;
  }

  FOpen();
  if (m_fd == nullptr)
    return CANT_OPEN_FILE;

  m_passkey = passkey;
  if (m_rw == Write) {
    // Nonce is used to detect end of keyblocks
    static_assert(int(NONCELEN) == int(SHA256::HASHLEN), "can't call HashRandom256");
    HashRandom256(m_nonce); // Generate nonce
    if (!m_keyblocks.GetKeys(passkey, m_nHashIters, m_key, m_ell)) {
      PWSfile::Close();
      return WRONG_PASSWORD;
    }
    if (WriteKeyBlocks()) {
      status = WriteHeader();
    } else {
      status = WRITE_FAIL;
    }
  } else { // open for read
    status = ParseKeyBlocks(passkey);
    if (status == SUCCESS)
      status = ReadHeader();
  }
  if (status != SUCCESS) {
    Close();
  } else {
    if (m_rw == Read)
      m_effectiveFileLength = pws_os::fileLength(m_fd) - SHA256::HASHLEN;
  }
  return status;
}
```

```c++
int PWSfileV4::CheckPasskey(const StringX &filename,
                            const StringX &passkey, FILE *a_fd,
                            unsigned char *, uint32 *)
{
  PWS_LOGIT;

  FILE *fd = a_fd;
  SHA256 H;

  if (fd == nullptr) {
    fd = pws_os::FOpen(filename.c_str(), _T("rb"));
  }
  if (fd == nullptr)
    return CANT_OPEN_FILE;

  int retval = SanityCheck(fd);
  if (retval == SUCCESS) {
    PWSfileV4 pv4(filename, Read, V40);
    pv4.m_fd = fd;
    retval = pv4.ParseKeyBlocks(passkey);
    pv4.m_fd = nullptr; // s.t. d'tor doesn't fclose()
  }
  if (a_fd == nullptr) // if we opened the file, we close it...
    fclose(fd);
  return retval;
}

```

PWScore.cpp

```c++
StringX PWScore::GetPassKey() const
{
  StringX retval(_T(""));
  if (m_passkey_len > 0) {
    const unsigned int BS = TwoFish::BLOCKSIZE;
    size_t BlockLength = ((m_passkey_len + (BS - 1)) / BS) * BS;
    if (!pws_os::mcryptUnprotect(m_session_key, sizeof(m_session_key))) {
      pws_os::Trace(_T("pws_os::mcryptUnprotect failed"));
    }
    TwoFish tf(m_session_key, sizeof(m_session_key));
    if (!pws_os::mcryptProtect(m_session_key, sizeof(m_session_key))) {
      pws_os::Trace(_T("pws_os::mcryptProtect failed"));
    }
    unsigned char curblock[BS];
    for (unsigned int x = 0; x < BlockLength; x += BS) {
      unsigned int i;
      for (i = 0; i < BS; i++) {
        curblock[i] = m_passkey[x + i];
      }

      tf.Decrypt(curblock, curblock);
      for (i = 0; i < BS; i += sizeof(TCHAR)) {
        if (x + i < m_passkey_len) {
          retval += *(reinterpret_cast<TCHAR*>(curblock + i));
        }
      }
    }
    trashMemory(curblock, sizeof(curblock));
  }
  return retval;
}
```

