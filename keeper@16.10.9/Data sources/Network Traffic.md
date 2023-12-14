## Capturing Network Traffic

When logging in, I send

```
POST /api/rest/authentication/validate_auth_hash HTTP/2
Host: keepersecurity.com
Content-Length: 325
Cache-Control: max-age=0
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/octet-stream
Accept: */*
Origin: https://keepersecurity.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: same-origin
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6


},e³Lé_Nvû®F64'%þ~;j(DXã?¦íu¦¤þè`g4¶§bçjãNËÐd.é[FEì&
O_Ü´ ñÚ+¼0ø
```

```
POST /api/rest/login/account_summary HTTP/2
Host: keepersecurity.com
Content-Length: 259
Cache-Control: max-age=0
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/octet-stream
Accept: */*
Origin: https://keepersecurity.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: same-origin
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6


}á2	o_³Û]ØÇZå^ûÖÓr^Ü­ó?ñëFÚ43CºXsý!ÒwZxÊ,ýmú
?õ%¬üªAÞ"Oç²Èê¥ÎA"ý4àTÅ¦Ü#
°ã·ÑË
```

```
POST /emergency_check HTTP/2
Host: keepersecurity.com
Cookie: _gcl_au=1.1.1409905038.1698656772; ab.storage.deviceId.ccdc16c5-051b-4142-afd8-e6457f93555e=%7B%22g%22%3A%22707b7184-2ef3-7834-03ff-d0baf28de5bf%22%2C%22c%22%3A1698656772347%2C%22l%22%3A1698656772347%7D; cebs=1; _gid=GA1.2.1166282612.1698656773; _ce.clock_event=1; _ce.clock_data=177%2C60.29.153.1%2C1%2C67bfd2dfdba18bd2d40c958d4aa22109; _fbp=fb.1.1698672573357.1976318755; _ga=GA1.1.1878649615.1698656772; _uetsid=927b48a0770311ee8d98f19b791d15b1; _uetvid=927b6b50770311eeb3c9c7a9530798b6; ab.storage.sessionId.ccdc16c5-051b-4142-afd8-e6457f93555e=%7B%22g%22%3A%22d6b6fa05-c0c7-a29d-c32e-95aadfa40fb8%22%2C%22e%22%3A1698718884861%2C%22c%22%3A1698717084861%2C%22l%22%3A1698717084861%7D; _ga_R0DVXVR46D=GS1.1.1698717081.4.1.1698717085.56.0.0; cebsp_=10; _ce.s=v~29074219b5bc45b3c591e0577a55773b3e720a52~lcw~1698717093168~vpv~0~v11.fhb~1698656874205~v11.lhb~1698669093358~v11.cs~407397~v11.s~04a06300-7790-11ee-9378-0b9c98749868~lcw~1698717093168
Content-Length: 238
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Accept: */*
Origin: https://keepersecurity.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

email=example%40example.com&session_token=FXhd82D0EUBTV4HJYoZrvIn0zrOZX3f97JUDhlfixKjI8jFZhP3VVatDfdCcGkk6IwPUAUgauTW8O_qt5Q5k0hZuyDPObOYFcgg_Sqv0LV-XQok&language=zh&country=CN&force_show_popup=&format=json&pid=242&v=16.10.7&uid=webapp
```

```
POST /api/rest/authentication/login_from_existing_session_token HTTP/2
Host: keepersecurity.com
Cookie: _gcl_au=1.1.1409905038.1698656772; ab.storage.deviceId.ccdc16c5-051b-4142-afd8-e6457f93555e=%7B%22g%22%3A%22707b7184-2ef3-7834-03ff-d0baf28de5bf%22%2C%22c%22%3A1698656772347%2C%22l%22%3A1698656772347%7D; cebs=1; _gid=GA1.2.1166282612.1698656773; _ce.clock_event=1; _ce.clock_data=177%2C60.29.153.1%2C1%2C67bfd2dfdba18bd2d40c958d4aa22109; _fbp=fb.1.1698672573357.1976318755; _ga=GA1.1.1878649615.1698656772; _uetsid=927b48a0770311ee8d98f19b791d15b1; _uetvid=927b6b50770311eeb3c9c7a9530798b6; ab.storage.sessionId.ccdc16c5-051b-4142-afd8-e6457f93555e=%7B%22g%22%3A%22d6b6fa05-c0c7-a29d-c32e-95aadfa40fb8%22%2C%22e%22%3A1698718884861%2C%22c%22%3A1698717084861%2C%22l%22%3A1698717084861%7D; _ga_R0DVXVR46D=GS1.1.1698717081.4.1.1698717085.56.0.0; cebsp_=10; _ce.s=v~29074219b5bc45b3c591e0577a55773b3e720a52~lcw~1698717093168~vpv~0~v11.fhb~1698656874205~v11.lhb~1698669093358~v11.cs~407397~v11.s~04a06300-7790-11ee-9378-0b9c98749868~lcw~1698717093168
Content-Length: 338
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/octet-stream
Accept: */*
Origin: chrome-extension://lfochlioelphaglamdcakfjemolpichk
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6


}³!ú¾?è¡5I­òvù§Ï=s«²)zXPë5Þ-ÐRß&%ñ
```

```
POST /api/rest/login/account_summary HTTP/2
Host: keepersecurity.com
Cookie: _gcl_au=1.1.1409905038.1698656772; ab.storage.deviceId.ccdc16c5-051b-4142-afd8-e6457f93555e=%7B%22g%22%3A%22707b7184-2ef3-7834-03ff-d0baf28de5bf%22%2C%22c%22%3A1698656772347%2C%22l%22%3A1698656772347%7D; cebs=1; _gid=GA1.2.1166282612.1698656773; _ce.clock_event=1; _ce.clock_data=177%2C60.29.153.1%2C1%2C67bfd2dfdba18bd2d40c958d4aa22109; _fbp=fb.1.1698672573357.1976318755; _ga=GA1.1.1878649615.1698656772; _uetsid=927b48a0770311ee8d98f19b791d15b1; _uetvid=927b6b50770311eeb3c9c7a9530798b6; ab.storage.sessionId.ccdc16c5-051b-4142-afd8-e6457f93555e=%7B%22g%22%3A%22d6b6fa05-c0c7-a29d-c32e-95aadfa40fb8%22%2C%22e%22%3A1698718884861%2C%22c%22%3A1698717084861%2C%22l%22%3A1698717084861%7D; _ga_R0DVXVR46D=GS1.1.1698717081.4.1.1698717085.56.0.0; cebsp_=10; _ce.s=v~29074219b5bc45b3c591e0577a55773b3e720a52~lcw~1698717093168~vpv~0~v11.fhb~1698656874205~v11.lhb~1698669093358~v11.cs~407397~v11.s~04a06300-7790-11ee-9378-0b9c98749868~lcw~1698717093168
Content-Length: 255
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/octet-stream
Accept: */*
Origin: chrome-extension://lfochlioelphaglamdcakfjemolpichk
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6


}³!ú¾?è¡5I­òvù§Ï=s«²)zXPë5Þ-ÐRß&%ñ
```

```
POST /api/rest/vault/get_record_types HTTP/2
Host: keepersecurity.com
Content-Length: 263
Cache-Control: max-age=0
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/octet-stream
Accept: */*
Origin: https://keepersecurity.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: same-origin
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6


}üPg²4;¡uïäÕ¦Ú¿êy­xðx¿g¦
```

Finding:

1. It is not anonymous.
1. Keeper have additional communication protection.
