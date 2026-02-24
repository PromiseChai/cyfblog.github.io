(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ns(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const V={},it=[],Ee=()=>{},Hi=()=>!1,es=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ds=e=>e.startsWith("onUpdate:"),Z=Object.assign,js=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Bn=Object.prototype.hasOwnProperty,H=(e,t)=>Bn.call(e,t),I=Array.isArray,nt=e=>Rt(e)==="[object Map]",Li=e=>Rt(e)==="[object Set]",li=e=>Rt(e)==="[object Date]",R=e=>typeof e=="function",G=e=>typeof e=="string",Pe=e=>typeof e=="symbol",$=e=>e!==null&&typeof e=="object",Fi=e=>($(e)||R(e))&&R(e.then)&&R(e.catch),$i=Object.prototype.toString,Rt=e=>$i.call(e),Jn=e=>Rt(e).slice(8,-1),ki=e=>Rt(e)==="[object Object]",Hs=e=>G(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yt=Ns(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ts=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Kn=/-\w/g,Be=ts(e=>e.replace(Kn,t=>t.slice(1).toUpperCase())),qn=/\B([A-Z])/g,et=ts(e=>e.replace(qn,"-$1").toLowerCase()),Ui=ts(e=>e.charAt(0).toUpperCase()+e.slice(1)),ds=ts(e=>e?`on${Ui(e)}`:""),Ve=(e,t)=>!Object.is(e,t),hs=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Wi=(e,t,s,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:s})},Gn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oi;const ss=()=>oi||(oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ls(e){if(I(e)){const t={};for(let s=0;s<e.length;s++){const i=e[s],n=G(i)?Xn(i):Ls(i);if(n)for(const r in n)t[r]=n[r]}return t}else if(G(e)||$(e))return e}const zn=/;(?![^(]*\))/g,Qn=/:([^]+)/,Yn=/\/\*[^]*?\*\//g;function Xn(e){const t={};return e.replace(Yn,"").split(zn).forEach(s=>{if(s){const i=s.split(Qn);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ut(e){let t="";if(G(e))t=e;else if(I(e))for(let s=0;s<e.length;s++){const i=ut(e[s]);i&&(t+=i+" ")}else if($(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Zn="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",er=Ns(Zn);function Vi(e){return!!e||e===""}function tr(e,t){if(e.length!==t.length)return!1;let s=!0;for(let i=0;s&&i<e.length;i++)s=Fs(e[i],t[i]);return s}function Fs(e,t){if(e===t)return!0;let s=li(e),i=li(t);if(s||i)return s&&i?e.getTime()===t.getTime():!1;if(s=Pe(e),i=Pe(t),s||i)return e===t;if(s=I(e),i=I(t),s||i)return s&&i?tr(e,t):!1;if(s=$(e),i=$(t),s||i){if(!s||!i)return!1;const n=Object.keys(e).length,r=Object.keys(t).length;if(n!==r)return!1;for(const l in e){const o=e.hasOwnProperty(l),a=t.hasOwnProperty(l);if(o&&!a||!o&&a||!Fs(e[l],t[l]))return!1}}return String(e)===String(t)}const Bi=e=>!!(e&&e.__v_isRef===!0),he=e=>G(e)?e:e==null?"":I(e)||$(e)&&(e.toString===$i||!R(e.toString))?Bi(e)?he(e.value):JSON.stringify(e,Ji,2):String(e),Ji=(e,t)=>Bi(t)?Ji(e,t.value):nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[i,n],r)=>(s[ps(i,r)+" =>"]=n,s),{})}:Li(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>ps(s))}:Pe(t)?ps(t):$(t)&&!I(t)&&!ki(t)?String(t):t,ps=(e,t="")=>{var s;return Pe(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ce;class sr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ce,!t&&ce&&(this.index=(ce.scopes||(ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=ce;try{return ce=this,t()}finally{ce=s}}}on(){++this._on===1&&(this.prevScope=ce,ce=this)}off(){this._on>0&&--this._on===0&&(ce=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function ir(){return ce}let W;const gs=new WeakSet;class Ki{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ce&&ce.active&&ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gs.has(this)&&(gs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ci(this),zi(this);const t=W,s=ge;W=this,ge=!0;try{return this.fn()}finally{Qi(this),W=t,ge=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Us(t);this.deps=this.depsTail=void 0,ci(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ss(this)&&this.run()}get dirty(){return Ss(this)}}let qi=0,xt,St;function Gi(e,t=!1){if(e.flags|=8,t){e.next=St,St=e;return}e.next=xt,xt=e}function $s(){qi++}function ks(){if(--qi>0)return;if(St){let t=St;for(St=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;xt;){let t=xt;for(xt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=s}}if(e)throw e}function zi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Qi(e){let t,s=e.depsTail,i=s;for(;i;){const n=i.prevDep;i.version===-1?(i===s&&(s=n),Us(i),nr(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=n}e.deps=t,e.depsTail=s}function Ss(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Yi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Pt)||(e.globalVersion=Pt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ss(e))))return;e.flags|=2;const t=e.dep,s=W,i=ge;W=e,ge=!0;try{zi(e);const n=e.fn(e._value);(t.version===0||Ve(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{W=s,ge=i,Qi(e),e.flags&=-3}}function Us(e,t=!1){const{dep:s,prevSub:i,nextSub:n}=e;if(i&&(i.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=i,e.nextSub=void 0),s.subs===e&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)Us(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function nr(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let ge=!0;const Xi=[];function Ne(){Xi.push(ge),ge=!1}function De(){const e=Xi.pop();ge=e===void 0?!0:e}function ci(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=W;W=void 0;try{t()}finally{W=s}}}let Pt=0;class rr{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ws{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!W||!ge||W===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==W)s=this.activeLink=new rr(W,this),W.deps?(s.prevDep=W.depsTail,W.depsTail.nextDep=s,W.depsTail=s):W.deps=W.depsTail=s,Zi(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=W.depsTail,s.nextDep=void 0,W.depsTail.nextDep=s,W.depsTail=s,W.deps===s&&(W.deps=i)}return s}trigger(t){this.version++,Pt++,this.notify(t)}notify(t){$s();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{ks()}}}function Zi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Zi(i)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Cs=new WeakMap,Ye=Symbol(""),ws=Symbol(""),At=Symbol("");function Y(e,t,s){if(ge&&W){let i=Cs.get(e);i||Cs.set(e,i=new Map);let n=i.get(s);n||(i.set(s,n=new Ws),n.map=i,n.key=s),n.track()}}function Re(e,t,s,i,n,r){const l=Cs.get(e);if(!l){Pt++;return}const o=a=>{a&&a.trigger()};if($s(),t==="clear")l.forEach(o);else{const a=I(e),h=a&&Hs(s);if(a&&s==="length"){const u=Number(i);l.forEach((p,C)=>{(C==="length"||C===At||!Pe(C)&&C>=u)&&o(p)})}else switch((s!==void 0||l.has(void 0))&&o(l.get(s)),h&&o(l.get(At)),t){case"add":a?h&&o(l.get("length")):(o(l.get(Ye)),nt(e)&&o(l.get(ws)));break;case"delete":a||(o(l.get(Ye)),nt(e)&&o(l.get(ws)));break;case"set":nt(e)&&o(l.get(Ye));break}}ks()}function tt(e){const t=j(e);return t===e?t:(Y(t,"iterate",At),pe(e)?t:t.map(me))}function is(e){return Y(e=j(e),"iterate",At),e}function ke(e,t){return je(e)?ct(Xe(e)?me(t):t):me(t)}const lr={__proto__:null,[Symbol.iterator](){return ms(this,Symbol.iterator,e=>ke(this,e))},concat(...e){return tt(this).concat(...e.map(t=>I(t)?tt(t):t))},entries(){return ms(this,"entries",e=>(e[1]=ke(this,e[1]),e))},every(e,t){return Me(this,"every",e,t,void 0,arguments)},filter(e,t){return Me(this,"filter",e,t,s=>s.map(i=>ke(this,i)),arguments)},find(e,t){return Me(this,"find",e,t,s=>ke(this,s),arguments)},findIndex(e,t){return Me(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Me(this,"findLast",e,t,s=>ke(this,s),arguments)},findLastIndex(e,t){return Me(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Me(this,"forEach",e,t,void 0,arguments)},includes(...e){return vs(this,"includes",e)},indexOf(...e){return vs(this,"indexOf",e)},join(e){return tt(this).join(e)},lastIndexOf(...e){return vs(this,"lastIndexOf",e)},map(e,t){return Me(this,"map",e,t,void 0,arguments)},pop(){return mt(this,"pop")},push(...e){return mt(this,"push",e)},reduce(e,...t){return ai(this,"reduce",e,t)},reduceRight(e,...t){return ai(this,"reduceRight",e,t)},shift(){return mt(this,"shift")},some(e,t){return Me(this,"some",e,t,void 0,arguments)},splice(...e){return mt(this,"splice",e)},toReversed(){return tt(this).toReversed()},toSorted(e){return tt(this).toSorted(e)},toSpliced(...e){return tt(this).toSpliced(...e)},unshift(...e){return mt(this,"unshift",e)},values(){return ms(this,"values",e=>ke(this,e))}};function ms(e,t,s){const i=is(e),n=i[t]();return i!==e&&!pe(e)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=s(r.value)),r}),n}const or=Array.prototype;function Me(e,t,s,i,n,r){const l=is(e),o=l!==e&&!pe(e),a=l[t];if(a!==or[t]){const p=a.apply(e,r);return o?me(p):p}let h=s;l!==e&&(o?h=function(p,C){return s.call(this,ke(e,p),C,e)}:s.length>2&&(h=function(p,C){return s.call(this,p,C,e)}));const u=a.call(l,h,i);return o&&n?n(u):u}function ai(e,t,s,i){const n=is(e);let r=s;return n!==e&&(pe(e)?s.length>3&&(r=function(l,o,a){return s.call(this,l,o,a,e)}):r=function(l,o,a){return s.call(this,l,ke(e,o),a,e)}),n[t](r,...i)}function vs(e,t,s){const i=j(e);Y(i,"iterate",At);const n=i[t](...s);return(n===-1||n===!1)&&Ks(s[0])?(s[0]=j(s[0]),i[t](...s)):n}function mt(e,t,s=[]){Ne(),$s();const i=j(e)[t].apply(e,s);return ks(),De(),i}const cr=Ns("__proto__,__v_isRef,__isVue"),en=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pe));function ar(e){Pe(e)||(e=String(e));const t=j(this);return Y(t,"has",e),t.hasOwnProperty(e)}class tn{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,i){if(s==="__v_skip")return t.__v_skip;const n=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return r;if(s==="__v_raw")return i===(n?r?br:ln:r?rn:nn).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const l=I(t);if(!n){let a;if(l&&(a=lr[s]))return a;if(s==="hasOwnProperty")return ar}const o=Reflect.get(t,s,X(t)?t:i);if((Pe(s)?en.has(s):cr(s))||(n||Y(t,"get",s),r))return o;if(X(o)){const a=l&&Hs(s)?o:o.value;return n&&$(a)?Es(a):a}return $(o)?n?Es(o):Bs(o):o}}class sn extends tn{constructor(t=!1){super(!1,t)}set(t,s,i,n){let r=t[s];const l=I(t)&&Hs(s);if(!this._isShallow){const h=je(r);if(!pe(i)&&!je(i)&&(r=j(r),i=j(i)),!l&&X(r)&&!X(i))return h||(r.value=i),!0}const o=l?Number(s)<t.length:H(t,s),a=Reflect.set(t,s,i,X(t)?t:n);return t===j(n)&&(o?Ve(i,r)&&Re(t,"set",s,i):Re(t,"add",s,i)),a}deleteProperty(t,s){const i=H(t,s);t[s];const n=Reflect.deleteProperty(t,s);return n&&i&&Re(t,"delete",s,void 0),n}has(t,s){const i=Reflect.has(t,s);return(!Pe(s)||!en.has(s))&&Y(t,"has",s),i}ownKeys(t){return Y(t,"iterate",I(t)?"length":Ye),Reflect.ownKeys(t)}}class fr extends tn{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const ur=new sn,dr=new fr,hr=new sn(!0);const Ts=e=>e,kt=e=>Reflect.getPrototypeOf(e);function pr(e,t,s){return function(...i){const n=this.__v_raw,r=j(n),l=nt(r),o=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,h=n[e](...i),u=s?Ts:t?ct:me;return!t&&Y(r,"iterate",a?ws:Ye),Z(Object.create(h),{next(){const{value:p,done:C}=h.next();return C?{value:p,done:C}:{value:o?[u(p[0]),u(p[1])]:u(p),done:C}}})}}function Ut(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function gr(e,t){const s={get(n){const r=this.__v_raw,l=j(r),o=j(n);e||(Ve(n,o)&&Y(l,"get",n),Y(l,"get",o));const{has:a}=kt(l),h=t?Ts:e?ct:me;if(a.call(l,n))return h(r.get(n));if(a.call(l,o))return h(r.get(o));r!==l&&r.get(n)},get size(){const n=this.__v_raw;return!e&&Y(j(n),"iterate",Ye),n.size},has(n){const r=this.__v_raw,l=j(r),o=j(n);return e||(Ve(n,o)&&Y(l,"has",n),Y(l,"has",o)),n===o?r.has(n):r.has(n)||r.has(o)},forEach(n,r){const l=this,o=l.__v_raw,a=j(o),h=t?Ts:e?ct:me;return!e&&Y(a,"iterate",Ye),o.forEach((u,p)=>n.call(r,h(u),h(p),l))}};return Z(s,e?{add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear")}:{add(n){!t&&!pe(n)&&!je(n)&&(n=j(n));const r=j(this);return kt(r).has.call(r,n)||(r.add(n),Re(r,"add",n,n)),this},set(n,r){!t&&!pe(r)&&!je(r)&&(r=j(r));const l=j(this),{has:o,get:a}=kt(l);let h=o.call(l,n);h||(n=j(n),h=o.call(l,n));const u=a.call(l,n);return l.set(n,r),h?Ve(r,u)&&Re(l,"set",n,r):Re(l,"add",n,r),this},delete(n){const r=j(this),{has:l,get:o}=kt(r);let a=l.call(r,n);a||(n=j(n),a=l.call(r,n)),o&&o.call(r,n);const h=r.delete(n);return a&&Re(r,"delete",n,void 0),h},clear(){const n=j(this),r=n.size!==0,l=n.clear();return r&&Re(n,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(n=>{s[n]=pr(n,e,t)}),s}function Vs(e,t){const s=gr(e,t);return(i,n,r)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?i:Reflect.get(H(s,n)&&n in i?s:i,n,r)}const mr={get:Vs(!1,!1)},vr={get:Vs(!1,!0)},_r={get:Vs(!0,!1)};const nn=new WeakMap,rn=new WeakMap,ln=new WeakMap,br=new WeakMap;function yr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xr(e){return e.__v_skip||!Object.isExtensible(e)?0:yr(Jn(e))}function Bs(e){return je(e)?e:Js(e,!1,ur,mr,nn)}function Sr(e){return Js(e,!1,hr,vr,rn)}function Es(e){return Js(e,!0,dr,_r,ln)}function Js(e,t,s,i,n){if(!$(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=xr(e);if(r===0)return e;const l=n.get(e);if(l)return l;const o=new Proxy(e,r===2?i:s);return n.set(e,o),o}function Xe(e){return je(e)?Xe(e.__v_raw):!!(e&&e.__v_isReactive)}function je(e){return!!(e&&e.__v_isReadonly)}function pe(e){return!!(e&&e.__v_isShallow)}function Ks(e){return e?!!e.__v_raw:!1}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function Cr(e){return!H(e,"__v_skip")&&Object.isExtensible(e)&&Wi(e,"__v_skip",!0),e}const me=e=>$(e)?Bs(e):e,ct=e=>$(e)?Es(e):e;function X(e){return e?e.__v_isRef===!0:!1}function Ze(e){return wr(e,!1)}function wr(e,t){return X(e)?e:new Tr(e,t)}class Tr{constructor(t,s){this.dep=new Ws,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:j(t),this._value=s?t:me(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,i=this.__v_isShallow||pe(t)||je(t);t=i?t:j(t),Ve(t,s)&&(this._rawValue=t,this._value=i?t:me(t),this.dep.trigger())}}function Er(e){return X(e)?e.value:e}const Pr={get:(e,t,s)=>t==="__v_raw"?e:Er(Reflect.get(e,t,s)),set:(e,t,s,i)=>{const n=e[t];return X(n)&&!X(s)?(n.value=s,!0):Reflect.set(e,t,s,i)}};function on(e){return Xe(e)?e:new Proxy(e,Pr)}class Ar{constructor(t,s,i){this.fn=t,this.setter=s,this._value=void 0,this.dep=new Ws(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&W!==this)return Gi(this,!0),!0}get value(){const t=this.dep.track();return Yi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Mr(e,t,s=!1){let i,n;return R(e)?i=e:(i=e.get,n=e.set),new Ar(i,n,s)}const Wt={},Gt=new WeakMap;let Qe;function Ir(e,t=!1,s=Qe){if(s){let i=Gt.get(s);i||Gt.set(s,i=[]),i.push(e)}}function Or(e,t,s=V){const{immediate:i,deep:n,once:r,scheduler:l,augmentJob:o,call:a}=s,h=P=>n?P:pe(P)||n===!1||n===0?We(P,1):We(P);let u,p,C,w,F=!1,O=!1;if(X(e)?(p=()=>e.value,F=pe(e)):Xe(e)?(p=()=>h(e),F=!0):I(e)?(O=!0,F=e.some(P=>Xe(P)||pe(P)),p=()=>e.map(P=>{if(X(P))return P.value;if(Xe(P))return h(P);if(R(P))return a?a(P,2):P()})):R(e)?t?p=a?()=>a(e,2):e:p=()=>{if(C){Ne();try{C()}finally{De()}}const P=Qe;Qe=u;try{return a?a(e,3,[w]):e(w)}finally{Qe=P}}:p=Ee,t&&n){const P=p,z=n===!0?1/0:n;p=()=>We(P(),z)}const q=ir(),J=()=>{u.stop(),q&&q.active&&js(q.effects,u)};if(r&&t){const P=t;t=(...z)=>{P(...z),J()}}let D=O?new Array(e.length).fill(Wt):Wt;const B=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(t){const z=u.run();if(n||F||(O?z.some((Fe,ve)=>Ve(Fe,D[ve])):Ve(z,D))){C&&C();const Fe=Qe;Qe=u;try{const ve=[z,D===Wt?void 0:O&&D[0]===Wt?[]:D,w];D=z,a?a(t,3,ve):t(...ve)}finally{Qe=Fe}}}else u.run()};return o&&o(B),u=new Ki(p),u.scheduler=l?()=>l(B,!1):B,w=P=>Ir(P,!1,u),C=u.onStop=()=>{const P=Gt.get(u);if(P){if(a)a(P,4);else for(const z of P)z();Gt.delete(u)}},t?i?B(!0):D=u.run():l?l(B.bind(null,!0),!0):u.run(),J.pause=u.pause.bind(u),J.resume=u.resume.bind(u),J.stop=J,J}function We(e,t=1/0,s){if(t<=0||!$(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,X(e))We(e.value,t,s);else if(I(e))for(let i=0;i<e.length;i++)We(e[i],t,s);else if(Li(e)||nt(e))e.forEach(i=>{We(i,t,s)});else if(ki(e)){for(const i in e)We(e[i],t,s);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&We(e[i],t,s)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nt(e,t,s,i){try{return i?e(...i):e()}catch(n){ns(n,t,s)}}function Ae(e,t,s,i){if(R(e)){const n=Nt(e,t,s,i);return n&&Fi(n)&&n.catch(r=>{ns(r,t,s)}),n}if(I(e)){const n=[];for(let r=0;r<e.length;r++)n.push(Ae(e[r],t,s,i));return n}}function ns(e,t,s,i=!0){const n=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||V;if(t){let o=t.parent;const a=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const u=o.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,a,h)===!1)return}o=o.parent}if(r){Ne(),Nt(r,null,10,[e,a,h]),De();return}}Rr(e,s,n,i,l)}function Rr(e,t,s,i=!0,n=!1){if(n)throw e;console.error(e)}const se=[];let Ce=-1;const rt=[];let Ue=null,st=0;const cn=Promise.resolve();let zt=null;function Nr(e){const t=zt||cn;return e?t.then(this?e.bind(this):e):t}function Dr(e){let t=Ce+1,s=se.length;for(;t<s;){const i=t+s>>>1,n=se[i],r=Mt(n);r<e||r===e&&n.flags&2?t=i+1:s=i}return t}function qs(e){if(!(e.flags&1)){const t=Mt(e),s=se[se.length-1];!s||!(e.flags&2)&&t>=Mt(s)?se.push(e):se.splice(Dr(t),0,e),e.flags|=1,an()}}function an(){zt||(zt=cn.then(un))}function jr(e){I(e)?rt.push(...e):Ue&&e.id===-1?Ue.splice(st+1,0,e):e.flags&1||(rt.push(e),e.flags|=1),an()}function fi(e,t,s=Ce+1){for(;s<se.length;s++){const i=se[s];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;se.splice(s,1),s--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function fn(e){if(rt.length){const t=[...new Set(rt)].sort((s,i)=>Mt(s)-Mt(i));if(rt.length=0,Ue){Ue.push(...t);return}for(Ue=t,st=0;st<Ue.length;st++){const s=Ue[st];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Ue=null,st=0}}const Mt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function un(e){try{for(Ce=0;Ce<se.length;Ce++){const t=se[Ce];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Nt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ce<se.length;Ce++){const t=se[Ce];t&&(t.flags&=-2)}Ce=-1,se.length=0,fn(),zt=null,(se.length||rt.length)&&un()}}let Te=null,dn=null;function Qt(e){const t=Te;return Te=e,dn=e&&e.type.__scopeId||null,t}function Hr(e,t=Te,s){if(!t||e._n)return e;const i=(...n)=>{i._d&&xi(-1);const r=Qt(t);let l;try{l=e(...n)}finally{Qt(r),i._d&&xi(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function Ge(e,t,s,i){const n=e.dirs,r=t&&t.dirs;for(let l=0;l<n.length;l++){const o=n[l];r&&(o.oldValue=r[l].value);let a=o.dir[i];a&&(Ne(),Ae(a,s,8,[e.el,o,e,t]),De())}}function Lr(e,t){if(ie){let s=ie.provides;const i=ie.parent&&ie.parent.provides;i===s&&(s=ie.provides=Object.create(i)),s[e]=t}}function Vt(e,t,s=!1){const i=Hl();if(i||lt){let n=lt?lt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return s&&R(t)?t.call(i&&i.proxy):t}}const Fr=Symbol.for("v-scx"),$r=()=>Vt(Fr);function Bt(e,t,s){return hn(e,t,s)}function hn(e,t,s=V){const{immediate:i,deep:n,flush:r,once:l}=s,o=Z({},s),a=t&&i||!t&&r!=="post";let h;if(Ot){if(r==="sync"){const w=$r();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!a){const w=()=>{};return w.stop=Ee,w.resume=Ee,w.pause=Ee,w}}const u=ie;o.call=(w,F,O)=>Ae(w,u,F,O);let p=!1;r==="post"?o.scheduler=w=>{oe(w,u&&u.suspense)}:r!=="sync"&&(p=!0,o.scheduler=(w,F)=>{F?w():qs(w)}),o.augmentJob=w=>{t&&(w.flags|=4),p&&(w.flags|=2,u&&(w.id=u.uid,w.i=u))};const C=Or(e,t,o);return Ot&&(h?h.push(C):a&&C()),C}function kr(e,t,s){const i=this.proxy,n=G(e)?e.includes(".")?pn(i,e):()=>i[e]:e.bind(i,i);let r;R(t)?r=t:(r=t.handler,s=t);const l=Dt(this),o=hn(n,r.bind(i),s);return l(),o}function pn(e,t){const s=t.split(".");return()=>{let i=e;for(let n=0;n<s.length&&i;n++)i=i[s[n]];return i}}const Ur=Symbol("_vte"),Wr=e=>e.__isTeleport,Vr=Symbol("_leaveCb");function Gs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function gn(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ui(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const Yt=new WeakMap;function Ct(e,t,s,i,n=!1){if(I(e)){e.forEach((O,q)=>Ct(O,t&&(I(t)?t[q]:t),s,i,n));return}if(wt(i)&&!n){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ct(e,t,s,i.component.subTree);return}const r=i.shapeFlag&4?Zs(i.component):i.el,l=n?null:r,{i:o,r:a}=e,h=t&&t.r,u=o.refs===V?o.refs={}:o.refs,p=o.setupState,C=j(p),w=p===V?Hi:O=>ui(u,O)?!1:H(C,O),F=(O,q)=>!(q&&ui(u,q));if(h!=null&&h!==a){if(di(t),G(h))u[h]=null,w(h)&&(p[h]=null);else if(X(h)){const O=t;F(h,O.k)&&(h.value=null),O.k&&(u[O.k]=null)}}if(R(a))Nt(a,o,12,[l,u]);else{const O=G(a),q=X(a);if(O||q){const J=()=>{if(e.f){const D=O?w(a)?p[a]:u[a]:F()||!e.k?a.value:u[e.k];if(n)I(D)&&js(D,r);else if(I(D))D.includes(r)||D.push(r);else if(O)u[a]=[r],w(a)&&(p[a]=u[a]);else{const B=[r];F(a,e.k)&&(a.value=B),e.k&&(u[e.k]=B)}}else O?(u[a]=l,w(a)&&(p[a]=l)):q&&(F(a,e.k)&&(a.value=l),e.k&&(u[e.k]=l))};if(l){const D=()=>{J(),Yt.delete(e)};D.id=-1,Yt.set(e,D),oe(D,s)}else di(e),J()}}}function di(e){const t=Yt.get(e);t&&(t.flags|=8,Yt.delete(e))}ss().requestIdleCallback;ss().cancelIdleCallback;const wt=e=>!!e.type.__asyncLoader,mn=e=>e.type.__isKeepAlive;function Br(e,t){vn(e,"a",t)}function Jr(e,t){vn(e,"da",t)}function vn(e,t,s=ie){const i=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(rs(t,i,s),s){let n=s.parent;for(;n&&n.parent;)mn(n.parent.vnode)&&Kr(i,t,s,n),n=n.parent}}function Kr(e,t,s,i){const n=rs(t,e,i,!0);zs(()=>{js(i[t],n)},s)}function rs(e,t,s=ie,i=!1){if(s){const n=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...l)=>{Ne();const o=Dt(s),a=Ae(t,s,e,l);return o(),De(),a});return i?n.unshift(r):n.push(r),r}}const He=e=>(t,s=ie)=>{(!Ot||e==="sp")&&rs(e,(...i)=>t(...i),s)},qr=He("bm"),ls=He("m"),Gr=He("bu"),zr=He("u"),Qr=He("bum"),zs=He("um"),Yr=He("sp"),Xr=He("rtg"),Zr=He("rtc");function el(e,t=ie){rs("ec",e,t)}const tl=Symbol.for("v-ndc");function os(e,t,s,i){let n;const r=s,l=I(e);if(l||G(e)){const o=l&&Xe(e);let a=!1,h=!1;o&&(a=!pe(e),h=je(e),e=is(e)),n=new Array(e.length);for(let u=0,p=e.length;u<p;u++)n[u]=t(a?h?ct(me(e[u])):me(e[u]):e[u],u,void 0,r)}else if(typeof e=="number"){n=new Array(e);for(let o=0;o<e;o++)n[o]=t(o+1,o,void 0,r)}else if($(e))if(e[Symbol.iterator])n=Array.from(e,(o,a)=>t(o,a,void 0,r));else{const o=Object.keys(e);n=new Array(o.length);for(let a=0,h=o.length;a<h;a++){const u=o[a];n[a]=t(e[u],u,a,r)}}else n=[];return n}const Ps=e=>e?Fn(e)?Zs(e):Ps(e.parent):null,Tt=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ps(e.parent),$root:e=>Ps(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>bn(e),$forceUpdate:e=>e.f||(e.f=()=>{qs(e.update)}),$nextTick:e=>e.n||(e.n=Nr.bind(e.proxy)),$watch:e=>kr.bind(e)}),_s=(e,t)=>e!==V&&!e.__isScriptSetup&&H(e,t),sl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:i,data:n,props:r,accessCache:l,type:o,appContext:a}=e;if(t[0]!=="$"){const C=l[t];if(C!==void 0)switch(C){case 1:return i[t];case 2:return n[t];case 4:return s[t];case 3:return r[t]}else{if(_s(i,t))return l[t]=1,i[t];if(n!==V&&H(n,t))return l[t]=2,n[t];if(H(r,t))return l[t]=3,r[t];if(s!==V&&H(s,t))return l[t]=4,s[t];As&&(l[t]=0)}}const h=Tt[t];let u,p;if(h)return t==="$attrs"&&Y(e.attrs,"get",""),h(e);if((u=o.__cssModules)&&(u=u[t]))return u;if(s!==V&&H(s,t))return l[t]=4,s[t];if(p=a.config.globalProperties,H(p,t))return p[t]},set({_:e},t,s){const{data:i,setupState:n,ctx:r}=e;return _s(n,t)?(n[t]=s,!0):i!==V&&H(i,t)?(i[t]=s,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:i,appContext:n,props:r,type:l}},o){let a;return!!(s[o]||e!==V&&o[0]!=="$"&&H(e,o)||_s(t,o)||H(r,o)||H(i,o)||H(Tt,o)||H(n.config.globalProperties,o)||(a=l.__cssModules)&&a[o])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:H(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function hi(e){return I(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let As=!0;function il(e){const t=bn(e),s=e.proxy,i=e.ctx;As=!1,t.beforeCreate&&pi(t.beforeCreate,e,"bc");const{data:n,computed:r,methods:l,watch:o,provide:a,inject:h,created:u,beforeMount:p,mounted:C,beforeUpdate:w,updated:F,activated:O,deactivated:q,beforeDestroy:J,beforeUnmount:D,destroyed:B,unmounted:P,render:z,renderTracked:Fe,renderTriggered:ve,errorCaptured:$e,serverPrefetch:jt,expose:Je,inheritAttrs:dt,components:Ht,directives:Lt,filters:fs}=t;if(h&&nl(h,i,null),l)for(const K in l){const k=l[K];R(k)&&(i[K]=k.bind(s))}if(n){const K=n.call(s,s);$(K)&&(e.data=Bs(K))}if(As=!0,r)for(const K in r){const k=r[K],Ke=R(k)?k.bind(s,s):R(k.get)?k.get.bind(s,s):Ee,Ft=!R(k)&&R(k.set)?k.set.bind(s):Ee,qe=kn({get:Ke,set:Ft});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>qe.value,set:_e=>qe.value=_e})}if(o)for(const K in o)_n(o[K],i,s,K);if(a){const K=R(a)?a.call(s):a;Reflect.ownKeys(K).forEach(k=>{Lr(k,K[k])})}u&&pi(u,e,"c");function ee(K,k){I(k)?k.forEach(Ke=>K(Ke.bind(s))):k&&K(k.bind(s))}if(ee(qr,p),ee(ls,C),ee(Gr,w),ee(zr,F),ee(Br,O),ee(Jr,q),ee(el,$e),ee(Zr,Fe),ee(Xr,ve),ee(Qr,D),ee(zs,P),ee(Yr,jt),I(Je))if(Je.length){const K=e.exposed||(e.exposed={});Je.forEach(k=>{Object.defineProperty(K,k,{get:()=>s[k],set:Ke=>s[k]=Ke,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===Ee&&(e.render=z),dt!=null&&(e.inheritAttrs=dt),Ht&&(e.components=Ht),Lt&&(e.directives=Lt),jt&&gn(e)}function nl(e,t,s=Ee){I(e)&&(e=Ms(e));for(const i in e){const n=e[i];let r;$(n)?"default"in n?r=Vt(n.from||i,n.default,!0):r=Vt(n.from||i):r=Vt(n),X(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[i]=r}}function pi(e,t,s){Ae(I(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,s)}function _n(e,t,s,i){let n=i.includes(".")?pn(s,i):()=>s[i];if(G(e)){const r=t[e];R(r)&&Bt(n,r)}else if(R(e))Bt(n,e.bind(s));else if($(e))if(I(e))e.forEach(r=>_n(r,t,s,i));else{const r=R(e.handler)?e.handler.bind(s):t[e.handler];R(r)&&Bt(n,r,e)}}function bn(e){const t=e.type,{mixins:s,extends:i}=t,{mixins:n,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,o=r.get(t);let a;return o?a=o:!n.length&&!s&&!i?a=t:(a={},n.length&&n.forEach(h=>Xt(a,h,l,!0)),Xt(a,t,l)),$(t)&&r.set(t,a),a}function Xt(e,t,s,i=!1){const{mixins:n,extends:r}=t;r&&Xt(e,r,s,!0),n&&n.forEach(l=>Xt(e,l,s,!0));for(const l in t)if(!(i&&l==="expose")){const o=rl[l]||s&&s[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const rl={data:gi,props:mi,emits:mi,methods:_t,computed:_t,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:_t,directives:_t,watch:ol,provide:gi,inject:ll};function gi(e,t){return t?e?function(){return Z(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function ll(e,t){return _t(Ms(e),Ms(t))}function Ms(e){if(I(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function _t(e,t){return e?Z(Object.create(null),e,t):t}function mi(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:Z(Object.create(null),hi(e),hi(t??{})):t}function ol(e,t){if(!e)return t;if(!t)return e;const s=Z(Object.create(null),e);for(const i in t)s[i]=te(e[i],t[i]);return s}function yn(){return{app:null,config:{isNativeTag:Hi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cl=0;function al(e,t){return function(i,n=null){R(i)||(i=Z({},i)),n!=null&&!$(n)&&(n=null);const r=yn(),l=new WeakSet,o=[];let a=!1;const h=r.app={_uid:cl++,_component:i,_props:n,_container:null,_context:r,_instance:null,version:Wl,get config(){return r.config},set config(u){},use(u,...p){return l.has(u)||(u&&R(u.install)?(l.add(u),u.install(h,...p)):R(u)&&(l.add(u),u(h,...p))),h},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),h},component(u,p){return p?(r.components[u]=p,h):r.components[u]},directive(u,p){return p?(r.directives[u]=p,h):r.directives[u]},mount(u,p,C){if(!a){const w=h._ceVNode||Q(i,n);return w.appContext=r,C===!0?C="svg":C===!1&&(C=void 0),e(w,u,C),a=!0,h._container=u,u.__vue_app__=h,Zs(w.component)}},onUnmount(u){o.push(u)},unmount(){a&&(Ae(o,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(u,p){return r.provides[u]=p,h},runWithContext(u){const p=lt;lt=h;try{return u()}finally{lt=p}}};return h}}let lt=null;const fl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Be(t)}Modifiers`]||e[`${et(t)}Modifiers`];function ul(e,t,...s){if(e.isUnmounted)return;const i=e.vnode.props||V;let n=s;const r=t.startsWith("update:"),l=r&&fl(i,t.slice(7));l&&(l.trim&&(n=s.map(u=>G(u)?u.trim():u)),l.number&&(n=s.map(Gn)));let o,a=i[o=ds(t)]||i[o=ds(Be(t))];!a&&r&&(a=i[o=ds(et(t))]),a&&Ae(a,e,6,n);const h=i[o+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ae(h,e,6,n)}}const dl=new WeakMap;function xn(e,t,s=!1){const i=s?dl:t.emitsCache,n=i.get(e);if(n!==void 0)return n;const r=e.emits;let l={},o=!1;if(!R(e)){const a=h=>{const u=xn(h,t,!0);u&&(o=!0,Z(l,u))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!o?($(e)&&i.set(e,null),null):(I(r)?r.forEach(a=>l[a]=null):Z(l,r),$(e)&&i.set(e,l),l)}function cs(e,t){return!e||!es(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,et(t))||H(e,t))}function vi(e){const{type:t,vnode:s,proxy:i,withProxy:n,propsOptions:[r],slots:l,attrs:o,emit:a,render:h,renderCache:u,props:p,data:C,setupState:w,ctx:F,inheritAttrs:O}=e,q=Qt(e);let J,D;try{if(s.shapeFlag&4){const P=n||i,z=P;J=we(h.call(z,P,u,p,w,C,F)),D=o}else{const P=t;J=we(P.length>1?P(p,{attrs:o,slots:l,emit:a}):P(p,null)),D=t.props?o:hl(o)}}catch(P){Et.length=0,ns(P,e,1),J=Q(at)}let B=J;if(D&&O!==!1){const P=Object.keys(D),{shapeFlag:z}=B;P.length&&z&7&&(r&&P.some(Ds)&&(D=pl(D,r)),B=ft(B,D,!1,!0))}return s.dirs&&(B=ft(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(s.dirs):s.dirs),s.transition&&Gs(B,s.transition),J=B,Qt(q),J}const hl=e=>{let t;for(const s in e)(s==="class"||s==="style"||es(s))&&((t||(t={}))[s]=e[s]);return t},pl=(e,t)=>{const s={};for(const i in e)(!Ds(i)||!(i.slice(9)in t))&&(s[i]=e[i]);return s};function gl(e,t,s){const{props:i,children:n,component:r}=e,{props:l,children:o,patchFlag:a}=t,h=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return i?_i(i,l,h):!!l;if(a&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const C=u[p];if(Sn(l,i,C)&&!cs(h,C))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:i===l?!1:i?l?_i(i,l,h):!0:!!l;return!1}function _i(e,t,s){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let n=0;n<i.length;n++){const r=i[n];if(Sn(t,e,r)&&!cs(s,r))return!0}return!1}function Sn(e,t,s){const i=e[s],n=t[s];return s==="style"&&$(i)&&$(n)?!Fs(i,n):i!==n}function ml({vnode:e,parent:t},s){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=s,t=t.parent;else break}}const Cn={},wn=()=>Object.create(Cn),Tn=e=>Object.getPrototypeOf(e)===Cn;function vl(e,t,s,i=!1){const n={},r=wn();e.propsDefaults=Object.create(null),En(e,t,n,r);for(const l in e.propsOptions[0])l in n||(n[l]=void 0);s?e.props=i?n:Sr(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function _l(e,t,s,i){const{props:n,attrs:r,vnode:{patchFlag:l}}=e,o=j(n),[a]=e.propsOptions;let h=!1;if((i||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let C=u[p];if(cs(e.emitsOptions,C))continue;const w=t[C];if(a)if(H(r,C))w!==r[C]&&(r[C]=w,h=!0);else{const F=Be(C);n[F]=Is(a,o,F,w,e,!1)}else w!==r[C]&&(r[C]=w,h=!0)}}}else{En(e,t,n,r)&&(h=!0);let u;for(const p in o)(!t||!H(t,p)&&((u=et(p))===p||!H(t,u)))&&(a?s&&(s[p]!==void 0||s[u]!==void 0)&&(n[p]=Is(a,o,p,void 0,e,!0)):delete n[p]);if(r!==o)for(const p in r)(!t||!H(t,p))&&(delete r[p],h=!0)}h&&Re(e.attrs,"set","")}function En(e,t,s,i){const[n,r]=e.propsOptions;let l=!1,o;if(t)for(let a in t){if(yt(a))continue;const h=t[a];let u;n&&H(n,u=Be(a))?!r||!r.includes(u)?s[u]=h:(o||(o={}))[u]=h:cs(e.emitsOptions,a)||(!(a in i)||h!==i[a])&&(i[a]=h,l=!0)}if(r){const a=j(s),h=o||V;for(let u=0;u<r.length;u++){const p=r[u];s[p]=Is(n,a,p,h[p],e,!H(h,p))}}return l}function Is(e,t,s,i,n,r){const l=e[s];if(l!=null){const o=H(l,"default");if(o&&i===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&R(a)){const{propsDefaults:h}=n;if(s in h)i=h[s];else{const u=Dt(n);i=h[s]=a.call(null,t),u()}}else i=a;n.ce&&n.ce._setProp(s,i)}l[0]&&(r&&!o?i=!1:l[1]&&(i===""||i===et(s))&&(i=!0))}return i}const bl=new WeakMap;function Pn(e,t,s=!1){const i=s?bl:t.propsCache,n=i.get(e);if(n)return n;const r=e.props,l={},o=[];let a=!1;if(!R(e)){const u=p=>{a=!0;const[C,w]=Pn(p,t,!0);Z(l,C),w&&o.push(...w)};!s&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!a)return $(e)&&i.set(e,it),it;if(I(r))for(let u=0;u<r.length;u++){const p=Be(r[u]);bi(p)&&(l[p]=V)}else if(r)for(const u in r){const p=Be(u);if(bi(p)){const C=r[u],w=l[p]=I(C)||R(C)?{type:C}:Z({},C),F=w.type;let O=!1,q=!0;if(I(F))for(let J=0;J<F.length;++J){const D=F[J],B=R(D)&&D.name;if(B==="Boolean"){O=!0;break}else B==="String"&&(q=!1)}else O=R(F)&&F.name==="Boolean";w[0]=O,w[1]=q,(O||H(w,"default"))&&o.push(p)}}const h=[l,o];return $(e)&&i.set(e,h),h}function bi(e){return e[0]!=="$"&&!yt(e)}const Qs=e=>e==="_"||e==="_ctx"||e==="$stable",Ys=e=>I(e)?e.map(we):[we(e)],yl=(e,t,s)=>{if(t._n)return t;const i=Hr((...n)=>Ys(t(...n)),s);return i._c=!1,i},An=(e,t,s)=>{const i=e._ctx;for(const n in e){if(Qs(n))continue;const r=e[n];if(R(r))t[n]=yl(n,r,i);else if(r!=null){const l=Ys(r);t[n]=()=>l}}},Mn=(e,t)=>{const s=Ys(t);e.slots.default=()=>s},In=(e,t,s)=>{for(const i in t)(s||!Qs(i))&&(e[i]=t[i])},xl=(e,t,s)=>{const i=e.slots=wn();if(e.vnode.shapeFlag&32){const n=t._;n?(In(i,t,s),s&&Wi(i,"_",n,!0)):An(t,i)}else t&&Mn(e,t)},Sl=(e,t,s)=>{const{vnode:i,slots:n}=e;let r=!0,l=V;if(i.shapeFlag&32){const o=t._;o?s&&o===1?r=!1:In(n,t,s):(r=!t.$stable,An(t,n)),l=t}else t&&(Mn(e,t),l={default:1});if(r)for(const o in n)!Qs(o)&&l[o]==null&&delete n[o]},oe=Pl;function Cl(e){return wl(e)}function wl(e,t){const s=ss();s.__VUE__=!0;const{insert:i,remove:n,patchProp:r,createElement:l,createText:o,createComment:a,setText:h,setElementText:u,parentNode:p,nextSibling:C,setScopeId:w=Ee,insertStaticContent:F}=e,O=(c,f,d,_=null,g=null,m=null,x=void 0,y=null,b=!!f.dynamicChildren)=>{if(c===f)return;c&&!vt(c,f)&&(_=$t(c),_e(c,g,m,!0),c=null),f.patchFlag===-2&&(b=!1,f.dynamicChildren=null);const{type:v,ref:E,shapeFlag:S}=f;switch(v){case as:q(c,f,d,_);break;case at:J(c,f,d,_);break;case Jt:c==null&&D(f,d,_,x);break;case ue:Ht(c,f,d,_,g,m,x,y,b);break;default:S&1?z(c,f,d,_,g,m,x,y,b):S&6?Lt(c,f,d,_,g,m,x,y,b):(S&64||S&128)&&v.process(c,f,d,_,g,m,x,y,b,pt)}E!=null&&g?Ct(E,c&&c.ref,m,f||c,!f):E==null&&c&&c.ref!=null&&Ct(c.ref,null,m,c,!0)},q=(c,f,d,_)=>{if(c==null)i(f.el=o(f.children),d,_);else{const g=f.el=c.el;f.children!==c.children&&h(g,f.children)}},J=(c,f,d,_)=>{c==null?i(f.el=a(f.children||""),d,_):f.el=c.el},D=(c,f,d,_)=>{[c.el,c.anchor]=F(c.children,f,d,_,c.el,c.anchor)},B=({el:c,anchor:f},d,_)=>{let g;for(;c&&c!==f;)g=C(c),i(c,d,_),c=g;i(f,d,_)},P=({el:c,anchor:f})=>{let d;for(;c&&c!==f;)d=C(c),n(c),c=d;n(f)},z=(c,f,d,_,g,m,x,y,b)=>{if(f.type==="svg"?x="svg":f.type==="math"&&(x="mathml"),c==null)Fe(f,d,_,g,m,x,y,b);else{const v=c.el&&c.el._isVueCE?c.el:null;try{v&&v._beginPatch(),jt(c,f,g,m,x,y,b)}finally{v&&v._endPatch()}}},Fe=(c,f,d,_,g,m,x,y)=>{let b,v;const{props:E,shapeFlag:S,transition:T,dirs:A}=c;if(b=c.el=l(c.type,m,E&&E.is,E),S&8?u(b,c.children):S&16&&$e(c.children,b,null,_,g,bs(c,m),x,y),A&&Ge(c,null,_,"created"),ve(b,c,c.scopeId,x,_),E){for(const U in E)U!=="value"&&!yt(U)&&r(b,U,null,E[U],m,_);"value"in E&&r(b,"value",null,E.value,m),(v=E.onVnodeBeforeMount)&&Se(v,_,c)}A&&Ge(c,null,_,"beforeMount");const N=Tl(g,T);N&&T.beforeEnter(b),i(b,f,d),((v=E&&E.onVnodeMounted)||N||A)&&oe(()=>{v&&Se(v,_,c),N&&T.enter(b),A&&Ge(c,null,_,"mounted")},g)},ve=(c,f,d,_,g)=>{if(d&&w(c,d),_)for(let m=0;m<_.length;m++)w(c,_[m]);if(g){let m=g.subTree;if(f===m||Dn(m.type)&&(m.ssContent===f||m.ssFallback===f)){const x=g.vnode;ve(c,x,x.scopeId,x.slotScopeIds,g.parent)}}},$e=(c,f,d,_,g,m,x,y,b=0)=>{for(let v=b;v<c.length;v++){const E=c[v]=y?Oe(c[v]):we(c[v]);O(null,E,f,d,_,g,m,x,y)}},jt=(c,f,d,_,g,m,x)=>{const y=f.el=c.el;let{patchFlag:b,dynamicChildren:v,dirs:E}=f;b|=c.patchFlag&16;const S=c.props||V,T=f.props||V;let A;if(d&&ze(d,!1),(A=T.onVnodeBeforeUpdate)&&Se(A,d,f,c),E&&Ge(f,c,d,"beforeUpdate"),d&&ze(d,!0),(S.innerHTML&&T.innerHTML==null||S.textContent&&T.textContent==null)&&u(y,""),v?Je(c.dynamicChildren,v,y,d,_,bs(f,g),m):x||k(c,f,y,null,d,_,bs(f,g),m,!1),b>0){if(b&16)dt(y,S,T,d,g);else if(b&2&&S.class!==T.class&&r(y,"class",null,T.class,g),b&4&&r(y,"style",S.style,T.style,g),b&8){const N=f.dynamicProps;for(let U=0;U<N.length;U++){const L=N[U],re=S[L],le=T[L];(le!==re||L==="value")&&r(y,L,re,le,g,d)}}b&1&&c.children!==f.children&&u(y,f.children)}else!x&&v==null&&dt(y,S,T,d,g);((A=T.onVnodeUpdated)||E)&&oe(()=>{A&&Se(A,d,f,c),E&&Ge(f,c,d,"updated")},_)},Je=(c,f,d,_,g,m,x)=>{for(let y=0;y<f.length;y++){const b=c[y],v=f[y],E=b.el&&(b.type===ue||!vt(b,v)||b.shapeFlag&198)?p(b.el):d;O(b,v,E,null,_,g,m,x,!0)}},dt=(c,f,d,_,g)=>{if(f!==d){if(f!==V)for(const m in f)!yt(m)&&!(m in d)&&r(c,m,f[m],null,g,_);for(const m in d){if(yt(m))continue;const x=d[m],y=f[m];x!==y&&m!=="value"&&r(c,m,y,x,g,_)}"value"in d&&r(c,"value",f.value,d.value,g)}},Ht=(c,f,d,_,g,m,x,y,b)=>{const v=f.el=c?c.el:o(""),E=f.anchor=c?c.anchor:o("");let{patchFlag:S,dynamicChildren:T,slotScopeIds:A}=f;A&&(y=y?y.concat(A):A),c==null?(i(v,d,_),i(E,d,_),$e(f.children||[],d,E,g,m,x,y,b)):S>0&&S&64&&T&&c.dynamicChildren&&c.dynamicChildren.length===T.length?(Je(c.dynamicChildren,T,d,g,m,x,y),(f.key!=null||g&&f===g.subTree)&&On(c,f,!0)):k(c,f,d,E,g,m,x,y,b)},Lt=(c,f,d,_,g,m,x,y,b)=>{f.slotScopeIds=y,c==null?f.shapeFlag&512?g.ctx.activate(f,d,_,x,b):fs(f,d,_,g,m,x,b):ei(c,f,b)},fs=(c,f,d,_,g,m,x)=>{const y=c.component=jl(c,_,g);if(mn(c)&&(y.ctx.renderer=pt),Ll(y,!1,x),y.asyncDep){if(g&&g.registerDep(y,ee,x),!c.el){const b=y.subTree=Q(at);J(null,b,f,d),c.placeholder=b.el}}else ee(y,c,f,d,g,m,x)},ei=(c,f,d)=>{const _=f.component=c.component;if(gl(c,f,d))if(_.asyncDep&&!_.asyncResolved){K(_,f,d);return}else _.next=f,_.update();else f.el=c.el,_.vnode=f},ee=(c,f,d,_,g,m,x)=>{const y=()=>{if(c.isMounted){let{next:S,bu:T,u:A,parent:N,vnode:U}=c;{const ye=Rn(c);if(ye){S&&(S.el=U.el,K(c,S,x)),ye.asyncDep.then(()=>{oe(()=>{c.isUnmounted||v()},g)});return}}let L=S,re;ze(c,!1),S?(S.el=U.el,K(c,S,x)):S=U,T&&hs(T),(re=S.props&&S.props.onVnodeBeforeUpdate)&&Se(re,N,S,U),ze(c,!0);const le=vi(c),be=c.subTree;c.subTree=le,O(be,le,p(be.el),$t(be),c,g,m),S.el=le.el,L===null&&ml(c,le.el),A&&oe(A,g),(re=S.props&&S.props.onVnodeUpdated)&&oe(()=>Se(re,N,S,U),g)}else{let S;const{el:T,props:A}=f,{bm:N,m:U,parent:L,root:re,type:le}=c,be=wt(f);ze(c,!1),N&&hs(N),!be&&(S=A&&A.onVnodeBeforeMount)&&Se(S,L,f),ze(c,!0);{re.ce&&re.ce._hasShadowRoot()&&re.ce._injectChildStyle(le);const ye=c.subTree=vi(c);O(null,ye,d,_,c,g,m),f.el=ye.el}if(U&&oe(U,g),!be&&(S=A&&A.onVnodeMounted)){const ye=f;oe(()=>Se(S,L,ye),g)}(f.shapeFlag&256||L&&wt(L.vnode)&&L.vnode.shapeFlag&256)&&c.a&&oe(c.a,g),c.isMounted=!0,f=d=_=null}};c.scope.on();const b=c.effect=new Ki(y);c.scope.off();const v=c.update=b.run.bind(b),E=c.job=b.runIfDirty.bind(b);E.i=c,E.id=c.uid,b.scheduler=()=>qs(E),ze(c,!0),v()},K=(c,f,d)=>{f.component=c;const _=c.vnode.props;c.vnode=f,c.next=null,_l(c,f.props,_,d),Sl(c,f.children,d),Ne(),fi(c),De()},k=(c,f,d,_,g,m,x,y,b=!1)=>{const v=c&&c.children,E=c?c.shapeFlag:0,S=f.children,{patchFlag:T,shapeFlag:A}=f;if(T>0){if(T&128){Ft(v,S,d,_,g,m,x,y,b);return}else if(T&256){Ke(v,S,d,_,g,m,x,y,b);return}}A&8?(E&16&&ht(v,g,m),S!==v&&u(d,S)):E&16?A&16?Ft(v,S,d,_,g,m,x,y,b):ht(v,g,m,!0):(E&8&&u(d,""),A&16&&$e(S,d,_,g,m,x,y,b))},Ke=(c,f,d,_,g,m,x,y,b)=>{c=c||it,f=f||it;const v=c.length,E=f.length,S=Math.min(v,E);let T;for(T=0;T<S;T++){const A=f[T]=b?Oe(f[T]):we(f[T]);O(c[T],A,d,null,g,m,x,y,b)}v>E?ht(c,g,m,!0,!1,S):$e(f,d,_,g,m,x,y,b,S)},Ft=(c,f,d,_,g,m,x,y,b)=>{let v=0;const E=f.length;let S=c.length-1,T=E-1;for(;v<=S&&v<=T;){const A=c[v],N=f[v]=b?Oe(f[v]):we(f[v]);if(vt(A,N))O(A,N,d,null,g,m,x,y,b);else break;v++}for(;v<=S&&v<=T;){const A=c[S],N=f[T]=b?Oe(f[T]):we(f[T]);if(vt(A,N))O(A,N,d,null,g,m,x,y,b);else break;S--,T--}if(v>S){if(v<=T){const A=T+1,N=A<E?f[A].el:_;for(;v<=T;)O(null,f[v]=b?Oe(f[v]):we(f[v]),d,N,g,m,x,y,b),v++}}else if(v>T)for(;v<=S;)_e(c[v],g,m,!0),v++;else{const A=v,N=v,U=new Map;for(v=N;v<=T;v++){const fe=f[v]=b?Oe(f[v]):we(f[v]);fe.key!=null&&U.set(fe.key,v)}let L,re=0;const le=T-N+1;let be=!1,ye=0;const gt=new Array(le);for(v=0;v<le;v++)gt[v]=0;for(v=A;v<=S;v++){const fe=c[v];if(re>=le){_e(fe,g,m,!0);continue}let xe;if(fe.key!=null)xe=U.get(fe.key);else for(L=N;L<=T;L++)if(gt[L-N]===0&&vt(fe,f[L])){xe=L;break}xe===void 0?_e(fe,g,m,!0):(gt[xe-N]=v+1,xe>=ye?ye=xe:be=!0,O(fe,f[xe],d,null,g,m,x,y,b),re++)}const ii=be?El(gt):it;for(L=ii.length-1,v=le-1;v>=0;v--){const fe=N+v,xe=f[fe],ni=f[fe+1],ri=fe+1<E?ni.el||Nn(ni):_;gt[v]===0?O(null,xe,d,ri,g,m,x,y,b):be&&(L<0||v!==ii[L]?qe(xe,d,ri,2):L--)}}},qe=(c,f,d,_,g=null)=>{const{el:m,type:x,transition:y,children:b,shapeFlag:v}=c;if(v&6){qe(c.component.subTree,f,d,_);return}if(v&128){c.suspense.move(f,d,_);return}if(v&64){x.move(c,f,d,pt);return}if(x===ue){i(m,f,d);for(let S=0;S<b.length;S++)qe(b[S],f,d,_);i(c.anchor,f,d);return}if(x===Jt){B(c,f,d);return}if(_!==2&&v&1&&y)if(_===0)y.beforeEnter(m),i(m,f,d),oe(()=>y.enter(m),g);else{const{leave:S,delayLeave:T,afterLeave:A}=y,N=()=>{c.ctx.isUnmounted?n(m):i(m,f,d)},U=()=>{m._isLeaving&&m[Vr](!0),S(m,()=>{N(),A&&A()})};T?T(m,N,U):U()}else i(m,f,d)},_e=(c,f,d,_=!1,g=!1)=>{const{type:m,props:x,ref:y,children:b,dynamicChildren:v,shapeFlag:E,patchFlag:S,dirs:T,cacheIndex:A}=c;if(S===-2&&(g=!1),y!=null&&(Ne(),Ct(y,null,d,c,!0),De()),A!=null&&(f.renderCache[A]=void 0),E&256){f.ctx.deactivate(c);return}const N=E&1&&T,U=!wt(c);let L;if(U&&(L=x&&x.onVnodeBeforeUnmount)&&Se(L,f,c),E&6)Vn(c.component,d,_);else{if(E&128){c.suspense.unmount(d,_);return}N&&Ge(c,null,f,"beforeUnmount"),E&64?c.type.remove(c,f,d,pt,_):v&&!v.hasOnce&&(m!==ue||S>0&&S&64)?ht(v,f,d,!1,!0):(m===ue&&S&384||!g&&E&16)&&ht(b,f,d),_&&ti(c)}(U&&(L=x&&x.onVnodeUnmounted)||N)&&oe(()=>{L&&Se(L,f,c),N&&Ge(c,null,f,"unmounted")},d)},ti=c=>{const{type:f,el:d,anchor:_,transition:g}=c;if(f===ue){Wn(d,_);return}if(f===Jt){P(c);return}const m=()=>{n(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:y}=g,b=()=>x(d,m);y?y(c.el,m,b):b()}else m()},Wn=(c,f)=>{let d;for(;c!==f;)d=C(c),n(c),c=d;n(f)},Vn=(c,f,d)=>{const{bum:_,scope:g,job:m,subTree:x,um:y,m:b,a:v}=c;yi(b),yi(v),_&&hs(_),g.stop(),m&&(m.flags|=8,_e(x,c,f,d)),y&&oe(y,f),oe(()=>{c.isUnmounted=!0},f)},ht=(c,f,d,_=!1,g=!1,m=0)=>{for(let x=m;x<c.length;x++)_e(c[x],f,d,_,g)},$t=c=>{if(c.shapeFlag&6)return $t(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=C(c.anchor||c.el),d=f&&f[Ur];return d?C(d):f};let us=!1;const si=(c,f,d)=>{let _;c==null?f._vnode&&(_e(f._vnode,null,null,!0),_=f._vnode.component):O(f._vnode||null,c,f,null,null,null,d),f._vnode=c,us||(us=!0,fi(_),fn(),us=!1)},pt={p:O,um:_e,m:qe,r:ti,mt:fs,mc:$e,pc:k,pbc:Je,n:$t,o:e};return{render:si,hydrate:void 0,createApp:al(si)}}function bs({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ze({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Tl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function On(e,t,s=!1){const i=e.children,n=t.children;if(I(i)&&I(n))for(let r=0;r<i.length;r++){const l=i[r];let o=n[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[r]=Oe(n[r]),o.el=l.el),!s&&o.patchFlag!==-2&&On(l,o)),o.type===as&&(o.patchFlag===-1&&(o=n[r]=Oe(o)),o.el=l.el),o.type===at&&!o.el&&(o.el=l.el)}}function El(e){const t=e.slice(),s=[0];let i,n,r,l,o;const a=e.length;for(i=0;i<a;i++){const h=e[i];if(h!==0){if(n=s[s.length-1],e[n]<h){t[i]=n,s.push(i);continue}for(r=0,l=s.length-1;r<l;)o=r+l>>1,e[s[o]]<h?r=o+1:l=o;h<e[s[r]]&&(r>0&&(t[i]=s[r-1]),s[r]=i)}}for(r=s.length,l=s[r-1];r-- >0;)s[r]=l,l=t[l];return s}function Rn(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Rn(t)}function yi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Nn(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Nn(t.subTree):null}const Dn=e=>e.__isSuspense;function Pl(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):jr(e)}const ue=Symbol.for("v-fgt"),as=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),Jt=Symbol.for("v-stc"),Et=[];let de=null;function ne(e=!1){Et.push(de=e?null:[])}function Al(){Et.pop(),de=Et[Et.length-1]||null}let It=1;function xi(e,t=!1){It+=e,e<0&&de&&t&&(de.hasOnce=!0)}function jn(e){return e.dynamicChildren=It>0?de||it:null,Al(),It>0&&de&&de.push(e),e}function ae(e,t,s,i,n,r){return jn(M(e,t,s,i,n,r,!0))}function Ml(e,t,s,i,n){return jn(Q(e,t,s,i,n,!0))}function Hn(e){return e?e.__v_isVNode===!0:!1}function vt(e,t){return e.type===t.type&&e.key===t.key}const Ln=({key:e})=>e??null,Kt=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?G(e)||X(e)||R(e)?{i:Te,r:e,k:t,f:!!s}:e:null);function M(e,t=null,s=null,i=0,n=null,r=e===ue?0:1,l=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ln(t),ref:t&&Kt(t),scopeId:dn,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Te};return o?(Xs(a,s),r&128&&e.normalize(a)):s&&(a.shapeFlag|=G(s)?8:16),It>0&&!l&&de&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&de.push(a),a}const Q=Il;function Il(e,t=null,s=null,i=0,n=null,r=!1){if((!e||e===tl)&&(e=at),Hn(e)){const o=ft(e,t,!0);return s&&Xs(o,s),It>0&&!r&&de&&(o.shapeFlag&6?de[de.indexOf(e)]=o:de.push(o)),o.patchFlag=-2,o}if(Ul(e)&&(e=e.__vccOpts),t){t=Ol(t);let{class:o,style:a}=t;o&&!G(o)&&(t.class=ut(o)),$(a)&&(Ks(a)&&!I(a)&&(a=Z({},a)),t.style=Ls(a))}const l=G(e)?1:Dn(e)?128:Wr(e)?64:$(e)?4:R(e)?2:0;return M(e,t,s,i,n,l,r,!0)}function Ol(e){return e?Ks(e)||Tn(e)?Z({},e):e:null}function ft(e,t,s=!1,i=!1){const{props:n,ref:r,patchFlag:l,children:o,transition:a}=e,h=t?Rl(n||{},t):n,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Ln(h),ref:t&&t.ref?s&&r?I(r)?r.concat(Kt(t)):[r,Kt(t)]:Kt(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ft(e.ssContent),ssFallback:e.ssFallback&&ft(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&i&&Gs(u,a.clone(u)),u}function bt(e=" ",t=0){return Q(as,null,e,t)}function ot(e,t){const s=Q(Jt,null,e);return s.staticCount=t,s}function we(e){return e==null||typeof e=="boolean"?Q(at):I(e)?Q(ue,null,e.slice()):Hn(e)?Oe(e):Q(as,null,String(e))}function Oe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ft(e)}function Xs(e,t){let s=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(I(t))s=16;else if(typeof t=="object")if(i&65){const n=t.default;n&&(n._c&&(n._d=!1),Xs(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!Tn(t)?t._ctx=Te:n===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Te},s=32):(t=String(t),i&64?(s=16,t=[bt(t)]):s=8);e.children=t,e.shapeFlag|=s}function Rl(...e){const t={};for(let s=0;s<e.length;s++){const i=e[s];for(const n in i)if(n==="class")t.class!==i.class&&(t.class=ut([t.class,i.class]));else if(n==="style")t.style=Ls([t.style,i.style]);else if(es(n)){const r=t[n],l=i[n];l&&r!==l&&!(I(r)&&r.includes(l))&&(t[n]=r?[].concat(r,l):l)}else n!==""&&(t[n]=i[n])}return t}function Se(e,t,s,i=null){Ae(e,t,7,[s,i])}const Nl=yn();let Dl=0;function jl(e,t,s){const i=e.type,n=(t?t.appContext:e.appContext)||Nl,r={uid:Dl++,vnode:e,type:i,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pn(i,n),emitsOptions:xn(i,n),emit:null,emitted:null,propsDefaults:V,inheritAttrs:i.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ul.bind(null,r),e.ce&&e.ce(r),r}let ie=null;const Hl=()=>ie||Te;let Zt,Os;{const e=ss(),t=(s,i)=>{let n;return(n=e[s])||(n=e[s]=[]),n.push(i),r=>{n.length>1?n.forEach(l=>l(r)):n[0](r)}};Zt=t("__VUE_INSTANCE_SETTERS__",s=>ie=s),Os=t("__VUE_SSR_SETTERS__",s=>Ot=s)}const Dt=e=>{const t=ie;return Zt(e),e.scope.on(),()=>{e.scope.off(),Zt(t)}},Si=()=>{ie&&ie.scope.off(),Zt(null)};function Fn(e){return e.vnode.shapeFlag&4}let Ot=!1;function Ll(e,t=!1,s=!1){t&&Os(t);const{props:i,children:n}=e.vnode,r=Fn(e);vl(e,i,r,t),xl(e,n,s||t);const l=r?Fl(e,t):void 0;return t&&Os(!1),l}function Fl(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,sl);const{setup:i}=s;if(i){Ne();const n=e.setupContext=i.length>1?kl(e):null,r=Dt(e),l=Nt(i,e,0,[e.props,n]),o=Fi(l);if(De(),r(),(o||e.sp)&&!wt(e)&&gn(e),o){if(l.then(Si,Si),t)return l.then(a=>{Ci(e,a)}).catch(a=>{ns(a,e,0)});e.asyncDep=l}else Ci(e,l)}else $n(e)}function Ci(e,t,s){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:$(t)&&(e.setupState=on(t)),$n(e)}function $n(e,t,s){const i=e.type;e.render||(e.render=i.render||Ee);{const n=Dt(e);Ne();try{il(e)}finally{De(),n()}}}const $l={get(e,t){return Y(e,"get",""),e[t]}};function kl(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,$l),slots:e.slots,emit:e.emit,expose:t}}function Zs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(on(Cr(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Tt)return Tt[s](e)},has(t,s){return s in t||s in Tt}})):e.proxy}function Ul(e){return R(e)&&"__vccOpts"in e}const kn=(e,t)=>Mr(e,t,Ot),Wl="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rs;const wi=typeof window<"u"&&window.trustedTypes;if(wi)try{Rs=wi.createPolicy("vue",{createHTML:e=>e})}catch{}const Un=Rs?e=>Rs.createHTML(e):e=>e,Vl="http://www.w3.org/2000/svg",Bl="http://www.w3.org/1998/Math/MathML",Ie=typeof document<"u"?document:null,Ti=Ie&&Ie.createElement("template"),Jl={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,i)=>{const n=t==="svg"?Ie.createElementNS(Vl,e):t==="mathml"?Ie.createElementNS(Bl,e):s?Ie.createElement(e,{is:s}):Ie.createElement(e);return e==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:e=>Ie.createTextNode(e),createComment:e=>Ie.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ie.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,i,n,r){const l=s?s.previousSibling:t.lastChild;if(n&&(n===r||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),s),!(n===r||!(n=n.nextSibling)););else{Ti.innerHTML=Un(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const o=Ti.content;if(i==="svg"||i==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,s)}return[l?l.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Kl=Symbol("_vtc");function ql(e,t,s){const i=e[Kl];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Ei=Symbol("_vod"),Gl=Symbol("_vsh"),zl=Symbol(""),Ql=/(?:^|;)\s*display\s*:/;function Yl(e,t,s){const i=e.style,n=G(s);let r=!1;if(s&&!n){if(t)if(G(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();s[o]==null&&qt(i,o,"")}else for(const l in t)s[l]==null&&qt(i,l,"");for(const l in s)l==="display"&&(r=!0),qt(i,l,s[l])}else if(n){if(t!==s){const l=i[zl];l&&(s+=";"+l),i.cssText=s,r=Ql.test(s)}}else t&&e.removeAttribute("style");Ei in e&&(e[Ei]=r?i.display:"",e[Gl]&&(i.display="none"))}const Pi=/\s*!important$/;function qt(e,t,s){if(I(s))s.forEach(i=>qt(e,t,i));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const i=Xl(e,t);Pi.test(s)?e.setProperty(et(i),s.replace(Pi,""),"important"):e[i]=s}}const Ai=["Webkit","Moz","ms"],ys={};function Xl(e,t){const s=ys[t];if(s)return s;let i=Be(t);if(i!=="filter"&&i in e)return ys[t]=i;i=Ui(i);for(let n=0;n<Ai.length;n++){const r=Ai[n]+i;if(r in e)return ys[t]=r}return t}const Mi="http://www.w3.org/1999/xlink";function Ii(e,t,s,i,n,r=er(t)){i&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Mi,t.slice(6,t.length)):e.setAttributeNS(Mi,t,s):s==null||r&&!Vi(s)?e.removeAttribute(t):e.setAttribute(t,r?"":Pe(s)?String(s):s)}function Oi(e,t,s,i,n){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?Un(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,a=s==null?e.type==="checkbox"?"on":"":String(s);(o!==a||!("_value"in e))&&(e.value=a),s==null&&e.removeAttribute(t),e._value=s;return}let l=!1;if(s===""||s==null){const o=typeof e[t];o==="boolean"?s=Vi(s):s==null&&o==="string"?(s="",l=!0):o==="number"&&(s=0,l=!0)}try{e[t]=s}catch{}l&&e.removeAttribute(n||t)}function Zl(e,t,s,i){e.addEventListener(t,s,i)}function eo(e,t,s,i){e.removeEventListener(t,s,i)}const Ri=Symbol("_vei");function to(e,t,s,i,n=null){const r=e[Ri]||(e[Ri]={}),l=r[t];if(i&&l)l.value=i;else{const[o,a]=so(t);if(i){const h=r[t]=ro(i,n);Zl(e,o,h,a)}else l&&(eo(e,o,l,a),r[t]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function so(e){let t;if(Ni.test(e)){t={};let i;for(;i=e.match(Ni);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):et(e.slice(2)),t]}let xs=0;const io=Promise.resolve(),no=()=>xs||(io.then(()=>xs=0),xs=Date.now());function ro(e,t){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;Ae(lo(i,s.value),t,5,[i])};return s.value=e,s.attached=no(),s}function lo(e,t){if(I(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(i=>n=>!n._stopped&&i&&i(n))}else return t}const Di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,oo=(e,t,s,i,n,r)=>{const l=n==="svg";t==="class"?ql(e,i,l):t==="style"?Yl(e,s,i):es(t)?Ds(t)||to(e,t,s,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):co(e,t,i,l))?(Oi(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ii(e,t,i,l,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!G(i))?Oi(e,Be(t),i,r,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Ii(e,t,i,l))};function co(e,t,s,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Di(t)&&R(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Di(t)&&G(s)?!1:t in e}const ao=Z({patchProp:oo},Jl);let ji;function fo(){return ji||(ji=Cl(ao))}const uo=((...e)=>{const t=fo().createApp(...e),{mount:s}=t;return t.mount=i=>{const n=po(i);if(!n)return;const r=t._component;!R(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const l=s(n,!1,ho(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),l},t});function ho(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function po(e){return G(e)?document.querySelector(e):e}const Le=(e,t)=>{const s=e.__vccOpts||e;for(const[i,n]of t)s[i]=n;return s},go={class:"header"},mo={__name:"Header",setup(e){return(t,s)=>(ne(),ae("header",go,[...s[0]||(s[0]=[ot('<div class="container" data-v-e0d1bb22><div class="header-content" data-v-e0d1bb22><h1 class="header-title" data-v-e0d1bb22><a href="#" data-v-e0d1bb22><i class="fas fa-code" data-v-e0d1bb22></i> cc的个人技术博客 </a></h1><p class="header-subtitle" data-v-e0d1bb22>记录技术学习与实践的点滴</p></div></div>',1)])]))}},vo=Le(mo,[["__scopeId","data-v-e0d1bb22"]]),_o={class:"navbar"},bo={class:"container"},yo={class:"navbar-content"},xo={class:"nav-actions"},So={__name:"Navbar",setup(e){const t=Ze(!1),s=()=>{t.value=!t.value,localStorage.setItem("theme",t.value?"dark":"light"),document.body.parentElement.setAttribute("data-theme",t.value?"dark":"light")};return ls(()=>{const i=localStorage.getItem("theme");t.value=i==="dark",document.body.parentElement.setAttribute("data-theme",t.value?"dark":"light")}),(i,n)=>(ne(),ae("nav",_o,[M("div",bo,[M("div",yo,[n[1]||(n[1]=ot('<ul class="nav-links" data-v-63e52bdf><li data-v-63e52bdf><a href="#" class="nav-link active" data-v-63e52bdf>首页</a></li><li class="nav-dropdown" data-v-63e52bdf><a href="#" class="nav-link dropdown-toggle" data-v-63e52bdf>前端知识 <i class="fas fa-chevron-down" data-v-63e52bdf></i></a><ul class="dropdown-menu" data-v-63e52bdf><li data-v-63e52bdf><a href="#" class="dropdown-item" data-v-63e52bdf>HTML/CSS</a></li><li data-v-63e52bdf><a href="#" class="dropdown-item" data-v-63e52bdf>JavaScript</a></li><li data-v-63e52bdf><a href="#" class="dropdown-item" data-v-63e52bdf>前端框架</a></li><li data-v-63e52bdf><a href="#" class="dropdown-item" data-v-63e52bdf>响应式设计</a></li></ul></li><li class="nav-dropdown" data-v-63e52bdf><a href="#" class="nav-link dropdown-toggle" data-v-63e52bdf>后端知识 <i class="fas fa-chevron-down" data-v-63e52bdf></i></a><ul class="dropdown-menu" data-v-63e52bdf><li data-v-63e52bdf><a href="#" class="dropdown-item" data-v-63e52bdf>Node.js</a></li><li data-v-63e52bdf><a href="#" class="dropdown-item" data-v-63e52bdf>数据库</a></li><li data-v-63e52bdf><a href="#" class="dropdown-item" data-v-63e52bdf>API开发</a></li><li data-v-63e52bdf><a href="#" class="dropdown-item" data-v-63e52bdf>服务器配置</a></li></ul></li><li data-v-63e52bdf><a href="#" class="nav-link" data-v-63e52bdf>实战项目</a></li><li data-v-63e52bdf><a href="#" class="nav-link" data-v-63e52bdf>学习资源</a></li><li data-v-63e52bdf><a href="#" class="nav-link" data-v-63e52bdf>关于我</a></li></ul>',1)),M("div",xo,[n[0]||(n[0]=M("div",{class:"search-container"},[M("input",{type:"text",class:"search-input",placeholder:"搜索文章..."}),M("button",{class:"search-button"},[M("i",{class:"fas fa-search"})])],-1)),M("button",{class:"theme-toggle","aria-label":"切换主题",onClick:s},[M("i",{class:ut(t.value?"fas fa-sun":"fas fa-moon")},null,2)])])])])]))}},Co=Le(So,[["__scopeId","data-v-63e52bdf"]]),wo={class:"category-nav"},To=["data-category","onClick"],Eo={__name:"CategoryNav",props:{activeCategory:{type:String,default:"all"}},emits:["categoryChange"],setup(e){const t=[{value:"all",label:"全部"},{value:"frontend",label:"前端知识"},{value:"backend",label:"后端知识"},{value:"project",label:"实战项目"},{value:"resource",label:"学习资源"}],s=i=>{emit("categoryChange",i)};return(i,n)=>(ne(),ae("div",wo,[(ne(),ae(ue,null,os(t,r=>M("button",{key:r.value,class:ut(["category-btn",{active:e.activeCategory===r.value}]),"data-category":r.value,onClick:l=>s(r.value)},he(r.label),11,To)),64))]))}},Po=Le(Eo,[["__scopeId","data-v-1dc581ae"]]),Ao=["data-category"],Mo={class:"article-image"},Io=["src","alt"],Oo={class:"article-content"},Ro={class:"article-header"},No={class:"article-category"},Do={class:"article-date"},jo={class:"article-title"},Ho={href:"#"},Lo={class:"article-excerpt"},Fo={class:"article-meta"},$o={class:"article-tags"},ko=["onClick"],Uo={class:"article-stats"},Wo={class:"article-stat"},Vo={class:"article-stat"},Bo={class:"article-stat"},Jo={__name:"ArticleCard",props:{article:{type:Object,required:!0}},setup(e){const t=s=>{window.dispatchEvent(new CustomEvent("tagClick",{detail:{tag:s}}))};return(s,i)=>(ne(),ae("article",{class:"article-card","data-category":e.article.category},[M("div",Mo,[M("img",{src:e.article.image,alt:e.article.title,class:"article-img"},null,8,Io)]),M("div",Oo,[M("div",Ro,[M("div",No,he(e.article.categoryName),1),M("div",Do,[i[0]||(i[0]=M("i",{class:"far fa-calendar-alt"},null,-1)),bt(" "+he(e.article.date),1)])]),M("h2",jo,[M("a",Ho,he(e.article.title),1)]),M("p",Lo,he(e.article.excerpt),1),M("div",Fo,[M("div",$o,[(ne(!0),ae(ue,null,os(e.article.tags,n=>(ne(),ae("a",{key:n,href:"#",class:"article-tag",onClick:r=>t(n)},he(n),9,ko))),128))]),M("div",Uo,[M("span",Wo,[i[1]||(i[1]=M("i",{class:"far fa-eye"},null,-1)),bt(" "+he(e.article.stats.views),1)]),M("span",Vo,[i[2]||(i[2]=M("i",{class:"far fa-comment"},null,-1)),bt(" "+he(e.article.stats.comments),1)]),M("span",Bo,[i[3]||(i[3]=M("i",{class:"far fa-heart"},null,-1)),bt(" "+he(e.article.stats.likes),1)])])])])],8,Ao))}},Ko=Le(Jo,[["__scopeId","data-v-3914b629"]]),qo={class:"articles-container"},Go={__name:"ArticlesContainer",props:{articles:{type:Array,required:!0}},setup(e){return(t,s)=>(ne(),ae("div",qo,[(ne(!0),ae(ue,null,os(e.articles,i=>(ne(),Ml(Ko,{key:i.id,article:i},null,8,["article"]))),128))]))}},zo=Le(Go,[["__scopeId","data-v-e6c61556"]]),Qo={class:"pagination"},Yo={__name:"Pagination",setup(e){return(t,s)=>(ne(),ae("div",Qo,[...s[0]||(s[0]=[ot('<a href="#" class="pagination-link disabled" data-v-9fbf29f2>上一页</a><a href="#" class="pagination-link active" data-v-9fbf29f2>1</a><a href="#" class="pagination-link" data-v-9fbf29f2>2</a><a href="#" class="pagination-link" data-v-9fbf29f2>3</a><span class="pagination-ellipsis" data-v-9fbf29f2>...</span><a href="#" class="pagination-link" data-v-9fbf29f2>10</a><a href="#" class="pagination-link" data-v-9fbf29f2>下一页</a>',7)])]))}},Xo=Le(Yo,[["__scopeId","data-v-9fbf29f2"]]),Zo={class:"footer"},ec={class:"container"},tc={class:"footer-content"},sc={class:"footer-section"},ic={class:"tag-cloud"},nc=["onClick"],rc={__name:"Footer",setup(e){const t=["JavaScript","Node.js","前端开发","React","Vue","数据库","API开发","性能优化"],s=i=>{window.dispatchEvent(new CustomEvent("tagClick",{detail:{tag:i}}))};return(i,n)=>(ne(),ae("footer",Zo,[M("div",ec,[M("div",tc,[n[1]||(n[1]=ot('<div class="footer-section" data-v-c394dca6><h3 class="footer-section-title" data-v-c394dca6>关于博客</h3><p class="footer-section-text" data-v-c394dca6> 个人技术博客，记录前端、后端等技术领域的学习与实践，分享技术心得和项目经验。 </p><div class="social-links" data-v-c394dca6><a href="#" class="social-link" aria-label="GitHub" data-v-c394dca6><i class="fab fa-github" data-v-c394dca6></i></a><a href="#" class="social-link" aria-label="Twitter" data-v-c394dca6><i class="fab fa-twitter" data-v-c394dca6></i></a><a href="#" class="social-link" aria-label="LinkedIn" data-v-c394dca6><i class="fab fa-linkedin" data-v-c394dca6></i></a><a href="#" class="social-link" aria-label="掘金" data-v-c394dca6><i class="fas fa-code" data-v-c394dca6></i></a></div></div><div class="footer-section" data-v-c394dca6><h3 class="footer-section-title" data-v-c394dca6>分类导航</h3><ul class="footer-links" data-v-c394dca6><li data-v-c394dca6><a href="#" class="footer-link" data-v-c394dca6>前端知识</a></li><li data-v-c394dca6><a href="#" class="footer-link" data-v-c394dca6>后端知识</a></li><li data-v-c394dca6><a href="#" class="footer-link" data-v-c394dca6>实战项目</a></li><li data-v-c394dca6><a href="#" class="footer-link" data-v-c394dca6>学习资源</a></li><li data-v-c394dca6><a href="#" class="footer-link" data-v-c394dca6>关于我</a></li></ul></div>',2)),M("div",sc,[n[0]||(n[0]=M("h3",{class:"footer-section-title"},"热门标签",-1)),M("div",ic,[(ne(),ae(ue,null,os(t,r=>M("a",{key:r,href:"#",class:"tag-item",onClick:l=>s(r)},he(r),9,nc)),64))])]),n[2]||(n[2]=ot('<div class="footer-section" data-v-c394dca6><h3 class="footer-section-title" data-v-c394dca6>订阅更新</h3><p class="footer-section-text" data-v-c394dca6> 订阅我的技术周刊，获取最新技术动态和学习资源 </p><form class="subscribe-form" data-v-c394dca6><input type="email" class="subscribe-input" placeholder="输入您的邮箱" required data-v-c394dca6><button type="submit" class="subscribe-button" data-v-c394dca6>订阅</button></form></div>',1))]),n[3]||(n[3]=ot('<div class="footer-bottom" data-v-c394dca6><p class="footer-copyright" data-v-c394dca6> © 2026 个人技术博客. All rights reserved. </p><div class="footer-bottom-links" data-v-c394dca6><a href="#" class="footer-bottom-link" data-v-c394dca6>隐私政策</a><a href="#" class="footer-bottom-link" data-v-c394dca6>使用条款</a><a href="#" class="footer-bottom-link" data-v-c394dca6>联系我</a></div></div>',1))])]))}},lc=Le(rc,[["__scopeId","data-v-c394dca6"]]),oc={class:"modal-content"},cc={class:"modal-header"},ac={class:"modal-title"},fc=["innerHTML"],uc={__name:"TagModal",setup(e){const t=Ze(!1),s=Ze("标签详情"),i=Ze(""),n={CSS:{title:"CSS",content:`
      <h3>CSS (Cascading Style Sheets)</h3>
      <p>CSS是一种用于描述HTML文档样式的语言，它负责网页的布局、颜色、字体等视觉效果。</p>
      <h3>核心概念</h3>
      <ul>
        <li>选择器：用于选择要样式化的HTML元素</li>
        <li>属性：要设置的样式属性</li>
        <li>值：属性的具体值</li>
        <li>盒模型：控制元素的大小和间距</li>
        <li>浮动：控制元素的布局方式</li>
        <li>定位：控制元素的精确位置</li>
        <li>Flexbox：一维布局系统</li>
        <li>Grid：二维布局系统</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.box {
    width: 200px;
    height: 200px;
    background-color: #4a90e2;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.box:hover {
    transform: translateY(-5px);
}</code></pre>
    `},Grid布局:{title:"Grid布局",content:`
      <h3>CSS Grid布局</h3>
      <p>CSS Grid是一种强大的二维布局系统，允许我们同时控制行和列，实现复杂的网格结构。</p>
      <h3>核心概念</h3>
      <ul>
        <li>网格容器：应用display: grid的父元素</li>
        <li>网格项：网格容器的直接子元素</li>
        <li>网格线：分隔网格行和列的线</li>
        <li>网格轨道：两条相邻网格线之间的空间</li>
        <li>网格单元格：网格中最小的单位</li>
        <li>网格区域：由一个或多个网格单元格组成的矩形区域</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
}

.grid-item {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}</code></pre>
    `},响应式设计:{title:"响应式设计",content:`
      <h3>响应式设计</h3>
      <p>响应式设计是一种设计方法，使网站能够根据不同设备的屏幕尺寸和方向自动调整布局和内容。</p>
      <h3>核心技术</h3>
      <ul>
        <li>媒体查询：根据屏幕尺寸应用不同的CSS规则</li>
        <li>流式布局：使用百分比而非固定像素值</li>
        <li>灵活的图像：确保图像能够适应容器大小</li>
        <li>相对单位：使用rem、em、vw等相对单位</li>
        <li>断点：定义布局变化的屏幕尺寸</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>/* 基础样式 */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 媒体查询 */
@media (max-width: 992px) {
    .nav-links {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 768px) {
    .articles-container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 576px) {
    .header-title {
        font-size: 1.75rem;
    }
}</code></pre>
    `},"Node.js":{title:"Node.js",content:`
      <h3>Node.js</h3>
      <p>Node.js是一个基于Chrome V8引擎的JavaScript运行时，允许在服务器端运行JavaScript代码。</p>
      <h3>核心特性</h3>
      <ul>
        <li>非阻塞I/O：提高应用性能和吞吐量</li>
        <li>事件驱动：基于事件循环处理请求</li>
        <li>单线程：避免了多线程编程的复杂性</li>
        <li>丰富的模块系统：通过npm管理依赖</li>
        <li>跨平台：可在Windows、macOS和Linux上运行</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // 处理请求
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello Node.js!</h1>');
    } else if (req.url === '/api/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello from API!' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});</code></pre>
    `},异步编程:{title:"异步编程",content:`
      <h3>异步编程</h3>
      <p>异步编程是一种编程范式，允许程序在等待某些操作完成时继续执行其他任务，而不是阻塞等待。</p>
      <h3>核心概念</h3>
      <ul>
        <li>回调函数：异步操作完成后执行的函数</li>
        <li>Promise：表示异步操作的最终完成或失败</li>
        <li>async/await：基于Promise的语法糖，使异步代码更易读</li>
        <li>事件循环：Node.js处理异步操作的机制</li>
        <li>非阻塞I/O：允许程序在I/O操作时继续执行</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 使用回调函数
function fetchData(callback) {
    setTimeout(() => {
        callback(null, { data: 'Hello World' });
    }, 1000);
}

// 使用Promise
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: 'Hello World' });
        }, 1000);
    });
}

