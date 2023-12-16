## Static Analysis

```typescript
a.logmeonce.load = function(b) {
        return this.fireEvent("loadUser", b.load).then(function(d) {
            a.logmeonce.extension = d.version;
            a.logmeonce.loaded.resolve(d);
            if (d.version != null && d.version < b.extension) {
                var f = typeof b.update == "number" ? new Date().getTime() > b.update * 1000 : b.update;
                f && a("#install_tip").extensionTip({
                    version: d.version,
                    to: b.extension
                })
            } else {
                if (d.plugin != null && b.plugin != null && (d.plugin === false || d.plugin < b.plugin)) {
                    if (b.plugin <= d.version && a("#install_tip .plugin").length > 0) {
                        a("#install_tip").extensionTip({
                            plugin: d.plugin,
                            to: b.plugin
                        })
                    }
                } else {
                    if (a("#install_tip").is(":visible")) {
                        a("#install_tip").extensionTip("close")
                    }
                }
            }
            if (b.user != null && d.user != null && b.user != d.user && b.load.force == false) {
                a.logmeonce.fireEvent("loadUser", a.extend(b.load, {
                    force: true
                }))
            }
            if (b.gsk) {
                var c = typeof sjcl === "undefined" ? a.loadScript(server.url.replace(/\/u\/[0-9]+$/, "").replace(/\/console$/, "") + "/js/sjcl.js") : a.Deferred().resolve();
                c.then(function() {
                    try {
                        a.logmeonce.fireEvent("loadKey", {
                            key: a.logmeonce.decrypt(localStorage.getItem("gsk"), b.gsk)
                        })
                    } catch (g) {}
                    localStorage.removeItem("gsk");
                    a.post(server.url + "/security/gsk", {
                        csrf_token: a("meta[name=csrf]").attr("content")
                    })
                })
            }
            if (b.keypair) {
                var c = typeof sjcl === "undefined" ? a.loadScript(server.url.replace(/\/u\/[0-9]+$/, "").replace(/\/console$/, "") + "/js/sjcl.js") : a.Deferred().resolve();
                c.then(function() {
                    var i = sjcl.ecc.elGamal.generateKeys(256);
                    var h = i.pub.get()
                      , g = i.sec.get();
                    var e = sjcl.codec.string.fromBits(g);
                    a.logmeonce.fireEvent("encrypt", {
                        input: e,
                        passwordEvent: false
                    }).then(function(j) {
                        a.post(server.url + "/security/keypair", {
                            csrf_token: a("meta[name=csrf]").attr("content"),
                            "public": sjcl.codec.base64.fromBits(h.x.concat(h.y)),
                            "private": j
                        })
                    })
                })
            }
            if (b.kms) {
                var c = typeof KmsKeyringBrowser === "undefined" ? a.loadScript(server.url.replace(/\/u\/[0-9]+$/, "").replace(/\/console$/, "") + "/js/aws.js") : a.Deferred().resolve();
                c.then(function() {
                    a.ajax({
                        url: server.url + "/saml/kms/" + b.kms.id,
                        type: "POST",
                        dataType: "json",
                        data: {
                            csrf_token: a("meta[name=csrf]").attr("content")
                        }
                    }).then(function(k) {
                        const g = buildClient(CommitmentPolicy.REQUIRE_ENCRYPT_REQUIRE_DECRYPT);
                        const h = g.decrypt;
                        const i = getClient(KMS, {
                            credentials: {
                                accessKeyId: k.credentials.AccessKeyId,
                                secretAccessKey: k.credentials.SecretAccessKey,
                                sessionToken: k.credentials.SessionToken
                            }
                        });
                        const j = new KmsKeyringBrowser({
                            clientProvider: i,
                            generatorKeyId: k.arn,
                            keyIds: []
                        });
                        const l = h(j, fromBase64(b.kms.cipher));
                        l.then(function(m) {
                            a.logmeonce.fireEvent("loadKey", {
                                key: toBase64(m.plaintext)
                            }).always(function() {
                                a.ajax({
                                    url: server.url + "/saml/kms/" + b.kms.id,
                                    type: "POST",
                                    dataType: "json",
                                    data: {
                                        csrf_token: a("meta[name=csrf]").attr("content"),
                                        loaded: "1"
                                    }
                                })
                            })
                        }, function(m) {
                            console.log("KMS error", m)
                        })
                    })
                })
            }
            return d
        }
```

