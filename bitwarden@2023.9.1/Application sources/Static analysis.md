## Static Analysis

Find a crucial class: CryptoFunctionService

```typescript
export abstract class CryptoFunctionService {
  pbkdf2: (
    password: string | Uint8Array,
    salt: string | Uint8Array,
    algorithm: "sha256" | "sha512",
    iterations: number
  ) => Promise<Uint8Array>;
  argon2: (
    password: string | Uint8Array,
    salt: string | Uint8Array,
    iterations: number,
    memory: number,
    parallelism: number
  ) => Promise<Uint8Array>;
  hkdf: (
    ikm: Uint8Array,
    salt: string | Uint8Array,
    info: string | Uint8Array,
    outputByteSize: number,
    algorithm: "sha256" | "sha512"
  ) => Promise<Uint8Array>;
  hkdfExpand: (
    prk: Uint8Array,
    info: string | Uint8Array,
    outputByteSize: number,
    algorithm: "sha256" | "sha512"
  ) => Promise<Uint8Array>;
  hash: (
    value: string | Uint8Array,
    algorithm: "sha1" | "sha256" | "sha512" | "md5"
  ) => Promise<Uint8Array>;
  hmac: (
    value: Uint8Array,
    key: Uint8Array,
    algorithm: "sha1" | "sha256" | "sha512"
  ) => Promise<Uint8Array>;
  compare: (a: Uint8Array, b: Uint8Array) => Promise<boolean>;
  hmacFast: (
    value: Uint8Array | string,
    key: Uint8Array | string,
    algorithm: "sha1" | "sha256" | "sha512"
  ) => Promise<Uint8Array | string>;
  compareFast: (a: Uint8Array | string, b: Uint8Array | string) => Promise<boolean>;
  aesEncrypt: (data: Uint8Array, iv: Uint8Array, key: Uint8Array) => Promise<Uint8Array>;
  aesDecryptFastParameters: (
    data: string,
    iv: string,
    mac: string,
    key: SymmetricCryptoKey
  ) => DecryptParameters<Uint8Array | string>;
  aesDecryptFast: (parameters: DecryptParameters<Uint8Array | string>) => Promise<string>;
  aesDecrypt: (data: Uint8Array, iv: Uint8Array, key: Uint8Array) => Promise<Uint8Array>;
  rsaEncrypt: (
    data: Uint8Array,
    publicKey: Uint8Array,
    algorithm: "sha1" | "sha256"
  ) => Promise<Uint8Array>;
  rsaDecrypt: (
    data: Uint8Array,
    privateKey: Uint8Array,
    algorithm: "sha1" | "sha256"
  ) => Promise<Uint8Array>;
  rsaExtractPublicKey: (privateKey: Uint8Array) => Promise<Uint8Array>;
  rsaGenerateKeyPair: (length: 1024 | 2048 | 4096) => Promise<[Uint8Array, Uint8Array]>;
  /**
   * Generates a key of the given length suitable for use in AES encryption
   */
  aesGenerateKey: (bitLength: 128 | 192 | 256 | 512) => Promise<CsprngArray>;
  /**
   * Generates a random array of bytes of the given length. Uses a cryptographically secure random number generator.
   *
   * Do not use this for generating encryption keys. Use aesGenerateKey or rsaGenerateKeyPair instead.
   */
  randomBytes: (length: number) => Promise<CsprngArray>;
}

```

clients\apps\desktop\desktop_native\src\biometric\windows.rs

```rust
fn encrypt(secret: &str, key_material: &KeyMaterial, iv_b64: &str) -> Result<String> {
    let iv = base64_engine
        .decode(iv_b64)?
        .try_into()
        .map_err(|e: Vec<_>| anyhow!("Expected length {}, got {}", 16, e.len()))?;

    let encrypted = crypto::encrypt_aes256(secret.as_bytes(), iv, key_material.derive_key()?)?;

    Ok(encrypted.to_string())
}

fn decrypt(secret: &CipherString, key_material: &KeyMaterial) -> Result<String> {
    if let CipherString::AesCbc256_B64 { iv, data } = secret {
        let decrypted = crypto::decrypt_aes256(&iv, &data, key_material.derive_key()?)?;

        Ok(String::from_utf8(decrypted)?)
    } else {
        Err(anyhow!("Invalid cipher string"))
    }
}
```

clients\apps\desktop\desktop_native\src\crypto\crypto.rs

