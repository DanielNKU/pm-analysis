## Capturing Network Traffic

When logging in, we send

```
POST /rf-api?auth2 HTTP/1.1
Host: online.roboform.com
Cookie: _gcl_au=1.1.1855345238.1698371917; _fbp=fb.1.1698372174570.1226401648; _gid=GA1.2.1846356167.1698632733; _ga_1SR4J9S5RB=GS1.1.1698632733.1.1.1698632745.48.0.0; _ga=GA1.1.1653170545.1698371919; FPID=FPID2.2.4VzTUF5So9UXl4pJrgSOZjBI9XtR477%2FuJOZ5Th7Kak%3D.1698371919; FPAU=1.1.1855345238.1698371917; FPLC=TUqrJRxrkZh8Bg122bt5A7LqeVitvM5WVCSyL0GUdh7hTPK8rhYb9NWkDngBrMpShuF9aB2FEKoRK7stcGdBPiiWbVCEs6pK9Mr30V8wpFY86X2F4fD5t0%2BOLUh%2BVg%3D%3D; _ga_KJ3YTPE7J4=GS1.1.1698635208.3.1.1698635343.52.0.0
Content-Length: 55
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
X-Sib-Ext-Ver: 9.5.2.0
X-Sib-Auth-Deviceid: E2457698caa3c47d93165e1d
X-Sib-Client-Type: RF-Edge
Sec-Ch-Ua-Mobile: ?0
Authorization: SibAuth sid="LENdJdv1vMUYEpg9MVwHug",data="Yz1iaXdzLHI9cm95MkV0THgtdERWemlwcllrZVpLd3RMNVV3R3FyWFVyaFo3NzdPM0RMeUEscD1mS2hPSHRXVFNyTEFyN1NBWkY2K2VYZitNak1GT0FXMzBJR0k5cjN2NGxVPQ=="
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
X-Sib-Ext-Id: ljfpcifpgbbchoddpjefaipoiigpdmag
Content-Type: application/json
X-Sib-Api-Ver: 2
X-Sib-Auth-Alt-Channel: -
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: chrome-extension://ljfpcifpgbbchoddpjefaipoiigpdmag
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: close

{"type":"interactive","email":"example@example.com"}
```

```
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version
Cache-Control: no-store, no-cache
Content-Length: 1499
Content-Security-Policy: default-src 'self'; style-src 'unsafe-inline' 'self'; script-src 'self'
Content-Type: application/json
reason: OK
rfo-tag: rfo-server
server-id: -
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
x-sib-auth-finalmessage: SibAuth sid="LENdJdv1vMUYEpg9MVwHug",data="dj1MQ01VdzM3L21ldlhibkN5VjB3ZjYxSDhKU1ZwdERQVkJEb1AxdGUybEpzPQ=="
X-XSS-Protection: 1; mode=block

{"accountId":"u-lxhdldg23mvqde5e","oneFile":true,"email":"example@example.com","name":"example","publicKey":"LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJDZ0tDQVFFQW0vaGFOcnRRc0xKMUc5Q2h2MCtwdFlkSjV5czFYZG1SMUxYM3RmLzAyc2owUTZ3clFHTlcKa05SM2Zqa0dwTXNXREszMUUxZ2wyM2VNL2FrUTR2NDNyRjdXZ0NQM1hLcWUwT3ljMWhPMk93MFh6aS9rQW4yNApLZGlLc1A2UTk1cEZlSWlTMHNPbHI4YXRFc2NkOVdpY25oamM3RmZuY0tVWWpneFM0UDN3RW55RUg1VlpxUTROCmozbFVoMGEvbjlmallRdjRVaEpUb1Jva1RORnRHdUNtdVgrdmYxY0FyVy9sZ0tjTG1qckpzSDJiaU4yY2tkc1UKakxDaGxJdnNPZmd5Y0p5ZmJpeWFIaVZzRWd3d3VaVHZHTHRkYTI2TEtienZnLzYrTTYvRlI0M1FTdWg1dlc0QQpIcXpTTTNDL0s0SE10NEVYVXBCVGo0ajByUnJRVW01MnVRSURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K","lang":"cn","sessionTimeoutSecs":1200,"createdTime":1698635204,"accessDate":1698552000,"useDate":1698552000,"login":"@@id@u-lxhdldg23mvqde5e@@token@AQAUABAANE2irTsPQbp30bqtw0D3YH_tZHU5cJqCHGc-lzTwnV1oWotMLD5GFc9EYxh85rphqF6W74577_Gg2s1AikLt_j-ZZ6mqxi-YpYNL7g","clientKey":"iyym6axCXt0D9Qle1SX9jmAiQIyJVu4RXRXMZldz1m8=","haveLicenseInfo":true,"haveLicense":true,"licenseActive":true,"licenseTrial":true,"licenseExpired":false,"licenseExpirationTime":1701147600,"licenseExpiresInDays":29,"maxSharedFolders":2,"clientReadOnly":false,"clientBlocked":false,"syncAllowed":true,"syncIntervalMins":60,"passwordAgeDays":0,"forcePasswordChange":false,"loginsCount":3,"securityStats":"eyJsb2dpbnNDb3VudCI6MywiYm9va21hcmtzQ291bnQiOjAsImlkZW50aXRpZXNDb3VudCI6MSwiY29udGFjdHNDb3VudCI6MCwic2FmZW5vdGVzQ291bnQiOjB9","altAuth":"email"}
```

