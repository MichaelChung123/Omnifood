/*! 20190901-5-RELEASE 2019-09-01 */

!function(t){t.TRC=t.TRC||{};var e=function(){return!0},n=function(t,e,n,i){var r=t+"/"+encodeURIComponent(n||TRC.publisherId)+"/log/3"+"/"+e;return i&&(r+="?"+TRC.TRCLogger.formatParams(i)),r},i=function(n,i){var r,o=new(t.XDomainRequest||t.XMLHttpRequest);return o.open(n,i),o.onload=e,o.onerror=e,o.ontimeout=e,o.onprogress=e,o.withCredentials=!0,o};TRC.TRCLogger={post:function(t,e,r,o,a){var s=n(t,e,o,a),c=i("POST",s);c.setRequestHeader&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(TRC.TRCLogger.formatParams(r))},get:function(t,e,r,o){var a=n(t,e,o,r),s;i("GET",a).send()},formatParams:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}}}(window),function(t,e){var n,i,r,o,a,s,c,u;t.TRC=t.TRC||{},function(){if("function"==typeof t.CustomEvent)return!1;function n(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var i=e.createEvent("CustomEvent");return i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),i}n.prototype=t.Event.prototype,t.CustomEvent=n}(),t.TRC.eventUtils=t.TRC.eventUtils||{},t.TRC.eventUtils.dispatchEvent=t.TRC.eventUtils.dispatchEvent||function(t,e){"function"==typeof CustomEvent&&document.dispatchEvent(new CustomEvent(t,{detail:e||{}}))},t.TRC.eventUtils.safeAddEventListener=t.TRC.eventUtils.safeAddEventListener||function(t,e){document.addEventListener(t,function(t){try{e.call(this,t)}catch(t){}})},t.TRC.eventUtils.getDateNow=t.TRC.eventUtils.getDateNow||function(){var t,e;if(Date.now){if("number"==typeof(t=Date.now()))return t;if("number"==typeof(e=Number(t)))return e}return(new Date).getTime()},t.TRC.sharedEvents=t.TRC.sharedEvents||{PAGE_VIEW:"TRK_TFA_PAGE_VIEW",REQUEST_ID_CREATED:"TRK_TFA_REQUEST_ID_CREATED",REQUEST_ID_CREATION_TIMEOUT:"TRK_TFA_REQUEST_ID_CREATION_TIMEOUT",REQUEST_ID_CREATION_ERROR:"TRK_TFA_REQUEST_ID_CREATION_ERROR"},t.TRC.publisherIdType=t.TRC.publisherIdType||{NAME:"n",ID:"i"},t.TRC.pageViewInitiator=t.TRC.pageViewInitiator||{TRK:"trk",TFA:"tfa"},TRC.util=TRC.util||{},TRC.util.getReferrer=TRC.util.getReferrer||(i=function(){try{return decodeURI(top.window.document.referrer)}catch(t){}return null},r=/https?:\/\/\w+\.taboola(?:syndication)?\.com/,c=[function(){for(var t=document.head.getElementsByTagName("link"),e=0;e<t.length;e++)if("referrer"===t[e].rel)return t[e].href;return null},function(){var t=i();return t?o(t):null},function(){return"N/A"}],(u=function(){for(var t,e=0;!t&&e<c.length;e++)t=c[e].call(this);return t}).innerExtractReferrerFromTopMostReferrer=o=function(t){return r.test(t)?t.split("?")[0]:t.substr(0,400)},u)}(window,document),function(t){t._tfa=t._tfa||[],t._tfa.TfaConfig=function(t){this.config=t},t._tfa.TfaConfig.prototype={safeGet:function(t,e){var n;try{return this.config?void 0===(n=this.config[t])?e:n:e}catch(t){return e}},hasValidConfig:function(){return"string"!=typeof this.config&&!(this.config instanceof String)}},t._tfa.config=t._tfa.config||new t._tfa.TfaConfig({"tfa:trk:enabled":true}),t._taboola=t._taboola||[]}(window),function(t,e,n){"use strict";var i={map:function(t,e){if("function"==typeof Array.prototype.map)return e.map(t);for(var n=[],i=0;i<e.length;i++)n.push(t(e[i],i,e));return n},forEach:function(t,e){if("function"==typeof Array.prototype.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t(e[n],n,e)},filter:function(t,e){if("function"==typeof Array.prototype.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n},objKeys:Object.keys||(r=Object.prototype.hasOwnProperty,o=!{toString:null}.propertyIsEnumerable("toString"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=a.length,function(t){if("function"!=typeof t&&("object"!=typeof t||null===t))throw new TypeError("Object.keys called on non-object");var e=[],n,i;for(n in t)r.call(t,n)&&e.push(n);if(o)for(i=0;i<s;i++)r.call(t,a[i])&&e.push(a[i]);return e})},r,o,a,s;n.networkMap&&"string"!=typeof n.networkMap||(n.networkMap={});var c=null,u=null,l=null,f=null,h={},d=0,g=!1,p="requestTimeoutHandle",m="requestId",v="requestStatus",T=5e3,S="INIT",w="PENDING_RESPONSE",y="TIMED_OUT",R="SUCCESS",I="FAILURE",C="UNKNOWN",b=[y,I],E=[S,w],_=((D={})[TRC.publisherIdType.NAME]="name",D[TRC.publisherIdType.ID]="id",D),N=function(){for(var t={},e=i.objKeys(n.networkMap),r=0;r<e.length;++r){var o;t[""+n.networkMap[e[r]][_[TRC.publisherIdType.ID]]]=!0}return t}(),D,O=function(){return!0===n.tfaContext},P=function(){try{localStorage.setItem("taboolaStorageDetection","detect"),localStorage.removeItem("taboolaStorageDetection")}catch(t){return!1}return!0},M=function(t,e,n){var i=t.split(e);return i.slice(0,n-1).concat(i.length>=n?i.slice(n-1).join(e):[])},k=function(t){if(!t)throw new Error("Invalid URL!");this.href=t;var e=M(t,"#",2);return this.hash=e.length>1?"#"+e.pop():"",t=e[0],e=M(t,"?",2),this.search=e.length>1?"?"+e.pop():"",t=e[0],e=M(t,"://",2),this.protocol=e.length>1?e.shift()+":":"",t=e[0],e=M(t,"/",2),this.pathname=e.length>1?"/"+e.pop():"/",t=e[0],e=M(t,"@",2),this.auth=e.length>1?e.shift():"",t=e[0],e=M(t,":",2),this.port=e.length>1?parseInt(e.pop()):0,this.host=e[0],this},U={"http:":1,"https:":1};k.prototype.toString=function(t){return(this.host?this.protocol+"//"+(this.auth?this.auth+"@":"")+this.host+(this.port?":"+this.port:""):"")+this.pathname+this.search+(t?"":this.hash||"")},k.prototype.switchProtocol=function(t,e){var n=this instanceof k?this:new k(this),i;return U[t]&&(e&&"https:"==n.protocol||(n.protocol=t)),(i=n.toString(!1)).length>1?i:""},k.prototype.getParameter=function(t){for(var e,n=(this instanceof k?this:new k(this)).search.substr(1).split(/&/),i=0;i<n.length;i++){var r=n[i].split(new RegExp("="),2);if(unescape(r[0])==t)return unescape(r[1])}return null};var A={states:{ABP_DETECTION_DISABLED:-2,ABP_NOT_DETECTED:0,ABP_DETECTED:1},createBlockDetectionDiv:function(t){var n=e.createElement("div");return n.className=t,n.style.fontSize="initial",n.appendChild(e.createTextNode(".")),e.documentElement.appendChild(n),n},isBlockDetectedOnDiv:function(t){return!t.offsetHeight},isBlockDetectedOnClassNames:function(t){var n,i=t.length,r;for(n=0;n<i;n++)if(t[n]){r=this.createBlockDetectionDiv(t[n]);try{if(this.isBlockDetectedOnDiv(r))return!0}catch(t){}finally{e.documentElement.removeChild(r)}}return!1},getBlockedState:function(t){return tt()||et()?this.states.ABP_NOT_DETECTED:t&&this.isBlockDetectedOnClassNames(t)?this.states.ABP_DETECTED:this.states.ABP_NOT_DETECTED}},V=function(t,e){for(var n=i.objKeys(t),r=0;r<n.length;r++){var o=n[r];e.push([o,t[o]])}},x=function(t){TRC[t.callbackName]=function(){},t.newScriptElement.parentNode.removeChild(t.newScriptElement),t.newScriptElement=null,delete t.newScriptElement},L=function(t){x(t),t[v]=y,t.isMediaRequest||(TRC.trkRequestStatus=!1)},j=function(t,n,i,r){var o=e.getElementsByTagName("script")[0],a=e.createElement("script");return a.type="text/javascript",a.src=t,a.charset="UTF-8",i?a.setAttribute("defer","defer"):r&&a.setAttribute("async","async"),"function"==typeof n&&(a.addEventListener?(a.addEventListener("load",n,!1),a.addEventListener("error",n,!1)):a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!=a.readyState||n.apply(a)}),o.parentNode.insertBefore(a,o),a},F=function(e,n,i){var r=e+"-"+d,o={publisherId:e,isMediaRequest:i.pageViewInitiator===t.TRC.pageViewInitiator.TFA,publisherIdType:n,callbackName:"trkCallback"+(0===d?"":d),requestStatus:S,innerRequestId:r};return h[e]||(h[e]=[]),h[e].push(o),++d,o},q=function(t){return function(){L(t)}},K=function(e,n,i){var r=F(e,n,i),o="//trc.taboola.com/"+e+"/trc/3/json?"+"tim="+(new Date).getTime()+"&"+"data="+encodeURIComponent(JSON.stringify(H(r)))+"&"+"pubit="+n,a=i.isMediaRequest?t._tfa.config.safeGet("tfa:trk:tracking-request-timeout",T):T;r.newScriptElement=j(o),r[v]=w,r[p]=t.setTimeout(q(r),a)},W=function(t){return function(e){B(t,e)}},H=function(t){return TRC[t.callbackName]=W(t),J(t,"TRC."+t.callbackName)},$=function(t){var e=h[t];return e&&e.length>0?e[e.length-1]:null},B=function(e,i){if(t.clearTimeout(e[p]),i&&i.trc&&(i.trc.ui&&(i.trc["DNT"]&&"TRUE"===i.trc["DNT"].toUpperCase()?localStorage.removeItem("taboola global:user-id"):localStorage.setItem("taboola global:user-id",i.trc["ui"])),i.trc.sd&&localStorage.setItem(e.publisherId+":session-data",i.trc["sd"]),i.trc["vl"]&&i.trc["vl"].length)){var r=i.trc["vl"][0].ri;e.isMediaRequest||(TRC.events_ri=r),e[m]=r,e[v]=R}e[v]!==R&&(e[v]=I),e.isMediaRequest||(TRC.trkRequestStatus=!(b.indexOf(e[v])>=0)),TRC.alertVVResponseLoaded&&TRC.alertVVResponseLoaded(n.tblVersion),x(e)},z=function(){var t=f;return t||(t=TRC.util.getReferrer()),t},J=function(e,i){var r=A.getBlockedState(["banner_ad","sponsored_ad"]);return{id:~~(1e3*Math.random()),ii:X(e),it:ct(t._taboola),sd:ut(e.publisherId),ui:lt(),vi:G(),cv:n.tblVersion,uiv:"default",u:ft(),e:z(),cb:i,mpv:e.isMediaRequest,r:[{li:"rbox-tracking",s:0,uim:"rbox-tracking:pub="+n.bakedPublisherName+":abp="+r,uip:"rbox-tracking",orig_uip:"rbox-tracking"}]}},G=function(){return t.taboola_view_id||(t.taboola_view_id=(new Date).getTime()),t.taboola_view_id},Q=function(t){for(var e=0;e<t.length;++e)for(var n=t[e],r=i.objKeys(n),o=0;o<r.length;++o){var a=r[o],s=n[a];if("unknown"!==s)switch("auto"===s&&(s=""),a){case"video":c=s;break;case"url":l=s;break;case"article":case"category":case"home":case"search":case"photo":case"other":case"content_hub":u=s;break;case"ref_url":f=s}}},Y=function(t){if(t){var e=TRC.trk.getPublisherRequestId(t);if(e)return e}return TRC.events_ri},X=function(t){var e=null;return c||""==c?e=c:(u||""==u)&&(e=u),(""==e||t.isMediaRequest)&&(e=it("item-id",n.normalizeItemId,n.prenormalizeIdRules)),e},Z=function(t,e,n){var r;if(!n)return e;i.forEach(function(t){var n=e.search(t);n>=0&&(e=e.substr(0,n))},n["truncate-at"]||[]);for(var o=new k(e),a=i.objKeys(n),s=0;s<a.length;++s){var c=a[s];if(n[c])switch(c){case"host":delete o.host;break;case"trailing-dirsep":for(;"/"===o.pathname.substr(o.pathname.length-1);)o.pathname=o.pathname.substr(0,o.pathname.length-1);break;case"query":var u=[],l=o.search.replace(/^\?/,"").split("&");"string"==typeof(r=n[c])&&(r=new RegExp(r));var f=r instanceof Array?function(t){for(var e=0;e<r.length;e++)if(t===r[e])return!0;return!1}:r instanceof RegExp?r.test.trcBind(r):function(){return!1};l.forEach(function(t){f(decodeURIComponent(t.split("=")[0]))&&u.push(t)}),o.search=(u.length?"?":"")+u.join("&");break;case"fragment":var h=o.hash.replace(/^#/,"");"string"==typeof(r=n[c])&&(r=new RegExp(r)),o.hash="",r instanceof RegExp&&r.test(h)?o.hash="#"+h:r instanceof Array&&r.forEach(function(t){h.search(t)>=0&&(o.hash="#"+h)})}}return o.pathname||(o.pathname="/"),"item-id"===t?o.toString().toLowerCase():o.toString()},tt=function(){return nt(z(),"ampproject.net")},et=function(){return nt(z(),"instantarticles.fb.com")},nt=function(t,e){try{return void 0!==t&&void 0!==e&&t.indexOf(e)>0}catch(t){return!1}},it=function(t,e,i){var r=["paramUrl","meta","canonical","og","location"],o={paramUrl:rt,canonical:ot,og:at,location:st},a=n.urlExtractOrder||r,s=0,u,l,f,h="",d=function(t,e){return Z.call(this,t,e,i)};for(a.push("location");s<a.length&&(!h||/^\s*$/.test(h));)l=a[s],h=(u=o[a[s]])?u.call(null,t,d):null,s++;return"item-url"===t&&l===rt?h:(f=l!==st,h=e?e.call(this,h,c?"video":"text",f):h)},rt=function(t,e){return!l||"item-id"!==t&&"item-url"!==t?null:e.call(this,t,l)},ot=function(t,n){for(var i=e.head.getElementsByTagName("link"),r=0;r<i.length;r++)if("canonical"==i[r].rel)return n.call(this,t,i[r].href);return null},at=function(t,n){for(var i=e.head.getElementsByTagName("meta"),r=0;r<i.length;r++)if("og:url"==i[r].getAttribute("property")&&i[r].content.length>5)return n.call(this,t,i[r].content);return null},st=function(e,n){var r=function(){var e=t.location,n=i.filter(function(t){return 0!==t.search("trc_")&&"taboola-debug"!==t},e.search.replace(/^\?/,"").split("&")).join("&");return e.origin+e.pathname+"?"+n};return n.call(this,e,r())},ct=function(t){try{var e=i.objKeys(t[0]);for(var n in e)switch(e[n]){case"home":return"home";case"category":return"category";case"text":case"article":return"text";case"search":return"search";case"photo":return"photo";case"other":return"other";case"content_hub":return"content_hub";case"video":default:return"video"}}catch(t){return"video"}},ut=function(t){return localStorage.getItem(t+":session-data")},lt=function(){return localStorage.getItem("taboola global:user-id")},ft=function(){return it("item-url",n.normalizeItemUrl,n.prenormalizeUrlRules)},ht=function(t){for(var e,n=/^(.*\/libtrc\/.+\/)(?:(?:trk)|(?:tfa))\.js(?:\?(.*))?$/,i=0;i<t.length;i++)if(e=t[i].src.match(n))return e[1]},dt=function(){for(var t=ht(e.getElementsByTagName("script")),n=[{key:"?",index:0},{key:"://",index:1},{key:"//",index:1},{key:"/",index:0}],i=0,r=n.length,o=t,a;i<r;i++)o=(a=M(o,n[i].key,2)).length>1?a[n[i].index]:a[0];return o},gt=function(){if(!TRC.AdServerManager){var t=dt();TRC.VVReady=pt,j("//"+t+"/libtrc/vv."+n.tblVersion+".js")}},pt=function(){TRC.adManager=new TRC.AdServerManager(n.vvConfig,n.tblVersion),TRC.adManager.startVV().then(function(){TRC.adManager.run()})},mt=function(t,e){return t?t[e]:t},vt=function(t,e,n){if(0===i.objKeys(n).length||N[""+t])return t;var r=document.createElement("a");r.href=l;var o=(r.host||location.host).toLowerCase(),a=(r.href||location.href).toLowerCase(),s=_[e],c=mt(n[o],s),u="/",f=["m","mobile","www2","www3"],h=[],d,g,p,m,v;if(!c){for(V(n,h),h.sort(function(t,e){return t[0].length>e[0].length?-1:t[0].length<e[0].length?1:0}),d=0,g=h.length;d<g;d++)if((p=h[d][0].toLowerCase()).indexOf(u)>0){if(a.match(p)){c=mt(h[d][1],s);break}if(p.indexOf("www.")>-1&&a.match(p.replace("www.",""))){c=mt(h[d][1],s);break}}else if(o.match(p)){c=mt(h[d][1],s);break}if(!c&&o.indexOf("www.")<0){for(d=0,g=f.length;d<g&&(m=new RegExp("(https://|http://|^)"+f[d]+"."),v=o.replace(m,"www."),!(c=mt(n[v],s)));d++);c||(c=mt(n[v="www."+o],s))}}return c||"unknown-site-on-"+t};t.TRC=t.TRC||{},TRC.trk=TRC.trk||{init:function(){TRC.utm&&!O()||(O()||g||(TRC._getGlobalRequestId=Y,TRC._getItemId=X,TRC._getItemType=ct,g=!0),TRC.hasTrk?O()||TRC.trk.execute():t._tfa&&!t._tfa.config.hasValidConfig()||(TRC.hasTrk=!0,P()&&(t.TRC.eventUtils.safeAddEventListener(TRC.sharedEvents.PAGE_VIEW,function(e){Q(t._taboola);var i=e.detail,r=i.publisherIdType,o=i.accountId,a=i.pageViewInitiator,s=a===t.TRC.pageViewInitiator.TFA;s&&t._tfa.config.safeGet("tfa:trk:network-solution-enabled",!1)&&(o=vt(o,r,n.networkMap)),K(o,r,{pageViewInitiator:a,isMediaRequest:s})}),O()||TRC.trk.execute(),n.enableVV&&gt())))},execute:function(){var e=TRC.publisherIdType.NAME,i=vt(n.bakedPublisherName,e,n.networkMap);TRC.eventUtils.dispatchEvent(t.TRC.sharedEvents.PAGE_VIEW,{accountId:i,publisherIdType:e,pageViewInitiator:t.TRC.pageViewInitiator.TRK}),TRC.publisherId=TRC.publisherId||i},getRequestStatus:function(t){var e=$(t);return e?e[v]:C},hasRequestEnded:function(t){var e=$(t);if(e){var n=e[v];return b.indexOf(n)>-1||!(E.indexOf(n)>-1)}return!1},getPublisherRequestId:function(t){var e=$(t);return e?e[m]:null}},O()&&!t._tfa.config.safeGet("tfa:trk:enabled",!1)||TRC.trk.init()}(window,document,{bakedPublisherId:1049902,bakedPublisherName:'udemy',tblVersion:"20190901-5-RELEASE",normalizeItemId:function(itemid,type,canon){if(!canon&&type=='text'&&typeof itemid=='string'&&itemid.search(new RegExp('^https?://'))==0)itemid=itemid.replace(/\?.*/,'', false);return itemid.toLowerCase();},prenormalizeIdRules:{"host":true,"fragment":"^(/video/|!)","query":["p","id"],"truncate-at":["search.searchcompletion.com","org.mozilla.javascript.undefined"],"trailing-dirsep":true},prenormalizeUrlRules:false,normalizeItemUrl:function(itemurl,type,canon){return itemurl;},urlExtractOrder:null,networkMap:{},vvConfig:null,enableVV:false,tfaContext:true}),function(win,doc){win._tfa=win._tfa||[],win.TRC=win.TRC||{},TRC.useStorageDetection=TRC.useStorageDetection||!0,TRC.text=TRC.text||{},TRC.text.lsplit=TRC.text.lsplit||function(t,e,n){var i=t.split(e);return i.slice(0,n-1).concat(i.length>=n?i.slice(n-1).join(e):[])},TRC.util=TRC.util||{},TRC.util.jsonParseWithNative=TRC.util.jsonParseWithNative||function(t){try{return JSON.parse(t)}catch(e){return TRC.util.jsonParseWithEval(t)}},TRC.util.jsonParseWithEval=TRC.util.jsonParseWithEval||function(text){try{return eval("("+String(text)+")")}catch(t){throw new Error("JSON parse error - invalid input!")}},TRC.util.safeAddParam=TRC.util.safeAddParam||function(t,e,n){var i,r;n&&e&&t&&(i=encodeURIComponent(t),r=encodeURIComponent(e),n.push(i+"="+r))},win.TRCImpl=win.TRCImpl||{},TRCImpl.global=TRCImpl.global||{},win.__trcError=win.__trcError||function t(){},win.__trcJSONify=win.__trcJSONify||function(t){if(window.JSON&&window.JSON.stringify&&window.TRCImpl&&window.TRCImpl.global["use-native-json-stringify"])return window.JSON.stringify(t);function e(t){return'"'+t.replace(/[\s\S]/g,function(t){switch(t){case'"':return'\\"';case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r"}return t})+'"'}function n(t){for(var e=[],n=0;n<t.length;n++)e[n]=__trcJSONify(t[n]);return e}function i(t){var n=[];for(var i in t)t.hasOwnProperty(i)&&n.push(e(i)+":"+__trcJSONify(t[i]));return n}return t instanceof Array?"["+n(t).join(",")+"]":t instanceof Object?"{"+i(t).join(",")+"}":null===t?"null":"string"==typeof t?e(t):void 0===t?"undefined":t.toString()}}(window,document),function(t,e){var n="taboola global",i="trctestcookie";function r(){for(var t="trc_cookie_storage",e=new Object,n=document.cookie.split(/;\s+/),i=0;i<n.length;i++){var r=TRC.text.lsplit(n[i],"=",2),o=unescape(r[0]),a=unescape(r[1]);if(o==t){for(var s=a.split("|"),c=0;c<s.length;c++){var r=s[c].split("=");e[unescape(r[0])]=unescape(r[1])}break}}function u(){var n=new Array,i,r;for(var o in e)e.hasOwnProperty(o)&&null!=e[o]&&(n[n.length]=escape(o)+"="+escape(e[o]));i=n.length>0?1:-1,r=new Date((new Date).getTime()+365*i*864e5),document.cookie=t+"="+escape(n.join("|"))+";path=/;expires="+r.toUTCString()}return this.getValue=function(t){return e.hasOwnProperty(t)?e[t]:null},this.setValue=function(t,n){e[t]=n,u()},this.removeKey=function(t){delete e[t],u()},this}function o(t){var e=t||{};return this.getValue=function(t){return e[t]?e[t]:null},this.setValue=function(t,n){e[t]=n},this.removeKey=function(t){delete e[t]},this.getData=function(){return e},this}function a(e){return this.getValue=function(n){return t[e+"Storage"].getItem(n)},this.setValue=function(n,i){try{t[e+"Storage"].setItem(n,i)}catch(t){}},this.removeKey=function(n){try{t[e+"Storage"].removeItem(n)}catch(t){}},this}function s(e){var n=t[e+"Storage"],i=(new Date).getTime()+"",r="_taboolaStorageDetection";try{if(n.setItem(r,i),n.getItem(r)==i)return n.removeItem(r),n}catch(t){}return null}function c(e){try{if(t.localStorage instanceof Storage&&TRC.useStorageDetection&&s(e))return new a(e)}catch(t){return null}}var u=function e(){return this.state={},this.getLocalStorageImplementation=function(e,n){if(null!=this.state.privateStorageImpl&&"strict-w3c-storage"!=e)return this.state.privateStorageImpl;var i=t.TRCImpl?t.TRCImpl.global:{};switch(e=e||(i["local-storage-usage"]?i["local-storage-usage"]:"prefer-w3c-storage")){case"strict-w3c-storage":return c("session"===n?"session":"local");case"prefer-w3c-storage":var a=c("local");if(a)return this.state.privateStorageImpl=a;case"prefer-cookies":try{if(this.canWriteCookies())return this.state.privateStorageImpl=new r}catch(t){}default:return this.state.privateStorageImpl=new o}},this.getFirstPartyCookie=function(){if(this.state.firstPartyCookie)return this.state.firstPartyCookie;var t=this.getLocalStorageImplementation();if(t instanceof r||t instanceof o)return this.state.firstPartyCookie=t;try{if(this.canWriteCookies())return this.state.firstPartyCookie=new r}catch(t){}return this.state.firstPartyCookie=new o},this.canWriteCookies=function(){var t;return document.cookie=i+"=ok",t=-1!==document.cookie.indexOf(i),document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t},this.getDummyStorage=function(t){return new o(t)},this.getValue=function(t){return this.getPublisherValue(n,t)},this.storePublisherValue=function(t,e,n){var i;this.isNotAllowedToWriteValue(e,n)||(i=this.buildKeyWithPublisher(t,e),this.getLocalStorageImplementation().setValue(i,n),this.addKeyToStoredKeysList(i))},this.isNotAllowedToWriteValue=function(t,e){return null==e||void 0==e||TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(t)},this.buildKeyWithPublisher=function(t,e){return t+":"+e},this.getPublisherValue=function(t,e){return TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(e)?null:this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(t,e))},this.addKeyToStoredKeysList=function(t){var e=this.getStoredKeysList();-1===e.indexOf(t)&&(e.push(t),this.setStoredKeysList(e))},this.getStoredKeysList=function(){var t=this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(n,"local-storage-keys")),e;try{e=TRC.util.jsonParseWithNative(t)||[]}catch(t){e=[],__trcError("Could not parse local storage keys",t)}return e},this.setStoredKeysList=function(t){var e;try{e=__trcJSONify(t),this.getLocalStorageImplementation().setValue(this.buildKeyWithPublisher(n,"local-storage-keys"),e)}catch(t){return void __trcError("Could not stringify local storage keys",t)}},this.isAllowedKeyWhenDoNotTrack=function(e){var n,i=(t.TRCImpl&&t.TRCImpl.global||{})["dnt-allowed-keys"]||["session-id","trc_css-isolation"],r;return null!==e&&void 0!==e&&(r=e.split(":")[1]||e,-1!==i.indexOf(r))},this.storeUserId=function(t){this.isNotAllowedToWriteValue("user-id",t)||this.storePublisherValue(n,"user-id",t)},this.getUserIdFirstPartyCookie=function(){return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(n,"user-id"))},this.getSessionDataFirstPartyCookie=function(){var t=this.getStoredKeysList();for(key in t)if(t[key].includes("session-data"))return TRC.tfaPageManager.getLocalStorageImplementation().getValue(t[key])},this.initState=function(){void 0===this.state&&(this.state={}),this.state.privateStorageImpl=null},this.initState(),this};TRC.tfaPageManager=TRC.tfaPageManager||new u}(window,document),function(t,e){var n=TRC.pageManager||TRC.tfaPageManager;function i(t,e,n){var i,r;n&&e&&t&&(i=encodeURIComponent(t),r=encodeURIComponent(e),n.push(i+"="+r))}function r(t,e){t&&e&&(e[t]=!0)}function o(t,e,n){for(var i={},o=0;o<arguments.length;o++)r(arguments[o],i);return Object.keys(i).length>1}TRC.tfaUserId={initialized:!1,userId:null,getUserId:function(){return this.userId},sendUserIdsToTrc:function(t,e,n){var i,r=[];if(o(t,e,n))return TRC.util.safeAddParam("uiref",t,r),TRC.util.safeAddParam("uils",e,r),TRC.util.safeAddParam("uifpc",n,r),(i=new Image).src="//trc.taboola.com/sg/taboola-tfa/1/um/?"+r.join("&"),i},readAndStoreUserId:function(){var t=this.extractUserIdFromReferrer(),e=n.getValue("user-id"),i=n.getUserIdFirstPartyCookie();t&&(this.sendUserIdsToTrc(t,e,i),n.storeUserId(t),i&&n.getFirstPartyCookie().setValue("taboola global:user-id",t)),this.userId=t||e||i},extractUserIdFromReferrer:function(){var t=this.getReferrer();if(t&&t.indexOf("taboola")>-1)return this.getParameterByName("ui",t)},getReferrer:function(){return e.referrer},getParameterByName:function(t,e){if(!e||!t)return null;t=t.replace(/[\[\]]/g,"\\$&");var n,i=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null},init:function(){this.initialized||(this.readAndStoreUserId(),this.initialized=!0)}},TRC.tfaUserId.init()}(window,document),function(){var t=window.TRC||{},e="_tfa",n,i,r,o=6*60*60*1e3,a="eng_mt",s=27;function c(t,e,n){var i=t&&t.sessionStartTime?t.sessionStartTime+this.getSessionDuration()-e:this.getSessionDuration();i<0&&(i=0),setTimeout(function(){n(i)},i)}function u(t){return t.ver&&t.ver===this.getDataVersion()}var l=function t(){this.state={}};l.prototype={constructor:l,init:function t(e){var n=window.TRC.eventUtils.getDateNow(),i=this.getSessionDataFromStorage();if(this.getIsLocalStorageAvailable())return c.call(this,i,n,e),i&&i.sessionStartTime?this.state=i:(this.state={ver:s,sessionStartTime:n,scrollDepth:0,sessionDepth:[],timeOnSite:0,numOfTimesMetricsSent:0},this.persistMetricsData()),this},resetStorageMetricData:function e(){var n=t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage");this.state={},n.setValue(a,"")},getSessionDataFromState:function t(){return this.state},getSessionDataFromStorage:function e(){var n,i,o;if(n=t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),r=!!n,o=(i=n&&n.getValue(a))&&t.util.jsonParseWithNative&&t.util.jsonParseWithNative(i)){if(u.call(this,o)&&!this.hasSessionEnded(o))return o;this.resetStorageMetricData()}},hasSessionEnded:function t(e){var n=e?e.sessionStartTime:this.getSessionStartTime();return!n||window.TRC.eventUtils.getDateNow()-n>this.getSessionDuration()},persistMetricsData:function e(){var n=t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),i=this.state;n&&window.__trcJSONify&&n.setValue(a,window.__trcJSONify(i))},persistSpecificMetricsData:function e(n,i){var r=t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),o;r&&window.__trcJSONify&&n&&(o=this.getSessionDataFromStorage())&&(o[n]=i,r.setValue(a,window.__trcJSONify(o)))},updateMetricState:function t(e,n){var i=this.state;e&&(i[e]=n)},getSessionDuration:function t(){return o},getSessionStartTime:function t(){return this.state.sessionStartTime},getScrollDepth:function t(){return this.state.scrollDepth},getTimeOnSite:function t(){return this.state.timeOnSite},getNumOfTimesMetricsSent:function t(){return this.state.numOfTimesMetricsSent},getDataVersion:function(){return s},getIsLocalStorageAvailable:function(){return r}},(i=(n=window[e]=window[e]||[]).TEM=n.TEM||{}).ESU=i.ESU||new l}(),function(){var t="_tfa",e;function n(t,e){this.storageUtils.updateMetricState(t,e),this.storageUtils.persistSpecificMetricsData(t,e)}var i=function t(){};i.prototype={constructor:i,init:function t(e){this.storageUtils=e||{},this.setVisibilityProperties(),this.initMetricData(this.storageUtils),this.initVisibilityListener()},initMetricData:function t(e){this.isPageHidden=document[this.hiddenProp],this.timeOnSite=e.getTimeOnSite()||0,this.lastVisibleStartTime=this.isPageHidden?0:window.TRC.eventUtils.getDateNow()},initVisibilityListener:function t(){document.addEventListener(this.visibilityChangeEventName,this.handleVisibilityChange.bind(this),!1)},setVisibilityProperties:function t(){void 0!==document.hidden?(this.hiddenProp="hidden",this.visibilityChangeEventName="visibilitychange"):void 0!==document.msHidden?(this.hiddenProp="msHidden",this.visibilityChangeEventName="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hiddenProp="webkitHidden",this.visibilityChangeEventName="webkitvisibilitychange")},calcTimeOnSite:function t(){return this.lastVisibleStartTime?this.timeOnSite+(window.TRC.eventUtils.getDateNow()-this.lastVisibleStartTime):this.timeOnSite},handleVisibilityChange:function t(){this.isPageHidden=document[this.hiddenProp],this.isPageHidden?(this.timeOnSite=this.calcTimeOnSite(),n.call(this,"timeOnSite",this.timeOnSite)):this.lastVisibleStartTime=window.TRC.eventUtils.getDateNow()},getTimeOnSite:function t(){return this.isPageHidden?this.timeOnSite:this.calcTimeOnSite()}},(e=window[t]=window[t]||[]).TEM=e.TEM||{},e.TEM.TOS=e.TEM.TOS||new i}(document),function(){var t="_tfa",e,n=!1,i;function r(){return void 0==document.body||void 0==document.documentElement?0:(n=!0,Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight))}function o(t,e){this.storageUtils.updateMetricState(t,e),this.storageUtils.persistSpecificMetricsData(t,e)}function a(t,e){var n;return function(){var i=this,r=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,r)},e)}}var s=function t(){};s.prototype={constructor:s,init:function t(e){this.storageUtils=e||{},this.maxScrollPercentage=this.storageUtils.getScrollDepth()||0,this.initEventListeners(),this.updateMeasurements(),this.calcMaxScrollPercentage()},getScrollDepth:function t(){return n||this.calcMaxScrollPercentage(),this.maxScrollPercentage},initEventListeners:function t(){window.addEventListener("resize",a(this.onResize.bind(this),100)),window.addEventListener("scroll",a(this.onScroll.bind(this),50))},onResize:function t(){this.updateMeasurements()},onScroll:function t(){this.calcMaxScrollPercentage()},updateMeasurements:function t(){this.winHeight=window.innerHeight,this.docHeight=r()},calcMaxScrollPercentage:function t(){var e=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i;n||this.updateMeasurements(),(i=0==this.docHeight?0:Math.floor((e+this.winHeight)/this.docHeight*100))>this.maxScrollPercentage&&(this.maxScrollPercentage=i,o.call(this,"scrollDepth",this.maxScrollPercentage))}},(i=(e=window[t]=window[t]||[]).TEM=e.TEM||{}).SCD=i.SCD||new s}(),function(){var t,e,n=window["_tfa"].TEM,i=function(){};i.prototype={constructor:i,init:function(t,e){this.storageUtils=t,this.refreshFromStorage(),window.TRC.eventUtils.safeAddEventListener(e,this.handleUnipPageView.bind(this))},getKey:function(){return"ssd"},setState:function(t){this.visitedUrls={};for(var e=0;e<t.length;e++)this.visitedUrls[t[e]]=!0},getState:function(){return this.visitedUrls?Object.keys(this.visitedUrls):[]},getMetric:function(){return this.getState().length},persistState:function(){var t="sessionDepth",e=this.getState();this.storageUtils.updateMetricState(t,e),this.storageUtils.persistSpecificMetricsData(t,e)},refreshFromStorage:function(){var t=this.storageUtils.getSessionDataFromStorage(),e;t||(t=this.storageUtils.getSessionDataFromState()),(e=t["sessionDepth"])||(e=[]),this.setState(e)},handleUnipPageView:function(){try{var t=window.location.href;this.visitedUrls[t]||(this.visitedUrls[t]=!0,this.persistState())}catch(t){}}},n.SSD=n.SSD||new i}(),function(){var t="_tfa",e=window[t]=window[t]||[],n,i=e.TEM=e.TEM||{},r=i.ESU||{},o=i.SCD||{},a=i.SSD||{},s=i.TOS||{},c=1500,u="numOfTimesMetricsSent",l="pre_d_eng_tb",f={SESSION_END:"SESSION_END"},h,d;function g(t,e){var n=s.getTimeOnSite(),i=o.getScrollDepth(),c=a.getMetric();return{notify:"event",name:l,tos:n,scd:i,ssd:c,est:r.getSessionStartTime(),ver:r.getDataVersion(),isls:r.getIsLocalStorageAvailable(),src:t,invt:e}}function p(t,e){var i=g(t,e);i.est&&(n.pageViewAccountIds?m(n.pageViewAccountIds,i):v(i))}function m(t,e){var n=Object.keys(t);n.length>0?n.forEach(function(n){e.id=t[n],v(e)}):v(e)}function v(t){n.push(t)}function T(t){clearTimeout(d),i.sendMetrics("se",t),r.resetStorageMetricData()}function S(t){var e=r.getSessionDataFromStorage(),n,o;(isNaN(h)||h<0)&&(h=0),r.hasSessionEnded()||((o=e&&e.numOfTimesMetricsSent!==h)?(h=e.numOfTimesMetricsSent,r.updateMetricState(u,h)):(n=++h,r.updateMetricState(u,n),r.persistSpecificMetricsData(u,n),i.sendMetrics("i",t)),w())}function w(){var t=c*Math.pow(2,h);d=setTimeout(function(){S(t)},t)}function y(){h=r.getNumOfTimesMetricsSent()||0,w()}function R(){i.initialized||(n=e.TUP||{},i.initialized=!0,i.ESU.init(T),i.ESU.getIsLocalStorageAvailable()&&(s.init(r),o.init(r),a.init(r,TRC.sharedEvents.PAGE_VIEW),i.initIntervalTrigger()))}i.init=i.init||R,i.onSessionEndTrigger=i.onSessionEndTrigger||T,i.sendMetrics=i.sendMetrics||p,i.initIntervalTrigger=i.initIntervalTrigger||y,i.EVENTS=i.EVENTS||f}(),function(){var t=TRC.tfaPageManager||{},e="_tfa",n=window[e]=window[e]||[],i={event:I,subscription:E},r=/(\S+)taboola(\S+|)\.com\/libtrc\/unip\/(\S+)\/tfa\.js(\S+|)/,o=["notify","id"],a={name:"en",url:"item-url",referrer:"ref"},s="script[src$='tfa.js']",c=-1,u={defaultProtocol:"https:",host:"trc.taboola.com",httpMethod:"get",loggerEventName:"unip",logToConsole:!0},l={EMPTY_COMMAND:"EMPTY_COMMAND",MISSING_NOTIFY:"MISSING_NOTIFY",INVALID_NOTIFY:"INVALID_NOTIFY",MISSING_NAME:"MISSING_NAME",INVALID_ID:"INVALID_ID"},f={UNIP_TFA_PUSH:"UNIP_TFA_PUSH",TFA_VALIDATION_ERROR:"TFA_VALIDATION_ERROR"},h={page_view:_};function d(){var t=D();t.initialized&&t.domAccountId&&setTimeout(function(){for(var t=D().asyncQueue;t.length;)O(t.shift())},0)}function g(){var t=p(),e;if(t&&(e=t.src.replace(r,"$3")))return/^\d+$/.test(e)?parseInt(e,10):(M("Value '"+e+"' is invalid for 'id' param in script source url '"+t.src+"'. Only numeric values are allowed."),c)}function p(){for(var t=document.querySelectorAll(s),e,n=0;n<t.length;n++)if((e=t[n]).src.indexOf("/unip/")>0)return e}function m(){return window.TRC.eventUtils.getDateNow()}function v(t){t["ce"]="subscr"}function T(e){var n=t.getSessionDataFirstPartyCookie();void 0!==n&&n&&(e["sd"]=n)}function S(t){try{TRC.tfaUserId.getUserId()&&(t["ui"]=TRC.tfaUserId.getUserId())}catch(e){M("Error while trying to add user-id param, params="+JSON.stringify(t),e)}}function w(t){var e=D();e.referrer||(e.referrer=TRC.util.getReferrer()),t[a.referrer]=e.referrer}function y(t){var e={},n=!1,i;for(var r in t.tim=m(),t)!t.hasOwnProperty(r)||o.indexOf(r)>=0||(e[i=a.hasOwnProperty(r)?a[r]:r]=t[r],n=!0);return S(e),w(e),n&&e}function R(t,e){var n=(window.location.protocol||u.defaultProtocol)+"//"+u.host;try{TRC.TRCLogger[u.httpMethod](n,u.loggerEventName,e,t)}catch(n){M("Error while trying to send to server event with id '"+t+"' and params '"+JSON.stringify(e)+"'.",n)}}function I(t){var e=D(),n=t&&t.id||e.domAccountId,i,r;n?n!==c&&(i=y(t),n=parseInt(n,10),r=C(i),h[r]&&h[r](i,n),R(n,i)):e.asyncQueue.push(t)}function C(t){return t[a.name]}function b(t,e){void 0!==t["sourceurl"]&&t["sourceurl"]&&(e["surl"]=t["sourceurl"])}function E(t){var e=D(),n=t&&t.id||e.domAccountId;if(n){if(n!==c){var i=y(t);v(i),T(i),b(t,i),R(parseInt(n,10),i)}}else e.asyncQueue.push(t)}function _(t,e){var n=D();e&&(n.pageViewAccountIds[e]=parseInt(e,10),TRC.eventUtils.dispatchEvent(TRC.sharedEvents.PAGE_VIEW,{accountId:e,publisherIdType:TRC.publisherIdType.ID,eventParams:t,pageViewInitiator:TRC.pageViewInitiator.TFA}))}function N(t){return t?t.notify?i.hasOwnProperty(t.notify)?t.name?!(t.hasOwnProperty("id")&&!/^\d+$/.test(t.id))||(P(l.INVALID_ID,t,"Value '"+t.id+"' is invalid for 'id' field in command '"+JSON.stringify(t)+"'. Only numeric values are allowed."),!1):(P(l.MISSING_NAME,t,"Mandatory 'name' field is missing in command '"+JSON.stringify(t)+"'."),!1):(P(l.INVALID_NOTIFY,t,"Value '"+t.notify+"' is invalid for 'notify' field in command '"+JSON.stringify(t)+"'."),!1):(P(l.MISSING_NOTIFY,t,"Mandatory 'notify' field is missing in command '"+JSON.stringify(t)+"'."),!1):(P(l.EMPTY_COMMAND,t,"Command is '"+t+"'."),!1)}function D(){return window&&window[e]&&window[e].TUP||{}}function O(t){var e=D();if(N(t))try{i[t.notify](t)}catch(e){M("An error occurred while handling command '"+JSON.stringify(t)+"'.",e)}}function P(t,e,n){var i=D();TRC.eventUtils.dispatchEvent(f.TFA_VALIDATION_ERROR,{accountId:i.domAccountId,errorCode:t,command:e}),M(n)}function M(t,e){u.logToConsole&&k(t,e)}function k(t,e){e?console.log("Taboola Pixel: "+t,e):console.log("Taboola Pixel: "+t)}function U(){var t=n.TUP=n.TUP||{},e=n.TEM||{};t.domAccountId=t.domAccountId||g(),window.TRC=window.TRC||{},t.initialized||(t.push=n.TUP.push||O,t.initialized=!0,t.asyncQueue=[],t.EVENTS=f,t.pageViewAccountIds={},e&&e.init&&e.init()),d()}U()}(),function(t,e){var n="_tfa",i={orderid:"orderid",currency:"currency",revenue:"revenue",quantity:"quantity",name:"name",attributionGroup:"attributionGroup"},r={type:"marking-type"},o=(t.location.protocol.match(/http/)?t.location.protocol:"http:")+"//trc.taboola.com/{$publishreId}log/3/{$logType}?",a=/(\S+)taboola(\S+|)\.com\/libtrc\/(\S+)\/tfa\.js(\S+|)/,s="unip/",c=[],u=[],l="http:";function f(t){var e;switch(t.notify){case"action":e=c;break;case"mark":e=u;break;case"event":case"subscription":e=queue.TUP;break;default:return}e&&e.push(t)}function h(){return TRC&&TRC.tfaUserId&&TRC.tfaUserId.getUserId()?"&ui="+encodeURIComponent(TRC.tfaUserId.getUserId()):""}function d(){var t,e,n=y();if(n)for(t=0,e=c.length;t<e;t++)m(p(o,{$publishreId:n?n+"/":"",$logType:"action"})+"tim="+escape(T())+"&item-url="+escape(v())+R(i,c.shift())+S()+h())}function g(){var t,e,n=y();if(n)for(t=0,e=u.length;t<e;t++)m(p(o,{$publishreId:n?n+"/":"",$logType:"mark"})+"tim="+escape(T())+"&item-url="+escape(v())+R(r,u.shift())+S()+h())}function p(t,e){return t.replace(/\{([^{}]*)\}/g,function(t,n){var i=e[n];return"string"==typeof i||"number"==typeof i?i:t})}function m(t){var e;(new Image).src=t}function v(){return t.location.href}function T(){var t=new Date,e=t.getHours(),n=t.getMinutes(),i=t.getSeconds()+t.getMilliseconds()/1e3;return(e<10?"0":"")+e+":"+(n<10?"0":"")+n+":"+(i<10?"0":"")+i.toFixed(3)}function S(){var n=t.location.search,i=e.referrer.match(/(\?\S+)$/g),r="";return r=w(n.replace(/^\?/,"").split(/&/))+(i?w(i[0].replace(/^\?/,"").split(/&/)):"")}function w(t){var e="",n,i,r="trc_";for(n=0,i=t.length;n<i;n++)0==t[n].indexOf(r)&&(e=e+"&"+t[n]);return e}function y(){var t=document.getElementsByTagName("script"),e,n,i="",r;for(e=0,n=t.length;e<n;e++)if(i=(r=t[e].src).replace(a,"$3"),t[e].src&&i!==t[e].src&&i.indexOf(s)<0)return i;return i}function R(t,e){var n,i="";for(n in t)void 0!==e[n]&&(i+="&"+t[n]+"="+e[n]);return i}function I(t){for(var e=0;e<arguments.length;e++)(t=arguments[e])instanceof Object&&f(t);return C(),arguments.length}function C(){d(),g()}function b(){for(;queue.length;)I(queue.shift())}function E(){queue=t[n]=t[n]||[],queue.registered||(queue.push=I,queue.registered=!0,b())}E()}(window,document);