## Static Analysis

```dart
Future<FileSource> createFile({
    required String password,
    required String databaseName,
    bool openAfterCreate = false,
    CloudStorageSaveTarget? target,
  }) async {
    analytics.events.trackCreateFile();
    assert(!(databaseName.endsWith(AppConstants.kdbxExtension)));
    final credentials = Credentials(ProtectedValue.fromString(password));
    final kdbxFile = kdbxFormat.create(
      credentials,
      databaseName,
      generator: Env.AuthPass,
    );
    final bytes =
        await _saveFileToBytes<Uint8List>(kdbxFile, (bytes) async => bytes);
    FileSource fileSource;
    if (target == null) {
      final localSource = await _localFileSourceForDbName(databaseName);
      await localSource.contentWrite(bytes, metadata: <String, dynamic>{});
      fileSource = localSource;
    } else {
      final entity = await target.provider.createEntity(
        CloudStorageSelectorSaveResult(
            target.parent, _fileNameForDbName(databaseName)),
        bytes,
      );
      fileSource = entity;
    }
    if (openAfterCreate) {
      await openFile(fileSource, credentials).last;
    }
    return fileSource;
  }
```

