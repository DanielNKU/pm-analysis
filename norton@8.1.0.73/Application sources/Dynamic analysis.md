## Dynamic Analysis

When locking out the password vault, 

```javascript
const $ = ()=>{
                if (z) {
                    W(P.Status.verifying),
                    K(!1);
                    const e = E.default.utils.obfuscatePassword(U, z);
                    if (F ? C.default.sendVaultUnlockUIEventTelemetry(C.action.CLICK, C.elementId.VAULT_UNLOCK_UNLOCK) : C.default.sendUnlockLoginUIEventTelemetry(C.action.CLICK, C.elementId.LOGIN_UNLOCK_UNLOCK),
                    !0 === N) {
                        const e = E.default.utils.obfuscatePassword(U, z);
                        y.messenger.publish(y.MESSAGES.DASHBOARD_MESSAGES.VERIFY_PASSWORD, e, (e=>{
                            k(e) && !0 === e ? (W(P.Status.verificationDone),
                            M(U)) : W(P.Status.errorNotification)
                        }
                        ))
                    } else
                        C.default.sendUnlockLoginUIEventTelemetry(C.action.CLICK, C.elementId.LOGIN_UNLOCK_UNLOCK),
                        y.messenger.publish(y.MESSAGES.DASHBOARD_MESSAGES.UNLOCK_VAULT, {
                            password: e,
                            openVaultUI: F
                        }, (e=>{
                            e.state.state === b.default.VAULT_STATE.CLIENT_UNAUTHORIZED ? W(P.Status.errorNotification) : W(P.Status.verificationDone)
                        }
                        ))
                }
            }
              , Z = e=>{
                E.default.utils.isTrustedEvent(e) && e.preventDefault()
            }
```

```javascript
a(this, "obfuscatePassword", (function(t, r) {
                                            if (!1 === e.isString(t))
                                                throw Error("password  cannot be null and has to be a string");
                                            if (!1 === e.isString(r))
                                                throw Error("obfuscationKey  cannot be null and has to be a string");
                                            return t = new Uint8Array(e.stringUTF16LEToByteArray(t)),
                                            r = new Uint8Array(e.stringUTF16LEToByteArray(r)),
                                            r = e._obfuscateData(t, r),
                                            e.arrayBufferToStringUTF16LE(r)
                                        }
                                        ))
```

```javascript
e.prototype._obfuscateData = function(e, t) {
                                        if (this.isNil(e) || this.isNil(t))
                                            return null;
                                        e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                                        t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                        for (var r = e.byteLength, n = new Uint8Array(r), a = 0; a < r; a++)
                                            n[a] = e[a] ^ t[a % r];
                                        return n
                                    }
```

When logging in

```javascript
var HASH_FUNCTIONS = {
    "COLP_HASH": function(entry) {
        var base64EncodedHash = Cryptography.base64EncodeWordArray(Cryptography.hash("MD5", Cryptography.stringToUtf8WordArray(entry.getPassword()), null, 1));
        var saltedHashWordArray = Cryptography.stringToUtf8WordArray(entry.getSalt().concat(base64EncodedHash));
        entry.setPasswordHash(Cryptography.hash("MD5", saltedHashWordArray, null, 1))
    },
    "DISTRIBUTED_HASH": function(entry) {
        var saltedPasswordWordArray = Cryptography.stringToUtf8WordArray(entry.getSalt() + entry.getPassword());
        var passwordHash = Cryptography.hash("SHA256", saltedPasswordWordArray, null, entry.iterations);
        entry.setPasswordHash(passwordHash);
        var newPasswordHash = entry.getNewSalt() == entry.getSalt() ? passwordHash : Cryptography.hash("SHA256", Cryptography.stringToUtf8WordArray(entry.getNewSalt() + entry.getPassword()), null, entry.iterations);
        $("#newPasswordHash").data("hash", newPasswordHash)
    },
    "NSL_HASH": function(entry) {
        var saltWordArray = Cryptography.base64DecodeWordArray(decodeURIComponent(entry.getSalt()));
        var guidWordArray = Cryptography.stringToUtf8WordArray(entry.getGuid());
        var passwordWordArray = Cryptography.stringToUtf8WordArray(entry.getPassword());
        entry.setPasswordHash(Cryptography.hash("SHA512", saltWordArray.concat(guidWordArray).concat(passwordWordArray), null, 20002))
    }
};
```

Finding:

1. The password is obfuscated with a value "0f9b86a4-baf4-4960-d46c-983f0d52557c", and this value changes whenever I fresh the page. The official page says that Norton adopt somewhat "challenge mechanism", so we predict that this value is challenged by the server.
