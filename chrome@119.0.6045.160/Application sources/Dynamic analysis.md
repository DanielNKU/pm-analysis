## Dynamic Analysis

When adding a new item, we find the class

```javascript
class AddPasswordDialogElement extends AddPasswordDialogElementBase {
    constructor() {
        super(...arguments);
        this.setSavedPasswordsListener_ = null
    }
    static get is() {
        return "add-password-dialog"
    }
    static get template() {
        return getTemplate$K()
    }
    static get properties() {
        return {
            website_: {
                type: String,
                value: ""
            },
            username_: {
                type: String,
                value: ""
            },
            password_: {
                type: String,
                value: ""
            },
            note_: {
                type: String,
                value: ""
            },
            urlCollection_: Object,
            usernamesBySignonRealm_: {
                type: Object,
                values: ()=>new Map
            },
            websiteErrorMessage_: {
                type: String,
                value: null
            },
            usernameErrorMessage_: {
                type: String,
                computed: "computeUsernameErrorMessage_(urlCollection_, username_, " + "usernamesBySignonRealm_)"
            },
            isPasswordInvalid_: {
                type: Boolean,
                value: false
            },
            canAddPassword_: {
                type: Boolean,
                computed: "computeCanAddPassword_(websiteErrorMessage_, username_, " + "password_, note_)"
            },
            storeOptionAccountValue_: {
                type: String,
                value: chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT,
                readonly: true
            },
            storeOptionDeviceValue_: {
                type: String,
                value: chrome.passwordsPrivate.PasswordStoreSet.DEVICE,
                readonly: true
            }
        }
    }
    static get observers() {
        return ["updateDefaultStore_(isAccountStoreUser)"]
    }
    connectedCallback() {
        super.connectedCallback();
        this.setSavedPasswordsListener_ = passwordList=>{
            this.usernamesBySignonRealm_ = getUsernamesByOrigin(passwordList)
        }
        ;
        PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.ADD_DIALOG_OPENED)
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        this.setSavedPasswordsListener_ = null
    }
    updateDefaultStore_() {
        if (this.isAccountStoreUser) {
            PasswordManagerImpl.getInstance().isAccountStoreDefault().then((isAccountStoreDefault=>{
                this.$.storePicker.value = isAccountStoreDefault ? this.storeOptionAccountValue_ : this.storeOptionDeviceValue_
            }
            ))
        }
    }
    closeDialog_() {
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.ADD_DIALOG_CLOSED);
        this.$.dialog.close()
    }
    async validateWebsite_() {
        if (this.website_.length === 0) {
            this.websiteErrorMessage_ = null;
            return
        }
        PasswordManagerImpl.getInstance().getUrlCollection(this.website_).then((urlCollection=>{
            this.urlCollection_ = urlCollection;
            this.websiteErrorMessage_ = !urlCollection ? this.i18n("notValidWebsite") : null
        }
        )).catch((()=>this.websiteErrorMessage_ = this.i18n("notValidWebsite")))
    }
    onWebsiteInputBlur_() {
        if (this.website_.length === 0) {
            this.websiteErrorMessage_ = ""
        } else if (!this.websiteErrorMessage_ && !this.website_.includes(".")) {
            this.websiteErrorMessage_ = this.i18n("missingTLD", `${this.website_}.com`)
        }
    }
    isWebsiteInputInvalid_() {
        return this.websiteErrorMessage_ !== null
    }
    showWebsiteError_() {
        return !!this.websiteErrorMessage_ && this.websiteErrorMessage_.length > 0
    }
    computeUsernameErrorMessage_() {
        const signonRealm = this.urlCollection_?.signonRealm;
        if (!signonRealm) {
            return null
        }
        if (this.usernamesBySignonRealm_.has(signonRealm) && this.usernamesBySignonRealm_.get(signonRealm).has(this.username_)) {
            recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.DUPLICATED_CREDENTIAL_ENTERED);
            return this.i18n("usernameAlreadyUsed", this.website_)
        }
        return null
    }
    doesUsernameExistAlready_() {
        return !!this.usernameErrorMessage_
    }
    onPasswordInput_() {
        this.isPasswordInvalid_ = this.password_.length === 0
    }
    isNoteInputInvalid_() {
        return this.note_.length >= PASSWORD_NOTE_MAX_CHARACTER_COUNT
    }
    getFirstNoteFooter_() {
        return this.note_.length < PASSWORD_NOTE_WARNING_CHARACTER_COUNT ? "" : this.i18n("passwordNoteCharacterCountWarning", PASSWORD_NOTE_MAX_CHARACTER_COUNT)
    }
    getSecondNoteFooter_() {
        return this.note_.length < PASSWORD_NOTE_WARNING_CHARACTER_COUNT ? "" : this.i18n("passwordNoteCharacterCount", this.note_.length, PASSWORD_NOTE_MAX_CHARACTER_COUNT)
    }
    computeCanAddPassword_() {
        if (this.isWebsiteInputInvalid_() || this.website_.length === 0) {
            return false
        }
        if (this.doesUsernameExistAlready_()) {
            return false
        }
        if (this.password_.length === 0) {
            return false
        }
        if (this.isNoteInputInvalid_()) {
            return false
        }
        return true
    }
    onAddClick_() {
        assert(this.computeCanAddPassword_());
        assert(this.urlCollection_);
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.CREDENTIAL_ADDED);
        const useAccountStore = this.isAccountStoreUser && this.$.storePicker.value === this.storeOptionAccountValue_;
        if (!this.$.storePicker.hidden) {
            chrome.metricsPrivate.recordBoolean("PasswordManager.AddCredentialFromSettings.AccountStoreUsed2", useAccountStore)
        }
        if (this.note_.trim()) {
            recordPasswordNoteAction(PasswordNoteAction.NOTE_ADDED_IN_ADD_DIALOG)
        }
        PasswordManagerImpl.getInstance().addPassword({
            url: this.urlCollection_.signonRealm,
            username: this.username_,
            password: this.password_,
            note: this.note_,
            useAccountStore: useAccountStore
        }).then((()=>{
            this.closeDialog_()
        }
        )).catch((()=>{}
        ))
    }
    getViewExistingPasswordAriaDescription_() {
        return this.urlCollection_ ? this.i18n("viewExistingPasswordAriaDescription", this.username_, this.urlCollection_.shown) : ""
    }
    onViewExistingPasswordClick_(e) {
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.DUPLICATE_CREDENTIAL_VIEWED);
        e.preventDefault();
        Router.getInstance().navigateTo(Page.PASSWORD_DETAILS, this.urlCollection_?.shown);
        this.closeDialog_()
    }
}
```

and the function

```javascript
addPassword(options) {
        return chrome.passwordsPrivate.addPassword(options)
    }
```

