## Static Analysis

```go
func (keygen *KeyGen) GeneratePassword(spec *PasswordSpec) (string, error) {
	if !spec.Valid() {
		return "", errors.New("invalid password specification")
	}

	for {
		password, err := keygen.genRandStr(spec.Length)
		if err != nil {
			return "", err
		}

		if spec.Compliant(password) {
			return password, nil
		}
	}
}

```

```go
func getReader(password, realm string, seed []byte, allowUnsafe bool) (io.Reader, error) {
	var rng io.Reader
	var err error

	if seed != nil {
		rng, err = NewDRNGwithSeed(password, realm, seed)
		if err != nil {
			return nil, err
		}
	} else if allowUnsafe {
		rng = NewDRNG(password, realm)
	} else {
		return nil, errors.New("generating keys without strong seed is not allowed")
	}

	return rng, nil
}

func GetPass(password, realm string, seed []byte, spec *PasswordSpec) (string, error) {
	rng, err := getReader(password, realm+"-pass", seed, true)
	if err != nil {
		return "", err
	}

	gen := &KeyGen{rng}
	return gen.GeneratePassword(spec)
}
```

```go
func passKey(password, realm string) []byte {
	return pbkdf2.Key([]byte(password), []byte(realm), 4096, 32, sha256.New)
}

func NewDRNG(password, realm string) io.Reader {
	block, _ := aes.NewCipher(passKey(password, realm))
	stream := cipher.NewCTR(block, make([]byte, 16))

	return cipher.StreamReader{S: stream, R: devZero{}}
}
```

```go
func NewDRNGwithSeed(password, realm string, seed []byte) (io.Reader, error) {
	uSeed, err := unwrapSeed(password, seed)
	if err != nil {
		return nil, err
	}

	// will reuse some of the public seed info
	salt := make([]byte, 12+16)
	copy(salt[:12], uSeed[:12])
	copy(salt[12:], uSeed[len(uSeed)-16:])

	hkdf := hkdf.New(sha256.New, uSeed, salt, []byte(realm))
	rngSeed := make([]byte, 32)
	_, err = io.ReadFull(hkdf, rngSeed)
	if err != nil {
		return nil, err
	}

	block, _ := aes.NewCipher(rngSeed)
	stream := cipher.NewCTR(block, make([]byte, 16))

	return cipher.StreamReader{S: stream, R: devZero{}}, nil
}
```

```go
func (spec *PasswordSpec) Compliant(password string) bool {
	var upper, lower, digits, special int
	for _, c := range password {
		if unicode.IsUpper(c) {
			upper++
		}

		if unicode.IsLower(c) {
			lower++
		}

		if unicode.IsDigit(c) {
			digits++
		}

		if unicode.IsSymbol(c) || unicode.IsPunct(c) {
			if spec.AllowedSpecial == "" {
				special++
			} else {
				if strings.ContainsRune(spec.AllowedSpecial, c) {
					special++
				} else {
					return false
				}
			}
		}
	}

	if !allowed(upper, spec.Upper) || !allowed(lower, spec.Lower) || !allowed(digits, spec.Digits) || !allowed(special, spec.Special) {
		return false
	}

	return true
}
```
