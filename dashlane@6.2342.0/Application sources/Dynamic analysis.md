## Dynamic Analysis

When logging out, we find the AES is in CBC mode

```javascript
 p = u.createDecipher(s.AES_CBC, a);
```

Finding:

1. The AES is CBC mode
1. Dashlane uses HMAC-SHA256.
