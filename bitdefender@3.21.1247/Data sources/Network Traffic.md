## Capturing Network Traffic

When logging in, we first type the email and send

```
GET /v1/dc/user_hash?user_hash=af4cc83a982e8839b80ed3cd35b4fa657e0b24323afa803a20314d980d7f805f&partner_id=com.bitdefender HTTP/2
Host: login.bitdefender.com
Cookie: at_check=true; _gcl_au=1.1.1790527271.1701001543; AMCVS_0E920C0F53DA9E9B0A490D45%40AdobeOrg=1; s_ecid=MCMID%7C90335162488781360583608280541424934425; _clck=1pv7b2b%7C2%7Cfh1%7C0%7C1425; _ga=GA1.1.2092586183.1701001546; s_cc=true; OptanonAlertBoxClosed=2023-11-26T12:30:41.582Z; _biz_uid=a029fb7b85d843f0a9b87308e995a709; _fbp=fb.1.1701001843365.840477708; _hjFirstSeen=1; _hjIncludedInSessionSample_37798=1; _hjSession_37798=eyJpZCI6IjljNTA4Y2M5LWQ0ODUtNGUzMi1hMDJhLThmNzk3NzUyNjIwNCIsImNyZWF0ZWQiOjE3MDEwMDE4NDM5MDMsImluU2FtcGxlIjp0cnVlLCJzZXNzaW9uaXplckJldGFFbmFibGVkIjp0cnVlfQ==; _hjSessionUser_37798=eyJpZCI6Ijg1MjRjODMxLTQ4YmUtNTQ5Mi04MTdiLTBjOTdiNTRjYzlkZCIsImNyZWF0ZWQiOjE3MDEwMDE4NDM5MDIsImV4aXN0aW5nIjp0cnVlfQ==; _hjAbsoluteSessionInProgress=1; _biz_flagsA=%7B%22Version%22%3A1%2C%22Ecid%22%3A%22-1404095977%22%2C%22ViewThrough%22%3A%221%22%2C%22XDomain%22%3A%221%22%7D; bdlcoco=MY; bdliseu=; bdlreg=07; AMCV_0E920C0F53DA9E9B0A490D45%40AdobeOrg=179643557%7CMCIDTS%7C19688%7CMCMID%7C90335162488781360583608280541424934425%7CMCAAMLH-1701607572%7C3%7CMCAAMB-1701607572%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1701009972s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.5.0%7CMCCIDH%7C238555812; _uetsid=eb144f708c5611eead2cd55b7e724031; _uetvid=eb1434e08c5611eea48889152d7af9c2; _biz_nA=6; OptanonConsent=isGpcEnabled=0&datestamp=Sun+Nov+26+2023+20%3A53%3A59+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202310.2.0&browserGpcFlag=1&isIABGlobal=false&hosts=&consentId=e86ea71f-02e1-4cdb-94dc-d5eb24786956&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&iType=1&geolocation=MY%3B07&AwaitingReconsent=false; bd112=pc9BDoIwEAXQu3RN6HTa6bRsPIGJe%2BtCpUYSCwRKiDHc3R6AHclf%2FN37%2F%2FoTy%2FQRjXjnPDZBBrmua%2F3ochtfsW%2FjVD%2BHFOTc5Rjk%2Bd71QbZLSt%2FLMOcT1BY9aTSMRutSnahE7lKc8z2NolEMCgCZaKuOOeCc9tp7tIaQrTK7kFd8FDLaEhlf7gCX5ch7kEY8%2FEh5ghJS4IoJbPchA9vtDw%3D%3D; _biz_pendingA=%5B%5D; mbox=session#6a0d3ec5582e447f9eb772e690ffaed7#1701005103|PC#6a0d3ec5582e447f9eb772e690ffaed7.38_0#1764248043; s_tp=6120; s_sq=%5B%5BB%5D%5D; s_ips=1126.7142857313156; _clsk=yxi0xq%7C1701003854217%7C7%7C0%7Cr.clarity.ms%2Fcollect; s_ppv=us%253Asplitter%2520homepage%2C97%2C18%2C5925%2C5%2C5; _ga_R43EZ9XF5Y=GS1.1.1701001546.1.1.1701003861.60.0.0; _ga_6M0GWNLLWF=GS1.1.1701001546.1.1.1701003861.60.0.0; __bduid=e30a628aefa21a475e127900b41b2ff90273ae64
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Client-Timestamp: 1701004161494
X-Client-Date: 2023-11-26T13:09:21.494Z
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
X-Client-Timestamp-Offset: -480
X-Nimbus-Clientid: bfd4e379-2aa2-4bf2-9089-516d69564a38
Sec-Ch-Ua-Platform: "Windows"
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://login.bitdefender.com/pwmngr/login.html?redirect_id=5d9d3d8a-997b-4068-87c3-c5496ae2fa90&redirect_url=https:%2F%2Fapi.prod.bd.bitdefenderpassmanager.net%2Fsso%2Fcallback&challenge=89VoKCIPsZfYbswxVzSecQZG0H1bdqn5Ig1FaGjrBjE&state=cc20660e-03e1-491d-8e59-d8620827b986&partner_id=com.bitdefender&lang=en_US
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7


```

