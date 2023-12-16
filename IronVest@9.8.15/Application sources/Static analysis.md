## Static Analysis

index.1c934b5f.js

```javascript
login: e.mutation({
            query: ({email: t, password: A, authCode: r, mfaCode: n, strongHash: i, otpCode: o, otpRecover: a, bioRecoveryCode: s, biometricRecover: l, bioHash: g})=>{
                const u = dl.getDeviceId()
                  , {key: C, verifyKey: d, encryptedPassword: E} = _A.encryptPassword(A);
                return {
                    method: "POST",
                    url: "/user/login",
                    body: {
                        authCode: r,
                        email: t,
                        deviceId: u,
                        key: C,
                        mfaCode: n,
                        verifyKey: d,
                        strongHash: i,
                        password: E,
                        version: W.api.version,
                        product: W.api.product,
                        ...a && {
                            otpRecover: a,
                            otpCode: o
                        },
                        bioRecoveryCode: s,
                        biometricRecover: l,
                        bioHash: g
                    }
                }
            }
            ,
            invalidatesTags: ["BillingInfo", "Datasets", "CardVerificationStatus"]
        })
```

```javascript
nQe = async({password: e})=>argon2.hash({
    pass: e,
    salt: `${W.saltBase}+${e}`,
    time: W.hashConfig.time,
    mem: W.hashConfig.mem,
    hashLen: W.hashConfig.hashLen,
    parallelism: W.hashConfig.parallelism,
    type: argon2.ArgonType.Argon2id
})
```

```javascript
 hash: function(A) {
                            const g = A.mem || 1024;
                            return B(g).then((B=>{
                                const Q = A.time || 1
                                  , o = A.parallelism || 1
                                  , D = i(A.pass)
                                  , e = E(B, D)
                                  , n = D.length
                                  , t = i(A.salt)
                                  , a = E(B, t)
                                  , r = t.length
                                  , s = A.type || I.Argon2d
                                  , y = B.allocate(new Array(A.hashLen || 24), "i8", B.ALLOC_NORMAL)
                                  , F = A.secret ? C(B, A.secret) : 0
                                  , c = A.secret ? A.secret.byteLength : 0
                                  , w = A.ad ? C(B, A.ad) : 0
                                  , h = A.ad ? A.ad.byteLength : 0
                                  , G = A.hashLen || 24
                                  , N = B._argon2_encodedlen(Q, g, o, r, G, s)
                                  , R = B.allocate(new Array(N + 1), "i8", B.ALLOC_NORMAL);
                                let f, U, M;
                                try {
                                    U = B._argon2_hash_ext(Q, g, o, e, n, a, r, y, G, R, N, s, F, c, w, h, 19)
                                } catch (A) {
                                    f = A
                                }
                                if (0 !== U || f) {
                                    try {
                                        f || (f = B.UTF8ToString(B._argon2_error_message(U)))
                                    } catch (A) {}
                                    M = {
                                        message: f,
                                        code: U
                                    }
                                } else {
                                    let A = "";
                                    const I = new Uint8Array(G);
                                    for (let g = 0; g < G; g++) {
                                        const Q = B.HEAP8[y + g];
                                        I[g] = Q,
                                        A += ("0" + (255 & Q).toString(16)).slice(-2)
                                    }
                                    M = {
                                        hash: I,
                                        hashHex: A,
                                        encoded: B.UTF8ToString(R)
                                    }
                                }
                                try {
                                    B._free(e),
                                    B._free(a),
                                    B._free(y),
                                    B._free(R),
                                    w && B._free(w),
                                    F && B._free(F)
                                } catch (A) {}
                                if (f)
                                    throw M;
                                return M
                            }
                            ))
                        }
```

