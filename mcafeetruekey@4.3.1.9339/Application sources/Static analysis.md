## Static Analysis

```javascript
201: [function(require, module, exports) {
        function mapAsset(asset) {
            return {
                autologin: asset.autologin,
                domain: asset.domain,
                favorite: asset.isFavorite,
                hostname: asset.hostname,
                id: asset.id,
                isConfirmed: asset.isConfirmed,
                lastUsed: asset.lastUsageDate,
                login: asset.login,
                logoUrl: asset.logoUrl,
                memo: asset.clearMemo,
                metaLoaded: asset.metaLoaded,
                name: asset.name,
                password: asset.encryptedPassword,
                protectedWithFace: !1,
                protectedWithPassword: asset.protectedWithPassword,
                subdomainOnly: asset.subdomainOnly,
                url: asset.url,
                useCount: asset.usageCount,
                visible: !0,
                createdBy: asset.createdBy,
                title: asset.title
            }
        }
```

```javascript
AES.prototype.encryptBlock = function(M) {
                M = bufferToArray(new Buffer(M));
                var out = this._doCryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX)
                  , buf = new Buffer(16);
                return buf.writeUInt32BE(out[0], 0),
                buf.writeUInt32BE(out[1], 4),
                buf.writeUInt32BE(out[2], 8),
                buf.writeUInt32BE(out[3], 12),
                buf
            }
```

```javascript
958: [function(require, module, exports) {
        exports.randomBytes = exports.rng = exports.pseudoRandomBytes = exports.prng = require("randombytes"),
        exports.createHash = exports.Hash = require("create-hash"),
        exports.createHmac = exports.Hmac = require("create-hmac");
        var hashes = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Object.keys(require("browserify-sign/algos")));
        exports.getHashes = function() {
            return hashes
        }
        ;
        var p = require("pbkdf2");
        exports.pbkdf2 = p.pbkdf2,
        exports.pbkdf2Sync = p.pbkdf2Sync;
        var aes = require("browserify-cipher");
        ["Cipher", "createCipher", "Cipheriv", "createCipheriv", "Decipher", "createDecipher", "Decipheriv", "createDecipheriv", "getCiphers", "listCiphers"].forEach(function(key) {
            exports[key] = aes[key]
        });
        var dh = require("diffie-hellman");
        ["DiffieHellmanGroup", "createDiffieHellmanGroup", "getDiffieHellman", "createDiffieHellman", "DiffieHellman"].forEach(function(key) {
            exports[key] = dh[key]
        });
        var sign = require("browserify-sign");
        ["createSign", "Sign", "createVerify", "Verify"].forEach(function(key) {
            exports[key] = sign[key]
        }),
        exports.createECDH = require("create-ecdh");
        var publicEncrypt = require("public-encrypt");
        ["publicEncrypt", "privateEncrypt", "publicDecrypt", "privateDecrypt"].forEach(function(key) {
            exports[key] = publicEncrypt[key]
        }),
        ["createCredentials"].forEach(function(name) {
            exports[name] = function() {
                throw new Error(["sorry, " + name + " is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
            }
        })
    }
```

