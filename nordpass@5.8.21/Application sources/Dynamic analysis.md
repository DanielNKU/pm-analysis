## Dynamic Analysis

```javascript
 h = n.CBC = function() {
                            var x = e.extend();
                            function l(x, l, c) {
                                var b, G = this._iv;
                                G ? (b = G,
                                this._iv = s) : b = this._prevBlock;
                                for (var M = 0; M < c; M++)
                                    x[l + M] ^= b[M]
                            }
```

Finding:

1. The block cipher uses CBC mode.
