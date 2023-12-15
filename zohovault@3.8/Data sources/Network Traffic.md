## Capturing Network Traffic

When adding a item, I send

```
POST /api/rest/json/v1/secrets HTTP/2
Host: vault.zoho.com
Cookie: ZohoMarkRef="https://www.zoho.com/vault/"; zohocares-_zldt=b440bae3-f8b7-4751-b75b-0e5fbc0d168e-1; zohocares-_zldp=YfEOFpfOAG8bbORyDToWL09IHIs0R%2BVQJ%2F8%2BlIUzoHwNgtjyMu4Okb6v7bemuaNpZc2%2F0VCpEEs%3D; zohocares-_uuid=42da1656-e1bd-4456-bc64-f2dd5220e23c_c874; zpsfa_sixYsSO=1698760903934psf0.016245741953041737; cookie-uid="42da1656-e1bd-4456-bc64-f2dd5220e23c_c874"; zabHMBucket=dyA53JM; zpsfa_IMmGArQ=1698761709407psf0.9387089156750552; zpsfa_LB5MNoB=1698761709415psf0.11914713505958163; zpsfa_C9FrjiF=1698761709418psf0.27872559708526623; zpsfa_a9897d94c8854a9fa0bc4a1603fe25dd=1698761709420psf0.1838989916031859; zpsfa_5R5fH4z=1698761709422psf0.08367137462002594; zpsfa_CPunHgf=1698761709424psf0.33023135191979747; zpsfa_smsbyo9=1698761709426psf0.7984971118081909; zpsfa_ZeUYNpU=1698761709428psf0.0060179627623959675; zpsfa_5ZLJte4=1698761709431psf0.2400492805785257; zpsfa_0SlYvBq=1698761709432psf0.6120738078884915; zpsfa_7tSbibp=1698761709434psf0.5572713475258557; zpsfa_C4ksNPn=1698761709436psf0.8135832386018866; zpsfa_YkmW6Ny=1698761709438psf0.6267433206110524; zpsfa_RWbDtC3=1698761709440psf0.3705151723305693; zpsfa_PwUPkp5=1698761709442psf0.32821197332931407; zpsfa_Kj6313P=1698761709443psf0.5301899870649225; zpsfa_KV9tkFS=1698761709446psf0.33922288262681977; zpsfa_3MHgc0J=1698761709448psf0.7992091213818207; zpsfa_Jqda63o=1698761709449psf0.22273405228193788; _iamadt=bc94e05605634357b21bda534dde43a84ec2c34cd1d0189f2e36787d988749b6ca6d267483272c1cfc93a77324c06245010e7301732863075bb15b0e6883b725; _iambdt=20ee7f4c66f1fa10bf62afb3738bfc8cc8d7bed8015a9283d39ba8db6636b91960ac42ff516222c40e1b0e6ce050c46d85d0bb087409059eeecb1ed279109576; dcl_pfx=us; dcl_bd=zoho.com; is_pfx=false; 75b67c9f58=b641d48a2e833b85ecd69c300515fb75; zvcsr=2924e049df49a23004406e38444817da92350bbbd67c5c0f608332838593a954eb145377e493b55a15d61e28abaf2784c836ccc2d9cb8d5e4ab10c0c439e9abc; _zcsr_tmp=2924e049df49a23004406e38444817da92350bbbd67c5c0f608332838593a954eb145377e493b55a15d61e28abaf2784c836ccc2d9cb8d5e4ab10c0c439e9abc; wms-tkp-token=835430492-b4f0c911-88719de9bf8bb6652b2672b0a8c73ae1; orgsharing=true; samesite=none; ZohoMarkSrc="bing:vault|bing:vault|bing:vault"; zps-tgr-dts=sc%3D1-expAppOnNewSession%3D%5B%5D-pc%3D12-sesst%3D1698760902643; JSESSIONID=D0ED2D509ADEB1574055123632C5A570
Content-Length: 764
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Version: 1075
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Accept: */*
X-Requested-With: XMLHttpRequest
Sec-Ch-Ua-Platform: "Windows"
Origin: https://vault.zoho.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://vault.zoho.com/app
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

INPUT_DATA=%7B%22secretname%22%3A%22test2%22%2C%22description%22%3A%22%22%2C%22classification%22%3A%22E%22%2C%22isshared%22%3A%22YES%22%2C%22logo%22%3A%22%22%2C%22tags%22%3A%22%22%2C%22policyid%22%3A%22231060000000000063%22%2C%22compliance%22%3A0%2C%22secrettypeid%22%3A%22231060000000000015%22%2C%22secretdata%22%3A%7B%22username%22%3A%22wgFawbuoQWUCK%2F7GAA%3D%3D%22%2C%22password%22%3A%22wwEo77uoQWVE64b%2FUA%3D%3D%22%2C%22file%22%3A%22wwFY%2BbuoQWU%3D%22%7D%2C%22customcolumnnew%22%3A%22eyJjdXN0b21jb2wiOltdfQ%3D%3D%22%2C%22secreturls%22%3A%5B%22https%3A%2F%2Fwww.test2.com%22%5D%2C%22securenote%22%3A%22ywFJCruoQWU%3D%22%7D&zvrcsr=2924e049df49a23004406e38444817da92350bbbd67c5c0f608332838593a954eb145377e493b55a15d61e28abaf2784c836ccc2d9cb8d5e4ab10c0c439e9abc
```

