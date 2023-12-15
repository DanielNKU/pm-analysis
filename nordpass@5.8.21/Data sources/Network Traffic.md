## Capturing Network Traffic

When logging in, I receive

```
HTTP/2 200 OK
Date: Tue, 31 Oct 2023 12:48:36 GMT
Content-Type: application/json
Vary: Accept-Encoding
Vary: Origin
Access-Control-Allow-Origin: https://app.nordpass.com
X-Request-Id: 6540F7A4-035DCE1945E-36E-AC10186701BB
Cf-Cache-Status: DYNAMIC
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Server: cloudflare
Cf-Ray: 81ec03663e51156e-SJC

[{"identity_id":"54a3d64a-9d1f-4dcc-9d3d-dd3a0c88b3d5","user_id":15849290,"has_pending_shares":false,"keys":[{"identity_key_id":"2afe291b-9858-4ff7-8bd6-14c533956ce7","public_key":"wM+AdKxKadbF242GcgADIJkHmdLbe8Z\/PqtAv8JUddc=","encrypted_private_key":"\/IkE4XgwTqXzAI4QSH3wL4rsFLKddG7U3UJmaHnCimgxkuiX+q6sBhmFYb1clkXe7HM\/\/yJ59wutIdRcYSNmHfgy9tcA2y4qZcNYgOQF1GKPWCbdjz2yqK6WiKQyoto7Wr2bzJuH0NeEw4Dli5OxGd84+qfSQ76Z7fvVAnWbCP8=","encrypted_recovery_key":"JBNnumW8FlUO4Eojc8\/yXg0FPmn2YizFm7DjtmEieDURblWcMITgIauXlXjmqS+RJ7n3vaVYfmSJ8lJWZjMrpS3Ocv\/h0m720toCQgAhUGKaU9p6gy+Kx6ZI8DZHtJ2BeTF57XwjJNHBpLp6obHnl3ROOt0Xl4EdvXXQpen0LpA=","private_signature":"N7jkAkhPsWNiksK9LtYs+zUtNmZ+nGfR0WSkey\/e2RjKq1V9EFVny9888akwpDxJTfJ17az5wFJggQNrCxHPCw==","recovery_signature":"r9Sls3kvUKBEkjUYwBYWvcrEiZ0DywNrkiUy\/Ct0tXw8VXw5XiIyvk4XjHmyoPCuH0HPtos+5Qox8zA2RizjCA==","recovery_set_at":"2023-10-31 07:01:03","recovery_updated_count":0,"salt":"JNrF\/LSWJYwEBQJebSUbFw==","dek_info":"XSalsa20-Poly1305-X25519","version":"1.0.0"}]}]
```

```
HTTP/2 200 OK
Date: Tue, 31 Oct 2023 12:48:38 GMT
Content-Type: application/json
Vary: Accept-Encoding
Vary: Origin
Access-Control-Allow-Origin: https://app.nordpass.com
X-Request-Id: 6540F7A6-035DCE19568-77-AC10186701BB
Cf-Cache-Status: DYNAMIC
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Server: cloudflare
Cf-Ray: 81ec036d9c70156e-SJC

{"uuid":"6e3aba68-ceff-489e-93c7-43e877b16947","services":[],"reviewed_platforms":[],"is_first_login":{"global":true},"twofas":[],"email":"example@example.com","plan":null,"twofa":null,"trial":null,"can_trial":true,"created_at":"2023-10-31 07:00:16","organization":null,"organization_user":null,"organization_invites":[],"organization_key":null,"organization_settings":[],"first_session_remaining_time":65548,"onboarding_progress":["onboarding_started","password_added","onboarding_user","try_another_device"],"provider":"nord_account","avatar":null,"last_token_renewed_at":"2023-10-31 08:58:16"}
```

