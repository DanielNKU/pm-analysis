## Dynamic Analysis

![dynamic analysis1](fig/dynamic-analysis1.png)

```javascript
k = function(e, t, n, r, i) {
            return R(void 0, void 0, Promise, (function() {
                var a, s, c, l;
                return O(this, (function(f) {
                    switch (f.label) {
                    case 0:
                        if (r < 1e4)
                            throw new Error("PBKDF2 cannot operate with fewer than ".concat(1e4, " interations, ").concat(r, " was supplied."));
                        return a = (0,
                        o.str2ab)(t),
                        [4, u.subtle.importKey("raw", a, {
                            name: "PBKDF2"
                        }, !1, ["deriveBits"])];
                    case 1:
                        return s = f.sent(),
                        c = {
                            name: "PBKDF2",
                            salt: n,
                            iterations: r,
                            hash: {
                                name: e
                            }
                        },
                        [4, u.subtle.deriveBits(c, s, 8 * i)];
                    case 2:
                        return l = f.sent(),
                        [2, new Uint8Array(l)]
                    }
                }
                ))
            }
            ))
        }
```

![dynamic analysis2](fig/dynamic-analysis2.png)

```javascript
return e = {
                        alg: "RSA-OAEP-256",
                        e: "AQAB",
                        ext: !0,
                        key_ops: ["encrypt"],
                        kid: "pdmixa3yhjitikm7uv2fd7veme",
                        kty: "RSA",
                        n: "1HfpUoQjzFj9sXJc1-BsZ5oWYsBhDTZkjLYzPqam5DhezPAIDkoZfBw1B4jG43ez-_WifZf_kRc9zyHl3aoe0bUmVJnr58kGvStscTD0b1n5xkLHsuADf5YqjxYTmBZEkmrewV5xG7TdiYdx7ZboUpRVD6g7yg3xakfYvZuGuIkPlxHvxb4qx-wMe1M81sPZAAoSQl923uMCCIO6y236f2oMSsSDbm-6FynwMo4rWvRuN588pZCfHzhYzchembABVdt2HsHUwZC36fV9T_EuHEjTIiWaSYj1UyMUWvD8bVwehlDV4_NBiU-IuL3s8SDJCSQW4zHiTQG8qVEUpkPBew"
                    }
```

When decrypting items, we got the value. And it is different every time.

```javascript
{
    "kid": "YJVCD7IGRZEIJNRTCRDHAIVV6U",
    "enc": "A256GCM",
    "cty": "b5+jwk+json",
    "iv": "ZV_gEiz_1DCSmwA8",
    "data": "BGI4o2GLvwUHXgH11wzJdMHuOwVpRJMGZ7xlvQAN999aCHq1BTXWnCYkGJJxUSiOo0DRA0Mmh3KM3GtSp5g6Zj1uWZXdcoZF2qdpNdmlnmRqLngBK5DFH59esF5F_WYtN-toegRh2eRJ0Jh1M45OpRVFbrfI35SPuch_llzVOBI8BgCCZiCLoqCqtA2khBa-uGJ2Bv95PuVKggGtr7BiCiqcbdll8syQLCiYQf52aPfwXRPxF43JV-7Z7FeYGGrgIT4qpd0j248oj6MK7EIKbAV1mGhCGq6Iz83lPK81YJGNVGl4SSMUAkwl62tKO225W89yBqV-4Nc-EnRnMntmQbl7RXvr6dW61NYrxnHueUx3ND6_-Jj1vrFsIuCmk6mb_Wrpr0mf2B7jZkqNCAM91sIK1cszToZARPf1obi4FHJ_muvtti-oCmuJ8OipBXZ5pb-HcVzIYW2Pc2nlghvSiWU_d4KWq3RdNmd6TCPQMGjDSX4lFr6sljMGcV6OhAwZNzNr2hlRXQD2NvS1wkkRRF5bwofTgbCxHSSyG41P_vEpNmtDjZ2BUJgtxClgdybFsxWckY7sT1F6YEZM_Ro6FJyqe8Fyg-xYmvqr4lVwTONKteJsMd6j7o8iK6gJ58NEbDt3irHoiVnHPrQG8SgpGBodwDKMcuuYFyL6oZ-_ImxiYmxU9ioFbQlPHVgkSlUnxyyCETvko01_dIH194SXZvsQpptMdFePRrXUzpda6E-3MEfPYO9ZfGvBeAP1qwJr7dAXmtUYRfreuCOvaynvj3UBMiFv63Vw2c3LQ8xN9YEmASlYOwTmIl6SACDz1P6LxmuoYq5HBOpczFKeax-VSRHe6hVl_WLCimGZjZGU0SSA9cbRqJpzA5UswTxvESE7aym1hRPmFZk-JNHQdd9vtVm4SrJ0y67fLE6uudliqdROaFcWYUpTMSQXAoyGcgFus8C_vq6yo1Nrj2H5xXYJ7cillu2XWGJ8SCfEerRSjnekn679iky0smFbLOwTDwoPy7jl5OuTnbhnKD_34WQRu5zd39hjDEFvx8Zv1I-hfdeI02n9VTKcZQwFRkeY22Q7SwCBlR3Oiwo-8OjFjiW6ZLBDIYDPtIU19sNKSpTJ0h6w7OVnOG1uyR0K89oWYhvJ55dwWd9WPdXloXPPUN81P5YRRhZGz0qZ9KxXwoniuzVrNa_l5up7ohqfHacX6fc0hGFD8Jwn5Lls86YdGjJKwW38Bq57RkY67L-dA0t-lE5yqmU0SmRIGSTToX7pGP8XxKppTiEwkwfYQhj6fbaD_r3HGSovMUdvu7KQNqGyxE6nrt4YwImLlvT71Q=="
}
```

