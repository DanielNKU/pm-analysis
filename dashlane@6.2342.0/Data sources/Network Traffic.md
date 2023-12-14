## Capturing Network Traffic

When logging out

```
POST /v1/authentication/DeactivateRememberMe HTTP/1.1
Host: api.dashlane.com
Content-Length: 38
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Dashlane-Client-Agent: {"platform":"server_standalone","version":"6.2342.0","osversion":"10","language":"zh-CN"}
Sec-Ch-Ua-Mobile: ?0
Authorization: DL1-HMAC-SHA256 Login=daniel7756@foxmail.com,AppAccessKey=C4F8H4SEAMXNBQVSASVBWDDZNCVTESMY,DeviceAccessKey=d7a7c62cfc3bbb32,Timestamp=1698329779,SignedHeaders=accept;content-type;dashlane-client-agent;host,Signature=64801f8b18a285f13a5f42a614da52a57fe5782af31d70433045990c57ea675f
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.57
Content-Type: application/json; charset=UTF-8
Accept: application/json
Sec-Ch-Ua-Platform: "Windows"
Origin: chrome-extension://gehmmocbbkpblljhkekmfhjpfbkclbph
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: close

{"deviceAccessKey":"d7a7c62cfc3bbb32"}
```

When logging in

```
POST /3/premium/status HTTP/1.1
Host: ws1.dashlane.com
Content-Length: 278
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Content-Type: application/x-www-form-urlencoded
Client-Agent: version:6.2342.0,platform:server_standalone}
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.57
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: chrome-extension://gehmmocbbkpblljhkekmfhjpfbkclbph
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: close

login=example%40example.com&uki=d7a7c62cfc3bbb32-ded25a64462f8611762c34e5b929aca80c86f0f27483d04cd9813cff102392b4&billingInformation=true&spaces=true&autoRenewal=true&familyInformation=true&previousPlan=true&needsAutoRenewalFailed=true&teamInformation=false&capabilities=true
```

When adding new items, we send

```
POST /12/backup/upload HTTP/2
Host: ws1.dashlane.com
Content-Length: 1338
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Content-Type: application/x-www-form-urlencoded
Client-Agent: version:6.2342.0,platform:server_standalone}
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: chrome-extension://gehmmocbbkpblljhkekmfhjpfbkclbph
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

login=example%40example.com&uki=d7a7c62cfc3bbb32-ded25a64462f8611762c34e5b929aca80c86f0f27483d04cd9813cff102392b4&lock=26247d40-d301-4749-8eec-caeb68749456&transactions=%5B%7B%22type%22%3A%22AUTHENTIFIANT%22%2C%22action%22%3A%22BACKUP_EDIT%22%2C%22identifier%22%3A%22%7B976B8D3F-B13F-43F1-9C21-D7D5E2A3FB84%7D%22%2C%22objectType%22%3A%22transaction%22%2C%22time%22%3A1698591135%2C%22backupDate%22%3A0%2C%22content%22%3A%22JDEkYXJnb24yZCQxNiQzJDMyNzY4JDIkYWVzMjU2JGNiY2htYWMkMTYktukN%2BEvZxf31%2FI%2FN7GU7Kyd8ebqnKn%2BGrCj%2BtWMk5AvsYR%2F7JjvmpYaAn6Ph92KAAyb1rqqIDX7jgEntgm5aSeDbw9fIqYvGr0KNvle4rHnqo6iSx8namXkhCMtmSxTY4%2F7XvxHUzLb8k4WPvRj35GAI1uEVtFV0V51Xjh29Qzwa4wF0cxaeVKYUurvTLe%2FqGBNcjjtBwlbWKC20LIVPaq3Rz8NwKZl0ZxO1tAr8T1dqiiHpC6SsGGjRK8sClJVkoFbiJJEZmKr%2FiQxjumqz5l48H2%2FVMSXsaYofdeyo7HMWsWqqLfCsw0nTCmmKJbC%2FtYBP3zBb9KyBL%2FWvU7BdLpSy9t4mAm2LmOxJ6%2B8DM18M2O6e7c675L0Twp4CI1hh2nRi3iU3zQna12zauA%2BQvNBavmSitgEr0KpAZppL8iCV9FqTaQnVvgJXwRMOh3wbNy%2FUtU7BGCbd1u23nhysCNyf4gruOqt4DhHFmetLeotUbnW8HFGhZ5WM94iyza9qDI4JP%2FZx1tAj8OKIA73LDqDzp8f0Q3D6thJiAsN0hpZ9M12PLvmfAjmnZ%2BMRNx%2Fl2yPx5k5VwjkHjGUIU8hMT26Ow0woH7CqZPw4oYQVPt7YBX4qEH0LPZzx1eqeMaeUluETi%2FniGuCN43VCcliMAvZ7FCuVWlbrHHiuanupn30VBqks%2FSJSG38jpL5iXa0a8I83k2a4fs5fq04K16I2AUo9y%2Bpy%2Bf29C%2Fpo7dnedQtpXmkfwEAzm%2BDNI%2FTk%2B1RFdtpweAcIFYbF42cssUWMHA%3D%3D%22%7D%5D
```

