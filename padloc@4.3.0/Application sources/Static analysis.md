## Static Analysis

login-signup.ts

```typescript
 private async _login(): Promise<void> {
        if (this._loginButton.state === "loading") {
            return;
        }

        if (!this._emailInput.reportValidity()) {
            return;
        }

        this._emailInput.blur();
        this._loginPasswordInput.blur();

        const email = this._emailInput.value;
        let password = this._loginPasswordInput.value;

        if (this._emailInput.invalid) {
            await alert($l("Please enter a valid email address!"));
            this.go("start");
            return;
        }

        if (!password) {
            this._loginError = $l("Please enter your master password!");
            this.rumble();
            this._loginPasswordInput.focus();
            return;
        }

        this._loginError = "";
        this._loginButton.start();
        try {
            let addTrustedDevice = false;
            if (!this._deviceTrusted) {
                addTrustedDevice = await confirm(
                    $l("Do you want to add this device as a trusted device?"),
                    $l("Yes"),
                    $l("No"),
                    { title: $l("Add Trusted Device") }
                );
            }
            await this.app.login({
                email,
                password,
                authToken: this._authToken,
                addTrustedDevice,
                asAdmin: this.asAdmin,
            });
            this._loginButton.success();
            const { email: _email, authToken, deviceTrusted, invite: _invite, ...params } = this.router.params;
            const invite = this._invite;
            this.go(invite ? `invite/${invite.orgId}/${invite.id}` : "items", params);
        } catch (e: any) {
            switch (e.code) {
                case ErrorCode.AUTHENTICATION_REQUIRED:
                    this._loginButton.stop();

                    await alert($l("We failed to verify your email address. Please start over!"), {
                        type: "warning",
                        title: $l("Authentication Failed"),
                    });

                    this.go("start", { email });

                    return;
                case ErrorCode.INVALID_CREDENTIALS:
                    this._loginError = $l("Wrong master password. Please try again!");
                    this._loginButton.fail();
                    this.rumble();

                    this._loginFailedCount++;
                    if (this._loginFailedCount > 2) {
                        const recover = await confirm(
                            $l("Can't remember your master password?"),
                            $l("Recover Account"),
                            $l("Try Again")
                        );
                        if (recover) {
                            router.go("recover", { email });
                        }
                    } else {
                        this._loginPasswordInput.focus();
                    }
                    return;
                case ErrorCode.INVALID_SESSION:
                    this._loginButton.stop();

                    await alert($l("We failed to verify your session. Please start over!"), {
                        type: "warning",
                        title: $l("Authentication Failed"),
                    });

                    try {
                        const { pendingAuth } = await this._getPendingAuth();
                        if (pendingAuth) {
                            this.router.setParams({ pendingAuth: undefined, pendingAuthData: undefined });
                            this.app.storage.delete(pendingAuth);
                        }
                    } catch (e) {}

                    await this.app.logout();

                    router.go("start", { email });
                    return;
                case ErrorCode.NOT_FOUND:
                    this._loginButton.fail();
                    this._accountDoesntExist(email);
                    return;
                default:
                    this._loginButton.stop();
                    try {
                        const { pendingAuth } = await this._getPendingAuth();
                        if (pendingAuth) {
                            this.router.setParams({ pendingAuth: undefined, pendingAuthData: undefined });
                            this.app.storage.delete(pendingAuth);
                        }
                    } catch (e) {}

                    await this.app.logout();

                    router.go("start", { email });
                    alert(e.message, { type: "warning" });
                    throw e;
            }
        }
    }

```

app_src_elements_app_ts.chunk.js?