and receive

```
HTTP/2 200 OK
Date: Sun, 26 Nov 2023 13:09:23 GMT
Content-Type: application/json; charset=utf-8
Access-Control-Allow-Origin: *
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.cookielaw.org https://connect.facebook.net/ https://static.ads-twitter.com/uwt.js https://cdn.cookielaw.org/scripttemplates/otSDKStub.js https://consentcdn.cookiebot.com/ https://consent.cookiebot.com https://script.hotjar.com/ https://static.hotjar.com/c/  https://www.googletagmanager.com/gtag/ https://sstats.bitdefender.com/ https://assets.adobedtm.com/ https://www.googleadservices.com/pagead/ https://fls.doubleclick.net/ https://www.bitdefender.com/scripts/ZHRt/ https://js.hs-scripts.com/341979.js https://js.hs-analytics.net/analytics/ https://js.hsleadflows.net/leadflows.js https://js.hscollectedforms.net/collectedforms.js https://js.leadin.com/js/v1/341979.js https://cdn.tt.omtrdc.net/cdn/target.js https://bitdefender.tt.omtrdc.net/m2/bitdefender/ https://www.google.com/recaptcha/api.js https://www.gstatic.com/recaptcha/ https://www.adobetag.com/d1/digitalpulsedebugger/live/DPD.js https://static.hotjar.com https://challenges.cloudflare.com/turnstile/v0/api.js; img-src 'self' data: https://cdn.cookielaw.org https://download.bitdefender.com https://www.google.com/ https://www.google.ro/ https://googleads.g.doubleclick.net/pagead/ https://sstats.bitdefender.com/b/ss/ https://track.hubspot.com/ https://cm.everesttech.net/ https://dpm.demdex.net/ https://omnitureengineering.d1.sc.omtrdc.net/ https://checkout-sdk.bitdefender.com/latest/assets/; style-src 'self' 'unsafe-inline'; font-src 'self' data: https://script.hotjar.com/; object-src 'none'; connect-src 'self' https://cdn.cookielaw.org *.onetrust.com *.onetrust.io https://api.beta-login.bitdefender.com/ https://api.login.bitdefender.com/ https://consentcdn.cookiebot.com/ https://in.hotjar.com https://starget.bitdefender.com https://checkout-service-mars.checkout-app.nmbapp.net/ https://checkout-service.bitdefender.com/ https://vc.hotjar.io/sessions/ https://bitdefender.demdex.net/ https://dpm.demdex.net/ https://forms.hubspot.com/collected-forms/ https://forms.hubspot.com/lead-flows-config/ https://sstats.bitdefender.com/ https://bitdefender.tt.omtrdc.net/; frame-src 'self' https://consentcdn.cookiebot.com/ https://vars.hotjar.com/ https://bitdefender.demdex.net/ https://www.google.com/recaptcha/ https://assets.adobedtm.com/ https://bid.g.doubleclick.net/ https://challenges.cloudflare.com/
Strict-Transport-Security: max-age=31536000
Via: 1.1 google
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 82c25d930b2c13cc-JHB

{"login":"https://api.login.bitdefender.com","account":"https://account.bitdefender.com"}
```

and send

