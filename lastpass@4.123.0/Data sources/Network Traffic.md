## Capturing Network Traffic

When checking the item. send the packet

```
POST /lastpass/api.php HTTP/1.1
Host: lastpass.com
Cookie: sessonly=0; lp_anonymousid=d2093003-d634-4d05-9b20-7254bb027368; lang=en_US; origin_v2=utm_source=&utm_content=&mcomb=&referral=www.bing.com&Created_At=1698151601&GA_id=; __lmi_ma=userreferrer=www.bing.com; _ga=GA1.2.421782915.1698151606; chop_id=LastPass_1698151606960_63; _cs_c=0; _gid=GA1.2.667781064.1698152703; _mkto_trk_commerce=trustarc; _cs_id=df4b783d-a695-a8cd-d004-d6c106ef5a41.1698151609.3.1698196823.1698196823.1.1732315609820; _abck=23920A2389E2D3EEA04617E7163A40E3~0~YAAQT+gtF3EfhDSLAQAAjlxtZAonmKnIc5AAER+qzA81kHVGD5ZNspVSpBs0hjL7uvwTRNeyFbmoOe0vbsPTHPUPARtOwLsHMWvSdlkjUsukSU7pITpGWHBWzwQ0erDsTvzxONLI0CIRsVFp9f3DvtYCf5WUS4wxk8l7cRKxHvYLKYvUj/fomMeHMWxdxN3s12meM3KSgGCIZEi821cvsuI1cXnBJubhafTv+cGu2ac62DWuXf3dhfiHx+XHSAr6dyTBI7B2ub60fdhkVIWV6dPHBHxf6AhG6bPG50ndZn8SM1ikokqI5gFSOSgunXfy/4wuZM+TWczfgYLGiRcjh76TP+xrmPO8yigbLQ/3pT82GrF9xDMCktea4NnPQITlKYCVow86ZINLIgJZuF8f3txd8i9WwweumgQK~-1~-1~-1; bm_sz=A019E575BD906105F0AE1B75F21D120E~YAAQT+gtF3MfhDSLAQAAjlxtZBXQpxA/il/nUaCkX5VFy7d5FxgipebVHvzx48Cz2e28zOkAadlAGVXYredJN7Qb1jWXlA2RoMmGhEUTdnKeIAenOEdHqwOii3TeYUbVFHWXFzJtYLFpd3RDnj+SmEHj6ceSxQAYSf9qKmC32QlHOMSSz91j5463jQFEzTb92M67InkBP0OBiR5nOPVnSzwWhzTmC1Jl6EvZVqWQJQFX8lq37mwpy08yuXm3JbQpInr7ZiP07Eve9dkOTU9BihH+hAihTgcPqa6Zb0EntpOBHnH7MA==~3490361~4538950; iid=; PHPSESSID=3j8fvstsgd9b8nkksqa4bphu7gr
Content-Length: 183
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Accept: application/json, text/javascript, */*; q=0.01
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
X-Requested-With: XMLHttpRequest
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.57
Sec-Ch-Ua-Platform: "Windows"
Origin: https://lastpass.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://lastpass.com/?ac=1&lpnorefresh=1
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: close

cmd=lpimprove&event=vault_item_click&method=web&lpversion=&action_type=Edit&item_type=Password&os_type=Windows+OS&browser_type=Unknown+Browser&browser-language=zh-CN&ui-language=en-US
```

and receive

```
HTTP/2 200 OK
Content-Type: text/xml;charset=UTF-8
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: default-src 'self' https://admin.lastpass.com; img-src 'self' https://lastpass.com data: blob: https://analytics.twitter.com/i/adsct; object-src 'self' https://*.googlevideo.com; connect-src 'self' https://lastpass.com wss://*.lastpass.com https://5399020466.log.optimizely.com https://www.lastpass.com https://pollserver.lastpass.com https://loglogin.lastpass.com https://accounts.lastpass.com https://login.microsoftonline.com https://graph.microsoft.com https://login.microsoftonline.us https://graph.microsoft.us https://*.okta.com https://*.oktapreview.com https://*.okta-emea.com https://*.pingone.com https://*.pingone.ca https://*.pingone.eu https://*.pingone.asia https://accounts.google.com https://www.googleapis.com https://*.onelogin.com https://openidconnect.googleapis.com https://content.googleapis.com; style-src 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com; plugin-types application/x-invalid-type; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com https://www.youtube.com https://*.ytimg.com https://*.optimizely.com https://lp-cdn.lastpass.com; font-src data: 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com; frame-src 'self' https://ssl.gstatic.com https://www.google.com https://www.youtube.com https://cdn.lmiutil.com
P3p: CP="NON DSP COR CUR OUR LEG PHY COM"
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Pragma: no-cache
Cache-Control: no-cache,private,no-store,max-age=0,s-maxage=0,must-revalidate,proxy-revalidate
Server: LastPass
Strict-Transport-Security: max-age=86400000
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Vary: Accept-Encoding
Date: Wed, 25 Oct 2023 03:24:38 GMT
Content-Length: 59
Set-Cookie: PHPSESSID=3j8fvstsgd9b8nkksqa4bphu7gr; Expires=Tue, 07 Nov 2023 03:24:37 +0000; Max-Age=1123200; Path=/; SameSite=None; Secure; HttpOnly
Set-Cookie: _abck=23920A2389E2D3EEA04617E7163A40E3~-1~YAAQT+gtF8c9hTSLAQAAbN3cZArN8nBZ2lVxr8HXDZXiV+umyauhg+b0c6PGxQjHTTbZ+GHeZJPBa9Ic48AHr8eEpwtCbcNASmytYItJe5nxIWE48fykL/rNZNWfncruX4D4tYUMCisHR9lnbeBheFXDXqVo7vcXQ/cwl2swm5CC4IrYWhVanFCHkgfFbzyc6SJfBjOoNdsEFUSTKqlhzxgZWNJVQeK1xwdsctEnrSnb/j8/q3vsvmt3sq3JFClqLgeYob1ojWX+LdMRFoMEW4LYWmtIAfNA3ExzWsXfpeuwqRlR+G30mPcw/ffnGzSQqOeMBPZWa/tMnIKWgwyfCLBx0JEcM02FuHKNs5ukcYv0REPXejcviYXynDLEPaIeXZyposdprRY57/HZqI6yDGlX61D64OhHW9md~0~-1~-1; Domain=.lastpass.com; Path=/; Expires=Thu, 24 Oct 2024 03:24:38 GMT; Max-Age=31536000; Secure

<?xml version="1.0" encoding="UTF-8"?>
<lastpass rc="OK"/>
```

