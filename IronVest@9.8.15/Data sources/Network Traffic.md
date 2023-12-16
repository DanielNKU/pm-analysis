## Capturing Network Traffic

When logging in, we capture the packet

```
POST /v1/user/login HTTP/2
Host: api.ironvest.com
Content-Length: 527
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Content-Type: application/json
Accept: */*
Origin: https://ironvest.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://ironvest.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"email":"example@example.com","deviceId":"665F2A9DD8B9402F82CADA68068C9EBE","key":"3ybOxVsJES4hFqQUNDXmbth0oUfwWMn2dEf/9nIaikaaN5KyyrugFh8Pe1HPLqF7","verifyKey":"YrwiGQrIUCXpFtrmIsOKm5UyKJpLsCeDnlvogjiCsQwD5bMvYMBIQkfJ7e+Dg0v2","strongHash":"$argon2id$v=19$m=19456,t=3,p=1$SVJPTlZFU1QuQ09NKyE3NzU2MDU2NTdEYW5laWw$T8F0dSN1qq8aectGcJhXGCmFbvte33UuNHWnw0CEPcV91zLSRpaeKbd8a4ldCbyDkzyucyfMYHXOP6TpKiubAA","password":"0d263759923eb2bafade5fb10ce55f620e288af756ce3371c1005b449215b0ef","version":"web-8.2.1223","product":"Webapp"}
```

```
HTTP/2 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 682
Date: Sat, 16 Dec 2023 14:19:28 GMT
X-Amzn-Requestid: 70f73229-af10-4e39-ba57-af60ce8376bf
X-Xss-Protection: 1; mode=block
Access-Control-Allow-Origin: https://ironvest.com
Strict-Transport-Security: max-age=31536000
X-Frame-Options: SAMEORIGIN
X-Amzn-Remapped-Content-Length: 682
X-Amz-Apigw-Id: QCi9YE1TIAMEXEQ=
X-Content-Type-Options: nosniff
Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE
Etag: W/"2aa-LMSkqazmPGp9tz4v8ClpQQ8pFrs"
Iv-Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiMjI2ODM0MWM4ZDkyNGVkZGU0ODlmOGZmNmUyYmNhYTI6NTYxZjljZDg0NWQ3NGViNzg0MmYwNDEyMGJiOTBhNTNjMjU1MWVmOTJjYTFiZTYxNjdkNTk1OWI3YjA4ODI5YTM1NDQ5YWI3YTA2NmNjZjM1MjM2ZDA2M2VjODYyZDBjIiwiZXhwaXJhdGlvbiI6MTcwNTMyODM2ODYxMSwiY3JlYXRlZCI6MTcwMjczNjM2ODYxMSwiZW1haWwiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2lnbmF0dXJlIjoiY29tcGxldGUiLCJzY29wZXMiOltdLCJiaW9tZXRyaWNJZCI6bnVsbCwiaWF0IjoxNzAyNzM2MzY4fQ.Jw-eQUaBPuY3t-ppBxBXVXyZ_1IDMqJ-IwCVD6QQH14
X-Amzn-Trace-Id: Root=1-657db1ee-2a58ca703aa64f69482778bc;Sampled=0;lineage=0f70c90e:0
X-Cache: Miss from cloudfront
Via: 1.1 ed32b608463248da6c1845f192312a44.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: KUL50-P2
X-Amz-Cf-Id: WL5f3N5ArtCOGTJrCHDoUF_nJLWTvzunI6bTE3v0LwqVVlOzCEU8IA==

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiMjI2ODM0MWM4ZDkyNGVkZGU0ODlmOGZmNmUyYmNhYTI6NTYxZjljZDg0NWQ3NGViNzg0MmYwNDEyMGJiOTBhNTNjMjU1MWVmOTJjYTFiZTYxNjdkNTk1OWI3YjA4ODI5YTM1NDQ5YWI3YTA2NmNjZjM1MjM2ZDA2M2VjODYyZDBjIiwiZXhwaXJhdGlvbiI6MTcwNTMyODM2ODYxMSwiY3JlYXRlZCI6MTcwMjczNjM2ODYxMSwiZW1haWwiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2lnbmF0dXJlIjoiY29tcGxldGUiLCJzY29wZXMiOltdLCJiaW9tZXRyaWNJZCI6bnVsbCwiaWF0IjoxNzAyNzM2MzY4fQ.Jw-eQUaBPuY3t-ppBxBXVXyZ_1IDMqJ-IwCVD6QQH14","authToken":"zsdMexqyDhzP6T4DnF97qckFt5zQRwrr","key":"C/l3Mx6klwm8eGpP13ZqXcd7A7zO+g4P9/0h4QgJkiJiFK+HjCk0m9hXJJARneGB","bioRecovery":null,"status":"success","message":"successful","action":null}
```

