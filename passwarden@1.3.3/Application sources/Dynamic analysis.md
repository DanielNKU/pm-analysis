## Dynamic Analysis

When unlocking the vault, we find

```javascript
e.setKeychain = function(t, a) {
                return Object(s["b"])(this, void 0, void 0, (function() {
                    var n, i, o, c, _, l;
                    return Object(s["e"])(this, (function(E) {
                        switch (E.label) {
                        case 0:
                            return E.trys.push([0, 4, , 5]),
                            [4, r["KeychainModule"].generateHashFromMasterPassword(t, a.client_salt)];
                        case 1:
                            return n = E.sent().hash,
                            i = a.enc_keypair,
                            o = a.sign_keypair,
                            c = new r["KeychainModule"],
                            [4, c.init(n)];
                        case 2:
                            return E.sent(),
                            [4, c.setKeyChain({
                                enc_keypair: i,
                                sign_keypair: o
                            })];
                        case 3:
                            return E.sent(),
                            e.keychainModulesList = Object(s["a"])(Object(s["a"])({}, e.keychainModulesList), (l = {},
                            l[a.keychain_uuid] = c,
                            l)),
                            [2, !0];
                        case 4:
                            return _ = E.sent(),
                            console.log(_),
                            [2, !1];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
```

```javascript
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
async function E(t, e) {
                            const n = (await r.default.hash({
                                pass: t,
                                salt: e,
                                time: 4,
                                mem: 16384,
                                hashLen: 32,
                                parallelism: 1,
                                type: r.default.ArgonType.Argon2id
                            }).catch(t=>console.log(t))).encoded.split("$")
                              , i = n.length;
                            return {
                                hash: n[i - 1],
                                salt: n.slice(0, [i - 1]).join("$")
                            }
                        }
```

```javascript
async init(t) {
                                const {encHash: e, signHash: n} = await Object(i.generatePasswordKeys)(t);
                                this.encPasswordKey = await Object(r.importPassword)(e),
                                this.signPasswordKey = await Object(r.importPassword)(n),
                                this.recovery_key = t
                            }
```

```javascript
async setKeyChain(t) {
                                var e, n;
                                const r = await Object(i.setEncryptKeyPair)(this.encPasswordKey, {
                                    ...t.enc_keypair
                                });
                                if (this.pemChain = {
                                    enc_keypair: t.enc_keypair
                                },
                                this.keyChain = {
                                    enc_keypair: r
                                },
                                (null === (e = null == t ? void 0 : t.sign_keypair) || void 0 === e ? void 0 : e.private_key) && (null === (n = null == t ? void 0 : t.sign_keypair) || void 0 === n ? void 0 : n.public_key)) {
                                    const e = await Object(i.setSignKeyPair)(this.signPasswordKey, {
                                        ...t.sign_keypair
                                    });
                                    this.pemChain = {
                                        ...this.pemChain,
                                        sign_keypair: t.sign_keypair
                                    },
                                    this.keyChain = {
                                        ...this.keyChain,
                                        sign_keypair: e
                                    }
                                }
                            }
```

and find the core function of unlocking the vault

