window.Modernizr=function(e,t,n){function r(e){m.cssText=e}function a(e,t){return r(prefixes.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(e,t,r){for(var a in e){var o=t[e[a]];if(o!==n)return r===!1?e[a]:i(o,"function")?o.bind(r||t):o}return!1}var c="2.8.3",l={},u=!0,f=t.documentElement,d="modernizr",p=t.createElement(d),m=p.style,h,g={}.toString,v={svg:"http://www.w3.org/2000/svg"},y={},E={},x={},S=[],b=S.slice,w,T={}.hasOwnProperty,C;C=i(T,"undefined")||i(T.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return T.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=b.call(arguments,1),r=function(){if(this instanceof r){var a=function(){};a.prototype=t.prototype;var i=new a,o=t.apply(i,n.concat(b.call(arguments)));return Object(o)===o?o:i}return t.apply(e,n.concat(b.call(arguments)))};return r}),y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(v.svg,"svg").createSVGRect},y.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==v.svg},y.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(g.call(t.createElementNS(v.svg,"clipPath")))};for(var N in y)C(y,N)&&(w=N.toLowerCase(),l[w]=y[N](),S.push((l[w]?"":"no-")+w));return l.addTest=function(e,t){if("object"==typeof e)for(var r in e)C(e,r)&&l.addTest(r,e[r]);else{if(e=e.toLowerCase(),l[e]!==n)return l;t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(f.className+=" "+(t?"":"no-")+e),l[e]=t}return l},r(""),p=h=null,l._version=c,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+S.join(" "):""),l}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=w.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=S[e[E]];return t||(t={},x++,e[E]=x,S[x]=t),t}function i(e,n,r){if(n||(n=t),b)return n.createElement(e);r||(r=a(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():v.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||g.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function o(e,n){if(e||(e=t),b)return e.createDocumentFragment();n=n||a(e);for(var i=n.frag.cloneNode(),o=0,s=r(),c=s.length;c>o;o++)i.createElement(s[o]);return i}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function c(e){e||(e=t);var r=a(e);return w.shivCSS&&!y&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),b||s(e,r),e}function l(e){for(var t,n=e.getElementsByTagName("*"),a=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),o=[];a--;)t=n[a],i.test(t.nodeName)&&o.push(t.applyElement(u(t)));return o}function u(e){for(var t,n=e.attributes,r=n.length,a=e.ownerDocument.createElement(C+":"+e.nodeName);r--;)t=n[r],t.specified&&a.setAttribute(t.nodeName,t.nodeValue);return a.style.cssText=e.style.cssText,a}function f(e){for(var t,n=e.split("{"),a=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),o="$1"+C+"\\:$2";a--;)t=n[a]=n[a].split("}"),t[t.length-1]=t[t.length-1].replace(i,o),n[a]=t.join("}");return n.join("{")}function d(e){for(var t=e.length;t--;)e[t].removeNode()}function p(e){function t(){clearTimeout(o._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,o=a(e),s=e.namespaces,c=e.parentWindow;return!N||e.printShived?e:("undefined"==typeof s[C]&&s.add(C),c.attachEvent("onbeforeprint",function(){t();for(var a,o,s,c=e.styleSheets,u=[],d=c.length,p=Array(d);d--;)p[d]=c[d];for(;s=p.pop();)if(!s.disabled&&T.test(s.media)){try{a=s.imports,o=a.length}catch(m){o=0}for(d=0;o>d;d++)p.push(a[d]);try{u.push(s.cssText)}catch(m){}}u=f(u.reverse().join("")),i=l(e),r=n(e,u)}),c.attachEvent("onafterprint",function(){d(i),clearTimeout(o._removeSheetTimer),o._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var m="3.7.0",h=e.html5||{},g=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,v=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,y,E="_html5shiv",x=0,S={},b;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",y="hidden"in e,b=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){y=!0,b=!0}}();var w={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:m,shivCSS:h.shivCSS!==!1,supportsUnknownElements:b,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:o};e.html5=w,c(t);var T=/^$|\b(?:all|print)\b/,C="html5shiv",N=!b&&function(){var n=t.documentElement;return"undefined"!=typeof t.namespaces&&"undefined"!=typeof t.parentWindow&&"undefined"!=typeof n.applyElement&&"undefined"!=typeof n.removeNode&&"undefined"!=typeof e.attachEvent}();w.type+=" print",w.shivPrint=p,p(t)}(this,document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function a(e){return"string"==typeof e}function i(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=h.shift();g=1,e?e.t?d(function(){("c"==e.t?j.injectCss:j.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):g=0}function c(e,n,r,a,i,c,l){function u(t){if(!m&&o(f.readyState)&&(x.r=m=1,!g&&s(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&d(function(){E.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var l=l||j.errorTimeout,f=t.createElement(e),m=0,v=0,x={t:r,s:n,e:i,a:c,x:l};1===T[n]&&(v=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,v)},h.splice(a,0,x),"img"!=e&&(v||2===T[n]?(E.insertBefore(f,y?null:p),d(u,l)):T[n].push(f))}function l(e,t,n,r,i){return g=0,t=t||"j",a(e)?c("c"==t?S:x,e,t,this.i++,n,r,i):(h.splice(this.i++,0,e),1==h.length&&s()),this}function u(){var e=j;return e.loader={load:l,i:0},e}var f=t.documentElement,d=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],g=0,v="MozAppearance"in f.style,y=v&&!!t.createRange().compareNode,E=y?f:p.parentNode,f=e.opera&&"[object Opera]"==m.call(e.opera),f=!!t.attachEvent&&!f,x=v?"object":f?"script":"img",S=f?"script":x,b=Array.isArray||function(e){return"[object Array]"==m.call(e)},w=[],T={},C={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},N,j;j=function(e){function t(e){var e=e.split("!"),t=w.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},a,i,o;for(i=0;r>i;i++)o=e[i].split("="),(a=C[o.shift()])&&(n=a(n,o));for(i=0;t>i;i++)n=w[i](n);return n}function o(e,a,i,o,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(a&&(a=r(a)?a:a[e]||a[o]||a[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,a,i,o,s):(T[c.url]?c.noexec=!0:T[c.url]=1,i.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(a)||r(l))&&i.load(function(){u(),a&&a(c.origUrl,s,o),l&&l(c.origUrl,s,o),T[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(a(e))n||(l=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}),o(e,l,t,0,s);else if(Object(e)===e)for(p in d=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--d&&(r(l)?l=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}:l[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(u[p])),o(e[p],l,t,p,s))}else!n&&f()}var s=!!e.test,c=e.load||e.both,l=e.callback||i,u=l,f=e.complete||i,d,p;n(s?e.yep:e.nope,!!c),c&&n(c)}var c,l,f=this.yepnope.loader;if(a(e))o(e,0,f,0);else if(b(e))for(c=0;c<e.length;c++)l=e[c],a(l)?o(l,0,f,0):b(l)?j(l):Object(l)===l&&s(l,f);else Object(e)===e&&s(e,f)},j.addPrefix=function(e,t){C[e]=t},j.addFilter=function(e){w.push(e)},j.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",N=function(){t.removeEventListener("DOMContentLoaded",N,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,a,c,l){var u=t.createElement("script"),f,m,a=a||j.errorTimeout;u.src=e;for(m in r)u.setAttribute(m,r[m]);n=l?s:n||i,u.onreadystatechange=u.onload=function(){!f&&o(u.readyState)&&(f=1,n(),u.onload=u.onreadystatechange=null)},d(function(){f||(f=1,n(1))},a),c?u.onload():p.parentNode.insertBefore(u,p)},e.yepnope.injectCss=function(e,n,r,a,o,c){var a=t.createElement("link"),l,n=c?s:n||i;a.href=e,a.rel="stylesheet",a.type="text/css";for(l in r)a.setAttribute(l,r[l]);o||(p.parentNode.insertBefore(a,p),d(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(e){"use strict";function t(){S(!0)}var n={};e.respond=n,n.update=function(){};var r=[],a=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),i=function(e,t){var n=a();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},o=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=i,n.queue=r,n.unsupportedmq=o,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var s=e.document,c=s.documentElement,l=[],u=[],f=[],d={},p=30,m=s.getElementsByTagName("head")[0]||c,h=s.getElementsByTagName("base")[0],g=m.getElementsByTagName("link"),v,y,E,x=function(){var e,t=s.createElement("div"),n=s.body,r=c.style.fontSize,a=n&&n.style.fontSize,i=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=i=s.createElement("body"),n.style.background="none"),c.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),i&&c.insertBefore(n,c.firstChild),e=t.offsetWidth,i?c.removeChild(n):n.removeChild(t),c.style.fontSize=r,a&&(n.style.fontSize=a),e=E=parseFloat(e)},S=function(t){var n="clientWidth",r=c[n],a="CSS1Compat"===s.compatMode&&r||s.body[n]||r,i={},o=g[g.length-1],d=(new Date).getTime();if(t&&v&&p>d-v)return e.clearTimeout(y),void(y=e.setTimeout(S,p));v=d;for(var h in l)if(l.hasOwnProperty(h)){var b=l[h],w=b.minw,T=b.maxw,C=null===w,N=null===T,j="em";w&&(w=parseFloat(w)*(w.indexOf(j)>-1?E||x():1)),T&&(T=parseFloat(T)*(T.indexOf(j)>-1?E||x():1)),b.hasquery&&(C&&N||!(C||a>=w)||!(N||T>=a))||(i[b.media]||(i[b.media]=[]),i[b.media].push(u[b.rules]))}for(var F in f)f.hasOwnProperty(F)&&f[F]&&f[F].parentNode===m&&m.removeChild(f[F]);f.length=0;for(var O in i)if(i.hasOwnProperty(O)){var z=s.createElement("style"),M=i[O].join("\n");z.type="text/css",z.media=O,m.insertBefore(z,o.nextSibling),z.styleSheet?z.styleSheet.cssText=M:z.appendChild(s.createTextNode(M)),f.push(z)}},b=function(e,t,r){var a=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),i=a&&a.length||0;t=t.substring(0,t.lastIndexOf("/"));var s=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},c=!i&&r;t.length&&(t+="/"),c&&(i=1);for(var f=0;i>f;f++){var d,p,m,h;c?(d=r,u.push(s(e))):(d=a[f].match(n.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&s(RegExp.$2))),m=d.split(","),h=m.length;for(var g=0;h>g;g++)p=m[g],o(p)||l.push({media:p.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:u.length-1,hasquery:p.indexOf("(")>-1,minw:p.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:p.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}S()},w=function(){if(r.length){var t=r.shift();i(t.href,function(n){b(n,t.href,t.media),d[t.href]=!0,e.setTimeout(function(){w()},0)})}},T=function(){for(var t=0;t<g.length;t++){var n=g[t],a=n.href,i=n.media,o=n.rel&&"stylesheet"===n.rel.toLowerCase();a&&o&&!d[a]&&(n.styleSheet&&n.styleSheet.rawCssText?(b(n.styleSheet.rawCssText,a,i),d[a]=!0):(!/^([a-zA-Z:]*\/\/)/.test(a)&&!h||a.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===a.substring(0,2)&&(a=e.location.protocol+a),r.push({href:a,media:i})))}w()};T(),n.update=T,n.getEmValue=x,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);