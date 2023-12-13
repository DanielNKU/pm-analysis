## Static Analysis

Term: pbkdf

main.2e9bfa4c.js

```typescript
b = r.pkcs5.pbkdf2(t, c, d, n, v)
```

```javascript
 g = r.pkcs5.pbkdf2(a, h, m, c, f)
```

```javascript
e.exports = n.pbkdf2 = s.pbkdf2 = function(e, t, a, s, i, l) {
                    if ("function" === typeof i && (l = i,
                    i = null),
                    n.util.isNodejs && !n.options.usePureJavaScript && o.pbkdf2 && (null === i || "object" !== typeof i) && (o.pbkdf2Sync.length > 4 || !i || "sha1" === i))
                        return "string" !== typeof i && (i = "sha1"),
                        e = r.from(e, "binary"),
                        t = r.from(t, "binary"),
                        l ? 4 === o.pbkdf2Sync.length ? o.pbkdf2(e, t, a, s, (function(e, t) {
                            if (e)
                                return l(e);
                            l(null, t.toString("binary"))
                        }
                        )) : o.pbkdf2(e, t, a, s, i, (function(e, t) {
                            if (e)
                                return l(e);
                            l(null, t.toString("binary"))
                        }
                        )) : 4 === o.pbkdf2Sync.length ? o.pbkdf2Sync(e, t, a, s).toString("binary") : o.pbkdf2Sync(e, t, a, s, i).toString("binary");
                    if ("undefined" !== typeof i && null !== i || (i = "sha1"),
                    "string" === typeof i) {
                        if (!(i in n.md.algorithms))
                            throw new Error("Unknown hash algorithm: " + i);
                        i = n.md[i].create()
                    }
                    var u = i.digestLength;
                    if (s > 4294967295 * u) {
                        var c = new Error("Derived key is too long.");
                        if (l)
                            return l(c);
                        throw c
                    }
                    var d = Math.ceil(s / u)
                      , p = s - (d - 1) * u
                      , h = n.hmac.create();
                    h.start(i, e);
                    var m, f, g, y = "";
                    if (!l) {
                        for (var v = 1; v <= d; ++v) {
                            h.start(null, null),
                            h.update(t),
                            h.update(n.util.int32ToBytes(v)),
                            m = g = h.digest().getBytes();
                            for (var b = 2; b <= a; ++b)
                                h.start(null, null),
                                h.update(g),
                                f = h.digest().getBytes(),
                                m = n.util.xorBytes(m, f, u),
                                g = f;
                            y += v < d ? m : m.substr(0, p)
                        }
                        return y
                    }
                    v = 1;
                    function w() {
                        if (v > d)
                            return l(null, y);
                        h.start(null, null),
                        h.update(t),
                        h.update(n.util.int32ToBytes(v)),
                        m = g = h.digest().getBytes(),
                        b = 2,
                        k()
                    }
                    function k() {
                        if (b <= a)
                            return h.start(null, null),
                            h.update(g),
                            f = h.digest().getBytes(),
                            m = n.util.xorBytes(m, f, u),
                            g = f,
                            ++b,
                            n.util.setImmediate(k);
                        y += v < d ? m : m.substr(0, p),
                        ++v,
                        w()
                    }
                    w()
                }
```

```javascript
function qo() {
                return (qo = (0,
                l.Z)((0,
                u.Z)().mark((function e(t, r, n) {
                    var o, s, i, l, c;
                    return (0,
                    u.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!("undefined" !== typeof crypto && crypto.subtle && crypto.subtle.importKey && crypto.subtle.deriveKey && crypto.subtle.exportKey)) {
                                    e.next = 17;
                                    break
                                }
                                return e.prev = 1,
                                e.next = 4,
                                crypto.subtle.importKey("raw", t, "PBKDF2", !1, ["deriveBits", "deriveKey"]);
                            case 4:
                                return o = e.sent,
                                e.next = 7,
                                crypto.subtle.deriveKey({
                                    name: "PBKDF2",
                                    salt: r,
                                    iterations: n,
                                    hash: "SHA-256"
                                }, o, {
                                    name: "AES-CBC",
                                    length: 256
                                }, !0, ["encrypt", "decrypt"]);
                            case 7:
                                return s = e.sent,
                                e.t0 = _o,
                                e.next = 11,
                                crypto.subtle.exportKey("raw", s);
                            case 11:
                                return e.t1 = e.sent,
                                e.abrupt("return", e.t0.from.call(e.t0, e.t1));
                            case 15:
                                e.prev = 15,
                                e.t2 = e.catch(1);
                            case 17:
                                if (!navigator.userAgent.includes("rv:11.0")) {
                                    e.next = 24;
                                    break
                                }
                                return e.next = 20,
                                Promise.all([a.e(9810), a.e(2130), a.e(7893)]).then(a.bind(a, 82130));
                            case 20:
                                return i = e.sent,
                                e.abrupt("return", _o.from(i.Pbkdf2HmacSha256(t, r, n, 32)));
                            case 24:
                                return e.next = 26,
                                a.e(4956).then(a.t.bind(a, 92350, 23));
                            case 26:
                                return l = e.sent,
                                c = l.sjcl,
                                e.abrupt("return", new Promise((function(e) {
                                    c.misc.pbkdf2(c.codec.bytes.toBits(t), c.codec.bytes.toBits(r), n, 256, null, (function(t) {
                                        e(_o.from(c.codec.hex.fromBits(t), "hex"))
                                    }
                                    ), null)
                                }
                                )));
                            case 29:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 15]])
                }
                )))).apply(this, arguments)
            }
```