// 使用async/await
async function fetchDataWithAsync() {
    try {
        const result = await fetchDataWithPromise();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// 调用示例
fetchData((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});

fetchDataWithPromise()
    .then(data => console.log(data))
    .catch(error => console.error(error));

fetchDataWithAsync();</code></pre>
    `},JavaScript:{title:"JavaScript",content:`
      <h3>JavaScript</h3>
      <p>JavaScript是一种高级、解释型的编程语言，主要用于网页交互，但也可用于服务器端编程（如Node.js）。</p>
      <h3>核心概念</h3>
      <ul>
        <li>变量和数据类型</li>
        <li>函数和作用域</li>
        <li>对象和数组</li>
        <li>条件语句和循环</li>
        <li>异步编程</li>
        <li>DOM操作</li>
        <li>ES6+特性</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 变量声明
let name = 'John';
const age = 30;
var city = 'New York';

// 函数定义
function greet(person) {
    return "Hello, " + person + "!";
}

// 箭头函数
const greetArrow = (person) => "Hello, " + person + "!";

// 对象
const user = {
    name: 'John',
    age: 30,
    greet: function() {
        return "Hello, my name is " + this.name + "!";
    }
};

// 数组
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// 异步编程
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// 调用函数
console.log(greet('Alice'));
console.log(user.greet());
console.log(doubled);
fetchData();</code></pre>
    `},全栈开发:{title:"全栈开发",content:`
      <h3>全栈开发</h3>
      <p>全栈开发是指能够同时处理前端和后端开发的开发人员，他们熟悉从数据库到用户界面的整个应用栈。</p>
      <h3>核心技能</h3>
      <ul>
        <li>前端技术：HTML, CSS, JavaScript, 前端框架</li>
        <li>后端技术：服务器端语言, 数据库, API开发</li>
        <li>DevOps：版本控制, 部署, 服务器配置</li>
        <li>系统设计：架构设计, 性能优化</li>
        <li>问题解决：调试, 故障排除</li>
      </ul>
      <h3>示例技术栈</h3>
      <ul>
        <li>MERN栈：MongoDB, Express, React, Node.js</li>
        <li>MEAN栈：MongoDB, Express, Angular, Node.js</li>
        <li>LAMP栈：Linux, Apache, MySQL, PHP</li>
        <li>JAMstack：JavaScript, APIs, Markup</li>
      </ul>
    `},博客系统:{title:"博客系统",content:`
      <h3>博客系统</h3>
      <p>博客系统是一种允许用户发布、管理和分享内容的 web 应用程序，通常用于个人或企业的内容营销。</p>
      <h3>核心功能</h3>
      <ul>
        <li>内容管理：发布、编辑、删除文章</li>
        <li>用户管理：注册、登录、权限控制</li>
        <li>分类和标签：内容组织</li>
        <li>评论系统：用户互动</li>
        <li>搜索功能：内容检索</li>
        <li>响应式设计：多设备适配</li>
      </ul>
      <h3>技术实现</h3>
      <p>博客系统可以使用多种技术栈实现，例如：</p>
      <ul>
        <li>前端：HTML, CSS, JavaScript, 前端框架</li>
        <li>后端：Node.js, Python, PHP等</li>
        <li>数据库：MySQL, MongoDB等</li>
        <li>部署：GitHub Pages, Vercel, Netlify等</li>
      </ul>
    `},实战项目:{title:"实战项目",content:`
      <h3>实战项目</h3>
      <p>实战项目是指通过实际开发一个完整的应用程序来学习和应用编程技能的项目，它能够帮助开发者将理论知识转化为实际经验。</p>
      <h3>项目类型</h3>
      <ul>
        <li>个人网站/博客</li>
        <li>电子商务网站</li>
        <li>社交媒体应用</li>
        <li>任务管理系统</li>
        <li>内容管理系统</li>
        <li>API服务</li>
      </ul>
      <h3>项目开发流程</h3>
      <ol>
        <li>需求分析：明确项目目标和功能</li>
        <li>系统设计：架构设计、数据库设计</li>
        <li>前端开发：用户界面实现</li>
        <li>后端开发：服务器端逻辑实现</li>
        <li>测试：功能测试、性能测试</li>
        <li>部署：上线发布</li>
        <li>维护：bug修复、功能更新</li>
      </ol>
    `},模块化:{title:"模块化",content:`
      <h3>模块化</h3>
      <p>模块化是一种将代码分解为独立、可重用单元的编程方法，它有助于提高代码的可维护性、可测试性和可扩展性。</p>
      <h3>核心概念</h3>
      <ul>
        <li>模块：独立的代码单元，具有明确的接口</li>
        <li>导入/导出：模块间的依赖管理</li>
        <li>命名空间：避免命名冲突</li>
        <li>封装：隐藏模块内部实现细节</li>
        <li>代码组织：逻辑上的代码分组</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// CommonJS模块
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};

// 使用模块
const math = require('./math');
console.log(math.add(1, 2)); // 3

// ES模块
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// 使用模块
import { add, subtract } from './math.js';
console.log(add(1, 2)); // 3</code></pre>
    `},前端开发:{title:"前端开发",content:`
      <h3>前端开发</h3>
      <p>前端开发是创建网站或应用程序用户界面的过程，主要关注用户直接交互的部分。</p>
      <h3>核心技术</h3>
      <ul>
        <li>HTML：网页的结构</li>
        <li>CSS：网页的样式</li>
        <li>JavaScript：网页的交互</li>
        <li>前端框架：React, Vue, Angular等</li>
        <li>响应式设计：多设备适配</li>
        <li>性能优化：提高网页加载速度和运行效率</li>
      </ul>
      <h3>开发工具</h3>
      <ul>
        <li>代码编辑器：VS Code, Sublime Text等</li>
        <li>浏览器开发者工具：调试和性能分析</li>
        <li>包管理器：npm, yarn等</li>
        <li>构建工具：Webpack, Vite等</li>
        <li>版本控制：Git</li>
      </ul>
    `},MongoDB:{title:"MongoDB",content:`
      <h3>MongoDB</h3>
      <p>MongoDB是一种开源的NoSQL数据库，它使用文档模型存储数据，而不是传统的表格结构。</p>
      <h3>核心特性</h3>
      <ul>
        <li>文档模型：使用BSON（二进制JSON）格式存储数据</li>
        <li>灵活的模式：不需要预定义表结构</li>
        <li>水平可扩展性：支持分片</li>
        <li>强大的查询语言：支持丰富的查询操作</li>
        <li>索引支持：提高查询性能</li>
        <li>复制：提供高可用性</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 连接到MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 定义模式
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// 创建模型
const User = mongoose.model('User', userSchema);

// 创建文档
const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
});