```
HTTP/2 200 OK
Date: Tue, 31 Oct 2023 12:48:39 GMT
Content-Type: application/json
Vary: Accept-Encoding
Vary: Origin
Access-Control-Allow-Origin: https://app.nordpass.com
X-Request-Id: 6540F7A6-035DCE195FF-3D2-AC10186701BB
Cf-Cache-Status: DYNAMIC
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Server: cloudflare
Cf-Ray: 81ec037358e2156e-SJC

{"page":1,"pages":1,"items":[{"item_id":"2d9bfb83-8930-4596-b2d7-2d33c1075c7a","value":"fSO8bz9ivyiLrpw5FbLgbj5ct\/RVweRiYwRIYjtZ67mtCPZmDDVaCESISDUShp7AnDBeeL6kp\/BRO+w8zTsHQnWsi0ZHFJLOl23t\/kj9+jc\/0yz0KChfLf01JdySIxZYsdfPJRRDnXfCG0OmnL+6oCfT\/+RZUUSoPjdS2VD7uxzQhXYDrj7kPa37j23xycXaaC\/HgN76QubRxDE0Gmv8zvcax0d9BGtgX7ktUkeWOg==","encrypted_value_key":"7OdJFDt7z72vLgo8HkT1s4VXkMUGRUwT29PurusDNx0\/30F\/S4n9625fyqnyOBrT+nmfpzEyu+hb78eMTqOA2X\/JoqNtzgQRplyTe9PfVxpGk7YeLg6ItFUjbyU=","type":"option","public_key":"d\/ECN3T6qiP0AmxvERIwGK0a2AyRz\/lsmPicttjCENs=","value_signature":"jnVMKGyCCZlvpHDt2L+E1kK2QUfyleUOsax1n9UxkG3nMfR6wwdecDdzNsZFUJ7ccydrkiLDSb+QutyCpCuVDg==","editor_signature":"ZJ4ddZRz85mkaGqJNAGeV4BAhdtGhGFeejcByAAV\/3pvNBjoytzsJ\/htm\/7QbJCjzvwHykIZt7jh1kS6FSawDg==","editor_identity_key_id":"2afe291b-9858-4ff7-8bd6-14c533956ce7","dek_info":"XChaCha20-Poly1305-IETF","version":"1.0.0","value_version":"2023-10-31 07:01:04","created_at":"2023-10-31 07:01:04","updated_at":"2023-10-31 07:01:04","deleted_at":null,"last_used_at":"2023-10-31 07:01:04","item_key":{"identity_key_id":"2afe291b-9858-4ff7-8bd6-14c533956ce7","sharer_identity_key_id":"2afe291b-9858-4ff7-8bd6-14c533956ce7","user_id":15849290,"sharer_user_id":15849290,"encrypted_item_private_key":"Ilw\/GDJQu9AhcO5Z9QWAVtuat5YtktpCJAfWnEZCtAt8BMO12GbGyLuMvTXf6xEyQ0nrZ1l4AL\/Xpv5hH8P3MmV3c9bwROpLTI45rjKU7dXLOwgcQnuZxVzp6grXgeEE83j7MINXshyitmZIwNLVeACVP9+8BM0UcyCzZWse9ivGs5LoYX9\/Sg==","status":"accepted","item_signature":"UxoDaNKatyI8pmS6g5R0f\/KJHbD01ZSecbT+kCI1Ra4XxVYgNTVT9uv33lhFDKw+uvA3ARA8UWU1B0hmjNsaAQ==","sharer_signature":"FEJmgpD7q3Vtw959N4sGd04z2G\/RVPy3ToPznlSC1dr7sZ5XOVyaWBpR8L66VVQrDUY0M9UnCX1907JZ7zw+DQ==","public_key":"wM+AdKxKadbF242GcgADIJkHmdLbe8Z\/PqtAv8JUddc=","dek_info":"XChaCha20-Poly1305-IETF","version":"1.0.0","updated_at":"2023-10-31 07:01:04","deleted_at":null,"item_acls":["owner"],"email":"example@example.com","organization_user_status":null,"avatar":null,"user_uuid":"6e3aba68-ceff-489e-93c7-43e877b16947","sharer_email":"example@example.com","sharer_organization_user_status":null},"keys":[],"has_mfa_value":false,"pending_shares":[],"secret_version":null}]}
```

