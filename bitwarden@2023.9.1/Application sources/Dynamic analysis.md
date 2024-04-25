## Dynamic Analysis

We first verify the function that we find in static analysis, and then we main focus on particular parameters.

The encryption key is "cZrH8B3QTXFetioyicnFBV0m93TfiBJx6ehKpkSn0ho=" 

Creating a item called ''test3''. The username and password are also ''test3'', we got the following object value.

```
data: "Q4ffRxEfFYw7i9hHHXK8hQ=="
encryptedString: "2./1uu3nodGAem91NQI7RbHQ==|Q4ffRxEfFYw7i9hHHXK8hQ==|+Q40clzbS3VGQF7pUN9CPzMlGeg+iRO/3qzCLcwWBdw="
encryptionType: 2
iv: "/1uu3nodGAem91NQI7RbHQ=="
mac: "+Q40clzbS3VGQF7pUN9CPzMlGeg+iRO/3qzCLcwWBdw="
```

Creating this item another time, we got the following object value.

```
data: "H14MPGMHnZVlL8hSHYBUkg=="
encryptedString: "2.1vhDrmQtASn5d0xJ6Em1KQ==|H14MPGMHnZVlL8hSHYBUkg==|L0zKWUPsn2jVftcMPBagfoxD/POWfIjE4b2xWTrXZIA="
encryptionType: 2
iv: "1vhDrmQtASn5d0xJ6Em1KQ=="
mac: "L0zKWUPsn2jVftcMPBagfoxD/POWfIjE4b2xWTrXZIA="
```

We conclude that the IV is dynamic.