When adding an item, I send

```
POST /rf-api//user-data.rfo HTTP/1.1
Host: online.roboform.com
Cookie: _gcl_au=1.1.1855345238.1698371917; _fbp=fb.1.1698372174570.1226401648; _gid=GA1.2.1846356167.1698632733; _ga_1SR4J9S5RB=GS1.1.1698632733.1.1.1698632745.48.0.0; _ga=GA1.1.1653170545.1698371919; FPID=FPID2.2.4VzTUF5So9UXl4pJrgSOZjBI9XtR477%2FuJOZ5Th7Kak%3D.1698371919; FPAU=1.1.1855345238.1698371917; FPLC=TUqrJRxrkZh8Bg122bt5A7LqeVitvM5WVCSyL0GUdh7hTPK8rhYb9NWkDngBrMpShuF9aB2FEKoRK7stcGdBPiiWbVCEs6pK9Mr30V8wpFY86X2F4fD5t0%2BOLUh%2BVg%3D%3D; _ga_KJ3YTPE7J4=GS1.1.1698635208.3.1.1698635343.52.0.0
Content-Length: 2081
Cache-Control: max-age=0
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
X-Sib-Ext-Ver: 9.5.2.0
X-Sib-Auth-Deviceid: E2457698caa3c47d93165e1d
X-Sib-Client-Type: RF-Edge
Sec-Ch-Ua-Mobile: ?0
Authorization: SibAuth sid="plfg7z9KZCjpRh0BsoOyDw",data="Yz1iaXdzLHI9UEl1R2h0WTFxSlZCcUc1YjdSSWJvZ0R2SjlPbVQtaTBDaXFmNUVUaHpRY0EscD1ZaHRjOFhCYXhSdUhNODRxeGYwbUs1WUJDYTZscTA5c1JnNk84TDRIS0NjPQ=="
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
X-Sib-Ext-Id: ljfpcifpgbbchoddpjefaipoiigpdmag
Content-Type: application/octet-stream
X-Sib-Api-Ver: 2
If-Match: "3107000000000000BB253F65"
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: chrome-extension://ljfpcifpgbbchoddpjefaipoiigpdmag
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: close

onefile1ÿ
```

We got the packet

```
POST /rf-api/?account-info HTTP/1.1
Host: online.roboform.com
Cookie: _gcl_au=1.1.1855345238.1698371917; _fbp=fb.1.1698372174570.1226401648; FPID=FPID2.2.4VzTUF5So9UXl4pJrgSOZjBI9XtR477%2FuJOZ5Th7Kak%3D.1698371919; FPAU=1.1.1855345238.1698371917; _uetvid=8e61667076ea11ee97c0a9fd0928d4f9; _ga=GA1.1.1653170545.1698371919; _ga_1SR4J9S5RB=GS1.1.1698652514.3.0.1698652514.60.0.0; sib-deviceid=E2457698caa3c47d93165e1d; lang=cn; _ga_KJ3YTPE7J4=GS1.1.1699414513.8.0.1699414564.9.0.0; sib-auth=AQAUABAAt5rrDy8Y6zLF_uqZturJbiIR5WT0VQ2QAah2jHT5N4t1QN6j_9uLl8-OyV0vmEtSuDjdNzdIy75oP8FagOqzmHzdv1SgctLTHiWQqi73HF3zZP8HXs1oFJ2H21PqhfYoP26Gr_0aOmfSN58gHdVHG8xmxvCLhtp9NFh3Nb7C-LpG2RdOM0nDSyJUdD4
Content-Length: 212
Sec-Ch-Ua: "Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Sib-Ext-Ver: 9.5.2.0
X-Sib-Auth-Deviceid: E2457698caa3c47d93165e1d
X-Sib-Client-Type: RF-Edge
Sec-Ch-Ua-Mobile: ?0
Authorization: SibAuth sid="-MNvMEwp6fnX6wc96rwFZA",data="Yz1iaXdzLHI9YmxoR2VLSzl3SEdpWXo1OHlRUnJRd3hMOGhvdDBfYk9CYllYM2IyWDVZUUEscD1Rc1M4NU00WTQzUnFyUCtWREw3TzJqWEpiMHEzTWg2anZTbk9YRVBXWmI0PQ=="
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0
Content-Type: application/json
X-Sib-Ext-Id: ljfpcifpgbbchoddpjefaipoiigpdmag
X-Sib-Api-Ver: 2
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: chrome-extension://ljfpcifpgbbchoddpjefaipoiigpdmag
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: close

{"securityStats":"eyJsb2dpbnNDb3VudCI6NiwiYm9va21hcmtzQ291bnQiOjAsImlkZW50aXRpZXNDb3VudCI6MSwiY29udGFjdHNDb3VudCI6MCwic2FmZW5vdGVzQ291bnQiOjAsIndlYWsiOjgsInNjb3JlIjo2LCJzY29yZVVwZGF0ZWRUaW1lIjoxNjk5MzQ1ODgxfQ=="}
```

and the security states are in base64

```
{"loginsCount":6,"bookmarksCount":0,"identitiesCount":1,"contactsCount":0,"safenotesCount":0,"weak":8,"score":6,"scoreUpdatedTime":1699345881}
```

Finding:

1. All the user data is encrypted.
1. It is not anonymous.
1. The sid is the salt, and use this salt to derive the authentication hash.
1. The security status is in base64.
