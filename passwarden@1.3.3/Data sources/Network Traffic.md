## Capturing Network Traffic

When unlocking the vault, we send

```
GET /api/v1/account/status?showKeys=1 HTTP/2
Host: api.passwarden.com
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Ks-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJBdXRoQVBJIiwiaWF0IjoxNzAwODI4NjgzLCJzdWIiOiJhdXRoIiwiZXhwIjoxNzAxMDAxNDgzLCJjb21wYW55X2lkIjoxLCJ1c2VyX2lkIjo0NDg3MTA2NCwidXNlcm5hbWUiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2VydmljZV9hbGlhcyI6InBhc3N3YXJkZW4iLCJkZXZpY2VfdXVpZCI6IjFmOWVjNDY4LTg5YWEtNDAyYi05YWFkLWM1ZDljNmZjNjM0NSIsImxlZ2FjeV9zZXNzaW9uX3Rva2VuIjoiZTBhZDA0NjEtZDFkMi00YzJlLTlmODUtMjM1MjAzM2M3OWEzIiwiY2FuX2hhdmVfdHJpYWwiOnRydWUsImNvdW50cnlfY29kZSI6IkNBIiwiZGV2aWNlX3BsYXRmb3JtIjoiV2ViIiwibGFzdF9sb2dpbl9kZXZpY2VfbnVtYmVyIjowLCJ0b3RhbF9kZXZpY2VzX2Ftb3VudCI6MCwiYXV0aF9zaWduIjoiZTI3MjZmMTk1MzBjYWVlYjk0OTYzYTFiM2U0YjAyNzEyMTVmYzFmZjYyZTA0ZjY2OWFmMDc4YjE0YjNkYjA1YyIsImRldmljZV9zaWduIjoiYWQ1OWRkNGRjY2IyOGFiOWVlMDhjNTljOWRiZjgyODUyNjdkYmZhYTY0OGY3OGJmNDlkMTZiYzYyNWU4ZjdlMiJ9.YR_Wuqkd9ZGJ3b622HkkkiowS4jEHs-aS4wUeiRiTC9U195Z6CNDoQDlep3xcLMuszuRwehLox5m1pjfWojEFw
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://passwarden.keepsolid.com
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://passwarden.keepsolid.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7


```

and receive

