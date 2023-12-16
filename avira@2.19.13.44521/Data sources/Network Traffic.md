## Capturing Network Traffic

When unlocking the vault, I send

```
POST /api/v4/users HTTP/1.1
Host: license.passwords.avira.com
Content-Length: 569
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json
Accept: */*
Origin: https://passwords.avira.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: close

{"application":"dashboard","client_application":{"version":"2.33.15","device":null,"device_id":"7386737608","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"},"auth_token":"c2AHi6s7SFtejp1Lfwu69QscFU7ykArr","oe_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJwYXNzbSIsInVpZCI6NDE1MTI1MTY2OSwiZGlkIjpudWxsLCJhbm9uIjpmYWxzZSwic2NvcGUiOiIqIiwiY2F0IjoxNzAwNTU1MDg4Ljg0NDA2OTUsImFndWlkIjoiLTM1MjgzMTk2NTI1MDU2NTU4MTc2NzI2MjAxNDEwODc2Mjk3MjIifQ.uT7zaTcL3JLMIL7KGKzFhrl1Q36KRhaf9hFFS9K1HFQ"}
```

and receive

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET, CREATE, DELETE, POST, OPTIONS, PUT, INDEX
Access-Control-Allow-Origin: https://passwords.avira.com
Access-Control-Max-Age: 1728000
Cache-Control: no-cache, no-store
Content-Type: application/json; charset=utf-8
Date: Tue, 21 Nov 2023 13:47:15 GMT
Server: nginx/1.14.1 + Phusion Passenger 4.0.60
Status: 200 OK
Strict-Transport-Security: max-age=31536000
Vary: Origin
X-Powered-By: Phusion Passenger 4.0.60
X-Rack-Cache: invalidate, pass
X-Request-Id: 3db1de48ff2d6bdfe759601ff193cc51
X-Runtime: 0.219498
X-UA-Compatible: IE=Edge,chrome=1
Content-Length: 1950
Connection: Close

{"success_code":"successful","data":{"user":{"activated_cards_at":null,"alternate_email1":null,"alternate_email2":null,"avira_user_id":4151251669,"banned":false,"breach_check":false,"company_name":null,"created_at":"Tue, 21 Nov 2023 08:27:07 +0000","distinct_id":"ytj6lo7LdGBKwXnFIZhFyp9jBZm6WgiIhW+X8lkGMdERzHC5fc+ggeddfTvQ/+SK","email":"example@example.com","first_name":null,"generated_password":false,"id":1927847,"key":"t0Hs1oAbqk83i1vj5ibtnDUknajfdV15F8E5ETVuTaxOsNRQXFGse1GeWoYgGCSD","key2":"AwFdmZseguArIZV4zfxkQ7os+KZzq1yUqTlmhw8TxXHvmrIUoKAbhNZw8AShkCjZLmArKj89cAga/IySOQqqt06WpKdMD/ZxOW7c9VQ5uosbU0SYIRXUQMBCpUl9zpiJCxHjs9B3jhjSvGSNHu80JjHNwYQNAADW2J83I60ZM97DRGYw1KC63oVEW94UN1gkWrk=","last_name":null,"marked_delete":false,"masked_card_auth":"none","maskme_user_data_id":3724596,"medals_earned":null,"mfa_enabled":false,"num_billing_info_updates":0,"password_hint":null,"recurly_account_code":null,"role":"user","state":"active","tag":"none","updated_at":"Tue, 21 Nov 2023 13:47:15 +0000","verify_key":"r5Sec17DnD+Zj+QFwRIN0z9xfUwYgiCBLInKM97YErjuTkG8I+CdcwVh9ABzSnVk","ach_allowed_date":null,"affiliate":null,"first_email_created_date":null,"first_mobile_use_date":null,"first_phone_use_date":null,"first_tablet_use_date":null,"first_use_of_extension_date":null,"first_webapp_use_date":null,"registration_date":"Tue, 21 Nov 2023 00:00:00 +0000","total_emails_created":0,"understood_backup_passphrase_date":null,"licenses":[{"id":"early","type":"free","expiration":"9999-12-31T00:00:00Z","features":["backup","sync"]}],"milestones":[],"mfa_qr_uri":"https://chart.googleapis.com/chart?cht=qr&chl=otpauth%3A%2F%2Ftotp%2Fexample%40qq.com%3Fissuer%3DBlur%26secret%3Di7na2uby6wrufm44&chs=200x200","sync_store_manager":"blur","hide_passphrase":null,"times_imported":0,"profile_image":null,"should_migrate":true,"vault_sdk_enabled":true,"migration_status":{"updated_at":"Tue, 21 Nov 2023 08:27:13 +0000","status":"all_migrated"}}},"status":"ok"}
```

and get data

```
GET /api/v3/syncstore?auth_token=c2AHi6s7SFtejp1Lfwu69QscFU7ykArr HTTP/1.1
Host: license.passwords.avira.com
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://passwords.avira.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: close


