/*! (c) Andrea Giammarchi */
let e=null;const t=t=>{let n=e;n||(e=new Set);try{t()}finally{if(!n){[e,n]=[null,e];for(const e of n)e._()}}},n=e=>{const t=[...e];return e.clear(),t};class r extends Set{constructor(e){super()._=e}dispose(){for(const e of n(this))e.delete(this),e.dispose?.()}}let s=null;const o=e=>{const t=new r((()=>{const n=s;s=t;try{e()}finally{s=n}}));return t},l=(e,t)=>{const n=o((()=>{t=e(t)}));return s&&s.add(n),n._(),()=>n.dispose()};class i extends Set{constructor(e){super()._=e}get value(){return s&&s.add(this.add(s)),this._}set value(t){if(this._!==t){this._=t;const r=!e;for(const t of n(this))r?t._():e.add(t)}}peek(){return this._}toJSON(){return this.value}valueOf(){return this.value}toString(){return String(this.value)}}const c=e=>new i(e);class a extends i{constructor(e,t){super(t).f=e,this.e=null}get value(){return this.e||(this.e=o((()=>{super.value=this.f(this._)})))._(),super.value}set value(e){throw new Error("computed is read-only")}}const u=(e,t)=>new a(e,t),{isArray:h}=Array,{getPrototypeOf:d,getOwnPropertyDescriptor:f}=Object,p=[],g=()=>document.createRange(),v=(e,t,n)=>(e.set(t,n),n),m=(e,t,n,r="")=>({t:e,p:t,u:n,n:r}),w=e=>({s:e,t:null,n:null,d:p}),{setPrototypeOf:y}=Object;let x;const b=({firstChild:e,lastChild:t},n)=>((e,t,n)=>(x||(x=g()),n?x.setStartAfter(e):x.setStartBefore(e),x.setEndAfter(t),x.deleteContents(),e))(e,t,n);let $=!1;const N=(e,t)=>$&&11===e.nodeType?1/t<0?t?b(e,!0):e.lastChild:t?e.valueOf():e.firstChild:e;class C extends((e=>{function t(e){return y(e,new.target.prototype)}return t.prototype=e.prototype,t})(DocumentFragment)){#e;#t;constructor(e){const t=[...e.childNodes];super(e),this.#e=t,this.#t=t.length,$=!0}get firstChild(){return this.#e[0]}get lastChild(){return this.#e.at(-1)}get parentNode(){return this.#e[0].parentNode}remove(){b(this,!1)}replaceWith(e){b(this,!0).replaceWith(e)}valueOf(){return this.childNodes.length!==this.#t&&this.replaceChildren(...this.#e),this}}const S=(e,t)=>t.reduceRight(k,e),k=(e,t)=>e.childNodes[t];var W=e=>(t,n)=>{const{c:r,e:s,l:o}=e(t,n),l=r.cloneNode(!0);let i,c,a=s.length,u=a?s.slice(0):p;for(;a--;){const{t:e,p:t,u:r,n:o}=s[a],h=t===c?i:i=S(l,c=t),d=8===e?r():r;u[a]={v:d(h,n[a],o,p),u:d,t:h,n:o}}return((e,t)=>({n:e,d:t}))(1===o?l.firstChild||i:new C(l),u)};const O=/^(?:plaintext|script|style|textarea|title|xmp)$/i,_=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,A=/<([a-zA-Z0-9]+[a-zA-Z0-9:._-]*)([^>]*?)(\/?)>/g,M=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,E=/[\x01\x02]/g;const T=(e,t,n)=>e.setAttribute(t,n),j=(e,t)=>e.removeAttribute(t),B=()=>V;let P;const R=(e,t,n)=>{n=n.slice(1),P||(P=new WeakMap);const r=P.get(e)||v(P,e,{});let s=r[n];return s&&s[0]&&e.removeEventListener(n,...s),s=h(t)?t:[t,!1],r[n]=s,s[0]&&e.addEventListener(n,...s),t};function z(e,t){const n=this.n||(this.n=e);switch(typeof t){case"string":case"number":case"boolean":n!==e&&n.replaceWith(this.n=e),this.n.data=t;break;case"object":case"undefined":null==t?(this.n=e).data="":this.n=t.valueOf(),n.replaceWith(this.n)}return t}const F=()=>z.bind({n:null}),L=(e,t,n)=>e[n]=t,D=(e,t,n)=>L(e,t,n.slice(1)),H=(e,t,n)=>null==t?(j(e,n),t):L(e,t,n),Z=(e,t)=>("function"==typeof t?t(e):t.current=e,t),G=(e,t,n)=>(null==t?j(e,n):T(e,n,t),t),J=(e,t,n)=>(e.toggleAttribute(n.slice(1),t),t),V=(e,t,n,r)=>((e,t,n,r,s)=>{const o=n.length;let l=t.length,i=o,c=0,a=0,u=null;for(;c<l||a<i;)if(l===c){const t=i<o?a?r(n[a-1],-0).nextSibling:r(n[i-a],0):s;for(;a<i;)e.insertBefore(r(n[a++],1),t)}else if(i===a)for(;c<l;)u&&u.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[a])c++,a++;else if(t[l-1]===n[i-1])l--,i--;else if(t[c]===n[i-1]&&n[a]===t[l-1]){const s=r(t[--l],-1).nextSibling;e.insertBefore(r(n[a++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--i],1),s),t[l]=n[i]}else{if(!u){u=new Map;let e=a;for(;e<i;)u.set(n[e],e++)}if(u.has(t[c])){const s=u.get(t[c]);if(a<s&&s<i){let o=c,h=1;for(;++o<l&&o<i&&u.get(t[o])===s+h;)h++;if(h>s-a){const o=r(t[c],0);for(;a<s;)e.insertBefore(r(n[a++],1),o)}else e.replaceChild(r(n[a++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n})(e.parentNode,r,t.length?t:p,N,e),q=new Map([["aria",(e,t)=>{for(const n in t){const r=t[n],s="role"===n?n:`aria-${n}`;null==r?j(e,s):T(e,s,r)}return t}],["class",(e,t)=>H(e,t,null==t?"class":"className")],["data",(e,t)=>{const{dataset:n}=e;for(const e in t)null==t[e]?delete n[e]:n[e]=t[e];return t}],["ref",Z],["style",(e,t)=>null==t?H(e,t,"style"):L(e.style,t,"cssText")]]),I=(e,t,n)=>{switch(t[0]){case".":return D;case"?":return J;case"@":return R;default:return n||"ownerSVGElement"in e?"ref"===t?Z:G:q.get(t)||(t in e?t.startsWith("on")?L:((e,t)=>{let n;do{n=f(e,t)}while(!n&&(e=d(e)));return n})(e,t)?.set?H:G:G)}},K=(e,t)=>(e.textContent=null==t?"":t,t);let Q,U,X=document.createElement("template");var Y=(e,t)=>{if(t)return Q||(Q=document.createElementNS("http://www.w3.org/2000/svg","svg"),U=g(),U.selectNodeContents(Q)),U.createContextualFragment(e);X.innerHTML=e;const{content:n}=X;return X=X.cloneNode(!1),n};const ee=e=>{const t=[];let n;for(;n=e.parentNode;)t.push(t.indexOf.call(n.childNodes,e)),e=n;return t},te=(e,t,n)=>{const r=Y(((e,t,n)=>{let r=0;return e.join("").trim().replace(A,((e,t,r,s)=>`<${t}${r.replace(M,"=$2$1").trimEnd()}${s?n||_.test(t)?" /":`></${t}`:""}>`)).replace(E,(e=>""===e?`\x3c!--${t+r++}--\x3e`:t+r++))})(e,re,n),n),{length:s}=e;let o=!1,l=p;if(s>1){const e=document.createTreeWalker(r,129),i=[];let c=0,a=`${re}${c++}`;for(l=[];c<s;){const r=e.nextNode();if(8===r.nodeType){if(r.data===a){let e=h(t[c-1])?B:F;e===F?i.push(r):o=!0,l.push(m(8,ee(r),e)),a=`${re}${c++}`}}else{let e;for(;r.hasAttribute(a);){e||(e=ee(r));const t=r.getAttribute(a);l.push(m(2,e,I(r,t,n),t)),j(r,a),a=`${re}${c++}`}O.test(r.localName)&&r.textContent.trim()===`\x3c!--${a}--\x3e`&&(l.push(m(3,e||ee(r),K)),a=`${re}${c++}`)}}for(c=0;c<i.length;c++)i[c].replaceWith(document.createTextNode(""))}const i=r.childNodes.length;return v(ne,e,((e,t,n)=>({c:e,e:t,l:n}))(r,l,1===i&&o?0:i))},ne=new WeakMap,re="isµ";var se=e=>(t,n)=>ne.get(t)||te(t,n,e);const oe=W(se(!1)),le=W(se(!0)),ie=(e,{s:t,t:n,v:r})=>{r.length&&e.s===p&&(e.s=[]);const s=ce(e,r);if(e.t!==n){const{n:s,d:o}=(t?le:oe)(n,r);e.t=n,e.n=s,e.d=o}else{const{d:t}=e;for(let e=0;e<s;e++){const n=r[e],s=t[e],{v:o}=s;if(n!==o){const{u:e,t:t,n:r}=s;s.v=e(t,n,r,o)}}}return e.n},ce=({s:e},t)=>{const{length:n}=t;for(let r=0;r<n;r++){const n=t[r];n instanceof ae?t[r]=ie(e[r]||(e[r]=w(p)),n):h(n)?ce(e[r]||(e[r]=w([])),n):e[r]=null}return n<e.length&&e.splice(n),n};class ae{constructor(e,t,n){this.s=e,this.t=t,this.v=n}}
/*! (c) Andrea Giammarchi - MIT */const ue=e=>(t,...n)=>new ae(e,t,n),he=ue(!1),de=ue(!0),fe=new WeakMap;var pe=(e,t,n)=>{const r=fe.get(e)||v(fe,e,w(p)),s=n&&"function"==typeof t?t():t,{n:o}=r,l=s instanceof ae?ie(r,s):s;return o!==l&&e.replaceChildren(r.n=l),e};
/*! (c) Andrea Giammarchi - MIT */const ge=new WeakMap,ve=e=>(t,n)=>{const r=ge.get(t)||v(ge,t,new Map);return r.get(n)||v(r,n,function(t,...n){return ie(this,new ae(e,t,n))}.bind(w(p)))},me=ve(!1),we=ve(!0),ye=new FinalizationRegistry((([e,t,n])=>{n&&console.debug(`Held value ${String(t)} not relevant anymore`),e(t)})),xe=Object.create(null),be=new WeakMap,$e=e=>e();const Ne=(e=>(t,n)=>{let r=be.get(t);var s;if(r&&(s=r,ye.unregister(s),r()),"function"==typeof n){const s=new WeakRef(t);return r=e((()=>{pe(s.deref(),n(),!1)})),be.set(t,r),((e,t,{debug:n,return:r,token:s=e}=xe)=>{const o=r||new Proxy(e,xe),l=[o,[t,e,!!n]];return!1!==s&&l.push(s),ye.register(...l),o})(r,$e,{return:t})}return be.delete(t),pe(t,n,!1)})(l);export{a as Computed,ae as Hole,i as Signal,q as attr,t as batch,u as computed,l as effect,he as html,me as htmlFor,Ne as render,c as signal,de as svg,we as svgFor};