When logging in, send the packet

```
POST /login.php HTTP/2
Host: lastpass.com
Cookie: sessonly=0; lp_anonymousid=d2093003-d634-4d05-9b20-7254bb027368; lang=en_US; origin_v2=utm_source=&utm_content=&mcomb=&referral=www.bing.com&Created_At=1698151601&GA_id=; __lmi_ma=userreferrer=www.bing.com; _ga=GA1.2.421782915.1698151606; chop_id=LastPass_1698151606960_63; _cs_c=0; _gid=GA1.2.667781064.1698152703; _mkto_trk_commerce=trustarc; _cs_id=df4b783d-a695-a8cd-d004-d6c106ef5a41.1698151609.3.1698196823.1698196823.1.1732315609820; bm_sz=A019E575BD906105F0AE1B75F21D120E~YAAQT+gtF3MfhDSLAQAAjlxtZBXQpxA/il/nUaCkX5VFy7d5FxgipebVHvzx48Cz2e28zOkAadlAGVXYredJN7Qb1jWXlA2RoMmGhEUTdnKeIAenOEdHqwOii3TeYUbVFHWXFzJtYLFpd3RDnj+SmEHj6ceSxQAYSf9qKmC32QlHOMSSz91j5463jQFEzTb92M67InkBP0OBiR5nOPVnSzwWhzTmC1Jl6EvZVqWQJQFX8lq37mwpy08yuXm3JbQpInr7ZiP07Eve9dkOTU9BihH+hAihTgcPqa6Zb0EntpOBHnH7MA==~3490361~4538950; iid=; ak_bmsc=3F11884ABA04482E7176A8B926616960~000000000000000000000000000000~YAAQT+gtF/M9hTSLAQAA4APdZBVD1qtYnTC2TxvRkb7pi9rPJo5ffiagNQOXPbTeRb28VmHgUbenu3v7EXIQfQPYqQGVPMPZoHxTztOMx7hj/nTty/4KM8+5yGArfo6ooC1K9yNlXvj3sO9k7yOFlfcoRR+P0SY07eb+sAIYRUTSB607Jb9iDT7Im852VJ4tRoVzapRT/iqqlfO/9/LTvxhyF8PGTV9WJXMfJEutm79VahR9+gtgWHeKaRUG4UTseQcPX07Uo22VdNIE5fiPH8kmii2YnHcA0+igtbeY+IF6aKRStAv6G8jSF/EinhDh8UJUkDeDFgQoJt3YAwiLTY8xHdr/85Y/b4Zz8n7DoLUIUZS2sbCEsMx1ZAG0C+zbhbOIkui/IyD4PxU=; _abck=23920A2389E2D3EEA04617E7163A40E3~0~YAAQT+gtF0JBhTSLAQAAgdveZAoxqGpTJqP1molqWAw/m6pFlYHfDuLNrj8mpzpYC9AwaZiQlt127J/ot0gLhnRJZspqRmL4s0eru9gBxSnxtYasfaJDNyiGvYKTXnC2xrcjhKQm6gIKFpTYZJmN3J0J7iOMYxW3KpWi7zsi1NQPV5i3UEY8XWETL2xJCBTx/kN+qY7Ay0XsyCh6YzPBnKJ1mv/vLMntUJvVthdvmdD83G9X/7YAP/bghFItSH+P8T9KopZA7bXk23VmfDZ6h/CJxw4JZ8tl80XA6bLGxx2BH5kbbPfUVJY5QHtUq/Lp0MQLf+xSn6J9U8Ijfae0lJexSuinEprX2UTs35V/YcBYbYLhTqkp3FDmQt7bqvl/LSuRjnAz2iyIYQ4+Og9L7Sfd+p1EHgzdmmMv~-1~-1~-1; PHPSESSID=76e0fb7c7c0957fd95e6a28c52c27dcd; bm_sv=ADCD6E551F2187345025DEBB1CA24DA7~YAAQT+gtF0FGhTSLAQAA+mfhZBUH7ny1zVKBfrAk4XwWRVTo6LF4ow6EJ3bmic7h+85UcJU7Bt78Eyb3fxXFXdB21LBmfHjDuZauv3wiTLNLDg6+vzRArI8JQ3tMuO9z1uDwGNW72ZWdAPeYIAO0hIvNSb36oP17p3YodyOsUdp8FUtrEh8XHBi8evCklT/t/7QRHE3XbORLBuuZKjdjQAApEhV+I1esRMMeuDOP8mN35xtgK2yohEjFiS7MgsBBHTCa~1
Content-Length: 450
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.57
Content-Type: application/x-www-form-urlencoded
Accept: */*
Origin: https://lastpass.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://lastpass.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

hash=2045f97c73c2cceb3fc79dd2b63178533cab8c173083064a208451a57a27d5f8&xml=1&method=web&username=example%40example.com&encrypted_username=NsAm0wWv3Bk3HLHv4aD%2BTvpl3cmU19i6AVC3w%2FMI%2Fvo%3D&iterations=600000&email=example%40example.com&outofbandsupported=1&uuid=8b8053745a8780a31ad9580dfb661582a516ccfb95c5fb457c1b7b0fc46d437&deviceId=&sesameotp=&otp=&lcid=&domain=&lostpwotphash=3981741ca7629435321235d1419868904da4cf728231f607fd56c33d0e777917
```

