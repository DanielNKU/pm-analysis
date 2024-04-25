## Capturing Network Traffic

When unlocking the vault, we send

```
OPTIONS /authentication/s1/example@example.com/YTPVHLL HTTP/1.1
Host: api.multipassword.com
Accept: */*
Access-Control-Request-Method: GET
Access-Control-Request-Headers: x-client,x-socket-id
Origin: https://my.multipassword.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-site
Sec-Fetch-Dest: empty
Referer: https://my.multipassword.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: close


```

and receive

```
HTTP/2 204 No Content
Server: nginx
Date: Fri, 24 Nov 2023 01:46:01 GMT
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://my.multipassword.com
Vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET
Access-Control-Allow-Headers: x-client,x-socket-id
Access-Control-Max-Age: 0
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload


```

and send

```
GET /authentication/s1/example@example.com/YTPVHLL HTTP/2
Host: api.multipassword.com
X-Socket-Id: 761791959.113395132
Accept: application/json, text/plain, */*
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Client: MultiPassword/0.93.36
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Sec-Ch-Ua-Platform: "Windows"
Origin: https://my.multipassword.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://my.multipassword.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7


```

and receive

```
HTTP/2 200 OK
Server: nginx
Date: Fri, 24 Nov 2023 01:46:01 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://my.multipassword.com
Vary: Origin
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: Content-Length
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

{"salt":"47c2bc1508e53f26e1803274b9e26bf534cca0a4287c76ac47822602a976401b","group":4096,"B":"a73375cfeb5cf4c72358bf77fcec69348fbc7c13cbef6a0bdf6addabcd8654c2719ec8d209c59765390d49e2c1ed96ccd2e86fea07e83c0b0614e86b380a04831a29ce7fe384d2402abf7cf31c7f125ca0204e23501ba3abdf92ecb49110819dfb73982fa1815202f3429298b50ff70b5859f48c0319dda65ccad05f7309a1c4df2606f8f3c3a884e1606aa5c173bebc233c0e0fbf22c9bf6f10b6b6ed4c793b2c64b93b9098e444297fd1a06ae486a3778d831af2c38bd3e4775e89df06a6a99d3401d98fa1ca1fae15b2e3b29674121f8cb1fda1719af8bae51f889733efc13150d912fd77d6807011999ef42ecb705b3b7f809371cbe4d69c4f7171196df45e0ac213164f7ca9b74dc728d526e371cf3e45eae1dab28a32d840148249d87854fdc698a30b252be76e732d435505f4b45c8a73ff080d4fa706a9218f424402b6e5ff7f3cf40a7947d8dbedb6ac755cffdff11c32ec561b9dd75ca1fd58f5aaf05718b002b85af97d26b9d3e9a2f3e5d6507015a00a48805531978b083e4f98d24e8abafc38d9fac0c175bcce459ce05a501728b66a09036436ece92f8af93211f75e404b7b03b0420156ae9b784f9034728ccbce75d58897ca78e6794f5510bbb58af19a4000feb6383dfdef92611fc15dd9cde972fff09961b2f9f86c1314409130bae4edfe79db265cbf0e31730184c55821afb4ebdc8ac2199aec5a0c7f","sessionId":"Opjtm9nDx9TiH3Eid0pp77lx7QoiT7yN","iterations":100000}
```

and send

```
POST /authentication/s2/Opjtm9nDx9TiH3Eid0pp77lx7QoiT7yN HTTP/2
Host: api.multipassword.com
Content-Length: 1167
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json;charset=UTF-8
X-Socket-Id: 761791959.113395132
Accept: application/json, text/plain, */*
X-Client: MultiPassword/0.93.36
Sec-Ch-Ua-Platform: "Windows"
Origin: https://my.multipassword.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://my.multipassword.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"A":"c30737767e3acb80e33da4f1f484a508d33ab43945f51aac0ed65acc79203e61da7611f8920cccf734dcbafb2aca3fbe860bb12f5284fe6d12c527cd7489c5b07c3515f9d823f3a4ed30b2ed82d6dc8e52156296fc75e69c2de222547cf80a4bd07238b7066927dc73a223355d70e128a902ef128151e8f93542cf7f62848ae93bfc8d2576afc2077e8f7b28385057646c075c4a9dbf4ca90e4dd6ac097ad8891af5e14bcbac0c752b547291b541e1f4c2a5a4518c3a548796d91d97feaad54aeb4bbd120658f517a2686577ad7a3b4d2d0963624e2080edacad1080b4a85c32866af1a2e06527ae767e407ff99d65eafc656a642abec0e1f55ac07824d1d91ac9e2dcdbd5a7f300b6fd757e25992a06cb87f14caf624f5cd5883306d0f3f6f0f9449275e4b9511ef38820b14f16b276a8251a1e53503a2bc4345840f372965dca2d003a701d423b8739ab69b6ba37b36828e9eb322ba280387768eb4f1ed5d2324de7131a5de32a24f7f4e638faf50c4f25952594afef681b80d1744e0bf3d7e6a95e92dec45c7f925c4118c19d1fa13d498171b0d4d62362eaf483eca1a0850c0bde884ed99e14e819ba1c2023b985028f5c4ff7b0e734aac1b540ade74d4187a8cf291f79e468276f77201f8c7bb39d1758c2929c13ff37be80f65e38bfadbd163efb4e9d5c8110eab2ff9e6f2a0b6bbf66757d43f7291332478bc6932a16","M":"a8a88dc99f1b3602e60038c4d1badd2935ec660c4bc36842c65be11d0d857c46dc5100a3333a8d64e68e5489e33891b5bf0b2e36cec0f08ff665db906d177c2c"}
```

and receive

```
HTTP/2 200 OK
Server: nginx
Date: Fri, 24 Nov 2023 01:46:02 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://my.multipassword.com
Vary: Origin
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: Content-Length
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

{"M2":"c6671f2eaeece963c26496a52d6fc7ad7fa8a30e8bc8b0efb1b49487afbf1f58f193016566a16a32c2c8129494f95bf7588e1d154ff34cba8b64494c990f896d","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5tdWx0aXBhc3N3b3JkLmNvbS9hdXRoZW50aWNhdGlvbi9zMi9PcGp0bTluRHg5VGlIM0VpZDBwcDc3bHg3UW9pVDd5TiIsImlhdCI6MTcwMDc5MDM2MiwiZXhwIjoxNzAwNzkwNDIyLCJuYmYiOjE3MDA3OTAzNjIsImp0aSI6Ik5JY1pEdFpxMkJiUmlIVGciLCJzdWIiOiIxMjcwNzMwMDYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.5yf_J0r-zFLIOP_32Usmhz92j3AZWKI_5-f-SdhzQfE","ttl":60,"account":{"id":"YTPVHLL","name":"example","email":"example@example.com","createdAt":1700789914,"updatedAt":1700790362,"srpSalt":"47c2bc1508e53f26e1803274b9e26bf534cca0a4287c76ac47822602a976401b","srpIterations":100000,"srpGroup":4096,"importedOnce":false,"subscriptionExpiryDate":1703381914,"emailVerified":false,"country":"US","autoreg":false,"subscriptionType":"cardSubscription","cardSubscription":{"id":2074865,"tariffId":3,"period":"month","autoRenewing":false,"expiresAt":1703381914,"evaluationPeriod":true},"shareKeysetUuid":"ixy1t3ntqndxtdr59nny5f9i0iq4qp","mukGenerationTime":1700789914}}
```

