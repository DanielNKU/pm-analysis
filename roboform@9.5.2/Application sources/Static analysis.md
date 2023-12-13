## Static Analysis

index.js?vvv=20230928142113

```typescript
    12716: function(e, t, r) {
        e.exports = function(e) {
            return function() {
                var t = e
                  , r = t.lib
                  , n = r.Base
                  , a = r.WordArray
                  , i = t.algo
                  , o = i.SHA1
                  , s = i.HMAC
                  , c = i.PBKDF2 = n.extend({
                    cfg: n.extend({
                        keySize: 4,
                        hasher: o,
                        iterations: 1
                    }),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e)
                    },
                    compute: function(e, t) {
                        for (var r = this.cfg, n = s.create(r.hasher, e), i = a.create(), o = a.create([1]), c = i.words, u = o.words, d = r.keySize, l = r.iterations; c.length < d; ) {
                            var p = n.update(t).finalize(o);
                            n.reset();
                            for (var m = p.words, f = m.length, h = p, b = 1; b < l; b++) {
                                h = n.finalize(h),
                                n.reset();
                                for (var g = h.words, v = 0; v < f; v++)
                                    m[v] ^= g[v]
                            }
                            i.concat(p),
                            u[0]++
                        }
                        return i.sigBytes = 4 * d,
                        i
                    }
                });
                t.PBKDF2 = function(e, t, r) {
                    return c.create(r).compute(e, t)
                }
            }(),
            e.PBKDF2
        }(r(65199), r(99527), r(97481))
    }
```

```javascript
o.encryptPrivateKeyInfo = function(e, t, r) {
            (r = r || {}).saltSize = r.saltSize || 8,
            r.count = r.count || 2048,
            r.algorithm = r.algorithm || "aes128",
            r.prfAlgorithm = r.prfAlgorithm || "sha1";
            var a, c, u, d = n.random.getBytesSync(r.saltSize), l = r.count, p = i.integerToDer(l);
            if (0 === r.algorithm.indexOf("aes") || "des" === r.algorithm) {
                var f, h, b;
                switch (r.algorithm) {
                case "aes128":
                    a = 16,
                    f = 16,
                    h = s["aes128-CBC"],
                    b = n.aes.createEncryptionCipher;
                    break;
                case "aes192":
                    a = 24,
                    f = 16,
                    h = s["aes192-CBC"],
                    b = n.aes.createEncryptionCipher;
                    break;
                case "aes256":
                    a = 32,
                    f = 16,
                    h = s["aes256-CBC"],
                    b = n.aes.createEncryptionCipher;
                    break;
                case "des":
                    a = 8,
                    f = 8,
                    h = s.desCBC,
                    b = n.des.createEncryptionCipher;
                    break;
                default:
                    throw (x = new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = r.algorithm,
                    x
                }
                var g = "hmacWith" + r.prfAlgorithm.toUpperCase()
                  , v = m(g)
                  , y = n.pkcs5.pbkdf2(t, d, l, a, v)
                  , C = n.random.getBytesSync(f);
                (_ = b(y)).start(C),
                _.update(i.toDer(e)),
                _.finish(),
                u = _.output.getBytes();
                var k = function(e, t, r, a) {
                    var s = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, e), i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, t.getBytes())]);
                    "hmacWithSHA1" !== a && s.value.push(i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, n.util.hexToBytes(r.toString(16))), i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(o.oids[a]).getBytes()), i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "")]));
                    return s
                }(d, p, a, g);
                c = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(s.pkcs5PBES2).getBytes()), i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(s.pkcs5PBKDF2).getBytes()), k]), i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(h).getBytes()), i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, C)])])])
            } else {
                var x;
                if ("3des" !== r.algorithm)
                    throw (x = new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = r.algorithm,
                    x;
                a = 24;
                var _, w = new n.util.ByteBuffer(d);
                y = o.pbe.generatePkcs12Key(t, w, 1, l, a),
                C = o.pbe.generatePkcs12Key(t, w, 2, l, a);
                (_ = n.des.createEncryptionCipher(y)).start(C),
                _.update(i.toDer(e)),
                _.finish(),
                u = _.output.getBytes(),
                c = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(s["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()), i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, d), i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, p.getBytes())])])
            }
            return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [c, i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, u)])
        }
```