```
POST /v1/user/lookup HTTP/2
Host: api.login.bitdefender.com
Cookie: at_check=true; _gcl_au=1.1.1790527271.1701001543; AMCVS_0E920C0F53DA9E9B0A490D45%40AdobeOrg=1; s_ecid=MCMID%7C90335162488781360583608280541424934425; _clck=1pv7b2b%7C2%7Cfh1%7C0%7C1425; _ga=GA1.1.2092586183.1701001546; s_cc=true; OptanonAlertBoxClosed=2023-11-26T12:30:41.582Z; _biz_uid=a029fb7b85d843f0a9b87308e995a709; _fbp=fb.1.1701001843365.840477708; _hjFirstSeen=1; _hjIncludedInSessionSample_37798=1; _hjSession_37798=eyJpZCI6IjljNTA4Y2M5LWQ0ODUtNGUzMi1hMDJhLThmNzk3NzUyNjIwNCIsImNyZWF0ZWQiOjE3MDEwMDE4NDM5MDMsImluU2FtcGxlIjp0cnVlLCJzZXNzaW9uaXplckJldGFFbmFibGVkIjp0cnVlfQ==; _hjSessionUser_37798=eyJpZCI6Ijg1MjRjODMxLTQ4YmUtNTQ5Mi04MTdiLTBjOTdiNTRjYzlkZCIsImNyZWF0ZWQiOjE3MDEwMDE4NDM5MDIsImV4aXN0aW5nIjp0cnVlfQ==; _hjAbsoluteSessionInProgress=1; _biz_flagsA=%7B%22Version%22%3A1%2C%22Ecid%22%3A%22-1404095977%22%2C%22ViewThrough%22%3A%221%22%2C%22XDomain%22%3A%221%22%7D; bdlcoco=MY; bdliseu=; bdlreg=07; AMCV_0E920C0F53DA9E9B0A490D45%40AdobeOrg=179643557%7CMCIDTS%7C19688%7CMCMID%7C90335162488781360583608280541424934425%7CMCAAMLH-1701607572%7C3%7CMCAAMB-1701607572%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1701009972s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.5.0%7CMCCIDH%7C238555812; _uetsid=eb144f708c5611eead2cd55b7e724031; _uetvid=eb1434e08c5611eea48889152d7af9c2; _biz_nA=6; OptanonConsent=isGpcEnabled=0&datestamp=Sun+Nov+26+2023+20%3A53%3A59+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202310.2.0&browserGpcFlag=1&isIABGlobal=false&hosts=&consentId=e86ea71f-02e1-4cdb-94dc-d5eb24786956&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&iType=1&geolocation=MY%3B07&AwaitingReconsent=false; bd112=pc9BDoIwEAXQu3RN6HTa6bRsPIGJe%2BtCpUYSCwRKiDHc3R6AHclf%2FN37%2F%2FoTy%2FQRjXjnPDZBBrmua%2F3ochtfsW%2FjVD%2BHFOTc5Rjk%2Bd71QbZLSt%2FLMOcT1BY9aTSMRutSnahE7lKc8z2NolEMCgCZaKuOOeCc9tp7tIaQrTK7kFd8FDLaEhlf7gCX5ch7kEY8%2FEh5ghJS4IoJbPchA9vtDw%3D%3D; _biz_pendingA=%5B%5D; mbox=session#6a0d3ec5582e447f9eb772e690ffaed7#1701005103|PC#6a0d3ec5582e447f9eb772e690ffaed7.38_0#1764248043; s_tp=6120; s_sq=%5B%5BB%5D%5D; s_ips=1126.7142857313156; _clsk=yxi0xq%7C1701003854217%7C7%7C0%7Cr.clarity.ms%2Fcollect; s_ppv=us%253Asplitter%2520homepage%2C97%2C18%2C5925%2C5%2C5; _ga_R43EZ9XF5Y=GS1.1.1701001546.1.1.1701003861.60.0.0; _ga_6M0GWNLLWF=GS1.1.1701001546.1.1.1701003861.60.0.0; __bduid=e30a628aefa21a475e127900b41b2ff90273ae64
Content-Length: 807
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Client-Timestamp: 1701004162570
X-Client-Date: 2023-11-26T13:09:22.570Z
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json;charset=UTF-8
Accept: application/json, text/plain, */*
X-Redirect-Id: 5d9d3d8a-997b-4068-87c3-c5496ae2fa90
X-Client-Timestamp-Offset: -480
X-Nimbus-Clientid: bfd4e379-2aa2-4bf2-9089-516d69564a38
Sec-Ch-Ua-Platform: "Windows"
Origin: https://login.bitdefender.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://login.bitdefender.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"user":"example@example.com","redirect_url":"https://api.prod.bd.bitdefenderpassmanager.net/sso/callback","partner_id":"com.bitdefender","lang":"en_US","timestamp":1701004162569,"pow_challenge":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFsbGVuZ2VJZCI6IjYzNTMwNThmLTA5ZWMtNGRmNS1iN2JiLWI0NTY2ZGYzNWRjNCIsInVzZXJJZGVudGlmaWVyIjoiMmIzNTYyYzBiZWUyZWU5ODU2ZDcyMTQ5ZGQ5ZTIzM2NlMmU0YTc4ZSIsImRpZmZpY3VsdHkiOjIsImNvbXBsZXhpdHkiOjEwMCwiY3JlYXRlZE9uIjoxNzAxMDA0MTM0MDE5LCJleHBpcmVzT24iOjE3MDEwMDQzMTQwMTksImlhdCI6MTcwMTAwNDEzNH0._kOhP1mOtKQ_GxuYipcCgdqv-HE_-MjgZosbI7wP9Zk","pow_solution":[3,7,1,2,1,7,16,2,5,1,3,9,6,6,1,3,2,8,9,1,1,2,8,4,5,3,1,4,18,2,2,3,3,2,1,3,2,2,1,1,2,4,5,8,2,1,2,5,3,2,1,6,1,4,9,1,2,1,1,4,12,3,12,5,2,8,4,4,1,3,6,5,1,4,1,3,6,5,1,1,1,6,7,9,1,1,5,4,5,5,3,5,1,1,2,7,9,2,4,2],"pow_duration":8}
```

and receive