```
GET /v1/legacy?url=https%3A%2F%2Flicense.abine.com%2Fapi%2Fv2%2Fusers&client_application%5Bversion%5D=9.8.15&client_application%5Benvironment%5D=production&client_application%5Btag%5D=chromestore&client_application%5Bbrowser%5D=Chrome&client_application%5Bbuild_num%5D=15&client_application%5Buser_agent%5D=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F120.0.0.0%20Safari%2F537.36&client_application%5Bproduct%5D=DNT3&client_application%5Bdevice%5D=Extension&client_application%5Bdevice_id%5D=665F2A9DD8B9402F82CADA68068C9EBE&deviceId=665F2A9DD8B9402F82CADA68068C9EBE&product=Extension&version=9.8.15 HTTP/2
Host: api.ironvest.com
Cookie: _gcl_au=1.1.1068649100.1702717465; _ga=GA1.1.1620161820.1702717465; _clck=9wqo64%7C2%7Cfhl%7C0%7C1445; _fbp=fb.1.1702717467492.1056709466; hubspotutk=f39762961d9ad6f557cb0782d95b95c1; __hssrc=1; __hstc=69023438.f39762961d9ad6f557cb0782d95b95c1.1702717473327.1702717473327.1702721891518.2; _clsk=ek80e9%7C1702722763810%7C11%7C1%7Cr.clarity.ms%2Fcollect; _ga_RBW3WX8XPJ=GS1.1.1702721884.2.1.1702722937.60.0.0; __stripe_mid=f0d9d72f-453f-453f-a748-8b2bb0ecef58aca973
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"
Accept: application/json, text/javascript, */*; q=0.01
Sec-Ch-Ua-Mobile: ?0
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiZTczNjZjYjJlZDE5NTZjOTRjNWQ4YWRmYWNkOGZjNTM6Y2NhMjljNDgzYjE0NzUzMzAxODJiMDQ3NGU2ZGFkMGIwZDk2YjJmNDY3MzkzODYyOTExNjliYjg0NDQ2ZDdmMDI3NjhmZTI2NjBmYjA1NzEwMDJjZDVmMzk1MDBkMWY5IiwiZXhwaXJhdGlvbiI6MTcwNTMyMjM0NzQ4NSwiY3JlYXRlZCI6MTcwMjczMDM0NzQ4NSwiZW1haWwiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2lnbmF0dXJlIjoiY29tcGxldGUiLCJzY29wZXMiOltdLCJiaW9tZXRyaWNJZCI6bnVsbCwiaWF0IjoxNzAyNzMwMzQ3fQ.itcqxg8LWWncCHzKV7-QZHtjPpw4hb2RI9oLOQ7S22k
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7


```