```
HTTP/2 200 OK
Date: Fri, 24 Nov 2023 13:37:34 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://passwarden.keepsolid.com
Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, DELETE, PATCH
Access-Control-Allow-Headers: Content-Type, X-KS-Access-Token
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 82b20c1a3a31050f-HKG
Alt-Svc: h3=":443"; ma=86400

{"data":{"user_id":44871064,"username":"example@example.com","expiration":1700828735,"current_keypair_uuid":"e0b5adaa-ed38-4b9e-916c-8565be62c38f","key_pairs":[{"keypair_uuid":"e0b5adaa-ed38-4b9e-916c-8565be62c38f","keychain_uuid":"6372d9c2-7cfd-4fdf-8837-3cbf491acd6e","keychain_revision_uuid":"4737e8e2-7d40-4da1-9dfa-a411d9680177","enc_keypair":{"public_key":"-----BEGIN PUBLIC KEY-----\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEiF8tytrJ7vGqUfT2wZn6hsA+ETvRllC6\nCscnDHcEeIzhxxtAtYlaO70B\/zcTCqchRrKGnV9JGKz\/kQ867FSoTel4u0w8xhAC\n9b80R9I8r1YYCR93TKd5ywD+trOh\/InO\n-----END PUBLIC KEY-----","private_key":"-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIBNDBvBgkqhkiG9w0BBQ0wYjBBBgkqhkiG9w0BBQwwNAQgUDArU6o9X\/GsgWWV\nzZxJdtgEOjNEOaR0LsOiitKkVAACAkAAMAwGCCqGSIb3DQILBQAwHQYJYIZIAWUD\nBAEqBBChNUdYO1yOiVjxm51nP8TxBIHA1CtERvSBxkBnthIXMY5hruTDV\/mDWSrX\nk9OhoFRCdteAnYksPR2q\/P7+d4U1eU2Oa\/5elFkEbTCbZjdVdxzKvFy5S6PZOQQZ\nQEEukoOQg3LJrtanIx7wTM9YUHsmPy6dphBnqsXmS7h8Tyjk0d7zlcBe\/xpHddQk\nIkh08P8bdBpgIPwEyCi4NZNQOsEo8F2nS1mRBmuBKX3xgP11hXrgQUefTm90++Fj\n73Mmylsk2SDqfDpLFHjbQwH0Tf4aey8u\n-----END ENCRYPTED PRIVATE KEY-----"},"sign_keypair":{"public_key":"-----BEGIN PUBLIC KEY-----\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAErIAtmqjc0hA0G1rbnRmQwKGEkpsgpxC0\nRciiiSx0M+UgkItXXYcOxkclV21J\/yESRZHgfFVDT5v9XM2+Y5PkcZTg8G8Evs6f\nCRphAP9zvyDyjt7EI3eRVE3cI+52oVVP\n-----END PUBLIC KEY-----","private_key":"-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIBNDBvBgkqhkiG9w0BBQ0wYjBBBgkqhkiG9w0BBQwwNAQgv4gtZSlxrn7ZxEYV\naFX7DA30jhBHJtr3xGzz89mPRvkCAkAAMAwGCCqGSIb3DQILBQAwHQYJYIZIAWUD\nBAEqBBCs07ls2OoUUZoouNHX+jXuBIHAWzXQj1HBkzfaM65Nm88Y0CTOplkA7c52\n5JJwf97e65\/sNHboEPHRIS2MDcN5IqUb6O40l9ziQdJ8HMcAJO2Dab1gVPfQ6vAs\nVv6dAEa92dmP98y\/ViEJcZ5DownDYuD5mkcom+rpv3zBFTUCXMM0o1qHouWCu37U\nKugVQGv2GJghxjRrOqxuLYunUA9EZpvwG9Wd0zspUdVPNEMGAkB6uE7fGtRvJ\/5E\nKWsEh6awLM3vgXAKwUbYMyQ+oD2TmxOG\n-----END ENCRYPTED PRIVATE KEY-----"},"client_salt":"HKDF-SHA-512$cEYA0V1iSOI0NV8ZrYK2o+xFJmFcOY3pJ7qJug5k2W4=","encrypted_key":"{\"type\":\"asymmetric_encryption\",\"algorithm\":\"ECDH\",\"ecdh_curve\":\"secp384r1\",\"public_key\":\"-----BEGIN PUBLIC KEY-----\\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEs+0jmL669zhT8fVBTiAF+\/ocNPpFRU9s\\nziwa7snsq6Q\/zyUTToynohtgjLfF\/hKLQHNF6HAvQ7j35JKSk7+VowWQa7qBrsys\\ndVadIWJeL\/qYhggjMzr3nRDfBpbuGFbs\\n-----END PUBLIC KEY-----\",\"hkdf_params\":\"HKDF-SHA-512$\/iUn7S1cXvhGGAxxWAD9qs5DJciji9GdCZUIY70fiVE=\",\"symmetric_params\":\"AES256-GCM$bC7PuEqvYiH\/iHf3QLg1quy1o6kZ3ga\/Zo\/gz\/paRcM=$Kd8l5H7x3XZyLzYiEMhYuEa9dOzckvEbM4yUL+qTQC0=$PcQb\/zO4sZv6NsjIXD0YGQ==\"}","client_metadata":null,"created_at":1700828775,"updated_at":1700828775}],"free_records_restriction":40,"max_keychains_count":100,"free_import_limit":500,"paid_import_limit":10000,"last_notification_id":null,"schema_current_version":"1.3.7","team_member_type":0,"paid":false,"trial":false,"plan":"free","has_teams_invites":false,"total_devices_amount":0,"login_device_number":0,"free_devices_limit":2,"show_trial_purchases":true},"success":true}
```

and send

