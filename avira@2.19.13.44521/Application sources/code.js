HTTP/2 200 OK
Content-Type: text/javascript
X-Amz-Id-2: bxvqRCyVyPFbNuVKauH54joWWytIU+wpI3OkNL7pGDvhVEsUhX8DQ5nsegcAmC4GpjngTbGwqWM=
X-Amz-Request-Id: 5PWA7D01PJNN92QN
Date: Sat, 04 Nov 2023 10:14:57 GMT
Last-Modified: Fri, 03 Nov 2023 10:14:16 GMT
Etag: W/"070423046b9a46f604e0f594d48c3d03"
X-Amz-Server-Side-Encryption: AES256
Server: AmazonS3
Vary: Accept-Encoding
Content-Security-Policy: default-src 'none';script-src 'self' 'unsafe-eval' 'sha256-UQ4IcwjEmI4Qhxwovrj8q4whK/ESZgwWhrBZDYcKrdc=' https://www.google.com https://www.gstatic.com https://connect.facebook.net https://apis.google.com https://www.youtube.com https://s.ytimg.com https://recaptcha.net https://appleid.cdn-apple.com;script-src-elem 'self' 'unsafe-eval' 'sha256-UQ4IcwjEmI4Qhxwovrj8q4whK/ESZgwWhrBZDYcKrdc=' https://www.google.com https://www.gstatic.com https://connect.facebook.net https://apis.google.com https://www.youtube.com https://s.ytimg.com https://recaptcha.net https://appleid.cdn-apple.com;connect-src https: wss://*.amazonaws.com;manifest-src 'self';style-src 'self' 'unsafe-inline';img-src 'self' data: https://d1qxpxz36vqnj6.cloudfront.net https://mya-profile-cdn-acc.s3.amazonaws.com https://mya-profile-cdn-prod.s3.amazonaws.com https://*.googleusercontent.com https://platform-lookaside.fbsbx.com https://graph.facebook.com https://*.ytimg.com;font-src 'self' data:;frame-src https://staticxx.facebook.com https://accounts.google.com https://www.google.com https://www.youtube.com https://recaptcha.net;child-src 'self' https://staticxx.facebook.com https://accounts.google.com https://www.google.com https://www.youtube.com;worker-src 'self';report-uri https://sentry.avira.net/api/51/security/?sentry_key=ef319e6f61be4e9cb150fc291970bf52&sentry_environment=production
Referrer-Policy: same-origin
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
X-Frame-Options: SAMEORIGIN
X-Cache: Hit from cloudfront
Via: 1.1 8040fa6d8aac20b59b33e0d268ca8c1a.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: LAX50-C3
X-Amz-Cf-Id: wLmgDuRvrNsHD102oxtKZ1_6GIMegPGaLqzkEibPvRutqxz5vo4sVg==
Age: 61143

//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
//