```javascript
e.LoginWithMasterPassword = function(t) {
                var a, s, r = t.password, n = t.isContentScript, i = void 0 !== n && n;
                return Object(p["b"])(this, void 0, void 0, (function() {
                    var t, n, o, c;
                    return Object(p["e"])(this, (function(_) {
                        switch (_.label) {
                        case 0:
                            return _.trys.push([0, 10, , 12]),
                            r ? [4, eO["a"].getAccountStatus({
                                showKeys: 1
                            })] : [3, 9];
                        case 1:
                            return t = _.sent(),
                            n = null !== (s = null === (a = null === t || void 0 === t ? void 0 : t.data) || void 0 === a ? void 0 : a.key_pairs) && void 0 !== s ? s : [],
                            [4, ZI.fetchSchema()];
                        case 2:
                            return o = _.sent(),
                            o ? [3, 4] : [4, rO["a"].errorPush({
                                errors: [{
                                    code: 1018
                                }]
                            })];
                        case 3:
                            return _.sent(),
                            [2];
                        case 4:
                            return [4, eO["a"].fetchKeychainList({
                                masterPassword: r,
                                keypairList: n
                            })];
                        case 5:
                            return _.sent(),
                            (null === t || void 0 === t ? void 0 : t.success) && n.length ? [4, e.loginWithMaster(r, i)] : [3, 7];
                        case 6:
                            return [2, _.sent()];
                        case 7:
                            return [4, rO["a"].errorPush({
                                errors: [{
                                    code: 1018
                                }]
                            })];
                        case 8:
                            return _.sent(),
                            [2];
                        case 9:
                            return [3, 12];
                        case 10:
                            return c = _.sent(),
                            console.log(c),
                            [4, rO["a"].errorPush({
                                errors: [{
                                    code: 1018
                                }]
                            })];
                        case 11:
                            return _.sent(),
                            [3, 12];
                        case 12:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
```

and

```javascript
e.loginWithMaster = function(t, a) {
                return Object(p["b"])(this, void 0, void 0, (function() {
                    var s, r, n, i;
                    return Object(p["e"])(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, tO["a"].getEnterMasterErrors()];
                        case 1:
                            return s = o.sent(),
                            s < 5 ? [4, oO["a"].checkMasterPassword({
                                masterPassword: t
                            })] : [3, 13];
                        case 2:
                            return r = o.sent(),
                            r ? [4, e.store.dispatch("keychain/setCurrentKeychain", r.keychain_uuid)] : [3, 10];
                        case 3:
                            return o.sent(),
                            [4, tO["a"].removeEnterMasterErrors()];
                        case 4:
                            return o.sent(),
                            [4, this.getVaults(r)];
                        case 5:
                            return n = o.sent(),
                            n ? [4, eO["a"].getAllNotifications()] : [3, 9];
                        case 6:
                            return o.sent(),
                            iO["a"].open(),
                            [4, nO["a"].open({
                                token: null
                            })];
                        case 7:
                            return o.sent(),
                            e.bs.changeBrowserIcon(!0),
                            [4, e.bs.unlock(a)];
                        case 8:
                            return o.sent(),
                            [2, !0];
                        case 9:
                            return [2, !1];
                        case 10:
                            return [4, rO["a"].errorPush({
                                errors: [{
                                    message: "WRONG_MASTER_ERROR"
                                }]
                            })];
                        case 11:
                            return o.sent(),
                            [4, tO["a"].increaseEnterMasterErrors()];
                        case 12:
                            if (o.sent(),
                            a)
                                return [2, {
                                    error: "WRONG_MASTER_ERROR"
                                }];
                            o.label = 13;
                        case 13:
                            return [4, tO["a"].getEnterMasterErrors()];
                        case 14:
                            return i = o.sent(),
                            i > 4 ? [4, rO["a"].errorPush({
                                errors: [{
                                    message: "MASTER_REACHED_LIMIT_ATTEMPS_ERROR"
                                }]
                            })] : [3, 18];
                        case 15:
                            return o.sent(),
                            [4, tO["a"].removeEnterMasterErrors()];
                        case 16:
                            return o.sent(),
                            [4, this.logout()];
                        case 17:
                            o.sent(),
                            o.label = 18;
                        case 18:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
```

and there is a way to check master password