```
GET /api/v1/schema/1.3.7 HTTP/2
Host: api.passwarden.com
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Ks-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJBdXRoQVBJIiwiaWF0IjoxNzAwODI4NjgzLCJzdWIiOiJhdXRoIiwiZXhwIjoxNzAxMDAxNDgzLCJjb21wYW55X2lkIjoxLCJ1c2VyX2lkIjo0NDg3MTA2NCwidXNlcm5hbWUiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2VydmljZV9hbGlhcyI6InBhc3N3YXJkZW4iLCJkZXZpY2VfdXVpZCI6IjFmOWVjNDY4LTg5YWEtNDAyYi05YWFkLWM1ZDljNmZjNjM0NSIsImxlZ2FjeV9zZXNzaW9uX3Rva2VuIjoiZTBhZDA0NjEtZDFkMi00YzJlLTlmODUtMjM1MjAzM2M3OWEzIiwiY2FuX2hhdmVfdHJpYWwiOnRydWUsImNvdW50cnlfY29kZSI6IkNBIiwiZGV2aWNlX3BsYXRmb3JtIjoiV2ViIiwibGFzdF9sb2dpbl9kZXZpY2VfbnVtYmVyIjowLCJ0b3RhbF9kZXZpY2VzX2Ftb3VudCI6MCwiYXV0aF9zaWduIjoiZTI3MjZmMTk1MzBjYWVlYjk0OTYzYTFiM2U0YjAyNzEyMTVmYzFmZjYyZTA0ZjY2OWFmMDc4YjE0YjNkYjA1YyIsImRldmljZV9zaWduIjoiYWQ1OWRkNGRjY2IyOGFiOWVlMDhjNTljOWRiZjgyODUyNjdkYmZhYTY0OGY3OGJmNDlkMTZiYzYyNWU4ZjdlMiJ9.YR_Wuqkd9ZGJ3b622HkkkiowS4jEHs-aS4wUeiRiTC9U195Z6CNDoQDlep3xcLMuszuRwehLox5m1pjfWojEFw
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://passwarden.keepsolid.com
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://passwarden.keepsolid.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7


```

and recevie

```
HTTP/2 200 OK
Date: Fri, 24 Nov 2023 13:37:35 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://passwarden.keepsolid.com
Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, DELETE, PATCH
Access-Control-Allow-Headers: Content-Type, X-KS-Access-Token
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 82b20c217a60050f-HKG
Alt-Svc: h3=":443"; ma=86400

{"success":true,"data":null}
```

and send

```
GET /api/v1/keychains HTTP/2
Host: keychain-api.keepsolid.com
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Ks-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJBdXRoQVBJIiwiaWF0IjoxNzAwODI4NjgzLCJzdWIiOiJhdXRoIiwiZXhwIjoxNzAxMDAxNDgzLCJjb21wYW55X2lkIjoxLCJ1c2VyX2lkIjo0NDg3MTA2NCwidXNlcm5hbWUiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2VydmljZV9hbGlhcyI6InBhc3N3YXJkZW4iLCJkZXZpY2VfdXVpZCI6IjFmOWVjNDY4LTg5YWEtNDAyYi05YWFkLWM1ZDljNmZjNjM0NSIsImxlZ2FjeV9zZXNzaW9uX3Rva2VuIjoiZTBhZDA0NjEtZDFkMi00YzJlLTlmODUtMjM1MjAzM2M3OWEzIiwiY2FuX2hhdmVfdHJpYWwiOnRydWUsImNvdW50cnlfY29kZSI6IkNBIiwiZGV2aWNlX3BsYXRmb3JtIjoiV2ViIiwibGFzdF9sb2dpbl9kZXZpY2VfbnVtYmVyIjowLCJ0b3RhbF9kZXZpY2VzX2Ftb3VudCI6MCwiYXV0aF9zaWduIjoiZTI3MjZmMTk1MzBjYWVlYjk0OTYzYTFiM2U0YjAyNzEyMTVmYzFmZjYyZTA0ZjY2OWFmMDc4YjE0YjNkYjA1YyIsImRldmljZV9zaWduIjoiYWQ1OWRkNGRjY2IyOGFiOWVlMDhjNTljOWRiZjgyODUyNjdkYmZhYTY0OGY3OGJmNDlkMTZiYzYyNWU4ZjdlMiJ9.YR_Wuqkd9ZGJ3b622HkkkiowS4jEHs-aS4wUeiRiTC9U195Z6CNDoQDlep3xcLMuszuRwehLox5m1pjfWojEFw
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://passwarden.keepsolid.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://passwarden.keepsolid.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7


```

