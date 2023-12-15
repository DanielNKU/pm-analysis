## Capturing Network Traffic

When logging in, we send

```
POST /user/login_v2 HTTP/2
Host: pwm.itopupdate.com
Content-Length: 172
Content-Type: application/json;charset=utf-8;
Device_id: ACE51E90-7515-D806-8AC1-0FE489C0EBE8
Apiver: 2
Devicename: ext-chr
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Lan: 
Ver: 1.4.21
Accept: */*
Origin: chrome-extension://lgbjhdkjmpgjgcbcdlhkokkckpjmedgc
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

7gvF8399o4sgb1u8Si/E4q7194Xf5b4LX0PQtGp+YMO1TeCWdMGVe8e+RVnLQ7a4pe7HSSHHo0o2NANxhTyXmkC3vxM1cEmaknHOGWJWCMG429+ZVJeukrWUzQ84XmH8h5cLOmsftblUBomHtY3rAgENH7wehCRnIkQPPBRKuD8=
```

and receive

```
HTTP/2 200 OK
Date: Wed, 22 Nov 2023 14:13:40 GMT
Content-Type: application/json; charset=UTF-8
Content-Length: 942
Server: Apache/2.4.58 () OpenSSL/1.0.2k-fips
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: false
Vary: Accept-Encoding

"0MoR3aEaACAuSUKvrggcQtAW5ZMhOuE+lTVvJj9QQwBHeARHiyvukf9hC+tVp7tGWFMxqq/nqrMbjSvIkesmPsP17lPb4U+BMhqk+sKh0KBZ2Awr0bDRCt2ezj8U+gxWB9Qu07L+g2lX4WGLSN2uWqnCdR+Up89zAFSFOEGGUEu5H6hhY3Nyu6TsngAZ3tJkt5IJhdJHPvjfTKWxGbBCnxNF7hIA5DG9DP91c+dAsIQrFfel6Kqc3SR4CNbUb4c+i/owolVq7T/gTym06hiyKLy/FEdBTnYm736uEmA5xR314HlN5ohRUbU5FhOA2S57NI3ZWI/R8t8basaY0zJhgrQHKPN81Y5q4hOGG2RpsQP0wuUluKXw3v4isuqkcbxpO1hAnJRe/A/DEokjG73SOM4NJi9fHXjKXklSnnnxZDyd9J/WG+52d+XuacMWihouVEuoY6QLz7dwJ4KTNThQiR5dxSyV92nhPxnM8ADR3peY2YImVwkjDoZZ3V5tNQO8hwQvPoC40v/DDE/EhQzevoy9+2zjiydVtszD7XRzjxjrg9KVbYQBPtVYJfASLweVKF2a4jz9UPJzFUcFj6hZA0xZOlFe8TF8XXiyOlGsRyxp8SPFxrFzKKrRMUYJ/ayNHZ3uDyWU8JVRnZ66nsPEcjVwaV/7WQsEaMDqvldFhX8hO8d/CPxft6C6HvnXKQe7QNyL8c053CiwhpakRyywzwjJ++MM43UL9MRVjveseCb/U2k7BXbwdi1j2VLp0oBnonm4EPZ8/0EzEoqDJ3iKAXC0JXS87x4lT6RO0ZsWdXsBiNn5/VlUrfjXdfOqZFcVi+EOxLhJwJQANIT/FI9HTVvJStrpj78+bKxJHKsKkoZ/otFRAfL6cRg+szS93ou5SQ1osWQ9P7X6y+bmDVWZGvVtYpaorGI9TUPKiEomBAU="
```

and send

```
POST /manage/get_item HTTP/2
Host: pwm.itopupdate.com
Content-Length: 44
Device_id: ACE51E90-7515-D806-8AC1-0FE489C0EBE8
Apiver: 2
Devicename: ext-chr
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json;charset=utf-8;
Ver: 1.4.21
Lan: 
Token: TMTYtVmtCd0xiVll5MFdLbTNHUTJwdnl0RGpXS1d4N2ExNzAwNjY2MDIw@MTU1OTYx@MTc4NjAz
Accept: */*
Origin: chrome-extension://lgbjhdkjmpgjgcbcdlhkokkckpjmedgc
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

CMhX3OnOuRhGr1xWgKw3IFsCMHaY6eCNc8bCjsXKgzQ=
```

and receive

