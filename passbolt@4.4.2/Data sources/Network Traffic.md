## Capturing Network Traffic

When logging in, we send the packet

```
POST /example/auth/login.json?api-version=v2 HTTP/2
Host: cloud.passbolt.com
Cookie: hubspotutk=8f8b13cce82387e6f5df59feed77bfc1; __hssrc=1; __hstc=120885143.8f8b13cce82387e6f5df59feed77bfc1.1702473131632.1702473131632.1702518086896.2; __hssc=120885143.2.1702518086896; csrfToken=f8b28a63ab139fb37ab827d5e7b47b92a054131eb89ddec80b1aa6494d0d77317a3bb22028d90b8747574caf999e869bc5906d09a360ddf5baf509385300a336; PHPSESSID=f27thjbu7f67lpepsrr6gt4kvi
Content-Length: 192
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryOE80tAmdfRiOmVMG
X-Csrf-Token: f8b28a63ab139fb37ab827d5e7b47b92a054131eb89ddec80b1aa6494d0d77317a3bb22028d90b8747574caf999e869bc5906d09a360ddf5baf509385300a336
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: chrome-extension://didegimhafipceonhjepacocaffmoppf
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

------WebKitFormBoundaryOE80tAmdfRiOmVMG
Content-Disposition: form-data; name="data[gpg_auth][keyid]"

C2A01D93A65FA3E4DF1826C21EFE8C5352F31EEA
------WebKitFormBoundaryOE80tAmdfRiOmVMG--

```

```
HTTP/2 200 OK
Date: Thu, 14 Dec 2023 01:53:04 GMT
Content-Type: application/json
Access-Control-Expose-Headers: X-GPGAuth-Verify-Response
Access-Control-Expose-Headers: X-GPGAuth-Progress
Access-Control-Expose-Headers: X-GPGAuth-User-Auth-Token
Access-Control-Expose-Headers: X-GPGAuth-Authenticated
Access-Control-Expose-Headers: X-GPGAuth-Refer
Access-Control-Expose-Headers: X-GPGAuth-Debug
Access-Control-Expose-Headers: X-GPGAuth-Error
Access-Control-Expose-Headers: X-GPGAuth-Pubkey
Access-Control-Expose-Headers: X-GPGAuth-Logout-Url
Access-Control-Expose-Headers: X-GPGAuth-Version
Cache-Control: no-store, no-cache, must-revalidate
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://storage.googleapis.com/ data:; frame-src 'self' https://*.duosecurity.com;
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Pragma: no-cache
Referrer-Policy: same-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Frame-Options: sameorigin
X-Gpgauth-Authenticated: false
X-Gpgauth-Login-Url: /auth/login
X-Gpgauth-Logout-Url: /auth/logout
X-Gpgauth-Progress: stage1
X-Gpgauth-Pubkey-Url: /auth/verify.json
X-Gpgauth-User-Auth-Token: -----BEGIN\+PGP\+MESSAGE-----%0A%0AwcDMA4scUoXBh%2FftAQv%2FbMyG3PUK9rCT7NzmttE5opE0k8piFTcGuhi6UIp7%0A8qe%2BIFRew%2F%2BhQb6MEN9OhKzsiQKb7Cr8Rp%2B6eRZUUE4yL8%2B%2Bai1Temxi0YtJ%0AXXj3Dai10Lk5ieqxCzMjeIciBoYbrdpu879PjRSK5rILcIE2tq%2BGCLz6zKST%0AeRy%2Fmi8syOr%2BRqCiwVZk0P1qFHg1vizFQFiUkeZHJnY8ndpOLVJfvHRIvBAX%0ARRCklYsvUymBZZaepB3dxUiDRRoHXBZ4GEjuwQWkVSG24Mx3BIXFMRyoz2B%2F%0AP%2B%2BsjtllO%2FrR5xyg%2FuJtI%2Fw8S026Qnz1E5a%2FlDyU0s0OytumnkoBRCbXVyu2%0ATL%2Bn8zzNEHXnf5T144QPn5UU2rslo9Vm2F%2FipvlT6Ji0kOAtdZO5Px7n%2Bg9z%0AzcYCFw6ebCwfnU13SwH5S8qOXspEmje%2FAvYhSSmntHI96ws82oo%2F6QphEmqS%0AnnNkB4ckWudEeDkj8hxJFMyeOzvSBQdER13TsfBrNYu%2B60bnrIGI0sA6Ac57%0AZko9LnG%2F4dZXf0wKCmzZrlzRT3c0f8RK%2Fdy4VysZOUzcu2bQVzkC4eGuVH5G%0AylDUHYN2uqSKnyTSV%2FDXFvVb%2BvLJn6QkPyG9jA53LLuy22l4cau9OOnriQtE%0AGRR%2FOLobzl3%2FeGOYYXckQUpqtvDaj1R8S4fcf1RKRYgsywUHlqh0PkVc93dl%0AilRk5xRnpufz4THv42UA4q3sbhjI3gpJ1JddCgMIRn3Im0NobmIr1JTtUhNP%0AZ1ElxLWkE1Yo29w6%2B%2FAw7QnC4LosR0RRiS0R90UYM8K0q9mq8Ybsiu4Pz2UF%0AE9ToaEZv9CpfdMxyQHMzeZ%2BQZMO4cQ%3D%3D%0A%3DZvzF%0A-----END\+PGP\+MESSAGE-----%0A
X-Gpgauth-Verify-Url: /auth/verify
X-Gpgauth-Version: 1.3.0
X-Permitted-Cross-Domain-Policies: all
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 8352cf9ce8c93900-KUL

{"header":{"id":"1a050358-746d-47b3-90e0-9dece01e16ac","status":"error","servertime":1702518784,"action":"a3c19ad2-8920-5395-86d0-8567cb34f382","message":"The authentication failed.","url":"\/auth\/login.json?api-version=v2","code":200},"body":null}
```

