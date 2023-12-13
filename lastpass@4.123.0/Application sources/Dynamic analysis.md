## Dynamic Analysis

When logging in, we jump to this function

```javascript
var generateOtpData = function() {
    return function(a, b) {
        a = fix_username(a);
        var c = b ? b : g_local_key;
        rng_seed_time();
        for (var d = [], f = 0; 16 > f; f++)
            d[f] = 0;
        rng_get_bytes(d);
        b = "";
        for (f = 0; 16 > f; f++)
            b += String.fromCharCode(d[f]);
        d = enc(AES.bin2hex(b), c);
        var g = make_lp_key(a, b);
        f = enc(AES.bin2hex(c), g);
        var h = SHA256(SHA256(a + b) + b)
          , e = AES.hex2bin(dec(f, g, 1));
        c != e ? a = {
            error: gs("Failed to decrypt newly encrypted key:") + " dec_local_key:\n" + AES.bin2hex(e) + " != \n" + AES.bin2hex(g_local_key) + "\nlen: " + e.length + " vs " + g_local_key.length + "\nrand pw:" + AES.bin2hex(b) + "\ng_username:" + a + "\nrand key:" + AES.bin2hex(g) + "\nrand_encrypted_key:" + f
        } : (a = "newkey=1&xml=1&hash=" + encodeURIComponent(h),
        a += "&encrypted_otp=" + encodeURIComponent(d),
        a += "&rand_encrypted_key=" + encodeURIComponent(f),
        a = {
            OTP: b,
            postData: a + "&recovery=1",
            lmiapiData: {
                encryptedOneTimePassword: d,
                oneTimePasswordHash: h,
                enabled: 0,
                randomEncryptedKey: f,
                masterPasswordHash: null
            }
        });
        return a
    }
}();
```

The function for sending authentication packet

```javascript
function P(e, t, a) {
                    return function() {
                        var i = (0,
                        o.Z)((0,
                        r.Z)().mark((function o(i, l) {
                            var c, f, g, y, v;
                            return (0,
                            r.Z)().wrap((function(r) {
                                for (; ; )
                                    switch (r.prev = r.next) {
                                    case 0:
                                        return r.next = 2,
                                        (0,
                                        s.cv)(i.username, i.key);
                                    case 2:
                                        return c = r.sent,
                                        r.next = 5,
                                        k(l, i.username);
                                    case 5:
                                        return f = r.sent,
                                        r.next = 8,
                                        m(i);
                                    case 8:
                                        return g = r.sent,
                                        y = new URLSearchParams(location.search),
                                        !(v = d.includes(y.get("target")) && y.get("from_uri") && y.get("target")) && p() && (v = u.t.CHROME),
                                        r.abrupt("return", (0,
                                        n.Z)((0,
                                        n.Z)({
                                            version: a,
                                            hash: i.hash,
                                            xml: t,
                                            method: v || e,
                                            username: i.username,
                                            encrypted_username: c,
                                            iterations: i.iterations,
                                            email: i.username,
                                            outofbandsupported: 1,
                                            uuid: i.trustedDeviceId,
                                            deviceId: g || "",
                                            passwordlessToken: i.passwordlessToken
                                        }, h(i)), f));
                                    case 13:
                                    case "end":
                                        return r.stop()
                                    }
                            }
                            ), o)
                        }
                        )));
                        return function(e, t) {
                            return i.apply(this, arguments)
                        }
                    }()
                }
            }
```

When clicking the button, we find this function

```javascript
onSubmit: function(e, t) {
                        e.password.length < 12 && !localStorage.getItem("MP") && (!function(e) {
                            var t = localStorage.getItem(e);
                            t || (t = Gp(),
                            localStorage.setItem(e, t))
                        }("MP"),
                        s.trackMasterPasswordLength());
                        var a = UO(e.username);
                        l(a) ? s.federatedLogin(a, e.rememberUsername) : (s.login({
                            username: a,
                            password: e.password,
                            rememberUsername: e.rememberUsername,
                            rememberPassword: e.rememberPassword,
                            isPasswordlessLogin: u
                        }),
                        t.resetForm((0,
                        n.Z)((0,
                        n.Z)({}, e), {}, {
                            password: ""
                        })),
                        y.current && y.current.focus())
                    }
```

```javascript
login: function(e) {
                        return (0,
                        n.j)((0,
                        r.P)(s.LOGIN, e), {
                            legacySegment: (0,
                            o.R1)("login_clicked")
                        })
                    }
```

Finding:

1. The protocol use username and hash to authenticate.