and the multipassword sync the vault and send

```
POST /sync HTTP/2
Host: api.multipassword.com
Content-Length: 13214
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5tdWx0aXBhc3N3b3JkLmNvbS9hdXRoZW50aWNhdGlvbi9zMi9PcGp0bTluRHg5VGlIM0VpZDBwcDc3bHg3UW9pVDd5TiIsImlhdCI6MTcwMDc5MDM2MiwiZXhwIjoxNzAwNzkwNDIyLCJuYmYiOjE3MDA3OTAzNjIsImp0aSI6Ik5JY1pEdFpxMkJiUmlIVGciLCJzdWIiOiIxMjcwNzMwMDYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.5yf_J0r-zFLIOP_32Usmhz92j3AZWKI_5-f-SdhzQfE
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json;charset=UTF-8
X-Socket-Id: 761791959.113395132
Accept: application/json, text/plain, */*
X-Client: MultiPassword/0.93.36
Sec-Ch-Ua-Platform: "Windows"
Origin: https://my.multipassword.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://my.multipassword.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"delete":{"vaults":[],"items":[],"keysets":[]},"update":{"vaults":[{"uuid":"4buqnzpin4mmx1vuvefquoql919ikz","accountId":"YTPVHLL","keysets":["125n2pakelnjdmxjvk6tqwssdzpz4y"],"data":{"kua":1700789919,"kid":"125n2pakelnjdmxjvk6tqwssdzpz4y","algorithm":{"name":"AES-GCM","length":256},"iv":"7W17imTk8jna+CUF","data":"zQQsX2CU9DTEtJSJpeB+bXbnJZvUk12YbvPnFUS1Xu/P4cbFdB4mNxX1b6azbQZLemDEKA=="},"synced":true,"createdAt":1700789919,"updatedAt":1700789919,"deletedAt":null}],"items":[],"keysets":[{"uuid":"125n2pakelnjdmxjvk6tqwssdzpz4y","accountId":"YTPVHLL","publicKey":{"alg":"RSA-OAEP-256","e":"AQAB","ext":true,"key_ops":["encrypt","wrapKey"],"kty":"RSA","n":"4xdW-RG4uE3ydSnmb4bBU81t1taLtk1TWolguyey2zsbL2tpBE0uKAhvmKqk0O4Qp4G0TzVLEj7O-a7e9y23g2xDucM-ayvkYbIaaCPoxQJ_1GTmVo76jjueatBORKnbkXMN9VA6lrhHHIsF2TjLLHGvZQKkCwAfbaWGI7bYwBtjSI9QzFWt2u0augktSdjglcYta2jaTokyYXb8WPiAtv8pGAum2Zs9wQ1cQU5r46SeqlVfF4kScCAs8MjoYFU_cCBJHFvpAuDqRVxuFAUxC02dsJaB1WKfS2vd0OQK7HWTHE3Z0ZIRW6mTnxOzAP9YEy4rjWthI1CIKB38hBfTIi9PL9PIvfJnCIUTY23xxVh8a0n2PiMA0kFOTnN5-VYGEwFMy4AMa1eFEj2vzfCuT6zWaa3YF6KbhvkbVgBWx2jy5_TjCFw7JHeqZYhIsw_teaNGvQuLHrixcHx7RkX06xgKdrXFAHhugvVLyBEcX435gXqGXIOrwJnuFYE7C8Iatm1-ErCMGGy5bGdpy3HtzWYOKa7gqiUz4UkuMT3-yyd38Jb0CvSqNT10JwgJpR4l_zSz5nG-NYHz_h_4Mqhx0_JVYDLzlraoz-E4HNSWsP2xtAZV2vwF5po3OgRRR87wbarCbFUjp-tQL6AojCWM65hQvuG98GYKiukNaMMvuHc"},"createdAt":1700789919,"deletedAt":null,"updatedAt":1700789919,"privateKey":{"kid":"YTPVHLL","kua":1700789914,"data":"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","iv":"RIgx7G10hwrBJaBU","algorithm":{"name":"RSA-OAEP","hash":{"name":"SHA-256"},"modulusLength":4096,"publicExponent":{"0":1,"1":0,"2":1}},"extractable":true,"usages":["decrypt","unwrapKey"]},"dataKey":{"kid":"125n2pakelnjdmxjvk6tqwssdzpz4y","kua":1700789919,"data":"NI++DhCqJaNClyYoV2DQAsUXkGwmfovtFCOIdp/2rjTGNddUXAqV6iQ0cqQNHga64Z0vwrIXRIHj+G+MjcACT9Vb3sRU62mVA9bnZe3KoZ9vVE+tQ5yOuo9ob1RkjNJBI0t9npdhCyU8WuVaYjDHssy3o/tGPfd3EAI/9oJBKEs+8cY6SN0y4IetByiHmk81/xV8Q8vT7f/A66TofNmhxg2fpkx8Q+Y/Zk3oOL2WF8F/SOKEyt/MHstQ5TNDLDOku7Ft1JkhyGXuNIDlPQvuaCemTsEreeDUaylOZrCuLUzrkyOUOFieoeCwvWzToyZwJhT17lYOnDpjr8bNEAIy5b0wilvEAbz392V6Ade/qLKtKLUf/sqaG4FTgMS4IeE4bHqY/Vl/5q5gbLoX+JrygdDYUIVur9XlNWxuqp+V/QHUwDAVWmOTPJV9aAmk/UMo1l39yjAtw3iXiVjH+0YuTrQbqUQJ1O+jxD2bu+PZ7Rzgut1Otguc+aTFCP+P2wnvvOJfP37mA+Bz2+vFtiObVwt12608nUl3EAvz2hWEsqM6ueb1FChxwZHVlexuH52+Y44FCjM0x24qh26a6Skljo1ugUCSvC/6GdJTyNUuDhUbVKBA3LHbdh8SFaQ91bSahrUXXLf80LpgS5XdzWpE8ovsbGZLofY4cnDbXSJb82o=","iv":"WhTqNQvCD1iwLR74","algorithm":{"name":"AES-GCM","length":256},"extractable":true,"usages":["encrypt","decrypt"]}},{"uuid":"ixy1t3ntqndxtdr59nny5f9i0iq4qp","accountId":"YTPVHLL","publicKey":{"alg":"RSA-OAEP-256","e":"AQAB","ext":true,"key_ops":["encrypt","wrapKey"],"kty":"RSA","n":"ug62Grt0ZGcwXmD6sqPz-4SUtEhyLonQGgX9ms8VXCyb4lRSelGnRoonLdaGFt0CsqZZvaxn8GS80dIb9ymqlAaV_ffll443GK2ScfBDHg-vyd5Qf0SCILmdBn4mBnSJ0xmOMxfB1nZWTVXO-qV5oZ3vgzpKH42Q5TLTjFOJM-Z_pjdSU6dBEvHlNjCFF8UGR4vttnfya-Y23ZraJuAvidYwhHfRuZA0Cq6TZB5tQt5mt08GVqv5tddC90hXivriL-sKUj-Ix1zd7bzp18yQRxHnN_LOg-Z_cCYFv4BqMFaX_4VuVcp3F2SJeycErYrmH-N2rBmkGpMqa_RGc_R9ClxhiaZPRyBIlS2n3aotU05ntqnInjNr30ux3E9BRaeAKDppZjfSpKJ9lZhIPpUiIch15acYCQLuGHJjO4JUCJRcG2wowPE7026ZQfILqhpLBjAfkfooXEQHIdlZJzT_0ItQNpd2qUTwi9HvWFwZlDLRRjSg_3msDo-Y3MOER47qqfm3m4rISKaRlPLcSRA1luWmyvSsbqQLRAq5yGHcXpCp8FCutEEPL3Yej34BCPlwioUiv6Agu1y0mfQs58HPFTnaXKvNf9m7TyegbOXYO0LbAEVH16MecRW8GjU9wBwgF3Wjt29jyFKYZISVrZiKbBP4d_iQDPmv-DX9Vl1IZGc"},"createdAt":1700789916,"deletedAt":null,"updatedAt":1700789916,"privateKey":{"kid":"YTPVHLL","kua":1700789914,"data":"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","iv":"Ap4E1WORomGqt0eR","algorithm":{"name":"RSA-OAEP","hash":{"name":"SHA-256"},"modulusLength":4096,"publicExponent":{"0":1,"1":0,"2":1}},"extractable":true,"usages":["decrypt","unwrapKey"]},"dataKey":{"kid":"ixy1t3ntqndxtdr59nny5f9i0iq4qp","kua":1700789916,"data":"lxZXi07FbKJ7GH8JNb27O6VjlH2MA0vA05L68Jf2IB1HwRKhuVjxAwJ/C50xO3TOqQzBwvvj0RH1DNMLTvq9yOfnoDgs+Q/0/0B4a4EXrf8nXwIfcjrLlWF86GdjXZ3JLh1ZNRSYr6X7LgmGtnPaJV0hTCNZbKXIanBcD8KzExE5IkyA9aSnukeGXykOVIbBsFIu3/b4sOENdhuGIYvfhIwyi1UWqfPxWs+OVNIsphJwTR/13MHBONQ+axBeC262y0sIGqZAWpS58k95ar7WjnrDKY4P9BpuSC6DNZm6zS50Fjb1caJ1al/0Z99hGziKbXE+qJiC6aLrABdObMy3L7H2wGgC3TEZ0EHEuGSjM93DGeTJtO9VhvSAlvZ7Wwah/LkuOrAwjsvea8Dfb5q6eC54JLKgd6NXaW5u1GfMxuRKVTmcfmQfGKY/rfnlw/6oKRO4WQumSqfDgGuJ77ogPmXHnZ4E0p0XNdnrya6zt+OGY8ytPz2gicrBgu0E1gDL9d08Q3A7Y2FFA2bgu1zChJo3yLR2JRlArP6jEXNN8WW1ujl6uFqdXWmgt+Tz98Mh1RGXGEDaADF9OssW3790gx4jKyN0lOI51tvnwdu1kKwYTDCH82VYaiuFEk9b3DA6qI3CjaM9vAggHk4T3fkiKOp2pLV1TG1qHME7Yo+qft4=","iv":"k0ypUFfOc+Izf2j6","algorithm":{"name":"AES-GCM","length":256},"extractable":true,"usages":["encrypt","decrypt"]}}]}}
```