```
HTTP/2 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 3227
Date: Sat, 16 Dec 2023 12:39:08 GMT
X-Amzn-Requestid: 459f1147-7c0e-435d-968a-164df8ee7aa1
X-Xss-Protection: 1; mode=block
Access-Control-Allow-Origin: https://ironvest.com
Strict-Transport-Security: max-age=31536000
X-Frame-Options: SAMEORIGIN
X-Amzn-Remapped-Content-Length: 3227
X-Amz-Apigw-Id: QCURBH2hIAMECOg=
X-Content-Type-Options: nosniff
Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE
Etag: W/"c9b-lxD+xOK0dtXAsNDNrkkkZtCLHgw"
X-Amzn-Trace-Id: Root=1-657d9a6c-09db67ac383526ca26bd9269;Sampled=0;lineage=0f70c90e:0
X-Cache: Miss from cloudfront
Via: 1.1 917f307702ad54304254fc8951c302be.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: KUL50-P2
X-Amz-Cf-Id: PnFv7ubJuwx0iFNh6a-RI-ltAHhDSLx-4hrqPnwm1wztylp8ZNOl_g==

{"success_code":"successful","data":{"user":{"id":4325838,"email":"example@example.com","first_name":"","last_name":"","company_name":null,"recurly_account_code":null,"role":"user","state":"active","created_at":"Sat, 16 Dec 2023 10:40:56 +0000","updated_at":"Sat, 16 Dec 2023 10:40:56 +0000","marked_delete":false,"created_on_opayq":true,"tag":"webapp","activated_cards_at":null,"maskme_user_data_id":16365538,"num_billing_info_updates":0,"generated_password":false,"medals_earned":null,"key":"C/l3Mx6klwm8eGpP13ZqXcd7A7zO+g4P9/0h4QgJkiJiFK+HjCk0m9hXJJARneGB","verify_key":"ab3TKH5bCcIm0+aIJ7zO3V5fG6OdeUd34I4w+q0kte2jQW5l2jdV4fSkBI3Jz8rd","alternate_email1":null,"alternate_email2":null,"mfa_enabled":false,"banned":false,"coinbase_expires_at":null,"masked_card_auth":"none","billing_manager":"stripe","old_account_code":null,"password_type":1,"consent":false,"verified_email":true,"strong_password":"$2a$12$Lp.bsaWMMD2XzWSHt9JfgeDsv0BRIk8VrlLB2oyJtlfcgWAeFE9nO","password_hint":"webapp","private_key":null,"password_changed_at":"Sat, 16 Dec 2023 10:40:56 +0000","force_password_change":0,"num_password_changed":0,"ignore_force_password":false,"enable_biometrics":false,"obsecure_id":null,"password_age":0,"show_password_change_header":false,"user_features":[{"feature_name":"beta","feature_status":"approved","feature_allowed":true},{"feature_name":"ironvest","feature_status":"approved","feature_allowed":true}],"user_kyc":null,"recurly_disabled":true,"registration_date":"Sat, 16 Dec 2023 00:00:00 +0000","first_mobile_use_date":null,"total_emails_created":0,"first_email_created_date":null,"first_use_of_extension_date":null,"affiliate":null,"first_webapp_use_date":"Sat, 16 Dec 2023 00:00:00 +0000","first_phone_use_date":null,"first_tablet_use_date":null,"understood_backup_passphrase_date":null,"ach_allowed_date":null,"ach_registered":false,"licenses":[{"feature_code":"email","expires_at":"2500-01-01 23:59:59 UTC"},{"feature_code":"accounts","expires_at":"2500-01-01 23:59:59 UTC"},{"feature_code":"payments","expires_at":"2024-01-15 10:40:56 UTC"},{"feature_code":"sync","expires_at":"2024-01-15 10:40:56 UTC"}],"plan_codes":["mask_me_free","dntme_accounts","dnt_30_day_trial"],"splits":[{"id":52041443,"maskme_user_data_id":16365538,"test_name":"checkout01","bucket_id":"18","bucket_name":"monthly"},{"id":52041444,"maskme_user_data_id":16365538,"test_name":"postinstall04","bucket_id":"21","bucket_name":"register"},{"id":52041446,"maskme_user_data_id":16365538,"test_name":"tour02","bucket_id":"29","bucket_name":"old_duffy_tour"},{"id":52041447,"maskme_user_data_id":16365538,"test_name":"tracker01","bucket_id":"36","bucket_name":"tracker_block"},{"id":52041445,"maskme_user_data_id":16365538,"test_name":"upgrade01","bucket_id":"24","bucket_name":"registered"},{"id":52041442,"maskme_user_data_id":16365538,"test_name":"wallet01","bucket_id":"13","bucket_name":"wallet"}],"mfa_qr_uri":"https://chart.googleapis.com/chart?cht=qr&chl=otpauth%3A%2F%2Ftotp%2FIronvest%3Aexample%40example.com%3Fsecret%3Datu2c3eidr5c6tuahkysashkqojo6f32%26issuer%3DIronvest&chs=200x200","biometric_type":"","sync_store_manager":"blur","hide_passphrase":null,"times_imported":0,"coupon_code":"24h4325838N28NE"}},"status":"ok"}
```

When we add a new item, we send

