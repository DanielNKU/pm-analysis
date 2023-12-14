## Static Analysis

7240.6.2341.0.js

```typescript
function(e) {
            e.Argon2d = "argon2d",
            e.Kwc3 = "kwc3",
            e.Kwc5 = "kwc5",
            e.NoDerivation = "no_derivation",
            e.Pbkdf2 = "pbkdf2"
        }
```

bundle-5d3f7ed2.6.2341.0.js

```javascript
 async function C(e, t, s) {
            const {tCost: n, mCost: r, parallelism: a} = s
              , {hash: o} = await S().hash({
                pass: new Uint8Array(e),
                salt: new Uint8Array(t),
                time: n,
                mem: r,
                hashLen: 32,
                parallelism: a,
                type: w.ArgonType.Argon2d
            });
            return o.buffer
        }
```

bundle-5d3f7ed2.6.2341.0.js

```javascript
async function x(e, t, s) {
            const n = await (0,
            A.Y)(e);
            return self.crypto.subtle.encrypt({
                name: E.z,
                iv: t
            }, n, s)
        }
```

```javascript
 async function U(e, t, s) {
            const n = {
                name: y,
                hash: {
                    name: s
                }
            }
              , r = await self.crypto.subtle.importKey("spki", e, n, !1, ["encrypt"]);
            return self.crypto.subtle.encrypt(n, r, t)
        }
```

bundle-605be8c8.6.2341.0.js

```javascript
t.getAdminProtectedSymmetricalKeys = async function(e, t) {
            const r = (0,
            l.makeAsymmetricEncryption)()
              , o = [];
            for (const n of e) {
                const {login: e, publicKey: i} = n
                  , a = await r.encrypt(i, t);
                o.push({
                    login: e,
                    key: a
                })
            }
            return o
        }
```

```javascript
async function y(e, t, r, o, n, d) {
            const {groupId: l} = e
              , u = await (0,
            a.makeCryptoService)();
            if (!(e.users || []).find((e=>e.userId === n)))
                throw new Error("[ItemGroupService] - makeUserGroupInvite: Trying to share an item to a userGroup that I'm not part of.");
            const S = await (0,
            s.getUserGroupPrivateKey)(e, o, n)
              , p = await u.asymmetricEncryption.encrypt(e.publicKey, r)
              , m = c.encode(l)
              , g = await u.symmetricEncryption.signHmacSHA256(r, m);
            return await (0,
            i.validateProposeSignature)("[ItemGroupService] - makeUserGroupInvite", u, r, g, m),
            {
                groupId: l,
                permission: t,
                groupKey: p,
                proposeSignature: g,
                acceptSignature: await v(d, r, S)
            }
        }
```

bundle-605be8c8.6.2341.0.js

```javascript
async function S(e, t, r, n, i) {
            const s = (0,
            a.getAdminDataFromTeamAdminData)(r, n)
              , c = (0,
            a.getSpecialItemGroupFromAdminData)(s).revision
              , d = JSON.stringify(i)
              , [l,u] = await Promise.all([e.symmetricEncryption.generateNewAESKey(), (0,
            a.getSpecialItemGroupKey)(e, t, s)])
              , [S,p] = await Promise.all([e.symmetricEncryption.encryptAES256(l, o.encode(d)), e.symmetricEncryption.encryptAES256(u, o.encode(l))]);
            return {
                itemId: i.itemId,
                itemKey: p,
                content: S,
                itemGroupRevision: c
            }
        }
```

```javascript
async function p(e, r, i, a, s) {
            const [c,d] = await Promise.all([r.asymmetricEncryption.generateRsaKeyPair(), r.symmetricEncryption.generateNewAESKey()])
              , l = (0,
            n.generateItemUuid)()
              , u = await r.symmetricEncryption.encryptAES256(d, o.encode(c.privateKey));
            return {
                groupId: l,
                name: a.name,
                publicKey: c.publicKey,
                privateKey: u,
                sharingVersion: t.SHARING_VERSION,
                teamId: a.teamId,
                type: e,
                users: await Promise.all(s.map((e=>g(r, e, i, d, l))))
            }
        }
```

bundle-ec3394f2.6.2341.0.js

```javascript
function c() {
                return async function() {
                    const t = await async function() {
                        const {specialItemGroup: t} = o
                          , {crypto: r} = e
                          , n = await r.symmetricEncryption.generateNewAESKey()
                          , s = await (0,
                        d.getSpecialItemGroupKey)(r, a, o)
                          , c = {
                            publicKey: i
                        }
                          , u = y.encode(JSON.stringify(c))
                          , p = await r.symmetricEncryption.encryptAES256(n, u)
                          , m = await r.symmetricEncryption.encryptAES256(s, y.encode(n))
                          , g = (0,
                        l.generateItemUuid)()
                          , S = await e.item.makeItemUpload(g, m, p);
                        return await e.item.makeAddItemsEvent(t.groupId, t.revision, [S])
                    }();
                    return e.item.addItems(e.ws, a.login, a.uki, t)
                }().then(u)
            }
```

```javascript
async function w(e, t, r, a) {
            try {
                const {cryptoConfig: o} = (0,
                l.parsePayload)("$1$noderivation$aes256$cbchmac$16$")
                  , n = (0,
                u.getRandomValues)(32)
                  , i = await (0,
                c.hashAndSplitKey)(n)
                  , S = (0,
                p.generateIV)()
                  , m = await (0,
                s.encryptAES256)({
                    key: i.aes,
                    iv: S,
                    clearData: e
                })
                  , g = {
                    salt: null,
                    iv: S,
                    hash: await (0,
                    s.signHashHmacSHA256)({
                        key: i.hmac,
                        data: (0,
                        d.concatBuffers)(S, m)
                    }),
                    cipheredContent: m,
                    cryptoConfig: o
                }
                  , y = (0,
                l.convertDashlaneSecureDataFlexibleToTransportableData)(g);
                return {
                    success: !0,
                    secureFileDataBuffer: y,
                    secureFileInfo: f(e, n, y, t, r, a)
                }
            } catch (e) {
                return {
                    success: !1
                }
            }
        }
```

bundle-f04f9f25.6.2341.0.js

```javascript
t.encryptAES256 = async function({key: e, iv: t, clearData: r}) {
            const n = await c(e);
            return await self.crypto.subtle.encrypt({
                name: o,
                iv: t
            }, n, r)
        }
```

```javascript
t.decryptAES256 = (e,t,r)=>new Promise(((n,i)=>{
            try {
                const a = new d.ByteBuffer(e)
                  , i = new d.ByteBuffer(t)
                  , c = new d.ByteBuffer(r)
                  , p = u.createDecipher(s.AES_CBC, a);
                p.start({
                    iv: i
                }),
                p.update(c),
                p.finish();
                const l = p.output.data;
                return n((0,
                o.str2ab)(l))
            } catch (e) {
                return a.Debugger.log("Error while using Webcrypto  Polyfill - [decryptAES256]", e),
                i(e)
            }
        }
        ))
```