(function (global) {

  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {

    /**
     * @namespace globals
     * @desc Namespace that captures the browser name and product GUID.
     */
    var globals				= {} ;

    /**
     * @const BROWSER
     * @desc A constant that gets the browser name so we can do some browser specific stuff.
     *       If your code is completely browser specific you need to have a separate implementation file.
     */
    globals.BROWSER 	= "Portal";

    /**
     * @const PRODUCT_GUID
     * @desc A test product GUID should we ever need to invoke the BfwConnection APIs.
     */
		globals.PRODUCT_GUID = "DC6B1B05-C7B2-43EB-81E3-CBD3896553C2";

    if(window.browser) {
      window.chrome = window.browser;
    }

		return globals;
  }//end of initModule


  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  (global.SymBfw = global.SymBfw || {}).globals = initModule(global.SymBfw);
  /* ########## End module wrapper ########## */

})(this); //end of module function
/*———————————————————————————————————————————————————————————————————————————————————————

NortonDebug.js :	Some Debugging utilities

NortonLifeLock copyright header start

Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.

THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.

The Licensed Software and Documentation are deemed to be commercial computer
software as defined in FAR 12.212 and subject to restricted rights as defined
in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
Computer Software Documentation", as applicable, and any successor regulations.
Any use, modification, reproduction release, performance, display or disclosure
of the Licensed Software and Documentation by the U.S. Government shall be
solely in accordance with the terms of this Agreement.

NortonLifeLock copyright header stop

BrowserFramework
Change History :
09/30/14 EEL	Adding to P4.

———————————————————————————————————————————————————————————————————————————————————————*/
/*
@file NortonDebug.js
@abstract This header contains implementation for DOM utilites
@author Elliott Lee
@discussion HeaderDoc doesn't really work well with JavaScript. It seems to get
confused with functions declared like myfunc = function().  Also there's really
no built-in namespace so the way the namespace is setup isn't understood by
HeaderDoc and it requires that the full namespace be added to the var/function
names. The HeaderDoc output for functions includes the full implementation of the
function.
*/
/////////////////////////////////////////////////////////////////////////////////////////
// html dom utils
(function (global) {

  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {

    /*
    @namespace logger	Helps with logging
    */
    var logger = {};
    /**
    * @const DEBUG_MODE
    * @desc Will enable and disable logging based on release and debug builds.
    */
    var DEBUG_MODE = false;
    /*
    @function debug prints a debug message to the console. In release this method will be a no-op.
    */
    logger.debug = function(message) {

      if(DEBUG_MODE) {
        console.debug(message);
      }
    };

    /*
    @function log Prints a log message to the console. In release this method will be a no-op.
    */
    logger.log = function(message) {
      if(DEBUG_MODE) {
        console.log(message);
      }
    };

    /*
    @function error Prints an error message to the console. These messages are always available.
    */
    logger.error = function(message) {
      console.error(message);
      var telemetryWrapper = SymBfw.telemetryWrapper;
      telemetryWrapper.send(telemetryWrapper.componentType.LOGGER, telemetryWrapper.actionType.ERROR, message);
    };

    /*
    @function warn Prints an warn message to the console. These messages are always available.
    */
    logger.warn = function(message) {
      console.warn(message);
      var telemetryWrapper = SymBfw.telemetryWrapper;
      telemetryWrapper.send(telemetryWrapper.componentType.LOGGER, telemetryWrapper.actionType.WARN, message);
    };

    /*
    @function info Prints an info message to the console. These messages are always available.
    */
    logger.info = function(message) {
      console.info(message);
    };

    return logger;
  }//end of initModule


  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  (global.SymBfw = global.SymBfw || {}).logger = initModule(global.SymBfw);
  /* ########## End module wrapper ########## */

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Thu Jun 09 2016 sriharsha_angara Adding to Git.
//

(function (global) {
  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {

    var constants = {};
    constants.httpStatusCodes = {};
    constants.localizer = {
      /**
       * @property DEFAULT_MESSAGES_DICTIONARY
       */
      DEFAULT_MESSAGES_DICTIONARY : "strings",

      /**
       * Request payload: unlocalized string.
       * Response payload: localized string.
       * @property GET_LOCALIZED_STRING
       */
      GET_LOCALIZED_STRING                  : "44F4D54E-AB86-454C-A494-DE3AD87E72F9",

      /**
       * Request payload: [array of unlocalized string]
       * Response payload: [array of localized string]
       * @property GET_LOCALIZED_STRINGS
       */
      GET_LOCALIZED_STRINGS                 : "0D1C5EEF-749F-4EEB-AD6D-F9C26018EE91",

      /**
       * Request payload: {
       *                    string: unlocalized string
       *                    name : dictionaryName
       *                  }
       * Response payload: <localized string>
       * @property GET_LOCALIZED_STRING_FROM_DICTIONARY
       */
      GET_LOCALIZED_STRING_FROM_DICTIONARY  : "D15C0B4C-DC1B-403F-A3C8-8BB42137B325",

      /**
       * Request payload: {
       *                    array: [array of unlocalized string]
       *                    name : dictionaryName
       *                  }
       * Response payload: [array of localized string]
       * @property GET_LOCALIZED_STRINGS_FROM_DICTIONARY
       */
      GET_LOCALIZED_STRINGS_FROM_DICTIONARY : "88313974-C371-4A8D-9196-0A2CE43C8327",

      /**
       * Request payload: {
       *                    string: unlocalized-format-string
       *                    params : [array of params]
       *                  }
       * Response payload: localized string
       * @property GET_LOCALIZED_STRING_WITH_FORMAT
       */
      GET_LOCALIZED_STRING_WITH_FORMAT      : "F3D7C8CE-B1A9-425A-AD24-4120C592AF86",

      /**
       * Request payload: {
       *                    string: unlocalized-format-string
       *                    name : dictionary name
       *                    params : [array of params]
       *                  }
       * Response payload: localized string
       * @property GET_LOCALIZED_STRING_WITH_FORMAT_FROM_DICTIONARY
       */
      GET_LOCALIZED_STRING_WITH_FORMAT_FROM_DICTIONARY : "9066F4CC-31A4-45F5-A07A-81DDC38E5F99",

      /**
       * Request payload: {}
       * Response payload: direction (ltr/rtl)
       * @property GET_CURRENT_LANGUAGE_DIRECTION
       */
      GET_CURRENT_LANGUAGE_DIRECTION : "C30B2719-DD82-41EC-E93A-8A602444F90A",

      /**
       * Request payload: {
       *                    formatStringDict: Dictionary holding unlocalized string to be formatted
       *                  }
       * Response payload: Object containing localized formatted string
       */
      GET_LOCALIZED_STRINGS_WITH_FORMAT: "E225C9A6-209A-4702-8E48-3B6EFBF67E26"
    };

    constants.clipboard = {
      messages : {
        /**
         * @property CLEAR_CLIPBOARD message to clear clipboard sent from CS to BG
         * @type {string}
         */
        CLEAR_CLIPBOARD: "aa232db5-1dba-473a-ab4b-e9c378b7978b"
      },
      DEFAULT_TIMEOUT : 60000
    };

    /**
    * @constant OK
    * @desc Standard response for successful HTTP requests
    */
    constants.httpStatusCodes.OK = 200;

    /**
    * @constant PARTIAL_CONTENT
    * @desc PARTIAL_CONTENT response for successful HTTP requests
    */
    constants.httpStatusCodes.PARTIAL_CONTENT = 206;

    /**
    * @constant CREATED
    * @desc The request has been fulfilled and resulted in a new resource being created
    */
    constants.httpStatusCodes.CREATED = 201;

    /**
    * @constant NO_CONTENT
    * @desc The request has been fulfilled and resulted in a new resource being created
    */
    constants.httpStatusCodes.NO_CONTENT = 204;

    /**
    * @constant INCORRECT_URI
    * @desc Use of incorrect (Web UI) URl is used for REST calls
    */
    constants.httpStatusCodes.INCORRECT_URI = 302;

    /**
    * @constant NOT_MODIFIED
    * @desc Lets us know that nothing has changed in SPOC.
    */
    constants.httpStatusCodes.NOT_MODIFIED = 304;

    /**
    * @constant BAD_REQUEST
    * @desc The request cannot be fulfilled due to bad syntax
    */
    constants.httpStatusCodes.BAD_REQUEST = 400;

    /**
    * @constant UNAUTHORIZED
    * @desc Authentication is required and has failed or has not yet been provided
    */
    constants.httpStatusCodes.UNAUTHORIZED = 401;

    /**
    * @constant INVALID_SCHEMA
    * @desc Authentication is required and has failed or has not yet been provided
    */
    constants.httpStatusCodes.INVALID_SCHEMA = 403;

    /**
    * @constant NOT_FOUND
    * @desc The requested resource could not be found but may be available again in the future
    */
    constants.httpStatusCodes.NOT_FOUND = 404;

    /**
    * @constant HEADER_ERROR
    * @desc Not Acceptable: Header error.
    */
    constants.httpStatusCodes.HEADER_ERROR = 406;

    /**
    * @constant GONE
    * @desc The requested resource is no longer available at the server
    */
    constants.httpStatusCodes.GONE = 410;

    /**
    * @constant ENTITY_TOO_LARGE
    * @desc SPOC Error code when entity is too large for the request.
    */
    constants.httpStatusCodes.ENTITY_TOO_LARGE = 413;

    /**
    * @constant DATASTORE_RATE_LIMITED
    * @desc O2 error code when datastore gets ratelimited failing to answer challenge
    */
    constants.httpStatusCodes.DATASTORE_RATE_LIMITED = 429;

    /**
    * @constant RATE_LIMITING
    * @desc The request was rejected due to rate limiting
    */
    constants.httpStatusCodes.RATE_LIMITING = 503;

    /**
    * @constant SERVER_ERROR
    * @desc A generic error message, given when no more specific message is suitable
    */
    constants.httpStatusCodes.SERVER_ERROR = 500;

    constants.telemetry = {
      TELEMETRY_ENABLED: "293E0764-AF48-4C52-B675-0161A7B6BECE",

      TELEMETRY_OPT_OUT_SHOWN: "FE795012-44D6-491D-A8A1-E83633892C9D",

      BFW_TELEMETRY_SETTINGS_CONTAINER: "233D07C0-6318-4BCE-A36A-82DFB19F3B2A",

      USER_RESPONDED_IN_OPT_OUT_PAGE: "8157BC1F-5ED8-4373-A18D-8CD8E0263752",

      LAST_OFFER_DATE : "9EA53F0C-7F18-44A5-8138-C11F27D66FC1"
    };

    constants.os = {
      WINDOWS : "Windows",
      MAC : "Mac",
      UNKNOWN : "Unknown"
    };

    constants.browsers = {
      CHROME : "Chrome",
      FIREFOX : "Firefox",
      SAFARI : "Safari",
      EDGE : "Edge",
      CHROMIUM_EDGE : "Edg",
      IE : "IE",
      OTHER : "Other"
    };

    constants.validateIE = {
      MSIE : "MSIE ",
      Trident : "Trident/"
    }

    var notification = {};

    /**
    * @const IFRAME_ID
    * @desc Constant for iframe id of the notification popup
    */
    notification.IFRAME_ID = "symc-notification-popup";

    /**
    * @const HTML
    * @desc Constant for HTML of the notification popup
    */
    notification.HTML= "content/ui/notification.html";

    /**
    * @const STYLE
    * @desc Constant for CSS of the notification popup that need to injected on the page
    */
    notification.STYLE= "content/ui/content-page.css";

    /**
    * @const STACK_COUNT
    * @desc Constant for specifying the number of notifications need to be shown at a time
    */
    notification.STACK_COUNT = 1;

    /**
    * @const DEFAULT_TIMEOUT
    * @desc Constant for specifying the default timeout for a timed notification
    */
    notification.DEFAULT_TIMEOUT = 10000;

    /**
    * @const HEIGHT
    * @desc Constant for specifying the height of the notification frame
    */
    notification.HEIGHT = 160;

    /**
    * @const WIDTH
    * @desc Constant for specifying the width of the notification frame
    */
    notification.WIDTH = 460;

    notification.TYPE = {
      QUESTION : 0,
      TIMED : 1
    };

    notification.BUTTON = {
      DEFAULT : 0,
      SECONDARY : 1,
    };

    notification.MESSAGES = {
      /**
      * @property DEFAULT_MESSAGE The default message that is sent from content side to BG or vice versa.
      *                           This messageID only indicates that payload needs to be forwarded to handleMessage.
      * @type {String}
      */
      DEFAULT_MESSAGE : "8DB8FE17-6F5E-485E-81EE-1112762F48E4",

      /**
      * @property DEFAULT_BUTTON_PRESSED Lets us know that for the given notification the default button has been pressed.
      * @type {String}
      */
      DEFAULT_BUTTON_PRESSED : "209CBB4D-6D6B-46F4-9EA7-303181937BF6",

      /**
      * @property SECONDARY_LINK_PRESSED Lets us know that for the given notification the secondary link has been pressed.
      * @type {String}
      */
      SECONDARY_LINK_PRESSED : "8881560D-E8A2-41FA-A81D-A90D41311D0D",


      /**
      * @property THIRD_BUTTON_PRESSED Lets us know that for the given notification the third button has been pressed.
      * @type {String}
      */
      THIRD_BUTTON_PRESSED: "196F06EB-956E-44EE-A60D-F4741C5CF4D3",

      /**
      * @property NOTIFICATION_CLOSED Lets us know that user closed a notification.
      * @type {String}
      */
     NOTIFICATION_CLOSED : "EA7414A5-667F-4459-BAC2-38464F3330A3",

     /**
     * @property NOTIFICATION_QUEUE_MESSAGE When a event with this guid is recevied the data associated with it will contain an array of serialized notifications.
     * @type {String}
     */
     NOTIFICATION_QUEUE_MESSAGE : "A88CCFCD-B98D-4607-B780-79A1CF7ADFAD",

     /**
     * @prop NOTIFICATIONS_SHOWN The list of notifications that are currently being shown to the user.
     * @type {String}
     */
     NOTIFICATIONS_SHOWN : "57C094C2-F0F0-44C2-9BBF-9E147135FB50",

     /**
     * @property UI_INIT Used for communication between the notification UI (iframe) and the background page
     * @type {String}
     */
     UI_INIT : "EE5B61D6-3A55-4ABB-B304-02BDAD9698FE",

     /**
     * @property UI_INIT_PROXY Used for communication between the background script and the notification proxy
     * @type {String}
     */
     UI_INIT_PROXY : "0FABE0DB-1C87-475B-D89E-F4EC0EE963DE"

   };


    var uiConstants = {
      NOTIFICATION : notification,

      /**
      * @property CONTENT_PAGE_STYLE_ID The id of the style element that will be injected into the host webpage
      * @type {String}
      */
      CONTENT_PAGE_STYLE_ID: "symc-content-stylesheet"
    };

    constants.uiConstants = uiConstants;

    constants.performanceReporter = {
      MESSAGES : {
        REPORT_START : "2379B4CB-E725-4818-8FCC-A9372EABBF45",

        REPORT_END : "1F62DD4E-56AD-4528-9A69-BFE9EC135B9F",

        GET_PERFORMANCE_REPORTER : "2306DE62-ACA8-40AE-9909-517474C1120B"
      }
    };

    constants.utils = {
      IP : "ip"
    };

    return constants;
  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.constants = initModule(global.SymBfw);
})(this); //end of module function
/*———————————————————————————————————————————————————————————————————————————————————————

 NortonUtils.js :	Miscellaneous utilities for the extension

 NortonLifeLock copyright header start

 Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.

 THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
 INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
 EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.

 The Licensed Software and Documentation are deemed to be commercial computer
 software as defined in FAR 12.212 and subject to restricted rights as defined
 in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
 and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
 Computer Software Documentation", as applicable, and any successor regulations.
 Any use, modification, reproduction release, performance, display or disclosure
 of the Licensed Software and Documentation by the U.S. Government shall be
 solely in accordance with the terms of this Agreement.

 NortonLifeLock copyright header stop

 BrowserFramework
 Change History :
 11/05/14 EEL	Adding to P4.

 ———————————————————————————————————————————————————————————————————————————————————————*/
 /*jshint esversion: 6 */
(function (global) {
    "use strict";
    /* ########## Begin module implementation ########## */
    function initModule(SymBfw) {

        /*
         @description You should never have to include this file. This is a private class.
         @namespace utils	utils class performs some helper utils.
         */
         var utils = {};

         var browser = SymBfw.globals.BROWSER;
         var constants = SymBfw.constants;

         /*
          @function createNewGuid
          @abstract Create a GUID string
          @namespace bfwUtils
          @return Returns a GUID string
          */
         utils.createNewGuid = function () {
             var d = new Date().getTime();
             var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                 var r = (d + Math.random() * 16) % 16 | 0;
                 d = Math.floor(d / 16);
                 return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
             });

             return uuid;
         };

         /**
          * @function isGuid
          * @description Checks if the passed value is a valid UUID.
          * Note: This doesn't conform to the RFC for UUIDs and validates
          * just the basic structure for GUIDs created/used in BFW
          * @param {String (uuid)} guid GUID to be validated
          * @returns True if it matches a valid GUID format, False otherwise
          */
         utils.isGuid = (guid) => {
           if (!utils.isString(guid)) {
             return false;
           }

           return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
             guid.toLowerCase()
           );
         };

         /**
         * @function stringUTF16LEToByteArray
         * @desc Converts every character in the string into two bytes and returns an array of the bytes in little endian format.
         * @param {string} input A Javascript string i.e., a UTF-16
         * @returns {Array} Breaks every character in the string into two bytes and stores them in little endian format in an array.
         */
         utils.stringUTF16LEToByteArray = function(input){
           if(this.isString(input) === false) {
             throw new Error("Input string cannot be null or is not a string");
           }

           var bytes = [];
           for (var i = 0; i < input.length; ++i) {
             var charCode = input.charCodeAt(i);
             //bitwise OR with charCode & 255
             var firstByte = (charCode & 0xFF);
             //bitwise OR with charCode & 65280
             var secondByte = (charCode & 0xFF00) >> 8;
             bytes.push(firstByte);
             bytes.push(secondByte);
           }
           return bytes;
         };

         /**
         * @function arrayBufferToStringUTF16LE
         * @desc Converts an Uint8Array into a JavaScript array of bytes.
         * @param {Uint8Array | ArrayBuffer} input The array buffer you want to convert.
         * @returns {string} The UTF16 string reprensetation of the array buffer
         */
         utils.arrayBufferToStringUTF16LE = function(input) {
           if(this.isNil(input)) {
             return null;
           }
           if(input instanceof ArrayBuffer) {
             input = new Uint8Array(input);
           }
           var byteArray = [];
           for(var index=0; index< input.byteLength; index++)  {
             byteArray.push(input[index]);
           }
           return this.byteArrayToStringUTF16LE(byteArray);
         };

         /**
         * @function byteArrayToStringUTF16LE
         * @desc Constructs a character out of every two bytes and
         * @param {Array} byteArray UTF16 LE strings in byte array with two bytes comprising of a single character.
         * @returns {string} The UTF16 i.e, JavaScript string reprensentation of
         */
         utils.byteArrayToStringUTF16LE = function(byteArray) {
           if(this.isArray(byteArray) === false)  {
             throw new Error("Byte array cannot be null or is not an array");
           }

           if(byteArray.length < 2) {
             throw new Error("Byte array needs to contain at least two bytes");
           }

           if((byteArray.length % 2)!== 0) {
             throw new Error("Byte array needs to contain even number of bytes");
           }

           var output = "";
           for(var index= 0; index< byteArray.length-1; index+=2) {

             var firstByte = byteArray[index];
             if(firstByte > 255) {
               throw new Error("Encoding error: Input contains element larger than a byte.");
             }
             firstByte = (firstByte & 0xFF);
             var secondByte = byteArray[index+1];

             if(secondByte > 255) {
               throw new Error("Encoding error: Input contains element larger than a byte.");
             }

             secondByte = ((secondByte << 8) & 0xFF00);
             var charCode = firstByte + secondByte;
             output += String.fromCharCode(charCode);
           }
           return output;
         };

         /**
          * @func downloadFileFromUrl
          * @desc Wrapper to download a file from url
          * @param  {url} specify url path to download a file
          * @return none
          *
          */
          utils.downloadFileFromUrl = function(filepath){
            var iframe = document.createElement('iframe');
            iframe.style.display = "none";
            iframe.src = filepath;
            iframe.width = "1";
            iframe.height = "1";
            iframe.frameborder = "0";
            document.body.appendChild(iframe);
            setTimeout(function(){
              document.body.removeChild(iframe);
            },5000);
          };
         /**
          * @function obfuscatesPassword  this same method is used to obfuscate the password and deobfuscate the password
          *
          * @param  {string} password passed to tobe obfuscated
          * @param  {string} obfuscationKey passed to obfuscate with password
          * @return {string}   return obfuscate password as clear text
          */

         utils.obfuscatePassword = function(password,obfuscationKey){

           if(this.isString(password) === false) {
             throw new Error("password  cannot be null and has to be a string");
           }
           if(this.isString(obfuscationKey) === false) {
             throw new Error("obfuscationKey  cannot be null and has to be a string");
           }
           var passwordBuffer = new Uint8Array(SymBfw.utils.stringUTF16LEToByteArray(password));
           var obfuscateKeyBuffer = new Uint8Array(SymBfw.utils.stringUTF16LEToByteArray(obfuscationKey));
           var obfuscatePassword = SymBfw.utils._obfuscateData(passwordBuffer,obfuscateKeyBuffer);
           obfuscatePassword = SymBfw.utils.arrayBufferToStringUTF16LE(obfuscatePassword);
           return obfuscatePassword;
         };

         /**
         * @function obfuscateData
         * @desc An API that obfuscates the item.
         * @param {ArrayBuffer | Uint8Array} data The data you want to obfuscate.
         * @param {string | Uint8Array} obfuscationKey The obfuscation key we XOR with.
         * @return {Uint8Array} Returns the obfuscated data.
         */
         utils._obfuscateData = function(data, obfuscationKey) {
           if(utils.isNil(data)) {
             return null;
           }
           if(utils.isNil(obfuscationKey)) {
             return null;
           }

           if(data instanceof ArrayBuffer) {
             data = new Uint8Array(data);
           }

           if(obfuscationKey instanceof ArrayBuffer) {
             obfuscationKey = new Uint8Array(obfuscationKey);
           }
           var length = data.byteLength;
           var returnData = new Uint8Array(length);
           for(var index = 0; index< length; index++) {
             returnData[index] = data[index] ^ obfuscationKey[index % length];
           }

           return returnData;
         };

         /**
          * @function getOSType
          * @summary get the OS type ,Retuns the OS type Eg:windows or Mac
          *
          */
         utils.getOSType = function() {
           var OSType=constants.os.UNKNOWN;
           if (navigator.appVersion.toLowerCase().indexOf("win")!=-1) {
             OSType = constants.os.WINDOWS;
           }
           else if (navigator.appVersion.toLowerCase().indexOf("mac")!=-1){
             OSType=constants.os.MAC;
           }
           return OSType;
         };

         /**
          * @function isWin10OS
          * @summary determines if current Windows OS is Windows 10
          *
          */
         utils.isWin10OS = function(){
           if(utils.getOSType() === constants.os.WINDOWS){
             return navigator.userAgent.includes("Windows NT 10.0");
           }

           return false;
         };

         /*
          @function isNil
          @abstract Checks if object is null or undefined.
          @param obj	The object to check.
          @return True if obj is null or undefined.
          */
         utils.isNil = function (obj) {
             // undefined check moved as the first condition to handle undeclared variables
             if (typeof obj === 'undefined' || obj === null) {
                 return true;
             }

             return false;
         };


         /*
          @function isntNil
          @abstract Checks if object is not null and undefined.
          @param obj	The object to check.
          @return True if obj is not null and undefined.
          */
         utils.isntNil = function (obj) {
             // undefined check moved as the first condition to handle undeclared variables
             if (typeof obj !== 'undefined' && obj !== null) {
                 return true;
             }

             return false;
         };

         /**
         * @function isEmptyObject
         * @abstract return true/false whether object is empty or not
         * @param  object.
         * @return true/false
         */
         utils.isEmptyObject = function(obj){
           if(utils.isNil(obj) || Object.keys(obj).length === 0){
             return true;
           }
           return false;
         };

         /**
          * @function objectHas
          * @abstract return true/false whether object has the key or not
          * @param {object} obj. The object to check
          * @param {string} key. The key to check for
          * @returns True if object has the key. False otherwise.
          */
         utils.objectHas = function (obj, key) {
           if (utils.isObject(obj) && utils.isString(key)) {
             return Object.prototype.hasOwnProperty.call(obj, key);
           }

           return false;
         };

         /**
          * @function isString
          * @param {string} str. The string whose type is to be checked
          * @returns True if str is not null/undefined and type is string
          */
         utils.isString = function (str) {
             if (utils.isntNil(str) && (typeof str === "string")) {
                 return true;
             }

             return false;
         };

         /**
          * @function isFunction
          * @param {function} func The function you want to check
          * @returns True  if func is actually a function. False if its not.
          */
         utils.isFunction = function (func) {
             if (utils.isntNil(func) && typeof func === "function") {
                 return true;
             }

             return false;
         };

         /**
          * @function isArray
          * @param {array} array The array you want to check
          * @returns True  if array is actually a Array. False if its not.
          */
         utils.isArray = function (array) {
             return Array.isArray(array);
         };

         /**
          * @function isObject
          * @param {object} object The object you want to check
          * @returns True if object is actually an Object. False if its not.
          */
         utils.isObject = function (object) {
             if (utils.isntNil(object) && (typeof object === "object")
                 && (object.constructor === Object)) {
                 return true;
             }

             return false;
         };

         /**
          * @function isBoolean
          * @param {bool} boolean Value that needs to be checked
          * @returns true if not null and bool is a boolean.
          */
         utils.isBoolean = function (bool) {
             if(utils.isntNil(bool) && typeof bool === "boolean") {
               return true;
             }
             return false;
         };

         var SLD = {
             MAP : {
                  'ac':{'com':true,'gov':true,'mil':true,'net':true,'org':true,'edu':true},
                  'ad':{'nom':true},
                  'ae':{'ac':true,'co':true,'gov':true,'mil':true,'name':true,'net':true,'org':true,'pro':true,'sch':true},
                  'af':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'ai':{'off':true,'com':true,'net':true,'org':true},
                  'al':{'com':true,'edu':true,'gov':true,'mil':true,'net':true,'org':true,'uniti':true,'tirana':true,'soros':true,'upt':true,'inima':true},
                  'an':{'com':true,'net':true,'org':true,'edu':true},
                  'ag':{'com':true,'org':true,'net':true,'co':true,'nom':true},
                  'ao':{'co':true,'ed':true,'gv':true,'it':true,'og':true,'pb':true},
                  'ar':{'com':true,'edu':true,'gob':true,'gov':true,'int':true,'mil':true,'net':true,'org':true,'tur':true},
                  'arpa':{'e164':true,'in-addr':true,'iris':true,'ip6':true,'uri':true,'urn':true},
                  'at':{'ac':true,'co':true,'gv':true,'or':true,'priv':true},
                  'au':{'asn':true,'com':true,'net':true,'id':true,'org':true,'csiro':true,'oz':true,'info':true,'conf':true,'act':true,'nsw':true,'nt':true,'qld':true,'sa':true,'tas':true,'vic':true,'wa':true},
                  'aw':{'com':true},
                  'az':{'com':true,'net':true,'int':true,'gov':true,'biz':true,'org':true,'edu':true,'mil':true,'pp':true,'name':true,'info':true},
                  'ba':{'co':true,'com':true,'edu':true,'gov':true,'mil':true,'net':true,'org':true,'rs':true,'unbi':true,'unmo':true,'unsa':true,'untz':true,'unze':true},
                  'bb':{'biz':true,'co':true,'com':true,'edu':true,'gov':true,'info':true,'net':true,'org':true,'store':true,'tv':true},
                  'bd':{'com':true,'edu':true,'net':true,'gov':true,'org':true,'mil':true},
                  'be':{'ac':true},
                  'bf':{'gov':true},
                  'bh':{'biz':true,'cc':true,'com':true,'edu':true,'gov':true,'info':true,'net':true,'org':true},
                  'bm':{'com':true,'edu':true,'org':true,'gov':true,'net':true},
                  'bn':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'bo':{'com':true,'edu':true,'gob':true,'gov':true,'int':true,'mil':true,'net':true,'org':true,'tv':true},
                  'br':{'adm':true,'adv':true,'agr':true,'am':true,'arq':true,'art':true,'ato':true,'b':true,'bio':true,'blog':true,'bmd':true,'cim':true,'cng':true,'cnt':true,'com':true,'coop':true,'ecn':true,'edu':true,'eng':true,'esp':true,'etc':true,'eti':true,'far':true,'flog':true,'fm':true,'fnd':true,'fot':true,'fst':true,'g12':true,'ggf':true,'gov':true,'imb':true,'ind':true,'inf':true,'jor':true,'jus':true,'lel':true,'mat':true,'med':true,'mil':true,'mus':true,'net':true,'nom':true,'not':true,'ntr':true,'odo':true,'org':true,'ppg':true,'pro':true,'psc':true,'psi':true,'qsl':true,'rec':true,'slg':true,'srv':true,'tmp':true,'trd':true,'tur':true,'tv':true,'vet':true,'vlog':true,'wiki':true,'zlg':true},
                  'bs':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'bt':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'bw':{'co':true,'org':true},
                  'by':{'gov':true,'mil':true},
                  'bz':{'du':true,'et':true,'om':true,'ov':true,'rg':true},
                  'ca':{'ab':true,'bc':true,'mb':true,'nb':true,'nf':true,'nl':true,'ns':true,'nt':true,'nu':true,'on':true,'pe':true,'qc':true,'sk':true,'yk':true},
                  'cc':{'co':true},
                  'ck':{'biz':true,'co':true,'edu':true,'gen':true,'gov':true,'info':true,'net':true,'org':true},
                  'cn':{'ac':true,'ah':true,'bj':true,'com':true,'cq':true,'edu':true,'fj':true,'gd':true,'gov':true,'gs':true,'gx':true,'gz':true,'ha':true,'hb':true,'he':true,'hi':true,'hl':true,'hn':true,'jl':true,'js':true,'jx':true,'ln':true,'mil':true,'net':true,'nm':true,'nx':true,'org':true,'qh':true,'sc':true,'sd':true,'sh':true,'sn':true,'sx':true,'tj':true,'tw':true,'xj':true,'xz':true,'yn':true,'zj':true},
                  'co':{'com':true,'edu':true,'gov':true,'mil':true,'net':true,'nom':true,'org':true},
                  'cr':{'ac':true,'c':true,'co':true,'ed':true,'fi':true,'go':true,'or':true,'sa':true},
                  'cx':{'gov':true},
                  'cy':{'ac':true,'biz':true,'com':true,'ekloges':true,'gov':true,'ltd':true,'name':true,'net':true,'org':true,'parliament':true,'press':true,'pro':true,'tm':true},
                  'cu':{'com':true,'edu':true,'org':true,'net':true,'gov':true,'inf':true},
                  'dm':{'com':true,'net':true,'org':true,'edu':true,'gov':true},
                  'do':{'art':true,'com':true,'edu':true,'gob':true,'gov':true,'mil':true,'net':true,'org':true,'sld':true,'web':true},
                  'dz':{'art':true,'asso':true,'com':true,'edu':true,'gov':true,'net':true,'org':true,'pol':true},
                  'ec':{'com':true,'edu':true,'fin':true,'gov':true,'info':true,'med':true,'mil':true,'net':true,'org':true,'pro':true},
                  'ee':{'com':true,'org':true,'fie':true,'pri':true},
                  'eg':{'com':true,'edu':true,'eun':true,'gov':true,'mil':true,'name':true,'net':true,'org':true,'sci':true},
                  'er':{'com':true,'edu':true,'gov':true,'ind':true,'mil':true,'net':true,'org':true,'rochest':true,'w':true},
                  'es':{'com':true,'edu':true,'gob':true,'nom':true,'org':true},
                  'et':{'biz':true,'com':true,'edu':true,'gov':true,'info':true,'name':true,'net':true,'org':true},
                  'fi':{'aland':true},
                  'fj':{'ac':true,'biz':true,'com':true,'info':true,'mil':true,'name':true,'net':true,'org':true,'pro':true},
                  'fk':{'ac':true,'co':true,'gov':true,'net':true,'nom':true,'org':true},
                  'fr':{'asso':true,'com':true,'f':true,'gouv':true,'nom':true,'prd':true,'presse':true,'tm':true},
                  'ge':{'com':true,'edu':true,'gov':true,'org':true,'mil':true,'net':true,'pvt':true},
                  'gg':{'co':true,'net':true,'org':true},
                  'gh':{'com':true,'edu':true,'gov':true,'mil':true,'org':true},
                  'gi':{'com':true,'ltd':true,'gov':true,'mod':true,'edu':true,'org':true},
                  'gn':{'ac':true,'com':true,'gov':true,'net':true,'org':true},
                  'gp':{'com':true,'net':true,'edu':true,'asso':true,'org':true},
                  'gr':{'com':true,'edu':true,'gov':true,'mil':true,'net':true,'org':true},
                  'gt':{'com':true,'edu':true,'gob':true,'ind':true,'mil':true,'net':true,'org':true},
                  'gu':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'hk':{'com':true,'edu':true,'gov':true,'idv':true,'net':true,'org':true},
                  'ht':{'com':true,'net':true,'firm':true,'shop':true,'info':true,'pro':true,'adult':true,'org':true,'art':true,'pol':true,'rel':true,'asso':true,'perso':true,'coop':true,'med':true,'edu':true,'gouv':true},
                  'hu':{'2000':true,'agrar':true,'bolt':true,'casino':true,'city':true,'co':true,'erotica':true,'erotika':true,'film':true,'forum':true,'games':true,'hotel':true,'info':true,'ingatlan':true,'jogasz':true,'konyvelo':true,'lakas':true,'media':true,'news':true,'org':true,'priv':true,'reklam':true,'sex':true,'shop':true,'sport':true,'suli':true,'szex':true,'tm':true,'tozsde':true,'utazas':true,'video':true},
                  'id':{'ac':true,'co':true,'go':true,'mil':true,'net':true,'or':true,'sch':true,'web':true},
                  'il':{'ac':true,'co':true,'gov':true,'idf':true,'k12':true,'muni':true,'net':true,'org':true},
                  'im':{'co':true,'ltd.co':true,'plc.co':true,'net':true,'gov':true,'org':true,'nic':true,'ac':true},
                  'in':{'ac':true,'co':true,'edu':true,'ernet':true,'firm':true,'gen':true,'gov':true,'i':true,'ind':true,'mil':true,'net':true,'nic':true,'org':true,'res':true},
                  'iq':{'com':true,'edu':true,'gov':true,'i':true,'mil':true,'net':true,'org':true},
                  'ir':{'ac':true,'co':true,'dnssec':true,'gov':true,'i':true,'id':true,'net':true,'org':true,'sch':true},
                  'it':{'edu':true,'gov':true},
                  'je':{'co':true,'net':true,'org':true},
                  'jo':{'com':true,'edu':true,'gov':true,'mil':true,'name':true,'net':true,'org':true,'sch':true},
                  'jp':{'ac':true,'ad':true,'co':true,'ed':true,'go':true,'gr':true,'lg':true,'ne':true,'or':true},
                  'ke':{'ac':true,'co':true,'go':true,'info':true,'me':true,'mobi':true,'ne':true,'or':true,'sc':true},
                  'kh':{'com':true,'edu':true,'gov':true,'mil':true,'net':true,'org':true,'per':true},
                  'ki':{'biz':true,'com':true,'de':true,'edu':true,'gov':true,'info':true,'mob':true,'net':true,'org':true,'tel':true},
                  'km':{'asso':true,'com':true,'coop':true,'edu':true,'gouv':true,'k':true,'medecin':true,'mil':true,'nom':true,'notaires':true,'pharmaciens':true,'presse':true,'tm':true,'veterinaire':true},
                  'kn':{'edu':true,'gov':true,'net':true,'org':true},
                  'kr':{'ac':true,'busan':true,'chungbuk':true,'chungnam':true,'co':true,'daegu':true,'daejeon':true,'es':true,'gangwon':true,'go':true,'gwangju':true,'gyeongbuk':true,'gyeonggi':true,'gyeongnam':true,'hs':true,'incheon':true,'jeju':true,'jeonbuk':true,'jeonnam':true,'k':true,'kg':true,'mil':true,'ms':true,'ne':true,'or':true,'pe':true,'re':true,'sc':true,'seoul':true,'ulsan':true},
                  'kw':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'ky':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'kz':{'com':true,'edu':true,'gov':true,'mil':true,'net':true,'org':true},
                  'lb':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'lc':{'com':true,'org':true,'edu':true,'gov':true},
                  'li':{'com':true,'net':true,'org':true,'gov':true},
                  'lk':{'assn':true,'com':true,'edu':true,'gov':true,'grp':true,'hotel':true,'int':true,'ltd':true,'net':true,'ngo':true,'org':true,'sch':true,'soc':true,'web':true},
                  'lr':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'ls':{'org':true,'co':true},
                  'lt':{'gov':true,'mil':true},
                  'lu':{'gov':true,'mil':true,'org':true,'net':true},
                  'lv':{'asn':true,'com':true,'conf':true,'edu':true,'gov':true,'id':true,'mil':true,'net':true,'org':true},
                  'ly':{'com':true,'edu':true,'gov':true,'id':true,'med':true,'net':true,'org':true,'plc':true,'sch':true},
                  'ma':{'ac':true,'co':true,'gov':true,'m':true,'net':true,'org':true,'press':true},
                  'mc':{'asso':true,'tm':true},
                  'me':{'ac':true,'co':true,'edu':true,'gov':true,'its':true,'net':true,'org':true,'priv':true},
                  'mg':{'com':true,'edu':true,'gov':true,'mil':true,'nom':true,'org':true,'prd':true,'tm':true},
                  'mk':{'com':true,'edu':true,'gov':true,'inf':true,'name':true,'net':true,'org':true,'pro':true},
                  'ml':{'com':true,'edu':true,'gov':true,'net':true,'org':true,'presse':true},
                  'mn':{'edu':true,'gov':true,'org':true},
                  'mo':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'mt':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'mv':{'aero':true,'biz':true,'com':true,'coop':true,'edu':true,'gov':true,'info':true,'int':true,'mil':true,'museum':true,'name':true,'net':true,'org':true,'pro':true},
                  'mw':{'ac':true,'co':true,'com':true,'coop':true,'edu':true,'gov':true,'int':true,'museum':true,'net':true,'org':true},
                  'mx':{'com':true,'edu':true,'gob':true,'net':true,'org':true},
                  'my':{'com':true,'edu':true,'gov':true,'mil':true,'name':true,'net':true,'org':true,'sch':true},
                  'nf':{'arts':true,'com':true,'firm':true,'info':true,'net':true,'other':true,'per':true,'rec':true,'store':true,'web':true},
                  'ng':{'biz':true,'com':true,'edu':true,'gov':true,'mil':true,'mobi':true,'name':true,'net':true,'org':true,'sch':true},
                  'ni':{'ac':true,'co':true,'com':true,'edu':true,'gob':true,'mil':true,'net':true,'nom':true,'org':true},
                  'no':{'mil':true,'stat':true,'kommune':true,'herad':true,'priv':true,'vgs':true,'fhs':true,'museum':true,'fylkesbibl':true,'folkebibl':true,'idrett':true},
                  'np':{'com':true,'edu':true,'gov':true,'mil':true,'net':true,'org':true},
                  'nr':{'biz':true,'com':true,'edu':true,'gov':true,'info':true,'net':true,'org':true},
                  'om':{'ac':true,'biz':true,'co':true,'com':true,'edu':true,'gov':true,'med':true,'mil':true,'museum':true,'net':true,'org':true,'pro':true,'sch':true},
                  'pe':{'com':true,'edu':true,'gob':true,'mil':true,'net':true,'nom':true,'org':true,'sld':true},
                  'pf':{'com':true,"org":true,'edu':true},
                  'pg':{'com.pg':true,'net':true},
                  'ph':{'com':true,'edu':true,'gov':true,'i':true,'mil':true,'net':true,'ngo':true,'org':true},
                  'pk':{'biz':true,'com':true,'edu':true,'fam':true,'gob':true,'gok':true,'gon':true,'gop':true,'gos':true,'gov':true,'net':true,'org':true,'web':true},
                  'pl':{'art':true,'bialystok':true,'biz':true,'com':true,'edu':true,'gda':true,'gdansk':true,'gorzow':true,'gov':true,'info':true,'katowice':true,'krakow':true,'lodz':true,'lublin':true,'mil':true,'net':true,'ngo':true,'olsztyn':true,'org':true,'poznan':true,'pwr':true,'radom':true,'slupsk':true,'szczecin':true,'torun':true,'warszawa':true,'waw':true,'wroc':true,'wroclaw':true,'zgora':true},
                  'pr':{'ac':true,'biz':true,'com':true,'edu':true,'est':true,'gov':true,'info':true,'isla':true,'name':true,'net':true,'org':true,'pro':true,'prof':true},
                  'pro':{'law':true,'med':true,'cpa':true},
                  'ps':{'com':true,'edu':true,'gov':true,'net':true,'org':true,'plo':true,'sec':true},
                  'pt':{'com':true,'edu':true,'gov':true,'int':true,'net':true,'nome':true,'org':true,'publ':true},
                  'pw':{'belau':true,'co':true,'ed':true,'go':true,'ne':true,'or':true},
                  'ro':{'arts':true,'com':true,'firm':true,'info':true,'nom':true,'nt':true,'org':true,'rec':true,'store':true,'tm':true,'www':true},
                  'rs':{'ac':true,'co':true,'edu':true,'gov':true,'in':true,'org':true},
                  'sb':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'sc':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'sh':{'co':true,'com':true,'edu':true,'gov':true,'net':true,'nom':true,'org':true},
                  'sl':{'com':true,'edu':true,'gov':true,'net':true,'org':true},
                  'st':{'co':true,'com':true,'consulado':true,'edu':true,'embaixada':true,'gov':true,'mil':true,'net':true,'org':true,'principe':true,'saotome':true,'store':true},
                  'sv':{'com':true,'edu':true,'gob':true,'org':true,'red':true},
                  'sz':{'ac':true,'co':true,'org':true},
                  'tr':{'av':true,'bbs':true,'bel':true,'biz':true,'com':true,'dr':true,'edu':true,'gen':true,'gov':true,'info':true,'k12':true,'name':true,'net':true,'org':true,'pol':true,'tel':true,'tsk':true,'tv':true,'web':true},
                  'tt':{'aero':true,'biz':true,'cat':true,'co':true,'com':true,'coop':true,'edu':true,'gov':true,'info':true,'int':true,'jobs':true,'mil':true,'mobi':true,'museum':true,'name':true,'net':true,'org':true,'pro':true,'tel':true,'travel':true},
                  'tw':{'club':true,'com':true,'ebiz':true,'edu':true,'game':true,'gov':true,'idv':true,'mil':true,'net':true,'org':true},
                  'mu':{'ac':true,'co':true,'com':true,'gov':true,'net':true,'or':true,'org':true},
                  'mz':{'ac':true,'co':true,'edu':true,'gov':true,'org':true},
                  'na':{'co':true,'com':true},
                  'nz':{'ac':true,'co':true,'cri':true,'geek':true,'gen':true,'govt':true,'health':true,'iwi':true,'maori':true,'mil':true,'net':true,'org':true,'parliament':true,'school':true},
                  'pa':{'abo':true,'ac':true,'com':true,'edu':true,'gob':true,'ing':true,'med':true,'net':true,'nom':true,'org':true,'sld':true},
                  'py':{'com':true,'edu':true,'gov':true,'mil':true,'net':true,'org':true},
                  'qa':{'com':true,'edu':true,'gov':true,'mil':true,'net':true,'org':true},
                  're':{'asso':true,'com':true,'nom':true},
                  'ru':{'ac':true,'adygeya':true,'altai':true,'amur':true,'arkhangelsk':true,'astrakhan':true,'bashkiria':true,'belgorod':true,'bir':true,'bryansk':true,'buryatia':true,'cbg':true,'chel':true,'chelyabinsk':true,'chita':true,'chukotka':true,'chuvashia':true,'com':true,'dagestan':true,'e-burg':true,'edu':true,'gov':true,'grozny':true,'int':true,'irkutsk':true,'ivanovo':true,'izhevsk':true,'jar':true,'joshkar-ola':true,'kalmykia':true,'kaluga':true,'kamchatka':true,'karelia':true,'kazan':true,'kchr':true,'kemerovo':true,'khabarovsk':true,'khakassia':true,'khv':true,'kirov':true,'koenig':true,'komi':true,'kostroma':true,'kranoyarsk':true,'kuban':true,'kurgan':true,'kursk':true,'lipetsk':true,'magadan':true,'mari':true,'mari-el':true,'marine':true,'mil':true,'mordovia':true,'mosreg':true,'msk':true,'murmansk':true,'nalchik':true,'net':true,'nnov':true,'nov':true,'novosibirsk':true,'nsk':true,'omsk':true,'orenburg':true,'org':true,'oryol':true,'penza':true,'perm':true,'pp':true,'pskov':true,'ptz':true,'rnd':true,'ryazan':true,'sakhalin':true,'samara':true,'saratov':true,'simbirsk':true,'smolensk':true,'spb':true,'stavropol':true,'stv':true,'surgut':true,'tambov':true,'tatarstan':true,'tom':true,'tomsk':true,'tsaritsyn':true,'tsk':true,'tula':true,'tuva':true,'tver':true,'tyumen':true,'udm':true,'udmurtia':true,'ulan-ude':true,'vladikavkaz':true,'vladimir':true,'vladivostok':true,'volgograd':true,'vologda':true,'voronezh':true,'vrn':true,'vyatka':true,'yakutia':true,'yamal':true,'yekaterinburg':true,'yuzhno-sakhalinsk':true},
                  'rw':{'ac':true,'co':true,'com':true,'edu':true,'gouv':true,'gov':true,'int':true,'mil':true,'net':true},
                  'sa':{'com':true,'edu':true,'gov':true,'med':true,'net':true,'org':true,'pub':true,'sch':true},
                  'sd':{'com':true,'edu':true,'gov':true,'info':true,'med':true,'net':true,'org':true,'tv':true},
                  'se':{'a':true,'ac':true,'b':true,'bd':true,'c':true,'d':true,'e':true,'f':true,'g':true,'h':true,'i':true,'k':true,'l':true,'m':true,'n':true,'o':true,'org':true,'p':true,'parti':true,'pp':true,'press':true,'r':true,'s':true,'t':true,'tm':true,'u':true,'w':true,'x':true,'y':true,'z':true},
                  'sg':{'com':true,'edu':true,'gov':true,'idn':true,'net':true,'org':true,'per':true},
                  'sn':{'art':true,'com':true,'edu':true,'gouv':true,'org':true,'perso':true,'univ':true},
                  'sy':{'com':true,'edu':true,'gov':true,'mil':true,'net':true,'news':true,'org':true},
                  'th':{'ac':true,'co':true,'go':true,'in':true,'mi':true,'net':true,'or':true},
                  'tj':{'ac':true,'biz':true,'co':true,'com':true,'edu':true,'go':true,'gov':true,'info':true,'int':true,'mil':true,'name':true,'net':true,'nic':true,'org':true,'test':true,'web':true},
                  'tn':{'agrinet':true,'com':true,'defense':true,'edunet':true,'ens':true,'fin':true,'gov':true,'ind':true,'info':true,'intl':true,'mincom':true,'nat':true,'net':true,'org':true,'perso':true,'rnrt':true,'rns':true,'rnu':true,'tourism':true},
                  'tz':{'ac':true,'co':true,'go':true,'ne':true,'or':true},
                  'ua':{'biz':true,'cherkassy':true,'chernigov':true,'chernovtsy':true,'ck':true,'cn':true,'co':true,'com':true,'crimea':true,'cv':true,'dn':true,'dnepropetrovsk':true,'donetsk':true,'dp':true,'edu':true,'gov':true,'if':true,'in':true,'ivano-frankivsk':true,'kh':true,'kharkov':true,'kherson':true,'khmelnitskiy':true,'kiev':true,'kirovograd':true,'km':true,'kr':true,'ks':true,'kv':true,'lg':true,'lugansk':true,'lutsk':true,'lviv':true,'me':true,'mk':true,'net':true,'nikolaev':true,'od':true,'odessa':true,'org':true,'pl':true,'poltava':true,'pp':true,'rovno':true,'rv':true,'sebastopol':true,'sumy':true,'te':true,'ternopil':true,'uzhgorod':true,'vinnica':true,'vn':true,'zaporizhzhe':true,'zhitomir':true,'zp':true,'zt':true},
                  'ug':{'ac':true,'co':true,'go':true,'ne':true,'or':true,'org':true,'sc':true},
                  'uk':{'ac':true,'bl':true,'british-library':true,'co':true,'cym':true,'gov':true,'govt':true,'icnet':true,'jet':true,'lea':true,'ltd':true,'me':true,'mil':true,'mod':true,'national-library-scotland':true,'nel':true,'net':true,'nhs':true,'nic':true,'nls':true,'org':true,'orgn':true,'parliament':true,'plc':true,'police':true,'sch':true,'scot':true,'soc':true},
                  'us':{'dni':true,'fed':true,'isa':true,'kids':true,'nsn':true},
                  'uy':{'com':true,'edu':true,'gub':true,'mil':true,'net':true,'org':true},
                  've':{'co':true,'com':true,'edu':true,'gob':true,'info':true,'mil':true,'net':true,'org':true,'web':true},
                  'vi':{'co':true,'com':true,'k12':true,'net':true,'org':true},
                  'vn':{'ac':true,'biz':true,'com':true,'edu':true,'gov':true,'health':true,'info':true,'int':true,'name':true,'net':true,'org':true,'pro':true},
                  'ye':{'co':true,'com':true,'gov':true,'ltd':true,'me':true,'net':true,'org':true,'plc':true},
                  'yu':{'ac':true,'co':true,'edu':true,'gov':true,'org':true},
                  'za':{'ac':true,'agric':true,'alt':true,'bourse':true,'city':true,'co':true,'cybernet':true,'db':true,'edu':true,'gov':true,'grondar':true,'iaccess':true,'imt':true,'inca':true,'landesign':true,'law':true,'mil':true,'net':true,'ngo':true,'nis':true,'nom':true,'olivetti':true,'org':true,'pix':true,'school':true,'tm':true,'web':true},
                  'zm':{'ac':true,'co':true,'com':true,'edu':true,'gov':true,'net':true,'org':true,'sch':true}
             }
         };
         /**
         * @function getSLD
         * @abstract return Second Level Domain or null if not exist
         * @param {string} hostName the given hostname string.
         * @return SLD
         */
         utils.getSLD = function (hostName) {
             if (utils.isNil(hostName)) return null;

             var hostNameArray = hostName.split(".");
             var posOfSld = hostNameArray.length - 2;
             if (posOfSld < 0) return null;
             var sld = hostNameArray[posOfSld];
             var tld = hostNameArray[posOfSld+1];
             var sldMap = SLD.MAP[tld];
             if (utils.isNil(sldMap)) {
                 return null;
             }
             var isInMAP = sldMap[sld];
             if (utils.isNil(isInMAP)){
                 return null;
             }
             sld = sld+"."+tld;
             return sld;
         };

         /**
         * @function depthOfTLDorSLD
         * @abstract return depth of TLD or SLD if exist
         * @param {string} hostName the given hostname string.
         * @return 2 if exist SLD, 1 otherwise
         */
         utils.depthOfTLDorSLD = function(hostName) {
             if (utils.isNil(hostName)) return null;
             var sld = utils.getSLD(hostName);
             if (utils.isntNil(sld)) return 2;
             return 1;
         };

         /**
         * @function isInteger
         * @abstract return true/false whether input is integer
         * @param {number} value.
         * @return true/false
         */
         utils.isInteger = function(value){
           if(utils.isNil(value)) {
             return false;
           }
           return (typeof value === "number") &&
             (isFinite(value)) &&
             (Math.floor(value) === value);
         };

         /**
         * @function isNumber
         * @abstract return true/false whether input is number
         * @param {number} value.
         * @return true/false
         */
         utils.isNumber = function(value){
           if(utils.isNil(value)) {
             return false;
           }
           return (typeof value === "number") && (isFinite(value));
         };

         /**
         * @function isSuccessCode
         * @desc Checks if the Http return code is for success or not based on OCL documentation.
         * @param {number} statusCode The status code of Http request you made.
         * @return {bool} True its a good success code. False for everything else.
         */
         utils.isSuccessCode = function(statusCode) {
           if(utils.isNil(statusCode)) {
             return false;
           }

           if(statusCode === constants.httpStatusCodes.OK || statusCode === constants.httpStatusCodes.PARTIAL_CONTENT || statusCode === constants.httpStatusCodes.CREATED || statusCode === constants.httpStatusCodes.NO_CONTENT) {
             return true;
           }

           return false;
         };

          /**
          * @function safeFetch
          * @desc Utility wrapper on top of fetch API to implement promise timeout.
          * @param {string} url The url to be fetched
          * @param {obj} options Additional options to be forworded to fetch API
          * @param {number} timeout timeout in milliseconds
          * @return {reponse} response object returned by fetch to the downloaded url.
          */
          utils.safeFetch = function(url, options = {}, timeout = constants.DEFAULT_FETCH_TIMEOUT ) {
            return new Promise(function(resolve, reject){
              const timeoutid = setTimeout(function() {
                reject(new Error("Request timed out " + url));
              }, timeout);

              fetch(url, options).then(function(response) {
                clearTimeout(timeoutid);
                resolve(response);
              }).catch(function(err) {
                clearTimeout(timeoutid);
                reject(err);
              });
            });
          };

         /**
          * @function isSuccessCodeLocalFile
          * @desc Checks if the Http return code is for success for local files.
          * @param {number} statusCode The status code of Http request you made.
          * 0 for safari, 200 for other browser
          * @return {bool} True its a good success code. False for everything else.
          */
         utils.isSuccessCodeLocalFile = function(statusCode) {
           if(!utils.isInteger(statusCode)) {
             return false;
           }

           if (SymBfw.globals.BROWSER === "Safari" &&
             statusCode === 0 ) {
             return true;
           } else if (statusCode === constants.httpStatusCodes.OK){
             return true;
           }

           return false;
         };

         /**
         * @function urlWithoutQueryParameters
         * @desc Gets us the URL of a full URL without query parameters.
         * @param {string} fullURL
         * @param {bool=} shouldReturnWithProtocol
         * @return {string} The URL without query parameters
         * E.g I/P http://example.org/foo/hello.html#id=1234
         *     O/P http://example.org/foo/hello.html
         */
         utils.urlWithoutQueryParameters = function(fullURL, shouldReturnWithProtocol) {
           if(utils.isNil(shouldReturnWithProtocol)) {
             shouldReturnWithProtocol = true;
           }
           if(utils.isNil(fullURL)){
             return null;
           }
           var uri = new URI(fullURL);
           var protocol = uri.protocol();
           if(utils.isNil(protocol) || protocol === "" || !constants.PROTOCOLS.includes(protocol)) {
             protocol = "http";
             uri = new URI(protocol + "://" + fullURL);
           }
           var hostname = uri.hostname();
           var path = uri.path();
           if (utils.isNil(path) || path === "/") {
             path = "";
           }
           if(shouldReturnWithProtocol){
             return protocol + "://" + hostname + path;
           }else {
             return hostname + path;
           }

         };

         /**
         * @function baseURL
         * @desc Gets us the base URL of a full URL.
         * @param {string} fullURL
         * @return {string} The base URL of the giving URL.
         * E.g I/P http://example.org/foo/hello.html
         *     O/P example.org
         */
         utils.baseURL = function(fullURL) {
           if(utils.isNil(fullURL)){
             return null;
           }
           var uri = new URI(fullURL);
           return uri.hostname();
         };

         /**
         * @function pathname
         * @desc Gets us the pathname of the full URL
         * @param {string} fullURL
         * @return {string} pathname of the fullURL
         * Example: input- https://www.google.com/index.html
         *          output - /index.html
         */
         utils.pathName = function(fullURL){
           if(utils.isNil(fullURL)){
             return null;
           }
           var uri = new URI(fullURL);
           return uri.pathname();
         };

         /**
         * @function urlProtocol
         * @desc Gets the protocol of the given URL
         * @param {string} fullURL
         * @return {string} protocol for given URL.Null if URL is null or if protocol is empty
         * E.g I/P http://example.org/foo/hello.html
         *     O/P http
         */
         utils.urlProtocol = function(fullURL) {
           if(utils.isNil(fullURL)){
             return null;
           }
           var uri = new URI(fullURL);
           var protocol = uri.protocol();
           if(protocol === "") {
             return null;
           }
           return protocol;
         };

         /**
         * @function getUrlTLD
         * @desc Gets TLD of the given URL
         * @param {string} fullURL
         * @return {string} TLD for given URL.Null if URL is null or tld is empty string
         * E.g I/P http://example.org/foo/hello.html
         *     O/P org
         */
         utils.getUrlTLD = function(fullURL) {
           if(utils.isNil(fullURL)){
             return null;
           }
           var uri = new URI(fullURL);
           var tld = uri.tld();
           if(tld === "") {
             return null;
           }
           return tld;
         };

         /**
         * @function getCompanyDomain
         * @desc Gets hostname of the given URL without tld
         * @param {string} fullURL
         * @return {string} Hostname for given URL.Null if URL is null
         * E.g I/P http://example.org/foo/hello.html
         *     O/P example
         */
         utils.getCompanyDomain = function(fullURL) {
           if(utils.isNil(fullURL)){
             return null;
           }
           var uri = new URI(fullURL);
           var hostname = uri.hostname();
           var tld = utils.getUrlTLD(fullURL);
           if(hostname === ""){
             return null;
           }
           // strip tld if found in the hostname
           if(utils.isntNil(tld) && hostname.indexOf(tld) > 0){
             const hostnameWithoutTld =  hostname.substring(0,hostname.lastIndexOf(tld)-1);
             const domains = hostnameWithoutTld.split('.');
             return domains[domains.length-1];
           }
           return hostname;
         };

         /**
         * @function getDomain
         * @desc Gets domain of the given URL
         * @param {string} fullURL
         * @return {string} Domain for given URL.Null if URL is null
         * E.g I/P http://example.org/foo/hello.html
         *     O/P example.org
         */
         utils.getDomain = function(fullURL) {
           if(utils.isNil(fullURL)){
             return null;
           }
           var uri = new URI(fullURL);
           var domain = uri.domain();
           if(domain === ""){
             return null;
           }
           return domain;
         };

         /**
         * @function isUrlAnIp
         * @desc Returns whether the passed url is an ip
         * @param {string} fullURL
         * @return {boolean} True if URL is an IP, false if not. Null if passed input is null.
         */
         utils.isUrlAnIp = function(fullURL) {
           if(utils.isNil(fullURL)){
             return null;
           }
           var uri = new URI(fullURL);
           return uri.is(constants.utils.IP);
         };

       /**
        * @function getFileNameExtension
        * @description Returns the filename extension from the URI
        * @param {string} uri
        * @return {string} suffix of the passed uri
        * @example https://norton.com/staging/file.json => json
        */
         utils.getFileNameExtension = function(uri){
           if(!utils.isString(uri)){
             return null;
           }
           const uriFileNameExtension = new URI(uri).suffix();
           return uriFileNameExtension === "" ? null : uriFileNameExtension
         };

         /**
         * @function appendToObject
         * @desc appends newObj to obj
         * @param {object} obj
         * @param {object} newObj
         */
         utils.appendToObject = function(obj, newObj){
           if(utils.isNil(obj) || utils.isNil(newObj)) {
             throw new Error("invalid arguments to appendToObject");
           }
           Object.keys(newObj).forEach(function(key) {
             obj[key] = newObj[key];
           });
         };

         /**
          * @func createCustomHTMLEvent
          * @param  {string} eventName The name of the event you want to broadcast.
          * @param  {object=} detail    The additional detail you want to send as part of the event.
          * @desc Create a custom HTML Event given a eventName and detail. Will create and dispatch event.
          */
         utils.createCustomHTMLEvent = function(eventName, detail) {
           if(utils.isString(eventName) === false) {
             throw new Error("Event name cannot be null and has to be a string");
           }

           var event = new CustomEvent(eventName, {
            'detail': detail
           });
           window.dispatchEvent(event);
         };

         /**
          * @function isTopLevelWindow
          * @desc Checks if the top of window object is equal to current window
          * @return {bool} True if they are same. False for everything else.
          */
         utils.isTopLevelWindow= function() {
           if (SymBfw.globals.BROWSER === "Edge" ){
             if(window.top.location == window.self.location){
               return true;
             }
             return false;
           }
           if (window.top == window.self){
             return true;
           }
           return false;
         };

         /**
         * @function getActiveElement
         * @desc returns the active element in a document
         * @return {node} activeElement
         */
         utils.getActiveElement = function() {
           let activeElement = document.activeElement;
           return activeElement;
         }

         /**
          * @function verifyJson
          * @desc validates a given json with a JWT token
          * @param  {json} Signed JSON
          * @param  {string} publicKey of signed JSON
          * @param  {StringArray} encyrpted algorithm
          * @return {boolean} returns true or false based on the validity
          */
         utils.verifyJson = function (json, JWT,sPublicKey,acceptAlgs) {
           try {
             let md = forge.md.sha256.create();
             md.update(JSON.stringify(json));
             const hash = md.digest().toHex();
             const pubKey = KEYUTIL.getKey(sPublicKey);
             const isValid = KJUR.jws.JWS.verify(JWT, pubKey, acceptAlgs);
             if (isValid === true) {
               let payload = b64utoutf8(JWT.split(".")[1]);
               let payloadObj = KJUR.jws.JWS.readSafeJSONString(payload);
               return (payloadObj.hash === hash);
             }
             return false;
           }
           catch(err) {
             return false;
           }
         };

         /**
          * @function isNewVersionUpdated
          * @desc Checks if the updated version is major or minor and NOT a patch or build release
          * @param  {string} currentVersion The current version of the product.
          * @param  {string} storedVersion    The version of the product stored in chrome.storage
          * @return {bool} True if the minor or major version updates. False for only patch version or build version update.
          */

         utils.isNewVersionUpdated = function (storedVersion, currentVersion) {
           const currentVersions = currentVersion.split(".");
           const storedVersions = storedVersion.split(".");
           const isMajorVersionUpdated = currentVersions[0] !== storedVersions[0]
           const isMinorVersionUpdated = currentVersions[1] !== storedVersions[1]
           if( isMajorVersionUpdated || isMinorVersionUpdated ) {
             return true;
           }
           return false;
         }

         /**
          * @function isStorePageURL
          * @desc Checks whether the url is store url
          * @param  {string} url Url to check
          * @return {bool} True if its store page url, false otherwise
          */
         utils.isStorePageURL = function(url) {
           if(!utils.isString(url)) {
             return false;
           }
           if(SymBfw.globals.BROWSER === "Edge") {
               let edgeRegExp = new RegExp(constants.STORE_URLS[SymBfw.globals.BROWSER]);
               return edgeRegExp.test(url);
           }
           if(!url.startsWith(constants.STORE_URLS[SymBfw.globals.BROWSER])) {
             return false;
           }
           return true;
         }

         /**
          * @function upperCaseFirstLetter
          * @desc Returns the incoming string with the first letter uppercased
          * @param {string} str. The string to operate on
          * @returns {string} The string with the first letter uppercased
          */
         utils.upperCaseFirstLetter = function (str) {
           if (utils.isString(str)) {
             return str.charAt(0).toUpperCase() + str.slice(1);
           }
           return str;
         };

         /**
          * @function setTimeout
          * @desc Wraps setTimeout with a Promise
          * @param {number} delay Timeout length in ms
          * @return {Promise} A promise that will resolve when the timeout has elapsed
          */
         utils.setTimeout = function (delay) {
           return new Promise(function (resolve, reject) {
             if (!utils.isInteger(delay)) {
               return reject(new Error("Delay must be an integer"));
             }
             return window.setTimeout(resolve, delay);
           });
         };

         /**
          * @function getValueAtPath
          * @desc Gets the value at path of object. Like Lodash's _.get().
          * @param {object} obj - The object to query.
          * @param {array|string} path - The path of the property to get.
          * @param {*} defaultValue - The value returned for undefined paths.
          * @returns {*} The value defined by path.
          */
         utils.getValueAtPath = function (obj, path, defaultValue) {
           // split string using '.', '[', and ']' characters and remove empty items
           let paths = SymBfw.utils.isString(path)
             ? path.split(/[.[\]]/g).filter(Boolean)
             : path;
           // ensure that paths is an array
           if (!utils.isArray(paths)) {
             paths = [paths];
           }
           return paths.reduce(function (result, val) {
             return utils.objectHas(result, val)
               ? result[val]
               : defaultValue;
           }, obj || {});
         };

       /**
        * @function setDoNotTrack
        * @desc sets navigator.doNotTrack to the given value. Throws if parameter is not boolean
        * @param {boolean} doNoTrack - Value that you want to set navigator.doNotTrack to.
        */
       utils.setDoNotTrack = function (doNoTrack = false) {
         if (!utils.isBoolean(doNoTrack)) {
           throw new Error("Parameter to setDoNotTrack should be a boolean");
         }
         try {
           const value = doNoTrack ? '1' : '0';
           Object.defineProperty(navigator, 'doNotTrack', {
             value: value,
             writable: false,
             configurable: true
           });
         } catch (e) { };
       }

       /**
          * @function getRandomIntInRange
          * @desc generate random integer in range.
          * @param {number}min minimum number that random int to be generated.
          * @param {number}max maximum number that random int to be generated
          * @return {number} the random number generated.
          */
         utils.getRandomIntInRange = function(min, max) {
           if(!utils.isInteger(min) || (!utils.isInteger(max)) || (min > max) || (min < constants.RANDOM_NUMBER_LIMITS.MIN) ||(max > constants.RANDOM_NUMBER_LIMITS.MAX)){
             throw new Error("Invalid min or max value");
             return;
           }
           const randomBuffer = new Uint32Array(1);
           let crypto = window.crypto;
           crypto.getRandomValues(randomBuffer);
           let randomNumber = randomBuffer[0] / (0xffffffff + 1);
           return Math.floor(randomNumber * (max - min + 1)) + min;
         };

         /**
            * @function isTrustedEvent
            * @param {Object} event - event to check if it's trusted or not
            * @returns {Boolean} true, if it's trusted, otherwise false
            */
           utils.isTrustedEvent = function(event){
             if(utils.isNil(event)) {
               throw new Error('event should not be null');
             }
             return event.isTrusted;
           }

       return utils;
    }//end of initModule

    /* ########## Begin module wrapper ########## */
    //Right now we don't have support for Module or RequireJS type modules.
    //You need to include as scripts for now.
    global.SymBfw.utils = initModule(global.SymBfw);
})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop

/*jshint esversion: 6*/

(function (global) {
  "use strict";

  function initModule(SymBfw) {
    var isFunction = SymBfw.utils.isFunction;
    var isNil = SymBfw.utils.isNil;
    var isString = SymBfw.utils.isString;

    /**
    * extensionAdapter wraps all portal APIs for clients to call
    * @namespace extensionAdapter
    */
    let extensionAdapter = {};

    extensionAdapter.messageListeners = [];
    extensionAdapter.messageListenersCS = [];

    /**
     * @property getError
     * @summary gets the runtime lastError
     * @desc : This will be defined during an API method callback if there was an error
     * @return null
     */
    extensionAdapter.getLastError = function(){
      return null;
    };

    /**
     * @function getBackgroundPage
     * @summary gets the background page of the extension
     * @return null
     **/
    extensionAdapter.getBackgroundPage = function() {
      return null;
    };

    /**
     * @property getExtensionId
     * @summary gets hostname of portal
     */
    extensionAdapter.getExtensionId = function(){
      return location.hostname;
    };

    /**
     * @property getExtensionURL
     * @summary return the path url
     */
    extensionAdapter.getExtensionURL = function(path) {
      if(!isString(path)) {
        throw new Error("extensionAdapter.getExtensionURL expects a string path argument");
      }
      return "/" + path;
    };

    /**
     * @function getAllWindows
     * @summary get all windows open for a browser
     * @param  {callback} callback called with the result windows
     *          callback : function(array of Window windows) {...};
     * @param  {object=} getInfo : Object defining type of windows that you want to get
     * NOP
     */
    extensionAdapter.getAllWindows = function(callback, getInfo) {
      return;
    };

    /**
     * @function getCurrentWindow
     * @summary get the current window
     * @param  {callback} callback called with the result window
     *          callback : function(Window window) {...};
     * @param  {object=} getInfo : Object defining type of windows that you want to get
     * NOP
     */
    extensionAdapter.getCurrentWindow = function(callback, getInfo) {
      return;
    };

    /**
     * @function createTab
     * @summary creates a new tab with given properties
     * @param  {string=} url : url for the new tab
     * @param  {callback=} callback to be called after window is created
     *          callback : function( Window window) {...};
     *  NOP
     */
    extensionAdapter.createWindow = function(url, callback) {
      return;
    };

    /**
     * @function closeWindow
     * @summary close given window
     * @param  {integer} windowId : Id of window to be closed.
     * @param  {callback=} callback to be called after the window is closed
     *          callback : function() {...};
     * NOP
     */
    extensionAdapter.closeWindow = function(windowId, callback) {
      return;
    };

    /**
     * @function focusWindow
     * @summary activates a window
     * @param  {integer} windowId : Id of the window to be brought to focus
     * @param  {callback=} callback called with the result tab
     *          callback : function( Window window) {...};
     * NOP
     */
    extensionAdapter.focusWindow = function(windowId,callback) {
      return;
    };

    /**
     * @function addWindowRemovedEventListener
     * @summary fires when a window is removed
     * @param  {callback} Called when a window is removed
     *          callback : function(integer tabId, object removeInfo) {...};
     * NOP
     */
    extensionAdapter.addWindowRemovedEventListener = function(callback) {
      return;
    };

    /**
     * @function addWindowFocusedEventListener
     * @summary fires when a window focus is changed
     * @param  {callback} Called a window focus is changed
     *          function(integer windowId) {...};
     * NOP
     */
    extensionAdapter.addWindowFocusedEventListener = function(callback) {
      return;
    };

    /**
     * @function getTab
     * @summary gets the tab with a given tabID
     * @param  {integer} tabId : Id of the tab to be retrieved
     * @param  {callback} callback called with the result tab
     *          callback : function( Tab tab) {...};
     * NOP
     */
    extensionAdapter.getTab = function(tabId, callback) {
      return;
    };

    /**
     * @function getActiveTab
     * @summary gets the current active tab
     * @param  {callback} callback called with the result tab
     *          callback : function( Tab tab) {...};
     * @param   {integer=} windowId
     * NOP
     */
    extensionAdapter.getActiveTab = function(callback, windowId) {
      return;
    }

    /**
     * @function getTabsWithURL
     * @summary gets all tabs that has a page open that matches the passed URL
     * @param  {callback} callback called with the result tab
     *          callback : function( Tab tabs) {...};
     * NOP
     */
    extensionAdapter.getTabsWithURL = function(url, callback) {
      return;
    };

    /**
     * @function updateTabUrl
     * @summary updates the tab with the given properties
     * @param  {integer} tabId : Id of the tab to be updated
     * @param  {string} url : new tab URL
     * @param  {callback=} callback called with the result tab
     *          callback : function( Tab tab) {...};
     * NOP
     */
    extensionAdapter.updateTabUrl = function(tabId, url, callback) {
      return;
    };

    /**
     * @function activateTab
     * @summary updates the tab with the given properties
     * @param  {integer} tabId : Id of the tab to be updated
     * @param  {callback=} callback called with the result tab
     *          callback : function( Tab tab) {...};
     * NOP
     */
    extensionAdapter.activateTab = function(tabId,callback) {
      return;
    };

    /**
     * @function createTab
     * @summary creates a new tab with given properties
     * @param  {string=} url : url for the new tab
     * @param  {callback=} callback to be called after tab is created
     *          callback : function( Tab tab) {...};
     * NOP
     */
    extensionAdapter.createTab = function(url, callback) {
      return;
    };

    /**
     * @function closeTab
     * @summary close a give tab/tabs
     * @param  {integer or array } tabIds : The tab or list of tabs to close.
     * @param  {callback=} callback to be called after the tab(s) are removed
     *          callback : function() {...};
     * NOP
     */
    extensionAdapter.closeTab = function(tabIds,callback) {
      return;
    };

    /**
     * @function closeTabAndEnsureBrowserIsAlive
     * @desc Opens new tab when only one tab is open in chrome before closing current tab
     * @param  {number} tabId - id of the tab
     * @param  {callback=} callback to be called after tab is closed. This argument is optional.
     *          callback : function() {...};
     * NOP
     */
    extensionAdapter.closeTabAndEnsureBrowserIsAlive = function(tabId, callback) {
      return;
    };

    /**
     * @function addTabRemovedEventListener
     * @summary fires when a tab is removed
     * @param  {callback} Called when a tab is removed
     *          callback : function(integer tabId, object removeInfo) {...};
     * NOP
     */
    extensionAdapter.addTabRemovedEventListener = function(callback) {
      return;
    };

    /**
     * @function addTabActivatedEventListener
     * @summary fires when a tab is activated
     * @param  {callback} Called when a tab is activated
     *          callback : function(object activeInfo) {...};
     * NOP
     */
    extensionAdapter.addTabActivatedEventListener = function(callback) {
      return;
    };

    /**
     * @function addTabReplacedEventListener
     * @summary fires when a tab is activated
     * @param  {callback} Called when a tab is activated
     *          callback : function(integer addedTabId, integer removedTabId) {...};
     * NOP
     */
    extensionAdapter.addTabReplacedEventListener = function(callback) {
      return;
    };

    /**
     * @function addTabUpdatedEventListener
     * @summary fires when a tab is updated
     * @param  {callback} Called when a tab is activated
     *          callback : function(object activeInfo) {...};
     * NOP
     */
    extensionAdapter.addTabUpdatedEventListener = function(callback) {
      return;
    };

    /**
     * @function addOnBeforeRequestEventListener
     * @summary fires an event before navigation to tab url
     * @param  {callback} Called when a tab is fired for navigation
     *         {array} Array of url for filtering
     *         {array} opt_extraInfoSpec type of blocking request
     * @return None
     * NOP
     */
    extensionAdapter.addOnBeforeRequestEventListener = function(callback, url, opt_extraInfoSpec) {
      return;
    };

    /**
     * @function removeOnBeforeRequestEventListener
     * @summary Removes the event listener for before request to url
     * @param  {callback} handlerMethod Already registered handler method of the the event
     * @return None
     * NOP
     */
    extensionAdapter.removeOnBeforeRequestEventListener = function(handlerMethod) {
      return;
    };

    /**
     * @function sets the icon for the browser action
     * @param  {object} details : properties to set and windowId, tabId
     * @param  {callback=} callback to be called after browserAction is set
     *          callback : function() {...};
     * @throws Throws an exception on invalid arguments or if chrome object is null
     * NOP
     */
    extensionAdapter.setBrowserIcon = function(details, callback) {
      return;
    };

    /**
     * @function stores the function to be called (CS to BG)
     * @param  {object} message
     * @param  {onMessageCallback=} callback to be called after the message has been serviced
     * @throws Throws an exception on invalid arguments or if messageListeners is null
     */
    extensionAdapter.sendMessage = function(message, onMessageCallback) {
      if (isNil(message)){
        throw new Error("invalid arguments to extensionAdapter.sendMessage");
      }

      if (extensionAdapter.messageListeners.length == 0){
        throw new Error("there are no message listeners");
      }
      var callback = function(response){
        if(isFunction(onMessageCallback)){
          onMessageCallback(response);
        }
      };
      for(let i in extensionAdapter.messageListeners){
        extensionAdapter.messageListeners[i](message, callback);
      }
    };

    /**
    * @function stores the function to be called (BG to CS)
     * @param  {object} message
     * @param  {onMessageCallback=} callback to be called after the message has been serviced
     * @throws Throws an exception on invalid arguments or if messageListeners is null
     */
    extensionAdapter.sendMessageToTab = function(sender, message, onMessageCallback, options) {
      if (isNil(message)){
        throw new Error("invalid arguments to extensionAdapter.sendMessageToTab");
      }

      if (extensionAdapter.messageListenersCS.length == 0){
        throw new Error("there are no message listeners");
      }
      var callback = function(response){
        if(isFunction(onMessageCallback)){
          onMessageCallback(response);
        }
      };
      for(let i in extensionAdapter.messageListenersCS){
        extensionAdapter.messageListenersCS[i](message, callback);
      }
    };

    /**
     * @function stores the listener in messageListeners (CS to BG)
     * @param  {handleMessage} callback to be called when the message is received
     * @throws Throws an exception on invalid arguments
     */
    extensionAdapter.addMessageListener = function(handleMessage) {
      if(!isFunction(handleMessage)){
        throw new Error("invalid arguments to extensionAdapter.addMessageListener");
      }

      if(extensionAdapter.messageListeners.indexOf(handleMessage) > -1) {
        return;
      }

      extensionAdapter.messageListeners.push(handleMessage);
    };

    /**
    * @function stores the listener in messageListenersCS (BG to CS))
     * @param  {handleMessage} callback to be called when the message is received
     * @throws Throws an exception on invalid arguments
     */
    extensionAdapter.addMessageListenerCS = function(handleMessage) {
      if(!isFunction(handleMessage)){
        throw new Error("invalid arguments to extensionAdapter.addMessageListenerCS");
      }

      if(extensionAdapter.messageListenersCS.indexOf(handleMessage) > -1) {
        return;
      }

      extensionAdapter.messageListenersCS.push(handleMessage);
    };

    /**
     * @function fired when a message is sent from CS context
     * @param  {handleMessage} callback to be called when the message is received
     * @throws Throws an exception on invalid arguments
     */
    extensionAdapter.addContentScriptMessageListener = function(handleMessage) {
      extensionAdapter.addMessageListenerCS(handleMessage);
    };

    /**
     * @function addTabCreatedEventListener
     * @summary fires when a tab is created
     * @param  The callback parameter should be a function that looks like this:
     *                      function( Tab tab) {...};
     * NOP
     */
    extensionAdapter.addTabCreatedEventListener = function(callback) {
      return;
    };

    /**
     * @function addWindowCreatedEventListener
     * @summary fires when a Window is created
     * @param  The callback parameter should be a function that looks like this:
     *                      function( Window window) {...};
     */
    extensionAdapter.addWindowCreatedEventListener = function(callback) {
      return;
    };

    /**
     * @func getTabID
     * @desc Wrapper for Chrome SDK for getTabID. Calls native impl.
     * @param  {object} tab Chrome Tab Object
     * NOP
     */
    extensionAdapter.getTabID = function(tab){
      return;
    };

    /**
    * @func getWindowIDForTab
    * @desc Wrapper for Chrome SDK for getWindowID.
    * @param  {object}  tab   Chrome tab object
    * NOP
    */
    extensionAdapter.getWindowIDForTab = function(tab) {
      return;
    };

    /**
     * @func getWindowID
     * @desc Wrapper for Chrome SDK for getWindowID. Calls native impl.
     * @param  {object} chromeWindow Chrome Window Object
     * NOP
     */
    extensionAdapter.getWindowID = function(chromeWindow){
      return;
    };

    /**
     * @func i18nGetMessage
     * @desc Wrapper for Chrome SDK to get the localized string for the specified message.
     * @param  {string} messageName: The name of the message, as specified in the messages.json file
     * @param  {object=} substitutions : Up to 9 substitution strings, if the message requires any.
     * @throws Throws an exception on invalid arguments or if the api is not supported
     * NOP
     */
    extensionAdapter.i18nGetMessage = function(messageName, substitutions){
      return;
    };

    /**
     * @func hidePopup
     * @desc Wrapper to hide popover
     */
    extensionAdapter.hidePopup = function() {
      window.open('', '_self').close();
    };

    /**
     * @func onPopoverLoad
     * @desc Wrapper for adding event listener when pop over loads
     * @param {callback} callback to be called after pop over load
     */
    extensionAdapter.onPopoverLoad = function(callback) {
      window.addEventListener("load", callback);
    };

    /**
    /**
     * @func init
     * @desc Initialize any special browser specific requirements here. Currently a no-op for Chrome type browsers.
     */
    extensionAdapter.init = function(){};

		return extensionAdapter;
  }//end of initModule

/* ########## Begin module wrapper ########## */
//Right now we don't have support for Module or RequireJS type modules.
//You need to include as scripts for now.
global.SymBfw.extensionAdapter = initModule(global.SymBfw);

}(this));
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//


