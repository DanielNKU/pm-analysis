## Static Analysis

chunk-vendors.a7b144bf.js

```typescript
 static async generateHashFromMasterPassword(t, e) {
                                const n = Object(r.prepareArgonSalt)(e)
                                  , i = await Object(r.generateHash)(t, n);
                                return {
                                    salt: i.salt,
                                    hash: i.hash
                                }
                            }
```

```javascript
 async generateKek() {
                                const t = window.crypto.getRandomValues(new Uint8Array(32))
                                  , e = window.crypto.getRandomValues(new Uint8Array(32))
                                  , n = await window.crypto.subtle.encrypt({
                                    name: "AES-GCM",
                                    iv: t
                                }, this.vaultKey, e)
                                  , i = await window.crypto.subtle.importKey("raw", e, "AES-GCM", !0, ["encrypt", "decrypt"])
                                  , {data: o, tag: s} = Object(r.getDataAndTagFromAES256)(n);
                                return {
                                    key: i,
                                    data: o,
                                    tag: s,
                                    iv: t
                                }
                            }
```

```javascript
async encryptPayload(t) {
                                const e = window.crypto.getRandomValues(new Uint8Array(32))
                                  , n = (new TextEncoder).encode(t)
                                  , i = await this.generateKek()
                                  , o = await window.crypto.subtle.encrypt({
                                    name: "AES-GCM",
                                    iv: e
                                }, i.key, n)
                                  , {data: s, tag: a} = Object(r.getDataAndTagFromAES256)(o)
                                  , u = {
                                    type: "symmetric_encryption",
                                    kek: Object(r.AesGcm256ToSuperFormatString)({
                                        data: i.data,
                                        tag: i.tag,
                                        iv: i.iv
                                    }),
                                    data: Object(r.AesGcm256ToSuperFormatString)({
                                        data: s,
                                        tag: a,
                                        iv: e
                                    })
                                };
                                return JSON.stringify(u)
                            }
                            async decryptPayload(t) {
                                const e = JSON.parse(t)
                                  , n = Object(r.parseStructure)(e.kek)
                                  , i = Object(r.parseStructure)(e.data)
                                  , o = Object(r.base64ToUint8Array)(n[1])
                                  , s = Object(r.concatArrayBuffer)(Object(r.base64ToUint8Array)(n[2]).buffer, Object(r.base64ToUint8Array)(n[3]).buffer)
                                  , a = Object(r.base64ToUint8Array)(i[1])
                                  , u = Object(r.concatArrayBuffer)(Object(r.base64ToUint8Array)(i[2]).buffer, Object(r.base64ToUint8Array)(i[3]).buffer)
                                  , h = await window.crypto.subtle.decrypt({
                                    name: "AES-GCM",
                                    iv: o
                                }, this.vaultKey, s)
                                  , l = await window.crypto.subtle.importKey("raw", h, "AES-GCM", !0, ["encrypt", "decrypt"])
                                  , c = await window.crypto.subtle.decrypt({
                                    name: "AES-GCM",
                                    iv: a
                                }, l, u);
                                return (new TextDecoder).decode(c)
                            }
                        }
                    }
```

```javascript
async generateVaultKey(t, e) {
                                this.vaultKey || (this.vaultKey = await window.crypto.subtle.generateKey({
                                    name: "AES-GCM",
                                    length: 256
                                }, !0, ["encrypt", "decrypt"]));
                                const n = await window.crypto.subtle.exportKey("raw", this.vaultKey);
                                return await Object(i.generateServiceKey)(n, t, e)
                            }
                            async setVaultKey(t, e, n) {
                                n && (this.signKey = n);
                                const r = await Object(i.setServiceKey)(t, e);
                                r && (this.vaultKey = await window.crypto.subtle.importKey("raw", r, "AES-GCM", !0, ["encrypt", "decrypt"]))
                            }
                            getVaultKey() {
                                return this.vaultKey
                            }
```

