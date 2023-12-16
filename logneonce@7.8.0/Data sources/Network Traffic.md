## Capturing Network Traffic

When logging in, we send

```
POST /login.php HTTP/2
Host: secure.logmeonce.com
Cookie: cf_clearance=WLBHoHTDnHYT7myPZCvMcX6gSWBCDNiuu_v6sTNUkxA-1699777877-0-1-45d3b281.72bd4791.12d2ed61-160.0.0; _gcl_au=1.1.5827917.1699778084; _gid=GA1.2.4702827.1699778257; mp_83328df579349338bfd387ace5d463fa_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18bc2ae38676052f-0eb893c0605623-4c657b58-295d29-18bc2ae386860530%22%2C%22%24device_id%22%3A%20%2218bc2ae38676052f-0eb893c0605623-4c657b58-295d29-18bc2ae386860530%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Flogmeonce.com%2F%3F__cf_chl_tk%3DPmJiJr2v8jJKv88OsWd.BQ_91UdSNMqP547_Ms9TRlI-1699777877-0-gaNycGzNDeU%22%2C%22%24initial_referring_domain%22%3A%20%22logmeonce.com%22%7D; _ga_5SJ4NSG3RM=GS1.2.1699778257.1.1.1699778747.9.0.0; _ga_1GCCD65LGY=GS1.1.1699796679.4.0.1699796679.0.0.0; auth=Ag23RDrgyE_SBppSTYv7-mrhU-bpJm6bvFSUHIoNAciedsFujxUKmL-OD1JKTRebdjCIOidFBoMdnciYGXWsCxPSVB3-0gHMs4_Nag; mp_0f04a885e345408b7a4141dfede483b2_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18bc2b62eb46339-0b2991b6145da3-4c657b58-295d29-18bc2b62eb56339%22%2C%22%24device_id%22%3A%20%2218bc2b62eb46339-0b2991b6145da3-4c657b58-295d29-18bc2b62eb56339%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Flogmeonce.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22logmeonce.com%22%2C%22__alias%22%3A%20136916%2C%22%24user_id%22%3A%20136916%2C%22LMO%20License%22%3A%20%22Premium%20Edition%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D; _ga_42DMXW52BH=GS1.1.1699855253.5.1.1699856508.0.0.0; _gat_gtag_UA_110231812_2=1; _ga_4WD9D0SVWF=GS1.1.1699855253.5.1.1699856508.38.0.0; _ga=GA1.1.1012208669.1699778255; did=Ain_Yz6MZ7PXtq4jEBDcJMzWBRT3sm_74ymu0eS18sp1KrJtAZuT; logmeonce_session=lss519roml82mg9m31m6nqnvdp
Content-Length: 318
Cache-Control: max-age=0
Sec-Ch-Ua: "Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "Windows"
Upgrade-Insecure-Requests: 1
Origin: https://secure.logmeonce.com
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://secure.logmeonce.com/login.php
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6

authentication=password&salt=AzHIElZtGXdpbDw-BAX2fjVNdqTszkUyH9-drTXNHfw&iterations=600000&extension=required&username=example%40example.com&token=02d4a466646249a6034b235c546997a5a491810876ed53be65b7496c4efe9ff23d94153cbb7e0101ce1d170652d0c26b06ba09292e55e3d6a598028448b19bb3b6acfd&username=example%40example.com
```

and receive

