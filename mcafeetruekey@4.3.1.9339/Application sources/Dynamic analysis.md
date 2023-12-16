## Dynamic Analysis

When adding a new item

```javascript
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

and the asset returns a object

```javascript
{
    "autologin": true,
    "domain": "test.com",
    "favorite": false,
    "hostname": "www.test.com",
    "id": 149396198,
    "lastUsed": null,
    "login": "test",
    "logoUrl": false,
    "memo": null,
    "metaLoaded": true,
    "name": "test",
    "password": "AAR+UIqZgWypwdwU//ZdcL6EaK21guupONkqdG+7",
    "protectedWithFace": false,
    "protectedWithPassword": false,
    "subdomainOnly": false,
    "url": "http://www.test.com",
    "useCount": 0,
    "visible": true,
    "createdBy": "user"
}
```

and another function

```javascript
function mapAsset(attributes) {
            return {
                id: attributes.id,
                type: "login",
                autologin: attributes.autologin,
                clearMemo: attributes.memo,
                clearPassword: attributes.password || attributes.cpassword || null,
                domain: attributes.domain,
                isFavorite: attributes.favorite,
                lastUsageDate: attributes.lastUsed,
                login: attributes.login,
                name: attributes.name,
                protectedWithFace: !1,
                protectedWithPassword: attributes.protectedWithPassword,
                subdomainOnly: attributes.subdomainOnly,
                url: attributes.url,
                usageCount: attributes.useCount,
                visible: !0,
                createdBy: attributes.createdBy
            }
        }
```

this function is called by 

```javascript
sync: function(method, model, options) {
                var promise = void 0
                  , data = void 0
                  , trackProps = {
                    domain: model.get("domain"),
                    website_url: model.get("url"),
                    asset_title: model.get("name"),
                    asset_id: model.get("id"),
                    is_partner_asset: "partner" === model.get("createdBy")
                };
                switch (options && options.triggerContext && (trackProps.trigger_context = options.triggerContext),
                "create" !== method && "update" !== method || (trackProps.has_password = model.hasPassword(),
                trackProps.has_username = model.hasUsername()),
                method) {
                case "create":
                    data = mapToCore.mapAsset(model.toJSON()),
                    data.allowDuplicates = !0,
                    promise = comm.backgroundRequest("logins.create", data).then(mapFromCore.mapAsset).then(function(response) {
                        return trackProps.type = "manual-save",
                        trackProps.asset_id = response.id,
                        trackProps.is_partner_asset = "partner" === response.createdBy,
                        tracking.trigger("create_password", trackProps),
                        response
                    });
                    break;
                case "update":
                    data = mapToCore.mapAsset(model.toJSON()),
                    data.allowDuplicates = !0,
                    promise = comm.backgroundRequest("logins.update", data).then(mapFromCore.mapAsset).bind(this).then(function(response) {
                        var changedAttributes = _.keys(this.changedAttributes());
                        return trackProps.type = "manual-update",
                        1 === changedAttributes.length || "favorite" === changedAttributes[0] ? response : (trackProps.is_partner_asset = "partner" === response.createdBy,
                        tracking.trigger("edit_password", trackProps),
                        response)
                    });
                    break;
                case "delete":
                    promise = comm.backgroundRequest("logins.deleteById", {
                        id: model.id
                    }).bind(this).then(function(response) {
                        var props = _.omit(trackProps, "asset_title");
                        return tracking.trigger("delete_password", props),
                        response
                    });
                    break;
                case "read":
                    promise = comm.backgroundRequest("logins.getAll", {}).then(mapFromCore.mapAssets);
                    break;
                default:
                    Backbone.Model.prototype.sync.apply(this, arguments)
                }
                if (promise)
                    return promise.then(function(response) {
                        return options.success(response),
                        response
                    }, function(reason) {
                        return options.error(reason),
                        Promise.reject(reason)
                    })
            }
        })
    }
```

and another "save" function

```javascript
save: function() {
                            var _this2 = this
                              , attrs = this.getFieldsData();
                            if (!attrs || this.ui.btSave.hasClass("working"))
                                return !1;
                            this.model.get("tcp") === this.model.get("password") && (attrs.password = this.model.get("tep")),
                            this.ui.btSave.addClass("working"),
                            this.model.save(attrs, {
                                wait: !0
                            }).then(function() {
                                notifications.push({
                                    icon: "check",
                                    title: i18n.t("notifications.loginEdited.title"),
                                    description: i18n.t("notifications.loginEdited.desc")
                                }),
                                attrs = null,
                                _this2.model.unset("tep", {
                                    silent: !0
                                }),
                                _this2.model.unset("tcp", {
                                    silent: !0
                                }),
                                _this2.back()
                            }, function(e) {
                                if (!_this2.isDestroyed && _this2.isRendered) {
                                    var errText = translateError(e);
                                    _this2.ui.btSave.attr("data-txt-error", errText).removeClass("working").addClass("error")
                                }
                            })
                        },
                        back: function() {
                            this.destroy()
                        }
                    })
```

the content of "this.model" is 

```javascript
{
    "autologin": true,
    "domain": "test.com",
    "favorite": false,
    "hostname": "www.test.com",
    "id": 149396198,
    "lastUsed": "2023-11-17T11:06:21.455Z",
    "login": "test",
    "logoUrl": false,
    "memo": "",
    "metaLoaded": true,
    "name": "test",
    "password": "test",
    "protectedWithFace": false,
    "protectedWithPassword": false,
    "subdomainOnly": false,
    "url": "http://www.test.com/",
    "useCount": 1,
    "visible": true,
    "createdBy": "user",
    "tep": "AAR+UIqZgWypwdwU//ZdcL6EaK21guupONkqdG+7",
    "tcp": "test",
    "passwordStrength": 0
}
```

tep is encrypted password; tcp is plain password.

Therefore, we search for model.set

```javascript
onRender: function() {
                this.model.get("password") && "membership" !== this.model.get("kind") && (this.ui.spinner.removeClass("hidden"),
                this.model.set("tep", this.model.get("password"), {
                    silent: !0
                }),
                _fgcomm2["default"].backgroundRequest("getCp", this.model.get("password")).bind(this).then(function(result) {
                    var _this = this;
                    this.updateStrengthIndicator(result),
                    this.model.set("tcp", result, {
                        silent: !0
                    }),
                    this.model.set("password", result),
                    this.ui.clearField.val(result),
                    this.ui.obfuscatedField.val(result),
                    setTimeout(function() {
                        _this.ui.spinner.addClass("hidden")
                    }, 500)
                })),
                this.showStrengthIndicator()
            }
```

Finding:

1. Only password is encrypted in this object.