```
HTTP/2 200 OK
Date: Sun, 26 Nov 2023 13:09:25 GMT
Content-Type: application/json; charset=utf-8
Request-Id: e480b16e-8d39-4410-a5af-2d47fa5733d7
Bd-Pow: %7B%22pow_inc%22%3Atrue%2C%22pow_sg%22%3Atrue%7D
Access-Control-Allow-Origin: https://login.bitdefender.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: bd-pow
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://consentcdn.cookiebot.com/ https://consent.cookiebot.com https://script.hotjar.com/ https://static.hotjar.com/c/  https://www.googletagmanager.com/gtag/ https://sstats.bitdefender.com/ https://assets.adobedtm.com/ https://www.googleadservices.com/pagead/ https://fls.doubleclick.net/ https://www.bitdefender.com/scripts/ZHRt/ https://js.hs-scripts.com/341979.js https://js.hs-analytics.net/analytics/ https://js.hsleadflows.net/leadflows.js https://js.hscollectedforms.net/collectedforms.js https://js.leadin.com/js/v1/341979.js https://cdn.tt.omtrdc.net/cdn/target.js https://bitdefender.tt.omtrdc.net/m2/bitdefender/ https://www.google.com/recaptcha/api.js https://www.gstatic.com/recaptcha/ https://www.adobetag.com/d1/digitalpulsedebugger/live/DPD.js https://static.hotjar.com https://challenges.cloudflare.com/turnstile/v0/api.js; img-src 'self' data: https://download.bitdefender.com https://www.google.com/ https://www.google.ro/ https://googleads.g.doubleclick.net/pagead/ https://sstats.bitdefender.com/b/ss/ https://track.hubspot.com/ https://cm.everesttech.net/ https://dpm.demdex.net/ https://omnitureengineering.d1.sc.omtrdc.net/ https://checkout-sdk.bitdefender.com/latest/assets/; style-src 'self' 'unsafe-inline'; font-src 'self' data: https://script.hotjar.com/; object-src 'none'; connect-src 'self' https://consentcdn.cookiebot.com/ https://in.hotjar.com https://starget.bitdefender.com https://checkout-service-mars.checkout-app.nmbapp.net/ https://checkout-service.bitdefender.com/ https://vc.hotjar.io/sessions/ https://bitdefender.demdex.net/ https://dpm.demdex.net/ https://forms.hubspot.com/collected-forms/ https://forms.hubspot.com/lead-flows-config/ https://sstats.bitdefender.com/ https://bitdefender.tt.omtrdc.net/; frame-src 'self' https://consentcdn.cookiebot.com/ https://vars.hotjar.com/ https://bitdefender.demdex.net/ https://www.google.com/recaptcha/ https://assets.adobedtm.com/ https://bid.g.doubleclick.net/ https://challenges.cloudflare.com/
Strict-Transport-Security: max-age=31536000
Via: 1.1 google
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 82c25da0be811420-JHB

{"status":"ok","user_token":"eyJraWQiOiJ6R2h5d1AwaiIsImFsZyI6IkVTMjU2In0.eyJzaWQiOiI0ZDMyOWQ2YjU5ZmJhYzZkOGVmYmJiMDBjZmYwZTRmYTE3YWM0MTBmIiwiaXNzIjoiaHR0cHM6Ly9hcGkubG9naW4uYml0ZGVmZW5kZXIuY29tIiwic3ViIjpudWxsLCJhdWQiOiJsb2dpbi1iaXRkZWZlbmRlci11c2VyLXRva2VuIiwiZXhwIjoxNzAxMDkwNTY1LCJuYmYiOjE3MDEwMDQxNjUsImlhdCI6MTcwMTAwNDE2NSwicGlkIjpudWxsLCJqdGkiOiIyOWM1Mjc4Zi1mZWE1LTQyYTItOWUwZC03NGQ3MTBiYzNjYzQifQ.OfVHUmM3Ji9BmOo0Pz2XKVWre-o9jg6mETXdhhsVQnfBuJnX-Ul1jJHrNnZAklIZLfhZ4RKaqRqwGKYDS7p6yw","users":[{"user":"example@example.com","partner_id":"com.bitdefender","fingerprint":"d26402d627466cd9898426c7953e7a2da7d015a141a6961c8144a1d2dfdce425"}]}
```

When we type our password, we send

