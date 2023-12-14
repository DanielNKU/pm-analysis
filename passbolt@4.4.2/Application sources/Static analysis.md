## Static Analysis

src/all/background_page/service/crypto/encryptMessageServive.js

```javascript
class EncryptMessageService {
  /**
   * Encrypt symmetrically a message.
   *
   * @param {string} message The message to encrypt.
   * @param {array<string>} passwords The password to use to encrypt the message.
   * @param {array<openpgp.PrivateKey>} signingKeys The private key(s) to use to sign the message.
   * @returns {Promise<string>} the encrypted message in its armored version
   */
  static async encryptSymmetrically(message, passwords, signingKeys = null) {
    if (signingKeys) {
      OpenpgpAssertion.assertDecryptedPrivateKeys(signingKeys);
    }

    const gpgMessage = await OpenpgpAssertion.createMessageOrFail(message);
    return openpgp.encrypt({
      message: gpgMessage,
      passwords: passwords,
      signingKeys: signingKeys,
    });
  }

  /**
   * Encrypt and sign text message.
   *
   * @param {string} message The message to encrypt.
   * @param {openpgp.PublicKey} encryptionKey The public key(s) to use to encrypt the message
   * @param {array<openpgp.PrivateKey>} signingKeys The private key(s) to use to sign the message.
   * @returns {Promise<string>} the encrypted message in its armored version
   */
  static async encrypt(message, encryptionKey, signingKeys = null) {
    OpenpgpAssertion.assertPublicKey(encryptionKey);
    if (signingKeys) {
      OpenpgpAssertion.assertDecryptedPrivateKeys(signingKeys);
    }

    const gpgMessage = await OpenpgpAssertion.createMessageOrFail(message);
    return openpgp.encrypt({
      message: gpgMessage,
      encryptionKeys: encryptionKey,
      signingKeys: signingKeys,
    });
  }
}

export default EncryptMessageService;
```

in openpgp.js

```javascript
export async function encrypt({ message, encryptionKeys, signingKeys, passwords, sessionKey, format = 'armored', signature = null, wildcard = false, signingKeyIDs = [], encryptionKeyIDs = [], date = new Date(), signingUserIDs = [], encryptionUserIDs = [], signatureNotations = [], config, ...rest }) {
  config = { ...defaultConfig, ...config }; checkConfig(config);
  checkMessage(message); checkOutputMessageFormat(format);
  encryptionKeys = toArray(encryptionKeys); signingKeys = toArray(signingKeys); passwords = toArray(passwords);
  signingKeyIDs = toArray(signingKeyIDs); encryptionKeyIDs = toArray(encryptionKeyIDs); signingUserIDs = toArray(signingUserIDs); encryptionUserIDs = toArray(encryptionUserIDs); signatureNotations = toArray(signatureNotations);
  if (rest.detached) {
    throw new Error("The `detached` option has been removed from openpgp.encrypt, separately call openpgp.sign instead. Don't forget to remove the `privateKeys` option as well.");
  }
  if (rest.publicKeys) throw new Error('The `publicKeys` option has been removed from openpgp.encrypt, pass `encryptionKeys` instead');
  if (rest.privateKeys) throw new Error('The `privateKeys` option has been removed from openpgp.encrypt, pass `signingKeys` instead');
  if (rest.armor !== undefined) throw new Error('The `armor` option has been removed from openpgp.encrypt, pass `format` instead.');
  const unknownOptions = Object.keys(rest); if (unknownOptions.length > 0) throw new Error(`Unknown option: ${unknownOptions.join(', ')}`);

  if (!signingKeys) {
    signingKeys = [];
  }
  const streaming = message.fromStream;
  try {
    if (signingKeys.length || signature) { // sign the message only if signing keys or signature is specified
      message = await message.sign(signingKeys, signature, signingKeyIDs, date, signingUserIDs, signatureNotations, config);
    }
    message = message.compress(
      await getPreferredAlgo('compression', encryptionKeys, date, encryptionUserIDs, config),
      config
    );
    message = await message.encrypt(encryptionKeys, passwords, sessionKey, wildcard, encryptionKeyIDs, date, encryptionUserIDs, config);
    if (format === 'object') return message;
    // serialize data
    const armor = format === 'armored';
    const data = armor ? message.armor(config) : message.write();
    return convertStream(data, streaming, armor ? 'utf8' : 'binary');
  } catch (err) {
    throw util.wrapError('Error encrypting message', err);
  }
}

```

in message.js

```javascript
  async encrypt(encryptionKeys, passwords, sessionKey, wildcard = false, encryptionKeyIDs = [], date = new Date(), userIDs = [], config = defaultConfig) {
    if (sessionKey) {
      if (!util.isUint8Array(sessionKey.data) || !util.isString(sessionKey.algorithm)) {
        throw new Error('Invalid session key for encryption.');
      }
    } else if (encryptionKeys && encryptionKeys.length) {
      sessionKey = await Message.generateSessionKey(encryptionKeys, date, userIDs, config);
    } else if (passwords && passwords.length) {
      sessionKey = await Message.generateSessionKey(undefined, undefined, undefined, config);
    } else {
      throw new Error('No keys, passwords, or session key provided.');
    }

    const { data: sessionKeyData, algorithm: algorithmName, aeadAlgorithm: aeadAlgorithmName } = sessionKey;

    const msg = await Message.encryptSessionKey(sessionKeyData, algorithmName, aeadAlgorithmName, encryptionKeys, passwords, wildcard, encryptionKeyIDs, date, userIDs, config);

    let symEncryptedPacket;
    if (aeadAlgorithmName) {
      symEncryptedPacket = new AEADEncryptedDataPacket();
      symEncryptedPacket.aeadAlgorithm = enums.write(enums.aead, aeadAlgorithmName);
    } else {
      symEncryptedPacket = new SymEncryptedIntegrityProtectedDataPacket();
    }
    symEncryptedPacket.packets = this.packets;

    const algorithm = enums.write(enums.symmetric, algorithmName);
    await symEncryptedPacket.encrypt(algorithm, sessionKeyData, config);

    msg.packets.push(symEncryptedPacket);
    symEncryptedPacket.packets = new PacketList(); // remove packets after encryption
    return msg;
  }
```

