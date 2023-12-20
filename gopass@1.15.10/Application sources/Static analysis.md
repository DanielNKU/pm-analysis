## Static Analysis

```go
// Init a new password store with a first gpg id.
func (s *Action) Init(c *cli.Context) error {
	ctx := ctxutil.WithGlobalFlags(c)
	path := c.String("path")
	alias := c.String("store")

	ctx = initParseContext(ctx, c)
	out.Printf(ctx, "🍭 Initializing a new password store ...")

	if name := termio.DetectName(c.Context, c); name != "" {
		ctx = ctxutil.WithUsername(ctx, name)
	}

	if email := termio.DetectEmail(c.Context, c); email != "" {
		ctx = ctxutil.WithEmail(ctx, email)
	}

	inited, err := s.Store.IsInitialized(ctx)
	if err != nil {
		return exit.Error(exit.Unknown, err, "Failed to initialized store: %s", err)
	}

	if inited {
		out.Errorf(ctx, "Store is already initialized!")
	}

	if err := s.init(ctx, alias, path, c.Args().Slice()...); err != nil {
		return exit.Error(exit.Unknown, err, "Failed to initialize store: %s", err)
	}

	return nil
}
```

```go
func (s *Action) insert(ctx context.Context, c *cli.Context, name, key string, echo, multiline, force, appending bool, kvps map[string]string) error {
	var content []byte

	// if content is piped to stdin, read and save it.
	if ctxutil.IsStdin(ctx) {
		buf := &bytes.Buffer{}

		if written, err := io.Copy(buf, stdin); err != nil {
			return exit.Error(exit.IO, err, "failed to copy after %d bytes: %s", written, err)
		}

		content = buf.Bytes()
	}

	// update to a single YAML entry.
	if key != "" {
		return s.insertYAML(ctx, name, key, content, kvps)
	}

	if ctxutil.IsStdin(ctx) {
		if !force && !appending && s.Store.Exists(ctx, name) {
			return exit.Error(exit.Aborted, nil, "not overwriting your current secret")
		}

		return s.insertStdin(ctx, name, content, appending)
	}

	// don't check if it's force anyway.
	if !force && s.Store.Exists(ctx, name) && !termio.AskForConfirmation(ctx, fmt.Sprintf("An entry already exists for %s. Overwrite it?", name)) {
		return exit.Error(exit.Aborted, nil, "not overwriting your current secret")
	}

	// if multi-line input is requested start an editor.
	if multiline && ctxutil.IsInteractive(ctx) {
		return s.insertMultiline(ctx, c, name)
	}

	// if echo mode is requested use a simple string input function.
	if echo {
		ctx = termio.WithPassPromptFunc(ctx, func(ctx context.Context, prompt string) (string, error) {
			return termio.AskForString(ctx, prompt, "")
		})
	}

	pw, err := termio.AskForPassword(ctx, fmt.Sprintf("password for %s", name), true)
	if err != nil {
		return exit.Error(exit.IO, err, "failed to ask for password: %s", err)
	}

	return s.insertSingle(ctx, name, pw, kvps)
}
```

```go
func (s *Action) insertSingle(ctx context.Context, name, pw string, kvps map[string]string) error {
	sec, err := s.insertGetSecret(ctx, name, pw)
	if err != nil {
		return err
	}

	setMetadata(sec, kvps)

	// we only update the pw if the kvps were not set or if it's non-empty, because otherwise we were updating the kvps.
	if pw != "" || len(kvps) == 0 {
		sec.SetPassword(pw)
		audit.Single(ctx, pw)
	}

	if err := s.Store.Set(ctxutil.WithCommitMessage(ctx, "Inserted user supplied password"), name, sec); err != nil {
		if !errors.Is(err, store.ErrMeaninglessWrite) {
			return exit.Error(exit.Encrypt, err, "failed to write secret %q: %s", name, err)
		}
		out.Warningf(ctx, "No need to write: the secret is already there and with the right value")
	}

	return nil
}
```

```go
func (s *Action) insertGetSecret(ctx context.Context, name, pw string) (gopass.Secret, error) {
	if s.Store.Exists(ctx, name) {
		sec, err := s.Store.Get(ctx, name)
		if err != nil {
			return nil, exit.Error(exit.Decrypt, err, "failed to decrypt existing secret: %s", err)
		}

		return sec, nil
	}

	content, found := s.renderTemplate(ctx, name, []byte(pw))
	// no template found
	if !found {
		return secrets.New(), nil
	}

	// render template into a new secret
	sec := secrets.NewAKV()
	if _, err := sec.Write(content); err != nil {
		debug.Log("failed to handle template: %s", err)

		return secrets.New(), nil
	}

	return sec, nil
}
```

```go
// Encrypt will encrypt the given content for the recipients. If alwaysTrust is true
// the trust-model will be set to always as to avoid (annoying) "unusable public key"
// errors when encrypting.
func (g *GPG) Encrypt(ctx context.Context, plaintext []byte, recipients []string) ([]byte, error) {
	ctx, cancel := context.WithTimeout(ctx, Timeout)
	defer cancel()

	args := append(g.args, "--encrypt")
	if gpg.IsAlwaysTrust(ctx) {
		// changing the trustmodel is possibly dangerous. A user should always
		// explicitly opt-in to do this
		args = append(args, "--trust-model=always")
	}

	for _, r := range recipients {
		kl, err := g.listKeys(ctx, "public", r)
		if err != nil {
			debug.Log("Failed to check key %s. Adding anyway. %s", err)
		} else if len(kl.UseableKeys(gpg.IsAlwaysTrust(ctx))) < 1 {
			out.Printf(ctx, "Not using invalid key %s for encryption. (Check its expiration date or its encryption capabilities.)", r)

			continue
		}
		args = append(args, "--recipient", r)
	}

	buf := &bytes.Buffer{}

	cmd := exec.CommandContext(ctx, g.binary, args...)
	cmd.Stdin = bytes.NewReader(plaintext)
	// the encrypted blob is written to stdout
	cmd.Stdout = buf
	cmd.Stderr = os.Stderr

	debug.Log("%s %+v", cmd.Path, cmd.Args)
	err := cmd.Run()

	return buf.Bytes(), err
}
```