```
POST /v1/user/signin HTTP/2
Host: api.login.bitdefender.com
Cookie: at_check=true; _gcl_au=1.1.1790527271.1701001543; AMCVS_0E920C0F53DA9E9B0A490D45%40AdobeOrg=1; s_ecid=MCMID%7C90335162488781360583608280541424934425; _clck=1pv7b2b%7C2%7Cfh1%7C0%7C1425; _ga=GA1.1.2092586183.1701001546; s_cc=true; OptanonAlertBoxClosed=2023-11-26T12:30:41.582Z; _biz_uid=a029fb7b85d843f0a9b87308e995a709; _fbp=fb.1.1701001843365.840477708; _hjFirstSeen=1; _hjIncludedInSessionSample_37798=1; _hjSession_37798=eyJpZCI6IjljNTA4Y2M5LWQ0ODUtNGUzMi1hMDJhLThmNzk3NzUyNjIwNCIsImNyZWF0ZWQiOjE3MDEwMDE4NDM5MDMsImluU2FtcGxlIjp0cnVlLCJzZXNzaW9uaXplckJldGFFbmFibGVkIjp0cnVlfQ==; _hjSessionUser_37798=eyJpZCI6Ijg1MjRjODMxLTQ4YmUtNTQ5Mi04MTdiLTBjOTdiNTRjYzlkZCIsImNyZWF0ZWQiOjE3MDEwMDE4NDM5MDIsImV4aXN0aW5nIjp0cnVlfQ==; _hjAbsoluteSessionInProgress=1; _biz_flagsA=%7B%22Version%22%3A1%2C%22Ecid%22%3A%22-1404095977%22%2C%22ViewThrough%22%3A%221%22%2C%22XDomain%22%3A%221%22%7D; bdlcoco=MY; bdliseu=; bdlreg=07; AMCV_0E920C0F53DA9E9B0A490D45%40AdobeOrg=179643557%7CMCIDTS%7C19688%7CMCMID%7C90335162488781360583608280541424934425%7CMCAAMLH-1701607572%7C3%7CMCAAMB-1701607572%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1701009972s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.5.0%7CMCCIDH%7C238555812; _uetsid=eb144f708c5611eead2cd55b7e724031; _uetvid=eb1434e08c5611eea48889152d7af9c2; _biz_nA=6; OptanonConsent=isGpcEnabled=0&datestamp=Sun+Nov+26+2023+20%3A53%3A59+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202310.2.0&browserGpcFlag=1&isIABGlobal=false&hosts=&consentId=e86ea71f-02e1-4cdb-94dc-d5eb24786956&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&iType=1&geolocation=MY%3B07&AwaitingReconsent=false; bd112=pc9BDoIwEAXQu3RN6HTa6bRsPIGJe%2BtCpUYSCwRKiDHc3R6AHclf%2FN37%2F%2FoTy%2FQRjXjnPDZBBrmua%2F3ochtfsW%2FjVD%2BHFOTc5Rjk%2Bd71QbZLSt%2FLMOcT1BY9aTSMRutSnahE7lKc8z2NolEMCgCZaKuOOeCc9tp7tIaQrTK7kFd8FDLaEhlf7gCX5ch7kEY8%2FEh5ghJS4IoJbPchA9vtDw%3D%3D; _biz_pendingA=%5B%5D; mbox=session#6a0d3ec5582e447f9eb772e690ffaed7#1701005103|PC#6a0d3ec5582e447f9eb772e690ffaed7.38_0#1764248043; s_tp=6120; s_sq=%5B%5BB%5D%5D; s_ips=1126.7142857313156; _clsk=yxi0xq%7C1701003854217%7C7%7C0%7Cr.clarity.ms%2Fcollect; s_ppv=us%253Asplitter%2520homepage%2C97%2C18%2C5925%2C5%2C5; _ga_R43EZ9XF5Y=GS1.1.1701001546.1.1.1701003861.60.0.0; _ga_6M0GWNLLWF=GS1.1.1701001546.1.1.1701003861.60.0.0; __bduid=e30a628aefa21a475e127900b41b2ff90273ae64
Content-Length: 537
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Client-Timestamp: 1701004270991
X-Client-Date: 2023-11-26T13:11:10.991Z
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json;charset=UTF-8
Accept: application/json, text/plain, */*
X-Client-Timestamp-Offset: -480
X-Nimbus-Clientid: bfd4e379-2aa2-4bf2-9089-516d69564a38
Sec-Ch-Ua-Platform: "Windows"
Origin: https://login.bitdefender.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://login.bitdefender.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"pass":"123456","fingerprint":"d26402d627466cd9898426c7953e7a2da7d015a141a6961c8144a1d2dfdce425","redirect_url":"https://api.prod.bd.bitdefenderpassmanager.net/sso/callback","partner_id":"com.bitdefender","token":"4d329d6b59fbac6d8efbbb00cff0e4fa17ac410f","lang":"en_US","refresh_code_challenge":"4L8YkABRLKr7WSAX9FjKSS9FYWJgRy2pKEJ5nv7G5uU","timestamp":1701004270991,"state":"cc20660e-03e1-491d-8e59-d8620827b986","redirect_id":"5d9d3d8a-997b-4068-87c3-c5496ae2fa90","challenge":"89VoKCIPsZfYbswxVzSecQZG0H1bdqn5Ig1FaGjrBjE"}
```

and receive