// 保存文档
newUser.save()
    .then(user => console.log('User saved:', user))
    .catch(error => console.error('Error saving user:', error));

// 查询文档
User.find({ age: { $gt: 25 } })
    .then(users => console.log('Users over 25:', users))
    .catch(error => console.error('Error finding users:', error));</code></pre>
    `},数据库:{title:"数据库",content:`
      <h3>数据库</h3>
      <p>数据库是按照一定的数据结构组织、存储和管理数据的仓库，它是应用程序的重要组成部分。</p>
      <h3>数据库类型</h3>
      <ul>
        <li>关系型数据库：MySQL, PostgreSQL, Oracle等</li>
        <li>NoSQL数据库：MongoDB, Redis, Cassandra等</li>
        <li>内存数据库：Redis, Memcached等</li>
        <li>图形数据库：Neo4j等</li>
      </ul>
      <h3>核心概念</h3>
      <ul>
        <li>表/集合：数据的组织结构</li>
        <li>行/文档：数据的记录</li>
        <li>列/字段：数据的属性</li>
        <li>索引：提高查询性能</li>
        <li>事务：确保数据一致性</li>
        <li>查询：检索数据的操作</li>
      </ul>
      <h3>示例SQL查询</h3>
      <pre><code>-- 创建表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 插入数据
