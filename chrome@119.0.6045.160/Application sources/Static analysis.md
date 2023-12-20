## Static Analysis

password_manager.js

```javascript
class PasswordManagerImpl {
    addSavedPasswordListChangedListener(listener) {
        chrome.passwordsPrivate.onSavedPasswordsListChanged.addListener(listener)
    }
    removeSavedPasswordListChangedListener(listener) {
        chrome.passwordsPrivate.onSavedPasswordsListChanged.removeListener(listener)
    }
    addBlockedSitesListChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordExceptionsListChanged.addListener(listener)
    }
    removeBlockedSitesListChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordExceptionsListChanged.removeListener(listener)
    }
    addPasswordCheckStatusListener(listener) {
        chrome.passwordsPrivate.onPasswordCheckStatusChanged.addListener(listener)
    }
    removePasswordCheckStatusListener(listener) {
        chrome.passwordsPrivate.onPasswordCheckStatusChanged.removeListener(listener)
    }
    addInsecureCredentialsListener(listener) {
        chrome.passwordsPrivate.onInsecureCredentialsChanged.addListener(listener)
    }
    removeInsecureCredentialsListener(listener) {
        chrome.passwordsPrivate.onInsecureCredentialsChanged.removeListener(listener)
    }
    getSavedPasswordList() {
        return chrome.passwordsPrivate.getSavedPasswordList().catch((()=>[]))
    }
    getCredentialGroups() {
        return chrome.passwordsPrivate.getCredentialGroups()
    }
    getBlockedSitesList() {
        return chrome.passwordsPrivate.getPasswordExceptionList().catch((()=>[]))
    }
    getPasswordCheckStatus() {
        return chrome.passwordsPrivate.getPasswordCheckStatus()
    }
    getInsecureCredentials() {
        return chrome.passwordsPrivate.getInsecureCredentials()
    }
    getCredentialsWithReusedPassword() {
        return chrome.passwordsPrivate.getCredentialsWithReusedPassword()
    }
    startBulkPasswordCheck() {
        return chrome.passwordsPrivate.startPasswordCheck()
    }
    recordPasswordCheckInteraction(interaction) {
        chrome.metricsPrivate.recordEnumerationValue("PasswordManager.BulkCheck.UserAction", interaction, PasswordCheckInteraction.COUNT)
    }
    recordPasswordViewInteraction(interaction) {
        chrome.metricsPrivate.recordEnumerationValue("PasswordManager.PasswordViewPage.UserActions", interaction, PasswordViewPageInteractions.COUNT)
    }
    showAddShortcutDialog() {
        chrome.passwordsPrivate.showAddShortcutDialog()
    }
    requestCredentialsDetails(ids) {
        return chrome.passwordsPrivate.requestCredentialsDetails(ids)
    }
    requestPlaintextPassword(id, reason) {
        return chrome.passwordsPrivate.requestPlaintextPassword(id, reason)
    }
    addPassword(options) {
        return chrome.passwordsPrivate.addPassword(options)
    }
    changeCredential(credential) {
        return chrome.passwordsPrivate.changeCredential(credential)
    }
    removeCredential(id, fromStores) {
        chrome.passwordsPrivate.removeCredential(id, fromStores)
    }
    removeBlockedSite(id) {
        chrome.passwordsPrivate.removePasswordException(id)
    }
    muteInsecureCredential(insecureCredential) {
        chrome.passwordsPrivate.muteInsecureCredential(insecureCredential)
    }
    unmuteInsecureCredential(insecureCredential) {
        chrome.passwordsPrivate.unmuteInsecureCredential(insecureCredential)
    }
    undoRemoveSavedPasswordOrException() {
        chrome.passwordsPrivate.undoRemoveSavedPasswordOrException()
    }
    fetchFamilyMembers() {
        return chrome.passwordsPrivate.fetchFamilyMembers()
    }
    sharePassword(id, recipients) {
        chrome.passwordsPrivate.sharePassword(id, recipients)
    }
    importPasswords(toStore) {
        return chrome.passwordsPrivate.importPasswords(toStore)
    }
    continueImport(selectedIds) {
        return chrome.passwordsPrivate.continueImport(selectedIds)
    }
    resetImporter(deleteFile) {
        return chrome.passwordsPrivate.resetImporter(deleteFile)
    }
    requestExportProgressStatus() {
        return chrome.passwordsPrivate.requestExportProgressStatus()
    }
    exportPasswords() {
        return chrome.passwordsPrivate.exportPasswords()
    }
    addPasswordsFileExportProgressListener(listener) {
        chrome.passwordsPrivate.onPasswordsFileExportProgress.addListener(listener)
    }
    removePasswordsFileExportProgressListener(listener) {
        chrome.passwordsPrivate.onPasswordsFileExportProgress.removeListener(listener)
    }
    switchBiometricAuthBeforeFillingState() {
        chrome.passwordsPrivate.switchBiometricAuthBeforeFillingState()
    }
    showExportedFileInShell(filePath) {
        chrome.passwordsPrivate.showExportedFileInShell(filePath)
    }
    getUrlCollection(url) {
        return chrome.passwordsPrivate.getUrlCollection(url)
    }
    addPasswordManagerAuthTimeoutListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerAuthTimeout.addListener(listener)
    }
    removePasswordManagerAuthTimeoutListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerAuthTimeout.removeListener(listener)
    }
    extendAuthValidity() {
        chrome.passwordsPrivate.extendAuthValidity()
    }
    addAccountStorageOptInStateListener(listener) {
        chrome.passwordsPrivate.onAccountStorageOptInStateChanged.addListener(listener)
    }
    removeAccountStorageOptInStateListener(listener) {
        chrome.passwordsPrivate.onAccountStorageOptInStateChanged.removeListener(listener)
    }
    isOptedInForAccountStorage() {
        return chrome.passwordsPrivate.isOptedInForAccountStorage()
    }
    optInForAccountStorage(optIn) {
        chrome.passwordsPrivate.optInForAccountStorage(optIn)
    }
    isAccountStoreDefault() {
        return chrome.passwordsPrivate.isAccountStoreDefault()
    }
    movePasswordsToAccount(ids) {
        chrome.passwordsPrivate.movePasswordsToAccount(ids)
    }
    dismissSafetyHubPasswordMenuNotification() {
        chrome.send("dismissSafetyHubPasswordMenuNotification")
    }
    static getInstance() {
        return instance$5 || (instance$5 = new PasswordManagerImpl)
    }
    static setInstance(obj) {
        instance$5 = obj
    }
}
```