```
HTTP/2 200 OK
Date: Sun, 26 Nov 2023 13:11:13 GMT
Content-Type: application/json; charset=utf-8
Request-Id: 69974932-0088-4dde-8a14-00a2f1558345
Access-Control-Allow-Origin: https://login.bitdefender.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: bd-pow
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://consentcdn.cookiebot.com/ https://consent.cookiebot.com https://script.hotjar.com/ https://static.hotjar.com/c/  https://www.googletagmanager.com/gtag/ https://sstats.bitdefender.com/ https://assets.adobedtm.com/ https://www.googleadservices.com/pagead/ https://fls.doubleclick.net/ https://www.bitdefender.com/scripts/ZHRt/ https://js.hs-scripts.com/341979.js https://js.hs-analytics.net/analytics/ https://js.hsleadflows.net/leadflows.js https://js.hscollectedforms.net/collectedforms.js https://js.leadin.com/js/v1/341979.js https://cdn.tt.omtrdc.net/cdn/target.js https://bitdefender.tt.omtrdc.net/m2/bitdefender/ https://www.google.com/recaptcha/api.js https://www.gstatic.com/recaptcha/ https://www.adobetag.com/d1/digitalpulsedebugger/live/DPD.js https://static.hotjar.com https://challenges.cloudflare.com/turnstile/v0/api.js; img-src 'self' data: https://download.bitdefender.com https://www.google.com/ https://www.google.ro/ https://googleads.g.doubleclick.net/pagead/ https://sstats.bitdefender.com/b/ss/ https://track.hubspot.com/ https://cm.everesttech.net/ https://dpm.demdex.net/ https://omnitureengineering.d1.sc.omtrdc.net/ https://checkout-sdk.bitdefender.com/latest/assets/; style-src 'self' 'unsafe-inline'; font-src 'self' data: https://script.hotjar.com/; object-src 'none'; connect-src 'self' https://consentcdn.cookiebot.com/ https://in.hotjar.com https://starget.bitdefender.com https://checkout-service-mars.checkout-app.nmbapp.net/ https://checkout-service.bitdefender.com/ https://vc.hotjar.io/sessions/ https://bitdefender.demdex.net/ https://dpm.demdex.net/ https://forms.hubspot.com/collected-forms/ https://forms.hubspot.com/lead-flows-config/ https://sstats.bitdefender.com/ https://bitdefender.tt.omtrdc.net/; frame-src 'self' https://consentcdn.cookiebot.com/ https://vars.hotjar.com/ https://bitdefender.demdex.net/ https://www.google.com/recaptcha/ https://assets.adobedtm.com/ https://bid.g.doubleclick.net/ https://challenges.cloudflare.com/
Strict-Transport-Security: max-age=31536000
Via: 1.1 google
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 82c260426bda1408-JHB

{"user_token":"eyJraWQiOiJ6R2h5d1AwaiIsImFsZyI6IkVTMjU2In0.eyJzaWQiOiJmZmQyZjIyNjliOWVkYjg0MDYyMDRlMDgwZDNmZjdjNTg2MDNkZWUwIiwiaXNzIjoiaHR0cHM6Ly9hcGkubG9naW4uYml0ZGVmZW5kZXIuY29tIiwic3ViIjoiMGI2NWI2MmEtNDkwMS00ZTBjLTljNGItZjQzMWY1NzY1YzA1IiwiYXVkIjoiYXBpLnByb2QuYmQuYml0ZGVmZW5kZXJwYXNzbWFuYWdlci5uZXQiLCJleHAiOjE3MDEwMDQ1NzMsIm5iZiI6MTcwMTAwNDI3MywiaWF0IjoxNzAxMDA0MjczLCJwaWQiOiJjb20uYml0ZGVmZW5kZXIiLCJqdGkiOiJhNjRiYzQ0OS0zOTI4LTQ2ZDgtYmIyNy1lMGMwZDhhODZiODUifQ.OuBiQvhv6jPa0q_Va_CyP_upBwWjfkiVrJm8pQoZ_BOTtYuqUon_suCfA1hgQ_KyHZLkCOZyd47q9kgFsS9R3g","status":"ok","account":"inactive","remember":false,"usage":"login","fullname":"Daniel","state":"cc20660e-03e1-491d-8e59-d8620827b986","redirect_url":"https://api.prod.bd.bitdefenderpassmanager.net/sso/callback?user_token=eyJraWQiOiJ6R2h5d1AwaiIsImFsZyI6IkVTMjU2In0.eyJzaWQiOiJmZmQyZjIyNjliOWVkYjg0MDYyMDRlMDgwZDNmZjdjNTg2MDNkZWUwIiwiaXNzIjoiaHR0cHM6Ly9hcGkubG9naW4uYml0ZGVmZW5kZXIuY29tIiwic3ViIjoiMGI2NWI2MmEtNDkwMS00ZTBjLTljNGItZjQzMWY1NzY1YzA1IiwiYXVkIjoiYXBpLnByb2QuYmQuYml0ZGVmZW5kZXJwYXNzbWFuYWdlci5uZXQiLCJleHAiOjE3MDEwMDQ1NzMsIm5iZiI6MTcwMTAwNDI3MywiaWF0IjoxNzAxMDA0MjczLCJwaWQiOiJjb20uYml0ZGVmZW5kZXIiLCJqdGkiOiJhNjRiYzQ0OS0zOTI4LTQ2ZDgtYmIyNy1lMGMwZDhhODZiODUifQ.OuBiQvhv6jPa0q_Va_CyP_upBwWjfkiVrJm8pQoZ_BOTtYuqUon_suCfA1hgQ_KyHZLkCOZyd47q9kgFsS9R3g&status=ok&account=inactive&remember=false&usage=login&state=cc20660e-03e1-491d-8e59-d8620827b986&lang=en_US"}
```

When we set a master password, we send