and receive

```
HTTP/2 200 OK
Date: Sun, 29 Oct 2023 14:52:16 GMT
Content-Type: application/json
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Frame-Options: deny
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Content-Security-Policy: default-src 'none';
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: no-referrer
Vary: Origin
Access-Control-Allow-Origin: chrome-extension://gehmmocbbkpblljhkekmfhjpfbkclbph
Cf-Cache-Status: DYNAMIC
Set-Cookie: __cf_bm=rFeGmj3uufx_Ft8dMssPzkadvPjv.RAoxB6LWcgHJD8-1698591136-0-Ad2OwNGUnPJazNgn0NT6PJxNrjda3wJbAO8CfLcapPTsmWP+Ouq13ysDOe483IHXHCSgbbk/UwYkxq8tOaQ+g60=; path=/; expires=Sun, 29-Oct-23 15:22:16 GMT; domain=.dashlane.com; HttpOnly; Secure; SameSite=None
Server: cloudflare
Cf-Ray: 81dc3dc8db43b05a-ATL

{"objectType":"message","content":"OK","timestamp":"1698591136000","numberTransactions":"[{\"type\":\"SETTINGS\",\"count\":1},{\"type\":\"AUTHENTIFIANT\",\"count\":4},{\"type\":\"DATA_CHANGE_HISTORY\",\"count\":2},{\"type\":\"SECURENOTE_CATEGORY\",\"count\":11},{\"type\":\"EMAIL\",\"count\":1}]","summary":{"transactions":{"SETTINGS":{"SETTINGS_userId":1698305624000},"AUTHENTIFIANT":{"{976B8D3F-B13F-43F1-9C21-D7D5E2A3FB84}":1698591136000,"{12451EB8-2697-4235-9E0C-B9EC4976C123}":1698590204000,"{211A7750-7C61-4E0E-954C-BA03D2A01960}":1698590204000,"{5145130A-AA4A-4D21-9E5F-B59B4E9B93B2}":1698327776000},"DATA_CHANGE_HISTORY":{"{D17D432E-DFFD-48D5-BAC6-EB33A84DC9D9}":1698590204000,"{CAEDD081-B190-4704-B19A-A254897FFBD1}":1698589907000},"SECURENOTE_CATEGORY":{"{7C4E2E47-2C59-4573-A197-439A8EDA81B1}":1698305635000,"{1C7FDA19-D715-45DD-9F35-3B8DC6AD454D}":1698305635000,"{0A24B50A-AE5C-4E1F-90C8-30CFCCE72C0C}":1698305635000,"{81F0C537-D70C-4160-BEBE-4B947E78C546}":1698305635000,"{D7D4BF36-A548-482B-B949-27E100422E77}":1698305635000,"{A5DBCC8E-CAAD-4377-80EC-A01454DE9329}":1698305635000,"{89A955E8-6A5A-43F4-91FA-BE2E9CEA80CC}":1698305635000,"{BDB6DD83-855D-4BFF-9854-D7764711FB37}":1698305635000,"{AF568096-22C1-4B7E-9679-CB0D65AC9151}":1698305635000,"{B0EBF2E9-7A48-4912-9A9C-34339F1A07A8}":1698305635000,"{10E3CF8F-A6EF-4EB6-B11C-F12F3E147591}":1698305635000},"EMAIL":{"{002E2AE9-BA3B-4532-BB3F-DE6A149F7034}":1698305626000}}}}
```

Finding:

1. We can find the login email and user device key.
1. The privacy of Dashlane is good.