and send

```
POST /example/auth/login.json?api-version=v2 HTTP/2
Host: cloud.passbolt.com
Cookie: hubspotutk=8f8b13cce82387e6f5df59feed77bfc1; __hssrc=1; __hstc=120885143.8f8b13cce82387e6f5df59feed77bfc1.1702473131632.1702473131632.1702518086896.2; __hssc=120885143.2.1702518086896; csrfToken=f8b28a63ab139fb37ab827d5e7b47b92a054131eb89ddec80b1aa6494d0d77317a3bb22028d90b8747574caf999e869bc5906d09a360ddf5baf509385300a336; PHPSESSID=f27thjbu7f67lpepsrr6gt4kvi
Content-Length: 379
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryCvBjsbpAnfoqfIBt
X-Csrf-Token: f8b28a63ab139fb37ab827d5e7b47b92a054131eb89ddec80b1aa6494d0d77317a3bb22028d90b8747574caf999e869bc5906d09a360ddf5baf509385300a336
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: chrome-extension://didegimhafipceonhjepacocaffmoppf
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

------WebKitFormBoundaryCvBjsbpAnfoqfIBt
Content-Disposition: form-data; name="data[gpg_auth][keyid]"

C2A01D93A65FA3E4DF1826C21EFE8C5352F31EEA
------WebKitFormBoundaryCvBjsbpAnfoqfIBt
Content-Disposition: form-data; name="data[gpg_auth][user_token_result]"

gpgauthv1.3.0|36|7f43fb49-c75c-4753-b204-32d118721ca0|gpgauthv1.3.0
------WebKitFormBoundaryCvBjsbpAnfoqfIBt--

```

