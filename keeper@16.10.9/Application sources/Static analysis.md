## Static Analysis

keeper-vault-8f4d05437bd4728523a4.js

```javascript
return async function(e, n, s) {
                    if (await o) {
                        console.log("web crypto pbkdf2");
                        try {
                            const o = await (async(e,n,o)=>{
                                try {
                                    const a = i.Z.utf8_to_bytes(e)
                                      , s = await crypto.subtle.importKey("raw", a, "PBKDF2", !1, ["deriveBits"])
                                      , c = {
                                        name: "PBKDF2",
                                        salt: n,
                                        iterations: o,
                                        hash: {
                                            name: r
                                        }
                                    };
                                    return crypto.subtle.deriveBits(c, s, 8 * t)
                                } catch (a) {
                                    throw console.error(a),
                                    a
                                }
                            }
                            )(e, n, s);
                            return i.Z.bytes_to_base64urlsafe(new Uint8Array(o))
                        } catch (c) {
                            return console.log(new Error(c)),
                            a(e, n, s)
                        }
                    }
                    return console.log("asm crypto pbkdf2"),
                    a(e, n, s)
                }
            }
```

```javascript
authVerifier: (e,t,r)=>new Promise(((n,o)=>{
                    if (null == e)
                        throw new Error("Password was null");
                    null == t && (t = i.Z.random_salt());
                    const a = i.Z.base64urlsafe_to_bytes(t);
                    Promise.resolve().then((()=>O.PBKDF2(e, a, r))).then((e=>{
                        if (!e)
                            throw new Error("Derived key was null");
                        const t = new Uint8Array([1])
                          , n = new ArrayBuffer(4);
                        new DataView(n).setUint32(0, r, !1);
                        const o = new Uint8Array(n).subarray(1)
                          , s = i.Z.base64urlsafe_to_bytes(e)
                          , c = new Uint8Array(t.length + o.length + a.length + s.length);
                        var l = 0;
                        c.set(t, l),
                        l += t.length,
                        c.set(o, l),
                        l += o.length,
                        c.set(a, l),
                        l += a.length,
                        c.set(s, l);
                        return i.Z.bytes_to_base64urlsafe(c)
                    }
                    )).then(n).catch(o)
                }
```

```javascript
authVerifierV2: ({password: e, salt: t, iterations: r})=>new Promise(((n,o)=>{
                    if (!e)
                        throw new Error("Password was null or undefined");
                    if (!(t instanceof Uint8Array))
                        throw new Error("Salt was not a Uint8Array");
                    if (!r)
                        throw new Error("Iterations was not 1 or greater");
                    if ("number" != typeof r)
                        throw new Error("Iterations was not a number");
                    return Promise.resolve().then((()=>O.PBKDF2(e, t, r))).then((e=>{
                        const t = i.Z.base64urlsafe_to_bytes(e);
                        return i.Z.sha256_to_bytes(t)
                    }
                    )).then(n).catch(o)
                }
```

```javascript
authVerifierV3: async({password: e, salt: t, iterations: r}={})=>{
                    if (!t)
                        throw new Error("Salt was null or undefined");
                    if ("string" == typeof t && (t = i.Z.base64urlsafe_to_bytes(t)),
                    null == e)
                        throw new Error("Password was null or undefined");
                    if (!r)
                        throw new Error("Iterations must be 1 or greater");
                    const n = "data_key"
                      , o = await O.PBKDF2_SHA512(n + e, t, r)
                      , a = i.Z.base64urlsafe_to_bytes(o);
                    return i.Z.hmac_sha256_to_bytes(n, a)
                }
```

```javascript
decryptDataClientKey: async e=>{
                    const {encryptedKey: t} = e;
                    if (!t)
                        throw new Error("Encrypted key was null or undefined");
                    const r = await (async()=>{
                        if (e.decryptionKey)
                            return e.decryptionKey;
                        const {password: t, salt: r, iterations: n} = e;
                        return await O.authVerifierV3({
                            password: t,
                            salt: r,
                            iterations: n
                        })
                    }
                    )();
                    return await g.h.decryptToBytes(t, r)
                }
```

