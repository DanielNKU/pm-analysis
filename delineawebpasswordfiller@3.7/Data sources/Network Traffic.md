## Capturing Network Traffic

When logging in, we first type our username and send

```
POST /identity/Security/StartAuthentication HTTP/2
Host: example.delinea.app
Cookie: visid_incap_2905539=szrhV4QQTAa3RbFU3Yre9Rm6YmUAAAAAQUIPAAAAAAD48gMLQ4N7PC60BE/NNu+a; incap_ses_1132_2905539=WiJrMv/PflhhHNutI621D4zfYmUAAAAASiyaYbCC+6adp3SMmUeYjQ==; nlbi_2905539=tYxKKb7W8DwWVXSG3xBjPwAAAABVZ5Hsolx1PRRnHvemqo4X; AntiIwaLoop=AntiLoop=true; userdata=eyJEYXRhIjoiL3dVa05ESXhNRUk1T0RrdE1rTkRSUzAwTlRVNExUaERORVl0UVVSRE5UTkNNa0pETUVWQ0FnQnVwTUNuZGl0QXc3dUNwdTA3SDhyVXEyMXlOMExtSnZZMDl0QU51bW9VYWduemxIQVl2ckZrbm9sQzBFUDViWmdEdld2TVJRTHZDNDFmQkFNaXlPNk9wSnNWUThGQUFmTEpGS0ExQ3M2eWhXbkRXMnJ3Q2o3aWo3Z0t0M29VbUE9PSJ9; _dd_s=rum=2&id=c7fb24d9-3a55-4fd9-a101-a063976e611f&created=1700978592318&expire=1700980984748
Content-Length: 44
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Accept: application/json, text/plain, */*
Content-Type: application/json
X-Centrify-Native-Client: true
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Origin: https://example.delinea.app
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://example.delinea.app/view/auth/start
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"User":"cloudadmin@example","Version":"1.0"}
```

and receive

```
HTTP/2 200 OK
Date: Sun, 26 Nov 2023 06:28:07 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 1053
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
Expires: -1
X-Cfy-Tx-Id: 6aa0d7ad15ce4593b0b3491273984407
X-Cfy-Tx-Dt: MTEvMjYvMjAyMyA2OjI4OjA2IEFN
X-Cfy-Tx-Tm: 1012
Set-Cookie: sessdata=L3dVa05ESXhNRUk1T0RrdE1rTkRSUzAwTlRVNExUaERORVl0UVVSRE5UTkNNa0pETUVWQ0FzTmpHREF1RmIrQWRjNjdPaXZyT3dHKzE2Q2dxWVJWNmlPLy9GbXN5Z29sSDlmT0RLcXgrTDVyUDZvQVFqeExHZk9XTU1HdUgwVjU4MkRhY1FJVnZNalBEV3B0c01FM3pZSklSdzFCS2xmZg__; path=/;SameSite=Lax; secure; HttpOnly
X-Robots-Tag: noindex, nofollow
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
Access-Control-Allow-Origin: https://example.delinea.app
Access-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH, OPTIONS
X-Centrify-Native-Client: true
Access-Control-Allow-Headers: DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Authorization,Range,X-CENTRIFY-NATIVE-CLIENT,X-CFY-CHALLENGEID,X-CIEM-SIGNALRID,Service-Worker-Allowed
Access-Control-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
Vary: Origin, Accept-Language
X-Incap-Sess-Cookie-Hdr: zXjEE0z8XQxhHNutI621D3blYmUAAAAAUqnCIh9ht11eODnwuhHTbw==
X-Cdn: Imperva
X-Iinfo: 9-20358472-20295020 pNNy RT(1700980081565 4101) q(0 0 0 -1) r(13 13) U6

{"success":true,"Result":{"ClientHints":{"PersistDefault":false,"AllowPersist":true,"AllowForgotPassword":true,"RequestedUsername":"cloudadmin@example"},"Version":"1.0","SessionId":"358BE3B1A624734FBE2C33BDF08EDFD8644A5C0AB50DB03453D3DD5F6601D781","AllowLoginMfaCache":false,"Challenges":[{"Mechanisms":[{"AnswerType":"Text","Name":"UP","PromptMechChosen":"Enter Password","PromptSelectMech":"Password","MechanismId":"DB67BFAF2EE1075824774EE3AC1496E2A93F48253CFC564EAF22FB6F55122606"}]},{"Mechanisms":[{"MaskedEmailAddress":"***@example.com","AnswerType":"StartTextOob","Name":"EMAIL","PromptMechChosen":"Email sent to xxxx@example.com. Click the link or manually enter the code to authenticate.","PromptSelectMech":"Email... @example.com","PartialAddress":"example.com","MechanismId":"83CE3A22D7A2CDA61BE4C7D65ADD55CCB88F7360BA39E44DB816617ADF16D2FC"}]}],"Summary":"NewPackage","TenantId":"4210B989-2CCE-4558-8C4F-ADC53B2BC0EB"},"Message":null,"MessageID":null,"Exception":null,"ErrorID":null,"ErrorCode":null,"IsSoftError":false,"InnerExceptions":null}
```

