## Static Analysis

vendor-other-f65d2d8c5439c29de96f.min.js

```typescript
i.misc.pbkdf2 = function(e, t, r, n, o) {
            if (r = r || 1e4,
            0 > n || 0 > r)
                throw new i.exception.invalid("invalid params to pbkdf2");
            "string" == typeof e && (e = i.codec.utf8String.toBits(e)),
            "string" == typeof t && (t = i.codec.utf8String.toBits(t)),
            e = new (o = o || i.misc.hmac)(e);
            var a, s, u, c, l = [], d = i.bitArray;
            for (c = 1; 32 * l.length < (n || 1); c++) {
                for (o = a = e.encrypt(d.concat(t, [c])),
                s = 1; s < r; s++)
                    for (a = e.encrypt(a),
                    u = 0; u < a.length; u++)
                        o[u] ^= a[u];
                l = l.concat(o)
            }
            return n && (l = d.clamp(l, n)),
            l
        }
```

```rust
pa: function(e, t, r, n) {
                r = r || {},
                n = n || {};
                var o, a = i.json, s = a.w({
                    iv: i.random.randomWords(4, 0)
                }, a.defaults);
                if (a.w(s, r),
                r = s.adata,
                "string" == typeof s.salt && (s.salt = i.codec.base64.toBits(s.salt)),
                "string" == typeof s.iv && (s.iv = i.codec.base64.toBits(s.iv)),
                !i.mode[s.mode] || !i.cipher[s.cipher] || "string" == typeof e && 100 >= s.iter || 64 !== s.ts && 96 !== s.ts && 128 !== s.ts || 128 !== s.ks && 192 !== s.ks && 256 !== s.ks || 2 > s.iv.length || 4 < s.iv.length)
                    throw new i.exception.invalid("json encrypt: invalid parameters");
                return "string" == typeof e ? (e = (o = i.misc.cachedPbkdf2(e, s)).key.slice(0, s.ks / 32),
                s.salt = o.salt) : i.ecc && e instanceof i.ecc.elGamal.publicKey && (o = e.kem(),
                s.kemtag = o.tag,
                e = o.key.slice(0, s.ks / 32)),
                "string" == typeof t && (t = i.codec.utf8String.toBits(t)),
                "string" == typeof r && (s.adata = r = i.codec.utf8String.toBits(r)),
                o = new i.cipher[s.cipher](e),
                a.w(n, s),
                n.key = e,
                s.ct = "ccm" === s.mode && i.arrayBuffer && i.arrayBuffer.ccm && t instanceof ArrayBuffer ? i.arrayBuffer.ccm.encrypt(o, t, s.iv, r, s.ts) : i.mode[s.mode].encrypt(o, t, s.iv, r, s.ts),
                s
            }
```

```rust
oa: function(e, t, r, n) {
                r = r || {},
                n = n || {};
                var o, a, s = i.json;
                if (o = (t = s.w(s.w(s.w({}, s.defaults), t), r, !0)).adata,
                "string" == typeof t.salt && (t.salt = i.codec.base64.toBits(t.salt)),
                "string" == typeof t.iv && (t.iv = i.codec.base64.toBits(t.iv)),
                !i.mode[t.mode] || !i.cipher[t.cipher] || "string" == typeof e && 100 >= t.iter || 64 !== t.ts && 96 !== t.ts && 128 !== t.ts || 128 !== t.ks && 192 !== t.ks && 256 !== t.ks || !t.iv || 2 > t.iv.length || 4 < t.iv.length)
                    throw new i.exception.invalid("json decrypt: invalid parameters");
                return "string" == typeof e ? (e = (a = i.misc.cachedPbkdf2(e, t)).key.slice(0, t.ks / 32),
                t.salt = a.salt) : i.ecc && e instanceof i.ecc.elGamal.secretKey && (e = e.unkem(i.codec.base64.toBits(t.kemtag)).slice(0, t.ks / 32)),
                "string" == typeof o && (o = i.codec.utf8String.toBits(o)),
                a = new i.cipher[t.cipher](e),
                o = "ccm" === t.mode && i.arrayBuffer && i.arrayBuffer.ccm && t.ct instanceof ArrayBuffer ? i.arrayBuffer.ccm.decrypt(a, t.ct, t.iv, t.tag, o, t.ts) : i.mode[t.mode].decrypt(a, t.ct, t.iv, o, t.ts),
                s.w(n, t),
                n.key = e,
                1 === r.raw ? o : i.codec.utf8String.fromBits(o)
            }
```