```javascript
 o.pbe.getCipherForPBES2 = function(e, t, r) {
            var a, s = {}, c = [];
            if (!i.validate(t, u, s, c))
                throw (a = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.")).errors = c,
                a;
            if ((e = i.derToOid(s.kdfOid)) !== o.oids.pkcs5PBKDF2)
                throw (a = new Error("Cannot read encrypted private key. Unsupported key derivation function OID.")).oid = e,
                a.supportedOids = ["pkcs5PBKDF2"],
                a;
            if ((e = i.derToOid(s.encOid)) !== o.oids["aes128-CBC"] && e !== o.oids["aes192-CBC"] && e !== o.oids["aes256-CBC"] && e !== o.oids["des-EDE3-CBC"] && e !== o.oids.desCBC)
                throw (a = new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.")).oid = e,
                a.supportedOids = ["aes128-CBC", "aes192-CBC", "aes256-CBC", "des-EDE3-CBC", "desCBC"],
                a;
            var d, l, m = s.kdfSalt, f = n.util.createBuffer(s.kdfIterationCount);
            switch (f = f.getInt(f.length() << 3),
            o.oids[e]) {
            case "aes128-CBC":
                d = 16,
                l = n.aes.createDecryptionCipher;
                break;
            case "aes192-CBC":
                d = 24,
                l = n.aes.createDecryptionCipher;
                break;
            case "aes256-CBC":
                d = 32,
                l = n.aes.createDecryptionCipher;
                break;
            case "des-EDE3-CBC":
                d = 24,
                l = n.des.createDecryptionCipher;
                break;
            case "desCBC":
                d = 8,
                l = n.des.createDecryptionCipher
            }
            var h = p(s.prfOid)
              , b = n.pkcs5.pbkdf2(r, m, f, d, h)
              , g = s.encIv
              , v = l(b);
            return v.start(g),
            v
        }
```

```javascript
98960: function(e, t, r) {
        var n = r(3832);
        r(36607),
        r(28991),
        r(97116);
        var a, i = n.pkcs5 = n.pkcs5 || {};
        n.util.isNodejs && !n.options.usePureJavaScript && (a = r(25819)),
        e.exports = n.pbkdf2 = i.pbkdf2 = function(e, t, r, i, o, s) {
            if ("function" == typeof o && (s = o,
            o = null),
            n.util.isNodejs && !n.options.usePureJavaScript && a.pbkdf2 && (null === o || "object" != typeof o) && (a.pbkdf2Sync.length > 4 || !o || "sha1" === o))
                return "string" != typeof o && (o = "sha1"),
                e = Buffer.from(e, "binary"),
                t = Buffer.from(t, "binary"),
                s ? 4 === a.pbkdf2Sync.length ? a.pbkdf2(e, t, r, i, (function(e, t) {
                    if (e)
                        return s(e);
                    s(null, t.toString("binary"))
                }
                )) : a.pbkdf2(e, t, r, i, o, (function(e, t) {
                    if (e)
                        return s(e);
                    s(null, t.toString("binary"))
                }
                )) : 4 === a.pbkdf2Sync.length ? a.pbkdf2Sync(e, t, r, i).toString("binary") : a.pbkdf2Sync(e, t, r, i, o).toString("binary");
            if (null == o && (o = "sha1"),
            "string" == typeof o) {
                if (!(o in n.md.algorithms))
                    throw new Error("Unknown hash algorithm: " + o);
                o = n.md[o].create()
            }
            var c = o.digestLength;
            if (i > 4294967295 * c) {
                var u = new Error("Derived key is too long.");
                if (s)
                    return s(u);
                throw u
            }
            var d = Math.ceil(i / c)
              , l = i - (d - 1) * c
              , p = n.hmac.create();
            p.start(o, e);
            var m, f, h, b = "";
            if (!s) {
                for (var g = 1; g <= d; ++g) {
                    p.start(null, null),
                    p.update(t),
                    p.update(n.util.int32ToBytes(g)),
                    m = h = p.digest().getBytes();
                    for (var v = 2; v <= r; ++v)
                        p.start(null, null),
                        p.update(h),
                        f = p.digest().getBytes(),
                        m = n.util.xorBytes(m, f, c),
                        h = f;
                    b += g < d ? m : m.substr(0, l)
                }
                return b
            }
            g = 1;
            function y() {
                if (g > d)
                    return s(null, b);
                p.start(null, null),
                p.update(t),
                p.update(n.util.int32ToBytes(g)),
                m = h = p.digest().getBytes(),
                v = 2,
                C()
            }
            function C() {
                if (v <= r)
                    return p.start(null, null),
                    p.update(h),
                    f = p.digest().getBytes(),
                    m = n.util.xorBytes(m, f, c),
                    h = f,
                    ++v,
                    n.util.setImmediate(C);
                b += g < d ? m : m.substr(0, l),
                ++g,
                y()
            }
            y()
        }
    }
```