```
HTTP/2 302 Found
Date: Mon, 13 Nov 2023 06:22:30 GMT
Content-Type: text/html; charset=UTF-8
Location: https://secure.logmeonce.com
Server: nginx
Set-Cookie: logmeonce_session=lss519roml82mg9m31m6nqnvdp; expires=Tue, 12-Nov-2024 06:22:30 GMT; Max-Age=31536000; path=/; domain=.logmeonce.com; secure; HttpOnly
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
Set-Cookie: auth=AlVRIO4RvAeO68Uqn8vUG99zQ0lv8tsVcfNhwUHUS6dFUtke6ZP8a3tdS2ftm0uMsGm6C7Zd_oNJzdIdFbsmLecisgvvYQTL3zL_Zg; expires=Thu, 10-Nov-2033 06:22:30 GMT; Max-Age=315360000; path=/; secure; HttpOnly
Strict-Transport-Security: max-age=31536000; includeSubdomains
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Content-Security-Policy: default-src 'self' https://cdn.logmeonce.com https://logmeonce.s3.amazonaws.com https://logmeonce-sites.s3.amazonaws.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://cdn.logmeonce.com https://assets.zendesk.com https://*.zdassets.com https://clicky.com https://*.getclicky.com https://*.sharethis.com https://*.facebook.net https://*.facebook.com https://*.googleapis.com https://www.google.com https://*.gstatic.com https://*.google-analytics.com https://www.googletagmanager.com https://www.googleadservices.com https://*.zopim.com https://*.stripe.com https://d10lpsik1i8c69.cloudfront.net https://shareasale-analytics.com https://www.dwin1.com https://cdn.mxpnl.com https://www.upsellit.com https://*.coview.com; style-src 'self' 'unsafe-inline' https://cdn.logmeonce.com https://logmeonce.s3.amazonaws.com https://assets.zendesk.com https://*.zdassets.com https://*.getclicky.com https://*.sharethis.com https://*.googleapis.com https://d10lpsik1i8c69.cloudfront.net https://*.coview.com; img-src * data: blob:; frame-src 'self' https://cdn.logmeonce.com https://*.zendesk.com https://*.sharethis.com https://*.facebook.com https://*.duosecurity.com app://logmeonce-ios app://logmeonce-macos https://*.youtube.com https://*.stripe.com https://www.google.com https://*.coview.com; font-src 'self' data: https://cdn.logmeonce.com https://*.gstatic.com https://*.zopim.com https://*.coview.com; connect-src 'self' https://cdn.logmeonce.com https://*.amazonaws.com wss://*.logmeonce.com wss://*.zopim.com https://logmeonce.zendesk.com https://*.zdassets.com https://*.getclicky.com https://*.backblaze.com https://*.backblazeb2.com https://content.dropboxapi.com https://*.sharepoint.com https://api.onedrive.com https://graph.microsoft.com https://*.1drv.com https://*.googleapis.com https://*.doubleclick.net https://*.google-analytics.com https://*.luckyorange.net wss://visitors.live wss://*.visitors.live https://api.pwnedpasswords.com https://*.mixpanel.com https://*.coview.com wss://*.coview.com; media-src 'self' https://cdn.logmeonce.com https://static.zdassets.com https://d10lpsik1i8c69.cloudfront.net
```

When we open the password manager, we send

```
GET /password-manager HTTP/2
Host: secure.logmeonce.com
Cookie: cf_clearance=WLBHoHTDnHYT7myPZCvMcX6gSWBCDNiuu_v6sTNUkxA-1699777877-0-1-45d3b281.72bd4791.12d2ed61-160.0.0; _gcl_au=1.1.5827917.1699778084; _gid=GA1.2.4702827.1699778257; mp_83328df579349338bfd387ace5d463fa_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18bc2ae38676052f-0eb893c0605623-4c657b58-295d29-18bc2ae386860530%22%2C%22%24device_id%22%3A%20%2218bc2ae38676052f-0eb893c0605623-4c657b58-295d29-18bc2ae386860530%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Flogmeonce.com%2F%3F__cf_chl_tk%3DPmJiJr2v8jJKv88OsWd.BQ_91UdSNMqP547_Ms9TRlI-1699777877-0-gaNycGzNDeU%22%2C%22%24initial_referring_domain%22%3A%20%22logmeonce.com%22%7D; _ga_5SJ4NSG3RM=GS1.2.1699778257.1.1.1699778747.9.0.0; _ga_1GCCD65LGY=GS1.1.1699796679.4.0.1699796679.0.0.0; logmeonce_session=lss519roml82mg9m31m6nqnvdp; auth=AlVRIO4RvAeO68Uqn8vUG99zQ0lv8tsVcfNhwUHUS6dFUtke6ZP8a3tdS2ftm0uMsGm6C7Zd_oNJzdIdFbsmLecisgvvYQTL3zL_Zg; _ga_42DMXW52BH=GS1.1.1699855253.5.1.1699856550.0.0.0; mp_0f04a885e345408b7a4141dfede483b2_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18bc2b62eb46339-0b2991b6145da3-4c657b58-295d29-18bc2b62eb56339%22%2C%22%24device_id%22%3A%20%2218bc2b62eb46339-0b2991b6145da3-4c657b58-295d29-18bc2b62eb56339%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Flogmeonce.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22logmeonce.com%22%2C%22__alias%22%3A%20136916%2C%22%24user_id%22%3A%20136916%2C%22LMO%20License%22%3A%20%22Premium%20Edition%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D; _ga=GA1.1.1012208669.1699778255; _ga_4WD9D0SVWF=GS1.1.1699855253.5.1.1699856550.60.0.0; did=AsbUoln_QQJrx4tKQleGLWXHskOor1KHVHvyurc-tGv9lJB4MKt-
Sec-Ch-Ua: "Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://secure.logmeonce.com/dashboard
Accept-Encoding: gzip, deflate, br

```

