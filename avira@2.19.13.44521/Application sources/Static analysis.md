## Static Analysis

SymBfw.js

```javascript
    var constants = {
      KEY_IV : "iv",
      KEY_SALT: "salt",
      KEY_HMAC: "hmac",
      PBKDF2_KEY_SIZE: 32,
      PBKDF2_ITERATIONS: 1000,
      AES_ALGORITHM: "AES-CBC"

    };
```

```javascript
function KeyForPassword(password, salt) {
  var iterations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_ITERATIONS;
  var key = crypto_js_1.default.PBKDF2(crypto_js_1.default.lib.WordArray.create(password), crypto_js_1.default.lib.WordArray.create(salt), {
    keySize: exports.KEY_SIZE,
    iterations: iterations
  });
  return helpers_1.wordsArrayToUint8Array(key);
}
```

Symmetric Encryption

![](D:\坚果云同步\我的坚果云\我的工作\口令管理器存储方案研究\pm-analysis\pm-analysis\avira@2.19.13.44521\Application sources\fig\AES.png)

 Hash Function

![](D:\坚果云同步\我的坚果云\我的工作\口令管理器存储方案研究\pm-analysis\pm-analysis\avira@2.19.13.44521\Application sources\fig\Hash.png)

 Key Derivation Function

![](D:\坚果云同步\我的坚果云\我的工作\口令管理器存储方案研究\pm-analysis\pm-analysis\avira@2.19.13.44521\Application sources\fig\AES-key.png)

![](D:\坚果云同步\我的坚果云\我的工作\口令管理器存储方案研究\pm-analysis\pm-analysis\avira@2.19.13.44521\Application sources\fig\AES-IV.png)

![](D:\坚果云同步\我的坚果云\我的工作\口令管理器存储方案研究\pm-analysis\pm-analysis\avira@2.19.13.44521\Application sources\fig\AES-key-given.png)

Random number gernator

![](D:\坚果云同步\我的坚果云\我的工作\口令管理器存储方案研究\pm-analysis\pm-analysis\avira@2.19.13.44521\Application sources\fig\random.png)



