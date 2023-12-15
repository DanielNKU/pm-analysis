## Dynamic Analysis

When we log in, we find the function that calculates the password hash

```javascript
exports.calculatePasswordHash = async function(uname, pwd) {
            uname || (uname = this.username);
            let Bd_buf = await pbkdf2(fromUtf8(pwd), fromUtf8(uname), 1e5, 256);
            return Bd_buf = await pbkdf2(Bd_buf.arr.buffer, fromUtf8(pwd), 2, 256),
            Bd_buf.b64
        }
```

and send the password hash

```javascript
async loginv2(username, password, is_force_login) {
                let __is_force_login = is_force_login ? 1 : 2
                  , hash = await calculatePasswordHash(username, password);
                return await (await UserInfo.build()).PostJson(config.login_v2, {
                    email: username,
                    masterkey_hash: hash,
                    is_force_login: __is_force_login
                })
            }
```

The email is in plaintext for the server

![dynamic](fig/dynamic.png)

When unlocking password manager, we find the function

```javascript
async setSMK(uname, pwd) {
                uname || (uname = this.username),
                this.username = uname;
                let buf = (await pbkdf2(fromUtf8(pwd), fromUtf8(uname), 1e5, 256)).arr.buffer;
                this.sbuf = await stretchKey(buf),
                await this.save()
            }
```

and unlock function

```javascript
async unlock(master, beforemit) {
                let userInfo = await (await UserInfo.build()).get()
                  , username = userInfo.curUser
                  , psk = ""
                  , cuinf = userInfo[userInfo.curUserId];
                if (cuinf && (psk = userInfo[userInfo.curUserId].psk),
                await this.verifyMaster(master))
                    return await (await Mysterious.build()).setSMK(username, master),
                    await this.save(),
                    await (await Mysterious.build()).setPsk(psk),
                    await cacheStatus.put({
                        status: "off"
                    }),
                    beforemit && await beforemit(),
                    await DPM_Event.emitunlock(),
                    await this.lockStatusNotify(),
                    await curUserInfo.put("lockedtype", ""),
                    await this._thrid_succ_counted(cuinf),
                    {
                        succ: !0,
                        err: ""
                    };
                if ("ok" != (await (await UserInfo.build()).PostJson(config.heartbeat, {})).status) {
                    let account_ver = await (await UserInfo.build()).getAcount_ver(username)
                      , result = {};
                    if (1 != account_ver.account_ver && account_ver.account_ver ? 2 == account_ver.account_ver && (result = await this.loginv2(username, master)) : result = await this.loginv1(username, master),
                    "ok" === result.status) {
                        await this.logOut();
                        let remember = !!userInfo.lastUser;
                        return await this.onLoginResponse(result, username, {
                            type: "password",
                            data: master
                        }, remember, "v" + (account_ver.account_ver ? account_ver.account_ver : 1))
                    }
                }
                return {
                    succ: !1,
                    err: "password"
                }
            }
```