```

and receive

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET, CREATE, DELETE, POST, OPTIONS, PUT, INDEX
Access-Control-Allow-Origin: https://passwords.avira.com
Access-Control-Max-Age: 1728000
Cache-Control: no-cache, no-store
Content-Type: application/json; charset=utf-8
Date: Tue, 21 Nov 2023 13:47:26 GMT
Server: nginx/1.14.1 + Phusion Passenger 4.0.60
Status: 200 OK
Strict-Transport-Security: max-age=31536000
Vary: Origin
X-Powered-By: Phusion Passenger 4.0.60
X-Rack-Cache: miss
X-Request-Id: 0651dad2ef08903cabeee3aea57726d3
X-Runtime: 0.151045
X-UA-Compatible: IE=Edge,chrome=1
Connection: Close
Content-Length: 1530

{"success_code":"successful","data":{"manager":"blur","region":"eu-central-1","account_id":422919713032,"identity_pool_id":"eu-central-1:eae8c79a-a909-45fd-b53b-807f88daccb8","provider_name":"prod.pwm.avira.com","role_arn":"arn:aws:iam::422919713032:role/Cognito_productionAuth_Role_eu-central-1","user_files_bucket":"avira-pwm-user-files-prod","user_id":"1927847","token":"eyJraWQiOiJldS1jZW50cmFsLTE0IiwidHlwIjoiSldTIiwiYWxnIjoiUlM1MTIifQ.eyJzdWIiOiJldS1jZW50cmFsLTE6ZWNhOGZhZmItY2JhZi00MGNmLWFlNzMtMDBiMTliMWNmMDk2IiwiYXVkIjoiZXUtY2VudHJhbC0xOmVhZThjNzlhLWE5MDktNDVmZC1iNTNiLTgwN2Y4OGRhY2NiOCIsImFtciI6WyJhdXRoZW50aWNhdGVkIiwicHJvZC5wd20uYXZpcmEuY29tIiwicHJvZC5wd20uYXZpcmEuY29tOmV1LWNlbnRyYWwtMTplYWU4Yzc5YS1hOTA5LTQ1ZmQtYjUzYi04MDdmODhkYWNjYjg6MTkyNzg0NyJdLCJpc3MiOiJodHRwczovL2NvZ25pdG8taWRlbnRpdHkuYW1hem9uYXdzLmNvbSIsImh0dHBzOi8vY29nbml0by1pZGVudGl0eS5hbWF6b25hd3MuY29tL2lkZW50aXR5LXBvb2wtYXJuIjoiYXJuOmF3czpjb2duaXRvLWlkZW50aXR5OmV1LWNlbnRyYWwtMTo0MjI5MTk3MTMwMzI6aWRlbnRpdHlwb29sL2V1LWNlbnRyYWwtMTplYWU4Yzc5YS1hOTA5LTQ1ZmQtYjUzYi04MDdmODhkYWNjYjgiLCJleHAiOjE3MDA2NjA4NDYsImlhdCI6MTcwMDU3NDQ0Nn0.Z_NGKwo4bATal82Ody_R5FNzmfR6umhRrXFiAk5caY8xBjZHmv_2aMujQ8M7hE5qf16NDC-kShF-ej_VzcTZJdkIGb6Uj2Bv1Jgd7azD_0tAwEhCUr0aQ9ACisJi9Ds46ezXFDUnY9c7PyRvNUSoVanIs7Br6airdYPMtSMaa5GB92d3XUszvRhP1W0_KrUXqIxyTF7nzfGg5Z_eVJO8INzFcK5HU5aETx-o5_3ATF4iL4FXmCUMRLxWOymApJhB5K39AbRFJHZhYUrXoHI5QVqnL0qAFWco9YB6CgketOvsShbCXElrda2txqj3zVO2o4B3ZCumvF07xwYC-oIAQQ","identity_id":"eu-central-1:eca8fafb-cbaf-40cf-ae73-00b19b1cf096"},"status":"ok"}
```

When we modify a new item, we send

