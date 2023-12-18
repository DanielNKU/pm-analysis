## Static Analysis

cabinet-cfbb9a6d.js

```javascript
const vaultServiceResolver = ()=>Cr(void 0, null, function*() {
    const Ae = yield container.get("storageLocal")
      , Ce = yield container.get("storageCloud")
      , Ee = yield container.get("localization")
      , _e = yield container.get("encryptionService")
      , Se = yield container.get("keysets");
    return new VaultsTariffGateFacade(new Vaults$1({
        storageLocal: Ae,
        storageCloud: Ce,
        localization: Ee,
        encryptService: _e,
        keysets: Se,
        emitter: (yield container.get("serviceEventBus")).service("vaults"),
        logger: createLogger("VaultsService"),
        items: container.getLazy("items"),
        accounts: yield container.get("accounts")
    }),Ae,Ce,yield container.get("accounts"))
})
```

```javascript
class SRPClient {
    constructor(Ce, Ee, _e, Se) {
        this._a = Ee,
        this._A = _e,
        this._srp = Ce,
        this._x = Se
    }
    static create(Ce, Ee) {
        return Cr(this, null, function*() {
            const _e = new SRP(Ce)
              , Se = yield _e.a();
            return new SRPClient(_e,Se,_e.A(Se),Ee)
        })
    }
    getPublicKey() {
        return this._A.toString("hex")
    }
    _getS(Ce) {
        return this._srp.clientS(Transform.buffer.toBigInteger(Ce), this._a, this._srp.u(this._A, Ce), this._x)
    }
    _getM2(Ce) {
        return this._srp.M2(this._A, this._getM(Ce), this.getK(Ce))
    }
    _getM(Ce) {
        return this._srp.M1(this._A, Ce, this.getK(Ce))
    }
    getProof(Ce) {
        const Ee = buffer.Buffer.from(Ce, "hex");
        let _e = Transform.buffer.toBigInteger(Ee);
        if (this._srp.isZeroWhenModN(_e))
            throw Error("Invalid B value, abort");
        return this._getM(Ee).toString("hex")
    }
    checkServerProof(Ce, Ee) {
        const _e = buffer.Buffer.from(Ee, "hex");
        return this._getM2(_e).toString("hex") === Ce
    }
    getK(Ce) {
        const Ee = this._getS(Ce);
        return this._srp.K(Ee)
    }
    getVerifier() {
        return this._srp.v(this._x).toString("hex")
    }
}
```