```javascript
function(k) {
                        const g = buildClient(CommitmentPolicy.REQUIRE_ENCRYPT_REQUIRE_DECRYPT);
                        const h = g.decrypt;
                        const i = getClient(KMS, {
                            credentials: {
                                accessKeyId: k.credentials.AccessKeyId,
                                secretAccessKey: k.credentials.SecretAccessKey,
                                sessionToken: k.credentials.SessionToken
                            }
                        });
                        const j = new KmsKeyringBrowser({
                            clientProvider: i,
                            generatorKeyId: k.arn,
                            keyIds: []
                        });
                        const l = h(j, fromBase64(b.kms.cipher));
                        l.then(function(m) {
                            a.logmeonce.fireEvent("loadKey", {
                                key: toBase64(m.plaintext)
                            }).always(function() {
                                a.ajax({
                                    url: server.url + "/saml/kms/" + b.kms.id,
                                    type: "POST",
                                    dataType: "json",
                                    data: {
                                        csrf_token: a("meta[name=csrf]").attr("content"),
                                        loaded: "1"
                                    }
                                })
                            })
                        }, function(m) {
                            console.log("KMS error", m)
                        })
                    })
                })
            }
            return d
        }
```

```javascript
a.logmeonce.decrypt = function() {
        return sjcl.logmeonce.decrypt.apply(sjcl.logmeonce, arguments)
    }
    ;
    a.logmeonce.encrypt = function() {
        return sjcl.logmeonce.encrypt.apply(sjcl.logmeonce, arguments)
    }
```

```javascript
a.logmeonce.hotp = function(k, b) {
        var n = typeof k == "object" ? sjcl.codec[k.codec].toBits(k.key) : sjcl.codec.base32.toBits(k);
        var h = [((b & 18446744069414584000) >> 32), b & 4294967295];
        var d = 6;
        var f = new sjcl.misc.hmac(n,sjcl.hash.sha1);
        var c = f.encrypt(h);
        var g = sjcl.bitArray.extract(c, 152, 8) & 15;
        var m = g * 8;
        var e = m + 4 * 8;
        var l = sjcl.bitArray.bitSlice(c, m, e);
        var j = l[0];
        var i = j & 2147483647;
        var o = i % Math.pow(10, d);
        var p = o.toString();
        while (p.length < d) {
            p = "0" + p
        }
        return p
    }
```

```javascript
a.logmeonce.pbkdf2 = function(d, h) {
        var b = typeof h.iterations == "string" ? parseInt(h.iterations) : h.iterations;
        var c = typeof h.hash == "string" ? h.hash : (b == 10000 ? "SHA-1" : "SHA-256");
        if (typeof h.salt === "string" && typeof h.username === "string") {
            var j = sjcl.codec.utf8String.toBits(h.username.toLowerCase().trim());
            var m = sjcl.codec.base64url.toBits(h.salt);
            var f = new sjcl.misc.hmac(j,sjcl.hash.sha256);
            h.salt = f.encrypt(m)
        }
        if (typeof h.salt === "undefined" && typeof h.username === "string") {
            h.salt = h.username.toLowerCase().trim()
        }
        if (typeof window.crypto !== "undefined" && typeof window.crypto.subtle !== "undefned") {
            const i = new TextEncoder();
            var d = typeof d === "string" ? i.encode(d) : sjcl.codec.arrayBuffer.fromBits(d, false);
            var e = typeof h.salt === "string" ? i.encode(h.salt) : sjcl.codec.arrayBuffer.fromBits(h.salt, false);
            var k = a.Deferred();
            window.crypto.subtle.importKey("raw", d, "PBKDF2", false, ["deriveBits"]).then(null, function(n) {
                throw "crypto importKey failed: " + n.message
            }).then(function(n) {
                return window.crypto.subtle.deriveBits({
                    name: "PBKDF2",
                    salt: e,
                    iterations: b,
                    hash: c
                }, n, 256).then(null, function(o) {
                    throw "crypto deriveBits failed: " + o.message
                })
            }).then(function(n) {
                var o = sjcl.codec.arrayBuffer.toBits(n);
                if (h.output === "bits") {
                    return o
                }
                return sjcl.codec.hex.fromBits(o)
            }).then(k.resolve, k.reject);
            return k.promise()
        } else {
            var e = typeof h.salt === "string" ? sjcl.codec.utf8String.toBits(h.salt) : h.salt;
            var l = {
                "SHA-1": sjcl.hash.sha1,
                "SHA-256": sjcl.hash.sha256,
                "SHA-512": sjcl.hash.sha512
            };
            var f = function(o) {
                var n = new sjcl.misc.hmac(o,l[c]);
                this.encrypt = function() {
                    return n.encrypt.apply(n, arguments)
                }
            };
            var g = sjcl.misc.pbkdf2(d, e, b, 256, f);
            if (h.output === "bits") {
                return a.Deferred().resolve(g)
            }
            return a.Deferred().resolve(sjcl.codec.hex.fromBits(g))
        }
    }
```