receive packet

```
HTTP/2 200 OK
Content-Type: text/xml; charset=UTF-8
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: default-src 'self' https://admin.lastpass.com; img-src 'self' https://lastpass.com data: blob: https://analytics.twitter.com/i/adsct; object-src 'self' https://*.googlevideo.com; connect-src 'self' https://lastpass.com wss://*.lastpass.com https://5399020466.log.optimizely.com https://www.lastpass.com https://pollserver.lastpass.com https://loglogin.lastpass.com https://accounts.lastpass.com https://login.microsoftonline.com https://graph.microsoft.com https://login.microsoftonline.us https://graph.microsoft.us https://*.okta.com https://*.oktapreview.com https://*.okta-emea.com https://*.pingone.com https://*.pingone.ca https://*.pingone.eu https://*.pingone.asia https://accounts.google.com https://www.googleapis.com https://*.onelogin.com https://openidconnect.googleapis.com https://content.googleapis.com; style-src 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com; plugin-types application/x-invalid-type; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com https://www.youtube.com https://*.ytimg.com https://*.optimizely.com https://lp-cdn.lastpass.com; font-src data: 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com; frame-src 'self' https://ssl.gstatic.com https://www.google.com https://www.youtube.com https://cdn.lmiutil.com
P3p: CP="NON DSP COR CUR OUR LEG PHY COM"
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
Server: LastPass
Strict-Transport-Security: max-age=86400000
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Vary: origin
Vary: Accept-Encoding
Date: Sun, 29 Oct 2023 14:00:03 GMT
Content-Length: 4563
Set-Cookie: lang=en_US; expires=Mon, 28-Oct-2024 14:00:02 GMT; Max-Age=31536000; path=/; domain=lastpass.com; secure
Set-Cookie: PHPSESSID=f119nj6mbtrgsp1h8n98r2qgnfg; expires=Sat, 11-Nov-2023 14:00:03 GMT; Max-Age=1123200; path=/; secure; HttpOnly; SameSite=None
Set-Cookie: session_valid_until=1698588003; expires=Sun, 29-Oct-2023 14:00:03 GMT; Max-Age=0; secure

<?xml version="1.0" encoding="UTF-8"?><response><ok  sitesver="" formfillver="" bigicon="5617" bigiconenabled="1"  uid="534217871"
language="en-US"
sessionid="f119nj6mbtrgsp1h8n98r2qgnfg"
disableoffline="0"
pushserver="https://lp-push-server-1782.lastpass.com/ws/bbb752362000a89b226d16e414dad12e09f5422eadb9e2409e9709b0ded2b454 main"
new_save_site="1"
first_time_login="0"
infield_enabled="1"
cross_device_reminder_enabled="1"
ziggy="1"
web_client_toolbar="1"
better_generate_password_enabled="1"
omar_ia="1"
family_shared_folders_enabled="1"
family_legacy_shared_folders_enabled="1"
try_families_enabled="1"
premium_sharing_restricted="1"
emergency_access_restricted="1"
is_families_trial_started=""
is_premium_trial="1"
predates_families="0"
seen_vault_post_families="1"
privatekeyenchash="0e52fd2b5e568b4cba33385e8f130793896b68c3a9ba729a7faef3135709763f"
pbkdf2_iterations_migration="1"
migrated="0"
migration_opt_in="1"
omar_migration_opt_in="1"
show_trial_expiration="1"
license_expiration="1"
premium_trial_days_left="25"
autofill_https_test="1"
nopassword_integration_enabled="1"
cloud_apps_filter_in_vault="1"
redux_vault_data="1"
password_strength_hardening="1"
react_login_ext="1"
save_a_site_otp="1"
site_feedback="1"
gift_menu_item_button=""
omar_vault_migration="0"
binaryless_attachment_handling="1"
security_dashboard="1"
security_dashboard_paywall="1"
calculate_security_score_on_be="1"
send_security_score="1"
account_version_tracking=""
blob_version_set="1"
web_client_fill="1"
web_client_save="1"
pendo_jwt_token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aXNpdG9yIjp7ImlkIjoiNTM0MjE3ODcxIiwibGFuZ3VhZ2UiOiJlbi1VUyJ9LCJub25jZSI6IlF6cVZHNXJBbkxPOHhJN3V5R0d0dm41Y3N6dEVGMWhPIn0.D186I44XIX6r2JYn5dHYDLGIBGPDypi734dqyy8Bvs8"
pendo_signing_key_name="logm-logm-ZDMe6"
show_vault_premium_feature_indicator="1"
vault_premium_popups_enabled="1"
new_native_extension_ads_enabled="1"
expired_families_purchase_flow="1"
family_as_a_benefit=""
family_as_a_benefit_welcome_dialog=""
secondary_onboarding="1"
secondary_onboarding_skill_list="InstallBrowserExtension,AddYourFirstPassword,TryAutofill,TourTheVault,StayConnectedAnywhere,AddThreePassword,GenerateStrongPassword,SharePassword,EnableDarkWebMonitoring,AddTenPassword"
app_attribution_tracking="1"
exclude_password="1"
domains_for_automatic_password_exclude=""
password_list_for_password_exclude=""
improve="1"
import_passwords_in_vault="1"
react_save_site_dialog="1"
security_dashboard_for_free_users="1"
disable_password_alerts="0"
enable_fido2="1"
                   yubikeyenabled="0"   
                googleauthenabled="0" microsoftauthenabled="0" outofbandenabled="0"   serverts="1698588003105398"
                iconsversion="18" isadmin="0"
                lpusername="example@example.com" email="example@example.com" loglogins="1"
                client_enc="1" accts_version="33" pwdeckey="bc63b036745e62bd17b393d2487b9028684cc1e4c26b766165cd4c5f109ade74"
                hih="0" genh="0" addh="0"
                seclvl="0" updated_enc="1" login_site_prompt="0"
                edit_site_prompt="0" edit_sn_prompt="0"
                view_pw_prompt="0"
                view_ff_prompt="0"
                switch_identity_prompt="1" switch_f_prompt="0"
                multifactor_reprompt="" multifactor_singlefactor=""
                singlefactortype="" country="CN" model="3"
                banner="0" ratings_prompt="1" reqdversion="1.39"
                pollinterval="-1" logoff_other_ses="0" lostpwotpresult="ok"
                generatedpw="0" pageloadthres="800000" attachversion="0"
                pwresetreqd="0" accountlinkrequired="0" trialduration="30" token="X0k3bkRVNElFdml2dTB6Ykgt6Zxv0s/lAGWhBOkdJ+K6m1UQGhJg+i7/sL6tq7CeKDs="
                companyadmin="0" iterations="600000" showcredmon="0"
                adlogin="0" note_title="" note_text=""
                note_button="" note_url=""  
                lastchallengets="0" 
                
                 disablepwalerts="0" 
                 emailverified=""
                
                
                 prefdata=""
                 pbt="1" 
                
                
                
                logloginsvr="loglogin.lastpass.com" pollserver="pollserver.lastpass.com"
                do_totp="1"
                
                newsettings_enabled = '0' 
                show_extension_popup = '0' 
                 is_legacy_premium="0"
                
                
                
                account_type="Premium_Trial"
                
                /></response>
```

