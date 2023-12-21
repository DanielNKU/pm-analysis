## Dynamic Analysis

In Web application, we find the code for encryption

```javascript
n = a1
                        f = B.I.c9(g, 0, f)
                        g = n.a
                        f = p.agw(f, g).a
                        if (!A.xI(f, b.t_(f.length)))
                            throw A.d(new A.qm())
                        m = p.bb3(a, p.bfg(g, b), n.b)
                        o.I(B.R, "compression: " + a.gHQ().j(0), null, null)
                        if (a.gHQ() === B.iM) {
                            l = A.c_5(m)
                            k = $.fN ? new A.kA(l,l.byteLength) : new A.ha(l,l.byteLength)
                            j = A.ciY(k, a.c)
                            g = a.e
                            f = g.a
                            f.X(0)
                            f.A(0, j.a)
                            g = g.b
                            B.b.X(g)
                            B.b.A(g, j.b)
                            i = B.L.cu(0, k.t_(k.c - k.b))
                            h = new A.JW(A.a([], t.XX),A.a([], t.sn),a)
                            q = A.b1x(h, p, c, a, p.a27(h, a, i))
                            s = 1
                            break
```

```javascript
 bb3(a, b, c) {
            var s, r, q = null, p = a.gUS()
            if (p === B.kP) {
                $.lG().I(B.o, "We need AES", q, q)
                s = a.d.i(0, B.cX).b
                r = A.aNL(A.a7V())
                r.v3(!1, new A.oX(s,new A.oO(c),t.RH))
                return A.bWM(A.aJI(r, b))
            } else if (p === B.kQ) {
                $.lG().I(B.o, "We need chacha20", q, q)
                return this.awH(a, b, c)
            } else
                throw A.d(A.a6("Unsupported cipherId " + A.f(p)))
        }
```