and receive

```
HTTP/2 200 OK
Server: ZGS
Date: Wed, 01 Nov 2023 01:24:19 GMT
Content-Type: application/json;charset=UTF-8
X-Content-Type-Options: nosniff
X-Xss-Protection: 1
Cache-Control: private,no-cache,no-store,max-age=0,must-revalidate
Pragma: no-cache
Expires: Thu, 01 Jan 1970 00:00:00 GMT
X-Frame-Options: DENY
Vary: accept-encoding
Strict-Transport-Security: max-age=63072000

{"operation":{"result":{"message":"","status":"Success"},"Details":{"changepassword":false,"notes":"ywFJCruoQWU=","isshared":"YES","customcolumn":"eyJjdXN0b21jb2wiOltdfQ==","accounttype":"231060000000000015","secretid":"231060000000010064","description":"","passwordmodifiedtime":1698801859057,"classification":"E","ownerdetails":{"USERNAME":"example","EMAIL":"example@example.com"},"userid":"231060000000010004","secretData":"{\"password\":\"wwEo77uoQWVE64b/UA==\",\"file\":\"wwFY+buoQWU=\",\"username\":\"wgFawbuoQWUCK/7GAA==\"}","autologon":false,"tags":"","POLICYID":"231060000000000063","isfavourites":false,"secreturl":"https://www.test2.com","policyid":"231060000000000063","autosubmit":true,"onetimeacess":false,"sharinglevel":10,"creationtime":1698801859057,"secretname":"test2","secretmultipleurl":["https://www.test2.com"]},"name":"ADD_SECRET"}}
```

