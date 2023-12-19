## Dynamic Analysis

When opening the vault, we find

```javascript
unlockVault(e, t) {
                    return o(this, void 0, void 0, (function*() {
                        return this._ipc.transfer("SsoService", "unlockVault", e, t)
                    }
                    ))
                }
```

and lock this function

```javascript
function Ls(e, t) {
                            return Ms.apply(this, arguments)
                        }
```

and get into this function

```javascript
function Ms() {
                            return Ms = s(l().mark((function e(t, r) {
                                var n, a, i, o, s = arguments;
                                return l().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = s.length > 2 && void 0 !== s[2] && s[2],
                                            e.next = 3,
                                            Es();
                                        case 3:
                                            return a = e.sent,
                                            ks(!0),
                                            e.prev = 5,
                                            i = sd.getSaferPassClient(),
                                            e.next = 9,
                                            i.ssoLoginUser(t, r, n);
                                        case 9:
                                            o = i.userLogic.getUsername(),
                                            localStorage.setItem("sp-bg_lastUserId", o),
                                            Io.setUserLogin(o, a.userId),
                                            oo.emit("login"),
                                            Ul.trackLogin({
                                                status: "success",
                                                type: "sso",
                                                userId: a.userId,
                                                partnerId: a.partnerId
                                            }),
                                            e.next = 20;
                                            break;
                                        case 16:
                                            throw e.prev = 16,
                                            e.t0 = e.catch(5),
                                            Ul.trackLogin({
                                                status: "error",
                                                type: "sso",
                                                message: e.t0.message,
                                                userId: a.userId,
                                                partnerId: a.partnerId
                                            }),
                                            e.t0;
                                        case 20:
                                            return e.prev = 20,
                                            ks(!1),
                                            e.finish(20);
                                        case 23:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, null, [[5, 16, 20, 23]])
                            }
                            ))),
                            Ms.apply(this, arguments)
                        }
```

We find caculate the key

```javascript
e.prototype.getMasterUnlockKey = function(e, t) {
                                return c(this, void 0, void 0, (function() {
                                    return l(this, (function(r) {
                                        switch (r.label) {
                                        case 0:
                                            return [4, this._cryptoAdapter.kdf(e, t, 512, {
                                                type: "ARGON2ID",
                                                opsLimit: 3,
                                                memLimit: 67108864
                                            })];
                                        case 1:
                                            return [2, r.sent().toString("hex")]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
```

```javascript
e.prototype.getKek = function(e, t) {
                                return c(this, void 0, void 0, (function() {
                                    var r, a;
                                    return l(this, (function(i) {
                                        switch (i.label) {
                                        case 0:
                                            return r = n.from(e, "hex"),
                                            a = n.alloc(384, 0),
                                            r.copy(a, 0, 128),
                                            [4, this._cryptoAdapter.kdf(a, t, 32, {
                                                type: "ARGON2ID",
                                                opsLimit: 1,
                                                memLimit: 8192
                                            })];
                                        case 1:
                                            return [2, i.sent().toString("hex")]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
```
