## Dynamic Analysis

When we log in, we find

```typescript
async authenticate(r: Request | Response): Promise<void> {
        const data = (<Request>r).params || (<Response>r).result;
        r.auth = await this._sign(data);
    }
```

When we type the password, we find

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

and 

```javascript
async login({
        email,
        password,
        authToken,
        addTrustedDevice,
        asAdmin,
    }: {
        email: string;
        password: string;
        authToken?: string;
        addTrustedDevice?: boolean;
        asAdmin?: boolean;
    }) {
        if (!this._cachedStartCreateSessionResponses.has(email)) {
            // Fetch authentication info
            this._cachedStartCreateSessionResponses.set(
                email,
                await this.api.startCreateSession(new StartCreateSessionParams({ email, authToken, asAdmin }))
            );
        }

        const { accountId: accId, keyParams, srpId, B } = this._cachedStartCreateSessionResponses.get(email)!;

        const auth = new Auth(email);
        auth.keyParams = keyParams;

        // Generate auth secret
        const authKey = await auth.getAuthKey(password);

        // Initialize SRP object
        const srp = new SRPClient();
        await srp.initialize(authKey);
        await srp.setB(B);

        // Create session object
        const session = await this.api.completeCreateSession(
            new CompleteCreateSessionParams({ accountId: accId, A: srp.A!, M: srp.M1!, addTrustedDevice, srpId })
        );

        // Apply session key and update state
        session.key = srp.K!;
        this.setState({ session });

        // Fetch and unlock account object
        const account = await this.api.getAccount();
        await account.unlock(password);
        this.setState({ account });

        // Save application state
        await this.save();

        // Load organizations and vaults
        await this.synchronize();
    }

```

and the key derivation

```javascript
async getAuthKey(password: string) {
        // If no salt is set yet (i.e. during initialization),
        // generate a random value
        if (!this.keyParams.salt.length) {
            this.keyParams.salt = await getProvider().randomBytes(16);
        }
        return getProvider().deriveKey(stringToBytes(password), this.keyParams);
    }
```

After logging in, we find

```javascript
async unlock(password: string) {
        await super.unlock(password);
        await this._loadSecrets();
    }
```

```typescript
private async _loadSecrets() {
        const secrets = new AccountSecrets().fromBytes(await this.getData());
        if (!secrets.favorites) {
            secrets.favorites = new Set<VaultItemID>();
        }
        if (!secrets.tags) {
            secrets.tags = [];
        }
        Object.assign(this, secrets);
    }
```

```javascript
async getData(): Promise<Uint8Array> {
        if (!this.encryptedData || !this._key) {
            throw new Err(ErrorCode.DECRYPTION_FAILED);
        }
        return await getProvider().decrypt(this._key, this.encryptedData, this.encryptionParams);
    }
```

