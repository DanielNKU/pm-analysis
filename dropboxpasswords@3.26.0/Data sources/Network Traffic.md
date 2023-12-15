## Capturing Network Traffic

When we unlock the password vault, we send

```
POST /2/passwords/list_folders HTTP/2
Host: api.dropboxapi.com
Content-Length: 0
Dropbox-Api-Path-Root: {".tag":"namespace_id","namespace_id":"4628947777"}
Authorization: Bearer T8Ur63ZsDHcAAAAAAAAAAbGI9I9xC_l_of2R7cVhe58FgcAh_UIJdh6DcY0TNJ5A
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Accept: */*
Origin: chrome-extension://bmhejbnmpamgfnomlahkonpanlkcfabg
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7


```

and receive

```
HTTP/2 200 OK
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: Accept-Ranges, Content-Range, ETag, Dropbox-API-Result
Cache-Control: no-cache
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Server-Response-Time: 139
Content-Type: application/json
Accept-Encoding: identity,gzip
Date: Wed, 22 Nov 2023 03:20:11 GMT
Server: envoy
Vary: Accept-Encoding
X-Dropbox-Response-Origin: far_remote
X-Dropbox-Request-Id: f42b9cb94767421085c65eb01b6e5b35

{"result": {"entries": [{".tag": "file", "name": "5992E65D-5C54-484A-A40B-876CB8442D11.json", "path_lower": "/5992e65d-5c54-484a-a40b-876cb8442d11.json", "path_display": "/5992E65D-5C54-484A-A40B-876CB8442D11.json", "parent_shared_folder_id": "4628947777", "id": "id:Lg-BNeP38BAAAAAAAAAACw", "client_modified": "2023-11-09T06:13:42Z", "server_modified": "2023-11-09T06:13:42Z", "rev": "01609b21b056d250000000113e82341", "size": 515, "sharing_info": {"read_only": false, "parent_shared_folder_id": "4628947777", "modified_by": "dbid:AABRF-4esvAGwVfWNJWfJNH1vXarqNa4oHM", "is_parent_shared_folder_read_only": false, "last_modifier": {"account_id": "dbid:AABRF-4esvAGwVfWNJWfJNH1vXarqNa4oHM", "user_id": "1982056385", "display_name": "\u9038\u8d6b \u6bb5", "email": "example@example.com", "email_verified": true}}, "is_downloadable": true, "content_hash": "9f3bf7f23e17a1807aed547a9dfd34a77be05eb0554f7c754771a10cc866b857", "size_display": "515 bytes", "icon": "page_white_code", "mime_type": "application/octet-stream", "is_in_vault_folder": false, "is_in_family_shared_folder": false}, {".tag": "file", "name": "D22D1A10-D587-490D-8861-1D9CF477CA1B.json", "path_lower": "/d22d1a10-d587-490d-8861-1d9cf477ca1b.json", "path_display": "/D22D1A10-D587-490D-8861-1D9CF477CA1B.json", "parent_shared_folder_id": "4628947777", "id": "id:Lg-BNeP38BAAAAAAAAAADA", "client_modified": "2023-11-22T03:12:49Z", "server_modified": "2023-11-22T03:12:49Z", "rev": "0160ab518105f0f0000000113e82341", "size": 3285, "sharing_info": {"read_only": false, "parent_shared_folder_id": "4628947777", "modified_by": "dbid:AABRF-4esvAGwVfWNJWfJNH1vXarqNa4oHM", "is_parent_shared_folder_read_only": false, "last_modifier": {"account_id": "dbid:AABRF-4esvAGwVfWNJWfJNH1vXarqNa4oHM", "user_id": "1982056385", "display_name": "\u9038\u8d6b \u6bb5", "email": "example@example.com", "email_verified": true}}, "is_downloadable": true, "content_hash": "2d72ba72c9a1c1c12ccd0d437edfce59656b9c2f2839189be6f3a50286db6ef1", "size_display": "3.2 KB", "icon": "page_white_code", "mime_type": "application/octet-stream", "is_in_vault_folder": false, "is_in_family_shared_folder": false}], "cursor": "AAHyTHtJled7VbintI-AHA6zs6xm61Ig8_L22wwF6XLnEZo2r5IDDOJ2dSBlzs9mv-Ettyg3KdN4DNmI0GIFV5euvpVguDxgywLbpDm_7h7GnwKh8qHtAqpmvdQNNDT8GAV9S3cu9iNaYKZovhejt2sVX7KuMINpRxdvK1klIVrzhDCeuHfu5jR-Mv-addaqqv0", "has_more": false}, "sharing_status": {".tag": "success", "success": []}}
```