and receive

```
HTTP/2 200 OK
Date: Mon, 13 Nov 2023 06:26:46 GMT
Content-Type: text/html; charset=UTF-8
Server: nginx
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
Set-Cookie: did=AtgOl6KHonKPu0Q-2TK09YcxYN_aOcrN-OTnjUb3zLCbkO5p7S2h; expires=Wed, 13-Dec-2023 06:26:46 GMT; Max-Age=2592000; path=/; secure
Strict-Transport-Security: max-age=31536000; includeSubdomains
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Content-Security-Policy: default-src 'self' https://cdn.logmeonce.com https://logmeonce.s3.amazonaws.com https://logmeonce-sites.s3.amazonaws.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://cdn.logmeonce.com https://assets.zendesk.com https://*.zdassets.com https://clicky.com https://*.getclicky.com https://*.sharethis.com https://*.facebook.net https://*.facebook.com https://*.googleapis.com https://www.google.com https://*.gstatic.com https://*.google-analytics.com https://www.googletagmanager.com https://www.googleadservices.com https://*.zopim.com https://*.stripe.com https://d10lpsik1i8c69.cloudfront.net https://shareasale-analytics.com https://www.dwin1.com https://cdn.mxpnl.com https://www.upsellit.com https://*.coview.com; style-src 'self' 'unsafe-inline' https://cdn.logmeonce.com https://logmeonce.s3.amazonaws.com https://assets.zendesk.com https://*.zdassets.com https://*.getclicky.com https://*.sharethis.com https://*.googleapis.com https://d10lpsik1i8c69.cloudfront.net https://*.coview.com; img-src * data: blob:; frame-src 'self' https://cdn.logmeonce.com https://*.zendesk.com https://*.sharethis.com https://*.facebook.com https://*.duosecurity.com app://logmeonce-ios app://logmeonce-macos https://*.youtube.com https://*.stripe.com https://www.google.com https://*.coview.com; font-src 'self' data: https://cdn.logmeonce.com https://*.gstatic.com https://*.zopim.com https://*.coview.com; connect-src 'self' https://cdn.logmeonce.com https://*.amazonaws.com wss://*.logmeonce.com wss://*.zopim.com https://logmeonce.zendesk.com https://*.zdassets.com https://*.getclicky.com https://*.backblaze.com https://*.backblazeb2.com https://content.dropboxapi.com https://*.sharepoint.com https://api.onedrive.com https://graph.microsoft.com https://*.1drv.com https://*.googleapis.com https://*.doubleclick.net https://*.google-analytics.com https://*.luckyorange.net wss://visitors.live wss://*.visitors.live https://api.pwnedpasswords.com https://*.mixpanel.com https://*.coview.com wss://*.coview.com; media-src 'self' https://cdn.logmeonce.com https://static.zdassets.com https://d10lpsik1i8c69.cloudfront.net
X-Frame-Options: SAMEORIGIN

<!DOCTYPE html>
<html lang="zh">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" >
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<meta name="google" content="notranslate" >
<meta name="csrf" content="0235e0b98ffd560872e30c6a2b2bc139ecd17f8b975356c6aa3c0a959045ca02d7345d6d938d02bbc4fbbafef512fca3be38aeda2572a6550c772f0b37dc210c8695a98cc1ecd864e64a3e176470bebc11570e35c60ea942ff014a" >
<title>Password Manager - LogMeOnce</title>
<link href="https://cdn.logmeonce.com/7.8.5/images/favicon.ico" rel="shortcut icon" type="image/x-icon" >
<link href="https://cdn.logmeonce.com/7.8.5/css/jquery/jquery-ui.css" media="screen" rel="stylesheet" type="text/css" >
<link href="https://cdn.logmeonce.com/7.8.5/css/general.css" media="screen" rel="stylesheet" type="text/css" >
<link href="https://cdn.logmeonce.com/7.8.5/css/fontawesome-all.min.css" media="screen" rel="stylesheet" type="text/css" >
<link href="https://cdn.logmeonce.com/7.8.5/css/jquery/fancybox/jquery.fancybox.css" media="screen" rel="stylesheet" type="text/css" >
<link href="https://cdn.logmeonce.com/7.8.5/css/password-manager.css" media="screen" rel="stylesheet" type="text/css" >
<link href="https://cdn.logmeonce.com/7.8.5/css/groups.css" media="screen" rel="stylesheet" type="text/css" >
<link href="https://cdn.logmeonce.com/7.8.5/css/jquery/jcrop/jquery.Jcrop.min.css" media="screen" rel="stylesheet" type="text/css" >
<link href="https://cdn.logmeonce.com/7.8.5/css/tutorials.css" media="screen" rel="stylesheet" type="text/css" >
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/jquery/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/jquery/jquery.validate.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/translate/zh.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/system.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/logmeonce.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/library/angularjs/angular.min.js"></script>
<script type="text/javascript">
    //<!--
    var server = {url: 'https://secure.logmeonce.com', images: function(name) { return 'https://cdn.logmeonce.com/7.8.5/images/'+name }}    //-->
</script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/jquery/fancybox/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/jquery/fancybox/jquery.fancybox-media.js"></script>
<script type="text/javascript">
    //<!--
    $.limitedDefaults = {"limits":{"10":true,"20":true,"50":false,"75":false,"100":false},"referrals":{"50":4,"75":6,"100":8}}    //-->
</script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/password-manager.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/groups.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/shares.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/sjcl.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/tutorials.js"></script>
</head><body>
		<main>
	    	<header>
    		<div class='page-name'><span class='name'>Password Manager</span><span class='total'><i class='fa fa-spinner fa-spin'></i></span></div>
    		<div class='page-nav'>
    			    			<a class='help'><i class='fas fa-question'></i></a>
<start='1699856549' duration='257' ip='111.33.78.6' version='7.8.5' subscription='1'></a>
    		</div>
</form>
<div class='page-body panels'>
<div id='view_container' class='page-panel' view='medium'>
<script>
	$(function() { $("#view_container").dashboard({"groups":[{"id":"default","privileges":1,"name":"\u6536\u85cf\u5939","limit":10,"page":1,"total":1},{"id":816731,"privileges":65535,"shared":false,"name":"\u793e\u4f1a\u7684","limit":10,"page":1,"total":0},{"id":816733,"privileges":65535,"shared":false,"name":"\u91d1\u878d","limit":10,"page":1,"total":0},{"id":816730,"privileges":65535,"shared":false,"name":"\u5b66\u6821","limit":10,"page":1,"total":0},{"id":816732,"privileges":65535,"shared":false,"name":"\u5bb6\u5ead","limit":10,"page":1,"total":0},{"id":816729,"privileges":65535,"shared":false,"name":"\u5de5\u4f5c","limit":10,"page":1,"total":0},{"id":816734,"privileges":65535,"shared":false,"name":"\u65c5\u884c","limit":10,"page":1,"total":0}],"sites":[{"id":5777753,"name":"Speedtest.net (test)","image":"https:\/\/logmeonce-sites.s3.amazonaws.com\/512_speedtest_175x175.jpeg","icon":"https:\/\/logmeonce-sites.s3.amazonaws.com\/512_speedtest_16x16.png","used":0,"created":"2023-11-12 14:11:09","changepassword":false}],"properties":["id","user","beneficiary","group","name","image","icon","used","note","created","changepassword","deleted","key"],"user":{"id":136916,"allowed":65535,"privileges":{"user":65535,"group":65535},"license":1,"vault":true},"override":[]}) });
</script>
</div><div class='page-panel side' style='display: none; flex-basis: 400px' storage-opened='0' >
<div id='site-edit' class='site-edit'   >
</div></div>
</div>       	</div>
        	</main>
	</div>
	<footer></footer>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/jquery/jcrop/jquery.Jcrop.min.js"></script>
<script type="text/javascript">
    //<!--
    $(function() { setTimeout(function() { $.logmeonce.load({"update":false,"extension":"7.8.0","load":{"force":false}}) }, 100) })    //-->
</script>
<script type="text/javascript">
    //<!--
    
		var clicky_custom = clicky_custom || {};
		clicky_custom.session = {
		    'Userid': 136916,
			'License': 'Premium',
			'Account Age': '<1 day'
		};
	    //-->
</script>
<script type="text/javascript">
    //<!--
    $(function() { $('#wrapper').dock({"license":1,"autoplay":true}) });    //-->
</script>
<script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("https://assets.zendesk.com/embeddable_framework/main.js","logmeonce.zendesk.com"); /*]]>*/</script>
<script>zE(function() { zE.hide(); })</script>
<script type="text/javascript">usi_installed = 0; USI_installCode = function() { if (usi_installed == 0) { usi_installed = 1; var USI_headID = document.getElementsByTagName("head")[0]; var USI_installID = document.createElement('script'); USI_installID.type = 'text/javascript'; USI_installID.src = 'https://www.upsellit.com/active/logmeonce.jsp'; USI_headID.appendChild(USI_installID); } }; if (typeof(document.readyState) != "undefined" && document.readyState === "complete") { USI_installCode(); } else if (window.addEventListener){ window.addEventListener('load', USI_installCode, true); } else if (window.attachEvent) { window.attachEvent('onload', USI_installCode); } else { USI_installCode(); } setTimeout("USI_installCode()", 10000);</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-42DMXW52BH"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-42DMXW52BH');
</script>
<script src="//static.getclicky.com/js" type="text/javascript"></script>
<script type="text/javascript">
try{ clicky.init(66630612); }catch(e){}
</script>
	<script type='text/javascript'>
	window.__lo_site_id = 113453;
	window._loq = window._loq || [];
		window._loq.push(["tag", "User-136916"]);
	window._loq.push(["tag", "Premium版"]);
				(function(){ var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true; wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s); })();
	</script>
<script src='https://www.dwin1.com/19036.js' type='text/javascript' defer='defer'></script>
<!-- start Mixpanel --><script type="text/javascript">(function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);
mixpanel.init("0f04a885e345408b7a4141dfede483b2");</script><!-- end Mixpanel -->
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '694754104720072');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=694754104720072&ev=PageView&noscript=1"
/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->
<script>
(function(c,o,v,i,e,w){c[v]=c[v]||function(){(c[v].a=c[v].a||[]).push(arguments)};var s=o.createElement(i);s.src=e;s.async=1;var h=o.getElementsByTagName(i)[0];h.parentNode.insertBefore(s,h);c.addEventListener('error',function(err){c[v]('error',err)});c.addEventListener('message',function(msg){c[v]('message',msg)})})(window,document,'coview','script','https://cdn.coview.com/coview.js');
coview('start', {
  projectKey:'suclbb9f7XY'
});
</script>
</body>
</html>
```