```rust
pub fn decrypt_aes256(
    iv: &[u8; 16],
    data: &Vec<u8>,
    key: GenericArray<u8, U32>,
) -> Result<Vec<u8>> {
    let iv = GenericArray::from_slice(iv);
    let mut data = data.clone();
    let decrypted_key_slice = cbc::Decryptor::<aes::Aes256>::new(&key, iv)
        .decrypt_padded_mut::<Pkcs7>(&mut data)
        .map_err(|_| CryptoError::KeyDecrypt)?;

    // Data is decrypted in place and returns a subslice of the original Vec, to avoid cloning it, we truncate to the subslice length
    let decrypted_len = decrypted_key_slice.len();
    data.truncate(decrypted_len);

    Ok(data)
}

pub fn encrypt_aes256(
    data_dec: &[u8],
    iv: [u8; 16],
    key: GenericArray<u8, U32>,
) -> Result<CipherString> {
    let data = cbc::Encryptor::<aes::Aes256>::new(&key, &iv.into())
        .encrypt_padded_vec_mut::<Pkcs7>(data_dec);

    Ok(CipherString::AesCbc256_B64 { iv, data })
}
```

clients\libs\common\src\auth\services\device-trust-crypto.service.implementation.ts

```typescript
private async makeDeviceKey(): Promise<DeviceKey> {
    // Create 512-bit device key
    const randomBytes: CsprngArray = await this.cryptoFunctionService.aesGenerateKey(512);
    const deviceKey = new SymmetricCryptoKey(randomBytes) as DeviceKey;

    return deviceKey;
  }
```

clients\libs\common\src\tools\send\services\send.service.ts

```typescript
async encrypt(
    model: SendView,
    file: File | ArrayBuffer,
    password: string,
    key?: SymmetricCryptoKey
  ): Promise<[Send, EncArrayBuffer]> {
    let fileData: EncArrayBuffer = null;
    const send = new Send();
    send.id = model.id;
    send.type = model.type;
    send.disabled = model.disabled;
    send.hideEmail = model.hideEmail;
    send.maxAccessCount = model.maxAccessCount;
    if (model.key == null) {
      model.key = await this.cryptoFunctionService.aesGenerateKey(128);
      model.cryptoKey = await this.cryptoService.makeSendKey(model.key);
    }
    if (password != null) {
      const passwordHash = await this.cryptoFunctionService.pbkdf2(
        password,
        model.key,
        "sha256",
        SEND_KDF_ITERATIONS
      );
      send.password = Utils.fromBufferToB64(passwordHash);
    }
    send.key = await this.cryptoService.encrypt(model.key, key);
    send.name = await this.cryptoService.encrypt(model.name, model.cryptoKey);
    send.notes = await this.cryptoService.encrypt(model.notes, model.cryptoKey);
    if (send.type === SendType.Text) {
      send.text = new SendText();
      send.text.text = await this.cryptoService.encrypt(model.text.text, model.cryptoKey);
      send.text.hidden = model.text.hidden;
    } else if (send.type === SendType.File) {
      send.file = new SendFile();
      if (file != null) {
        if (file instanceof ArrayBuffer) {
          const [name, data] = await this.encryptFileData(
            model.file.fileName,
            file,
            model.cryptoKey
          );
          send.file.fileName = name;
          fileData = data;
        } else {
          fileData = await this.parseFile(send, file, model.cryptoKey);
        }
      }
    }

    return [send, fileData];
  }
```

clients\libs\common\src\platform\services\web-crypto-function.service.ts

```typescript
async aesEncrypt(data: Uint8Array, iv: Uint8Array, key: Uint8Array): Promise<Uint8Array> {
    const impKey = await this.subtle.importKey("raw", key, { name: "AES-CBC" } as any, false, [
      "encrypt",
    ]);
    const buffer = await this.subtle.encrypt({ name: "AES-CBC", iv: iv }, impKey, data);
    return new Uint8Array(buffer);
  }
```

clients\apps\browser\src\platform\services\key-generation.service.ts

```typescript
export class KeyGenerationService implements AbstractKeyGenerationService {
  constructor(private cryptoFunctionService: CryptoFunctionService) {}

  async makeEphemeralKey(numBytes = 16): Promise<SymmetricCryptoKey> {
    const keyMaterial = await this.cryptoFunctionService.randomBytes(numBytes);
    const key = await this.cryptoFunctionService.hkdf(
      keyMaterial,
      "bitwarden-ephemeral",
      "ephemeral",
      64,
      "sha256"
    );
    return new SymmetricCryptoKey(key);
  }
}
```

clients\libs\common\src\platform\abstractions\crypto-function.service.ts

```typescript
  pbkdf2: (
    password: string | Uint8Array,
    salt: string | Uint8Array,
    algorithm: "sha256" | "sha512",
    iterations: number
  ) => Promise<Uint8Array>;
```

clients\apps\web\src\app\auth\migrate-encryption\migrate-legacy-encryption.service.spec.ts