```
HTTP/2 200 OK
Date: Wed, 22 Nov 2023 14:13:40 GMT
Content-Type: application/json; charset=UTF-8
Content-Length: 1242
Server: Apache/2.4.58 () OpenSSL/1.0.2k-fips
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: false
Vary: Accept-Encoding

"0MoR3aEaACAuSUKvrggcQqSsgOuWuCertCE0R1uMlR28DEzf9qIsHfxBLemIbm/33/5yG+ziAclLFtOjGKOE6sUGDZpJXMTrobzvMLoDOUtPqh0CqXeR+3Ai8KTmXZsGe74wCq6kCF9QC5XjCw4H2AAon/gZt9ZW2hbrG0upZ2udqteebrpdaGwSdAV/TgfWdXjxl4Xu83Hi46JtQ4qhZRRbsPpcHuiS5s9GS6amXn324m/Lf3nBvjrCRJvb++rk6xOU8p2okreH7p76jHGCj87Y/+ttr3evpqr3npso/rgZRMK/BCnnaOFAtAntrBpumsMCuN/2ld1LvXHGtJwVEZmXQgLLUbUXmMrIvw1fbxDVey1CAvhVO0p25snb2d3YOMQ7XIXetYRyO7RD28eFIdeRYHk2P2VDbobe31wBBHbPfLt3qkSSnClyJDK7r3O01oj1a4qG/5f/upga71dxgy74fHnIwm9gCFruXULi8pDa0hYZXEEP49Q3aPaVM3FypNuNuEwjG+JaFQNx4hEkjfaPMwnKXDjETIa3ig2JMy6o2gbGHyrpEYuPkzZXmc6I+MK6MnZ5/DlTi24AUC5KSV6UHAjJfFqzo1QkLtNBDG16AuvjFYg2sn+0pKGbJOYAMbgjXeRJQKFujriE+DVBWL9Ke5hjeXwXDOI45ygYc+RdyacZbLEM0WgI+tsxTdMASXkK1lWCuy5XoBd9/lmE+oY46ijGV0NzJ/2wi9+gwhp5DFK/lDxbgC/WAlCPOp2zwxsoL0ssjHzmxyffmJPUM65OBVnfHkIpTTIA5nJw7ha6palGrQDG2DO5XsaXmrKSyZuU5rjS0K5ZVPXWRXpPJaCP06w5c52pe2FVig67PHJznXFyqA6/e/JFBfNy3Rp4f8y1CP90PxqZ1oEP6tvmelfM9+UZyXv2rSJcvzLOoSVEipffbIVkCroLx9gNFaD49ulEAJMR5sihmKJVJwYZPXHAM0jKQQqWGQAOoBTPXUx3eBVEDaWEB8ijalU29cXhlbwCkk1gi30Z3Cv5CFSccgTTGMbHCS0B+2CEY4QV1FDRlbRCVsX8zeKELDVfYJUsjZg5YVEhHilSLuoLbM72HErHqWqqz8pdcydGqvN4SR1BqdefGrgplnCPVH5QHxdjfCkSDulOC4G1JB/riuaJ0RDHGRAdgqQOQYvbvY5BDmnM+8HfYCgXDRF+ojECPy3aTKBsD5klbiO+bTWxsAkDvA=="
```

When creating a new item, we send

```
POST /manage/create_item HTTP/2
Host: pwm.itopupdate.com
Content-Length: 384
Device_id: ACE51E90-7515-D806-8AC1-0FE489C0EBE8
Apiver: 2
Devicename: ext-chr
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json;charset=utf-8;
Ver: 1.4.21
Lan: 
Token: TMTYtVmtCd0xiVll5MFdLbTNHUTJwdnl0RGpXS1d4N2ExNzAwNjY2MDIw@MTU1OTYx@MTc4NjAz
Accept: */*
Origin: chrome-extension://lgbjhdkjmpgjgcbcdlhkokkckpjmedgc
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

BHs/Utgc8p9ZryBXYBu/DnkOsrg2QAgr9hPIB/B0z8wLC9o//0qKW08A8CIsnNBpmOMpcDnRX497Co0XLfFOoujupjOGkEsKPd3+sHcsF+irvtIA6CFD8Hf5/tyXXBwFr1givk5j3ZJ6COZInJfjxRvhbME3w8ifHxSPjt138equrhfITHm3+zn9DcTem9tTI/5NZG9S86puOwmfNK/xpbZ/24VcRAaRYd24CKP/IpacvhiurkVl7vCe4BkpPmuJcCr6C+S2qwI0bnqszX4vgnAehxFRxWK/Nlry4K7EDPU6pBngRg7APdGsXuqQ79nmy3PoCUJNTafabj5eAMYawozXNWAPsj63X39CioxQpYIeqibSmnieq8C9g6b3o1Ds
```

and receive

