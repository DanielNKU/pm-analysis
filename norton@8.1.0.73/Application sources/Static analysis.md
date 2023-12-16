## Static Analysis

onboardSetup.js

```javascript
function() {
                    var e, t = m, r = (e = t.lib).Base, n = e.WordArray, a = (e = t.algo).HMAC, o = e.PBKDF2 = r.extend({
                        cfg: r.extend({
                            keySize: 4,
                            hasher: e.SHA1,
                            iterations: 1
                        }),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e)
                        },
                        compute: function(e, t) {
                            var r = this.cfg
                              , o = a.create(r.hasher, e)
                              , i = n.create()
                              , s = n.create([1])
                              , l = i.words
                              , u = s.words
                              , c = r.keySize;
                            for (r = r.iterations; l.length < c; ) {
                                var d = o.update(t).finalize(s);
                                o.reset();
                                for (var f = d.words, p = f.length, h = d, m = 1; m < r; m++) {
                                    h = o.finalize(h),
                                    o.reset();
                                    for (var g = h.words, y = 0; y < p; y++)
                                        f[y] ^= g[y]
                                }
                                i.concat(d),
                                u[0]++
                            }
                            return i.sigBytes = 4 * c,
                            i
                        }
                    });
                    t.PBKDF2 = function(e, t, r) {
                        return o.create(r).compute(e, t)
                    }
                }();
```