and receive

```
HTTP/2 200 OK
Date: Fri, 24 Nov 2023 13:37:37 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, DELETE
Access-Control-Allow-Headers: *
Cf-Cache-Status: DYNAMIC
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Server: cloudflare
Cf-Ray: 82b20c306e44099b-HKG
Alt-Svc: h3=":443"; ma=86400

{"success":true,"data":[{"keychain_uuid":"6372d9c2-7cfd-4fdf-8837-3cbf491acd6e","current_revision":{"revision_uuid":"4737e8e2-7d40-4da1-9dfa-a411d9680177","replaced_by_uuid":null,"encrypted_key":null,"client_salt":"$argon2id$v=19$m=16384,t=4,p=1$21i\/vzq2xPO5vNoDJ8OIS7w7tSWk5N7Wba8RuuhayUg","metadata":null,"enc_keypair":{"private_key":"-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIBNDBvBgkqhkiG9w0BBQ0wYjBBBgkqhkiG9w0BBQwwNAQgHaG6M5Qj3f1kgltt\n+VpcydRZdMT+PsrU54UL2jZYafICAkAAMAwGCCqGSIb3DQILBQAwHQYJYIZIAWUD\nBAEqBBCKkowrW8YxTMOpzhfuQEI5BIHAMdrmCLqZKGRqrCuVfjvjr1TVTT9j1kjH\nH5uZadinbbn8J30WY3hKcJg8FO+ZWDDYA7zzT\/Qm9zD1UP2\/W2KDv+TwFWEkBrtY\nIKl+Glx7\/bKOD8sOIHa0sd+FwdjHI5U1elvck87DbfWS8BUti+DQaximn1jPuho6\nRmk0oBTzWLCF1yEFUc7kwRad87CaDSzwHs2AmXIDry6O11xmNIi5yJzjQVzFi8cE\nyyyAhXpaILzTlRnmhiYLYj3SwHKhCupz\n-----END ENCRYPTED PRIVATE KEY-----","public_key":"-----BEGIN PUBLIC KEY-----\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEcN1Doap8SXuclF6JgsscxRNHb5uF8ee\/\nUoiyx2gMiqSptNeXSYJMubqG3tfj8prtSux9glfCK4GO6SpDjxBgwAqEk4bIRhUF\n1ffo64dGco\/At3NMIJ\/kTtkz\/RbXw7qB\n-----END PUBLIC KEY-----"},"sign_keypair":{"private_key":"-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIBNDBvBgkqhkiG9w0BBQ0wYjBBBgkqhkiG9w0BBQwwNAQgZoCh\/pPqSLNbx929\n25TJ4cKWackg9+PkbBm\/Asjh5oYCAkAAMAwGCCqGSIb3DQILBQAwHQYJYIZIAWUD\nBAEqBBApIA\/jsbxK+5tQ\/m03K\/D4BIHAAHR8z15eU0sOTAPfdXEIGGoThVOVoP8V\nMfPlI\/rhulrbnWoc\/ISduzBGKLWM6kxdKoZioQHWRfpV75SsyoVln9hX89tQl\/I2\n2iC\/qa6NBopftUVGFUEk6Xoydp6gZOnyFP1hUA8kCaLTSfT6f\/3eYj5X9F6wTxh0\n3ewkxdcZ31JMB7fQnhpkjukTtiv6ESpZ0nTLa6l38MbUaV6EmOIAk6wFomZuKS7E\nm00x5YpnVRwkrNsxkKKCQXaQUiB\/BypZ\n-----END ENCRYPTED PRIVATE KEY-----","public_key":"-----BEGIN PUBLIC KEY-----\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEMncwlJVZ9alXwXSc\/tIrpPFPNKdpY2OF\n31jsJQxGbjQN2kOLF6Q5APsPEXD08qgRINFqcNkahy9qffmhPm+MJNTPtcOSQ6wS\n3MAkwgFEgFaQ03FUxnxS29YJaSXc3rok\n-----END PUBLIC KEY-----"}},"old_revisions":[],"metadata":null}]}
```

