## Capturing Network Traffic

When decrypting items, we capture packet

```
HTTP/2 200 OK
Date: Sat, 14 Oct 2023 02:14:54 GMT
Content-Type: application/json
Content-Length: 1454
Cache-Control: max-age=60, no-cache, no-store
Content-Security-Policy: default-src 'none'; form-action 'none'; frame-ancestors 'none'; report-uri https://csp.1passwordservices.com/report?tags=b5_prd; report-to csp-endpoint; script-src https://app.1password.com 'sha256-KWsQ9f8Zx0pe3RbREHnIqiaCmx+Up0a3pyONYoO7EMA='; style-src https://app.1password.com 'sha256-dHlRZbIBjBXo9m7/kOtIREHDoVNQWPIOPaIan9Q5iKA='; img-src data: blob: https://c.1password.com https://app.1password.com https://a.1passwordusercontent.com/ https://a.1passwordusercontent.ca https://a.1passwordusercontent.eu https://a.1passwordentusercontent.com  https://avatars.slack-edge.com  https://mkt.1password.co; child-src 'self' https://*.duosecurity.com https://*.duofederal.com https://map.1passwordservices.com https://billing.1passwordservices.com https://duo.1passwordservices.com; worker-src 'self'; frame-src 'self' https://*.duosecurity.com https://*.duofederal.com https://map.1passwordservices.com https://billing.1passwordservices.com https://duo.1passwordservices.com https://1password.com https://survey.1passwordservices.com https://email-providers.1passwordservices.com; connect-src 'self' https://watchtower.1password.com https://api.pwnedpasswords.com https://notify.bugsnag.com https://app.1password.com wss://b5n.1password.com https://f.1passwordusercontent.com/ *.1password.com https://*.1password.ca https://*.1password.eu https://*.ent.1password.com  https://a.1passwordusercontent.com/ https://contact.1passwordservices.com https://flow.1passwordservices.com https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com  https://web-ui-sentry.1passwordservices.com; upgrade-insecure-requests
Cross-Origin-Opener-Policy: same-origin
Permissions-Policy: interest-cohort=()
Referrer-Policy: no-referrer
Report-Endpoints: csp-endpoint ="https://csp.1passwordservices.com/report?tags=b5_prd"
Report-To: {"endpoints":[{"url":"https://csp.1passwordservices.com/report?tags=b5_prd"}],"group":"csp-endpoint","max_age":604800}
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{"kid":"WALK4YSPHFC65JIPNPSMJELCJU","enc":"A256GCM","cty":"b5+jwk+json","iv":"TgO7Ck35gsw8Q_gD","data":"lBGBJYGdlyq1age8H9LiQ87we4wufFMScOHQJUaTLJxc6MxqHXWYpIUatE6ox7OxcKWQbo3MrnL5UQXXURBoGooqAyUWRGlpXZ4XRA30R07Q537jcRUAUbkdwHB99X18pEpQyBzQdN_wuisqQ1XDAXYtFQ6TwfowsbuYNYfaSR3iyq4Y2VDtxNYvLC6EY1n3RI1Sfr-8eLOZ_N61Ekj8A_WppqqOheW5BvA7eBODJeQm2_nR-gtnsPcWrEmmWsoW1yIBExrEjiX61UnOI7GwnK6DPQPqhEKEabAe4w23WbAMupLlJWOwEOkA3NROfY5DSYsYWsCd2SyAFTJ2PWGQ0dC4M5Q-GwKhAA9BEpjJkgOtIt2ZNhlXRrimGthHI0x6XZNPB_8fFTBELVNHEviiHpQz9BeOf12MfRBm69f-g9VL8Kj44fPOO8K2lxUSYRC0Hv8bKXwS2YVooJY_FQo8L2jQ1SijJTqpzNRwJjrMFSD-mc6MZG45QCKlHcH_ZPLYAkYIK6nYm16B95-41IUBzw19FEs8fdTp9go8saBDucMMj784XRpjil_GKf4M_URuqVzoX8XnYTIQ4ABLoXmG9UDVAnJB0d8yJ3Vmw9ND5PSQh-QiWuWhWaXqWOcLZ6nrptYCW0fi6kn-MWu05Ctmhc0ukREPDmWEmCTLU3X63CZpunG4-xweLXPpPmjCFizIufAcTJjhdDXzOyDohORltA8XfQnGGTsyL44QTQLB3HWpUWNeMH7fqgaSeRVpWJH0Fj58IwfufF0jS7RdsdLXUuAaBn2QwEKry7xOVMZo3sR7XkiVpxW-rhDrQWKNscbVzLG8xQHUx-GYrTMi4arE6O_NR0t1T-VeP-WubZLwhSKQTXWH9shLqBNDtTe1LFNZ6hcso6SLRy_5yLKTYiRCPJcmNPfaVJ44vIz3htA7BAoq--rHRmixjYwLqryMzwSLITevgR42l79Ikxfcl6Yiy9py17skTKL5xS3bV2jp6avzuzgBX33WM-4JvioDVFf21FVAVDK7zCWYo0o6gLciR733ZmzPvpllyRI78YH_U4z_OEpERuOc7nIrLnQzKZJb5dV5TwICmK3gex-1BhSe2fmckSouFcYaBJm3PjJH3RHHqv2rQ0QFEavgxMSmfImmlBxU2A3ZlqnXLX0sGHbj5k60_SZZYuT5MYMjgY58pjD4pfDX-WEKilcW_yu63yRqQ__L9DYFv-U2GXg2bybmIzh-9OG9QP6GYYvQcA03WzJinzx2EgNeMnAg5ryZ58KnSBgBXIN9B5LxBHWUeBJoQUw_67I1JWDXJc-Pvc8Vm2XNijkHfmANvlGQ0pypS_nw0QMm"}
```