and then we type our password, and send

```
POST /identity/Security/AdvanceAuthentication HTTP/2
Host: example.delinea.app
Cookie: visid_incap_2905539=szrhV4QQTAa3RbFU3Yre9Rm6YmUAAAAAQUIPAAAAAAD48gMLQ4N7PC60BE/NNu+a; incap_ses_1132_2905539=WiJrMv/PflhhHNutI621D4zfYmUAAAAASiyaYbCC+6adp3SMmUeYjQ==; nlbi_2905539=tYxKKb7W8DwWVXSG3xBjPwAAAABVZ5Hsolx1PRRnHvemqo4X; AntiIwaLoop=AntiLoop=true; userdata=eyJEYXRhIjoiL3dVa05ESXhNRUk1T0RrdE1rTkRSUzAwTlRVNExUaERORVl0UVVSRE5UTkNNa0pETUVWQ0FnQnVwTUNuZGl0QXc3dUNwdTA3SDhyVXEyMXlOMExtSnZZMDl0QU51bW9VYWduemxIQVl2ckZrbm9sQzBFUDViWmdEdld2TVJRTHZDNDFmQkFNaXlPNk9wSnNWUThGQUFmTEpGS0ExQ3M2eWhXbkRXMnJ3Q2o3aWo3Z0t0M29VbUE9PSJ9; sessdata=L3dVa05ESXhNRUk1T0RrdE1rTkRSUzAwTlRVNExUaERORVl0UVVSRE5UTkNNa0pETUVWQ0FzTmpHREF1RmIrQWRjNjdPaXZyT3dHKzE2Q2dxWVJWNmlPLy9GbXN5Z29sSDlmT0RLcXgrTDVyUDZvQVFqeExHZk9XTU1HdUgwVjU4MkRhY1FJVnZNalBEV3B0c01FM3pZSklSdzFCS2xmZg__; _dd_s=rum=2&id=c7fb24d9-3a55-4fd9-a101-a063976e611f&created=1700978592318&expire=1700981064845
Content-Length: 409
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Accept: application/json, text/plain, */*
Sec-Ch-Ua-Platform: "Windows"
X-Centrify-Native-Client: true
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json
Origin: https://example.delinea.app
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://example.delinea.app/view/auth/advance
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"SessionId":"358BE3B1A624734FBE2C33BDF08EDFD8644A5C0AB50DB03453D3DD5F6601D781","TenantId":"4210B989-2CCE-4558-8C4F-ADC53B2BC0EB","MultipleOperations":[{"Answer":"password","MechanismId":"DB67BFAF2EE1075824774EE3AC1496E2A93F48253CFC564EAF22FB6F55122606","Action":"Answer"},{"MechanismId":"83CE3A22D7A2CDA61BE4C7D65ADD55CCB88F7360BA39E44DB816617ADF16D2FC","Action":"StartOOB"}],"PersistentLogin":false}
```