```javascript
decryptDataKey: async(e,t)=>{
                    const r = (()=>{
                        if (e) {
                            if ("string" == typeof e)
                                return i.Z.base64urlsafe_to_bytes(e);
                            if (e instanceof Uint8Array)
                                return e;
                            throw new Error("Unexpected encryption params type.")
                        }
                    }
                    )();
                    if (!r || 100 !== r.length)
                        throw new i.Z.CryptoException(null,"size_wrong","Data key decryption error, encryption parameters are the wrong size.");
                    if (1 !== r[0])
                        throw new i.Z.CryptoException(null,"unsupported_version","Data key decryption error, unsupported version number.");
                    const n = r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength)
                      , o = 16777215 & new DataView(n,0,4).getUint32(0, !1);
                    if (o < 1e3)
                        throw new i.Z.CryptoException(null,"iterations_low","Data key decryption error, interations too low (" + o + ").");
                    const a = r.subarray(4, 20)
                      , s = await O.PBKDF2(t, a, o)
                      , c = i.Z.base64urlsafe_to_bytes(s)
                      , l = m.Z.decryptNoPadding(r.subarray(20), c);
                    if (!l || 64 !== l.length)
                        throw new i.Z.CryptoException(null,"key_size_wrong","Data key decryption error, key size incorrect.");
                    const d = l.subarray(0, 32)
                      , u = l.subarray(32);
                    if (i.Z.bytes_to_hex(d) !== i.Z.bytes_to_hex(u))
                        throw new i.Z.CryptoException(null,"key_mismatch","Data key decryption error, key mismatch.");
                    return d
                }
```

```javascript
encryptDataClientKey: async e=>{
                    const {key: t} = e;
                    if (!t)
                        throw new Error("Key was null or undefined");
                    const r = await (async()=>{
                        if (e.encryptionKey)
                            return e.encryptionKey;
                        const {password: t, salt: r, iterations: n, key: o} = e;
                        return await O.authVerifierV3({
                            password: t,
                            salt: r,
                            iterations: n
                        })
                    }
                    )();
                    return await g.h.encryptToBytes(t, r)
                }
```

```javascript
encryptDataKey: ({password: e, iterations: t, dataKey: r})=>new Promise(((n,o)=>{
                    if (null == r)
                        throw new Error("Data key was null or empty");
                    if (!(r instanceof Uint8Array))
                        throw new Error("Data key was invalid type: " + typeof r);
                    const a = i.Z.random_salt()
                      , s = i.Z.base64urlsafe_to_bytes(a);
                    Promise.resolve().then((()=>O.PBKDF2(e, s, t))).then((e=>{
                        const n = new Uint8Array(64);
                        n.set(r, 0),
                        n.set(r, 32);
                        const o = m.Z.encryptNoPadding(n, i.Z.base64urlsafe_to_bytes(e))
                          , a = new Uint8Array([1])
                          , c = new ArrayBuffer(4);
                        new DataView(c).setUint32(0, t, !1);
                        const l = new Uint8Array(c).subarray(1)
                          , d = new Uint8Array(a.length + l.length + s.length + o.length);
                        let u = 0;
                        d.set(a, u),
                        u += a.length,
                        d.set(l, u),
                        u += l.length,
                        d.set(s, u),
                        u += s.length,
                        d.set(o, u);
                        return i.Z.bytes_to_base64urlsafe(d)
                    }
                    )).then(n).catch(o)
                }
```

```javascript
PBKDF2: function() {
                    const e = d();
                    return o()((function(t, r, n) {
                        if (!n || n < 1)
                            throw new Error("Invalid iterations");
                        if (!(r instanceof Uint8Array))
                            throw new Error("Expected salt to be of type Uint8Array.");
                        return !!c.Z.count ? c.Z.postMessageToWorker({
                            cmd: "pbkdf2-hmac-sha-256",
                            password: t,
                            salt: r,
                            iterations: n
                        }).catch((function(o) {
                            return console.log(new Error(o)),
                            e(t, r, n)
                        }
                        )) : e(t, r, n)
                    }
                    ))
                }()
```