Logging in another time, we find that the hash does not change

```
POST /login.php HTTP/2
Host: lastpass.com
Cookie: sessonly=0; lp_anonymousid=d2093003-d634-4d05-9b20-7254bb027368; lang=en_US; origin_v2=utm_source=&utm_content=&mcomb=&referral=www.bing.com&Created_At=1698151601&GA_id=; __lmi_ma=userreferrer=www.bing.com; _ga=GA1.2.421782915.1698151606; chop_id=LastPass_1698151606960_63; _cs_c=0; _gid=GA1.2.667781064.1698152703; _mkto_trk_commerce=trustarc; _cs_id=df4b783d-a695-a8cd-d004-d6c106ef5a41.1698151609.3.1698196823.1698196823.1.1732315609820; bm_sz=A019E575BD906105F0AE1B75F21D120E~YAAQT+gtF3MfhDSLAQAAjlxtZBXQpxA/il/nUaCkX5VFy7d5FxgipebVHvzx48Cz2e28zOkAadlAGVXYredJN7Qb1jWXlA2RoMmGhEUTdnKeIAenOEdHqwOii3TeYUbVFHWXFzJtYLFpd3RDnj+SmEHj6ceSxQAYSf9qKmC32QlHOMSSz91j5463jQFEzTb92M67InkBP0OBiR5nOPVnSzwWhzTmC1Jl6EvZVqWQJQFX8lq37mwpy08yuXm3JbQpInr7ZiP07Eve9dkOTU9BihH+hAihTgcPqa6Zb0EntpOBHnH7MA==~3490361~4538950; iid=; ak_bmsc=3F11884ABA04482E7176A8B926616960~000000000000000000000000000000~YAAQT+gtF/M9hTSLAQAA4APdZBVD1qtYnTC2TxvRkb7pi9rPJo5ffiagNQOXPbTeRb28VmHgUbenu3v7EXIQfQPYqQGVPMPZoHxTztOMx7hj/nTty/4KM8+5yGArfo6ooC1K9yNlXvj3sO9k7yOFlfcoRR+P0SY07eb+sAIYRUTSB607Jb9iDT7Im852VJ4tRoVzapRT/iqqlfO/9/LTvxhyF8PGTV9WJXMfJEutm79VahR9+gtgWHeKaRUG4UTseQcPX07Uo22VdNIE5fiPH8kmii2YnHcA0+igtbeY+IF6aKRStAv6G8jSF/EinhDh8UJUkDeDFgQoJt3YAwiLTY8xHdr/85Y/b4Zz8n7DoLUIUZS2sbCEsMx1ZAG0C+zbhbOIkui/IyD4PxU=; _abck=23920A2389E2D3EEA04617E7163A40E3~0~YAAQT+gtF0JBhTSLAQAAgdveZAoxqGpTJqP1molqWAw/m6pFlYHfDuLNrj8mpzpYC9AwaZiQlt127J/ot0gLhnRJZspqRmL4s0eru9gBxSnxtYasfaJDNyiGvYKTXnC2xrcjhKQm6gIKFpTYZJmN3J0J7iOMYxW3KpWi7zsi1NQPV5i3UEY8XWETL2xJCBTx/kN+qY7Ay0XsyCh6YzPBnKJ1mv/vLMntUJvVthdvmdD83G9X/7YAP/bghFItSH+P8T9KopZA7bXk23VmfDZ6h/CJxw4JZ8tl80XA6bLGxx2BH5kbbPfUVJY5QHtUq/Lp0MQLf+xSn6J9U8Ijfae0lJexSuinEprX2UTs35V/YcBYbYLhTqkp3FDmQt7bqvl/LSuRjnAz2iyIYQ4+Og9L7Sfd+p1EHgzdmmMv~-1~-1~-1; PHPSESSID=omi0s54klo8l5tnltkcotitlt21; bm_sv=ADCD6E551F2187345025DEBB1CA24DA7~YAAQT+gtF5BUhTSLAQAAbOHpZBXz3s/HMwsWBhT/E3YKjk4fJDjHH00bfcKi5SX1JGBjA/xX7NLqp5diw8qPFeKaYrkAsm6enSyMOhue/oKDIvaxqaQ//70Z94IXwUFg+VbUwu4dkCFOmbcYiDzPhFvR6HVErD9ir1L0MVzVHrFQORmWloLRBijk96MdkoWmAnVh7Coj7gW9COQ0yQoBv0XmzBzYWd+yL7NX7qudhHJMEY6rjI/YSWgJ540TMmJgPH5A~1
Content-Length: 450
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.57
Content-Type: application/x-www-form-urlencoded
Accept: */*
Origin: https://lastpass.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://lastpass.com/
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

hash=2045f97c73c2cceb3fc79dd2b63178533cab8c173083064a208451a57a27d5f8&xml=1&method=web&username=example%40example.com&encrypted_username=NsAm0wWv3Bk3HLHv4aD%2BTvpl3cmU19i6AVC3w%2FMI%2Fvo%3D&iterations=600000&email=example%40example.com&outofbandsupported=1&uuid=8b8053745a8780a31ad9580dfb661582a516ccfb95c5fb457c1b7b0fc46d437&deviceId=&sesameotp=&otp=&lcid=&domain=&lostpwotphash=3981741ca7629435321235d1419868904da4cf728231f607fd56c33d0e777917
```

