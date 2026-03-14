function ld(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function ud(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ol={exports:{}},wo={},jl={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),cd=Symbol.for("react.portal"),dd=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),hd=Symbol.for("react.provider"),md=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),vd=Symbol.for("react.suspense"),yd=Symbol.for("react.memo"),wd=Symbol.for("react.lazy"),us=Symbol.iterator;function xd(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var Il={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dl=Object.assign,_l={};function mn(e,t,n){this.props=e,this.context=t,this.refs=_l,this.updater=n||Il}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ul(){}Ul.prototype=mn.prototype;function pi(e,t,n){this.props=e,this.context=t,this.refs=_l,this.updater=n||Il}var fi=pi.prototype=new Ul;fi.constructor=pi;Dl(fi,mn.prototype);fi.isPureReactComponent=!0;var cs=Array.isArray,Ml=Object.prototype.hasOwnProperty,hi={current:null},zl={key:!0,ref:!0,__self:!0,__source:!0};function Wl(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Ml.call(t,r)&&!zl.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:sr,type:e,key:a,ref:i,props:o,_owner:hi.current}}function Cd(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mi(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Sd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ds=/\/+/g;function qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sd(""+e.key):t.toString(36)}function Ir(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case sr:case cd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+qo(i,0):r,cs(o)?(n="",e!=null&&(n=e.replace(ds,"$&/")+"/"),Ir(o,t,n,"",function(u){return u})):o!=null&&(mi(o)&&(o=Cd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ds,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",cs(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+qo(a,s);i+=Ir(a,t,n,l,o)}else if(l=xd(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+qo(a,s++),i+=Ir(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function gr(e,t,n){if(e==null)return e;var r=[],o=0;return Ir(e,r,"","",function(a){return t.call(n,a,o++)}),r}function kd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Dr={transition:null},Ed={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:hi};function Fl(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!mi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=mn;j.Fragment=dd;j.Profiler=fd;j.PureComponent=pi;j.StrictMode=pd;j.Suspense=vd;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;j.act=Fl;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dl({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=hi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Ml.call(t,l)&&!zl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:sr,type:e.type,key:o,ref:a,props:r,_owner:i}};j.createContext=function(e){return e={$$typeof:md,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hd,_context:e},e.Consumer=e};j.createElement=Wl;j.createFactory=function(e){var t=Wl.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:gd,render:e}};j.isValidElement=mi;j.lazy=function(e){return{$$typeof:wd,_payload:{_status:-1,_result:e},_init:kd}};j.memo=function(e,t){return{$$typeof:yd,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};j.unstable_act=Fl;j.useCallback=function(e,t){return ce.current.useCallback(e,t)};j.useContext=function(e){return ce.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};j.useEffect=function(e,t){return ce.current.useEffect(e,t)};j.useId=function(){return ce.current.useId()};j.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ce.current.useMemo(e,t)};j.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};j.useRef=function(e){return ce.current.useRef(e)};j.useState=function(e){return ce.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return ce.current.useTransition()};j.version="18.3.1";jl.exports=j;var C=jl.exports;const ql=ud(C),Rd=ld({__proto__:null,default:ql},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=C,Pd=Symbol.for("react.element"),Nd=Symbol.for("react.fragment"),Ad=Object.prototype.hasOwnProperty,bd=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ld={key:!0,ref:!0,__self:!0,__source:!0};function Bl(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ad.call(t,r)&&!Ld.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Pd,type:e,key:a,ref:i,props:o,_owner:bd.current}}wo.Fragment=Nd;wo.jsx=Bl;wo.jsxs=Bl;Ol.exports=wo;var p=Ol.exports,ma={},Hl={exports:{}},Se={},$l={exports:{}},Vl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,b){var O=T.length;T.push(b);e:for(;0<O;){var V=O-1>>>1,Y=T[V];if(0<o(Y,b))T[V]=b,T[O]=Y,O=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var b=T[0],O=T.pop();if(O!==b){T[0]=O;e:for(var V=0,Y=T.length,hr=Y>>>1;V<hr;){var kt=2*(V+1)-1,Fo=T[kt],Et=kt+1,mr=T[Et];if(0>o(Fo,O))Et<Y&&0>o(mr,Fo)?(T[V]=mr,T[Et]=O,V=Et):(T[V]=Fo,T[kt]=O,V=kt);else if(Et<Y&&0>o(mr,O))T[V]=mr,T[Et]=O,V=Et;else break e}}return b}function o(T,b){var O=T.sortIndex-b.sortIndex;return O!==0?O:T.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],m=1,f=null,g=3,x=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=T)r(u),b.sortIndex=b.expirationTime,t(l,b);else break;b=n(u)}}function y(T){if(w=!1,h(T),!v)if(n(l)!==null)v=!0,zo(E);else{var b=n(u);b!==null&&Wo(y,b.startTime-T)}}function E(T,b){v=!1,w&&(w=!1,d(A),A=-1),x=!0;var O=g;try{for(h(b),f=n(l);f!==null&&(!(f.expirationTime>b)||T&&!ve());){var V=f.callback;if(typeof V=="function"){f.callback=null,g=f.priorityLevel;var Y=V(f.expirationTime<=b);b=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(l)&&r(l),h(b)}else r(l);f=n(l)}if(f!==null)var hr=!0;else{var kt=n(u);kt!==null&&Wo(y,kt.startTime-b),hr=!1}return hr}finally{f=null,g=O,x=!1}}var P=!1,N=null,A=-1,W=5,L=-1;function ve(){return!(e.unstable_now()-L<W)}function wn(){if(N!==null){var T=e.unstable_now();L=T;var b=!0;try{b=N(!0,T)}finally{b?xn():(P=!1,N=null)}}else P=!1}var xn;if(typeof c=="function")xn=function(){c(wn)};else if(typeof MessageChannel<"u"){var ls=new MessageChannel,sd=ls.port2;ls.port1.onmessage=wn,xn=function(){sd.postMessage(null)}}else xn=function(){k(wn,0)};function zo(T){N=T,P||(P=!0,xn())}function Wo(T,b){A=k(function(){T(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,zo(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var O=g;g=b;try{return T()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,b){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=g;g=T;try{return b()}finally{g=O}},e.unstable_scheduleCallback=function(T,b,O){var V=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?V+O:V):O=V,T){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=O+Y,T={id:m++,callback:b,priorityLevel:T,startTime:O,expirationTime:Y,sortIndex:-1},O>V?(T.sortIndex=O,t(u,T),n(l)===null&&T===n(u)&&(w?(d(A),A=-1):w=!0,Wo(y,O-V))):(T.sortIndex=Y,t(l,T),v||x||(v=!0,zo(E))),T},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(T){var b=g;return function(){var O=g;g=b;try{return T.apply(this,arguments)}finally{g=O}}}})(Vl);$l.exports=Vl;var Od=$l.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=C,Ce=Od;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ql=new Set,qn={};function Mt(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(qn[e]=t,e=0;e<t.length;e++)Ql.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ga=Object.prototype.hasOwnProperty,Id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ps={},fs={};function Dd(e){return ga.call(fs,e)?!0:ga.call(ps,e)?!1:Id.test(e)?fs[e]=!0:(ps[e]=!0,!1)}function _d(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ud(e,t,n,r){if(t===null||typeof t>"u"||_d(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var gi=/[\-:]([a-z])/g;function vi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gi,vi);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gi,vi);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gi,vi);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function yi(e,t,n,r){var o=ne.hasOwnProperty(t)?ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ud(t,n,o,r)&&(n=null),r||o===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),wi=Symbol.for("react.strict_mode"),va=Symbol.for("react.profiler"),Jl=Symbol.for("react.provider"),Kl=Symbol.for("react.context"),xi=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),wa=Symbol.for("react.suspense_list"),Ci=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Xl=Symbol.for("react.offscreen"),hs=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=hs&&e[hs]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Bo;function An(e){if(Bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bo=t&&t[1]||""}return`
`+Bo+e}var Ho=!1;function $o(e,t){if(!e||Ho)return"";Ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{Ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?An(e):""}function Md(e){switch(e.tag){case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function xa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case qt:return"Portal";case va:return"Profiler";case wi:return"StrictMode";case ya:return"Suspense";case wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kl:return(e.displayName||"Context")+".Consumer";case Jl:return(e._context.displayName||"Context")+".Provider";case xi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ci:return t=e.displayName||null,t!==null?t:xa(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return xa(e(t))}catch{}}return null}function zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xa(t);case 8:return t===wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wd(e){var t=Yl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Wd(e))}function Gl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ca(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ms(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zl(e,t){t=t.checked,t!=null&&yi(e,"checked",t,!1)}function Sa(e,t){Zl(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ka(e,t.type,n):t.hasOwnProperty("defaultValue")&&ka(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ka(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(bn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function eu(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ys(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fd=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Fd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function ru(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function ou(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ru(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qd=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Na=null;function Si(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,tn=null,nn=null;function ws(e){if(e=cr(e)){if(typeof Aa!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Eo(t),Aa(e.stateNode,e.type,t))}}function au(e){tn?nn?nn.push(e):nn=[e]:tn=e}function iu(){if(tn){var e=tn,t=nn;if(nn=tn=null,ws(e),t)for(e=0;e<t.length;e++)ws(t[e])}}function su(e,t){return e(t)}function lu(){}var Vo=!1;function uu(e,t,n){if(Vo)return e(t,n);Vo=!0;try{return su(e,t,n)}finally{Vo=!1,(tn!==null||nn!==null)&&(lu(),iu())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var ba=!1;if(Je)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){ba=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{ba=!1}function Bd(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var In=!1,Qr=null,Jr=!1,La=null,Hd={onError:function(e){In=!0,Qr=e}};function $d(e,t,n,r,o,a,i,s,l){In=!1,Qr=null,Bd.apply(Hd,arguments)}function Vd(e,t,n,r,o,a,i,s,l){if($d.apply(this,arguments),In){if(In){var u=Qr;In=!1,Qr=null}else throw Error(S(198));Jr||(Jr=!0,La=u)}}function zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xs(e){if(zt(e)!==e)throw Error(S(188))}function Qd(e){var t=e.alternate;if(!t){if(t=zt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return xs(o),e;if(a===r)return xs(o),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function du(e){return e=Qd(e),e!==null?pu(e):null}function pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pu(e);if(t!==null)return t;e=e.sibling}return null}var fu=Ce.unstable_scheduleCallback,Cs=Ce.unstable_cancelCallback,Jd=Ce.unstable_shouldYield,Kd=Ce.unstable_requestPaint,Q=Ce.unstable_now,Xd=Ce.unstable_getCurrentPriorityLevel,ki=Ce.unstable_ImmediatePriority,hu=Ce.unstable_UserBlockingPriority,Kr=Ce.unstable_NormalPriority,Yd=Ce.unstable_LowPriority,mu=Ce.unstable_IdlePriority,xo=null,We=null;function Gd(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:tp,Zd=Math.log,ep=Math.LN2;function tp(e){return e>>>=0,e===0?32:31-(Zd(e)/ep|0)|0}var xr=64,Cr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Ln(s):(a&=i,a!==0&&(r=Ln(a)))}else i=n&~o,i!==0?r=Ln(i):a!==0&&(r=Ln(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),o=1<<n,r|=e[n],t&=~o;return r}function np(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Ie(a),s=1<<i,l=o[i];l===-1?(!(s&n)||s&r)&&(o[i]=np(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function op(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ie(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Ei(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yu,Ri,wu,xu,Cu,ja=!1,Sr=[],st=null,lt=null,ut=null,$n=new Map,Vn=new Map,nt=[],ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function kn(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=cr(t),t!==null&&Ri(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ip(e,t,n,r,o){switch(t){case"focusin":return st=kn(st,e,t,n,r,o),!0;case"dragenter":return lt=kn(lt,e,t,n,r,o),!0;case"mouseover":return ut=kn(ut,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return $n.set(a,kn($n.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Vn.set(a,kn(Vn.get(a)||null,e,t,n,r,o)),!0}return!1}function Su(e){var t=Nt(e.target);if(t!==null){var n=zt(t);if(n!==null){if(t=n.tag,t===13){if(t=cu(n),t!==null){e.blockedOn=t,Cu(e.priority,function(){wu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ia(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Na=r,n.target.dispatchEvent(r),Na=null}else return t=cr(n),t!==null&&Ri(t),e.blockedOn=n,!1;t.shift()}return!0}function ks(e,t,n){_r(e)&&n.delete(t)}function sp(){ja=!1,st!==null&&_r(st)&&(st=null),lt!==null&&_r(lt)&&(lt=null),ut!==null&&_r(ut)&&(ut=null),$n.forEach(ks),Vn.forEach(ks)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,ja||(ja=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,sp)))}function Qn(e){function t(o){return En(o,e)}if(0<Sr.length){En(Sr[0],e);for(var n=1;n<Sr.length;n++){var r=Sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&En(st,e),lt!==null&&En(lt,e),ut!==null&&En(ut,e),$n.forEach(t),Vn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Su(n),n.blockedOn===null&&nt.shift()}var rn=Ge.ReactCurrentBatchConfig,Yr=!0;function lp(e,t,n,r){var o=D,a=rn.transition;rn.transition=null;try{D=1,Ti(e,t,n,r)}finally{D=o,rn.transition=a}}function up(e,t,n,r){var o=D,a=rn.transition;rn.transition=null;try{D=4,Ti(e,t,n,r)}finally{D=o,rn.transition=a}}function Ti(e,t,n,r){if(Yr){var o=Ia(e,t,n,r);if(o===null)ra(e,t,r,Gr,n),Ss(e,r);else if(ip(o,e,t,n,r))r.stopPropagation();else if(Ss(e,r),t&4&&-1<ap.indexOf(e)){for(;o!==null;){var a=cr(o);if(a!==null&&yu(a),a=Ia(e,t,n,r),a===null&&ra(e,t,r,Gr,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else ra(e,t,r,null,n)}}var Gr=null;function Ia(e,t,n,r){if(Gr=null,e=Si(r),e=Nt(e),e!==null)if(t=zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xd()){case ki:return 1;case hu:return 4;case Kr:case Yd:return 16;case mu:return 536870912;default:return 16}default:return 16}}var ot=null,Pi=null,Ur=null;function Eu(){if(Ur)return Ur;var e,t=Pi,n=t.length,r,o="value"in ot?ot.value:ot.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Ur=o.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Es(){return!1}function ke(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?kr:Es,this.isPropagationStopped=Es,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=ke(gn),ur=B({},gn,{view:0,detail:0}),cp=ke(ur),Jo,Ko,Rn,Co=B({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ai,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(Jo=e.screenX-Rn.screenX,Ko=e.screenY-Rn.screenY):Ko=Jo=0,Rn=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),Rs=ke(Co),dp=B({},Co,{dataTransfer:0}),pp=ke(dp),fp=B({},ur,{relatedTarget:0}),Xo=ke(fp),hp=B({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),mp=ke(hp),gp=B({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vp=ke(gp),yp=B({},gn,{data:0}),Ts=ke(yp),wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cp[e])?!!t[e]:!1}function Ai(){return Sp}var kp=B({},ur,{key:function(e){if(e.key){var t=wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ai,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ep=ke(kp),Rp=B({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ps=ke(Rp),Tp=B({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ai}),Pp=ke(Tp),Np=B({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=ke(Np),bp=B({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lp=ke(bp),Op=[9,13,27,32],bi=Je&&"CompositionEvent"in window,Dn=null;Je&&"documentMode"in document&&(Dn=document.documentMode);var jp=Je&&"TextEvent"in window&&!Dn,Ru=Je&&(!bi||Dn&&8<Dn&&11>=Dn),Ns=" ",As=!1;function Tu(e,t){switch(e){case"keyup":return Op.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Ip(e,t){switch(e){case"compositionend":return Pu(t);case"keypress":return t.which!==32?null:(As=!0,Ns);case"textInput":return e=t.data,e===Ns&&As?null:e;default:return null}}function Dp(e,t){if(Ht)return e==="compositionend"||!bi&&Tu(e,t)?(e=Eu(),Ur=Pi=ot=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ru&&t.locale!=="ko"?null:t.data;default:return null}}var _p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_p[e.type]:t==="textarea"}function Nu(e,t,n,r){au(r),t=Zr(t,"onChange"),0<t.length&&(n=new Ni("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Jn=null;function Up(e){zu(e,0)}function So(e){var t=Qt(e);if(Gl(t))return e}function Mp(e,t){if(e==="change")return t}var Au=!1;if(Je){var Yo;if(Je){var Go="oninput"in document;if(!Go){var Ls=document.createElement("div");Ls.setAttribute("oninput","return;"),Go=typeof Ls.oninput=="function"}Yo=Go}else Yo=!1;Au=Yo&&(!document.documentMode||9<document.documentMode)}function Os(){_n&&(_n.detachEvent("onpropertychange",bu),Jn=_n=null)}function bu(e){if(e.propertyName==="value"&&So(Jn)){var t=[];Nu(t,Jn,e,Si(e)),uu(Up,t)}}function zp(e,t,n){e==="focusin"?(Os(),_n=t,Jn=n,_n.attachEvent("onpropertychange",bu)):e==="focusout"&&Os()}function Wp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return So(Jn)}function Fp(e,t){if(e==="click")return So(t)}function qp(e,t){if(e==="input"||e==="change")return So(t)}function Bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:Bp;function Kn(e,t){if(_e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ga.call(t,o)||!_e(e[o],t[o]))return!1}return!0}function js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Is(e,t){var n=js(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=js(n)}}function Lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hp(e){var t=Ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lu(n.ownerDocument.documentElement,n)){if(r!==null&&Li(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Is(n,a);var i=Is(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $p=Je&&"documentMode"in document&&11>=document.documentMode,$t=null,Da=null,Un=null,_a=!1;function Ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_a||$t==null||$t!==Vr(r)||(r=$t,"selectionStart"in r&&Li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Kn(Un,r)||(Un=r,r=Zr(Da,"onSelect"),0<r.length&&(t=new Ni("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$t)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Zo={},ju={};Je&&(ju=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function ko(e){if(Zo[e])return Zo[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ju)return Zo[e]=t[n];return e}var Iu=ko("animationend"),Du=ko("animationiteration"),_u=ko("animationstart"),Uu=ko("transitionend"),Mu=new Map,_s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){Mu.set(e,t),Mt(t,[e])}for(var ea=0;ea<_s.length;ea++){var ta=_s[ea],Vp=ta.toLowerCase(),Qp=ta[0].toUpperCase()+ta.slice(1);yt(Vp,"on"+Qp)}yt(Iu,"onAnimationEnd");yt(Du,"onAnimationIteration");yt(_u,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(Uu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jp=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function Us(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vd(r,t,void 0,e),e.currentTarget=null}function zu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;Us(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;Us(o,s,u),a=l}}}if(Jr)throw e=La,Jr=!1,La=null,e}function U(e,t){var n=t[Fa];n===void 0&&(n=t[Fa]=new Set);var r=e+"__bubble";n.has(r)||(Wu(t,e,2,!1),n.add(r))}function na(e,t,n){var r=0;t&&(r|=4),Wu(n,e,r,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Rr]){e[Rr]=!0,Ql.forEach(function(n){n!=="selectionchange"&&(Jp.has(n)||na(n,!1,e),na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,na("selectionchange",!1,t))}}function Wu(e,t,n,r){switch(ku(t)){case 1:var o=lp;break;case 4:o=up;break;default:o=Ti}n=o.bind(null,t,n,e),o=void 0,!ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ra(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Nt(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}uu(function(){var u=a,m=Si(n),f=[];e:{var g=Mu.get(e);if(g!==void 0){var x=Ni,v=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":x=Ep;break;case"focusin":v="focus",x=Xo;break;case"focusout":v="blur",x=Xo;break;case"beforeblur":case"afterblur":x=Xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Pp;break;case Iu:case Du:case _u:x=mp;break;case Uu:x=Ap;break;case"scroll":x=cp;break;case"wheel":x=Lp;break;case"copy":case"cut":case"paste":x=vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ps}var w=(t&4)!==0,k=!w&&e==="scroll",d=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,h;c!==null;){h=c;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,d!==null&&(y=Hn(c,d),y!=null&&w.push(Yn(c,y,h)))),k)break;c=c.return}0<w.length&&(g=new x(g,v,null,n,m),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Na&&(v=n.relatedTarget||n.fromElement)&&(Nt(v)||v[Ke]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?Nt(v):null,v!==null&&(k=zt(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(w=Rs,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ps,y="onPointerLeave",d="onPointerEnter",c="pointer"),k=x==null?g:Qt(x),h=v==null?g:Qt(v),g=new w(y,c+"leave",x,n,m),g.target=k,g.relatedTarget=h,y=null,Nt(m)===u&&(w=new w(d,c+"enter",v,n,m),w.target=h,w.relatedTarget=k,y=w),k=y,x&&v)t:{for(w=x,d=v,c=0,h=w;h;h=Ft(h))c++;for(h=0,y=d;y;y=Ft(y))h++;for(;0<c-h;)w=Ft(w),c--;for(;0<h-c;)d=Ft(d),h--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=Ft(w),d=Ft(d)}w=null}else w=null;x!==null&&Ms(f,g,x,w,!1),v!==null&&k!==null&&Ms(f,k,v,w,!0)}}e:{if(g=u?Qt(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var E=Mp;else if(bs(g))if(Au)E=qp;else{E=Wp;var P=zp}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Fp);if(E&&(E=E(e,u))){Nu(f,E,n,m);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&ka(g,"number",g.value)}switch(P=u?Qt(u):window,e){case"focusin":(bs(P)||P.contentEditable==="true")&&($t=P,Da=u,Un=null);break;case"focusout":Un=Da=$t=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,Ds(f,n,m);break;case"selectionchange":if($p)break;case"keydown":case"keyup":Ds(f,n,m)}var N;if(bi)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ht?Tu(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Ru&&n.locale!=="ko"&&(Ht||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ht&&(N=Eu()):(ot=m,Pi="value"in ot?ot.value:ot.textContent,Ht=!0)),P=Zr(u,A),0<P.length&&(A=new Ts(A,e,null,n,m),f.push({event:A,listeners:P}),N?A.data=N:(N=Pu(n),N!==null&&(A.data=N)))),(N=jp?Ip(e,n):Dp(e,n))&&(u=Zr(u,"onBeforeInput"),0<u.length&&(m=new Ts("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:u}),m.data=N))}zu(f,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Hn(e,n),a!=null&&r.unshift(Yn(e,a,o)),a=Hn(e,t),a!=null&&r.push(Yn(e,a,o))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ms(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Hn(n,a),l!=null&&i.unshift(Yn(n,l,s))):o||(l=Hn(n,a),l!=null&&i.push(Yn(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Kp=/\r\n?/g,Xp=/\u0000|\uFFFD/g;function zs(e){return(typeof e=="string"?e:""+e).replace(Kp,`
`).replace(Xp,"")}function Tr(e,t,n){if(t=zs(t),zs(e)!==t&&n)throw Error(S(425))}function eo(){}var Ua=null,Ma=null;function za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wa=typeof setTimeout=="function"?setTimeout:void 0,Yp=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,Gp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(e){return Ws.resolve(null).then(e).catch(Zp)}:Wa;function Zp(e){setTimeout(function(){throw e})}function oa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Qn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),ze="__reactFiber$"+vn,Gn="__reactProps$"+vn,Ke="__reactContainer$"+vn,Fa="__reactEvents$"+vn,ef="__reactListeners$"+vn,tf="__reactHandles$"+vn;function Nt(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fs(e);e!==null;){if(n=e[ze])return n;e=Fs(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[ze]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Eo(e){return e[Gn]||null}var qa=[],Jt=-1;function wt(e){return{current:e}}function M(e){0>Jt||(e.current=qa[Jt],qa[Jt]=null,Jt--)}function _(e,t){Jt++,qa[Jt]=e.current,e.current=t}var vt={},se=wt(vt),he=wt(!1),jt=vt;function ln(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function me(e){return e=e.childContextTypes,e!=null}function to(){M(he),M(se)}function qs(e,t,n){if(se.current!==vt)throw Error(S(168));_(se,t),_(he,n)}function Fu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,zd(e)||"Unknown",o));return B({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,jt=se.current,_(se,e),_(he,he.current),!0}function Bs(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Fu(e,t,jt),r.__reactInternalMemoizedMergedChildContext=e,M(he),M(se),_(se,e)):M(he),_(he,n)}var Be=null,Ro=!1,aa=!1;function qu(e){Be===null?Be=[e]:Be.push(e)}function nf(e){Ro=!0,qu(e)}function xt(){if(!aa&&Be!==null){aa=!0;var e=0,t=D;try{var n=Be;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,Ro=!1}catch(o){throw Be!==null&&(Be=Be.slice(e+1)),fu(ki,xt),o}finally{D=t,aa=!1}}return null}var Kt=[],Xt=0,ro=null,oo=0,Ee=[],Re=0,It=null,He=1,$e="";function Rt(e,t){Kt[Xt++]=oo,Kt[Xt++]=ro,ro=e,oo=t}function Bu(e,t,n){Ee[Re++]=He,Ee[Re++]=$e,Ee[Re++]=It,It=e;var r=He;e=$e;var o=32-Ie(r)-1;r&=~(1<<o),n+=1;var a=32-Ie(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,He=1<<32-Ie(t)+o|n<<o|r,$e=a+e}else He=1<<a|n<<o|r,$e=e}function Oi(e){e.return!==null&&(Rt(e,1),Bu(e,1,0))}function ji(e){for(;e===ro;)ro=Kt[--Xt],Kt[Xt]=null,oo=Kt[--Xt],Kt[Xt]=null;for(;e===It;)It=Ee[--Re],Ee[Re]=null,$e=Ee[--Re],Ee[Re]=null,He=Ee[--Re],Ee[Re]=null}var xe=null,we=null,z=!1,je=null;function Hu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,we=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:He,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,we=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ha(e){if(z){var t=we;if(t){var n=t;if(!Hs(e,t)){if(Ba(e))throw Error(S(418));t=ct(n.nextSibling);var r=xe;t&&Hs(e,t)?Hu(r,n):(e.flags=e.flags&-4097|2,z=!1,xe=e)}}else{if(Ba(e))throw Error(S(418));e.flags=e.flags&-4097|2,z=!1,xe=e}}}function $s(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Pr(e){if(e!==xe)return!1;if(!z)return $s(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!za(e.type,e.memoizedProps)),t&&(t=we)){if(Ba(e))throw $u(),Error(S(418));for(;t;)Hu(e,t),t=ct(t.nextSibling)}if($s(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=xe?ct(e.stateNode.nextSibling):null;return!0}function $u(){for(var e=we;e;)e=ct(e.nextSibling)}function un(){we=xe=null,z=!1}function Ii(e){je===null?je=[e]:je.push(e)}var rf=Ge.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Nr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vs(e){var t=e._init;return t(e._payload)}function Vu(e){function t(d,c){if(e){var h=d.deletions;h===null?(d.deletions=[c],d.flags|=16):h.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=ht(d,c),d.index=0,d.sibling=null,d}function a(d,c,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<c?(d.flags|=2,c):h):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,h,y){return c===null||c.tag!==6?(c=pa(h,d.mode,y),c.return=d,c):(c=o(c,h),c.return=d,c)}function l(d,c,h,y){var E=h.type;return E===Bt?m(d,c,h.props.children,y,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===et&&Vs(E)===c.type)?(y=o(c,h.props),y.ref=Tn(d,c,h),y.return=d,y):(y=$r(h.type,h.key,h.props,null,d.mode,y),y.ref=Tn(d,c,h),y.return=d,y)}function u(d,c,h,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=fa(h,d.mode,y),c.return=d,c):(c=o(c,h.children||[]),c.return=d,c)}function m(d,c,h,y,E){return c===null||c.tag!==7?(c=Ot(h,d.mode,y,E),c.return=d,c):(c=o(c,h),c.return=d,c)}function f(d,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=pa(""+c,d.mode,h),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vr:return h=$r(c.type,c.key,c.props,null,d.mode,h),h.ref=Tn(d,null,c),h.return=d,h;case qt:return c=fa(c,d.mode,h),c.return=d,c;case et:var y=c._init;return f(d,y(c._payload),h)}if(bn(c)||Cn(c))return c=Ot(c,d.mode,h,null),c.return=d,c;Nr(d,c)}return null}function g(d,c,h,y){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:s(d,c,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vr:return h.key===E?l(d,c,h,y):null;case qt:return h.key===E?u(d,c,h,y):null;case et:return E=h._init,g(d,c,E(h._payload),y)}if(bn(h)||Cn(h))return E!==null?null:m(d,c,h,y,null);Nr(d,h)}return null}function x(d,c,h,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(h)||null,s(c,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vr:return d=d.get(y.key===null?h:y.key)||null,l(c,d,y,E);case qt:return d=d.get(y.key===null?h:y.key)||null,u(c,d,y,E);case et:var P=y._init;return x(d,c,h,P(y._payload),E)}if(bn(y)||Cn(y))return d=d.get(h)||null,m(c,d,y,E,null);Nr(c,y)}return null}function v(d,c,h,y){for(var E=null,P=null,N=c,A=c=0,W=null;N!==null&&A<h.length;A++){N.index>A?(W=N,N=null):W=N.sibling;var L=g(d,N,h[A],y);if(L===null){N===null&&(N=W);break}e&&N&&L.alternate===null&&t(d,N),c=a(L,c,A),P===null?E=L:P.sibling=L,P=L,N=W}if(A===h.length)return n(d,N),z&&Rt(d,A),E;if(N===null){for(;A<h.length;A++)N=f(d,h[A],y),N!==null&&(c=a(N,c,A),P===null?E=N:P.sibling=N,P=N);return z&&Rt(d,A),E}for(N=r(d,N);A<h.length;A++)W=x(N,d,A,h[A],y),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?A:W.key),c=a(W,c,A),P===null?E=W:P.sibling=W,P=W);return e&&N.forEach(function(ve){return t(d,ve)}),z&&Rt(d,A),E}function w(d,c,h,y){var E=Cn(h);if(typeof E!="function")throw Error(S(150));if(h=E.call(h),h==null)throw Error(S(151));for(var P=E=null,N=c,A=c=0,W=null,L=h.next();N!==null&&!L.done;A++,L=h.next()){N.index>A?(W=N,N=null):W=N.sibling;var ve=g(d,N,L.value,y);if(ve===null){N===null&&(N=W);break}e&&N&&ve.alternate===null&&t(d,N),c=a(ve,c,A),P===null?E=ve:P.sibling=ve,P=ve,N=W}if(L.done)return n(d,N),z&&Rt(d,A),E;if(N===null){for(;!L.done;A++,L=h.next())L=f(d,L.value,y),L!==null&&(c=a(L,c,A),P===null?E=L:P.sibling=L,P=L);return z&&Rt(d,A),E}for(N=r(d,N);!L.done;A++,L=h.next())L=x(N,d,A,L.value,y),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?A:L.key),c=a(L,c,A),P===null?E=L:P.sibling=L,P=L);return e&&N.forEach(function(wn){return t(d,wn)}),z&&Rt(d,A),E}function k(d,c,h,y){if(typeof h=="object"&&h!==null&&h.type===Bt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case vr:e:{for(var E=h.key,P=c;P!==null;){if(P.key===E){if(E=h.type,E===Bt){if(P.tag===7){n(d,P.sibling),c=o(P,h.props.children),c.return=d,d=c;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===et&&Vs(E)===P.type){n(d,P.sibling),c=o(P,h.props),c.ref=Tn(d,P,h),c.return=d,d=c;break e}n(d,P);break}else t(d,P);P=P.sibling}h.type===Bt?(c=Ot(h.props.children,d.mode,y,h.key),c.return=d,d=c):(y=$r(h.type,h.key,h.props,null,d.mode,y),y.ref=Tn(d,c,h),y.return=d,d=y)}return i(d);case qt:e:{for(P=h.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(d,c.sibling),c=o(c,h.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=fa(h,d.mode,y),c.return=d,d=c}return i(d);case et:return P=h._init,k(d,c,P(h._payload),y)}if(bn(h))return v(d,c,h,y);if(Cn(h))return w(d,c,h,y);Nr(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,h),c.return=d,d=c):(n(d,c),c=pa(h,d.mode,y),c.return=d,d=c),i(d)):n(d,c)}return k}var cn=Vu(!0),Qu=Vu(!1),ao=wt(null),io=null,Yt=null,Di=null;function _i(){Di=Yt=io=null}function Ui(e){var t=ao.current;M(ao),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){io=e,Di=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(Di!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(io===null)throw Error(S(308));Yt=e,io.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var At=null;function Mi(e){At===null?At=[e]:At.push(e)}function Ju(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Mi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Xe(e,n)}return o=r.interleaved,o===null?(t.next=t,Mi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Xe(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ei(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var o=e.updateQueue;tt=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=l))}if(a!==null){var f=o.baseState;i=0,m=u=l=null,s=a;do{var g=s.lane,x=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(g=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(x,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(x,f,g):v,g==null)break e;f=B({},f,g);break e;case 2:tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=x,l=f):m=m.next=x,i|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);_t|=i,e.lanes=i,e.memoizedState=f}}function Js(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var dr={},Fe=wt(dr),Zn=wt(dr),er=wt(dr);function bt(e){if(e===dr)throw Error(S(174));return e}function Wi(e,t){switch(_(er,t),_(Zn,e),_(Fe,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ra(t,e)}M(Fe),_(Fe,t)}function dn(){M(Fe),M(Zn),M(er)}function Xu(e){bt(er.current);var t=bt(Fe.current),n=Ra(t,e.type);t!==n&&(_(Zn,e),_(Fe,n))}function Fi(e){Zn.current===e&&(M(Fe),M(Zn))}var F=wt(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=[];function qi(){for(var e=0;e<ia.length;e++)ia[e]._workInProgressVersionPrimary=null;ia.length=0}var Wr=Ge.ReactCurrentDispatcher,sa=Ge.ReactCurrentBatchConfig,Dt=0,q=null,K=null,G=null,uo=!1,Mn=!1,tr=0,of=0;function re(){throw Error(S(321))}function Bi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_e(e[n],t[n]))return!1;return!0}function Hi(e,t,n,r,o,a){if(Dt=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wr.current=e===null||e.memoizedState===null?uf:cf,e=n(r,o),Mn){a=0;do{if(Mn=!1,tr=0,25<=a)throw Error(S(301));a+=1,G=K=null,t.updateQueue=null,Wr.current=df,e=n(r,o)}while(Mn)}if(Wr.current=co,t=K!==null&&K.next!==null,Dt=0,G=K=q=null,uo=!1,t)throw Error(S(300));return e}function $i(){var e=tr!==0;return tr=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?q.memoizedState=G=e:G=G.next=e,G}function Ae(){if(K===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=G===null?q.memoizedState:G.next;if(t!==null)G=t,K=e;else{if(e===null)throw Error(S(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},G===null?q.memoizedState=G=e:G=G.next=e}return G}function nr(e,t){return typeof t=="function"?t(e):t}function la(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=K,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var m=u.lane;if((Dt&m)===m)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,i=r):l=l.next=f,q.lanes|=m,_t|=m}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,_e(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,q.lanes|=a,_t|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ua(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);_e(a,t.memoizedState)||(fe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Yu(){}function Gu(e,t){var n=q,r=Ae(),o=t(),a=!_e(r.memoizedState,o);if(a&&(r.memoizedState=o,fe=!0),r=r.queue,Vi(tc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||G!==null&&G.memoizedState.tag&1){if(n.flags|=2048,rr(9,ec.bind(null,n,r,o,t),void 0,null),Z===null)throw Error(S(349));Dt&30||Zu(n,t,o)}return o}function Zu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ec(e,t,n,r){t.value=n,t.getSnapshot=r,nc(t)&&rc(e)}function tc(e,t,n){return n(function(){nc(t)&&rc(e)})}function nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_e(e,n)}catch{return!0}}function rc(e){var t=Xe(e,1);t!==null&&De(t,e,1,-1)}function Ks(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=lf.bind(null,q,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function oc(){return Ae().memoizedState}function Fr(e,t,n,r){var o=Me();q.flags|=e,o.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function To(e,t,n,r){var o=Ae();r=r===void 0?null:r;var a=void 0;if(K!==null){var i=K.memoizedState;if(a=i.destroy,r!==null&&Bi(r,i.deps)){o.memoizedState=rr(t,n,a,r);return}}q.flags|=e,o.memoizedState=rr(1|t,n,a,r)}function Xs(e,t){return Fr(8390656,8,e,t)}function Vi(e,t){return To(2048,8,e,t)}function ac(e,t){return To(4,2,e,t)}function ic(e,t){return To(4,4,e,t)}function sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lc(e,t,n){return n=n!=null?n.concat([e]):null,To(4,4,sc.bind(null,t,e),n)}function Qi(){}function uc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dc(e,t,n){return Dt&21?(_e(n,t)||(n=gu(),q.lanes|=n,_t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function af(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=sa.transition;sa.transition={};try{e(!1),t()}finally{D=n,sa.transition=r}}function pc(){return Ae().memoizedState}function sf(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fc(e))hc(t,n);else if(n=Ju(e,t,n,r),n!==null){var o=ue();De(n,e,r,o),mc(n,t,r)}}function lf(e,t,n){var r=ft(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fc(e))hc(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,_e(s,i)){var l=t.interleaved;l===null?(o.next=o,Mi(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Ju(e,t,o,r),n!==null&&(o=ue(),De(n,e,r,o),mc(n,t,r))}}function fc(e){var t=e.alternate;return e===q||t!==null&&t===q}function hc(e,t){Mn=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ei(e,n)}}var co={readContext:Ne,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},uf={readContext:Ne,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:Xs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fr(4194308,4,sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fr(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sf.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:Ks,useDebugValue:Qi,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=Ks(!1),t=e[0];return e=af.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=Me();if(z){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),Z===null)throw Error(S(349));Dt&30||Zu(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Xs(tc.bind(null,r,a,e),[e]),r.flags|=2048,rr(9,ec.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Me(),t=Z.identifierPrefix;if(z){var n=$e,r=He;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cf={readContext:Ne,useCallback:uc,useContext:Ne,useEffect:Vi,useImperativeHandle:lc,useInsertionEffect:ac,useLayoutEffect:ic,useMemo:cc,useReducer:la,useRef:oc,useState:function(){return la(nr)},useDebugValue:Qi,useDeferredValue:function(e){var t=Ae();return dc(t,K.memoizedState,e)},useTransition:function(){var e=la(nr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:Gu,useId:pc,unstable_isNewReconciler:!1},df={readContext:Ne,useCallback:uc,useContext:Ne,useEffect:Vi,useImperativeHandle:lc,useInsertionEffect:ac,useLayoutEffect:ic,useMemo:cc,useReducer:ua,useRef:oc,useState:function(){return ua(nr)},useDebugValue:Qi,useDeferredValue:function(e){var t=Ae();return K===null?t.memoizedState=e:dc(t,K.memoizedState,e)},useTransition:function(){var e=ua(nr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:Gu,useId:pc,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Va(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),o=ft(e),a=Qe(r,o);a.payload=t,n!=null&&(a.callback=n),t=dt(e,a,o),t!==null&&(De(t,e,o,r),zr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),o=ft(e),a=Qe(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=dt(e,a,o),t!==null&&(De(t,e,o,r),zr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),o=Qe(n,r);o.tag=2,t!=null&&(o.callback=t),t=dt(e,o,r),t!==null&&(De(t,e,r,n),zr(t,e,r))}};function Ys(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(o,a):!0}function gc(e,t,n){var r=!1,o=vt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ne(a):(o=me(t)?jt:se.current,r=t.contextTypes,a=(r=r!=null)?ln(e,o):vt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function Qa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},zi(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Ne(a):(a=me(t)?jt:se.current,o.context=ln(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Va(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Po.enqueueReplaceState(o,o.state,null),so(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Md(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ca(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pf=typeof WeakMap=="function"?WeakMap:Map;function vc(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fo||(fo=!0,oi=r),Ja(e,t)},n}function yc(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ja(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ja(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Zs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Tf.bind(null,e,t,n),t.then(e,e))}function el(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tl(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var ff=Ge.ReactCurrentOwner,fe=!1;function le(e,t,n,r){t.child=e===null?Qu(t,null,n,r):cn(t,e.child,n,r)}function nl(e,t,n,r,o){n=n.render;var a=t.ref;return on(t,o),r=Hi(e,t,n,r,a,o),n=$i(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(z&&n&&Oi(t),t.flags|=1,le(e,t,r,o),t.child)}function rl(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!ts(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,wc(e,t,a,r,o)):(e=$r(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(i,r)&&e.ref===t.ref)return Ye(e,t,o)}return t.flags|=1,e=ht(a,r),e.ref=t.ref,e.return=t,t.child=e}function wc(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Kn(a,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ye(e,t,o)}return Ka(e,t,n,r,o)}function xc(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(Zt,ye),ye|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(Zt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,_(Zt,ye),ye|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,_(Zt,ye),ye|=r;return le(e,t,o,n),t.child}function Cc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ka(e,t,n,r,o){var a=me(n)?jt:se.current;return a=ln(t,a),on(t,o),n=Hi(e,t,n,r,a,o),r=$i(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(z&&r&&Oi(t),t.flags|=1,le(e,t,n,o),t.child)}function ol(e,t,n,r,o){if(me(n)){var a=!0;no(t)}else a=!1;if(on(t,o),t.stateNode===null)qr(e,t),gc(t,n,r),Qa(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ne(u):(u=me(n)?jt:se.current,u=ln(t,u));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Gs(t,i,r,u),tt=!1;var g=t.memoizedState;i.state=g,so(t,r,i,o),l=t.memoizedState,s!==r||g!==l||he.current||tt?(typeof m=="function"&&(Va(t,n,m,r),l=t.memoizedState),(s=tt||Ys(t,n,s,r,g,l,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ku(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Le(t.type,s),i.props=u,f=t.pendingProps,g=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ne(l):(l=me(n)?jt:se.current,l=ln(t,l));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||g!==l)&&Gs(t,i,r,l),tt=!1,g=t.memoizedState,i.state=g,so(t,r,i,o);var v=t.memoizedState;s!==f||g!==v||he.current||tt?(typeof x=="function"&&(Va(t,n,x,r),v=t.memoizedState),(u=tt||Ys(t,n,u,r,g,v,l)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Xa(e,t,n,r,a,o)}function Xa(e,t,n,r,o,a){Cc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Bs(t,n,!1),Ye(e,t,a);r=t.stateNode,ff.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=cn(t,e.child,null,a),t.child=cn(t,null,s,a)):le(e,t,s,a),t.memoizedState=r.state,o&&Bs(t,n,!0),t.child}function Sc(e){var t=e.stateNode;t.pendingContext?qs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qs(e,t.context,!1),Wi(e,t.containerInfo)}function al(e,t,n,r,o){return un(),Ii(o),t.flags|=256,le(e,t,n,r),t.child}var Ya={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function kc(e,t,n){var r=t.pendingProps,o=F.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),_(F,o&1),e===null)return Ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=bo(i,r,0,null),e=Ot(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ga(n),t.memoizedState=Ya,e):Ji(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return hf(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ht(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=ht(s,a):(a=Ot(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Ga(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Ya,r}return a=e.child,e=a.sibling,r=ht(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ji(e,t){return t=bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&Ii(r),cn(t,e.child,null,n),e=Ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hf(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=ca(Error(S(422))),Ar(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=bo({mode:"visible",children:r.children},o,0,null),a=Ot(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&cn(t,e.child,null,i),t.child.memoizedState=Ga(i),t.memoizedState=Ya,a);if(!(t.mode&1))return Ar(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(S(419)),r=ca(a,r,void 0),Ar(e,t,i,r)}if(s=(i&e.childLanes)!==0,fe||s){if(r=Z,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Xe(e,o),De(r,e,o,-1))}return es(),r=ca(Error(S(421))),Ar(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Pf.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,we=ct(o.nextSibling),xe=t,z=!0,je=null,e!==null&&(Ee[Re++]=He,Ee[Re++]=$e,Ee[Re++]=It,He=e.id,$e=e.overflow,It=t),t=Ji(t,r.children),t.flags|=4096,t)}function il(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function da(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Ec(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(le(e,t,r.children,n),r=F.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&il(e,n,t);else if(e.tag===19)il(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(F,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),da(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}da(t,!0,n,null,a);break;case"together":da(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mf(e,t,n){switch(t.tag){case 3:Sc(t),un();break;case 5:Xu(t);break;case 1:me(t.type)&&no(t);break;case 4:Wi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;_(ao,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(F,F.current&1),t.flags|=128,null):n&t.child.childLanes?kc(e,t,n):(_(F,F.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);_(F,F.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ec(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),_(F,F.current),r)break;return null;case 22:case 23:return t.lanes=0,xc(e,t,n)}return Ye(e,t,n)}var Rc,Za,Tc,Pc;Rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Za=function(){};Tc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bt(Fe.current);var a=null;switch(n){case"input":o=Ca(e,o),r=Ca(e,r),a=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),a=[];break;case"textarea":o=Ea(e,o),r=Ea(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}Ta(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qn.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&U("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gf(e,t,n){var r=t.pendingProps;switch(ji(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return me(t.type)&&to(),oe(t),null;case 3:return r=t.stateNode,dn(),M(he),M(se),qi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(si(je),je=null))),Za(e,t),oe(t),null;case 5:Fi(t);var o=bt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)Tc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=bt(Fe.current),Pr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ze]=t,r[Gn]=a,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<On.length;o++)U(On[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":ms(r,a),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},U("invalid",r);break;case"textarea":vs(r,a),U("invalid",r)}Ta(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Tr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Tr(r.textContent,s,e),o=["children",""+s]):qn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&U("scroll",r)}switch(n){case"input":yr(r),gs(r,a,!0);break;case"textarea":yr(r),ys(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=eo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[ze]=t,e[Gn]=r,Rc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Pa(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<On.length;o++)U(On[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":ms(e,r),o=Ca(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),U("invalid",e);break;case"textarea":vs(e,r),o=Ea(e,r),U("invalid",e);break;default:o=r}Ta(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?ou(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nu(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bn(e,l):typeof l=="number"&&Bn(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(qn.hasOwnProperty(a)?l!=null&&a==="onScroll"&&U("scroll",e):l!=null&&yi(e,a,l,i))}switch(n){case"input":yr(e),gs(e,r,!1);break;case"textarea":yr(e),ys(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?en(e,!!r.multiple,a,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=bt(er.current),bt(Fe.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ze]=t,(a=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ze]=t,t.stateNode=r}return oe(t),null;case 13:if(M(F),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&we!==null&&t.mode&1&&!(t.flags&128))$u(),un(),t.flags|=98560,a=!1;else if(a=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[ze]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),a=!1}else je!==null&&(si(je),je=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?X===0&&(X=3):es())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return dn(),Za(e,t),e===null&&Xn(t.stateNode.containerInfo),oe(t),null;case 10:return Ui(t.type._context),oe(t),null;case 17:return me(t.type)&&to(),oe(t),null;case 19:if(M(F),a=t.memoizedState,a===null)return oe(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Pn(a,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=lo(e),i!==null){for(t.flags|=128,Pn(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(F,F.current&1|2),t.child}e=e.sibling}a.tail!==null&&Q()>fn&&(t.flags|=128,r=!0,Pn(a,!1),t.lanes=4194304)}else{if(!r)if(e=lo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!z)return oe(t),null}else 2*Q()-a.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Q(),t.sibling=null,n=F.current,_(F,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Zi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function vf(e,t){switch(ji(t),t.tag){case 1:return me(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),M(he),M(se),qi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fi(t),null;case 13:if(M(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(F),null;case 4:return dn(),null;case 10:return Ui(t.type._context),null;case 22:case 23:return Zi(),null;case 24:return null;default:return null}}var br=!1,ae=!1,yf=typeof WeakSet=="function"?WeakSet:Set,R=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function ei(e,t,n){try{n()}catch(r){H(e,t,r)}}var sl=!1;function wf(e,t){if(Ua=Yr,e=Ou(),Li(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,m=0,f=e,g=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(s=i+o),f!==a||r!==0&&f.nodeType!==3||(l=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(x=f.firstChild)!==null;)g=f,f=x;for(;;){if(f===e)break t;if(g===n&&++u===o&&(s=i),g===a&&++m===r&&(l=i),(x=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=x}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ma={focusedElem:e,selectionRange:n},Yr=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Le(t.type,w),k);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){H(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=sl,sl=!1,v}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&ei(t,n,a)}o=o.next}while(o!==r)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ti(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ze],delete t[Gn],delete t[Fa],delete t[ef],delete t[tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ac(e){return e.tag===5||e.tag===3||e.tag===4}function ll(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ac(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(ni(e,t,n),e=e.sibling;e!==null;)ni(e,t,n),e=e.sibling}function ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ri(e,t,n),e=e.sibling;e!==null;)ri(e,t,n),e=e.sibling}var ee=null,Oe=!1;function Ze(e,t,n){for(n=n.child;n!==null;)bc(e,t,n),n=n.sibling}function bc(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(xo,n)}catch{}switch(n.tag){case 5:ae||Gt(n,t);case 6:var r=ee,o=Oe;ee=null,Ze(e,t,n),ee=r,Oe=o,ee!==null&&(Oe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,n=n.stateNode,e.nodeType===8?oa(e.parentNode,n):e.nodeType===1&&oa(e,n),Qn(e)):oa(ee,n.stateNode));break;case 4:r=ee,o=Oe,ee=n.stateNode.containerInfo,Oe=!0,Ze(e,t,n),ee=r,Oe=o;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&ei(n,t,i),o=o.next}while(o!==r)}Ze(e,t,n);break;case 1:if(!ae&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,Ze(e,t,n),ae=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function ul(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yf),t.forEach(function(r){var o=Nf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Oe=!1;break e;case 3:ee=s.stateNode.containerInfo,Oe=!0;break e;case 4:ee=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(ee===null)throw Error(S(160));bc(a,i,o),ee=null,Oe=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){H(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lc(t,e),t=t.sibling}function Lc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Ue(e),r&4){try{zn(3,e,e.return),No(3,e)}catch(w){H(e,e.return,w)}try{zn(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:be(t,e),Ue(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(be(t,e),Ue(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var o=e.stateNode;try{Bn(o,"")}catch(w){H(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Zl(o,a),Pa(s,i);var u=Pa(s,a);for(i=0;i<l.length;i+=2){var m=l[i],f=l[i+1];m==="style"?ou(o,f):m==="dangerouslySetInnerHTML"?nu(o,f):m==="children"?Bn(o,f):yi(o,m,f,u)}switch(s){case"input":Sa(o,a);break;case"textarea":eu(o,a);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?en(o,!!a.multiple,x,!1):g!==!!a.multiple&&(a.defaultValue!=null?en(o,!!a.multiple,a.defaultValue,!0):en(o,!!a.multiple,a.multiple?[]:"",!1))}o[Gn]=a}catch(w){H(e,e.return,w)}}break;case 6:if(be(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(w){H(e,e.return,w)}}break;case 3:if(be(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:be(t,e),Ue(e);break;case 13:be(t,e),Ue(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Yi=Q())),r&4&&ul(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||m,be(t,e),ae=u):be(t,e),Ue(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(R=e,m=e.child;m!==null;){for(f=R=m;R!==null;){switch(g=R,x=g.child,g.tag){case 0:case 11:case 14:case 15:zn(4,g,g.return);break;case 1:Gt(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){H(r,n,w)}}break;case 5:Gt(g,g.return);break;case 22:if(g.memoizedState!==null){dl(f);continue}}x!==null?(x.return=g,R=x):dl(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{o=f.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=ru("display",i))}catch(w){H(e,e.return,w)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){H(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:be(t,e),Ue(e),r&4&&ul(e);break;case 21:break;default:be(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ac(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Bn(o,""),r.flags&=-33);var a=ll(e);ri(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=ll(e);ni(e,s,i);break;default:throw Error(S(161))}}catch(l){H(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e,t,n){R=e,Oc(e)}function Oc(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||br;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||ae;s=br;var u=ae;if(br=i,(ae=l)&&!u)for(R=o;R!==null;)i=R,l=i.child,i.tag===22&&i.memoizedState!==null?pl(o):l!==null?(l.return=i,R=l):pl(o);for(;a!==null;)R=a,Oc(a),a=a.sibling;R=o,br=s,ae=u}cl(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,R=a):cl(e)}}function cl(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||No(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Js(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Js(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Qn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||t.flags&512&&ti(t)}catch(g){H(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function dl(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function pl(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{No(4,t)}catch(l){H(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){H(t,o,l)}}var a=t.return;try{ti(t)}catch(l){H(t,a,l)}break;case 5:var i=t.return;try{ti(t)}catch(l){H(t,i,l)}}}catch(l){H(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var Cf=Math.ceil,po=Ge.ReactCurrentDispatcher,Ki=Ge.ReactCurrentOwner,Pe=Ge.ReactCurrentBatchConfig,I=0,Z=null,J=null,te=0,ye=0,Zt=wt(0),X=0,or=null,_t=0,Ao=0,Xi=0,Wn=null,pe=null,Yi=0,fn=1/0,qe=null,fo=!1,oi=null,pt=null,Lr=!1,at=null,ho=0,Fn=0,ai=null,Br=-1,Hr=0;function ue(){return I&6?Q():Br!==-1?Br:Br=Q()}function ft(e){return e.mode&1?I&2&&te!==0?te&-te:rf.transition!==null?(Hr===0&&(Hr=gu()),Hr):(e=D,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e):1}function De(e,t,n,r){if(50<Fn)throw Fn=0,ai=null,Error(S(185));lr(e,n,r),(!(I&2)||e!==Z)&&(e===Z&&(!(I&2)&&(Ao|=n),X===4&&rt(e,te)),ge(e,r),n===1&&I===0&&!(t.mode&1)&&(fn=Q()+500,Ro&&xt()))}function ge(e,t){var n=e.callbackNode;rp(e,t);var r=Xr(e,e===Z?te:0);if(r===0)n!==null&&Cs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cs(n),t===1)e.tag===0?nf(fl.bind(null,e)):qu(fl.bind(null,e)),Gp(function(){!(I&6)&&xt()}),n=null;else{switch(vu(r)){case 1:n=ki;break;case 4:n=hu;break;case 16:n=Kr;break;case 536870912:n=mu;break;default:n=Kr}n=Wc(n,jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jc(e,t){if(Br=-1,Hr=0,I&6)throw Error(S(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Xr(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var o=I;I|=2;var a=Dc();(Z!==e||te!==t)&&(qe=null,fn=Q()+500,Lt(e,t));do try{Ef();break}catch(s){Ic(e,s)}while(!0);_i(),po.current=a,I=o,J!==null?t=0:(Z=null,te=0,t=X)}if(t!==0){if(t===2&&(o=Oa(e),o!==0&&(r=o,t=ii(e,o))),t===1)throw n=or,Lt(e,0),rt(e,r),ge(e,Q()),n;if(t===6)rt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Sf(o)&&(t=mo(e,r),t===2&&(a=Oa(e),a!==0&&(r=a,t=ii(e,a))),t===1))throw n=or,Lt(e,0),rt(e,r),ge(e,Q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Tt(e,pe,qe);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Yi+500-Q(),10<t)){if(Xr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wa(Tt.bind(null,e,pe,qe),t);break}Tt(e,pe,qe);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ie(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cf(r/1960))-r,10<r){e.timeoutHandle=Wa(Tt.bind(null,e,pe,qe),r);break}Tt(e,pe,qe);break;case 5:Tt(e,pe,qe);break;default:throw Error(S(329))}}}return ge(e,Q()),e.callbackNode===n?jc.bind(null,e):null}function ii(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=mo(e,t),e!==2&&(t=pe,pe=n,t!==null&&si(t)),e}function si(e){pe===null?pe=e:pe.push.apply(pe,e)}function Sf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!_e(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Xi,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function fl(e){if(I&6)throw Error(S(327));an();var t=Xr(e,0);if(!(t&1))return ge(e,Q()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=Oa(e);r!==0&&(t=r,n=ii(e,r))}if(n===1)throw n=or,Lt(e,0),rt(e,t),ge(e,Q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,pe,qe),ge(e,Q()),null}function Gi(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(fn=Q()+500,Ro&&xt())}}function Ut(e){at!==null&&at.tag===0&&!(I&6)&&an();var t=I;I|=1;var n=Pe.transition,r=D;try{if(Pe.transition=null,D=1,e)return e()}finally{D=r,Pe.transition=n,I=t,!(I&6)&&xt()}}function Zi(){ye=Zt.current,M(Zt)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yp(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(ji(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:dn(),M(he),M(se),qi();break;case 5:Fi(r);break;case 4:dn();break;case 13:M(F);break;case 19:M(F);break;case 10:Ui(r.type._context);break;case 22:case 23:Zi()}n=n.return}if(Z=e,J=e=ht(e.current,null),te=ye=t,X=0,or=null,Xi=Ao=_t=0,pe=Wn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}At=null}return e}function Ic(e,t){do{var n=J;try{if(_i(),Wr.current=co,uo){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}uo=!1}if(Dt=0,G=K=q=null,Mn=!1,tr=0,Ki.current=null,n===null||n.return===null){X=1,or=t,J=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=te,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,m=s,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=el(i);if(x!==null){x.flags&=-257,tl(x,i,s,a,t),x.mode&1&&Zs(a,u,t),t=x,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Zs(a,u,t),es();break e}l=Error(S(426))}}else if(z&&s.mode&1){var k=el(i);if(k!==null){!(k.flags&65536)&&(k.flags|=256),tl(k,i,s,a,t),Ii(pn(l,s));break e}}a=l=pn(l,s),X!==4&&(X=2),Wn===null?Wn=[a]:Wn.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=vc(a,l,t);Qs(a,d);break e;case 1:s=l;var c=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pt===null||!pt.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=yc(a,s,t);Qs(a,y);break e}}a=a.return}while(a!==null)}Uc(n)}catch(E){t=E,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function Dc(){var e=po.current;return po.current=co,e===null?co:e}function es(){(X===0||X===3||X===2)&&(X=4),Z===null||!(_t&268435455)&&!(Ao&268435455)||rt(Z,te)}function mo(e,t){var n=I;I|=2;var r=Dc();(Z!==e||te!==t)&&(qe=null,Lt(e,t));do try{kf();break}catch(o){Ic(e,o)}while(!0);if(_i(),I=n,po.current=r,J!==null)throw Error(S(261));return Z=null,te=0,X}function kf(){for(;J!==null;)_c(J)}function Ef(){for(;J!==null&&!Jd();)_c(J)}function _c(e){var t=zc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Uc(e):J=t,Ki.current=null}function Uc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vf(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,J=null;return}}else if(n=gf(n,t,ye),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);X===0&&(X=5)}function Tt(e,t,n){var r=D,o=Pe.transition;try{Pe.transition=null,D=1,Rf(e,t,n,r)}finally{Pe.transition=o,D=r}return null}function Rf(e,t,n,r){do an();while(at!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(op(e,a),e===Z&&(J=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,Wc(Kr,function(){return an(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Pe.transition,Pe.transition=null;var i=D;D=1;var s=I;I|=4,Ki.current=null,wf(e,n),Lc(n,e),Hp(Ma),Yr=!!Ua,Ma=Ua=null,e.current=n,xf(n),Kd(),I=s,D=i,Pe.transition=a}else e.current=n;if(Lr&&(Lr=!1,at=e,ho=o),a=e.pendingLanes,a===0&&(pt=null),Gd(n.stateNode),ge(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fo)throw fo=!1,e=oi,oi=null,e;return ho&1&&e.tag!==0&&an(),a=e.pendingLanes,a&1?e===ai?Fn++:(Fn=0,ai=e):Fn=0,xt(),null}function an(){if(at!==null){var e=vu(ho),t=Pe.transition,n=D;try{if(Pe.transition=null,D=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,ho=0,I&6)throw Error(S(331));var o=I;for(I|=4,R=e.current;R!==null;){var a=R,i=a.child;if(R.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(R=u;R!==null;){var m=R;switch(m.tag){case 0:case 11:case 15:zn(8,m,a)}var f=m.child;if(f!==null)f.return=m,R=f;else for(;R!==null;){m=R;var g=m.sibling,x=m.return;if(Nc(m),m===u){R=null;break}if(g!==null){g.return=x,R=g;break}R=x}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}R=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,R=i;else e:for(;R!==null;){if(a=R,a.flags&2048)switch(a.tag){case 0:case 11:case 15:zn(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,R=d;break e}R=a.return}}var c=e.current;for(R=c;R!==null;){i=R;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,R=h;else e:for(i=c;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:No(9,s)}}catch(E){H(s,s.return,E)}if(s===i){R=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,R=y;break e}R=s.return}}if(I=o,xt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(xo,e)}catch{}r=!0}return r}finally{D=n,Pe.transition=t}}return!1}function hl(e,t,n){t=pn(n,t),t=vc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(lr(e,1,t),ge(e,t))}function H(e,t,n){if(e.tag===3)hl(e,e,n);else for(;t!==null;){if(t.tag===3){hl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=pn(n,e),e=yc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(lr(t,1,e),ge(t,e));break}}t=t.return}}function Tf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Q()-Yi?Lt(e,0):Xi|=n),ge(e,t)}function Mc(e,t){t===0&&(e.mode&1?(t=Cr,Cr<<=1,!(Cr&130023424)&&(Cr=4194304)):t=1);var n=ue();e=Xe(e,t),e!==null&&(lr(e,t,n),ge(e,n))}function Pf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mc(e,n)}function Nf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Mc(e,n)}var zc;zc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,mf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,z&&t.flags&1048576&&Bu(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var o=ln(t,se.current);on(t,n),o=Hi(null,t,r,e,o,n);var a=$i();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(a=!0,no(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zi(t),o.updater=Po,t.stateNode=o,o._reactInternals=t,Qa(t,r,e,n),t=Xa(null,t,r,!0,a,n)):(t.tag=0,z&&a&&Oi(t),le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=bf(r),e=Le(r,e),o){case 0:t=Ka(null,t,r,e,n);break e;case 1:t=ol(null,t,r,e,n);break e;case 11:t=nl(null,t,r,e,n);break e;case 14:t=rl(null,t,r,Le(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Le(r,o),Ka(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Le(r,o),ol(e,t,r,o,n);case 3:e:{if(Sc(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,o=a.element,Ku(e,t),so(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=pn(Error(S(423)),t),t=al(e,t,r,n,o);break e}else if(r!==o){o=pn(Error(S(424)),t),t=al(e,t,r,n,o);break e}else for(we=ct(t.stateNode.containerInfo.firstChild),xe=t,z=!0,je=null,n=Qu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===o){t=Ye(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return Xu(t),e===null&&Ha(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,za(r,o)?i=null:a!==null&&za(r,a)&&(t.flags|=32),Cc(e,t),le(e,t,i,n),t.child;case 6:return e===null&&Ha(t),null;case 13:return kc(e,t,n);case 4:return Wi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Le(r,o),nl(e,t,r,o,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,_(ao,r._currentValue),r._currentValue=i,a!==null)if(_e(a.value,i)){if(a.children===o.children&&!he.current){t=Ye(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Qe(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?l.next=l:(l.next=m.next,m.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),$a(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(S(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),$a(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,on(t,n),o=Ne(o),r=r(o),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,o=Le(r,t.pendingProps),o=Le(r.type,o),rl(e,t,r,o,n);case 15:return wc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Le(r,o),qr(e,t),t.tag=1,me(r)?(e=!0,no(t)):e=!1,on(t,n),gc(t,r,o),Qa(t,r,o,n),Xa(null,t,r,!0,e,n);case 19:return Ec(e,t,n);case 22:return xc(e,t,n)}throw Error(S(156,t.tag))};function Wc(e,t){return fu(e,t)}function Af(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Af(e,t,n,r)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bf(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xi)return 11;if(e===Ci)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")ts(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Bt:return Ot(n.children,o,a,t);case wi:i=8,o|=8;break;case va:return e=Te(12,n,t,o|2),e.elementType=va,e.lanes=a,e;case ya:return e=Te(13,n,t,o),e.elementType=ya,e.lanes=a,e;case wa:return e=Te(19,n,t,o),e.elementType=wa,e.lanes=a,e;case Xl:return bo(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jl:i=10;break e;case Kl:i=9;break e;case xi:i=11;break e;case Ci:i=14;break e;case et:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Te(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Ot(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function bo(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Xl,e.lanes=n,e.stateNode={isHidden:!1},e}function pa(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function fa(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ns(e,t,n,r,o,a,i,s,l){return e=new Lf(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Te(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(a),e}function Of(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fc(e){if(!e)return vt;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(me(n))return Fu(e,n,t)}return t}function qc(e,t,n,r,o,a,i,s,l){return e=ns(n,r,!0,e,o,a,i,s,l),e.context=Fc(null),n=e.current,r=ue(),o=ft(n),a=Qe(r,o),a.callback=t??null,dt(n,a,o),e.current.lanes=o,lr(e,o,r),ge(e,r),e}function Lo(e,t,n,r){var o=t.current,a=ue(),i=ft(o);return n=Fc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(o,t,i),e!==null&&(De(e,o,i,a),zr(e,o,i)),i}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ml(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rs(e,t){ml(e,t),(e=e.alternate)&&ml(e,t)}function jf(){return null}var Bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function os(e){this._internalRoot=e}Oo.prototype.render=os.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Lo(e,t,null,null)};Oo.prototype.unmount=os.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){Lo(null,e,null,null)}),t[Ke]=null}};function Oo(e){this._internalRoot=e}Oo.prototype.unstable_scheduleHydration=function(e){if(e){var t=xu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Su(e)}};function as(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gl(){}function If(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=go(i);a.call(u)}}var i=qc(t,r,e,0,null,!1,!1,"",gl);return e._reactRootContainer=i,e[Ke]=i.current,Xn(e.nodeType===8?e.parentNode:e),Ut(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=go(l);s.call(u)}}var l=ns(e,0,!1,null,null,!1,!1,"",gl);return e._reactRootContainer=l,e[Ke]=l.current,Xn(e.nodeType===8?e.parentNode:e),Ut(function(){Lo(t,l,n,r)}),l}function Io(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=go(i);s.call(l)}}Lo(t,i,e,o)}else i=If(n,t,e,o,r);return go(i)}yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(Ei(t,n|1),ge(t,Q()),!(I&6)&&(fn=Q()+500,xt()))}break;case 13:Ut(function(){var r=Xe(e,1);if(r!==null){var o=ue();De(r,e,1,o)}}),rs(e,1)}};Ri=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ue();De(t,e,134217728,n)}rs(e,134217728)}};wu=function(e){if(e.tag===13){var t=ft(e),n=Xe(e,t);if(n!==null){var r=ue();De(n,e,t,r)}rs(e,t)}};xu=function(){return D};Cu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Aa=function(e,t,n){switch(t){case"input":if(Sa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Eo(r);if(!o)throw Error(S(90));Gl(r),Sa(r,o)}}}break;case"textarea":eu(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};su=Gi;lu=Ut;var Df={usingClientEntryPoint:!1,Events:[cr,Qt,Eo,au,iu,Gi]},Nn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_f={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=du(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||jf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{xo=Or.inject(_f),We=Or}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!as(t))throw Error(S(200));return Of(e,t,null,n)};Se.createRoot=function(e,t){if(!as(e))throw Error(S(299));var n=!1,r="",o=Bc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ns(e,1,!1,null,null,n,!1,r,o),e[Ke]=t.current,Xn(e.nodeType===8?e.parentNode:e),new os(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=du(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Ut(e)};Se.hydrate=function(e,t,n){if(!jo(t))throw Error(S(200));return Io(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!as(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=Bc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=qc(t,null,e,1,n??null,o,!1,a,i),e[Ke]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Oo(t)};Se.render=function(e,t,n){if(!jo(t))throw Error(S(200));return Io(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!jo(e))throw Error(S(40));return e._reactRootContainer?(Ut(function(){Io(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};Se.unstable_batchedUpdates=Gi;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Io(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Hc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hc)}catch(e){console.error(e)}}Hc(),Hl.exports=Se;var Uf=Hl.exports,vl=Uf;ma.createRoot=vl.createRoot,ma.hydrateRoot=vl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}var it;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(it||(it={}));const yl="popstate";function Mf(e){e===void 0&&(e={});function t(o,a){let{pathname:i="/",search:s="",hash:l=""}=Wt(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),li("",{pathname:i,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){let i=o.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof a=="string"?a:vo(a))}function r(o,a){Do(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return Wf(t,n,r,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Do(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zf(){return Math.random().toString(36).substr(2,8)}function wl(e,t){return{usr:e.state,key:e.key,idx:t}}function li(e,t,n,r){return n===void 0&&(n=null),ar({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wt(t):t,{state:n,key:t&&t.key||r||zf()})}function vo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wf(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,s=it.Pop,l=null,u=m();u==null&&(u=0,i.replaceState(ar({},i.state,{idx:u}),""));function m(){return(i.state||{idx:null}).idx}function f(){s=it.Pop;let k=m(),d=k==null?null:k-u;u=k,l&&l({action:s,location:w.location,delta:d})}function g(k,d){s=it.Push;let c=li(w.location,k,d);n&&n(c,k),u=m()+1;let h=wl(c,u),y=w.createHref(c);try{i.pushState(h,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(y)}a&&l&&l({action:s,location:w.location,delta:1})}function x(k,d){s=it.Replace;let c=li(w.location,k,d);n&&n(c,k),u=m();let h=wl(c,u),y=w.createHref(c);i.replaceState(h,"",y),a&&l&&l({action:s,location:w.location,delta:0})}function v(k){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof k=="string"?k:vo(k);return c=c.replace(/ $/,"%20"),$(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let w={get action(){return s},get location(){return e(o,i)},listen(k){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(yl,f),l=k,()=>{o.removeEventListener(yl,f),l=null}},createHref(k){return t(o,k)},createURL:v,encodeLocation(k){let d=v(k);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:x,go(k){return i.go(k)}};return w}var xl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xl||(xl={}));function Ff(e,t,n){return n===void 0&&(n="/"),qf(e,t,n)}function qf(e,t,n,r){let o=typeof t=="string"?Wt(t):t,a=hn(o.pathname||"/",n);if(a==null)return null;let i=$c(e);Bf(i);let s=null;for(let l=0;s==null&&l<i.length;++l){let u=eh(a);s=Gf(i[l],u)}return s}function $c(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,i,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};l.relativePath.startsWith("/")&&($(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mt([r,l.relativePath]),m=n.concat(l);a.children&&a.children.length>0&&($(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$c(a.children,t,m,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Xf(u,a.index),routesMeta:m})};return e.forEach((a,i)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))o(a,i);else for(let l of Vc(a.path))o(a,i,l)}),t}function Vc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=Vc(r.join("/")),s=[];return s.push(...i.map(l=>l===""?a:[a,l].join("/"))),o&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Bf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hf=/^:[\w-]+$/,$f=3,Vf=2,Qf=1,Jf=10,Kf=-2,Cl=e=>e==="*";function Xf(e,t){let n=e.split("/"),r=n.length;return n.some(Cl)&&(r+=Kf),t&&(r+=Vf),n.filter(o=>!Cl(o)).reduce((o,a)=>o+(Hf.test(a)?$f:a===""?Qf:Jf),r)}function Yf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Gf(e,t,n){let{routesMeta:r}=e,o={},a="/",i=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,m=a==="/"?t:t.slice(a.length)||"/",f=ui({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},m),g=l.route;if(!f)return null;Object.assign(o,f.params),i.push({params:o,pathname:mt([a,f.pathname]),pathnameBase:ah(mt([a,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(a=mt([a,f.pathnameBase]))}return i}function ui(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zf(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,m,f)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let w=s[f]||"";i=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const v=s[f];return x&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function Zf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Do(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function eh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Do(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nh=e=>th.test(e);function rh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Wt(e):e,a;if(n)if(nh(n))a=n;else{if(n.includes("//")){let i=n;n=n.replace(/\/\/+/g,"/"),Do(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+n))}n.startsWith("/")?a=Sl(n.substring(1),"/"):a=Sl(n,t)}else a=t;return{pathname:a,search:ih(r),hash:sh(o)}}function Sl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ha(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qc(e,t){let n=oh(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Jc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Wt(e):(o=ar({},e),$(!o.pathname||!o.pathname.includes("?"),ha("?","pathname","search",o)),$(!o.pathname||!o.pathname.includes("#"),ha("#","pathname","hash",o)),$(!o.search||!o.search.includes("#"),ha("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,s;if(i==null)s=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}s=f>=0?t[f]:"/"}let l=rh(o,s),u=i&&i!=="/"&&i.endsWith("/"),m=(a||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||m)&&(l.pathname+="/"),l}const mt=e=>e.join("/").replace(/\/\/+/g,"/"),ah=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ih=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Kc=["post","put","patch","delete"];new Set(Kc);const uh=["get",...Kc];new Set(uh);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}const _o=C.createContext(null),Xc=C.createContext(null),Ct=C.createContext(null),Uo=C.createContext(null),St=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Yc=C.createContext(null);function ch(e,t){let{relative:n}=t===void 0?{}:t;pr()||$(!1);let{basename:r,navigator:o}=C.useContext(Ct),{hash:a,pathname:i,search:s}=Mo(e,{relative:n}),l=i;return r!=="/"&&(l=i==="/"?r:mt([r,i])),o.createHref({pathname:l,search:s,hash:a})}function pr(){return C.useContext(Uo)!=null}function fr(){return pr()||$(!1),C.useContext(Uo).location}function Gc(e){C.useContext(Ct).static||C.useLayoutEffect(e)}function is(){let{isDataRoute:e}=C.useContext(St);return e?kh():dh()}function dh(){pr()||$(!1);let e=C.useContext(_o),{basename:t,future:n,navigator:r}=C.useContext(Ct),{matches:o}=C.useContext(St),{pathname:a}=fr(),i=JSON.stringify(Qc(o,n.v7_relativeSplatPath)),s=C.useRef(!1);return Gc(()=>{s.current=!0}),C.useCallback(function(u,m){if(m===void 0&&(m={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Jc(u,JSON.parse(i),a,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mt([t,f.pathname])),(m.replace?r.replace:r.push)(f,m.state,m)},[t,r,i,a,e])}function Zc(){let{matches:e}=C.useContext(St),t=e[e.length-1];return t?t.params:{}}function Mo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Ct),{matches:o}=C.useContext(St),{pathname:a}=fr(),i=JSON.stringify(Qc(o,r.v7_relativeSplatPath));return C.useMemo(()=>Jc(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function ph(e,t){return fh(e,t)}function fh(e,t,n,r){pr()||$(!1);let{navigator:o}=C.useContext(Ct),{matches:a}=C.useContext(St),i=a[a.length-1],s=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let u=fr(),m;if(t){var f;let k=typeof t=="string"?Wt(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||$(!1),m=k}else m=u;let g=m.pathname||"/",x=g;if(l!=="/"){let k=l.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let v=Ff(e,{pathname:x}),w=yh(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:mt([l,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:mt([l,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,n,r);return t&&w?C.createElement(Uo.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:it.Pop}},w):w}function hh(){let e=Sh(),t=lh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,null)}const mh=C.createElement(hh,null);class gh extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(St.Provider,{value:this.props.routeContext},C.createElement(Yc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vh(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(_o);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(St.Provider,{value:t},r)}function yh(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let m=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);m>=0||$(!1),i=i.slice(0,Math.min(i.length,m+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<i.length;m++){let f=i[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=m),f.route.id){let{loaderData:g,errors:x}=n,v=f.route.loader&&g[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((m,f,g)=>{let x,v=!1,w=null,k=null;n&&(x=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||mh,l&&(u<0&&g===0?(Eh("route-fallback"),v=!0,k=null):u===g&&(v=!0,k=f.route.hydrateFallbackElement||null)));let d=t.concat(i.slice(0,g+1)),c=()=>{let h;return x?h=w:v?h=k:f.route.Component?h=C.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,C.createElement(vh,{match:f,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?C.createElement(gh,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var ed=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ed||{}),td=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(td||{});function wh(e){let t=C.useContext(_o);return t||$(!1),t}function xh(e){let t=C.useContext(Xc);return t||$(!1),t}function Ch(e){let t=C.useContext(St);return t||$(!1),t}function nd(e){let t=Ch(),n=t.matches[t.matches.length-1];return n.route.id||$(!1),n.route.id}function Sh(){var e;let t=C.useContext(Yc),n=xh(),r=nd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function kh(){let{router:e}=wh(ed.UseNavigateStable),t=nd(td.UseNavigateStable),n=C.useRef(!1);return Gc(()=>{n.current=!0}),C.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ir({fromRouteId:t},a)))},[e,t])}const kl={};function Eh(e,t,n){kl[e]||(kl[e]=!0)}function Rh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pt(e){$(!1)}function Th(e){let{basename:t="/",children:n=null,location:r,navigationType:o=it.Pop,navigator:a,static:i=!1,future:s}=e;pr()&&$(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:a,static:i,future:ir({v7_relativeSplatPath:!1},s)}),[l,s,a,i]);typeof r=="string"&&(r=Wt(r));let{pathname:m="/",search:f="",hash:g="",state:x=null,key:v="default"}=r,w=C.useMemo(()=>{let k=hn(m,l);return k==null?null:{location:{pathname:k,search:f,hash:g,state:x,key:v},navigationType:o}},[l,m,f,g,x,v,o]);return w==null?null:C.createElement(Ct.Provider,{value:u},C.createElement(Uo.Provider,{children:n,value:w}))}function Ph(e){let{children:t,location:n}=e;return ph(ci(t),n)}new Promise(()=>{});function ci(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let a=[...t,o];if(r.type===C.Fragment){n.push.apply(n,ci(r.props.children,a));return}r.type!==Pt&&$(!1),!r.props.index||!r.props.children||$(!1);let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ci(r.props.children,a)),n.push(i)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}function rd(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Nh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ah(e,t){return e.button===0&&(!t||t==="_self")&&!Nh(e)}const bh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Lh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Oh="6";try{window.__reactRouterVersion=Oh}catch{}const jh=C.createContext({isTransitioning:!1}),Ih="startTransition",El=Rd[Ih];function Dh(e){let{basename:t,children:n,future:r,window:o}=e,a=C.useRef();a.current==null&&(a.current=Mf({window:o,v5Compat:!0}));let i=a.current,[s,l]=C.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},m=C.useCallback(f=>{u&&El?El(()=>l(f)):l(f)},[l,u]);return C.useLayoutEffect(()=>i.listen(m),[i,m]),C.useEffect(()=>Rh(r),[r]),C.createElement(Th,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:r})}const _h=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ve=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:a,replace:i,state:s,target:l,to:u,preventScrollReset:m,viewTransition:f}=t,g=rd(t,bh),{basename:x}=C.useContext(Ct),v,w=!1;if(typeof u=="string"&&Uh.test(u)&&(v=u,_h))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=hn(y.pathname,x);y.origin===h.origin&&E!=null?u=E+y.search+y.hash:w=!0}catch{}let k=ch(u,{relative:o}),d=zh(u,{replace:i,state:s,target:l,preventScrollReset:m,relative:o,viewTransition:f});function c(h){r&&r(h),h.defaultPrevented||d(h)}return C.createElement("a",yo({},g,{href:v||k,onClick:w||a?r:c,ref:n,target:l}))}),jr=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:a="",end:i=!1,style:s,to:l,viewTransition:u,children:m}=t,f=rd(t,Lh),g=Mo(l,{relative:f.relative}),x=fr(),v=C.useContext(Xc),{navigator:w,basename:k}=C.useContext(Ct),d=v!=null&&Wh(g)&&u===!0,c=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,h=x.pathname,y=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(h=h.toLowerCase(),y=y?y.toLowerCase():null,c=c.toLowerCase()),y&&k&&(y=hn(y,k)||y);const E=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let P=h===c||!i&&h.startsWith(c)&&h.charAt(E)==="/",N=y!=null&&(y===c||!i&&y.startsWith(c)&&y.charAt(c.length)==="/"),A={isActive:P,isPending:N,isTransitioning:d},W=P?r:void 0,L;typeof a=="function"?L=a(A):L=[a,P?"active":null,N?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let ve=typeof s=="function"?s(A):s;return C.createElement(Ve,yo({},f,{"aria-current":W,className:L,ref:n,style:ve,to:l,viewTransition:u}),typeof m=="function"?m(A):m)});var di;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(di||(di={}));var Rl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rl||(Rl={}));function Mh(e){let t=C.useContext(_o);return t||$(!1),t}function zh(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:i,viewTransition:s}=t===void 0?{}:t,l=is(),u=fr(),m=Mo(e,{relative:i});return C.useCallback(f=>{if(Ah(f,n)){f.preventDefault();let g=r!==void 0?r:vo(u)===vo(m);l(e,{replace:g,state:o,preventScrollReset:a,relative:i,viewTransition:s})}},[u,l,m,r,o,n,e,a,i,s])}function Wh(e,t){t===void 0&&(t={});let n=C.useContext(jh);n==null&&$(!1);let{basename:r}=Mh(di.useViewTransitionState),o=Mo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=hn(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=hn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ui(o.pathname,i)!=null||ui(o.pathname,a)!=null}const od="react-course-progress",ad={levelTestResult:null,topicProgress:{},moduleTestResults:{},finalTestResult:null};function Fh(e,t){switch(t.type){case"SET_LEVEL_TEST":return{...e,levelTestResult:t.payload};case"RESET_LEVEL_TEST":return{...e,levelTestResult:null};case"COMPLETE_TOPIC":return{...e,topicProgress:{...e.topicProgress,[t.payload.topicId]:{completed:!0,taskCompleted:!0}}};case"SET_MODULE_TEST":return{...e,moduleTestResults:{...e.moduleTestResults,[t.payload.moduleId]:t.payload.result}};case"SET_FINAL_TEST":return{...e,finalTestResult:t.payload};case"RESET":return ad;default:return e}}function qh(){try{const e=localStorage.getItem(od);if(e)return JSON.parse(e)}catch{}return ad}const id=C.createContext(null);function Bh({children:e}){const[t,n]=C.useReducer(Fh,void 0,qh);return C.useEffect(()=>{localStorage.setItem(od,JSON.stringify(t))},[t]),p.jsx(id.Provider,{value:{progress:t,dispatch:n},children:e})}function yn(){const e=C.useContext(id);if(!e)throw new Error("useProgress must be used within ProgressProvider");return e}const Hh={id:"mod-1",title:"React Fundamentals",description:"Learn the core building blocks of React: JSX syntax, components, props, and how React renders UI.",topics:[{id:"mod1-t1",title:"Introduction to JSX",explanation:`## What is JSX?

JSX stands for **JavaScript XML**. It is a syntax extension that lets you write HTML-like markup directly inside JavaScript files.

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

### Key Rules of JSX

1. **Return a single root element** — wrap siblings in a \`<div>\` or \`<>\` (Fragment).
2. **Close all tags** — self-closing tags like \`<img />\` must include the slash.
3. **Use camelCase for attributes** — \`className\` instead of \`class\`, \`onClick\` instead of \`onclick\`.
4. **Embed expressions with curly braces** — \`{variable}\`, \`{2 + 2}\`, \`{fn()}\`.

\`\`\`jsx
function Greeting() {
  const name = "React";
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Welcome to the course.</p>
    </>
  );
}
\`\`\`

### JSX is compiled to JavaScript

Under the hood, JSX is transformed into \`React.createElement()\` calls:

\`\`\`js
// JSX
const el = <h1 className="title">Hello</h1>;

// Compiled
const el = React.createElement('h1', { className: 'title' }, 'Hello');
\`\`\``,task:{description:'Create a component called `UserCard` that displays a user\'s name, email, and role using JSX. The component should accept these as props and wrap them in a `<div>` with the className "user-card".',starterCode:`function UserCard() {
  // TODO: Accept props for name, email, and role
  // Return a div with className "user-card" containing:
  // - an h2 with the name
  // - a p with the email
  // - a span with the role
  return null;
}`,solution:`function UserCard({ name, email, role }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{role}</span>
    </div>
  );
}`,hints:["Destructure props in the function parameter: { name, email, role }","Use curly braces {} to embed JavaScript expressions in JSX","Remember to use className instead of class"]}},{id:"mod1-t2",title:"Functional Components",explanation:`## Functional Components

A React component is a **JavaScript function** that returns JSX. Components let you split UI into independent, reusable pieces.

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>;
}
\`\`\`

### Rules for Components

1. **Name must start with a capital letter** — \`Welcome\`, not \`welcome\`.
2. **Must return JSX** (or \`null\` to render nothing).
3. **Props are read-only** — never modify props directly.

### Composing Components

Components can render other components:

\`\`\`jsx
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
\`\`\`

### Arrow Function Syntax

You can also use arrow functions:

\`\`\`jsx
const Welcome = ({ name }) => <h1>Welcome, {name}!</h1>;
\`\`\`

### Default Props

Provide defaults using destructuring:

\`\`\`jsx
function Button({ label = "Click me", variant = "primary" }) {
  return <button className={variant}>{label}</button>;
}
\`\`\``,task:{description:"Create a `ProductList` component that receives an array of products as a prop. Each product has a `name` and `price`. Render each product using a separate `ProductItem` component.",starterCode:`function ProductItem({ name, price }) {
  // TODO: render product name and price
  return null;
}

function ProductList({ products }) {
  // TODO: map over products and render ProductItem for each
  return null;
}`,solution:`function ProductItem({ name, price }) {
  return (
    <div className="product-item">
      <span>{name}</span>
      <strong>\${price.toFixed(2)}</strong>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}`,hints:["Use Array.map() to transform the array into JSX elements","Each mapped element needs a unique key prop","Pass individual product properties as props to ProductItem"]}},{id:"mod1-t3",title:"Props & Data Flow",explanation:`## Props: Passing Data to Components

Props (short for "properties") are the way data flows **from parent to child** in React. This is called **one-way data flow** or **unidirectional data flow**.

\`\`\`jsx
// Parent passes data down
function App() {
  return <Profile name="Alice" age={30} isAdmin={true} />;
}

// Child receives via props
function Profile({ name, age, isAdmin }) {
  return (
    <div>
      <h2>{name}, {age}</h2>
      {isAdmin && <span>Admin</span>}
    </div>
  );
}
\`\`\`

### Types of Props

| Type | Example |
|------|---------|
| String | \`<C title="Hello" />\` |
| Number | \`<C count={42} />\` |
| Boolean | \`<C active={true} />\` or \`<C active />\` |
| Array | \`<C items={[1, 2, 3]} />\` |
| Object | \`<C user={{ name: "A" }} />\` |
| Function | \`<C onClick={() => {}} />\` |
| JSX / Children | \`<C><span>child</span></C>\` |

### The \`children\` Prop

Content placed between opening and closing tags is available as \`props.children\`:

\`\`\`jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  );
}

// Usage
<Card title="Settings">
  <p>Some content here</p>
</Card>
\`\`\`

### Spreading Props

\`\`\`jsx
const btnProps = { type: "submit", disabled: false };
<button {...btnProps}>Submit</button>
\`\`\``,task:{description:"Create a `Layout` component that uses the `children` prop to wrap content. It should render a header (with a `title` prop), the children in a main section, and a footer with a `copyright` prop.",starterCode:`function Layout({ title, copyright, children }) {
  // TODO: Render a header with title,
  // a <main> with children,
  // and a footer with copyright
  return null;
}`,solution:`function Layout({ title, copyright, children }) {
  return (
    <div className="layout">
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>{copyright}</p>
      </footer>
    </div>
  );
}`,hints:["children is a special prop — just render it like any other expression: {children}","Wrap everything in a single root element","Use semantic HTML tags: header, main, footer"]}},{id:"mod1-t4",title:"Rendering Lists & Conditional Rendering",explanation:`## Rendering Lists

Use \`Array.map()\` to turn data arrays into lists of elements. Always provide a unique \`key\` prop.

\`\`\`jsx
function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Choosing Good Keys

- Use **stable, unique IDs** from your data (e.g., database IDs).
- **Avoid using array index** as key when items can be reordered or deleted.
- Keys must be unique **among siblings**, not globally.

## Conditional Rendering

Several patterns for rendering content conditionally:

### 1. Logical AND (\`&&\`)
\`\`\`jsx
{isLoggedIn && <UserMenu />}
\`\`\`

### 2. Ternary Operator
\`\`\`jsx
{isLoggedIn ? <UserMenu /> : <LoginButton />}
\`\`\`

### 3. Early Return
\`\`\`jsx
function Dashboard({ user }) {
  if (!user) return <p>Please log in.</p>;
  return <h1>Welcome, {user.name}</h1>;
}
\`\`\`

### 4. Variable Assignment
\`\`\`jsx
function StatusBadge({ status }) {
  let color;
  if (status === 'active') color = 'green';
  else if (status === 'pending') color = 'yellow';
  else color = 'red';

  return <span style={{ color }}>{status}</span>;
}
\`\`\``,task:{description:'Create a `TaskBoard` component that takes an array of tasks (each with `id`, `title`, `completed`). Render each task with a visual distinction for completed vs. incomplete tasks. Show a "No tasks" message if the array is empty.',starterCode:`function TaskBoard({ tasks }) {
  // TODO: Handle empty array case
  // TODO: Map over tasks and render them
  // TODO: Show different styling for completed tasks
  return null;
}`,solution:`function TaskBoard({ tasks }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks</p>;
  }

  return (
    <div className="task-board">
      {tasks.map(task => (
        <div
          key={task.id}
          className={task.completed ? 'task completed' : 'task'}
        >
          <span>{task.title}</span>
          {task.completed && <span className="check">✓</span>}
        </div>
      ))}
    </div>
  );
}`,hints:["Use an early return for the empty array case","Use a ternary for className to toggle styles","Use && for conditionally showing elements"]}}],test:[{id:"mod1-q1",question:"Which of the following is valid JSX?",options:['<div className="box">Hello</div>','<div class="box">Hello</div>','<div className="box">Hello<div>','<Div className="box">Hello</Div>'],correctAnswer:0,explanation:"JSX uses className instead of class (which is a reserved word in JS). All tags must be properly closed. Lowercase tag names are treated as HTML elements."},{id:"mod1-q2",question:"What happens if you render a list without key props?",options:["The application crashes and displays a React error boundary","React shows a warning and may have performance issues or bugs with reordering","Nothing — keys are purely optional and have no effect on list rendering","The list renders correctly but in the reverse order of the source array"],correctAnswer:1,explanation:"React uses keys to track which items changed. Without them, React falls back to using index which can cause issues with reordering, and shows a console warning."},{id:"mod1-q3",question:"How does data flow between components in React by default?",options:["Bidirectionally between parent and child","From child to parent via props","From parent to child via props (one-way)","Through a global store only"],correctAnswer:2,explanation:"React uses unidirectional (one-way) data flow. Data flows from parent to child via props. To communicate upward, parents pass callback functions as props."},{id:"mod1-q4",question:"What is the children prop?",options:["An array of child component class definitions registered with the parent","Content placed between the opening and closing tags of a component","A lifecycle method that runs before the component renders its children","A required prop that must be explicitly declared in every component interface"],correctAnswer:1,explanation:"The children prop contains whatever JSX is placed between the opening and closing tags of a component. It allows components to act as wrappers."},{id:"mod1-q5",question:"Which pattern is NOT a valid conditional rendering technique in React?",options:["{condition && <Component />}","{condition ? <A /> : <B />}","if (condition) return <Component />;","<if condition={true}><Component /></if>"],correctAnswer:3,explanation:"There is no <if> element in JSX. Conditional rendering uses JavaScript expressions like &&, ternary operators, or early returns."}]},$h={id:"mod-2",title:"State & Events",description:"Learn how to make your components interactive with state management using useState and event handling.",topics:[{id:"mod2-t1",title:"useState Hook",explanation:`## Managing State with useState

State lets a component "remember" information between renders. The \`useState\` hook is the primary way to add state to functional components.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

### How useState Works

1. **Call \`useState(initialValue)\`** — returns a pair: \`[currentValue, setterFunction]\`.
2. **Read state** — use the first element (\`count\`).
3. **Update state** — call the setter (\`setCount\`). This triggers a re-render.

### Important Rules

- Call hooks **at the top level** of your component (not inside loops, conditions, or nested functions).
- State updates are **asynchronous** — the new value is available on the next render.
- React **batches** multiple state updates in event handlers.

### Functional Updates

When new state depends on previous state, use the functional form:

\`\`\`jsx
// ✅ Correct — uses latest state
setCount(prev => prev + 1);

// ⚠️ Risky — may use stale state
setCount(count + 1);
\`\`\`

### State with Objects and Arrays

\`\`\`jsx
const [user, setUser] = useState({ name: 'Alice', age: 25 });

// Always create a new object (don't mutate!)
setUser(prev => ({ ...prev, age: 26 }));

const [items, setItems] = useState([]);
setItems(prev => [...prev, newItem]); // add
setItems(prev => prev.filter(i => i.id !== id)); // remove
\`\`\``,task:{description:"Create a `ToggleSwitch` component that maintains an on/off state. Display the current state as text and provide a button to toggle it. Also add a reset counter that tracks how many times the switch has been toggled.",starterCode:`import { useState } from 'react';

function ToggleSwitch() {
  // TODO: Add state for isOn (boolean) and toggleCount (number)
  // TODO: Handle toggle logic
  return null;
}`,solution:`import { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const [toggleCount, setToggleCount] = useState(0);

  const handleToggle = () => {
    setIsOn(prev => !prev);
    setToggleCount(prev => prev + 1);
  };

  return (
    <div className="toggle-switch">
      <p>Status: {isOn ? 'ON' : 'OFF'}</p>
      <p>Toggled {toggleCount} times</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}`,hints:["Use two separate useState calls for independent state values","Use the functional updater form: setIsOn(prev => !prev)","Combine both state updates in a single handler function"]}},{id:"mod2-t2",title:"Handling Events",explanation:`## Event Handling in React

React events use **camelCase** naming and accept functions (not strings) as handlers.

\`\`\`jsx
// ✅ React way
<button onClick={handleClick}>Click</button>

// ❌ HTML way (don't use)
<button onclick="handleClick()">Click</button>
\`\`\`

### The Event Object

Event handlers receive a **SyntheticEvent** — React's cross-browser wrapper:

\`\`\`jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log('Form submitted');
  };

  const handleChange = (e) => {
    console.log(e.target.value); // input value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

### Passing Arguments to Handlers

\`\`\`jsx
// Use an arrow function wrapper
<button onClick={() => handleDelete(item.id)}>Delete</button>

// Or use .bind
<button onClick={handleDelete.bind(null, item.id)}>Delete</button>
\`\`\`

### Common Events

| Event | Usage |
|-------|-------|
| \`onClick\` | Buttons, clickable elements |
| \`onChange\` | Inputs, selects, textareas |
| \`onSubmit\` | Forms |
| \`onKeyDown\` / \`onKeyUp\` | Keyboard interactions |
| \`onFocus\` / \`onBlur\` | Focus management |
| \`onMouseEnter\` / \`onMouseLeave\` | Hover effects |`,task:{description:"Create a `SearchBox` component with an input field and a search button. Track the input value in state. When the user presses Enter or clicks Search, display the search query below the input. Also implement a Clear button that resets everything.",starterCode:`import { useState } from 'react';

function SearchBox() {
  // TODO: Track input value and submitted query
  // TODO: Handle input change, submit, and clear
  return null;
}`,solution:`import { useState } from 'react';

function SearchBox() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  const handleClear = () => {
    setInput('');
    setQuery('');
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
      {query && <p>Results for: "{query}"</p>}
    </div>
  );
}`,hints:["Use a <form> with onSubmit to handle both button click and Enter key","Call e.preventDefault() in onSubmit to prevent page reload",'Use type="button" on the Clear button so it does not submit the form']}},{id:"mod2-t3",title:"Working with Forms",explanation:`## Controlled Components

In a **controlled component**, form data is handled by React state:

\`\`\`jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\`

### Managing Multiple Fields with One State Object

\`\`\`jsx
function ProfileForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <textarea name="bio" value={form.bio} onChange={handleChange} />
    </form>
  );
}
\`\`\`

### Select and Checkbox

\`\`\`jsx
<select value={role} onChange={e => setRole(e.target.value)}>
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>

<input
  type="checkbox"
  checked={agreed}
  onChange={e => setAgreed(e.target.checked)}
/>
\`\`\`

### Basic Validation

\`\`\`jsx
const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (!email.includes('@')) {
    setError('Invalid email');
    return;
  }
  setError('');
  // proceed
};
\`\`\``,task:{description:'Create a `RegistrationForm` component with fields: username, email, password, and a "role" select (user/admin). Use a single state object for all fields. Add validation: username must be at least 3 characters and email must contain @. Show error messages inline.',starterCode:`import { useState } from 'react';

function RegistrationForm() {
  // TODO: single state object for all form fields
  // TODO: error state
  // TODO: handleChange using computed property names
  // TODO: validate on submit
  return null;
}`,solution:`import { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (form.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    if (!form.email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    alert('Registration successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
      </div>
      <div>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}`,hints:["Use [name]: value (computed property name) in handleChange","Store errors as an object with field names as keys","Validate in handleSubmit before proceeding"]}}],test:[{id:"mod2-q1",question:"What does useState return?",options:["An array with [currentValue, setterFunction]","A single value that updates automatically on re-render","An object containing { value, setValue } properties","A Promise that resolves with the initial state value"],correctAnswer:0,explanation:"useState returns an array with exactly two elements: the current state value and a function to update it. We use array destructuring to name them."},{id:"mod2-q2",question:"Why should you use the functional form of setState (e.g., setCount(prev => prev + 1))?",options:["It makes the state update execute faster than using a direct value","It ensures you are working with the latest state value","It is required by React — direct values cause a runtime error","It prevents the component from triggering any unnecessary re-renders"],correctAnswer:1,explanation:"The functional updater ensures you use the most recent state value, which is important when multiple updates are batched or when the update depends on the previous state."},{id:"mod2-q3",question:"What is a controlled component?",options:["A component that controls other components","A component without side effects","A component wrapped in React.memo","A form element whose value is driven by React state"],correctAnswer:3,explanation:'A controlled component is a form element (input, select, textarea) whose value is set by React state and updated via onChange. React is the "single source of truth."'},{id:"mod2-q4",question:"How do you prevent a form from reloading the page on submit?",options:['Use type="button" on the submit button',"Call e.preventDefault() in the onSubmit handler","Use return false in the handler","Remove the action attribute"],correctAnswer:1,explanation:"Calling e.preventDefault() on the submit event prevents the browser's default form submission behavior, which would reload the page."},{id:"mod2-q5",question:"How do you handle multiple form inputs with a single onChange handler?",options:["Create a separate ref for each input and read values from the DOM directly","Declare separate state variables and individual handlers for each form field","Use a state object and computed property names: [e.target.name]: e.target.value","You cannot — each input must always have its own dedicated change handler function"],correctAnswer:2,explanation:"By giving each input a name attribute and using computed property names [name]: value, a single handler can update the correct field in a state object."}]},Vh={id:"mod-3",title:"Side Effects & Lifecycle",description:"Understand component lifecycle, side effects with useEffect, data fetching, and cleanup patterns.",topics:[{id:"mod3-t1",title:"useEffect Basics",explanation:`## Side Effects with useEffect

**Side effects** are operations that reach outside the React rendering cycle: API calls, timers, subscriptions, DOM manipulation, etc.

\`\`\`jsx
import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function — runs on unmount
    return () => clearInterval(interval);
  }, []); // Empty deps = run once on mount

  return <p>Elapsed: {seconds}s</p>;
}
\`\`\`

### Dependency Array Patterns

| Pattern | When it runs |
|---------|-------------|
| \`useEffect(fn)\` | After **every** render |
| \`useEffect(fn, [])\` | Only after the **first** render (mount) |
| \`useEffect(fn, [a, b])\` | After mount AND when **a or b** change |

### Cleanup Function

The function returned from useEffect runs:
- **Before the effect re-runs** (when dependencies change)
- **When the component unmounts**

\`\`\`jsx
useEffect(() => {
  const handler = () => console.log('resize');
  window.addEventListener('resize', handler);

  return () => {
    window.removeEventListener('resize', handler);
  };
}, []);
\`\`\`

### Common Mistake: Missing Dependencies

\`\`\`jsx
// ⚠️ Bug: count is stale — never updates in the effect
useEffect(() => {
  console.log(count); // always logs initial value
}, []);

// ✅ Fixed: include count in dependencies
useEffect(() => {
  console.log(count);
}, [count]);
\`\`\``,task:{description:"Create a `WindowSize` component that displays the current window width and height. Use useEffect to listen for the resize event and clean up the listener on unmount.",starterCode:`import { useState, useEffect } from 'react';

function WindowSize() {
  // TODO: Track window width and height in state
  // TODO: Set up resize listener in useEffect
  // TODO: Clean up the listener
  return null;
}`,solution:`import { useState, useEffect } from 'react';

function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <p>Window: {size.width} × {size.height}</p>
  );
}`,hints:["Initialize state with current window dimensions","Use window.addEventListener in useEffect","Return a cleanup function that calls removeEventListener"]}},{id:"mod3-t2",title:"Data Fetching",explanation:`## Fetching Data with useEffect

A common pattern is to fetch data when a component mounts:

\`\`\`jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchUser() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(\`/api/users/\${userId}\`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        if (!cancelled) {
          setUser(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => { cancelled = true; };
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <h1>{user.name}</h1>;
}
\`\`\`

### Key Patterns

1. **Loading state** — show a spinner or skeleton while fetching.
2. **Error state** — handle and display errors gracefully.
3. **Cancellation** — use a boolean flag or AbortController to prevent state updates on unmounted components.
4. **Dependency array** — refetch when relevant props change (like \`userId\`).

### AbortController Pattern

\`\`\`jsx
useEffect(() => {
  const controller = new AbortController();

  fetch(url, { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name !== 'AbortError') setError(err.message);
    });

  return () => controller.abort();
}, [url]);
\`\`\``,task:{description:"Create a `PostViewer` component that fetches a post from JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts/{id}). Accept `postId` as a prop. Show loading, error, and success states. Implement request cancellation using AbortController.",starterCode:`import { useState, useEffect } from 'react';

function PostViewer({ postId }) {
  // TODO: states for post, loading, error
  // TODO: fetch post using useEffect
  // TODO: cancel request on cleanup
  return null;
}`,solution:`import { useState, useEffect } from 'react';

function PostViewer({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`, {
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}`,hints:["Create an AbortController and pass its signal to fetch","In the cleanup, call controller.abort()",'Check err.name !== "AbortError" before setting error state']}},{id:"mod3-t3",title:"useEffect Dependencies Deep Dive",explanation:`## Understanding Dependencies

The dependency array tells React **when** to re-run the effect. React compares each dependency with its previous value using \`Object.is()\`.

### Primitive vs. Reference Types

\`\`\`jsx
// ✅ Primitives — compared by value
useEffect(() => { /* ... */ }, [count, name]);

// ⚠️ Objects/arrays — compared by reference!
const options = { method: 'GET' }; // new object every render!
useEffect(() => {
  fetch(url, options);
}, [options]); // runs every render!
\`\`\`

### Solutions for Reference Dependencies

**1. Move object creation inside the effect:**
\`\`\`jsx
useEffect(() => {
  const options = { method: 'GET' };
  fetch(url, options);
}, [url]);
\`\`\`

**2. Depend on primitive values instead:**
\`\`\`jsx
useEffect(() => {
  fetch(url, { method, headers: { auth: token } });
}, [url, method, token]);
\`\`\`

**3. Use useMemo for computed objects:**
\`\`\`jsx
const options = useMemo(() => ({ method, token }), [method, token]);
useEffect(() => {
  fetch(url, options);
}, [url, options]);
\`\`\`

### Multiple Effects

Split unrelated logic into separate useEffect calls:

\`\`\`jsx
// ✅ Separated concerns
useEffect(() => {
  document.title = \`(\${count}) My App\`;
}, [count]);

useEffect(() => {
  const sub = subscribe(channel);
  return () => sub.unsubscribe();
}, [channel]);
\`\`\``,task:{description:"Create a `SearchResults` component that fetches search results when a `query` prop changes but only after a 500ms debounce. Use useEffect with proper cleanup to cancel the previous timeout when the query changes.",starterCode:`import { useState, useEffect } from 'react';

function SearchResults({ query }) {
  // TODO: debounce the search with a 500ms delay
  // TODO: fetch results only after debounce
  // TODO: cleanup previous timeouts
  return null;
}`,solution:`import { useState, useEffect } from 'react';

function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);
    const timeoutId = setTimeout(() => {
      fetch(\`https://jsonplaceholder.typicode.com/posts?q=\${encodeURIComponent(query)}\`)
        .then(res => res.json())
        .then(data => {
          setResults(data.slice(0, 5));
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  if (loading) return <p>Searching...</p>;

  return (
    <ul>
      {results.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}`,hints:["Use setTimeout to delay the fetch by 500ms","Return clearTimeout from useEffect to cancel on re-run","Include query in the dependency array"]}}],test:[{id:"mod3-q1",question:"When does useEffect with an empty dependency array run?",options:["On every single render cycle that the component goes through","Only after the first render (mount)","Never — an empty array disables the effect from running entirely","Before the first render during the initialization phase of the component"],correctAnswer:1,explanation:"An empty dependency array [] means the effect has no dependencies to watch, so it only runs once after the initial mount."},{id:"mod3-q2",question:"What is the purpose of the cleanup function returned from useEffect?",options:["To re-run the effect immediately after the component re-renders again","To prevent the component from rendering until the async operation completes","To save the current component state to localStorage before unmounting","To unsubscribe, remove listeners, or cancel requests before re-running or unmounting"],correctAnswer:3,explanation:"The cleanup function runs before the effect re-runs and when the component unmounts. It's used to clean up subscriptions, timers, and event listeners."},{id:"mod3-q3",question:"Why should you use AbortController when fetching data in useEffect?",options:["To improve network request performance by compressing the response payload","To prevent setting state on an unmounted component (race conditions)","It is required by the Fetch API specification for every network request","To automatically retry requests that fail due to temporary network errors"],correctAnswer:1,explanation:"AbortController lets you cancel in-flight requests when the component unmounts or dependencies change, preventing state updates on unmounted components."},{id:"mod3-q4",question:"Why can putting an object literal in the dependency array cause infinite loops?",options:["Objects are not a valid type for the useEffect dependency array entries","The useEffect hook does not support objects — only primitive values are allowed","A new object reference is created each render, so React thinks the dependency changed","It always triggers a syntax error because objects cannot be serialized for comparison"],correctAnswer:2,explanation:"React compares dependencies using Object.is(), which checks reference equality. A new object literal has a new reference each render, so the effect runs every time."},{id:"mod3-q5",question:"How do you debounce a side effect in React?",options:["Use useEffect with a setTimeout and clear it in cleanup","Call the function multiple times in quick succession and use the last result","Wrap the component in React.memo to prevent it from re-rendering on input changes","Enable StrictMode to automatically batch rapid state updates into one call"],correctAnswer:0,explanation:"Debouncing in useEffect means setting a timeout and returning clearTimeout as the cleanup function. When the dependency changes again before the timeout fires, the old timeout is canceled."}]},Qh={id:"mod-4",title:"Advanced Hooks",description:"Master useReducer, useContext, useRef, useMemo, and useCallback for more complex state management and optimization.",topics:[{id:"mod4-t1",title:"useReducer",explanation:`## useReducer — Complex State Logic

\`useReducer\` is an alternative to \`useState\` for managing complex state with multiple sub-values or when the next state depends on the previous one.

\`\`\`jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
\`\`\`

### When to Use useReducer vs useState

| Use \`useState\` | Use \`useReducer\` |
|-----------------|-------------------|
| Simple values (string, number, boolean) | Complex objects or arrays |
| 1–2 state variables | Multiple related state transitions |
| Simple update logic | Next state depends on previous |
| Isolated state | State shared via context |

### Actions with Payloads

\`\`\`jsx
function reducer(state, action) {
  switch (action.type) {
    case 'add_todo':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'remove_todo':
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload),
      };
    default:
      return state;
  }
}

dispatch({ type: 'add_todo', payload: { id: 1, text: 'Learn React' } });
\`\`\``,task:{description:"Create a `ShoppingCart` component using useReducer. Support actions: ADD_ITEM (with name and price), REMOVE_ITEM (by index), and CLEAR_CART. Display items and the total price.",starterCode:`import { useReducer } from 'react';

function cartReducer(state, action) {
  // TODO: handle ADD_ITEM, REMOVE_ITEM, CLEAR_CART
}

function ShoppingCart() {
  // TODO: use useReducer with cartReducer
  // TODO: render item list and total
  return null;
}`,solution:`import { useReducer } from 'react';

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { items: state.items.filter((_, i) => i !== action.payload) };
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const total = state.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart ({state.items.length} items)</h2>
      <ul>
        {state.items.map((item, i) => (
          <li key={i}>
            {item.name} - \${item.price.toFixed(2)}
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: i })}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: \${total.toFixed(2)}</p>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: { name: 'Item', price: 9.99 } })}>
        Add Item
      </button>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear</button>
    </div>
  );
}`,hints:["The state shape is { items: [] }","Use array spread for adding, filter for removing","Use reduce() to calculate the total price"]}},{id:"mod4-t2",title:"useContext",explanation:`## useContext — Avoiding Prop Drilling

Context lets you pass data through the component tree without manually threading props through every level.

### Three Steps

**1. Create the context:**
\`\`\`jsx
import { createContext } from 'react';
const ThemeContext = createContext('light');
\`\`\`

**2. Provide it from a parent:**
\`\`\`jsx
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Main />
    </ThemeContext.Provider>
  );
}
\`\`\`

**3. Consume it in any descendant:**
\`\`\`jsx
import { useContext } from 'react';

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className={theme}
      onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}
\`\`\`

### Creating a Custom Provider

\`\`\`jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

### When to Use Context

- **Theme** (light/dark mode)
- **Auth** (current user, login/logout)
- **Locale/language**
- **Any data needed by many components** at different nesting levels`,task:{description:'Create a simple AuthContext with a provider that tracks `user` (null or { name }) and provides `login` and `logout` functions. Create a `NavBar` component that shows "Welcome, {name}" with a Logout button when logged in, or a Login button when not.',starterCode:`import { createContext, useContext, useState } from 'react';

// TODO: Create AuthContext
// TODO: Create AuthProvider component
// TODO: Create NavBar component that consumes the context`,solution:`import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function NavBar() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login('Alice')}>Login</button>
      )}
    </nav>
  );
}`,hints:["Create context with createContext(null)","The Provider value should be an object containing user, login, and logout","Use useContext(AuthContext) to consume the values"]}},{id:"mod4-t3",title:"useRef & useMemo & useCallback",explanation:`## useRef — Mutable References

\`useRef\` returns a mutable object whose \`.current\` property persists across renders **without** causing re-renders.

### DOM Access

\`\`\`jsx
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
\`\`\`

### Storing Mutable Values

\`\`\`jsx
function StopWatch() {
  const intervalRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stop = () => clearInterval(intervalRef.current);

  return /* ... */;
}
\`\`\`

## useMemo — Caching Expensive Computations

\`\`\`jsx
const sortedItems = useMemo(() => {
  return items.slice().sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
\`\`\`

Only recalculates when \`items\` changes. Don't overuse — only for **genuinely expensive** computations.

## useCallback — Stable Function References

\`\`\`jsx
const handleClick = useCallback((id) => {
  setItems(prev => prev.filter(item => item.id !== id));
}, []);
\`\`\`

Returns a **memoized function** that only changes when dependencies change. Useful when passing callbacks to memoized child components (React.memo).

### useMemo vs useCallback

\`\`\`jsx
// These are equivalent:
const memoizedFn = useMemo(() => () => doSomething(a, b), [a, b]);
const memoizedFn = useCallback(() => doSomething(a, b), [a, b]);
\`\`\``,task:{description:"Create a `FilteredList` component: 1) Use `useRef` to auto-focus a search input on mount. 2) Use `useMemo` to filter and sort a large list based on the search term. 3) Use `useCallback` for the onChange handler.",starterCode:`import { useState, useRef, useMemo, useCallback, useEffect } from 'react';

const ITEMS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: 'Item ' + String(i).padStart(4, '0'),
}));

function FilteredList() {
  // TODO: useRef for input focus
  // TODO: useMemo for filtering + sorting
  // TODO: useCallback for onChange
  return null;
}`,solution:`import { useState, useRef, useMemo, useCallback, useEffect } from 'react';

const ITEMS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: 'Item ' + String(i).padStart(4, '0'),
}));

function FilteredList() {
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filtered = useMemo(() => {
    return ITEMS
      .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [search]);

  return (
    <div>
      <input ref={inputRef} value={search} onChange={handleChange} placeholder="Filter..." />
      <p>{filtered.length} results</p>
      <ul>
        {filtered.slice(0, 50).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}`,hints:["Use useRef(null) and set it as the ref prop on the input","Call inputRef.current?.focus() in a useEffect with []","useMemo dependencies should include the search term"]}}],test:[{id:"mod4-q1",question:"When should you use useReducer instead of useState?",options:["When state updates are complex or involve multiple sub-values","Always — it is the recommended replacement for useState in all cases","Only when the component also uses context to share its state values","When you need to persist state to localStorage across browser sessions"],correctAnswer:0,explanation:"useReducer is ideal for complex state logic with multiple sub-values, related transitions, or when the next state depends on the previous state in non-trivial ways."},{id:"mod4-q2",question:"What problem does useContext solve?",options:["It makes components render faster by caching their previous output in memory","It avoids passing props through many levels of components (prop drilling)","It is a replacement for useState that offers more advanced state management","It provides CSS animation management and transition handling between re-renders"],correctAnswer:1,explanation:'useContext provides a way to share data across the component tree without manually passing props at every level, solving the "prop drilling" problem.'},{id:"mod4-q3",question:"Does updating a useRef value cause a re-render?",options:["Yes, updating a ref always triggers an immediate component re-render","Only when the ref is attached to a DOM element and its attributes change","No — ref changes do not trigger re-renders","Only in development mode — production builds skip ref change detection"],correctAnswer:2,explanation:"Unlike state, changing ref.current does not cause a re-render. Refs are for values that need to persist between renders but shouldn't trigger UI updates."},{id:"mod4-q4",question:"What is the primary difference between useMemo and useCallback?",options:["useMemo is intended for class components while useCallback is for functional ones","useMemo runs only on the initial mount while useCallback runs on every render cycle","They are functionally identical and can always be used interchangeably in all cases","useMemo caches a computed value, useCallback caches a function reference"],correctAnswer:3,explanation:"useMemo returns the memoized result of calling a function. useCallback returns the memoized function itself. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)."},{id:"mod4-q5",question:"What happens if you omit the Provider for a context?",options:["The application crashes with an error saying that Provider is required","Components using useContext receive the default value passed to createContext","Components receive undefined and must handle the missing value themselves","Context automatically creates an implicit provider at the root of the component tree"],correctAnswer:1,explanation:"If there is no matching Provider above in the tree, useContext returns the default value that was passed to createContext()."}]},Jh={id:"mod-5",title:"React Router",description:"Learn client-side routing with React Router: navigation, route parameters, nested routes, and programmatic navigation.",topics:[{id:"mod5-t1",title:"Basic Routing Setup",explanation:`## Client-Side Routing with React Router

React Router enables navigation between views without full page reloads.

### Installation

\`\`\`bash
npm install react-router-dom
\`\`\`

### Basic Setup

\`\`\`jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

### Key Components

| Component | Purpose |
|-----------|---------|
| \`<BrowserRouter>\` | Wrapper that enables routing |
| \`<Routes>\` | Container for route definitions |
| \`<Route>\` | Maps a URL path to a component |
| \`<Link>\` | Declarative navigation (replaces \`<a>\`) |
| \`<NavLink>\` | Like Link but supports active styling |

### NavLink for Active Styles

\`\`\`jsx
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  About
</NavLink>
\`\`\`

### 404 Catch-All Route

\`\`\`jsx
<Route path="*" element={<NotFound />} />
\`\`\`

The \`*\` path matches any URL that doesn't match other routes.`,task:{description:'Set up a basic router with three pages: Home ("/"), Products ("/products"), and About ("/about"). Add a navigation bar with NavLink components that highlight the active page. Add a 404 catch-all route.',starterCode:`import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// TODO: Create Home, Products, About, NotFound components
// TODO: Set up BrowserRouter with Routes
// TODO: Add navigation with NavLink`,solution:`import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Home() { return <h1>Home Page</h1>; }
function Products() { return <h1>Products</h1>; }
function About() { return <h1>About Us</h1>; }
function NotFound() { return <h1>404 — Page Not Found</h1>; }

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`,hints:["Use NavLink instead of Link for active state support",'Add end prop to the "/" NavLink to avoid matching all routes','Place the "*" route last to catch unmatched URLs']}},{id:"mod5-t2",title:"Dynamic Routes & Parameters",explanation:`## URL Parameters

Dynamic segments in the URL are defined with \`:\` prefix:

\`\`\`jsx
<Route path="/users/:userId" element={<UserProfile />} />
\`\`\`

### Reading Parameters with useParams

\`\`\`jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  // userId is a string from the URL
  return <h1>User #{userId}</h1>;
}
\`\`\`

### Multiple Parameters

\`\`\`jsx
<Route path="/posts/:year/:month" element={<Archive />} />

function Archive() {
  const { year, month } = useParams();
  return <h1>Archive: {month}/{year}</h1>;
}
\`\`\`

### Query Parameters with useSearchParams

\`\`\`jsx
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'name';

  const updateCategory = (cat) => {
    setSearchParams({ category: cat, sort });
  };

  return <h1>Category: {category}, Sort: {sort}</h1>;
}
// URL: /products?category=electronics&sort=price
\`\`\`

### Programmatic Navigation with useNavigate

\`\`\`jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // after login...
    navigate('/dashboard');
    // or go back:
    navigate(-1);
  };
}
\`\`\``,task:{description:'Create a mini blog app with routes: "/posts" (list of posts), "/posts/:postId" (single post). The list should link to each post. The post detail page should read the postId parameter and display it. Add a "Back to list" button using useNavigate.',starterCode:`import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const posts = [
  { id: 1, title: 'First Post', body: 'Hello World' },
  { id: 2, title: 'Second Post', body: 'React is great' },
  { id: 3, title: 'Third Post', body: 'Routing is fun' },
];

// TODO: PostList component with links to each post
// TODO: PostDetail component using useParams and useNavigate`,solution:`import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const posts = [
  { id: 1, title: 'First Post', body: 'Hello World' },
  { id: 2, title: 'Second Post', body: 'React is great' },
  { id: 3, title: 'Third Post', body: 'Routing is fun' },
];

function PostList() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={\`/posts/\${post.id}\`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(postId));

  if (!post) return <p>Post not found</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate('/posts')}>Back to list</button>
    </article>
  );
}`,hints:["Use template literals for dynamic Link paths: /posts/${id}","useParams returns strings — convert to number if needed",'Use navigate("/posts") or navigate(-1) to go back']}},{id:"mod5-t3",title:"Nested Routes & Layouts",explanation:`## Nested Routes

Nested routes let child routes render inside parent layouts using the \`<Outlet />\` component.

\`\`\`jsx
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside>
        <Link to="overview">Overview</Link>
        <Link to="settings">Settings</Link>
      </aside>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
\`\`\`

### Key Concepts

- **\`<Outlet />\`** — renders the matched child route's element.
- **\`index\` route** — the default child route (matches the parent's path exactly).
- **Relative paths** — child routes are relative to the parent: \`settings\` = \`/dashboard/settings\`.

### Shared Layouts

Nested routes are perfect for shared layouts:

\`\`\`jsx
<Routes>
  {/* Public layout */}
  <Route element={<PublicLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>

  {/* Protected layout */}
  <Route element={<ProtectedLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
  </Route>
</Routes>
\`\`\`

Routes without a \`path\` prop act as **layout routes** — they render a wrapper around their children.`,task:{description:'Create a dashboard with nested routes. The layout has a sidebar with links and an Outlet for content. Add nested routes for: index (Overview), "analytics", and "settings". Each shows a simple component.',starterCode:`import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

// TODO: DashboardLayout with sidebar and Outlet
// TODO: Overview, Analytics, Settings components
// TODO: Nested route configuration`,solution:`import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <NavLink to="/dashboard" end>Overview</NavLink>
        <NavLink to="/dashboard/analytics">Analytics</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

function Overview() { return <h2>Dashboard Overview</h2>; }
function Analytics() { return <h2>Analytics</h2>; }
function Settings() { return <h2>Settings</h2>; }

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}`,hints:["Place <Outlet /> where child content should render","Use index prop for the default child route",'Child route paths are relative — just "analytics", not "/dashboard/analytics"']}}],test:[{id:"mod5-q1",question:"What does the <Link> component do compared to a regular <a> tag?",options:["Navigates without a full page reload (client-side routing)","Nothing different — it behaves exactly the same as a standard HTML anchor tag","Opens the target URL in a new browser tab or window automatically","Adds default CSS styling and active class handling to the rendered link"],correctAnswer:0,explanation:"<Link> performs client-side navigation by updating the URL and rendering the matched route without a full page reload, unlike <a> which triggers a server request."},{id:"mod5-q2",question:"How do you access URL parameters like /users/:id?",options:["window.location.params","useParams() hook","props.match.params","useLocation().params"],correctAnswer:1,explanation:"The useParams() hook returns an object of key/value pairs from the current URL matching the dynamic segments defined in the route path."},{id:"mod5-q3",question:"What is the purpose of <Outlet /> in nested routes?",options:["It creates a navigation link with automatic active styling for the current path","It handles and displays custom 404 error pages when routes are not matched","It performs a client-side redirect from one route path to a different path","It renders the matched child route's element"],correctAnswer:3,explanation:"<Outlet /> acts as a placeholder in parent route components where the matched child route's element will be rendered."},{id:"mod5-q4",question:'What does the "index" route do?',options:["It generates the index.html file that serves as the SPA's entry point","It redirects all unmatched URLs to the application's homepage route","It defines the default child route that matches the parent's URL exactly","It registers a route specifically designed for handling URL query parameters"],correctAnswer:2,explanation:"An index route renders at the parent's URL when no other child route matches. It's the default content for a nested route layout."},{id:"mod5-q5",question:"How do you navigate programmatically (e.g., after a form submission)?",options:['window.location.href = "/page"',"useNavigate() hook","<Link> component only",'document.redirect("/page")'],correctAnswer:1,explanation:'useNavigate() returns a function that lets you navigate programmatically: navigate("/path") to go to a route, or navigate(-1) to go back.'}]},Kh={id:"mod-6",title:"State Management Patterns",description:"Learn patterns for managing application-wide state: Context + useReducer, custom hooks for shared logic, and lifting state up.",topics:[{id:"mod6-t1",title:"Context + useReducer Pattern",explanation:`## Scalable State with Context + useReducer

Combining \`useReducer\` with \`useContext\` gives you a Redux-like pattern built into React.

\`\`\`jsx
import { createContext, useContext, useReducer } from 'react';

// 1. Define types and reducer
const initialState = { todos: [], filter: 'all' };

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        ),
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

// 2. Create contexts (separate for state and dispatch)
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

// 3. Provider component
function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 4. Custom hooks for consumption
function useTodoState() {
  return useContext(TodoStateContext);
}

function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
\`\`\`

### Why Separate Contexts?

Splitting state and dispatch into separate contexts prevents unnecessary re-renders. Components that only dispatch actions won't re-render when state changes.

### Usage in Components

\`\`\`jsx
function AddTodo() {
  const dispatch = useTodoDispatch(); // won't re-render on state change
  const handleAdd = (text) => {
    dispatch({ type: 'ADD', payload: { id: Date.now(), text, done: false } });
  };
  return <button onClick={() => handleAdd('New todo')}>Add</button>;
}

function TodoList() {
  const { todos, filter } = useTodoState();
  const filtered = filter === 'all' ? todos : todos.filter(t => t.done);
  return (
    <ul>{filtered.map(t => <li key={t.id}>{t.text}</li>)}</ul>
  );
}
\`\`\``,task:{description:"Build a notification system using Context + useReducer. Create a NotificationProvider that supports ADD_NOTIFICATION (with message and type: success/error/info) and REMOVE_NOTIFICATION actions. Create a NotificationList component and an AddNotification button.",starterCode:`import { createContext, useContext, useReducer } from 'react';

// TODO: Define reducer with ADD_NOTIFICATION and REMOVE_NOTIFICATION
// TODO: Create context and provider
// TODO: Create custom hooks
// TODO: Create NotificationList and AddNotification components`,solution:`import { createContext, useContext, useReducer } from 'react';

function notificationReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, { id: Date.now(), ...action.payload }];
    case 'REMOVE_NOTIFICATION':
      return state.filter(n => n.id !== action.payload);
    default:
      return state;
  }
}

const NotifContext = createContext();

function NotificationProvider({ children }) {
  const [notifications, dispatch] = useReducer(notificationReducer, []);
  return (
    <NotifContext.Provider value={{ notifications, dispatch }}>
      {children}
    </NotifContext.Provider>
  );
}

function useNotifications() {
  return useContext(NotifContext);
}

function NotificationList() {
  const { notifications, dispatch } = useNotifications();
  return (
    <div className="notifications">
      {notifications.map(n => (
        <div key={n.id} className={\`notification \${n.type}\`}>
          <span>{n.message}</span>
          <button onClick={() => dispatch({ type: 'REMOVE_NOTIFICATION', payload: n.id })}>×</button>
        </div>
      ))}
    </div>
  );
}

function AddNotification() {
  const { dispatch } = useNotifications();
  const add = (type) => {
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { message: \`\${type} notification\`, type },
    });
  };
  return (
    <div>
      <button onClick={() => add('success')}>Success</button>
      <button onClick={() => add('error')}>Error</button>
      <button onClick={() => add('info')}>Info</button>
    </div>
  );
}`,hints:["Use Date.now() for unique notification IDs","The state shape is simply an array of notifications","Create a custom hook to avoid importing context directly"]}},{id:"mod6-t2",title:"Custom Hooks",explanation:`## Custom Hooks — Reusable Logic

A custom hook is a function starting with \`use\` that encapsulates reusable stateful logic.

### useLocalStorage

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>{theme}</button>;
}
\`\`\`

### useToggle

\`\`\`jsx
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

function Modal() {
  const [isOpen, toggleOpen] = useToggle();
  return (
    <>
      <button onClick={toggleOpen}>Toggle Modal</button>
      {isOpen && <div className="modal">Content</div>}
    </>
  );
}
\`\`\`

### useFetch

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
\`\`\`

### Rules for Custom Hooks

1. Name must start with \`use\`
2. Can call other hooks inside
3. Can return anything (values, arrays, objects)
4. Follow the same rules as built-in hooks (top level only)`,task:{description:"Create a `useDebounce` custom hook that takes a value and delay, returning the debounced value. Then create a `useFetch` hook that fetches data from a URL. Combine them: build a `UserSearch` component that debounces the search input and fetches matching users.",starterCode:`import { useState, useEffect } from 'react';

// TODO: Create useDebounce(value, delay) hook
// TODO: Create useFetch(url) hook
// TODO: Create UserSearch component combining both`,solution:`import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

function UserSearch() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const url = debouncedQuery
    ? \`https://jsonplaceholder.typicode.com/users?q=\${encodeURIComponent(debouncedQuery)}\`
    : '';
  const { data: users, loading, error } = useFetch(url);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search users..." />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users && (
        <ul>
          {users.map(u => <li key={u.id}>{u.name} — {u.email}</li>)}
        </ul>
      )}
    </div>
  );
}`,hints:["useDebounce uses setTimeout + cleanup just like a debounce effect","useFetch should handle null/empty URLs by skipping the fetch","Compose hooks: pass useDebounce output to construct the URL for useFetch"]}},{id:"mod6-t3",title:"Lifting State Up",explanation:`## Lifting State Up

When two sibling components need to share state, **lift the state up** to their closest common parent.

### The Problem

\`\`\`jsx
// ❌ Each has its own state — they can't sync
function TemperatureInput() {
  const [temp, setTemp] = useState('');
  return <input value={temp} onChange={e => setTemp(e.target.value)} />;
}

function App() {
  return (
    <div>
      <TemperatureInput /> {/* Celsius */}
      <TemperatureInput /> {/* Fahrenheit */}
    </div>
  );
}
\`\`\`

### The Solution: Lift State Up

\`\`\`jsx
function TemperatureInput({ label, value, onChange }) {
  return (
    <label>
      {label}:
      <input value={value} onChange={e => onChange(e.target.value)} />
    </label>
  );
}

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');

  const fahrenheit = celsius ? String((Number(celsius) * 9/5) + 32) : '';

  return (
    <div>
      <TemperatureInput
        label="Celsius"
        value={celsius}
        onChange={setCelsius}
      />
      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        onChange={f => setCelsius(String((Number(f) - 32) * 5/9))}
      />
    </div>
  );
}
\`\`\`

### When to Lift vs. Use Context

| Lift State Up | Use Context |
|---------------|-------------|
| 2-3 components share state | Many components across the tree need it |
| Parent-child or sibling relationship | Deeply nested components |
| Simple, local state | App-wide concerns (auth, theme) |`,task:{description:"Create a currency converter with two inputs (USD and EUR). When the user types in one, the other updates automatically. The exchange rate is 1 USD = 0.92 EUR. Lift the state to the parent component.",starterCode:`import { useState } from 'react';

function CurrencyInput({ label, value, onChange }) {
  // TODO: render a labeled input
}

function CurrencyConverter() {
  // TODO: manage shared state
  // TODO: convert between USD and EUR
}`,solution:`import { useState } from 'react';

function CurrencyInput({ label, value, onChange }) {
  return (
    <label>
      {label}:
      <input
        type="number"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}

function CurrencyConverter() {
  const [usd, setUsd] = useState('');
  const rate = 0.92;

  const eur = usd ? (Number(usd) * rate).toFixed(2) : '';

  const handleEurChange = (eurValue) => {
    setUsd(eurValue ? (Number(eurValue) / rate).toFixed(2) : '');
  };

  return (
    <div>
      <CurrencyInput label="USD" value={usd} onChange={setUsd} />
      <CurrencyInput label="EUR" value={eur} onChange={handleEurChange} />
    </div>
  );
}`,hints:["Store only one value (USD) in state — derive the other","The EUR input onChange should convert back to USD before setting state","Make CurrencyInput a controlled component via props"]}}],test:[{id:"mod6-q1",question:"Why split state and dispatch into separate contexts?",options:["It is strictly required by React — you cannot use useReducer without it","Components that only dispatch won't re-render when state changes","It makes the code easier to read by reducing the number of function calls","To avoid TypeScript errors when passing dispatch functions through props"],correctAnswer:1,explanation:"When dispatch is in a separate context, components that only call dispatch don't subscribe to state changes, preventing unnecessary re-renders."},{id:"mod6-q2",question:"What must a custom hook's name start with?",options:["get","handle","use","on"],correctAnswer:2,explanation:'Custom hooks must start with "use" (e.g., useLocalStorage). This convention lets React enforce the rules of hooks and enables linting.'},{id:"mod6-q3",question:"When should you lift state up?",options:["Always — state should be stored at the very top of the component tree","When the component tree is more than three levels deep regardless of data flow","Only when using TypeScript because it requires explicit state type definitions","When two sibling components need to share and sync the same data"],correctAnswer:3,explanation:"Lift state up when two or more sibling components need to reflect the same changing data. Move the state to their closest common parent."},{id:"mod6-q4",question:"What is the lazy initializer pattern in useState?",options:["Wrapping the initial value in a setTimeout to defer its calculation","Passing a function to useState that runs once to compute the initial value","Using useEffect to calculate and set state after the component first mounts","Setting the initial state to undefined and assigning it during the first render"],correctAnswer:1,explanation:"useState(() => expensiveComputation()) accepts a function that runs only on the first render, avoiding expensive recomputation on every render."},{id:"mod6-q5",question:"Can custom hooks return JSX?",options:["Yes — custom hooks can return anything","No — hooks can only return data, not UI","Only if wrapped in a Fragment","Only in class components"],correctAnswer:0,explanation:"Custom hooks can return any value including JSX, though returning data (state, handlers, computed values) is the more common and recommended pattern."}]},Xh={id:"mod-7",title:"Advanced Component Patterns",description:"Explore higher-order components, render props, compound components, and other advanced composition patterns.",topics:[{id:"mod7-t1",title:"Higher-Order Components (HOC)",explanation:`## Higher-Order Components

A HOC is a **function that takes a component and returns a new enhanced component**.

\`\`\`jsx
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <WrappedComponent {...props} />;
  };
}

// Usage
const UserListWithLoading = withLoading(UserList);

<UserListWithLoading isLoading={loading} users={users} />
\`\`\`

### Common HOC Patterns

**Authentication wrapper:**
\`\`\`jsx
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" />;
    return <WrappedComponent {...props} user={user} />;
  };
}

const ProtectedDashboard = withAuth(Dashboard);
\`\`\`

**Data fetching wrapper:**
\`\`\`jsx
function withData(WrappedComponent, url) {
  return function DataComponent(props) {
    const { data, loading, error } = useFetch(url);
    if (loading) return <Spinner />;
    if (error) return <Error message={error} />;
    return <WrappedComponent {...props} data={data} />;
  };
}
\`\`\`

### HOC Conventions

1. Don't mutate the original component — use composition.
2. Pass through unrelated props with \`...props\`.
3. Name the wrapper for better debugging: \`WithLoading(UserList)\`.
4. Don't use HOCs inside render — define them outside the component.

> **Note:** Custom hooks are often preferred over HOCs in modern React as they are simpler and more composable.`,task:{description:"Create a `withTooltip` HOC that wraps any component and adds tooltip functionality. When the user hovers over the wrapped component, a tooltip appears showing a `tooltip` prop. Apply it to a simple Button component.",starterCode:`import { useState } from 'react';

// TODO: Create withTooltip HOC
// TODO: Create a simple Button component
// TODO: Create EnhancedButton = withTooltip(Button)`,solution:`import { useState } from 'react';

function withTooltip(WrappedComponent) {
  return function WithTooltipComponent({ tooltip, ...props }) {
    const [show, setShow] = useState(false);

    return (
      <div
        style={{ position: 'relative', display: 'inline-block' }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <WrappedComponent {...props} />
        {show && (
          <div style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '4px 8px',
            background: '#333',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
          }}>
            {tooltip}
          </div>
        )}
      </div>
    );
  };
}

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

const EnhancedButton = withTooltip(Button);

// Usage: <EnhancedButton label="Save" tooltip="Save your changes" onClick={handleSave} />`,hints:["The HOC should separate the tooltip prop from the rest and pass remaining props to WrappedComponent","Use onMouseEnter/onMouseLeave to toggle tooltip visibility","Position the tooltip absolutely relative to a container div"]}},{id:"mod7-t2",title:"Compound Components",explanation:`## Compound Components Pattern

Compound components are a set of components that work together to form a complete UI element, sharing implicit state.

### Example: Accordion

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, children }) {
  return <div className="accordion-item">{children}</div>;
}

function AccordionHeader({ index, children }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <button
      className="accordion-header"
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      {children} {isOpen ? '▲' : '▼'}
    </button>
  );
}

function AccordionPanel({ index, children }) {
  const { openIndex } = useContext(AccordionContext);
  if (openIndex !== index) return null;
  return <div className="accordion-panel">{children}</div>;
}

// Attach sub-components
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;
\`\`\`

### Usage

\`\`\`jsx
<Accordion>
  <Accordion.Item index={0}>
    <Accordion.Header index={0}>Section 1</Accordion.Header>
    <Accordion.Panel index={0}>Content 1</Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item index={1}>
    <Accordion.Header index={1}>Section 2</Accordion.Header>
    <Accordion.Panel index={1}>Content 2</Accordion.Panel>
  </Accordion.Item>
</Accordion>
\`\`\`

### Benefits

- **Flexible API** — users control layout and composition.
- **Encapsulated state** — shared via context, hidden from the consumer.
- **Dot notation** — \`Accordion.Item\` clearly signals the relationship.`,task:{description:"Create a `Tabs` compound component with `Tabs.Tab` and `Tabs.Panel` sub-components. Clicking a tab shows its corresponding panel. Use context to share the active tab index.",starterCode:`import { createContext, useContext, useState } from 'react';

// TODO: Create Tabs, Tabs.Tab, Tabs.Panel
// TODO: Share active tab state via context`,solution:`import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list" role="tablist">{children}</div>;
}

function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  return (
    <button
      role="tab"
      className={activeIndex === index ? 'tab active' : 'tab'}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
}

function Panel({ index, children }) {
  const { activeIndex } = useContext(TabsContext);
  if (activeIndex !== index) return null;
  return <div className="tab-panel" role="tabpanel">{children}</div>;
}

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.Panel = Panel;

// Usage:
// <Tabs>
//   <Tabs.TabList>
//     <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
//     <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
//   </Tabs.TabList>
//   <Tabs.Panel index={0}>Content 1</Tabs.Panel>
//   <Tabs.Panel index={1}>Content 2</Tabs.Panel>
// </Tabs>`,hints:["Create a context to hold the active index and setter","Tab buttons call setActiveIndex onClick","Panel only renders children when its index matches activeIndex"]}},{id:"mod7-t3",title:"Render Props & Function as Children",explanation:`## Render Props Pattern

A component receives a **function as a prop** (or as children) and calls it to determine what to render.

\`\`\`jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return render(position);
}

// Usage
<MouseTracker render={({ x, y }) => (
  <p>Mouse is at ({x}, {y})</p>
)} />
\`\`\`

### Function as Children

The same pattern using the \`children\` prop:

\`\`\`jsx
function DataFetcher({ url, children }) {
  const { data, loading, error } = useFetch(url);

  return children({ data, loading, error });
}

// Usage
<DataFetcher url="/api/users">
  {({ data, loading, error }) => {
    if (loading) return <Spinner />;
    if (error) return <Error message={error} />;
    return <UserList users={data} />;
  }}
</DataFetcher>
\`\`\`

### When to Use

- When you need to **share behavior** while letting the consumer control the rendering.
- When a custom hook isn't sufficient (e.g., you need to wrap DOM elements).

> **Modern alternative:** Custom hooks often replace render props for logic sharing. Render props are still useful when you need to control what renders around the shared element.`,task:{description:'Create a `WindowSize` render prop component that tracks window dimensions and passes them to its children function. Use it to build a responsive layout that shows "Mobile" at <768px, "Tablet" at <1024px, and "Desktop" above.',starterCode:`import { useState, useEffect } from 'react';

// TODO: WindowSize render prop component
// TODO: ResponsiveLabel component using WindowSize`,solution:`import { useState, useEffect } from 'react';

function WindowSize({ children }) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return children(size);
}

function ResponsiveLabel() {
  return (
    <WindowSize>
      {({ width }) => {
        let label = 'Desktop';
        if (width < 768) label = 'Mobile';
        else if (width < 1024) label = 'Tablet';
        return <p>Current layout: {label} ({width}px)</p>;
      }}
    </WindowSize>
  );
}`,hints:["The component calls props.children as a function, passing the data","children(size) invokes the function-as-children pattern","Use window.innerWidth and a resize event listener"]}}],test:[{id:"mod7-q1",question:"What is a Higher-Order Component (HOC)?",options:["A function that takes a component and returns a new enhanced component","A component that is rendered at a higher position in the DOM element tree","A component that has more than ten props defined in its interface contract","A component that utilizes every available React hook in its implementation"],correctAnswer:0,explanation:"A HOC is a function that accepts a component and returns a new component with additional behavior or props. It's a form of component composition."},{id:"mod7-q2",question:"What makes the compound component pattern special?",options:["It relies exclusively on class components and lifecycle method overrides","Components share implicit state via context while giving consumers control over composition","It uses memoization exclusively to prevent all unnecessary child re-renders","It requires TypeScript to enforce strict type contracts between compound members"],correctAnswer:1,explanation:"Compound components share state implicitly via context. The consumer controls the layout and composition while the components handle logic and state internally."},{id:"mod7-q3",question:"What is the render props pattern?",options:["Using the render() lifecycle method inherited from the React.Component base class","Serializing all component props as plain text strings before passing them down","A component that receives a function prop to determine what to render","A design pattern specifically created for server-side rendering of React components"],correctAnswer:2,explanation:"Render props is a pattern where a component receives a function (often as children) and calls it with some data, letting the consumer decide what to render."},{id:"mod7-q4",question:"In modern React, what often replaces HOCs and render props?",options:["Class components","Web Components","Redux","Custom hooks"],correctAnswer:3,explanation:"Custom hooks provide a simpler, more composable way to share stateful logic between components without the complexity of HOCs or render props."},{id:"mod7-q5",question:"What does the dot notation Accordion.Item signify?",options:["AccordionItem is a child class derived from the Accordion base component class","Item is a static property on the Accordion component, signaling they are designed to work together","It is prototypal inheritance that allows AccordionItem to extend Accordion behavior","It is a React Router pattern for defining nested routes within layout components"],correctAnswer:1,explanation:"Dot notation (Accordion.Item) is a convention that communicates that Item is meant to be used within Accordion. The sub-component is assigned as a property of the parent component."}]},Yh={id:"mod-8",title:"Performance & Best Practices",description:"Optimize React applications with memoization, code splitting, error boundaries, and learn testing fundamentals.",topics:[{id:"mod8-t1",title:"React.memo & Performance",explanation:`## Preventing Unnecessary Re-renders

### When Components Re-render

A component re-renders when:
1. Its **state** changes.
2. Its **parent** re-renders (even if its own props didn't change).
3. A **context** it subscribes to changes.

### React.memo

Wrap a component in \`React.memo\` to skip re-rendering if props haven't changed:

\`\`\`jsx
const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  console.log('Rendering ExpensiveList');
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
});
\`\`\`

### Custom Comparison

\`\`\`jsx
const MyComponent = React.memo(
  function MyComponent({ data }) { /* ... */ },
  (prevProps, nextProps) => {
    // Return true to skip re-render
    return prevProps.data.id === nextProps.data.id;
  }
);
\`\`\`

### Memoization Toolkit

| Tool | Purpose |
|------|---------|
| \`React.memo\` | Skip re-render if props unchanged |
| \`useMemo\` | Cache expensive computed values |
| \`useCallback\` | Cache function references |

### When to Optimize

**Don't optimize prematurely.** Only use memoization when:
- You've identified a **measurable performance problem**.
- The component is **expensive to render** (large lists, heavy computation).
- The component **re-renders frequently** with the same props.

### React DevTools Profiler

Use the React DevTools **Profiler** tab to:
1. Record a session of interactions.
2. See which components re-rendered and how long each took.
3. Identify unnecessary re-renders.`,task:{description:"Create a parent component with a counter button and a heavy `ExpensiveChart` child component. Without optimization, ExpensiveChart re-renders on every counter click. Fix this using React.memo and useCallback for any function props.",starterCode:`import { useState, memo, useCallback } from 'react';

function ExpensiveChart({ data, onPointClick }) {
  console.log('ExpensiveChart rendered');
  // Simulates expensive rendering
  return <div>Chart with {data.length} points</div>;
}

function Dashboard() {
  const [count, setCount] = useState(0);
  const data = [1, 2, 3, 4, 5];

  const handlePointClick = (point) => {
    console.log('Clicked:', point);
  };

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ExpensiveChart data={data} onPointClick={handlePointClick} />
    </div>
  );
}`,solution:`import { useState, memo, useCallback, useMemo } from 'react';

const ExpensiveChart = memo(function ExpensiveChart({ data, onPointClick }) {
  console.log('ExpensiveChart rendered');
  return <div>Chart with {data.length} points</div>;
});

function Dashboard() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => [1, 2, 3, 4, 5], []);

  const handlePointClick = useCallback((point) => {
    console.log('Clicked:', point);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ExpensiveChart data={data} onPointClick={handlePointClick} />
    </div>
  );
}`,hints:["Wrap ExpensiveChart with memo()","Memoize the data array with useMemo so the reference doesn't change","Memoize handlePointClick with useCallback to stabilize the reference"]}},{id:"mod8-t2",title:"Code Splitting & Lazy Loading",explanation:`## Code Splitting with React.lazy

By default, all your code is bundled into one file. **Code splitting** lets you load parts of your app on demand.

### React.lazy + Suspense

\`\`\`jsx
import { lazy, Suspense } from 'react';

const AdminPanel = lazy(() => import('./AdminPanel'));
const UserProfile = lazy(() => import('./UserProfile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

### How It Works

1. \`lazy()\` takes a function that calls \`import()\` — a dynamic import.
2. The component is loaded **only when first rendered**.
3. \`<Suspense>\` shows a \`fallback\` while the component loads.

### Route-Based Splitting

The most natural place to split is at route boundaries:

\`\`\`jsx
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
\`\`\`

### Error Boundaries for Loading Errors

\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>
</ErrorBoundary>
\`\`\`

### Named Exports

\`lazy\` only supports **default exports**. For named exports, create an intermediate module:

\`\`\`jsx
// MathUtils.js exports { add }
// MathUtilsLazy.js
export { add as default } from './MathUtils';

const Add = lazy(() => import('./MathUtilsLazy'));
\`\`\``,task:{description:"Refactor an app that imports three heavy page components to use React.lazy and Suspense. Add a loading spinner as the fallback. Create an ErrorBoundary class component that catches loading errors.",starterCode:`import { Suspense, lazy, Component } from 'react';

// TODO: Convert these to lazy imports
// import Home from './Home';
// import Dashboard from './Dashboard';
// import Settings from './Settings';

// TODO: Create ErrorBoundary class component
// TODO: Wrap routes in ErrorBoundary + Suspense`,solution:`import { Suspense, lazy, Component } from 'react';

const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="spinner">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}`,hints:["Replace import statements with lazy(() => import(...))","Wrap lazy components in <Suspense> with a fallback","ErrorBoundary must be a class with getDerivedStateFromError"]}},{id:"mod8-t3",title:"React Best Practices",explanation:`## Key Best Practices

### 1. Component Organization

\`\`\`
src/
  components/       # Reusable UI components
    Button/
      Button.tsx
      Button.test.tsx
      Button.module.css
  pages/            # Route-level components
  hooks/            # Custom hooks
  context/          # Context providers
  utils/            # Helper functions
  types/            # TypeScript types
\`\`\`

### 2. Prop Naming Conventions

\`\`\`jsx
// ✅ Good — descriptive, consistent
<UserCard
  userName="Alice"
  isActive={true}
  onStatusChange={handleChange}
  renderAvatar={() => <Avatar />}
/>

// ❌ Bad — unclear, inconsistent
<UserCard n="Alice" a={true} cb={fn} avatar={fn} />
\`\`\`

### 3. Avoid Derived State

\`\`\`jsx
// ❌ Bad — duplicates state
const [items, setItems] = useState([]);
const [count, setCount] = useState(0);
// You have to keep count in sync with items!

// ✅ Good — derive from existing state
const [items, setItems] = useState([]);
const count = items.length;
\`\`\`

### 4. Keep Components Small

Each component should do **one thing**. If it's doing too much, split it.

### 5. Prefer Composition Over Inheritance

\`\`\`jsx
// ✅ Composition
function Dialog({ title, children }) {
  return (
    <div className="dialog">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function ConfirmDialog({ onConfirm }) {
  return (
    <Dialog title="Are you sure?">
      <button onClick={onConfirm}>Yes</button>
    </Dialog>
  );
}
\`\`\`

### 6. Use Fragments to Avoid Extra DOM Nodes

\`\`\`jsx
// ✅ No extra wrapper
return (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
\`\`\`

### 7. Handle Loading and Error States

Always account for loading, error, and empty states in data-driven components.`,task:{description:"Refactor a poorly-structured component that has too many responsibilities: it fetches data, transforms it, manages a form, and renders everything. Split it into smaller components and a custom hook. Follow best practices.",starterCode:`// This component does too much — refactor it!
function UserManager() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(d => { setUsers(d); setLoading(false); });
  }, []);

  const activeUsers = users.filter(u => u.active);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { name, email, active: true }]);
    setName(''); setEmail('');
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>{activeUsers.map(u => <li>{u.name} ({u.email})</li>)}</ul>
    </div>
  );
}`,solution:`// Custom hook for user data
function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(data => { setUsers(data); setLoading(false); });
  }, []);

  const addUser = (user) => {
    setUsers(prev => [...prev, { ...user, active: true }]);
  };

  const activeUsers = users.filter(u => u.active);

  return { users: activeUsers, loading, addUser };
}

// Form component
function AddUserForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
  );
}

// List component
function UserList({ users }) {
  return (
    <ul>
      {users.map((u, i) => (
        <li key={i}>{u.name} ({u.email})</li>
      ))}
    </ul>
  );
}

// Main component — composes the pieces
function UserManager() {
  const { users, loading, addUser } = useUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <AddUserForm onAdd={addUser} />
      <UserList users={users} />
    </div>
  );
}`,hints:["Extract fetching logic into a custom hook (useUsers)","Move the form into its own component (AddUserForm)","Move the list into its own component (UserList)"]}}],test:[{id:"mod8-q1",question:"When should you use React.memo?",options:["Only when you've identified a measurable performance issue from unnecessary re-renders","On every component by default to ensure the best possible rendering performance","Only on class components because functional components cannot be memoized","Never — React.memo has been deprecated in favor of the React Compiler approach"],correctAnswer:0,explanation:"React.memo should be used when profiling identifies that a component re-renders unnecessarily with unchanged props and it causes a noticeable performance impact."},{id:"mod8-q2",question:"What does React.lazy require to display content while loading?",options:["A loading state variable toggled by the parent component's useEffect hook","A Suspense component with a fallback prop","An ErrorBoundary component that catches and displays loading exceptions","A useEffect hook that monitors the lazy component's loading progress"],correctAnswer:1,explanation:"React.lazy components must be wrapped in a <Suspense> component that provides a fallback UI to display while the lazy component is being loaded."},{id:"mod8-q3",question:"Why is derived state (duplicating state that can be computed) an anti-pattern?",options:["It uses too much memory because React creates duplicate copies of the data","It always causes infinite re-render loops that crash the application entirely","React does not support derived values — you must only use primitive state types","It can get out of sync with the source state, causing bugs"],correctAnswer:3,explanation:"Derived state is redundant and can become inconsistent with the source data. Instead, compute values from existing state during rendering."},{id:"mod8-q4",question:"What is the main benefit of code splitting at route boundaries?",options:["Easier debugging because each page has its own isolated error boundary scope","Better SEO rankings because search engines prefer route-based component structures","Each page's code is loaded only when the user navigates to it, reducing initial bundle size","Faster state updates because each route maintains its own independent state tree"],correctAnswer:2,explanation:"Route-based code splitting ensures that users only download the JavaScript needed for the page they're viewing, improving initial load time."},{id:"mod8-q5",question:'What does "composition over inheritance" mean in React?',options:["Always use class components because they provide better lifecycle control and access","Build complex UIs by combining smaller components via props and children, not by extending classes","Use TypeScript interfaces exclusively to define strict component contracts and prop types","Avoid using the children prop entirely and pass all content through explicit named props"],correctAnswer:1,explanation:"React favors building UIs from small, reusable components composed together via props and children, rather than using class inheritance hierarchies."}]},Gh=[{id:"ft-1",question:"What is the primary benefit of the virtual DOM?",options:["It minimizes direct DOM manipulations by batching and diffing updates","It replaces the need for HTML by providing its own markup language","It makes JavaScript execution faster by compiling it to native code","It eliminates the need for CSS by handling all styling automatically"],correctAnswer:0,explanation:"The virtual DOM is a lightweight copy of the real DOM. React diffs changes against it and applies only the minimal set of updates to the real DOM, improving performance."},{id:"ft-2",question:"Which hook should you use to run code after every render?",options:["useState with an initial value","useEffect without a dependency array","useRef with a DOM element attached","useMemo with empty dependencies"],correctAnswer:1,explanation:"useEffect without a dependency array runs after every render. Adding [] makes it run only on mount; adding [deps] makes it run when those deps change."},{id:"ft-3",question:"How do you prevent a child component from re-rendering when the parent re-renders?",options:["Wrap the child with React.memo and memoize its props","Use useState in the child to track whether it should re-render","Use useEffect in the child component to skip redundant render cycles","Move the child component definition outside the parent function body"],correctAnswer:0,explanation:"React.memo wraps a component to skip re-rendering when its props haven't changed (shallow comparison). Combined with useMemo/useCallback for props, this prevents unnecessary re-renders."},{id:"ft-4",question:"What is the difference between useEffect and useLayoutEffect?",options:["They are functionally identical and can always be used interchangeably in every case","useLayoutEffect runs synchronously after DOM mutations but before paint; useEffect runs asynchronously after paint","useLayoutEffect is the original hook designed only for class component migration patterns","useEffect fires before the render phase completes, while useLayoutEffect fires after reconciliation finishes"],correctAnswer:1,explanation:"useLayoutEffect fires synchronously after all DOM mutations but before the browser paints. useEffect fires asynchronously after paint. Use useLayoutEffect for DOM measurements."},{id:"ft-5",question:"What happens when you call setState inside useEffect without proper dependencies?",options:["It can cause an infinite re-render loop","Nothing special happens — React handles it automatically","React silently ignores the state update and does not re-render","The state updates are queued and applied in the next browser session"],correctAnswer:0,explanation:"If useEffect updates state that is in its own dependency array (or has no dependency array), it triggers a re-render, which runs the effect again, causing an infinite loop."},{id:"ft-6",question:"In React Router v6, how do you create a layout that wraps multiple routes?",options:["Use a Higher-Order Component wrapper on each individual route component","Wrap each Route declaration inside a div element with a shared CSS class","Use a layout Route without a path that renders an Outlet","Use Redux global state management to synchronize all layout rendering"],correctAnswer:2,explanation:"A layout route (Route without a path or with a parent path) renders a layout component containing an <Outlet />, where matched child routes are displayed."},{id:"ft-7",question:"What is the purpose of the key prop in React?",options:["Applying inline CSS styling properties to elements rendered inside a list","Authenticating API requests by attaching a token to each list element","Helping React track which elements changed in a list for efficient reconciliation","Encrypting data attributes on list elements for security and privacy purposes"],correctAnswer:2,explanation:"Keys help React's reconciliation algorithm identify which items in a list have changed, been added, or removed. They should be stable and unique among siblings."},{id:"ft-8",question:"When should you use useReducer over useState?",options:["For managing any piece of state at all, since it is always better than useState","Only in class components because functional components do not support reducers","When state logic is complex, has multiple sub-values, or next state depends on previous state","Only when state is a simple boolean value that toggles between true and false"],correctAnswer:2,explanation:"useReducer excels with complex state: multiple related values, actions with different update patterns, and when the next state depends on the previous one in non-trivial ways."},{id:"ft-9",question:"What is the compound component pattern?",options:["Using multiple useState hooks to manage separate pieces of related component state","Components that share implicit state via context while letting consumers control composition","Deeply nesting div elements to create complex multi-level layout structures","Applying TypeScript generics to enforce strict type safety across components"],correctAnswer:1,explanation:"Compound components work together by sharing internal state via context. The consumer controls how they're composed (e.g., Tabs + Tab + Panel), while logic is encapsulated."},{id:"ft-10",question:"What is the correct order of operations in a React component lifecycle?",options:["Render → Browser paint → Effect → (on next update: Cleanup → Render → Paint → Effect)","Effect runs first → Component renders → Cleanup executes after the render completes","Cleanup runs first → Component renders → Effect fires after the render is committed","Effect fires immediately → Cleanup runs → Component renders the updated output"],correctAnswer:0,explanation:"React renders, the browser paints, then effects run. On updates, React runs cleanup from the previous effect, renders, paints, then runs the new effect."},{id:"ft-11",question:"What does React.lazy() do?",options:["Delays the rendering of a component until the browser's next idle frame period","Creates a temporary placeholder component that displays while data is fetching","Memoizes a component and prevents it from re-rendering when its props change","Loads a component dynamically (on demand) via code splitting"],correctAnswer:3,explanation:"React.lazy() enables code splitting by loading a component only when it's first rendered. It takes a function that returns a dynamic import() and must be used with Suspense."},{id:"ft-12",question:"How do you share logic between components without changing the component hierarchy?",options:["Copy-paste the code","Use inheritance","Create a custom hook","Use global variables"],correctAnswer:2,explanation:"Custom hooks extract and share stateful logic between components. They don't affect the component tree structure and can be composed together."},{id:"ft-13",question:"What is prop drilling and how do you solve it?",options:["Drilling into DOM elements manually from parent to child; use CSS selectors instead","Passing props through many intermediate components that don't use them; use Context API","Adding too many props to one component interface and overloading it; use fewer props","A performance optimization technique for reducing re-renders; use React.memo exclusively"],correctAnswer:1,explanation:"Prop drilling occurs when props are passed through multiple component levels just to reach a deeply nested child. Context API or state management libraries solve this."},{id:"ft-14",question:"Why should you never mutate state directly in React?",options:["It causes a syntax error during the component's next render cycle","It causes security vulnerabilities by exposing internal state references","It's perfectly fine — you can mutate state directly without any issues","React won't detect the change and the UI won't update"],correctAnswer:3,explanation:"React uses reference comparison to detect state changes. If you mutate an object/array in place, the reference stays the same and React won't know to re-render."},{id:"ft-15",question:"What is the best place to apply code splitting in a React application?",options:["Every single component should be individually code-split for best performance","Inside useEffect hooks to defer loading of expensive side-effect dependencies","Only the root component of the application should be wrapped in a lazy boundary","Route boundaries — loading each page on demand"],correctAnswer:3,explanation:"Route-based code splitting is the most impactful and natural place to split your code. Each page is loaded only when the user navigates to it."}],Zh=[{id:"lt-1",question:"What is JSX in React?",options:["A syntax extension that allows writing HTML-like code in JavaScript","A query language designed for fetching and managing database records","A preprocessor that converts custom syntax into standard CSS rules","A testing framework that automatically validates component behavior"],correctAnswer:0,explanation:"JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file."},{id:"lt-2",question:"Which hook is used to manage state in a functional component?",options:["useEffect","useRef","useState","useContext"],correctAnswer:2,explanation:"useState is the primary hook for adding state variables to functional components."},{id:"lt-3",question:"What does the virtual DOM do?",options:["Replaces the browser DOM entirely by using a custom rendering engine","Provides a lightweight copy of the real DOM to optimize updates","Stores component data on the server and retrieves it via an API","Compiles JSX templates directly into static HTML pages at build time"],correctAnswer:1,explanation:"The virtual DOM is a lightweight JavaScript representation of the real DOM used to determine the minimal set of changes needed."},{id:"lt-4",question:"What is the purpose of the key prop when rendering lists?",options:["It helps React identify which items have changed, been added, or removed","It applies CSS class names to list items based on their position index","It determines the visual ordering and sort direction of list elements","It encrypts list data before transmitting it between parent and child"],correctAnswer:0,explanation:"Keys help React identify which items in a list have changed. They should be stable, unique identifiers among siblings."},{id:"lt-5",question:"Which method is used to pass data from a parent to a child component?",options:["State","Context","Props","Refs"],correctAnswer:2,explanation:"Props are the primary mechanism for passing data from parent to child components."},{id:"lt-6",question:"When does useEffect with an empty dependency array run?",options:["Only on the first render (mount)","On every single render cycle the component goes through","Only when any piece of component state changes","Never — empty arrays disable the effect entirely"],correctAnswer:0,explanation:"useEffect with [] runs only once after the initial render (mount)."},{id:"lt-7",question:"What is the correct way to update state based on previous state?",options:["setState(state + 1) direct value","setState(prev => prev + 1)","state = state + 1 assignment","this.state += 1 increment"],correctAnswer:1,explanation:"Use the functional updater form to ensure you work with the latest state value."},{id:"lt-8",question:"What is a controlled component in React?",options:["A form element whose value is driven by React state","A component that manages and orchestrates other components","A component that receives no props from its parent component","A component that accesses DOM elements directly through refs"],correctAnswer:0,explanation:"A controlled component is a form element whose value is controlled by React state and updated via onChange."},{id:"lt-9",question:"What does React.memo do?",options:["Stores component data in localStorage and retrieves it on mount","Memoizes a component to skip re-renders when props haven't changed","Creates a mutable ref that persists across component re-renders","Wraps a component with an error boundary for graceful fallbacks"],correctAnswer:1,explanation:"React.memo skips re-rendering when props haven't changed (shallow comparison)."},{id:"lt-10",question:"Which hook shares state across deeply nested components without prop drilling?",options:["useState","useReducer","useContext","useRef"],correctAnswer:2,explanation:"useContext reads context values created with createContext, avoiding prop drilling."},{id:"lt-11",question:"What is the purpose of useReducer?",options:["To manage complex state logic with a reducer function","To reduce the total number of components in the tree","To reduce the final JavaScript bundle size at build time","To optimize rendering speed by batching DOM operations"],correctAnswer:0,explanation:"useReducer manages complex state with multiple sub-values or interdependent transitions."},{id:"lt-12",question:"What is the children prop in React?",options:["An array of child component class definitions passed as a prop","Content placed between opening and closing tags of a component","A lifecycle method that executes when children mount or unmount","A required prop that every component must declare and consume"],correctAnswer:1,explanation:"The children prop contains whatever JSX is placed between the opening and closing tags of a component."},{id:"lt-13",question:"What happens if you mutate state directly (e.g., state.push(item))?",options:["React detects the mutation and triggers an immediate re-render","The application throws a runtime error and crashes immediately","React does not detect the change and the UI won't update","It works in development mode but silently fails in production"],correctAnswer:2,explanation:"React uses reference comparison. Mutating in place keeps the same reference, so React won't re-render."},{id:"lt-14",question:"Which is NOT a valid way to conditionally render in React?",options:["{condition && <Component />}","{condition ? <A /> : <B />}","if (condition) return <Component />","<if condition={true}><Component /></if>"],correctAnswer:3,explanation:"There is no <if> element in JSX. Use JavaScript expressions like &&, ternary, or early returns."},{id:"lt-15",question:"What is the difference between useEffect and useLayoutEffect?",options:["useLayoutEffect runs synchronously after DOM mutations but before paint; useEffect runs after paint","They are functionally identical and can always be used interchangeably","useLayoutEffect is the hook version designed only for class component lifecycle methods","useEffect fires before the render phase while useLayoutEffect fires during reconciliation"],correctAnswer:0,explanation:"useLayoutEffect fires synchronously after DOM mutations but before the browser paints."},{id:"lt-16",question:"What does useRef return?",options:["A reactive state variable that triggers a re-render whenever its value changes","A memoized callback function reference that changes only when dependencies update","A mutable ref object with a .current property that persists across renders","A context value object that propagates updates down through the component tree"],correctAnswer:2,explanation:"useRef returns a mutable object whose .current property persists across renders without causing re-renders."},{id:"lt-17",question:"What is prop drilling?",options:["A performance optimization technique that reduces unnecessary re-renders","A pattern where too many props are added to a single component interface","Manipulating DOM elements directly by drilling into the element hierarchy","Passing props through many intermediate components that don't use them"],correctAnswer:3,explanation:"Prop drilling is passing props through multiple component levels just to reach a deeply nested child."},{id:"lt-18",question:"How do you prevent a form from reloading the page on submit?",options:['Use type="button" on the submit button instead of type="submit"',"Call e.preventDefault() in the onSubmit handler","Return false from the event handler to stop the default action","Remove the action attribute entirely from the form element tag"],correctAnswer:1,explanation:"Calling e.preventDefault() prevents the browser's default form submission behavior."},{id:"lt-19",question:"What does React.lazy() do?",options:["Loads a component dynamically via code splitting","Delays the rendering of a component until the next idle frame","Memoizes a component and caches its rendered output in memory","Creates a placeholder component that renders while data is loading"],correctAnswer:0,explanation:"React.lazy() enables code splitting by loading a component only when it's first rendered."},{id:"lt-20",question:"What is the Suspense component used for?",options:["Catching and handling JavaScript errors thrown during the render phase","Providing a global state management solution across the component tree","Showing fallback content while lazy-loaded components are loading","Defining route boundaries and handling navigation between pages"],correctAnswer:2,explanation:"Suspense wraps lazy-loaded components and shows a fallback UI while they load."},{id:"lt-21",question:"What is the purpose of useCallback?",options:["To create callback functions that can dispatch state updates to a reducer","To provide error handling and automatic retry logic for async callbacks","To schedule a function to run synchronously after the component renders","To memoize a function reference so it only changes when dependencies change"],correctAnswer:3,explanation:"useCallback returns a memoized function that only changes when dependencies change."},{id:"lt-22",question:"What is the difference between useMemo and useCallback?",options:["They are functionally identical and can be used interchangeably in all cases","useMemo caches a computed value; useCallback caches a function reference","useMemo is intended for class components, useCallback for functional components","useMemo recalculates on every render while useCallback runs only on mount"],correctAnswer:1,explanation:"useMemo returns the memoized result of calling a function. useCallback returns the memoized function itself."},{id:"lt-23",question:"What does <Outlet /> do in React Router?",options:["Renders the matched child route's element in nested routes","Creates a navigation link that highlights when the route matches","Redirects the user from one route path to a different route path","Renders a 404 error page when no child routes match the current URL"],correctAnswer:0,explanation:"<Outlet /> is a placeholder where the matched child route's element will be rendered."},{id:"lt-24",question:"How do you access URL parameters like /users/:id?",options:["window.location.params","props.match.params","useParams() hook","useLocation().params"],correctAnswer:2,explanation:"useParams() returns an object of key/value pairs from the current URL matching the dynamic segments."},{id:"lt-25",question:"What is a Higher-Order Component (HOC)?",options:["A component that is rendered at the top of the DOM above all other elements","A component that utilizes every available React hook in its implementation","A component that accepts and manages more than ten props simultaneously","A function that takes a component and returns a new enhanced component"],correctAnswer:3,explanation:"A HOC accepts a component and returns a new component with additional behavior or props."},{id:"lt-26",question:"What is the compound component pattern?",options:["Components sharing implicit state via context while consumers control composition","Using multiple useState hooks together to manage related pieces of state","Deeply nesting div elements to create complex layout structures in JSX","Applying TypeScript generics to enforce strict type safety on component props"],correctAnswer:0,explanation:"Compound components share internal state via context while letting the consumer control composition."},{id:"lt-27",question:"What is the render props pattern?",options:["Using the render() lifecycle method from class-based React components","A pattern specifically designed for server-side rendering of components","Serializing all component props as text strings before passing them down","A component receives a function prop and calls it to determine what to render"],correctAnswer:3,explanation:"Render props: a component receives a function and calls it with data, letting the consumer decide what to render."},{id:"lt-28",question:"Why should component names start with a capital letter?",options:["It is just a convention with no technical enforcement by the framework","React treats lowercase tags as HTML elements and uppercase as components","It improves runtime performance by enabling faster component tree lookups","It is a strict requirement enforced by the TypeScript compiler for JSX files"],correctAnswer:1,explanation:"React uses the case of the first letter to distinguish between HTML elements and custom components."},{id:"lt-29",question:"What is StrictMode used for?",options:["Enforcing TypeScript type-checking at runtime in addition to compile time","Optimizing the app for production by stripping out development-only code","Highlighting potential problems by running extra checks in development","Preventing unauthorized access by validating user sessions on each render"],correctAnswer:2,explanation:"StrictMode helps identify potential problems by double-invoking certain functions in development."},{id:"lt-30",question:"What is React.Fragment (<> </>) for?",options:["Grouping elements without adding extra DOM nodes","Creating a portal to render children in a different DOM tree","Caching components in memory to prevent unnecessary re-renders","Breaking a single component into smaller reusable sub-components"],correctAnswer:0,explanation:"Fragments let you group multiple elements without adding an extra wrapper DOM node."},{id:"lt-31",question:"What causes an infinite loop in useEffect?",options:["Declaring the effect callback as an async function returning a Promise","Returning a cleanup function that removes event listeners on unmount","Using multiple useEffect hooks that each watch different state variables","Setting state inside useEffect without proper dependencies, causing re-trigger"],correctAnswer:3,explanation:"If useEffect updates state that triggers re-render and the effect runs again due to wrong dependencies, it loops."},{id:"lt-32",question:"How do you handle multiple form inputs with one onChange handler?",options:["Use a separate ref for each input element and read values from the DOM directly","Declare separate state variables and individual handlers for every form field","Use a state object and computed property names: [e.target.name]: e.target.value","Each input requires its own dedicated handler function — there is no shared way"],correctAnswer:2,explanation:"Give each input a name attribute and use computed property names to update the correct field."},{id:"lt-33",question:"What does the useNavigate hook do?",options:["Registers a new route definition in the React Router configuration","Returns a function for programmatic navigation","Navigates to an external URL outside the single-page application","Generates a breadcrumb trail based on the current route hierarchy"],correctAnswer:1,explanation:"useNavigate returns a function that lets you navigate programmatically."},{id:"lt-34",question:'What is an "index" route in React Router?',options:["Generates the index.html file used as the entry point for the SPA","A permanent redirect from any unknown path to the application homepage","The default child route that renders at the parent URL","A route specifically designed for handling query parameters and filters"],correctAnswer:2,explanation:"An index route renders at the parent's URL when no other child route matches."},{id:"lt-35",question:"Why use AbortController when fetching in useEffect?",options:["To cancel in-flight requests on unmount, preventing stale state updates","To improve request speed by compressing the fetch payload automatically","It is strictly required by the Fetch API specification for all requests","To implement automatic retry logic when network requests fail or timeout"],correctAnswer:0,explanation:"AbortController cancels in-flight requests, preventing state updates on unmounted components."},{id:"lt-36",question:'What is "lifting state up"?',options:["Moving all component state into a Redux store for centralized management","Moving state declarations inside a useEffect hook for deferred initialization","Persisting state to localStorage so it survives across page refreshes","Moving state to the closest common parent of components that share it"],correctAnswer:3,explanation:"Lifting state up means moving shared state to the closest common ancestor."},{id:"lt-37",question:"What is derived state?",options:["State that comes from props and should always be stored in a separate variable","State shared between sibling components via a common parent's props","State fetched from the server that is cached locally in the component","State that can be computed from existing state — duplicating can cause sync bugs"],correctAnswer:3,explanation:"Derived state is computable from existing state. A separate copy can get out of sync, causing bugs."},{id:"lt-38",question:"What does <NavLink> do that <Link> does not?",options:["Navigates to external URLs outside the current single-page application","Supports active state styling based on the current URL","Opens navigation links in a new browser tab or window by default","Automatically preloads the route component when hovering over the link"],correctAnswer:1,explanation:'NavLink adds support for an "active" class/style when its path matches the current URL.'},{id:"lt-39",question:"What is the lazy initializer pattern for useState?",options:["Wrapping the initial value in a setTimeout to defer its computation","Setting the initial state to null and populating it after the first render","Passing a function to useState that runs only once to compute the initial value","Using a useEffect on mount to compute and set the initial state value"],correctAnswer:2,explanation:"useState(() => expensive()) accepts a function that runs only on the first render."},{id:"lt-40",question:"When should you use a key prop other than the array index?",options:["When items can be reordered, inserted, or deleted","Never — using the array index is always the correct approach","Only when using TypeScript, since it enforces strict key types","Only in production builds where React enables strict consistency"],correctAnswer:0,explanation:"Index keys cause bugs when items are reordered, inserted, or deleted. Use stable, unique IDs."},{id:"lt-41",question:"What is the purpose of an Error Boundary?",options:["To validate form inputs and display field-level error messages to users","To prevent React runtime warnings from appearing in the browser console","To intercept and handle HTTP errors returned from network API requests","Catch JavaScript errors in a component tree and display a fallback UI"],correctAnswer:3,explanation:"Error Boundaries catch rendering errors in child components and show a fallback UI."},{id:"lt-42",question:"Can you use hooks inside a conditional statement?",options:["Yes, hooks can be called anywhere including inside conditions and loops","Only in class components — functional components have different rules","Only the useState hook can be conditional; other hooks cannot be used","No — hooks must be called at the top level, in the same order every render"],correctAnswer:3,explanation:"Hooks must be called at the top level to ensure consistent ordering between renders."},{id:"lt-43",question:"What is the correct React render + effect lifecycle order?",options:["Effect runs first → Component renders → Cleanup executes afterward","Render → Paint → Effect → (update: Cleanup → Render → Paint → Effect)","Cleanup runs first → Component renders → Effect executes afterward","Effect fires immediately → Cleanup runs → Component renders to the screen"],correctAnswer:1,explanation:"React renders, browser paints, then effects run. On updates, cleanup runs before the new effect."},{id:"lt-44",question:"What does createContext do?",options:["Creates a context object to share values across the component tree","Creates a new standalone component with its own isolated state scope","Wraps existing components with additional style and theme properties","Creates memoized event handlers that persist across component renders"],correctAnswer:0,explanation:"createContext creates a Context object for sharing values without prop drilling."},{id:"lt-45",question:'What is "composition over inheritance" in React?',options:["Extending components using class inheritance to share common behavior","Using TypeScript interfaces to enforce strict type hierarchies on components","Building UIs by combining components via props and children rather than inheritance","Avoiding the children prop entirely and passing all data through explicit props"],correctAnswer:2,explanation:"React favors composition — building UIs from small, reusable components — over class inheritance."},{id:"lt-46",question:"What is a pure component?",options:["A component that is written exclusively in TypeScript with full type annotations","Any functional component regardless of whether it has side effects or not","A component that does not accept or render any children inside its body","Always renders the same output for the same props, with no side effects during render"],correctAnswer:3,explanation:"A pure component returns the same JSX for the same props/state, with no render-phase side effects."},{id:"lt-47",question:"How can you debounce a search input in React?",options:["Call the search API on every single keystroke without any delay","Use useEffect with setTimeout and clear it in cleanup","Wrap the input component in React.memo to limit re-renders","Disable the input field between search API calls and re-enable after"],correctAnswer:1,explanation:"Use setTimeout in useEffect and clearTimeout in cleanup — changes before timeout fire cancel the previous call."},{id:"lt-48",question:"What is the difference between controlled and uncontrolled components?",options:["Controlled: value driven by state. Uncontrolled: value in the DOM, read via ref","Controlled components use class syntax while uncontrolled use function syntax","They are functionally identical and can be used interchangeably in all cases","Uncontrolled components cannot have an onChange handler attached to them at all"],correctAnswer:0,explanation:"Controlled: React state drives form value. Uncontrolled: DOM holds the value, accessed via ref."},{id:"lt-49",question:"What does the spread operator do with props: <C {...obj} />?",options:["Creates a deep copy of the component with all of its internal state","Merges the component definition and the object into a new component","Passes all properties of obj as individual props to C","Converts the object to a JSON string and passes it as a single prop"],correctAnswer:2,explanation:"The spread operator passes each property of the object as a separate prop to the component."},{id:"lt-50",question:"Why can an object literal in useEffect deps cause infinite re-runs?",options:["Objects are not a valid type for the useEffect dependency array values","A new reference is created each render, so React thinks the dep changed","The useEffect hook does not support objects as dependency array entries","It triggers a syntax error because objects cannot be compared by React"],correctAnswer:1,explanation:"React uses Object.is() for deps comparison. A new object literal has a new reference each render."},{id:"lt-51",question:"Where is the best place to apply code splitting?",options:["Every single component should be individually code-split for best performance","Inside useEffect hooks to defer loading of expensive side-effect logic","Only the root application component should be wrapped in a lazy boundary","Route boundaries — loading each page on demand"],correctAnswer:3,explanation:"Route-based splitting ensures each page's code is loaded only when the user navigates to it."},{id:"lt-52",question:"How do custom hooks share logic between components?",options:["By encapsulating reusable logic — each caller gets its own copy of state","By sharing the same state instance across all components that call the hook","By using global variables that are accessible from any component in the app","By rendering shared UI elements that are injected into the calling component"],correctAnswer:0,explanation:"Each component calling a custom hook gets its own independent copy of the hook's state."},{id:"lt-53",question:"What must a custom hook's name start with?",options:["get","handle","use","on"],correctAnswer:2,explanation:'Custom hooks must start with "use" so React can enforce the rules of hooks.'},{id:"lt-54",question:"What is reconciliation in React?",options:["The process of merging two separate state objects into a single state value","The process of diffing virtual DOM trees and updating the real DOM efficiently","The mechanism for connecting React components to an external API data source","The lifecycle phase responsible for cleaning up effects before a component unmounts"],correctAnswer:1,explanation:"Reconciliation diffs two virtual DOM trees to determine the minimum number of real DOM changes."},{id:"lt-55",question:"When does a component re-render?",options:["Only when its own internal state changes via a setState or dispatch call","Only when the props passed to it from the parent component have changed","When its state changes, parent re-renders, or a subscribed context changes","Only when the user directly interacts with the component via mouse or keyboard"],correctAnswer:2,explanation:"A component re-renders when its state changes, parent re-renders, or a consumed context changes."},{id:"lt-56",question:"What is a portal in React?",options:["A mechanism for redirecting users between different pages in the application","A specialized context provider that broadcasts theme values to all children","A security feature that sandboxes component rendering in an isolated scope","A way to render children into a DOM node outside the parent's hierarchy"],correctAnswer:3,explanation:"createPortal renders a child into a different DOM node, useful for modals and tooltips."},{id:"lt-57",question:"What happens if you forget cleanup when adding an event listener in useEffect?",options:["Nothing — React automatically manages and removes event listeners for you","The listener accumulates on each re-render, causing memory leaks","The application throws an error and crashes on the next user interaction","The listener is automatically garbage collected when the component unmounts"],correctAnswer:1,explanation:"Without cleanup, each render adds another listener without removing the old one — memory leak and duplicate calls."},{id:"lt-58",question:"What type of value can useState initial state be?",options:["Only primitive values like strings, numbers, and booleans are accepted","Only string values are supported as the initial state for useState hooks","Only objects and arrays can be used because state must be serializable","Any value: primitives, objects, arrays, null, or a lazy initializer function"],correctAnswer:3,explanation:"useState accepts any value as initial state, including a function for lazy initialization."},{id:"lt-59",question:'What does the path="*" route do in React Router v6?',options:["It matches all defined routes simultaneously and renders them in parallel","It enables advanced regex-based pattern matching for route path definitions","It creates a wildcard redirect that forwards all traffic to the root route","Acts as a catch-all for unmatched URLs (404 page)"],correctAnswer:3,explanation:`path="*" matches any URL that doesn't match other defined routes, commonly used for 404 pages.`},{id:"lt-60",question:"What is batching in React?",options:["Grouping multiple components together into a single compound component unit","React groups multiple state updates into a single re-render for performance","Splitting application code into smaller chunks that load independently","Running multiple useEffect cleanup functions in parallel during unmounting"],correctAnswer:1,explanation:"React batches state updates from the same event handler into a single re-render."}];function Tl(e=30){const t=[...Zh];for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t.slice(0,e).map((n,r)=>({...n,id:`lt-r-${r}`}))}const ie={title:"React Mastery",description:"A comprehensive course covering everything from React fundamentals to advanced patterns, performance optimization, and best practices.",modules:[Hh,$h,Vh,Qh,Jh,Kh,Xh,Yh],finalTest:Gh};function em(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}function tm({onRandomQuestion:e}){const{progress:t}=yn(),n=r=>{const o=ie.modules.find(i=>i.id===r);if(!o)return 0;const a=o.topics.filter(i=>{var s;return(s=t.topicProgress[i.id])==null?void 0:s.completed}).length;return Math.round(a/o.topics.length*100)};return p.jsxs("aside",{className:"sidebar",children:[p.jsx("div",{className:"sidebar-header",children:p.jsxs("h2",{children:["⚛️ ",ie.title]})}),p.jsxs("nav",{className:"sidebar-nav",children:[p.jsx(jr,{to:"/",end:!0,className:"nav-item",children:"🏠 Dashboard"}),p.jsxs(jr,{to:"/level-test",className:"nav-item",children:["📋 Level Evaluation",t.levelTestResult&&p.jsx("span",{className:"badge",children:em(Math.round(t.levelTestResult.score/t.levelTestResult.total*100))})]}),e&&p.jsx("button",{className:"nav-item random-q-btn",onClick:e,children:"🎲 Random Question"}),p.jsx("div",{className:"nav-section",children:p.jsx("span",{className:"nav-section-title",children:"Modules"})}),ie.modules.map((r,o)=>p.jsx("div",{className:"module-nav",children:p.jsxs(jr,{to:`/module/${r.id}`,className:"nav-item module-link",children:[p.jsxs("span",{children:[o+1,". ",r.title]}),p.jsxs("span",{className:"progress-badge",children:[n(r.id),"%"]})]})},r.id)),p.jsx("div",{className:"nav-section",children:p.jsx("span",{className:"nav-section-title",children:"Assessment"})}),p.jsxs(jr,{to:"/final-test",className:"nav-item",children:["🏆 Final Test",t.finalTestResult&&p.jsxs("span",{className:"badge",children:[t.finalTestResult.score,"/",t.finalTestResult.total]})]})]})]})}function nm(){const e=[];for(const t of ie.modules)e.push(...t.test);return e.push(...ie.finalTest),e}const Pl=nm();function Nl(){return Pl[Math.floor(Math.random()*Pl.length)]}function rm({onClose:e}){const[t,n]=C.useState(Nl),[r,o]=C.useState(null),[a,i]=C.useState(!1),[s,l]=C.useState(0),[u,m]=C.useState(!1),[f,g]=C.useState(0),x=C.useCallback(()=>{n(Nl()),o(null),i(!1),m(!1)},[]),v=w=>{a||(o(w),i(!0),w===t.correctAnswer?l(k=>k+1):(g(s),m(!0),l(0)))};return p.jsx("div",{className:"modal-backdrop",onClick:e,children:p.jsxs("div",{className:"modal-content",onClick:w=>w.stopPropagation(),children:[p.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),p.jsx("h3",{className:"rq-question",children:t.question}),!u&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"rq-options",children:t.options.map((w,k)=>{let d="option";return r===k&&(d+=" selected"),a&&(k===t.correctAnswer?d+=" correct":r===k&&(d+=" incorrect")),p.jsx("button",{className:d,onClick:()=>v(k),children:w},k)})}),a&&r===t.correctAnswer&&p.jsx("p",{className:"rq-explanation",children:t.explanation}),a&&r===t.correctAnswer&&p.jsxs("div",{className:"rq-actions",children:[p.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",s]}),p.jsx("button",{className:"btn btn-primary",onClick:x,children:"Next Random Question →"})]})]}),u&&p.jsxs("div",{className:"rq-streak-end",children:[p.jsxs("p",{children:["OK. This one is incorrect. However, that was ",p.jsx("strong",{children:f})," correct answer",f!==1?"s":""," in a row. Congrats!"]}),p.jsx("button",{className:"btn btn-primary",onClick:x,children:"Continue →"})]})]})})}function om(){const{progress:e,dispatch:t}=yn(),n=ie.modules.reduce((i,s)=>i+s.topics.length,0),r=Object.values(e.topicProgress).filter(i=>i.completed).length,o=n>0?Math.round(r/n*100):0,a=Object.values(e.moduleTestResults).filter(i=>i.passed).length;return p.jsxs("div",{className:"page dashboard",children:[p.jsx("h1",{children:ie.title}),p.jsx("p",{className:"subtitle",children:ie.description}),p.jsxs("div",{className:"stats-grid",children:[p.jsxs("div",{className:"stat-card",children:[p.jsxs("div",{className:"stat-value",children:[o,"%"]}),p.jsx("div",{className:"stat-label",children:"Overall Progress"}),p.jsx("div",{className:"progress-bar",children:p.jsx("div",{className:"progress-fill",style:{width:`${o}%`}})})]}),p.jsxs("div",{className:"stat-card",children:[p.jsxs("div",{className:"stat-value",children:[r,"/",n]}),p.jsx("div",{className:"stat-label",children:"Topics Completed"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsxs("div",{className:"stat-value",children:[a,"/",ie.modules.length]}),p.jsx("div",{className:"stat-label",children:"Module Tests Passed"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("div",{className:"stat-value",children:e.finalTestResult?`${e.finalTestResult.score}/${e.finalTestResult.total}`:"—"}),p.jsx("div",{className:"stat-label",children:"Final Test"})]})]}),!e.levelTestResult&&p.jsxs("div",{className:"cta-card",children:[p.jsx("h2",{children:"Start Here"}),p.jsx("p",{children:"Take the level evaluation test to assess your current React knowledge."}),p.jsx(Ve,{to:"/level-test",className:"btn btn-primary",children:"Take Level Test →"})]}),p.jsx("h2",{children:"Course Modules"}),p.jsx("div",{className:"modules-grid",children:ie.modules.map((i,s)=>{const l=i.topics.length,u=i.topics.filter(g=>{var x;return(x=e.topicProgress[g.id])==null?void 0:x.completed}).length,m=Math.round(u/l*100),f=e.moduleTestResults[i.id];return p.jsxs(Ve,{to:`/module/${i.id}`,className:"module-card",children:[p.jsx("div",{className:"module-number",children:s+1}),p.jsx("h3",{children:i.title}),p.jsx("p",{children:i.description}),p.jsxs("div",{className:"module-meta",children:[p.jsxs("span",{children:[l," topics"]}),p.jsxs("span",{children:[m,"% done"]}),f&&p.jsxs("span",{className:f.passed?"pass":"fail",children:["Test: ",f.score,"/",f.total]})]}),p.jsx("div",{className:"progress-bar",children:p.jsx("div",{className:"progress-fill",style:{width:`${m}%`}})})]},i.id)})}),r>0&&p.jsx("div",{className:"reset-section",children:p.jsx("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Reset all progress? This cannot be undone.")&&t({type:"RESET"})},children:"Reset All Progress"})})]})}function ss({title:e,questions:t,onComplete:n,previousResult:r,renderResult:o}){const[a,i]=C.useState({}),[s,l]=C.useState(!1),[u,m]=C.useState(r??null);if(u&&!s){const v=p.jsx("div",{className:"result-banner",children:p.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]})});return p.jsxs("div",{className:"quiz completed-quiz",children:[p.jsx("h2",{children:e}),o?o(u):v,p.jsx("button",{className:"btn",onClick:()=>{m(null),i({})},children:"Retake Test"})]})}const f=(v,w)=>{s||i(k=>({...k,[v]:w}))},g=()=>{let v=0;for(const k of t)a[k.id]===k.correctAnswer&&v++;const w={score:v,total:t.length,passed:v>=Math.ceil(t.length*.7),answers:a};m(w),l(!0),n(w)},x=t.every(v=>a[v.id]!==void 0);return p.jsxs("div",{className:"quiz",children:[p.jsx("h2",{children:e}),p.jsxs("p",{className:"quiz-progress",children:[Object.keys(a).length," of ",t.length," answered"]}),p.jsx("div",{className:"questions",children:t.map((v,w)=>p.jsxs("div",{className:`question ${s?"revealed":""}`,children:[p.jsxs("h3",{children:[w+1,". ",v.question]}),p.jsx("div",{className:"options",children:v.options.map((k,d)=>{let c="option";return a[v.id]===d&&(c+=" selected"),s&&(d===v.correctAnswer?c+=" correct":a[v.id]===d&&(c+=" incorrect")),p.jsx("button",{className:c,onClick:()=>f(v.id,d),disabled:s,children:k},d)})}),s&&p.jsx("p",{className:"explanation",children:v.explanation})]},v.id))}),!s&&p.jsx("button",{className:"btn btn-primary submit-btn",onClick:g,disabled:!x,children:"Submit Answers"}),s&&u&&(o?o(u):p.jsx("div",{className:"result-banner",children:p.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]})}))]})}function am(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}const im={Beginner:"You're just getting started with React. We recommend beginning from Module 1 and working through the entire course.",Intermediate:"You know the basics! Focus on Modules 3–5 to strengthen your understanding of effects, advanced hooks, and routing.",Advanced:"Solid foundation! Check out Modules 6–8 covering state management patterns, advanced component patterns, and performance.",Proficient:"You have strong React skills. Review Modules 7–8 for advanced patterns and best practices, then take the final test.","Highly Proficient":"Excellent React knowledge! You can go straight to the final test, or browse specific topics for a refresher."},Al={Beginner:"#ef4444",Intermediate:"#f59e0b",Advanced:"#3b82f6",Proficient:"#22c55e","Highly Proficient":"#a855f7"};function bl({result:e}){const t=Math.round(e.score/e.total*100),n=am(t),r=Al[n];return p.jsxs("div",{className:"level-result",children:[p.jsx("div",{className:"level-badge",style:{borderColor:r,color:r},children:n}),p.jsxs("p",{className:"level-score",children:[e.score,"/",e.total," (",t,"%)"]}),p.jsx("p",{className:"level-description",children:im[n]}),p.jsx("div",{className:"level-scale",children:["Beginner","Intermediate","Advanced","Proficient","Highly Proficient"].map(o=>p.jsx("div",{className:`level-dot ${o===n?"active":""}`,style:o===n?{background:Al[o]}:{},children:p.jsx("span",{className:"level-dot-label",children:o})},o))})]})}function sm(){var i;const{progress:e,dispatch:t}=yn(),[n,r]=C.useState(()=>Tl()),o=s=>{t({type:"SET_LEVEL_TEST",payload:s})},a=()=>{t({type:"RESET_LEVEL_TEST"}),r(Tl())};return p.jsxs("div",{className:"page",children:[p.jsx("h1",{children:"Level Evaluation Test"}),p.jsx("p",{className:"subtitle",children:"30 randomly selected questions to evaluate your React proficiency level. Each attempt gives you a different set of questions."}),e.levelTestResult&&p.jsxs(p.Fragment,{children:[p.jsx(bl,{result:e.levelTestResult}),p.jsx("div",{className:"retake-section",children:p.jsx("button",{className:"btn",onClick:a,children:"Retake with New Questions"})})]}),!e.levelTestResult&&p.jsx(ss,{title:"React Knowledge Assessment",questions:n,onComplete:o,renderResult:s=>p.jsx(bl,{result:s})},(i=n[0])==null?void 0:i.id)]})}function lm(){const{moduleId:e}=Zc(),t=is(),{progress:n,dispatch:r}=yn(),o=ie.modules.findIndex(u=>u.id===e),a=ie.modules[o];if(!a)return p.jsxs("div",{className:"page",children:[p.jsx("h1",{children:"Module Not Found"}),p.jsx(Ve,{to:"/",className:"btn",children:"Back to Dashboard"})]});const i=u=>{r({type:"SET_MODULE_TEST",payload:{moduleId:a.id,result:u}})},s=ie.modules[o+1],l=ie.modules[o-1];return p.jsxs("div",{className:"page module-page",children:[p.jsxs("div",{className:"module-header",children:[p.jsxs("span",{className:"module-badge",children:["Module ",o+1]}),p.jsx("h1",{children:a.title}),p.jsx("p",{className:"subtitle",children:a.description})]}),p.jsxs("div",{className:"topics-list",children:[p.jsx("h2",{children:"Topics"}),a.topics.map((u,m)=>{const f=n.topicProgress[u.id];return p.jsxs(Ve,{to:`/module/${a.id}/topic/${u.id}`,className:`topic-card ${f!=null&&f.completed?"completed":""}`,children:[p.jsx("span",{className:"topic-number",children:m+1}),p.jsx("span",{className:"topic-title",children:u.title}),(f==null?void 0:f.completed)&&p.jsx("span",{className:"check",children:"✓"})]},u.id)})]}),p.jsxs("div",{className:"module-test-section",children:[p.jsx("h2",{children:"Module Test"}),a.topics.every(u=>{var m;return(m=n.topicProgress[u.id])==null?void 0:m.completed})?p.jsx(ss,{title:`${a.title} — Test`,questions:a.test,onComplete:i,previousResult:n.moduleTestResults[a.id]}):p.jsx("p",{className:"test-locked",children:"🔒 Complete all practice tasks above to unlock the module test."})]}),p.jsxs("div",{className:"module-navigation",children:[l&&p.jsxs("button",{className:"btn",onClick:()=>t(`/module/${l.id}`),children:["← ",l.title]}),s&&p.jsxs("button",{className:"btn btn-primary",onClick:()=>t(`/module/${s.id}`),children:[s.title," →"]})]})]})}function um({content:e}){const t=cm(e);return p.jsx("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}})}function cm(e){let t=e;return t=t.replace(/```(\w*)\n([\s\S]*?)```/g,(n,r,o)=>{const a=Ll(o.trim());return`<div class="code-block"><div class="code-header"><span class="code-lang">${r||"code"}</span></div><pre><code>${a}</code></pre></div>`}),t=t.replace(/`([^`]+)`/g,(n,r)=>`<code class="inline-code">${Ll(r)}</code>`),t=t.replace(/\n(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g,(n,r,o,a)=>{const i=r.split("|").filter(l=>l.trim()).map(l=>`<th>${l.trim()}</th>`).join(""),s=a.trim().split(`
`).map(l=>`<tr>${l.split("|").filter(m=>m.trim()).map(m=>`<td>${m.trim()}</td>`).join("")}</tr>`).join("");return`<table><thead><tr>${i}</tr></thead><tbody>${s}</tbody></table>`}),t=t.replace(/^### (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^## (.+)$/gm,"<h2>$1</h2>"),t=t.replace(/^# (.+)$/gm,"<h1>$1</h1>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/^(\d+)\. (.+)$/gm,"<oli>$2</oli>"),t=t.replace(/((?:<oli>.+<\/oli>\n?)+)/g,n=>`<ol>${n.replace(/<\/?oli>/g,o=>o==="<oli>"?"<li>":"</li>")}</ol>`),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/((?:<li>.+<\/li>\n?)+)/g,"<ul>$1</ul>"),t=t.replace(/^(?!<[a-z])((?!<\/?\w).+)$/gm,"<p>$1</p>"),t=t.replace(/<p>\s*<\/p>/g,""),t}function Ll(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function dm({code:e,language:t="jsx"}){const[n,r]=C.useState(!1),o=()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return p.jsxs("div",{className:"code-block",children:[p.jsxs("div",{className:"code-header",children:[p.jsx("span",{className:"code-lang",children:t}),p.jsx("button",{className:"copy-btn",onClick:o,children:n?"✓ Copied":"Copy"})]}),p.jsx("pre",{children:p.jsx("code",{children:e})})]})}function pm({task:e,onComplete:t,completed:n}){const[r,o]=C.useState(!1),[a,i]=C.useState(!1),[s,l]=C.useState(e.starterCode),[u,m]=C.useState(!!n),f=()=>{m(!0),t()};return p.jsxs("div",{className:"task-view",children:[p.jsx("h3",{children:"📝 Practice Task"}),p.jsx("p",{className:"task-description",children:e.description}),p.jsxs("div",{className:"task-code",children:[p.jsx("h4",{children:"Your Code"}),p.jsx("textarea",{className:"code-editor",value:s,onChange:g=>l(g.target.value),rows:s.split(`
`).length+2,spellCheck:!1})]}),p.jsxs("div",{className:"task-actions",children:[p.jsx("button",{className:"btn",onClick:()=>o(!r),children:r?"Hide Hints":"Show Hints"}),p.jsx("button",{className:"btn",onClick:()=>i(!a),children:a?"Hide Solution":"Show Solution"}),!u&&p.jsx("button",{className:"btn btn-primary",onClick:f,children:"Mark as Completed ✓"}),u&&p.jsx("span",{className:"completed-badge",children:"✓ Completed"})]}),r&&p.jsxs("div",{className:"hints",children:[p.jsx("h4",{children:"Hints"}),p.jsx("ul",{children:e.hints.map((g,x)=>p.jsx("li",{children:g},x))})]}),a&&p.jsxs("div",{className:"solution",children:[p.jsx("h4",{children:"Solution"}),p.jsx(dm,{code:e.solution})]})]})}function fm(){const{moduleId:e,topicId:t}=Zc(),n=is(),{progress:r,dispatch:o}=yn(),a=ie.modules.find(g=>g.id===e);if(!a)return p.jsxs("div",{className:"page",children:[p.jsx("h1",{children:"Module Not Found"}),p.jsx(Ve,{to:"/",className:"btn",children:"Back to Dashboard"})]});const i=a.topics.findIndex(g=>g.id===t),s=a.topics[i];if(!s)return p.jsxs("div",{className:"page",children:[p.jsx("h1",{children:"Topic Not Found"}),p.jsx(Ve,{to:`/module/${a.id}`,className:"btn",children:"Back to Module"})]});const l=()=>{o({type:"COMPLETE_TOPIC",payload:{topicId:s.id}})},u=r.topicProgress[s.id],m=a.topics[i+1],f=a.topics[i-1];return p.jsxs("div",{className:"page topic-page",children:[p.jsxs("div",{className:"breadcrumb",children:[p.jsx(Ve,{to:"/",children:"Dashboard"}),p.jsx("span",{children:" / "}),p.jsx(Ve,{to:`/module/${a.id}`,children:a.title}),p.jsx("span",{children:" / "}),p.jsx("span",{children:s.title})]}),p.jsx("h1",{children:s.title}),p.jsx("div",{className:"topic-content",children:p.jsx(um,{content:s.explanation})}),p.jsx("hr",{}),p.jsx(pm,{task:s.task,onComplete:l,completed:!!(u!=null&&u.completed)},s.id),p.jsxs("div",{className:"topic-navigation",children:[f&&p.jsxs("button",{className:"btn",onClick:()=>n(`/module/${a.id}/topic/${f.id}`),children:["← ",f.title]}),m?p.jsxs("button",{className:"btn btn-primary",onClick:()=>n(`/module/${a.id}/topic/${m.id}`),children:[m.title," →"]}):p.jsx("button",{className:"btn btn-primary",onClick:()=>n(`/module/${a.id}`),children:"Back to Module →"})]})]})}function hm(){const{progress:e,dispatch:t}=yn(),n=r=>{t({type:"SET_FINAL_TEST",payload:r})};return p.jsxs("div",{className:"page",children:[p.jsx("h1",{children:"🏆 Final Test"}),p.jsx("p",{className:"subtitle",children:"This comprehensive test covers all 8 modules. You need 70% to pass and earn your certificate. Take your time!"}),p.jsx(ss,{title:"React Mastery — Final Assessment",questions:ie.finalTest,onComplete:n,previousResult:e.finalTestResult})]})}function mm(){const[e,t]=C.useState(!1);return p.jsx(Dh,{children:p.jsx(Bh,{children:p.jsxs("div",{className:"app-layout",children:[p.jsx(tm,{onRandomQuestion:()=>t(!0)}),e&&p.jsx(rm,{onClose:()=>t(!1)}),p.jsx("main",{className:"main-content",children:p.jsxs(Ph,{children:[p.jsx(Pt,{path:"/",element:p.jsx(om,{})}),p.jsx(Pt,{path:"/level-test",element:p.jsx(sm,{})}),p.jsx(Pt,{path:"/module/:moduleId",element:p.jsx(lm,{})}),p.jsx(Pt,{path:"/module/:moduleId/topic/:topicId",element:p.jsx(fm,{})}),p.jsx(Pt,{path:"/final-test",element:p.jsx(hm,{})}),p.jsx(Pt,{path:"*",element:p.jsx("div",{className:"page",children:p.jsx("h1",{children:"404 — Page Not Found"})})})]})})]})})})}ma.createRoot(document.getElementById("root")).render(p.jsx(ql.StrictMode,{children:p.jsx(mm,{})}));