```typescript
describe("createNewUserKey", () => {
    it("validates master password and legacy user", async () => {
      const mockMasterPassword = "mockMasterPassword";
      const mockRandomBytes = new Uint8Array(64) as CsprngArray;
      const mockMasterKey = new SymmetricCryptoKey(mockRandomBytes) as MasterKey;
      stateService.getEmail.mockResolvedValue("mockEmail");
      stateService.getKdfType.mockResolvedValue(KdfType.PBKDF2_SHA256);
      stateService.getKdfConfig.mockResolvedValue({ iterations: 100000 });
      cryptoService.makeMasterKey.mockResolvedValue(mockMasterKey);
      cryptoService.isLegacyUser.mockResolvedValue(false);

      await expect(
        migrateFromLegacyEncryptionService.createNewUserKey(mockMasterPassword)
      ).rejects.toThrowError("Invalid master password or user may not be legacy");
    });
  });
```

clients\apps\web\src\app\settings\change-kdf\change-kdf.component.ts

```typescript
async onChangeKdf(newValue: KdfType) {
    if (newValue === KdfType.PBKDF2_SHA256) {
      this.kdfConfig = new KdfConfig(DEFAULT_PBKDF2_ITERATIONS);
    } else if (newValue === KdfType.Argon2id) {
      this.kdfConfig = new KdfConfig(
        DEFAULT_ARGON2_ITERATIONS,
        DEFAULT_ARGON2_MEMORY,
        DEFAULT_ARGON2_PARALLELISM
      );
    } else {
      throw new Error("Unknown KDF type.");
    }
  }
```

clients\libs\common\src\enums\kdf-type.enum.ts

```typescript
export enum KdfType {
  PBKDF2_SHA256 = 0,
  Argon2id = 1,
}

export const DEFAULT_ARGON2_MEMORY = 64;
export const DEFAULT_ARGON2_PARALLELISM = 4;
export const DEFAULT_ARGON2_ITERATIONS = 3;

export const DEFAULT_KDF_TYPE = KdfType.PBKDF2_SHA256;
export const DEFAULT_PBKDF2_ITERATIONS = 600000;
export const DEFAULT_KDF_CONFIG = new KdfConfig(DEFAULT_PBKDF2_ITERATIONS);
export const SEND_KDF_ITERATIONS = 100000;
```

clients\libs\common\src\platform\services\crypto.service.ts

```typescript
async hashMasterKey(
    password: string,
    key: MasterKey,
    hashPurpose?: HashPurpose
  ): Promise<string> {
    key ||= await this.getMasterKey();

    if (password == null || key == null) {
      throw new Error("Invalid parameters.");
    }

    const iterations = hashPurpose === HashPurpose.LocalAuthorization ? 2 : 1;
    const hash = await this.cryptoFunctionService.pbkdf2(key.key, password, "sha256", iterations);
    return Utils.fromBufferToB64(hash);
  }
```

clients\libs\common\src\platform\services\crypto.service.ts

```typescript
private async makeKey(
    password: string,
    salt: string,
    kdf: KdfType,
    kdfConfig: KdfConfig
  ): Promise<SymmetricCryptoKey> {
    let key: Uint8Array = null;
    if (kdf == null || kdf === KdfType.PBKDF2_SHA256) {
      if (kdfConfig.iterations == null) {
        kdfConfig.iterations = 5000;
      } else if (kdfConfig.iterations < 5000) {
        throw new Error("PBKDF2 iteration minimum is 5000.");
      }
      key = await this.cryptoFunctionService.pbkdf2(password, salt, "sha256", kdfConfig.iterations);
    } else if (kdf == KdfType.Argon2id) {
      if (kdfConfig.iterations == null) {
        kdfConfig.iterations = DEFAULT_ARGON2_ITERATIONS;
      } else if (kdfConfig.iterations < 2) {
        throw new Error("Argon2 iteration minimum is 2.");
      }

      if (kdfConfig.memory == null) {
        kdfConfig.memory = DEFAULT_ARGON2_MEMORY;
      } else if (kdfConfig.memory < 16) {
        throw new Error("Argon2 memory minimum is 16 MB");
      } else if (kdfConfig.memory > 1024) {
        throw new Error("Argon2 memory maximum is 1024 MB");
      }

      if (kdfConfig.parallelism == null) {
        kdfConfig.parallelism = DEFAULT_ARGON2_PARALLELISM;
      } else if (kdfConfig.parallelism < 1) {
        throw new Error("Argon2 parallelism minimum is 1.");
      }

      const saltHash = await this.cryptoFunctionService.hash(salt, "sha256");
      key = await this.cryptoFunctionService.argon2(
        password,
        saltHash,
        kdfConfig.iterations,
        kdfConfig.memory * 1024, // convert to KiB from MiB
        kdfConfig.parallelism
      );
    } else {
      throw new Error("Unknown Kdf.");
    }
    return new SymmetricCryptoKey(key);
  }
```