```javascript
{
    "kid": "YJVCD7IGRZEIJNRTCRDHAIVV6U",
    "enc": "A256GCM",
    "cty": "b5+jwk+json",
    "iv": "30Mj9oqXJFBJhG59",
    "data": "iWvQRxyQPlmt7PQTKTD_tIU5f-fpwcpj5aXcMOOLNHm2LkzYhWemKNVvU8LO3P0o6ARqKxbFi4ozXAgWSqctYRs-EMryqUK3RzMQ5IM8uTZVsVJu6toifG46aeJ4W6psJLMwNcrTzb3q4xlj_MpPlGYqrHTXsMlyfpB2RQb4XAC7OQFDBlHYAxIkhHTGps2ic_1vsPhckdNN3k20yGLfeWbjw0KLNRLAJC699flNj5mRoJfRhtNw-wRx_GfMsD5SuLm9wXq5RUqXPiLB304Hkgp0h3jBeCXhEkECo93Tgar2qII3Y7cpawSaLRx5xIGMyPEkldvf4ZMy01seKVfcrQ_JsgwtEWE5bFGsidfGCjad9rnf2dxu87BrIipcptOcXI4XgcfA7SmGQq8H6Z76ZqMSX9vxt73Op-1m0CgBe1h94pZv6jykMHfLFHf7EfS_4jOKyJ913lDQESXII2Oj6LuapjeRN2JsifJIbJ2CUp6LAF9EyO_Lc4o-czeOEtDrthmWVxolP51rH0i23zUx6_TJP_nsG6riRBPIItZfbM3OP44H9H83wVnPR1u1tBJS7mZM5jI2igQWBqvwaSPzFaAKFgTrlYKAhXFI1322XcH2-2tbSV3GUiI12AuCRUBrFnTXa_X9_QbvLI8gJwQkM0O8I5u-71PFFXJwTzdU8X_zguH2xm8B0iXq_LpPipJn6Wg4XIZhXK9pxIaSHsZdC9f52YZWk5-NgkAIVEny0ZqDl4OZpWYt4asK1eMUEc-zZiw7euarEcBQPBWfdnB2FkJeF5JWzZfsK25cqoE11aJcmSNJphbwzJ6HL7HtiaL32rQSa3GCdT0iJV5sBEzGVWZ9Et-nvRXfG4y3vYd_PUW16rFgHqhxsogIQ9WHgyY409NQn_VMyJFd7LB21fXr_YB3jkOxoFPWIctfBE4cCoo80FO9C-BdOQ4ACsiKByk68GTng3IPmoc2jY90znOvRPIw9LLR6DS9gVerM-fpJjuitU8YK7AnduN1Q--qpDok52ufnv8uVRJ4NdVu7hz-KEyy9UgsuJHjWbmalJBOJx1HCrPwoNsEWT9YkojtJLy30mhRfGMFvFkpYG4MGbgg9nFucGg2jrMXB5u69eiNIX93fN8WilryO_aFMPEgz0Z1T7kLjrCfSmOGSlTImszjbzmGzUvnvaX5PpPy_5mziZ3FNe4SfbQiRJeP4qLVOn9uvQuoFnnJjoH_ub4BRtceblf764oqs-Pb_pG9XwnScpKX8l3kgOuMOfQhLFREe2wXmbLHTY4WzojlOIvL9bZdos1Mt5BNZIiXeewZgrLYnzk8DBme7xpttR5wIQ=="
}
```