and receive

```
HTTP/2 200 OK
Server: nginx
Date: Fri, 24 Nov 2023 01:46:04 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://my.multipassword.com
Vary: Origin
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: Content-Length
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

{"account":{"id":"YTPVHLL","name":"example","email":"example@example.com","createdAt":1700789914,"updatedAt":1700790362,"srpSalt":"47c2bc1508e53f26e1803274b9e26bf534cca0a4287c76ac47822602a976401b","srpIterations":100000,"srpGroup":4096,"importedOnce":false,"subscriptionExpiryDate":1703381914,"emailVerified":false,"country":"CN","autoreg":false,"subscriptionType":"cardSubscription","cardSubscription":{"id":2074865,"tariffId":3,"period":"month","autoRenewing":false,"expiresAt":1703381914,"evaluationPeriod":true},"shareKeysetUuid":"ixy1t3ntqndxtdr59nny5f9i0iq4qp","mukGenerationTime":1700789914},"tariffPrices":[{"price":1.99,"tariffId":3,"period":"month","currencySign":"$","currencyCode":"USD","testCardWriteOff":0.3},{"price":19.99,"tariffId":3,"period":"year","currencySign":"$","currencyCode":"USD","testCardWriteOff":0.3}],"vaults":[{"uuid":"4buqnzpin4mmx1vuvefquoql919ikz","accountId":"YTPVHLL","createdAt":1700789920,"updatedAt":1700789920,"data":{"kua":1700789919,"kid":"125n2pakelnjdmxjvk6tqwssdzpz4y","algorithm":{"name":"AES-GCM","length":256},"iv":"7W17imTk8jna+CUF","data":"zQQsX2CU9DTEtJSJpeB+bXbnJZvUk12YbvPnFUS1Xu\/P4cbFdB4mNxX1b6azbQZLemDEKA=="},"keysets":["125n2pakelnjdmxjvk6tqwssdzpz4y"]}],"items":[],"keysets":[{"uuid":"ixy1t3ntqndxtdr59nny5f9i0iq4qp","accountId":"YTPVHLL","publicKey":{"alg":"RSA-OAEP-256","e":"AQAB","ext":true,"key_ops":["encrypt","wrapKey"],"kty":"RSA","n":"ug62Grt0ZGcwXmD6sqPz-4SUtEhyLonQGgX9ms8VXCyb4lRSelGnRoonLdaGFt0CsqZZvaxn8GS80dIb9ymqlAaV_ffll443GK2ScfBDHg-vyd5Qf0SCILmdBn4mBnSJ0xmOMxfB1nZWTVXO-qV5oZ3vgzpKH42Q5TLTjFOJM-Z_pjdSU6dBEvHlNjCFF8UGR4vttnfya-Y23ZraJuAvidYwhHfRuZA0Cq6TZB5tQt5mt08GVqv5tddC90hXivriL-sKUj-Ix1zd7bzp18yQRxHnN_LOg-Z_cCYFv4BqMFaX_4VuVcp3F2SJeycErYrmH-N2rBmkGpMqa_RGc_R9ClxhiaZPRyBIlS2n3aotU05ntqnInjNr30ux3E9BRaeAKDppZjfSpKJ9lZhIPpUiIch15acYCQLuGHJjO4JUCJRcG2wowPE7026ZQfILqhpLBjAfkfooXEQHIdlZJzT_0ItQNpd2qUTwi9HvWFwZlDLRRjSg_3msDo-Y3MOER47qqfm3m4rISKaRlPLcSRA1luWmyvSsbqQLRAq5yGHcXpCp8FCutEEPL3Yej34BCPlwioUiv6Agu1y0mfQs58HPFTnaXKvNf9m7TyegbOXYO0LbAEVH16MecRW8GjU9wBwgF3Wjt29jyFKYZISVrZiKbBP4d_iQDPmv-DX9Vl1IZGc"},"privateKey":{"kid":"YTPVHLL","kua":1700789914,"data":"K510laiYIkFU\/bEv7LcjlsXAF1+t9RHgFCCstWkfmuFEH3HwhxYq0UWf8Ykx0sL2M9cGmegoxucsTkrpSxpqfNTa2UT4f9cRLGOcnjhuWcE45Qpe4J1W56hwmdGgZiCFapJsLuT\/q04cIzMXIRpdSOt0hU3nivW3KHIS\/Jww1eEeIRomi1N7OkpoGS36MrhVWrHDlffAsuAN1dXsCCnMlNJsu\/gEf3+zpkQUZWZKU41GLpCKMJ\/oiO5vBzqmeR3bcxN6Q\/4XkR41oAAtnM277UptF\/ygi8QRBc4Hiz4KEZjjkrwT6cyLJ0KBtm1ftigTGCxul+i6moDxTrLqmNUp1WhCkTT+Y6HMIrb6D00mDYo08CcsqQerhlUZOaukRwQQvb0JdF8e75QKkTciOWfWcVeRFb\/2Mj2Vtr3HkqS9dqQGcPGeFEame4g1jXc9rNwLF9YqK4wVWxExrBqdibxlMjhKScerfxeNZDQTbzutw+zvrGiG2Y9kz3bCsXuTzmb+9WN6OQINzrfL1yUQlcK7\/x3qX4bDiyGr0uEIYdEzOTAeXxkMXQDl\/LthzFufy3pFQelBHNtHnFEvTK84gBE74pyRQgbZxOlOa7TcsKEeuWWE5DKXPrzyHIS9zeahn4nE2uTyiC85dFzhM9MpG9EifA7dCIkgddo5s+6Fld8nSPR1HfFbPWvvmD+ZzYsHWiPTkxXA80VT60o\/uw\/5q422ETgL96WJU4h43bB6D7EEVfQMpSJRNmg4dxnM8jyrbpAqpzKoVUG2ANOwCAOy2aNgVUEmdCC3HOE\/0YoPavqhalf\/Nu+f\/eyt6RnSE7QYOMPfeb6ntFzC2HTemg43x73pi0whFK40OhhrLCpkV6fU1pmY3qZUtq5pBFJvqcL\/aDMhXlJq4N0mb5ulIMBaNYglsojnrKXpKExVKwHD1DZfnnyZX4g\/Z1bRNtGyG6Vh+KRQuTvwqqZl35pu0vS9AdJKCpT7z6pe8H6kUZHHfRg57VcLWPHfk7cJpF9Q8IcyHqPYvAXTcsmzOGJdTPx\/OTgM40JkmzsaK4fCX5vSpc\/Tr8nt6+hjMmJkk17hAOPd2AzxUA\/+GVfOfrf71tdYX9F2cEUHJsXF1IUyOcuwc654HIGNyTi9G710I3o\/N6psw+Ot7vow++FvIAgnsXmXQXGtnpRwUzQbSlXjXQPvVZLyByMAWgbuPK\/taia\/tJWdfDp8yqXWqb2pEg4Su9cex6NEX8f4guGrJxpMtBxj9pgVUhnKSZOW+\/WWeJXwvOAtp9+\/ewubYkj\/oDBssgNjkIK5csw5rhIns+tuBa+k3AO3xciE0GpX7hemNtNFNQwRt3n\/So8Sbg11pLalQST\/lIbhcyckWMkxBbpqYHw5xiuwKg\/xdswp+e\/yIGljA7YDQoPaWYIossthLSXGubPqPMeF8ZlJjtJfB7G1+oYOVDUkH43yVWyXlzpIjeMCLyI0LQTtHka7Q1lNOtBlTQgVny0Ea2WfI9\/wCluu3jZH36taTyReYV2gnx849vnPhiTvAGt87y270bd3qq5XpVw8nzJqSHNQnr6z6vDLFMrdWaDsYXwTJjuE8rMmzPRbJM7eXRPs4X\/njYvaLcBAvwWXJXCdxSPhtGO7u1znDkxbYYyCo\/4b683x6H2YUF8ZraW9I0oAcEHp3SuOX1im5Cb\/f+S6LeQgefI7Uh7qAjaxrIbC2mRwU6zMw0wmIm0w8IuKyCqm5sBYleMwFjdlkV8jaPXPBTWqzNd+1hxT6DyFV3UUwrQRByjfvqqUzbiC4Gs3h4ULzmHW8Vep4Req6RzSEVwvsKIYrEe65dfg6sxmiGkFaJagoGlDPNq8P\/Ve4m\/S5K7mreXFcFdVlvUYj0kIEIkbxWiLAwrqbroarqdRwIMG2g+tdW984xTax5jo3TX9bltZO9pm6+lNfWOj+KZ2MWg89IDHc6B7deXpPbCcbemYnfoWNXK26Nn00QRR5jq9DfxFMqisQq4jAjC3FXi7jLPjuBg4hB\/BplFClX+ON0sA6HAZVJbZHoaZ+nUUADf590cF7bmZXMDszXaDL9\/BYhcmI7m\/O3mLw7\/89vABAA9ZkqlZcLp3DWlcV3v5f3v8xaCfShHzMZeCLb40035aGdi5TzP8mDwkkd73yk2dB8aWOslbBUJmCfH\/BL4+1HruKUdsveWE9RahzUd1ryqe8iot9RTLqo4+eYcJW6TGGcUVUiRGoVg2V8bJe\/ZlGG1tVgXl8PMsBvj+u83D5PIiBXMZyXlXRXCa\/zL7iBA8ipwMVO9cGoZ2gUATcm6qMa4a9UVo2zEzjUVJa9Fggm\/tT4xmSlSXjw5cq2CvpOxeqrzDZLiuR\/8NQwsO7qzo5siieJOcwP6zxgG66JRd3LQxq8SDJ5Ag2Z7NQdGbqyJu9fT\/SCBLuC2n5jULjQH7waJMB6qZAHpKijkx8r0y\/L\/0vflA5AyqOPLQTjokaEPF2dWIMdbUNkBh1K0mA+q1W27taQZAdK4r7jaHH2uYqWYLl+\/c6WUXrKyOrWn4vfxj3BvHoBkThjZqWjROnJb3\/bOLE9DHYbnPZZPHnPxubJH06EpR9JCenMMt6MLSMZ8x+q+c8sBdQFnAa2cn6KLGBLCYCoMgsR50owacMZK9m8YCtTQnLU+0KcHlNSDNc\/cBj1Ip3AQkQTzKMNYwiyuBEOG7rIGu9icsg6ca8gmG0hS74bzGRc3nHFTJ4olQpw01J42PQl8yBknXM8RFb5yIURouIybQA8YYpZiMxuqv9ZPBdGzZCR5yoCJdjwP+gnIMrD4UPsDKdd86iN8VmQ0SL32wRs5eL4N6LIu5AAcSpwqkTj75VrK0EhnAxFE8IJDgakzKXGnlIwAuhfHpa0MIvaV0bdV7TWmTJS+ZQwi4hw7MrWNdSodmRPYAOD38yK2fx7St7AsOW5Nv6WrfJ8bb9ouijg77yxU+q3qfkPRTmtoskPaLtMaJKKR0qgsnWoc\/RpQPkwsB9Y2HofKSyvMzKHnNEd5Nncxbar7bLW98RQsgHXJ5JU51Vi3G6axoT8pDFQeCvyhk4iOOIxPyPJZocVYessaKhUgnvH3Sn4tJW4BV9JJAJ9AVcDB3yXMYeg5T\/O\/\/7vbqZnLjkDaI2dr7DfJ7WtlBb1JaVv4aPjGDjHPyMdJOhgxufIB9D7NCYNfSzad7EGnAxCDVXyZwFTNjSHQhCJ0zSO1SFNZAidJ5hmuuE+yeK179yq0+ywsqX9SvDxfAMMdmAoK+4L5etX\/2mhIXZMCztyqCBtBYlXYlV8pT7UwCenbL18NLGW2wNHl7BnG2YcJnfbovnGXnK8Z21IAYi0ekf4tO\/leIbc9JLxyUJQN9+ZVlC7l\/Z8PTfgjPRyV14h\/xdV7LdTJTCJyIyBXFAYXG8fk3rtO11FYLSyipGu7KGxxc5RaOuYOWKczJWhLou+0Bekijs3dUuf8Q+NTmvI1BrWWqLbetJjBrlQl0Ggd3dmCeM\/I3G3VfKtm0wqc\/J212vTgwXFcevLJwLG0YSxsgwCCYam8A3VaAz2Nt8U78I23pZh8M5Z6cCGu2\/C\/QbYH3wRDia\/0lC5ed\/ytbFbavHdYk5cjMNrLXZtHSabyI2ofkOEtfHYK+So6CKaaM8nzYAqFZ7In+mHA+TGh6rUmXUhehst2uLi\/Cd7tGdDQFkW3IJniaYZxQk35vvhWg60uYuve5ftQsjuH+5uQQmfWzl\/feE3Fj\/v5CoJKg\/XlMTXLi4ir2UtqCmi1VftDTWjAh4CriPCxvdMUGbL6wmzQ5ePzwRHdWWWSDvPw+AsbRAlDZ050PnVnhoK2YSi4adfTsvBJZvg28ah+6H6r3oli9HphM9Ov6LWJGbtU0mFYY9Cx5TYdVekPqTm7saCz0bdd0cIU+0kbWgLLWUIdZe8ckJSWuJggQ\/R\/0sqI5D3pNLx8f5\/5UeMslzHvJvfTxVZpCgVuLYnilVC9i6LXh2rHBGVUYSPv9CSv2ENTPkfaPeoyBQZbrh84IZZweKRcIEHNCJmL\/yo96XpzDezXGjgg7HLAVH06SbjTsqp8UfuKJ00lOx7HYr3t055hSRnOWwDSoqeo2YcepLmq3qYm+M7ANp1bi+vRErRNf8TcxL0q1euHW8O9NYqGlRopGn8pzW6PyMA0S5vQkw6\/IZQ3RELK1kc7bLuDsm+CeVv02pAojUSGuxCNr+bZ54AON17\/3UjuQASRJrPaAZIkRGzJEHmAcqCidFfG8uoBEJwmPTMAQkvQ+IoYYr+grxPI8U0lGuKgylHVTdgtSMzu6cnZo+dEfzl6MT5mo9sFk0tjj6Gt4WMB2","iv":"Ap4E1WORomGqt0eR","algorithm":{"name":"RSA-OAEP","hash":{"name":"SHA-256"},"modulusLength":4096,"publicExponent":[1,0,1]},"extractable":true,"usages":["decrypt","unwrapKey"]},"dataKey":{"kid":"ixy1t3ntqndxtdr59nny5f9i0iq4qp","kua":1700789916,"data":"lxZXi07FbKJ7GH8JNb27O6VjlH2MA0vA05L68Jf2IB1HwRKhuVjxAwJ\/C50xO3TOqQzBwvvj0RH1DNMLTvq9yOfnoDgs+Q\/0\/0B4a4EXrf8nXwIfcjrLlWF86GdjXZ3JLh1ZNRSYr6X7LgmGtnPaJV0hTCNZbKXIanBcD8KzExE5IkyA9aSnukeGXykOVIbBsFIu3\/b4sOENdhuGIYvfhIwyi1UWqfPxWs+OVNIsphJwTR\/13MHBONQ+axBeC262y0sIGqZAWpS58k95ar7WjnrDKY4P9BpuSC6DNZm6zS50Fjb1caJ1al\/0Z99hGziKbXE+qJiC6aLrABdObMy3L7H2wGgC3TEZ0EHEuGSjM93DGeTJtO9VhvSAlvZ7Wwah\/LkuOrAwjsvea8Dfb5q6eC54JLKgd6NXaW5u1GfMxuRKVTmcfmQfGKY\/rfnlw\/6oKRO4WQumSqfDgGuJ77ogPmXHnZ4E0p0XNdnrya6zt+OGY8ytPz2gicrBgu0E1gDL9d08Q3A7Y2FFA2bgu1zChJo3yLR2JRlArP6jEXNN8WW1ujl6uFqdXWmgt+Tz98Mh1RGXGEDaADF9OssW3790gx4jKyN0lOI51tvnwdu1kKwYTDCH82VYaiuFEk9b3DA6qI3CjaM9vAggHk4T3fkiKOp2pLV1TG1qHME7Yo+qft4=","iv":"k0ypUFfOc+Izf2j6","algorithm":{"name":"AES-GCM","length":256},"extractable":true,"usages":["encrypt","decrypt"]},"updatedAt":1700789916,"createdAt":1700789917,"deletedAt":null},{"uuid":"125n2pakelnjdmxjvk6tqwssdzpz4y","accountId":"YTPVHLL","publicKey":{"alg":"RSA-OAEP-256","e":"AQAB","ext":true,"key_ops":["encrypt","wrapKey"],"kty":"RSA","n":"4xdW-RG4uE3ydSnmb4bBU81t1taLtk1TWolguyey2zsbL2tpBE0uKAhvmKqk0O4Qp4G0TzVLEj7O-a7e9y23g2xDucM-ayvkYbIaaCPoxQJ_1GTmVo76jjueatBORKnbkXMN9VA6lrhHHIsF2TjLLHGvZQKkCwAfbaWGI7bYwBtjSI9QzFWt2u0augktSdjglcYta2jaTokyYXb8WPiAtv8pGAum2Zs9wQ1cQU5r46SeqlVfF4kScCAs8MjoYFU_cCBJHFvpAuDqRVxuFAUxC02dsJaB1WKfS2vd0OQK7HWTHE3Z0ZIRW6mTnxOzAP9YEy4rjWthI1CIKB38hBfTIi9PL9PIvfJnCIUTY23xxVh8a0n2PiMA0kFOTnN5-VYGEwFMy4AMa1eFEj2vzfCuT6zWaa3YF6KbhvkbVgBWx2jy5_TjCFw7JHeqZYhIsw_teaNGvQuLHrixcHx7RkX06xgKdrXFAHhugvVLyBEcX435gXqGXIOrwJnuFYE7C8Iatm1-ErCMGGy5bGdpy3HtzWYOKa7gqiUz4UkuMT3-yyd38Jb0CvSqNT10JwgJpR4l_zSz5nG-NYHz_h_4Mqhx0_JVYDLzlraoz-E4HNSWsP2xtAZV2vwF5po3OgRRR87wbarCbFUjp-tQL6AojCWM65hQvuG98GYKiukNaMMvuHc"},"privateKey":{"kid":"YTPVHLL","kua":1700789914,"data":"Nmar6EgkYGBN7GQBSmmagkwOjjWVoUbnhiEioB0fKdVKR0mmiErMrxMPawjvwse1MTc0HfEP+gDWZNlM0nG0GMIyjGZ+XFCNWTLdMquo5SV\/7q4Ze2bmoq2K\/Iu6pj5KWaDsp7g\/7DuAth1074uqWafRVQuhVtOGRVbE7cOMKrF\/ju9oXu2Vl3D8Nzn7RR1aCoYE7xD8owwmNq4saqlmzFt2fDHlVBK\/ijXtjjAcdpJJ8QamNYAQfkJzjoVsFEjy7cPHz8I9ordsX8WNuWsULy3TY9h5jjwJmpy6HLRXIb6R9SSkvWWWfOHpCZEqr6Ulm3OBd4GPHE53IJ09l52bjM79IhiTozwThYawxIlCDp48cSl8GL8EvdECmkmSh7pZK\/qjkMOKMncvaqe\/sbu1ov9JCyYanp3VeZmMlh9QU1oheAgYuz39m0rkuE1xRQbmOBF6FDEsuPhvzET5TzzRmN2Zde\/S5QXxLdJEiavR6ULjmOx9yAvjltk9vXfdAiRNxFNT1GoGycOY7xMG1pw\/92ZMINkyPhUih6F7k1CSoNOu4tgyS0EBO05kVWAmrf7PLol6RW\/VH3Ti0LvmDtkRVwlDhhpTmtY+qrbjOHNA6qQHk9oOcSPMgDSkRtm9RJ+M0pzKH4\/NbHx5RyttrXVTHgkLS6405AKLcwGkuHxH4zULWkhbDcPG29YvuwbTNFS41gJWPKP9KAcqMdsqyg2ZPttV6cDeOyt44pE7J0wMcE+6YdUkDNmdtlnFuLB\/j+ZMfJhx+CEjKhca8RUMAOdqdn5bpeDLt0vAZO1lrUTSmwqCYl19LSVFPSy3NoK\/R5e6\/BFT0n5fljGtKDSfjOMrhu27FFY6W4gquKQsIZFYxRklXAWY5m\/+7ay85aPxnMoZiAF2RxtxE3SkKjgx8sDAihDXQKigI0lDoRsY8YuH0MPWN1kznA2+9umZO1wWnPhx4JrtHYp2EYZD\/tUSLOVI8K+qAmqw\/Na1zHA9NKP5Xa3\/+6E+aZdWg9xZVHgwTxwTC7S\/ehJqMxGAEUjUEr0LrR\/dM9DYAxnNWjDUcoYEv2dPZZ308kTZbnTDAdv5ttihNSz\/gTFBsxcRmD+b8bPOQcry6hWugCeLLpSOEyH00RyIJXjdQmCgoKBcKKerV1\/wiM8ReKxh39poDdfh5RU6VJVzAsS2eaW3vDto\/9S7ocxD6V0OZ\/SG2kJntwC1Iz6QvwVnW6xW35wTVwttyGBnf6pB+3Fsl2VApaCTJ6CR6GW3rUt9PD9IcFoO5eqrEcvlfj+feVmGXdCHXhZcAB9ov27gD94s+C5kduaKyUXcfWXXlAzwkQTa7i06EWOofH1EiC5A+bwg90pTj9kwa\/V4ZtN7YpjgUnHmqrm\/1EPU3vKyqlxunjEkC+AkAfkNZVCTUDQ7XpAchffJV8haJSkaC3NSaipgwc1ga5v4T6GTxHK9vEbfd6LZondjA35JETsqRhb04pibCdq76OysIfNIX\/Y+iclCgzEu\/8Q\/BDmql\/nTauAUuz0EcR0FNpecYQ41IzAVYmXKphxDwJmvZUAFb7bUm8mwKJ9wytD+Bj0G8dLv7gxNqV789YEf\/FEEUqT0u+DhrutUdBJo\/RY7UWzM721PkRXoaFaSjCVVI0nHe3QiYUjeLZOWjcQVeN+ZaGQT+zl1KjATgsDstNStOfkmwC9dlaE0CKufUkTYmEQcY6WR1zcES77C6KDFpfnBKc4S4XX3tsTiSfDmknDx\/Sxw7Z6NF9700vEZ48oipPydYnnZ63PNz853pOyQRiwFXN6WaD1RkRh6oDK+HEK4qakI\/dIvTDE1aFOX3SlEVBH6\/cLhFmIpnq9oKIiQAf7KxVAgZM15C3S6mofqC3C8o\/bZyvQnx2K1IEY2JxxEt7WufP3VmlWP4JOw72CcvtfbPRR+qIBR1wwnY3pM8zG5B\/OID8H44HYjFpJnYvc5C2umLIr02iXxXUA444EBfpqzuEUMRef\/lDjYzjm2loLE8tSeAhYapsZ0OW19wqVCOZiatl1jWj2KD1DldosvGvecK7v+d2i3byeW1eHZlFs0wQMSM6X24RP8RC9hjoRZEr7ZfJe6bn4Cq0yVC5oT84CoGp7jp7OECEysayEXOo37UyDWFufeiu9HFTixJA\/QYCn4Ize8jJx8SKH3igyjAK1kuLN\/+8T5yh0crgeKH5jcMphJ7\/RKzKTtvoi5VqbbJk9IPezDMJ8ZD+pkI7oAn1zzjm5DEAlTZU580b3uldqNu6X264shzjrLh1IIAe4XruNPKhPtFOCybxShiXRiaNiprz5s\/ZW5cVjnEreOFotVqja0VVeMkda9OqhmHnOmZrWLs5rQOWavos3V24ceK\/YpU0FGJP4eKSQxElRWyk3BgSnnfcGBfjG0A5a+ZFH6lQgs6U7Gd3zZ1jH+ff+kyJmbMgCH97BJxBIQwfaX8NDIoJwO9D49TrI4E4AzxCclL2m\/jk5DqKEzp2QGftBHWEUi91+nJ5Hq52uE6XnHAXH0DcLIKtDmiL\/hFATeCSLz6i3iCOvBOjIL1wfcvmN4HZ\/dCO8wK2V7rty81gX6eHnxiETn8zGct0DTq6TqAhzcNFUt0DrnOs8Ho+fbMICLNKjSDYGlrikWWbLMMekZzTAtyC+Rx81D8SuPDfqNdWaDhDdTOGcPwLslh1kGTvlTM8ss2UgjOk\/vV1+uV7Sol6n\/vM82SQxjXgrdHyg1BPbs1luaJSE5OOhxaGqbgjpem08vQF52B1JVq8igR+im3vZKKPjPTb6J0zQUoolsMVmn0igeRUXHTgxTJCl\/89\/tZTl3J\/Im4FdJrashCI+kpYa\/anM8UuOvrfGnIymA5SaBzuFD\/3o8wYhnPRMVmsEZKgkVfy2h8lFEClh8\/Uv3ZmXmy2yPrx2JZStGY4DES0Wm11mrXLYMyVy5guFOxB2+5zeQYcHKouQaI0L7Zb1H49c40TCy1An\/7vroap5FhK6m4LacofN8x+kfGbC2PEL\/IJrwwlvpcEF84mlVNltrjQ49VrRj74GW22KicX6uTeTz37nZsiCXK3Oe0\/J+yEVye+cSJ8rVWiKIDwozBYHGk7Soinvh5+VmNKOnoHKyVl62T1QugiUHWJ4j0oIbR0qT214DwvUSPppvstd14XR5c0OTxKVczkLdrhRJbCOCQcl7KOt3uBzGZj7bZbIabeX7rXOJUG89rexBKP\/BLTb8gEqQ5zpnEuINQzfzOYYxMFPr6UJqUK36lS+47lt7AuFg3lFcmKmkHBGmRRPhVMa9wTzXKNQ7LYLIkBHD9syfNC+kv\/pa1VKkrY2cqLUa7wDkfYoz+pt3RbhUslKfOhvf2NF3A4BaFM9sbAYeqYmwpf\/+j9rrmNHs6OBfzoMHocmFtzA8YR7cDUwr5Qs\/oZr3bsmOyTm953\/hXHgBgR5iK\/lLBlPa\/VNJj8PZSemnSEX0y4FaSMqjvaKmZdK2U5jTvZRmmlljgm+GzJjBDzL\/xHdBMQzB1kxeomKusKvlGmvnjhpKi+bFSMN2KFEeV911UJ+mD1s5dgwfyx8KvovDutryXBz23vna9z8rZDhwXeCgroaTNcgjRmk9PK5mdt\/OWUSvZpfycAIkimlX4Y40PvzRXw4hP+6RhyIKHyCYZ\/o74j5h0iaU3EUjTXSPKDGHGARIazhgdvtJKbrYf9jK3rg6VEkUQbkgzGPaHO08YexdmFX5Blortyr2hOXVvVAWpQX8dTtAPJxaty3osr22YQWWl8pmB6jqql6RRjcnUbC9m+\/Jj74bbjDQhuQ29AN00sWw\/sMTLNUoWmRFo2wNVhUXRPtVqGSC28qcEmEKslilyYCUfprbOaOXFWPdEv+uVhQ89Ys+J\/9bSIsI+InzOS8mT4uY\/4DNxG6jWfmw08BqLAHAhMsGJ56cugkLvbz0BVHwxJKmDjYMnYRRm9QH5XE+RCM3SlIg88gNa62tFRstVQF84Y7Fillsawcy6i+6K2g4NN8XqZapnPekmpDai2g6ERWpeJGau6VXt5LhJNNCqlQ5nXs2r7dEX285eAgOEHkFIJvx9OB9sajGuLHK7Z4AVJHKClqlCPOAotVFE+n+h+8lBevRYQ31ABAji\/RuUrzZJqs2f4ti+8U8L1ur\/PDT71P7KH\/bD1ZVsDQB6U9AClsv9hv8Y9go5aNcjYptitZwTR7smKNn1+mfmanY2XlZcB\/sDBL5hMnba8o\/OBFMuaLywXgIMsYCl31JisEBJefdBRwycI2MvXgoS77PPT99l3sZJn\/F1Rv9WkZBUvO5WgQ0QctkmA5YgRBVa0VKnXoLXcpFyNR5","iv":"RIgx7G10hwrBJaBU","algorithm":{"name":"RSA-OAEP","hash":{"name":"SHA-256"},"modulusLength":4096,"publicExponent":[1,0,1]},"extractable":true,"usages":["decrypt","unwrapKey"]},"dataKey":{"kid":"125n2pakelnjdmxjvk6tqwssdzpz4y","kua":1700789919,"data":"NI++DhCqJaNClyYoV2DQAsUXkGwmfovtFCOIdp\/2rjTGNddUXAqV6iQ0cqQNHga64Z0vwrIXRIHj+G+MjcACT9Vb3sRU62mVA9bnZe3KoZ9vVE+tQ5yOuo9ob1RkjNJBI0t9npdhCyU8WuVaYjDHssy3o\/tGPfd3EAI\/9oJBKEs+8cY6SN0y4IetByiHmk81\/xV8Q8vT7f\/A66TofNmhxg2fpkx8Q+Y\/Zk3oOL2WF8F\/SOKEyt\/MHstQ5TNDLDOku7Ft1JkhyGXuNIDlPQvuaCemTsEreeDUaylOZrCuLUzrkyOUOFieoeCwvWzToyZwJhT17lYOnDpjr8bNEAIy5b0wilvEAbz392V6Ade\/qLKtKLUf\/sqaG4FTgMS4IeE4bHqY\/Vl\/5q5gbLoX+JrygdDYUIVur9XlNWxuqp+V\/QHUwDAVWmOTPJV9aAmk\/UMo1l39yjAtw3iXiVjH+0YuTrQbqUQJ1O+jxD2bu+PZ7Rzgut1Otguc+aTFCP+P2wnvvOJfP37mA+Bz2+vFtiObVwt12608nUl3EAvz2hWEsqM6ueb1FChxwZHVlexuH52+Y44FCjM0x24qh26a6Skljo1ugUCSvC\/6GdJTyNUuDhUbVKBA3LHbdh8SFaQ91bSahrUXXLf80LpgS5XdzWpE8ovsbGZLofY4cnDbXSJb82o=","iv":"WhTqNQvCD1iwLR74","algorithm":{"name":"AES-GCM","length":256},"extractable":true,"usages":["encrypt","decrypt"]},"updatedAt":1700789919,"createdAt":1700789919,"deletedAt":null}],"publicAccounts":[],"shares":[],"cards":[]}
```