```javascript
class Auth {
    constructor(Ce, Ee, _e) {
        this._token = null,
        this._tokenTTL = 60,
        this._tokenPromise = null,
        this._client = Ce,
        this._encryption = Ee,
        this._emitter = _e
    }
    static _generateSecret(Ce) {
        return Ce.split("").map(()=>Ce[cryptoRandom(0, Ce.length - 1)]).slice(0, 16).reduce((Ee,_e,Se,xe)=>(Ee += _e,
        (Se + 1) % 4 === 0 && Se != xe.length - 1 && (Ee += "-"),
        Ee), "")
    }
    getAccountId() {
        return Cr(this, null, function*() {
            var Ce;
            return (Ce = this._accountInfo) == null ? void 0 : Ce.id
        })
    }
    on(Ce, Ee) {
        return this._emitter.on(Ce, Ee),
        this
    }
    once(Ce, Ee) {
        return this._emitter.once(Ce, Ee),
        this
    }
    off(Ce, Ee) {
        return this._emitter.off(Ce, Ee),
        this
    }
    addListener(Ce) {
        return this._emitter.addListener(Ce),
        this
    }
    removeListener(Ce) {
        return this._emitter.removeListener(Ce),
        this
    }
    emit(Ce, ...Ee) {
        return this._emitter.emit(Ce, ...Ee)
    }
    getAutoregPassword() {
        return Config.getInstallId()
    }
    register(Ce, Ee, _e, Se, xe=!1) {
        return Cr(this, null, function*() {
            let Be = formatAccount({
                name: Ce,
                email: Ee,
                createdAt: hooks().unix(),
                updatedAt: hooks().unix(),
                srpSalt: yield this.generateSrpSalt(),
                registered: !1,
                importedOnce: !1,
                lastSync: hooks().unix(),
                lastLogin: hooks().unix(),
                autoreg: xe
            });
            const Te = Object.only(Be, ["name", "email", "createdAt", "updatedAt", "autoreg"]);
            (yield Config.getPartnerId()) && Config.setPartnerId(Te.pid).catch(reportError),
            Se && (Te.register_period = Se);
            const {data: {id: Ie, dict: De, iterations: Fe, group: Oe}} = yield this._client.post(route("api.registration.init"), Te, {
                withCredentials: !0
            })
              , Pe = Auth._generateSecret(De);
            let Re = mn(Mr({}, Be), {
                id: Ie,
                srpIterations: Fe,
                srpGroup: Oe,
                secret: `${Ie}-${Pe}`
            });
            const ke = mn(Mr({}, Re), {
                password: _e,
                updatedAt: hooks().unix(),
                createdAt: hooks().unix(),
                accountId: Ie
            })
              , je = yield this._encryption.generateMuk(ke)
              , $e = yield this._encryption.makeKeyVerifier(je, Re.email)
              , Ue = yield this._encryption.makeSrpVerifier(je, Re.srpGroup);
            Re.keyVerifier = $e,
            Re.mukGenerationTime = je.updatedAt;
            const Me = yield this._client.post(route("api.registration.finalize", Ie), {
                salt: Re.srpSalt,
                verifier: Ue,
                mukGenerationTime: Re.mukGenerationTime
            });
            return Re = formatAccount(mn(Mr(Mr({}, Re), Me.data.data), {
                registered: !0
            })),
            this._encryption.saveMuk(je),
            yield this._emitter.emit("registered", {
                account: Re,
                password: _e
            }),
            Re
        })
    }
    generateSrpSalt() {
        return Cr(this, null, function*() {
            return (yield cryptoBrowserifyExports.randomBytes(32)).toString("hex")
        })
    }
    getToken() {
        return Cr(this, null, function*() {
            return this._token && !this.isTokenExpired() ? Promise.resolve(this._token) : this._tokenRefresh()
        })
    }
    isTokenExpired() {
        return this._tokenReceivedAt ? hooks().unix() - this._tokenReceivedAt > this._tokenTTL : !0
    }
    logout() {
        return Cr(this, null, function*() {
            this._accountInfo = void 0,
            this._forgetToken(),
            yield this._emitter.emit("logout")
        })
    }
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
    validate(Ce, Ee) {
        return Cr(this, null, function*() {
            return this._client.post(route("api.registration.validate"), {
                name: Ce,
                email: Ee
            })
        })
    }
    generateSecretKey(Ce) {
        return Cr(this, null, function*() {
            const {data: {dict: Ee}} = yield this._client.get(route("api.registration.dict"));
            return `${Ce}-${Auth._generateSecret(Ee)}`
        })
    }
    generateNewAuthData(Ce, Ee, _e) {
        return Cr(this, null, function*() {
            const Se = yield this.generateSrpSalt()
              , xe = yield this._encryption.generateMuk(mn(Mr({}, Ce), {
                accountId: Ce.id,
                srpSalt: Se,
                password: _e !== void 0 ? _e : Ee,
                updatedAt: hooks().unix()
            }))
              , Be = yield this._encryption.makeKeyVerifier(xe, Ce.email)
              , Te = yield this._encryption.makeSrpVerifier(xe, Ce.srpGroup);
            return {
                mukNew: xe,
                srpSaltNew: Se,
                keyVerifierNew: Be,
                srpVerifierNew: Te
            }
        })
    }
    _rememberToken(Ce, Ee, _e) {
        return Cr(this, null, function*() {
            this._token = Ce,
            this._accountInfo = _e,
            this._logoutTimeout && clearTimeout(this._logoutTimeout),
            this._logoutTimeout = setTimeout(()=>Cr(this, null, function*() {
                return this._forgetToken()
            }), Ee * 1e3),
            this._tokenTTL = Ee,
            this._tokenReceivedAt = hooks().unix()
        })
    }
    _forgetToken() {
        this._token = null,
        clearTimeout(this._logoutTimeout),
        this._logoutTimeout = null
    }
    _tokenRefresh() {
        return Cr(this, null, function*() {
            return this._tokenPromise ? yield this._tokenPromise : !this._accountInfo || !this._encryption.hasMuk(this._accountInfo.id) ? null : (this._tokenPromise = new Promise((Ce,Ee)=>Cr(this, null, function*() {
                try {
                    const {group: _e, B: Se, sessionId: xe} = yield this.loginStep1(this._accountInfo.email, this._accountInfo.id)
                      , {token: Be} = yield this.loginStep2(this._accountInfo.id, xe, _e, Se);
                    Ce(Be),
                    this._tokenPromise = null
                } catch (_e) {
                    this._tokenPromise = null,
                    Ee(_e)
                }
            })),
            yield this._tokenPromise)
        })
    }
}
```

```javascript
decryptVault(Ce) {
        return this.vaults.decryptVault(Ce)
    }
```

```javascript
load(Ce) {
        return Cr(this, null, function*() {
            var xe;
            const Ee = yield this.keysets.getKeysets(Ce)
              , _e = yield this.storageLocal.getKeysetVaults(Ee.pluck("uuid"))
              , Se = {};
            this.vaultsDecrypted = {};
            for (let Be of _e) {
                const Te = (xe = Ee.filter(Ie=>Be.keysets.includes(Ie.uuid)).first()) == null ? void 0 : xe.uuid;
                if (!Te) {
                    this.logger.error(new Error(`Can not find own keyset id for vault ${Be.uuid}`));
                    continue
                }
                try {
                    const Ie = this.keysets.get(Te);
                    if (!Ie)
                        throw new Error(`Can not find keyset with uuid ${Te}`);
                    Se[Be.uuid] = yield this._decryptVault(Be, Ie)
                } catch (Ie) {
                    this.logger.error(Ie)
                }
            }
            this.vaultsDecrypted = Se
        })
    }
```

```javascript
loadCloudVault(Ce) {
        return Cr(this, null, function*() {
            const Ee = yield this.storageCloud.getVault(Ce);
            if (!Ee)
                throw new Error(`Can not load cloud vault ${Ce}`);
            const _e = yield this._getVaultKeyset(Ee);
            if (!_e)
                throw new Error("Can not find vault keyset");
            const Se = yield this._decryptVault(Ee, _e);
            this.vaultsDecrypted[Se.uuid] = Se,
            yield this.storageLocal.saveVault(mn(Mr({}, Ee), {
                synced: !0
            })),
            yield this.emitter.emit("saved", {
                vaults: [Se],
                scope: {
                    cloud: !1
                }
            })
        })
    }
```