INSERT INTO users (name, email, age) VALUES ('John Doe', 'john@example.com', 30);

-- 查询数据
SELECT * FROM users WHERE age > 25;

-- 更新数据
UPDATE users SET age = 31 WHERE id = 1;

-- 删除数据
DELETE FROM users WHERE id = 1;</code></pre>
    `},性能优化:{title:"性能优化",content:`
      <h3>性能优化</h3>
      <p>性能优化是指通过各种技术和方法，提高应用程序的运行速度、响应时间和资源利用率。</p>
      <h3>前端性能优化</h3>
      <ul>
        <li>资源压缩：压缩HTML, CSS, JavaScript文件</li>
        <li>资源缓存：利用浏览器缓存</li>
        <li>图片优化：压缩图片, 使用适当的格式</li>
        <li>代码分割：按需加载代码</li>
        <li>减少HTTP请求：合并文件, 使用CSS Sprites</li>
        <li>使用CDN：内容分发网络</li>
      </ul>
      <h3>后端性能优化</h3>
      <ul>
        <li>数据库优化：索引, 查询优化, 缓存</li>
        <li>服务器优化：负载均衡, 集群</li>
        <li>代码优化：算法, 数据结构</li>
        <li>缓存策略：Redis, Memcached</li>
        <li>异步处理：消息队列, 非阻塞I/O</li>
      </ul>
      <h3>性能监控</h3>
      <ul>
        <li>前端监控：页面加载时间, 交互时间</li>
        <li>后端监控：响应时间, 错误率, 资源使用率</li>
        <li>工具：Google PageSpeed Insights, Lighthouse, New Relic等</li>
      </ul>
    `},学习资源:{title:"学习资源",content:`
      <h3>学习资源</h3>
      <p>学习资源是指有助于开发者学习和提升技能的各种材料，包括教程、文档、书籍、视频等。</p>
      <h3>推荐资源</h3>
      <ul>
        <li>在线教程：MDN Web Docs, W3Schools, freeCodeCamp</li>
        <li>文档：官方文档是最权威的学习资源</li>
        <li>书籍：《JavaScript高级程序设计》, 《深入理解计算机系统》等</li>
        <li>视频课程：Udemy, Coursera, edX</li>
        <li>博客：CSS-Tricks, Smashing Magazine, Medium</li>
        <li>社区：Stack Overflow, GitHub, Reddit</li>
        <li>工具：CodePen, JSFiddle, Replit</li>
      </ul>
      <h3>学习方法</h3>
      <ul>
        <li>实践：通过项目学习是最有效的方法</li>
        <li>阅读：学习他人的代码和经验</li>
        <li>分享：教授他人有助于巩固知识</li>
        <li>持续学习：技术不断发展，需要保持学习的习惯</li>
        <li>解决问题：通过解决实际问题提升技能</li>
      </ul>
    `},技术趋势:{title:"技术趋势",content:`
      <h3>技术趋势</h3>
      <p>技术趋势是指当前和未来一段时间内技术发展的方向和热点，了解技术趋势有助于开发者保持竞争力。</p>
      <h3>前端趋势</h3>
      <ul>
        <li>WebAssembly：高性能Web应用</li>
        <li>Progressive Web Apps (PWAs)：类原生应用体验</li>
        <li>Server-Side Rendering (SSR)：改善首屏加载性能</li>
        <li>Jamstack：静态站点生成和API集成</li>
        <li>Web Components：原生组件化</li>
      </ul>
      <h3>后端趋势</h3>
      <ul>
        <li>Serverless：无服务器架构</li>
        <li>容器化：Docker, Kubernetes</li>
        <li>微服务：服务拆分和独立部署</li>
        <li>GraphQL：灵活的API查询语言</li>
        <li>边缘计算：将计算移近用户</li>
      </ul>
      <h3>其他趋势</h3>
      <ul>
        <li>人工智能：机器学习, 自然语言处理</li>
        <li>区块链：去中心化应用</li>
        <li>物联网：设备互联</li>
        <li>5G：高速网络带来的新可能</li>
        <li>低代码/无代码：简化开发流程</li>
      </ul>
    `},React:{title:"React",content:`
      <h3>React</h3>
      <p>React是Facebook开发的一个用于构建用户界面的JavaScript库，它采用组件化的开发方式，使构建复杂的用户界面变得更加简单。</p>
      <h3>核心概念</h3>
      <ul>
        <li>组件：UI的独立、可重用部分</li>
        <li>Props：组件间传递数据的方式</li>
        <li>State：组件内部的可变数据</li>
        <li>JSX：JavaScript的语法扩展，用于描述UI</li>
        <li>生命周期方法：组件不同阶段的钩子函数</li>
        <li>Hooks：React 16.8+引入的函数式组件状态管理</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 类组件
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}