When modifing item, I send

```
POST /lmiapi/credential-monitoring/breaches HTTP/2
Host: lastpass.com
Cookie: sessonly=0; lp_anonymousid=d2093003-d634-4d05-9b20-7254bb027368; lang=en_US; origin_v2=utm_source=&utm_content=&mcomb=&referral=www.bing.com&Created_At=1698151601&GA_id=; __lmi_ma=userreferrer=www.bing.com; _ga=GA1.2.421782915.1698151606; chop_id=LastPass_1698151606960_63; _cs_c=0; _mkto_trk_commerce={; _cs_id=df4b783d-a695-a8cd-d004-d6c106ef5a41.1698151609.4.1698320267.1698320267.1.1732315609820; ak_bmsc=4B767D8099ABE5EF48302844767ECA29~000000000000000000000000000000~YAAQ09B4aL7MOGCLAQAAu/NlexWW8eVXA7lHOcoL19XXJg5LVwykTNqbWfiydPqmxz1gbupR+0MQqxr87QydP6qk0CRpGk5l2LJ/9hIN5skZrGkEhnfrZ2+N/AtYINr1vGZKEMYuvWGkngSnlmep7AjH58nE/id6Pqg9t7Tta4MuS6d2svF/SS4+/ZPNZ/+gyP3CLvAwryBZCM51fXMzCX9pxIOSsVlcOfyZUyLz6W93a3qw46t+14KQzSKSjAvGGosx0SfKJyf3GKhRGio3fQpjOAps/rbPOGi/bE2iyCxPNTrVs3bKtfmCaDOR7OvhJom23DUquEjqod+dB/7+DNj0iKVE3ZROqnjKvmc2OC78ek3KzR6xAMWM04B5eNPfdbmK8bQDZtccYenqXeo=; bm_sz=96B4A48D3853AC755983A76D16FA0E30~YAAQ09B4aL/MOGCLAQAAu/NlexVMXZRiPX+/DyMBpfCwppKwgQhQdEgfLGugsaQjItty27yIUB43v68HkRQrUeAH/11LW9j+va9+22b1oyi6aTEDRhTbh0jX8jqWNWhV1gtn1PLqD7DKegOXLNV0u7zDpeNopdIDVFLwlPhlyqyc+/6+cuMGu0A0cs6XfoM+td2zo7cuHABuI3tq7075VhwptUVhBVyd3HhaqcleZfHpsmF5L7lAsutdGH0h8jUJVz7RlIFg+rQzaxH+S/2QK1kFcmfDGlBq9sFnFmG112eJWybb9A==~3485746~3225648; PHPSESSID=f119nj6mbtrgsp1h8n98r2qgnfg; _abck=23920A2389E2D3EEA04617E7163A40E3~-1~YAAQmF5swahtoWGLAQAAWg68ewpJEJHE0u3/ryc3OxKGWch5JPRaLmacsoZT83jItOp9WlQHuyq5gG1THyB+zDBP5MiS3xkrKUwmNAwHGfsWAyl0EIJnK7XjmFGU7TJ0lxPtPIDwkR+4An91Jx5Sn1LPC2helq9f/kGyF0FPtPLLvFdxe+zJtJk7NhUM+6uKPeiPluXCykK8skN0B9l2/Kw7gVoXhjFB8xSg3uelouBronhqiv5b/iXGdeQNWr/qxT/xFD0SSphQjMRCQVODPeCrOrS/BMnhAVW4n+9vJ7Q+sunSvV72MROgBZtaeheJckuozA8VUIqk6bw2fvaAdN9+s5DLqyN/OVg0Z4etnFdchbfvbhF0puDLOtElNQ1TVVqkeCZu0roCjWKKEwC3N6Bng15cHXlrgpbJ~0~-1~-1; bm_sv=1EB99B35AAA338AC0A7DD5ADDBF9B1C2~YAAQmF5swXZuoWGLAQAAPzu8exXgnUxJn8cS4ZcmnYlVtDgV7gm/OfQDSTUeqBzbPiIAjDQmXHtJgsg+EDQO3tAZojbIKMexou57N1lx6nIdLCYYxy9YuMjHgnzpXkTL1Va6AGZwCcfBMFNG6SZX40ue1m+fJxaPtNW9Q0nP5tzaTpvjkx6xQN/Xnu5fI7/qvT7z2e440d0hrMbohghrIUxfufb+Cet4dlSe0qQAzA5CNAChOvWj+nJrZhll54HzzaeI~1
Content-Length: 91
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Content-Type: application/json
X-Csrf-Token: X0k3bkRVNElFdml2dTB6Ykgt6Zxv0s/lAGWhBOkdJ+K6m1UQGhJg+i7/sL6tq7CeKDs=
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Sec-Ch-Ua-Platform: "Windows"
Accept: */*
Origin: chrome-extension://bbcinlkgjjkejfdpemiealijmmooekmp
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

{"accountId":"1392388693080759107","updatedAt":"2023-10-29 10:04:53","breachState":"clean"}
```