and send

```
GET /api/v1/keypairs/e0b5adaa-ed38-4b9e-916c-8565be62c38f/vaults?showRecords=1 HTTP/2
Host: api.passwarden.com
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Ks-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJBdXRoQVBJIiwiaWF0IjoxNzAwODI4NjgzLCJzdWIiOiJhdXRoIiwiZXhwIjoxNzAxMDAxNDgzLCJjb21wYW55X2lkIjoxLCJ1c2VyX2lkIjo0NDg3MTA2NCwidXNlcm5hbWUiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2VydmljZV9hbGlhcyI6InBhc3N3YXJkZW4iLCJkZXZpY2VfdXVpZCI6IjFmOWVjNDY4LTg5YWEtNDAyYi05YWFkLWM1ZDljNmZjNjM0NSIsImxlZ2FjeV9zZXNzaW9uX3Rva2VuIjoiZTBhZDA0NjEtZDFkMi00YzJlLTlmODUtMjM1MjAzM2M3OWEzIiwiY2FuX2hhdmVfdHJpYWwiOnRydWUsImNvdW50cnlfY29kZSI6IkNBIiwiZGV2aWNlX3BsYXRmb3JtIjoiV2ViIiwibGFzdF9sb2dpbl9kZXZpY2VfbnVtYmVyIjowLCJ0b3RhbF9kZXZpY2VzX2Ftb3VudCI6MCwiYXV0aF9zaWduIjoiZTI3MjZmMTk1MzBjYWVlYjk0OTYzYTFiM2U0YjAyNzEyMTVmYzFmZjYyZTA0ZjY2OWFmMDc4YjE0YjNkYjA1YyIsImRldmljZV9zaWduIjoiYWQ1OWRkNGRjY2IyOGFiOWVlMDhjNTljOWRiZjgyODUyNjdkYmZhYTY0OGY3OGJmNDlkMTZiYzYyNWU4ZjdlMiJ9.YR_Wuqkd9ZGJ3b622HkkkiowS4jEHs-aS4wUeiRiTC9U195Z6CNDoQDlep3xcLMuszuRwehLox5m1pjfWojEFw
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://passwarden.keepsolid.com
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://passwarden.keepsolid.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7


```

and receive

