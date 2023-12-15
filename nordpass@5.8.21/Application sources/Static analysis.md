## Static Analysis

main.88d52f40eb7c479511d5.js

```javascript
function Ji(e, t, a, r) {
            this.v = 1,
            this.r = 2;
            var n = 192;
            e.forEach((function(e) {
                n += Xi[e]
            }
            )),
            this.padding = "(\xbfN^Nu\x8aAd\0NV\xff\xfa\x01\b..\0\xb6\xd0h>\x80/\f\xa9\xfedSiz";
            var i = (t + this.padding).substr(0, 32)
              , o = (a + this.padding).substr(0, 32);
            this.O = this.processOwnerPassword(i, o),
            this.P = -(1 + (255 ^ n)),
            this.encryptionKey = qi(i + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5),
            this.U = Yi(this.encryptionKey, this.padding)
        }
```

passwordGenerator.717ddada09b37445f948.js

```javascript
return function(x) {
                                    return {
                                        encrypt: function(l, c, b) {
                                            return s(c).encrypt(x, l, c, b)
                                        },
                                        decrypt: function(l, c, b) {
                                            return s(c).decrypt(x, l, c, b)
                                        }
                                    }
                                }
```