When we open the item, we send

```
GET /password-manager/edit/5777753 HTTP/2
Host: secure.logmeonce.com
Cookie: cf_clearance=WLBHoHTDnHYT7myPZCvMcX6gSWBCDNiuu_v6sTNUkxA-1699777877-0-1-45d3b281.72bd4791.12d2ed61-160.0.0; _gcl_au=1.1.5827917.1699778084; _gid=GA1.2.4702827.1699778257; mp_83328df579349338bfd387ace5d463fa_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18bc2ae38676052f-0eb893c0605623-4c657b58-295d29-18bc2ae386860530%22%2C%22%24device_id%22%3A%20%2218bc2ae38676052f-0eb893c0605623-4c657b58-295d29-18bc2ae386860530%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Flogmeonce.com%2F%3F__cf_chl_tk%3DPmJiJr2v8jJKv88OsWd.BQ_91UdSNMqP547_Ms9TRlI-1699777877-0-gaNycGzNDeU%22%2C%22%24initial_referring_domain%22%3A%20%22logmeonce.com%22%7D; _ga_5SJ4NSG3RM=GS1.2.1699778257.1.1.1699778747.9.0.0; _ga_1GCCD65LGY=GS1.1.1699796679.4.0.1699796679.0.0.0; logmeonce_session=lss519roml82mg9m31m6nqnvdp; auth=AlVRIO4RvAeO68Uqn8vUG99zQ0lv8tsVcfNhwUHUS6dFUtke6ZP8a3tdS2ftm0uMsGm6C7Zd_oNJzdIdFbsmLecisgvvYQTL3zL_Zg; did=AtgOl6KHonKPu0Q-2TK09YcxYN_aOcrN-OTnjUb3zLCbkO5p7S2h; _ga_42DMXW52BH=GS1.1.1699855253.5.1.1699856806.0.0.0; _ga_4WD9D0SVWF=GS1.1.1699855253.5.1.1699856806.60.0.0; _ga=GA1.1.1012208669.1699778255; mp_0f04a885e345408b7a4141dfede483b2_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18bc2b62eb46339-0b2991b6145da3-4c657b58-295d29-18bc2b62eb56339%22%2C%22%24device_id%22%3A%20%2218bc2b62eb46339-0b2991b6145da3-4c657b58-295d29-18bc2b62eb56339%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Flogmeonce.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22logmeonce.com%22%2C%22__alias%22%3A%20136916%2C%22%24user_id%22%3A%20136916%2C%22LMO%20License%22%3A%20%22Premium%20Edition%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D
Sec-Ch-Ua: "Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
Accept: */*
X-Requested-With: XMLHttpRequest
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0
Sec-Ch-Ua-Platform: "Windows"
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://secure.logmeonce.com/password-manager
Accept-Encoding: gzip, deflate, br

```