```
POST /v1/data/BlurData/records HTTP/2
Host: api.ironvest.com
Content-Length: 487
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"
Content-Type: application/json
Sec-Ch-Ua-Mobile: ?0
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiNTExZDNmYmIxNmNmZDAyMmFlYWQwYjcxYmQ1ZmIxN2Q6MDAzNGVmMzIwZDJjMjUyYTYyNTkwNTc1YWM1NDM2MDkxZDU3NGY0MGYxM2MwMzMzNTE3ZTI5YzI2NTFjNDdhMTBlNWRjOTIzNzkzZTAwZDgwMjIwNmVmZTJiZWVkNzhlIiwic3luY1Nlc3Npb24iOiIxNjRjNmJhMTBhMWIwMTkyNWFhNGY0MTUzNjE5ZjdkNDo2MjdiOTUzMWU2MmQwMmZmODRiOGUxZDg2YTU1NTAxNTBhYzcyM2M2ZTYxZjE5M2E4MWJlZDM5ZThlMWMwMjg3Mjk0MmNjOGEyMzE0M2M5MGQ3YTBlYmZiNmIwYTNlZjcwNDgwY2E0MWUxMDNmNWQ0YmMzMzRlYjMzYjNhMTk5MGE1MzFjYzI1YWE3OGU1MTZmZDVjMGE1ZjU3ODkwZGM3MTIyOTc5OWI0NTdjNTg1MjZlN2RjZTA3MmJhY2IyYzU0NmY2MDBmYTkxZWQ4YjM0OTFlNzYxZjYwZTlmMGZkZWZmY2ZhYmY3NGM4MTM3OTQwMWNkZmEwYTAzMTliZGIwMTczZGNhODk0MzhjMzE0ZTAzMjkwZWZmMGM5NzUwYmRkOTY5Zjk2YTVkZWRkZDJhODg1YTU5OTFkNTg2YzUyMGMwOTczMzdjMGY0NDIyZDM4ZDBmYjJmMGYwNzViZWFlMWY4ZmFkMWVlYmVkOGVmODI1MzQyMzNkYjNlMWY4MTI4ZjhlMDViMjdhYTM0Nzc5NmEyZGU4YmZmZDAzN2ZhOTM1MjM4MTM2NDI1ZTZmZDlhZWJjYTAxMTJjMTIyOWRhZmQ4ZTE4MWNhYzkzYjVlMWFiYTNlZTJjMjhlZTU4Yzc0OTNhNzg1ZGIxYWQ5YmRiMGU5OGM3MjdjYjFlZmEwM2U0MTE5N2ZlMGQyYjlmOGI0Zjg0NWEzN2Q5NWJmYTU1YjE1MWFhM2E5OTRiZTU4ZGU2MTg1ODY1NzM4NjI2NWZlYjkxMjIzZGRiNjQ2NTdhOWJjYmE1ZmIyMmFlYTg0YmJlZmU1MGI0NzY5MmMwZDc0YjlhMGMyOGRlZDk5NWMwNjgyOGE4ZTJlNGE1NWRjYjNjOWJlZjQwYmExNTJjOGU5MmM4MWY1Njg3NTFiYzliYTk3N2IyMDZjN2FmZGJkODY5ZGE0MjdhZjg1ZWVjN2ExZmIxZGEwZDkyZmU5NzYwYzk1MzcwOTQwMDk4Mjg4OWZiMTAxYWZhNzkwZmI1ZDE0ODQ3ZDkyYzU1NGY3ZmE0ZWYzMzMyZTE0OThiOGIyZmFhMTRmNzg0NWRiZmMxNzkzOTFjODhjNDA5YWY3ZmE2ZWM3ZThkYTY3ZTJhNjM3Y2JhYmE1YzQ5MTFiYjMwMDAyYzYyODQwMWY4M2E2MDUxZWJjN2ExMzk5NzM1MTUzZmVjMDBkM2VlYjAzYTBmMWUyZmQxOWI2ZjE0NTY1NWFiYWUyYTBmYTM1MzVlOTRhNzU2ZTUwZTFlYmViOTgxNTEzZDZlODA3ZWI2MmMwNmYyOTdkMzdlMWRkOGRlNzkzMGE1NGE0YjQ1Y2U4OGI1YzE4Y2YwNzE5YjdkZDVhNzg1Y2FhZTM2MWVmMzVlMjYzOWMwYjIyNGNjYmQyODJiNDNiYzRlYzk2Y2NiZWRkNmI1YmM1NmEyYWQ5OWIxZGY0NmYzYTExNzEwYmFmMTEyNjY4M2MyNmYxYzU5OWZmODNhOWYwY2VmM2I3Nzg2NGY5MzRkZDJiNjdiMzVlNDExZTkyZTQ2N2FiMzNkNDVmNTc4YmEwOTM4M2RjNWFhYjVlNmQ5Y2MzMmNhOTU2MzQ5NWRkYWJhYmYyNGUwOTdlMTFjODFiNjMxMjg5ODU0YzA0NmFiNTljMjY1NTQ0NjU3NzM4NDdkYjc0OTUzMGY1NDJhNWEyNTcyNzkwNjU3YTdjMGFmYzhjYzE5YmY2N2QyNDFjZDRhOGNmMGYzMGRiYzE5ZTJjOTY5NDhlZmY4MWRkMGI4YmFiNDBjNDU1MTdhODdkNjAyZTkyZmFmODNjYWRkMzgzNTFmZmQyZWJiZGM0YTYyMzFkMTBiYjJlNTFlNjFiMmFmNzU3MDQyNWU5NjQ5YTNkYWVjODNlMTEyMWRkMjdmMWE3ZmMwOTdjMDdjMmFmODI0MWY4YmY3NzEyOWI3OTc5NDVlMDljYmUyNmUzMGJiOTcwMTc2YWQ2ZDdmZGM0NDViMjFiNzRmYTdkNzRmMzcyY2M2Y2ViMzJhNTJjYWRmZjRjN2NkOWMzMmM1MmJkN2IwNTNjNzZiYjE2ODIxYjMzYjAyMmEzYmZiNzBmZDlmYmNkYmViN2Y5NjBmZWQ5OWUxNjcyNDUyMGY0MGFmNjc1MzQ2MjBkY2ZiZDU0NGZmODhlNjI5YzcwMzRlYmM3NDYyYmUzOGUzMzE5NjMwZTNhZGIwOGQwZWZkYWUyYTBmN2I0ZTI3YTgxOTRiMGE2NDE0YmRjYmE4Y2MyZDg1Y2ZkM2FmNTNiMmRjZTQwMGQzMGYyMzFjNjhhZjcwZTgzZTNhNjI4YTVjNDk0MWJiYWIzOTQ3YTQxMDQyYTJkMWY4ZWU2ZjkyYTE0MzVkNTE1NjBlODdmOTg4MDAxMDY0NDE0MDM0OGRkODRiZWQ3N2RmZWU1ZTQyOGIyMzAwOTllOTQxZmQyMmIwNzc0MTQ5YjdjNGNlODVlOWRjYTZkZGNmNGU2NzNmOTIxMzE5MWVjZDQwMzUxZGIxN2RmNjU1NzM2NDY2Mjc1NGNmM2JlOGI0MzA1MWYxNDE5ZTE1YWQ1OTA1MmY0YjQwNGVkYTNhNzdmMTBlYzMzY2FkZmRkOTQ2MjE2ZjBiNThmNjgxM2Q1YzZiMTEwOWIyM2MyODk5YmQ1ZDUyZmQ5ZmVlZDVlNjVlMWJkMWM2YmE1NjhjNzkyNTMyY2E2MTQ1MDdmNjVhZTU4YzkzZGU2ODQ5NWY2ZmM4ZTEzZGM5NTVkMGNmZGE5MjU3YzM5ZjU1NGNkOTBhNTgyMGYyODk1MTZjODBjYTFhMTYyOTc5ZWZiOWM5Y2EiLCJleHBpcmF0aW9uIjoxNzA1MzIyODc0MjcyLCJjcmVhdGVkIjoxNzAyNzMwODc0MjcyLCJlbWFpbCI6ImRhbmllbDc3NTZAZm94bWFpbC5jb20iLCJzaWduYXR1cmUiOiJjb21wbGV0ZSIsInNjb3BlcyI6W10sImJpb21ldHJpY0lkIjpudWxsLCJpYXQiOjE3MDI3MzA4NzR9.x1KLj_xvtKd3gDQQS-T8ipAQxM1bA54RVavHDh18LVw
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://ironvest.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://ironvest.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

[{"label":"ENC_bxAbL3msEovdey0mCYZZXg==","email":"ENC_s/YRoC8B/E8vAr8frg7y9DpKoila83miB2SnsUvA/vk=","password":"ENC_PDMjg08fMHOc9LbpxhzUOQ==","username":"ENC_raGeltZknt7XjYWHTsLciA==","isBiometricProtectionEnable":true,"isBiometricProtectionNotificationViewed":false,"domain":"ENC_V5Gd9UyGS6j4WHZJgJYX7g==","id":"4D6F89A9D8054D458A634D9CCA356C0D","type":"Account","financialCategory":"","isFinancial":false,"createdAt":"2023-12-16T12:48:58.495Z","modifiedAt":"2023-12-16T12:48:58.495Z"}]
```