```
POST /sso/users/acc8bcf8-a4f4-4f28-a721-f05c73f21ffd HTTP/1.1
Host: api.prod.bd.bitdefenderpassmanager.net
Content-Length: 1153
Accept: vnd.saferpass.net+json; version=2
Authorization: Bearer 34b4994cd23abbc681c6a8c80ec010eb88ccd27fb393012a1e9706e4ed9432f6
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json
Origin: chrome-extension://ibkoenhablealnikeefmjineccmgegmh
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: close

{"password":"0ea7d20ab34e167f99de0734dfa6bfd037f131d8b34827d48108f1854e03b5ca","recoveryHash":"2106f458b477f5c90a46966f4cc51d41b7bf6146043dd12ce5d5598169b3a389cc8b9d4b998b70b378ef0239808652d1a0ce1c32a46190f6c8a9d240a29679f3","recoveryKey":"{\"iv\":\"Ujh5ZqJPjbWO4X5lAXJxyw==\",\"v\":1,\"iter\":5000,\"ks\":256,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"rzCGgT/wYu4=\",\"ct\":\"WYM2NdJYLS6NZ1vfxZQpuHAPc9L4PMpb\"}","encKey":"2dab622f63d5c9af69e5f9cf2292b008dc86e3f3a975f1ee743731e2aed964022555e8e7fce12b1fa61f193788f9f84af204e7767f533a069dc392b22d819a92ee2b2f6b6ccb9244ad106fa5f653bdbc8f3055c954431876bc22f533735e56a1ab74297774762912d45c28ac947867e8","keyPair":{"publicKey":"b55192d8c43c3b2f6dec0b0245ff552feab1e476072d892c55caf5e651931878","privateKey":"{\"iv\":\"keMcmlxEP9MYbU/x0i1cgQ==\",\"v\":1,\"iter\":5000,\"ks\":256,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"kDJzb4iY6ac=\",\"ct\":\"crE3g8mDDBp81qXBPomvpSPleGTLtxGSl8Icmc6qrM5NkTSfHxjdGk66li2JISU3sngFaW+tbNmg9G0wPACh4soT8s/fMw6R\"}","keySize":256,"keyType":"x25519"},"salt":"62d6176f79e61322a80a16526abe40cd","appProduct":"bitdefender"}
```

and receive

```
HTTP/1.1 200 OK
Server: nginx
Date: Sun, 26 Nov 2023 13:13:20 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 39
Connection: close
Access-Control-Allow-Origin: chrome-extension://ibkoenhablealnikeefmjineccmgegmh
Access-Control-Allow-Headers: authorization, content-length, content-type, if-match, if-none-match, origin, x-requested-with, x-saferpass-sign, sentry-trace
Access-Control-Expose-Headers: content-type, content-length, etag, x-saferpass-sign
Access-Control-Allow-Methods: GET, PATCH, POST, PUT, DELETE, OPTIONS
Access-Control-Expose-Credentials: true
Accept: multipart/mixed, application/json
ETag: W/"27-IJ3i/lS61vQFNlk4xSazuBQF+wU"

{"code":"user_successfully_registered"}
```

When add a new account, we send

```
POST /entries/documents HTTP/1.1
Host: sync.prod.bd.bitdefenderpassmanager.net
Content-Length: 1888
Accept: vnd.saferpass.net+json; version=2
Authorization: bearer 804da155944d12b325c874ec3f43ea2723b3cdd378d34227a3481874d10e39c8
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json
Origin: chrome-extension://ibkoenhablealnikeefmjineccmgegmh
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: close

[{"meta":{"ownerId":"acc8bcf8-a4f4-4f28-a721-f05c73f21ffd","authorId":"acc8bcf8-a4f4-4f28-a721-f05c73f21ffd","id":"b47c3e3c-fc0b-4036-a8a2-68cf1a02c5bb","createdAt":1701004735962,"updatedAt":1701004735962,"namespaces":["acc8bcf8-a4f4-4f28-a721-f05c73f21ffd"],"encKey":{"id":"e13f2262-775f-4f07-af6e-daedb134a4b0","version":1},"seq":{"local":1,"global":1}},"data":{"model":"Account","version":1,"encrypted":"{\"iv\":\"1hYPCVRo18jn6bK8v1m0UA==\",\"v\":1,\"iter\":5000,\"ks\":256,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"03lxbFrs+tM=\",\"ct\":\"7c/uIPkOUjfs6GfulhV7Uld0XM1Fng0NLGd3wi12lZuoV79X1mrE2OP9E+RfnNXaLHqtvSY6zsTIl6BPM7hZscEwk94xnLeXtP1hesN52nW0P7cqZU+KGz4Wfj8WDWb48RkRDG5FOxJ8LApSnhQeH3WcFBhWh1Tu+/VEkXejmdFGyWV++I8txi9aaKbdaYfhOuHSn97nr9vf6IOlFbJG9BzlSTiBf9m7azOtsaTcHK+3QMi3k51D9peZoEurfC6GgA7CeHWme8W+OZ3FTn1fLCrW+XEEpqP5Z2pgbJ7gI2bUEVqkVsWiL24GFlze/x3m2se4mdxgVktLZUIlpjGmeDvL5NcChrYUU/xJpL6sl6VqbsEsx8SSKkQm+jiwOgiwsydeqvvLOxqvA+BgUGoYc4Q5JTj0BKbsIh8eJvT8Uonfc77k8/QkwrIQkNJHFem9KI2KvECtbTqoHOkF3KnBtLNUD6XZC1MnJzpPJ5i7ekcmQWUx4nc8bmNc1JBOASl46LrjqdW74wWBE3lOOiW9gSjor0CFgKrPB8GDxvlkw0cZNKBt1UYI75f4833bBUV+puyXGx9jLrP35CXEdZMgHAGLtcIXzPWu2i3VZwqFOyh0C+MBRf0G4639Rkrrn5ycK7xhwhsMsVznXJlLORiMW6mDv63h0v3keRho2QFHBXc1tGfKoBz96cgD0lOPuj98glKaRZScfRjedOrD6Q6yv2BNcCdUVm1a/IqGxg+u7etdOEsunoxKMC4xdDcqj7ahC1Z/3huraf5XO40mXF17rnr3v1J4GiZlTETyGH29Xyems/tUe27vKftkMpQGVVs2FjhIkbN/3X4TtHL44aynadkpY/Xd7poOgxVO6p370sRx81ZHjhn+/F2tPJYl/A7izc2D0zLLeJh5WyV4nWbqDYbUz9nlAmuSQPjvKExM79Nle+BxH0rB+qFf2tM1LWhDad7Oe82QZ/6Xetn51sMGogiSJtCVZSjvdehskPqqYCOfaaPzQhhfNcVt4jMIHlcEdufnH/Ynytae9vVnX0DmnzND45nM5vjFGNmufcelKqNBd/DNQ6Aru9EYmcdWpXBJ5Cq77oArIm/hMG30OOI2XVVCTtWtjc7gfwBTys0Qrcw1o+qj9Q5dPU2TJClmq7hNQBpfKYXgIl+b2xrv5s7oKgKtS8joCqqDJeA+lT5XWl0rBXHnkit71QwzZkAL9lQc4KquB258d7B/Ez2XGcdTdxFeDyl+/3UPUzkX4EfHB6iz95fVi4JlhfhT69G9e0MWh3G/epR1cJOKu5AZgJyrzV+7ffT1\"}"}}]
```