```
HTTP/2 200 OK
Date: Thu, 14 Dec 2023 01:53:05 GMT
Content-Type: application/json
Access-Control-Expose-Headers: X-GPGAuth-Verify-Response
Access-Control-Expose-Headers: X-GPGAuth-Progress
Access-Control-Expose-Headers: X-GPGAuth-User-Auth-Token
Access-Control-Expose-Headers: X-GPGAuth-Authenticated
Access-Control-Expose-Headers: X-GPGAuth-Refer
Access-Control-Expose-Headers: X-GPGAuth-Debug
Access-Control-Expose-Headers: X-GPGAuth-Error
Access-Control-Expose-Headers: X-GPGAuth-Pubkey
Access-Control-Expose-Headers: X-GPGAuth-Logout-Url
Access-Control-Expose-Headers: X-GPGAuth-Version
Cache-Control: no-store, no-cache, must-revalidate
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://storage.googleapis.com/ data:; frame-src 'self' https://*.duosecurity.com;
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Pragma: no-cache
Referrer-Policy: same-origin
Set-Cookie: PHPSESSID=lec3tutgsch0vndkj4v9fjcg2a; path=/; secure; HttpOnly
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Frame-Options: sameorigin
X-Gpgauth-Authenticated: true
X-Gpgauth-Login-Url: /auth/login
X-Gpgauth-Logout-Url: /auth/logout
X-Gpgauth-Progress: complete
X-Gpgauth-Pubkey-Url: /auth/verify.json
X-Gpgauth-Refer: /
X-Gpgauth-Verify-Url: /auth/verify
X-Gpgauth-Version: 1.3.0
X-Permitted-Cross-Domain-Policies: all
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 8352cfa42a443900-KUL

{"header":{"id":"053a64d1-7664-491e-8a1a-ec8242d0d4b8","status":"success","servertime":1702518784,"action":"a3c19ad2-8920-5395-86d0-8567cb34f382","message":"You are successfully logged in.","url":"\/auth\/login.json?api-version=v2","code":200},"body":{"id":"99619705-1a8a-4300-bdb7-21ed4d3878e0","role_id":"fcf6d0e3-3198-47c0-8680-aec76d9cf4cd","username":"example@example.com","active":true,"deleted":false,"disabled":null,"created":"2023-12-14T01:50:22+00:00","modified":"2023-12-14T01:51:46+00:00","groups_users":[],"profile":{"id":"5352fe98-36c5-4bcd-802f-fb456702f263","user_id":"99619705-1a8a-4300-bdb7-21ed4d3878e0","first_name":"example","last_name":"example","created":"2023-12-14T01:50:22+00:00","modified":"2023-12-14T01:50:22+00:00","avatar":{"url":{"medium":"https:\/\/cloud.passbolt.com\/example\/img\/avatar\/user_medium.png","small":"https:\/\/cloud.passbolt.com\/example\/img\/avatar\/user.png"}}},"gpgkey":{"id":"621587af-1571-4057-b53a-1c88fec0f680","user_id":"99619705-1a8a-4300-bdb7-21ed4d3878e0","armored_key":"-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nxsDNBGV6X5oBDADW3WiYEN9L4I\/zbx6LRP0zByWT+xQJ1UBf4zZhY6DME4+W\nLTOOGMxOC8GqHtFAAbwzNXX4N8kxVv1HKWK\/8iwFPUexewQU7Y8bZyCgNlG\/\n\/WkDrg8Rtd7MsnzF9zRhAm2FjjLIVnOOKB\/zD5jD+QIA7+AS6SDAF4XpxWlV\n+kfkKKbkipI\/1fkHDI2eSAk+X\/+8I\/8wBjMeAnFVjCdPRwUEPP+9D\/+qqQP+\nyQiUZIp\/oaGiDSJIgfWDS4BA1ybK9p3vB3wRjg3zqPe2I3WwtiQ1kKg2HeRW\nkaKwCzlzn7ERNaYaHI6xGdESWjFXZPrHZf41YqFZAlBDZkYMqqsw3w6TdPss\nXxK9dovqVP9BUaSaCqy0J2fbhvxG+t2Mx\/GQzj\/0CQw6cJgcz2cv37xeg8Id\nUh0qObTZjAT\/KKdur4XEHadh\/CuBge0gMbWPd61cJrSZOd4fxnH1gAV5QsDh\nuhfV9H6LxCikFUaviy1jxwAIdhvY\/yGrMYj20OmpDcZHF+cAEQEAAc0iWWlo\nZSBEdWFuIDxkYW5pZWw3NzU2QGZveG1haWwuY29tPsLBCgQQAQgAHQUCZXpf\nmgQLCQcIAxUICgQWAAIBAhkBAhsDAh4BACEJEB7+jFNS8x7qFiEEwqAdk6Zf\no+TfGCbCHv6MU1LzHupPpgwAgHWmaYQxiM4w5vKt9Ja7kkSaXxxI7MpAWWbM\nVDvnIec3hp8015COAMmV0iMZio+OGhMY8NG863krddAs9032spGqcwTKX8YC\nroa0RXSjnvVBdZypwLWO9ybiqp6mIHmAYUZ9EY2pH9l5GDVWNtz0y57LB1IP\nSqOuuQB8rnp2+uSxINIge0sh8x6wnL4rej6fMi0HWFFjjA9TO2+LsM4+M\/ae\n8rtBNUrUZuFLUN5KzqJvAnGdCg9auWLgdD6gV+G5Igt71EXSGuEKFZc7mqp0\nyzVXl7QcMGmtSH3nQEvWgu9SwJjIHtotqNHiUqSWIbOGBa9\/57Ui2ue3zl81\nYAsZzrHxew9tG6guCnmouimSf80SP0GxIn486fKPPwmunxYiqUy\/ybaS4H+S\n2I2f7Mv7+yUkRi7Pj25VhwqdrCdPT5GwSsU0Ml2APsiExcSKTY1NWNgAetG2\nlGSoEayzLGi6AKUjSyAYcY5Fmwqeugm\/xGKXzw0tUQoDiDjl24LimJoLzsDN\nBGV6X5oBDACkEPsjms66B79zwZDSuyZXosZ6luHWhOFY5XtFD8xoDgxr6zEw\nI+wlSK\/LwPT8wsmkef2ygPElPFDULwnHzITrFQl3dRfmTuQlP8iNwLMeWAlF\nB9UDtDDqH7j+NSX2Zqn+JQSKHg2AeLqXQAfzUKynyTwM\/b840s4KumWXB4Ep\nFT+O0aj1toMFi2PswSSt+zfuM3LYSz8GWOMM2oXWkdC45XQGsacxdqZ3dNKd\n5dclN2tukl1\/JTzFiu3cC2wOLQJ4nz0lXRqYsZIuc2C776ax+o3oGNojxGHd\nqTLMZxDdlfy9WljGNxKkoVdXeUph11pt\/BrxZewzXYI+bIga3sE985u\/dk6X\nOeGQdG+0du3gRKox2EG\/NLo9CHmWs8vnR+Ss29t26l2XLzibphXIjsgso0vu\nyem15K40H2xHbuVbBNsJQGrzBmIQpRYlGJWFCMA1kk7iJdbeaWf4MgNmwHFr\nEq7JuHqGJs2sxcmRWsvUQ4kI0oc9CHfFX6XSuYmNl68AEQEAAcLA9gQYAQgA\nCQUCZXpfmgIbDAAhCRAe\/oxTUvMe6hYhBMKgHZOmX6Pk3xgmwh7+jFNS8x7q\nD1QL\/R7iDp4bK5rX04Bk5qTk4FIwbdaYMgdXt9rGt+znvBrVv2T+eV5cZcqR\nW\/kkLrd8v2fY\/DKUcHa\/zeIs5IV696ir2jFgO2NFnqeWBXSPXx03JR4o6lKR\niLvuos8pUehvQPu6M9xqENyNOoZHDBoUJOwufL\/+L3qiQfiIlflkAXu0PzKN\nsArbgYAo6dmWTW9y49VfKaVKFLulMyaMSLCz2J8boxHvIaKJTJczjctLUGU2\nfO+jrxU8yEUKC41gZ3QyJhRG5bd7BIf5Gq6bJC8GJPe78n\/YsF2ayHaIhBGa\nmOpRwfy0eLQZAsJJe+vDqmm3IUMdwYxanqML+IPrfeiD3zISFXGKEPmjhCT6\ncMg+w\/fNBS9Ab\/HkdToSj+cxG5QAtd7RWkmjNuS0WhAz+9F4pj\/\/trJLIpQN\npRzLGUejCv5JWBRQ\/rrLaRCT9UaT\/WBVlRe5416IKXZ50ndCCnD\/8iwtk8Er\n6CCZ7ONdObov\/ClYJhu\/YgZphbzBx9a\/uLoBsQ==\n=PzNS\n-----END PGP PUBLIC KEY BLOCK-----\n","bits":3072,"uid":"example example \u003Cexample@example.com\u003E","key_id":"1EFE8C5352F31EEA","fingerprint":"C2A01D93A65FA3E4DF1826C21EFE8C5352F31EEA","type":"RSA","expires":null,"key_created":"2023-12-14T01:51:22+00:00","deleted":false,"created":"2023-12-14T01:51:46+00:00","modified":"2023-12-14T01:51:46+00:00"},"role":{"id":"fcf6d0e3-3198-47c0-8680-aec76d9cf4cd","name":"admin","description":"Organization administrator","created":"2012-07-04T13:39:25+00:00","modified":"2012-07-04T13:39:25+00:00"},"last_logged_in":null}}
```

