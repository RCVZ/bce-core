const n=window.bce.h;function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),a.forEach(function(t){e(n,t,i[t])})}return n}var a={},r={};try{"undefined"!=typeof window&&(a=window),"undefined"!=typeof document&&(r=document),"undefined"!=typeof performance&&performance}catch(n){}var o=(a.navigator||{}).userAgent,s=void 0===o?"":o,f=a,c=r,l=!!c.documentElement&&!!c.head&&"function"==typeof c.addEventListener&&"function"==typeof c.createElement,m=(~s.indexOf("MSIE")||s.indexOf("Trident/"),"fa"),u="svg-inline--fa",d="data-fa-i2svg",h=f.FontAwesomeConfig||{};c&&"function"==typeof c.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(n){var t,e,i=(e=2,function(n){if(Array.isArray(n))return n}(t=n)||function(n,t){var e=[],i=!0,a=!1,r=void 0;try{for(var o,s=n[Symbol.iterator]();!(i=(o=s.next()).done)&&(e.push(o.value),!t||e.length!==t);i=!0);}catch(n){a=!0,r=n}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return e}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),a=i[1],r=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=c.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(i[0]));null!=r&&(h[a]=r)});var g=i({},{familyPrefix:m,replacementClass:u,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},h);g.autoReplaceSvg||(g.observeMutations=!1);var p=i({},g);f.FontAwesomeConfig=p;var b=f||{};b.___FONT_AWESOME___||(b.___FONT_AWESOME___={}),b.___FONT_AWESOME___.styles||(b.___FONT_AWESOME___.styles={}),b.___FONT_AWESOME___.hooks||(b.___FONT_AWESOME___.hooks={}),b.___FONT_AWESOME___.shims||(b.___FONT_AWESOME___.shims=[]);var v=b.___FONT_AWESOME___,w=[];l&&((c.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(c.readyState)||c.addEventListener("DOMContentLoaded",function n(){c.removeEventListener("DOMContentLoaded",n),w.map(function(n){return n()})})),"undefined"!=typeof global&&void 0!==global.process&&global;var y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},k="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function x(){for(var n=12,t="";n-- >0;)t+=k[62*Math.random()|0];return t}function _(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function O(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e],";")},"")}function z(n){return n.size!==y.size||n.x!==y.x||n.y!==y.y||n.rotate!==y.rotate||n.flipX||n.flipY}function M(n){var t=n.transform,e=n.iconWidth,i={transform:"translate(".concat(n.containerWidth/2," 256)")},a="translate(".concat(32*t.x,", ").concat(32*t.y,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(a," ").concat(r," ").concat(o)},path:{transform:"translate(".concat(e/2*-1," -256)")}}}var E={x:0,y:0,width:"100%",height:"100%"};var A=function(n,t,e,i){var a,r,o,s=Object.keys(n),f=s.length,c=void 0!==i?function(n,t){return function(e,i,a,r){return n.call(t,e,i,a,r)}}(t,i):t;for(void 0===e?(a=1,o=n[s[0]]):(a=0,o=e);a<f;a++)o=c(o,n[r=s[a]],r,n);return o},C=v.styles,N=v.shims,T=function(){var n=function(n){return A(C,function(t,e,i){return t[i]=A(e,n,{}),t},{})};n(function(n,t,e){return t[3]&&(n[t[3]]=e),n}),n(function(n,t,e){var i=t[2];return n[e]=e,i.forEach(function(t){n[t]=e}),n});var t="far"in C;A(N,function(n,e){var i=e[1];return"far"!==i||t||(i="fas"),n[e[0]]={prefix:i,iconName:e[2]},n},{})};function S(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function I(n){var t=n.tag,e=n.attributes,i=void 0===e?{}:e,a=n.children,r=void 0===a?[]:a;return"string"==typeof n?_(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(_(n[e]),'" ')},"").trim()}(i),">").concat(r.map(I).join(""),"</").concat(t,">")}function L(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}T(),(L.prototype=Object.create(Error.prototype)).constructor=L;var P={fill:"currentColor"},j={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},W=(i({},P,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),i({},j,{attributeName:"opacity"})),D=(i({},P,{cx:"256",cy:"364",r:"28"}),i({},j,{attributeName:"r",values:"28;14;28;28;14;28;"}),i({},W,{values:"1;0;1;1;0;1;"}),i({},P,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),i({},W,{values:"1;0;0;0;0;1;"}),i({},P,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),i({},W,{values:"0;0;1;1;0;0;"}),'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}');function F(n){return{found:!0,width:n[0],height:n[1],icon:{tag:"path",attributes:{fill:"currentColor",d:n.slice(4)[0]}}}}function B(n){var t=n.prefix,e=void 0===t?"fa":t,i=n.iconName;if(i)return S(U.definitions,e,i)||S(v.styles,e,i)}var X,U=new(function(){function n(){!function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.definitions={}}var e,a;return e=n,(a=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];var r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(t){n.definitions[t]=i({},n.definitions[t]||{},r[t]),function n(t,e){var a=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==a&&a,o=Object.keys(e).reduce(function(n,t){var i=e[t];return i.icon?n[i.iconName]=i.icon:n[t]=i,n},{});"function"!=typeof v.hooks.addPack||r?v.styles[t]=i({},v.styles[t]||{},o):v.hooks.addPack(t,o),"fas"===t&&n("fa",e)}(t,r[t]),T()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map(function(t){var i=e[t],a=i.prefix,r=i.iconName,o=i.icon;n[a]||(n[a]={}),n[a][r]=o}),n}}])&&t(e.prototype,a),n}()),H=!1,q=(X=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,a=void 0===e?y:e,r=t.symbol,o=void 0!==r&&r,s=t.mask,f=void 0===s?null:s,h=t.title,g=void 0===h?null:h,b=t.classes,v=void 0===b?[]:b,w=t.attributes,k=void 0===w?{}:w,_=t.styles,A=void 0===_?{}:_;if(n){var C,N=n.prefix,T=n.iconName,S=n.icon;return C=i({type:"icon"},n),Object.defineProperty(C,"abstract",{get:function(){return p.autoAddCss&&!H&&(function(n){if(n&&l){var t=c.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=c.head.childNodes,i=null,a=e.length-1;a>-1;a--){var r=e[a],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}c.head.insertBefore(t,i)}}(function(){var n=u,t=p.familyPrefix,e=p.replacementClass,i=D;if(t!==m||e!==n){var a=new RegExp("\\.".concat(m,"\\-"),"g"),r=new RegExp("\\.".concat(n),"g");i=i.replace(a,".".concat(t,"-")).replace(r,".".concat(e))}return i}()),H=!0),p.autoA11y&&(g?k["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(x()):(k["aria-hidden"]="true",k.focusable="false")),function(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,o=n.iconName,s=n.transform,f=n.symbol,c=n.title,l=n.extra,m=n.watchable,u=void 0!==m&&m,h=a.found?a:e,g=h.width,b=h.height,v="fa-w-".concat(Math.ceil(g/b*16)),w=[p.replacementClass,o?"".concat(p.familyPrefix,"-").concat(o):"",v].filter(function(n){return-1===l.classes.indexOf(n)}).concat(l.classes).join(" "),y={children:[],attributes:i({},l.attributes,{"data-prefix":r,"data-icon":o,class:w,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)})};u&&(y.attributes[d]=""),c&&y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(x())},children:[c]});var k=i({},y,{prefix:r,iconName:o,main:e,mask:a,transform:s,symbol:f,styles:l.styles}),_=a.found&&e.found?function(n){var t=k.children,e=k.attributes,a=k.main,r=k.mask,o=a.icon,s=r.icon,f=M({transform:k.transform,containerWidth:r.width,iconWidth:a.width}),c={tag:"rect",attributes:i({},E,{fill:"white"})},l={tag:"g",attributes:i({},f.inner),children:[{tag:"path",attributes:i({},o.attributes,f.path,{fill:"black"})}]},m={tag:"g",attributes:i({},f.outer),children:[l]},u="mask-".concat(x()),d="clip-".concat(x()),h={tag:"mask",attributes:i({},E,{id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[c,m]};return t.push({tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:[s]},h]},{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(u,")")},E)}),{children:t,attributes:e}}():function(n){var t=k.children,e=k.attributes,a=k.main,r=k.transform,o=O(k.styles);if(o.length>0&&(e.style=o),z(r)){var s=M({transform:r,containerWidth:a.width,iconWidth:a.width});t.push({tag:"g",attributes:i({},s.outer),children:[{tag:"g",attributes:i({},s.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:i({},a.icon.attributes,s.path)}]}]})}else t.push(a.icon);return{children:t,attributes:e}}(),A=_.attributes;return k.children=_.children,k.attributes=A,f?function(n){var t=k.iconName,e=k.children,a=k.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i({},k.attributes,{id:!0===a?"".concat(k.prefix,"-").concat(p.familyPrefix,"-").concat(t):a}),children:e}]}]}():function(n){var t=k.children,e=k.main,a=k.mask,r=k.attributes,o=k.styles,s=k.transform;if(z(s)&&e.found&&!a.found){var f={x:e.width/e.height/2,y:.5};r.style=O(i({},o,{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}()}({icons:{main:F(S),mask:f?F(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:T,transform:i({},y,a),symbol:o,title:g,extra:{attributes:k,styles:A,classes:v}})}}),Object.defineProperty(C,"html",{get:function(){return C.abstract.map(function(n){return I(n)})}}),Object.defineProperty(C,"node",{get:function(){if(l){var n=c.createElement("div");return n.innerHTML=C.html,n.children}}}),C}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:B(n||{}),a=t.mask;return a&&(a=(a||{}).icon?a:B(a||{})),X(e,i({},t,{mask:a}))});U.add({prefix:"far",iconName:"square",icon:[448,512,[],"f0c8","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"]});class R{constructor(){this.pre=R.DEFAULT_ICON.prefix,this.name=R.DEFAULT_ICON.iconName}get classes(){const n={"fa-spin":this.spin,"fa-fw":this["fixed-width"],"fa-li":this["list-item"],[`fa-${this.size}`]:void 0!==this.size};return Object.keys(n).filter(t=>!!n[t])}componentWillLoad(){if(!this.raw)return;const[n,t]=this.raw.split(":");this.pre=t?n:this.pre,this.name=t||n,this.raw=void 0}renderIcon(t){const e=(t.children||[]).map(n=>this.renderIcon(n));return n(t.tag,t.attributes,e)}render(){const n={prefix:this.pre,iconName:this.name},t=q(n,{classes:this.classes});if(!t){console.warn("Could not find one or more icon(s)",n);const t=q(R.DEFAULT_ICON,{classes:this.classes});return this.renderIcon(t.abstract[0])}return this.renderIcon(t.abstract[0])}static get is(){return"bce-icon"}static get properties(){return{"fixed-width":{type:Boolean,attr:"fixed-width",reflectToAttr:!0},"list-item":{type:Boolean,attr:"list-item",reflectToAttr:!0},name:{type:String,attr:"name",reflectToAttr:!0,mutable:!0},pre:{type:String,attr:"pre",reflectToAttr:!0,mutable:!0},raw:{type:String,attr:"raw",reflectToAttr:!0,mutable:!0,watchCallbacks:["componentWillLoad"]},size:{type:String,attr:"size",reflectToAttr:!0},spin:{type:Boolean,attr:"spin",reflectToAttr:!0}}}}R.DEFAULT_ICON={prefix:"far",iconName:"square"};export{R as a};