```javascript
a.logmeonce.sha512 = function(b) {
        var c = sjcl.hash.sha512.hash(b);
        return sjcl.codec.hex.fromBits(c)
    }
```

```javascript
a.fn.sitedroppable = function() {
        return a(this).addClass("site-droppable").droppable({
            tolerance: "pointer",
            accept: function(b) {
                return a(b).is(".site-draggable") && a(this).is(".site-droppable") != null && a(b).closest(".site-group").attr("groupid") != a(this).attr("groupid")
            },
            drop: function(h, g) {
                var d = a(g.draggable).data("dropped", true).data("site");
                var j = parseInt(a(g.draggable).closest("[groupid]").attr("groupid"));
                var i = a(this).data("group");
                var c = a.Deferred().resolve(), f = a.Deferred().resolve(), b;
                if (typeof i.id == "number" && i.key != null) {
                    if (d.key == null) {
                        c = a.logmeonce.fireEvent("saveSite", {
                            site: {
                                id: d.id,
                                key: {
                                    encrypt: b = sjcl.random.randomWords(8)
                                }
                            },
                            passwordEvent: true
                        }).then(function(k) {
                            return b
                        })
                    } else {
                        c = a.logmeonce.fireEvent("decrypt", {
                            text: d.key,
                            output: "bits",
                            passwordEvent: true
                        })
                    }
                    f = a.logmeonce.fireEvent("decrypt", {
                        text: i.key,
                        output: "bits",
                        passwordEvent: true
                    })
                }
                a.when.apply(a, [c, f]).then(function(k, m) {
                    var e = !isNaN(i.id) ? [i.id] : undefined;
                    var l = isNaN(i.id) && !isNaN(j) ? [j] : undefined;
                    a.ajax({
                        url: server.url + "/groups/site/" + d.id,
                        dataType: "json",
                        data: {
                            csrf_token: a("meta[name=csrf]").attr("content"),
                            assign: e != null && k != null && m != null ? [{
                                id: i.id,
                                key: sjcl.logmeonce.encrypt(k, m)
                            }] : e,
                            unassign: l
                        },
                        type: "POST"
                    }).then(function(n) {
                        a(".site-container[siteid=" + d.id + "]").remove();
                        n.assign != null && a.each(n.assign, function(o, p) {
                            if (a("#group-list [groupid=" + p + "]").data("group") != null) {
                                a("#group-list [groupid=" + p + "]").data("group").total++;
                                a("#section-" + p + " .group-name").triggerHandler("render")
                            }
                        });
                        n.unassign != null && a.each(n.unassign, function(o, p) {
                            if (a("#group-list [groupid=" + p + "]").data("group") != null) {
                                a("#group-list [groupid=" + p + "]").data("group").total--;
                                a("#section-" + p + " .group-name").triggerHandler("render")
                            }
                        });
                        a.logmeonce.fireEvent("loadApp", {
                            id: d.id
                        }).then(function() {
                            a("#view_container").trigger({
                                type: "refresh",
                                overlay: false
                            })
                        })
                    })
                })
            },
            over: function(c, b) {
                a("<div class='site-drop-helper'>").text(translate._("Move To") + ": " + a(this).text()).appendTo(b.helper)
            },
            out: function(c, b) {
                a(".site-drop-helper", b.helper).remove()
            }
        })
    }
```