When we change our master password, we send

```
PUT /v1/user/password?without_token=false&client_application%5Bversion%5D=web-8.2.1223&client_application%5Btag%5D=webapp&client_application%5Bproduct%5D=Webapp&client_application%5BdeviceId%5D=665F2A9DD8B9402F82CADA68068C9EBE&client_application%5Bbrowser%5D=Chrome&client_application%5Buser_agent%5D=Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36 HTTP/2
Host: api.ironvest.com
Content-Length: 668
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"
Content-Type: application/json
Sec-Ch-Ua-Mobile: ?0
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiYjdlMGM1NWU2ZjA4MjU3Mzg2YzZkZDVkYjc3ODFjNmM6MmUyNTZlOTE4NTMxM2NjZjc3YTM1YjQwYjZmNzdhMDlkNmY5ZWNlZGQ5ODZkNmJlMDYzYTBkMTQ0Njk0MDU2YmQzY2IwNmQzNWE5NWE4MWZjOGVkODRmMTZmMzE4ZTNhIiwiZXhwaXJhdGlvbiI6MTcwNTMyODk4NzAyNiwiY3JlYXRlZCI6MTcwMjczNjk4NzAyNiwiZW1haWwiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2lnbmF0dXJlIjoiY29tcGxldGUiLCJzY29wZXMiOltdLCJiaW9tZXRyaWNJZCI6bnVsbCwiaWF0IjoxNzAyNzM2OTg3fQ.bYFv4NHuiJWTlhqY-71S97TOvhN0O4yGJC2GZChEwXs
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://ironvest.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://ironvest.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"strongHash":"$argon2id$v=19$m=19456,t=3,p=1$SVJPTlZFU1QuQ09NK1pTOUshWTdiTG5Oa1NqWQ$rnsz5yy1XH81kRIOkKizJynTdwA4OAt3uK73oMTmsqEojPomvoMbPT1cVz8h9vDu15s8qBzL6hyHGKU+nfI/Ng","currentStrongHash":"$argon2id$v=19$m=19456,t=3,p=1$SVJPTlZFU1QuQ09NKyE3NzU2MDU2NTdEYW5laWw$T8F0dSN1qq8aectGcJhXGCmFbvte33UuNHWnw0CEPcV91zLSRpaeKbd8a4ldCbyDkzyucyfMYHXOP6TpKiubAA","currentPassword":"0d263759923eb2bafade5fb10ce55f620e288af756ce3371c1005b449215b0ef","password":"53c276bee0e74b6b8ed96fc476d8541ce44102f914f84191eaa86fe25a279ac7","key":"ZAGUNRCIIZ91cBYjiE56KCbVztcgRyYrHzbcRTz0aNEyTwQtevVxB+MTwccSSGCU","verifyKey":"ab3TKH5bCcIm0+aIJ7zO3V5fG6OdeUd34I4w+q0kte2jQW5l2jdV4fSkBI3Jz8rd"}
```