and receive

```
HTTP/1.1 200 OK
Server: nginx
Date: Sun, 26 Nov 2023 13:19:04 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 2
Connection: close
Access-Control-Allow-Origin: chrome-extension://ibkoenhablealnikeefmjineccmgegmh
Access-Control-Allow-Headers: authorization, content-length, content-type, if-match, if-none-match, origin, x-requested-with, x-saferpass-sign, sentry-trace
Access-Control-Expose-Headers: content-type, content-length, etag, x-saferpass-sign
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Expose-Credentials: true
Accept: multipart/mixed, application/json
ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"

[]
```

and we get icon

```
GET /icons/test.com.json HTTP/2
Host: cdn.prod.bd.bitdefenderpassmanager.net
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Accept: */*
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7


```

```
HTTP/2 200 OK
Content-Type: application/json
Content-Length: 39
Date: Sun, 26 Nov 2023 13:18:59 GMT
Last-Modified: Wed, 08 Nov 2023 20:30:16 GMT
Etag: "3472dde9cdcb4ce75598d4aaffadc802"
X-Amz-Server-Side-Encryption: AES256
Accept-Ranges: bytes
Server: AmazonS3
X-Cache: Miss from cloudfront
Via: 1.1 e138e53b0ad10ce61906ea98da7d4368.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: KUL50-C2
X-Amz-Cf-Id: bwrLdb_5WLJnUxhELhUKv4Ut4a4doQx_zJCKfF_pcRQnzc2I4B966A==

{"website":"test.com","defaultIcon":""}
```

When we unlock the vault using the master password, we send

```
POST /sso/tokens/access/2df80140-4859-4048-900d-71cbc8c770f5 HTTP/1.1
Host: api.prod.bd.bitdefenderpassmanager.net
Content-Length: 102
Accept: vnd.saferpass.net+json; version=2
Authorization: Bearer 413868b9f64b43b3f1d85f7d4f90dcf4718ef510b2302836da8391d478eb55e0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json
Origin: chrome-extension://ibkoenhablealnikeefmjineccmgegmh
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: close

{"grantType":"password","password":"0ea7d20ab34e167f99de0734dfa6bfd037f131d8b34827d48108f1854e03b5ca"}
```

and receive

```
HTTP/1.1 200 OK
Server: nginx
Date: Sun, 26 Nov 2023 13:25:40 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 343
Connection: close
Access-Control-Allow-Origin: chrome-extension://ibkoenhablealnikeefmjineccmgegmh
Access-Control-Allow-Headers: authorization, content-length, content-type, if-match, if-none-match, origin, x-requested-with, x-saferpass-sign, sentry-trace
Access-Control-Expose-Headers: content-type, content-length, etag, x-saferpass-sign
Access-Control-Allow-Methods: GET, PATCH, POST, PUT, DELETE, OPTIONS
Access-Control-Expose-Credentials: true
Accept: multipart/mixed, application/json
ETag: W/"157-hikAD0MSBlPXJNuhpeE+GdqkmOE"

{"authToken":{"access_token":"3d6776a0682d72fb20c79df72bce8316b173d1dad31a0006e98ef8f393feb630","refresh_token":"4b5dbb5265552f79ed1014186577f7b393206638fbbddfc5c48a7dabb88afa1b","expires_in":43199.984,"sign_key":"2ad91abf2c4cdc36fdb1965ef75b3a107655fe6a471dd9093277cb1f22e7c055","token_type":"bearer"},"loginToken":{"expires_in":1209599.996}}
```

Finding:

1. The email is not encrypted.
1. The account password is not encryted.