```typescript
i.misc.cachedPbkdf2 = function(e, t) {
            var r, n = i.misc.wa;
            return r = (t = t || {}).iter || 1e3,
            (r = (n = n[e] = n[e] || {})[r] = n[r] || {
                firstSalt: t.salt && t.salt.length ? t.salt.slice(0) : i.random.randomWords(2, 0)
            })[n = void 0 === t.salt ? r.firstSalt : t.salt] = r[n] || i.misc.pbkdf2(e, n, t.iter),
            {
                key: r[n].slice(0),
                salt: n.slice(0)
            }
        }
```

webapi-26a204f95ade73812153.min.js

```typescript
k = function(e, t, n, r, i) {
            return R(void 0, void 0, Promise, (function() {
                var a, s, c, l;
                return O(this, (function(f) {
                    switch (f.label) {
                    case 0:
                        if (r < 1e4)
                            throw new Error("PBKDF2 cannot operate with fewer than ".concat(1e4, " interations, ").concat(r, " was supplied."));
                        return a = (0,
                        o.str2ab)(t),
                        [4, u.subtle.importKey("raw", a, {
                            name: "PBKDF2"
                        }, !1, ["deriveBits"])];
                    case 1:
                        return s = f.sent(),
                        c = {
                            name: "PBKDF2",
                            salt: n,
                            iterations: r,
                            hash: {
                                name: e
                            }
                        },
                        [4, u.subtle.deriveBits(c, s, 8 * i)];
                    case 2:
                        return l = f.sent(),
                        [2, new Uint8Array(l)]
                    }
                }
                ))
            }
            ))
        }
```

```typescript
var se, ce = function(e, t) {
            return ee(void 0, void 0, Promise, (function() {
                var n;
                return te(this, (function(r) {
                    try {
                        return n = (0,
                        J.jL)(t),
                        [2, y.unsafePrimitives.rawPbkdf2UsingPbes2Alg(y.password_key_derivation_consts.PBES2_ALG_256, e, n, y.password_key_derivation_consts.ITERATIONS_100_000)]
                    } catch (e) {
                        throw new Error("token PBKDF2 failed: " + e)
                    }
                    return [2]
                }
                ))
            }
            ))
        }
```

```javascript
P = function(e, t) {
            return h(void 0, void 0, Promise, (function() {
                var n, r, i, o, a, s, c, l, f;
                return m(this, (function(d) {
                    switch (d.label) {
                    case 0:
                        return n = A(e),
                        r = n.email,
                        i = n.secretKey,
                        o = n.password,
                        a = u.base64urlToBytes(t.salt),
                        [4, y.unsafePrimitives.rawPbkdf2UsingPbes2Alg(t.alg, u.prehash(o), a, t.iterations)];
                    case 1:
                        return s = d.sent(),
                        [4, i.combineWithBytes(s)];
                    case 2:
                        return c = d.sent(),
                        (l = new p.hash.sha1).update(u.bytesToBits(a)),
                        l.update(p.hash.sha1.hash(r + ":" + u.bytesToHex(c))),
                        f = l.finalize(),
                        [2, p.codec.hex.fromBits(f)]
                    }
                }
                ))
            }
            ))
        }
```

webapi-26a204f95ade73812153.min.js

```javascript
function e(e, t) {
                this._PHANTOM_TYPE_DOMAIN_SEPARATOR = "B5_CRYPTO_PRIMITIVES_Aes256EncryptionResult",
                this.data = e,
                this.iv = t
            }
```

```javascript
 function e(e, t) {
                var n = this;
                this._PHANTOM_TYPE_DOMAIN_SEPARATOR = "B5_CRYPTO_PRIMITIVES_Aes256EncryptionKey",
                this.toJSON = a,
                this.encryptRaw = function(e, t) {
                    return void 0 === t && (t = void 0),
                    c(n, void 0, Promise, (function() {
                        var n, r, i, o;
                        return l(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                return [4, m()];
                            case 1:
                                return n = a.sent(),
                                r = {
                                    name: p,
                                    iv: n,
                                    tagLength: 128
                                },
                                void 0 !== t && (r.additionalData = t),
                                [4, u.subtle.encrypt(r, this.encryptionKey, e)];
                            case 2:
                                return i = a.sent(),
                                o = new Uint8Array(i),
                                [2, v.new({
                                    data: o,
                                    iv: n
                                })]
                            }
                        }
                        ))
                    }
                    ))
                }
```