When logging out, we capture the packet

```
HTTP/2 200 OK
Date: Sat, 14 Oct 2023 02:17:22 GMT
Content-Type: application/json
Content-Length: 308
Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: https://my.1password.com
Cache-Control: max-age=60, no-cache, no-store
Content-Security-Policy: default-src 'none'; form-action 'none'; frame-ancestors 'none'; report-uri https://csp.1passwordservices.com/report?tags=b5_prd; report-to csp-endpoint; script-src https://app.1password.com 'sha256-KWsQ9f8Zx0pe3RbREHnIqiaCmx+Up0a3pyONYoO7EMA='; style-src https://app.1password.com 'sha256-dHlRZbIBjBXo9m7/kOtIREHDoVNQWPIOPaIan9Q5iKA='; img-src data: blob: https://c.1password.com https://app.1password.com https://a.1passwordusercontent.com/ https://a.1passwordentusercontent.com https://a.1passwordusercontent.ca https://a.1passwordusercontent.eu  https://avatars.slack-edge.com  https://mkt.1password.co; child-src 'self' https://*.duosecurity.com https://*.duofederal.com https://map.1passwordservices.com https://billing.1passwordservices.com https://duo.1passwordservices.com; worker-src 'self'; frame-src 'self' https://*.duosecurity.com https://*.duofederal.com https://map.1passwordservices.com https://billing.1passwordservices.com https://duo.1passwordservices.com https://1password.com https://survey.1passwordservices.com https://email-providers.1passwordservices.com; connect-src 'self' https://watchtower.1password.com https://api.pwnedpasswords.com https://notify.bugsnag.com https://app.1password.com wss://b5n.1password.com https://f.1passwordusercontent.com/ *.1password.com https://*.ent.1password.com https://*.1password.ca https://*.1password.eu  https://a.1passwordusercontent.com/ https://contact.1passwordservices.com https://flow.1passwordservices.com https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com  https://web-ui-sentry.1passwordservices.com; upgrade-insecure-requests
Cross-Origin-Opener-Policy: same-origin
Permissions-Policy: interest-cohort=()
Referrer-Policy: no-referrer
Report-Endpoints: csp-endpoint ="https://csp.1passwordservices.com/report?tags=b5_prd"
Report-To: {"endpoints":[{"url":"https://csp.1passwordservices.com/report?tags=b5_prd"}],"group":"csp-endpoint","max_age":604800}
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

[{"userUuid":"36RFPQ4A3JDLDGYVWOWOBVX5KY","userEmail":"example@example.com","userName":"example","userAvatarURL":"","usingMyDomain":true,"accountUuid":"EAXJY2235ZACVD7YL66ZUTCZZU","accountType":"I","accountName":"example","accountDomain":"my.1password.com","accountAvatarURL":"","hasPrioritySupport":false}]
```

When logging in, we capture the packet