When adding a new item, we send

```
POST /item HTTP/2
Host: api.multipassword.com
Content-Length: 1586
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5tdWx0aXBhc3N3b3JkLmNvbS9hdXRoZW50aWNhdGlvbi9zMi9mMHZUT2lPb1ZHTVpsRGY4bnQwMjdocU52RnFsSDZXWCIsImlhdCI6MTcwMDc5MDcyMiwiZXhwIjoxNzAwNzkwNzgyLCJuYmYiOjE3MDA3OTA3MjIsImp0aSI6ImJhMk9XcW5USVp1SWk4bHkiLCJzdWIiOiIxMjcwNzMwMDYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.e6pdIfMcQ6YibaPqQYQCoEH_hwn5mPHli2vUbN5yoys
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json;charset=UTF-8
X-Socket-Id: 816660012.598028334
Accept: application/json, text/plain, */*
X-Client: MultiPassword/0.93.36
Sec-Ch-Ua-Platform: "Windows"
Origin: https://my.multipassword.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://my.multipassword.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"items":[{"uuid":"ifjcvhkn3c686g9t58mnieckq7m58h","vaultUuid":"4buqnzpin4mmx1vuvefquoql919ikz","template":"login","data":{"kua":1700789919,"kid":"125n2pakelnjdmxjvk6tqwssdzpz4y","algorithm":{"name":"AES-GCM","length":256},"iv":"GAfmSsj2EoToCjeg","data":"YBEf7Svax/mhq3h/MVvvmE/khAtu4k6uxinjvJbRA3drY+NeQJpdftFQvK0M1qaIcAG0eee2K88NCmJ5lb8y+VQfWhPvXQYf5z9SSRa99kkXN6OHao/VZeVasZHg07YlGbhBUcHXKlAeQ/AkIhZ3HeFwy3Ig/9ui0B1WueKS6Z3TJup/3h7swoJgM+GMTpqPtEeDPbUgjqjvNWcQrtCZCuhv000uIQLzfzW9jpGCrB2st0ml94wutWAWoe8/4ehAb+RxrjNX3sXbOdeMzZFBOXeelZEksIhaZAi18tQBOK8xlg1F85fQi7lv+HvjjQkWY+3ffd7U9lTMhMG7Ud+T+3UxJ4Zo8TmmqPzAEC9Vg1r99+ZJeVCqQJ2yWGZ/qlDXQRWCgvoFDAdTgxJA0Ej9W4/B/x8N0MgtRXXx0yYU98qJQF4YndIkqhOuE5K0m0LLuNKKBKcvkRrm7T5ZYWjMPLUrJQHRcxYsv2YuBqKL5SlwKF76J/0Looh6rixi8bPlXxegofYIAPpmN2GOd1AJDm1BuD0dx4egKJXVbTx5HXTb8qh2e2JOBwEwfOjP4I9TNcuayQLN4/hFSXPukFUZZ8RexpjpRbiDUqsZL6UjxBG7RTksw5euDkpI0IHI78ay8DrBXXh9WyRK21TbyssdgxI5RcMGcJ15ghFl5ABaGxhIlvpT8SIhFAtnrs8C8xOa72w3zUCzPzf+d90jgdkJp2wdavmybAeGuA5p3EQ5SpAgT4U3iD6yQX1ncf1ruygV9MdFpuLv4W9Mfhom/IeVxtK0i6xjDcbI4MkvbOdkfyluIZMdC44nPeAsp+OXR5UBPKyvHokHdlidzIZMDakf5Xww6eXwqEZazCRueJMkJhm7DewtMO0to2CZlsEAln4Al599P5M52OQ2mRPDjhMDCTnII8sBBR46Bm6HDHqtkcao22M5Bg//VL1DASCs2ntaN0ieI9PrmCDHkb/avF7/d6XAjHiyLglhXFEtj5fdHFpTWwPBdCAPWg75m7ENbhKv7xDFkjGoE371DgOoaOCApnAF4AopBq9TM1bsVHOtYecDVVI9WktCjmz5ewGxNUXLC9T5Ha9xyAfTxB2qx37uXpgm//m1TBznXLs4ylMeUtH8XfNPq6pIsufqBQvC4K/LLseJ8yIvFOhveeIjVF53XwwQqvYZxsVi63L05tZmr1cQxlSdWUr176cyxN2vXZV7EW19//RYAzfosoUMdewr1RhU5GBpBeg="},"synced":false,"createdAt":1700790679,"updatedAt":1700790719,"deletedAt":null}]}
```

