## Dynamic Analysis

When logging in, we find

```javascript
 login(Ce, Ee, _e) {
        return Cr(this, null, function*() {
            if (!navigator.onLine)
                throw new Error("Network Error");
            if (this._accountInfo)
                return {
                    accountInfo: this._accountInfo
                };
            Ce = Ce.toLowerCase().trim();
            const [Se] = Ee.split("-")
              , {group: xe, B: Be, sessionId: Te, iterations: Ie, salt: De} = yield this.loginStep1(Ce, Se);
            if (!this._encryption.hasMuk(Se) && !_e)
                throw new Error("Can not log in without password in locked state");
            let Fe = this._encryption.getMuk(Se);
            Fe || (Fe = yield this._encryption.generateMuk({
                accountId: Se,
                createdAt: 0,
                updatedAt: 0,
                email: Ce,
                secret: Ee,
                srpIterations: Ie,
                srpSalt: De,
                srpGroup: xe,
                password: _e
            }));
            const {accountInfo: Oe, token: Pe} = yield this.loginStep2(Fe, Te, xe, Be);
            return this._encryption.saveMuk(mn(Mr({}, Fe), {
                createdAt: Oe.createdAt,
                updatedAt: Oe.mukGenerationTime
            })),
            this._accountInfo = Oe,
            yield this._emitter.emit("login", Oe),
            {
                accountInfo: Oe
            }
        })
    }
```

```javascript
loginStep1(Ce, Ee) {
        return Cr(this, null, function*() {
            if (!navigator.onLine)
                throw new Error("Network Error");
            const _e = yield this._client.get(route("api.auth.step1", Ce, Ee));
            if (!_e || _e.status >= 300)
                throw new AuthError("Bad session response");
            return _e.data
        })
    }
```

```javascript
loginStep2(Ce, Ee, _e, Se) {
        return Cr(this, null, function*() {
            if (!navigator.onLine)
                throw new Error("Network Error");
            const xe = yield SRPClient.create(_e, yield this._encryption.getSRPX(Ce))
              , Be = xe.getPublicKey()
              , Te = xe.getProof(Se)
              , {data: {M2: Ie, token: De, ttl: Fe, account: Oe}} = yield this._client.post(route("api.auth.step2", Ee), {
                A: Be,
                M: Te
            });
            if (!xe.checkServerProof(Ie, Se))
                throw new AuthError("Server proof is invalid");
            return yield this._rememberToken(De, Fe, Oe),
            {
                accountInfo: Oe,
                token: De
            }
        })
    }
```

When opening the vault

```javascript
decryptVault(Ce) {
        return this.vaults.decryptVault(Ce)
    }
```

```javascript
decryptVault(Ce) {
        return Cr(this, null, function*() {
            if (!this.accounts.current)
                throw new Error("Account is locked");
            const Ee = yield this.keysets.getDataKeyKeyset(Ce.keysets);
            return this._decryptVault(Ce, Ee)
        })
    }
```

```javascript
getDataKeyKeyset(t) {
        const r = Array.from(this.keysets.values()).filter(a=>a.dataKey && t.includes(a.uuid)).first();
        if (!r)
            throw new Error("Can not find vault data key");
        return r
    }
```

```javascript
_decryptVault(Ce, Ee) {
        return Cr(this, null, function*() {
            return mn(Mr({}, Ce), {
                data: yield this.encryption.decrypt(Ce.data, Ee)
            })
        })
    }
```

```javascript
Ae.prototype.where = function(Ce) {
        if (typeof Ce == "string")
            return new this.db.WhereClause(this,Ce);
        if (isArray$1(Ce))
            return new this.db.WhereClause(this,"[" + Ce.join("+") + "]");
        var Ee = keys(Ce);
        if (Ee.length === 1)
            return this.where(Ee[0]).equals(Ce[Ee[0]]);
        var _e = this.schema.indexes.concat(this.schema.primKey).filter(function(Fe) {
            return Fe.compound && Ee.every(function(Oe) {
                return Fe.keyPath.indexOf(Oe) >= 0
            }) && Fe.keyPath.every(function(Oe) {
                return Ee.indexOf(Oe) >= 0
            })
        })[0];
```

```javascript
getDataKeyKeyset(t) {
        const r = Array.from(this.keysets.values()).filter(a=>a.dataKey && t.includes(a.uuid)).first();
        if (!r)
            throw new Error("Can not find vault data key");
        return r
    }
```


