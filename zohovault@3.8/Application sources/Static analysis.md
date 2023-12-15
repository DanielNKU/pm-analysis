## Static Analysis

```javascript
PBKDF2_key: function(password, salt, iteration) {
                    /** SJCL and Crypto-js output compatibility changes
*  SJCL <SALT> converting toHex() value.    
*/
                    function toHex(str) {
                        var hex = '';
                        for (var i = 0; i < str.length; i++) {
                            hex += '' + str.charCodeAt(i).toString(16);
                        }
                        return hex;
                    }
                    var hmacSHA256 = function(key) {
                        var hasher = new sjcl.misc.hmac(key,sjcl.hash.sha256);
                        this.encrypt = function() {
                            return hasher.encrypt.apply(hasher, arguments);
                        }
                        ;
                    };
                    var passwordSalt = sjcl.codec.hex.toBits(toHex(salt));
                    var derivedKey = sjcl.misc.pbkdf2(password, passwordSalt, iteration, 256, hmacSHA256);
                    return sjcl.codec.hex.fromBits(derivedKey);
                }
```

All codes are open in the offline version of Zoho Vault.
