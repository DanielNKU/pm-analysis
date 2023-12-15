## Static Analysis

src\crypto\SymmetricCipher.cpp

```c++
bool SymmetricCipher::init(Mode mode, Direction direction, const QByteArray& key, const QByteArray& iv)
{
    m_mode = mode;
    if (mode == InvalidMode) {
        m_error = QObject::tr("SymmetricCipher::init: Invalid cipher mode.");
        return false;
    }

    try {
        auto botanMode = modeToString(mode);
        auto botanDirection =
            (direction == SymmetricCipher::Encrypt ? Botan::Cipher_Dir::ENCRYPTION : Botan::Cipher_Dir::DECRYPTION);

        auto cipher = Botan::Cipher_Mode::create_or_throw(botanMode.toStdString(), botanDirection);
        m_cipher.reset(cipher.release());
        m_cipher->set_key(reinterpret_cast<const uint8_t*>(key.data()), key.size());

        if (!m_cipher->valid_nonce_length(iv.size())) {
            m_mode = InvalidMode;
            m_cipher.reset();
            m_error = QObject::tr("SymmetricCipher::init: Invalid IV size of %1 for %2.").arg(iv.size()).arg(botanMode);
            return false;
        }
        m_cipher->start(reinterpret_cast<const uint8_t*>(iv.data()), iv.size());
    } catch (std::exception& e) {
        m_mode = InvalidMode;
        m_cipher.reset();

        m_error = e.what();
        reset();
        return false;
    }

    return true;
}

bool SymmetricCipher::isInitalized() const
{
    return m_cipher;
}

bool SymmetricCipher::process(char* data, int len)
{
    Q_ASSERT(isInitalized());
    if (!isInitalized()) {
        m_error = QObject::tr("Cipher not initialized prior to use.");
        return false;
    }
    if (len == 0) {
        m_error = QObject::tr("Cannot process 0 length data.");
        return false;
    }

    try {
        // Block size is checked by Botan, an exception is thrown if invalid
        m_cipher->process(reinterpret_cast<uint8_t*>(data), len);
        return true;
    } catch (std::exception& e) {
        m_error = e.what();
        return false;
    }
}

bool SymmetricCipher::process(QByteArray& data)
{
    return process(data.data(), data.size());
}

bool SymmetricCipher::finish(QByteArray& data)
{
    Q_ASSERT(isInitalized());
    if (!isInitalized()) {
        m_error = QObject::tr("Cipher not initialized prior to use.");
        return false;
    }

    try {
        // Error checking is done by Botan, an exception is thrown if invalid
        Botan::secure_vector<uint8_t> input(data.begin(), data.end());
        m_cipher->finish(input);
        // Post-finished data may be larger than before due to padding
        data.resize(input.size());
        // Direct copy the finished data back into the QByteArray
        std::copy(input.begin(), input.end(), data.begin());
        return true;
    } catch (std::exception& e) {
        m_error = e.what();
        return false;
    }
}

void SymmetricCipher::reset()
{
    m_error.clear();
    if (isInitalized()) {
        m_cipher.reset();
    }
}
```