```
HTTP/2 200 OK
Date: Fri, 24 Nov 2023 13:37:39 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://passwarden.keepsolid.com
Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, DELETE, PATCH
Access-Control-Allow-Headers: Content-Type, X-KS-Access-Token
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 82b20c389b77050f-HKG
Alt-Svc: h3=":443"; ma=86400

{"data":[{"vault_uuid":"8bc20d4f-b70f-4a31-9184-1cfcaa5c3788","revision_id":126689,"removed":0,"personal":true,"creator_id":44871064,"name":"{\"type\":\"symmetric_encryption\",\"kek\":\"AES256-GCM$TzOVJtTuq5bxSFv+gdes2AahixB26KvZ\/Wia9+7Ancc=$70TykwG7D0PRAccZJWV1QO1Cyyne0tSoeCQvzWqjXgk=$42ACyachC6fKVSt4c7l3sg==\",\"data\":\"AES256-GCM$RtD8+w8MRoRKMvhfgg3r63wVLlriprQMicwMJoS0Q18=$nyt3LGVlEBSjswb8Ao0=$D2hz86YglAphwlgp4IPBhA==\"}","client_metadata":null,"created_at":1700828777,"updated_at":1700828777,"account_vault":{"permissions_mask":2047,"client_metadata":null,"encrypted_key":"{\"type\":\"asymmetric_encryption\",\"algorithm\":\"ECDH\",\"ecdh_curve\":\"secp384r1\",\"public_key\":\"-----BEGIN PUBLIC KEY-----\\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEtsw6NrW77daPx2x9vQwzu8xcNBgJFSSx\\ngssAeyYeK3nuj\/EkNQz7fmKlqMh71KVn3R3+VYAolu3Fot2NydcGD3pSTU1skfrj\\n7iImDDt90ytL5rzfi74upgHE4leFPu1w\\n-----END PUBLIC KEY-----\",\"hkdf_params\":\"HKDF-SHA-512$SV+hUd1GJOjqckNa8dKbZdGJnEAr14IaKONb+z7S2P0=\",\"symmetric_params\":\"AES256-GCM$C19uO2C0UhdzA+1vg1V0LMNIdOLj14hZ9qjpJ0prEis=$ugmuR0t8jcGVcPZo4+TCr9aU1CEdNvxJEUEItYLYrAs=$kejDFDyfKn\/x9tZxDKmr+Q==\"}","keypair_uuid":"e0b5adaa-ed38-4b9e-916c-8565be62c38f"},"partners":[{"id":44871064,"username":"example@example.com","permissions_mask":2047}],"records":[{"record_uuid":"a552e627-09cd-4442-9b40-cb1cc0f2a9b8","vault_uuid":"8bc20d4f-b70f-4a31-9184-1cfcaa5c3788","creator_id":44871064,"revision_id":3303352,"payload":"{\"type\":\"symmetric_encryption\",\"kek\":\"AES256-GCM$7u5KjdqUnyUQReUvg98P74Jfxz1nF467zcj8pA4aFy0=$f\/m7ZpMGozXUU6n9\/HmWmSiBIf4tTKJBwo++LewMVbg=$MRkJoI3W909bgcgmsePD3w==\",\"data\":\"AES256-GCM$MfOUfKFMyaDCBsO+o9WsTtcwpd2hlXY7xDizNgO9lmQ=$BIPn0lWbu83yI8NWUXBZrqouC1I7TmcsLHoqZT0HxG18TXnuAGL+vljmxC1kI2gqT1sXJ1jSU0C9WswCxwpPPCjINWrjDOuAK6Te8ZEOgmZSk1f6s4DILPkYGhyTCLwsczeFYEMKm50R4UDlgGk0qYdI\/oUO2nbWkxxwLlK4gbgRunMnjjuQr6v+U2ii7P6\/2qxbNgtClFnkr3ojktecpHvM4fogSw9\/JEyn2bZe6J9TZtabSF3DdsTLyq1ln20Q2EeUBitbi9XCqKqofuYMJGMwuYJZPzxX7IcSZdkMTVpN\/Tvn2qYImrIBR0qlQ\/pj9Ajsyb0ngr8jyLe6ZidK9Q==$ZrpixuKvGffljdcHVgTCWA==\"}","client_metadata":null,"removed":0,"created_at":1700828778,"updated_at":1700828778}]}],"success":true}
```

When we add a new item, we send