```javascript
async _login() {
        if (this._loginButton.state === "loading") {
            return;
        }
        if (!this._emailInput.reportValidity()) {
            return;
        }
        this._emailInput.blur();
        this._loginPasswordInput.blur();
        const email = this._emailInput.value;
        let password = this._loginPasswordInput.value;
        if (this._emailInput.invalid) {
            await (0,_lib_dialog__WEBPACK_IMPORTED_MODULE_8__.alert)((0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Please enter a valid email address!"));
            this.go("start");
            return;
        }
        if (!password) {
            this._loginError = (0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Please enter your master password!");
            this.rumble();
            this._loginPasswordInput.focus();
            return;
        }
        this._loginError = "";
        this._loginButton.start();
        try {
            let addTrustedDevice = false;
            if (!this._deviceTrusted) {
                addTrustedDevice = await (0,_lib_dialog__WEBPACK_IMPORTED_MODULE_8__.confirm)((0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Do you want to add this device as a trusted device?"), (0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Yes"), (0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("No"), { title: (0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Add Trusted Device") });
            }
            await this.app.login({
                email,
                password,
                authToken: this._authToken,
                addTrustedDevice,
                asAdmin: this.asAdmin,
            });
            this._loginButton.success();
            const { email: _email, authToken, deviceTrusted, invite: _invite, ...params } = this.router.params;
            const invite = this._invite;
            this.go(invite ? `invite/${invite.orgId}/${invite.id}` : "items", params);
        }
        catch (e) {
            switch (e.code) {
                case _padloc_core_src_error__WEBPACK_IMPORTED_MODULE_2__.ErrorCode.AUTHENTICATION_REQUIRED:
                    this._loginButton.stop();
                    await (0,_lib_dialog__WEBPACK_IMPORTED_MODULE_8__.alert)((0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("We failed to verify your email address. Please start over!"), {
                        type: "warning",
                        title: (0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Authentication Failed"),
                    });
                    this.go("start", { email });
                    return;
                case _padloc_core_src_error__WEBPACK_IMPORTED_MODULE_2__.ErrorCode.INVALID_CREDENTIALS:
                    this._loginError = (0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Wrong master password. Please try again!");
                    this._loginButton.fail();
                    this.rumble();
                    this._loginFailedCount++;
                    if (this._loginFailedCount > 2) {
                        const recover = await (0,_lib_dialog__WEBPACK_IMPORTED_MODULE_8__.confirm)((0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Can't remember your master password?"), (0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Recover Account"), (0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Try Again"));
                        if (recover) {
                            _globals__WEBPACK_IMPORTED_MODULE_4__.router.go("recover", { email });
                        }
                    }
                    else {
                        this._loginPasswordInput.focus();
                    }
                    return;
                case _padloc_core_src_error__WEBPACK_IMPORTED_MODULE_2__.ErrorCode.INVALID_SESSION:
                    this._loginButton.stop();
                    await (0,_lib_dialog__WEBPACK_IMPORTED_MODULE_8__.alert)((0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("We failed to verify your session. Please start over!"), {
                        type: "warning",
                        title: (0,_padloc_locale_src_translate__WEBPACK_IMPORTED_MODULE_1__.translate)("Authentication Failed"),
                    });
                    try {
                        const { pendingAuth } = await this._getPendingAuth();
                        if (pendingAuth) {
                            this.router.setParams({ pendingAuth: undefined, pendingAuthData: undefined });
                            this.app.storage.delete(pendingAuth);
                        }
                    }
                    catch (e) { }
                    await this.app.logout();
                    _globals__WEBPACK_IMPORTED_MODULE_4__.router.go("start", { email });
                    return;
                case _padloc_core_src_error__WEBPACK_IMPORTED_MODULE_2__.ErrorCode.NOT_FOUND:
                    this._loginButton.fail();
                    this._accountDoesntExist(email);
                    return;
                default:
                    this._loginButton.stop();
                    try {
                        const { pendingAuth } = await this._getPendingAuth();
                        if (pendingAuth) {
                            this.router.setParams({ pendingAuth: undefined, pendingAuthData: undefined });
                            this.app.storage.delete(pendingAuth);
                        }
                    }
                    catch (e) { }
                    await this.app.logout();
                    _globals__WEBPACK_IMPORTED_MODULE_4__.router.go("start", { email });
                    (0,_lib_dialog__WEBPACK_IMPORTED_MODULE_8__.alert)(e.message, { type: "warning" });
                    throw e;
            }
        }
    }
```