and receive

```
HTTP/2 200 OK
Content-Type: application/json
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: default-src 'self' https://admin.lastpass.com; img-src 'self' https://lastpass.com data: blob: https://analytics.twitter.com/i/adsct; object-src 'self' https://*.googlevideo.com; connect-src 'self' https://lastpass.com wss://*.lastpass.com https://5399020466.log.optimizely.com https://www.lastpass.com https://pollserver.lastpass.com https://loglogin.lastpass.com https://accounts.lastpass.com https://login.microsoftonline.com https://graph.microsoft.com https://login.microsoftonline.us https://graph.microsoft.us https://*.okta.com https://*.oktapreview.com https://*.okta-emea.com https://*.pingone.com https://*.pingone.ca https://*.pingone.eu https://*.pingone.asia https://accounts.google.com https://www.googleapis.com https://*.onelogin.com https://openidconnect.googleapis.com https://content.googleapis.com; style-src 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com; plugin-types application/x-invalid-type; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com https://www.youtube.com https://*.ytimg.com https://*.optimizely.com https://lp-cdn.lastpass.com; font-src data: 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com; frame-src 'self' https://ssl.gstatic.com https://www.google.com https://www.youtube.com https://cdn.lmiutil.com
P3p: CP="NON DSP COR CUR OUR LEG PHY COM"
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
Server: LastPass
Strict-Transport-Security: max-age=86400000
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Vary: origin
Vary: Accept-Encoding
Date: Sun, 29 Oct 2023 14:04:54 GMT
Content-Length: 0
Set-Cookie: PHPSESSID=f119nj6mbtrgsp1h8n98r2qgnfg; Expires=Sat, 11 Nov 2023 14:04:54 +0000; Max-Age=1123200; Path=/; SameSite=None; Secure; HttpOnly
```

