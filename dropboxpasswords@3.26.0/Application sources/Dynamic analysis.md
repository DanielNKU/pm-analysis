## Dynamic Analysis

```javascript
addPasswordToFolder: ({folderUUID: t, item: i})=>{
            let n = fr.parse(t);
            return n ? {
                newUUID: xr.addItems([i], {
                    folderUUID: n
                })[0].identifier
            } : (xe.log("[ipc-server.ts:146]", `Invalid folder UUID: ${t}`),
            {
                newUUID: null
            })
        }
```

```javascript
addItems(i, n) {
            let d = this.getFolderOrDefaultToMain(n == null ? void 0 : n.folderUUID)
              , g = i.map(w=>zo.newItem(w))
              , h = zo.addItemsToFolder(d, ...g);
            return xe.log("[inventory.ts:227]", `Add ${i.length} item(s) to folder ${d.identifier}.`),
            Cr.addOrUpdateFolder(h),
            wh(g, !1),
            g
        }
```

```javascript
encryptFolder(i, n) {
            let d = Si.fromString(this.serializeFolder(n))
              , {encrypted: g, nonce: h} = bh(i, d)
              , w = Mi.newFolderWrapper(n.identifier, {
                encrypted: g,
                nonce: h
            });
            return JSON.stringify(Ft(Ft({}, n.rawWrapper), w))
        }
```

When we set a local passphrase, and unlock the password vault

```javascript
decryptKeysWithPassphrase(i) {
            return Qe(this, null, function*() {
                this.assertStorageType("local_passphrase");
                let n = Le.getOrThrow("keys");
                if ((0,
                Wc.default)(n.type === "local_passphrase", `LocalStore key type "${n.type}" does not match KeyStore key type "local_passphrase"`),
                n.encryptedBundle) {
                    let q = yield this.decryptPassphraseBundle(i, n.encryptedBundle);
                    (0,
                    Wc.default)(q, "Incorrect passphrase");
                    let R = fA.check(JSON.parse(q.toString()));
                    this.initFromBase64Keys(R),
                    yield this.encryptKeysWithPassphrase(i);
                    return
                }
                let d = yield this.decryptPassphraseBundle(i, aa(n.encryptedUserKey, "encryptedUserKey"));
                (0,
                Wc.default)(d, "Incorrect passphrase");
                let g = d.toString()
                  , h = Up(g).expect()
                  , w = yield this.decryptKeyPairBundle(h, aa(n.encryptedKeyPair, "encryptedKeyPair"));
                (0,
                Wc.default)(w, "Cannot decrypt key pair");
                let j = {
                    keyPair: vh.check(JSON.parse(w.toString())),
                    userKey: g
                };
                this.initFromBase64Keys(j),
                Zs.keys = j,
                yield this.tryBackupUserKeyToNmh()
            })
        }
```

and the object "n" is

```
{
    "type": "local_passphrase",
    "encryptedUserKey": {
        "encrypted": "yNolEiXkCqp/jjo/FiFPZUVQLfX6qj8YH2lcdxy7ctF47Z9KBzOwRQ==",
        "nonce": "sWN5CxGto1Ov9+BAV7zhyVj0JIKWmZ+y",
        "salt": "wsCqFwzMOlQtxX1qCFKi7A=="
    },
    "encryptedKeyPair": {
        "encrypted": "GDcQG2Iy5C/Cb67GtCICR9qxfiNydL34MHdPOkc3ztu0gIWFK3oaEwjxSojEUD3NfHa0M92TE7rymCcyEbcy03hD06U3K7QU16pqT66qlO7aEAHifcKBSd9lM7MGl4FsG6gYMqLqJL1KSiAFdO82zAkn3f8aFdT1vIJQG+fFouGtUGnq86nqOQ==",
        "nonce": "iqqzjC27G2VXiOseebb7NzCiOm8Vc5bg"
    }
}
```

and we find the key derivation functions of Dropbox

```javascript
nI = (t,i)=>{
        let n = xo.default.crypto_pwhash(r$, t, i.byteArray, xo.default.crypto_pwhash_OPSLIMIT_INTERACTIVE, i$, xo.default.crypto_pwhash_ALG_ARGON2ID13);
        return n$(n)
    }
```

and the key decryption using xchacha20poly1305

```javascript
pA = (t,i)=>{
        let n = xo.default.crypto_aead_xchacha20poly1305_ietf_decrypt(null, i.encrypted.byteArray, null, i.nonce.byteArray, bl(t).byteArray);
        return Si.fromArray(n)
    }
```

When we add items, we find

```javascript
addItemsToFolder(i, ...n) {
            let d = i.rawData
              , g = Xa(Ft({}, d), {
                items: [...d.items, ...n]
            });
            return Mi.newParsedFolder(g, i.rawWrapper)
        }
```

```javascript
addItems(i, n) {
            let d = this.getFolderOrDefaultToMain(n == null ? void 0 : n.folderUUID)
              , g = i.map(w=>zo.newItem(w))
              , h = zo.addItemsToFolder(d, ...g);
            return xe.log("[inventory.ts:227]", `Add ${i.length} item(s) to folder ${d.identifier}.`),
            Cr.addOrUpdateFolder(h),
            wh(g, !1),
            g
        }
```