```
HTTP/2 200 OK
Server: ZGS
Date: Wed, 01 Nov 2023 01:24:21 GMT
Content-Type: application/json;charset=UTF-8
X-Content-Type-Options: nosniff
X-Xss-Protection: 1
Cache-Control: private,no-cache,no-store,max-age=0,must-revalidate
Pragma: no-cache
Expires: Thu, 01 Jan 1970 00:00:00 GMT
X-Frame-Options: DENY
Vary: accept-encoding
Strict-Transport-Security: max-age=63072000

{"operation":{"result":{"message":"","status":"Success"},"Details":[{"changepassword":false,"notes":"4AH5H6wMQWU=","isshared":"YES","customcolumn":"eyJjdXN0b21jb2wiOltdfQ==","accounttype":"231060000000000015","secretid":"231060000000010026","description":"","classification":"E","ownerdetails":{"USERNAME":"example","EMAIL":"example@example.com"},"userid":"231060000000010004","istrashed":false,"secretData":"{\"password\":\"3wFpSKwMQWVyU3NgzfEH9q0a/j4Jaw==\",\"file\":\"3wG+lqwMQWU=\",\"username\":\"3gGdCqwMQWXgDIR3yR8=\"}","autologon":false,"tags":"","isfavourites":false,"secreturl":"","policyid":"231060000000000063","autosubmit":true,"onetimeacess":false,"creationtime":1698761900855,"secretname":"daniel","sharingtype":"Yet to implement"},{"changepassword":false,"notes":"BALd0qYRQWU=","isshared":"YES","customcolumn":"eyJjdXN0b21jb2wiOltdfQ==","accounttype":"231060000000000015","secretid":"231060000000010046","description":"","classification":"E","ownerdetails":{"USERNAME":"example","EMAIL":"example@example.com"},"userid":"231060000000010004","istrashed":false,"secretData":"{\"password\":\"/QGDiaYRQWVQI6/IrQ==\",\"file\":\"/QENCaYRQWU=\",\"username\":\"/QHZ1qYRQWUI48r9jg==\"}","autologon":false,"tags":"","isfavourites":false,"secreturl":"http://www.test1.com","policyid":"231060000000000063","autosubmit":true,"onetimeacess":false,"creationtime":1698763174884,"secretname":"test1","sharingtype":"Yet to implement","secretmultipleurl":["http://www.test1.com"]},{"changepassword":false,"notes":"ywFJCruoQWU=","isshared":"YES","customcolumn":"eyJjdXN0b21jb2wiOltdfQ==","accounttype":"231060000000000015","secretid":"231060000000010064","description":"","classification":"E","ownerdetails":{"USERNAME":"example","EMAIL":"example@example.com"},"userid":"231060000000010004","istrashed":false,"secretData":"{\"password\":\"wwEo77uoQWVE64b/UA==\",\"file\":\"wwFY+buoQWU=\",\"username\":\"wgFawbuoQWUCK/7GAA==\"}","autologon":false,"tags":"","isfavourites":false,"secreturl":"https://www.test2.com","policyid":"231060000000000063","autosubmit":true,"onetimeacess":false,"creationtime":1698801859057,"secretname":"test2","sharingtype":"Yet to implement","secretmultipleurl":["https://www.test2.com"]}],"meta":{"secretcount":3},"name":"GET_SECRETS"}}
```

When logging in, I send