```
POST /api/v1/keypairs/e0b5adaa-ed38-4b9e-916c-8565be62c38f/vaults/8bc20d4f-b70f-4a31-9184-1cfcaa5c3788/records?import=0 HTTP/2
Host: api.passwarden.com
Content-Length: 593
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Content-Type: application/json;charset=UTF-8
X-Ks-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJBdXRoQVBJIiwiaWF0IjoxNzAwODMzMzYxLCJzdWIiOiJhdXRoIiwiZXhwIjoxNzAxMDA2MTYxLCJjb21wYW55X2lkIjoxLCJ1c2VyX2lkIjo0NDg3MTA2NCwidXNlcm5hbWUiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwic2VydmljZV9hbGlhcyI6InBhc3N3YXJkZW4iLCJkZXZpY2VfdXVpZCI6IjFmOWVjNDY4LTg5YWEtNDAyYi05YWFkLWM1ZDljNmZjNjM0NSIsImxlZ2FjeV9zZXNzaW9uX3Rva2VuIjoiNjdmYTI1MGEtMWFkOS00NTY3LTg1ODktZjViZTk4ZWFiMjU1IiwiY2FuX2hhdmVfdHJpYWwiOnRydWUsImNvdW50cnlfY29kZSI6IkNBIiwiZGV2aWNlX3BsYXRmb3JtIjoiV2ViIiwibGFzdF9sb2dpbl9kZXZpY2VfbnVtYmVyIjowLCJ0b3RhbF9kZXZpY2VzX2Ftb3VudCI6MCwiYXV0aF9zaWduIjoiZTI3MjZmMTk1MzBjYWVlYjk0OTYzYTFiM2U0YjAyNzEyMTVmYzFmZjYyZTA0ZjY2OWFmMDc4YjE0YjNkYjA1YyIsImRldmljZV9zaWduIjoiYWQ1OWRkNGRjY2IyOGFiOWVlMDhjNTljOWRiZjgyODUyNjdkYmZhYTY0OGY3OGJmNDlkMTZiYzYyNWU4ZjdlMiJ9.8_nfXQ4FHTlxQuxnxTwaTEO-s_P2NtlaNLt7hnrBHYWmnWdw2Z97upeWMBFEoAMz11OrJt6ZpMmvxDzYIuoUNQ
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://passwarden.keepsolid.com
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://passwarden.keepsolid.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

[{"record_uuid":"58e044b8-1d24-4878-8ed5-36712ea1e168","parent_id":null,"payload":"{\"type\":\"symmetric_encryption\",\"kek\":\"AES256-GCM$6j/g/JRZiF0F6W9xY3quZ1QNcs00mxEdGDpL5RXyDAo=$rkSz6aQzFGtQleimC304Z+m8l9bodqcVb31AsevMFrU=$Mm+h5/dXGpl/rQi1rj9q5A==\",\"data\":\"AES256-GCM$oWyEEEEJ8j3ttJm/6j63xzNvuD8mugib+cicq2iTWFQ=$knnxewOnqV1OZdaDdHeFx1MtXXmUHF6x+78ykmu0AmfADJvaiw07OE6PxhO9nK+AJhFkd87jfpgKJ39w1rZHuylH0jT00YXG83KQc/21F6i61767MNdCxbMaj4wZX4pM2Vosu9I0LaYQ1rsBaX/pGXANUjBT9tEZdG9Z/eGr5lp5UPXG9vXVQTCmUoJwPD0pXLNtwyCLq/ShqzQkXR8qDQ==$rTLTAnX3Pu5iPbBabIeEyQ==\"}","client_metadata":null}]
```

and receive

```
HTTP/2 200 OK
Date: Fri, 24 Nov 2023 13:43:54 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://passwarden.keepsolid.com
Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, DELETE, PATCH
Access-Control-Allow-Headers: Content-Type, X-KS-Access-Token
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 82b215614fe4b430-HKG
Alt-Svc: h3=":443"; ma=86400

{"data":[{"record_uuid":"58e044b8-1d24-4878-8ed5-36712ea1e168","vault_uuid":"8bc20d4f-b70f-4a31-9184-1cfcaa5c3788","created_at":1700833433,"updated_at":1700833433,"revision_id":3303446,"success":true}],"success":true}
```

When we log in the password manager, we send