Term: aes256

```javascript
s.encryptPrivateKeyInfo = function(e, t, a) {
                    (a = a || {}).saltSize = a.saltSize || 8,
                    a.count = a.count || 2048,
                    a.algorithm = a.algorithm || "aes128",
                    a.prfAlgorithm = a.prfAlgorithm || "sha1";
                    var n, l, u, c = r.random.getBytesSync(a.saltSize), d = a.count, p = o.integerToDer(d);
                    if (0 === a.algorithm.indexOf("aes") || "des" === a.algorithm) {
                        var m, f, g;
                        switch (a.algorithm) {
                        case "aes128":
                            n = 16,
                            m = 16,
                            f = i["aes128-CBC"],
                            g = r.aes.createEncryptionCipher;
                            break;
                        case "aes192":
                            n = 24,
                            m = 16,
                            f = i["aes192-CBC"],
                            g = r.aes.createEncryptionCipher;
                            break;
                        case "aes256":
                            n = 32,
                            m = 16,
                            f = i["aes256-CBC"],
                            g = r.aes.createEncryptionCipher;
                            break;
                        case "des":
                            n = 8,
                            m = 8,
                            f = i.desCBC,
                            g = r.des.createEncryptionCipher;
                            break;
                        default:
                            throw (A = new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = a.algorithm,
                            A
                        }
                        var y = "hmacWith" + a.prfAlgorithm.toUpperCase()
                          , v = h(y)
                          , b = r.pkcs5.pbkdf2(t, c, d, n, v)
                          , w = r.random.getBytesSync(m);
                        (S = g(b)).start(w),
                        S.update(o.toDer(e)),
                        S.finish(),
                        u = S.output.getBytes();
                        var k = function(e, t, a, n) {
                            var i = o.create(o.Class.UNIVERSAL, o.Type.SEQUENCE, !0, [o.create(o.Class.UNIVERSAL, o.Type.OCTETSTRING, !1, e), o.create(o.Class.UNIVERSAL, o.Type.INTEGER, !1, t.getBytes())]);
                            "hmacWithSHA1" !== n && i.value.push(o.create(o.Class.UNIVERSAL, o.Type.INTEGER, !1, r.util.hexToBytes(a.toString(16))), o.create(o.Class.UNIVERSAL, o.Type.SEQUENCE, !0, [o.create(o.Class.UNIVERSAL, o.Type.OID, !1, o.oidToDer(s.oids[n]).getBytes()), o.create(o.Class.UNIVERSAL, o.Type.NULL, !1, "")]));
                            return i
                        }(c, p, n, y);
                        l = o.create(o.Class.UNIVERSAL, o.Type.SEQUENCE, !0, [o.create(o.Class.UNIVERSAL, o.Type.OID, !1, o.oidToDer(i.pkcs5PBES2).getBytes()), o.create(o.Class.UNIVERSAL, o.Type.SEQUENCE, !0, [o.create(o.Class.UNIVERSAL, o.Type.SEQUENCE, !0, [o.create(o.Class.UNIVERSAL, o.Type.OID, !1, o.oidToDer(i.pkcs5PBKDF2).getBytes()), k]), o.create(o.Class.UNIVERSAL, o.Type.SEQUENCE, !0, [o.create(o.Class.UNIVERSAL, o.Type.OID, !1, o.oidToDer(f).getBytes()), o.create(o.Class.UNIVERSAL, o.Type.OCTETSTRING, !1, w)])])])
                    } else {
                        var A;
                        if ("3des" !== a.algorithm)
                            throw (A = new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = a.algorithm,
                            A;
                        n = 24;
                        var S, P = new r.util.ByteBuffer(c);
                        b = s.pbe.generatePkcs12Key(t, P, 1, d, n),
                        w = s.pbe.generatePkcs12Key(t, P, 2, d, n);
                        (S = r.des.createEncryptionCipher(b)).start(w),
                        S.update(o.toDer(e)),
                        S.finish(),
                        u = S.output.getBytes(),
                        l = o.create(o.Class.UNIVERSAL, o.Type.SEQUENCE, !0, [o.create(o.Class.UNIVERSAL, o.Type.OID, !1, o.oidToDer(i["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()), o.create(o.Class.UNIVERSAL, o.Type.SEQUENCE, !0, [o.create(o.Class.UNIVERSAL, o.Type.OCTETSTRING, !1, c), o.create(o.Class.UNIVERSAL, o.Type.INTEGER, !1, p.getBytes())])])
                    }
                    return o.create(o.Class.UNIVERSAL, o.Type.SEQUENCE, !0, [l, o.create(o.Class.UNIVERSAL, o.Type.OCTETSTRING, !1, u)])
                }
```