(function (global) {
  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {

    var clipboard = {
      _guid : null,
      _value : null,
    };

    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var createNewGuid = SymBfw.utils.createNewGuid;
    var logger = SymBfw.logger;
    var clipboardConstants = SymBfw.constants.clipboard;
    var clipboardMessages = SymBfw.constants.clipboard.messages;

    /**
    * @function getClipboard
    * @description Gets the clipboard guid and value
    * @return {object} guid,value
    */
    clipboard.getClipboard = function(guid, value) {
      return({
        guid  : clipboard._guid,
        value : clipboard._value
      });
    };

    /**
    * @function setClipboard
    * @description Sets the clipboard guid and value
    * @param {object} clipboardData ,guid and value that we want the BfwClipboard module to save
    * @param {number=} timeout ,timeout after which the clipboard value should be cleared
    */
    clipboard.setClipboard = function(clipboardData,timeout) {
      clipboard._guid = clipboardData.guid;
      clipboard._value = clipboardData.value;
    };

    /**
    * @function createDummyTextAreaAndSetText
    * @description Creates dummy textarea element and sets its text value to text.
    *              Also selects the text of the element
    * @param {string} text ,text to be set as value for the textarea
    * @return {object} textarea ,element that was created
    */
    clipboard.createDummyTextAreaAndSetText = function(text){
      var textArea = document.createElement("textarea");
      textArea.style.position = 'fixed';
      textArea.style.top = 0;
      textArea.style.left = 0;
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = 0;
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.value = text;
      document.body.appendChild(textArea);

      if(navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        textArea.setSelectionRange(0, 9999);
      } else {
        textArea.select();
      }

      return textArea;
    };

    /**
      * @function copyToClipboard
      * @description Creates a guid associated with the value that is stored in BfwClipboard module.
      *               Copies guid into clipboard
      * @param {string} value ,Value that we want the BfwClipboard module to save
      * @param {number=} timeout ,timeout after which the clipboard value should be cleared
      * @throws An exception value is not specified
      */
      clipboard.copyToClipboard = function(value,timeout) {
        if(isNil(value) || value === ""){
          throw new Error("Value to copy to clipboard cannot be null");
        }

        var textArea = clipboard.createDummyTextAreaAndSetText(value);

        var successful = document.execCommand('copy');
        if(!successful){
          logger.error("Failed to copy to clipboard");
        }
        document.body.removeChild(textArea);
      };

    return clipboard;

  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.clipboard = initModule(global.SymBfw);
  })(this); //end of module function
/*———————————————————————————————————————————————————————————————————————————————————————

BfwStorage.js :	Storage API

NortonLifeLock copyright header start

Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.

THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.

The Licensed Software and Documentation are deemed to be commercial computer
software as defined in FAR 12.212 and subject to restricted rights as defined
in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
Computer Software Documentation", as applicable, and any successor regulations.
Any use, modification, reproduction release, performance, display or disclosure
of the Licensed Software and Documentation by the U.S. Government shall be
solely in accordance with the terms of this Agreement.

NortonLifeLock copyright header stop

BrowserFramework
———————————————————————————————————————————————————————————————————————————————————————*/

(function (global) {

  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {
    /**
    * Storage namespace that interfaces with the browser specific storage.
    * @namespace storage
    */
    var storage = {
      store : {}
    };

    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var isFunction = SymBfw.utils.isFunction;
    var logger = SymBfw.logger;

    /**
    *	@function set
    *	@desc Set method is used to store the given key/value to the underlying storage.
    *	@param {string} key The key used to the store the value
    *	@param {object} value The value you want to store.
    *	@param {setCallback=} callback: used to communicate back the result of the set.
    */
    storage.set = function(key, value, callback) {
      if(isNil(key)) {
        throw new Error("Key cannot be null");
      }

      if(isNil(value)) {
        throw new Error("Value cannot be null");
      }
      storage.store[key] = value;
      //If callback is null then don't bother
      if(!isFunction(callback)) {
        return;
      }

      callback(true, null);
    };

    /**
    *	@function get
    *	@desc Get method is used to retrieve the value for key.
    *	@param {string} key The key used to the store the value
    *	@param {getCallback} callback: used to communicate back the result of the get.
    */
    storage.get = function(key, callback) {
      if(isNil(key)) {
        throw new Error("Key cannot be null");
      }

      if(!isFunction(callback)) {
        throw new Error ("Callback cannot be null or is not a function");
      }

      var value = storage.store[key];
      if(isNil(value)){
        value = {};
      }
      callback(true, value, null);
    };

    /**
    *	@function clear
    *	@desc Clears all the settings from storage.
    *	@param {changeCallback=} callback to be invoked when clear is complete. Optional argument.
    */
    storage.clear = function(callback) {
      storage.store = {};
      if(!isFunction(callback)) {
        return;
      }
      callback(true, null);
    };

    /**
    *	@function remove
    *	@desc Removes the settings for key.
    *	@param {string} key: The key for the container.
    *	@param {changeCallback=} callback to be invoked when remove is complete. Optional argument.
    */
    storage.remove = function(key, callback) {
      if(isNil(key)) {
        throw new Error("Key cannot be null");
      }
      delete storage.store[key];
      if(!isFunction(callback)) {
        return;
      }

      callback(true, null);
    };

    return storage;
  }//end of initModule


  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  (global.SymBfw = global.SymBfw || {}).storage = initModule(global.SymBfw);
  /* ########## End module wrapper ########## */

})(this); //end of module function
/*———————————————————————————————————————————————————————————————————————————————————————

settings.js :	Settings functions for Browser Framework

NortonLifeLock copyright header start

Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.

THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.

The Licensed Software and Documentation are deemed to be commercial computer
software as defined in FAR 12.212 and subject to restricted rights as defined
in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
Computer Software Documentation", as applicable, and any successor regulations.
Any use, modification, reproduction release, performance, display or disclosure
of the Licensed Software and Documentation by the U.S. Government shall be
solely in accordance with the terms of this Agreement.

NortonLifeLock copyright header stop

BrowserFramework
Change History :
09/26/14 EEL	Adding to P4.

———————————————————————————————————————————————————————————————————————————————————————*/

(function (global) {

  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {
    /**
    * Settings namespace that allows products store/get settings in memory and to disk.
    * @namespace settings
    * @property {object} containers The dictionary that contains the top level containers.
    */
    var settings = {
      containers : {},
    };

    var storage = SymBfw.storage;
    var isntNil = SymBfw.utils.isntNil;
    var isNil = SymBfw.utils.isNil;
    var isFunction = SymBfw.utils.isFunction;
    var logger = SymBfw.logger;
    /**
    *	@class
    *	@desc Creates a new settings container. Settings object is not initialized unless you call initialize function.
    *	@see initialize
    *	@param {string} name of the settings collection. Name must be unique within an extension silo.
    *	@param {bool} persist
    *	@private
    */
    var Settings = function(name, persist) {
      if(isntNil(settings.containers[name])) {
        throw new Error("Container name is not unique");
      }
      this.name = name;
      this.persist = persist;
      //internal collection of key/value pairs
      this.collection = {};
      this.initialized = false;
    };

    /**
    *	@function initialize
    *	@desc Used to initialize the setting object.
    *	      If its a persistent settings object then we first lookup the storage API.
    *        If the setting is present then the setting is loaded.
    *				If its not present then nothing happens. First setting you write will be stored to storage.
    *				If its a non-persistent settings object then no action is taken. Object is initialized.
    *	@param {getCallback=} callback function to be invoked when persistent settings has been initialized. Ignored for non-persistent settings.
    *	@see getCallback
    *	@private
    */
    Settings.prototype.initialize = function (callback) {
      var name = this.name;
      var container = this;
      this.initialized = true;

      if (this.persist === false) {
        settings.containers[name] = this;
        return;
      }

      var setCallback = function(success, error) {
        if(success) {
          settings.containers[name] = container;
          setTimeout(function(){
            callback(true, container, null);
          },1);
          return;
        }

        setTimeout(function(){
          callback(false, null, error);
        },1);
      };

      var getCallback = function(success, value, error) {
        if(success) {
          container.setCollection(value);
          settings.containers[name] = container;
          setTimeout(function(){
            callback(true, container, null);
          },1);
          return;
        }
        //if we are here it means the settings is not available in storage as well.
        //We need to create a new container with storage APIs
        //Store the empty collection first.
        storage.set(name, container.getCollection(), setCallback);
      };

      //now check if storage already has this object.
      storage.get(name, getCallback);
    };

    /**
    * @private
    * @function setCollection
    * @desc Sets the internal collection.
    * @param {object} collection The collection object that has the key/value pairs for current container.
    */
    Settings.prototype.setCollection = function (collection) {
      this.collection = collection;
    };

    /**
     * @function getCollection
     * @returns The internal collection.
     */
    Settings.prototype.getCollection = function () {
      return this.collection;
    };
    /**
    *	@function setObject
    *	@desc Used to store a setting
    *	@param {string} key to the setting.
    *	@param {object} value to be saved. It must be a object.
    *	@param {setCallback=} callback will be invoked when setting has been saved.
    *				 For non-persistent settings it can be ignored.
    *	@see setCallback
    */
    Settings.prototype.setObject = function (key, value, callback) {
      if(isNil(key)) {
        throw new Error("Key cannot be null");
      }

      if(isNil(value)) {
        throw new Error("Value cannot be null");
      }

      if(this.initialized === false) {
        throw new Error("Settings not initialized");
      }

      this.collection[key] = value;

      if(this.persist === false) {
        if(!isFunction(callback)) {
          return;
        }

        setTimeout(function(){
          callback(true, null);
        },1);
        return;
      }

      //Now update the storage APIs
      storage.set(this.name, this.collection, callback);
    };

    /**
    *	@function getObject
    *	@desc Used to retrieve a setting. The retrieved value should be a object.
    *	@param {string} key to the setting.
    *	@return Returns the value associated with that string. Can be null or undefined if key/value pair was never added.
    */
    Settings.prototype.getObject = function (key) {
      if(isNil(key)) {
        throw new Error("Key cannot be null");
      }

      if(this.initialized === false) {
        throw new Error("Settings not initialized");
      }

      var value = this.collection[key];
      if(isNil(value)) {
        value = null;
      }
      return value;
    };

    /**
    *	@function removeObject
    *	@desc Used to remove a setting
    *	@param {string} key to be removed
    * @param {setCallback=} callback will be invoked when key has been removed
    *				 For non-persistent settings it can be ignored.
    */
    Settings.prototype.removeObject = function (key, callback) {
      if(isNil(key)) {
        throw new Error("Key cannot be null");
      }

      if(this.initialized === false) {
        throw new Error("Settings not initialized");
      }

      delete this.collection[key];

      if(this.persist === false) {
        if(!isFunction(callback)) {
          return;
        }

        setTimeout(function(){
          callback(true, null);
        },1);
        return;
      }

      //Now update the storage APIs
      // Set is used instead of remove because only one value is removed from the collection
      // and not the key itself (key=name in the storage context)
      storage.set(this.name, this.collection, callback);
    };

    /**
    *	@function serialize
    *	@desc Used to serialize the settings object to string. Used for debugging.
    */
    Settings.prototype.serialize = function () {
      return JSON.stringify(this.collection);
    };

    /**
    *	@function shouldPersist
    *	@desc Lets us know if container is persisted on disk or not.
    * @returns True if it is persisted. False if its not.
    */
    Settings.prototype.shouldPersist = function () {
      return this.persist;
    };
    /**
    *	@function loadSettingsContainer
    * @desc Load a settings container given a key. If container already exists in memory then it returns it.
    *       If it doesn't exist then it will create it or load it from storage API as the case may be.
    *       External APIs will interact with this function to load containers.
    * @param {string} name to the setting.
    * @param {bool} persist If its a persistent setting or not.
    * @param {getCallback=} callback that will be invoked when persistent container is created/retrieved. Ignored for non-persistent container.
    */
    settings.loadSettingsContainer = function(name, persist, callback) {
      if(isNil(name)) {
        throw new Error("Name cannot be null");
      }

      if(isNil(persist)) {
        //defaults to false
        persist = false;
      }

      if(persist && !isFunction(callback)) {
        throw new Error("Callback cannot be null or is not a function");
      }

      var containers = settings.containers;
      var curContainer = containers[name];
      if(isntNil(curContainer)) {
        //if we have already loaded the current container then return it without doing a lookup.
        if(!persist) {
          return curContainer;
        }

        setTimeout(function(){
          callback(true, curContainer, null);
        },1);
        return;
      }
      //if we are here it means we are creating a new settings container.
      // The Settings class will take care of getting the container from storage if it already exists.
      var newContainer = new Settings(name, persist);
      newContainer.initialize(callback);
      if(!persist) {
        return newContainer;
      }
    };

    /**
    *	@function deleteSettingsContainer
    * @desc Delete settings container given the key.Existing container will be invalidated.
    *       The container should be loaded again, using loadSettingsContainer, for any further operations on it.
    * @param {string} name to the setting.
    * @param {changeCallback=} callback Will be invoked when settings container is removed.
    */
    settings.deleteSettingsContainer = function(name, callback) {
      if(isNil(name)) {
        throw new Error("Name cannot be null");
      }

      var curContainer = settings.containers[name];
      if(isntNil(curContainer)) {
        settings.containers[name] = null;
      }
      if(curContainer.shouldPersist() === false) {
        if(!isFunction(callback)) {
          return;
        }
        setTimeout(function(){
          callback(true, null);
        },1);
        return;
      }
      //If setting is persisted then remove it from storage.
      storage.remove(name, callback);
    };

    /**
    *	@function resetSettingsCollection
    * @desc Resets the collection to empty
    * @param {string} name to the setting.
    * @param {changeCallback=} callback Will be invoked when settings container collection is reset.
    */
    settings.resetSettingsCollection = function(name, callback) {
      if(isNil(name)) {
        throw new Error("Name cannot be null");
      }
      var curContainer = settings.containers[name];
      if(isNil(curContainer)) {
        throw new Error("Container was never previously loaded");
      }

      var collection = curContainer.getCollection();
      if(isNil(collection)) {
        logger.info("Collection is empty");
        if(!isFunction(callback)) {
          return;
        }
        setTimeout(function(){
          callback(false, new Error("Collection is empty"));
        },1);
        return;
      }
      for(var key in collection) {
        delete collection[key];
      }


      if(curContainer.shouldPersist() === false) {
        if(!isFunction(callback)) {
          return;
        }
        
        setTimeout(function(){
          callback(true, null);
        },1);
        return;
      }

      storage.set(curContainer.name, curContainer.collection, callback);
      return;

    };

    settings.Settings = Settings;

    return settings;
  }//end of initModule


  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.settings = initModule(global.SymBfw);
  /* ########## End module wrapper ########## */

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Mon Apr 11 2016 sriharsha_angara	Adding to Git.
//
/*jshint esversion: 6 */
(function (global) {

  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {
    /**
    * Secure Settings namespace that allows products store/get settings to disk securely.
    * SecureSettings do not have a in memory implementation. They are always persisted to disk.
    * @namespace secureSettings
    * @property {object} containers The dictionary that contains the top level containers.
    */
    var secureSettings = {};

    var settings = SymBfw.settings;
    var isntNil = SymBfw.utils.isntNil;
    var isNil = SymBfw.utils.isNil;
    var isFunction = SymBfw.utils.isFunction;
    var isString = SymBfw.utils.isString;
    var logger = SymBfw.logger;

    var constants = {
      KEY_IV : "iv",
      KEY_SALT: "salt",
      KEY_HMAC: "hmac",
      PBKDF2_KEY_SIZE: 32,
      PBKDF2_ITERATIONS: 1000,
      AES_ALGORITHM: "AES-CBC"

    };

    /**
     * getSha256Hash function - returns the sha256 has for a string
     *
     * @param  {string} value input string
     * @return {string}       sha256 hash
     */
    var getSha256Hash = function (value) {
      var md = forge.md.sha256.create();
      md.update(value);
      return md.digest().toHex();
    };

    /**
     * getHMAC function - returns the HMAC (SHA256) for a value
     *
     * @param  {string} value     input string
     * @param  {string} secretKey a password
     * @return {string}           HMAC of the input string
     */
    var getHMAC = function (value, secretKey) {
      var hmac = forge.hmac.create();
      hmac.start('sha256', secretKey);
      hmac.update(value);
      return hmac.digest().toHex();
    };

    /**
     * decrypt function - decypt an encrypted data to plain text
     *
     * @param  {ArrayBuffer} encryptedData raw buffer consisting of the encrypted blob
     * @param  {ArrayBuffer} key           the key to decypt the data (usually genereted by pbkdf2)
     * @param  {bytes[]} iv                the initialization vector
     * @param  {string} algorithm          the encryption algorithm (default = AES-CBC)
     * @return {ArrayBuffer}               the plain text data
     * @private
     */
    var decrypt = function (encryptedData, key, iv, algorithm) {
      return encryptDecrypt(false, encryptedData, key, iv, algorithm);
    };

    /**
     * encrypt function - encrypt an plaintext data to cipher text
     *
     * @param  {string} plainText     raw plain text
     * @param  {ArrayBuffer} key      the key to encrypt the data (usually genereted by pbkdf2)
     * @param  {bytes[]} iv           the initialization vector
     * @param  {string} algorithm     the encryption algorithm (default = AES-CBC)
     * @return {ArrayBuffer}          the cipher text data
     * @private
     */
    var encrypt = function (plainText, key, iv, algorithm) {
      return encryptDecrypt(true, plainText, key, iv, algorithm);
    };


    /**
     * encryptDecrypt function - encrypt/decrypt the given data
     *
     * @param  {boolean} isEncrypt        true = encrypt, false = decrypt
     * @param  {string|ArrayBuffer} data  data to encrypt/decrypt
     * @param  {ArrayBuffer} key          the key to encrypt/decrypt the data (usually genereted by pbkdf2)
     * @param  {bytes[]} iv               the initialization vector
     * @param  {string} algorithm         the encryption algorithm
     * @return {ArrayBuffer}              the plain/cipher text
     * @private
     */
    var encryptDecrypt = function (isEncrypt, data, key, iv, algorithm) {
      var dataBuffer = forge.util.createBuffer(data);

      var cipher;
      if (isEncrypt) {
        cipher = forge.cipher.createCipher(algorithm, key);
      } else {
        cipher = forge.cipher.createDecipher(algorithm, key);
      }

      cipher.start({iv:iv});
      cipher.update(dataBuffer);
      cipher.finish();

      return cipher.output.getBytes();
    };

    /**
    *	@class
    *	@desc Creates a new secure settings container. Settings object is not initialized unless you call initialize function.
    *	@see initialize
    *	@private
    */
    var SecureSettings = function(name, password) {
      this.initialized = false;
    };

    /**
    *	@function initialize
    *	@desc Used to initialize the secure setting object.
    * @param {string} name of the settings collection. Name must be unique within an extension silo.
    *	@param {string} password The password to unlock/create the secure settings.
    *	@param {getCallback} callback function to be invoked when settings has been initialized
    *	@see getCallback
    *	@private
    */
    SecureSettings.prototype.initialize = function (name, password, callback) {
      // save the this object to use it inside the callback
      var self = this;
      settings.loadSettingsContainer(name, true, function (success, container, error) {
        if (success === false) {
          setTimeout(function () {
              //This should almost never happen because loadSettingsContaner will return a new container if it doesn't exist.
              callback(false, null, error);
          }, 1);
          return;
        }

        // get iv and salt from the storage
        var iv = container.getObject(constants.KEY_IV);
        var salt = container.getObject(constants.KEY_SALT);
        var promise = null;
        if (isNil(iv) || isNil(salt)) {
          // if we don't have the iv and salt stored then this must be the first time
          // generate the random iv and salt

          promise = new Promise(function(resolve, reject){
            settings.resetSettingsCollection(name, function(success,error){
              if(!success){
                return reject(new Error('Failed to reset OCL container'));
              }
              self.iv = forge.random.getBytesSync(128);
              self.salt = forge.random.getBytesSync(128);

              container.setObject(constants.KEY_IV, JSON.stringify(self.iv));
              container.setObject(constants.KEY_SALT, JSON.stringify(self.salt));
              resolve();
            });
          });

        } else {
          try {
            // convert the stringified array to array
            self.iv = JSON.parse(iv);
            self.salt = JSON.parse(salt);
          } catch(e) {
            setTimeout(function () {
                // This should almost never happen as the IV and SALT stored will be valid JSON strings
                // Handling manual tamper if possible
                var err = "Failed to intialize: " + e.toString();
                logger.error(e);
                callback(false, null, err);
            }, 1);
            return;
          }
        }

        var setup = function(){
          // generate the key using pbkdf2 and cache it
          // will be used by setObject and getObject
          self.derivedKey = forge.pkcs5.pbkdf2(password, self.salt, constants.PBKDF2_ITERATIONS, constants.PBKDF2_KEY_SIZE);
          // check if the password if valid or not if it is an existing container
          var hmac = container.getObject(constants.KEY_HMAC);
          var newHmac = getHMAC(self.salt, self.derivedKey);
          if (isntNil(hmac)) {
            if (hmac !== newHmac) {
              // passwords doesn't match, return failure
              setTimeout(function () {
                callback(false, null, "Passwords does not match");
              }, 1);
              return;
            }
          } else {
            container.setObject(constants.KEY_HMAC, newHmac);
          }
          self.container = container;
          self.initialized = true;
          setTimeout(function () {
              callback(true, self, null);
          }, 1);
        }; //end of setup

        if(isNil(promise)) {
          setup();
        }
        else {
          promise.then(setup, function(error){
            logger.error(error);
            callback(false, null, error);
          });
        }
      });
    };

    /**
    *	@function setObject
    *	@desc Used to store a setting
    *	@param {string} key to the setting.
    *	@param {object || string} value to be saved. Value
    *	@param {setCallback=} callback will be invoked when setting has been saved.
    *	@see setCallback
    */
    SecureSettings.prototype.setObject = function (key, value, callback) {
      if(!isString(key)) {
        throw new Error("Key must be a string");
      }

      if(isNil(value)) {
        throw new Error("Value cannot be null");
      }

      if(!this.initialized) {
        throw new Error("SecureSettings not initialized");
      }

      var mdKey = getSha256Hash(key);
      var strValue = JSON.stringify(value);

      var encryptedValue = encrypt(strValue, this.derivedKey, this.iv, constants.AES_ALGORITHM);
      var encodedValue = forge.util.encode64(encryptedValue);
      var hmac = getHMAC(encodedValue, this.derivedKey);
      var objValue = {
        data: encodedValue,
        hmac: hmac
      };

      this.container.setObject(mdKey, objValue, callback);
    };

    /**
    *	@function getObject
    *	@desc Used to retrieve a setting. The retrieved value should be a object.
    *	@param {string} key to the setting.
    *	@return Returns the value associated with that string. Can be null or undefined if key/value pair was never added.
    */
    SecureSettings.prototype.getObject = function (key) {
      if(!isString(key)) {
        throw new Error("Key must be a string");
      }

      if(!this.initialized) {
        throw new Error("SecureSettings not initialized");
      }

      var mdKey = getSha256Hash(key);

      var objValue = this.container.getObject(mdKey);
      if (isNil(objValue)) {
        return null;
      }

      var encryptedValue = objValue.data;

      var hmac = getHMAC(encryptedValue, this.derivedKey);
      if (hmac !== objValue.hmac) {
        throw new Error("The data is corrupted");
      }

      var decodedValue = forge.util.decode64(encryptedValue);
      var decryptedValue = decrypt(decodedValue, this.derivedKey, this.iv, constants.AES_ALGORITHM);
      var returnValue;
      try {
        returnValue = JSON.parse(decryptedValue);
      } catch (e) {
        var error = "Failed to parse data: " + e.toString();
        logger.error(e);
        throw new Error(error);
      }
      return returnValue;
    };

    /**
    *	@function removeObject
    *	@desc Used to remove a key from the secure setting
    *	@param {string} key to be removed
    * @param {setCallback=} callback will be invoked when the key has been removed
    */
    SecureSettings.prototype.removeObject = function (key, callback) {
      if(!isString(key)) {
        throw new Error("Key must be a string");
      }

      if(this.initialized === false) {
        throw new Error("SecureSettings not initialized");
      }

      var mdKey = getSha256Hash(key);
      this.container.removeObject(mdKey, callback);
    };

    /**
    *	@function loadSecureSettingsContainer
    * @desc Load a secure settings container given a key and password. If container already exists in memory then it returns it.
    *       If it doesn't exist then it will create it or load it from storage API as the case may be.
    *       External APIs will interact with this function to load containers.
    * @param {string} name to the setting.
    * @param {string} password The password string.
    * @param {getCallback} callback that will be invoked when container is created/retrieved.
    */
    secureSettings.loadSecureSettingsContainer = function(name, password, callback) {
      if (!isString(name)) {
        throw new Error("name must be a string");
      }

      if (!isString(password)) {
        throw new Error("password must be a string");
      }

      if (!isFunction(callback)) {
        throw new Error("callback must be a function");
      }

      var hashSha256Password = getSha256Hash(password);
      // clear the password. Note: This will not make sure that the password is cleared from memory
      password = null;
      var objSecureContainer = new SecureSettings();
      objSecureContainer.initialize(name, hashSha256Password, callback);
    };

    /**
    *	@function deleteSecureSettingsContainer
    * @desc Delete secure settings container given the key.
    * @param {string} name to the setting.
    * @param {changeCallback=} callback Will be invoked when settings container is removed.
    */
    secureSettings.deleteSecureSettingsContainer = function(name, callback) {
      settings.deleteSettingsContainer(name, callback);
    };

    /**
    *	@function resetSecureSettingsCollection
    * @desc Reset secure settings collection given the collection name.
    * @param {string} name to the collection.
    * @param {changeCallback=} callback Will be invoked when settings container is reset.
    */
    secureSettings.resetSecureSettingsCollection = function(name,callback){
      if(isNil(name)){
        throw new Error("secureSettings container name is null");
      }

      settings.loadSettingsContainer(name, true, function (success, container, error) {
        if (success === false) {
          setTimeout(function () {
              if(isFunction(callback)){
                callback(false, error);
              }
          }, 1);
          return;
        }

        var secureCollection = container.collection;
        for(var key in secureCollection){
          if(key !== constants.KEY_SALT && key !== constants.KEY_IV){
            container.removeObject(key);
          }
        }
        if(isFunction(callback)){
            callback(true, null);
        }
      });
    };

    secureSettings.SecureSettings = SecureSettings;

    return secureSettings;
  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.secureSettings = initModule(global.SymBfw);
  /* ########## End module wrapper ########## */

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Tue Jun 07 2016 sriharsha_angara	Adding to Git.
//

(function (global) {
  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {

    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var isString = SymBfw.utils.isString;
    var isBoolean = SymBfw.utils.isBoolean;
    var isArray = SymBfw.utils.isArray;
    var isFunction = SymBfw.utils.isFunction;
    var l10NConst  = SymBfw.constants.localizer;

    // the list of rtl languages (code taken from https://en.wikipedia.org/wiki/Right-to-left#RTL_Wikipedia_languages)
    var rtlLanguageList = [
      'ar', 'he', 'arc', 'bcc', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'lrc', 'mzn', 'pnb', 'ps', 'sd', 'ug', 'ur', 'yi'
    ];

    var localizer = {
      stringsMap : {},
      initialized : false,
    };

    /**
    * @function setNavigatorLanguageAndLocale
    * @desc sets this object's navigatorLanguage and locale based on supported locale.
    *       If given language is not supported returns locale as "en" and navigatorLanguage as "en-US"
    */
    localizer.setNavigatorLanguageAndLocale = function() {

      if(isNil(this.supportedLocales)) {
        throw new Error("Supported locales was never set");
      }

      var browserLocale = navigator.language;

      var array = browserLocale.split("-");

      var langCode = array[0];

      var countryCode = array[1];

      var locale = langCode.toLowerCase();
      if (isntNil(countryCode)) {
        countryCode = countryCode.toLowerCase();
        locale = locale + "_" + countryCode;
      }

      do {
        var isAvailable = this.supportedLocales[locale];
        if(isBoolean(isAvailable) && isAvailable) {
            break;
        }

        isAvailable = this.supportedLocales[langCode];
        if(isBoolean(isAvailable) && isAvailable) {
          locale = langCode;
          break;
        }

        isAvailable = this.supportedLocales[countryCode];
        if(isBoolean(isAvailable) && isAvailable) {
          locale = countryCode;
          break;
        }

        locale = "en";
        browserLocale = "en-US";
      } while (false);

      this.locale = locale;
      this.navigatorLanguage = browserLocale;
    };

    /**
    * @function getNavigatorLanguage Returns the current browser's navigator.language preference .
    * @return {string} Returns the navigator language string in navigator.language format. Returns "en-US" if the current locale is not supported by our product.
    */
    localizer.getNavigatorLanguage = function() {
      if(isntNil(this.navigatorLanguage)) {
        return this.navigatorLanguage;
      }
      this.setNavigatorLanguageAndLocale();
      return this.navigatorLanguage;

    };

    /**
    * @function getLocale Returns the current locale based on browser's navigator.language preference .
    * @return {string} Returns the locale string. Returns "en" if the current locale is not supported by our product.
    */
    localizer.getLocale = function() {
      if(isntNil(this.locale)) {
        return this.locale;
      }
      this.setNavigatorLanguageAndLocale();
      return this.locale;

    };

    /**
    * @function getCurrentLanguageDirection Gets the direction (rtl/ltr) of the current locale
    * @return {string} Returns the ltr ot rtl based on the locale
    */

    localizer.getCurrentLanguageDirection = function() {
      var locale = localizer.getLocale();
      var dir = "ltr";

      if (rtlLanguageList.indexOf(locale) > -1) {
        dir = "rtl";
      }

      return dir;
    };

    /**
    * @function loadDefaultDictionary Loads the default "messages.json" dictionary under the locale folder.
    * @param {loadLocalizedDictionaryCallback} callback That gets invoked when default dictionary is loaded. Throws an exception if callback is null.
    */
    localizer.loadDefaultDictionary = function(callback) {
      localizer.loadDictionary(l10NConst.DEFAULT_MESSAGES_DICTIONARY, callback);
    };

    /**
    * @function loadDictionary Loads the dictionary specified by the name under the locale folder.
    * @param {string} name The name of the dictionary you want to load.
    * @param {loadLocalizedDictionaryCallback} callback That gets invoked when dictionary is loaded. Throws an exception if callback is null.
    */
    localizer.loadDictionary = function(name, callback) {
      if(isString(name) === false) {
        throw new Error("Dictionary name cannot be null");
      }

      if(isFunction(callback) === false) {
        throw new Error("Callback cannot be null");
      }

      if(isNil(this.path)) {
        throw new Error("Path to localized folder is not set. Need to call initialize before using this API");
      }

      var stringsDict = this.stringsMap[name];
      //no need to reload the dictionary if it has already been loaded.
      if(isntNil(stringsDict)) {
        setTimeout(function(){
          callback(true, null);
        },1);

        return;
      }

      var locale = this.getLocale();
      var pathToJSON = this.path + "/" + locale + "/" + name + ".json";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", pathToJSON, true);

      xhr.addEventListener("load", function (event) {
        var status = event.target.status;
        var successStatus = (SymBfw.globals.BROWSER === "Safari") ? 0 : 200;
        if(status === successStatus) {
          var strings = event.target.response;
          var dict = JSON.parse(strings);
          localizer.stringsMap[name] = dict;
          callback(true, null);
          localizer.initialized = true;
          return;
        }

        callback(false, new Error("File at path:"+pathToJSON+" does not exist. Status Code:"+status));
      });

      xhr.send();
    };

    /**
    * @function getLocalizedString Returns the localized string for the input string.
    * @param {string} string The english string you want to get localized.
    * @return {string} The localized string for the current locale. This will look up the default dictionary and return the localized string.
    * @throws An exception if current locale was never established or default dictionary was never loaded.
    */
    localizer.getLocalizedString = function(string) {
      return localizer.getLocalizedStringFromDictionary(string, l10NConst.DEFAULT_MESSAGES_DICTIONARY);
    };

    /**
    * @function getLocalizedStrings Returns an array of localized strings.
    * @param {array} arrayOfStrings The array of english strings you want to get localized.
    * @return {Object} The localized strings for the current locale. This will look up the default dictionary and return the localized strings.
    * @throws An exception if current locale was never established or default dictionary was never loaded.
    */
    localizer.getLocalizedStrings = function(arrayOfStrings) {
      return localizer.getLocalizedStringsFromDictionary(arrayOfStrings, l10NConst.DEFAULT_MESSAGES_DICTIONARY);
    };

    /**
    * @function getLocalizedStringFromDictionary Returns the localized string for the input string from the given dictonary.
    * @param {string} string The english string you want to get localized.
    * @param {string} name The name of dictionary you want to read the localied string from.
    * @return {string} The localized string for the current locale. This will look up the dictionary specified by the "name" and return the localized string.
    * @throws An exception if current locale was never established or "name" dictionary was never loaded.
    */
    localizer.getLocalizedStringFromDictionary = function(string, name) {

      if(isString(string) === false) {
        throw new Error("Unlocalized String cannot be null or is not a string");
      }

      var result = localizer.getLocalizedStringsFromDictionary([string], name);
      return result[string];
    };

    /**
    * @function getLocalizedStringsFromDictionary Returns the array of localized strings from the given dictonary.
    * @param {array} arrayOfStrings The english strings you want to get localized.
    * @param {string} name The name of dictionary you want to read the localied string from.
    * @return {Object} The array of localized strings for the current locale. This will look up the dictionary specified by the "name" and return the localized strings.
    * @throws An exception if current locale was never established or "name" dictionary was never loaded.
    */
    localizer.getLocalizedStringsFromDictionary = function(arrayOfStrings, name) {

      if(isArray(arrayOfStrings) === false) {
        throw new Error("Array of strings cannot be null.");
      }

      if(arrayOfStrings.length === 0) {
        throw new Error("Array of strings cannot be empty.");
      }

      if(isString(name) === false) {
        throw new Error("Dictionary name cannot be null");
      }

      var stringsDict = this.stringsMap[name];
      if(isNil(stringsDict)) {
        throw new Error("Dictionary "+name+" is being used without being loaded");
      }

      var result = {};

      for(var index in arrayOfStrings) {
        var string = arrayOfStrings[index];
        var dict = stringsDict[string];
        if(isNil(dict)) {
          result[string] = string;
          continue;
        }

        var localizedString = dict.message;
        if(isNil(localizedString)) {
          result[string] = string;
          continue;
        }

        result[string] = localizedString;
      }

      return result;
    };

    /**
     * @function getLocalizedStringsWithFormat
     * @param formatStringDict {object} Example - { Thanks for using {0}. Try {1}: ['Norton Password Manager', 'Norton Safe Web'] }
     * @description This function will localize the arguments (both key and array of values) and will append array values
     * to their respective position in key string.
     * @return {object} Localized object with formatted string.
     * Example - {Thanks for using {0}. Try {1}: Thanks for using Norton Password Manager. Try Norton Safe Web}
     */
    localizer.getLocalizedStringsWithFormat = function(formatStringDict){
      var localizedStringObj = {};
      for (var formatString in formatStringDict) {
        var stringParams = formatStringDict[formatString];
        var localizedParam = [];
        for(var index = 0; index < stringParams.length; index++) {
          var param = stringParams[index];
          isNil(param) ? localizedParam.push(null) : localizedParam.push(localizer.getLocalizedString(param))
        }
        var localizedString = localizer.getLocalizedStringWithFormat(formatString, localizedParam);
        localizedStringObj[formatString] = localizedString;
      }
      return localizedStringObj
    };

    /**
     * @function getLocalizedStringWithFormat Returns the localized formatted string.
     * @param  {string} string The unlocalized format string.
     *                         This is how a format string should look like, for example, {0} went to her school at {1} today.
     *                         This function will replace the string {0} with params[0], {1} with params[1].
     * @param  {array} params Array of parameters you want to replace.
     * @return {string} Returns the localized string with the format you wanted.
     * @summary If params need to be localized it is upto the client to pass in localized params. This API is NOT responsible for localizing the params
     *          Use the getLocalizedString API to get the localized param string.
     */
    localizer.getLocalizedStringWithFormat = function(string, params) {
      return localizer.getLocalizedStringWithFormatFromDictionary(string, params, l10NConst.DEFAULT_MESSAGES_DICTIONARY);
    };

    /**
     * @function getLocalizedStringWithFormatFromDictionary Returns the localized formatted string.
     * @param  {string} string The unlocalized format string.
     *                         This is how a format string should look like, for example, {0} went to her school at {1} today.
     *                         This function will replace the string {0} with params[0], {1} with params[1].
     * @param  {array} params Array of parameters you want to replace.
     * @param  {string} name The name of the dictionary you want to load the string from.
     * @return {string} Returns the localized string with the format you wanted.
     * @summary If params need to be localized it is upto the client to pass in localized params. This API is NOT responsible for localizing the params
     *          Use the getLocalizedString API to get the localized param string.
     */
    localizer.getLocalizedStringWithFormatFromDictionary = function(string, params, name) {
      if(isNil(params)) {
        throw new Error("Format parameters cannot be null");
      }

      var localizedString = localizer.getLocalizedStringFromDictionary(string, name);

      for(var index in params) {
        var param = params[index];
        localizedString = localizedString.replace("{"+index+"}", param);
      }

      return localizedString;
    };

    /**
     * @function getLocalizedStringFromNativeLocalizer
     * @summary gets the localized string for the specified message.
     * @param  {string} messageName : The name of the message, as specified in the messages.json file
     * @param  {object=} substitutions : Up to 9 substitution strings, if the message requires any.
     * @return {string} Returns the localized string for the specified message
     */
    localizer.getLocalizedStringFromNativeLocalizer = function(messageName, substitutions){
      return SymBfw.extensionAdapter.i18nGetMessage(messageName, substitutions);
    };

    /**
    * @function initialize
    * @param {object} supportedLocales The list of supported locales by the point product. Cannot be null.
    * @param {loadLocalizedDictionaryCallback} callback The callback that gets invoked when the locale setup and defaultDictionary are loaded.
    * @param {string=} path The path to the folder that contains all the locale folders. Can be null. Will default to content/i18n folder.
    * @summary Clients must call this function before using the BfwLocalizer API. This function will only load the default dictionary.
    *          Clients are responsible for calling loadDictionary if they have additional dictionaries that need to get loaded.
    */
    localizer.initialize = function(supportedLocales, callback, path) {
      if(isNil(supportedLocales)) {
        throw new Error("Supported locales cannot be null");
      }

      if(isNil(path)) {
        path = SymBfw.extensionAdapter.getExtensionURL("content/i18n");
      }

      localizer.path = path;
      this.supportedLocales = supportedLocales;
      SymBfw.extensionAdapter.addMessageListener(localizer.handleMessage);
      localizer.loadDefaultDictionary(callback);
    };

    localizer.handleMessage = function(request, sendResponse, sender) {
      if(isNil(request)) {
        return;
      }

      var id = request.id;
      var payload = request.payload;

      if(isNil(id)) {
        return;
      }

      if(isNil(payload)) {
        return;
      }

      var responsePayload = null;
      var supported = true;
      switch (id) {
        case l10NConst.GET_LOCALIZED_STRING:
          responsePayload = localizer.getLocalizedString(payload);
          break;
        case l10NConst.GET_LOCALIZED_STRINGS:
          responsePayload = localizer.getLocalizedStrings(payload);
          break;
        case l10NConst.GET_LOCALIZED_STRING_FROM_DICTIONARY:
          responsePayload = localizer.getLocalizedStringFromDictionary(payload.string, payload.name);
          break;
        case l10NConst.GET_LOCALIZED_STRINGS_FROM_DICTIONARY:
          responsePayload = localizer.getLocalizedStringsFromDictionary(payload.array, payload.name);
          break;
        case l10NConst.GET_LOCALIZED_STRING_WITH_FORMAT:
          responsePayload = localizer.getLocalizedStringWithFormat(payload.string, payload.params);
          break;
        case l10NConst.GET_LOCALIZED_STRING_WITH_FORMAT_FROM_DICTIONARY:
          responsePayload = localizer.getLocalizedStringWithFormatFromDictionary(payload.string, payload.params, payload.name);
          break;
        case l10NConst.GET_CURRENT_LANGUAGE_DIRECTION:
          responsePayload = localizer.getCurrentLanguageDirection();
          break;
        default:
          supported = false;
      }

      if(supported) {
        //We should only send messages when we know we support them.
        sendResponse({
          id: request.id,
          payload : responsePayload,
        });
      }

    };

    return localizer;
  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.localizer = initModule(global.SymBfw);
})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Created by nandu on 7/10/16.
//

(function (global) {
  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {
    var constants = {};

    /**
    * @const APPLICATION_NAME
    * @desc Constants for Application Name
    */
    constants.APPLICATION_NAME = "APPLICATION_NAME";

    /**
    * @const APPLICATION_VERSION
    * @desc Constants for Application Version
    */
    constants.APPLICATION_VERSION = "APPLICATION_VERSION";

    /**
    * @const CLIENT_ID
    * @desc Constants for Client ID
    */
    constants.CLIENT_ID = "CLIENT_ID";
    /**
    * @const DATA_SOURCE
    * @desc Constants for Data Source
    */
    constants.DATA_SOURCE = "DATA_SOURCE";

    /**
    * @const TRACKING_ID
    * @desc Constants for Tracking ID
    */
    constants.TRACKING_ID = "TRACKING_ID";

    /**
    * @const USER_AGENT
    * @desc Constants for User Agent
    */
    constants.USER_AGENT = "USER_AGENT";

    /**
    * @const USER_LANGUAGE
    * @desc Constants for User Language
    */
    constants.USER_LANGUAGE = "USER_LANGUAGE";

    /**
    * @const GOOGLE_ANALYTICS_PROTOCOL_VERSION
    * @desc Constants for Google Analytics Protocol Version
    */

    constants.GOOGLE_ANALYTICS_PROTOCOL_VERSION = "GOOGLE_ANALYTICS_PROTOCOL_VERSION";

    /**
    * @const ANONYMIZE_IP
    * @desc Constants for Anonymize IP
    */
    constants.ANONYMIZE_IP = "ANONYMIZE_IP";

    constants.defaultParametersList = [
      constants.APPLICATION_NAME,
      constants.APPLICATION_VERSION,
      constants.CLIENT_ID,
      constants.DATA_SOURCE,
      constants.TRACKING_ID,
      constants.GOOGLE_ANALYTICS_PROTOCOL_VERSION,
      constants.ANONYMIZE_IP
    ];

    constants.dataSource = {
      BROWSER_EXTENSION: 'web',
      MOBILE_APP: 'app'
    };

    constants.HIT_TYPE = {
      PAGE_VIEW: 'pageview',
      SCREEN_VIEW : 'screenview',
      EVENT: 'event',
      EXCEPTION: 'exception'
    };

    constants.MESSAGES = {
      /**
      * @property SEND_TELEMETRY_TO_BGPROXY
      * @type {String}
      */

      SEND_TELEMETRY_TO_BGPROXY: "b021e29a-4fe3-4a60-865f-0cf783318187"
    };

    /**
    * @property  parameters
    * @desc map of parameters used by BFW component
    */
    constants.parameters = {
      /**
      * @property  NON_INTERACTION_HIT
      * @desc constant to represent non-interaction hit
      */
      NON_INTERACTION_HIT: "ni",
      /**
      * @property  HIT_TYPE
      * @desc constant to represent hit type
      */
      HIT_TYPE: "t",
      /**
      * @property  CATEGORY
      * @desc constant to category of the event
      */
      CATEGORY: "ec",
      /**
      * @property  ACTION
      * @desc constant to action type of the event
      */
      ACTION: "ea",
      /**
      * @property  LABEL
      * @desc constant to label of the event
      */
      LABEL: "el",

      /**
      * @property  DOCUMENT_PATH
      * @desc path of the document (relative to root dir of extension)
      */
      DOCUMENT_PATH: "dp",

      /**
      * @property  DOCUMENT_TITLE
      * @desc title of the document
      */
      DOCUMENT_TITLE: "dt",

      /**
      * @property  CUSTOM_DIMENSION1
      * @desc constant. document shown due to pageload/fieldclick
      */
      CUSTOM_DIMENSION1: "cd1",

      /**
      * @property  PRODUCT_IMPRESSION_BRAND1
      * @desc The PRODUCT_IMPRESSION_BRAND1 you can use to specify the channel or partner ID.
      */
      PRODUCT_IMPRESSION_BRAND1: "il1pi1br",

      /**
      * @property  ITEM_CATEGORY
      * @desc The ITEM_CATEGORY you can use to specify the channel or partner ID.
      */
      ITEM_CATEGORY : "iv",

      /**
      * @property  CAMPAIGN_SOURCE
      * @desc The CAMPAIGN_SOURCE you can use to specify the channel or partner ID.
      */
      CAMPAIGN_SOURCE : "cs",

      /**
      * @property  CAMPAIGN_MEDIUM
      * @desc The CAMPAIGN_MEDIUM you can use to specify the way you acquired the customer.
      */
      CAMPAIGN_MEDIUM : "cm"
    };

    /**
    * @property  TELEMETRY_CATEGORY
    * @desc object containing IDSafe component names
    * @private
    */
    constants.TELEMETRY_CATEGORY = {
      BROWSER: "Browser",
      EXTENSION: "Extension"
    };

    constants.actionType = {

      /**
      * @property BROWSER
      * @desc map of event actions available for Browser
      */
      BROWSER: {
        /**
        * @property LAUNCH
        * @desc constant to represent Browser launch actions
        */
        LAUNCH: "launch",
        /**
        * @property UPDATE
        * @desc constant to represent Browser update actions
        */
        UPDATE: "update"
      },

      EXTENSION : {
        /**
        * @property INSTALL
        * @desc constant to represent Extension install actions
        */
        INSTALL : "install",

        /**
        * @property UPDATE
        * @desc constant to represent Extension update actions
        */
        UPDATE : "update"
      }

    };

    constants.defaultParameters = {

      /**
      * Request payload: string. Encoded value corresponding to Application/Extension Name from manifest
      * @property maxLength. Maximum Length of encoded string in bytes
      * @property key. Key corresponding to this entry in request payload
      */
      APPLICATION_NAME: {
        "maxLength": 100,
        "key": "an"
      },
      /**
      * Request payload: string. Encoded value corresponding to Application/Extension Version from manifest
      * @property maxLength. Maximum Length of encoded string in bytes
      * @property key. Key corresponding to this entry in request payload
      */
      APPLICATION_VERSION: {
        "maxLength": 100,
        "key": "av"
      },
      /**
      * Request payload: string. Encoded value corresponding to cookie with a two-year expiration. random UUID (version 4)
      * In IDSafe usage, it will be MachineGUID
      * @property maxLength. Maximum Length of encoded string in bytes
      * @property key. Key corresponding to this entry in request payload
      */
      CLIENT_ID: {
        "maxLength": 100,
        "key": "cid"
      },
      /**
      * Request payload: string. Encoded value corresponding to Data Source
      * @property maxLength. Maximum Length of encoded string in bytes
      * @property key. Key corresponding to this entry in request payload
      * @property value. value (default)
      */
      DATA_SOURCE: {
        "maxLength": 50,
        "key": "ds",
        "value": constants.dataSource.BROWSER_EXTENSION
      },
      /**
      * Request payload: string. Encoded value corresponding to Tracking ID for the Application
      * @property maxLength. Maximum Length of encoded string in bytes
      * @property key. Key corresponding to this entry in request payload
      */
      TRACKING_ID: {
        "maxLength": 100,
        "key": "tid"
      },
      /**
      * Request payload: string. Encoded value corresponding to User Agent override (includes browser)
      * @property maxLength. Maximum Length of encoded string in bytes
      * @property key. Key corresponding to this entry in request payload
      */
      USER_AGENT: {
        "maxLength": 1000,
        "key": "ua"
      },
      /**
      * Request payload: string. Encoded value corresponding to User Language
      * @property maxLength. Maximum Length of encoded string in bytes
      * @property key. Key corresponding to this entry in request payload
      */
      USER_LANGUAGE: {
        "maxLength": 20,
        "key": "ul"
      },
      /**
      * Request payload: string. Encoded value corresponding to Protocol Version of Google Analytics. Current set to 1
      * @property maxLength. Maximum Length of encoded string in bytes
      * @property key. Key corresponding to this entry in request payload
      * @property value. value (default)
      */
      GOOGLE_ANALYTICS_PROTOCOL_VERSION: {
        "maxLength": 100,
        "key": "v",
        "value": 1
      },
      /**
      * Request payload: number. When present, the IP address of the sender will be anonymized
      * @property maxLength. Maximum Length of encoded string in bytes
      * @property key. Key corresponding to this entry in request payload
      * @property value. value (default)
      */
      ANONYMIZE_IP: {
        "maxLength": 1,
        "key": "aip",
        "value": 1
      }
    };

    return constants;
  }
  // export the constants
  (global.SymBfw = global.SymBfw || {}).telemetryConstants = initModule(global.SymBfw);
})(this);
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//

(function (global) {
  "use strict";

  function initModule(SymBfw) {
    var telemetrySettings = {};
    var settings = SymBfw.settings;
    var isNil = SymBfw.utils.isNil;
    var isBoolean = SymBfw.utils.isBoolean;
    var isFunction = SymBfw.utils.isFunction;
    var constants = SymBfw.constants;
    var logger = SymBfw.logger;

    telemetrySettings.settingsContainer = null;

    /**
     * @function initialize
     * @desc loads the telemetry settings container
     * @param  {initializeCallback} callback the callback that is called with a boolean denoting success/failure
     * @throws Throws error when callback is not a function
     */
    telemetrySettings.initialize = function(callback) {
      if(!isFunction(callback)) {
        throw new Error("callback must be a function");
      }

      settings.loadSettingsContainer(constants.telemetry.BFW_TELEMETRY_SETTINGS_CONTAINER, true, function(success, container, error) {
        if((success === false) || isNil(container)) {
          logger.error("failed to load BFW_TELEMETRY_SETTINGS_CONTAINER");
          callback(false);
          return;
        }

        telemetrySettings.settingsContainer = container;
        callback(true);
      });
    };

    /**
     * @function isTelemetryEnabled
     * @desc gets whether the telemetry is enabled or not from the settings container
     * @return {bool} the boolean denoting whether telemetry is enabled or not, defaults to false
     * @throws Throws error when settings container is not initialized
     */
    telemetrySettings.isTelemetryEnabled = function() {
      if(isNil(this.settingsContainer)) {
        logger.log("Settings not initialized");
        return false;
      }

      var isEnabled = this.settingsContainer.getObject(constants.telemetry.TELEMETRY_ENABLED);

      return isNil(isEnabled) ? false : isEnabled;
    };

    /**
     * @function setTelemetryEnabled
     * @desc sets whether the telemetry is enabled or not to the settings container
     * @param  {bool} isTelemetryEnabled the boolean value denoting whether telemetry is enabled or not
     * @throws Throws error when settings container is not initialized or if an invalid parameter is passed
     */
    telemetrySettings.setTelemetryEnabled = function(isTelemetryEnabled) {
      if(isNil(this.settingsContainer)) {
        throw new Error("Settings not initialized");
      }

      if(!isBoolean(isTelemetryEnabled)) {
        throw new Error("Parameter must be a boolean");
      }

      this.settingsContainer.setObject(constants.telemetry.TELEMETRY_ENABLED, isTelemetryEnabled);
    };

    /**
     * @function isTelemetryOptOutShown
     * @desc gets whether the opt-out is shown or not from the settings container
     * @return {bool} the boolean denoting whether opt-in is shown or not, defaults to false
     * @throws Throws error when settings container is not initialized
     */
    telemetrySettings.isTelemetryOptOutShown = function() {
      if(isNil(this.settingsContainer)) {
        throw new Error("Settings not initialized");
      }

      var isShown = this.settingsContainer.getObject(constants.telemetry.TELEMETRY_OPT_OUT_SHOWN);

      return isNil(isShown) ? false : isShown;
    };

    /**
     * @function setTelemetryOptOutShown
     * @desc sets whether the opt-out is shown or not to the settings container
     * @param  {bool} isTelemetryOptOutShown the boolean value denoting whether opt-in is shown or not
     * @throws Throws error when settings container is not initialized or if an invalid parameter is passed
     */
    telemetrySettings.setTelemetryOptOutShown = function(isTelemetryOptOutShown) {
      if(isNil(this.settingsContainer)) {
        throw new Error("Settings not initialized");
      }

      if(!isBoolean(isTelemetryOptOutShown)) {
        throw new Error("Parameter must be a boolean");
      }

      this.settingsContainer.setObject(constants.telemetry.TELEMETRY_OPT_OUT_SHOWN, isTelemetryOptOutShown);
    };

    /**
     * @function hasUserRespondedInOptOutPage
     * @desc gets whether the user responded in the opt-out page or not from the settings container
     * @return {bool} the boolean denoting whether user responded in the opt-out page or not, defaults to false
     * @throws Throws error when settings container is not initialized
     */
    telemetrySettings.hasUserRespondedInOptOutPage = function() {
      if(isNil(this.settingsContainer)) {
        logger.log("Settings not initialized");
        return false;
      }

      var isShown = this.settingsContainer.getObject(constants.telemetry.USER_RESPONDED_IN_OPT_OUT_PAGE);

      return isNil(isShown) ? false : isShown;
    };

    /**
     * @function setUserRespondedInOptOutPage
     * @desc sets whether the user responded in the opt-out page or not to the settings container
     * @param  {bool} hasUserResponded the boolean value denoting whether user responded in the opt-out page or not
     * @throws Throws error when settings container is not initialized or if an invalid parameter is passed
     */
    telemetrySettings.setUserRespondedInOptOutPage = function(hasUserRespondedInOptOutPage) {
      if(isNil(this.settingsContainer)) {
        throw new Error("Settings not initialized");
      }

      if(!isBoolean(hasUserRespondedInOptOutPage)) {
        throw new Error("Parameter must be a boolean");
      }

      this.settingsContainer.setObject(constants.telemetry.USER_RESPONDED_IN_OPT_OUT_PAGE, hasUserRespondedInOptOutPage, function(success){
        SymBfw.telemetry.flushQueue();
      });
    };

    /**
    * @function setLastOfferDate
    * @desc Sets the last offer date for Telemetry Opt-out.
    * @param  {Date} date The date object you want to use for setting the telemetry opt-out.
    */
    telemetrySettings.setLastOfferDate = function(date) {
      if(isNil(date)) {
        throw new Error("Date cannot be null.");
      }

      this.settingsContainer.setObject(constants.telemetry.LAST_OFFER_DATE, date.getTime());
    };

    /**
    * @function getLastOfferDate
    * @desc Get the last offer telemetry opt-out offer date.
    * @return {Date} Returns Date object for the last time offer was shown. If not returns null.
    */
    telemetrySettings.getLastOfferDate = function() {
      var lastDate = this.settingsContainer.getObject(constants.telemetry.LAST_OFFER_DATE);
      if(isNil(lastDate)) {
        return null;
      }

      if(SymBfw.utils.isInteger(lastDate) === false) {
        return null;
      }

      return new Date(lastDate);
    };


    return telemetrySettings;
  }

  global.SymBfw.telemetrySettings = initModule(global.SymBfw);

})(this);
/*———————————————————————————————————————————————————————————————————————————————————————

 NortonLifeLock copyright header start

 Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.

 THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
 INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
 EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.

 The Licensed Software and Documentation are deemed to be commercial computer
 software as defined in FAR 12.212 and subject to restricted rights as defined
 in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
 and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
 Computer Software Documentation", as applicable, and any successor regulations.
 Any use, modification, reproduction release, performance, display or disclosure
 of the Licensed Software and Documentation by the U.S. Government shall be
 solely in accordance with the terms of this Agreement.

 NortonLifeLock copyright header stop

 BrowserFramework
 Change History :
 Created by nandu on 7/11/16.

 ———————————————————————————————————————————————————————————————————————————————————————*/

(function (global) {
    "use strict";

    function initModule(SymBfw) {
        /**
         * @namespace telemetrySCD
         * @desc telemetrySCD API that contains information about the telemetry submissoin control data.
         */
        var telemetrySCD = {};

        /**
         * @const GOOGLE_ANALYTICS_URL
         * @desc The GOOGLE ANALYTICS Collection URL
         */
        telemetrySCD.GOOGLE_ANALYTICS_URL = "https://www.google-analytics.com/collect";

        /**
         * @const REQUEST_TYPE
         * @desc The REQUEST TYPE
         */
        telemetrySCD.REQUEST_TYPE = "POST";

  //      /**
  //       * @const TRACKING_ID
  //       * @desc Telemetry Tracking ID
  //       */
  //      telemetrySCD.TRACKING_ID = "##TRACKING_ID##";

        /**
         * @const COLLECTION_STATE
         * @desc Global flag for all telemetry collection
         */
        telemetrySCD.COLLECTION_STATE = true;


        /**
         * @function serialize
         * @desc Function will convert the contents of this class into a JSON object. Used only for automation.
         * @return Returns a dictionary that contains the SCD information
         */
        telemetrySCD.serialize = function () {
            return {
                "ga_url" : telemetrySCD.GOOGLE_ANALYTICS_URL,
                "request_type" : telemetrySCD.REQUEST_TYPE,
    //            "tracking_id"  : telemetrySCD.TRACKING_ID,
                "collection_state" : telemetrySCD.COLLECTION_STATE
            };
        };

        return telemetrySCD;

    }//end of initModule

    /* ########## Begin module wrapper ########## */
    //Right now we don't have support for Module or RequireJS type modules.
    //You need to include as scripts for now.
    (global.SymBfw = global.SymBfw || {}).telemetrySCD = initModule(global.SymBfw);

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Created by nandu on 7/10/16.
//

(function (global) {
    "use strict";

    function initModule(SymBfw) {


        var isNil = SymBfw.utils.isNil;
        var isntNil = SymBfw.utils.isntNil;
        var isFunction = SymBfw.utils.isFunction;
        var telemetryConstants = SymBfw.telemetryConstants;
        var logger = SymBfw.logger;

        /**
         * @namespace telemetry
         * @desc The namespace/class for Telemetry.
         */
        var telemetry = {};

        /**
         * @private
         * @property {string} cache defaultParameters given by init method
         */
        telemetry.defaultParameters = null;

        /**
         * @private
         * @property {boolean}
         */
        telemetry.initialized = false;

        /**
         * @private
         * @property {Object} array of telemetry parameter
         */
        telemetry._telemetryParamsQueue = [];

        /**
         * @private
         * @function constructMessageBody. Given a list to key, values, constructMessageBody will return MessageBody for http requests
         * @param  {parameters}  Parameters that needs to be added to every telemetry
         * example: input {an: "IDSafe", av: "1.0.0"} returns "an=IDSafe&av=1.0.0"
         * @throws Throws an exception if parameters isn't set .
         */

        telemetry.constructMessageBody = function(parameters) {

            if(isNil(parameters)) {
                throw new Error("parameters cannot be null");
            }

            if (Object.keys(parameters).length === 0) {
                throw new Error("parameters object is empty. Need at-least one property");
            }

            var messageBody = "";
            for (var prop in parameters) {
                messageBody+=prop + "=" + parameters[prop] + "&";
            }

            messageBody = messageBody.substring(0, messageBody.length - 1);

            return messageBody;
        };

        /**
         * @function init called by clients to initialize telemetry with Default parameters. This has to be done
         * early as possible
         * @param  {defaultParameters} Default Parameters that needs to be added to every telemetry
         * example: {APPLICATION_NAME: "IDSafe", APPLICATION_VERSION: "1.0.0", CLIENT_ID: "xyz", DATA_SOURCE: "web", TRACKING_ID: "UA-23809562-15"…}
         * @param {callback} callback that is executed on success/failure during initialization
         * @throws Throws an exception if all expected defaultParameters isn't set, on any failure to map or construct GA params
         * or if callback is nil/not a function
         */
        telemetry.init = function(defaultParameters, callback) {

            if (telemetry.initialized === true) {
                return;
            }

            if(isNil(defaultParameters)) {
                throw new Error("defaultParameters cannot be null");
            }

            if(!isFunction(callback)) {
                throw new Error("callback is not defined or is not a function");
            }

            SymBfw.telemetryConstants.defaultParametersList.forEach(function(item) {
                if (isNil(defaultParameters[item])) {
                    throw new Error("could not find mandatory parameter " + item + " in parameters list");
                }
            });

            var paramsDict = {};

            for (var prop in defaultParameters) {
                var paramObject = SymBfw.telemetryConstants.defaultParameters[prop];
                if (isNil(paramObject.key)) {
                    continue;
                }

                paramsDict[paramObject.key] = defaultParameters[prop];
            }

            var userLanguage = telemetryConstants.defaultParameters[telemetryConstants.USER_LANGUAGE];
            if(isNil(paramsDict[userLanguage.key])) {
              paramsDict[userLanguage.key] = navigator.language;
            }

            var messageBody = telemetry.constructMessageBody(paramsDict);
            if (isNil(messageBody) || (messageBody.length === 0)) {
                throw new Error("constructMessageBody returned an empty string");
            }

            SymBfw.telemetrySettings.initialize(function (success) {
              if(success === false) {
                logger.error("failed to initialize BfwTelemetry");
                callback(false);
                return;
              }

              SymBfw.extensionAdapter.addMessageListener(telemetry.handleMessage);
              telemetry.defaultParameters = messageBody;
              telemetry.initialized = true;
              callback(true);
            });

            return;
        };

        /**
         * @function send called by clients to send telemetry
         * @param  {parameters}  Telemetry Parameters that needs to be sent (appended to defaultParameters)
         * @return {boolean} true if no error. false otherwise .
         * @throws Throws an exception if parameters isn't set
         *
         */
        telemetry.send = function(parameters) {

            if(SymBfw.telemetrySettings.isTelemetryEnabled() === false) {
              if(SymBfw.telemetrySettings.hasUserRespondedInOptOutPage() === false) {
                if(isntNil(telemetry._telemetryParamsQueue)){
                  telemetry._telemetryParamsQueue.push(parameters);
                }
              }
              return false;
            }
            if (isNil(telemetry.defaultParameters) || (telemetry.initialized === false)) {
                return false;
            }

            if(isNil(parameters)) {
                throw new Error("parameters are required for sending telemetry events");
            }

            var request = new XMLHttpRequest();
            request.open(SymBfw.telemetrySCD.REQUEST_TYPE, SymBfw.telemetrySCD.GOOGLE_ANALYTICS_URL, true);

            request.addEventListener("load", function (event) {
                logger.debug("xhr load status: " + event.target.status);
            });

            request.addEventListener("error", function (event) {
                logger.debug("xhr error status: " + event.target.status);
            });

            var msgBody = telemetry.constructMessageBody(parameters);
            if (isNil(msgBody) || (msgBody.length === 0)) {
                return false;
            }

            msgBody += "&" + telemetry.defaultParameters;
            request.send(msgBody);
            return true;
        };

        /**
         * @function handleMessage
         * @desc handles messages from telemetry proxy
         * @param  {object} payload of the following type
         * {
         *  parameters: { map of params }
         * }
         * @return {type}         description
         */
        telemetry.handleMessage = function(request, sendResponse, sender) {
          var id = request.id;
          if (id !== telemetryConstants.MESSAGES.SEND_TELEMETRY_TO_BGPROXY) {
            // a telemetry message
            return;
          }

          var payload = request.payload;
          if(isNil(payload) || isNil(payload.parameters)) {
            // invalid parameters nothing to handle here
            return;
          }
          telemetry.send(request.payload.parameters);
        };

        /**
         * @desc Flushes the telemetry queue and sends all the queued events.
         */
        telemetry.flushQueue = function() {
            setTimeout(function () {
                for(var index in telemetry._telemetryParamsQueue){
                  telemetry.send( telemetry._telemetryParamsQueue[index] );
                }
                telemetry._telemetryParamsQueue = null;
              }, 2000);
        };

        return telemetry;
    }//end of initModule

    /* ########## Begin module wrapper ########## */
    //Right now we don't have support for Module or RequireJS type modules.
    //You need to include as scripts for now.
    global.SymBfw.telemetry = initModule(global.SymBfw);

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
//
(function (global) {
  "use strict";
  function initModule(SymBfw) {

    var isNil = SymBfw.utils.isNil;
    var isString = SymBfw.utils.isString;

    var telemetryWrapper = {};

    /**
     * @property  TELEMETRY_CATEGORY
     * @desc name of the component used as category for telemetry
     * @private
     */
    telemetryWrapper.TELEMETRY_CATEGORY = "bfw";

    /**
     * @const  telemetryType
     * @desc name of the component used as category for telemetry
     * @private
     */
    telemetryWrapper.TELEMETRY_TYPE = "event";
    /**
     * @property  componentType
     * @desc map of component types available for bfw
     */
    telemetryWrapper.componentType = {
      /**
       * @property LOGGER
       * @desc constant to represent the logger actions
       */
      LOGGER: "logger",
      /**
       * @property LOCALIZER
       * @desc constant to represent the localizer actions
       */
      LOCALIZER: "localizer",
      /**
       * @property STORAGE
       * @desc constant to represent the storage actions
       */
      STORAGE: "storage",
      /**
       * @property SETTINGS
       * @desc constant to represent the settings actions
       */
      SETTINGS: "settings",
      /**
       * @property SECURE_SETTINGS
       * @desc constant to represent the secure settings actions
       */
      SECURE_SETTINGS: "secureSettings"
    };

    /**
     * @property  actionType
     * @desc map of telemetry types available for bfw
     */
    telemetryWrapper.actionType = {
      /**
       * @property WARN
       * @desc constant to represent the warning of logger telemetry
       */
      WARN: "warn",
      /**
       * @property ERROR
       * @desc constant to represent the error of logger telemetry
       */
      ERROR: "error"
    };

    /**
     * @property  parameters
     * @desc map of parameters used by BFW component
     */
    telemetryWrapper.parameters = {
      /**
       * @property  EVENT
       * @desc constant to represent event type
       */
      EVENT: "t",
      /**
       * @property  CATEGORY
       * @desc constant to category of the event
       */
      CATEGORY: "ec",
      /**
       * @property  ACTION
       * @desc constant to action type of the event
       */
      ACTION: "ea",
      /**
       * @property  TYPE
       * @desc constant to payload/message of the telemetry
       */
      PAYLOAD: "el"
    };

    /**
     * @function send
     * @desc sends the telemetry
     * @param  {string} componentType   the component which is sending the telemetry (e.g. "logger")
     * @param  {string} actionType      the action type of the event
     * @param  {string|Error} payload  the payload/message for the telemetry
     */
    telemetryWrapper.send = function(componentType, actionType, payload) {
      if(!isString(componentType)) {
        throw new Error("componentType should be a string");
      }

      if(!isString(actionType)) {
        throw new Error("actionType should be a string");
      }

      if(isNil(payload)) {
        throw new Error("payload should not be Nil");
      }

      // convert error object to string if needed
      if(!isString(payload)) {
        if(!(payload instanceof Error)) {
          throw new Error("payload should be an instanceof Error other than a string");
        }
        payload = payload.toString();
      }

      var parameterList = {};
      parameterList[telemetryWrapper.parameters.EVENT] = telemetryWrapper.TELEMETRY_TYPE;
      parameterList[telemetryWrapper.parameters.CATEGORY] = telemetryWrapper.TELEMETRY_CATEGORY + "-" + componentType;
      parameterList[telemetryWrapper.parameters.ACTION] = actionType;
      parameterList[telemetryWrapper.parameters.PAYLOAD] = payload;

      // get the telemetry object based on context
      var telemetry = SymBfw.telemetry || SymBfw.telemetryProxy;
      var returnVal = telemetry.send(parameterList);

      return returnVal;
    };

    return telemetryWrapper;
  }//end of initModule

  global.SymBfw.telemetryWrapper = initModule(global.SymBfw);

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Mon Jun 20 2016 sriharsha_angara	Adding to Git.
// Tues Jun 21 2016 matas_empakeris Implementing notification class

(function (global) {
  "use strict";

  function initModule(SymBfw) {
    var uiConstants = SymBfw.constants.uiConstants;
    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var logger = SymBfw.logger;
    var notificationCenter = SymBfw.notificationCenter;
    var extensionAdapter = SymBfw.extensionAdapter;

    /**
    * @namespace Notification
    * @desc The namespace/class for representing notifications in background.
    */

    /**
    * @constructor Notification
    * @param  {string} description Localized description that needs to be displayed to the user. Cannot be null.
    * @param  {number} type        Part of the uiConstants.notification.TYPE namespace. Cannot be null.
    * @param {string} imageUrl is the path of the image that needs to be displayed on the notification
    * @param {string=} title is the product name passed to the notification
    */
    var Notification = function (description, type, imageUrl, title) {
      if (isNil(description)) {
        throw new Error("A description must be provided.");
      }

      if (isNil(type)) {
        throw new Error("A type must be provided.");
      }

      if(isNil(imageUrl)){
        throw new Error("imageUrl must be provided");
      }

      if(isntNil(title)){
        this.title = title;
      }else {
        this.title = "";
      }

      switch (type) {
        case uiConstants.NOTIFICATION.TYPE.QUESTION:
        case uiConstants.NOTIFICATION.TYPE.TIMED:
          break;

        default:
          throw new Error("The notification type passed was not recognized.");
      }

      this.description = description;
      this.type = type;
      this.guid = SymBfw.utils.createNewGuid();
      this.imageUrl = imageUrl;
    };

    /**
    * @method getDescription Returns the description string for the notification.
    * @return {string} The description for the notification message.
    */
    Notification.prototype.getDescription = function () {
      return this.description;
    };

    /**
     * @function setID
     * @desc The setter for overriding the notification GUID.
     * @param {[type]} id [description]
     */
    Notification.prototype.setID = function (id) {
      this.guid = id;
    };

    /**
    * @method getID Return the unique GUID for the current notification.
    * @return {string} The unique ID for the current notification.
    */
    Notification.prototype.getID = function() {
      return this.guid;
    };

    /**
    * @method getType Returns the type of notification. Part of the uiConstants.notification.TYPE.
    * @return {number} The type of notification message.
    */
    Notification.prototype.getType = function () {
      return this.type;
    };

    /**
    * @method getTitle Returns the title of notification.
    * @return {number} The title of notification message.
    */
    Notification.prototype.getTitle = function () {
      return this.title;
    };

    /**
     * @function getImage
     * @desc Returns the image for the notification. Subclass must override.
     * @return {string} Returns the path to the image for the notification.
     * @throws Super class throws an exception.
     */
    Notification.prototype.getImage = function () {
      return extensionAdapter.getExtensionURL(this.imageUrl);
    };

    /**
     * @function getRelativeImageURL
     * @desc Returns the relative path for image for the notification.
     * @return {string} Returns the relative path to the image for the notification.
     */
    Notification.prototype.getRelativeImageURL = function () {
      return this.imageUrl;
    };

    /**
     * @function handleEvent
     * @description Helper function to invoke an action for eventID (DEFAULT_BUTTON_PRESSED | SECONDARY_LINK_PRESSED | NOTIFICATION_CLOSED)
     * @param  {string} eventID        EventID that was recevied from content script.
     */
    Notification.prototype.handleEvent = function(eventID) {
      return;
    };
    /**
    * @function serialize Serialize notification so we can send it over to content script side.
    * @returns {Object} A dictionary that can be used to create the notification UI.
    *                     Returned object will be in the following format
    *                     {
    *                     	description : <localized-text>
    *                     	type : <uiConstants.notifications.TYPE>
    *                       notificationID : <guid>
    *                     }
    */
    Notification.prototype.serialize = function () {
      return {
        description : this.description,
        type : this.type,
        notificationID : this.guid,
        imageUrl : this.getRelativeImageURL(),
        title: this.title
      };
    };

    /**
     * @function onDisplayed
     * @description Lets the notficiation know that this notification has been added the notification center's queue.
     *              Subclasses should override and set any notification based policy. Defaults to no-op.
     */
    Notification.prototype.onDisplayed = function() {
      return;
    };

    return Notification;
  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.Notification = initModule(global.SymBfw);

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Thu Jun 23 2016 sriharsha_angara Adding to Git.
//

(function (global) {
  "use strict";

  function initModule(SymBfw) {

    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var isFunction = SymBfw.utils.isFunction;
    var logger = SymBfw.logger;
    var notificationCenter = SymBfw.notificationCenter;
    var Notification = SymBfw.Notification;
    var uiConstants = SymBfw.constants.uiConstants;
    /**
    * @namespace QuestionNotification
    * @desc The namespace/class for representing notifications in backgronud.
    */

    /**
    * @constructor QuestionNotification
    * @param  {string} description Localized description that needs to be displayed to the user. Cannot be null.
    * @param  {number} type        Part of the uiConstants.notification.TYPE namespace. Cannot be null.
    * @param  {Object} data        User data that will get passed back to when a button is pressed. Can be null if notification is not actionable.
    * @param  {string} defaultButtonText  Localized button text.
    * @param  {notificationCallback} defaultButtonAction  The function you want to be called when an action is taken on the notification.
    * @param {string} imageUrl is the path of the image that needs to be displayed on the notification
    * @param {string=} title is the product name passed to the notification
    */
    var QuestionNotification = function(description, data, defaultButtonText, defaultButtonAction, imageUrl, title) {
      Notification.call(this, description, uiConstants.NOTIFICATION.TYPE.QUESTION, imageUrl, title);

      if(isNil(data)) {
        throw new Error("Data cannot be null");
      }

      if(isNil(defaultButtonText)) {
        throw new Error("Default button text cannot be null.");
      }

      if(isFunction(defaultButtonAction) === false) {
        throw new Error("Default button action cannot be null.");
      }

      this.data = data;
      this.defaultButtonText = defaultButtonText;
      this.defaultButtonAction = defaultButtonAction;
    };

    // define the prototype based on the superclass.
    QuestionNotification.prototype = Object.create(Notification.prototype);

    /**
    * @desc The callback definition for notification action.
    * @param {number} buttonPressed Lets the caller know which button was pressed for notification.
    * @param {string} id The id for the notification.
    * @param {object} data The data that was passed in when notification was created.
    * @callback notificationCallback
    * @summary When callback is invoked assume that notification has been closed.
    */

    /**
    * @function addSecondaryLink Adds the secondary link to the notification.
    * @param {string} buttonText Localized text that describes the button.
    * @param {notificationCallback} action  The function/callback you want to be called when default button is pressed.
    * @summary Adding default button is not supported when notification type is SUCCESS or ALERT or ERROR.
    */
    QuestionNotification.prototype.addSecondaryLink = function (buttonText, action) {
      if(isNil(buttonText)) {
        throw new Error("Secondary link text cannot be null.");
      }

      if(isFunction(action) === false) {
        throw new Error("Secondary link action cannot be null.");
      }

      this.secondaryLinkText = buttonText;
      this.secondaryLinkAction = action;
    };

    /**
     * Adds a third button to the question notification. Purely optional.
     * @param {String} buttonText The text we want to show for the button.
     * @param {notificationCallback} action     The callback function you want to be called on when button is pressed.
     */
    QuestionNotification.prototype.addThirdButton = function(buttonText, action) {
      if(isNil(buttonText)) {
        throw new Error("Third button text cannot be null");
      }

      if(isFunction(action) === false) {
        throw new Error("Third button action cannot be null.")
      }

      this._thirdButtonText = buttonText;
      this._thirdButtonAction = action;
    };

    /**
     * @desc Add action for when the user clicks on the close button.
     * @param {notificationCallback} action Function to be called when close button is clicked.
     */
    QuestionNotification.prototype.addCloseButtonAction = function(action) {
      if(isFunction(action) === false) {
        throw new Error("Close button action cannot be null.")
      }

      this._closeButtonAction = action;
    };

    /**
    * @function getDefaultAction Returns the default button action.
    * @returns {notificationCallback} The callback to be called when the default button is clicked. Can be null.
    * @throws If notification type is QUESTION then we will throw an exception if action is not present.
    */
    QuestionNotification.prototype.getDefaultButtonAction = function () {
      return this.defaultButtonAction;
    };

    /**
    * @function getSecondaryLinkAction Returns the secondary link action.
    * @returns {notificationCallback} The callback to be called when the secondary link is clicked. Can be null.
    */
    QuestionNotification.prototype.getSecondaryLinkAction = function () {
      return this.secondaryLinkAction;
    };

      /**
    * @function getSecondaryLinkAction Returns the secondary link action.
    * @returns {notificationCallback} The callback to be called when the secondary link is clicked. Can be null.
    */
    QuestionNotification.prototype.getThirdButtonAction = function () {
      return this._thirdButtonAction;
    };

    /**
     * @desc Returns the close button action if not its undefined.
     * @return {notificationCallback} The close button action.
     */
    QuestionNotification.prototype.getCloseButtonAction = function() {
      return this._closeButtonAction;
    };

    /**
    * @function serialize Serialize notification so we can send it over to content script side.
    * @returns {Object} A dictionary that can be used to create the notification UI.
    *                     Returned object will be in the following format
    *                     {
    *                       description : <localized-text>
    *                       type : <uiConstants.notifications.TYPE>
    *                       defaultButton : <localized-text>
    *                       secondaryLink : <localized-text>
    *                       notificationID : <guid>
    *                     }
    */
    QuestionNotification.prototype.serialize = function () {
      return {
        description : this.getDescription(),
        type : this.getType(),
        title: this.getTitle(),
        defaultButton : this.defaultButtonText,
        secondaryLink : this.secondaryLinkText,
        thirdButton   : this._thirdButtonText,
        notificationID : this.getID(),
        imageUrl: this.getRelativeImageURL()
      };
    };

    /**
    * @method getData Returns the data associated with the message.
    * @return {Object} The data for the notification
    */
    QuestionNotification.prototype.getData = function () {
      return this.data;
    };

    /**
     * @function handleEvent
     * @description Helper function to invoke an action for eventID (DEFAULT_BUTTON_PRESSED | SECONDARY_LINK_PRESSED | NOTIFICATION_CLOSED)
     * @param  {string} eventID        EventID that was recevied from content script.
     */
    QuestionNotification.prototype.handleEvent = function(eventID) {

      var action = null;
      var type = null;
      switch (eventID) {
        case uiConstants.NOTIFICATION.MESSAGES.DEFAULT_BUTTON_PRESSED:
          action = this.getDefaultButtonAction();
          type = uiConstants.NOTIFICATION.BUTTON.DEFAULT;
          break;

        case uiConstants.NOTIFICATION.MESSAGES.SECONDARY_LINK_PRESSED:
          action = this.getSecondaryLinkAction();
          type = uiConstants.NOTIFICATION.BUTTON.SECONDARY;
          break;

        case uiConstants.NOTIFICATION.MESSAGES.THIRD_BUTTON_PRESSED:
          action = this.getThirdButtonAction();
          break;
        case uiConstants.NOTIFICATION.MESSAGES.NOTIFICATION_CLOSED:
          action = (isNil(this.getCloseButtonAction())) ? null : this.getCloseButtonAction();
          break;
        default:
          return;
      }

      var data = this.getData();
      if(isntNil(action)) {
        try {
          action(data);
        } catch (e) {
          logger.error(e);
        }
      }
    };

    return QuestionNotification;
  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.QuestionNotification = initModule(global.SymBfw);

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//


(function (global) {
  "use strict";

  function initModule(SymBfw) {
    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var isFunction = SymBfw.utils.isFunction;
    var logger = SymBfw.logger;
    var notificationCenter = SymBfw.notificationCenter;
    var Notification = SymBfw.Notification;
    var uiConstants = SymBfw.constants.uiConstants;
    var extensionAdapter = SymBfw.extensionAdapter;

    /**
    * @namespace Notification
    * @desc The namespace/class for representing notifications in background.
    */

    /**
    * @constructor TimedNotification
    * @param {string} description Localized description that needs to be displayed to the user. Cannot be null.
    * @param {string} imageUrl is the path of the image that needs to be displayed on the notification
    * @param {string} title is the product name passed to the notification
    * @return {object} TimedNotification object
    */
    var TimedNotification = function (description, imageUrl, title) {
      Notification.call(this, description, uiConstants.NOTIFICATION.TYPE.TIMED, imageUrl, title);
    };

    // define the prototype based on the superclass.
    TimedNotification.prototype = Object.create(Notification.prototype);

    TimedNotification.prototype.onDisplayed = function() {
      var notificationID = this.getID();
      setTimeout(function(){
        SymBfw.notificationCenter.removeNotification(notificationID);
      }, uiConstants.NOTIFICATION.DEFAULT_TIMEOUT);
    };

    return TimedNotification;
  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.TimedNotification = initModule(global.SymBfw);

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Mon Jun 20 2016 sriharsha_angara Adding to Git.
//


(function (global) {
  "use strict";

  function initModule(SymBfw) {

    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var logger = SymBfw.logger;
    var extensionAdapter = SymBfw.extensionAdapter;
    var uiConstants= SymBfw.constants.uiConstants;

    /**
    * @namespace notificationCenter
    * @desc The namespace/class for Notification center.
    */
    var notificationCenter = {};

    /**
    * @var queue
    * @desc Contains all the notifications created, in the order in which they were pushed
    */
    notificationCenter.queue = [];

    /**
    * @function addNotification Adds the a new notification to the notification queue.
    * @param  {Notification} notification Notification you want to add to the notification queue.
    * @throws Throws an exception if notification is of type QUESTION and default action isn't set.
    */
    notificationCenter.addNotification = function(notification) {
      if(isNil(notification)) {
        throw new Error("Notification cannot be null");
      }

      var type = notification.getType();
      switch (type) {
        case uiConstants.NOTIFICATION.TYPE.TIMED:
          chrome.notifications.create({
            "type" : "basic",
            "iconUrl" : notification.getImage(),
            "title" : notification.getTitle(),
            "message" : notification.getDescription(),
          }, function(id){
            notification.setID(id);
            notification.onDisplayed();
          });
          return;
        case uiConstants.NOTIFICATION.TYPE.QUESTION:
          this.queue.push(notification);
          notificationCenter.refreshQueue();
          break;
        default:
          throw new Error("Unsupported notification type: " + type);
      }
    };

    /**
    * @function replaceNotification Replaces an existing notification with the new notification.
    * @param  {Notification} notification Notification you want to add to the notification queue.
    * @param {string} notificationID The notification you want to replace with the new one.
    * @throws Throws an exception if notification is of type QUESTION and default action isn't set.
    * @summary If a notification does not exist with the notificationID then addNotification is automatically called.
    *          If the notification does get replaced then the "createdTime" for the previous notification is kept for the new one.
    *          This will help UI organize the notifications when displaying them.
    */
    //notificationCenter.replaceNotification = function(notification, notificationID) {

      // if(uiConstants.NOTIFICATION.TYPE.QUESTION === notification.getType() && isNil(notification.getDefaultButtonAction())) {
      //   throw new Error("Default message of a Question Notification cannot be NULL");
      // }
      //
      // var foundFlag = false;
      //
      // if(notification.getType() === uiConstants.NOTIFICATION.TYPE.QUESTION) {
      //   for(var index in this.queue) {
      //     if(this.queue[index].getID() === notificationID) {
      //       this.queue[index] = notification;
      //       foundFlag = true;
      //       break;
      //     }
      //   }
      // }
      //
      // if(!foundFlag)
      // {
      //   notificationCenter.addNotification(notification);
      //   return;
      // }
      //
      // notificationCenter.refreshQueue();
    //};

    /**
    * @function removeNotification Removes a notification
    * @param {string} notificationID The notification you want to remove.
    * @summary If the notification has already been removed then this is a no-op
    */
    notificationCenter.removeNotification = function(notificationID) {

      if(isNil(notificationID)) {
        throw new Error("NotificationID cannot be null");
      }

      for(var index in this.queue) {
        if(this.queue[index].getID() === notificationID) {
          this.queue.splice(index,1);
          break;
        }
      }

      try{
        chrome.notifications.clear(notificationID);
      }
      catch(e) {
        logger.info(e);
      }
      finally{
        notificationCenter.refreshQueue();
      }
    };

    /**
    * @function getNotification Returns the notification for the given ID.
    * @param {string} notificationID The notification you want to get.
    * @returns {Notification} The notification object.
    */
    notificationCenter.getNotification = function(notificationID) {

      if(isNil(notificationID)) {
        throw new Error("NotificationID cannot be null");
      }

      for(var index in this.queue) {
        if(this.queue[index].getID() === notificationID) {
          return this.queue[index];
        }
      }
    };

    /**
    * @function refreshQueue Refreshes the queue on the active tab.
    * @summary This method will send the new notification queue to content script of the active tab
    *          so notifications can either be closed or added.
    */
    notificationCenter.refreshQueue = function() {
      extensionAdapter.getActiveTab(function(tab){
        if(isNil(tab)){
          return;
        }
        var array = [];

        for(var index in notificationCenter.queue) {
          var notification = notificationCenter.queue[index];
          var serializedData = notification.serialize();
          array.push(serializedData);
        }

        extensionAdapter.sendMessageToTab(tab, {
          id : uiConstants.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE,
          payload : {
            eventID : uiConstants.NOTIFICATION.MESSAGES.NOTIFICATION_QUEUE_MESSAGE,
            notificationArray : array,
          }
        }, null, {
          //send only to the top frame which is window.top.
          frameId:  0
        });
      });
    };

    /**
    * @function handleActivate Will be invoked when user has switched tabs or windows.
    * @summary This method will first broadcast a "hide" message to all tabs (and windows).
    *          After which it will just call refreshQueue function.
    * NOP
    */
    notificationCenter.handleActivate = function() {
      extensionAdapter.getAllTabs(function(tabs) {
        tabs.forEach(function(tab) {
          extensionAdapter.sendMessageToTab(tab, {
            id:uiConstants.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE,
            payload : {
              eventID: uiConstants.NOTIFICATION.MESSAGES.HIDE_NOTIFICATIONS
            }
          });//end of sendMessage
        }); //end of for each

        notificationCenter.refreshQueue();
      });
    };

    /**
    * @function handleMessage Will be invoked when a notification center message was received by main listener i.e, uiConstants.notification.MESSAGES
    * @param {object} payload The payload specific to the message. It will not contain the eventID uiConstants.notification.MESSAGES
    * @summary For now we do not see the need for passing a sendResponse callback object. It may be added in the future.
    *          payload format
    *          {
    *             eventID: <guid>
    *             notificationID: <guid>
    *          }
    *          handleMessage is usually only invoked for notifications of type "QUESTION".
    */
    notificationCenter.handleMessage = function(payload) {
      if(isNil(payload)) {
        return;
      }

      var eventID = payload.eventID;
      if(isNil(eventID)) {
        return;
      }

      var notificationID = payload.notificationID;
      var notification = null;

      switch (eventID) {
        case uiConstants.NOTIFICATION.MESSAGES.DEFAULT_BUTTON_PRESSED:
        case uiConstants.NOTIFICATION.MESSAGES.SECONDARY_LINK_PRESSED:
        case uiConstants.NOTIFICATION.MESSAGES.THIRD_BUTTON_PRESSED:
        case uiConstants.NOTIFICATION.MESSAGES.NOTIFICATION_CLOSED:
          if(isNil(notificationID)) {
            logger.warn("Notification ID cannot be null when eventID is "+uiConstants.NOTIFICATION.MESSAGES.DEFAULT_BUTTON_PRESSED);
            return;
          }

          notification = notificationCenter.getNotification(notificationID);
          if(isNil(notification)) {
            logger.warn("Notification not found");
            return;
          }
          notification.handleEvent(eventID);
          notificationCenter.removeNotification(notificationID);
          break;
        case uiConstants.NOTIFICATION.MESSAGES.NOTIFICATION_QUEUE_MESSAGE:
          notificationCenter.refreshQueue();
         break;
        case uiConstants.NOTIFICATION.MESSAGES.NOTIFICATIONS_SHOWN:
          var notificationArray = payload.notificationArray;
          for(var index in notificationArray) {
            notificationID = notificationArray[index];
            notification = notificationCenter.getNotification(notificationID);
            if(isNil(notification)) {
              continue;
            }
            notification.onDisplayed();
          }
        break;
          default:
      }
      return;
    };

    notificationCenter.getSerializedNotifications = function () {
      var serializedNotifications = [];

      for (var index in notificationCenter.queue) {
        var serializedNotification = notificationCenter.queue[index];

        serializedNotifications.push(serializedNotification);
      }

      return serializedNotifications;
    };

    /**
    * @function init Will be invoked when script is loaded
    * @summary This function initalizes the messageListeners
    */
    notificationCenter.init = function(){
      extensionAdapter.addMessageListener(function(message, sendResponse, sender){
        if(isNil(message) || isNil(message.id)) {
          return;
        }
        switch (message.id) {
          case uiConstants.NOTIFICATION.MESSAGES.UI_INIT:
            message.id = uiConstants.NOTIFICATION.MESSAGES.UI_INIT_PROXY;
            SymBfw.extensionAdapter.sendMessageToTab(sender, message, function (response) {
              sendResponse(response);
            });
            return true;
          case uiConstants.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE:
            return notificationCenter.handleMessage(message.payload);
          default:
            return;
        }
      });
    };

    notificationCenter.init();

    return notificationCenter;
  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.notificationCenter = initModule(global.SymBfw);

})(this); //end of module function

//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 


(function (global) {
  "use strict";

  function initModule(SymBfw) {

    /**
    * @namespace notificationCenter
    * @desc The namespace/class for Notification center.
    */
    var notificationCenter = SymBfw.notificationCenter;
    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var logger = SymBfw.logger;
    var extensionAdapter = SymBfw.extensionAdapter;
    var uiConstants= SymBfw.constants.uiConstants;
    /**
    * @var queue
    * @desc Contains all the notifications created, in the order in which they were pushed
    */
    notificationCenter.queue = [];

    /**
    * @function addNotification Adds the a new notification to the notification queue.
    * @param  {Notification} notification Notification you want to add to the notification queue.
    * @throws Throws an exception if notification is of type QUESTION and default action isn't set.
    */
    notificationCenter.addNotification = function(notification) {
      if(isNil(notification)) {
        throw new Error("Notification cannot be null");
      }
      this.queue.push(notification);
      notificationCenter.refreshQueue();
    };

    /**
    * @function removeNotification Removes a notification
    * @param {string} notificationID The notification you want to remove.
    * @summary If the notification has already been removed then this is a no-op
    */
    notificationCenter.removeNotification = function(notificationID) {

      if(isNil(notificationID)) {
        throw new Error("NotificationID cannot be null");
      }

      for(var index in this.queue) {
        if(this.queue[index].getID() === notificationID) {
          this.queue.splice(index,1);
          break;
        }
      }
      notificationCenter.refreshQueue();
    };

    /**
    * @function refreshQueue Refreshes the queue on the active tab.
    * @summary This method will send the new notification queue to content script of the active tab
    *          so notifications can either be closed or added.
    */
    notificationCenter.refreshQueue = function() {
      var array = [];

      for(var index in notificationCenter.queue) {
        var notification = notificationCenter.queue[index];
        var serializedData = notification.serialize();
        array.push(serializedData);
      }

      extensionAdapter.sendMessageToTab({}, {
        id : uiConstants.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE,
        payload : {
          eventID : uiConstants.NOTIFICATION.MESSAGES.NOTIFICATION_QUEUE_MESSAGE,
          notificationArray : array,
        }
      });
    };

    notificationCenter.handleActivate = function() {
      extensionAdapter.sendMessageToTab({}, {
        id:uiConstants.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE,
        payload : {
          eventID: uiConstants.NOTIFICATION.MESSAGES.HIDE_NOTIFICATIONS
        }
      });
    };

    return notificationCenter;
  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.notificationCenter = initModule(global.SymBfw);

})(this); //end of module function

/*———————————————————————————————————————————————————————————————————————————————————————

performances.js :	performances functions for Browser Framework

NortonLifeLock copyright header start

Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.

THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.

The Licensed Software and Documentation are deemed to be commercial computer
software as defined in FAR 12.212 and subject to restricted rights as defined
in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
Computer Software Documentation", as applicable, and any successor regulations.
Any use, modification, reproduction release, performance, display or disclosure
of the Licensed Software and Documentation by the U.S. Government shall be
solely in accordance with the terms of this Agreement.

NortonLifeLock copyright header stop

BrowserFramework
Change History :
09/26/14 EEL	Adding to P4.

———————————————————————————————————————————————————————————————————————————————————————*/

(function (global) {

  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {

    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var extensionAdapter = SymBfw.extensionAdapter;
    var messages = SymBfw.constants.performanceReporter.MESSAGES;

    /**
    * performances namespace that allows components to start/stop performance metrices in memory.
    * @namespace performances
    * @property {object} containes The dictionary that contains the performace matrices
    [
      {
        "wax": {
                  "topLevelDomainURL0": [{
                                          "GUID0": {
                                                        "frameURL0": "<frameURL0>",
                                                        "start":,
                                                        "stop":,
                                                        "timetaken":,
                                                        "subComponents": {
                                                                            "analyze": { "start":,
                                                                                        "stop":,
                                                                                        "timetaken":
                                                                                      },

                                                                            "doParse":{
                                                                                    "start":,
                                                                                    "stop":,
                                                                                    "timetaken":
                                                                                    }
                                                                         }

                                                   }
                                         },
                                         {
                                           "GUID1": {
                                                         "url": "<frameURL1>",
                                                         "start":,
                                                         "stop":,
                                                         "timetaken":,
                                                         "subComponents": {
                                                                             "analyze": { "start":,
                                                                                         "stop":,
                                                                                         "timetaken":
                                                                                       },

                                                                             "doParse":{
                                                                                     "start":,
                                                                                     "stop":,
                                                                                     "timetaken":
                                                                                     }
                                                                          }

                                                    }
                                          }


                                       ],
                   "topLevelDomainURL1": [{
                                           "GUID2": {
                                                         "url": "<frameURL>",
                                                         "start":,
                                                         "stop":,
                                                         "timetaken":,
                                                         "subComponents": {
                                                                             "analyze": { "start":,
                                                                                         "stop":,
                                                                                         "timetaken":
                                                                                       },

                                                                             "doParse":{
                                                                                     "start":,
                                                                                     "stop":,
                                                                                     "timetaken":
                                                                                     }
                                                                          }

                                                    }
                                          }]
                  }
        },
        {
          "bfw": {
                    "topLevelDomainURL0": [{
                                            "GUID0": {
                                                          "url": "<frameURL>",
                                                          "start":,
                                                          "stop":,
                                                          "timetaken":,
                                                          "subComponents": {
                                                                              "analyze": { "start":,
                                                                                          "stop":,
                                                                                          "timetaken":
                                                                                        },

                                                                              "doParse":{
                                                                                      "start":,
                                                                                      "stop":,
                                                                                      "timetaken":
                                                                                      }
                                                                           }

                                                     }
                                           },
                                         ],
                     "topLevelDomainURL1": [{
                                             "GUID1": {
                                                           "url": "<frameURL>",
                                                           "start":,
                                                           "stop":,
                                                           "timetaken":,
                                                           "subComponents": {
                                                                               "analyze": { "start":,
                                                                                           "stop":,
                                                                                           "timetaken":
                                                                                         },

                                                                               "doParse":{
                                                                                       "start":,
                                                                                       "stop":,
                                                                                       "timetaken":
                                                                                       }
                                                                            }

                                                      }
                                            }]
                    }
          }
    ]
    */

    var performanceReporterFactory = {
      _reporters : {} ,
      AUTOMATION_MODE : false
    };

    /**
    *	@class
    *	@desc Creates a new performance container. Performance object is not initialized unless you call initialize function.
    *	@see initialize
    *	@param {string} component of the performance collection. Name must be a valid component name.
    *	@private
    */
    var PerformanceReporter = function(component) {
      if(isNil(component)){
          throw new Error("component cannot be null");
        }

        this.component = component;
        this.start = Date.now();
        this.subComponents = {};
        this.tldReports = {};
      };

    /**
    *	@function reportStart
    *	@desc Used to start reporting of a performance for a particular type
    *	@param {string} type of the performance.
    */
    PerformanceReporter.prototype._reportStart = function (type) {
      if(isntNil(this.subComponents[type])){
        throw new Error("type already exists");
      }

      this.subComponents[type] = {};
      this.subComponents[type].start = Date.now();

    };

    /**
    *	@function reportEnd
    *	@desc Used to stop reporting of a performance for a particular type
    *	@param {string} type of the performance.
    *	@return Returns the calculated value of the performance of that type. Can be null or undefined if key/value pair was never added.
    */
    PerformanceReporter.prototype._reportEnd = function (type) {
      if(isNil(this.subComponents[type])) {
        throw new Error("type does NOT exists");
      }

      if(isntNil(this.subComponents[type].stop)) {
        throw new Error("already reported this type");
      }

      var end = Date.now();
      var start = this.subComponents[type].start;
      var totalTimeTaken = end - start;

      this.subComponents[type].stop = end;
      this.subComponents[type].timeTaken = totalTimeTaken;
    };

    /**
    *	@function reportStartFromProxy
    *	@desc Used to start reporting of a performance for a particular type
    *	@param {string} type of the performance being measured.
    *	@param {string} domain top level domain of the performance being measured.
    *	@param {string} frameURL url of the frame whos performance is being measured.
    *	@param {string} frameGUID guid of the frame whos performance is being measured.
    */
    PerformanceReporter.prototype._reportStartFromProxy = function (type, domain, frameURL, frameGUID) {
      if(isNil(type)){
        throw new Error("type cannot be null");
      }

      if(isNil(domain)){
        throw new Error("domain cannot be null");
      }

      if(isNil(frameURL)){
        throw new Error("frameURL cannot be null");
      }

      if(isNil(frameGUID)){
        throw new Error("frameGUID cannot be null");
      }

      var subComponents  = this.tldReports[domain][frameGUID].subComponents;

      if(isntNil(subComponents[type])) {
        throw new Error("Sub-component Type already started");
      }

      subComponents[type] = {};
      subComponents[type].start = Date.now();
    };

    /**
    *	@function reportEndFromProxy
    *	@desc Used to end reporting of a performance for a particular type
    *	@param {string} type of the performance being measured.
    *	@param {string} domain top level domain of the performance being measured.
    *	@param {string} frameURL url of the frame whos performance is being measured.
    *	@param {string} frameGUID guid of the frame whos performance is being measured.
    */
    PerformanceReporter.prototype._reportEndFromProxy = function  (type, domain, frameURL, frameGUID) {
      if(isNil(type)){
        throw new Error("type cannot be null");
      }

      if(isNil(domain)){
        throw new Error("domain cannot be null");
      }

      if(isNil(frameURL)){
        throw new Error("frameURL cannot be null");
      }

      if(isNil(frameGUID)){
        throw new Error("frameGUID cannot be null");
      }

      if(isNil(this.tldReports[domain])) {
        throw new Error("Component for TLD not properly initialized");
      }

      if(isNil(this.tldReports[domain][frameGUID])) {
        throw new Error("Component for TLD - frameGUID, not properly initialized");
      }

      var subComponents  = this.tldReports[domain][frameGUID].subComponents;

      if(isNil(subComponents[type].start)) {
        throw new Error("type did not start");
      }

      if(isntNil(subComponents[type].stop)) {
        throw new Error("Sub-component Type already ended");        
      }

      subComponents[type].stop = Date.now();
      subComponents[type].timeTaken = subComponents[type].stop - subComponents[type].start;
    };

    /**
    *	@function createOrGetTLDDict
    *	@desc Used to create or get the top level domain dictionary of the current component.
    *	@param {string} domain top level domain of the performance being measured.
    *	@param {string} frameURL url of the frame whos performance is being measured.
    *	@param {string} frameGUID guid of the frame whos performance is being measured.
    *	@return {array} Array of frame guids that has frame information.
    */
    PerformanceReporter.prototype._createOrGetTLDDict = function (domain, frameURL, frameGUID) {
        if(isNil(domain)) {
          throw new Error("domain cannot be NULL");
        }

        if(isNil(frameURL)) {
          throw new Error("frameURL cannot be NULL");
        }

        if(isNil(frameGUID)) {
          throw new Error("frameGUID cannot be NULL");
        }

        if(isNil(this.tldReports[domain])) {
          this.tldReports[domain] = {};
        }

        if(isNil(this.tldReports[domain][frameGUID])) {
          this.tldReports[domain][frameGUID] = {};
          this.tldReports[domain][frameGUID].start = Date.now();
          this.tldReports[domain][frameGUID].frameURL = frameURL;
          this.tldReports[domain][frameGUID].subComponents = {};
        }
      };

    /**
    *	@function serialize
    *	@desc Used to serialize the performances object to string. Used for debugging.
    */
    PerformanceReporter.prototype.serialize = function () {
      var serializedReport = {};
      serializedReport[this.component] = {};
      serializedReport[this.component].start = this.start;
      serializedReport[this.component].stop = Date.now();
      serializedReport[this.component].timeTaken = serializedReport[this.component].stop - this.start;
      serializedReport[this.component].subComponents = this.subComponents;
      //now report is ready for BG cases.
      //handle TLD reports for proxy cases
      for(var key in this.tldReports) {
        serializedReport[this.component][key] = this.tldReports[key];
      }
      return serializedReport;
    };

    /**
    *	@function serialize
    *	@desc Used to serialize all the performances objects to a single string. Used for debugging.
    */
    performanceReporterFactory.serialize = function() {
      var reports = [];
      for(var key in this._reporters){
        var reporter = this._reporters[key];
        var serializeReport = reporter.serialize();
        reports.push(serializeReport);
      }
      return reports;
    };

    /**
    *	@function getPerformanceReporter
    *	@desc Used to get the Performance Reporter object
    *	@param {string} component of the performance collection. Name must be a valid component name.
    *	@return Returns the object of Performance Reporter. Can be null or undefined if key/value pair was never added.
    */
    performanceReporterFactory._getPerformanceReporter = function(component) {
      var reporter = performanceReporterFactory._reporters[component];
      if(isntNil(reporter)) {
        return reporter;
      }

      reporter = new PerformanceReporter(component);
      performanceReporterFactory._reporters[component] = reporter;
      return reporter;
      };

      /**
      *	@function reportStartForComponent
      *	@desc Used to start reporting of a performance for a particular type
      *	@param {string} component of the performance collection. Name must be a valid component name.
      *	@param {string} type of the performance.
      */

      performanceReporterFactory.reportStartForComponent = function(component, type) {
        if(performanceReporterFactory.AUTOMATION_MODE === false) {
          return;
        }

        if(isNil(component)) {
          throw new Error("component cannot be NULL");
        }

        if(isNil(type)) {
          throw new Error("type cannot be NULL");
        }

        var reporter = performanceReporterFactory._getPerformanceReporter(component);
        reporter._reportStart(type);
      };

      /**
      *	@function reportStopForComponent
      *	@desc Used to end reporting of a performance for a particular type
      *	@param {string} component of the performance collection. Name must be a valid component name.
      *	@param {string} type of the performance.
      */

      performanceReporterFactory.reportStopForComponent = function(component, type) {
        if(performanceReporterFactory.AUTOMATION_MODE === false) {
          return;
        }

        if(isNil(component)) {
          throw new Error("component cannot be NULL");
        }

        if(isNil(type)) {
          throw new Error("type cannot be NULL");
        }

        var reporter = performanceReporterFactory._getPerformanceReporter(component);
        reporter._reportEnd(type);
      };

    /**
    *	@function getPerformanceReporterFromProxy
    *	@desc Used to get the Performance Reporter object
    *	@param {string} component of the performance being measured.
    *	@param {string} domain top level domain of the performance being measured.
    *	@param {string} frameURL url of the frame whos performance is being measured.
    *	@param {string} frameGUID guid of the frame whos performance is being measured.
    */
    performanceReporterFactory._getPerformanceReporterFromProxy = function(component, frameGUID, domain, frameURL) {
      if(isNil(domain)){
        throw new Error("domain cannot be null");
      }

      if(isNil(frameURL)){
        throw new Error("frameURL cannot be null");
      }

      if(isNil(frameGUID)){
        throw new Error("frameGUID cannot be null");
      }

      var reporter = performanceReporterFactory._getPerformanceReporter(component);
      reporter._createOrGetTLDDict(domain, frameURL, frameGUID);

      return reporter;
    };

    /**
    * @function handleMessage Will be invoked when a performance report message was received by main listener i.e, constants.messages.REPORT_START
    * @param {object} request The request specific to the message. It will contain the requestID constants.messages.REPORT_START
    * @param {object} sendResponse response being sent after the message is handled
    * @param {object} sender The sender context of the function
    * @summary For now we do not see the need for passing a sendResponse callback object. It may be added in the future.
    *          request format
    *          {
    *          	id: <guid>
    *          	payload: {
    *                      component: <string>,
    *                      type: <string>,
    *                      guid: <guid>,
    *                      frameURL: <string>
    *                     }
    *          }
    */
    performanceReporterFactory.handleMessage = function(request, sendResponse, sender) {
      if(performanceReporterFactory.AUTOMATION_MODE === false) {
        return;
      }

      if(isNil(request)) {
        return;
      }

      var id = request.id;
      var payload = request.payload;

      var component = null;
      var type = null;
      var reporter = null;

      var frameGUID = null;
      var frameURL = null;

      switch(id) {
        case messages.REPORT_START:
          component = payload.component;
          frameGUID = payload.guid;
          frameURL = payload.frameURL;
          reporter = performanceReporterFactory._getPerformanceReporterFromProxy(component, frameGUID, sender.url, frameURL);
          type = payload.type;
          reporter._reportStartFromProxy(type, sender.url, frameURL, frameGUID);
          break;
        case messages.REPORT_END:
          component = payload.component;
          frameGUID = payload.guid;
          frameURL = payload.frameURL;
          reporter = performanceReporterFactory._getPerformanceReporter(component);
          type = payload.type;
          reporter._reportEndFromProxy(type, sender.url, frameURL, frameGUID);
          break;
        default:
            return;
      }
    };

    extensionAdapter.addMessageListener(performanceReporterFactory.handleMessage);

    performanceReporterFactory.PerformanceReporter = PerformanceReporter;
    return performanceReporterFactory;

  } //end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.performanceReporterFactory = initModule(global.SymBfw);
  /* ########## End module wrapper ########## */

})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Thu Jun 09 2016 sriharsha_angara	Adding to Git.
//

(function (global) {
  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {

    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var isString = SymBfw.utils.isString;
    var isBoolean = SymBfw.utils.isBoolean;
    var isArray = SymBfw.utils.isArray;
    var isFunction = SymBfw.utils.isFunction;
    var l10NConst = SymBfw.constants.localizer;
    var localizerProxy = {};

    /**
    * @desc The callback definition for getStringCallback. Used to retrieve a localized string.
    * @param {string} string Returns the localized string.
    * @callback getStringCallback
    */

    /**
    * @desc The callback definition for getStringsCallback. Used to retrieve an array of localized string.
    * @param {array} arrayOfStrings Returns an array of localized string.
    * @callback getStringsCallback
    */

    /**
    * @desc The callback definition for getDirectionCallback. Used to retrieve the current language direction
    * @param {string} direction Returns the current language direction
    * @callback getDirectionCallback
    */

    /**
    * @function getLocalizedString Returns the localized string for the input string.
    * @param {string} string The english string you want to get localized.
    * @param {getStringCallback} callback The callback that will get invoked when results are available.
    */
    localizerProxy.getLocalizedString = function(string, callback) {
      localizerProxy.sendMessage(l10NConst.GET_LOCALIZED_STRING, string, callback);
    };

    /**
    * @function getLocalizedStrings Returns an array of localized strings.
    * @param {array} arrayOfStrings The array of english strings you want to get localized.
    * @param {getStringsCallback} callback The callback that will get invoked when results are available.
    */
    localizerProxy.getLocalizedStrings = function(arrayOfStrings, callback) {
      localizerProxy.sendMessage(l10NConst.GET_LOCALIZED_STRINGS, arrayOfStrings, callback);
    };

    /**
    * @function getLocalizedStringFromDictionary Returns the localized string for the input string from the given dictonary.
    * @param {string} string The english string you want to get localized.
    * @param {string} name The name of dictionary you want to read the localied string from.
    * @param {getStringCallback} callback The callback that will get invoked when results are available.
    */
    localizerProxy.getLocalizedStringFromDictionary = function(string, name, callback) {
      localizerProxy.sendMessage(l10NConst.GET_LOCALIZED_STRING_FROM_DICTIONARY, {
        string : string,
        name : name,
      }, callback);
    };

    /**
    * @function getLocalizedStringsFromDictionary Returns the array of localized strings from the given dictonary.
    * @param {array} arrayOfStrings The english strings you want to get localized.
    * @param {string} name The name of dictionary you want to read the localied string from.
    * @param {getStringsCallback} callback The callback that will get invoked when results are available.
    */
    localizerProxy.getLocalizedStringsFromDictionary = function(arrayOfStrings, name, callback) {
      localizerProxy.sendMessage(l10NConst.GET_LOCALIZED_STRINGS_FROM_DICTIONARY, {
        array : arrayOfStrings,
        name : name,
      }, callback);
    };

    /**
     * @function getLocalizedStringWithFormat Returns the localized formatted string.
     * @param  {string} string The unlocalized format string.
     *                         This is how a format string should look like, for example, {0} went to her school at {1} today.
     *                         This function will replace the string {0} with params[0], {1} with params[1].
     * @param  {array} params Array of parameters you want to replace.
     * @param {getStringCallback} callback The callback that will get invoked when results are available.
     */
    localizerProxy.getLocalizedStringWithFormat = function(string, params, callback) {
      localizerProxy.sendMessage(l10NConst.GET_LOCALIZED_STRING_WITH_FORMAT, {
        string : string,
        params : params,
      }, callback);
    };

    /**
     * @function getLocalizedStringWithFormatFromDictionary Returns the localized formatted string.
     * @param  {string} string The unlocalized format string.
     *                         This is how a format string should look like, for example, {0} went to her school at {1} today.
     *                         This function will replace the string {0} with params[0], {1} with params[1].
     * @param  {array} params Array of parameters you want to replace.
     * @param  {string} name The name of the dictionary you want to load the string from.
     * @param {getStringCallback} callback The callback that will get invoked when results are available.
     */
    localizerProxy.getLocalizedStringWithFormatFromDictionary = function(string, params, name, callback) {
      localizerProxy.sendMessage(l10NConst.GET_LOCALIZED_STRING_WITH_FORMAT_FROM_DICTIONARY, {
        string : string,
        params : params,
        name : name
      }, callback);
    };

    /**
     * @function getCurrentLanguageDirection Returns the current language redirection
     * @param {getDirectionCallback} callback The callback that will get invoked when results are available.
     */
    localizerProxy.getCurrentLanguageDirection = function(callback) {
      localizerProxy.sendMessage(l10NConst.GET_CURRENT_LANGUAGE_DIRECTION, {}, callback);
    };

    localizerProxy.sendMessage = function(messageID, payload, callback) {
      if (isNil(messageID)) {
        throw new Error("Message ID cannot be null");
      }

      if(isNil(payload)) {
        throw new Error("Payload cannot be null");
      }

      if(isFunction(callback) === false) {
        throw new Error("Callback cannot be null");
      }

      SymBfw.extensionAdapter.sendMessage({
        id : messageID,
        payload : payload
      }, function(response){
        switch (response.id) {
          case l10NConst.GET_LOCALIZED_STRING:
          case l10NConst.GET_LOCALIZED_STRINGS:
          case l10NConst.GET_LOCALIZED_STRING_FROM_DICTIONARY:
          case l10NConst.GET_LOCALIZED_STRINGS_FROM_DICTIONARY:
          case l10NConst.GET_LOCALIZED_STRING_WITH_FORMAT:
          case l10NConst.GET_LOCALIZED_STRING_WITH_FORMAT_FROM_DICTIONARY:
          case l10NConst.GET_CURRENT_LANGUAGE_DIRECTION:
                callback(response.payload);
            break;
          default:
          //ignore all other messages.
        }
      });
    };

    return localizerProxy;
  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.localizerProxy = initModule(global.SymBfw);
})(this); //end of module function
//
//     NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop
//
// BrowserFramework
// 
//
// Change History :
// Created by nandu on 7/10/16.
//

(function (global) {
    "use strict";

    function initModule(SymBfw) {
      var isNil = SymBfw.utils.isNil;
      var telemetryConstants = SymBfw.telemetryConstants;
      /**
       * @namespace telemetryProxy
       * @desc The namespace/class for Telemetry Proxy that runs in Content scripts context.
       */
      var telemetryProxy = {};

      /**
       * @function send called by clients to send telemetryProxy
       * @param  {parameters}  telemetryProxy Parameters that needs to be sent (appended to defaultParameters)
       * @throws Throws an exception if defaultParameters isn't set or parameters isn't set.
       */
      telemetryProxy.send = function(parameters) {
        if(isNil(parameters)) {
            throw new Error("parameters cannot be null");
        }

        SymBfw.extensionAdapter.sendMessage({
            id: telemetryConstants.MESSAGES.SEND_TELEMETRY_TO_BGPROXY,
            payload: {
                parameters: parameters
            }
        });
      };

      return telemetryProxy;
    }//end of initModule

    /* ########## Begin module wrapper ########## */
    //Right now we don't have support for Module or RequireJS type modules.
    //You need to include as scripts for now.
    global.SymBfw.telemetryProxy = initModule(global.SymBfw);

})(this); //end of module function
/*———————————————————————————————————————————————————————————————————————————————————————

performances.js :	performances functions for Browser Framework

NortonLifeLock copyright header start

Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.

THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.

The Licensed Software and Documentation are deemed to be commercial computer
software as defined in FAR 12.212 and subject to restricted rights as defined
in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
Computer Software Documentation", as applicable, and any successor regulations.
Any use, modification, reproduction release, performance, display or disclosure
of the Licensed Software and Documentation by the U.S. Government shall be
solely in accordance with the terms of this Agreement.

NortonLifeLock copyright header stop

BrowserFramework
Change History :
09/26/14 EEL	Adding to P4.

———————————————————————————————————————————————————————————————————————————————————————*/

(function (global) {

  "use strict";
  /* ########## Begin module implementation ########## */
  function initModule(SymBfw) {

    var isNil = SymBfw.utils.isNil;
    var isntNil = SymBfw.utils.isntNil;
    var extensionAdapter = SymBfw.extensionAdapter;
    var performanceReporter = SymBfw.performanceReporterFactory;
    var messages = SymBfw.constants.performanceReporter.MESSAGES;
    /**
    * performances namespace that allows components to start/stop performance metrices in memory.
    * @namespace performances
    * @property {object} containes The dictionary that contains the performace matrices
    [
    {
    "wax":{
            subComponents : {
                            "analyze":{ "start":
                                        "stop":
                                        "timetaken":
                                      },
                            "doParse":{
                                    "start":
                                    "stop":
                                    "timetaken":
                            }
                          }
            "start":
            "stop":
            "timetaken":
        }
      },

      {
      "bfw" :{
                subComponents : {
                                "notification":{  "start":
                                                  "stop":
                                                  "timetaken":
                                          },
                                "localizer":{
                                        "start":
                                        "stop":
                                        "timetaken":
                                }
                              }
                "start":
                "stop":
                "timetaken":

                }
              }
    ];
    */
    var performanceReporterFactoryProxy = {
        AUTOMATION_MODE: false
    };

    /**
    *	@function reportStart
    *	@desc Used to start reporting of a performance for a particular type
    *	@param {string} component of the performance.
    *	@param {string} type of the performance within the component.
    */
    performanceReporterFactoryProxy.reportStart = function (component, type) {

      performanceReporterFactoryProxy.sendMessage(messages.REPORT_START,{component:component,type:type});

    };

    /**
    *	@function reportEnd
    *	@desc Used to stop reporting of a performance for a particular type
    *	@param {string} component of the performance.
    *	@param {string} type of the performance within the component.
    *	@return Returns the calculated value of the performance of that type. Can be null or undefined if key/value pair was never added.
    */
    performanceReporterFactoryProxy.reportEnd = function (component, type) {

      performanceReporterFactoryProxy.sendMessage(messages.REPORT_END,{component:component,type:type});

    };

     /**
     * @function send called by clients to send performanceReporter
     * @param  {guid}  messageID ID of the type of message being sent
     * @param  {json}  payload variables such as component & type are contained within it
     *          payload format
     *          {
     *            component: <string>,
     *            type: <string>
     *          }
     * @throws Throws an exception if defaultParameters isn't set or parameters isn't set.
     */
    performanceReporterFactoryProxy.sendMessage = function (messageID ,payload) {

      if(performanceReporterFactoryProxy.AUTOMATION_MODE === false){
        return;
      }

      if(isNil(messageID)) {
        throw new Error("messageID cannot be null");
      }

      if(isNil(payload)) {
        throw new Error("payload cannot be null");
      }

      if(isNil(this._frameGUID)) {
        this._frameGUID = SymBfw.utils.createNewGuid();
      }

      payload.guid = this._frameGUID;
      payload.frameURL = document.URL;

      extensionAdapter.sendMessage({
        id :  messageID,
        payload : payload
      });

    };

    return performanceReporterFactoryProxy;

  }//end of initModule

  /* ########## Begin module wrapper ########## */
  //Right now we don't have support for Module or RequireJS type modules.
  //You need to include as scripts for now.
  global.SymBfw.performanceReporterFactoryProxy = initModule(global.SymBfw);
  /* ########## End module wrapper ########## */

})(this); //end of module function
//
// NortonLifeLock copyright header start
//
// Copyright (c) 2020 NortonLifeLock Inc. All rights reserved.
//
// THIS SOFTWARE CONTAINS CONFIDENTIAL INFORMATION AND TRADE SECRETS OF NORTONLIFELOCK
// INC.  USE, DISCLOSURE OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF NORTONLIFELOCK INC.
//
// The Licensed Software and Documentation are deemed to be commercial computer
// software as defined in FAR 12.212 and subject to restricted rights as defined
// in FAR Section 52.227-19 "Commercial Computer Software - Restricted Rights"
// and DFARS 227.7202, "Rights in Commercial Computer Software or Commercial
// Computer Software Documentation", as applicable, and any successor regulations.
// Any use, modification, reproduction release, performance, display or disclosure
// of the Licensed Software and Documentation by the U.S. Government shall be
// solely in accordance with the terms of this Agreement.
//
// NortonLifeLock copyright header stop

(function (global){

    var utils = {};
    var isntNil = SymBfw.utils.isntNil;
    var isNil = SymBfw.utils.isNil;
    var localizerProxy = SymBfw.localizerProxy;
    var uiConstants = SymBfw.constants.uiConstants;

    // default language direction
    utils.direction = "ltr";

    /**
     * @function updateFrameSizeAndLocation
     * @desc creates the iframe with the given parameters
     * @param  {string} frameID id of the frame element to be injected
     * @param  {number=} height  the height of the popup
     * @param  {number=} width   the width of the popup   description
     * @param  {object=} loc     location of the iframe
     */
    utils.updateFrameSizeAndLocation = function (frameID, height, width, loc) {
      var iframe = document.getElementById(frameID);
      if (isNil(iframe)){
        return;
      }
      if(isntNil(width)){
        iframe.setAttribute("width", width);
      }
      if(isntNil(height)){
        iframe.setAttribute("height", height);
      }
      if(isntNil(loc)) {
        iframe.setAttribute("style", "left:" + loc.left + "px;top:" + loc.top + "px;");
      }
    };


    /**
     * @function createFrame
     * @desc creates the iframe with the given parameters
     * @param  {string} frameID id of the frame element to be injected
     * @param  {string} html    the html of the popup
     * @param  {number=} height  the height of the popup
     * @param  {number=} width   the width of the popup   description
     * @param  {object=} loc     location of the iframe
     */
    utils.createFrame = function (frameID, html, height, width, loc) {
      // get the language direction (ltr/rtl) before creating the iframe
      localizerProxy.getCurrentLanguageDirection(function (direction) {
        utils.direction = direction;

        var iframe = document.createElement("IFRAME");
        iframe.setAttribute("id", frameID);
        iframe.setAttribute("src", html);
        iframe.setAttribute("class", "symc-notification-hide");
        iframe.setAttribute("frameBorder", 0);
        iframe.setAttribute("dir", direction);
        if(isntNil(width)){
          iframe.setAttribute("width", width);
        }
        if(isntNil(height)){
          iframe.setAttribute("height", height);
        }
        if(isntNil(loc)) {
          iframe.setAttribute("style", "left:" + loc.left + "px;top:" + loc.top + "px;");
        }
        // append the iframe to the document
        var doc = document.documentElement;
        doc.appendChild(iframe);
        iframe.addEventListener("load", function() {
          iframe.setAttribute("class", "symc-notification-show");
        });
      });
    };

    /**
     * @function getDirection
     * @desc return the language direction (rtl/ltr)
     *
     * @return {string} the language direction (rtl/ltr)
     */
    utils.getDirection = function() {
      return utils.direction;
    };

    /**
     * @function injectStyle
     * @desc injects the stylesheet to the host page
     *       this is required to set the iframe's style from outside
     *
     * @param  {string} style the css file to be injected
     * @private
     */
    utils.injectStyle = function (style) {
      var doc = document.documentElement;
      var oldStyleElement = document.getElementById(uiConstants.CONTENT_PAGE_STYLE_ID);
      if(isntNil(oldStyleElement)) {
        doc.removeChild(oldStyleElement);
      }

      var styleElement = document.createElement("LINK");
      styleElement.setAttribute("id", uiConstants.CONTENT_PAGE_STYLE_ID);
      styleElement.setAttribute("rel", "stylesheet");
      styleElement.setAttribute("href", style);
      doc.appendChild(styleElement);
    };

    /**
     * @function isPageRTL
     * @desc check if the host page or element is loaded in RTL using "dir" tag
     * @param  {object} fieldElement the element to check
     * @return  {bool} true if it is RTL or false otherwise
     * @private
     */
     utils.isPageRTL = function(fieldElement){
       while (isntNil(fieldElement)){
         var dirValue = fieldElement.getAttribute('dir');
         if (isntNil(dirValue)){
             if (dirValue==='rtl'){
                 return true;
             }
         }
         fieldElement = fieldElement.parentElement;
       }
       return false;
     };

     /**
      * @function isTopLevelWindow
      * @desc returns true/false based on toplevel window or not
      * @return {bool}  true is top window, false if an iframe
      */
     utils.isTopLevelWindow = function() {
       if(window === window.top) {
         return true;
       }

       return false;
     };

  // export the frame
  global.SymBfw.uiUtils = utils;
})(this);