```javascript
function e(e) {
                var t = this;
                this._PHANTOM_TYPE_DOMAIN_SEPARATOR = "B5_CRYPTO_PRIMITIVES_GENERALIZED_KEYS_JwebAes256EncryptionKey",
                this.toJSON = a,
                this.encryptRaw = function(e, n) {
                    return void 0 === n && (n = void 0),
                    b(t, void 0, Promise, (function() {
                        return g(this, (function(t) {
                            return [2, this.encryptionKey.encryptRaw(e, n)]
                        }
                        ))
                    }
                    ))
                }
```

```javascript
e.fromRawBytes = function(n, r) {
                return b(void 0, void 0, Promise, (function() {
                    var i, o;
                    return g(t, (function(t) {
                        switch (t.label) {
                        case 0:
                            return o = (i = e).fromAes256Key,
                            [4, h.fromRawBytes(n, r)];
                        case 1:
                            return [2, o.apply(i, [t.sent()])]
                        }
                    }
                    ))
                }
                ))
            }
```

```javascript
e.fromAes256Key = function(n) {
                return b(void 0, void 0, Promise, (function() {
                    return g(t, (function(t) {
                        return [2, new e(n)]
                    }
                    ))
                }
                ))
            }
```

```javascript
e.fromJwk = function(n) {
                return b(void 0, void 0, Promise, (function() {
                    var r, i;
                    return g(t, (function(t) {
                        switch (t.label) {
                        case 0:
                            return i = (r = e).fromAes256Key,
                            [4, h.fromJwk(n)];
                        case 1:
                            return [2, i.apply(r, [t.sent()])]
                        }
                    }
                    ))
                }
                ))
            }
```

```javascript
this.deriveAes256Key = function(e, t) {
                    return Te(n, void 0, Promise, (function() {
                        var n, r, i;
                        return Ae(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return [4, this.deriveExportableCryptoKey(e, {
                                    name: "AES-GCM",
                                    length: 256
                                }, ["encrypt", "decrypt"])];
                            case 1:
                                return n = o.sent(),
                                i = Uint8Array.bind,
                                [4, u.subtle.exportKey("raw", n)];
                            case 2:
                                return r = new (i.apply(Uint8Array, [void 0, o.sent()])),
                                [2, h.fromRawBytes(r, t)]
                            }
                        }
                        ))
                    }
                    ))
                }
```

```javascript
this.deriveAes256JwebKey = function(e) {
                    return Re(n, void 0, Promise, (function() {
                        var t, n;
                        return Oe(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return n = (t = C).fromAes256Key,
                                [4, this.hkdfKey.deriveAes256Key({
                                    hash: "SHA-384",
                                    info: (0,
                                    o.str2ab)(e.KEY_DOMAIN_SEPARATOR),
                                    salt: (0,
                                    o.str2ab)(this.kid)
                                }, this.kid)];
                            case 1:
                                return [2, n.apply(t, [r.sent()])]
                            }
                        }
                        ))
                    }
                    ))
                }
```

```javascript
this.encrypt = function(e, t) {
                    return Re(n, void 0, Promise, (function() {
                        var n, r, i;
                        return Oe(this, (function(u) {
                            switch (u.label) {
                            case 0:
                                return [4, this.deriveAes256JwebKey(e)];
                            case 1:
                                return n = u.sent(),
                                i = (r = n).encryptJweB,
                                [4, e.serialize(t)];
                            case 2:
                                return [2, i.apply(r, [u.sent(), (0,
                                o.str2ab)(e.AD_DOMAIN_SEPARATOR)])]
                            }
                        }
                        ))
                    }
                    ))
                }
```

```javascript
this.decrypt = function(e, t) {
                    return Re(n, void 0, Promise, (function() {
                        var n;
                        return Oe(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, this.deriveAes256JwebKey(e)];
                            case 1:
                                return [4, r.sent().decryptJweB(t, (0,
                                o.str2ab)(e.AD_DOMAIN_SEPARATOR))];
                            case 2:
                                return n = r.sent(),
                                [2, e.deserialize(n)]
                            }
                        }
                        ))
                    }
                    ))
                }
```