and receive

```
HTTP/2 200 OK
Date: Sun, 26 Nov 2023 06:29:28 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 259
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
Expires: -1
X-Cfy-Tx-Id: 6ddfa8911d0d47fab86d1d8dc5b549a2
X-Cfy-Tx-Dt: MTEvMjYvMjAyMyA2OjI5OjI2IEFN
X-Cfy-Tx-Tm: 1632
Set-Cookie: sessdata=L3dVa05ESXhNRUk1T0RrdE1rTkRSUzAwTlRVNExUaERORVl0UVVSRE5UTkNNa0pETUVWQ0FrcWFibDJKVGF6RkFLR0NFWjUzSHFQVE1Tb3d6N0k4VTRlbTY3K2t2Q0krNFM1QjlIVDdyMHViY09MQ0lKUnJzaWRxVko1ZUVybkN1UzdKZDk5bTJWWWEyM3czdklrZnZydFFMU1hHRnF0Uw__; path=/;SameSite=Lax; secure; HttpOnly
X-Robots-Tag: noindex, nofollow
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
Access-Control-Allow-Origin: https://example.delinea.app
Access-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH, OPTIONS
X-Centrify-Native-Client: true
Access-Control-Allow-Headers: DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Authorization,Range,X-CENTRIFY-NATIVE-CLIENT,X-CFY-CHALLENGEID,X-CIEM-SIGNALRID,Service-Worker-Allowed
Access-Control-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
Vary: Origin, Accept-Language
X-Incap-Sess-Cookie-Hdr: 84FVMqkYzA1hHNutI621D8jlYmUAAAAAn1aL8962dnkh9tNq+GzBvg==
X-Cdn: Imperva
X-Iinfo: 9-20361128-20295020 pNNy RT(1700980165976 157) q(0 0 0 -1) r(19 19) U6

{"success":true,"Result":{"ResultAppliesTo":"83CE3A22D7A2CDA61BE4C7D65ADD55CCB88F7360BA39E44DB816617ADF16D2FC","Summary":"OobPending"},"Message":null,"MessageID":null,"Exception":null,"ErrorID":null,"ErrorCode":null,"IsSoftError":false,"InnerExceptions":null}
```

and it must log in with two factor, and then we type the code from email, and send

```
POST /identity/Security/AdvanceAuthentication HTTP/2
Host: example.delinea.app
Cookie: visid_incap_2905539=szrhV4QQTAa3RbFU3Yre9Rm6YmUAAAAAQUIPAAAAAAD48gMLQ4N7PC60BE/NNu+a; incap_ses_1132_2905539=WiJrMv/PflhhHNutI621D4zfYmUAAAAASiyaYbCC+6adp3SMmUeYjQ==; nlbi_2905539=tYxKKb7W8DwWVXSG3xBjPwAAAABVZ5Hsolx1PRRnHvemqo4X; AntiIwaLoop=AntiLoop=true; userdata=eyJEYXRhIjoiL3dVa05ESXhNRUk1T0RrdE1rTkRSUzAwTlRVNExUaERORVl0UVVSRE5UTkNNa0pETUVWQ0FnQnVwTUNuZGl0QXc3dUNwdTA3SDhyVXEyMXlOMExtSnZZMDl0QU51bW9VYWduemxIQVl2ckZrbm9sQzBFUDViWmdEdld2TVJRTHZDNDFmQkFNaXlPNk9wSnNWUThGQUFmTEpGS0ExQ3M2eWhXbkRXMnJ3Q2o3aWo3Z0t0M29VbUE9PSJ9; sessdata=L3dVa05ESXhNRUk1T0RrdE1rTkRSUzAwTlRVNExUaERORVl0UVVSRE5UTkNNa0pETUVWQ0FuT01uV0Zmb0xxL1pHSGZlZGt6N3h4NjBHMndldjVrd2d5THB0ak9VT1dvbllpZXpmUzc5eGZYTE5uY3RMbkErZTEwZ1JCMmxNenJabC9EaEwrKzNZSHRLVHQ4L1g4Qk1XdE1CaVM4VnZ2Wg__; _dd_s=rum=2&id=c7fb24d9-3a55-4fd9-a101-a063976e611f&created=1700978592318&expire=1700981215028
Content-Length: 273
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Accept: application/json, text/plain, */*
Sec-Ch-Ua-Platform: "Windows"
X-Centrify-Native-Client: true
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json
Origin: https://example.delinea.app
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://example.delinea.app/view/auth/advance
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"Answer":"65411274","MechanismId":"83CE3A22D7A2CDA61BE4C7D65ADD55CCB88F7360BA39E44DB816617ADF16D2FC","Action":"Answer","SessionId":"358BE3B1A624734FBE2C33BDF08EDFD8644A5C0AB50DB03453D3DD5F6601D781","TenantId":"4210B989-2CCE-4558-8C4F-ADC53B2BC0EB","PersistentLogin":false}
```