```
POST /login.do HTTP/2
Host: vault.zoho.com
Cookie: ZohoMarkRef="https://www.zoho.com/vault/"; zohocares-_zldt=b440bae3-f8b7-4751-b75b-0e5fbc0d168e-1; zohocares-_zldp=YfEOFpfOAG8bbORyDToWL09IHIs0R%2BVQJ%2F8%2BlIUzoHwNgtjyMu4Okb6v7bemuaNpZc2%2F0VCpEEs%3D; zohocares-_uuid=42da1656-e1bd-4456-bc64-f2dd5220e23c_c874; zpsfa_sixYsSO=1698760903934psf0.016245741953041737; cookie-uid="42da1656-e1bd-4456-bc64-f2dd5220e23c_c874"; zabHMBucket=dyA53JM; zpsfa_IMmGArQ=1698761709407psf0.9387089156750552; zpsfa_LB5MNoB=1698761709415psf0.11914713505958163; zpsfa_C9FrjiF=1698761709418psf0.27872559708526623; zpsfa_a9897d94c8854a9fa0bc4a1603fe25dd=1698761709420psf0.1838989916031859; zpsfa_5R5fH4z=1698761709422psf0.08367137462002594; zpsfa_CPunHgf=1698761709424psf0.33023135191979747; zpsfa_smsbyo9=1698761709426psf0.7984971118081909; zpsfa_ZeUYNpU=1698761709428psf0.0060179627623959675; zpsfa_5ZLJte4=1698761709431psf0.2400492805785257; zpsfa_0SlYvBq=1698761709432psf0.6120738078884915; zpsfa_7tSbibp=1698761709434psf0.5572713475258557; zpsfa_C4ksNPn=1698761709436psf0.8135832386018866; zpsfa_YkmW6Ny=1698761709438psf0.6267433206110524; zpsfa_RWbDtC3=1698761709440psf0.3705151723305693; zpsfa_PwUPkp5=1698761709442psf0.32821197332931407; zpsfa_Kj6313P=1698761709443psf0.5301899870649225; zpsfa_KV9tkFS=1698761709446psf0.33922288262681977; zpsfa_3MHgc0J=1698761709448psf0.7992091213818207; zpsfa_Jqda63o=1698761709449psf0.22273405228193788; _iamadt=bc94e05605634357b21bda534dde43a84ec2c34cd1d0189f2e36787d988749b6ca6d267483272c1cfc93a77324c06245010e7301732863075bb15b0e6883b725; _iambdt=20ee7f4c66f1fa10bf62afb3738bfc8cc8d7bed8015a9283d39ba8db6636b91960ac42ff516222c40e1b0e6ce050c46d85d0bb087409059eeecb1ed279109576; dcl_pfx=us; dcl_bd=zoho.com; is_pfx=false; 75b67c9f58=b641d48a2e833b85ecd69c300515fb75; zvcsr=2924e049df49a23004406e38444817da92350bbbd67c5c0f608332838593a954eb145377e493b55a15d61e28abaf2784c836ccc2d9cb8d5e4ab10c0c439e9abc; _zcsr_tmp=2924e049df49a23004406e38444817da92350bbbd67c5c0f608332838593a954eb145377e493b55a15d61e28abaf2784c836ccc2d9cb8d5e4ab10c0c439e9abc; wms-tkp-token=835430492-b4f0c911-88719de9bf8bb6652b2672b0a8c73ae1; orgsharing=true; samesite=none; ZohoMarkSrc="bing:vault|bing:vault|bing:vault"; zps-tgr-dts=sc%3D1-expAppOnNewSession%3D%5B%5D-pc%3D12-sesst%3D1698760902643; JSESSIONID=D0ED2D509ADEB1574055123632C5A570
Content-Length: 135
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Version: 1075
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Accept: */*
X-Requested-With: XMLHttpRequest
Sec-Ch-Ua-Platform: "Windows"
Origin: https://vault.zoho.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://vault.zoho.com/app
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

zvrcsr=2924e049df49a23004406e38444817da92350bbbd67c5c0f608332838593a954eb145377e493b55a15d61e28abaf2784c836ccc2d9cb8d5e4ab10c0c439e9abc
```

and receive

```
HTTP/2 200 OK
Server: ZGS
Date: Wed, 01 Nov 2023 01:46:42 GMT
Content-Type: text/html;charset=UTF-8
Content-Length: 111
X-Content-Type-Options: nosniff
X-Xss-Protection: 1
Cache-Control: private,no-cache,no-store,max-age=0,must-revalidate
Pragma: no-cache
Expires: Thu, 01 Jan 1970 00:00:00 GMT
X-Frame-Options: DENY
Strict-Transport-Security: max-age=63072000

{"logtype":"PBKDF2_AES","string":"OQDa4BwMQWVc/dfFwR2kQVZXD+ElyXx9qlDfIBF9pxpz5d0fZgBf0HrCkQ==","user":"valid"}
```

send

