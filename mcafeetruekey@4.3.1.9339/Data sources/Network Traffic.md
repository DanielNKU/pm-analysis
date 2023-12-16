## Capturing Network Traffic

When logging in, I have not type my password, and I have send packet

```
POST /session/auth HTTP/1.1
Host: id-api.truekey.com
Cookie: _profile=%7B%22install_source%22%3A%222001%22%2C%22p%22%3A%22tk_desktop_web%22%2C%22distinct_id%22%3A%22dd03f76f-ae9d-4fc9-85f5-85f4be2d8073%22%2C%22affiliate_id%22%3A%221265%22%7D; _gid=GA1.2.229514393.1700206605; _fbp=fb.1.1700206605627.1913640632; prefered_locale=en; mp_9987bd83cfe16103dab1337852da71bf_mixpanel=%7B%22distinct_id%22%3A%20%2218b8edd18874c1-0416085afbe95c-745d5777-295d29-18b8edd1888124f%22%2C%22%24search_engine%22%3A%20%22bing%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fcn.bing.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22cn.bing.com%22%7D; _ga=GA1.2.20746374.1698908936; _ga_N9RNNXYYFH=GS1.1.1700225498.4.0.1700225498.0.0.0
Content-Length: 1112
Sec-Ch-Ua: "Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Tk-Client-Language: zh-CN
X-Tk-Client-Api: TK-API-1.1
X-Tk-Client-Version: 4.3.1.9339
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0
Content-Type: application/json
X-Tk-Idapi-Version: TK-IDAPI-1.1
X-Tk-Client-Context: crx-win
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: chrome-extension://gnnbmcifkkjgjdbkilfglpdpmidkgefn
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: close

{"data":{"userData":{"email":"example@example.com"},"rpData":{"clientId":"42a01655e65147c3b03721df36b45195","response_type":"session_id_token","culture":"en-US","affiliateId":"1265"},"contextData":{"enableRefreshToken":true,"deviceInfo":{"appVersion":"","base64Attestation":"","deviceManufacturer":"Not Available","deviceModel":"Not Available","deviceName":"New Microsoft Edge","devicePlatformID":6,"deviceType":3,"loggedInUserType":null,"oSName":"Unknown","oSVersion":"Not Available","osManufacturer":"Not Available","processorName":"Not Available","secureBootStatus":false,"videoDevices":null},"locationInfo":null,"otpInfo":{"qn":"wIF2s8KCuPjwPFIG3ZbyjYP9DbBhS5F+c/ZUQXp9JkdqNuEB/JGo0QQSdp9n018i9eVo8/haxpOmgvnl0Eq0o1a8ioeTAS54+KCiL7lFGnMl2O+v4v6LIXk1iET/3uJT6w99zs0PLpXfHDwzPa58cO5BYRw4wys4Oeq2JotMMaI=","otpType":"time","otp":"J07AUeYGr1y/IKY5tsDLvv7SZjlMURH3UB9DJgFUHSo="},"wifiInfo":null,"affId":"1265","affiliateId":"1265"},"ysvcData":{"deviceId":"6943093deebfc58bd3092745019d84860a14621a98d3367e2e48644cc63d1700216236","puid":"","activeSession":false,"wUser":"JS"}},"operation":"SIGNPACK_AUTHORIZE_REQUEST"}
```

and receive

```
HTTP/2 201 Created
Date: Sat, 18 Nov 2023 02:48:44 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 177
Server-Timing: intid;desc=43e9dada1c5dc7b9
Server-Timing: intid;desc=bb0aa66fad95ecbc
Server-Timing: intid;desc=bb0aa66fad95ecbc
Cache-Control: no-cache
Pragma: no-cache
Expires: -1
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=15552000; includeSubDomains; preload
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 827ce5699d5513d2-JHB

{"oAuthTransId":"98f69fb3-bc75-4342-96b7-7c7a0c93747c","responseResult":{"isSuccess":true,"errorCode":null,"errorDescription":null,"transactionId":null},"riskAnalysisInfo":null}
```

When I type my password, I send the packet

