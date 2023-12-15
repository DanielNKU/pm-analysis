## Static Analysis

```typescript
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