```c++
QString SymmetricCipher::modeToString(const Mode mode)
{
    switch (mode) {
    case Aes128_CBC:
        return QStringLiteral("AES-128/CBC");
    case Aes256_CBC:
        return QStringLiteral("AES-256/CBC");
    case Aes128_CTR:
        return QStringLiteral("CTR(AES-128)");
    case Aes256_CTR:
        return QStringLiteral("CTR(AES-256)");
    case Aes256_GCM:
        return QStringLiteral("AES-256/GCM");
    case Twofish_CBC:
        return QStringLiteral("Twofish/CBC");
    case Salsa20:
        return QStringLiteral("Salsa20");
    case ChaCha20:
        return QStringLiteral("ChaCha20");
    default:
        Q_ASSERT_X(false, "SymmetricCipher::modeToString", "Invalid Mode Specified");
        return {};
    }
}

int SymmetricCipher::defaultIvSize(Mode mode)
{
    switch (mode) {
    case Aes128_CBC:
    case Aes256_CBC:
    case Aes128_CTR:
    case Aes256_CTR:
    case Aes256_GCM:
    case Twofish_CBC:
        return 16;
    case Salsa20:
    case ChaCha20:
        return 12;
    default:
        return -1;
    }
}

int SymmetricCipher::keySize(Mode mode)
{
    switch (mode) {
    case Aes128_CBC:
    case Aes128_CTR:
        return 16;
    case Aes256_CBC:
    case Aes256_CTR:
    case Aes256_GCM:
    case Twofish_CBC:
    case Salsa20:
    case ChaCha20:
        return 32;
    default:
        return 0;
    }
}

int SymmetricCipher::blockSize(Mode mode)
{
    switch (mode) {
    case Aes128_CBC:
    case Aes256_CBC:
    case Aes256_GCM:
    case Twofish_CBC:
        return 16;
    case Aes128_CTR:
    case Aes256_CTR:
    case Salsa20:
    case ChaCha20:
        return 1;
    default:
        return 0;
    }
}

int SymmetricCipher::ivSize(Mode mode)
{
    switch (mode) {
    case Aes128_CBC:
    case Aes256_CBC:
    case Aes128_CTR:
    case Aes256_CTR:
    case Twofish_CBC:
        return 16;
    case Aes256_GCM:
        return 12;
    case Salsa20:
    case ChaCha20:
        return 8;
    default:
        return 0;
    }
}

```

src\crypto\CryptoHash.cpp

```c++
CryptoHash::CryptoHash(Algorithm algo, bool hmac)
    : d_ptr(new CryptoHashPrivate())
{
    Q_D(CryptoHash);

    switch (algo) {
    case CryptoHash::Sha256:
        if (hmac) {
            d->hmacFunction.reset(Botan::MessageAuthenticationCode::create("HMAC(SHA-256)").release());
        } else {
            d->hashFunction.reset(Botan::HashFunction::create("SHA-256").release());
        }
        break;
    case CryptoHash::Sha512:
        if (hmac) {
            d->hmacFunction.reset(Botan::MessageAuthenticationCode::create("HMAC(SHA-512)").release());
        } else {
            d->hashFunction.reset(Botan::HashFunction::create("SHA-512").release());
        }
        break;
    default:
        Q_ASSERT(false);
        break;
    }
}
```

src\crypto\kdf\Argon2Kdf.cpp

```c++
bool Argon2Kdf::transform(const QByteArray& raw, QByteArray& result) const
{
    result.clear();
    result.resize(32);
    // Time Cost, Mem Cost, Threads/Lanes, Password, length, Salt, length, out, length

    int rc = argon2_hash(rounds(),
                         memory(),
                         parallelism(),
                         raw.data(),
                         raw.size(),
                         seed().data(),
                         seed().size(),
                         result.data(),
                         result.size(),
                         nullptr,
                         0,
                         type() == Type::Argon2d ? Argon2_d : Argon2_id,
                         version());
    if (rc != ARGON2_OK) {
        qWarning("Argon2 error: %s", argon2_error_message(rc));
        return false;
    }

    return true;
}
```

src\keys\PasswordKey.cpp

```c++
void PasswordKey::setPassword(const QString& password)
{
    setRawKey(CryptoHash::hash(password.toUtf8(), CryptoHash::Sha256));
}

QSharedPointer<PasswordKey> PasswordKey::fromRawKey(const QByteArray& rawKey)
{
    auto result = QSharedPointer<PasswordKey>::create();
    result->setRawKey(rawKey);
    return result;
}

QByteArray PasswordKey::serialize() const
{
    QByteArray data;
    QDataStream stream(&data, QIODevice::WriteOnly);
    stream << uuid().toRfc4122() << rawKey();
    return data;
}
```