and receive

```
HTTP/2 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 2456
Date: Sat, 16 Dec 2023 14:31:27 GMT
X-Amzn-Requestid: 76580e30-a9f1-4a1f-8641-8d93067c48b4
X-Xss-Protection: 1; mode=block
Access-Control-Allow-Origin: https://ironvest.com
Strict-Transport-Security: max-age=31536000
X-Frame-Options: SAMEORIGIN
X-Amzn-Remapped-Content-Length: 2456
X-Amz-Apigw-Id: QCkttE57oAMEHwQ=
X-Content-Type-Options: nosniff
Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE
Etag: W/"998-Q+J73zr/KfN3yuCYyxCn7ftsQzk"
Iv-Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiN2MyMWZmN2ZiMzZjZjg5Y2JlZjQ4ZjBiZTlmNzUxMDU6NmZlYjcyYmE0Mjc1ZDY0Y2Y4NWMyMmY2OTQ1NjljMDA5NzQyNmZlODU5ZmUxYmRhMzIwYTVmZWI2MGM5ODdiNzI2YzgzYmYwZWNmOTRkNzk2YTRkOTM2MTgxZTQxMGU2IiwiZXhwaXJhdGlvbiI6MTcwNTMyOTA4NzYzNCwiY3JlYXRlZCI6MTcwMjczNzA4NzYzNCwiZW1haWwiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2lnbmF0dXJlIjoiY29tcGxldGUiLCJzY29wZXMiOltdLCJiaW9tZXRyaWNJZCI6bnVsbCwiaWF0IjoxNzAyNzM3MDg3fQ.AJ8Vfk7wEAENc0MqxEdUdYwdsNYJP-p5N0mlRXrPgaQ
X-Amzn-Trace-Id: Root=1-657db4bd-61142bd116a9ce023f6773b5;Sampled=0;lineage=0f70c90e:0
X-Cache: Miss from cloudfront
Via: 1.1 5d1c233d23da076bfd9a6b358cc900c6.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: KUL50-P2
X-Amz-Cf-Id: IpUliTMuP0IMyYBfcwPYp8-Tbc6TkicFbRgPuFSY22kq3Lf4LmCcaQ==

{"data":{"user":{"role":"user","state":"active","banned":false,"email":"example@example.com","alternate_email1":null,"alternate_email2":null,"key":"ZAGUNRCIIZ91cBYjiE56KCbVztcgRyYrHzbcRTz0aNEyTwQtevVxB+MTwccSSGCU","generated_password":false,"password_type":1,"id":4325838,"first_name":"","last_name":"","company_name":null,"recurly_account_code":null,"created_at":"Sat, 16 Dec 2023 10:40:56 +0000","updated_at":"Sat, 16 Dec 2023 14:31:27 +0000","marked_delete":false,"created_on_opayq":true,"tag":"webapp","activated_cards_at":null,"maskme_user_data_id":16365538,"num_billing_info_updates":0,"medals_earned":null,"verify_key":"ab3TKH5bCcIm0+aIJ7zO3V5fG6OdeUd34I4w+q0kte2jQW5l2jdV4fSkBI3Jz8rd","mfa_enabled":false,"coinbase_expires_at":null,"masked_card_auth":"none","billing_manager":"stripe","old_account_code":null,"consent":false,"verified_email":true,"strong_password":"$2a$12$RGIqzAPvYIS8XGNJxUhlPO/AIzArS3POyShfzMU0SZaaehuG3AOKS","password_hint":"webapp","private_key":null,"password_changed_at":"Sat, 16 Dec 2023 14:31:27 +0000","force_password_change":0,"num_password_changed":1,"ignore_force_password":false,"enable_biometrics":false,"obsecure_id":null,"password_age":0,"show_password_change_header":false,"user_features":[{"feature_name":"beta","feature_status":"approved","feature_allowed":true},{"feature_name":"ironvest","feature_status":"approved","feature_allowed":true}],"user_kyc":null,"recurly_disabled":true,"registration_date":"Sat, 16 Dec 2023 00:00:00 +0000","first_mobile_use_date":null,"total_emails_created":0,"first_email_created_date":null,"first_use_of_extension_date":"Sat, 16 Dec 2023 00:00:00 +0000","affiliate":null,"first_webapp_use_date":"Sat, 16 Dec 2023 00:00:00 +0000","first_phone_use_date":null,"first_tablet_use_date":null,"understood_backup_passphrase_date":null,"ach_allowed_date":null},"auth_token":"sCL3Ksr9xxixhNPKeFy9AnsMpgkLcQrr"},"status":"success","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiN2MyMWZmN2ZiMzZjZjg5Y2JlZjQ4ZjBiZTlmNzUxMDU6NmZlYjcyYmE0Mjc1ZDY0Y2Y4NWMyMmY2OTQ1NjljMDA5NzQyNmZlODU5ZmUxYmRhMzIwYTVmZWI2MGM5ODdiNzI2YzgzYmYwZWNmOTRkNzk2YTRkOTM2MTgxZTQxMGU2IiwiZXhwaXJhdGlvbiI6MTcwNTMyOTA4NzYzNCwiY3JlYXRlZCI6MTcwMjczNzA4NzYzNCwiZW1haWwiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2lnbmF0dXJlIjoiY29tcGxldGUiLCJzY29wZXMiOltdLCJiaW9tZXRyaWNJZCI6bnVsbCwiaWF0IjoxNzAyNzM3MDg3fQ.AJ8Vfk7wEAENc0MqxEdUdYwdsNYJP-p5N0mlRXrPgaQ","authToken":"sCL3Ksr9xxixhNPKeFy9AnsMpgkLcQrr","message":"successful"}
```

Finding:

1. The KDF is argon2id.
1. It is not anonymous.