and receive

```
HTTP/2 200 OK
Server: nginx
Date: Fri, 24 Nov 2023 01:52:03 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://my.multipassword.com
Vary: Origin
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: Content-Length
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

{"ifjcvhkn3c686g9t58mnieckq7m58h":true}
```

When the multipassword search for icon, it send

```
POST /icons HTTP/2
Host: api.multipassword.com
Content-Length: 28
Sec-Ch-Ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5tdWx0aXBhc3N3b3JkLmNvbS9hdXRoZW50aWNhdGlvbi9zMi9mMHZUT2lPb1ZHTVpsRGY4bnQwMjdocU52RnFsSDZXWCIsImlhdCI6MTcwMDc5MDcyMiwiZXhwIjoxNzAwNzkwNzgyLCJuYmYiOjE3MDA3OTA3MjIsImp0aSI6ImJhMk9XcW5USVp1SWk4bHkiLCJzdWIiOiIxMjcwNzMwMDYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.e6pdIfMcQ6YibaPqQYQCoEH_hwn5mPHli2vUbN5yoys
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/json;charset=UTF-8
X-Socket-Id: 816660012.598028334
Accept: application/json, text/plain, */*
X-Client: MultiPassword/0.93.36
Sec-Ch-Ua-Platform: "Windows"
Origin: https://my.multipassword.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://my.multipassword.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7

{"domains":["www.test.com"]}
```

and receive

```
HTTP/2 200 OK
Server: nginx
Date: Fri, 24 Nov 2023 01:52:04 GMT
Content-Type: application/json
Vary: Accept-Encoding
Cache-Control: no-cache, private
Access-Control-Allow-Origin: https://my.multipassword.com
Vary: Origin
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: Content-Length
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

{"missing":["www.test.com"]}
```