// 函数组件 + Hooks
function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// 渲染组件
ReactDOM.render(<Counter />, document.getElementById('root'));</code></pre>
    `},Vue:{title:"Vue",content:`
      <h3>Vue</h3>
      <p>Vue是一个渐进式的JavaScript框架，用于构建用户界面，它的核心库只关注视图层，易于集成到现有项目中。</p>
      <h3>核心概念</h3>
      <ul>
        <li>组件：可重用的Vue实例</li>
        <li>Props：父组件向子组件传递数据</li>
        <li>Data：组件的响应式数据</li>
        <li>Computed：计算属性，基于其他数据派生</li>
        <li>Watch：监听数据变化</li>
        <li>指令：带有v-前缀的特殊属性</li>
        <li>生命周期钩子：组件不同阶段的回调函数</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 基本示例
&lt;div id="app"&gt;
    &lt;h1&gt;{{ message }}&lt;/h1&gt;
    &lt;button @click="increment"&gt;Increment&lt;/button&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
&lt;/div&gt;

// Vue实例
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        count: 0
    },
    methods: {
        increment() {
            this.count++;
        }
    }
});

// 组件示例
Vue.component('counter', {
    template: '&lt;div&gt;&lt;h2&gt;Counter Component&lt;/h2&gt;&lt;p&gt;Count: {{ count }}&lt;/p&gt;&lt;button @click="increment"&gt;Increment&lt;/button&gt;&lt;/div&gt;',
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    }
});</code></pre>
    `},API开发:{title:"API开发",content:`
      <h3>API开发</h3>
      <p>API（Application Programming Interface）开发是指创建和维护应用程序之间通信的接口，它允许不同的系统交换数据和功能。</p>
      <h3>API类型</h3>
      <ul>
        <li>RESTful API：基于HTTP协议的API设计风格</li>
        <li>GraphQL：Facebook开发的API查询语言</li>
        <li>WebSocket：实时双向通信</li>
        <li>gRPC：Google开发的高性能RPC框架</li>
      </ul>
      <h3>RESTful API设计原则</h3>
      <ul>
        <li>使用HTTP方法：GET, POST, PUT, DELETE等</li>
        <li>使用资源路径：/users, /products等</li>
        <li>使用状态码：200 OK, 404 Not Found等</li>
        <li>使用JSON格式：数据交换格式</li>
        <li>无状态：服务器不存储客户端状态</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// Express.js API示例
