﻿!function(){function n(){var n=window._walkmeInternals;try{if(n.timing){n.timing.perf={};for(var r=0;r<n.timing.list.length;r++)n.timing.perf[n.timing.list[r].name]=xn()-(Date.now()-n.timing.list[r].time)}}catch(n){}"visible"==document.visibilityState&&(_walkmeInternals.isVisibleSinceLoad=!0,document.addEventListener("visibilitychange",An)),j("snippetStartInit",{mark:!0});var x,w,f,e,t,l,m,v,g=this,A=!1,U="40",W=0,p={publish:0,preview:1},Q=p.publish,_="0",F="46674e45b0754d698bbab1ffed9afff2",G="https://papi.walkme.com",c=".br",d=".js",H=/^https:\/\/(?!(eu)).*\.walkme(|dev|qa)\.com($|\/)/,i="wm-brotli-disabled";function V(){if(window._walkmeConfig=window._walkmeConfig||{},(v=_walkmeInternals).snippetLog=[],v.addTimeStamp=j,v.getTrustedScriptUrl=Mn,v.getTrustedHtml=Ln,window.doNotLoadWalkMe)return h("dlw"),void(v.removeWalkMeReason="doNotLoadWalkMe variable on the window");if(_walkmeInternals.loadingTestDone)return void N("ltt","WalkMe Loading Test is already running - aborting snippet");h("ish");v.isSelfHosted="###IS_SELF_HOSTED###"=="true",h("ssm"),"###IS_PREVIEW_MODE###"=="true"&&(Q=p.preview),f=new rn,h("lsu");var n,e=!1,r=_walkmeConfig.loadPlatform&&_walkmeConfig.loadPlatform.toLowerCase(),t=((e="web"===r?(h("fsw"),!1):"mobile"===r||false===!0?(h("fsm"),!0):true&&(an("android|blackberry|iemobile|phone|symbian|windows (ce|phone)")||on()))?(h("lsm"),n="https://cdn.walkme.com/users/46674e45b0754d698bbab1ffed9afff2/settings.txt",_walkmeConfig.platform=3):(h("lsw"),n="https://cdn.walkme.com/users/3ef27b45ddca4cb397ec5dc9548bee79/settings.txt"),-1<f.cdnServerName.indexOf("###AUTO_DETECT###")&&(h("lad"),m=function(n,r){for(var t=document.getElementsByTagName("script"),e=0;e<t.length;e++){var i,o=t[e].src;if(o&&0<o.indexOf("walkme_"))return n?(e=o.indexOf(n),i=Pn(o.substr(0,e)),h("dst")):(e=o.indexOf("walkme_"),i=Pn(o.substr(0,e-1)),h("dso")),r&&v.isSelfHosted&&(i=i.split(Bn).join(F),h("dsm")),i}return""}(f.cdnServerName.replace("###AUTO_DETECT###",""),e),f=b(f)),n=function(n){var r=C("walkme_segmented_settings_"+Bn+"_"+_,!0);if(r)return h("seg"),r;return n}(n)),i=function(n){if(l=function(n){var r="walkme_custom_user_settings_",t=C(r+"url",!0),e=C(r+"guid",!0),r=C(r+"env",!0),i=function(){var n=y("walkMe_wm-settings-cache-bust");if(n){n=/{"val":"(true|false)","exp":(\d+)}/.exec(n);if(n&&"true"==n[1]&&(new Date).getTime()<parseInt(n[2]))return!0}return window.walkme&&window.walkme.walkme_settings_cache_bust||window._walkmeConfig.walkme_settings_cache_bust||!1}();t&&(n=t);e&&(n=n.replace(/(users\/)([^\/]*)(\/)/,"$1"+e+"$3"));!r&&""!==r||(r&&(r+="/"),n=n.replace(/(users\/[^\/]*\/)(.*)(sett)/,"$1"+r+"$3"));n=b(n),v.settingsUrl=n,h(i?"cb":"ncb");t=R();i||_walkmeInternals.isSelfHosted?n+="?forceUpdate="+(new Date).getTime():t&&(n+="?forceUpdate="+t.PublishDate);return n}(n),h("cli"),_walkmeConfig.smartLoad){if(top!=window&&!function(){try{if(parent.location.href)return 0}catch(n){}return 1}()&&function(){try{var n=window;do{if((n=n.parent.window)._walkmeConfig)return 1}while(n!=top)}catch(n){}return 0}())return}else if(1!=window["walkme_load_in_iframe"]&&top!=window)return;if(h("cuc"),!e&&!function(){if("1"===C("walkme_dont_check_browser")||k())return 1;var n=function(){var n=S();if("Chrome"==n.browser||"Firefox"==n.browser||"Safari"==n.browser&&"Windows"!=n.OS)return!0;if("Explorer"==n.browser&&7<=n.version)return!0;return N("icb","WalkMe: Incompatible browser."),!1}(),r=!an("android.+mobile|blackberry|iemobile|ip(hone|od)|phone|symbian|windows (ce|phone)")&&!function(){var n=-1<navigator.userAgent.toLowerCase().indexOf("chrome")&&-1<navigator.vendor.toLowerCase().indexOf("google");n=void 0===window.devicePixelRatio||n?1:window.devicePixelRatio;var r=window.screen.width*n,n=window.screen.height*n,t=Math.max(r,n),r=Math.min(r,n);return t<800||r<600}();return n&&r}()){try{h("bns"),walkme_browser_not_supported()}catch(n){}return}h("exl");var r,n=window[nn()],t=v.blocked;if(h("lsl"),r=nn(),window[r]=g,h("ipm"),!k()&&(h("clt"),window.document.dontLoadTriangle&&!Vn()))return h("bsl"),window["walkme_snippet_blocked"]=!0,v.blocked=!0,v.blockedReason=$n,void(v.continueLoad=function(){K($)});h("slb"),n&&!t&&N("slt","WalkMe Snippet was loaded twice"),window._walkmeExtension&&"true"===window._walkmeExtension.useTrustedTypePolicy&&window.trustedTypes&&window.trustedTypes.createPolicy&&(_walkmeInternals.trustedTypePolicy=window.trustedTypes.createPolicy("walkme-player",{createHTML:function(n){return n},createScriptURL:function(n){return n},createScript:function(n){return n}})),h("lss"),K($),h("eok")};if(!_walkmeConfig.snippetManager||Vn())return void i(t);var o=3===_walkmeConfig.platform?F:Bn,a="wm_snippet_cache_",u=8e3;if(!G)return void w("PlayerApi is not defined");var s=G+"/snippetmanager";function w(n,r){N("sme","SnippetManager error. Using partner system as a fallback.\n"+n),r||i(t)}function c(n,r,t){var e=!1,i=a+n,n=y(i);if(n)try{var o=JSON.parse(n);t(o),e=!0}catch(n){}setTimeout(function(){B(r,function(n){tn(i,JSON.stringify(n)),e||t(n)},function(n){en(i),w(n,e)})},e?u:0)}function d(n,r){if(!n||!r)return void w("Client identification settings are not valid");if("var"===n){n=function(n,r){for(var t=0,e=(r=r.split(".")).length;t<e;t++)if(null==(n=n[r[t]]))return;return n}(window,r);if(!n)return void w("Client identification variable does not exist in the global scope");return n}return void w("Unknown client identification type")}return void c("settings_"+o,s+"/getSettingsByGuid?guid="+o,function(n){n=d(n.id_type,n.id_key);n&&c("clientGuid_"+o+"_"+n,s+"/getClientGuid?partnerGuid="+o+"&clientId="+n,function(n){var r=n.clientGuid;if(!r)return h("smnm"),void i(t);if(n.envId&&n.envId!=_)return void w("Enironments mismatch");h("smr"),i(t.split(o).join(r))})})}function h(n){v.snippetLog.push(n)}function $(){j("settingsFileStartLoad",{mark:!0}),window["walkme_custom_settings_data"]?(h("lso"),o(walkme_custom_settings_data)):jn(l)?(h("lsa"),B(l,o,function(n){N("lsa",n)})):(h("lsp"),D(l,null,"fixedCallback",o))}function B(n,r,t){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==e.readyState)if(200<=e.status&&e.status<400)try{r(JSON.parse(e.responseText))}catch(n){t("ERROR: Response error: "+n.message)}else t("ERROR: Unexpected error while fetching ["+n+"][status: "+e.status+"]")},e.open("GET",n,!0),e.send()}function o(n){if(j("settingsFileEndLoad",{mark:!0,measureName:"SettingsFile",startMark:"settingsFileStartLoad"}),!k()&&window.document.dontLoadTriangle&&!Vn())return window["walkme_snippet_blocked"]=!0,v.blocked=!0,v.blockedReason=$n,void(v.continueLoad=function(){J(n)});h("cls"),J(n)}function J(r){w=b(r),window.walkme&&window.walkme.prepCdnFormat&&(r.PublicPath=window.walkme.prepCdnFormat(r.PublicPath),Object.keys(r.Components||{}).forEach(function(n){r.Components[n]=window.walkme.prepCdnFormat(r.Components[n])}));var n=window.walkme_settings_callback||window.walkme&&window.walkme.walkme_settings_callback||window._walkmeConfig&&window._walkmeConfig.walkme_settings_callback,n=(n&&n(w),C("walkme_is_enabled_override"));if(void 0!==n){if("0"===n)return}else if(!r.IsEnabled)return;n=r;try{q(w.LibFile)&&(i=w.LibFile.replace(d,c+d),t=w.PublicPath.replace(/.$/,c+"/"),w.LibFile=n.LibFile=i,w.PublicPath=n.PublicPath=t);var t,e=w.DataFiles[0].url;q(e)&&function(n){return n<Date.now()-1e3*60*5}(n.PublishDate)&&(w.DataFiles[0].url=e.replace(d,c+d))}catch(n){}var i=r.jQueryFile,n=(j("jQueryScriptStartLoad",{mark:!0}),window.walkme_custom_jquery?(window.mtjQuery=walkme_custom_jquery,z()):(0!=(t=y("walkmeCustomjQueryUrl"))&&(i=t),v.localjQueryUrlPath&&(t=i.lastIndexOf("/"),t=i.substring(t+1),i=v.localjQueryUrlPath+t),D(i,z)),r);if(!function(){var n=document.createElement("link").relList;return n&&n.supports&&n.supports("preload")}()||y("wm-preload-off"))return void h("spls");h("pls"),E(Y(n)),E(X(n)),E(n.WalkMeConfigFile);try{var o=function(n){var r=y("wm-lang"),t=n[0].url;{var e;if(r&&function(n,r){for(var t=0;t<r.length;t++)if(r[t].shortName==n)return 1;return 0}(r,n[0].languages))return n=Cn(t)?".br":"",e=On(t),t.substring(0,t.length-e.length-n.length-1)+"_"+r+n+"."+e}return t}(n.DataFiles),a=jn(o);window.Worker&&"true"===y("wm-worker-enabled")?(window._walkmeInternals.wmWorker||(function(){var n="self.map=new Map();self.callbackMap=new Map();self.window=self;self.onmessage="+function(n){if(!n||!n.data)return;if(Array.isArray(n.data))for(var r=0;r<n.data.length;r++)Un(n.data[r]);else Un(n.data)}.toString()+"; "+Un.toString()+Wn.toString()+P.toString();D(null,null,null,null,"wm-worker",n,"javascript/worker")}(),D(null,null,null,null,"wm-blob","var blob=new Blob([document.querySelector('#wm-worker').textContent],{type:'text/javascript'});window._walkmeInternals.wmWorker=new Worker(window.URL.createObjectURL(blob));")),function(n,r){_walkmeInternals.wmWorker&&_walkmeInternals.wmWorker.postMessage({action:r?"loadJson":"loadJsDataFile",message:{url:n,callbackName:"appendDataPackage",callbackVar:"_makeTutorial"},channel:"dataFileLoader"})}(o,a)):y("wm-preload-data")&&(a?function(n){var r=R();window.fetch&&!r&&I(n,"preload","fetch",!0)}:E)(o)}catch(n){}h("prc"),un(n.PlayerApiServer),function(n){n=n.Storage;return n&&1===n["ss"]}(n)&&un(n.PlayerServer);e=y("wm.preload-fonts");if(!e)return;for(var u=JSON.parse(e),s=0;s<u.length;s++)E(u[s]);return}function q(n){var r,t=R();return("Chrome"===(r=S()).browser&&50<=r.version||"Edge"===r.browser&&15<=r.version||"Firefox"===r.browser&&44<=r.version||"Safari"===r.browser&&11<=r.version||"Opera"===r.browser&&38<=r.version)&&!k()&&!v.isSelfHosted&&!t&&H.test(n)&&n.indexOf(c)<0&&!y("wm-brotli-off")&&function(){var n=y(i);if(parseInt(n)!==w.PublishDate)return en(i),1;return 0}()}function z(){if(j("jQueryScriptLoaded",{mark:!0,measureName:"jQueryLoaded",startMark:"jQueryScriptStartLoad"}),null==window["mtjQuery"])return;if(A)return;function n(){j("jQueryWindowLoadEvent",{measureName:"jQueryWindowLoad",startMark:"jQueryScriptLoaded"}),a(w)}A=!0,window.walkme_custom_jquery||mtjQuery.noConflict(),"true"===y("wm-wait-win-load")?(h("wwl"),mtjQuery(document).ready(function(){j("jQueryDocumentReadyEvent",{measureName:"jQueryDocumentReady",startMark:"jQueryScriptLoaded"})}),"complete"===document.readyState?n():window.addEventListener("load",n)):w.WaitDocumentReady?(h("wdr"),mtjQuery(document).ready(function(){j("jQueryDocumentReadyEvent",{measureName:"jQueryDocumentReady",startMark:"jQueryScriptLoaded"}),a(w)})):(h("ndr"),a(w))}function a(n){j("jQueryDocumentReady"),"true"===y("wm-load-cd-snippet")&&function(){var n=function(n){if(!n)return n;if("string"==typeof n)return n;n=n[ln];return n[S().string]||n[S().browser]||n["*"]}(g.getSettingsFile().Storage),r=~["crossdomain","crossdomain_ls","crossdomain_ck","dap","proxy"].indexOf(n);if(r&&"Safari"===S().browser&&on())return;"proxy"===n?(j("initProxyHiddenIframeStart",{mark:!0,level:1}),function(n){var r="walkme-proxy-iframe";(e=document.getElementById(r))?n():e=Rn("about:blank",r,!1,n,0,null,!0)}(function(){try{j("initProxyHiddenIframeDone",{mark:!0,level:1,measureName:"initProxyIframe",startMark:"initProxyHiddenIframeStart"});var n=mtjQuery(e).contents(),r=e.contentWindow||e.window;En(n.find("body")[0]),j("initIframeMessageSenderStart",{mark:!0,level:1}),!function(n,r,t){if(r.document.getElementById("wm-hidden-iframe-script"))return;r=In(Sn(),"wm-hidden-iframe-script",r);window._walkmeInternals.hiddenIframeCallback=t,n.find("head")[0].appendChild(r)}(n,r,function(){j("initIframeMessageSenderDone",{level:1,measureName:"injectMessageSender",startMark:"initIframeMessageSenderStart"}),window._walkmeInternals.hiddenIframeCallbackCalled=!0})}catch(n){}})):r&&En()}();try{(t=Y(r=n))&&""!=t?(j("preLibStartLoad",{mark:!0}),window["walkme_pre_lib_loaded"]=function(){window["walkme_pre_lib_loaded"]=function(){try{console.log("walkme_pre_lib_loaded was called twice.")}catch(n){}},Z(r)},D(t)):Z(r)}catch(n){}var r,t}function K(n){try{var r=C("wm_load_test_"+Bn+"_"+_),t=parseInt(r);if(t)return j("startLoadingTest"),_walkmeInternals.loadingTestDone=function(){j("endLoadingTest"),_walkmeInternals.loadingTestDone=void 0,n&&n()},void setTimeout(_walkmeInternals.loadingTestDone,1e3*t)}catch(n){}n&&n()}function X(n){v.localLibUrl&&(r=v.localLibUrl);var r,t=y("walkmeCustomeLibUrl");if(0!=t)return t;return r||n.LibFile}function Y(n){return y("wm-prelibjs")||n.PreLibJsFile}function Z(n){j("libStartLoad",{mark:!0,measureName:"Prelib",startMark:"preLibStartLoad"}),D(X(n))}function nn(){return k()?"wmPreviewSnippet":"wmSnippet"}function k(){return Q==p.preview}function rn(){this.recorderServer="###RECORDER_SERVER_NAME###",this.cdnServerName="https://cdn.walkme.com",this.storage={"st":{"*":"proxy"},"ss":1},this.userGuids=["3ef27b45ddca4cb397ec5dc9548bee79"],window.walkme_custom_cdn_server&&(this.cdnServerName=walkme_custom_cdn_server),window.walkme_custom_app_server&&(this.recorderServer=walkme_custom_app_server),window.walkme_custom_data_url?this.triangleUrl=walkme_custom_data_url:this.triangleUrl=this.cdnServerName+"###SPECIAL_TRIANGLE_FILE###",window.walkme_custom_datafile_url?this.datafilesArray=walkme_custom_datafile_url:this.datafilesArray="###SPECIAL_DATA_FILE###",window.walkme_custom_widget_url?this.widgetUrl=walkme_custom_widget_url:this.widgetUrl="###SPECIAL_WIDGET_FILE###"}function b(n){if(null==m)return n;return function n(r,t){{if("string"==typeof r)return t(r);if("[object Array]"===Object.prototype.toString.call(r)){for(var e=0;e<r.length;e++)r[e]=n(r[e],t);return r}if("object"==typeof r){for(var e in r)Object.hasOwnProperty.call(r,e)&&(r[e]=n(r[e],t));return r}}return r}(n,function(n){return n.replace("###AUTO_DETECT###",m)})}function y(n){try{var r=window.localStorage.getItem(n);if(null!=r)return r}catch(n){}return!1}function tn(n,r){try{window.localStorage.setItem(n,r)}catch(n){}}function en(n){try{window.localStorage.removeItem(n)}catch(n){}}function on(){var n=/iPad Simulator|iPhone Simulator|iPod Simulator|iPad|iPhone|iPod/.test(navigator.platform),r=-1<navigator.userAgent.indexOf("Mac")&&"ontouchend"in document;return n||r}function an(n){return new RegExp(n,"i").test(navigator.userAgent||navigator.vendor||window.opera)}function S(){if(t)return t;var n={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(n){for(var r=0;r<n.length;r++){var t=n[r].string,e=n[r].prop;if(this.versionSearchString=n[r].versionSearch||n[r].identity,t){if(-1!=t.indexOf(n[r].subString))return n[r].identity}else if(e)return n[r].identity}},searchVersion:function(n){var r=n.indexOf(this.versionSearchString);if(-1==r)return;return parseFloat(n.substring(r+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer",versionSearch:" rv"},{string:navigator.userAgent,subString:"Edge",identity:"Edge"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};return n.init(),t={version:n.version,browser:n.browser,string:n.browser+" "+n.version,OS:n.OS}}function E(n){I(n,"preload","script")}function un(n){I(n,"preconnect")}function sn(){tn(i,w.PublishDate),w.LibFile=O(w.LibFile),w.PublicPath=O(w.PublicPath),w.DataFiles[0].url=O(w.DataFiles[0].url)}function wn(n){var r;n&&n.srcElement&&(Cn(r=n.srcElement.src||n.srcElement.href)&&(sn(),r=O(r),("LINK"===n.srcElement.tagName?E:D)(r)))}function I(n,r,t,e){if(!n)return;try{var i=document.createElement("link");i.href=n,window&&window.walkme&&window.walkme.prepCdnFormat&&(i.href=window.walkme.prepCdnFormat(i.href)),Tn(i,n),i.onerror=wn,i.rel=r,t&&(i.as=t),e&&i.setAttribute("crossorigin",""),i.id="wm_link"+W++,Dn().appendChild(i)}catch(n){}}var cn="resources/CD/",dn="CDhiddenIframe",fn="cdHiddenIframeScript.js",ln="st",mn="cm",vn=function(){return g.getSettingsFile().PublicPath};function gn(n){if(window&&window.walkme&&window.walkme.prepCdnFormat)return window.walkme.prepCdnFormat(n);return n}var u,s,L,pn,M,_n,T,hn,kn,bn,yn=function(){var n=function(n,r){var t=g.getSettingsFile().Storage;if(!t||void 0===t[n])return r;return t[n]}(mn,!0)?".compress":"";return gn(vn()+cn+dn+n+".html")},Sn=function(){return gn(vn()+cn+fn)};function En(n){var r="walkme-hidden-iframe",t=(n?n.ownerDocument:document).getElementById(r);t||(j("initHiddenIframeStart",{mark:!0,level:1}),window._walkmeInternals.hiddenIframeSnippetLoad=!0,Rn(yn(),r,!1,function(){j("initHiddenIframeDone",{mark:!0,level:1,measureName:"initHiddenIframe",startMark:"initHiddenIframeStart"}),window._walkmeInternals.hiddenIframeLoaded=!0,window._walkmeInternals.hiddenIframeLoadCallback&&window._walkmeInternals.hiddenIframeLoadCallback()},0,n,!0))}function In(n,r,t){t=(t||window).document.createElement("script");return t.setAttribute("id",r||"mt_script_"+(Date.now()+Math.random()).toString().replace(/(^.{7})|(\.)/g,"")),t.setAttribute("async","true"),t.setAttribute("class","walkme-to-remove"),n&&(t.src=Mn(n)),Tn(t,n),t}function Ln(n){if(window._walkmeInternals&&window._walkmeInternals.trustedTypePolicy&&n)return window._walkmeInternals.trustedTypePolicy.createHTML(n);return n}function Mn(n){if(window._walkmeInternals&&window._walkmeInternals.trustedTypePolicy&&n)return window._walkmeInternals.trustedTypePolicy.createScriptURL(n);return n}function R(){return window._walkmeConfig&&window._walkmeConfig.hashData}function Tn(n,r){window._walkmeExtension&&window._walkmeExtension.nonceValue&&n.setAttribute("nonce",window._walkmeExtension.nonceValue);var t=R();if(!r||!t||!t.Files)return;var e=r.indexOf("?"),e=-1!==e?r.substring(0,e):r;t.Files[e]&&(n.setAttribute("crossorigin",""),n.setAttribute("integrity",t.Files[e]))}function Rn(n,r,t,e,i,o,a,u){o=o||document.body;var s=document.createElement("iframe");try{o.appendChild(s)}catch(n){s=o.ownerDocument.createElement("iframe"),o.appendChild(s)}if(s.id=r,a||(s.className="walkme-to-remove"),t||(s.style.cssText="display:none;visibility:hidden;"),u)for(var w in u)u.hasOwnProperty(w)&&s.setAttribute(w,u[w]);return s.addEventListener("load",function n(r){s.removeEventListener&&s.removeEventListener("load",n),e&&e(r)},!1),s.src=n,s}function D(n,r,t,e,i,o,a){var u,n=In(n,i),s=(window&&window.walkme&&window.walkme.prepCdnFormat&&(n.src=window.walkme.prepCdnFormat(n.src)),a&&(n.type=a),o&&(n.text=o),r&&(n.onload=r,n.onreadystatechange=r),n.onerror=wn,t),w=e;s&&w&&(u=window[s],window[s]=function(n){window[s]=u,w(n)}),Dn().appendChild(n)}function Dn(){return x=x||document.getElementsByTagName("head")[0]}function On(n){return n.split(".").pop()}function Cn(n){return n&&0<n.indexOf(".br")}function O(n){return n&&n.replace(".br","")}function jn(n){return/json($|\?)/.test(On(n))}function Pn(n){return n.replace(/^\s+|\s+$/g,"")}function C(n,r){r=(r?y:function(n){for(var r,t,e=document.cookie.split(";"),i=0;i<e.length;i++)if(r=e[i].substr(0,e[i].indexOf("=")),t=e[i].substr(e[i].indexOf("=")+1),(r=r.replace(/^\s+|\s+$/g,""))==n)return t;return!1})(n);if(!1!==r)return r;r=window[n]||window.walkme&&window.walkme[n]||window._walkmeConfig&&window._walkmeConfig[n];if(null!=r)return r;return}function Nn(n){if(u=void 0===u?y("wmAddPerfMeasures"):u)return!n||n<=u;return 0}function j(n,r){try{var t,e=xn(),i=Date.now(),o=_walkmeInternals.timing?i-(t=_walkmeInternals.timing).list[t.list.length-1].time:(t=_walkmeInternals.timing={map:{},perf:{},list:[],delta:[]},0);if(t.perf[n])return;if(r&&r.level&&!Nn(r.level))return;t.map[n]=i,t.perf[n]=e,t.list.push({name:n,time:i}),t.delta.push({name:n,delta:o}),!function(n,r){if(!r||!Nn(r.level))return;var t,e="wm-";r.mark&&performance.mark(e+n),r.measureName&&(n=r.startMark&&e+r.startMark,t=r.endMark&&e+r.endMark,performance.measure(e+r.measureName,n,t))}(n,r)}catch(n){}}function xn(){if(window.performance&&window.performance.now)return parseInt(window.performance.now())}function An(){_walkmeInternals.isVisibleSinceLoad=!1,document.removeEventListener("visibilitychange",An)}function Un(n){if(!n.action)return;var r={getData:function(n,r){var t=n.url;if(!t||!r)return;self.map.has(t)?(postMessage({channel:r,message:self.map.get(t)}),self.map.delete(t)):n.isJson?Wn(t,function(n){postMessage({channel:r,message:n})}):P(n.url,n.callbackName,n.callbackVar,function(n){postMessage({channel:r,message:n})})},loadJson:function(r){if(!r.url)return;Wn(r.url,function(n){self.map.set(r.url,n)})},loadScriptWithCallback:function(r){if(!r.url)return;P(r.url,r.callbackName,r.callbackVar,function(n){self.map.set(r.url,n)})},loadJsDataFile:function(r){if(!r.url)return;self.window.wmSnippet={},self.window.wmSnippet.getServerSettings=function(){return!0},P(r.url,r.callbackName,r.callbackVar,function(n){self.map.set(r.url,n)})}}[n.action];try{r&&r(n.message,n.channel)}catch(n){}}function P(t,n,r,e){if(self.callbackMap.has(t))return void self.callbackMap.set(t,e);self.callbackMap.set(t,e),r?self[r]=self:r="window",self[r][n]=function(n){var r=self.callbackMap.get(t);r&&r(n),self.callbackMap.delete(t)},importScripts(t)}function Wn(r,n){if(self.callbackMap.has(r))return void self.callbackMap.set(r,n);self.callbackMap.set(r,n);var t=new XMLHttpRequest;t.responseType="json",t.onreadystatechange=function(){var n;4===t.readyState&&200===t.status&&((n=self.callbackMap.get(r))&&n(t.response),self.callbackMap.delete(r))},t.open("GET",r,!0),t.send(null)}function N(n,r){try{h(n),console.log(r)}catch(n){}}function Qn(){if(pn)return;pn=!0,clearTimeout(_n),clearTimeout(T),M&&M.disconnect(),j("startLoadWM",{mark:!0,measureName:"startLoadWM",startMark:"snippetStartInit"}),V()}function Fn(n,r,t){return(M=new PerformanceObserver(function(n){j("waitLoad"+n.getEntries()[0].entryType+"Done"),r&&r()})).observe({type:n,buffered:t}),M}this.getSnippetVersion=function(){return U},this.getSettingsFile=function(){return w},this.getServerSettings=function(){return f},this.fixAutoDetectPaths=b,!_walkmeInternals.__tti&&"PerformanceObserver"in window&&(s=[],"PerformanceResourceTiming"in window&&s.push("resource"),"PerformancePaintTiming"in window&&s.push("paint"),"PerformanceLongTaskTiming"in window&&s.push("longtask"),"LargestContentfulPaint"in window&&s.push("largest-contentful-paint"),0<s.length&&((L=_walkmeInternals.__tti={e:[]}).o=new PerformanceObserver(function(n){L.e=L.e.concat(n.getEntries())}),L.o.observe({entryTypes:s})));try{var Gn=y("wm-wait-load-observer");if(Gn&&"PerformanceObserver"in window){if(_n=setTimeout(Qn,2e4),"TTI"===Gn)return bn=5100,Hn(),hn=Fn("longtask",function(){Hn()}),void(kn=Fn("resource",function(){Hn()}));Fn(Gn,Qn,!0)}else V()}catch(n){}function Hn(){if(pn)return;T&&clearTimeout(T),T=setTimeout(function(){hn.disconnect(),kn.disconnect(),Qn()},bn)}}function Vn(){if(window._walkmeExtension&&window._walkmeExtension.injectedGuid)return Bn===window._walkmeExtension.injectedGuid;return 0}var $n=0,r=1,Bn="3ef27b45ddca4cb397ec5dc9548bee79";window._walkmeInternals=window._walkmeInternals||{},window.document.extensionIsBlockingSnippet&&!Vn()?(window["walkme_snippet_blocked"]=!0,window._walkmeInternals.blocked=!0,window._walkmeInternals.blockedReason=r,window._walkmeInternals.continueLoad=function(){new n}):new n}();