and receive

```
HTTP/2 200 OK
Date: Sun, 26 Nov 2023 06:31:56 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 3722
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
Expires: -1
X-Cfy-Tx-Id: 6699107bb6df4c1ab621ce65bfcb559e
X-Cfy-Tx-Dt: MTEvMjYvMjAyMyA2OjMxOjU2IEFN
X-Cfy-Tx-Tm: 334
Set-Cookie: AntiIwaLoop=AntiLoop=false; expires=Sat, 25-Nov-2023 06:31:56 GMT; path=/
Set-Cookie: ccsid=-wUkNDIxMEI5ODktMkNDRS00NTU4LThDNEYtQURDNTNCMkJDMEVCAmSblTah7G2C8wSBHIK7wHneBYGlYV0N6UHGmVmtR9YCBVOYzxCdZeMiovqyzYrEyJYE5BjMue0at0QW2s6R1zCpY-jC.GUKcghqH3RRAnDTab4gpfHDMzvhXwVg9EalgO-Wd9ULZunSPJGglwKijxDPMZwglEWtiXCM8DOP7BYognDAqEl31edZClluaU.UjZaUugW5OwYcd.9KlNsugwwgqFdZJy6fMn5XQ3UCEQ-BW0Sc1GuJuQJdUaFoa8nBtQ__; expires=Fri, 24-Dec-9999 23:59:59 GMT; path=/;SameSite=Lax; secure
Set-Cookie: sessdata=L3dVa05ESXhNRUk1T0RrdE1rTkRSUzAwTlRVNExUaERORVl0UVVSRE5UTkNNa0pETUVWQ0FoTzA4TVF6c0VKc09TRFk3SUQ0OXFKY3Y2cUJUQ3pvZTJ2ZHpaSEIrYUpXQzNHK3c3bjZvZnc1RnpJajlHZ09wTEJ5SmM1WW1VSVh6aHg0UmIzak1YVTZBcVR1NzlnL2tOMnlrUm0vWFhZeXNYc3JTazRwQ2Jkb3pYNGdhTmdjbHFCSVJrM1E3MXZwb1lMcFc3Ly9LRHRNcE8vRSt6VzN2N0czTG96bW5QelI_; path=/;SameSite=Lax; secure; HttpOnly
X-Robots-Tag: noindex, nofollow
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
Access-Control-Allow-Origin: https://example.delinea.app
Access-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH, OPTIONS
X-Centrify-Native-Client: true
Access-Control-Allow-Headers: DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Authorization,Range,X-CENTRIFY-NATIVE-CLIENT,X-CFY-CHALLENGEID,X-CIEM-SIGNALRID,Service-Worker-Allowed
Access-Control-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
Vary: Origin, Accept-Language
X-Incap-Sess-Cookie-Hdr: wJzRCpdg5DVhHNutI621D1zmYmUAAAAA2jtJIGyDgcW81TZ+26df2w==
X-Cdn: Imperva
X-Iinfo: 9-20361128-20295020 pNNy RT(1700980165976 149945) q(0 0 0 -1) r(6 6) U6

{"success":true,"Result":{"AuthLevel":"Normal","DisplayName":"cloudadmin","OAuthTokens":{"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJmNTg2OWViLWY5ZjctNDZjNC04ZmU5LTlhNGY0ZDZiMWJiOCIsImFwcF9pZCI6InhwbXBsYXRmb3JtIn0.eyJ1X2F1dGhtIjoiTXVsdGlGYWN0b3JBdXRoIiwic2Vzc19pZCI6IjQ5ZjQ2YjQ0LTU0ZDctNDhjZi04NGE1LWVmNDM0ZjFhN2EyZiIsInRlbmFudF9pZCI6IjQyMTBCOTg5LTJDQ0UtNDU1OC04QzRGLUFEQzUzQjJCQzBFQiIsImlhdCI6MTcwMDk4MDMxNiwiY2xpZW50X2lkIjoiYzJjN2JjYzYtOTU2MC00NGUwLThkZmYtNWJlMjIxY2QzN2VlIiwic3ViIjoiYzJjN2JjYzYtOTU2MC00NGUwLThkZmYtNWJlMjIxY2QzN2VlIiwidV9pZCI6ImMyYzdiY2M2LTk1NjAtNDRlMC04ZGZmLTViZTIyMWNkMzdlZSIsImF1dGhfdGltZSI6MTcwMDk4MDMxNiwiZXhwIjoxNzAwOTgzOTI4LCJzY29wZSI6InhwbUludGVyYWN0aXZlIiwiYXVkIjoiYzJjN2JjYzYtOTU2MC00NGUwLThkZmYtNWJlMjIxY2QzN2VlIiwidV9kaXNwbmFtZSI6ImNsb3VkYWRtaW4iLCJ2ZXIiOiIxLjAiLCJhbGciOiJSUzI1NiIsImFtciI6Ik11bHRpRmFjdG9yQXV0aCIsImlzcyI6Imh0dHBzOi8vZGFuaWVsLmRlbGluZWEuYXBwL2lkZW50aXR5LyIsImFwcF9pZCI6InhwbXBsYXRmb3JtIiwidHlwIjoiSldUIiwibmFtZSI6ImNsb3VkYWRtaW5AZGFuaWVsIiwianRpIjoiZjk3NjYzNzAtNmY2ZC00YTQyLWEzZTMtYmFmMWJjNmE1NThiIiwiYWNyIjp7InByb2ZpbGVzIjp7IjU3Y2FmMGJmLTlkOTEtNDgzOC1iMTI5LTc3MzM4M2U3OGE0NiI6MTcwMTAyMzUxNn0sIm1lY2hhbmlzbXMiOnsiRFNQYXNzd29yZCI6MTcwMDk4MDE2NiwiRU1haWwiOjE3MDA5ODAzMTZ9fX0.c7vZGUs9S8Ynr7k_RPPa9bDm6rbtqC2vSdjURE8XKYHDZ0M55wa2VIJ26DZu9L-y7bR5acIMpKXJlrhRolbsRZbDLvIHdvUfUTfVpn8-XasArPP_6wLxnm-6s8_wCrgHwsii-DMA9SuYvvnHOFDU1OmsmBreWorlexc3RnTbjTchXZ7beE3hKqlFH-jU8Ezzeset_Kr6wvD8SDAdULkPbmt-mtWWyubW8vhYcX30i0Bm30JAD6Zevn-0bHWQUUf0IC260BVrEbnVwVNm44gJjat5Okapgr1x8HeSPuh4RsDZcbZhz-vnkvBMu_31mJeptYVbqc4gaGizCSiofrzW7Q","refresh_token":"CCD006AE895B211AE360049D704399DA34CEB95C160EDA4BAA54D8E8244B55E4","id_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJmNTg2OWViLWY5ZjctNDZjNC04ZmU5LTlhNGY0ZDZiMWJiOCIsImFwcF9pZCI6InhwbXBsYXRmb3JtIn0.eyJ1X2F1dGhtIjoiTXVsdGlGYWN0b3JBdXRoIiwic2Vzc19pZCI6IjQ5ZjQ2YjQ0LTU0ZDctNDhjZi04NGE1LWVmNDM0ZjFhN2EyZiIsImVtYWlsIjoiZGFuaWVsNzc1NkBmb3htYWlsLmNvbSIsInRlbmFudF9pZCI6IjQyMTBCOTg5LTJDQ0UtNDU1OC04QzRGLUFEQzUzQjJCQzBFQiIsImlhdCI6MTcwMDk4MDMxNiwiY2xpZW50X2lkIjoiYzJjN2JjYzYtOTU2MC00NGUwLThkZmYtNWJlMjIxY2QzN2VlIiwic3ViIjoiYzJjN2JjYzYtOTU2MC00NGUwLThkZmYtNWJlMjIxY2QzN2VlIiwidV9pZCI6ImMyYzdiY2M2LTk1NjAtNDRlMC04ZGZmLTViZTIyMWNkMzdlZSIsImF1dGhfdGltZSI6MTcwMDk4MDMxNiwiZXhwIjoxNzAxMDIzNTE2LCJhdWQiOiJjMmM3YmNjNi05NTYwLTQ0ZTAtOGRmZi01YmUyMjFjZDM3ZWUiLCJ1X2Rpc3BuYW1lIjoiY2xvdWRhZG1pbiIsInZlciI6IjEuMCIsImFsZyI6IlJTMjU2IiwiYW1yIjoiTXVsdGlGYWN0b3JBdXRoIiwiaXNzIjoiaHR0cHM6Ly9kYW5pZWwuZGVsaW5lYS5hcHAvaWRlbnRpdHkvIiwiYXBwX2lkIjoieHBtcGxhdGZvcm0iLCJ0eXAiOiJKV1QiLCJuYW1lIjoiY2xvdWRhZG1pbkBkYW5pZWwiLCJqdGkiOiI0OTYyMWRkYy0zZWYyLTQ0MDItYTM5Ny1iMDg2ZmQwYjMxM2MiLCJhY3IiOnsicHJvZmlsZXMiOnsiNTdjYWYwYmYtOWQ5MS00ODM4LWIxMjktNzczMzgzZTc4YTQ2IjoxNzAxMDIzNTE2fSwibWVjaGFuaXNtcyI6eyJEU1Bhc3N3b3JkIjoxNzAwOTgwMTY2LCJFTWFpbCI6MTcwMDk4MDMxNn19fQ.Ffh1BlJbNVzU0tWD9XSHpkwpCHs00j0IF2ZSW__W2SDcRc1UPdkLTj5hP6_rjupPVAcuMm6FqN9XlVEqB8xgTdgMi00qSDrRA3VHK6E2I53ETPqSMbLT60jCvVWaBhqmXnHXk6rrK8jcXHjrzvUpUtxZ3J7wcJtjGmUtJop569psPOHKkVHMxQMKaPn3Bmv10dpRe_EK5c9N0RFFXrxeJYI5_sOo1dQ8PAYVAgtuCcwCKoBpHneXREo7SP5RLOj5uqAE36wbWL9Sb8-tXASB89iVdG6BgtwKIkBP634K7opKq1IZ9yDvzBzajHCcv4Yu--PlEZKFMLovECUw4tocaA","token_type":"Bearer","expires_in":3615,"session_expires_in":43200,"scope":"xpmInteractive"},"UserId":"c2c7bcc6-9560-44e0-8dff-5be221cd37ee","EmailAddress":"example7756@example.com","UserDirectory":"Delinea","PodFqdn":"example.delinea.app/identity","User":"cloudadmin@example","CustomerID":"4210B989-2CCE-4558-8C4F-ADC53B2BC0EB","SystemID":"4210B989-2CCE-4558-8C4F-ADC53B2BC0EB","SourceDsType":"Delinea","Summary":"LoginSuccess"},"Message":null,"MessageID":null,"Exception":null,"ErrorID":null,"ErrorCode":null,"IsSoftError":false,"InnerExceptions":null}
```