```javascript
this.encrypt = function(t) {
                    return u(c, void 0, Promise, (function() {
                        var n = this;
                        return a(this, (function(i) {
                            return [2, Promise.resolve().then((function() {
                                return u(n, void 0, void 0, (function() {
                                    var n, i, o = this;
                                    return a(this, (function(u) {
                                        if (t.length > 256)
                                            throw new Error("Plaintext is too large.");
                                        if (!this.jwk)
                                            throw new Error("Missing JWK encryption key.");
                                        if (!this.key)
                                            throw new Error("Missing encryption key.");
                                        if (this.jwk.alg === e.JWK_ALG_RSA_OAEP)
                                            i = e.JWK_ALG_RSA_OAEP,
                                            n = e.WC_ALG_RSA_OAEP;
                                        else {
                                            if (this.jwk.alg !== e.JWK_ALG_RSA_OAEP_256)
                                                throw new Error("Unsupported encryption alg");
                                            i = e.JWK_ALG_RSA_OAEP_256,
                                            n = e.WC_ALG_RSA_OAEP_256
                                        }
                                        return [2, r.crypto.subtle.encrypt(n, this.key, t).then((function(t) {
                                            var n = new Uint8Array(t)
                                              , u = r.bytesToBase64url(n);
                                            return {
                                                kid: o.uuid,
                                                enc: i,
                                                cty: e.CONTENT_TYPE,
                                                data: u
                                            }
                                        }
                                        ))]
                                    }
                                    ))
                                }
                                ))
                            }
                            )).catch(s("encrypt"))]
                        }
                        ))
                    }
                    ))
                }
```

```javascript
this.encrypt = function(e) {
                    return a(t, void 0, Promise, (function() {
                        var t, n, i, a, l;
                        return s(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                if (!this.key)
                                    throw new Error("Missing key");
                                if (!this.jwk || !this.jwk.alg)
                                    throw new Error("Missing JWK alg");
                                if (this.uuid === u.qm && !this.derivation)
                                    throw new Error("Missing derivation info for MUK");
                                return [4, (0,
                                o.n9)({
                                    key: this.key,
                                    plaintext: e
                                })];
                            case 1:
                                return t = s.sent(),
                                n = t.iv,
                                i = t.ciphertext,
                                a = t.tag,
                                l = r.concatUint8Arrays([i, a]),
                                [2, {
                                    kid: this.uuid,
                                    enc: this.jwk.alg,
                                    cty: c,
                                    iv: r.bytesToBase64url(n),
                                    data: r.bytesToBase64url(l)
                                }]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                this.decrypt = function(e) {
                    return a(t, void 0, Promise, (function() {
                        var t, n, i;
                        return s(this, (function(u) {
                            switch (u.label) {
                            case 0:
                                if (c !== e.cty)
                                    throw new Error("Unexpected content type");
                                if (e.kid !== this.uuid)
                                    throw new Error("Key IDs do not match");
                                if (!e.iv)
                                    throw new Error("Missing initialization vector");
                                if (!this.key)
                                    throw new Error("Missing key");
                                return t = (0,
                                o._w)(r.base64urlToBytes(e.data)),
                                n = t.ciphertext,
                                i = t.tag,
                                [4, (0,
                                o.au)({
                                    key: this.key,
                                    ciphertext: n,
                                    tag: i,
                                    iv: r.base64urlToBytes(e.iv)
                                })];
                            case 1:
                                return [2, u.sent()]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                this.encryptFile = function(e) {
                    return a(t, void 0, Promise, (function() {
                        var t, n, i, u;
                        return s(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                if (!this.key)
                                    throw new Error("Missing key");
                                if (!this.jwk || !this.jwk.alg)
                                    throw new Error("Missing JWK alg");
                                return [4, (0,
                                o.n9)({
                                    key: this.key,
                                    plaintext: e
                                })];
                            case 1:
                                return t = a.sent(),
                                n = t.iv,
                                i = t.ciphertext,
                                u = t.tag,
                                [2, {
                                    data: r.concatUint8Arrays([i, u]),
                                    iv: r.bytesToBase64url(n)
                                }]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                this.decryptFile = function(e) {
                    return a(t, void 0, Promise, (function() {
                        var t, n, i, u, a;
                        return s(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                if (t = e.data,
                                !(n = e.iv))
                                    throw new Error("Missing initialization vector");
                                if (!this.key)
                                    throw new Error("Missing key");
                                return i = (0,
                                o._w)(t),
                                u = i.ciphertext,
                                a = i.tag,
                                [4, (0,
                                o.au)({
                                    key: this.key,
                                    ciphertext: u,
                                    tag: a,
                                    iv: r.base64urlToBytes(n)
                                })];
                            case 1:
                                return [2, s.sent()]
                            }
                        }
                        ))
                    }
                    ))
                }
```
