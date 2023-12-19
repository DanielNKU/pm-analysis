## Static Analysis

loginUI.3.4.277-.min.js

```javascript
r.signIn = function() {
            var e, n, t;
            r.loading || (e = r.loginForm,
            n = s.search(),
            r.requestSuccess = !1,
            r.loading = !0,
            t = {
                emailInput: e[p].$viewValue,
                passwordInput: e[m].$viewValue
            },
            i.login(t.emailInput, t.passwordInput, n.lang, n.redirect_url, {}).then(function(e) {
                if (r.loading = !1,
                "ok" === e.status) {
                    var n;
                    if (e.need_activation)
                        return (n = d.search()).user = t.emailInput,
                        o.go("activatefirst", n);
                    r.requrestSuccess = !0,
                    a.open(c.appendVisitorID(e.redirect_url), "_self"),
                    r.requestError.visibility = !1
                } else
                    "error" === e.status && (r.requestError.visibility = !0,
                    r.requestError.type = e.type,
                    r.requestError.message = l(e.type))
            }).catch(function(e) {
                r.loading = !1,
                r.requestError.visibility = !0,
                e.data ? (r.requestError.message = l(e.data.type),
                r.requestError.type = e.data.type) : (r.requestError.message = l(),
                r.requestError.type = "")
            }))
        }
```

```javascript
f.passwordStep = function() {
            var m, e, n, g, t, v;
            f.loading || (e = f.loginForm,
            m = w.search(),
            f.requestSuccess = !1,
            f.loading = !0,
            e = {
                password: e[i].$viewValue
            },
            n = {},
            m.client_id ? n = {
                state: m.state,
                client_id: m.client_id
            } : m.redirect_id && (n = {
                state: m.state,
                redirect_id: m.redirect_id,
                challenge: m.challenge
            }),
            g = S.getItem("prelogin_token"),
            t = S.getItem("fingerprint"),
            v = {},
            r.isActive() && (v = r.generatePair()),
            h.passwordStep(e.password, g, t, m.lang, m.redirect_url, m.manage, v.challenge, n).then(function(e) {
                if (f.loading = !1,
                f.showForgot = !0,
                "ok" === e.status) {
                    f.requrestSuccess = !0;
                    var n, t = new Date;
                    switch (t.setMonth(t.getMonth() + 2),
                    e.fullname && S.setItem("fn-" + f.user, e.fullname, {
                        expires: t
                    }),
                    e.usage) {
                    case "2fa":
                        var r = y.search()
                          , i = new Date(Date.now() + b.config.token["2fa_timeout"]);
                        S.setItem("two_fa_token", e.user_token, {
                            expires: i
                        }),
                        r.type = e.two_fa_type,
                        r.ag = e.ag,
                        k.go("code", r);
                        break;
                    case "mgmt":
                        n = E.accountUrl + $.getFinalSearchParamsForNavigation(b.location.search, ["manage", "user_token", "fingerprint"]),
                        n += "&user_token=" + e.user_token,
                        h.refreshToken(m.redirect_url, m.client_id, v.verifier, g).then(function() {
                            b.open(n, "_self")
                        }).catch(function() {
                            b.open(n, "_self")
                        });
                        break;
                    default:
                        h.refreshToken(m.redirect_url, m.client_id, v.verifier, g).then(function() {
                            b.open($.appendVisitorID(e.redirect_url), "_self")
                        }).catch(function() {
                            b.open($.appendVisitorID(e.redirect_url), "_self")
                        })
                    }
                    f.requestError.visibility = !1
                } else
                    "error" === e.status && ("AuthorizationError" === e.type && I++,
                    q <= I ? (f.requestError.visibility = !0,
                    f.requestError.message = _("PasswordIncorrectThirdTime"),
                    f.requestError.handler = function() {
                        k.go("forgot")
                    }
                    ) : (f.requestError.visibility = !0,
                    f.requestError.message = _(e.type),
                    f.requestError.handler = void 0,
                    "HardlockResendEmail" === e.type && (f.showForgot = !1,
                    f.requestError.handler = (c = f.user,
                    d = m.lang,
                    u = m.redirect_url,
                    p = g,
                    function() {
                        var e;
                        f.loading || (f.loading = !0,
                        e = {
                            state: (e = w.search()).state,
                            client_id: e.client_id
                        },
                        h.checkoutResendUnlock(c, d, u, e, p).then(function(e) {
                            f.loading = !1,
                            f.requestError.handler = void 0,
                            "ok" === e.status ? f.requestError.message = _("HardlockResendEmailSuccess", [c]) : "error" === e.status && ("HardlockEmailLimitReached" === e.type ? f.requestError.message = _(e.type) : f.requestError.message = _("HardlockResendEmailError"))
                        }).catch(function(e) {
                            f.loading = !1,
                            f.requestError.handler = void 0,
                            f.requestError.message = _("HardlockResendEmailError")
                        }))
                    }
                    )),
                    "UserInactiveError" === e.type && (f.requestError.handler = (s = f.user,
                    a = m.lang,
                    o = m.redirect_url,
                    l = g,
                    function() {
                        var e;
                        f.loading || (f.loading = !0,
                        e = {
                            state: (e = w.search()).state,
                            client_id: e.client_id
                        },
                        h.checkoutResend(s, a, o, e, l).then(function(e) {
                            f.loading = !1,
                            f.requestError.handler = void 0,
                            "ok" === e.status ? f.requestError.message = _("ActivateResendEmailSuccess", [s]) : "error" === e.status && (f.requestError.message = _("ActivateResendEmailError", [s]))
                        }).catch(function(e) {
                            f.loading = !1,
                            f.requestError.handler = void 0,
                            f.requestError.message = _("ActivateResendEmailError")
                        }))
                    }
                    ))));
                var s, a, o, l, c, d, u, p
            }).catch(function(e) {
                f.loading = !1,
                f.requestError.visibility = !0,
                e.data ? f.requestError.message = _(e.data.type) : f.requestError.message = _(),
                f.requestError.handler = void 0
            }))
        }
```

service-worker-wrapper.js

```javascript
const Ys = {
                            getLoginInProgress: function() {
                                return As
                            },
                            startLogin: function() {
                                return Ds.apply(this, arguments)
                            },
                            unlockVault: Ls,
                            createVault: function(e) {
                                return Us.apply(this, arguments)
                            },
                            tryRememberMeLogin: function() {
                                return Gs.apply(this, arguments)
                            },
                            recoverPassword: function(e, t) {
                                return Qs.apply(this, arguments)
                            },
                            invalidateLoginToken: Fs,
                            isLoginTokenAvailable: Ss,
                            isRegistered: function() {
                                return Hs.apply(this, arguments)
                            },
                            getLoginTokenResponse: ws,
                            getSsoType: function() {
                                return "sso"
                            },
                            getLoginToken: Bs,
                            setRegion: Ts,
                            getCookieInfo: Cs,
                            init: function() {
                                return Ks.apply(this, arguments)
                            }
                        }
```