```
POST /api/v2/login HTTP/2
Host: id.keepsolid.com
Cookie: ksbuid=1f9ec468-89aa-402b-9aad-c5d9c6fc6345; i18n_redirected=en; connect.sid=s%3A-PLbrVlqooDhdKIIP5RwbwXmU-dli2Aw.NhLvs2LxrR5oJtlvB2bTyKXrsxTwXmYA9A2SOtXqO9w; _gcl_au=1.1.930664997.1700828373; _ga=GA1.1.860353925.1700828730; OptanonAlertBoxClosed=2023-11-24T12:26:10.953Z; ksrftoken=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJBdXRoQVBJIiwiaWF0IjoxNzAwODMzNjgwLCJzdWIiOiJhdXRoIiwiZXhwIjoxNzA2MDE3NjgwLCJkZXZpY2VfYXV0aF90b2tlbl9pZCI6NDUyMzYzNjIsImF1dGhfZW5kcG9pbnRfaWQiOjY3MTQ2NTgwLCJlbnRyeV9wb2ludF90eXBlIjoibmF0aXZlIiwidXNlcl9pZCI6NDQ4NzEwNjQsImp0aSI6IkpXVDY1NjBhOTkwNDk5ODc1LjEyODY1ODc1IiwianRpX3NpZ24iOiIyM2M5OGFlN2I2OWUxZDFhZTBiMzM4ZWQ3ODU5ZWNkOGM4NWZkYjI2MzdkNTY2NThhZGRiYjgyNDUwZGEyZTZmIiwiYXV0aF9rZXlfaWQiOjE0ODh9.15k24lEQB_uNj8_2jRgmq09TpGXlzY8WywEF-SRXW6_bCsh73TxG72oOKEZ63YkLMgWe1stMXUU6GmQ_BJSTew.BshZwH%2F8s4UJGpB5pKFsNyT06Y6QlKO4MDxZNkdzXuQ; _ga_PQHBD2KHGB=GS1.1.1700833061.2.1.1700833736.7.0.0; OptanonConsent=isIABGlobal=false&datestamp=Fri+Nov+24+2023+21%3A48%3A57+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=6.26.0&hosts=&consentId=e2b585ef-65d8-4322-9c8b-f71d39f1653c&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=MY%3B07; _ga_81ML52NZHE=GS1.1.1700833605.1.1.1700833737.5.0.0
Content-Length: 719
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Content-Type: application/json
Sec-Ch-Ua-Mobile: ?0
X-Ks-Csrf-Token: 86b502f0-8ec6-4305-8bea-e8a811045907
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: https://id.keepsolid.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"login":"example@example.com","password":"123456","inrecaptcha":"03AFcWeA7xWTSpsgr5AxXF6smCIpEjP_FAt_2chYsRrMlazKN9coQioctyNQqbMIN5GIINv0-XpsHvzbzW4rx3UmoipNLmlHV4h789g8W_4X93qmokwwXXhtWsqX9j9panSJqKovG-4MTv-K1gZvk7eMBKtvSWmKhqZvMqliFUGEncH8KC1awgKQvfeg4cXHWGe8Wfo6_5bO7yDs58iiInK7r6ObPyx4gQZNVjRamViY5wDUFwScJYl2rmZ1SKeGM9PbC2Key5du6J_VxfOBMG2qUBdEPr1TeE1SU3HwN6hNZ1S67qJjysUGQgMGS2FDjQRYA4dvQtT23Fb6Z4faL3mDqnLtciF6X68OCrIehgIDzuiD0V_lxgZLKtURPWidGDeveK6_6YixwlU0Cy4Z2HIlmucItbdLHClnZjXCZ4thzPFaLdOGEyOHQZ2AhZmAQyTnQ-iKFydRuywRSwNpxnQ6SdeVjTdg-mVk_tjkpKQDFzvbXt4L4U_sJm9JqrmyZFJJ2_7wGPwacvHh6Wt2r1ZqOwe9Tf2QXJ7g","ismirror":false,"alias":"passwarden","platform":"Web","platformversion":"1.0","appversion":"1.3.3"}
```

and receive

```
HTTP/2 302 Found
Date: Fri, 24 Nov 2023 13:49:19 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 102
X-Powered-By: Express
Access-Control-Allow-Origin: https://id.keepsolid.com
Vary: Origin
Access-Control-Allow-Credentials: true
Etag: W/"66-7lB9MV1YbivUTE5LYX3jweRPbzI"
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Frame-Options: SAMEORIGIN
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 82b21d49dc551fb5-HKG
Alt-Svc: h3=":443"; ma=86400

{"error":"Internal Server Error","message":{"responsedetails":"Passwords mismatch!"},"statusCode":302}
```