When adding a item, we send the packet

```
POST /example/resources.json?api-version=v2&contain%5Bpermission%5D=1&contain%5Bfavorite%5D=1 HTTP/2
Host: cloud.passbolt.com
Cookie: hubspotutk=8f8b13cce82387e6f5df59feed77bfc1; __hssrc=1; __hstc=120885143.8f8b13cce82387e6f5df59feed77bfc1.1702473131632.1702473131632.1702518086896.2; __hssc=120885143.2.1702518086896; csrfToken=f8b28a63ab139fb37ab827d5e7b47b92a054131eb89ddec80b1aa6494d0d77317a3bb22028d90b8747574caf999e869bc5906d09a360ddf5baf509385300a336; PHPSESSID=lec3tutgsch0vndkj4v9fjcg2a
Content-Length: 1538
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"
Accept: application/json
Content-Type: application/json
X-Csrf-Token: f8b28a63ab139fb37ab827d5e7b47b92a054131eb89ddec80b1aa6494d0d77317a3bb22028d90b8747574caf999e869bc5906d09a360ddf5baf509385300a336
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Origin: chrome-extension://didegimhafipceonhjepacocaffmoppf
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"name":"test1","username":"test","uri":"www.test.com","folder_parent_id":null,"resource_type_id":"a28a04cd-6f53-518a-967c-9963bf9cec51","secrets":[{"data":"-----BEGIN PGP MESSAGE-----\n\nwcDMA4scUoXBh/ftAQv+IN/kUhoVKQEDr+92vj1iZlnG6ewZV5apsj1HZZHw\nHCpZehwN3Z5gidxt+ZsmRu8ncMAaJctVE+Qdu7vxt9g4Vh5Q5ceq4UVBhNcA\nuRpw6JCj1dCBdQICJp4z86THsSh9IyuFdJMwtV8QewNbfFaoZo5UT4gJ+9cB\no6pez87Uv2v/DhXuXkOTy29H7lChP1RZZFfu+cnDzjs8n3mGhSPQMQvZjOrD\nZ8gOSJqnuYcN7/Ncl9KxJuKZD5znyrudW1TDSxZbkcEPY+LNYA2MahzUlUlK\n+kj5Ccv1LvBorj+KSXvUzaRFG56Lm+xie7iImRMSjQNpu/K6X92Pc7J13DgH\nZJjrqR06PhpMS5Yy9RL47GMLx4FB0NEigLJpBO6AJoP7MTgH4AVL6XzClv9Z\nQbwlJ9aWdHtGYc0SsCu8xuRTSrQnZIyH1dTb5krZB7rP1KRywbWfZ16FPsyR\nDbebcGsYn6muf0yM0NKZoR5sUvsLhG2XrFdkWGLyFBdupClKk+9s0sFlAY8M\nc1EcVznA9dhyUUkpxe89gGj7wpQsI9Y92kbiSgz8Xej/ofkDNpD1LpurnJoI\nMs9Jt3EUgt12HK5QnZicSnOV9K1Dsa9LcZY1VuN1ml/DzA50hRrK6uDPEK2/\nyGfwsI2by1EcYbQ1mVy63c5Vvq9FImZVrqhSd6M5/0QyXNgvE8vilUIxgEqQ\nPCirI/H2nreorPqg/EKr4hIE1Wj5mKRFwk1r/ckzl0qQIY5uOu2gVxJ551TK\nz83yZhij/brrRjyHItOHjn1dz2zVQbYi7Y88Cs04o6TsiwJ0+EqzvapjESMc\nJbX9i0kb41L+YKzNqQJRTEvhwbC4/j0buap7k1JSA754W/Yr3CHzP7olipmL\nQGC1Dw8U+FlBEld/VAOfKuuAwkWb/kog0Uvc9rEkBFfI+md25jV7i+3xu2Hb\n8bsRyBlApDu+RhDaBTYjY1l3yX59pgu4uWGOIDwOD7aPCZj9fM9rQCGegDHv\nKJCPGR4pGjBrb12UaSAaHpsHGpwgjdbFQWJN0bb09jYRzMP20W3PKzd7e1+5\nbeZf5TQ2iVl4r6DFPk3wO7VysVxtyAZmFux7hooFmaYkhqrcAQeCOG5MoA8G\nbgxfwltMRPW5x8pZEBbLLQHlGIp68GpKw+z4CTwmfLBF8yvVyZ9CHTTLwVWk\nWRC4kafrQ+kOogGiK/zadLCatgNMOrZtw3PFENcIqLJ+B18PX9JygyB0g684\nvD4Fido/\n=W929\n-----END PGP MESSAGE-----\n"}]}
```