clients\libs\common\src\platform\services\web-crypto-function.service.ts

```typescript
async pbkdf2(
    password: string | Uint8Array,
    salt: string | Uint8Array,
    algorithm: "sha256" | "sha512",
    iterations: number
  ): Promise<Uint8Array> {
    const wcLen = algorithm === "sha256" ? 256 : 512;
    const passwordBuf = this.toBuf(password);
    const saltBuf = this.toBuf(salt);

    const pbkdf2Params: Pbkdf2Params = {
      name: "PBKDF2",
      salt: saltBuf,
      iterations: iterations,
      hash: { name: this.toWebCryptoAlgorithm(algorithm) },
    };

    const impKey = await this.subtle.importKey(
      "raw",
      passwordBuf,
      { name: "PBKDF2" } as any,
      false,
      ["deriveBits"]
    );
    const buffer = await this.subtle.deriveBits(pbkdf2Params as any, impKey, wcLen);
    return new Uint8Array(buffer);
  }
```

clients\libs\node\src\services\node-crypto-function.service.ts

```typescript
pbkdf2(
    password: string | Uint8Array,
    salt: string | Uint8Array,
    algorithm: "sha256" | "sha512",
    iterations: number
  ): Promise<Uint8Array> {
    const len = algorithm === "sha256" ? 32 : 64;
    const nodePassword = this.toNodeValue(password);
    const nodeSalt = this.toNodeValue(salt);
    return new Promise<Uint8Array>((resolve, reject) => {
      crypto.pbkdf2(nodePassword, nodeSalt, iterations, len, algorithm, (error, key) => {
        if (error != null) {
          reject(error);
        } else {
          resolve(this.toUint8Buffer(key));
        }
      });
    });
  }
```

server\src\Identity\Controllers\AccountsController.cs

```typescript
public async Task<PreloginResponseModel> PostPrelogin([FromBody] PreloginRequestModel model)
    {
        var kdfInformation = await _userRepository.GetKdfInformationByEmailAsync(model.Email);
        if (kdfInformation == null)
        {
            kdfInformation = new UserKdfInformation
            {
                Kdf = KdfType.PBKDF2_SHA256,
                KdfIterations = 100000,
            };
        }
        return new PreloginResponseModel(kdfInformation);
    }
```

clients\libs\exporter\src\vault-export\services\vault-export.service.ts

```typescript
async getPasswordProtectedExport(password: string, organizationId?: string): Promise<string> {
    const clearText = organizationId
      ? await this.getOrganizationExport(organizationId, "json")
      : await this.getExport("json");

    const kdfType: KdfType = await this.stateService.getKdfType();
    const kdfConfig: KdfConfig = await this.stateService.getKdfConfig();

    const salt = Utils.fromBufferToB64(await this.cryptoFunctionService.randomBytes(16));
    const key = await this.cryptoService.makePinKey(password, salt, kdfType, kdfConfig);

    const encKeyValidation = await this.cryptoService.encrypt(Utils.newGuid(), key);
    const encText = await this.cryptoService.encrypt(clearText, key);

    const jsonDoc: BitwardenPasswordProtectedFileFormat = {
      encrypted: true,
      passwordProtected: true,
      salt: salt,
      kdfType: kdfType,
      kdfIterations: kdfConfig.iterations,
      kdfMemory: kdfConfig.memory,
      kdfParallelism: kdfConfig.parallelism,
      encKeyValidation_DO_NOT_EDIT: encKeyValidation.encryptedString,
      data: encText.encryptedString,
    };

    return JSON.stringify(jsonDoc, null, "  ");
  }
```

clients\libs\common\src\types\csprng.d.ts

```typescript
import { Opaque } from "type-fest";

// You would typically use these types when you want to create a type that
// represents an array or string value generated from a
// cryptographic secure pseudorandom number generator (CSPRNG)

type CsprngArray = Opaque<Uint8Array, "CSPRNG">;

type CsprngString = Opaque<string, "CSPRNG">;
```

clients\libs\node\src\services\node-crypto-function.service.ts

```typescript
randomBytes(length: number): Promise<CsprngArray> {
    return new Promise<CsprngArray>((resolve, reject) => {
      crypto.randomBytes(length, (error, bytes) => {
        if (error != null) {
          reject(error);
        } else {
          resolve(this.toUint8Buffer(bytes) as CsprngArray);
        }
      });
    });
  }
```