```javascript
 o.createEncryptedData = function() {
                    var e = null;
                    return e = {
                        type: r.pki.oids.encryptedData,
                        version: 0,
                        encryptedContent: {
                            algorithm: r.pki.oids["aes256-CBC"]
                        },
                        fromAsn1: function(t) {
                            c(e, t, o.asn1.encryptedDataValidator)
                        },
                        decrypt: function(t) {
                            void 0 !== t && (e.encryptedContent.key = t),
                            d(e)
                        }
                    }
                }
```

```javascript
encrypt: function(t, a) {
                            if (void 0 === e.encryptedContent.content) {
                                var n, o, s;
                                switch (a = a || e.encryptedContent.algorithm,
                                t = t || e.encryptedContent.key,
                                a) {
                                case r.pki.oids["aes128-CBC"]:
                                    n = 16,
                                    o = 16,
                                    s = r.aes.createEncryptionCipher;
                                    break;
                                case r.pki.oids["aes192-CBC"]:
                                    n = 24,
                                    o = 16,
                                    s = r.aes.createEncryptionCipher;
                                    break;
                                case r.pki.oids["aes256-CBC"]:
                                    n = 32,
                                    o = 16,
                                    s = r.aes.createEncryptionCipher;
                                    break;
                                case r.pki.oids["des-EDE3-CBC"]:
                                    n = 24,
                                    o = 8,
                                    s = r.des.createEncryptionCipher;
                                    break;
                                default:
                                    throw new Error("Unsupported symmetric cipher, OID " + a)
                                }
                                if (void 0 === t)
                                    t = r.util.createBuffer(r.random.getBytes(n));
                                else if (t.length() != n)
                                    throw new Error("Symmetric key has wrong length; got " + t.length() + " bytes, expected " + n + ".");
                                e.encryptedContent.algorithm = a,
                                e.encryptedContent.key = t,
                                e.encryptedContent.parameter = r.util.createBuffer(r.random.getBytes(o));
                                var i = s(t);
                                if (i.start(e.encryptedContent.parameter.copy()),
                                i.update(e.content),
                                !i.finish())
                                    throw new Error("Symmetric encryption failed.");
                                e.encryptedContent.content = i.output
                            }
                            for (var l = 0; l < e.recipients.length; ++l) {
                                var u = e.recipients[l];
                                if (void 0 === u.encryptedContent.content) {
                                    if (u.encryptedContent.algorithm !== r.pki.oids.rsaEncryption)
                                        throw new Error("Unsupported asymmetric cipher, OID " + u.encryptedContent.algorithm);
                                    u.encryptedContent.content = u.encryptedContent.key.encrypt(e.encryptedContent.key.data)
                                }
                            }
                        }
```

Term: encrypt:

```javascript
24430: function(e, t, a) {
                var r = a(1925);
                function n(e, t) {
                    r.cipher.registerAlgorithm(e, (function() {
                        return new r.aes.Algorithm(e,t)
                    }
                    ))
                }
                a(48854),
                a(38380),
                a(27963),
                e.exports = r.aes = r.aes || {},
                r.aes.startEncrypting = function(e, t, a, r) {
                    var n = f({
                        key: e,
                        output: a,
                        decrypt: !1,
                        mode: r
                    });
                    return n.start(t),
                    n
                }
                ,
                r.aes.createEncryptionCipher = function(e, t) {
                    return f({
                        key: e,
                        output: null,
                        decrypt: !1,
                        mode: t
                    })
                }
                ,
                r.aes.startDecrypting = function(e, t, a, r) {
                    var n = f({
                        key: e,
                        output: a,
                        decrypt: !0,
                        mode: r
                    });
                    return n.start(t),
                    n
                }
                ,
                r.aes.createDecryptionCipher = function(e, t) {
                    return f({
                        key: e,
                        output: null,
                        decrypt: !0,
                        mode: t
                    })
                }
                ,
                r.aes.Algorithm = function(e, t) {
                    c || p();
                    var a = this;
                    a.name = e,
                    a.mode = new t({
                        blockSize: 16,
                        cipher: {
                            encrypt: function(e, t) {
                                return m(a._w, e, t, !1)
                            },
                            decrypt: function(e, t) {
                                return m(a._w, e, t, !0)
                            }
                        }
                    }),
                    a._init = !1
                }
                ,
                r.aes.Algorithm.prototype.initialize = function(e) {
                    if (!this._init) {
                        var t, a = e.key;
                        if ("string" !== typeof a || 16 !== a.length && 24 !== a.length && 32 !== a.length) {
                            if (r.util.isArray(a) && (16 === a.length || 24 === a.length || 32 === a.length)) {
                                t = a,
                                a = r.util.createBuffer();
                                for (var n = 0; n < t.length; ++n)
                                    a.putByte(t[n])
                            }
                        } else
                            a = r.util.createBuffer(a);
                        if (!r.util.isArray(a)) {
                            t = a,
                            a = [];
                            var o = t.length();
                            if (16 === o || 24 === o || 32 === o) {
                                o >>>= 2;
                                for (n = 0; n < o; ++n)
                                    a.push(t.getInt32())
                            }
                        }
                        if (!r.util.isArray(a) || 4 !== a.length && 6 !== a.length && 8 !== a.length)
                            throw new Error("Invalid key parameter.");
                        var s = this.mode.name
                          , i = -1 !== ["CFB", "OFB", "CTR", "GCM"].indexOf(s);
                        this._w = h(a, e.decrypt && !i),
                        this._init = !0
                    }
                }
                ,
                r.aes._expandKey = function(e, t) {
                    return c || p(),
                    h(e, t)
                }
                ,
                r.aes._updateBlock = m,
                n("AES-ECB", r.cipher.modes.ecb),
                n("AES-CBC", r.cipher.modes.cbc),
                n("AES-CFB", r.cipher.modes.cfb),
                n("AES-OFB", r.cipher.modes.ofb),
                n("AES-CTR", r.cipher.modes.ctr),
                n("AES-GCM", r.cipher.modes.gcm);
                var o, s, i, l, u, c = !1, d = 4;
                function p() {
                    c = !0,
                    i = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                    for (var e = new Array(256), t = 0; t < 128; ++t)
                        e[t] = t << 1,
                        e[t + 128] = t + 128 << 1 ^ 283;
                    o = new Array(256),
                    s = new Array(256),
                    l = new Array(4),
                    u = new Array(4);
                    for (t = 0; t < 4; ++t)
                        l[t] = new Array(256),
                        u[t] = new Array(256);
                    var a, r, n, d, p, h, m, f = 0, g = 0;
                    for (t = 0; t < 256; ++t) {
                        d = (d = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4) >> 8 ^ 255 & d ^ 99,
                        o[f] = d,
                        s[d] = f,
                        h = (p = e[d]) << 24 ^ d << 16 ^ d << 8 ^ d ^ p,
                        m = ((a = e[f]) ^ (r = e[a]) ^ (n = e[r])) << 24 ^ (f ^ n) << 16 ^ (f ^ r ^ n) << 8 ^ f ^ a ^ n;
                        for (var y = 0; y < 4; ++y)
                            l[y][f] = h,
                            u[y][d] = m,
                            h = h << 24 | h >>> 8,
                            m = m << 24 | m >>> 8;
                        0 === f ? f = g = 1 : (f = a ^ e[e[e[a ^ n]]],
                        g ^= e[e[g]])
                    }
                }
                function h(e, t) {
                    for (var a, r = e.slice(0), n = 1, s = r.length, l = d * (s + 6 + 1), c = s; c < l; ++c)
                        a = r[c - 1],
                        c % s === 0 ? (a = o[a >>> 16 & 255] << 24 ^ o[a >>> 8 & 255] << 16 ^ o[255 & a] << 8 ^ o[a >>> 24] ^ i[n] << 24,
                        n++) : s > 6 && c % s === 4 && (a = o[a >>> 24] << 24 ^ o[a >>> 16 & 255] << 16 ^ o[a >>> 8 & 255] << 8 ^ o[255 & a]),
                        r[c] = r[c - s] ^ a;
                    if (t) {
                        for (var p, h = u[0], m = u[1], f = u[2], g = u[3], y = r.slice(0), v = (c = 0,
                        (l = r.length) - d); c < l; c += d,
                        v -= d)
                            if (0 === c || c === l - d)
                                y[c] = r[v],
                                y[c + 1] = r[v + 3],
                                y[c + 2] = r[v + 2],
                                y[c + 3] = r[v + 1];
                            else
                                for (var b = 0; b < d; ++b)
                                    p = r[v + b],
                                    y[c + (3 & -b)] = h[o[p >>> 24]] ^ m[o[p >>> 16 & 255]] ^ f[o[p >>> 8 & 255]] ^ g[o[255 & p]];
                        r = y
                    }
                    return r
                }
                function m(e, t, a, r) {
                    var n, i, c, d, p, h, m, f, g, y, v, b, w = e.length / 4 - 1;
                    r ? (n = u[0],
                    i = u[1],
                    c = u[2],
                    d = u[3],
                    p = s) : (n = l[0],
                    i = l[1],
                    c = l[2],
                    d = l[3],
                    p = o),
                    h = t[0] ^ e[0],
                    m = t[r ? 3 : 1] ^ e[1],
                    f = t[2] ^ e[2],
                    g = t[r ? 1 : 3] ^ e[3];
                    for (var k = 3, A = 1; A < w; ++A)
                        y = n[h >>> 24] ^ i[m >>> 16 & 255] ^ c[f >>> 8 & 255] ^ d[255 & g] ^ e[++k],
                        v = n[m >>> 24] ^ i[f >>> 16 & 255] ^ c[g >>> 8 & 255] ^ d[255 & h] ^ e[++k],
                        b = n[f >>> 24] ^ i[g >>> 16 & 255] ^ c[h >>> 8 & 255] ^ d[255 & m] ^ e[++k],
                        g = n[g >>> 24] ^ i[h >>> 16 & 255] ^ c[m >>> 8 & 255] ^ d[255 & f] ^ e[++k],
                        h = y,
                        m = v,
                        f = b;
                    a[0] = p[h >>> 24] << 24 ^ p[m >>> 16 & 255] << 16 ^ p[f >>> 8 & 255] << 8 ^ p[255 & g] ^ e[++k],
                    a[r ? 3 : 1] = p[m >>> 24] << 24 ^ p[f >>> 16 & 255] << 16 ^ p[g >>> 8 & 255] << 8 ^ p[255 & h] ^ e[++k],
                    a[2] = p[f >>> 24] << 24 ^ p[g >>> 16 & 255] << 16 ^ p[h >>> 8 & 255] << 8 ^ p[255 & m] ^ e[++k],
                    a[r ? 1 : 3] = p[g >>> 24] << 24 ^ p[h >>> 16 & 255] << 16 ^ p[m >>> 8 & 255] << 8 ^ p[255 & f] ^ e[++k]
                }
                function f(e) {
                    var t, a = "AES-" + ((e = e || {}).mode || "CBC").toUpperCase(), n = (t = e.decrypt ? r.cipher.createDecipher(a, e.key) : r.cipher.createCipher(a, e.key)).start;
                    return t.start = function(e, a) {
                        var o = null;
                        a instanceof r.util.ByteBuffer && (o = a,
                        a = {}),
                        (a = a || {}).output = o,
                        a.iv = e,
                        n.call(t, a)
                    }
                    ,
                    t
                }
            }
```

Term: .encrypt

```javascript
function p() {
                    return (p = (0,
                    n.Z)((0,
                    r.Z)().mark((function e(t, a) {
                        var n, o, s;
                        return (0,
                        r.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = crypto.getRandomValues(new Uint8Array(16)),
                                    e.next = 3,
                                    crypto.subtle.importKey("raw", a, "AES-CBC", !1, ["encrypt", "decrypt"]);
                                case 3:
                                    return o = e.sent,
                                    e.next = 6,
                                    crypto.subtle.encrypt({
                                        name: "AES-CBC",
                                        iv: n
                                    }, o, t);
                                case 6:
                                    return s = e.sent,
                                    e.abrupt("return", {
                                        iv: c.from(n),
                                        value: c.from(s)
                                    });
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
```

```javascript
ut = $e((function(e, t) {
                t.encryptedUsername = V(e.data[0])
            }
```

Finding:

1. The IV is random and 128 bits.