```javascript
a.misc.pbkdf2 = function(e, t, r, n, i) {
            if (r = r || 1e4,
            0 > n || 0 > r)
                throw new a.exception.invalid("invalid params to pbkdf2");
            "string" == typeof e && (e = a.codec.utf8String.toBits(e)),
            "string" == typeof t && (t = a.codec.utf8String.toBits(t)),
            e = new (i = i || a.misc.hmac)(e);
            var o, s, c, u, d = [], l = a.bitArray;
            for (u = 1; 32 * d.length < (n || 1); u++) {
                for (i = o = e.encrypt(l.concat(t, [u])),
                s = 1; s < r; s++)
                    for (o = e.encrypt(o),
                    c = 0; c < o.length; c++)
                        i[c] ^= o[c];
                d = d.concat(i)
            }
            return n && (d = l.clamp(d, n)),
            d
        }
```

1.js

```javascript
r.ecb.prototype.encrypt = function(e, t, a) {
            if (e.length() < this.blockSize && !(a && e.length() > 0))
                return !0;
            for (var n = 0; n < this._ints; ++n)
                this._inBlock[n] = e.getInt32();
            this.cipher.encrypt(this._inBlock, this._outBlock);
            for (n = 0; n < this._ints; ++n)
                t.putInt32(this._outBlock[n])
        }
r.cbc.prototype.encrypt = function(e, t, a) {
            if (e.length() < this.blockSize && !(a && e.length() > 0))
                return !0;
            for (var n = 0; n < this._ints; ++n)
                this._inBlock[n] = this._prev[n] ^ e.getInt32();
            this.cipher.encrypt(this._inBlock, this._outBlock);
            for (n = 0; n < this._ints; ++n)
                t.putInt32(this._outBlock[n]);
            this._prev = this._outBlock
        }
```

1.js