```javascript
e.checkMasterPassword = function(t) {
                var a = t.masterPassword;
                return Object(s["b"])(this, void 0, void 0, (function() {
                    var t, n, i, o, c = this;
                    return Object(s["e"])(this, (function(_) {
                        switch (_.label) {
                        case 0:
                            return t = e.store.getters["keychain/getKeychain"],
                            n = e.store.getters["keys/getKeys"],
                            i = {},
                            [4, Promise.all(t.map((function(e) {
                                return Object(s["b"])(c, void 0, void 0, (function() {
                                    var t, n, o, c, _;
                                    return Object(s["e"])(this, (function(s) {
                                        switch (s.label) {
                                        case 0:
                                            return s.trys.push([0, 4, , 5]),
                                            t = e.enc_keypair,
                                            n = e.sign_keypair,
                                            o = new r["KeychainModule"],
                                            [4, r["KeychainModule"].generateHashFromMasterPassword(a, e.client_salt)];
                                        case 1:
                                            return c = s.sent().hash,
                                            [4, o.init(c)];
                                        case 2:
                                            return s.sent(),
                                            [4, o.setKeyChain({
                                                enc_keypair: t,
                                                sign_keypair: n
                                            })];
                                        case 3:
                                            return s.sent(),
                                            i[e.keychain_uuid] = o,
                                            [3, 5];
                                        case 4:
                                            return _ = s.sent(),
                                            console.log(_),
                                            [3, 5];
                                        case 5:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            )))];
                        case 1:
                            return _.sent(),
                            [4, e.findCurrentKeypairByKeychain(i, t, n)];
                        case 2:
                            return o = _.sent(),
                            [2, null === o || void 0 === o ? void 0 : o.keypair]
                        }
                    }
                    ))
                }
                ))
            }
```

and getVault function

```javascript
 e.getVaults = function(t) {
                return Object(p["b"])(this, void 0, void 0, (function() {
                    var a;
                    return Object(p["e"])(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return [4, e.store.dispatch("keys/setCurrentKey", t)];
                        case 1:
                            return s.sent(),
                            [4, eO["a"].fetchVaultList({
                                showRecords: 1
                            })];
                        case 2:
                            return a = s.sent(),
                            [2, a]
                        }
                    }
                    ))
                }
                ))
            }
```

When we add a new item, we find

```javascript
setItem: function(e) {
                    return Object(p["b"])(t, void 0, void 0, (function() {
                        var t, a, s = this;
                        return Object(p["e"])(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return (null === e || void 0 === e ? void 0 : e.length) ? [4, Promise.all(e.map((function(e) {
                                    return Object(p["b"])(s, void 0, void 0, (function() {
                                        var t;
                                        return Object(p["e"])(this, (function(a) {
                                            switch (a.label) {
                                            case 0:
                                                return "0" === (null === e || void 0 === e ? void 0 : e.vault_uuid) ? [3, 2] : [4, oO["a"].encryptVault(Object(p["a"])({}, e))];
                                            case 1:
                                                return t = a.sent(),
                                                [2, t];
                                            case 2:
                                                return [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )))] : [2, []];
                            case 1:
                                return t = r.sent(),
                                a = t.filter((function(e) {
                                    return !!e
                                }
                                )),
                                [2, a]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
```

```javascript
e.encryptVault = function(t) {
                return Object(s["b"])(this, void 0, void 0, (function() {
                    var a, r, i, o;
                    return Object(s["e"])(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return c.trys.push([0, 3, , 4]),
                            a = e.vaultsModulesList[t.vault_uuid],
                            a ? (r = Object(n["cloneDeep"])(t),
                            [4, a.encryptPayload(r.name)]) : [3, 2];
                        case 1:
                            return i = c.sent(),
                            [2, Object(s["a"])(Object(s["a"])({}, r), {
                                name: i
                            })];
                        case 2:
                            return [3, 4];
                        case 3:
                            return o = c.sent(),
                            console.log(o),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.decryptVault = function(t) {
                return Object(s["b"])(this, void 0, void 0, (function() {
                    var a, r, i, o;
                    return Object(s["e"])(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            if (a = e.vaultsModulesList[t.vault_uuid],
                            !a)
                                return [3, 5];
                            r = Object(n["cloneDeep"])(t),
                            i = null,
                            c.label = 1;
                        case 1:
                            return c.trys.push([1, 3, , 4]),
                            [4, a.decryptPayload(r.name)];
                        case 2:
                            return i = c.sent(),
                            [3, 4];
                        case 3:
                            return o = c.sent(),
                            console.log(o),
                            [3, 4];
                        case 4:
                            if (i)
                                return [2, Object(s["a"])(Object(s["a"])({}, r), {
                                    name: i
                                })];
                            c.label = 5;
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
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
