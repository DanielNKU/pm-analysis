## Searching Local Data File

```
users: {
authendication: {
key:'OQDa4BwMQWVc\x2FdfFwR2kQVZXD\x2BElyXx9qlDfIBF9pxpz5d0fZgBf0HrCkQ\x3D\x3D',
logtype:'PBKDF2_AES',
iteration:310000,
salt:'8d9e93e25f6fc56cf60ea3d0a0a4713d',
name:'example',
date:'October 31, 2023 07:23 AM',
orgkey:'qQOUgNgNQWU12tUQDjhJ44hSeO97Qb0JEEQWdpYvcBIdCpRvwm9JAg\x3D\x3D'
},
records: {"eor":false,"queryString":{"loadType":"MANUAL","sortby":"ASC","page":1,"type":"json","sidx":1},"secrets":[{"changepassword":false,"notes":"4AH5H6wMQWU\x3D","isshared":"YES","customcolumn":"eyJjdXN0b21jb2wiOltdfQ\x3D\x3D","accounttype":"231060000000000015","secretid":"231060000000010026","description":"","classification":"E","ownerdetails":{"USERNAME":"example","EMAIL":"example\x40example.com"},"userid":"231060000000010004","istrashed":false,"secretData":"\x7B\x22password\x22\x3A\x223wFpSKwMQWVyU3NgzfEH9q0a\x2Fj4Jaw\x3D\x3D\x22,\x22file\x22\x3A\x223wG\x2BlqwMQWU\x3D\x22,\x22username\x22\x3A\x223gGdCqwMQWXgDIR3yR8\x3D\x22\x7D","autologon":false,"tags":"","isfavourites":false,"secreturl":"","policyid":"231060000000000063","autosubmit":true,"onetimeacess":false,"creationtime":1698761900855,"secretname":"daniel","sharingtype":"Yet\x20to\x20implement"}]},
resourceType: ""			
} 
```

```
Vault_dump_data = {
users: {
authendication: {
key:'OQDa4BwMQWVc\x2FdfFwR2kQVZXD\x2BElyXx9qlDfIBF9pxpz5d0fZgBf0HrCkQ\x3D\x3D',
logtype:'PBKDF2_AES',
iteration:310000,
salt:'8d9e93e25f6fc56cf60ea3d0a0a4713d',
name:'example',
date:'October 31, 2023 07:39 AM',
orgkey:'twOgIq0RQWW8Pn6R044RBsRIKINM4epjgFZDQaNGFjiuSnQ66L\x2FR5w\x3D\x3D'
},
records: {"eor":false,"queryString":{"loadType":"MANUAL","sortby":"ASC","page":1,"type":"json","sidx":1},"secrets":[{"changepassword":false,"notes":"4AH5H6wMQWU\x3D","isshared":"YES","customcolumn":"eyJjdXN0b21jb2wiOltdfQ\x3D\x3D","accounttype":"231060000000000015","secretid":"231060000000010026","description":"","classification":"E","ownerdetails":{"USERNAME":"example","EMAIL":"example\x40example.com"},"userid":"231060000000010004","istrashed":false,"secretData":"\x7B\x22password\x22\x3A\x223wFpSKwMQWVyU3NgzfEH9q0a\x2Fj4Jaw\x3D\x3D\x22,\x22file\x22\x3A\x223wG\x2BlqwMQWU\x3D\x22,\x22username\x22\x3A\x223gGdCqwMQWXgDIR3yR8\x3D\x22\x7D","autologon":false,"tags":"","isfavourites":false,"secreturl":"","policyid":"231060000000000063","autosubmit":true,"onetimeacess":false,"creationtime":1698761900855,"secretname":"daniel","sharingtype":"Yet\x20to\x20implement"},{"changepassword":false,"notes":"BALd0qYRQWU\x3D","isshared":"YES","customcolumn":"eyJjdXN0b21jb2wiOltdfQ\x3D\x3D","accounttype":"231060000000000015","secretid":"231060000000010046","description":"","classification":"E","ownerdetails":{"USERNAME":"example","EMAIL":"example\x40example.com"},"userid":"231060000000010004","istrashed":false,"secretData":"\x7B\x22password\x22\x3A\x22\x2FQGDiaYRQWVQI6\x2FIrQ\x3D\x3D\x22,\x22file\x22\x3A\x22\x2FQENCaYRQWU\x3D\x22,\x22username\x22\x3A\x22\x2FQHZ1qYRQWUI48r9jg\x3D\x3D\x22\x7D","autologon":false,"tags":"","isfavourites":false,"secreturl":"http\x3A\x2F\x2Fwww.test1.com","policyid":"231060000000000063","autosubmit":true,"onetimeacess":false,"creationtime":1698763174884,"secretname":"test1","sharingtype":"Yet\x20to\x20implement","secretmultipleurl":["http\x3A\x2F\x2Fwww.test1.com"]}]},
resourceType: ""			
} 
```

Finding:

1. The URL is in plain.
2. It is not anonymous.