```
HTTP/2 200 OK
Date: Sat, 14 Oct 2023 02:20:16 GMT
Content-Type: application/json
Content-Length: 213
Access-Control-Allow-Origin: https://my.1password.com
Cache-Control: max-age=60, no-cache, no-store
Content-Security-Policy: default-src 'none'; form-action 'none'; frame-ancestors 'none'; report-uri https://csp.1passwordservices.com/report?tags=b5_prd; report-to csp-endpoint; script-src https://app.1password.com 'sha256-KWsQ9f8Zx0pe3RbREHnIqiaCmx+Up0a3pyONYoO7EMA='; style-src https://app.1password.com 'sha256-dHlRZbIBjBXo9m7/kOtIREHDoVNQWPIOPaIan9Q5iKA='; img-src data: blob: https://c.1password.com https://app.1password.com https://a.1passwordusercontent.com/ https://a.1passwordusercontent.ca https://a.1passwordusercontent.eu https://a.1passwordentusercontent.com  https://avatars.slack-edge.com  https://mkt.1password.co; child-src 'self' https://*.duosecurity.com https://*.duofederal.com https://map.1passwordservices.com https://billing.1passwordservices.com https://duo.1passwordservices.com; worker-src 'self'; frame-src 'self' https://*.duosecurity.com https://*.duofederal.com https://map.1passwordservices.com https://billing.1passwordservices.com https://duo.1passwordservices.com https://1password.com https://survey.1passwordservices.com https://email-providers.1passwordservices.com; connect-src 'self' https://watchtower.1password.com https://api.pwnedpasswords.com https://notify.bugsnag.com https://app.1password.com wss://b5n.1password.com https://f.1passwordusercontent.com/ *.1password.com https://*.1password.ca https://*.1password.eu https://*.ent.1password.com  https://a.1passwordusercontent.com/ https://contact.1passwordservices.com https://flow.1passwordservices.com https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com  https://web-ui-sentry.1passwordservices.com; upgrade-insecure-requests
Cross-Origin-Opener-Policy: same-origin
Permissions-Policy: interest-cohort=()
Referrer-Policy: no-referrer
Report-Endpoints: csp-endpoint ="https://csp.1passwordservices.com/report?tags=b5_prd"
Report-To: {"endpoints":[{"url":"https://csp.1passwordservices.com/report?tags=b5_prd"}],"group":"csp-endpoint","max_age":604800}
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{"status":"ok","sessionID":"X5YQTEZEF5FBXCO644UF7BNVRA","accountKeyFormat":"A3","accountKeyUuid":"HKF44K","userAuth":{"method":"SRPg-4096","alg":"PBES2g-HS256","iterations":650000,"salt":"NDgcUtnZgPSefLkd4OUR2A"}}
```

```
HTTP/2 200 OK
Date: Sat, 14 Oct 2023 02:20:17 GMT
Content-Type: application/json
Content-Length: 66
Access-Control-Allow-Origin: https://my.1password.com
Cache-Control: max-age=60, no-cache, no-store
Content-Security-Policy: default-src 'none'; form-action 'none'; frame-ancestors 'none'; report-uri https://csp.1passwordservices.com/report?tags=b5_prd; report-to csp-endpoint; script-src https://app.1password.com 'sha256-KWsQ9f8Zx0pe3RbREHnIqiaCmx+Up0a3pyONYoO7EMA='; style-src https://app.1password.com 'sha256-dHlRZbIBjBXo9m7/kOtIREHDoVNQWPIOPaIan9Q5iKA='; img-src data: blob: https://c.1password.com https://app.1password.com https://a.1passwordusercontent.com/ https://a.1passwordusercontent.ca https://a.1passwordusercontent.eu https://a.1passwordentusercontent.com  https://avatars.slack-edge.com  https://mkt.1password.co; child-src 'self' https://*.duosecurity.com https://*.duofederal.com https://map.1passwordservices.com https://billing.1passwordservices.com https://duo.1passwordservices.com; worker-src 'self'; frame-src 'self' https://*.duosecurity.com https://*.duofederal.com https://map.1passwordservices.com https://billing.1passwordservices.com https://duo.1passwordservices.com https://1password.com https://survey.1passwordservices.com https://email-providers.1passwordservices.com; connect-src 'self' https://watchtower.1password.com https://api.pwnedpasswords.com https://notify.bugsnag.com https://app.1password.com wss://b5n.1password.com https://f.1passwordusercontent.com/ *.1password.com https://*.1password.ca https://*.1password.eu https://*.ent.1password.com  https://a.1passwordusercontent.com/ https://contact.1passwordservices.com https://flow.1passwordservices.com https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com  https://web-ui-sentry.1passwordservices.com; upgrade-insecure-requests
Cross-Origin-Opener-Policy: same-origin
Permissions-Policy: interest-cohort=()
Referrer-Policy: no-referrer
Report-Endpoints: csp-endpoint ="https://csp.1passwordservices.com/report?tags=b5_prd"
Report-To: {"endpoints":[{"url":"https://csp.1passwordservices.com/report?tags=b5_prd"}],"group":"csp-endpoint","max_age":604800}
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{"serverVerifyHash":"dEc7XWvZyk9H0GNkYVkY_MUq7BRq8Mk_PlpxNv1men8"}
```

Finding:

1. The IV is always changing.
1. The user email and username is leaked.
1. The salt is send to the user client, and can be captured.
1. The whole JWK key suit has been send to users.