When add item, I send

```
POST /show.php HTTP/2
Host: lastpass.com
Cookie: sessonly=0; lp_anonymousid=d2093003-d634-4d05-9b20-7254bb027368; lang=en_US; origin_v2=utm_source=&utm_content=&mcomb=&referral=www.bing.com&Created_At=1698151601&GA_id=; __lmi_ma=userreferrer=www.bing.com; _ga=GA1.2.421782915.1698151606; chop_id=LastPass_1698151606960_63; _cs_c=0; _mkto_trk_commerce={; _cs_id=df4b783d-a695-a8cd-d004-d6c106ef5a41.1698151609.4.1698320267.1698320267.1.1732315609820; ak_bmsc=4B767D8099ABE5EF48302844767ECA29~000000000000000000000000000000~YAAQ09B4aL7MOGCLAQAAu/NlexWW8eVXA7lHOcoL19XXJg5LVwykTNqbWfiydPqmxz1gbupR+0MQqxr87QydP6qk0CRpGk5l2LJ/9hIN5skZrGkEhnfrZ2+N/AtYINr1vGZKEMYuvWGkngSnlmep7AjH58nE/id6Pqg9t7Tta4MuS6d2svF/SS4+/ZPNZ/+gyP3CLvAwryBZCM51fXMzCX9pxIOSsVlcOfyZUyLz6W93a3qw46t+14KQzSKSjAvGGosx0SfKJyf3GKhRGio3fQpjOAps/rbPOGi/bE2iyCxPNTrVs3bKtfmCaDOR7OvhJom23DUquEjqod+dB/7+DNj0iKVE3ZROqnjKvmc2OC78ek3KzR6xAMWM04B5eNPfdbmK8bQDZtccYenqXeo=; bm_sz=96B4A48D3853AC755983A76D16FA0E30~YAAQ09B4aL/MOGCLAQAAu/NlexVMXZRiPX+/DyMBpfCwppKwgQhQdEgfLGugsaQjItty27yIUB43v68HkRQrUeAH/11LW9j+va9+22b1oyi6aTEDRhTbh0jX8jqWNWhV1gtn1PLqD7DKegOXLNV0u7zDpeNopdIDVFLwlPhlyqyc+/6+cuMGu0A0cs6XfoM+td2zo7cuHABuI3tq7075VhwptUVhBVyd3HhaqcleZfHpsmF5L7lAsutdGH0h8jUJVz7RlIFg+rQzaxH+S/2QK1kFcmfDGlBq9sFnFmG112eJWybb9A==~3485746~3225648; PHPSESSID=f119nj6mbtrgsp1h8n98r2qgnfg; _abck=23920A2389E2D3EEA04617E7163A40E3~-1~YAAQmF5swahtoWGLAQAAWg68ewpJEJHE0u3/ryc3OxKGWch5JPRaLmacsoZT83jItOp9WlQHuyq5gG1THyB+zDBP5MiS3xkrKUwmNAwHGfsWAyl0EIJnK7XjmFGU7TJ0lxPtPIDwkR+4An91Jx5Sn1LPC2helq9f/kGyF0FPtPLLvFdxe+zJtJk7NhUM+6uKPeiPluXCykK8skN0B9l2/Kw7gVoXhjFB8xSg3uelouBronhqiv5b/iXGdeQNWr/qxT/xFD0SSphQjMRCQVODPeCrOrS/BMnhAVW4n+9vJ7Q+sunSvV72MROgBZtaeheJckuozA8VUIqk6bw2fvaAdN9+s5DLqyN/OVg0Z4etnFdchbfvbhF0puDLOtElNQ1TVVqkeCZu0roCjWKKEwC3N6Bng15cHXlrgpbJ~0~-1~-1; bm_sv=1EB99B35AAA338AC0A7DD5ADDBF9B1C2~YAAQmF5swXZuoWGLAQAAPzu8exXgnUxJn8cS4ZcmnYlVtDgV7gm/OfQDSTUeqBzbPiIAjDQmXHtJgsg+EDQO3tAZojbIKMexou57N1lx6nIdLCYYxy9YuMjHgnzpXkTL1Va6AGZwCcfBMFNG6SZX40ue1m+fJxaPtNW9Q0nP5tzaTpvjkx6xQN/Xnu5fI7/qvT7z2e440d0hrMbohghrIUxfufb+Cet4dlSe0qQAzA5CNAChOvWj+nJrZhll54HzzaeI~1
Content-Length: 685
Sec-Ch-Ua: "Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"
Sec-Ch-Ua-Platform: "Windows"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76
Content-Type: application/x-www-form-urlencoded
Accept: */*
Origin: chrome-extension://bbcinlkgjjkejfdpemiealijmmooekmp
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

sentms=1698588511750&extjs=1&localupdate=1&ajax=1&source=vault&folder=none&totp=&aid=0&name=!4KLwK%2FIDCZhQG6I2gz0Mbg%3D%3D%7CfrZHtbp0Te1AMuJnQiGzfA%3D%3D&extra=&grouping=&username=!CC204kG9EDAB%2F1qsZnhhQQ%3D%3D%7CjLy8taAAwh4inp438g0gPA%3D%3D&password=!cnJCSXjhH5bLoJN8AvgjRw%3D%3D%7C%2Ft1xqx%2BeXg0I%2BkGJajWI%2BQ%3D%3D&url=&urid=0&auto=1&method=edgecr&iid=&requid=534217871&wxsessid=f119nj6mbtrgsp1h8n98r2qgnfg&sessonly=0&token=X0k3bkRVNElFdml2dTB6Ykgt6Zxv0s%2FlAGWhBOkdJ%2BK6m1UQGhJg%2Bi7%2FsL6tq7CeKDs%3D&requesthash=NsAm0wWv3Bk3HLHv4aD%2BTvpl3cmU19i6AVC3w%2FMI%2Fvo%3D&requestsrc=cr&encuser=NsAm0wWv3Bk3HLHv4aD%2BTvpl3cmU19i6AVC3w%2FMI%2Fvo%3D&hasplugin=4.123.0&lpversion=4.123.0
```

