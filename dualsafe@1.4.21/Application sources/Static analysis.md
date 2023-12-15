## Static Analysis

```javascript
aesEncrypt = exports.aesEncrypt = async function(data, encKey, macKey) {
            const keyOptions = {
                name: "AES-CBC"
            }
              , encOptions = {
                name: "AES-CBC",
                iv: new Uint8Array(16)
            };
```

```javascript
pbkdf2 = exports.pbkdf2 = async function(password, salt, iterations, length) {
            const importAlg = {
                name: "PBKDF2"
            }
              , deriveAlg = {
                name: "PBKDF2",
                salt,
                iterations,
                hash: {
                    name: "SHA-256"
                }
            }
              , aesOptions = {
                name: "AES-CBC",
                length
            };
            try {
                const importedKey = await self.crypto.subtle.importKey("raw", password, importAlg, !1, ["deriveKey"])
                  , derivedKey = await self.crypto.subtle.deriveKey(deriveAlg, importedKey, aesOptions, !0, ["encrypt"])
                  , exportedKey = await self.crypto.subtle.exportKey("raw", derivedKey);
                return new ByteData(exportedKey)
            } catch (err) {}
        }
```