```javascript
async function ne(e, t) {
                var a;
                await Ne(1, t);
                const n = e.password || ""
                  , r = e.email
                  , i = null === (a = e.sendNotifyEmail) || void 0 === a || a;
                let o, s, c;
                e.isTempPassword ? (o = !0,
                s = !0) : n ? (o = !0,
                s = !1) : (o = !1,
                s = !1),
                await Ne(5, t),
                o && (c = await ye(n, {
                    m_mode: 0,
                    m_pbkdf_sha_iterations: 0
                }, t)),
                await Ne(50, t);
                const l = {
                    company: e.companyId,
                    email: r,
                    name: e.name,
                    phone: e.phone,
                    passwordExpires: e.passwordExpires,
                    pwd: s && n || void 0,
                    salt: null == c ? void 0 : c.salt64,
                    hash: null == c ? void 0 : c.hash64,
                    method: null == c ? void 0 : c.method,
                    iterations: null == c ? void 0 : c.iterations,
                    publicKey: null == c ? void 0 : c.publicKeyPEM,
                    files: null == c ? void 0 : c.files,
                    otpOn: e.otpOn,
                    isAdmin: e.isAdmin,
                    sendNotifyEmail: i,
                    login: e.accountId,
                    lang: e.language
                }
                  , d = {};
                _e(d, "", !0, 0);
                const u = await fe("/rf-api?create-company-member", "POST", {
                    additionalHeaders: d,
                    responseType: "json",
                    body: JSON.stringify(l),
                    contentType: "application/json"
                }, t);
                await Ne(95, t);
                const m = ge(u, "json");
                await Ne(100, t);
                const p = m.response;
                if (!p)
                    throw (0,
                    f.fK)(f.rG, "Unexpected server response");
                if ("ok" !== p.status) {
                    throw {
                        sibError: f.rG,
                        description: "Cannot create RoboForm account",
                        response: p,
                        httpResponse: u
                    }
                }
                return {
                    accountId: p.accountId || "",
                    publicKey: l.publicKey || ""
                }
            }
```

```javascript
async function ye(e, t, a) {
                const n = le(t)
                  , r = await be(e, n.storedDataType, n.iterations, a)
                  , i = r.m_salt64
                  , o = r.m_hash64
                  , c = await (0,
                s.pn)(2048);
                let l, d;
                switch (n.storedDataType) {
                case 3:
                    l = "SCRAM-SHA-256-PBKDF2SHA512",
                    d = 3;
                    break;
                case 1:
                case 2:
                    l = "SCRAM-SHA-256",
                    d = 2;
                    break;
                default:
                    throw (0,
                    f.fK)(f.A2, "Wrong auth method")
                }
                const u = await Ce(n.iterations, d, c.privateKeyPEM, e, r.m_salt, a)
                  , m = await Ce(n.iterations, d, "", e, r.m_salt, a);
                return {
                    method: l,
                    iterations: n.iterations,
                    salt64: i,
                    hash64: o,
                    saltBytes: r.m_salt,
                    publicKeyPEM: c.publicKeyPEM,
                    files: {
                        "user-data.rfo": u,
                        "app-data.rfo": m,
                        "sync-data.rfo": m
                    }
                }
            }
```

```javascript
async function E(e, t, a, i) {
            e.password = null;
            const o = (0,
            n.Y)(a)
              , c = await async function(e, t, a, n, i) {
                if (!k)
                    return r.ai.importKey(t);
                try {
                    return await b.importKey(e, t, a, n, i)
                } catch (o) {
                    return k = !1,
                    r.ai.importKey(t)
                }
            }(s, o, l, !1, u)
              , m = await async function(e, t, a) {
                if (!A)
                    return r.ai.pbkdf2(t, e.salt, d.iterations, a);
                try {
                    return await b.deriveBits(e, t, a)
                } catch (n) {
                    return A = !1,
                    r.ai.pbkdf2(t, e.salt, d.iterations, a)
                }
            }(Object.assign({
                salt: i
            }, d), c, 8 * (2 * f[t] + 2))
              , p = new Uint8Array(m)
              , g = L(v, D(p, 0, f[t]))
              , _ = L(v, D(p, f[t], 2 * f[t]))
              , y = D(p, 2 * f[t]);
            return Object.assign(e, {
                keys: {
                    key: g,
                    authentication: _,
                    passwordVerification: y
                },
                ctr: new S(new w(g),Array.from(h)),
                hmac: new N(_)
            }),
            y
        }
```
