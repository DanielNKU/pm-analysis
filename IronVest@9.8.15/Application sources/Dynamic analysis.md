## Dynamic Analysis

When we log in, we find

```javascript
G = ()=>{
    const [e,r] = b.useLoginMutation()
      , o = A()
      , s = F().state
      , t = p.exports.useMemo(()=>o.redirectUrl ? o.redirectUrl : (s == null ? void 0 : s.from) || h.root, [o, s == null ? void 0 : s.from])
      , i = !!o.redirectUrl
      , d = p.exports.useCallback(async n=>{
        const {encoded: l} = await f.encrypt({
            password: n.password
        });
        return e({
            email: n.emailAddress,
            password: n.password,
            successRedirectPath: t,
            reload: i,
            errorMessage: !0,
            strongHash: l
        })
    }
    , [e, t, i]);
    return {
        ...r,
        handleSubmit: d
    }
}
```

and

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

the _A.encryptPassword(A) is

```javascript
const _fe = e=>{
    const t = window.generateKey()
      , A = window.encryptKey(e, t)
      , r = window.encryptKey(t, t)
      , n = window.getServerPassword(e);
    return {
        key: A,
        verifyKey: r,
        encryptedPassword: n
    }
}
```

the window.generateKey() is

```javascript
function generateKey(size) {
    if (!size) {
        size = 16;
    }
    return crypto_wrapper.random(size);
}
```

the window.encryptKey(e,t) is

```javascript
function encryptKey(password, plain, salt) {
    return encrypt(createKeyAndIV(password, salt || sha256(password)), plain);
}
```

```javascript
function createKeyAndIV(password, salt) {
    var cacheKey = (password + salt);
    if (!(cacheKey in keyIVCache)) {
        keyIVCache[cacheKey] = crypto_wrapper.createKeyAndIV(password, salt);
    }

    return keyIVCache[cacheKey];
}

```

```javascript
createKeyAndIV: function(t, e) {
        var n = t + convertFromHex(e)
          , r = ""
          , i = ""
          , o = []
          , s = 1
          , a = 3
          , u = 0;
        o[u++] = n;
        for (var c = 0; c < a; c++) {
            0 == c ? i = n : (r = convertFromHex(i),
            i = r += n);
            for (var l = 0; l < s; l++)
                i = md5(i);
            o[u++] = i
        }
        return {
            key: asmCrypto.hex_to_bytes(o[1] + o[2]),
            iv: asmCrypto.hex_to_bytes(o[3]),
            salt: e
        }
    }
```

```javascript
function encrypt(context, input) {
    return crypto_wrapper.aes_encrypt(context, input);
}
```

```javascript
aes_encrypt: function(t, e) {
        var n = t.key
          , r = t.iv
          , i = 16
          , o = e;
        try {
            var s = asmCrypto.string_to_bytes(encodeUTF8(e))
              , a = i - (s.length + 1) % i
              , u = new Uint8Array(s.length + a + 1);
            u.set(s);
            var c = 0;
            u[s.length + c++] = 10;
            for (var l = 0; l < a; l++)
                u[s.length + c++] = a;
            return asmCrypto.bytes_to_base64(asmCrypto.AES_CBC.encrypt(u, n, null, r))
        } catch (h) {
            return o
        }
    }
```

```javascript
function getServerPassword(inputPassword) {
    return getEncryptedPasswordHash(getEncryptedPasswordHash(inputPassword));
}
```

```javascript
function getEncryptedPasswordHash(password) {
    var context = createKeyAndIV(password, password);
    return sha256(encrypt(context, password));
}

```

When we add a new item, we find

```javascript
function encryptObject(password, object, fields) {
    var salt = object.id;
    for (var i = 0; i < fields.length; i++) {
        var plain = object[fields[i]];
        // do not re-encrypt if it is already encrypted.
        if (plain && plain.toString().indexOf('ENC_') == -1)
            var cipher = encryptKey(password, plain, salt);
        else
            var cipher = plain;
        if (cipher != plain) {
            object[fields[i]] = 'ENC_' + cipher;
        }
    }
}
```