and receive

```
HTTP/2 200 OK
Date: Mon, 13 Nov 2023 06:31:39 GMT
Content-Type: text/html; charset=UTF-8
Server: nginx
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
Set-Cookie: did=AgZgC-bvHEBU5-hQyUg4YETvcP7WZm2or0yLTuPII7rujI4zsTmP; expires=Wed, 13-Dec-2023 06:31:39 GMT; Max-Age=2592000; path=/; secure
Strict-Transport-Security: max-age=31536000; includeSubdomains
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Content-Security-Policy: default-src 'self' https://cdn.logmeonce.com https://logmeonce.s3.amazonaws.com https://logmeonce-sites.s3.amazonaws.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://cdn.logmeonce.com https://assets.zendesk.com https://*.zdassets.com https://clicky.com https://*.getclicky.com https://*.sharethis.com https://*.facebook.net https://*.facebook.com https://*.googleapis.com https://www.google.com https://*.gstatic.com https://*.google-analytics.com https://www.googletagmanager.com https://www.googleadservices.com https://*.zopim.com https://*.stripe.com https://d10lpsik1i8c69.cloudfront.net https://shareasale-analytics.com https://www.dwin1.com https://cdn.mxpnl.com https://www.upsellit.com https://*.coview.com; style-src 'self' 'unsafe-inline' https://cdn.logmeonce.com https://logmeonce.s3.amazonaws.com https://assets.zendesk.com https://*.zdassets.com https://*.getclicky.com https://*.sharethis.com https://*.googleapis.com https://d10lpsik1i8c69.cloudfront.net https://*.coview.com; img-src * data: blob:; frame-src 'self' https://cdn.logmeonce.com https://*.zendesk.com https://*.sharethis.com https://*.facebook.com https://*.duosecurity.com app://logmeonce-ios app://logmeonce-macos https://*.youtube.com https://*.stripe.com https://www.google.com https://*.coview.com; font-src 'self' data: https://cdn.logmeonce.com https://*.gstatic.com https://*.zopim.com https://*.coview.com; connect-src 'self' https://cdn.logmeonce.com https://*.amazonaws.com wss://*.logmeonce.com wss://*.zopim.com https://logmeonce.zendesk.com https://*.zdassets.com https://*.getclicky.com https://*.backblaze.com https://*.backblazeb2.com https://content.dropboxapi.com https://*.sharepoint.com https://api.onedrive.com https://graph.microsoft.com https://*.1drv.com https://*.googleapis.com https://*.doubleclick.net https://*.google-analytics.com https://*.luckyorange.net wss://visitors.live wss://*.visitors.live https://api.pwnedpasswords.com https://*.mixpanel.com https://*.coview.com wss://*.coview.com; media-src 'self' https://cdn.logmeonce.com https://static.zdassets.com https://d10lpsik1i8c69.cloudfront.net
X-Frame-Options: SAMEORIGIN

<link href="https://cdn.logmeonce.com/7.8.5/css/password-manager.css" media="screen" rel="stylesheet" type="text/css" >
<link href="https://cdn.logmeonce.com/7.8.5/css/jquery/jcrop/jquery.Jcrop.min.css" media="screen" rel="stylesheet" type="text/css" >
<link href="https://cdn.logmeonce.com/7.8.5/css/storage.css" media="screen" rel="stylesheet" type="text/css" ><script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/password-manager.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/library/streamsaver/ponyfill.min.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/library/streamsaver/StreamSaver.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/sjcl.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/shares.js"></script>
<script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/storage.js"></script><div id='site-edit' class='site-edit tabs' site='5777753' init='{"site":{"id":5777753,"auth":1},"allowed":65535,"policy":0,"leaked":false,"storage":{"allowed":65535}}' style='display: none'>
<div class='panel-header'>Application</div>
<div id='tab-details'><form novalidate action='https://secure.logmeonce.com/password-manager/edit/5777753' method='post' enctype='multipart/form-data' autocomplete='off'>
<input type='hidden'  name='save_changes'>
<input type='hidden' name='csrf_token' value='026003e8a811e161e9e4c6e1247fb4af1034ef1cc9e76553db769c05478b339f6eb4ff5d4229b2b9325d3755cc065dee48d87b9411a5a00bb4ebb25b1e643b37033a3ed69819b0b76477642c083e408a44c1ad46808cad96d1d5d5'><div class='splitted dash'>
<div class='info-panel'>
	<div class='icon-panel'>
				<div class='config-picture toggle'>
			<a class='btn orange'>改变</a>
			<div class='site-logo' style='background-image: url(https://logmeonce-sites.s3.amazonaws.com/512_speedtest_175x175.jpeg)'>
				<img src='https://logmeonce-sites.s3.amazonaws.com/512_speedtest_175x175.jpeg'>
			</div>
		</div>
				<div class='icons'>
	<input type='text' name='name' value='Speedtest.net&#x20;&#x28;test&#x29;' maxlength='100' required>
		<div class='toolbox'>
			</div>
			<select name='group'>
						<option value='default' >&#x6536;&#x85cf;&#x5939;</option>
						<option value='816731' >&#x793e;&#x4f1a;&#x7684;</option>
						<option value='816733' >&#x91d1;&#x878d;</option>
						<option value='816730' >&#x5b66;&#x6821;</option>
						<option value='816732' >&#x5bb6;&#x5ead;</option>
						<option value='816729' >&#x5de5;&#x4f5c;</option>
						<option value='816734' >&#x65c5;&#x884c;</option>
					</select>
			<input type='url' name='login_url' value='http&#x3a;&#x2f;&#x2f;speedtest.net' size='40' maxlength='2048'>
								<div class='inputs'></div>
	<div id='totp-setup' class='totp-setup' style='display: none'>
	</div>
		</div>
<div class='info-panel image-panel'>
		</table>
		<div class='config-picture' style='position: relative; text-align: center'>
			<div class='site-logo' style='background-image: url(https://logmeonce-sites.s3.amazonaws.com/512_speedtest_175x175.jpeg)'>
				<img src='https://logmeonce-sites.s3.amazonaws.com/512_speedtest_175x175.jpeg'>
			</div>
		</div>
</div>
</div>
<p class='btn-right'>
<div id='tab-storage'><div class='add-files'>
	<a class='btn plus small orange'>New</a>
	<span></span>
		<a class='buy-storage upgrade-dialog' href='https://secure.logmeonce.com/subscription/checkout/storage' target='_blank' upgrade='Please buy additional secure drive storage.'>Buy more storage</a>
	</div>
<table class='tbl compact files'>
	<tbody></tbody>
</table>
<div id='upload' class="upload">
	<div class="service"></div>
	<div class="input">
		<a class='close'><i class='fa fa-times'></i></a>
		<i class='fal fa-upload'></i>
		<label class="select">
			<input class="file" type="file" name="file" multiple />
			<strong>Choose a file</strong><span class="dragdrop"> or drag & drop it here</span>.
		</label>
	</div>
</div>
<div id='download' class='upload uploading'>
	<a class='close'><i class='fa fa-times'></i></a>
</div></div>
</div><script type="text/javascript" src="https://cdn.logmeonce.com/7.8.5/js/jquery/jcrop/jquery.Jcrop.min.js"></script>
```

