/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='bce']"));
function e(e,t){return"sc-"+e.t+(t&&t!==i?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t,n,l,i){const r=e.o(t);let a,c,f,u;if(i&&1===r){(c=e.l(t,s))&&(f=c.split("."))[0]===l&&((u={}).vtag=e.s(u.i=t),n.vchildren||(n.vchildren=[]),n.vchildren[f[1]]=u,n=u,i=""!==f[2]);for(let s=0;s<t.childNodes.length;s++)o(e,t.childNodes[s],n,l,i)}else 3===r&&(a=t.previousSibling)&&8===e.o(a)&&"s"===(f=e.u(a).split("."))[0]&&f[1]===l&&((u={vtext:e.u(t)}).i=t,n.vchildren||(n.vchildren=[]),n.vchildren[f[2]]=u)}function l(e,t){let n,o,l=null,s=!1,i=!1,r=arguments.length;for(;r-- >2;)C.push(arguments[r]);for(;C.length>0;){let t=C.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)C.push(t[r]);else"boolean"==typeof t&&(t=null),(i="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(i=!1)),i&&s?l[l.length-1].vtext+=t:null===l?l=[i?{vtext:t}:t]:l.push(i?{vtext:t}:t),s=i}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&C.push(r);t.class=C.join(" "),C.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],W):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,i:void 0,p:!1}}const s="ssrc",i="$",a={},f=(t,n,o,l)=>{let s=o.t+i,r=o[s];if((2===o.v||1===o.v&&!t.M.m)&&(l["s-sc"]=r?e(o,l.mode):e(o)),r){let e=n.g.head,o=t.k.get(e);if(o||t.k.set(e,o={}),!o[s]){let t;{t=r.content.cloneNode(!0),o[s]=!0;const l=e.querySelectorAll("[data-styles]");n.j(e,t,l.length&&l[l.length-1].nextSibling||e.firstChild)}}}},u=e=>null!=e,p=e=>e.toLowerCase(),v=(e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS(b,p(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS(b,p(t),n):e.setAttribute(t,n))},b="http://www.w3.org/1999/xlink",m=(e,t,n,o,l,s,i)=>{if("class"!==n||s)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!s&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.C(t);o&&o.W&&o.W[n]?(M(t,n,l),i&&o.W[n].O&&v(t,o.W[n].N,l,4===o.W[n].S)):"ref"!==n&&(M(t,n,null==l?"":l),null!=l&&!1!==l||e.M.A(t,n))}else null!=l&&"key"!==n?v(t,n,l):(s||e.M.T(t,n)&&(null==l||!1===l))&&e.M.A(t,n);else n=p(n)in t?p(n.substring(2)):p(n[2])+n.substring(3),l?l!==o&&e.M.R(t,n,l,0):e.M.L(t,n,0);else if(o!==l){const e=y(o),n=y(l),s=e.filter(e=>!n.includes(e)),i=y(t.className).filter(e=>!s.includes(e)),r=n.filter(t=>!e.includes(t)&&!i.includes(t));i.push(...r),t.className=i.join(" ")}},y=e=>null==e||""===e?[]:e.trim().split(/\s+/),M=(e,t,n)=>{try{e[t]=n}catch(e){}},$=(e,t,n,o,l)=>{const s=11===n.i.nodeType&&n.i.host?n.i.host:n.i,i=t&&t.vattrs||a,r=n.vattrs||a;for(l in i)r&&null!=r[l]||null==i[l]||m(e,s,l,i[l],void 0,o,n.p);for(l in r)l in i&&r[l]===("value"===l||"checked"===l?s[l]:i[l])||m(e,s,l,i[l],r[l],o,n.p)};let g=!1;const k=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.i),e.vchildren&&e.vchildren.forEach(e=>{k(e,t)}))},j=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),s=!1!==e.asyncQueue,i=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(a);const t=s?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&i.then(()=>p(r))},read:u(a),write:u(c)}}},C=[],W={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},O=(e,t,n)=>{const[o,l,,s,i,r]=e,a={color:{N:"color"}};if(s)for(t=0;t<s.length;t++)a[(n=s[t])[0]]={D:n[1],O:!!n[2],N:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,S:n[4]};return{t:o,q:l,W:Object.assign({},a),v:i,B:r?r.map(N):void 0}},N=e=>({I:e[0],P:e[1],F:!!e[2],H:!!e[3],U:!!e[4]}),E=(e,t)=>u(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,S=(e,t,n)=>{e.Z.add(t),e.G.has(t)||(e.G.set(t,!0),e.J?e.queue.write(()=>A(e,t,n)):e.queue.tick(()=>A(e,t,n)))},A=async(e,n,o,s,i,r)=>{if(e.G.delete(n),!e.K.has(n)){if(!(i=e.V.get(n))){if((r=e.X.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{A(e,n,o)});if(i=q(e,n,e.Y.get(n),o))try{i.componentWillLoad&&await i.componentWillLoad()}catch(t){e._(t,3,n)}}((e,n,o,s)=>{try{const i=n.ee.host,r=n.ee.encapsulation,a=!1;let c,f=o;if(c=((e,t,n)=>(e&&Object.keys(e).forEach(o=>{e[o].reflectToAttr&&((n=n||{})[o]=t[o])}),n))(n.ee.properties,s),!o["s-rn"]){e.te(e,e.M,n,o);const l=o["s-sc"];l&&(e.M.ne(o,t(l,!0)),"scoped"===r&&e.M.ne(o,t(l)))}if(s.render||s.hostData||i||c){e.oe=!0;const t=s.render&&s.render();let n;c&&(n=n?Object.assign(n,c):c),e.oe=!1;const i=l(null,n,t),u=e.le.get(o)||{};u.i=f,i.p=!0,e.le.set(o,e.render(o,u,i,a,r))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(t){e.oe=!1,e._(t,8,o,!0)}})(e,e.C(n),n,i),n["s-init"]()}},T=(e,t,n,o,l,s,i,r,a)=>{if(t.type){const c=e.se.get(n);!t.attr||void 0!==c[l]&&""!==c[l]||(r=s&&s.ie)&&u(a=r[t.attr])&&(c[l]=E(t.type,a)),n.hasOwnProperty(l)&&(void 0===c[l]&&(c[l]=E(t.type,n[l])),"mode"!==l&&delete n[l]),o.hasOwnProperty(l)&&void 0===c[l]&&(c[l]=o[l]),D(o,l,function c(t){return(t=e.se.get(e.re.get(this)))&&t[l]},function f(n,o){(o=e.re.get(this))&&t.mutable&&R(e,o,l,n,i)})}else t.elementRef&&L(o,l,n)},R=(e,t,n,o,l,s,i)=>{(i=e.se.get(t))||e.se.set(t,i={}),o!==i[n]&&(i[n]=o,e.V.get(t)&&!e.oe&&t["s-rn"]&&S(e,t,l))},L=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},D=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},q=(e,t,n,o,l,s)=>{try{l=new(s=e.C(t).ee),((e,t,n,o,l,s)=>{e.re.set(o,n),e.se.has(n)||e.se.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,i])=>{T(e,i,n,o,t,l,s)})})(e,s,t,l,n,o)}catch(n){l={},e._(n,7,t,!0)}return e.V.set(t,l),l},B=(e,t,n,o,l,s)=>{if(e.Z.delete(t),(l=e.X.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.X.delete(t)),e.ae.length&&!e.Z.size)for(;s=e.ae.shift();)s()},I=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.D&&D(n,t,function n(){return(e.se.get(this)||{})[t]},function n(s){R(e,this,t,E(l.S,s),o)})})},P=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.K.delete(n),e.ce.has(n)||(e.fe=!0,e.Z.add(n),e.ce.set(n,!0),((e,t,n)=>{for(n=t;n=e.M.ue(n);)if(e.pe(n)){e.de.has(t)||(e.X.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.Y.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.ve(n)),n["s-cr"]||e.l(n,"ssrv")||e.m&&1===t.v||(n["s-cr"]=e.be(""),n["s-cr"]["s-cn"]=!0,e.j(n,n["s-cr"],e.me(n)[0])),o={ie:{}},t.W&&Object.keys(t.W).forEach(s=>{(l=t.W[s].N)&&(o.ie[l]=e.l(n,l))}),o))(e.M,t,n)),e.ye(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.he&&((e,t)=>{for(;t;){if(!e.Me(t))return 9!==e.o(t);t=e.Me(t)}})(e.M,t)&&(e.K.set(t,!0),B(e,t),k(e.le.get(t),!0),e.M.L(t),e.we.delete(t),[e.X,e.$e,e.Y].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,s)=>{if(e.V.get(t)&&!e.K.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.de.set(t,!0),e.ge.has(t)||(e.ge.set(t,!0),t["s-ld"]=void 0,e.M.ne(t,n));try{k(e.le.get(t)),(s=e.$e.get(t))&&(s.forEach(e=>e(t)),e.$e.delete(t))}catch(n){e._(n,4,t)}B(e,t)}})(e,this,o)},n.forceUpdate=function(){S(e,this,l)},t.W){const o=Object.entries(t.W);{let e={};o.forEach(([t,{N:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[p(n)];l&&(t[l]=o)})(e,this,t,o)}}I(e,o,n,l)}};((e,t,n,s,r,a,c)=>{const d=n.performance,v={html:{}},b=n[e]=n[e]||{},m=((e,t,n)=>{const o=new WeakMap,l={g:n,m:!!n.documentElement.attachShadow,ke:!1,o:e=>e.nodeType,je:e=>n.createElement(e),Ce:(e,t)=>n.createElementNS(e,t),be:e=>n.createTextNode(e),We:e=>n.createComment(e),j:(e,t,n)=>e.insertBefore(t,n),Oe:e=>e.remove(),Ne:(e,t)=>e.appendChild(t),ne:(e,t)=>{e.classList.add(t)},me:e=>e.childNodes,Me:e=>e.parentNode,xe:e=>e.nextSibling,Ee:e=>e.previousSibling,s:e=>p(e.nodeName),u:e=>e.textContent,Se:(e,t)=>e.textContent=t,l:(e,t)=>e.getAttribute(t),Ae:(e,t,n)=>e.setAttribute(t,n),A:(e,t)=>e.removeAttribute(t),T:(e,t)=>e.hasAttribute(t),ve:t=>t.getAttribute("mode")||(e.Context||{}).mode,Te:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.ue(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,R:(t,n,s,i,r,a,c,f,u,p)=>{let d=t,v=s,b=o.get(t);p=n+i,b&&b[p]&&b[p](),"object"==typeof c&&(d=c),d&&(f=l.ke?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,v,f),b||o.set(t,b={}),b[p]=(()=>{d&&e.rel(d,n,v,f),b[p]=null}))},L:(e,t,n,l)=>{(l=o.get(e))&&(t?l[t+n]&&l[t+n]():Object.keys(l).forEach(e=>{l[e]&&l[e]()}))},Re:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),ue:(e,t)=>(t=l.Me(e))&&11===l.o(t)?t.host:t,Le:(e,t,n,o)=>e.setAttributeNS(t,n,o)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),l})(b,n,s),y=m.g.documentElement,h=n["s-defined"]=n["s-defined"]||{},M=(e,t)=>{n.customElements.get(e.t)||(P(w,v[e.t]=e,t.prototype,a,d),t.observedAttributes=Object.values(e.W).map(e=>e.N).filter(e=>!!e),n.customElements.define(e.t,t))},w={M:m,De:M,C:e=>v[m.s(e)],qe:e=>t[e],isClient:!0,pe:e=>!(!h[m.s(e)]&&!w.C(e)),_:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=j(b,n),ye:(e,t)=>{{const n=e.q;let o=r+n+".entry.js";import(o).then(n=>{try{e.ee=n[(e=>p(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,l,s){if(l){const n=t.t+(s||i);if(!t[n]){const o=e.je("template");t[n]=o,o.innerHTML=`<style>${l}</style>`,e.Ne(e.g.head,o)}}}(m,e,e.v,e.ee.style,e.ee.styleMode),S(w,t,d)}catch(t){console.error(t),e.ee=class{}}},e=>console.error(e,o))}},oe:!1,J:!1,he:!1,te:f,X:new WeakMap,k:new WeakMap,ce:new WeakMap,we:new WeakMap,ge:new WeakMap,de:new WeakMap,re:new WeakMap,Y:new WeakMap,V:new WeakMap,K:new WeakMap,G:new WeakMap,$e:new WeakMap,Be:new WeakMap,le:new WeakMap,se:new WeakMap,Z:new Set,ae:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=s,t.resourcesUrl=t.publicPath=r,b.h=l,b.Context=t,b.onReady=(()=>new Promise(e=>w.queue.write(()=>w.Z.size?w.ae.push(e):e()))),w.render=((e,t)=>{let n,o,l,s,i,r,a;const c=(l,p,d,v,b,m,y,h,M)=>{if(h=p.vchildren[d],n||(s=!0,"slot"===h.vtag&&(o&&t.ne(v,o+"-s"),h.vchildren?h.Ie=!0:h.Pe=!0)),u(h.vtext))h.i=t.be(h.vtext);else if(h.Pe)h.i=t.be("");else{if(m=h.i=g||"svg"===h.vtag?t.Ce("http://www.w3.org/2000/svg",h.vtag):t.je(h.Ie?"slot-fb":h.vtag),e.pe(m)&&e.de.delete(a),g="svg"===h.vtag||"foreignObject"!==h.vtag&&g,$(e,null,h,g),u(o)&&m["s-si"]!==o&&t.ne(m,m["s-si"]=o),h.vchildren)for(b=0;b<h.vchildren.length;++b)(y=c(l,h,b,m))&&t.Ne(m,y);"svg"===h.vtag&&(g=!1)}return h.i["s-hn"]=r,(h.Ie||h.Pe)&&(h.i["s-sr"]=!0,h.i["s-cr"]=i,h.i["s-sn"]=h.vname||"",(M=l&&l.vchildren&&l.vchildren[d])&&M.vtag===h.vtag&&l.i&&f(l.i)),h.i},f=(n,o,l,i)=>{e.he=!0;const a=t.me(n);for(l=a.length-1;l>=0;l--)(i=a[l])["s-hn"]!==r&&i["s-ol"]&&(t.Oe(i),t.j(m(i),i,b(i)),t.Oe(i["s-ol"]),i["s-ol"]=null,s=!0),o&&f(i,o);e.he=!1},p=(e,n,o,l,s,i,a,f)=>{const p=e["s-cr"];for((a=p&&t.Me(p)||e).shadowRoot&&t.s(a)===r&&(a=a.shadowRoot);s<=i;++s)l[s]&&(f=u(l[s].vtext)?t.be(l[s].vtext):c(null,o,s,e))&&(l[s].i=f,t.j(a,f,b(n)))},d=(e,n,o,s)=>{for(;n<=o;++n)u(e[n])&&(s=e[n].i,l=!0,s["s-ol"]?t.Oe(s["s-ol"]):f(s,!0),t.Oe(s))},v=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),b=e=>e&&e["s-ol"]?e["s-ol"]:e,m=e=>t.Me(e["s-ol"]?e["s-ol"]:e),y=(n,o,l)=>{const s=o.i=n.i,i=n.vchildren,r=o.vchildren;g=o.i&&u(t.ue(o.i))&&void 0!==o.i.ownerSVGElement,g="svg"===o.vtag||"foreignObject"!==o.vtag&&g,u(o.vtext)?(l=s["s-cr"])?t.Se(t.Me(l),o.vtext):n.vtext!==o.vtext&&t.Se(s,o.vtext):("slot"!==o.vtag&&$(e,n,o,g),u(i)&&u(r)?((e,n,o,l,s,i,r,a)=>{let h=0,M=0,w=n.length-1,$=n[0],g=n[w],k=l.length-1,j=l[0],C=l[k];for(;h<=w&&M<=k;)if(null==$)$=n[++h];else if(null==g)g=n[--w];else if(null==j)j=l[++M];else if(null==C)C=l[--k];else if(v($,j))y($,j),$=n[++h],j=l[++M];else if(v(g,C))y(g,C),g=n[--w],C=l[--k];else if(v($,C))"slot"!==$.vtag&&"slot"!==C.vtag||f(t.Me($.i)),y($,C),t.j(e,$.i,t.xe(g.i)),$=n[++h],C=l[--k];else if(v(g,j))"slot"!==$.vtag&&"slot"!==C.vtag||f(t.Me(g.i)),y(g,j),t.j(e,g.i,$.i),g=n[--w],j=l[++M];else{for(s=null,i=h;i<=w;++i)if(n[i]&&u(n[i].vkey)&&n[i].vkey===j.vkey){s=i;break}u(s)?((a=n[s]).vtag!==j.vtag?r=c(n&&n[M],o,s,e):(y(a,j),n[s]=void 0,r=a.i),j=l[++M]):(r=c(n&&n[M],o,M,e),j=l[++M]),r&&t.j(m($.i),r,b($.i))}h>w?p(e,null==l[k+1]?null:l[k+1].i,o,l,M,k):M>k&&d(n,h,w)})(s,i,o,r):u(r)?(u(n.vtext)&&t.Se(s,""),p(s,null,o,r,0,r.length-1)):u(i)&&d(i,0,i.length-1)),g&&"svg"===o.vtag&&(g=!1)},h=(e,n,o,l,s,i,r,a)=>{for(l=0,s=(o=t.me(e)).length;l<s;l++)if(n=o[l],1===t.o(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,i=0;i<s;i++)if(o[i]["s-hn"]!==n["s-hn"])if(a=t.o(o[i]),""!==r){if(1===a&&r===t.l(o[i],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.u(o[i]).trim()){n.hidden=!0;break}h(n)}},M=[],w=(e,n,o,s,i,r,a,c,f,u)=>{for(i=0,r=(n=t.me(e)).length;i<r;i++){if((o=n[i])["s-sr"]&&(s=o["s-cr"]))for(c=t.me(t.Me(s)),f=o["s-sn"],a=c.length-1;a>=0;a--)(s=c[a])["s-cn"]||s["s-nr"]||s["s-hn"]===o["s-hn"]||((3===(u=t.o(s))||8===u)&&""===f||1===u&&null===t.l(s,"slot")&&""===f||1===u&&t.l(s,"slot")===f)&&(M.some(e=>e.Fe===s)||(l=!0,s["s-sn"]=f,M.push({He:o,Fe:s})));1===t.o(o)&&w(o)}};return(c,f,u,p,d,v,b,m,$,g,k,j)=>{if(a=c,r=t.s(a),i=a["s-cr"],n=p,o=a["s-sc"],s=l=!1,y(f,u),s){for(w(u.i),b=0;b<M.length;b++)(m=M[b]).Fe["s-ol"]||(($=t.be(""))["s-nr"]=m.Fe,t.j(t.Me(m.Fe),m.Fe["s-ol"]=$,m.Fe));for(e.he=!0,b=0;b<M.length;b++){for(m=M[b],k=t.Me(m.He),j=t.xe(m.He),$=m.Fe["s-ol"];$=t.Ee($);)if((g=$["s-nr"])&&g&&g["s-sn"]===m.Fe["s-sn"]&&k===t.Me(g)&&(g=t.xe(g))&&g&&!g["s-nr"]){j=g;break}(!j&&k!==t.Me(m.Fe)||t.xe(m.Fe)!==j)&&m.Fe!==j&&(t.Oe(m.Fe),t.j(k,m.Fe,j))}e.he=!1}return l&&h(u.i),M.length=0,u}})(w,m),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=(()=>{w.de.set(y,b.loaded=w.J=!0),m.Re(n,"appload",{detail:{namespace:e}})}),function k(e,t,n){const l=n.querySelectorAll("[ssrv]"),s=l.length;let i,r,a,c,f,u;if(s>0)for(e.de.set(n,!0),c=0;c<s;c++)for(i=l[c],r=t.l(i,"ssrv"),(a={}).vtag=t.s(a.i=i),e.le.set(i,a),f=0,u=i.childNodes.length;f<u;f++)o(t,i.childNodes[f],a,r,!0)}(w,m,y),c.map(O).forEach(e=>M(e,class extends HTMLElement{})),w.fe||y["s-init"](),((e,t,n,o,l,s)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.C(t);if(o)if(e.de.has(t))n(t);else{const o=e.$e.get(t)||[];o.push(n),e.$e.set(t,o)}return!!o}),l){for(s=l.length-1;s>=0;s--)t.componentOnReady(l[s][0],l[s][1])&&l.splice(s,1);for(s=0;s<o.length;s++)if(!n[o[s]].componentOnReady)return;for(s=0;s<l.length;s++)l[s][1](null);l.length=0}})(w,b,n,n["s-apps"],n["s-cr"]),b.initialized=!0,w})(n,x,w,d,r,h,c);
})(window,document,{},"bce","hydrated",[["bce-header","gxduzvmo",1,[["color",1,1,1,2]]],["bce-icon","09afldic",0,[["fixed-width",1,1,1,4],["list-item",1,1,1,4],["name",1,1,1,2],["pre",1,1,1,2],["size",1,1,1,2],["spin",1,1,1,4]]],["bce-input","dmbt8b1p",1,[["color",1,1,1,2],["el",64],["hasFocus",2,1,"focus",4],["label",1,1,1,2],["type",1,1,1,2],["value",2,0,1,2]]],["bce-root","benplnyz",1],["bce-status-bar","o2xphh4m",1,[["color",1,1,1,2]]],["bce-switch","fbuo4f9f",1,[["color",1,1,1,2],["el",64],["value",2,0,1,4]]]]);