```
POST /api/rest/json/v1/user/login HTTP/2
Host: vault.zoho.com
Cookie: ZohoMarkRef="https://www.zoho.com/vault/"; zohocares-_zldt=b440bae3-f8b7-4751-b75b-0e5fbc0d168e-1; zohocares-_zldp=YfEOFpfOAG8bbORyDToWL09IHIs0R%2BVQJ%2F8%2BlIUzoHwNgtjyMu4Okb6v7bemuaNpZc2%2F0VCpEEs%3D; zohocares-_uuid=42da1656-e1bd-4456-bc64-f2dd5220e23c_c874; zpsfa_sixYsSO=1698760903934psf0.016245741953041737; cookie-uid="42da1656-e1bd-4456-bc64-f2dd5220e23c_c874"; zabHMBucket=dyA53JM; zpsfa_IMmGArQ=1698761709407psf0.9387089156750552; zpsfa_LB5MNoB=1698761709415psf0.11914713505958163; zpsfa_C9FrjiF=1698761709418psf0.27872559708526623; zpsfa_a9897d94c8854a9fa0bc4a1603fe25dd=1698761709420psf0.1838989916031859; zpsfa_5R5fH4z=1698761709422psf0.08367137462002594; zpsfa_CPunHgf=1698761709424psf0.33023135191979747; zpsfa_smsbyo9=1698761709426psf0.7984971118081909; zpsfa_ZeUYNpU=1698761709428psf0.0060179627623959675; zpsfa_5ZLJte4=1698761709431psf0.2400492805785257; zpsfa_0SlYvBq=1698761709432psf0.6120738078884915; zpsfa_7tSbibp=1698761709434psf0.5572713475258557; zpsfa_C4ksNPn=1698761709436psf0.8135832386018866; zpsfa_YkmW6Ny=1698761709438psf0.6267433206110524; zpsfa_RWbDtC3=1698761709440psf0.3705151723305693; zpsfa_PwUPkp5=1698761709442psf0.32821197332931407; zpsfa_Kj6313P=1698761709443psf0.5301899870649225; zpsfa_KV9tkFS=1698761709446psf0.33922288262681977; zpsfa_3MHgc0J=1698761709448psf0.7992091213818207; zpsfa_Jqda63o=1698761709449psf0.22273405228193788; _iamadt=bc94e05605634357b21bda534dde43a84ec2c34cd1d0189f2e36787d988749b6ca6d267483272c1cfc93a77324c06245010e7301732863075bb15b0e6883b725; _iambdt=20ee7f4c66f1fa10bf62afb3738bfc8cc8d7bed8015a9283d39ba8db6636b91960ac42ff516222c40e1b0e6ce050c46d85d0bb087409059eeecb1ed279109576; dcl_pfx=us; dcl_bd=zoho.com; is_pfx=false; 75b67c9f58=b641d48a2e833b85ecd69c300515fb75; zvcsr=2924e049df49a23004406e38444817da92350bbbd67c5c0f608332838593a954eb145377e493b55a15d61e28abaf2784c836ccc2d9cb8d5e4ab10c0c439e9abc; _zcsr_tmp=2924e049df49a23004406e38444817da92350bbbd67c5c0f608332838593a954eb145377e493b55a15d61e28abaf2784c836ccc2d9cb8d5e4ab10c0c439e9abc; wms-tkp-token=835430492-b4f0c911-88719de9bf8bb6652b2672b0a8c73ae1; orgsharing=true; samesite=none; ZohoMarkSrc="bing:vault|bing:vault|bing:vault"; zps-tgr-dts=sc%3D1-expAppOnNewSession%3D%5B%5D-pc%3D12-sesst%3D1698760902643; JSESSIONID=D0ED2D509ADEB1574055123632C5A570
Content-Length: 147
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Version: 1075
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Accept: */*
X-Requested-With: XMLHttpRequest
Sec-Ch-Ua-Platform: "Windows"
Origin: https://vault.zoho.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://vault.zoho.com/app
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

status=true&zvrcsr=2924e049df49a23004406e38444817da92350bbbd67c5c0f608332838593a954eb145377e493b55a15d61e28abaf2784c836ccc2d9cb8d5e4ab10c0c439e9abc
```

```
HTTP/2 200 OK
Server: ZGS
Date: Wed, 01 Nov 2023 01:46:42 GMT
Content-Type: application/json;charset=UTF-8
X-Content-Type-Options: nosniff
X-Xss-Protection: 1
Cache-Control: private,no-cache,no-store,max-age=0,must-revalidate
Pragma: no-cache
Expires: Thu, 01 Jan 1970 00:00:00 GMT
X-Frame-Options: DENY
Vary: accept-encoding
Strict-Transport-Security: max-age=63072000

{"operation":{"result":{"message":"","status":"Success"},"Details":{},"name":"login"}}
```

Finding:

1. The URL is in plain.
1. It is not anonymous.
1. It uses hash to authenticate.