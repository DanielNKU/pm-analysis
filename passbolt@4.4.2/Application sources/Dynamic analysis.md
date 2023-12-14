## Dynamic Analysis

When typing passphrase, we find this function

```javascript
async checkPassphrase(e) {
                    try {
                        await this.props.context.port.request("passbolt.auth.verify-passphrase", e)
                    } catch (e) {
                        if ("InvalidMasterPasswordError" === e.name || "GpgKeyError" === e.name)
                            throw e;
                        await this.setState({
                            state: B,
                            error: e
                        })
                    }
                }
```

```javascript
 request(e, ...t) {
                        const o = (0,
                        qe.Z)()
                          , r = [e, o].concat(t);
                        return new Promise(((e,t)=>{
                            this.once(o, ((o,...r)=>{
                                "SUCCESS" === o ? e.apply(null, r) : "ERROR" === o && t.apply(null, r)
                            }
                            )),
                            this.emit.apply(this, r)
                        }
                        ))
                    }
```

When we decrypt items, we find this function

```javascript
decryptResourceSecret(e) {
                    return this.props.context.port.request("passbolt.secret.decrypt", e)
                }
```