```javascript
{
    "kid": "YJVCD7IGRZEIJNRTCRDHAIVV6U",
    "enc": "A256GCM",
    "cty": "b5+jwk+json",
    "iv": "wfA9679RbWPke5N2",
    "data": "dQojeE9C7CSmWusPwFYUb-GjAH_RIOj705aCXSYkdgDXlZWY1DRNnwfgg7QTUVMM_LrXr-raCvGuFipuaKGZ-owXchG-UT2OWAv9yaU5RPl_LPd2qK-2cvbdWDY2YC5cX3FhLf0059aMq4QF6G7opN5W8GCt90uc_bEUiz4_rZS4on16Ih5QV1fCokEDi9wZHOEK0yQwRc1pYrGWBaQLDsza518Ip9hKHaIVBveicz6noulBKd8mEkNwGzMSlRJQmQ3mHiUQ5B0pSWtkkfe063ZVomzC8099st-R_OdqvITOShF--NdOR_JuwRhkqfCUuk-x0UpmSQWCowXkRXEpVlm6jP-1aYUrKn9HFhnwWHe6JASAPQkKJaKMbHZ4DO9jpf0g3EEyUWL8MdMWaAf9Krrn-tO4fEmVM7oGP7LlzPmf24SHWfG90XxumNq8j0MbeoBXpGhBfPlHNFPX7S48UfIlwhTqNYhr78_bc6QEcrILMoaw51yS6HQrBoXEEXBXTY9kzzVnxDgWcWCaHXtLOxsh4THXK-1cGfyd4T5SXL9jB3zamhNLiOk78RNync7-nGORhLgYEyQJ0SycHdYr9FSPR16Klp4BJClrjbhY9B1FPQ4V9TLjKWMgpUUAE-q3PaueAg9aErpFDSaOHqHnv4mTFai5S5ci64aHcBDRofmr6SnM6beuUD1tbkBiGwOM7da6AV2KvPbKOE7W90w6Cb7yAg8MmCcMlzPKS4om21VaySEN0_7g-7xXsvo9uDYdM0Rxxs8STmYh5L1s26O1m63LiAlrt_2kpSX8At5cvsaafKmvVd7lkpgRHy69TIj5fgGJWGYhobL_Eta1EwervGRJSfF2yX27uBoCxJiIbt5f57owhrus19Z9rxokq3102tf3wzq8urEX1crkPQnqg4VTGlbGVDG8xdO9_eGZXs4WhSxNO58kydToouj4hWXKknuemF4NVZsnqm2uo5q926YVqTaRolXMHAnOio4v8S27MAibXQ4o0mo65sLVFLDGuFIm9ue_XQRxR1xLyiyxuTZdLZPvh5lc_-Tr1B33ayuF9IvQ91vNe8spaBmh63jpt_TMVH4XXDiNnAh3GbsCFzmXXbeHl-OeSyUX3B1hiSDvUjKzM8PfCwl3gtjKEgvnYLIUpTWSzk9s6g-l6kdLEZ8v0aENzusBJA-sAuZ0tbAj-SuP4NVi0Z9OONwKoQclN4LIVeXa1IvPZA0lBjgnYstOiIIFrphjCHWI-BxFsFHcODve_av7apvUVnykXX2INnUK7ktz2lo9_cYMOuDEvu_JY-tXtote9kb_1mwC1bgHwgzUKbMid5StAi7QCff9Tdsz"
}
```

Findings:

1. Verify the KDF rounds are 650000.
2. Find the RSA public key.
3. The IV is dynamic.