```
POST /mp/auth/ HTTP/2
Host: id-api.truekey.com
Cookie: _profile=%7B%22install_source%22%3A%222001%22%2C%22p%22%3A%22tk_desktop_web%22%2C%22distinct_id%22%3A%22dd03f76f-ae9d-4fc9-85f5-85f4be2d8073%22%2C%22affiliate_id%22%3A%221265%22%7D; _gid=GA1.2.229514393.1700206605; _fbp=fb.1.1700206605627.1913640632; prefered_locale=en; mp_9987bd83cfe16103dab1337852da71bf_mixpanel=%7B%22distinct_id%22%3A%20%2218b8edd18874c1-0416085afbe95c-745d5777-295d29-18b8edd1888124f%22%2C%22%24search_engine%22%3A%20%22bing%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fcn.bing.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22cn.bing.com%22%7D; _ga=GA1.2.20746374.1698908936; _ga_N9RNNXYYFH=GS1.1.1700225498.4.0.1700225498.0.0.0
Content-Length: 545
Sec-Ch-Ua: "Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Tk-Client-Language: zh-CN
X-Tk-Client-Api: TK-API-1.1
X-Tk-Client-Version: 4.3.1.9339
Sec-Ch-Ua-Mobile: ?0
Y-Correlation-Id: YCIDed852ed8-1fc6-418f-8ee9-7f2ce03df01bYCID
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0
Content-Type: application/json
Accept: application/vnd.tk-pm-api.v1+json
X-Tk-Client-Context: crx-win
Sec-Ch-Ua-Platform: "Windows"
Origin: chrome-extension://gnnbmcifkkjgjdbkilfglpdpmidkgefn
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

{"culture":"zh-CN","clientId":"42a01655e65147c3b03721df36b45195","userData":{"email":"example@example.com","pwd":"tk-v1-2d49e9a104649454d2d73393274f6c7a6e88e844656d96aff0bdcc97f6609744","oAuthTransId":"98f69fb3-bc75-4342-96b7-7c7a0c93747c"},"deviceData":{"deviceId":"6943093deebfc58bd3092745019d84860a14621a98d3367e2e48644cc63d1700216236","deviceType":"pc","devicePlatformType":"windows","otpData":{"otp":"CTQAfTMqiR3/y/r8RNYDpm/VqGVYJlKEgtDNVOe4eJ+3bdvhgjpIym5twhSw/BnKC+/zS7E4Jg==","otpType":"challenge"}},"policyVersion":1,"subscriptionData":{}}
```

and receive

```
HTTP/2 200 OK
Date: Sat, 18 Nov 2023 02:49:56 GMT
Content-Type: application/json; charset=utf-8
Server-Timing: intid;desc=7fc48e89d73c2145
Server-Timing: intid;desc=89a18f4d3ca16ac5
Server-Timing: intid;desc=89a18f4d3ca16ac5
Cache-Control: no-cache
Pragma: no-cache
Expires: -1
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=15552000; includeSubDomains; preload
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 827ce72a7ce071e5-JHB

{"refreshTokenDuration":604800,"responseResult":{"isSuccess":true,"errorCode":null,"errorDescription":null,"transactionId":"0e11132d-285d-4be9-906d-c7841271210d"},"riskAnalysisInfo":{"nextStep":10,"flowId":null,"nextStepData":{"oobDevices":null,"verificationEmail":null,"bcaResyncToken":null},"altNextStep":0,"bcaNextStep":0,"bcaNextStepData":null},"authCode":null,"redirectUrl":null,"state":null,"cloudKey":"0431eb170d8f08ecd9222f0cf8173135cb68361eee3576c8fd50e9cc850ce693","idToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IllBUF9UUlVFS0VZX1BST0RfMDEifQ.eyJqdGkiOiIxNGNmM2I3Yi1mMmM1LTQ3MjUtODAyMS02YzBlYjBkZjU5MGEiLCJzdWIiOiI1MjY1MGI1MS03OWU2LTQyOTgtYTdjMy00Y2JiMWZiZWI1ODQiLCJub25jZSI6ImI0Y2Y3NDJhLTYzMGMtNDJiYS04YzVlLTI5M2U4NTJmYWU5MCIsImlzX3ByZW1pdW0iOiJmYWxzZSIsImlzcyI6Imh0dHBzOi8vaW50ZWxzZWN1cml0eS5jb20iLCJhdWQiOiI0MmEwMTY1NWU2NTE0N2MzYjAzNzIxZGYzNmI0NTE5NSIsImV4cCI6MTcwMDI3OTM5NiwibmJmIjoxNzAwMjc1Nzk2LCJpYXQiOjE3MDAyNzU3OTYsImF1dGhfdGltZSI6MTcwMDI3NTc5NiwiZW1haWwiOiI3NzU2MDU2NTdAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJmYWxzZSIsImRldmljZV9pZCI6IjY5NDMwOTNkZWViZmM1OGJkMzA5Mjc0NTAxOWQ4NDg2MGExNDYyMWE5OGQzMzY3ZTJlNDg2NDRjYzYzZDE3MDAyMTYyMzYiLCJhY2Nlc3NfdHlwZSI6WyJkZWZhdWx0Il19.NPlsZ9_cENAjS4Tseg7bnYXJsggmVPMsuBJDaieKaJdgMQpYxVOu2hzFuOPqxyRnqg3aOxiAbrkjARtSIm925ytl5A3lMscza9m97wQDcDc9cccHBUKiDfvZPeM7lFDFe2EN72HVPsJiiThkroE6pXOF8b5Pgq8OtgBgF7duwGBLSUlAClC8HUFS8NeuQh84xy7T0DCGLLyw5Pu6FMb8cidURlrgU4gAP-vy-PEPs1MKOSMaXIV9tNn-pHu2XvXi6I_5GmGKMatLyNhxXQqUdjKfM62lPESLG5Qe0LQbuLn7Gjgv4AiMo7SrBinqb_w-_WCC8KG0M-gv_IAqVkJrGA","oAuthTransId":"98f69fb3-bc75-4342-96b7-7c7a0c93747c","activeSession":false,"templateCount":0,"refreshToken":"eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwidmVyc2lvbiI6MX0..qMiYoZQ8iwmyFkh4.7yT3zKocwTcIltSeNRxWiNhcs6R0q7vdWtbkYXfei4j2yjv2Hg1xoTgxqPp00ColHFKBT1qakW7JNdyQwaKeRhjcOHzTp570X0CJdPLgxgJujZIvqRbSemm58h5lAFa4PlDbckoG6hQ_rfaG_rt1P15uYVf7BywsFZspPUqHy7lEZzTBpoARj2T5I4V3Cau2DVhA38GTcWuaNFZdJVhLckO9LjIbTwdq5ecFvPbl9ZzDr2lAOOL7jQCeJKNCCmJhN3xOltMHsE-C3wx9Bpw5wWSF3oUygAe3Vf2cAZBpk3qw9YEC0PwKv-YdoH12SXrUriHSIAVhuTb7en3VoG338ClA8ER500TnuER-NmzgM2gIw3_HWhXED0vzVxF-U2Di0ECqD55wwXsR4e3TRPmYOwhyMZxmjjqAcZi1iGTWh1-bg-W6Bm9RX8-3a3Hwq9hyCjOoEOKXhaaM6Tan18sO2qoqr1t0j4r6-2R6IAbQb0KPQ09CNoZHpjlmkvwhUqyYhocRCthM5UIkOI3jirMwcAYM3JI11p1oP2GMOSEJYOewuSz3h9UYcWzU6WMgMBM0va-kwe8cYb3h3nnx537H4V_ltbdi3r6dx0TKooEsnx8jRxjwMUoZz6U.XlIX26wQZPQxVZOqmCsW9w"}
```