When we add a new item, we send

```
POST /internals/secret-detail HTTP/2
Host: example.secretservercloud.com
Content-Length: 325
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Correlation-Id: bd738a762dd74a6e9656898d82ae9100,4d5e3618e4f646979ae3fabea9dfa14d
X-Requestverificationtoken: AW95wwbsrrzJjpsl1IF5HeNirR_IFZ1mPNMcaU6rrPzZQU0cRIh8kd6D8TrIAGGX6u5z-dadLa-SoO_qhf9HFXEAh9O6xoBHmhAHUItjrJY1:4k8cyooretEP3yCvtZwqOoDjiJ7TdY_5jQ9wVuUTcMCvHFcWlMCTHCWHySruKzYFeMlM30yh-XusN12E6rxZ3twh49X8hw0das0u34etNArlHa9SNayaYw3mZmK5Wjug0-bYCvNR24wYBfKPG6G_lg2
Sec-Ch-Ua-Mobile: ?0
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJmNTg2OWViLWY5ZjctNDZjNC04ZmU5LTlhNGY0ZDZiMWJiOCIsImFwcF9pZCI6InhwbXBsYXRmb3JtIn0.eyJ1X2F1dGhtIjoiTXVsdGlGYWN0b3JBdXRoIiwic2Vzc19pZCI6IjQ5ZjQ2YjQ0LTU0ZDctNDhjZi04NGE1LWVmNDM0ZjFhN2EyZiIsInRlbmFudF9pZCI6IjQyMTBCOTg5LTJDQ0UtNDU1OC04QzRGLUFEQzUzQjJCQzBFQiIsImlhdCI6MTcwMDk4MDMxNiwiY2xpZW50X2lkIjoiYzJjN2JjYzYtOTU2MC00NGUwLThkZmYtNWJlMjIxY2QzN2VlIiwic3ViIjoiYzJjN2JjYzYtOTU2MC00NGUwLThkZmYtNWJlMjIxY2QzN2VlIiwidV9pZCI6ImMyYzdiY2M2LTk1NjAtNDRlMC04ZGZmLTViZTIyMWNkMzdlZSIsImF1dGhfdGltZSI6MTcwMDk4MDMxNiwiZXhwIjoxNzAwOTgzOTI4LCJzY29wZSI6InhwbUludGVyYWN0aXZlIiwiYXVkIjoiYzJjN2JjYzYtOTU2MC00NGUwLThkZmYtNWJlMjIxY2QzN2VlIiwidV9kaXNwbmFtZSI6ImNsb3VkYWRtaW4iLCJ2ZXIiOiIxLjAiLCJhbGciOiJSUzI1NiIsImFtciI6Ik11bHRpRmFjdG9yQXV0aCIsImlzcyI6Imh0dHBzOi8vZGFuaWVsLmRlbGluZWEuYXBwL2lkZW50aXR5LyIsImFwcF9pZCI6InhwbXBsYXRmb3JtIiwidHlwIjoiSldUIiwibmFtZSI6ImNsb3VkYWRtaW5AZGFuaWVsIiwianRpIjoiZjk3NjYzNzAtNmY2ZC00YTQyLWEzZTMtYmFmMWJjNmE1NThiIiwiYWNyIjp7InByb2ZpbGVzIjp7IjU3Y2FmMGJmLTlkOTEtNDgzOC1iMTI5LTc3MzM4M2U3OGE0NiI6MTcwMTAyMzUxNn0sIm1lY2hhbmlzbXMiOnsiRFNQYXNzd29yZCI6MTcwMDk4MDE2NiwiRU1haWwiOjE3MDA5ODAzMTZ9fX0.c7vZGUs9S8Ynr7k_RPPa9bDm6rbtqC2vSdjURE8XKYHDZ0M55wa2VIJ26DZu9L-y7bR5acIMpKXJlrhRolbsRZbDLvIHdvUfUTfVpn8-XasArPP_6wLxnm-6s8_wCrgHwsii-DMA9SuYvvnHOFDU1OmsmBreWorlexc3RnTbjTchXZ7beE3hKqlFH-jU8Ezzeset_Kr6wvD8SDAdULkPbmt-mtWWyubW8vhYcX30i0Bm30JAD6Zevn-0bHWQUUf0IC260BVrEbnVwVNm44gJjat5Okapgr1x8HeSPuh4RsDZcbZhz-vnkvBMu_31mJeptYVbqc4gaGizCSiofrzW7Q
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json
Vault-Application: DelineaPlatform
Accept: application/json, text/plain, */*
Extended-Model: extended
Sec-Ch-Ua-Platform: "Windows"
Origin: https://example.delinea.app
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://example.delinea.app/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"data":{"name":"test","folderId":2,"enableInheritSecretPolicy":true,"secretPolicy":null,"site":"1","templateId":2,"fields":[{"slug":"resource","value":"www.test.com"},{"slug":"username","value":"test1"},{"slug":"password","value":"123456"},{"slug":"notes","value":"123456"}],"autoChangePassword":"","generateSshKeys":false}}
```