and receive

```
HTTP/2 200 OK
Content-Type: text/xml; charset=UTF-8
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: default-src 'self' https://admin.lastpass.com; img-src 'self' https://lastpass.com data: blob: https://analytics.twitter.com/i/adsct; object-src 'self' https://*.googlevideo.com; connect-src 'self' https://lastpass.com wss://*.lastpass.com https://5399020466.log.optimizely.com https://www.lastpass.com https://pollserver.lastpass.com https://loglogin.lastpass.com https://accounts.lastpass.com https://login.microsoftonline.com https://graph.microsoft.com https://login.microsoftonline.us https://graph.microsoft.us https://*.okta.com https://*.oktapreview.com https://*.okta-emea.com https://*.pingone.com https://*.pingone.ca https://*.pingone.eu https://*.pingone.asia https://accounts.google.com https://www.googleapis.com https://*.onelogin.com https://openidconnect.googleapis.com https://content.googleapis.com; style-src 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com; plugin-types application/x-invalid-type; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com https://www.youtube.com https://*.ytimg.com https://*.optimizely.com https://lp-cdn.lastpass.com; font-src data: 'self' 'unsafe-inline' 'unsafe-eval' https://lastpass.com; frame-src 'self' https://ssl.gstatic.com https://www.google.com https://www.youtube.com https://cdn.lmiutil.com
P3p: CP="NON DSP COR CUR OUR LEG PHY COM"
Pragma: no-cache
Cache-Control: no-cache, private, no-store, max-age=0, s-maxage=0, must-revalidate, proxy-revalidate
Expires: 0
Server: LastPass
Strict-Transport-Security: max-age=86400000
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Vary: origin
Vary: Accept-Encoding
Date: Sun, 29 Oct 2023 14:08:34 GMT
Content-Length: 478
Set-Cookie: PHPSESSID=f119nj6mbtrgsp1h8n98r2qgnfg; Expires=Sat, 11 Nov 2023 14:08:33 +0000; Max-Age=1123200; Path=/; SameSite=None; Secure; HttpOnly
Set-Cookie: lang=en_US; expires=Mon, 28-Oct-2024 14:08:33 GMT; Max-Age=31536000; path=/; domain=lastpass.com; secure

<xmlresponse><result action="added" aid="1285989296676734838" urid="0" msg="accountadded" acctname1="" acctname2="" acctname3="" acctname4="" acctname5="" acctname6="" grouping="" count="0" lasttouch="0000-00-00 00:00:00" editlink="" url="687474703a2f2f" fav="0" launchjs="" deleted="0" remoteshare="0" username="!CC204kG9EDAB/1qsZnhhQQ==|jLy8taAAwh4inp438g0gPA==" localupdate="1" accts_version="36" pwprotect="0" submit_id="" captcha_id="" custom_js="" ></result></xmlresponse>
```

Finding:

1. It is not anonymous.
1. It depends on the hash to verify.
1. There is no salt for the login hash.
1. The IV is random