```
HTTP/2 200 OK
Date: Wed, 22 Nov 2023 14:15:45 GMT
Content-Type: application/json; charset=UTF-8
Content-Length: 110
Server: Apache/2.4.58 () OpenSSL/1.0.2k-fips
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: false
Vary: Accept-Encoding

"0MoR3aEaACAuSUKvrggcQjZf4y/QtweQPkfOEM5CdFmnrxP3BwnUWg+j3AcMBb4hp+0mYavb1QqillhaNIR36wENH7wehCRnIkQPPBRKuD8="
```

we also find that all the encrypted data was encrypted by an hard-encode key

```javascript
async PostJson(url, obj, ext_headers) {
                var key = CryptoJS.enc.Utf8.parse("7F37B64034E84931BDD06DC9B6A7DB72");
                let body = JSON.stringify(obj);
                try {
                    body = CryptoJS.AES.encrypt(body, key, {
                        mode: CryptoJS.mode.ECB
                    }).toString()
                } catch (e) {
                    return {
                        status: "fail"
                    }
                }
                var headers = new Headers;
                let browserName = (await new Promise(((resolve,reject)=>{
                    chrome.storage.local.get({
                        extension: {}
                    }, (rs=>{
                        resolve(rs)
                    }
                    ))
                }
                ))).extension.ext
                  , origin = "";
                origin = "Chrome" === browserName ? "ext-chr" : "Microsoft Edge" === browserName ? "ext-edg" : "Firefox" === browserName ? "ext-ffx" : "Opera" === browserName ? "ext-opr" : "ext-oth",
                headers.append("Content-Type", "application/json;charset=utf-8;"),
                headers.append("ver", this.cache.version),
                headers.append("apiVer", "2"),
                headers.append("device_id", this.cache.devicesId),
                headers.append("devicename", origin),
                headers.append("lan", this.lan()),
                this.cache.devicesId;
                let accessToken = ""
                  , userInfo = this.cache;
                if (userInfo[userInfo.curUserId] && (accessToken = userInfo[userInfo.curUserId].accessToken),
                accessToken && headers.append("token", accessToken),
                ext_headers)
                    for (let k in ext_headers)
                        headers.append(k, ext_headers[k]);
                let request = new Request(url,{
                    method: "post",
                    headers,
                    body
                })
                  , text = "";
                try {
                    let controller = new AbortController
                      , timeout = new Promise(((resolve,reject)=>{
                        setTimeout((()=>{
                            controller.abort(),
                            reject("timeout")
                        }
                        ), 6e4)
                    }
                    ))
                      , download = fetch(request, {
                        signal: controller.signal
                    }).then((response=>response.text()));
                    text = await Promise.race([download, timeout])
                } catch (e) {
                    return "AbortError" === e.name ? {
                        status: "ABORT"
                    } : {
                        status: "BLOCK"
                    }
                }
                '"' === text[0] && '"' === text[text.length - 1] && (text = text.substring(1, text.length - 1));
                try {
                    text = CryptoJS.AES.decrypt(text, key, {
                        mode: CryptoJS.mode.ECB
                    }).toString(CryptoJS.enc.Utf8);
                    let rs = JSON.parse(text);
                    if (rs && "ok" === rs.status)
                        return rs;
                    if (5200 === rs.error.code) {
                        if (0 === await this.reflushToken()) {
                            return await this.PostJson(url, obj, ext_headers)
                        }
                        return userInfo[userInfo.curUserId] && (userInfo[userInfo.curUserId].__accessTokenInvalid = !0),
                        await this.save(),
                        {
                            status: "fail"
                        }
                    }
                    return rs
                } catch (e) {
                    return {
                        status: "fail"
                    }
                }
            }
```

We can use

```javascript
CryptoJS.AES.decrypt("BHs/Utgc8p9ZryBXYBu/DnkOsrg2QAgr9hPIB/B0z8wLC9o//0qKW08A8CIsnNBpmOMpcDnRX497Co0XLfFOoujupjOGkEsKPd3+sHcsF+irvtIA6CFD8Hf5/tyXXBwFr1givk5j3ZJ6COZInJfjxRvhbME3w8ifHxSPjt138equrhfITHm3+zn9DcTem9tTI/5NZG9S86puOwmfNK/xpbZ/24VcRAaRYd24CKP/IpacvhiurkVl7vCe4BkpPmuJcCr6C+S2qwI0bnqszX4vgnAehxFRxWK/Nlry4K7EDPU6pBngRg7APdGsXuqQ79nmy3PoCUJNTafabj5eAMYawozXNWAPsj63X39CioxQpYIeqibSmnieq8C9g6b3o1Ds", key, { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8)
```

to verify the data
