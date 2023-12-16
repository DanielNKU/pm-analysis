## Dynamic Analysis

When logging in, we find

```
{
    "iterations": "600000",
    "salt": "AzHIElZtGXdpbDw-BAX2fjVNdqTszkUyH9-drTXNHfw",
    "username": "example@example.com"
}
```

in function

```javascript
a.logmeonce.pbkdf2 = function(d, h) {
        var b = typeof h.iterations == "string" ? parseInt(h.iterations) : h.iterations;
        var c = typeof h.hash == "string" ? h.hash : (b == 10000 ? "SHA-1" : "SHA-256");
        if (typeof h.salt === "string" && typeof h.username === "string") {
            var j = sjcl.codec.utf8String.toBits(h.username.toLowerCase().trim());
            var m = sjcl.codec.base64url.toBits(h.salt);
            var f = new sjcl.misc.hmac(j,sjcl.hash.sha256);
            h.salt = f.encrypt(m)
        }
        if (typeof h.salt === "undefined" && typeof h.username === "string") {
            h.salt = h.username.toLowerCase().trim()
        }
        if (typeof window.crypto !== "undefined" && typeof window.crypto.subtle !== "undefned") {
            const i = new TextEncoder();
            var d = typeof d === "string" ? i.encode(d) : sjcl.codec.arrayBuffer.fromBits(d, false);
            var e = typeof h.salt === "string" ? i.encode(h.salt) : sjcl.codec.arrayBuffer.fromBits(h.salt, false);
            var k = a.Deferred();
            window.crypto.subtle.importKey("raw", d, "PBKDF2", false, ["deriveBits"]).then(null, function(n) {
                throw "crypto importKey failed: " + n.message
            }).then(function(n) {
                return window.crypto.subtle.deriveBits({
                    name: "PBKDF2",
                    salt: e,
                    iterations: b,
                    hash: c
                }, n, 256).then(null, function(o) {
                    throw "crypto deriveBits failed: " + o.message
                })
            }).then(function(n) {
                var o = sjcl.codec.arrayBuffer.toBits(n);
                if (h.output === "bits") {
                    return o
                }
                return sjcl.codec.hex.fromBits(o)
            }).then(k.resolve, k.reject);
            return k.promise()
        } else {
            var e = typeof h.salt === "string" ? sjcl.codec.utf8String.toBits(h.salt) : h.salt;
            var l = {
                "SHA-1": sjcl.hash.sha1,
                "SHA-256": sjcl.hash.sha256,
                "SHA-512": sjcl.hash.sha512
            };
            var f = function(o) {
                var n = new sjcl.misc.hmac(o,l[c]);
                this.encrypt = function() {
                    return n.encrypt.apply(n, arguments)
                }
            };
            var g = sjcl.misc.pbkdf2(d, e, b, 256, f);
            if (h.output === "bits") {
                return a.Deferred().resolve(g)
            }
            return a.Deferred().resolve(sjcl.codec.hex.fromBits(g))
        }
    }
```