```
HTTP/2 200 OK
Date: Tue, 31 Oct 2023 12:48:39 GMT
Content-Type: application/json
Vary: Accept-Encoding
Vary: Origin
Access-Control-Allow-Origin: https://app.nordpass.com
X-Request-Id: 6540F7A7-035DCE1968D-26A-AC10186701BB
Cf-Cache-Status: DYNAMIC
Report-To: {"endpoints":[{"url":"https:\/\/csp-reporting.cloudflare.com\/cdn-cgi\/script_monitor\/report?m=1Y.Sk97JOHeKZakCa2pE__8CjqnTAEVek2k4QcIofJ4-1698756519-0-AW7sIAIuM2hURCCDG4pl70O4gp4jjGEZd_Eo7EKi3ZnbGVuFccL4xxP3FK-ttcGJpFDaeziTR2gUdDSARWDlzmIOFFIocDOAEE_hsY5R3qIVgkco9lPHosvzppQoiRUrwpMqkV-mx6yci0-7q5FQC2v2eboJbDrzgk58MbsSgDkc"}],"group":"cf-csp-endpoint","max_age":86400}
Content-Security-Policy-Report-Only: script-src 'none'; connect-src 'none'; report-uri https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report?m=1Y.Sk97JOHeKZakCa2pE__8CjqnTAEVek2k4QcIofJ4-1698756519-0-AW7sIAIuM2hURCCDG4pl70O4gp4jjGEZd_Eo7EKi3ZnbGVuFccL4xxP3FK-ttcGJpFDaeziTR2gUdDSARWDlzmIOFFIocDOAEE_hsY5R3qIVgkco9lPHosvzppQoiRUrwpMqkV-mx6yci0-7q5FQC2v2eboJbDrzgk58MbsSgDkc; report-to cf-csp-endpoint
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Server: cloudflare
Cf-Ray: 81ec03775c24156e-SJC

{"page":1,"pages":1,"items":[{"item_id":"4adfbfd0-77ce-11ee-940b-8186c8983d58","value":"a4617CM3qWEGVfktb\/em7SffaNq19K0+dEeheho7OZs8VTmfLAhjRli8yPNmKcwcTgER6z5r2WgZLWCTRqscXmK+pAAD2qgBKsclezD4Ehl7k02F5RgBy2HMvqi2MyAUtjbKG7nqZgTGNm36b\/O81XxIoJPiDgC\/KotHwIjTsVZwb6LB0w966bHYqgZ1k+S\/YU71s4ZPkl0GtBUIGTNq+cQpZ\/lVBrSfr2JMXV76y1bwoJcx+9TxbjY6zq2fa0I3f5Pb7ibaSKrSxc1f4Lr0rTHYHQmGLolUg9GZeXjCtNxskstIYi0dqJFS0Ae15qE0Cza67hzqk43eyGvJzA4RUjp2fj2xlUJ0YjqmFJqxwSPrzifHXugzm5v3j\/VzsZhUjsavAZOu5D\/Um\/GV5tM7JekQONgfX8F2S3crNzODC0MO8A0bGszAm4aKCHBfl7cS","encrypted_value_key":"tHYEOTlx8HR\/d5HhmBzhp2QgtyV58bBrCPM0ZRjNNV36UUkX3X7TeWBcQF2fkvTsjAnndb4VLucq7qM6SaRI49vMYWiwz2ySrfDcdGD5K4RxbcFc6fkVDT18qc0=","type":"item","public_key":"\/U5nBNfQMErdjW5Hw0YevSd1fyHJip0CJH6j+W2vEx4=","value_signature":"1qA3eSHTVox45sXdaMjXJOpOIsVOd\/nfX3+fPdsWPCBe6vbCFOW8yrF140eoSyHU2dPNRkDkoNkN5cLez6gQAQ==","editor_signature":"HmSAdEhZ\/ylGAZtZFpVQPiM\/B2FO7Fbc7LgS84Wd1VOIbsf4IpvzssWRJCs3Od6hYBz4SA3HlYugMUkS9xKyAQ==","editor_identity_key_id":"2afe291b-9858-4ff7-8bd6-14c533956ce7","dek_info":"XChaCha20-Poly1305-IETF","version":"1.0.0","value_version":"2023-10-31 09:17:20","created_at":"2023-10-31 09:17:21","updated_at":"2023-10-31 09:17:21","deleted_at":null,"last_used_at":"2023-10-31 09:17:21","item_key":{"identity_key_id":"2afe291b-9858-4ff7-8bd6-14c533956ce7","sharer_identity_key_id":"2afe291b-9858-4ff7-8bd6-14c533956ce7","user_id":15849290,"sharer_user_id":15849290,"encrypted_item_private_key":"pNtan+TGpuRgeIwaBwcAcO32A\/ndpP9nnh3N+gnWAHIpyNjpj0Gi9HPcB\/Ck5tR8r3i6qgiIvohc7U2Raojg5vVkIKRIfNtezC3LYpjT8Ea\/061k4dNn79aKSRXd8zbw0nSqKkrtKRmZug\/XRdG7rq6rCr9PFSjOByNRD\/eukLvEbkHWdWxA+A==","status":"accepted","item_signature":"Qp1qJgdMaxYE4zZFXqlJySZDns85UsJh0GAUKXBg\/uwsMGatam\/ML4HqYqTMy5E94I7ELCBG90QEn1sqbg9FBg==","sharer_signature":"4vAFaJ9Pc\/drnNdK\/zB10IUy7LVY5AJASZHlXd+1CMPzTBipKmK+tOENGIXwpaeKH2qtWmHq6oOSdg9ccNvgBA==","public_key":"wM+AdKxKadbF242GcgADIJkHmdLbe8Z\/PqtAv8JUddc=","dek_info":"XChaCha20-Poly1305-IETF","version":"1.0.0","updated_at":"2023-10-31 09:17:21","deleted_at":null,"item_acls":["owner"],"encrypted_secret_private_key":null,"secret_signature":null,"item_secret_signature":null,"secret_sharer_signature":null,"sharer_mfa_signature":null,"encrypted_mfa_private_key":null,"mfa_signature":null,"email":"example@example.com","organization_user_status":null,"avatar":null,"user_uuid":"6e3aba68-ceff-489e-93c7-43e877b16947","sharer_email":"example@example.com","sharer_organization_user_status":null},"keys":[],"has_mfa_value":false,"pending_shares":[],"secret_version":"2023-10-31 09:17:20","secret":null,"encrypted_secret_key":null,"secret_public_key":null,"secret_signature":null,"secret_editor_signature":null,"value_secret_signature":null,"editor_mfa_signature":null,"encrypted_mfa_key":null,"mfa_public_key":null,"mfa_value":null,"mfa_signature":null,"secret_mfa_signature":null,"mfa_version":null,"organization_encrypted_mfa_private_key":null,"organization_mfa_signature":null,"files":[]}]}
```