and receive

```
HTTP/2 200 OK
Date: Sun, 26 Nov 2023 06:39:05 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 1
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
Expires: -1
Access-Control-Allow-Origin: https://example.delinea.app
X-Correlation-Id: 875d454bd24b4787a4d826cdfe292292
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
P3p: CP="CURa ADMa OUR IND DSP ALL COR"
Content-Security-Policy: connect-src 'self' bam.nr-data.net; font-src 'self' data:; frame-src 'self' sslauncher:; img-src 'self' data:; media-src 'self'; object-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' js-agent.newrelic.com bam.nr-data.net remote.captcha.com 'unsafe-inline' 'unsafe-eval'
X-Content-Security-Policy: connect-src 'self' bam.nr-data.net; font-src 'self' data:; frame-src 'self' sslauncher:; img-src 'self' data:; media-src 'self'; object-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' js-agent.newrelic.com bam.nr-data.net remote.captcha.com 'unsafe-inline' 'unsafe-eval'
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
X-Ua-Compatible: IE=edge
X-Frame-Options: SameOrigin
Permissions-Policy: interest-cohort=()
Set-Cookie: visid_incap_873140=l/eYZAFwR0Sz5XsiQzYJzgnoYmUAAAAAQUIPAAAAAABmes+71J5NpGwFeoi+0Ord; expires=Sun, 24 Nov 2024 22:05:37 GMT; HttpOnly; path=/; Domain=.secretservercloud.com; Secure; SameSite=None
X-Incap-Sess-Cookie-Hdr: 9OxSfjRG5GzxQNutI621DwnoYmUAAAAApDidliyN4M7NKSvKsYwGBw==
Set-Cookie: incap_ses_1132_873140=31c+Mu3HKFu69d+tI621DwnoYmUAAAAAaagIveuG77792D9/1a6q/w==; path=/; Domain=.secretservercloud.com; Secure; SameSite=None
X-Cdn: Imperva
X-Iinfo: 13-55822409-55816593 pNNy RT(1700980743454 556) q(0 0 0 -1) r(11 11) U6

1
```

Finding:

1. The password is send in plaintext
1. All the data field is unencrypted and send to the server.
