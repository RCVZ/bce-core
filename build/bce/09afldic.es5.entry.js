bce.loadBundle("09afldic",["exports"],function(n){var t=window.bce.h;function e(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.forEach(function(t){i(n,t,e[t])})}return n}var r={},o={};try{"undefined"!=typeof window&&(r=window),"undefined"!=typeof document&&(o=document),"undefined"!=typeof performance&&performance}catch(n){}var s=(r.navigator||{}).userAgent,f=void 0===s?"":s,c=r,l=o,u=!!l.documentElement&&!!l.head&&"function"==typeof l.addEventListener&&"function"==typeof l.createElement,m=(~f.indexOf("MSIE")||f.indexOf("Trident/"),"fa"),d="svg-inline--fa",g="data-fa-i2svg",h=c.FontAwesomeConfig||{};l&&"function"==typeof l.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(n){var t,e,i=(e=2,function(n){if(Array.isArray(n))return n}(t=n)||function(n,t){var e=[],i=!0,a=!1,r=void 0;try{for(var o,s=n[Symbol.iterator]();!(i=(o=s.next()).done)&&(e.push(o.value),!t||e.length!==t);i=!0);}catch(n){a=!0,r=n}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return e}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),a=i[1],r=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=l.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(i[0]));null!=r&&(h[a]=r)});var p=a({},{familyPrefix:m,replacementClass:d,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},h);p.autoReplaceSvg||(p.observeMutations=!1);var b=a({},p);c.FontAwesomeConfig=b;var v=c||{};v.___FONT_AWESOME___||(v.___FONT_AWESOME___={}),v.___FONT_AWESOME___.styles||(v.___FONT_AWESOME___.styles={}),v.___FONT_AWESOME___.hooks||(v.___FONT_AWESOME___.hooks={}),v.___FONT_AWESOME___.shims||(v.___FONT_AWESOME___.shims=[]);var w=v.___FONT_AWESOME___,y=[];u&&((l.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(l.readyState)||l.addEventListener("DOMContentLoaded",function n(){l.removeEventListener("DOMContentLoaded",n),y.map(function(n){return n()})})),"undefined"!=typeof global&&void 0!==global.process&&global;var k={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},x="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _(){for(var n=12,t="";n-- >0;)t+=x[62*Math.random()|0];return t}function O(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e],";")},"")}function z(n){return n.size!==k.size||n.x!==k.x||n.y!==k.y||n.rotate!==k.rotate||n.flipX||n.flipY}function E(n){var t=n.transform,e=n.iconWidth,i={transform:"translate(".concat(n.containerWidth/2," 256)")},a="translate(".concat(32*t.x,", ").concat(32*t.y,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(a," ").concat(r," ").concat(o)},path:{transform:"translate(".concat(e/2*-1," -256)")}}}var C={x:0,y:0,width:"100%",height:"100%"};var A=function(n,t,e,i){var a,r,o,s=Object.keys(n),f=s.length,c=void 0!==i?function(n,t){return function(e,i,a,r){return n.call(t,e,i,a,r)}}(t,i):t;for(void 0===e?(a=1,o=n[s[0]]):(a=0,o=e);a<f;a++)o=c(o,n[r=s[a]],r,n);return o},N=w.styles,S=w.shims,T=function(){var n=function(n){return A(N,function(t,e,i){return t[i]=A(e,n,{}),t},{})};n(function(n,t,e){return t[3]&&(n[t[3]]=e),n}),n(function(n,t,e){var i=t[2];return n[e]=e,i.forEach(function(t){n[t]=e}),n});var t="far"in N;A(S,function(n,e){var i=e[1];return"far"!==i||t||(i="fas"),n[e[0]]={prefix:i,iconName:e[2]},n},{})};function P(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function j(n){var t=n.tag,e=n.attributes,i=void 0===e?{}:e,a=n.children,r=void 0===a?[]:a;return"string"==typeof n?O(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(O(n[e]),'" ')},"").trim()}(i),">").concat(r.map(j).join(""),"</").concat(t,">")}function L(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}T(),(L.prototype=Object.create(Error.prototype)).constructor=L;var I={fill:"currentColor"},W={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},B=(a({},I,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),a({},W,{attributeName:"opacity"})),D=(a({},I,{cx:"256",cy:"364",r:"28"}),a({},W,{attributeName:"r",values:"28;14;28;28;14;28;"}),a({},B,{values:"1;0;1;1;0;1;"}),a({},I,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),a({},B,{values:"1;0;0;0;0;1;"}),a({},I,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),a({},B,{values:"0;0;1;1;0;0;"}),'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}');function F(n){return{found:!0,width:n[0],height:n[1],icon:{tag:"path",attributes:{fill:"currentColor",d:n.slice(4)[0]}}}}function X(n){var t=n.prefix,e=void 0===t?"fa":t,i=n.iconName;if(i)return P(U.definitions,e,i)||P(w.styles,e,i)}var q,H,R,U=new(function(){function n(){!function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.definitions={}}var t,i;return t=n,(i=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(t){n.definitions[t]=a({},n.definitions[t]||{},r[t]),function n(t,e){var i=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==i&&i,o=Object.keys(e).reduce(function(n,t){var i=e[t];return i.icon?n[i.iconName]=i.icon:n[t]=i,n},{});"function"!=typeof w.hooks.addPack||r?w.styles[t]=a({},w.styles[t]||{},o):w.hooks.addPack(t,o),"fas"===t&&n("fa",e)}(t,r[t]),T()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map(function(t){var i=e[t],a=i.prefix,r=i.iconName,o=i.icon;n[a]||(n[a]={}),n[a][r]=o}),n}}])&&e(t.prototype,i),n}()),V=!1,Y=(q=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,i=void 0===e?k:e,r=t.symbol,o=void 0!==r&&r,s=t.mask,f=void 0===s?null:s,c=t.title,h=void 0===c?null:c,p=t.classes,v=void 0===p?[]:p,w=t.attributes,y=void 0===w?{}:w,x=t.styles,O=void 0===x?{}:x;if(n){var A,N=n.prefix,S=n.iconName,T=n.icon;return A=a({type:"icon"},n),Object.defineProperty(A,"abstract",{get:function(){return b.autoAddCss&&!V&&(function(n){if(n&&u){var t=l.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=l.head.childNodes,i=null,a=e.length-1;a>-1;a--){var r=e[a],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}l.head.insertBefore(t,i)}}(function(){var n=d,t=b.familyPrefix,e=b.replacementClass,i=D;if(t!==m||e!==n){var a=new RegExp("\\.".concat(m,"\\-"),"g"),r=new RegExp("\\.".concat(n),"g");i=i.replace(a,".".concat(t,"-")).replace(r,".".concat(e))}return i}()),V=!0),b.autoA11y&&(h?y["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(_()):(y["aria-hidden"]="true",y.focusable="false")),function(n){var t=n.icons,e=t.main,i=t.mask,r=n.prefix,o=n.iconName,s=n.transform,f=n.symbol,c=n.title,l=n.extra,u=n.watchable,m=void 0!==u&&u,d=i.found?i:e,h=d.width,p=d.height,v="fa-w-".concat(Math.ceil(h/p*16)),w=[b.replacementClass,o?"".concat(b.familyPrefix,"-").concat(o):"",v].filter(function(n){return-1===l.classes.indexOf(n)}).concat(l.classes).join(" "),y={children:[],attributes:a({},l.attributes,{"data-prefix":r,"data-icon":o,class:w,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(p)})};m&&(y.attributes[g]=""),c&&y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(_())},children:[c]});var k=a({},y,{prefix:r,iconName:o,main:e,mask:i,transform:s,symbol:f,styles:l.styles}),x=i.found&&e.found?function(n){var t=k.children,e=k.attributes,i=k.main,r=k.mask,o=i.icon,s=r.icon,f=E({transform:k.transform,containerWidth:r.width,iconWidth:i.width}),c={tag:"rect",attributes:a({},C,{fill:"white"})},l={tag:"g",attributes:a({},f.inner),children:[{tag:"path",attributes:a({},o.attributes,f.path,{fill:"black"})}]},u={tag:"g",attributes:a({},f.outer),children:[l]},m="mask-".concat(_()),d="clip-".concat(_()),g={tag:"mask",attributes:a({},C,{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[c,u]};return t.push({tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:[s]},g]},{tag:"rect",attributes:a({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(m,")")},C)}),{children:t,attributes:e}}():function(n){var t=k.children,e=k.attributes,i=k.main,r=k.transform,o=M(k.styles);if(o.length>0&&(e.style=o),z(r)){var s=E({transform:r,containerWidth:i.width,iconWidth:i.width});t.push({tag:"g",attributes:a({},s.outer),children:[{tag:"g",attributes:a({},s.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:a({},i.icon.attributes,s.path)}]}]})}else t.push(i.icon);return{children:t,attributes:e}}(),O=x.attributes;return k.children=x.children,k.attributes=O,f?function(n){var t=k.iconName,e=k.children,i=k.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:a({},k.attributes,{id:!0===i?"".concat(k.prefix,"-").concat(b.familyPrefix,"-").concat(t):i}),children:e}]}]}():function(n){var t=k.children,e=k.main,i=k.mask,r=k.attributes,o=k.styles,s=k.transform;if(z(s)&&e.found&&!i.found){var f={x:e.width/e.height/2,y:.5};r.style=M(a({},o,{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}()}({icons:{main:F(T),mask:f?F(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:S,transform:a({},k,i),symbol:o,title:h,extra:{attributes:y,styles:O,classes:v}})}}),Object.defineProperty(A,"html",{get:function(){return A.abstract.map(function(n){return j(n)})}}),Object.defineProperty(A,"node",{get:function(){if(u){var n=l.createElement("div");return n.innerHTML=A.html,n.children}}}),A}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:X(n||{}),i=t.mask;return i&&(i=(i||{}).icon?i:X(i||{})),q(e,a({},t,{mask:i}))}),Q=(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var e=[],i="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z";t.definition={prefix:"fas",iconName:"question",icon:[384,512,e,"f128",i]},t.faQuestion=t.definition,t.prefix="fas",t.iconName="question",t.width=384,t.height=512,t.ligatures=e,t.unicode="f128",t.svgPathData=i}(H={exports:{}},H.exports),H.exports);(R=Q)&&R.__esModule&&Object.prototype.hasOwnProperty.call(R,"default"),U.add(Q.faQuestion);var K=function(){function n(){this.pre="fas",this.name="question"}return Object.defineProperty(n.prototype,"classes",{get:function(){var n,t=((n={"fa-spin":this.spin,"fa-fw":this["fixed-width"],"fa-li":this["list-item"]})["fa-"+this.size]=void 0!==this.size,n);return Object.keys(t).filter(function(n){return!!t[n]})},enumerable:!0,configurable:!0}),n.prototype.convert=function(n){var e=this,i=(n.children||[]).map(function(n){return e.convert(n)});return t(n.tag,n.attributes,i)},n.prototype.render=function(){var n={prefix:this.pre,iconName:this.name},t=Y(n,{classes:this.classes});return t?this.convert(t.abstract[0]):(console.warn("Could not find one or more icon(s)",n),null)},Object.defineProperty(n,"is",{get:function(){return"bce-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{"fixed-width":{type:Boolean,attr:"fixed-width",reflectToAttr:!0},"list-item":{type:Boolean,attr:"list-item",reflectToAttr:!0},name:{type:String,attr:"name",reflectToAttr:!0},pre:{type:String,attr:"pre",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},spin:{type:Boolean,attr:"spin",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),n}();n.BceIcon=K,Object.defineProperty(n,"__esModule",{value:!0})});