```
send:

POST /v1/notification/tokens HTTP/2
Host: api.nordpass.com
Content-Length: 117
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Content-Type: application/json
Nordpass-User-Agent: NordPass webvault (4.304.0) webvault
Sec-Ch-Ua-Mobile: ?0
Authorization: Bearer e15414552a1f09be29976b677a9308acf41d49ea8007b6cf4b130626edac31c1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://app.nordpass.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

{"app_user_uid":"a28821f6bdfa5d9520624ab1810c07fe63615e7c5975d6847f152b1976b34e21","platform_id":500,"protocol":"ws"}


receive:

HTTP/2 200 OK
Date: Tue, 31 Oct 2023 12:48:40 GMT
Content-Type: application/json
Vary: Accept-Encoding
Vary: Origin
Access-Control-Allow-Origin: https://app.nordpass.com
Cf-Cache-Status: DYNAMIC
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Server: cloudflare
Cf-Ray: 81ec037c3ffc156e-SJC

{"endpoint":"wss:\/\/nc-unit1-mqtt.nordpass.com:8885\/mqtt","username":"cb903ae27218da933c9a5732d1d5aa9c217927cb1d2665511f72c55153367e748818ae0b53254833a43ed12c0e67962e14ea1ea6ada526b1dbd3af76e7fda54f","password":"e20FyG3B7Asm8UCab45Tq6Kv19rwWktc","client_id":"a28821f6bdfa5d9520624ab1810c07fe63615e7c5975d6847f152b1976b34e21","ws_endpoint":"wss:\/\/nc-unit1-mqtt.nordpass.com:8885\/mqtt"}
```

When adding a new item, I send