```
POST /identitypools/eu-central-1%3Aeae8c79a-a909-45fd-b53b-807f88daccb8/identities/eu-central-1%3Aeca8fafb-cbaf-40cf-ae73-00b19b1cf096/datasets/BlurData HTTP/2
Host: cognito-sync.eu-central-1.amazonaws.com
Content-Length: 856
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Authorization: AWS4-HMAC-SHA256 Credential=ASIAWE572WEEOKEXLDOX/20231121/eu-central-1/cognito-sync/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-amz-security-token;x-amz-user-agent, Signature=da90504b39ae85ab3fbc5c41b8f69b8b37ffcde28427174dc67995ea5554294f
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json
X-Amz-Content-Sha256: e41cf6077f0a546c6f703d161f25ccc43444af92fd900e00cb04ec58f15c70b0
X-Amz-Security-Token: FwoGZXIvYXdzEM///////////wEaDNnW8K5IyQK9Z6vqiSKQA+cqxwKyAIi0FiAM2Bd9lX8Cz57OOnN+NNOgpR+8ytVL1oiW9VA0+OMiVxSMnjYoovqq1phByfs2H2r9vS1Mbx/KUI89fS3jKlxdnAw0lDeKIb6qY9R+9OdWDN/6kBnm16KCqQwlb58N/miXIADTUrKQBn8ro9JmVOo058Ibr4VoS6gA07zskWjIkosx1IBLmwnBYND5MWzz8PotIOFeJs/icBLVsGIL4kl1D+IoS/frCsmZDUNisMoJCGxy9y/x/DSvG3gWC9/wP5qx2owZuEb0thhp8gh7tTbZSkajHjzEbCRnCKUHf0F/Sr7qJ0bsI6OUwhBkVwG5kvHGanJwML4CGcfFfyL5R+Wdc3Q57BcAXL4EhgXrF0BlB02mIqAh6dKGEWwtSStX3ljAJZyUYcPvzG5o79//xDh4Bks3ZnHj79sM99dhjtFneiyxwK0pshdMLvBtVGbg3C3LBZxCWlrMZ4LXMI06xxIVrNYsdQx4AG6IC0cs84EpDD58eY6FxEeU8prjLOPgBma+1M/jEMMo8OnyqgYykwErN6so5P+DTsH7xEOXdNBcMkKJgQi7YPyIuO7KTKm2kC5O6QUsMWwFXPeKMKtJVdbPdy3lN1Q1c+d3C7HWtylDoclkitmBhcuAZ8NqaRg+qLKcQjVKdzh39AwmSTtS/Y0805KeD1UmHcZLPiPQlnWBi9SWM85v+9XgbSBLZxh9cbaXjmrOAk/C/uyHIUhSjGOLzTo=
X-Amz-User-Agent: aws-sdk-js/2.1024.0 callback
X-Amz-Date: 20231121T135434Z
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://passwords.avira.com
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"SyncSessionToken":"H4sIAAAAAAAAABWPy4qDMAAAP6iXRNqlFjz4fqAJ2mhMbvWxa6Lpg1q0+frV6zAMTP9NNK+RvlHzc6W5wCI+MoMBTkYjEwBkyl9Tkq9IsxlTBvkVHDP9tyCvU5nnA+y1InWTqY+cZ6sCsHdi+dh8e0GkhRlpAdLjujlPHlafLpxAX07j5ghelzMzNhYlQ+OCFatKMjIoRrlIKRKMshl5juQCDpy0OiX2wqR/YjKQXNonJOJ3rIqhC4PtocCMwmnv5mqF7bhzX/zmlnWBl6i53231Td3y1RjhVOAbf0DzpzrUzjtq7PPhpUDamRFccusf6LSLDhMBAAA=","RecordPatches":[{"Key":"AccountHistory:039ABF6C3EF44C23B836146F3E9797FD","Op":"replace","SyncCount":0,"DeviceLastModifiedDate":1700574873.059,"Value":"{\"id\":\"039ABF6C3EF44C23B836146F3E9797FD\",\"aid\":\"201A64E49AC44BD2964913381DFE5AA2\",\"pushed\":1,\"createdAt\":\"2023-11-21T13:54:33.055Z\",\"modifiedAt\":\"2023-11-21T13:54:33.055Z\",\"email\":\"ENC_MUliLRKPH+RkHGURCmng7SKhn4mB53vaoDKOC5D0itU=\",\"username\":\"ENC_ecQKNaVJGEmw8kJ/RYJuqw==\",\"password\":\"ENC_FnJr2B03+r3g8XMQQViSsg==\"}"}]}
```

and receive

```
HTTP/2 200 OK
Date: Tue, 21 Nov 2023 13:54:35 GMT
Content-Type: application/json
Content-Length: 586
X-Amzn-Requestid: cb085eb1-5738-4d3d-b53a-fbe62bdb3976
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date

{"Records":[{"DeviceLastModifiedDate":1.70057487582E9,"Key":"AccountHistory:039ABF6C3EF44C23B836146F3E9797FD","LastModifiedBy":"eu-central-1:eca8fafb-cbaf-40cf-ae73-00b19b1cf096","LastModifiedDate":1.70057487574E9,"SyncCount":9,"Value":"{\"id\":\"039ABF6C3EF44C23B836146F3E9797FD\",\"aid\":\"201A64E49AC44BD2964913381DFE5AA2\",\"pushed\":1,\"createdAt\":\"2023-11-21T13:54:33.055Z\",\"modifiedAt\":\"2023-11-21T13:54:33.055Z\",\"email\":\"ENC_MUliLRKPH+RkHGURCmng7SKhn4mB53vaoDKOC5D0itU=\",\"username\":\"ENC_ecQKNaVJGEmw8kJ/RYJuqw==\",\"password\":\"ENC_FnJr2B03+r3g8XMQQViSsg==\"}"}]}
```

Finding:

1. The email is in plain.
2. The time information is plain.