const express = require('express');
const app = express();
const port = 3000;

// 中间件
app.use(express.json());

// 模拟数据
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET请求
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST请求
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT请求
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});

// DELETE请求
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
    
    users.splice(userIndex, 1);
    res.json({ message: 'User deleted' });
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});</code></pre>
    `}},r=u=>{n[u]?(s.value=n[u].title,i.value=n[u].content):(s.value=u,i.value="<p>暂无"+u+"的详细信息。</p><p>正在努力完善中，敬请期待！</p>"),t.value=!0,document.body.style.overflow="hidden"},l=()=>{t.value=!1,document.body.style.overflow="",setTimeout(()=>{s.value="标签详情",i.value=""},300)},o=u=>{const p=u.detail.tag;r(p)},a=u=>{u.target.id==="tagModal"&&l()},h=u=>{u.key==="Escape"&&t.value&&l()};return ls(()=>{window.addEventListener("tagClick",o),document.addEventListener("click",a),document.addEventListener("keydown",h)}),zs(()=>{window.removeEventListener("tagClick",o),document.removeEventListener("click",a),document.removeEventListener("keydown",h)}),Bt(t,u=>{}),(u,p)=>(ne(),ae("div",{id:"tagModal",class:ut(["modal",{active:t.value}])},[M("div",oc,[M("div",cc,[M("h2",ac,he(s.value),1),M("button",{class:"modal-close",onClick:l},"×")]),M("div",{class:"modal-body",innerHTML:i.value},null,8,fc)])],2))}},dc=Le(uc,[["__scopeId","data-v-71bf5eec"]]),hc=["data-theme"],pc={class:"main-content"},gc={class:"container"},mc={__name:"App",setup(e){const t=Ze(!1),s=Ze("all"),i=Ze([{id:1,title:"深入理解CSS Grid布局",excerpt:"CSS Grid是一种强大的二维布局系统，允许我们同时控制行和列，实现复杂的网格结构。本文将详细介绍Grid的核心概念和实际应用技巧。",category:"frontend",categoryName:"前端知识",date:"2026-02-01",tags:["CSS","Grid布局","响应式设计"],stats:{views:245,comments:12,likes:36},image:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CSS%20Grid%20layout%20tutorial%2C%20modern%20web%20design%2C%20code%20snippets%2C%20clean%20minimal%20style&image_size=square"},{id:2,title:"Node.js异步编程最佳实践",excerpt:"异步编程是Node.js的核心特性，本文将介绍Promise、async/await等异步编程模式的使用技巧，以及如何避免常见的异步编程陷阱。",category:"backend",categoryName:"后端知识",date:"2026-01-28",tags:["Node.js","异步编程","JavaScript"],stats:{views:189,comments:8,likes:29},image:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Node.js%20async%20programming%2C%20JavaScript%20code%2C%20Promise%20and%20async%2Fawait%2C%20modern%20backend%20development&image_size=square"},{id:3,title:"从零构建个人博客系统",excerpt:"本文将详细介绍如何使用现代前端技术和后端框架构建一个完整的个人博客系统，包括前端界面、后端API和数据库设计。",category:"project",categoryName:"实战项目",date:"2026-01-25",tags:["全栈开发","博客系统","实战项目"],stats:{views:320,comments:15,likes:48},image:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Personal%20blog%20system%20development%2C%20full%20stack%20project%2C%20modern%20web%20application%2C%20clean%20interface&image_size=square"},{id:4,title:"JavaScript模块化开发详解",excerpt:"模块化是现代JavaScript开发的重要组成部分，本文将介绍CommonJS、ES Modules等模块化规范的使用方法和最佳实践。",category:"frontend",categoryName:"前端知识",date:"2026-01-20",tags:["JavaScript","模块化","前端开发"],stats:{views:210,comments:10,likes:32},image:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=JavaScript%20modular%20development%2C%20ES%20Modules%2C%20CommonJS%2C%20code%20organization%2C%20modern%20frontend&image_size=square"},{id:5,title:"MongoDB数据库性能优化技巧",excerpt:"MongoDB是一种流行的NoSQL数据库，本文将分享一些实用的性能优化技巧，包括索引设计、查询优化和服务器配置等方面。",category:"backend",categoryName:"后端知识",date:"2026-01-15",tags:["MongoDB","数据库","性能优化"],stats:{views:175,comments:7,likes:25},image:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MongoDB%20database%20performance%20optimization%2C%20NoSQL%20database%2C%20index%20design%2C%20query%20optimization&image_size=square"},{id:6,title:"2026年前端开发者必备学习资源",excerpt:"本文整理了2026年前端开发者必备的学习资源，包括在线教程、文档、社区和工具等，帮助你快速提升前端开发技能。",category:"resource",categoryName:"学习资源",date:"2026-01-10",tags:["学习资源","前端开发","技术趋势"],stats:{views:280,comments:12,likes:42},image:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Frontend%20developer%20learning%20resources%2C%20online%20tutorials%2C%20documentation%2C%20modern%20web%20development%20tools&image_size=square"}]),n=kn(()=>s.value==="all"?i.value:i.value.filter(l=>l.category===s.value)),r=l=>{s.value=l};return ls(()=>{const l=localStorage.getItem("theme");t.value=l==="dark"}),(l,o)=>(ne(),ae("div",{class:"app","data-theme":t.value?"dark":"light"},[Q(vo),Q(Co),M("main",pc,[M("div",gc,[Q(Po,{activeCategory:s.value,onCategoryChange:r},null,8,["activeCategory"]),Q(zo,{articles:n.value},null,8,["articles"]),Q(Xo)])]),Q(lc),Q(dc)],8,hc))}},vc=Le(mc,[["__scopeId","data-v-5a4720d5"]]);uo(vc).mount("#app");