```
POST /v2/users/identities/items HTTP/2
Host: api.nordpass.com
Content-Length: 2018
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Content-Type: application/json
Nordpass-User-Agent: NordPass webvault (4.304.0) webvault
Sec-Ch-Ua-Mobile: ?0
Authorization: Bearer e15414552a1f09be29976b677a9308acf41d49ea8007b6cf4b130626edac31c1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://app.nordpass.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

[{"item_id":"8a06cff0-77f1-11ee-ae73-ea5b45a7d9d8","value":"QGloyPdFJyV02TYV/6WA74kKKF4/fFhuvrMa2sy0jJ75GXnMphdoNzHpDf4h9lnIiPp+a7Dejuk8+dUwYfj5bnQ0XY6+lvAJea8LyGDivOodBz7Qjor8xRfgACJKlvw/gKgHwnm9p8nX+GZCyT8Oybyrc/FbwOw30XfRdpJFfwnZLx7NpHhTof/QNuYbrhWHFkuKIHKAkqbnanjmSuddmJivmD/i4aEOd96fwwtYhLzkamocFoC0d1c5LAZ4PQWYmrA+3CMVx1iSdstLRKHA16iERuHauXRDkvmr/05jzqCApzzYw+kQvuMRkP+abhfSq9innZssiM7ju/04ASa0JmNBrNYhYX9QjpPcyqJjCCoJrFr7XqOvwEoQrCVohM//a0PKpAXWc9nwOEm+Os9THPSOeBQGptTc2Sv22se3/uGv7DPz1qMk3FTbZGDUMWTzEh3j3YZ8LLwavV50tUjjpkbY3RaxOcWXv2dC8L8QyfBfjw==","value_version":"2023-10-31 13:29:39.618265","encrypted_value_key":"U+HcPnMjDXk+B7E29Iq+soAdhH0z77z0FRGkKmj1F3J6yjKahD5kuM9Dq0NKwFJl2h7iPeqlGhBxVWuCuu5/gPQM1u1nVVOqe7MnznpQ/amKiVxwJ7N6GIvOZL8=","type":"item","public_key":"ix/Q8g0v5xSJCWeoYLnY74PcCvjbPVE+RVDiBUnZ/Ho=","value_signature":"k21KwhXdGzsxR/+gBznvT9Jt/y3tinKNZGF0Kj338nvawBVa1bAcTnGOzTVlRFqXjx55A6DyNFAkQlMRSIHFDA==","editor_signature":"sxHgSpe4ugNpRg02ahhS+3zv6oZGwP/lRxqVpxYyiuEeeKuWbg1VquAiDQaWjW66/0BeOineoN8NpcsIbV5vBw==","dek_info":"XChaCha20-Poly1305-IETF","version":"1.0.0","secret_version":"2023-10-31 13:29:39","item_key":{"identity_key_id":"2afe291b-9858-4ff7-8bd6-14c533956ce7","encrypted_item_private_key":"kez3QjKAAdRLr3PVb3yQyivJv+gvm+UONTjySmvbrCeP4v84XLSGfIvcTuOnpRnBZ3y/90rm+SRPQ7eU68Uk5bzDP1ZaX+Hc88Ql3WIzShqS9OuHsZ5O4VXl82vnHWUDybgzklgMRLPluOC0srwZfPcBFjKKBC0AaxhTNrNJU7Gy5/XDit/41A==","item_signature":"o59CT73jnK7sdah1B3HzEUPvW4vKY3IcAOmQGmAMSmKHU1fH0xINIW6lriuy48TxKitr49osrmdsCP56ssNKBQ==","sharer_signature":"ohKdOmizejTArImqmP+EDa7aB6vuMNeMmvSrxKu/xU76LdiEDKK4UjyqnQszba24REzN4YdUcQ8J04gqOuiHCA==","dek_info":"XChaCha20-Poly1305-IETF","version":"1.0.0"},"change":"nTlXJWSKBQSONlUL2bb8ygydUfwKBYxeHrgGaVbqf87XaUDK9/57ygvoBQvxiw18uZFmlbqiOFnw5w==","change_signature":"GUhJJCd+Lx5fk3NVCrByhp5gQzWgOiYot5x7qaogMXYvsSCamdnI2e9WnV9qe9JL9sbn6nD38HJAaPN4JjEXAw==","change_editor_signature":"OX/dQfYwn02VqygvQiZEYBtwHdDNsVtSI6yyTEOiI0YkNYIesLyyxpa8NGBXPiUplMdfPge78rejd+IY6xmHDg=="}]
```

Finding:

1. The encrypted keys are sent by the server.
1. It is not anonymous.
1. I will know how many items the user has.