and get the data file

```
HTTP/2 200 OK
Date: Sat, 18 Nov 2023 02:49:58 GMT
Content-Type: application/vnd.tk-pm-api.v1+json; charset=utf-8
Server-Timing: intid;desc=49f5519c99f7d7f0
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Etag: "32741a0cd1b2baac6be1868a676d72f7"
Cache-Control: max-age=0, private, must-revalidate
Cache-Control: no-store
Strict-Transport-Security: max-age=15552000; includeSubDomains; preload
Access-Control-Allow-Headers: X-TK-Client-API,X-TK-Client-Context,X-TK-Client-Version,X-TK-Client-Language,content-type
Access-Control-Expose-Headers: ETag
Access-Control-Max-Age: 604800
X-Frame-Options: DENY
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 827ce739aad413cc-JHB

{"schema":"tkd0","customer":{"id":18349324,"schema":"tkp-s3","fullname":"example","email":"example@example.com","cohort":"{\"distinct_id\":\"TK:52650b51-79e6-4298-a7c3-4cbb1fbeb584\",\"p\":\"tk_desktop_web\",\"signup_date\":\"2023-11-17T10:46:08Z\"}","salt":"b73ad1b76ad48a04bfb82111f0f35af4c1aa65f435d92326493c287e293d057a","k_kek":"AAQE4QQW1QcrMM8rjAEu/WpXzgLma/TFcDarpP5GdVN91aZ6bSVHKC/5VIJs3Y1repNbPsE4vm6dGn90gzTQTA1yGuNBbdNTvIeVlhA6lOoU9HhO1tiy5uRH","public_key":null,"private_key":null,"dr":"{\"algo\":\"tk-v1_pbkdf2-hmac-sha512\",\"iterations\":10000}","profile_version":2,"enrollment_ticket":"3afb9808-a9c6-4957-9810-5e01ea347798","profile_uid":"52650b51-79e6-4298-a7c3-4cbb1fbeb584","distinct_id":"TK:52650b51-79e6-4298-a7c3-4cbb1fbeb584","trial":true,"assets_limit":15,"email_verification":{"verified_at":null,"verification_sent_at":null},"settings":null,"data_updated_at":"2023-11-17T06:00:47-05:00"},"data_updated_at":"2023-11-17T11:00:47Z","assets":[{"id":149396198,"member_id":18349324,"name":"test","login":"test","url":"http://www.test.com/","domain":"test.com","memo_k":null,"password_k":"AATytZt/+zC7u+VGrMmzyUClSHGXfNSiNOLUFQtY","created_at":"2023-11-17T06:00:47-05:00","updated_at":"2023-11-17T06:39:45-05:00","settings":"{\"autologin\":\"1\",\"password_reprompt\":\"0\",\"subdomain_only\":\"0\",\"custom_partner_asset\":false}"}],"documents":[],"blocked_items":[]}
```

Finding:

1. Only passwords are encrypted.