and receive

```
HTTP/2 200 OK
Date: Thu, 14 Dec 2023 01:59:32 GMT
Content-Type: application/json
Access-Control-Expose-Headers: X-GPGAuth-Verify-Response
Access-Control-Expose-Headers: X-GPGAuth-Progress
Access-Control-Expose-Headers: X-GPGAuth-User-Auth-Token
Access-Control-Expose-Headers: X-GPGAuth-Authenticated
Access-Control-Expose-Headers: X-GPGAuth-Refer
Access-Control-Expose-Headers: X-GPGAuth-Debug
Access-Control-Expose-Headers: X-GPGAuth-Error
Access-Control-Expose-Headers: X-GPGAuth-Pubkey
Access-Control-Expose-Headers: X-GPGAuth-Logout-Url
Access-Control-Expose-Headers: X-GPGAuth-Version
Cache-Control: no-store, no-cache, must-revalidate
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://storage.googleapis.com/ data:; frame-src 'self' https://*.duosecurity.com;
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Pragma: no-cache
Referrer-Policy: same-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Frame-Options: sameorigin
X-Gpgauth-Login-Url: /auth/login
X-Gpgauth-Logout-Url: /auth/logout
X-Gpgauth-Pubkey-Url: /auth/verify.json
X-Gpgauth-Verify-Url: /auth/verify
X-Gpgauth-Version: 1.3.0
X-Permitted-Cross-Domain-Policies: all
Cf-Cache-Status: DYNAMIC
Server: cloudflare
Cf-Ray: 8352d9166ed1289f-KUL

{"header":{"id":"59f9c3e3-f75c-4322-bf78-a1ba42fce17f","status":"success","servertime":1702519171,"action":"ad8bbc35-6435-538e-b1a7-80b87bcedb6a","message":"The resource has been added successfully.","url":"\/resources.json?api-version=v2\u0026contain%5Bpermission%5D=1\u0026contain%5Bfavorite%5D=1","code":200},"body":{"id":"26eb6255-2d5d-4421-bb8f-dcca314fa9a8","name":"test1","username":"test","uri":"www.test.com","description":null,"deleted":false,"created":"2023-12-14T01:59:31+00:00","modified":"2023-12-14T01:59:31+00:00","created_by":"99619705-1a8a-4300-bdb7-21ed4d3878e0","modified_by":"99619705-1a8a-4300-bdb7-21ed4d3878e0","resource_type_id":"a28a04cd-6f53-518a-967c-9963bf9cec51","favorite":null,"modifier":{"id":"99619705-1a8a-4300-bdb7-21ed4d3878e0","role_id":"fcf6d0e3-3198-47c0-8680-aec76d9cf4cd","username":"example@example.com","active":true,"deleted":false,"disabled":null,"created":"2023-12-14T01:50:22+00:00","modified":"2023-12-14T01:51:46+00:00","last_logged_in":null},"creator":{"id":"99619705-1a8a-4300-bdb7-21ed4d3878e0","role_id":"fcf6d0e3-3198-47c0-8680-aec76d9cf4cd","username":"example@example.com","active":true,"deleted":false,"disabled":null,"created":"2023-12-14T01:50:22+00:00","modified":"2023-12-14T01:51:46+00:00","last_logged_in":null},"secrets":[{"id":"b29e0c72-89a5-476d-a577-5ddf56f369bb","user_id":"99619705-1a8a-4300-bdb7-21ed4d3878e0","resource_id":"26eb6255-2d5d-4421-bb8f-dcca314fa9a8","data":"-----BEGIN PGP MESSAGE-----\n\nwcDMA4scUoXBh\/ftAQv+IN\/kUhoVKQEDr+92vj1iZlnG6ewZV5apsj1HZZHw\nHCpZehwN3Z5gidxt+ZsmRu8ncMAaJctVE+Qdu7vxt9g4Vh5Q5ceq4UVBhNcA\nuRpw6JCj1dCBdQICJp4z86THsSh9IyuFdJMwtV8QewNbfFaoZo5UT4gJ+9cB\no6pez87Uv2v\/DhXuXkOTy29H7lChP1RZZFfu+cnDzjs8n3mGhSPQMQvZjOrD\nZ8gOSJqnuYcN7\/Ncl9KxJuKZD5znyrudW1TDSxZbkcEPY+LNYA2MahzUlUlK\n+kj5Ccv1LvBorj+KSXvUzaRFG56Lm+xie7iImRMSjQNpu\/K6X92Pc7J13DgH\nZJjrqR06PhpMS5Yy9RL47GMLx4FB0NEigLJpBO6AJoP7MTgH4AVL6XzClv9Z\nQbwlJ9aWdHtGYc0SsCu8xuRTSrQnZIyH1dTb5krZB7rP1KRywbWfZ16FPsyR\nDbebcGsYn6muf0yM0NKZoR5sUvsLhG2XrFdkWGLyFBdupClKk+9s0sFlAY8M\nc1EcVznA9dhyUUkpxe89gGj7wpQsI9Y92kbiSgz8Xej\/ofkDNpD1LpurnJoI\nMs9Jt3EUgt12HK5QnZicSnOV9K1Dsa9LcZY1VuN1ml\/DzA50hRrK6uDPEK2\/\nyGfwsI2by1EcYbQ1mVy63c5Vvq9FImZVrqhSd6M5\/0QyXNgvE8vilUIxgEqQ\nPCirI\/H2nreorPqg\/EKr4hIE1Wj5mKRFwk1r\/ckzl0qQIY5uOu2gVxJ551TK\nz83yZhij\/brrRjyHItOHjn1dz2zVQbYi7Y88Cs04o6TsiwJ0+EqzvapjESMc\nJbX9i0kb41L+YKzNqQJRTEvhwbC4\/j0buap7k1JSA754W\/Yr3CHzP7olipmL\nQGC1Dw8U+FlBEld\/VAOfKuuAwkWb\/kog0Uvc9rEkBFfI+md25jV7i+3xu2Hb\n8bsRyBlApDu+RhDaBTYjY1l3yX59pgu4uWGOIDwOD7aPCZj9fM9rQCGegDHv\nKJCPGR4pGjBrb12UaSAaHpsHGpwgjdbFQWJN0bb09jYRzMP20W3PKzd7e1+5\nbeZf5TQ2iVl4r6DFPk3wO7VysVxtyAZmFux7hooFmaYkhqrcAQeCOG5MoA8G\nbgxfwltMRPW5x8pZEBbLLQHlGIp68GpKw+z4CTwmfLBF8yvVyZ9CHTTLwVWk\nWRC4kafrQ+kOogGiK\/zadLCatgNMOrZtw3PFENcIqLJ+B18PX9JygyB0g684\nvD4Fido\/\n=W929\n-----END PGP MESSAGE-----\n","created":"2023-12-14T01:59:31+00:00","modified":"2023-12-14T01:59:31+00:00"}],"permission":{"id":"c85e02a5-a624-42bc-acac-d6eb279cae32","aco":"Resource","aco_foreign_key":"26eb6255-2d5d-4421-bb8f-dcca314fa9a8","aro":"User","aro_foreign_key":"99619705-1a8a-4300-bdb7-21ed4d3878e0","type":15,"created":"2023-12-14T01:59:31+00:00","modified":"2023-12-14T01:59:31+00:00"},"tags":[],"folder_parent_id":null,"personal":true}}
```

Findings:

1. Only secret passwords are encrypted.
