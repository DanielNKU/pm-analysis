## Searching Local Storage File

Windows: ~\AppData\Local\1Password\1password.sqlite

```
{"account_state":"A","account_template_version":3473409,"account_type":"I","account_version":8,"base_attachment_url":"https://f.1passwordusercontent.com/","base_avatar_url":"https://a.1passwordusercontent.com/","sign_in_provider":{"type":"sk","secret_key":"155b44247a2129123743773f365032304e38325c35370d293c4d74395e3d336c202c0d202c2a2964obfus"},"enc_srp_x":{"cty":"b5+jwk+json","kid":"srpxkey","enc":"A256GCM","iv":"mInOXPwN138fVm92","data":"yqqWVmFW2Mcm7_HPk0YheuRCUqHDndpgRclL7r6ey6tHsFsHxPurRy63nGg2CZuT"},"sign_in_url":"https://my.1password.com/","team_avatar":"","team_name":"example","updated_at":1694239739,"created_at":1669603568,"user_avatar":"","user_email":"example@example.com","user_name":"example","user_keyset_version":4,"user_uuid":"AFQMMVSAKRFO3MZT43BOPMU6N4","user_version":3,"user_preferences":112,"user_created_at":1669603568,"user_state":"A","acl":68719476486,"team_member_policies":{"block_file_storage":false,"block_passkey_authenticator":false},"device_uuid":"h2acvvujle7turbuixzyxijozu","billing_status":"A","storage_capacity":1024,"storage_used":1,"account_template_language":"en-US","enc_local_validation_key":{"cty":"b5+jwk+json","kid":"core-setting-authkey-wrapper","enc":"A256GCM","iv":"lHBclEUxB5LZpXOe","data":"Rd-dycQG1MJO3FAv5iTv1mx9NfPaf2FkvbmzpF35bolkA-CHPk5n4sho89Tzn4Qm"},"user_type":"R"}
```

Finding:

1. The user email and username is leaked.
1. The encryption setting is in plaintext.