```javascript
class PasswordListItemElement extends PasswordListItemElementBase {
    static get is() {
        return "password-list-item"
    }
    static get template() {
        return getTemplate$j()
    }
    static get properties() {
        return {
            item: {
                type: Object,
                observer: "onItemChanged_"
            },
            first: Boolean,
            searchTerm: String,
            elementClass_: {
                type: String,
                computed: "computeElementClass_(first)"
            },
            numberOfAccounts_: String
        }
    }
    computeElementClass_() {
        return this.first ? "flex-centered" : "flex-centered hr"
    }
    ready() {
        super.ready();
        this.addEventListener("click", this.onRowClick_)
    }
    focus() {
        this.$.seePasswordDetails.focus()
    }
    async onRowClick_() {
        const ids = this.item.entries.map((entry=>entry.id));
        PasswordManagerImpl.getInstance().requestCredentialsDetails(ids).then((entries=>{
            const group = {
                name: this.item.name,
                iconUrl: this.item.iconUrl,
                entries: entries
            };
            this.dispatchEvent(new CustomEvent("password-details-shown",{
                bubbles: true,
                composed: true,
                detail: this
            }));
            Router.getInstance().navigateTo(Page.PASSWORD_DETAILS, group, Router.getInstance().currentRoute.queryParameters)
        }
        )).catch((()=>{}
        ));
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CREDENTIAL_ROW_CLICKED);
        const searchTerm = Router.getInstance().currentRoute.queryParameters.get(UrlParam.SEARCH_TERM) || "";
        chrome.metricsPrivate.recordBoolean("PasswordManager.UI.OpenedPasswordDetailsWhileSearching", !!searchTerm)
    }
    async onItemChanged_() {
        if (this.item.entries.length > 1) {
            this.numberOfAccounts_ = await PluralStringProxyImpl.getInstance().getPluralString("numberOfAccounts", this.item.entries.length)
        }
    }
    showNumberOfAccounts_() {
        return !this.searchTerm && this.item.entries.length > 1
    }
    getTitle_() {
        const term = this.searchTerm.trim().toLowerCase();
        if (!term) {
            return this.item.name
        }
        if (this.item.name.includes(term)) {
            return this.item.name
        }
        const entries = this.item.entries;
        const matchingUsername = entries.find((c=>c.username.toLowerCase().includes(term)))?.username;
        if (matchingUsername) {
            return this.item.name + " • " + matchingUsername
        }
        const domains = Array.prototype.concat(...entries.map((c=>c.affiliatedDomains || [])));
        const matchingDomain = domains.find((d=>d.name.toLowerCase().includes(term)))?.name;
        if (matchingDomain) {
            return this.item.name + " • " + matchingDomain
        }
        return this.item.name
    }
    getAriaLabel_() {
        return this.i18n("viewPasswordAriaDescription", this.item.name)
    }
}
```