When adding new item, we send

```
POST /2/passwords/upload HTTP/1.1
Host: content.dropboxapi.com
Content-Length: 3645
Dropbox-Api-Arg: {"path":"/D22D1A10-D587-490D-8861-1D9CF477CA1B.json","mode":{".tag":"update","update":"0160ab518105f0f0000000113e82341"}}
Dropbox-Api-Path-Root: {".tag":"namespace_id","namespace_id":"4628947777"}
Authorization: Bearer T8Ur63ZsDHcAAAAAAAAAAbGI9I9xC_l_of2R7cVhe58FgcAh_UIJdh6DcY0TNJ5A
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
Content-Type: application/octet-stream
Accept: */*
Origin: chrome-extension://bmhejbnmpamgfnomlahkonpanlkcfabg
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: close

{"encryptedBundle":{"base64EncryptedData":"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","base64Nonce":"3k/Sk0y9AA0wS40Ogld0g2RHLUQnAtp9"},"type":"password","version":1,"identifier":"D22D1A10-D587-490D-8861-1D9CF477CA1B"}
```

and receive

```
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: Accept-Ranges, Content-Range, ETag, Dropbox-API-Result
Cache-Control: no-cache
X-Content-Type-Options: nosniff
X-Server-Response-Time: 629
Content-Type: application/json
Accept-Encoding: identity,gzip
Date: Wed, 22 Nov 2023 03:29:57 GMT
Server: envoy
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Robots-Tag: noindex, nofollow, noimageindex
Vary: Accept-Encoding
X-Dropbox-Response-Origin: far_remote
X-Dropbox-Request-Id: 201f6e15b02b457f9668eb1b509bf344
Connection: close
Content-Length: 1042

{"name": "D22D1A10-D587-490D-8861-1D9CF477CA1B.json", "path_lower": "/d22d1a10-d587-490d-8861-1d9cf477ca1b.json", "path_display": "/D22D1A10-D587-490D-8861-1D9CF477CA1B.json", "parent_shared_folder_id": "4628947777", "id": "id:Lg-BNeP38BAAAAAAAAAADA", "client_modified": "2023-11-22T03:29:57Z", "server_modified": "2023-11-22T03:29:57Z", "rev": "0160ab5555c97c60000000113e82341", "size": 3645, "sharing_info": {"read_only": false, "parent_shared_folder_id": "4628947777", "modified_by": "dbid:AABRF-4esvAGwVfWNJWfJNH1vXarqNa4oHM", "is_parent_shared_folder_read_only": false, "last_modifier": {"account_id": "dbid:AABRF-4esvAGwVfWNJWfJNH1vXarqNa4oHM", "user_id": "1982056385", "display_name": "\u9038\u8d6b \u6bb5", "email": "example@example.com", "email_verified": true}}, "is_downloadable": true, "content_hash": "3df0039bccd2aacfb2956a0595d15406f5550790254f484ceff5562396f61bd1", "size_display": "3.6 KB", "icon": "page_white_code", "mime_type": "application/octet-stream", "is_in_vault_folder": false, "is_in_family_shared_folder": false}
```
