const{isArray:e}=Array,t=[],n=()=>document.createRange(),s=(e,t,n)=>(e.set(t,n),n),r=(e,t,n,s="")=>({t:e,p:t,u:n,n:s}),l=e=>({s:e,t:null,n:null,d:t}),{setPrototypeOf:o}=Object;let i;var c=(e,t,s)=>(i||(i=n()),s?i.setStartAfter(e):i.setStartBefore(e),i.setEndAfter(t),i.deleteContents(),e);const a=({firstChild:e,lastChild:t})=>c(e,t,!0);let u=!1;const h=(e,t)=>u&&11===e.nodeType?1/t<0?t?a(e):e.lastChild:t?e.valueOf():e.firstChild:e;class d extends((e=>{function t(e){return o(e,new.target.prototype)}return t.prototype=e.prototype,t})(DocumentFragment)){#e;#t;constructor(e){super(e),this.#e=[...e.childNodes],this.#t=this.#e.length,u=!0}get firstChild(){return this.#e[0]}get lastChild(){return this.#e.at(-1)}replaceWith(e){a(this).replaceWith(e)}valueOf(){return this.childNodes.length!==this.#t&&this.append(...this.#e),this}}const f=(e,t)=>t.reduceRight(p,e),p=(e,t)=>e.childNodes[t];var g=e=>(n,s)=>{const{c:r,e:l,l:o}=e(n,s),i=r.cloneNode(!0);let c,a,u=l.length,h=u?l.slice(0):t;for(;u--;){const{t:e,p:n,u:r,n:o}=l[u],d=n===a?c:c=f(i,a=n),p=8===e?r():r;h[u]={v:p(d,s[u],o,t),u:p,t:d,n:o}}return((e,t)=>({n:e,d:t}))(1===o?i.firstChild:new d(i),h)};const m=/^(?:plaintext|script|style|textarea|title|xmp)$/i,v=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,b=/<([a-zA-Z0-9]+[a-zA-Z0-9:._-]*)([^>]*?)(\/?)>/g,x=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,$=/[\x01\x02]/g;let w;const C=(t,n,r)=>{r=r.slice(1),w||(w=new WeakMap);const l=w.get(t)||s(w,t,{});let o=l[r];return o&&o[0]&&t.removeEventListener(...o),o=e(n)?n:[n,!1],l[r]=o,o[0]&&t.addEventListener(...o),n},y=(e,t,n)=>e[n]=t,N=(e,t,n)=>y(e,t,n.slice(1)),A=(e,t,n)=>(null==t?e.removeAttribute(n):e.setAttribute(n,t),t),W=(e,t,n)=>(e.toggleAttribute(n.slice(1),t),t),k=(e,n,s,r)=>n.length?((e,t,n,s,r)=>{const l=n.length;let o=t.length,i=l,c=0,a=0,u=null;for(;c<o||a<i;)if(o===c){const t=i<l?a?s(n[a-1],-0).nextSibling:s(n[i-a],0):r;for(;a<i;)e.insertBefore(s(n[a++],1),t)}else if(i===a)for(;c<o;)u&&u.has(t[c])||e.removeChild(s(t[c],-1)),c++;else if(t[c]===n[a])c++,a++;else if(t[o-1]===n[i-1])o--,i--;else if(t[c]===n[i-1]&&n[a]===t[o-1]){const r=s(t[--o],-1).nextSibling;e.insertBefore(s(n[a++],1),s(t[c++],-1).nextSibling),e.insertBefore(s(n[--i],1),r),t[o]=n[i]}else{if(!u){u=new Map;let e=a;for(;e<i;)u.set(n[e],e++)}if(u.has(t[c])){const r=u.get(t[c]);if(a<r&&r<i){let l=c,h=1;for(;++l<o&&l<i&&u.get(t[l])===r+h;)h++;if(h>r-a){const l=s(t[c],0);for(;a<r;)e.insertBefore(s(n[a++],1),l)}else e.replaceChild(s(n[a++],1),s(t[c++],-1))}else c++}else e.removeChild(s(t[c++],-1))}return n})(e.parentNode,r,n,h,e):(r.length&&c(r[0],r.at(-1),!1),t),M=new Map([["aria",(e,t)=>{for(const n in t){const s=t[n],r="role"===n?n:`aria-${n}`;null==s?e.removeAttribute(r):e.setAttribute(r,s)}return t}],["class",(e,t)=>y(e,t,"className")],["data",(e,t)=>{const{dataset:n}=e;for(const e in t)null==t[e]?delete n[e]:n[e]=t[e];return t}],["ref",(e,t)=>("function"==typeof t?t(e):t.current=e,t)],["style",(e,t)=>y(e.style,t,"cssText")]]),E=(e,t)=>{switch(t[0]){case".":return N;case"?":return W;case"@":return C;default:return M.get(t)||(t in e?y:A)}},O=(e,t)=>(e.texContent=null==t?"":t,t);function S(e,t){const n=this.n||(this.n=e);switch(typeof t){case"string":case"number":case"boolean":n!==e&&n.replaceWith(this.n=e),this.n.data=t;break;case"object":case"undefined":null==t?(this.n=e).data="":this.n=t.valueOf(),n.replaceWith(this.n)}return t}let T,B,j=document.createElement("template");var L=(e,t)=>{if(t)return T||(T=document.createElementNS("http://www.w3.org/2000/svg","svg"),B=n(),B.selectNodeContents(T)),B.createContextualFragment(e);j.innerHTML=e;const{content:s}=j;return j=j.cloneNode(!1),s};const z=e=>{const t=[];let n;for(;n=e.parentNode;)t.push(t.indexOf.call(n.childNodes,e)),e=n;return t},F=()=>S.bind({n:null}),R=()=>k,Z=(n,l,o)=>{const i=L(((e,t,n)=>{let s=0;return e.join("").trim().replace(b,((e,t,s,r)=>`<${t}${s.replace(x,"=$2$1").trimEnd()}${r?n||v.test(t)?" /":`></${t}`:""}>`)).replace($,(e=>""===e?`\x3c!--${t+s++}--\x3e`:t+s++))})(n,H,o),o);let c=t;const{length:a}=n;if(a>1){const t=document.createTreeWalker(i,129),n=[];let s=0,o=`${H}${s++}`;for(c=[];s<a;){const i=t.nextNode();if(8===i.nodeType){if(i.data===o){let t=e(l[s-1])?R:F;t===F&&n.push(i),c.push(r(8,z(i),t)),o=`${H}${s++}`}}else{let e;for(;i.hasAttribute(o);){e||(e=z(i));const t=i.getAttribute(o);c.push(r(2,e,E(i,t),t)),i.removeAttribute(o),o=`${H}${s++}`}m.test(i.localName)&&i.textContent.trim()===`\x3c!--${o}--\x3e`&&(c.push(r(3,e||z(i),O)),o=`${H}${s++}`)}}for(s=0;s<n.length;s++)n[s].replaceWith(document.createTextNode(""))}return s(D,n,(u=i,h=c,d=i.childNodes.length,{c:u,e:h,l:d}));var u,h,d},D=new WeakMap,H="isµ";var P=e=>(t,n)=>D.get(t)||Z(t,n,e);const _=g(P(!1)),q=g(P(!0)),G=(e,{s:n,t:s,v:r})=>{r.length&&e.s===t&&(e.s=[]);const l=I(e,r);if(e.t!==s){const{n:t,d:l}=(n?q:_)(s,r);e.t=s,e.n=t,e.d=l}else{const{d:t}=e;for(let e=0;e<l;e++){const n=r[e],s=t[e],{v:l}=s;if(n!==l){const{u:e,t:t,n:r}=s;s.v=e(t,n,r,l)}}}return e.n},I=({s:n},s)=>{const{length:r}=s;for(let o=0;o<r;o++){const r=s[o];r instanceof J?s[o]=G(n[o]||(n[o]=l(t)),r):e(r)?I(n[o]||(n[o]=l([])),r):n[o]=null}return r<n.length&&n.splice(r),r};class J{constructor(e,t,n){this.s=e,this.t=t,this.v=n}}
/*! (c) Andrea Giammarchi - MIT */const K=e=>(t,...n)=>new J(e,t,n),Q=K(!1),U=K(!0),V=new WeakMap;var X=(e,n)=>{const r=V.get(e)||s(V,e,l(t)),o="function"==typeof n?n():n,{n:i}=r,c=o instanceof J?G(r,o):o;return i!==c&&e.replaceChildren(r.n=c),e};const Y=new WeakMap,ee=e=>(n,r)=>{const o=Y.get(n)||s(Y,n,new Map);return o.get(r)||s(o,r,function(t,...n){return G(this,new J(e,t,n))}.bind(l(t)))},te=ee(!1),ne=ee(!0);export{J as Hole,M as attr,Q as html,te as htmlFor,X as render,U as svg,ne as svgFor};