When adding items, we send

```
POST /rest/sites/ HTTP/2
Host: secure.logmeonce.com
Cookie: cf_clearance=WLBHoHTDnHYT7myPZCvMcX6gSWBCDNiuu_v6sTNUkxA-1699777877-0-1-45d3b281.72bd4791.12d2ed61-160.0.0; _gcl_au=1.1.5827917.1699778084; _gid=GA1.2.4702827.1699778257; mp_83328df579349338bfd387ace5d463fa_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18bc2ae38676052f-0eb893c0605623-4c657b58-295d29-18bc2ae386860530%22%2C%22%24device_id%22%3A%20%2218bc2ae38676052f-0eb893c0605623-4c657b58-295d29-18bc2ae386860530%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Flogmeonce.com%2F%3F__cf_chl_tk%3DPmJiJr2v8jJKv88OsWd.BQ_91UdSNMqP547_Ms9TRlI-1699777877-0-gaNycGzNDeU%22%2C%22%24initial_referring_domain%22%3A%20%22logmeonce.com%22%7D; _ga_5SJ4NSG3RM=GS1.2.1699778257.1.1.1699778747.9.0.0; _ga_1GCCD65LGY=GS1.1.1699796679.4.0.1699796679.0.0.0; logmeonce_session=lss519roml82mg9m31m6nqnvdp; auth=AlVRIO4RvAeO68Uqn8vUG99zQ0lv8tsVcfNhwUHUS6dFUtke6ZP8a3tdS2ftm0uMsGm6C7Zd_oNJzdIdFbsmLecisgvvYQTL3zL_Zg; _ga_42DMXW52BH=GS1.1.1699855253.5.1.1699857223.0.0.0; mp_0f04a885e345408b7a4141dfede483b2_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18bc2b62eb46339-0b2991b6145da3-4c657b58-295d29-18bc2b62eb56339%22%2C%22%24device_id%22%3A%20%2218bc2b62eb46339-0b2991b6145da3-4c657b58-295d29-18bc2b62eb56339%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Flogmeonce.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22logmeonce.com%22%2C%22__alias%22%3A%20136916%2C%22%24user_id%22%3A%20136916%2C%22LMO%20License%22%3A%20%22Premium%20Edition%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D; _ga_4WD9D0SVWF=GS1.1.1699855253.5.1.1699857223.51.0.0; _ga=GA1.1.1012208669.1699778255; did=AkZqR8KBvBtX-JgGyA7T5l3t6DXSyV4hkrjAyEnoXCVi6deD7E73
Content-Length: 1016
Sec-Ch-Ua: "Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
X-Logmeonce: Extension/7.8.0; Device (Screen/3840x2160)
Sec-Ch-Ua-Mobile: ?0
Authorization: Token 02d4a466646249a6034b235c546997a5a491810876ed53be65b7496c4efe9ff23d94153cbb7e0101ce1d170652d0c26b06ba09292e55e3d6a598028448b19bb3b6acfd
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Accept: application/x-logmeonce-binary
Sec-Ch-Ua-Platform: "Windows"
Origin: chrome-extension://ahknoflpikaolmchfkipgjkgccjckpag
Sec-Fetch-Site: none
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br

catalog=258&name=YouTube+(test2)&url=https%3A%2F%2Faccounts.google.com%2FServiceLogin%3Fservice%3Dyoutube%26continue%3Dhttp%253A%2F%2Fwww.youtube.com%2Fsignin%253Faction_handle_signin%253Dtrue%2526feature%253Dsign_in_button%2526hl%253Den_US%2526next%253D%25252F%2526nomobiletemp%253D1%2526uilel%253D3%2526passive%253Dtrue&group=default&inputs%5B0%5D%5Bflags%5D=3&inputs%5B0%5D%5Bname%5D=%5B%22identifier%22%2C+%22Email%22%5D&inputs%5B0%5D%5Btype%5D=text&inputs%5B0%5D%5Blabel%5D=%E7%94%A8%E6%88%B7%E5%90%8D&inputs%5B0%5D%5Bvalue%5D=ARO7jVhsu3G0zU%2FAVfvGATv9V9m0L%2BrhKhlWmyWGpGPkA9mrBVUZy5AVloDqf%2BWc47aYWjY%3D&inputs%5B1%5D%5Bflags%5D=5&inputs%5B1%5D%5Bname%5D=%5B%22password%22%2C+%22Passwd%22%5D&inputs%5B1%5D%5Btype%5D=password&inputs%5B1%5D%5Blabel%5D=%E5%AF%86%E7%A0%81&inputs%5B1%5D%5Bvalue%5D=ARO7jVgmhKJb7S3ULleeENAVOx%2BI7ehrH%2BfcbR4KINbCPWFsANn2vUwi730t%2B4D4cPuUCyE%3D&inputs%5B1%5D%5Bpolicy%5D=1541&inputs%5B1%5D%5Bstrength%5D=3&files=wSS4PHJfa8CgdHEZD2RevFe9DP9FZTfD&username=test2&desktopMode=false
```

Finding:

1. The URL and server icon are in plain.
