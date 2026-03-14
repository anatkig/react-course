function cd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dl={exports:{}},wo={},jl={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),pd=Symbol.for("react.portal"),hd=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),vd=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),xd=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),ui=Symbol.iterator;function bd(e){return e===null||typeof e!="object"?null:(e=ui&&e[ui]||e["@@iterator"],typeof e=="function"?e:null)}var Ul={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ml=Object.assign,Fl={};function mn(e,t,n){this.props=e,this.context=t,this.refs=Fl,this.updater=n||Ul}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ql(){}ql.prototype=mn.prototype;function pa(e,t,n){this.props=e,this.context=t,this.refs=Fl,this.updater=n||Ul}var ha=pa.prototype=new ql;ha.constructor=pa;Ml(ha,mn.prototype);ha.isPureReactComponent=!0;var ci=Array.isArray,Bl=Object.prototype.hasOwnProperty,fa={current:null},zl={key:!0,ref:!0,__self:!0,__source:!0};function _l(e,t,n){var r,o={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Bl.call(t,r)&&!zl.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:ir,type:e,key:s,ref:a,props:o,_owner:fa.current}}function kd(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function Cd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var di=/\/+/g;function _o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cd(""+e.key):t.toString(36)}function Dr(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ir:case pd:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+_o(a,0):r,ci(o)?(n="",e!=null&&(n=e.replace(di,"$&/")+"/"),Dr(o,t,n,"",function(u){return u})):o!=null&&(ma(o)&&(o=kd(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(di,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",ci(e))for(var i=0;i<e.length;i++){s=e[i];var l=r+_o(s,i);a+=Dr(s,t,n,l,o)}else if(l=bd(e),typeof l=="function")for(e=l.call(e),i=0;!(s=e.next()).done;)s=s.value,l=r+_o(s,i++),a+=Dr(s,t,n,l,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function gr(e,t,n){if(e==null)return e;var r=[],o=0;return Dr(e,r,"","",function(s){return t.call(n,s,o++)}),r}function Td(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},jr={transition:null},Rd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:jr,ReactCurrentOwner:fa};function Wl(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=mn;N.Fragment=hd;N.Profiler=md;N.PureComponent=pa;N.StrictMode=fd;N.Suspense=wd;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd;N.act=Wl;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ml({},e.props),o=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=fa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)Bl.call(t,l)&&!zl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&i!==void 0?i[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:ir,type:e.type,key:o,ref:s,props:r,_owner:a}};N.createContext=function(e){return e={$$typeof:vd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gd,_context:e},e.Consumer=e};N.createElement=_l;N.createFactory=function(e){var t=_l.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:yd,render:e}};N.isValidElement=ma;N.lazy=function(e){return{$$typeof:Sd,_payload:{_status:-1,_result:e},_init:Td}};N.memo=function(e,t){return{$$typeof:xd,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};N.unstable_act=Wl;N.useCallback=function(e,t){return ce.current.useCallback(e,t)};N.useContext=function(e){return ce.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};N.useEffect=function(e,t){return ce.current.useEffect(e,t)};N.useId=function(){return ce.current.useId()};N.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return ce.current.useMemo(e,t)};N.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};N.useRef=function(e){return ce.current.useRef(e)};N.useState=function(e){return ce.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return ce.current.useTransition()};N.version="18.3.1";jl.exports=N;var S=jl.exports;const Hl=dd(S),Ed=cd({__proto__:null,default:Hl},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad=S,Id=Symbol.for("react.element"),Pd=Symbol.for("react.fragment"),Od=Object.prototype.hasOwnProperty,Ld=Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nd={key:!0,ref:!0,__self:!0,__source:!0};function Vl(e,t,n){var r,o={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Od.call(t,r)&&!Nd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Id,type:e,key:s,ref:a,props:o,_owner:Ld.current}}wo.Fragment=Pd;wo.jsx=Vl;wo.jsxs=Vl;Dl.exports=wo;var d=Dl.exports,ms={},$l={exports:{}},be={},Ql={exports:{}},Jl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,P){var L=R.length;R.push(P);e:for(;0<L;){var $=L-1>>>1,G=R[$];if(0<o(G,P))R[$]=P,R[L]=G,L=$;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var P=R[0],L=R.pop();if(L!==P){R[0]=L;e:for(var $=0,G=R.length,fr=G>>>1;$<fr;){var kt=2*($+1)-1,zo=R[kt],Ct=kt+1,mr=R[Ct];if(0>o(zo,L))Ct<G&&0>o(mr,zo)?(R[$]=mr,R[Ct]=L,$=Ct):(R[$]=zo,R[kt]=L,$=kt);else if(Ct<G&&0>o(mr,L))R[$]=mr,R[Ct]=L,$=Ct;else break e}}return P}function o(R,P){var L=R.sortIndex-P.sortIndex;return L!==0?L:R.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var l=[],u=[],m=1,h=null,g=3,x=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(R){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=R)r(u),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(u)}}function y(R){if(w=!1,f(R),!v)if(n(l)!==null)v=!0,qo(C);else{var P=n(u);P!==null&&Bo(y,P.startTime-R)}}function C(R,P){v=!1,w&&(w=!1,p(I),I=-1),x=!0;var L=g;try{for(f(P),h=n(l);h!==null&&(!(h.expirationTime>P)||R&&!ve());){var $=h.callback;if(typeof $=="function"){h.callback=null,g=h.priorityLevel;var G=$(h.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?h.callback=G:h===n(l)&&r(l),f(P)}else r(l);h=n(l)}if(h!==null)var fr=!0;else{var kt=n(u);kt!==null&&Bo(y,kt.startTime-P),fr=!1}return fr}finally{h=null,g=L,x=!1}}var E=!1,A=null,I=-1,B=5,O=-1;function ve(){return!(e.unstable_now()-O<B)}function wn(){if(A!==null){var R=e.unstable_now();O=R;var P=!0;try{P=A(!0,R)}finally{P?xn():(E=!1,A=null)}}else E=!1}var xn;if(typeof c=="function")xn=function(){c(wn)};else if(typeof MessageChannel<"u"){var li=new MessageChannel,ud=li.port2;li.port1.onmessage=wn,xn=function(){ud.postMessage(null)}}else xn=function(){k(wn,0)};function qo(R){A=R,E||(E=!0,xn())}function Bo(R,P){I=k(function(){R(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,qo(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var L=g;g=P;try{return R()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=g;g=R;try{return P()}finally{g=L}},e.unstable_scheduleCallback=function(R,P,L){var $=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?$+L:$):L=$,R){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=L+G,R={id:m++,callback:P,priorityLevel:R,startTime:L,expirationTime:G,sortIndex:-1},L>$?(R.sortIndex=L,t(u,R),n(l)===null&&R===n(u)&&(w?(p(I),I=-1):w=!0,Bo(y,L-$))):(R.sortIndex=G,t(l,R),v||x||(v=!0,qo(C))),R},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(R){var P=g;return function(){var L=g;g=P;try{return R.apply(this,arguments)}finally{g=L}}}})(Jl);Ql.exports=Jl;var Dd=Ql.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=S,Se=Dd;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xl=new Set,_n={};function Ft(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(_n[e]=t,e=0;e<t.length;e++)Xl.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gs=Object.prototype.hasOwnProperty,Ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pi={},hi={};function Md(e){return gs.call(hi,e)?!0:gs.call(pi,e)?!1:Ud.test(e)?hi[e]=!0:(pi[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qd(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,o,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var ga=/[\-:]([a-z])/g;function va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ga,va);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ga,va);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ga,va);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ya(e,t,n,r){var o=ne.hasOwnProperty(t)?ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qd(t,n,o,r)&&(n=null),r||o===null?Md(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ye=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),_t=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),vs=Symbol.for("react.profiler"),Kl=Symbol.for("react.provider"),Gl=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),ys=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Yl=Symbol.for("react.offscreen"),fi=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=fi&&e[fi]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Wo;function In(e){if(Wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||""}return`
`+Wo+e}var Ho=!1;function Vo(e,t){if(!e||Ho)return"";Ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=r.stack.split(`
`),a=o.length-1,i=s.length-1;1<=a&&0<=i&&o[a]!==s[i];)i--;for(;1<=a&&0<=i;a--,i--)if(o[a]!==s[i]){if(a!==1||i!==1)do if(a--,i--,0>i||o[a]!==s[i]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=i);break}}}finally{Ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function Bd(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Vo(e.type,!1),e;case 11:return e=Vo(e.type.render,!1),e;case 1:return e=Vo(e.type,!0),e;default:return""}}function xs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case _t:return"Portal";case vs:return"Profiler";case wa:return"StrictMode";case ys:return"Suspense";case ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gl:return(e.displayName||"Context")+".Consumer";case Kl:return(e._context.displayName||"Context")+".Provider";case xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sa:return t=e.displayName||null,t!==null?t:xs(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return xs(e(t))}catch{}}return null}function zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xs(t);case 8:return t===wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _d(e){var t=Zl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=_d(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ss(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tu(e,t){t=t.checked,t!=null&&ya(e,"checked",t,!1)}function bs(e,t){tu(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ks(e,t.type,n):t.hasOwnProperty("defaultValue")&&ks(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ks(e,t,n){(t!=="number"||$r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Cs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Pn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function nu(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ru(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ts(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ru(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,ou=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wd=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function su(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function au(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=su(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rs(e,t){if(t){if(Hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function Es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,tn=null,nn=null;function wi(e){if(e=cr(e)){if(typeof Is!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Co(t),Is(e.stateNode,e.type,t))}}function iu(e){tn?nn?nn.push(e):nn=[e]:tn=e}function lu(){if(tn){var e=tn,t=nn;if(nn=tn=null,wi(e),t)for(e=0;e<t.length;e++)wi(t[e])}}function uu(e,t){return e(t)}function cu(){}var $o=!1;function du(e,t,n){if($o)return e(t,n);$o=!0;try{return uu(e,t,n)}finally{$o=!1,(tn!==null||nn!==null)&&(cu(),lu())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Ps=!1;if(Je)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Ps=!1}function Vd(e,t,n,r,o,s,a,i,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Dn=!1,Qr=null,Jr=!1,Os=null,$d={onError:function(e){Dn=!0,Qr=e}};function Qd(e,t,n,r,o,s,a,i,l){Dn=!1,Qr=null,Vd.apply($d,arguments)}function Jd(e,t,n,r,o,s,a,i,l){if(Qd.apply(this,arguments),Dn){if(Dn){var u=Qr;Dn=!1,Qr=null}else throw Error(b(198));Jr||(Jr=!0,Os=u)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xi(e){if(qt(e)!==e)throw Error(b(188))}function Xd(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return xi(o),e;if(s===r)return xi(o),t;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=o,r=s;else{for(var a=!1,i=o.child;i;){if(i===n){a=!0,n=o,r=s;break}if(i===r){a=!0,r=o,n=s;break}i=i.sibling}if(!a){for(i=s.child;i;){if(i===n){a=!0,n=s,r=o;break}if(i===r){a=!0,r=s,n=o;break}i=i.sibling}if(!a)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function hu(e){return e=Xd(e),e!==null?fu(e):null}function fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fu(e);if(t!==null)return t;e=e.sibling}return null}var mu=Se.unstable_scheduleCallback,Si=Se.unstable_cancelCallback,Kd=Se.unstable_shouldYield,Gd=Se.unstable_requestPaint,Q=Se.unstable_now,Yd=Se.unstable_getCurrentPriorityLevel,ka=Se.unstable_ImmediatePriority,gu=Se.unstable_UserBlockingPriority,Xr=Se.unstable_NormalPriority,Zd=Se.unstable_LowPriority,vu=Se.unstable_IdlePriority,xo=null,Be=null;function ep(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:rp,tp=Math.log,np=Math.LN2;function rp(e){return e>>>=0,e===0?32:31-(tp(e)/np|0)|0}var xr=64,Sr=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var i=a&~o;i!==0?r=On(i):(s&=a,s!==0&&(r=On(s)))}else a=n&~o,a!==0?r=On(a):s!==0&&(r=On(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),o=1<<n,r|=e[n],t&=~o;return r}function op(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-De(s),i=1<<a,l=o[a];l===-1?(!(i&n)||i&r)&&(o[a]=op(i,t)):l<=t&&(e.expiredLanes|=i),s&=~i}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function ap(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-De(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Ca(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var j=0;function wu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xu,Ta,Su,bu,ku,Ns=!1,br=[],it=null,lt=null,ut=null,Vn=new Map,$n=new Map,nt=[],ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bi(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function kn(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=cr(t),t!==null&&Ta(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function lp(e,t,n,r,o){switch(t){case"focusin":return it=kn(it,e,t,n,r,o),!0;case"dragenter":return lt=kn(lt,e,t,n,r,o),!0;case"mouseover":return ut=kn(ut,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return Vn.set(s,kn(Vn.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,$n.set(s,kn($n.get(s)||null,e,t,n,r,o)),!0}return!1}function Cu(e){var t=At(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=pu(n),t!==null){e.blockedOn=t,ku(e.priority,function(){Su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);As=r,n.target.dispatchEvent(r),As=null}else return t=cr(n),t!==null&&Ta(t),e.blockedOn=n,!1;t.shift()}return!0}function ki(e,t,n){Ur(e)&&n.delete(t)}function up(){Ns=!1,it!==null&&Ur(it)&&(it=null),lt!==null&&Ur(lt)&&(lt=null),ut!==null&&Ur(ut)&&(ut=null),Vn.forEach(ki),$n.forEach(ki)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ns||(Ns=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,up)))}function Qn(e){function t(o){return Cn(o,e)}if(0<br.length){Cn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&Cn(it,e),lt!==null&&Cn(lt,e),ut!==null&&Cn(ut,e),Vn.forEach(t),$n.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Cu(n),n.blockedOn===null&&nt.shift()}var rn=Ye.ReactCurrentBatchConfig,Gr=!0;function cp(e,t,n,r){var o=j,s=rn.transition;rn.transition=null;try{j=1,Ra(e,t,n,r)}finally{j=o,rn.transition=s}}function dp(e,t,n,r){var o=j,s=rn.transition;rn.transition=null;try{j=4,Ra(e,t,n,r)}finally{j=o,rn.transition=s}}function Ra(e,t,n,r){if(Gr){var o=Ds(e,t,n,r);if(o===null)rs(e,t,r,Yr,n),bi(e,r);else if(lp(o,e,t,n,r))r.stopPropagation();else if(bi(e,r),t&4&&-1<ip.indexOf(e)){for(;o!==null;){var s=cr(o);if(s!==null&&xu(s),s=Ds(e,t,n,r),s===null&&rs(e,t,r,Yr,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else rs(e,t,r,null,n)}}var Yr=null;function Ds(e,t,n,r){if(Yr=null,e=ba(r),e=At(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yr=e,null}function Tu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yd()){case ka:return 1;case gu:return 4;case Xr:case Zd:return 16;case vu:return 536870912;default:return 16}default:return 16}}var ot=null,Ea=null,Mr=null;function Ru(){if(Mr)return Mr;var e,t=Ea,n=t.length,r,o="value"in ot?ot.value:ot.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[s-r];r++);return Mr=o.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Ci(){return!1}function ke(e){function t(n,r,o,s,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kr:Ci,this.isPropagationStopped=Ci,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=ke(gn),ur=W({},gn,{view:0,detail:0}),pp=ke(ur),Jo,Xo,Tn,So=W({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(Jo=e.screenX-Tn.screenX,Xo=e.screenY-Tn.screenY):Xo=Jo=0,Tn=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Ti=ke(So),hp=W({},So,{dataTransfer:0}),fp=ke(hp),mp=W({},ur,{relatedTarget:0}),Ko=ke(mp),gp=W({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=ke(gp),yp=W({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wp=ke(yp),xp=W({},gn,{data:0}),Ri=ke(xp),Sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kp[e])?!!t[e]:!1}function Ia(){return Cp}var Tp=W({},ur,{key:function(e){if(e.key){var t=Sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=ke(Tp),Ep=W({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ei=ke(Ep),Ap=W({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),Ip=ke(Ap),Pp=W({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Op=ke(Pp),Lp=W({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Np=ke(Lp),Dp=[9,13,27,32],Pa=Je&&"CompositionEvent"in window,jn=null;Je&&"documentMode"in document&&(jn=document.documentMode);var jp=Je&&"TextEvent"in window&&!jn,Eu=Je&&(!Pa||jn&&8<jn&&11>=jn),Ai=" ",Ii=!1;function Au(e,t){switch(e){case"keyup":return Dp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Up(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(Ii=!0,Ai);case"textInput":return e=t.data,e===Ai&&Ii?null:e;default:return null}}function Mp(e,t){if(Ht)return e==="compositionend"||!Pa&&Au(e,t)?(e=Ru(),Mr=Ea=ot=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var Fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fp[e.type]:t==="textarea"}function Pu(e,t,n,r){iu(r),t=Zr(t,"onChange"),0<t.length&&(n=new Aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,Jn=null;function qp(e){zu(e,0)}function bo(e){var t=Qt(e);if(eu(t))return e}function Bp(e,t){if(e==="change")return t}var Ou=!1;if(Je){var Go;if(Je){var Yo="oninput"in document;if(!Yo){var Oi=document.createElement("div");Oi.setAttribute("oninput","return;"),Yo=typeof Oi.oninput=="function"}Go=Yo}else Go=!1;Ou=Go&&(!document.documentMode||9<document.documentMode)}function Li(){Un&&(Un.detachEvent("onpropertychange",Lu),Jn=Un=null)}function Lu(e){if(e.propertyName==="value"&&bo(Jn)){var t=[];Pu(t,Jn,e,ba(e)),du(qp,t)}}function zp(e,t,n){e==="focusin"?(Li(),Un=t,Jn=n,Un.attachEvent("onpropertychange",Lu)):e==="focusout"&&Li()}function _p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(Jn)}function Wp(e,t){if(e==="click")return bo(t)}function Hp(e,t){if(e==="input"||e==="change")return bo(t)}function Vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:Vp;function Xn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!gs.call(t,o)||!Ue(e[o],t[o]))return!1}return!0}function Ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Di(e,t){var n=Ni(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ni(n)}}function Nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Du(){for(var e=window,t=$r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$r(e.document)}return t}function Oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $p(e){var t=Du(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nu(n.ownerDocument.documentElement,n)){if(r!==null&&Oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Di(n,s);var a=Di(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qp=Je&&"documentMode"in document&&11>=document.documentMode,Vt=null,js=null,Mn=null,Us=!1;function ji(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Us||Vt==null||Vt!==$r(r)||(r=Vt,"selectionStart"in r&&Oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Xn(Mn,r)||(Mn=r,r=Zr(js,"onSelect"),0<r.length&&(t=new Aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},Zo={},ju={};Je&&(ju=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function ko(e){if(Zo[e])return Zo[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ju)return Zo[e]=t[n];return e}var Uu=ko("animationend"),Mu=ko("animationiteration"),Fu=ko("animationstart"),qu=ko("transitionend"),Bu=new Map,Ui="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){Bu.set(e,t),Ft(t,[e])}for(var es=0;es<Ui.length;es++){var ts=Ui[es],Jp=ts.toLowerCase(),Xp=ts[0].toUpperCase()+ts.slice(1);yt(Jp,"on"+Xp)}yt(Uu,"onAnimationEnd");yt(Mu,"onAnimationIteration");yt(Fu,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(qu,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Mi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jd(r,t,void 0,e),e.currentTarget=null}function zu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var i=r[a],l=i.instance,u=i.currentTarget;if(i=i.listener,l!==s&&o.isPropagationStopped())break e;Mi(o,i,u),s=l}else for(a=0;a<r.length;a++){if(i=r[a],l=i.instance,u=i.currentTarget,i=i.listener,l!==s&&o.isPropagationStopped())break e;Mi(o,i,u),s=l}}}if(Jr)throw e=Os,Jr=!1,Os=null,e}function M(e,t){var n=t[zs];n===void 0&&(n=t[zs]=new Set);var r=e+"__bubble";n.has(r)||(_u(t,e,2,!1),n.add(r))}function ns(e,t,n){var r=0;t&&(r|=4),_u(n,e,r,t)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[Tr]){e[Tr]=!0,Xl.forEach(function(n){n!=="selectionchange"&&(Kp.has(n)||ns(n,!1,e),ns(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tr]||(t[Tr]=!0,ns("selectionchange",!1,t))}}function _u(e,t,n,r){switch(Tu(t)){case 1:var o=cp;break;case 4:o=dp;break;default:o=Ra}n=o.bind(null,t,n,e),o=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function rs(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;i!==null;){if(a=At(i),a===null)return;if(l=a.tag,l===5||l===6){r=s=a;continue e}i=i.parentNode}}r=r.return}du(function(){var u=s,m=ba(n),h=[];e:{var g=Bu.get(e);if(g!==void 0){var x=Aa,v=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":x=Rp;break;case"focusin":v="focus",x=Ko;break;case"focusout":v="blur",x=Ko;break;case"beforeblur":case"afterblur":x=Ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ti;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ip;break;case Uu:case Mu:case Fu:x=vp;break;case qu:x=Op;break;case"scroll":x=pp;break;case"wheel":x=Np;break;case"copy":case"cut":case"paste":x=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ei}var w=(t&4)!==0,k=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,p!==null&&(y=Hn(c,p),y!=null&&w.push(Gn(c,y,f)))),k)break;c=c.return}0<w.length&&(g=new x(g,v,null,n,m),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==As&&(v=n.relatedTarget||n.fromElement)&&(At(v)||v[Xe]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?At(v):null,v!==null&&(k=qt(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(w=Ti,y="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ei,y="onPointerLeave",p="onPointerEnter",c="pointer"),k=x==null?g:Qt(x),f=v==null?g:Qt(v),g=new w(y,c+"leave",x,n,m),g.target=k,g.relatedTarget=f,y=null,At(m)===u&&(w=new w(p,c+"enter",v,n,m),w.target=f,w.relatedTarget=k,y=w),k=y,x&&v)t:{for(w=x,p=v,c=0,f=w;f;f=zt(f))c++;for(f=0,y=p;y;y=zt(y))f++;for(;0<c-f;)w=zt(w),c--;for(;0<f-c;)p=zt(p),f--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break t;w=zt(w),p=zt(p)}w=null}else w=null;x!==null&&Fi(h,g,x,w,!1),v!==null&&k!==null&&Fi(h,k,v,w,!0)}}e:{if(g=u?Qt(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var C=Bp;else if(Pi(g))if(Ou)C=Hp;else{C=_p;var E=zp}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Wp);if(C&&(C=C(e,u))){Pu(h,C,n,m);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&ks(g,"number",g.value)}switch(E=u?Qt(u):window,e){case"focusin":(Pi(E)||E.contentEditable==="true")&&(Vt=E,js=u,Mn=null);break;case"focusout":Mn=js=Vt=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,ji(h,n,m);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":ji(h,n,m)}var A;if(Pa)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ht?Au(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Eu&&n.locale!=="ko"&&(Ht||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ht&&(A=Ru()):(ot=m,Ea="value"in ot?ot.value:ot.textContent,Ht=!0)),E=Zr(u,I),0<E.length&&(I=new Ri(I,e,null,n,m),h.push({event:I,listeners:E}),A?I.data=A:(A=Iu(n),A!==null&&(I.data=A)))),(A=jp?Up(e,n):Mp(e,n))&&(u=Zr(u,"onBeforeInput"),0<u.length&&(m=new Ri("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=A))}zu(h,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Hn(e,n),s!=null&&r.unshift(Gn(e,s,o)),s=Hn(e,t),s!=null&&r.push(Gn(e,s,o))),e=e.return}return r}function zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fi(e,t,n,r,o){for(var s=t._reactName,a=[];n!==null&&n!==r;){var i=n,l=i.alternate,u=i.stateNode;if(l!==null&&l===r)break;i.tag===5&&u!==null&&(i=u,o?(l=Hn(n,s),l!=null&&a.unshift(Gn(n,l,i))):o||(l=Hn(n,s),l!=null&&a.push(Gn(n,l,i)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Gp=/\r\n?/g,Yp=/\u0000|\uFFFD/g;function qi(e){return(typeof e=="string"?e:""+e).replace(Gp,`
`).replace(Yp,"")}function Rr(e,t,n){if(t=qi(t),qi(e)!==t&&n)throw Error(b(425))}function eo(){}var Ms=null,Fs=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bs=typeof setTimeout=="function"?setTimeout:void 0,Zp=typeof clearTimeout=="function"?clearTimeout:void 0,Bi=typeof Promise=="function"?Promise:void 0,eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Bi<"u"?function(e){return Bi.resolve(null).then(e).catch(th)}:Bs;function th(e){setTimeout(function(){throw e})}function os(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Qn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),qe="__reactFiber$"+vn,Yn="__reactProps$"+vn,Xe="__reactContainer$"+vn,zs="__reactEvents$"+vn,nh="__reactListeners$"+vn,rh="__reactHandles$"+vn;function At(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zi(e);e!==null;){if(n=e[qe])return n;e=zi(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[qe]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Co(e){return e[Yn]||null}var _s=[],Jt=-1;function wt(e){return{current:e}}function F(e){0>Jt||(e.current=_s[Jt],_s[Jt]=null,Jt--)}function U(e,t){Jt++,_s[Jt]=e.current,e.current=t}var vt={},ie=wt(vt),fe=wt(!1),Nt=vt;function ln(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function me(e){return e=e.childContextTypes,e!=null}function to(){F(fe),F(ie)}function _i(e,t,n){if(ie.current!==vt)throw Error(b(168));U(ie,t),U(fe,n)}function Wu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(b(108,zd(e)||"Unknown",o));return W({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Nt=ie.current,U(ie,e),U(fe,fe.current),!0}function Wi(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Wu(e,t,Nt),r.__reactInternalMemoizedMergedChildContext=e,F(fe),F(ie),U(ie,e)):F(fe),U(fe,n)}var We=null,To=!1,ss=!1;function Hu(e){We===null?We=[e]:We.push(e)}function oh(e){To=!0,Hu(e)}function xt(){if(!ss&&We!==null){ss=!0;var e=0,t=j;try{var n=We;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,To=!1}catch(o){throw We!==null&&(We=We.slice(e+1)),mu(ka,xt),o}finally{j=t,ss=!1}}return null}var Xt=[],Kt=0,ro=null,oo=0,Ce=[],Te=0,Dt=null,He=1,Ve="";function Tt(e,t){Xt[Kt++]=oo,Xt[Kt++]=ro,ro=e,oo=t}function Vu(e,t,n){Ce[Te++]=He,Ce[Te++]=Ve,Ce[Te++]=Dt,Dt=e;var r=He;e=Ve;var o=32-De(r)-1;r&=~(1<<o),n+=1;var s=32-De(t)+o;if(30<s){var a=o-o%5;s=(r&(1<<a)-1).toString(32),r>>=a,o-=a,He=1<<32-De(t)+o|n<<o|r,Ve=s+e}else He=1<<s|n<<o|r,Ve=e}function La(e){e.return!==null&&(Tt(e,1),Vu(e,1,0))}function Na(e){for(;e===ro;)ro=Xt[--Kt],Xt[Kt]=null,oo=Xt[--Kt],Xt[Kt]=null;for(;e===Dt;)Dt=Ce[--Te],Ce[Te]=null,Ve=Ce[--Te],Ce[Te]=null,He=Ce[--Te],Ce[Te]=null}var xe=null,we=null,q=!1,Ne=null;function $u(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hi(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,we=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:He,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,we=null,!0):!1;default:return!1}}function Ws(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hs(e){if(q){var t=we;if(t){var n=t;if(!Hi(e,t)){if(Ws(e))throw Error(b(418));t=ct(n.nextSibling);var r=xe;t&&Hi(e,t)?$u(r,n):(e.flags=e.flags&-4097|2,q=!1,xe=e)}}else{if(Ws(e))throw Error(b(418));e.flags=e.flags&-4097|2,q=!1,xe=e}}}function Vi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Er(e){if(e!==xe)return!1;if(!q)return Vi(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=we)){if(Ws(e))throw Qu(),Error(b(418));for(;t;)$u(e,t),t=ct(t.nextSibling)}if(Vi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=xe?ct(e.stateNode.nextSibling):null;return!0}function Qu(){for(var e=we;e;)e=ct(e.nextSibling)}function un(){we=xe=null,q=!1}function Da(e){Ne===null?Ne=[e]:Ne.push(e)}var sh=Ye.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var i=o.refs;a===null?delete i[s]:i[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Ar(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $i(e){var t=e._init;return t(e._payload)}function Ju(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=ft(p,c),p.index=0,p.sibling=null,p}function s(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function i(p,c,f,y){return c===null||c.tag!==6?(c=ps(f,p.mode,y),c.return=p,c):(c=o(c,f),c.return=p,c)}function l(p,c,f,y){var C=f.type;return C===Wt?m(p,c,f.props.children,y,f.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===et&&$i(C)===c.type)?(y=o(c,f.props),y.ref=Rn(p,c,f),y.return=p,y):(y=Vr(f.type,f.key,f.props,null,p.mode,y),y.ref=Rn(p,c,f),y.return=p,y)}function u(p,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=hs(f,p.mode,y),c.return=p,c):(c=o(c,f.children||[]),c.return=p,c)}function m(p,c,f,y,C){return c===null||c.tag!==7?(c=Lt(f,p.mode,y,C),c.return=p,c):(c=o(c,f),c.return=p,c)}function h(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ps(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vr:return f=Vr(c.type,c.key,c.props,null,p.mode,f),f.ref=Rn(p,null,c),f.return=p,f;case _t:return c=hs(c,p.mode,f),c.return=p,c;case et:var y=c._init;return h(p,y(c._payload),f)}if(Pn(c)||Sn(c))return c=Lt(c,p.mode,f,null),c.return=p,c;Ar(p,c)}return null}function g(p,c,f,y){var C=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:i(p,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:return f.key===C?l(p,c,f,y):null;case _t:return f.key===C?u(p,c,f,y):null;case et:return C=f._init,g(p,c,C(f._payload),y)}if(Pn(f)||Sn(f))return C!==null?null:m(p,c,f,y,null);Ar(p,f)}return null}function x(p,c,f,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(f)||null,i(c,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vr:return p=p.get(y.key===null?f:y.key)||null,l(c,p,y,C);case _t:return p=p.get(y.key===null?f:y.key)||null,u(c,p,y,C);case et:var E=y._init;return x(p,c,f,E(y._payload),C)}if(Pn(y)||Sn(y))return p=p.get(f)||null,m(c,p,y,C,null);Ar(c,y)}return null}function v(p,c,f,y){for(var C=null,E=null,A=c,I=c=0,B=null;A!==null&&I<f.length;I++){A.index>I?(B=A,A=null):B=A.sibling;var O=g(p,A,f[I],y);if(O===null){A===null&&(A=B);break}e&&A&&O.alternate===null&&t(p,A),c=s(O,c,I),E===null?C=O:E.sibling=O,E=O,A=B}if(I===f.length)return n(p,A),q&&Tt(p,I),C;if(A===null){for(;I<f.length;I++)A=h(p,f[I],y),A!==null&&(c=s(A,c,I),E===null?C=A:E.sibling=A,E=A);return q&&Tt(p,I),C}for(A=r(p,A);I<f.length;I++)B=x(A,p,I,f[I],y),B!==null&&(e&&B.alternate!==null&&A.delete(B.key===null?I:B.key),c=s(B,c,I),E===null?C=B:E.sibling=B,E=B);return e&&A.forEach(function(ve){return t(p,ve)}),q&&Tt(p,I),C}function w(p,c,f,y){var C=Sn(f);if(typeof C!="function")throw Error(b(150));if(f=C.call(f),f==null)throw Error(b(151));for(var E=C=null,A=c,I=c=0,B=null,O=f.next();A!==null&&!O.done;I++,O=f.next()){A.index>I?(B=A,A=null):B=A.sibling;var ve=g(p,A,O.value,y);if(ve===null){A===null&&(A=B);break}e&&A&&ve.alternate===null&&t(p,A),c=s(ve,c,I),E===null?C=ve:E.sibling=ve,E=ve,A=B}if(O.done)return n(p,A),q&&Tt(p,I),C;if(A===null){for(;!O.done;I++,O=f.next())O=h(p,O.value,y),O!==null&&(c=s(O,c,I),E===null?C=O:E.sibling=O,E=O);return q&&Tt(p,I),C}for(A=r(p,A);!O.done;I++,O=f.next())O=x(A,p,I,O.value,y),O!==null&&(e&&O.alternate!==null&&A.delete(O.key===null?I:O.key),c=s(O,c,I),E===null?C=O:E.sibling=O,E=O);return e&&A.forEach(function(wn){return t(p,wn)}),q&&Tt(p,I),C}function k(p,c,f,y){if(typeof f=="object"&&f!==null&&f.type===Wt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:e:{for(var C=f.key,E=c;E!==null;){if(E.key===C){if(C=f.type,C===Wt){if(E.tag===7){n(p,E.sibling),c=o(E,f.props.children),c.return=p,p=c;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===et&&$i(C)===E.type){n(p,E.sibling),c=o(E,f.props),c.ref=Rn(p,E,f),c.return=p,p=c;break e}n(p,E);break}else t(p,E);E=E.sibling}f.type===Wt?(c=Lt(f.props.children,p.mode,y,f.key),c.return=p,p=c):(y=Vr(f.type,f.key,f.props,null,p.mode,y),y.ref=Rn(p,c,f),y.return=p,p=y)}return a(p);case _t:e:{for(E=f.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=o(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=hs(f,p.mode,y),c.return=p,p=c}return a(p);case et:return E=f._init,k(p,c,E(f._payload),y)}if(Pn(f))return v(p,c,f,y);if(Sn(f))return w(p,c,f,y);Ar(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,f),c.return=p,p=c):(n(p,c),c=ps(f,p.mode,y),c.return=p,p=c),a(p)):n(p,c)}return k}var cn=Ju(!0),Xu=Ju(!1),so=wt(null),ao=null,Gt=null,ja=null;function Ua(){ja=Gt=ao=null}function Ma(e){var t=so.current;F(so),e._currentValue=t}function Vs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){ao=e,ja=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},Gt===null){if(ao===null)throw Error(b(308));Gt=e,ao.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return t}var It=null;function Fa(e){It===null?It=[e]:It.push(e)}function Ku(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Fa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ke(e,n)}return o=r.interleaved,o===null?(t.next=t,Fa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ke(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ca(e,n)}}function Qi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var o=e.updateQueue;tt=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var l=i,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var m=e.alternate;m!==null&&(m=m.updateQueue,i=m.lastBaseUpdate,i!==a&&(i===null?m.firstBaseUpdate=u:i.next=u,m.lastBaseUpdate=l))}if(s!==null){var h=o.baseState;a=0,m=u=l=null,i=s;do{var g=i.lane,x=i.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var v=e,w=i;switch(g=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(x,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(x,h,g):v,g==null)break e;h=W({},h,g);break e;case 2:tt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[i]:g.push(i))}else x={eventTime:x,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},m===null?(u=m=x,l=h):m=m.next=x,a|=g;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;g=i,i=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(l=h),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);Ut|=a,e.lanes=a,e.memoizedState=h}}function Ji(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var dr={},ze=wt(dr),Zn=wt(dr),er=wt(dr);function Pt(e){if(e===dr)throw Error(b(174));return e}function Ba(e,t){switch(U(er,t),U(Zn,e),U(ze,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ts(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ts(t,e)}F(ze),U(ze,t)}function dn(){F(ze),F(Zn),F(er)}function Yu(e){Pt(er.current);var t=Pt(ze.current),n=Ts(t,e.type);t!==n&&(U(Zn,e),U(ze,n))}function za(e){Zn.current===e&&(F(ze),F(Zn))}var z=wt(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var as=[];function _a(){for(var e=0;e<as.length;e++)as[e]._workInProgressVersionPrimary=null;as.length=0}var Br=Ye.ReactCurrentDispatcher,is=Ye.ReactCurrentBatchConfig,jt=0,_=null,X=null,Y=null,uo=!1,Fn=!1,tr=0,ah=0;function re(){throw Error(b(321))}function Wa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Ha(e,t,n,r,o,s){if(jt=s,_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?ch:dh,e=n(r,o),Fn){s=0;do{if(Fn=!1,tr=0,25<=s)throw Error(b(301));s+=1,Y=X=null,t.updateQueue=null,Br.current=ph,e=n(r,o)}while(Fn)}if(Br.current=co,t=X!==null&&X.next!==null,jt=0,Y=X=_=null,uo=!1,t)throw Error(b(300));return e}function Va(){var e=tr!==0;return tr=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?_.memoizedState=Y=e:Y=Y.next=e,Y}function Ie(){if(X===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Y===null?_.memoizedState:Y.next;if(t!==null)Y=t,X=e;else{if(e===null)throw Error(b(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Y===null?_.memoizedState=Y=e:Y=Y.next=e}return Y}function nr(e,t){return typeof t=="function"?t(e):t}function ls(e){var t=Ie(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=X,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var i=a=null,l=null,u=s;do{var m=u.lane;if((jt&m)===m)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(i=l=h,a=r):l=l.next=h,_.lanes|=m,Ut|=m}u=u.next}while(u!==null&&u!==s);l===null?a=r:l.next=i,Ue(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,_.lanes|=s,Ut|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function us(e){var t=Ie(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do s=e(s,a.action),a=a.next;while(a!==o);Ue(s,t.memoizedState)||(he=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Zu(){}function ec(e,t){var n=_,r=Ie(),o=t(),s=!Ue(r.memoizedState,o);if(s&&(r.memoizedState=o,he=!0),r=r.queue,$a(rc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,rr(9,nc.bind(null,n,r,o,t),void 0,null),Z===null)throw Error(b(349));jt&30||tc(n,t,o)}return o}function tc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_.updateQueue,t===null?(t={lastEffect:null,stores:null},_.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nc(e,t,n,r){t.value=n,t.getSnapshot=r,oc(t)&&sc(e)}function rc(e,t,n){return n(function(){oc(t)&&sc(e)})}function oc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function sc(e){var t=Ke(e,1);t!==null&&je(t,e,1,-1)}function Xi(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=uh.bind(null,_,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_.updateQueue,t===null?(t={lastEffect:null,stores:null},_.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ac(){return Ie().memoizedState}function zr(e,t,n,r){var o=Fe();_.flags|=e,o.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var o=Ie();r=r===void 0?null:r;var s=void 0;if(X!==null){var a=X.memoizedState;if(s=a.destroy,r!==null&&Wa(r,a.deps)){o.memoizedState=rr(t,n,s,r);return}}_.flags|=e,o.memoizedState=rr(1|t,n,s,r)}function Ki(e,t){return zr(8390656,8,e,t)}function $a(e,t){return Ro(2048,8,e,t)}function ic(e,t){return Ro(4,2,e,t)}function lc(e,t){return Ro(4,4,e,t)}function uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cc(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,uc.bind(null,t,e),n)}function Qa(){}function dc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hc(e,t,n){return jt&21?(Ue(n,t)||(n=yu(),_.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function ih(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=is.transition;is.transition={};try{e(!1),t()}finally{j=n,is.transition=r}}function fc(){return Ie().memoizedState}function lh(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e))gc(t,n);else if(n=Ku(e,t,n,r),n!==null){var o=ue();je(n,e,r,o),vc(n,t,r)}}function uh(e,t,n){var r=ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))gc(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,i=s(a,n);if(o.hasEagerState=!0,o.eagerState=i,Ue(i,a)){var l=t.interleaved;l===null?(o.next=o,Fa(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Ku(e,t,o,r),n!==null&&(o=ue(),je(n,e,r,o),vc(n,t,r))}}function mc(e){var t=e.alternate;return e===_||t!==null&&t===_}function gc(e,t){Fn=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ca(e,n)}}var co={readContext:Ae,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},ch={readContext:Ae,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ki,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lh.bind(null,_,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Xi,useDebugValue:Qa,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Xi(!1),t=e[0];return e=ih.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_,o=Fe();if(q){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),Z===null)throw Error(b(349));jt&30||tc(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Ki(rc.bind(null,r,s,e),[e]),r.flags|=2048,rr(9,nc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Fe(),t=Z.identifierPrefix;if(q){var n=Ve,r=He;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ah++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dh={readContext:Ae,useCallback:dc,useContext:Ae,useEffect:$a,useImperativeHandle:cc,useInsertionEffect:ic,useLayoutEffect:lc,useMemo:pc,useReducer:ls,useRef:ac,useState:function(){return ls(nr)},useDebugValue:Qa,useDeferredValue:function(e){var t=Ie();return hc(t,X.memoizedState,e)},useTransition:function(){var e=ls(nr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:ec,useId:fc,unstable_isNewReconciler:!1},ph={readContext:Ae,useCallback:dc,useContext:Ae,useEffect:$a,useImperativeHandle:cc,useInsertionEffect:ic,useLayoutEffect:lc,useMemo:pc,useReducer:us,useRef:ac,useState:function(){return us(nr)},useDebugValue:Qa,useDeferredValue:function(e){var t=Ie();return X===null?t.memoizedState=e:hc(t,X.memoizedState,e)},useTransition:function(){var e=us(nr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:ec,useId:fc,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $s(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),o=ht(e),s=Qe(r,o);s.payload=t,n!=null&&(s.callback=n),t=dt(e,s,o),t!==null&&(je(t,e,o,r),qr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),o=ht(e),s=Qe(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=dt(e,s,o),t!==null&&(je(t,e,o,r),qr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ht(e),o=Qe(n,r);o.tag=2,t!=null&&(o.callback=t),t=dt(e,o,r),t!==null&&(je(t,e,r,n),qr(t,e,r))}};function Gi(e,t,n,r,o,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(o,s):!0}function yc(e,t,n){var r=!1,o=vt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ae(s):(o=me(t)?Nt:ie.current,r=t.contextTypes,s=(r=r!=null)?ln(e,o):vt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Yi(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Qs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},qa(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=Ae(s):(s=me(t)?Nt:ie.current,o.context=ln(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&($s(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Eo.enqueueReplaceState(o,o.state,null),io(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Bd(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Js(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hh=typeof WeakMap=="function"?WeakMap:Map;function wc(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ho||(ho=!0,oa=r),Js(e,t)},n}function xc(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Js(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Js(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Zi(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Eh.bind(null,e,t,n),t.then(e,e))}function el(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tl(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var fh=Ye.ReactCurrentOwner,he=!1;function le(e,t,n,r){t.child=e===null?Xu(t,null,n,r):cn(t,e.child,n,r)}function nl(e,t,n,r,o){n=n.render;var s=t.ref;return on(t,o),r=Ha(e,t,n,r,s,o),n=Va(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ge(e,t,o)):(q&&n&&La(t),t.flags|=1,le(e,t,r,o),t.child)}function rl(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!ti(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Sc(e,t,s,r,o)):(e=Vr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(a,r)&&e.ref===t.ref)return Ge(e,t,o)}return t.flags|=1,e=ft(s,r),e.ref=t.ref,e.return=t,t.child=e}function Sc(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(Xn(s,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ge(e,t,o)}return Xs(e,t,n,r,o)}function bc(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Zt,ye),ye|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Zt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,U(Zt,ye),ye|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,U(Zt,ye),ye|=r;return le(e,t,o,n),t.child}function kc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xs(e,t,n,r,o){var s=me(n)?Nt:ie.current;return s=ln(t,s),on(t,o),n=Ha(e,t,n,r,s,o),r=Va(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ge(e,t,o)):(q&&r&&La(t),t.flags|=1,le(e,t,n,o),t.child)}function ol(e,t,n,r,o){if(me(n)){var s=!0;no(t)}else s=!1;if(on(t,o),t.stateNode===null)_r(e,t),yc(t,n,r),Qs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,i=t.memoizedProps;a.props=i;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=me(n)?Nt:ie.current,u=ln(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==r||l!==u)&&Yi(t,a,r,u),tt=!1;var g=t.memoizedState;a.state=g,io(t,r,a,o),l=t.memoizedState,i!==r||g!==l||fe.current||tt?(typeof m=="function"&&($s(t,n,m,r),l=t.memoizedState),(i=tt||Gi(t,n,i,r,g,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=i):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Gu(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Oe(t.type,i),a.props=u,h=t.pendingProps,g=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=me(n)?Nt:ie.current,l=ln(t,l));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==h||g!==l)&&Yi(t,a,r,l),tt=!1,g=t.memoizedState,a.state=g,io(t,r,a,o);var v=t.memoizedState;i!==h||g!==v||fe.current||tt?(typeof x=="function"&&($s(t,n,x,r),v=t.memoizedState),(u=tt||Gi(t,n,u,r,g,v,l)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,s,o)}function Ks(e,t,n,r,o,s){kc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Wi(t,n,!1),Ge(e,t,s);r=t.stateNode,fh.current=t;var i=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=cn(t,e.child,null,s),t.child=cn(t,null,i,s)):le(e,t,i,s),t.memoizedState=r.state,o&&Wi(t,n,!0),t.child}function Cc(e){var t=e.stateNode;t.pendingContext?_i(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_i(e,t.context,!1),Ba(e,t.containerInfo)}function sl(e,t,n,r,o){return un(),Da(o),t.flags|=256,le(e,t,n,r),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tc(e,t,n){var r=t.pendingProps,o=z.current,s=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(z,o&1),e===null)return Hs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Po(a,r,0,null),e=Lt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ys(n),t.memoizedState=Gs,e):Ja(t,a));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return mh(e,t,a,r,i,o,n);if(s){s=r.fallback,a=t.mode,o=e.child,i=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ft(o,l),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?s=ft(i,s):(s=Lt(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Ys(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Gs,r}return s=e.child,e=s.sibling,r=ft(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ja(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ir(e,t,n,r){return r!==null&&Da(r),cn(t,e.child,null,n),e=Ja(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,o,s,a){if(n)return t.flags&256?(t.flags&=-257,r=cs(Error(b(422))),Ir(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Po({mode:"visible",children:r.children},o,0,null),s=Lt(s,o,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&cn(t,e.child,null,a),t.child.memoizedState=Ys(a),t.memoizedState=Gs,s);if(!(t.mode&1))return Ir(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,s=Error(b(419)),r=cs(s,r,void 0),Ir(e,t,a,r)}if(i=(a&e.childLanes)!==0,he||i){if(r=Z,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Ke(e,o),je(r,e,o,-1))}return ei(),r=cs(Error(b(421))),Ir(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ah.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,we=ct(o.nextSibling),xe=t,q=!0,Ne=null,e!==null&&(Ce[Te++]=He,Ce[Te++]=Ve,Ce[Te++]=Dt,He=e.id,Ve=e.overflow,Dt=t),t=Ja(t,r.children),t.flags|=4096,t)}function al(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vs(e.return,t,n)}function ds(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function Rc(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(le(e,t,r.children,n),r=z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&al(e,n,t);else if(e.tag===19)al(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ds(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ds(t,!0,n,null,s);break;case"together":ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gh(e,t,n){switch(t.tag){case 3:Cc(t),un();break;case 5:Yu(t);break;case 1:me(t.type)&&no(t);break;case 4:Ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(z,z.current&1),t.flags|=128,null):n&t.child.childLanes?Tc(e,t,n):(U(z,z.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);U(z,z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(z,z.current),r)break;return null;case 22:case 23:return t.lanes=0,bc(e,t,n)}return Ge(e,t,n)}var Ec,Zs,Ac,Ic;Ec=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zs=function(){};Ac=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Pt(ze.current);var s=null;switch(n){case"input":o=Ss(e,o),r=Ss(e,r),s=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":o=Cs(e,o),r=Cs(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}Rs(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var i=o[u];for(a in i)i.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_n.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(i=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==i&&(l!=null||i!=null))if(u==="style")if(i){for(a in i)!i.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&i[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_n.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&M("scroll",e),s||i===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vh(e,t,n){var r=t.pendingProps;switch(Na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return me(t.type)&&to(),oe(t),null;case 3:return r=t.stateNode,dn(),F(fe),F(ie),_a(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ne!==null&&(ia(Ne),Ne=null))),Zs(e,t),oe(t),null;case 5:za(t);var o=Pt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)Ac(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return oe(t),null}if(e=Pt(ze.current),Er(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[qe]=t,r[Yn]=s,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(o=0;o<Ln.length;o++)M(Ln[o],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":mi(r,s),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},M("invalid",r);break;case"textarea":vi(r,s),M("invalid",r)}Rs(n,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var i=s[a];a==="children"?typeof i=="string"?r.textContent!==i&&(s.suppressHydrationWarning!==!0&&Rr(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&Rr(r.textContent,i,e),o=["children",""+i]):_n.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&M("scroll",r)}switch(n){case"input":yr(r),gi(r,s,!0);break;case"textarea":yr(r),yi(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=eo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ru(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qe]=t,e[Yn]=r,Ec(e,t,!1,!1),t.stateNode=e;e:{switch(a=Es(n,r),n){case"dialog":M("cancel",e),M("close",e),o=r;break;case"iframe":case"object":case"embed":M("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ln.length;o++)M(Ln[o],e);o=r;break;case"source":M("error",e),o=r;break;case"img":case"image":case"link":M("error",e),M("load",e),o=r;break;case"details":M("toggle",e),o=r;break;case"input":mi(e,r),o=Ss(e,r),M("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),M("invalid",e);break;case"textarea":vi(e,r),o=Cs(e,r),M("invalid",e);break;default:o=r}Rs(n,o),i=o;for(s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="style"?au(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ou(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wn(e,l):typeof l=="number"&&Wn(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_n.hasOwnProperty(s)?l!=null&&s==="onScroll"&&M("scroll",e):l!=null&&ya(e,s,l,a))}switch(n){case"input":yr(e),gi(e,r,!1);break;case"textarea":yr(e),yi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?en(e,!!r.multiple,s,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Pt(er.current),Pt(ze.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(s=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Rr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return oe(t),null;case 13:if(F(z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&we!==null&&t.mode&1&&!(t.flags&128))Qu(),un(),t.flags|=98560,s=!1;else if(s=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(b(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[qe]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),s=!1}else Ne!==null&&(ia(Ne),Ne=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||z.current&1?K===0&&(K=3):ei())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return dn(),Zs(e,t),e===null&&Kn(t.stateNode.containerInfo),oe(t),null;case 10:return Ma(t.type._context),oe(t),null;case 17:return me(t.type)&&to(),oe(t),null;case 19:if(F(z),s=t.memoizedState,s===null)return oe(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)En(s,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=lo(e),a!==null){for(t.flags|=128,En(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(z,z.current&1|2),t.child}e=e.sibling}s.tail!==null&&Q()>hn&&(t.flags|=128,r=!0,En(s,!1),t.lanes=4194304)}else{if(!r)if(e=lo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!q)return oe(t),null}else 2*Q()-s.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,En(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Q(),t.sibling=null,n=z.current,U(z,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function yh(e,t){switch(Na(t),t.tag){case 1:return me(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),F(fe),F(ie),_a(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return za(t),null;case 13:if(F(z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(z),null;case 4:return dn(),null;case 10:return Ma(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var Pr=!1,se=!1,wh=typeof WeakSet=="function"?WeakSet:Set,T=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function ea(e,t,n){try{n()}catch(r){H(e,t,r)}}var il=!1;function xh(e,t){if(Ms=Gr,e=Du(),Oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,i=-1,l=-1,u=0,m=0,h=e,g=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(i=a+o),h!==s||r!==0&&h.nodeType!==3||(l=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++u===o&&(i=a),g===s&&++m===r&&(l=a),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=i===-1||l===-1?null:{start:i,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fs={focusedElem:e,selectionRange:n},Gr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Oe(t.type,w),k);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(y){H(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=il,il=!1,v}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&ea(t,n,s)}o=o.next}while(o!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ta(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pc(e){var t=e.alternate;t!==null&&(e.alternate=null,Pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[Yn],delete t[zs],delete t[nh],delete t[rh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function ll(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}var ee=null,Le=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Lc(e,t,n),n=n.sibling}function Lc(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(xo,n)}catch{}switch(n.tag){case 5:se||Yt(n,t);case 6:var r=ee,o=Le;ee=null,Ze(e,t,n),ee=r,Le=o,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?os(e.parentNode,n):e.nodeType===1&&os(e,n),Qn(e)):os(ee,n.stateNode));break;case 4:r=ee,o=Le,ee=n.stateNode.containerInfo,Le=!0,Ze(e,t,n),ee=r,Le=o;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ea(n,t,a),o=o.next}while(o!==r)}Ze(e,t,n);break;case 1:if(!se&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){H(n,t,i)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,Ze(e,t,n),se=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function ul(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wh),t.forEach(function(r){var o=Ih.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,a=t,i=a;e:for(;i!==null;){switch(i.tag){case 5:ee=i.stateNode,Le=!1;break e;case 3:ee=i.stateNode.containerInfo,Le=!0;break e;case 4:ee=i.stateNode.containerInfo,Le=!0;break e}i=i.return}if(ee===null)throw Error(b(160));Lc(s,a,o),ee=null,Le=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){H(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nc(t,e),t=t.sibling}function Nc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Me(e),r&4){try{qn(3,e,e.return),Ao(3,e)}catch(w){H(e,e.return,w)}try{qn(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:Pe(t,e),Me(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(Pe(t,e),Me(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var o=e.stateNode;try{Wn(o,"")}catch(w){H(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,i=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&tu(o,s),Es(i,a);var u=Es(i,s);for(a=0;a<l.length;a+=2){var m=l[a],h=l[a+1];m==="style"?au(o,h):m==="dangerouslySetInnerHTML"?ou(o,h):m==="children"?Wn(o,h):ya(o,m,h,u)}switch(i){case"input":bs(o,s);break;case"textarea":nu(o,s);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?en(o,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?en(o,!!s.multiple,s.defaultValue,!0):en(o,!!s.multiple,s.multiple?[]:"",!1))}o[Yn]=s}catch(w){H(e,e.return,w)}}break;case 6:if(Pe(t,e),Me(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(w){H(e,e.return,w)}}break;case 3:if(Pe(t,e),Me(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:Pe(t,e),Me(e);break;case 13:Pe(t,e),Me(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Ga=Q())),r&4&&ul(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(se=(u=se)||m,Pe(t,e),se=u):Pe(t,e),Me(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(h=T=m;T!==null;){switch(g=T,x=g.child,g.tag){case 0:case 11:case 14:case 15:qn(4,g,g.return);break;case 1:Yt(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){H(r,n,w)}}break;case 5:Yt(g,g.return);break;case 22:if(g.memoizedState!==null){dl(h);continue}}x!==null?(x.return=g,T=x):dl(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=su("display",a))}catch(w){H(e,e.return,w)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){H(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Me(e),r&4&&ul(e);break;case 21:break;default:Pe(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Oc(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wn(o,""),r.flags&=-33);var s=ll(e);ra(e,s,o);break;case 3:case 4:var a=r.stateNode.containerInfo,i=ll(e);na(e,i,a);break;default:throw Error(b(161))}}catch(l){H(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sh(e,t,n){T=e,Dc(e)}function Dc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,s=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Pr;if(!a){var i=o.alternate,l=i!==null&&i.memoizedState!==null||se;i=Pr;var u=se;if(Pr=a,(se=l)&&!u)for(T=o;T!==null;)a=T,l=a.child,a.tag===22&&a.memoizedState!==null?pl(o):l!==null?(l.return=a,T=l):pl(o);for(;s!==null;)T=s,Dc(s),s=s.sibling;T=o,Pr=i,se=u}cl(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,T=s):cl(e)}}function cl(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ji(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ji(t,a,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Qn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}se||t.flags&512&&ta(t)}catch(g){H(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function dl(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function pl(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(l){H(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){H(t,o,l)}}var s=t.return;try{ta(t)}catch(l){H(t,s,l)}break;case 5:var a=t.return;try{ta(t)}catch(l){H(t,a,l)}}}catch(l){H(t,t.return,l)}if(t===e){T=null;break}var i=t.sibling;if(i!==null){i.return=t.return,T=i;break}T=t.return}}var bh=Math.ceil,po=Ye.ReactCurrentDispatcher,Xa=Ye.ReactCurrentOwner,Ee=Ye.ReactCurrentBatchConfig,D=0,Z=null,J=null,te=0,ye=0,Zt=wt(0),K=0,or=null,Ut=0,Io=0,Ka=0,Bn=null,pe=null,Ga=0,hn=1/0,_e=null,ho=!1,oa=null,pt=null,Or=!1,st=null,fo=0,zn=0,sa=null,Wr=-1,Hr=0;function ue(){return D&6?Q():Wr!==-1?Wr:Wr=Q()}function ht(e){return e.mode&1?D&2&&te!==0?te&-te:sh.transition!==null?(Hr===0&&(Hr=yu()),Hr):(e=j,e!==0||(e=window.event,e=e===void 0?16:Tu(e.type)),e):1}function je(e,t,n,r){if(50<zn)throw zn=0,sa=null,Error(b(185));lr(e,n,r),(!(D&2)||e!==Z)&&(e===Z&&(!(D&2)&&(Io|=n),K===4&&rt(e,te)),ge(e,r),n===1&&D===0&&!(t.mode&1)&&(hn=Q()+500,To&&xt()))}function ge(e,t){var n=e.callbackNode;sp(e,t);var r=Kr(e,e===Z?te:0);if(r===0)n!==null&&Si(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Si(n),t===1)e.tag===0?oh(hl.bind(null,e)):Hu(hl.bind(null,e)),eh(function(){!(D&6)&&xt()}),n=null;else{switch(wu(r)){case 1:n=ka;break;case 4:n=gu;break;case 16:n=Xr;break;case 536870912:n=vu;break;default:n=Xr}n=_c(n,jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jc(e,t){if(Wr=-1,Hr=0,D&6)throw Error(b(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Kr(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var o=D;D|=2;var s=Mc();(Z!==e||te!==t)&&(_e=null,hn=Q()+500,Ot(e,t));do try{Th();break}catch(i){Uc(e,i)}while(!0);Ua(),po.current=s,D=o,J!==null?t=0:(Z=null,te=0,t=K)}if(t!==0){if(t===2&&(o=Ls(e),o!==0&&(r=o,t=aa(e,o))),t===1)throw n=or,Ot(e,0),rt(e,r),ge(e,Q()),n;if(t===6)rt(e,r);else{if(o=e.current.alternate,!(r&30)&&!kh(o)&&(t=mo(e,r),t===2&&(s=Ls(e),s!==0&&(r=s,t=aa(e,s))),t===1))throw n=or,Ot(e,0),rt(e,r),ge(e,Q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Rt(e,pe,_e);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Ga+500-Q(),10<t)){if(Kr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Bs(Rt.bind(null,e,pe,_e),t);break}Rt(e,pe,_e);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-De(r);s=1<<a,a=t[a],a>o&&(o=a),r&=~s}if(r=o,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bh(r/1960))-r,10<r){e.timeoutHandle=Bs(Rt.bind(null,e,pe,_e),r);break}Rt(e,pe,_e);break;case 5:Rt(e,pe,_e);break;default:throw Error(b(329))}}}return ge(e,Q()),e.callbackNode===n?jc.bind(null,e):null}function aa(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=mo(e,t),e!==2&&(t=pe,pe=n,t!==null&&ia(t)),e}function ia(e){pe===null?pe=e:pe.push.apply(pe,e)}function kh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!Ue(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Ka,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function hl(e){if(D&6)throw Error(b(327));sn();var t=Kr(e,0);if(!(t&1))return ge(e,Q()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=aa(e,r))}if(n===1)throw n=or,Ot(e,0),rt(e,t),ge(e,Q()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,pe,_e),ge(e,Q()),null}function Ya(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(hn=Q()+500,To&&xt())}}function Mt(e){st!==null&&st.tag===0&&!(D&6)&&sn();var t=D;D|=1;var n=Ee.transition,r=j;try{if(Ee.transition=null,j=1,e)return e()}finally{j=r,Ee.transition=n,D=t,!(D&6)&&xt()}}function Za(){ye=Zt.current,F(Zt)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zp(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(Na(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:dn(),F(fe),F(ie),_a();break;case 5:za(r);break;case 4:dn();break;case 13:F(z);break;case 19:F(z);break;case 10:Ma(r.type._context);break;case 22:case 23:Za()}n=n.return}if(Z=e,J=e=ft(e.current,null),te=ye=t,K=0,or=null,Ka=Io=Ut=0,pe=Bn=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=o,r.next=a}n.pending=r}It=null}return e}function Uc(e,t){do{var n=J;try{if(Ua(),Br.current=co,uo){for(var r=_.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}uo=!1}if(jt=0,Y=X=_=null,Fn=!1,tr=0,Xa.current=null,n===null||n.return===null){K=1,or=t,J=null;break}e:{var s=e,a=n.return,i=n,l=t;if(t=te,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,m=i,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=el(a);if(x!==null){x.flags&=-257,tl(x,a,i,s,t),x.mode&1&&Zi(s,u,t),t=x,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Zi(s,u,t),ei();break e}l=Error(b(426))}}else if(q&&i.mode&1){var k=el(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),tl(k,a,i,s,t),Da(pn(l,i));break e}}s=l=pn(l,i),K!==4&&(K=2),Bn===null?Bn=[s]:Bn.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=wc(s,l,t);Qi(s,p);break e;case 1:i=l;var c=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=xc(s,i,t);Qi(s,y);break e}}s=s.return}while(s!==null)}qc(n)}catch(C){t=C,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function Mc(){var e=po.current;return po.current=co,e===null?co:e}function ei(){(K===0||K===3||K===2)&&(K=4),Z===null||!(Ut&268435455)&&!(Io&268435455)||rt(Z,te)}function mo(e,t){var n=D;D|=2;var r=Mc();(Z!==e||te!==t)&&(_e=null,Ot(e,t));do try{Ch();break}catch(o){Uc(e,o)}while(!0);if(Ua(),D=n,po.current=r,J!==null)throw Error(b(261));return Z=null,te=0,K}function Ch(){for(;J!==null;)Fc(J)}function Th(){for(;J!==null&&!Kd();)Fc(J)}function Fc(e){var t=zc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?qc(e):J=t,Xa.current=null}function qc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yh(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,J=null;return}}else if(n=vh(n,t,ye),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);K===0&&(K=5)}function Rt(e,t,n){var r=j,o=Ee.transition;try{Ee.transition=null,j=1,Rh(e,t,n,r)}finally{Ee.transition=o,j=r}return null}function Rh(e,t,n,r){do sn();while(st!==null);if(D&6)throw Error(b(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ap(e,s),e===Z&&(J=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Or||(Or=!0,_c(Xr,function(){return sn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ee.transition,Ee.transition=null;var a=j;j=1;var i=D;D|=4,Xa.current=null,xh(e,n),Nc(n,e),$p(Fs),Gr=!!Ms,Fs=Ms=null,e.current=n,Sh(n),Gd(),D=i,j=a,Ee.transition=s}else e.current=n;if(Or&&(Or=!1,st=e,fo=o),s=e.pendingLanes,s===0&&(pt=null),ep(n.stateNode),ge(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ho)throw ho=!1,e=oa,oa=null,e;return fo&1&&e.tag!==0&&sn(),s=e.pendingLanes,s&1?e===sa?zn++:(zn=0,sa=e):zn=0,xt(),null}function sn(){if(st!==null){var e=wu(fo),t=Ee.transition,n=j;try{if(Ee.transition=null,j=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,fo=0,D&6)throw Error(b(331));var o=D;for(D|=4,T=e.current;T!==null;){var s=T,a=s.child;if(T.flags&16){var i=s.deletions;if(i!==null){for(var l=0;l<i.length;l++){var u=i[l];for(T=u;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:qn(8,m,s)}var h=m.child;if(h!==null)h.return=m,T=h;else for(;T!==null;){m=T;var g=m.sibling,x=m.return;if(Pc(m),m===u){T=null;break}if(g!==null){g.return=x,T=g;break}T=x}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}T=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,T=a;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qn(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var c=e.current;for(T=c;T!==null;){a=T;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,T=f;else e:for(a=c;T!==null;){if(i=T,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Ao(9,i)}}catch(C){H(i,i.return,C)}if(i===a){T=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,T=y;break e}T=i.return}}if(D=o,xt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(xo,e)}catch{}r=!0}return r}finally{j=n,Ee.transition=t}}return!1}function fl(e,t,n){t=pn(n,t),t=wc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(lr(e,1,t),ge(e,t))}function H(e,t,n){if(e.tag===3)fl(e,e,n);else for(;t!==null;){if(t.tag===3){fl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=pn(n,e),e=xc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(lr(t,1,e),ge(t,e));break}}t=t.return}}function Eh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(K===4||K===3&&(te&130023424)===te&&500>Q()-Ga?Ot(e,0):Ka|=n),ge(e,t)}function Bc(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ue();e=Ke(e,t),e!==null&&(lr(e,t,n),ge(e,n))}function Ah(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bc(e,n)}function Ih(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Bc(e,n)}var zc;zc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,gh(e,t,n);he=!!(e.flags&131072)}else he=!1,q&&t.flags&1048576&&Vu(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var o=ln(t,ie.current);on(t,n),o=Ha(null,t,r,e,o,n);var s=Va();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(s=!0,no(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,qa(t),o.updater=Eo,t.stateNode=o,o._reactInternals=t,Qs(t,r,e,n),t=Ks(null,t,r,!0,s,n)):(t.tag=0,q&&s&&La(t),le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Oh(r),e=Oe(r,e),o){case 0:t=Xs(null,t,r,e,n);break e;case 1:t=ol(null,t,r,e,n);break e;case 11:t=nl(null,t,r,e,n);break e;case 14:t=rl(null,t,r,Oe(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Xs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),ol(e,t,r,o,n);case 3:e:{if(Cc(t),e===null)throw Error(b(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Gu(e,t),io(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=pn(Error(b(423)),t),t=sl(e,t,r,n,o);break e}else if(r!==o){o=pn(Error(b(424)),t),t=sl(e,t,r,n,o);break e}else for(we=ct(t.stateNode.containerInfo.firstChild),xe=t,q=!0,Ne=null,n=Xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===o){t=Ge(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return Yu(t),e===null&&Hs(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,qs(r,o)?a=null:s!==null&&qs(r,s)&&(t.flags|=32),kc(e,t),le(e,t,a,n),t.child;case 6:return e===null&&Hs(t),null;case 13:return Tc(e,t,n);case 4:return Ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),nl(e,t,r,o,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,a=o.value,U(so,r._currentValue),r._currentValue=a,s!==null)if(Ue(s.value,a)){if(s.children===o.children&&!fe.current){t=Ge(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){a=s.child;for(var l=i.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qe(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?l.next=l:(l.next=m.next,m.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vs(s.return,n,t),i.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(b(341));a.lanes|=n,i=a.alternate,i!==null&&(i.lanes|=n),Vs(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,on(t,n),o=Ae(o),r=r(o),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,o=Oe(r,t.pendingProps),o=Oe(r.type,o),rl(e,t,r,o,n);case 15:return Sc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),_r(e,t),t.tag=1,me(r)?(e=!0,no(t)):e=!1,on(t,n),yc(t,r,o),Qs(t,r,o,n),Ks(null,t,r,!0,e,n);case 19:return Rc(e,t,n);case 22:return bc(e,t,n)}throw Error(b(156,t.tag))};function _c(e,t){return mu(e,t)}function Ph(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Ph(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oh(e){if(typeof e=="function")return ti(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xa)return 11;if(e===Sa)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,o,s){var a=2;if(r=e,typeof e=="function")ti(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wt:return Lt(n.children,o,s,t);case wa:a=8,o|=8;break;case vs:return e=Re(12,n,t,o|2),e.elementType=vs,e.lanes=s,e;case ys:return e=Re(13,n,t,o),e.elementType=ys,e.lanes=s,e;case ws:return e=Re(19,n,t,o),e.elementType=ws,e.lanes=s,e;case Yl:return Po(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kl:a=10;break e;case Gl:a=9;break e;case xa:a=11;break e;case Sa:a=14;break e;case et:a=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Re(a,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function Lt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=Re(22,e,r,t),e.elementType=Yl,e.lanes=n,e.stateNode={isHidden:!1},e}function ps(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function hs(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ni(e,t,n,r,o,s,a,i,l){return e=new Lh(e,t,n,i,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Re(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(s),e}function Nh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wc(e){if(!e)return vt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(me(n))return Wu(e,n,t)}return t}function Hc(e,t,n,r,o,s,a,i,l){return e=ni(n,r,!0,e,o,s,a,i,l),e.context=Wc(null),n=e.current,r=ue(),o=ht(n),s=Qe(r,o),s.callback=t??null,dt(n,s,o),e.current.lanes=o,lr(e,o,r),ge(e,r),e}function Oo(e,t,n,r){var o=t.current,s=ue(),a=ht(o);return n=Wc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(o,t,a),e!==null&&(je(e,o,a,s),qr(e,o,a)),a}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ml(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ri(e,t){ml(e,t),(e=e.alternate)&&ml(e,t)}function Dh(){return null}var Vc=typeof reportError=="function"?reportError:function(e){console.error(e)};function oi(e){this._internalRoot=e}Lo.prototype.render=oi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Oo(e,t,null,null)};Lo.prototype.unmount=oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){Oo(null,e,null,null)}),t[Xe]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=bu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Cu(e)}};function si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gl(){}function jh(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var u=go(a);s.call(u)}}var a=Hc(t,r,e,0,null,!1,!1,"",gl);return e._reactRootContainer=a,e[Xe]=a.current,Kn(e.nodeType===8?e.parentNode:e),Mt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var u=go(l);i.call(u)}}var l=ni(e,0,!1,null,null,!1,!1,"",gl);return e._reactRootContainer=l,e[Xe]=l.current,Kn(e.nodeType===8?e.parentNode:e),Mt(function(){Oo(t,l,n,r)}),l}function Do(e,t,n,r,o){var s=n._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var i=o;o=function(){var l=go(a);i.call(l)}}Oo(t,a,e,o)}else a=jh(n,t,e,o,r);return go(a)}xu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&(Ca(t,n|1),ge(t,Q()),!(D&6)&&(hn=Q()+500,xt()))}break;case 13:Mt(function(){var r=Ke(e,1);if(r!==null){var o=ue();je(r,e,1,o)}}),ri(e,1)}};Ta=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ue();je(t,e,134217728,n)}ri(e,134217728)}};Su=function(e){if(e.tag===13){var t=ht(e),n=Ke(e,t);if(n!==null){var r=ue();je(n,e,t,r)}ri(e,t)}};bu=function(){return j};ku=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};Is=function(e,t,n){switch(t){case"input":if(bs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Co(r);if(!o)throw Error(b(90));eu(r),bs(r,o)}}}break;case"textarea":nu(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};uu=Ya;cu=Mt;var Uh={usingClientEntryPoint:!1,Events:[cr,Qt,Co,iu,lu,Ya]},An={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mh={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hu(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Dh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{xo=Lr.inject(Mh),Be=Lr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uh;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!si(t))throw Error(b(200));return Nh(e,t,null,n)};be.createRoot=function(e,t){if(!si(e))throw Error(b(299));var n=!1,r="",o=Vc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ni(e,1,!1,null,null,n,!1,r,o),e[Xe]=t.current,Kn(e.nodeType===8?e.parentNode:e),new oi(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=hu(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Mt(e)};be.hydrate=function(e,t,n){if(!No(t))throw Error(b(200));return Do(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!si(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",a=Vc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Hc(t,null,e,1,n??null,o,!1,s,a),e[Xe]=t.current,Kn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Lo(t)};be.render=function(e,t,n){if(!No(t))throw Error(b(200));return Do(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!No(e))throw Error(b(40));return e._reactRootContainer?(Mt(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};be.unstable_batchedUpdates=Ya;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!No(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Do(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function $c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($c)}catch(e){console.error(e)}}$c(),$l.exports=be;var Fh=$l.exports,vl=Fh;ms.createRoot=vl.createRoot,ms.hydrateRoot=vl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const yl="popstate";function qh(e){e===void 0&&(e={});function t(o,s){let{pathname:a="/",search:i="",hash:l=""}=Bt(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),la("",{pathname:a,search:i,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(o,s){let a=o.document.querySelector("base"),i="";if(a&&a.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");i=u===-1?l:l.slice(0,u)}return i+"#"+(typeof s=="string"?s:vo(s))}function r(o,s){jo(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return zh(t,n,r,e)}function V(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bh(){return Math.random().toString(36).substr(2,8)}function wl(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bt(t):t,{state:n,key:t&&t.key||r||Bh()})}function vo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zh(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:s=!1}=r,a=o.history,i=at.Pop,l=null,u=m();u==null&&(u=0,a.replaceState(sr({},a.state,{idx:u}),""));function m(){return(a.state||{idx:null}).idx}function h(){i=at.Pop;let k=m(),p=k==null?null:k-u;u=k,l&&l({action:i,location:w.location,delta:p})}function g(k,p){i=at.Push;let c=la(w.location,k,p);n&&n(c,k),u=m()+1;let f=wl(c,u),y=w.createHref(c);try{a.pushState(f,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(y)}s&&l&&l({action:i,location:w.location,delta:1})}function x(k,p){i=at.Replace;let c=la(w.location,k,p);n&&n(c,k),u=m();let f=wl(c,u),y=w.createHref(c);a.replaceState(f,"",y),s&&l&&l({action:i,location:w.location,delta:0})}function v(k){let p=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof k=="string"?k:vo(k);return c=c.replace(/ $/,"%20"),V(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let w={get action(){return i},get location(){return e(o,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(yl,h),l=k,()=>{o.removeEventListener(yl,h),l=null}},createHref(k){return t(o,k)},createURL:v,encodeLocation(k){let p=v(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:x,go(k){return a.go(k)}};return w}var xl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xl||(xl={}));function _h(e,t,n){return n===void 0&&(n="/"),Wh(e,t,n)}function Wh(e,t,n,r){let o=typeof t=="string"?Bt(t):t,s=fn(o.pathname||"/",n);if(s==null)return null;let a=Qc(e);Hh(a);let i=null;for(let l=0;i==null&&l<a.length;++l){let u=tf(s);i=Zh(a[l],u)}return i}function Qc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(s,a,i)=>{let l={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(V(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mt([r,l.relativePath]),m=n.concat(l);s.children&&s.children.length>0&&(V(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qc(s.children,t,m,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Gh(u,s.index),routesMeta:m})};return e.forEach((s,a)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))o(s,a);else for(let l of Jc(s.path))o(s,a,l)}),t}function Jc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return o?[s,""]:[s];let a=Jc(r.join("/")),i=[];return i.push(...a.map(l=>l===""?s:[s,l].join("/"))),o&&i.push(...a),i.map(l=>e.startsWith("/")&&l===""?"/":l)}function Hh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vh=/^:[\w-]+$/,$h=3,Qh=2,Jh=1,Xh=10,Kh=-2,Sl=e=>e==="*";function Gh(e,t){let n=e.split("/"),r=n.length;return n.some(Sl)&&(r+=Kh),t&&(r+=Qh),n.filter(o=>!Sl(o)).reduce((o,s)=>o+(Vh.test(s)?$h:s===""?Jh:Xh),r)}function Yh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Zh(e,t,n){let{routesMeta:r}=e,o={},s="/",a=[];for(let i=0;i<r.length;++i){let l=r[i],u=i===r.length-1,m=s==="/"?t:t.slice(s.length)||"/",h=ua({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},m),g=l.route;if(!h)return null;Object.assign(o,h.params),a.push({params:o,pathname:mt([s,h.pathname]),pathnameBase:af(mt([s,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(s=mt([s,h.pathnameBase]))}return a}function ua(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ef(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let s=o[0],a=s.replace(/(.)\/+$/,"$1"),i=o.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let w=i[h]||"";a=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=i[h];return x&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function ef(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),jo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,i,l)=>(r.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function tf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const nf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rf=e=>nf.test(e);function of(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Bt(e):e,s;if(n)if(rf(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),jo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=bl(n.substring(1),"/"):s=bl(n,t)}else s=t;return{pathname:s,search:lf(r),hash:uf(o)}}function bl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function fs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xc(e,t){let n=sf(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Kc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Bt(e):(o=sr({},e),V(!o.pathname||!o.pathname.includes("?"),fs("?","pathname","search",o)),V(!o.pathname||!o.pathname.includes("#"),fs("#","pathname","hash",o)),V(!o.search||!o.search.includes("#"),fs("#","search","hash",o)));let s=e===""||o.pathname==="",a=s?"/":o.pathname,i;if(a==null)i=n;else{let h=t.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),h-=1;o.pathname=g.join("/")}i=h>=0?t[h]:"/"}let l=of(o,i),u=a&&a!=="/"&&a.endsWith("/"),m=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||m)&&(l.pathname+="/"),l}const mt=e=>e.join("/").replace(/\/\/+/g,"/"),af=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gc=["post","put","patch","delete"];new Set(Gc);const df=["get",...Gc];new Set(df);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}const Uo=S.createContext(null),Yc=S.createContext(null),St=S.createContext(null),Mo=S.createContext(null),bt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Zc=S.createContext(null);function pf(e,t){let{relative:n}=t===void 0?{}:t;pr()||V(!1);let{basename:r,navigator:o}=S.useContext(St),{hash:s,pathname:a,search:i}=Fo(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:mt([r,a])),o.createHref({pathname:l,search:i,hash:s})}function pr(){return S.useContext(Mo)!=null}function hr(){return pr()||V(!1),S.useContext(Mo).location}function ed(e){S.useContext(St).static||S.useLayoutEffect(e)}function ai(){let{isDataRoute:e}=S.useContext(bt);return e?Tf():hf()}function hf(){pr()||V(!1);let e=S.useContext(Uo),{basename:t,future:n,navigator:r}=S.useContext(St),{matches:o}=S.useContext(bt),{pathname:s}=hr(),a=JSON.stringify(Xc(o,n.v7_relativeSplatPath)),i=S.useRef(!1);return ed(()=>{i.current=!0}),S.useCallback(function(u,m){if(m===void 0&&(m={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let h=Kc(u,JSON.parse(a),s,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:mt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,a,s,e])}function td(){let{matches:e}=S.useContext(bt),t=e[e.length-1];return t?t.params:{}}function Fo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(St),{matches:o}=S.useContext(bt),{pathname:s}=hr(),a=JSON.stringify(Xc(o,r.v7_relativeSplatPath));return S.useMemo(()=>Kc(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function ff(e,t){return mf(e,t)}function mf(e,t,n,r){pr()||V(!1);let{navigator:o}=S.useContext(St),{matches:s}=S.useContext(bt),a=s[s.length-1],i=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=hr(),m;if(t){var h;let k=typeof t=="string"?Bt(t):t;l==="/"||(h=k.pathname)!=null&&h.startsWith(l)||V(!1),m=k}else m=u;let g=m.pathname||"/",x=g;if(l!=="/"){let k=l.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let v=_h(e,{pathname:x}),w=xf(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:mt([l,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:mt([l,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&w?S.createElement(Mo.Provider,{value:{location:ar({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:at.Pop}},w):w}function gf(){let e=Cf(),t=cf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,null)}const vf=S.createElement(gf,null);class yf extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(bt.Provider,{value:this.props.routeContext},S.createElement(Zc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wf(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(Uo);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(bt.Provider,{value:t},r)}function xf(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=(o=n)==null?void 0:o.errors;if(i!=null){let m=a.findIndex(h=>h.route.id&&(i==null?void 0:i[h.route.id])!==void 0);m>=0||V(!1),a=a.slice(0,Math.min(a.length,m+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let h=a[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:g,errors:x}=n,v=h.route.loader&&g[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||v){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((m,h,g)=>{let x,v=!1,w=null,k=null;n&&(x=i&&h.route.id?i[h.route.id]:void 0,w=h.route.errorElement||vf,l&&(u<0&&g===0?(Rf("route-fallback"),v=!0,k=null):u===g&&(v=!0,k=h.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,g+1)),c=()=>{let f;return x?f=w:v?f=k:h.route.Component?f=S.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=m,S.createElement(wf,{match:h,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?S.createElement(yf,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var nd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nd||{}),rd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rd||{});function Sf(e){let t=S.useContext(Uo);return t||V(!1),t}function bf(e){let t=S.useContext(Yc);return t||V(!1),t}function kf(e){let t=S.useContext(bt);return t||V(!1),t}function od(e){let t=kf(),n=t.matches[t.matches.length-1];return n.route.id||V(!1),n.route.id}function Cf(){var e;let t=S.useContext(Zc),n=bf(),r=od();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Tf(){let{router:e}=Sf(nd.UseNavigateStable),t=od(rd.UseNavigateStable),n=S.useRef(!1);return ed(()=>{n.current=!0}),S.useCallback(function(o,s){s===void 0&&(s={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ar({fromRouteId:t},s)))},[e,t])}const kl={};function Rf(e,t,n){kl[e]||(kl[e]=!0)}function Ef(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Et(e){V(!1)}function Af(e){let{basename:t="/",children:n=null,location:r,navigationType:o=at.Pop,navigator:s,static:a=!1,future:i}=e;pr()&&V(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:a,future:ar({v7_relativeSplatPath:!1},i)}),[l,i,s,a]);typeof r=="string"&&(r=Bt(r));let{pathname:m="/",search:h="",hash:g="",state:x=null,key:v="default"}=r,w=S.useMemo(()=>{let k=fn(m,l);return k==null?null:{location:{pathname:k,search:h,hash:g,state:x,key:v},navigationType:o}},[l,m,h,g,x,v,o]);return w==null?null:S.createElement(St.Provider,{value:u},S.createElement(Mo.Provider,{children:n,value:w}))}function If(e){let{children:t,location:n}=e;return ff(ca(t),n)}new Promise(()=>{});function ca(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let s=[...t,o];if(r.type===S.Fragment){n.push.apply(n,ca(r.props.children,s));return}r.type!==Et&&V(!1),!r.props.index||!r.props.children||V(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ca(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}function sd(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Pf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Of(e,t){return e.button===0&&(!t||t==="_self")&&!Pf(e)}const Lf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nf=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Df="6";try{window.__reactRouterVersion=Df}catch{}const jf=S.createContext({isTransitioning:!1}),Uf="startTransition",Cl=Ed[Uf];function Mf(e){let{basename:t,children:n,future:r,window:o}=e,s=S.useRef();s.current==null&&(s.current=qh({window:o,v5Compat:!0}));let a=s.current,[i,l]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},m=S.useCallback(h=>{u&&Cl?Cl(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>a.listen(m),[a,m]),S.useEffect(()=>Ef(r),[r]),S.createElement(Af,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:a,future:r})}const Ff=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$e=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:s,replace:a,state:i,target:l,to:u,preventScrollReset:m,viewTransition:h}=t,g=sd(t,Lf),{basename:x}=S.useContext(St),v,w=!1;if(typeof u=="string"&&qf.test(u)&&(v=u,Ff))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),C=fn(y.pathname,x);y.origin===f.origin&&C!=null?u=C+y.search+y.hash:w=!0}catch{}let k=pf(u,{relative:o}),p=zf(u,{replace:a,state:i,target:l,preventScrollReset:m,relative:o,viewTransition:h});function c(f){r&&r(f),f.defaultPrevented||p(f)}return S.createElement("a",yo({},g,{href:v||k,onClick:w||s?r:c,ref:n,target:l}))}),Nr=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:s="",end:a=!1,style:i,to:l,viewTransition:u,children:m}=t,h=sd(t,Nf),g=Fo(l,{relative:h.relative}),x=hr(),v=S.useContext(Yc),{navigator:w,basename:k}=S.useContext(St),p=v!=null&&_f(g)&&u===!0,c=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,f=x.pathname,y=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(f=f.toLowerCase(),y=y?y.toLowerCase():null,c=c.toLowerCase()),y&&k&&(y=fn(y,k)||y);const C=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let E=f===c||!a&&f.startsWith(c)&&f.charAt(C)==="/",A=y!=null&&(y===c||!a&&y.startsWith(c)&&y.charAt(c.length)==="/"),I={isActive:E,isPending:A,isTransitioning:p},B=E?r:void 0,O;typeof s=="function"?O=s(I):O=[s,E?"active":null,A?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ve=typeof i=="function"?i(I):i;return S.createElement($e,yo({},h,{"aria-current":B,className:O,ref:n,style:ve,to:l,viewTransition:u}),typeof m=="function"?m(I):m)});var da;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(da||(da={}));var Tl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tl||(Tl={}));function Bf(e){let t=S.useContext(Uo);return t||V(!1),t}function zf(e,t){let{target:n,replace:r,state:o,preventScrollReset:s,relative:a,viewTransition:i}=t===void 0?{}:t,l=ai(),u=hr(),m=Fo(e,{relative:a});return S.useCallback(h=>{if(Of(h,n)){h.preventDefault();let g=r!==void 0?r:vo(u)===vo(m);l(e,{replace:g,state:o,preventScrollReset:s,relative:a,viewTransition:i})}},[u,l,m,r,o,n,e,s,a,i])}function _f(e,t){t===void 0&&(t={});let n=S.useContext(jf);n==null&&V(!1);let{basename:r}=Bf(da.useViewTransitionState),o=Fo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=fn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=fn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ua(o.pathname,a)!=null||ua(o.pathname,s)!=null}const ad="react-course-progress",id={levelTestResult:null,topicProgress:{},moduleTestResults:{},finalTestResult:null};function Wf(e,t){switch(t.type){case"SET_LEVEL_TEST":return{...e,levelTestResult:t.payload};case"RESET_LEVEL_TEST":return{...e,levelTestResult:null};case"COMPLETE_TOPIC":return{...e,topicProgress:{...e.topicProgress,[t.payload.topicId]:{completed:!0,taskCompleted:!0}}};case"SET_MODULE_TEST":return{...e,moduleTestResults:{...e.moduleTestResults,[t.payload.moduleId]:t.payload.result}};case"SET_FINAL_TEST":return{...e,finalTestResult:t.payload};case"RESET":return id;default:return e}}function Hf(){try{const e=localStorage.getItem(ad);if(e)return JSON.parse(e)}catch{}return id}const ld=S.createContext(null);function Vf({children:e}){const[t,n]=S.useReducer(Wf,void 0,Hf);return S.useEffect(()=>{localStorage.setItem(ad,JSON.stringify(t))},[t]),d.jsx(ld.Provider,{value:{progress:t,dispatch:n},children:e})}function yn(){const e=S.useContext(ld);if(!e)throw new Error("useProgress must be used within ProgressProvider");return e}const $f={id:"mod-1",title:"React Fundamentals",description:"Learn the core building blocks of React: JSX syntax, components, props, and how React renders UI.",topics:[{id:"mod1-t1",title:"Introduction to JSX",explanation:`## What is JSX?

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
}`,hints:["Use an early return for the empty array case","Use a ternary for className to toggle styles","Use && for conditionally showing elements"]}}],test:[{id:"mod1-q1",question:"Which of the following is valid JSX?",options:['<div className="box">Hello</div>','<div class="box">Hello</div>','<div className="box">Hello<div>','<Div className="box">Hello</Div>'],correctAnswer:0,explanation:"JSX uses className instead of class (which is a reserved word in JS). All tags must be properly closed. Lowercase tag names are treated as HTML elements."},{id:"mod1-q2",question:"What happens if you render a list without key props?",options:["The application crashes and displays a React error boundary","React shows a warning and may have performance issues or bugs with reordering","Nothing — keys are purely optional and have no effect on list rendering","The list renders correctly but in the reverse order of the source array"],correctAnswer:1,explanation:"React uses keys to track which items changed. Without them, React falls back to using index which can cause issues with reordering, and shows a console warning."},{id:"mod1-q3",question:"How does data flow between components in React by default?",options:["Bidirectionally between parent and child","From child to parent via props","From parent to child via props (one-way)","Through a global store only"],correctAnswer:2,explanation:"React uses unidirectional (one-way) data flow. Data flows from parent to child via props. To communicate upward, parents pass callback functions as props."},{id:"mod1-q4",question:"What is the children prop?",options:["An array of child component class definitions registered with the parent","Content placed between the opening and closing tags of a component","A lifecycle method that runs before the component renders its children","A required prop that must be explicitly declared in every component interface"],correctAnswer:1,explanation:"The children prop contains whatever JSX is placed between the opening and closing tags of a component. It allows components to act as wrappers."},{id:"mod1-q5",question:"Which pattern is NOT a valid conditional rendering technique in React?",options:["{condition && <Component />}","{condition ? <A /> : <B />}","if (condition) return <Component />;","<if condition={true}><Component /></if>"],correctAnswer:3,explanation:"There is no <if> element in JSX. Conditional rendering uses JavaScript expressions like &&, ternary operators, or early returns."}]},Qf={id:"mod-2",title:"State & Events",description:"Learn how to make your components interactive with state management using useState and event handling.",topics:[{id:"mod2-t1",title:"useState Hook",explanation:`## Managing State with useState

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
}`,hints:["Use [name]: value (computed property name) in handleChange","Store errors as an object with field names as keys","Validate in handleSubmit before proceeding"]}}],test:[{id:"mod2-q1",question:"What does useState return?",options:["An array with [currentValue, setterFunction]","A single value that updates automatically on re-render","An object containing { value, setValue } properties","A Promise that resolves with the initial state value"],correctAnswer:0,explanation:"useState returns an array with exactly two elements: the current state value and a function to update it. We use array destructuring to name them."},{id:"mod2-q2",question:"Why should you use the functional form of setState (e.g., setCount(prev => prev + 1))?",options:["It makes the state update execute faster than using a direct value","It ensures you are working with the latest state value","It is required by React — direct values cause a runtime error","It prevents the component from triggering any unnecessary re-renders"],correctAnswer:1,explanation:"The functional updater ensures you use the most recent state value, which is important when multiple updates are batched or when the update depends on the previous state."},{id:"mod2-q3",question:"What is a controlled component?",options:["A component that controls other components","A component without side effects","A component wrapped in React.memo","A form element whose value is driven by React state"],correctAnswer:3,explanation:'A controlled component is a form element (input, select, textarea) whose value is set by React state and updated via onChange. React is the "single source of truth."'},{id:"mod2-q4",question:"How do you prevent a form from reloading the page on submit?",options:['Use type="button" on the submit button',"Call e.preventDefault() in the onSubmit handler","Use return false in the handler","Remove the action attribute"],correctAnswer:1,explanation:"Calling e.preventDefault() on the submit event prevents the browser's default form submission behavior, which would reload the page."},{id:"mod2-q5",question:"How do you handle multiple form inputs with a single onChange handler?",options:["Create a separate ref for each input and read values from the DOM directly","Declare separate state variables and individual handlers for each form field","Use a state object and computed property names: [e.target.name]: e.target.value","You cannot — each input must always have its own dedicated change handler function"],correctAnswer:2,explanation:"By giving each input a name attribute and using computed property names [name]: value, a single handler can update the correct field in a state object."}]},Jf={id:"mod-3",title:"Side Effects & Lifecycle",description:"Understand component lifecycle, side effects with useEffect, data fetching, and cleanup patterns.",topics:[{id:"mod3-t1",title:"useEffect Basics",explanation:`## Side Effects with useEffect

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
}`,hints:["Use setTimeout to delay the fetch by 500ms","Return clearTimeout from useEffect to cancel on re-run","Include query in the dependency array"]}}],test:[{id:"mod3-q1",question:"When does useEffect with an empty dependency array run?",options:["On every single render cycle that the component goes through","Only after the first render (mount)","Never — an empty array disables the effect from running entirely","Before the first render during the initialization phase of the component"],correctAnswer:1,explanation:"An empty dependency array [] means the effect has no dependencies to watch, so it only runs once after the initial mount."},{id:"mod3-q2",question:"What is the purpose of the cleanup function returned from useEffect?",options:["To re-run the effect immediately after the component re-renders again","To prevent the component from rendering until the async operation completes","To save the current component state to localStorage before unmounting","To unsubscribe, remove listeners, or cancel requests before re-running or unmounting"],correctAnswer:3,explanation:"The cleanup function runs before the effect re-runs and when the component unmounts. It's used to clean up subscriptions, timers, and event listeners."},{id:"mod3-q3",question:"Why should you use AbortController when fetching data in useEffect?",options:["To improve network request performance by compressing the response payload","To prevent setting state on an unmounted component (race conditions)","It is required by the Fetch API specification for every network request","To automatically retry requests that fail due to temporary network errors"],correctAnswer:1,explanation:"AbortController lets you cancel in-flight requests when the component unmounts or dependencies change, preventing state updates on unmounted components."},{id:"mod3-q4",question:"Why can putting an object literal in the dependency array cause infinite loops?",options:["Objects are not a valid type for the useEffect dependency array entries","The useEffect hook does not support objects — only primitive values are allowed","A new object reference is created each render, so React thinks the dependency changed","It always triggers a syntax error because objects cannot be serialized for comparison"],correctAnswer:2,explanation:"React compares dependencies using Object.is(), which checks reference equality. A new object literal has a new reference each render, so the effect runs every time."},{id:"mod3-q5",question:"How do you debounce a side effect in React?",options:["Use useEffect with a setTimeout and clear it in cleanup","Call the function multiple times in quick succession and use the last result","Wrap the component in React.memo to prevent it from re-rendering on input changes","Enable StrictMode to automatically batch rapid state updates into one call"],correctAnswer:0,explanation:"Debouncing in useEffect means setting a timeout and returning clearTimeout as the cleanup function. When the dependency changes again before the timeout fires, the old timeout is canceled."}]},Xf={id:"mod-4",title:"Advanced Hooks",description:"Master useReducer, useContext, useRef, useMemo, and useCallback for more complex state management and optimization.",topics:[{id:"mod4-t1",title:"useReducer",explanation:`## useReducer — Complex State Logic

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
}`,hints:["Use useRef(null) and set it as the ref prop on the input","Call inputRef.current?.focus() in a useEffect with []","useMemo dependencies should include the search term"]}}],test:[{id:"mod4-q1",question:"When should you use useReducer instead of useState?",options:["When state updates are complex or involve multiple sub-values","Always — it is the recommended replacement for useState in all cases","Only when the component also uses context to share its state values","When you need to persist state to localStorage across browser sessions"],correctAnswer:0,explanation:"useReducer is ideal for complex state logic with multiple sub-values, related transitions, or when the next state depends on the previous state in non-trivial ways."},{id:"mod4-q2",question:"What problem does useContext solve?",options:["It makes components render faster by caching their previous output in memory","It avoids passing props through many levels of components (prop drilling)","It is a replacement for useState that offers more advanced state management","It provides CSS animation management and transition handling between re-renders"],correctAnswer:1,explanation:'useContext provides a way to share data across the component tree without manually passing props at every level, solving the "prop drilling" problem.'},{id:"mod4-q3",question:"Does updating a useRef value cause a re-render?",options:["Yes, updating a ref always triggers an immediate component re-render","Only when the ref is attached to a DOM element and its attributes change","No — ref changes do not trigger re-renders","Only in development mode — production builds skip ref change detection"],correctAnswer:2,explanation:"Unlike state, changing ref.current does not cause a re-render. Refs are for values that need to persist between renders but shouldn't trigger UI updates."},{id:"mod4-q4",question:"What is the primary difference between useMemo and useCallback?",options:["useMemo is intended for class components while useCallback is for functional ones","useMemo runs only on the initial mount while useCallback runs on every render cycle","They are functionally identical and can always be used interchangeably in all cases","useMemo caches a computed value, useCallback caches a function reference"],correctAnswer:3,explanation:"useMemo returns the memoized result of calling a function. useCallback returns the memoized function itself. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)."},{id:"mod4-q5",question:"What happens if you omit the Provider for a context?",options:["The application crashes with an error saying that Provider is required","Components using useContext receive the default value passed to createContext","Components receive undefined and must handle the missing value themselves","Context automatically creates an implicit provider at the root of the component tree"],correctAnswer:1,explanation:"If there is no matching Provider above in the tree, useContext returns the default value that was passed to createContext()."}]},Kf={id:"mod-5",title:"React Router",description:"Learn client-side routing with React Router: navigation, route parameters, nested routes, and programmatic navigation.",topics:[{id:"mod5-t1",title:"Basic Routing Setup",explanation:`## Client-Side Routing with React Router

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
}`,hints:["Place <Outlet /> where child content should render","Use index prop for the default child route",'Child route paths are relative — just "analytics", not "/dashboard/analytics"']}}],test:[{id:"mod5-q1",question:"What does the <Link> component do compared to a regular <a> tag?",options:["Navigates without a full page reload (client-side routing)","Nothing different — it behaves exactly the same as a standard HTML anchor tag","Opens the target URL in a new browser tab or window automatically","Adds default CSS styling and active class handling to the rendered link"],correctAnswer:0,explanation:"<Link> performs client-side navigation by updating the URL and rendering the matched route without a full page reload, unlike <a> which triggers a server request."},{id:"mod5-q2",question:"How do you access URL parameters like /users/:id?",options:["window.location.params","useParams() hook","props.match.params","useLocation().params"],correctAnswer:1,explanation:"The useParams() hook returns an object of key/value pairs from the current URL matching the dynamic segments defined in the route path."},{id:"mod5-q3",question:"What is the purpose of <Outlet /> in nested routes?",options:["It creates a navigation link with automatic active styling for the current path","It handles and displays custom 404 error pages when routes are not matched","It performs a client-side redirect from one route path to a different path","It renders the matched child route's element"],correctAnswer:3,explanation:"<Outlet /> acts as a placeholder in parent route components where the matched child route's element will be rendered."},{id:"mod5-q4",question:'What does the "index" route do?',options:["It generates the index.html file that serves as the SPA's entry point","It redirects all unmatched URLs to the application's homepage route","It defines the default child route that matches the parent's URL exactly","It registers a route specifically designed for handling URL query parameters"],correctAnswer:2,explanation:"An index route renders at the parent's URL when no other child route matches. It's the default content for a nested route layout."},{id:"mod5-q5",question:"How do you navigate programmatically (e.g., after a form submission)?",options:['window.location.href = "/page"',"useNavigate() hook","<Link> component only",'document.redirect("/page")'],correctAnswer:1,explanation:'useNavigate() returns a function that lets you navigate programmatically: navigate("/path") to go to a route, or navigate(-1) to go back.'}]},Gf={id:"mod-6",title:"State Management Patterns",description:"Learn patterns for managing application-wide state: Context + useReducer, custom hooks for shared logic, and lifting state up.",topics:[{id:"mod6-t1",title:"Context + useReducer Pattern",explanation:`## Scalable State with Context + useReducer

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
}`,hints:["Store only one value (USD) in state — derive the other","The EUR input onChange should convert back to USD before setting state","Make CurrencyInput a controlled component via props"]}}],test:[{id:"mod6-q1",question:"Why split state and dispatch into separate contexts?",options:["It is strictly required by React — you cannot use useReducer without it","Components that only dispatch won't re-render when state changes","It makes the code easier to read by reducing the number of function calls","To avoid TypeScript errors when passing dispatch functions through props"],correctAnswer:1,explanation:"When dispatch is in a separate context, components that only call dispatch don't subscribe to state changes, preventing unnecessary re-renders."},{id:"mod6-q2",question:"What must a custom hook's name start with?",options:["get","handle","use","on"],correctAnswer:2,explanation:'Custom hooks must start with "use" (e.g., useLocalStorage). This convention lets React enforce the rules of hooks and enables linting.'},{id:"mod6-q3",question:"When should you lift state up?",options:["Always — state should be stored at the very top of the component tree","When the component tree is more than three levels deep regardless of data flow","Only when using TypeScript because it requires explicit state type definitions","When two sibling components need to share and sync the same data"],correctAnswer:3,explanation:"Lift state up when two or more sibling components need to reflect the same changing data. Move the state to their closest common parent."},{id:"mod6-q4",question:"What is the lazy initializer pattern in useState?",options:["Wrapping the initial value in a setTimeout to defer its calculation","Passing a function to useState that runs once to compute the initial value","Using useEffect to calculate and set state after the component first mounts","Setting the initial state to undefined and assigning it during the first render"],correctAnswer:1,explanation:"useState(() => expensiveComputation()) accepts a function that runs only on the first render, avoiding expensive recomputation on every render."},{id:"mod6-q5",question:"Can custom hooks return JSX?",options:["Yes — custom hooks can return anything","No — hooks can only return data, not UI","Only if wrapped in a Fragment","Only in class components"],correctAnswer:0,explanation:"Custom hooks can return any value including JSX, though returning data (state, handlers, computed values) is the more common and recommended pattern."}]},Yf={id:"mod-7",title:"Advanced Component Patterns",description:"Explore higher-order components, render props, compound components, and other advanced composition patterns.",topics:[{id:"mod7-t1",title:"Higher-Order Components (HOC)",explanation:`## Higher-Order Components

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
}`,hints:["The component calls props.children as a function, passing the data","children(size) invokes the function-as-children pattern","Use window.innerWidth and a resize event listener"]}}],test:[{id:"mod7-q1",question:"What is a Higher-Order Component (HOC)?",options:["A function that takes a component and returns a new enhanced component","A component that is rendered at a higher position in the DOM element tree","A component that has more than ten props defined in its interface contract","A component that utilizes every available React hook in its implementation"],correctAnswer:0,explanation:"A HOC is a function that accepts a component and returns a new component with additional behavior or props. It's a form of component composition."},{id:"mod7-q2",question:"What makes the compound component pattern special?",options:["It relies exclusively on class components and lifecycle method overrides","Components share implicit state via context while giving consumers control over composition","It uses memoization exclusively to prevent all unnecessary child re-renders","It requires TypeScript to enforce strict type contracts between compound members"],correctAnswer:1,explanation:"Compound components share state implicitly via context. The consumer controls the layout and composition while the components handle logic and state internally."},{id:"mod7-q3",question:"What is the render props pattern?",options:["Using the render() lifecycle method inherited from the React.Component base class","Serializing all component props as plain text strings before passing them down","A component that receives a function prop to determine what to render","A design pattern specifically created for server-side rendering of React components"],correctAnswer:2,explanation:"Render props is a pattern where a component receives a function (often as children) and calls it with some data, letting the consumer decide what to render."},{id:"mod7-q4",question:"In modern React, what often replaces HOCs and render props?",options:["Class components","Web Components","Redux","Custom hooks"],correctAnswer:3,explanation:"Custom hooks provide a simpler, more composable way to share stateful logic between components without the complexity of HOCs or render props."},{id:"mod7-q5",question:"What does the dot notation Accordion.Item signify?",options:["AccordionItem is a child class derived from the Accordion base component class","Item is a static property on the Accordion component, signaling they are designed to work together","It is prototypal inheritance that allows AccordionItem to extend Accordion behavior","It is a React Router pattern for defining nested routes within layout components"],correctAnswer:1,explanation:"Dot notation (Accordion.Item) is a convention that communicates that Item is meant to be used within Accordion. The sub-component is assigned as a property of the parent component."}]},Zf={id:"mod-8",title:"Performance & Best Practices",description:"Optimize React applications with memoization, code splitting, error boundaries, and learn testing fundamentals.",topics:[{id:"mod8-t1",title:"React.memo & Performance",explanation:`## Preventing Unnecessary Re-renders

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
}`,hints:["Extract fetching logic into a custom hook (useUsers)","Move the form into its own component (AddUserForm)","Move the list into its own component (UserList)"]}}],test:[{id:"mod8-q1",question:"When should you use React.memo?",options:["Only when you've identified a measurable performance issue from unnecessary re-renders","On every component by default to ensure the best possible rendering performance","Only on class components because functional components cannot be memoized","Never — React.memo has been deprecated in favor of the React Compiler approach"],correctAnswer:0,explanation:"React.memo should be used when profiling identifies that a component re-renders unnecessarily with unchanged props and it causes a noticeable performance impact."},{id:"mod8-q2",question:"What does React.lazy require to display content while loading?",options:["A loading state variable toggled by the parent component's useEffect hook","A Suspense component with a fallback prop","An ErrorBoundary component that catches and displays loading exceptions","A useEffect hook that monitors the lazy component's loading progress"],correctAnswer:1,explanation:"React.lazy components must be wrapped in a <Suspense> component that provides a fallback UI to display while the lazy component is being loaded."},{id:"mod8-q3",question:"Why is derived state (duplicating state that can be computed) an anti-pattern?",options:["It uses too much memory because React creates duplicate copies of the data","It always causes infinite re-render loops that crash the application entirely","React does not support derived values — you must only use primitive state types","It can get out of sync with the source state, causing bugs"],correctAnswer:3,explanation:"Derived state is redundant and can become inconsistent with the source data. Instead, compute values from existing state during rendering."},{id:"mod8-q4",question:"What is the main benefit of code splitting at route boundaries?",options:["Easier debugging because each page has its own isolated error boundary scope","Better SEO rankings because search engines prefer route-based component structures","Each page's code is loaded only when the user navigates to it, reducing initial bundle size","Faster state updates because each route maintains its own independent state tree"],correctAnswer:2,explanation:"Route-based code splitting ensures that users only download the JavaScript needed for the page they're viewing, improving initial load time."},{id:"mod8-q5",question:'What does "composition over inheritance" mean in React?',options:["Always use class components because they provide better lifecycle control and access","Build complex UIs by combining smaller components via props and children, not by extending classes","Use TypeScript interfaces exclusively to define strict component contracts and prop types","Avoid using the children prop entirely and pass all content through explicit named props"],correctAnswer:1,explanation:"React favors building UIs from small, reusable components composed together via props and children, rather than using class inheritance hierarchies."}]},em={id:"mod-9",title:"Security in React",description:"Learn how to protect your React applications from common web vulnerabilities: XSS, CSRF, secure authentication, input sanitization, and secure data handling.",topics:[{id:"mod9-t1",title:"Cross-Site Scripting (XSS) Prevention",explanation:`## XSS in React

React **automatically escapes** values embedded in JSX, which provides built-in protection against most XSS attacks.

\`\`\`jsx
const userInput = '<script>alert("hacked")<\/script>';
// This is SAFE — React escapes the string
return <p>{userInput}</p>;
// Renders as text: <script>alert("hacked")<\/script>
\`\`\`

### The Dangerous Exception: dangerouslySetInnerHTML

React provides \`dangerouslySetInnerHTML\` to inject raw HTML. As the name suggests, this is **dangerous** and bypasses React's XSS protection.

\`\`\`jsx
// ❌ DANGEROUS — never use with untrusted input
function Comment({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
\`\`\`

### Sanitizing HTML

If you must render HTML, **always sanitize** it first using a library like DOMPurify:

\`\`\`jsx
import DOMPurify from 'dompurify';

function SafeHTML({ html }) {
  const sanitized = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}
\`\`\`

### Other XSS Vectors to Watch

1. **URL-based XSS** — Always validate URLs before using in \`href\` or \`src\`:

\`\`\`jsx
// ❌ Dangerous
<a href={userProvidedUrl}>Click</a>

// ✅ Safe — validate the protocol
function SafeLink({ url, children }) {
  const isValid = /^https?:\\/\\//i.test(url);
  return isValid ? <a href={url}>{children}</a> : <span>{children}</span>;
}
\`\`\`

2. **Injecting into CSS** — Don't use user input directly in inline styles.
3. **eval() and new Function()** — Never pass user input to these.`,task:{description:"Create a `SafeComment` component that receives raw HTML content as a prop. It should sanitize the HTML before rendering. Implement a simple sanitizer that strips all `<script>` tags and event handler attributes (like onclick, onerror, etc.).",starterCode:`function sanitizeHTML(html) {
  // TODO: Remove <script> tags and event handler attributes
  return html;
}

function SafeComment({ htmlContent }) {
  // TODO: Sanitize and render the HTML safely
  return null;
}`,solution:`function sanitizeHTML(html) {
  let clean = html.replace(/<script[^>]*>[\\s\\S]*?<\\/script>/gi, '');
  clean = clean.replace(/\\s*on\\w+\\s*=\\s*"[^"]*"/gi, '');
  clean = clean.replace(/\\s*on\\w+\\s*=\\s*'[^']*'/gi, '');
  return clean;
}

function SafeComment({ htmlContent }) {
  const sanitized = sanitizeHTML(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}`,hints:["Use regex to match and remove <script>...<\/script> tags",'Event handlers in HTML start with "on" (onclick, onerror, onload, etc.)',"In production, use a battle-tested library like DOMPurify instead of custom regex"]}},{id:"mod9-t2",title:"Authentication & Token Security",explanation:`## Handling Auth Tokens Securely

### Where to Store Tokens

| Storage | XSS Risk | CSRF Risk | Recommendation |
|---------|----------|-----------|----------------|
| localStorage | ❌ Vulnerable | ✅ Safe | Avoid for sensitive tokens |
| sessionStorage | ❌ Vulnerable | ✅ Safe | Short-lived sessions only |
| HttpOnly Cookie | ✅ Safe | ❌ Vulnerable | Best for auth tokens |
| In-Memory (state) | ✅ Safe | ✅ Safe | Best security, lost on refresh |

### Best Practice: HttpOnly Cookies

\`\`\`
// Server sets the cookie
Set-Cookie: token=abc123; HttpOnly; Secure; SameSite=Strict; Path=/
\`\`\`

JavaScript **cannot access** HttpOnly cookies, making them immune to XSS.

### In-Memory Token Pattern

\`\`\`jsx
// Store token only in memory — not in localStorage
let accessToken = null;

function login(credentials) {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    credentials: 'include', // sends/receives cookies
  });
  const data = await response.json();
  accessToken = data.accessToken; // short-lived, in memory
  // refresh token is in HttpOnly cookie (set by server)
}
\`\`\`

### Secure API Calls

\`\`\`jsx
async function fetchProtectedData() {
  const response = await fetch('/api/data', {
    headers: {
      'Authorization': \\\`Bearer \\\${accessToken}\\\`,
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (response.status === 401) {
    // Token expired — try refresh
    await refreshToken();
    return fetchProtectedData();
  }
  return response.json();
}
\`\`\`

### Token Refresh Pattern

Keep access tokens short-lived (5–15 min) and use refresh tokens (in HttpOnly cookies) to get new ones silently.`,task:{description:"Create an `useAuth` hook that manages authentication state. It should store the access token in memory (not localStorage), provide login/logout functions, and include an `authFetch` wrapper that automatically adds the Authorization header.",starterCode:`function useAuth() {
  // TODO: Store accessToken in state (in-memory)
  // TODO: Implement login(credentials) that calls an API
  // TODO: Implement logout() that clears the token
  // TODO: Implement authFetch(url, options) that adds auth header
  return { user: null, login, logout, authFetch };
}`,solution:`function useAuth() {
  const [user, setUser] = useState(null);
  const tokenRef = useRef(null);

  const login = async (credentials) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
      credentials: 'include',
    });
    const data = await res.json();
    tokenRef.current = data.accessToken;
    setUser(data.user);
  };

  const logout = () => {
    tokenRef.current = null;
    setUser(null);
    fetch('/api/logout', { method: 'POST', credentials: 'include' });
  };

  const authFetch = async (url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': \\\`Bearer \\\${tokenRef.current}\\\`,
      },
      credentials: 'include',
    });
  };

  return { user, login, logout, authFetch };
}`,hints:["Use useRef instead of useState for the token to avoid unnecessary re-renders",'Always include credentials: "include" for cookie-based refresh tokens',"Never store the token in localStorage — it is accessible to XSS attacks"]}},{id:"mod9-t3",title:"CSRF Protection & Secure Requests",explanation:`## Cross-Site Request Forgery (CSRF)

CSRF tricks a user's browser into making unwanted requests to a site where the user is authenticated.

### How CSRF Works

1. User logs into \`bank.com\` (session cookie is set)
2. User visits malicious site that has: \`<img src="https://bank.com/transfer?to=hacker&amount=1000">\`
3. Browser sends the request with the session cookie automatically

### Protection Strategies

#### 1. SameSite Cookies
\`\`\`
Set-Cookie: session=abc; SameSite=Strict; Secure; HttpOnly
\`\`\`
- **Strict** — Cookie never sent on cross-site requests
- **Lax** — Cookie sent on top-level navigation (GET) only
- **None** — Always sent (requires Secure flag)

#### 2. CSRF Tokens
\`\`\`jsx
function TransferForm() {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    fetch('/api/csrf-token', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setCsrfToken(data.token));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      credentials: 'include',
      body: JSON.stringify({ to, amount }),
    });
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
\`\`\`

#### 3. Custom Request Headers

APIs can require a custom header that browsers don't send automatically from cross-origin forms:

\`\`\`jsx
fetch('/api/action', {
  method: 'POST',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  credentials: 'include',
});
\`\`\`

### CORS & React

When your React app communicates with a different domain, the browser enforces CORS. Your API must set proper headers:

\`\`\`
Access-Control-Allow-Origin: https://your-app.com
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Content-Type, X-CSRF-Token
\`\`\``,task:{description:'Create a `SecureForm` component that fetches a CSRF token on mount and includes it in form submissions. The form should have a "recipient" and "amount" field for a mock transfer.',starterCode:`function SecureForm() {
  // TODO: Fetch CSRF token on mount
  // TODO: Include CSRF token in form submission
  // TODO: Render form with recipient and amount fields
  return null;
}`,solution:`function SecureForm() {
  const [csrfToken, setCsrfToken] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/csrf-token', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setCsrfToken(data.token))
      .catch(() => setStatus('Failed to fetch CSRF token'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({ recipient, amount: Number(amount) }),
      });
      setStatus(res.ok ? 'Transfer successful' : 'Transfer failed');
    } catch {
      setStatus('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient" />
      <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Amount" />
      <button type="submit" disabled={!csrfToken}>Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}`,hints:["Fetch the CSRF token in a useEffect with an empty dependency array","Send the token as a custom header: X-CSRF-Token","Disable the submit button until the CSRF token is loaded"]}},{id:"mod9-t4",title:"Input Validation & Secure Data Handling",explanation:`## Client-Side Validation

While server-side validation is mandatory, client-side validation improves UX and reduces unnecessary requests.

### Validating User Input

\`\`\`jsx
function validateEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

function validatePassword(password) {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };
  return { valid: Object.values(checks).every(Boolean), checks };
}

function SignupForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Submit the form
  };
}
\`\`\`

### Preventing Sensitive Data Leaks

1. **Never log sensitive data** to the console in production:
\`\`\`jsx
// ❌ Bad
console.log('User token:', token);

// ✅ Good — use environment checks
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', safeData);
}
\`\`\`

2. **Don't store sensitive data in state** that gets serialized:
\`\`\`jsx
// ❌ Bad — password stays in state
const [formData, setFormData] = useState({ email: '', password: '' });

// ✅ Better — use refs for sensitive fields
const passwordRef = useRef();
\`\`\`

3. **Clear sensitive data** when no longer needed:
\`\`\`jsx
useEffect(() => {
  return () => {
    // Cleanup sensitive data on unmount
    tokenRef.current = null;
  };
}, []);
\`\`\`

### Content Security Policy (CSP)

Set CSP headers to restrict what resources can load:

\`\`\`html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';">
\`\`\``,task:{description:"Create a `SecureSignupForm` with email and password fields. Validate the email format and enforce password requirements (min 8 chars, uppercase, lowercase, number). Show validation errors inline and never log the password.",starterCode:`function SecureSignupForm() {
  // TODO: Add state for email, password, and errors
  // TODO: Validate on submit
  // TODO: Show inline error messages
  return null;
}`,solution:`function SecureSignupForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const passwordRef = useRef();

  const validate = () => {
    const newErrors = {};
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    const pw = passwordRef.current?.value || '';
    if (pw.length < 8) newErrors.password = 'Must be at least 8 characters';
    else if (!/[A-Z]/.test(pw)) newErrors.password = 'Must include uppercase letter';
    else if (!/[a-z]/.test(pw)) newErrors.password = 'Must include lowercase letter';
    else if (!/[0-9]/.test(pw)) newErrors.password = 'Must include a number';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      // Submit form data securely
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input ref={passwordRef} type="password" placeholder="Password" />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Sign Up</button>
      {submitted && <p>Account created securely!</p>}
    </form>
  );
}`,hints:["Use useRef for the password field to avoid storing it in state","Validate both fields before allowing submission","Show specific error messages for each validation rule"]}}],test:[{id:"mod9-q1",question:"Why is React relatively safe from XSS by default?",options:["It uses a Web Application Firewall (WAF) internally","It automatically escapes values embedded in JSX before rendering","It blocks all user input from being rendered","It uses Content Security Policy headers automatically"],correctAnswer:1,explanation:"React escapes all values embedded in JSX by default, converting them to strings before inserting into the DOM. This prevents most XSS attacks unless you use dangerouslySetInnerHTML."},{id:"mod9-q2",question:"What is the safest place to store authentication tokens in a React app?",options:["localStorage for persistence across sessions","A global JavaScript variable accessible from the console","HttpOnly cookies set by the server","In the URL query parameters for easy access"],correctAnswer:2,explanation:"HttpOnly cookies cannot be accessed by JavaScript, making them immune to XSS attacks. They are automatically sent with requests, and combined with SameSite and Secure flags provide strong protection."},{id:"mod9-q3",question:"What does a CSRF attack exploit?",options:["Vulnerabilities in the JavaScript runtime engine","The browser automatically sending cookies with cross-site requests","Weak encryption algorithms used for data transmission","Insecure Content Security Policy headers on the page"],correctAnswer:1,explanation:"CSRF exploits the fact that browsers automatically include cookies with every request to a domain, even when the request originates from a different site."},{id:"mod9-q4",question:"Why should you use useRef instead of useState for password fields?",options:["useRef provides built-in password encryption","useState triggers re-renders and keeps the value in the component tree, risking exposure","useRef automatically hides the value from browser developer tools","useState cannot be used with input elements of type password"],correctAnswer:1,explanation:"useState stores values in React state which is visible in React DevTools and causes re-renders. useRef keeps the value in a mutable ref that does not appear in the React tree or trigger re-renders."},{id:"mod9-q5",question:"Which of the following is a safe use of dangerouslySetInnerHTML?",options:["Rendering user-submitted comments directly without processing","Rendering content sanitized by a library like DOMPurify before injection","Rendering HTML fetched from any third-party API endpoint","Rendering error messages that include user input for debugging"],correctAnswer:1,explanation:"dangerouslySetInnerHTML should only be used with sanitized content. Libraries like DOMPurify strip out dangerous elements and attributes, making the HTML safe to render."}]},tm={id:"mod-10",title:"React Tricks",description:"Discover powerful React patterns and tricks: portals, key-based remounting, ref forwarding, compound components, and clever state patterns.",topics:[{id:"mod10-t1",title:"Portals — Rendering Outside the DOM Hierarchy",explanation:`## React Portals

Portals let you render a child into a DOM node that exists **outside the parent component's DOM hierarchy**, while keeping it inside React's component tree.

\`\`\`jsx
import { createPortal } from 'react-dom';

function Modal({ children, onClose }) {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
}
\`\`\`

### Why Portals?

1. **Escape CSS overflow/z-index issues** — Modals, tooltips, and dropdowns often get clipped by \`overflow: hidden\` on ancestors. Portals move them to document body.
2. **Event bubbling still works** — Even though the DOM node is outside the parent, React events still bubble up through the React tree.
3. **Preserve context** — Portals still have access to React context from their parent.

### Portal Use Cases

- **Modals & dialogs**
- **Tooltips & popovers**
- **Toast notifications**
- **Dropdown menus** that need to overflow containers

### Creating a Reusable Portal Component

\`\`\`jsx
function Portal({ children, containerId = 'portal-root' }) {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    let el = document.getElementById(containerId);
    if (!el) {
      el = document.createElement('div');
      el.id = containerId;
      document.body.appendChild(el);
    }
    setContainer(el);
  }, [containerId]);

  if (!container) return null;
  return createPortal(children, container);
}
\`\`\``,task:{description:"Create a `Tooltip` component using a portal. It should render the tooltip content at document.body level. The tooltip should appear when the user hovers over the trigger element and disappear when they leave.",starterCode:`function Tooltip({ children, text }) {
  // TODO: Track hover state
  // TODO: Use createPortal to render tooltip at document.body
  // TODO: Position tooltip near the trigger element
  return null;
}`,solution:`function Tooltip({ children, text }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  const show = () => {
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({ top: rect.top - 30 + window.scrollY, left: rect.left + rect.width / 2 });
    setVisible(true);
  };

  const hide = () => setVisible(false);

  return (
    <>
      <span ref={triggerRef} onMouseEnter={show} onMouseLeave={hide}>
        {children}
      </span>
      {visible && createPortal(
        <div className="tooltip" style={{ position: 'absolute', top: pos.top, left: pos.left, transform: 'translateX(-50%)' }}>
          {text}
        </div>,
        document.body
      )}
    </>
  );
}`,hints:['Import createPortal from "react-dom"',"Use getBoundingClientRect() to get the position of the trigger element","Remember to add window.scrollY for absolute positioning"]}},{id:"mod10-t2",title:"Key-Based Component Remounting",explanation:`## The Key Trick: Resetting Components

When you change a component's \`key\` prop, React **unmounts the old instance and mounts a fresh one**, completely resetting all state.

\`\`\`jsx
function App() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <button onClick={() => setUserId(id => id + 1)}>Next User</button>
      {/* When userId changes, EditProfile is completely remounted */}
      <EditProfile key={userId} userId={userId} />
    </>
  );
}

function EditProfile({ userId }) {
  // This state resets when key changes — no stale data!
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  // ...
}
\`\`\`

### When to Use Key Remounting

1. **Resetting form state** when switching between entities (users, products, etc.)
2. **Restarting animations** by forcing remount
3. **Clearing component state** without manual reset logic
4. **Forcing useEffect re-runs** by causing full remount

### Key Swap Trick for Transitions

\`\`\`jsx
function AnimatedList({ items, activeId }) {
  return (
    <div>
      {/* Force animation restart when activeId changes */}
      <DetailPanel key={activeId} item={items.find(i => i.id === activeId)} />
    </div>
  );
}
\`\`\`

### Alternative: Using a Reset Callback

If remounting is too expensive, pass a reset version counter:

\`\`\`jsx
function ResettableForm({ resetKey, onSubmit }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');  // Reset when resetKey changes
  }, [resetKey]);

  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
\`\`\``,task:{description:'Create a `TabEditor` component with multiple tabs (e.g., "Bio", "Settings", "Notes"). Each tab shows a text area. Use the key trick to reset the text area content when switching tabs, without manual state clearing.',starterCode:`const TABS = ['Bio', 'Settings', 'Notes'];

function TabEditor() {
  // TODO: Track active tab
  // TODO: Use key to reset editor when tab changes
  return null;
}

function Editor({ tabName }) {
  // TODO: Text area with local state
  return null;
}`,solution:`const TABS = ['Bio', 'Settings', 'Notes'];

function TabEditor() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div>
      <div className="tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={tab === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <Editor key={activeTab} tabName={activeTab} />
    </div>
  );
}

function Editor({ tabName }) {
  const [text, setText] = useState('');

  return (
    <div>
      <h3>{tabName}</h3>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder={\`Write your \${tabName.toLowerCase()}...\`} />
    </div>
  );
}`,hints:["Pass activeTab as the key prop to the Editor component","When the key changes, React unmounts and remounts the component","The Editor component just needs a simple useState for its text"]}},{id:"mod10-t3",title:"Ref Forwarding & useImperativeHandle",explanation:`## Forwarding Refs

By default, you can't pass a \`ref\` to a function component. \`forwardRef\` solves this:

\`\`\`jsx
import { forwardRef } from 'react';

const FancyInput = forwardRef(function FancyInput(props, ref) {
  return <input ref={ref} className="fancy" {...props} />;
});

// Parent can now access the input's DOM node
function Form() {
  const inputRef = useRef(null);
  return (
    <>
      <FancyInput ref={inputRef} placeholder="Type here" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
\`\`\`

### useImperativeHandle: Custom Ref API

Instead of exposing the full DOM node, you can expose a **custom API**:

\`\`\`jsx
const VideoPlayer = forwardRef(function VideoPlayer({ src }, ref) {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    restart: () => {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    },
  }));

  return <video ref={videoRef} src={src} />;
});

// Parent gets a clean API
function App() {
  const playerRef = useRef(null);
  return (
    <>
      <VideoPlayer ref={playerRef} src="movie.mp4" />
      <button onClick={() => playerRef.current.play()}>Play</button>
      <button onClick={() => playerRef.current.pause()}>Pause</button>
      <button onClick={() => playerRef.current.restart()}>Restart</button>
    </>
  );
}
\`\`\`

### When to Use

- **Component libraries** — expose focus/scroll methods on custom inputs
- **Complex components** — expose a simplified imperative API
- **Integration with third-party libraries** — wrap imperative APIs in React components`,task:{description:"Create a `CountdownTimer` component that uses `forwardRef` and `useImperativeHandle` to expose `start()`, `stop()`, and `reset()` methods to the parent. The timer should count down from a given number of seconds.",starterCode:`// TODO: Use forwardRef and useImperativeHandle
function CountdownTimer({ seconds }, ref) {
  // TODO: Track remaining time
  // TODO: Expose start, stop, reset via ref
  return null;
}`,solution:`const CountdownTimer = forwardRef(function CountdownTimer({ seconds }, ref) {
  const [remaining, setRemaining] = useState(seconds);
  const intervalRef = useRef(null);

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const start = () => {
    stop();
    intervalRef.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return r - 1;
      });
    }, 1000);
  };

  const reset = () => {
    stop();
    setRemaining(seconds);
  };

  useImperativeHandle(ref, () => ({ start, stop, reset }));

  useEffect(() => stop, []);

  return <div className="countdown">{remaining}s</div>;
});`,hints:["Wrap the component with forwardRef to receive the ref parameter","Use setInterval and store its id in a ref for cleanup","useImperativeHandle takes (ref, createHandle) as arguments"]}},{id:"mod10-t4",title:"Clever State Patterns",explanation:`## State Reducer Pattern

Let consumers customize state transitions by passing a custom reducer:

\`\`\`jsx
function useToggle({ reducer = (state, action) => action.changes } = {}) {
  const [on, setOn] = useState(false);

  function toggle() {
    const changes = !on;
    const result = reducer({ on }, { type: 'toggle', changes });
    setOn(result);
  }

  return { on, toggle };
}

// Usage — limit toggles
function App() {
  const [count, setCount] = useState(0);

  const { on, toggle } = useToggle({
    reducer: (state, action) => {
      if (count >= 4) return state.on; // Max 4 toggles
      setCount(c => c + 1);
      return action.changes;
    },
  });
}
\`\`\`

## Derived State: Compute, Don't Store

\`\`\`jsx
// ❌ Bad — storing derived state
const [items, setItems] = useState(allItems);
const [filteredItems, setFilteredItems] = useState(allItems);
const [filter, setFilter] = useState('');

useEffect(() => {
  setFilteredItems(items.filter(i => i.name.includes(filter)));
}, [filter, items]);

// ✅ Good — derive during render
const [items, setItems] = useState(allItems);
const [filter, setFilter] = useState('');
const filteredItems = items.filter(i => i.name.includes(filter));
\`\`\`

## Lazy Initialization

Pass a function to \`useState\` for expensive initial values:

\`\`\`jsx
// ❌ Bad — runs every render (the getExpensiveValue call)
const [data, setData] = useState(getExpensiveValue());

// ✅ Good — runs only on mount
const [data, setData] = useState(() => getExpensiveValue());
\`\`\`

## Functional Updates

Use functional form when the new state depends on the old:

\`\`\`jsx
// ❌ Stale closure risk
setCount(count + 1);

// ✅ Always uses latest state
setCount(prev => prev + 1);
\`\`\``,task:{description:"Create an `useUndoableState` hook that wraps useState and adds undo/redo functionality. It should maintain a history stack and provide `undo()`, `redo()`, `set()`, and `canUndo`/`canRedo` flags.",starterCode:`function useUndoableState(initialValue) {
  // TODO: Track history (past, present, future)
  // TODO: Implement set, undo, redo
  // TODO: Return { value, set, undo, redo, canUndo, canRedo }
}`,solution:`function useUndoableState(initialValue) {
  const [state, setState] = useState({
    past: [],
    present: initialValue,
    future: [],
  });

  const set = (newValue) => {
    setState(s => ({
      past: [...s.past, s.present],
      present: typeof newValue === 'function' ? newValue(s.present) : newValue,
      future: [],
    }));
  };

  const undo = () => {
    setState(s => {
      if (s.past.length === 0) return s;
      const previous = s.past[s.past.length - 1];
      return {
        past: s.past.slice(0, -1),
        present: previous,
        future: [s.present, ...s.future],
      };
    });
  };

  const redo = () => {
    setState(s => {
      if (s.future.length === 0) return s;
      const next = s.future[0];
      return {
        past: [...s.past, s.present],
        present: next,
        future: s.future.slice(1),
      };
    });
  };

  return {
    value: state.present,
    set,
    undo,
    redo,
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0,
  };
}`,hints:["Use a single state object with past (array), present, and future (array)","On set: push present to past, clear future","On undo: pop from past, push present to future"]}}],test:[{id:"mod10-q1",question:"What happens when you change a component's key prop?",options:["React updates the component's props without re-rendering","React unmounts the old instance and mounts a completely new one","React triggers the componentDidUpdate lifecycle method only","React throws an error because key is a reserved internal prop"],correctAnswer:1,explanation:"Changing a component's key causes React to treat it as a completely different element. The old component is unmounted and a new one is mounted, resetting all internal state."},{id:"mod10-q2",question:"What problem do React portals solve?",options:["They improve rendering performance by batching DOM updates","They allow rendering children into a DOM node outside the parent hierarchy","They create isolated JavaScript contexts for security","They enable server-side rendering of client-only components"],correctAnswer:1,explanation:"Portals render children into a different DOM node while keeping them in the same React tree. This solves CSS overflow/z-index issues for modals, tooltips, and dropdowns."},{id:"mod10-q3",question:"What does useImperativeHandle do?",options:["It forces a component to use imperative (class-based) lifecycle methods","It lets you customize the value exposed to parent components via ref","It prevents child components from having any state","It converts a controlled component into an uncontrolled one"],correctAnswer:1,explanation:"useImperativeHandle is used with forwardRef to expose a custom API through the ref, instead of exposing the entire DOM node. This gives parents a clean imperative interface."},{id:"mod10-q4",question:"Why should you pass a function to useState for expensive initial values?",options:["Functions are faster to store in memory than primitive values","It makes the component a pure function by avoiding side effects","The function runs only on mount, avoiding expensive computation every render","React requires all initial state values to be wrapped in functions"],correctAnswer:2,explanation:"useState(() => expensiveValue()) is lazy initialization. The function runs only once on mount. Without it, useState(expensiveValue()) calls the expensive function on every render even though the result is ignored after mount."},{id:"mod10-q5",question:"What is wrong with storing derived state separately with useState?",options:["It requires TypeScript generics which are not supported","It creates duplicated data that can go out of sync and causes unnecessary re-renders","React does not allow more than three useState calls per component","Derived state requires useReducer and cannot use useState"],correctAnswer:1,explanation:"Storing derived state creates a second source of truth that must be kept in sync (usually via useEffect). Instead, compute it during render: const filtered = items.filter(...). This is simpler and always consistent."}]},nm={id:"mod-11",title:"React Traps",description:"Avoid the most common React pitfalls: stale closures, infinite re-render loops, useEffect dependency mistakes, state batching surprises, and object/array mutation traps.",topics:[{id:"mod11-t1",title:"Stale Closures",explanation:`## The Stale Closure Problem

JavaScript closures capture variables **by reference**, but the reference points to the value at the time the closure was created. In React, this leads to reading **stale state** values.

### Classic Example: setInterval

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // ❌ Bug! count is always 0 here (captured at mount)
      console.log('count:', count);
      setCount(count + 1); // Always sets to 1
    }, 1000);
    return () => clearInterval(id);
  }, []); // Empty deps = closure captures initial count
}
\`\`\`

### Fix 1: Functional Updates

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    // ✅ Functional update always uses latest state
    setCount(prev => prev + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);
\`\`\`

### Fix 2: useRef for Latest Value

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count; // Always sync

  useEffect(() => {
    const id = setInterval(() => {
      // ✅ Ref always has the latest value
      console.log('count:', countRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);
}
\`\`\`

### Fix 3: Proper Dependencies

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('count:', count);
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(id);
}, [count]); // ✅ Re-creates interval when count changes
// (but this creates a new interval every second!)
\`\`\`

### Event Handler Stale Closures

\`\`\`jsx
function Chat({ messages }) {
  const [draft, setDraft] = useState('');

  // ❌ If this is memoized, it captures stale draft
  const handleSend = useCallback(() => {
    sendMessage(draft);
  }, []); // Missing draft dependency!

  // ✅ Fixed
  const handleSend = useCallback(() => {
    sendMessage(draft);
  }, [draft]);
}
\`\`\``,task:{description:"Create a `StopWatch` component with start/stop/reset buttons. It should display elapsed time in seconds. Use setInterval correctly, avoiding the stale closure trap.",starterCode:`function StopWatch() {
  // TODO: Track elapsed time and running state
  // TODO: Use setInterval without stale closure bugs
  // TODO: Implement start, stop, reset
  return null;
}`,solution:`function StopWatch() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return (
    <div>
      <p>{elapsed}s</p>
      <button onClick={() => setRunning(true)} disabled={running}>Start</button>
      <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,hints:["Use functional update (prev => prev + 1) to avoid stale closure","Store the interval ID in a ref so cleanup can clear it","Let the running state control the useEffect that creates/clears the interval"]}},{id:"mod11-t2",title:"Infinite Re-render Loops",explanation:`## Common Causes of Infinite Loops

### 1. Setting State During Render

\`\`\`jsx
function Bad() {
  const [count, setCount] = useState(0);
  setCount(count + 1); // ❌ Infinite loop! State update triggers re-render
  return <p>{count}</p>;
}
\`\`\`

### 2. Object/Array in useEffect Dependencies

\`\`\`jsx
function Bad({ userId }) {
  const [user, setUser] = useState(null);

  // ❌ New object reference every render → infinite loop
  const options = { method: 'GET', headers: { Accept: 'application/json' } };

  useEffect(() => {
    fetch(\\\`/api/users/\\\${userId}\\\`, options)
      .then(r => r.json())
      .then(setUser);
  }, [userId, options]); // options is new every render!
}

// ✅ Fix: move options inside useEffect or useMemo
function Good({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const options = { method: 'GET', headers: { Accept: 'application/json' } };
    fetch(\\\`/api/users/\\\${userId}\\\`, options)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
}
\`\`\`

### 3. Setting State Inside useEffect Without Guards

\`\`\`jsx
function Bad() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // ❌ Infinite: setFiltered triggers re-render → useEffect runs again
  useEffect(() => {
    setFiltered(items.filter(i => i.active));
  }, [items]); // Looks fine, but if items is recreated each render...
}

// ✅ Fix: Derive state during render
function Good() {
  const [items, setItems] = useState([]);
  const filtered = items.filter(i => i.active); // No useEffect needed
}
\`\`\`

### 4. Function Dependencies

\`\`\`jsx
function Bad() {
  // ❌ New function every render → useEffect runs infinitely
  const fetchData = () => fetch('/api/data').then(r => r.json());

  useEffect(() => {
    fetchData().then(setData);
  }, [fetchData]); // New reference every time

  // ✅ Fix: wrap in useCallback
  const fetchData = useCallback(
    () => fetch('/api/data').then(r => r.json()),
    []
  );
}
\`\`\`

### Debugging Infinite Loops

Add a render counter to detect them:
\`\`\`jsx
const renderCount = useRef(0);
renderCount.current++;
console.log('Render #', renderCount.current);
\`\`\``,task:{description:"You are given a buggy component that has an infinite re-render loop. Fix it. The component should fetch a list of users and allow filtering by a search term.",starterCode:`function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchOptions = { method: 'GET' };

  useEffect(() => {
    fetch('/api/users', fetchOptions)
      .then(r => r.json())
      .then(data => setUsers(data));
  }, [fetchOptions]);

  useEffect(() => {
    setFilteredUsers(users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase())
    ));
  }, [users, search]);

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {filteredUsers.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}`,solution:`function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/users', { method: 'GET' })
      .then(r => r.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {filteredUsers.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}`,hints:["fetchOptions creates a new object every render — move it inside useEffect or remove from deps","filteredUsers is derived state — compute it during render instead of storing it","The fetch only needs to run once on mount — use an empty dependency array"]}},{id:"mod11-t3",title:"State Mutation Traps",explanation:`## Never Mutate State Directly

React uses **referential equality** (\`===\`) to detect changes. If you mutate an object or array in place, React doesn't see a change and **won't re-render**.

### Array Mutations

\`\`\`jsx
// ❌ Mutating the same array — React won't re-render
const handleAdd = (item) => {
  items.push(item);
  setItems(items); // Same reference! React ignores this
};

// ✅ Create a new array
const handleAdd = (item) => {
  setItems([...items, item]);
};

// ✅ Other immutable array operations
setItems(items.filter(i => i.id !== id));         // Remove
setItems(items.map(i => i.id === id ? {...i, done: true} : i)); // Update
\`\`\`

### Object Mutations

\`\`\`jsx
// ❌ Mutating the same object
const handleUpdate = () => {
  user.name = 'New Name';
  setUser(user); // Same reference!
};

// ✅ Create a new object
const handleUpdate = () => {
  setUser({ ...user, name: 'New Name' });
};
\`\`\`

### Nested Object Traps

\`\`\`jsx
// ❌ Shallow spread doesn't help with nested objects
const handleUpdate = () => {
  const newUser = { ...user };
  newUser.address.city = 'New City'; // Still mutates the nested object!
  setUser(newUser);
};

// ✅ Spread at every level
const handleUpdate = () => {
  setUser({
    ...user,
    address: { ...user.address, city: 'New City' },
  });
};
\`\`\`

### The Sort Trap

\`\`\`jsx
// ❌ .sort() mutates the array in place!
const sorted = items.sort((a, b) => a.name.localeCompare(b.name));
setItems(sorted); // Same reference as items!

// ✅ Copy first, then sort
const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
setItems(sorted);
\`\`\`

### Using Immer for Complex Updates

\`\`\`jsx
import { produce } from 'immer';

setUser(produce(draft => {
  draft.address.city = 'New City';
  draft.contacts[0].email = 'new@email.com';
}));
\`\`\``,task:{description:"Fix a buggy `TodoApp` component that has several state mutation bugs. The app should let you add todos, toggle their completion, delete todos, and sort them by name.",starterCode:`function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build app', done: false },
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    todos.push({ id: Date.now(), text: input, done: false });
    setTodos(todos);
    setInput('');
  };

  const toggleTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    todo.done = !todo.done;
    setTodos(todos);
  };

  const deleteTodo = (id) => {
    const idx = todos.findIndex(t => t.id === id);
    todos.splice(idx, 1);
    setTodos(todos);
  };

  const sortTodos = () => {
    todos.sort((a, b) => a.text.localeCompare(b.text));
    setTodos(todos);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <button onClick={sortTodos}>Sort</button>
      {todos.map(t => (
        <div key={t.id}>
          <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}
                onClick={() => toggleTodo(t.id)}>{t.text}</span>
          <button onClick={() => deleteTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
}`,solution:`function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build app', done: false },
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const sortTodos = () => {
    setTodos([...todos].sort((a, b) => a.text.localeCompare(b.text)));
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <button onClick={sortTodos}>Sort</button>
      {todos.map(t => (
        <div key={t.id}>
          <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}
                onClick={() => toggleTodo(t.id)}>{t.text}</span>
          <button onClick={() => deleteTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
}`,hints:["Use spread [...todos, newItem] instead of push()","Use .map() with spread for updates, .filter() for deletions","Copy the array before sorting: [...todos].sort(...)"]}},{id:"mod11-t4",title:"useEffect Dependency Pitfalls",explanation:`## Common useEffect Mistakes

### 1. Missing Dependencies

\`\`\`jsx
// ❌ Missing 'userId' in deps — fetches wrong user
function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(\\\`/api/users/\\\${userId}\\\`)
      .then(r => r.json())
      .then(setUser);
  }, []); // userId is missing!

  // ✅ Fixed
  useEffect(() => {
    fetch(\\\`/api/users/\\\${userId}\\\`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
}
\`\`\`

### 2. Over-Fetching with Too Many Deps

\`\`\`jsx
// ❌ Fetches again whenever ANY state changes
useEffect(() => {
  fetchDashboardData(userId, filters, sortOrder);
}, [userId, filters, sortOrder]); // Too reactive!

// ✅ Separate concerns
useEffect(() => {
  fetchUserData(userId);
}, [userId]);

// Derive filtered/sorted data during render
const displayed = useMemo(
  () => applyFilters(data, filters, sortOrder),
  [data, filters, sortOrder]
);
\`\`\`

### 3. Race Conditions

\`\`\`jsx
// ❌ If userId changes quickly, old response may arrive last
useEffect(() => {
  fetch(\\\`/api/users/\\\${userId}\\\`)
    .then(r => r.json())
    .then(setUser);
}, [userId]);

// ✅ Use cleanup to ignore stale responses
useEffect(() => {
  let cancelled = false;
  fetch(\\\`/api/users/\\\${userId}\\\`)
    .then(r => r.json())
    .then(data => {
      if (!cancelled) setUser(data);
    });
  return () => { cancelled = true; };
}, [userId]);

// ✅ Or use AbortController
useEffect(() => {
  const controller = new AbortController();
  fetch(\\\`/api/users/\\\${userId}\\\`, { signal: controller.signal })
    .then(r => r.json())
    .then(setUser)
    .catch(e => {
      if (e.name !== 'AbortError') throw e;
    });
  return () => controller.abort();
}, [userId]);
\`\`\`

### 4. useEffect for Synchronous Logic

\`\`\`jsx
// ❌ Don't use useEffect for derived state
useEffect(() => {
  setFullName(firstName + ' ' + lastName);
}, [firstName, lastName]);

// ✅ Just compute it
const fullName = firstName + ' ' + lastName;
\`\`\`

### 5. Forgetting Cleanup

\`\`\`jsx
// ❌ Memory leak with subscriptions
useEffect(() => {
  const ws = new WebSocket('ws://api');
  ws.onmessage = (e) => setMessages(prev => [...prev, e.data]);
  // No cleanup!
}, []);

// ✅ Always clean up
useEffect(() => {
  const ws = new WebSocket('ws://api');
  ws.onmessage = (e) => setMessages(prev => [...prev, e.data]);
  return () => ws.close();
}, []);
\`\`\``,task:{description:"Fix a component that fetches user profile data. It has three bugs: missing dependency, race condition, and missing cleanup. The component should correctly handle rapid userId changes.",starterCode:`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(r => r.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return <h1>{user?.name}</h1>;
}`,solution:`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(e => {
        if (e.name !== 'AbortError') {
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  return <h1>{user?.name}</h1>;
}`,hints:["Add userId to the dependency array","Use AbortController to cancel in-flight requests when userId changes","Return a cleanup function that calls controller.abort()"]}}],test:[{id:"mod11-q1",question:'What is a "stale closure" in React?',options:["A component that has been unmounted but still exists in the virtual DOM","A function that captures an old value of state or props from a previous render","A CSS class that is no longer applied to any DOM elements","A memory leak caused by not cleaning up event listeners properly"],correctAnswer:1,explanation:"A stale closure occurs when a function (created in a previous render) captures and uses an old value of state or props. Common with setInterval, setTimeout, and event handlers."},{id:"mod11-q2",question:"Why does items.push(newItem); setItems(items) not trigger a re-render?",options:["push() is not a valid JavaScript method for arrays","React uses referential equality (===) and the reference hasn't changed","setItems only accepts primitive values, not arrays","React batches array updates and delays the re-render indefinitely"],correctAnswer:1,explanation:"push() mutates the array in place. Since items is the same reference before and after, React's === check sees no change and skips re-rendering. Always create a new array: setItems([...items, newItem])."},{id:"mod11-q3",question:"How can you prevent race conditions in useEffect data fetching?",options:["By using synchronous XMLHttpRequest instead of fetch","By removing all dependencies from the useEffect array","By using AbortController to cancel outdated requests in the cleanup function","By wrapping the fetch call in a try-catch block"],correctAnswer:2,explanation:"AbortController lets you cancel an in-flight fetch request when the component unmounts or when the dependency changes. The cleanup function calls controller.abort() to prevent stale data from being set."},{id:"mod11-q4",question:"What is wrong with: useEffect(() => { setFilteredItems(items.filter(fn)); }, [items])?",options:["filter() is not allowed inside useEffect","It's unnecessary — derived state should be computed during render, not in useEffect","items cannot be used as a useEffect dependency","useEffect cannot call setState — it causes an error"],correctAnswer:1,explanation:"filteredItems is derived state — it can always be computed from items and the filter function. Using useEffect to sync it is unnecessary and creates an extra render cycle. Just compute it: const filtered = items.filter(fn)."},{id:"mod11-q5",question:"Which operation mutates the array in place and can cause bugs in React?",options:["items.filter(fn)","items.map(fn)","items.sort(fn)","[...items, newItem]"],correctAnswer:2,explanation:"Array.sort() mutates the original array in place and returns the same reference. In React, use [...items].sort(fn) to create a copy first. filter() and map() already return new arrays."}]},rm={id:"mod-12",title:"Common Custom Hooks",description:"Build reusable custom hooks for everyday needs: useDebounce, useLocalStorage, useFetch, useMediaQuery, useOnClickOutside, and more.",topics:[{id:"mod12-t1",title:"useDebounce & useThrottle",explanation:`## useDebounce

Debouncing delays execution until a pause in events. Perfect for search inputs where you don't want to fire an API call on every keystroke.

\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      fetchResults(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
\`\`\`

### How It Works

1. Every time \`value\` changes, a timer is set for \`delay\` ms
2. If \`value\` changes again before the timer fires, the old timer is cleared
3. Only the last value (after a pause) triggers the update

## useDebouncedCallback

For debouncing a function itself:

\`\`\`jsx
function useDebouncedCallback(callback, delay) {
  const timerRef = useRef(null);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const debouncedFn = useCallback((...args) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
  }, [delay]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return debouncedFn;
}
\`\`\`

## useThrottle

Throttling ensures a function runs at most once per interval:

\`\`\`jsx
function useThrottle(value, interval) {
  const [throttled, setThrottled] = useState(value);
  const lastRun = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    if (now - lastRun.current >= interval) {
      lastRun.current = now;
      setThrottled(value);
    } else {
      const timer = setTimeout(() => {
        lastRun.current = Date.now();
        setThrottled(value);
      }, interval - (now - lastRun.current));
      return () => clearTimeout(timer);
    }
  }, [value, interval]);

  return throttled;
}
\`\`\``,task:{description:"Implement a `useDebounce` hook and use it in a `SearchBox` component. The component should show the current input value and the debounced value, demonstrating the delay. Also show a counter of how many API calls would be saved.",starterCode:`function useDebounce(value, delay) {
  // TODO: Return the debounced value
}

function SearchBox() {
  // TODO: Show input, current value, debounced value, and call count
  return null;
}`,solution:`function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

function SearchBox() {
  const [query, setQuery] = useState('');
  const [typeCount, setTypeCount] = useState(0);
  const [searchCount, setSearchCount] = useState(0);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      setSearchCount(c => c + 1);
    }
  }, [debouncedQuery]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setTypeCount(c => c + 1);
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      <p>Current: {query}</p>
      <p>Debounced: {debouncedQuery}</p>
      <p>Keystrokes: {typeCount}, API calls: {searchCount} (saved {typeCount - searchCount})</p>
    </div>
  );
}`,hints:["Use setTimeout in a useEffect, returning clearTimeout as cleanup","The debounced value updates only after the user stops typing for the delay period","Track keystroke count vs API call count to demonstrate the savings"]}},{id:"mod12-t2",title:"useLocalStorage",explanation:`## Persistent State with useLocalStorage

A drop-in replacement for \`useState\` that automatically syncs with localStorage.

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    try {
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

### Usage

\`\`\`jsx
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);

  return (
    <div>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <input type="range" value={fontSize}
        onChange={e => setFontSize(Number(e.target.value))} />
    </div>
  );
}
\`\`\`

### Advanced: Cross-Tab Sync

Listen for storage events to sync across browser tabs:

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}
\`\`\``,task:{description:"Implement `useLocalStorage` with cross-tab sync support. Create a `Preferences` component that stores theme (light/dark) and language (en/es/fr) using the hook. Changes should persist across page refreshes and sync across tabs.",starterCode:`function useLocalStorage(key, initialValue) {
  // TODO: Initialize from localStorage
  // TODO: Sync to localStorage on change
  // TODO: Listen for cross-tab storage events
}

function Preferences() {
  // TODO: Use useLocalStorage for theme and language
  return null;
}`,solution:`function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === key && e.newValue !== null) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key]);

  const setValue = (value) => {
    const val = value instanceof Function ? value(storedValue) : value;
    setStoredValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [storedValue, setValue];
}

function Preferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [lang, setLang] = useLocalStorage('language', 'en');

  return (
    <div className={theme}>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <select value={lang} onChange={e => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}`,hints:["Use lazy initialization: useState(() => localStorage.getItem(...))",'Listen for the "storage" event on window for cross-tab sync',"The storage event only fires in OTHER tabs, not the current one"]}},{id:"mod12-t3",title:"useFetch",explanation:`## A Reusable Data Fetching Hook

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
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

### Usage

\`\`\`jsx
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\\\`/api/users/\\\${userId}\\\`);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  return <h1>{user.name}</h1>;
}
\`\`\`

### Enhanced Version with Refetch

\`\`\`jsx
function useFetch(url, options = {}) {
  const [state, setState] = useState({
    data: null, loading: true, error: null,
  });

  const fetchData = useCallback(() => {
    const controller = new AbortController();
    setState(s => ({ ...s, loading: true, error: null }));

    fetch(url, { ...options, signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
        return res.json();
      })
      .then(data => setState({ data, loading: false, error: null }))
      .catch(err => {
        if (err.name !== 'AbortError') {
          setState({ data: null, loading: false, error: err.message });
        }
      });

    return controller;
  }, [url]);

  useEffect(() => {
    const controller = fetchData();
    return () => controller.abort();
  }, [fetchData]);

  const refetch = () => fetchData();

  return { ...state, refetch };
}
\`\`\``,task:{description:'Implement a `useFetch` hook with loading, error, and refetch support. Use it in a `PostList` component that fetches and displays posts. Include a "Retry" button that appears on error and a "Refresh" button for manual refetch.',starterCode:`function useFetch(url) {
  // TODO: Implement with loading, error, data, and refetch
}

function PostList() {
  // TODO: Fetch posts and render them
  // TODO: Show loading spinner, error with retry, refresh button
  return null;
}`,solution:`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const fetchData = useCallback(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(data => { setData(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });
  }, [url]);

  useEffect(() => {
    fetchData();
    return () => controllerRef.current?.abort();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

function PostList() {
  const { data: posts, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading posts...</p>;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={refetch}>Retry</button>
    </div>
  );

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {posts.slice(0, 10).map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`,hints:["Use AbortController for request cancellation","Return a refetch function that re-runs the fetch","Use useCallback for fetchData so it only changes when url changes"]}},{id:"mod12-t4",title:"useMediaQuery & useOnClickOutside",explanation:`## useMediaQuery

Reactively respond to CSS media queries:

\`\`\`jsx
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Usage
function Nav() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return isMobile ? <HamburgerMenu /> : <DesktopNav />;
}
\`\`\`

### Common Breakpoints

\`\`\`jsx
function useBreakpoints() {
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return { isMobile, isTablet, isDesktop };
}
\`\`\`

## useOnClickOutside

Detect clicks outside a component (great for dropdowns, modals):

\`\`\`jsx
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// Usage
function Dropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      )}
    </div>
  );
}
\`\`\`

## useWindowSize

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handler = () => setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
}
\`\`\``,task:{description:"Build a `ResponsiveDropdown` component that uses both `useMediaQuery` and `useOnClickOutside`. On mobile (< 768px), the dropdown should appear as a full-screen overlay. On desktop, it should appear as a positioned dropdown. Clicking outside closes it.",starterCode:`function useMediaQuery(query) {
  // TODO: Implement media query hook
}

function useOnClickOutside(ref, handler) {
  // TODO: Implement click outside detection
}

function ResponsiveDropdown({ items }) {
  // TODO: Use both hooks to create a responsive dropdown
  return null;
}`,solution:`function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

function ResponsiveDropdown({ items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isMobile = useMediaQuery('(max-width: 767px)');

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <ul className={isMobile ? 'dropdown-fullscreen' : 'dropdown-positioned'}>
          {items.map((item, i) => (
            <li key={i} onClick={() => setOpen(false)}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`,hints:["useMediaQuery uses window.matchMedia() and listens for change events","useOnClickOutside listens for mousedown/touchstart on document","Check ref.current.contains(event.target) to see if click was inside"]}}],test:[{id:"mod12-q1",question:"What is the purpose of debouncing in a search input?",options:["To make the input field read-only until the user presses Enter","To delay the API call until the user stops typing for a period","To encrypt the search query before sending it to the server","To limit the total number of searches to a fixed count"],correctAnswer:1,explanation:"Debouncing delays execution until a pause in events. For search inputs, this means the API call only fires after the user stops typing, reducing unnecessary network requests."},{id:"mod12-q2",question:"Why does useLocalStorage use lazy initialization: useState(() => ...)?",options:["localStorage can only be accessed inside a function","It ensures localStorage.getItem runs only on mount, not every render","React requires all initial values to be functions","It prevents the localStorage value from being cached by the browser"],correctAnswer:1,explanation:"Lazy initialization with useState(() => ...) ensures the function runs only once on mount. Without it, localStorage.getItem would be called on every render even though the result is ignored after mount."},{id:"mod12-q3",question:"Why should useFetch include an AbortController?",options:["To improve network speed by compressing requests","To cancel in-flight requests when the component unmounts or URL changes","To retry failed requests automatically","To cache responses in the browser for offline use"],correctAnswer:1,explanation:"AbortController prevents race conditions and memory leaks by cancelling pending requests when the component unmounts or the URL changes before the response arrives."},{id:"mod12-q4",question:"How does useOnClickOutside determine if a click was outside the component?",options:["It checks if the click event's coordinates are outside the component's bounding box","It uses ref.current.contains(event.target) to see if the click target is inside","It compares the clicked element's className with the component's className","It listens only to events that bubble up to the window object"],correctAnswer:1,explanation:"ref.current.contains(event.target) checks whether the clicked DOM node is a descendant of (or equal to) the component's root node. If it is not, the click was outside."},{id:"mod12-q5",question:"What is the difference between debouncing and throttling?",options:["Debounce delays execution until a pause; throttle limits execution to once per interval","Debounce cancels all events; throttle queues them for later","Debounce works with keyboard events; throttle works with mouse events","There is no difference — they are the same technique with different names"],correctAnswer:0,explanation:"Debounce waits for a pause (e.g., user stops typing), then executes once. Throttle ensures execution happens at most once per time interval, regardless of how many events occur."}]},om={id:"mod-13",title:"TypeScript with React",description:"Master TypeScript in React: typing props, generics in components, discriminated unions for state, typing hooks, context, and event handlers.",topics:[{id:"mod13-t1",title:"Typing Props & Components",explanation:`## Typing React Props

### Interface vs Type for Props

\`\`\`tsx
// Both work — interface is conventional for props
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary'; // Optional with union
  disabled?: boolean;
}

function Button({ label, onClick, variant = 'primary', disabled }: ButtonProps) {
  return (
    <button className={variant} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
\`\`\`

### Children Typing

\`\`\`tsx
interface CardProps {
  title: string;
  children: React.ReactNode; // Accepts anything renderable
}

// For strict children typing:
interface StrictCardProps {
  children: React.ReactElement; // Only JSX elements
}

// Using PropsWithChildren helper
import { PropsWithChildren } from 'react';
type CardProps = PropsWithChildren<{ title: string }>;
\`\`\`

### Common Prop Types

| Type | Use Case |
|------|----------|
| \`React.ReactNode\` | Anything renderable (string, number, JSX, null) |
| \`React.ReactElement\` | Only JSX elements |
| \`React.CSSProperties\` | Inline style objects |
| \`React.HTMLAttributes<HTMLDivElement>\` | All native div props |
| \`React.ComponentProps<'button'>\` | All native button props |

### Extending Native HTML Props

\`\`\`tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({ label, error, ...rest }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
// Now accepts all native input props: type, placeholder, onChange, etc.
\`\`\`

### Discriminated Unions for Variant Props

\`\`\`tsx
type AlertProps =
  | { type: 'success'; message: string }
  | { type: 'error'; message: string; retryAction: () => void }
  | { type: 'loading' };

function Alert(props: AlertProps) {
  switch (props.type) {
    case 'success': return <p className="success">{props.message}</p>;
    case 'error': return (
      <div className="error">
        <p>{props.message}</p>
        <button onClick={props.retryAction}>Retry</button>
      </div>
    );
    case 'loading': return <p>Loading...</p>;
  }
}
\`\`\``,task:{description:'Create a typed `DataTable` component that accepts a `columns` array (each with `key` and `header`) and a `rows` array of objects. Use proper TypeScript interfaces. Also create a variant using discriminated unions: the table can be in "loading", "error", or "data" state.',starterCode:`// TODO: Define interfaces for columns and rows
// TODO: Create DataTable with discriminated union for state

function DataTable(props) {
  // TODO: Handle loading, error, and data states
  return null;
}`,solution:`interface Column {
  key: string;
  header: string;
}

type DataTableProps =
  | { status: 'loading' }
  | { status: 'error'; message: string; onRetry: () => void }
  | { status: 'data'; columns: Column[]; rows: Record<string, string | number>[] };

function DataTable(props: DataTableProps) {
  if (props.status === 'loading') return <p>Loading...</p>;
  if (props.status === 'error') return (
    <div>
      <p>Error: {props.message}</p>
      <button onClick={props.onRetry}>Retry</button>
    </div>
  );

  return (
    <table>
      <thead>
        <tr>
          {props.columns.map(col => <th key={col.key}>{col.header}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, i) => (
          <tr key={i}>
            {props.columns.map(col => <td key={col.key}>{row[col.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}`,hints:['Use a discriminated union with a "status" field to differentiate states',"TypeScript will narrow the type in each branch of the if/switch","Use Record<string, string | number> for flexible row data"]}},{id:"mod13-t2",title:"Generic Components",explanation:`## Generics in React Components

Generics allow components to be **type-safe without knowing the exact type** at definition time.

### Basic Generic Component

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map((item, i) => <li key={i}>{renderItem(item)}</li>)}</ul>;
}

// Usage — TypeScript infers T from the items array
<List items={users} renderItem={user => <span>{user.name}</span>} />
<List items={[1, 2, 3]} renderItem={num => <span>{num * 2}</span>} />
\`\`\`

### Generic with Constraints

\`\`\`tsx
interface HasId {
  id: string | number;
}

interface SelectableListProps<T extends HasId> {
  items: T[];
  selectedId: T['id'];
  onSelect: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
}

function SelectableList<T extends HasId>({
  items, selectedId, onSelect, renderItem,
}: SelectableListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li
          key={item.id}
          className={item.id === selectedId ? 'selected' : ''}
          onClick={() => onSelect(item)}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

### Generic Hook

\`\`\`tsx
function useArray<T>(initial: T[]) {
  const [items, setItems] = useState<T[]>(initial);

  const push = (item: T) => setItems(prev => [...prev, item]);
  const remove = (index: number) => setItems(prev => prev.filter((_, i) => i !== index));
  const update = (index: number, item: T) =>
    setItems(prev => prev.map((el, i) => (i === index ? item : el)));

  return { items, setItems, push, remove, update };
}
\`\`\`

### Arrow Function Syntax

In TSX files, the angle bracket syntax conflicts with JSX. Use this workaround:

\`\`\`tsx
// ❌ Ambiguous in .tsx files
const List = <T>(props: ListProps<T>) => { ... };

// ✅ Add extends or trailing comma
const List = <T extends unknown>(props: ListProps<T>) => { ... };
const List = <T,>(props: ListProps<T>) => { ... };
\`\`\``,task:{description:"Create a generic `Autocomplete<T>` component. It should accept items of any type (with a constraint that items must have a `label: string` field), filter them based on user input, and call `onSelect` with the full typed item.",starterCode:`// TODO: Define the generic component with proper constraints
function Autocomplete(props) {
  // TODO: Filter items by label matching the input
  // TODO: Show filtered suggestions
  // TODO: Call onSelect with the full item
  return null;
}`,solution:`interface HasLabel {
  label: string;
}

interface AutocompleteProps<T extends HasLabel> {
  items: T[];
  onSelect: (item: T) => void;
  placeholder?: string;
}

function Autocomplete<T extends HasLabel>({
  items, onSelect, placeholder,
}: AutocompleteProps<T>) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: T) => {
    setQuery(item.label);
    setOpen(false);
    onSelect(item);
  };

  return (
    <div>
      <input
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true); }}
        placeholder={placeholder}
      />
      {open && filtered.length > 0 && (
        <ul>
          {filtered.map((item, i) => (
            <li key={i} onClick={() => handleSelect(item)}>{item.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`,hints:["Use T extends HasLabel to constrain the generic type","TypeScript infers T from the items prop when used","The onSelect callback receives the full T object, preserving all type info"]}},{id:"mod13-t3",title:"Typing Hooks & Context",explanation:`## Typing useState

\`\`\`tsx
// Type is inferred
const [count, setCount] = useState(0); // number
const [name, setName] = useState(''); // string

// Explicit type needed for complex/nullable initial values
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<Item[]>([]);
\`\`\`

## Typing useReducer

\`\`\`tsx
interface State {
  count: number;
  error: string | null;
}

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'set'; payload: number }
  | { type: 'error'; message: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 };
    case 'decrement': return { ...state, count: state.count - 1 };
    case 'set': return { ...state, count: action.payload };
    case 'error': return { ...state, error: action.message };
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
dispatch({ type: 'set', payload: 42 }); // ✅
dispatch({ type: 'set' }); // ❌ Error — missing payload
\`\`\`

## Typing Context

\`\`\`tsx
interface AuthContext {
  user: User | null;
  login: (creds: Credentials) => Promise<void>;
  logout: () => void;
}

// Avoid null assertion — use a helper
const AuthCtx = createContext<AuthContext | undefined>(undefined);

function useAuth(): AuthContext {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (creds: Credentials) => {
    const u = await api.login(creds);
    setUser(u);
  };

  const logout = () => setUser(null);

  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
\`\`\`

## Typing Event Handlers

\`\`\`tsx
// Inline — TypeScript infers the type
<input onChange={e => console.log(e.target.value)} />

// Named handler — specify the event type
const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  console.log(e.target.value);
};

// Or specify the event parameter type
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

// Form submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
\`\`\``,task:{description:'Create a fully typed `ThemeContext` with `useReducer`. The theme state should have `mode` ("light" | "dark"), `primaryColor` (string), and `fontSize` (number). Actions: `toggleMode`, `setColor(payload)`, `setFontSize(payload)`. Create the provider and a `useTheme` hook.',starterCode:`// TODO: Define State and Action types
// TODO: Create reducer
// TODO: Create context, provider, and useTheme hook`,solution:`interface ThemeState {
  mode: 'light' | 'dark';
  primaryColor: string;
  fontSize: number;
}

type ThemeAction =
  | { type: 'toggleMode' }
  | { type: 'setColor'; payload: string }
  | { type: 'setFontSize'; payload: number };

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'toggleMode':
      return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };
    case 'setColor':
      return { ...state, primaryColor: action.payload };
    case 'setFontSize':
      return { ...state, fontSize: action.payload };
  }
}

interface ThemeContextValue {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

const ThemeCtx = createContext<ThemeContextValue | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: 'light',
    primaryColor: '#3b82f6',
    fontSize: 16,
  });

  return (
    <ThemeCtx.Provider value={{ state, dispatch }}>
      {children}
    </ThemeCtx.Provider>
  );
}

function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}`,hints:['Use a discriminated union for actions with a "type" field',"React.Dispatch<Action> is the type for the dispatch function","Create context as createContext<ContextValue | undefined>(undefined)"]}},{id:"mod13-t4",title:"Advanced TypeScript Patterns",explanation:`## Polymorphic Components ("as" Prop)

A component that renders as different HTML elements:

\`\`\`tsx
type BoxProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'children'>;

function Box<C extends React.ElementType = 'div'>({
  as, children, ...rest
}: BoxProps<C>) {
  const Component = as || 'div';
  return <Component {...rest}>{children}</Component>;
}

// Usage
<Box>div by default</Box>
<Box as="button" onClick={() => {}}>I'm a button</Box>
<Box as="a" href="/home">I'm a link</Box>
\`\`\`

## Template Literal Types

\`\`\`tsx
type Size = 'sm' | 'md' | 'lg';
type Color = 'red' | 'blue' | 'green';
type ClassName = \\\`\\\${Size}-\\\${Color}\\\`; // 'sm-red' | 'sm-blue' | ... (9 combinations)

interface BadgeProps {
  variant: ClassName;
}
\`\`\`

## Utility Types for Props

\`\`\`tsx
// Pick only certain props
type MiniUser = Pick<User, 'id' | 'name'>;

// Exclude certain props
type UserWithoutPassword = Omit<User, 'password'>;

// Make all props optional
type PartialUser = Partial<User>;

// Make all props required
type RequiredConfig = Required<Config>;

// Record for dictionaries
type UserMap = Record<string, User>;
\`\`\`

## Extracting Component Props

\`\`\`tsx
// Get props type from any component
type ButtonProps = React.ComponentProps<typeof Button>;

// Get props type from an HTML element
type InputProps = React.ComponentProps<'input'>;
\`\`\`

## Type Guards

\`\`\`tsx
interface TextMessage { type: 'text'; content: string }
interface ImageMessage { type: 'image'; url: string; alt: string }
type Message = TextMessage | ImageMessage;

function isTextMessage(msg: Message): msg is TextMessage {
  return msg.type === 'text';
}

function MessageBubble({ message }: { message: Message }) {
  if (isTextMessage(message)) {
    return <p>{message.content}</p>; // TS knows it's TextMessage
  }
  return <img src={message.url} alt={message.alt} />;
}
\`\`\``,task:{description:'Create a polymorphic `Typography` component with an `as` prop. It should accept "h1", "h2", "h3", "p", or "span" and pass through all native props for the chosen element. Also include a `variant` prop for styling.',starterCode:`// TODO: Create a polymorphic Typography component
// that changes its rendered element via the "as" prop
// and accepts all native HTML props for that element`,solution:`type Variant = 'heading' | 'subheading' | 'body' | 'caption';

type TypographyProps<C extends React.ElementType = 'p'> = {
  as?: C;
  variant?: Variant;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'variant' | 'children'>;

function Typography<C extends React.ElementType = 'p'>({
  as,
  variant = 'body',
  children,
  className,
  ...rest
}: TypographyProps<C>) {
  const Component = as || 'p';
  return (
    <Component
      className={\`typography \${variant} \${className || ''}\`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}

// Usage:
// <Typography as="h1" variant="heading">Title</Typography>
// <Typography as="span" variant="caption" style={{ color: 'gray' }}>Note</Typography>`,hints:['Use React.ElementType as the generic constraint for the "as" prop',"Use React.ComponentPropsWithoutRef<C> to get the element's native props","Omit your custom props from the native props to avoid conflicts"]}}],test:[{id:"mod13-q1",question:"What type should you use for the children prop that accepts anything renderable?",options:["React.ReactElement","React.ReactNode","JSX.Element","string | number"],correctAnswer:1,explanation:"React.ReactNode is the broadest type for renderable content — it includes strings, numbers, booleans, null, undefined, ReactElements, and arrays of those. ReactElement only accepts JSX elements."},{id:"mod13-q2",question:"Why is createContext<T | undefined>(undefined) preferred over createContext<T>(null as any)?",options:["It is faster at runtime because undefined uses less memory","It provides proper type safety and forces consumers to check for undefined","React does not allow null as a default value for context","TypeScript requires all generics to include undefined"],correctAnswer:1,explanation:`Using undefined with a proper type guard in the useContext hook ensures that consumers outside the provider get a clear error instead of silently using an invalid value. "null as any" defeats TypeScript's type checking.`},{id:"mod13-q3",question:"What does <T extends HasId> mean in a generic component?",options:["T must be exactly the HasId type","T must be a type that includes at least all the properties of HasId","T is a child class that inherits from HasId","T must be a union that includes HasId as one variant"],correctAnswer:1,explanation:"extends in a generic constraint means T must satisfy the HasId interface — it must have at least the properties defined in HasId, but can also have additional properties."},{id:"mod13-q4",question:"How do you type a discriminated union for useReducer actions?",options:["Use a single interface with all possible properties made optional",'Use a union of types each with a unique literal "type" field',"Use an enum for action types and a single action interface","Use generics with a factory function for each action type"],correctAnswer:1,explanation:'Discriminated unions use a unique literal type field (usually "type") in each variant. TypeScript narrows the type in switch/if statements based on this field, giving you type-safe access to variant-specific properties.'},{id:"mod13-q5",question:"What is a polymorphic component in React?",options:["A component that accepts multiple children","A component that uses multiple useState hooks",'A component that can render as different HTML elements via an "as" prop',"A component that works in both client and server rendering"],correctAnswer:2,explanation:'A polymorphic component uses an "as" prop to let the consumer choose which HTML element or component it renders as. It uses generics to pass through the correct native props for the chosen element.'}]},sm={id:"mod-14",title:"Forms & Validation",description:"Master form handling in React: controlled components, dynamic fields, schema validation with Zod, React Hook Form patterns, and accessible form UX.",topics:[{id:"mod14-t1",title:"Controlled Forms at Scale",explanation:`## Managing Complex Forms

### Single Object State

Instead of one \`useState\` per field, use a single state object:

\`\`\`jsx
function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: { street: '', city: '', zipCode: '' },
  });

  const updateField = (path, value) => {
    setForm(prev => {
      const keys = path.split('.');
      const newForm = { ...prev };
      let obj = newForm;
      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = { ...obj[keys[i]] };
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return newForm;
    });
  };

  return (
    <form>
      <input value={form.firstName}
        onChange={e => updateField('firstName', e.target.value)} />
      <input value={form.address.city}
        onChange={e => updateField('address.city', e.target.value)} />
    </form>
  );
}
\`\`\`

### useReducer for Forms

\`\`\`jsx
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'RESET':
      return action.initialState;
    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.value };
    default:
      return state;
  }
}

function useForm(initialValues) {
  const [state, dispatch] = useReducer(formReducer, {
    ...initialValues,
    errors: {},
    isSubmitting: false,
  });

  const setField = (field, value) =>
    dispatch({ type: 'SET_FIELD', field, value });

  const reset = () =>
    dispatch({ type: 'RESET', initialState: { ...initialValues, errors: {}, isSubmitting: false } });

  return { values: state, setField, reset, dispatch };
}
\`\`\`

### Dirty Tracking and Touch State

\`\`\`jsx
function useFormField(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
    setDirty(newValue !== initialValue);
  };

  const handleBlur = () => setTouched(true);

  return { value, touched, dirty, onChange: handleChange, onBlur: handleBlur };
}
\`\`\``,task:{description:"Create a `useForm` hook that manages form state, field updates, dirty tracking, and reset. Use it in a multi-field `ProfileForm` component with firstName, lastName, email, and bio fields.",starterCode:`function useForm(initialValues) {
  // TODO: Manage values, dirty tracking, reset
}

function ProfileForm() {
  // TODO: Use the hook and render a form with 4 fields
  return null;
}`,solution:`function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [dirty, setDirty] = useState(false);

  const setField = (field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
    setDirty(true);
  };

  const reset = () => {
    setValues(initialValues);
    setDirty(false);
  };

  const getFieldProps = (field) => ({
    value: values[field],
    onChange: (e) => setField(field, e.target.value),
  });

  return { values, dirty, setField, reset, getFieldProps };
}

function ProfileForm() {
  const { values, dirty, reset, getFieldProps } = useForm({
    firstName: '', lastName: '', email: '', bio: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input {...getFieldProps('firstName')} placeholder="First Name" />
      <input {...getFieldProps('lastName')} placeholder="Last Name" />
      <input {...getFieldProps('email')} type="email" placeholder="Email" />
      <textarea {...getFieldProps('bio')} placeholder="Bio" />
      <button type="submit" disabled={!dirty}>Save</button>
      <button type="button" onClick={reset} disabled={!dirty}>Reset</button>
    </form>
  );
}`,hints:["Create a getFieldProps helper that returns value and onChange for easy spreading","Track dirty state — set to true when any field changes","Reset should restore initial values and clear dirty flag"]}},{id:"mod14-t2",title:"Dynamic Form Fields",explanation:`## Adding and Removing Fields Dynamically

### Array of Fields

\`\`\`jsx
function DynamicForm() {
  const [fields, setFields] = useState([{ id: 1, value: '' }]);
  let nextId = useRef(2);

  const addField = () => {
    setFields(prev => [...prev, { id: nextId.current++, value: '' }]);
  };

  const removeField = (id) => {
    setFields(prev => prev.filter(f => f.id !== id));
  };

  const updateField = (id, value) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, value } : f));
  };

  return (
    <form>
      {fields.map(field => (
        <div key={field.id}>
          <input
            value={field.value}
            onChange={e => updateField(field.id, e.target.value)}
          />
          <button type="button" onClick={() => removeField(field.id)}>✕</button>
        </div>
      ))}
      <button type="button" onClick={addField}>+ Add Field</button>
    </form>
  );
}
\`\`\`

### Nested Dynamic: Repeatable Sections

\`\`\`jsx
function ExperienceForm() {
  const [experiences, setExperiences] = useState([
    { id: 1, company: '', role: '', startDate: '', endDate: '' },
  ]);

  const addExperience = () => {
    setExperiences(prev => [...prev, {
      id: Date.now(),
      company: '', role: '', startDate: '', endDate: '',
    }]);
  };

  const updateExperience = (id, field, value) => {
    setExperiences(prev =>
      prev.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    );
  };

  return (
    <div>
      {experiences.map((exp, idx) => (
        <fieldset key={exp.id}>
          <legend>Experience {idx + 1}</legend>
          <input value={exp.company}
            onChange={e => updateExperience(exp.id, 'company', e.target.value)}
            placeholder="Company" />
          <input value={exp.role}
            onChange={e => updateExperience(exp.id, 'role', e.target.value)}
            placeholder="Role" />
        </fieldset>
      ))}
      <button type="button" onClick={addExperience}>+ Add Experience</button>
    </div>
  );
}
\`\`\`

### Conditional Fields

\`\`\`jsx
function SmartForm() {
  const [type, setType] = useState('individual');

  return (
    <form>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="individual">Individual</option>
        <option value="company">Company</option>
      </select>

      {type === 'individual' && (
        <>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
        </>
      )}
      {type === 'company' && (
        <>
          <input placeholder="Company Name" />
          <input placeholder="Tax ID" />
        </>
      )}
    </form>
  );
}
\`\`\``,task:{description:"Create a `SurveyBuilder` component where an admin can dynamically add questions. Each question has a type (text, multiple-choice, rating) and the form adjusts accordingly. Multiple-choice questions should allow adding/removing options.",starterCode:`function SurveyBuilder() {
  // TODO: Manage array of questions
  // TODO: Each question has type, title, and type-specific config
  // TODO: Allow adding/removing questions and options
  return null;
}`,solution:`function SurveyBuilder() {
  const [questions, setQuestions] = useState([]);
  const nextId = useRef(1);

  const addQuestion = (type) => {
    setQuestions(prev => [...prev, {
      id: nextId.current++,
      type,
      title: '',
      options: type === 'multiple-choice' ? [''] : [],
    }]);
  };

  const updateTitle = (id, title) => {
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, title } : q));
  };

  const addOption = (qId) => {
    setQuestions(prev => prev.map(q =>
      q.id === qId ? { ...q, options: [...q.options, ''] } : q
    ));
  };

  const updateOption = (qId, idx, value) => {
    setQuestions(prev => prev.map(q =>
      q.id === qId ? { ...q, options: q.options.map((o, i) => i === idx ? value : o) } : q
    ));
  };

  const removeQuestion = (id) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  return (
    <div>
      {questions.map((q, i) => (
        <fieldset key={q.id}>
          <legend>Question {i + 1} ({q.type})</legend>
          <input value={q.title} onChange={e => updateTitle(q.id, e.target.value)} placeholder="Question text" />
          {q.type === 'multiple-choice' && (
            <div>
              {q.options.map((opt, idx) => (
                <input key={idx} value={opt} onChange={e => updateOption(q.id, idx, e.target.value)} placeholder={\`Option \${idx + 1}\`} />
              ))}
              <button type="button" onClick={() => addOption(q.id)}>+ Option</button>
            </div>
          )}
          {q.type === 'rating' && <p>Rating: 1-5 stars</p>}
          <button type="button" onClick={() => removeQuestion(q.id)}>Remove</button>
        </fieldset>
      ))}
      <button type="button" onClick={() => addQuestion('text')}>+ Text Question</button>
      <button type="button" onClick={() => addQuestion('multiple-choice')}>+ Multiple Choice</button>
      <button type="button" onClick={() => addQuestion('rating')}>+ Rating</button>
    </div>
  );
}`,hints:["Store questions as an array of objects with id, type, title, and options","Use the type field to conditionally render different form elements","For multiple-choice, store options as a sub-array within each question"]}},{id:"mod14-t3",title:"Validation Patterns",explanation:`## Client-Side Validation Strategies

### Simple Validation

\`\`\`jsx
const validators = {
  required: (value) => value.trim() ? '' : 'Required',
  email: (value) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) ? '' : 'Invalid email',
  minLength: (min) => (value) =>
    value.length >= min ? '' : \\\`Must be at least \\\${min} characters\\\`,
  matches: (other, label) => (value) =>
    value === other ? '' : \\\`Must match \\\${label}\\\`,
};

function validate(values, rules) {
  const errors = {};
  for (const [field, fieldRules] of Object.entries(rules)) {
    for (const rule of fieldRules) {
      const error = rule(values[field]);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  }
  return errors;
}
\`\`\`

### Validation Timing

| When | UX Pattern |
|------|-----------|
| On submit | Show all errors at once — simplest |
| On blur | Validate when user leaves a field — good UX |
| On change (after blur) | Validate live after first interaction — best UX |
| On keystroke | Too aggressive — avoid unless for character counters |

### Validate-on-blur Pattern

\`\`\`jsx
function useValidatedField(initialValue, validateFn) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (touched) setError(validateFn(e.target.value));
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateFn(value));
  };

  return {
    value, error: touched ? error : '',
    onChange: handleChange,
    onBlur: handleBlur,
  };
}
\`\`\`

### Schema Validation with Zod

\`\`\`jsx
import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string()
    .min(8, 'Must be at least 8 characters')
    .regex(/[A-Z]/, 'Must include uppercase')
    .regex(/[0-9]/, 'Must include number'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'],
});

function validateForm(values) {
  const result = signupSchema.safeParse(values);
  if (result.success) return {};
  const errors = {};
  for (const issue of result.error.issues) {
    errors[issue.path[0]] = issue.message;
  }
  return errors;
}
\`\`\``,task:{description:"Implement a `useValidatedForm` hook that supports field-level validation with validate-on-blur and validate-on-change-after-touch. Use it in a `SignupForm` with email, password, and confirm password. Show inline errors.",starterCode:`function useValidatedForm(initialValues, validationRules) {
  // TODO: Manage values, errors, touched state
  // TODO: Validate on blur, and on change after touched
}

function SignupForm() {
  // TODO: Use the hook with validation rules
  return null;
}`,solution:`function useValidatedForm(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (field, value) => {
    const rules = validationRules[field] || [];
    for (const rule of rules) {
      const error = rule(value, values);
      if (error) return error;
    }
    return '';
  };

  const getFieldProps = (field) => ({
    value: values[field],
    onChange: (e) => {
      const val = e.target.value;
      setValues(prev => ({ ...prev, [field]: val }));
      if (touched[field]) {
        setErrors(prev => ({ ...prev, [field]: validateField(field, val) }));
      }
    },
    onBlur: () => {
      setTouched(prev => ({ ...prev, [field]: true }));
      setErrors(prev => ({ ...prev, [field]: validateField(field, values[field]) }));
    },
  });

  const validateAll = () => {
    const newErrors = {};
    const newTouched = {};
    for (const field of Object.keys(validationRules)) {
      newTouched[field] = true;
      newErrors[field] = validateField(field, values[field]);
    }
    setTouched(newTouched);
    setErrors(newErrors);
    return Object.values(newErrors).every(e => !e);
  };

  return { values, errors, touched, getFieldProps, validateAll };
}

function SignupForm() {
  const { values, errors, getFieldProps, validateAll } = useValidatedForm(
    { email: '', password: '', confirmPassword: '' },
    {
      email: [(v) => !v.trim() ? 'Required' : '', (v) => !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v) ? 'Invalid email' : ''],
      password: [(v) => !v ? 'Required' : '', (v) => v.length < 8 ? 'Min 8 characters' : ''],
      confirmPassword: [(v) => !v ? 'Required' : '', (v, all) => v !== all.password ? 'Passwords must match' : ''],
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) console.log('Submit:', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input {...getFieldProps('email')} placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input {...getFieldProps('password')} type="password" placeholder="Password" />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <input {...getFieldProps('confirmPassword')} type="password" placeholder="Confirm Password" />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}`,hints:['Each validation rule is a function: (value, allValues) => errorString | ""',"On blur: mark field as touched and validate it","On change: only validate if field was already touched"]}},{id:"mod14-t4",title:"Accessible Form UX",explanation:`## Building Accessible Forms

### Label Association

\`\`\`jsx
// ✅ Always associate labels with inputs
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Or wrap the input in the label
<label>
  Email
  <input type="email" />
</label>
\`\`\`

### Error Announcements

\`\`\`jsx
function FormField({ label, error, id, ...inputProps }) {
  const errorId = \\\`\\\${id}-error\\\`;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error && (
        <span id={errorId} role="alert" className="error">
          {error}
        </span>
      )}
    </div>
  );
}
\`\`\`

### Focus Management

\`\`\`jsx
function FormWithFocusManagement() {
  const firstErrorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      // Focus the first field with an error
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
    }
  };
}
\`\`\`

### Required Fields

\`\`\`jsx
// Use aria-required for custom required indicators
<div>
  <label htmlFor="name">
    Name <span aria-hidden="true">*</span>
  </label>
  <input id="name" aria-required="true" />
</div>
\`\`\`

### Loading/Disabled States

\`\`\`jsx
function SubmitButton({ isSubmitting }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      aria-busy={isSubmitting}
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  );
}
\`\`\`

### Form-Level Error Summary

\`\`\`jsx
function ErrorSummary({ errors }) {
  if (Object.keys(errors).length === 0) return null;

  return (
    <div role="alert" aria-label="Form errors">
      <h3>Please fix the following errors:</h3>
      <ul>
        {Object.entries(errors).map(([field, msg]) => (
          <li key={field}>
            <a href={\\\`#\\\${field}\\\`}>{msg}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``,task:{description:'Create an accessible `ContactForm` with proper label association, error announcements (role="alert"), aria-invalid, aria-describedby, focus management on error, and a form-level error summary at the top.',starterCode:`function ContactForm() {
  // TODO: Name, email, message fields
  // TODO: Proper labels, aria attributes
  // TODO: Error summary at top
  // TODO: Focus first error field on submit
  return null;
}`,solution:`function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = 'Name is required';
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(values.email)) errs.email = 'Valid email is required';
    if (!values.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstField = Object.keys(errs)[0];
      document.getElementById(firstField)?.focus();
      return;
    }
    setSubmitted(true);
  };

  const setField = (field, value) => setValues(prev => ({ ...prev, [field]: value }));

  if (submitted) return <p role="status">Thank you for your message!</p>;

  return (
    <form onSubmit={handleSubmit} noValidate>
      {Object.keys(errors).length > 0 && (
        <div role="alert" aria-label="Form errors">
          <ul>
            {Object.entries(errors).map(([field, msg]) => (
              <li key={field}><a href={\`#\${field}\`}>{msg}</a></li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
        <input id="name" value={values.name} onChange={e => setField('name', e.target.value)}
          aria-required="true" aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined} />
        {errors.name && <span id="name-error" role="alert">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
        <input id="email" type="email" value={values.email} onChange={e => setField('email', e.target.value)}
          aria-required="true" aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <span id="email-error" role="alert">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
        <textarea id="message" value={values.message} onChange={e => setField('message', e.target.value)}
          aria-required="true" aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <span id="message-error" role="alert">{errors.message}</span>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}`,hints:["Use htmlFor and id to associate labels with inputs","Use aria-invalid={!!error} and aria-describedby pointing to the error element","Focus the first error field when validation fails on submit"]}}],test:[{id:"mod14-q1",question:"When is the best time to validate a form field for good UX?",options:["On every keystroke from the moment the page loads","Only when the form is submitted","On blur first, then on change after the field has been touched","Every 5 seconds using a polling interval"],correctAnswer:2,explanation:"Validating on blur (first interaction) then on change (subsequent typing) provides the best UX. The user sees errors after leaving a field and gets immediate feedback as they correct it."},{id:"mod14-q2",question:"What is the purpose of aria-describedby on a form input?",options:["It styles the input with a specific CSS class","It links the input to a description element (like an error message) for screen readers","It adds a tooltip that appears on hover","It prevents the form from submitting until the description is read"],correctAnswer:1,explanation:"aria-describedby points to the ID of an element that provides additional description. Screen readers announce this content when the input is focused, making error messages accessible."},{id:"mod14-q3",question:"Why use useReducer instead of multiple useState calls for complex forms?",options:["useReducer is faster than useState at runtime","useState is deprecated for form handling","It centralizes state transitions and makes complex updates more predictable","useReducer automatically validates form data"],correctAnswer:2,explanation:"useReducer centralizes all state transitions in a pure reducer function. This makes complex state updates (setting fields, errors, submit state) more predictable and easier to test than scattered useState calls."},{id:"mod14-q4",question:"What should happen when form validation fails on submit?",options:["Reload the page and clear all form data","Show an alert dialog with all error messages","Focus the first field with an error and display inline errors","Disable all form fields until the user clicks a reset button"],correctAnswer:2,explanation:'Focusing the first error field and showing inline errors provides the best UX. It guides the user to the problem, keeps their data intact, and is accessible to screen readers via role="alert".'},{id:"mod14-q5",question:"How do you handle dynamic form fields (add/remove) in React?",options:["Use document.createElement to add new DOM elements directly","Store fields as an array in state and use map() with unique keys to render them","Create a new component for each field using React.createComponent","Use refs to track dynamically added inputs outside of React state"],correctAnswer:1,explanation:"Dynamic fields should be stored as an array in state. Use map() with stable unique IDs (not array index) as keys. Add fields with spread [...fields, newField] and remove with filter()."}]},am={id:"mod-15",title:"React & API Integration",description:"Master API integration patterns: REST and GraphQL, caching strategies, optimistic updates, pagination, error/loading states, and request cancellation.",topics:[{id:"mod15-t1",title:"Data Fetching Patterns",explanation:`## Fetching Data in React

### Basic Pattern with useEffect

\`\`\`jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const res = await fetch('/api/users', {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
\`\`\`

### Abstracting with a Custom Hook

\`\`\`jsx
function useAPI(method, url, body = null) {
  const [state, setState] = useState({
    data: null, loading: method === 'GET', error: null,
  });

  const execute = useCallback(async (overrideBody) => {
    const controller = new AbortController();
    setState(s => ({ ...s, loading: true, error: null }));

    try {
      const options = {
        method,
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
      };
      if (method !== 'GET') {
        options.body = JSON.stringify(overrideBody || body);
      }
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
      const data = await res.json();
      setState({ data, loading: false, error: null });
      return data;
    } catch (err) {
      if (err.name !== 'AbortError') {
        setState({ data: null, loading: false, error: err.message });
      }
    }
  }, [method, url, body]);

  useEffect(() => {
    if (method === 'GET') execute();
  }, [method, execute]);

  return { ...state, execute };
}
\`\`\`

### POST / PUT / DELETE

\`\`\`jsx
function CreateUserForm() {
  const { execute, loading, error } = useAPI('POST', '/api/users');

  const handleSubmit = async (formData) => {
    const newUser = await execute(formData);
    if (newUser) {
      // Navigate or update UI
    }
  };
}
\`\`\`

### Request Deduplication

\`\`\`jsx
const cache = new Map();

function useCachedFetch(url) {
  const [data, setData] = useState(() => cache.get(url) || null);
  const [loading, setLoading] = useState(!cache.has(url));

  useEffect(() => {
    if (cache.has(url)) return;
    fetch(url)
      .then(r => r.json())
      .then(data => {
        cache.set(url, data);
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
\`\`\``,task:{description:"Create a `useAPI` hook that supports GET, POST, PUT, and DELETE methods. GET requests should auto-execute on mount. Other methods should return an `execute` function. Include loading, error, and data states. Use AbortController for cleanup.",starterCode:`function useAPI(method, url) {
  // TODO: Handle GET auto-fetch and manual execute for others
  // TODO: Include AbortController for cleanup
}`,solution:`function useAPI(method, url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(method === 'GET');
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const execute = useCallback(async (body) => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    setError(null);

    try {
      const options = {
        method,
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
      };
      if (body) options.body = JSON.stringify(body);

      const res = await fetch(url, options);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      const result = await res.json();
      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
        setLoading(false);
      }
    }
  }, [method, url]);

  useEffect(() => {
    if (method === 'GET') execute();
    return () => controllerRef.current?.abort();
  }, [method, execute]);

  return { data, loading, error, execute };
}`,hints:["Auto-execute on mount only for GET requests","Store AbortController in a ref and abort previous requests","Return execute function so POST/PUT/DELETE can be triggered manually"]}},{id:"mod15-t2",title:"Optimistic Updates",explanation:`## Optimistic UI Updates

Update the UI **immediately** before the server confirms, then roll back on failure.

### Pattern

\`\`\`jsx
function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = async (id) => {
    // 1. Save the previous state
    const previousTodos = todos;

    // 2. Optimistically update
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );

    try {
      // 3. Send to server
      const todo = todos.find(t => t.id === id);
      await fetch(\\\`/api/todos/\\\${id}\\\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: !todo.done }),
      });
    } catch {
      // 4. Roll back on failure
      setTodos(previousTodos);
      alert('Failed to update. Reverted.');
    }
  };

  const deleteTodo = async (id) => {
    const previousTodos = todos;
    setTodos(prev => prev.filter(t => t.id !== id));

    try {
      const res = await fetch(\\\`/api/todos/\\\${id}\\\`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
    } catch {
      setTodos(previousTodos);
      alert('Failed to delete. Reverted.');
    }
  };
}
\`\`\`

### Optimistic Add with Temporary ID

\`\`\`jsx
const addTodo = async (text) => {
  const tempId = 'temp-' + Date.now();
  const optimisticTodo = { id: tempId, text, done: false };

  // Add immediately with temp ID
  setTodos(prev => [...prev, optimisticTodo]);

  try {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const realTodo = await res.json();

    // Replace temp with real
    setTodos(prev =>
      prev.map(t => t.id === tempId ? realTodo : t)
    );
  } catch {
    // Remove optimistic item
    setTodos(prev => prev.filter(t => t.id !== tempId));
  }
};
\`\`\`

### When to Use Optimistic Updates

- **Good for**: Toggle buttons, likes, adding items to lists, status changes
- **Bad for**: Financial transactions, critical data changes, multi-step processes`,task:{description:"Create a `LikeButton` component with optimistic updates. It should show the current like count and a like/unlike toggle. Update the UI immediately, send the request, and roll back if it fails.",starterCode:`function LikeButton({ postId, initialLikes, initialLiked }) {
  // TODO: Track like count and liked state
  // TODO: Optimistically update on click
  // TODO: Roll back on API failure
  return null;
}`,solution:`function LikeButton({ postId, initialLikes, initialLiked }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(initialLiked);

  const handleToggle = async () => {
    const prevLikes = likes;
    const prevLiked = liked;

    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);

    try {
      const res = await fetch(\`/api/posts/\${postId}/like\`, {
        method: liked ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed');
    } catch {
      setLiked(prevLiked);
      setLikes(prevLikes);
    }
  };

  return (
    <button onClick={handleToggle} className={liked ? 'liked' : ''}>
      {liked ? '❤️' : '🤍'} {likes}
    </button>
  );
}`,hints:["Save previous state before making optimistic changes","Update state immediately, then send the API request","In the catch block, restore the previous state to roll back"]}},{id:"mod15-t3",title:"Pagination & Infinite Scroll",explanation:`## Pagination Patterns

### Offset-Based Pagination

\`\`\`jsx
function PaginatedList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(\\\`/api/items?page=\\\${page}&limit=10\\\`)
      .then(r => r.json())
      .then(data => {
        setItems(data.items);
        setTotalPages(data.totalPages);
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
      )}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
\`\`\`

### Cursor-Based Pagination

\`\`\`jsx
function CursorPaginated() {
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    const url = cursor
      ? \\\`/api/items?cursor=\\\${cursor}&limit=10\\\`
      : '/api/items?limit=10';
    const data = await fetch(url).then(r => r.json());
    setItems(prev => [...prev, ...data.items]);
    setCursor(data.nextCursor);
    setHasMore(!!data.nextCursor);
  };
}
\`\`\`

### Infinite Scroll with Intersection Observer

\`\`\`jsx
function useInfiniteScroll(callback, hasMore) {
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) callback();
      },
      { threshold: 0.1 }
    );
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [callback, hasMore]);

  return sentinelRef;
}

function InfiniteList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    const data = await fetch(\\\`/api/items?page=\\\${page}\\\`).then(r => r.json());
    setItems(prev => [...prev, ...data.items]);
    setHasMore(data.hasMore);
    setPage(p => p + 1);
  }, [page]);

  const sentinelRef = useInfiniteScroll(loadMore, hasMore);

  return (
    <div>
      {items.map(i => <div key={i.id}>{i.name}</div>)}
      {hasMore && <div ref={sentinelRef}>Loading more...</div>}
    </div>
  );
}
\`\`\``,task:{description:'Create a `useInfiniteScroll` hook using Intersection Observer. Use it in a component that loads pages of items as the user scrolls. Include loading and "no more items" states.',starterCode:`function useInfiniteScroll(loadMore, hasMore) {
  // TODO: Use Intersection Observer on a sentinel element
}

function InfinitePostList() {
  // TODO: Use the hook to load posts as user scrolls
  return null;
}`,solution:`function useInfiniteScroll(loadMore, hasMore) {
  const sentinelRef = useRef(null);
  const loadMoreRef = useRef(loadMore);
  loadMoreRef.current = loadMore;

  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMoreRef.current(); },
      { threshold: 0.1 }
    );
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasMore]);

  return sentinelRef;
}

function InfinitePostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=10\`);
    const data = await res.json();
    setPosts(prev => [...prev, ...data]);
    setHasMore(data.length === 10);
    setPage(p => p + 1);
    setLoading(false);
  }, [page, loading]);

  const sentinelRef = useInfiniteScroll(loadMore, hasMore);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      {hasMore ? <div ref={sentinelRef}>{loading ? 'Loading...' : 'Scroll for more'}</div>
        : <p>No more posts</p>}
    </div>
  );
}`,hints:["Use IntersectionObserver to detect when the sentinel enters the viewport","Use a ref for loadMore to avoid recreating the observer on every render","Set hasMore to false when the API returns fewer items than requested"]}},{id:"mod15-t4",title:"Error Handling & Loading States",explanation:`## Comprehensive Error Handling

### Error Boundary for Render Errors

\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('React error:', error, info);
    // Send to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
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

// Usage
<ErrorBoundary>
  <UserDashboard />
</ErrorBoundary>
\`\`\`

### HTTP Error Handling

\`\`\`jsx
class APIError extends Error {
  constructor(status, statusText, body) {
    super(\\\`API Error: \\\${status} \\\${statusText}\\\`);
    this.status = status;
    this.body = body;
  }
}

async function apiFetch(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new APIError(res.status, res.statusText, body);
  }
  return res.json();
}
\`\`\`

### Loading State Patterns

\`\`\`jsx
// Skeleton Loading
function PostSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-title" />
      <div className="skeleton-line" />
      <div className="skeleton-line" />
      <div className="skeleton-line short" />
    </div>
  );
}

function PostList() {
  const { data, loading } = useFetch('/api/posts');

  if (loading) {
    return Array.from({ length: 5 }, (_, i) => <PostSkeleton key={i} />);
  }
  return data.map(p => <Post key={p.id} {...p} />);
}
\`\`\`

### Retry Logic

\`\`\`jsx
async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, delay * (i + 1)));
    }
  }
}
\`\`\`

### Combining Error Boundary with API Errors

\`\`\`jsx
function DataView({ url }) {
  const { data, error, loading } = useFetch(url);

  if (loading) return <Skeleton />;
  if (error) {
    // Re-throw to let ErrorBoundary handle it
    if (error.status >= 500) throw error;
    // Handle client errors inline
    return <ErrorMessage message={error.message} />;
  }
  return <DataDisplay data={data} />;
}
\`\`\``,task:{description:"Create a `DataFetcher` component that demonstrates comprehensive error handling: loading skeletons, inline error messages for 4xx errors, error boundary fallback for 5xx errors, and a retry mechanism with exponential backoff.",starterCode:`function DataFetcher({ url }) {
  // TODO: Fetch data with proper error handling
  // TODO: Show skeleton while loading
  // TODO: Handle different error types differently
  // TODO: Include retry with backoff
  return null;
}`,solution:`async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const error = new Error(\`HTTP \${res.status}\`);
        error.status = res.status;
        throw error;
      }
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)));
    }
  }
}

function Skeleton() {
  return (
    <div className="skeleton">
      <div style={{ height: 20, background: '#e0e0e0', marginBottom: 8, borderRadius: 4 }} />
      <div style={{ height: 14, background: '#e0e0e0', marginBottom: 6, borderRadius: 4 }} />
      <div style={{ height: 14, background: '#e0e0e0', width: '60%', borderRadius: 4 }} />
    </div>
  );
}

function DataFetcher({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchWithRetry(url);
      setData(result);
    } catch (err) {
      if (err.status >= 500) throw err; // Let ErrorBoundary handle
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => { load(); }, [load]);

  if (loading) return <Skeleton />;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={load}>Retry</button>
    </div>
  );
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,hints:["Use exponential backoff: delay * Math.pow(2, attempt)","Throw 5xx errors to let an ErrorBoundary handle server errors","Handle 4xx errors inline with a retry button"]}}],test:[{id:"mod15-q1",question:"What is the purpose of AbortController in data fetching?",options:["To encrypt the request data before sending","To cancel in-flight requests when the component unmounts or dependencies change","To retry failed requests automatically","To compress the response data for faster transfer"],correctAnswer:1,explanation:"AbortController allows you to cancel pending fetch requests. This prevents memory leaks and race conditions when a component unmounts or when a new request should replace an old one."},{id:"mod15-q2",question:"What is an optimistic update?",options:["Updating the UI after the server confirms the change","Updating the UI immediately and rolling back if the server request fails","Sending multiple requests simultaneously for redundancy","Prefetching data before the user requests it"],correctAnswer:1,explanation:"Optimistic updates change the UI instantly to make the app feel fast, then send the request to the server. If the request fails, the UI is reverted to the previous state."},{id:"mod15-q3",question:"How does Intersection Observer help with infinite scroll?",options:["It prefetches all pages at once when the component mounts","It detects when a sentinel element enters the viewport, triggering the next page load","It automatically scrolls the page to show new content","It compresses images as they enter the viewport"],correctAnswer:1,explanation:"IntersectionObserver watches a sentinel element at the bottom of the list. When the user scrolls near it (it becomes visible in the viewport), the callback fires and loads the next page of data."},{id:"mod15-q4",question:"What is exponential backoff in retry logic?",options:["Retrying immediately without any delay","Increasing the delay between retries exponentially (e.g., 1s, 2s, 4s)","Decreasing the number of items fetched with each retry","Sending the request to a different server each time"],correctAnswer:1,explanation:"Exponential backoff increases the wait time between retries (e.g., 1s, 2s, 4s, 8s). This prevents overwhelming a recovering server and gives it time to recover from temporary failures."},{id:"mod15-q5",question:"Why should 5xx server errors be handled differently from 4xx client errors?",options:["5xx errors mean the response is too large to display","5xx errors indicate server problems and may be retryable; 4xx indicate client mistakes","4xx errors are always caused by network issues","There is no difference — they should be handled the same way"],correctAnswer:1,explanation:"5xx errors (server errors) are often temporary and retryable. 4xx errors (client errors like 404, 403) indicate the request itself is wrong and typically need different handling like showing an error message or redirecting."}]},im={id:"mod-16",title:"Testing React Applications",description:"Learn to test React apps with confidence: unit tests with Vitest/Jest, React Testing Library patterns, mocking hooks and APIs, integration tests, and testing best practices.",topics:[{id:"mod16-t1",title:"Testing Fundamentals with Vitest",explanation:`## Setting Up Tests

### Vitest (Vite-native)

\`\`\`bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
\`\`\`

\`\`\`js
// vite.config.ts
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
\`\`\`

\`\`\`ts
// src/test/setup.ts
import '@testing-library/jest-dom';
\`\`\`

### Writing Your First Test

\`\`\`tsx
import { describe, it, expect } from 'vitest';

// Testing a pure function
function add(a, b) { return a + b; }

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });

  it('handles zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});
\`\`\`

### Common Matchers

\`\`\`tsx
expect(value).toBe(exact);           // Strict equality
expect(value).toEqual(deepEqual);    // Deep equality
expect(value).toBeTruthy();          // Truthy check
expect(value).toBeNull();            // null check
expect(array).toContain(item);       // Array contains
expect(array).toHaveLength(3);       // Array length
expect(fn).toThrow();                // Throws error
expect(fn).toHaveBeenCalled();       // Function was called
expect(fn).toHaveBeenCalledWith(x);  // Called with specific args
\`\`\`

### Test Organization

\`\`\`
src/
  components/
    Button.tsx
    Button.test.tsx    # Co-located test
  utils/
    format.ts
    format.test.ts
  __tests__/           # Or a shared test folder
    integration/
      checkout.test.tsx
\`\`\`

### AAA Pattern (Arrange, Act, Assert)

\`\`\`tsx
it('filters completed todos', () => {
  // Arrange
  const todos = [
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Write tests', done: false },
  ];

  // Act
  const completed = todos.filter(t => t.done);

  // Assert
  expect(completed).toHaveLength(1);
  expect(completed[0].text).toBe('Learn React');
});
\`\`\``,task:{description:"Write tests for a `formatPrice` utility function that formats numbers as currency strings. Test edge cases: zero, negative numbers, large numbers, and decimal rounding.",starterCode:`// Function to test
function formatPrice(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

// TODO: Write comprehensive tests
describe('formatPrice', () => {
  // TODO: Test normal cases
  // TODO: Test edge cases
});`,solution:`function formatPrice(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

describe('formatPrice', () => {
  it('formats a regular price', () => {
    expect(formatPrice(9.99)).toBe('$9.99');
  });

  it('formats zero', () => {
    expect(formatPrice(0)).toBe('$0.00');
  });

  it('formats large numbers with commas', () => {
    expect(formatPrice(1234567.89)).toBe('$1,234,567.89');
  });

  it('rounds to two decimal places', () => {
    expect(formatPrice(9.999)).toBe('$10.00');
  });

  it('formats negative numbers', () => {
    expect(formatPrice(-5.50)).toBe('-$5.50');
  });

  it('supports different currencies', () => {
    expect(formatPrice(10, 'EUR')).toBe('€10.00');
  });

  it('handles very small amounts', () => {
    expect(formatPrice(0.01)).toBe('$0.01');
  });
});`,hints:["Follow the AAA pattern: Arrange, Act, Assert","Test edge cases: 0, negative, very large, many decimals","Each test should verify one specific behavior"]}},{id:"mod16-t2",title:"React Testing Library Basics",explanation:`## Testing Components with RTL

React Testing Library focuses on testing **what users see and do**, not internal implementation details.

### Core Principle: Test Behavior, Not Implementation

\`\`\`tsx
import { render, screen, fireEvent } from '@testing-library/react';

// ❌ Bad — testing implementation details
expect(component.state.count).toBe(1);

// ✅ Good — testing what user sees
expect(screen.getByText('Count: 1')).toBeInTheDocument();
\`\`\`

### Rendering Components

\`\`\`tsx
import { render, screen } from '@testing-library/react';

it('renders a greeting', () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
});
\`\`\`

### Query Types

| Priority | Method | Use When |
|----------|--------|----------|
| 1st | \`getByRole\` | Accessible elements (buttons, inputs, headings) |
| 2nd | \`getByLabelText\` | Form fields with labels |
| 3rd | \`getByPlaceholderText\` | Inputs with placeholders |
| 4th | \`getByText\` | Non-interactive text content |
| 5th | \`getByTestId\` | Last resort — use data-testid |

### Query Variants

| Variant | 0 Matches | 1 Match | 1+ Matches | Async? |
|---------|-----------|---------|------------|--------|
| \`getBy\` | Throws | Returns | Throws | No |
| \`queryBy\` | null | Returns | Throws | No |
| \`findBy\` | Throws | Returns | Throws | Yes |
| \`getAllBy\` | Throws | Array | Array | No |

### User Events

\`\`\`tsx
import userEvent from '@testing-library/user-event';

it('increments counter on click', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: /increment/i }));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});

it('types in an input', async () => {
  const user = userEvent.setup();
  render(<SearchBox />);

  const input = screen.getByRole('textbox');
  await user.type(input, 'React');
  expect(input).toHaveValue('React');
});
\`\`\`

### Testing Absence

\`\`\`tsx
// Use queryBy when you expect something NOT to be there
expect(screen.queryByText('Error')).not.toBeInTheDocument();
\`\`\``,task:{description:'Write tests for a `LoginForm` component. Test: rendering the form fields, submitting with valid data calls onSubmit, showing error when fields are empty, and the password field is type="password".',starterCode:`function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password}
        onChange={e => setPassword(e.target.value)} />
      {error && <p role="alert">{error}</p>}
      <button type="submit">Log In</button>
    </form>
  );
}

// TODO: Write tests
describe('LoginForm', () => {
  // TODO
});`,solution:`describe('LoginForm', () => {
  it('renders email and password fields', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('password field has type password', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password');
  });

  it('shows error when submitting empty form', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={() => {}} />);

    await user.click(screen.getByRole('button', { name: /log in/i }));
    expect(screen.getByRole('alert')).toHaveTextContent('All fields are required');
  });

  it('calls onSubmit with email and password', async () => {
    const user = userEvent.setup();
    const mockSubmit = vi.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'secret123');
    await user.click(screen.getByRole('button', { name: /log in/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'secret123',
    });
  });

  it('does not show error initially', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});`,hints:["Use getByLabelText to find form fields — tests accessibility too","Use vi.fn() (Vitest) or jest.fn() (Jest) to create mock functions","Use queryByRole instead of getByRole when testing absence"]}},{id:"mod16-t3",title:"Mocking APIs & Hooks",explanation:`## Mocking API Calls

### Mocking fetch with vi.fn

\`\`\`tsx
beforeEach(() => {
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});

it('displays users after fetching', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]),
  });

  render(<UserList />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();
});

it('shows error on fetch failure', async () => {
  global.fetch.mockRejectedValueOnce(new Error('Network error'));

  render(<UserList />);

  expect(await screen.findByText(/error/i)).toBeInTheDocument();
});
\`\`\`

### Mocking Modules

\`\`\`tsx
// Mock an entire module
vi.mock('../api/users', () => ({
  fetchUsers: vi.fn(),
}));

import { fetchUsers } from '../api/users';

it('uses the mocked function', async () => {
  fetchUsers.mockResolvedValue([{ id: 1, name: 'Test' }]);
  render(<UserList />);
  expect(await screen.findByText('Test')).toBeInTheDocument();
});
\`\`\`

### Mocking Custom Hooks

\`\`\`tsx
vi.mock('../hooks/useAuth', () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from '../hooks/useAuth';

it('shows dashboard for authenticated user', () => {
  useAuth.mockReturnValue({
    user: { name: 'Alice' },
    isAuthenticated: true,
  });

  render(<Dashboard />);
  expect(screen.getByText('Welcome, Alice')).toBeInTheDocument();
});

it('redirects unauthenticated users', () => {
  useAuth.mockReturnValue({
    user: null,
    isAuthenticated: false,
  });

  render(<Dashboard />);
  expect(screen.getByText('Please log in')).toBeInTheDocument();
});
\`\`\`

### Mocking Timers

\`\`\`tsx
beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

it('debounces search input', async () => {
  const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  render(<SearchBox onSearch={mockSearch} />);

  await user.type(screen.getByRole('textbox'), 'React');
  expect(mockSearch).not.toHaveBeenCalled();

  vi.advanceTimersByTime(500);
  expect(mockSearch).toHaveBeenCalledWith('React');
});
\`\`\``,task:{description:"Write tests for a `UserProfile` component that fetches user data. Test: loading state, successful data display, error state on fetch failure, and that it calls the correct URL.",starterCode:`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(r => { if (!r.ok) throw new Error('Not found'); return r.json(); })
      .then(setUser)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <h1>{user.name}</h1>;
}

// TODO: Write tests with mocked fetch
describe('UserProfile', () => {
  // TODO
});`,solution:`describe('UserProfile', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows loading initially', () => {
    global.fetch.mockReturnValue(new Promise(() => {}));
    render(<UserProfile userId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays user name after fetch', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: 1, name: 'Alice' }),
    });

    render(<UserProfile userId={1} />);
    expect(await screen.findByText('Alice')).toBeInTheDocument();
  });

  it('fetches the correct URL', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: 42, name: 'Bob' }),
    });

    render(<UserProfile userId={42} />);
    await screen.findByText('Bob');
    expect(global.fetch).toHaveBeenCalledWith('/api/users/42');
  });

  it('shows error when fetch fails', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false, status: 404 });

    render(<UserProfile userId={999} />);
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});`,hints:["Use vi.fn() to mock global.fetch before each test","Use mockResolvedValueOnce for successful responses","Use findByText (async) to wait for the loading state to resolve"]}},{id:"mod16-t4",title:"Testing Best Practices",explanation:`## Testing Principles

### 1. Test Behavior, Not Implementation

\`\`\`tsx
// ❌ Bad — coupled to implementation
it('sets isOpen state to true', () => {
  const { result } = renderHook(() => useState(false));
  act(() => result.current[1](true));
  expect(result.current[0]).toBe(true);
});

// ✅ Good — tests what user sees
it('shows dropdown content when clicked', async () => {
  const user = userEvent.setup();
  render(<Dropdown items={['A', 'B']} />);
  await user.click(screen.getByRole('button'));
  expect(screen.getByText('A')).toBeVisible();
});
\`\`\`

### 2. Arrange-Act-Assert (AAA)

\`\`\`tsx
it('adds item to cart', async () => {
  // Arrange
  const user = userEvent.setup();
  render(<ProductPage product={mockProduct} />);

  // Act
  await user.click(screen.getByRole('button', { name: /add to cart/i }));

  // Assert
  expect(screen.getByText('1 item in cart')).toBeInTheDocument();
});
\`\`\`

### 3. One Assertion Focus Per Test

Each test should verify one specific behavior. Multiple related assertions are fine, but don't test unrelated things together.

### 4. Avoid Testing Framework Internals

\`\`\`tsx
// ❌ Don't test that React renders
it('renders without crashing', () => {
  render(<App />);
}); // This tells us nothing useful

// ✅ Test meaningful behavior
it('shows the dashboard when user is logged in', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
});
\`\`\`

### 5. Testing Custom Hooks

\`\`\`tsx
import { renderHook, act } from '@testing-library/react';

it('increments counter', () => {
  const { result } = renderHook(() => useCounter(0));

  expect(result.current.count).toBe(0);

  act(() => result.current.increment());

  expect(result.current.count).toBe(1);
});
\`\`\`

### 6. Test Coverage Strategy

| Layer | What to Test | Coverage Goal |
|-------|-------------|---------------|
| Utils / Pure Functions | All edge cases | High |
| Custom Hooks | State transitions, effects | High |
| Components | User interactions, rendering | Medium-High |
| Pages / Integration | Happy paths, critical flows | Medium |
| E2E | Key user journeys | Low (but valuable) |`,task:{description:"Write tests for a `useCounter` custom hook. Test initialization, increment, decrement, reset, and ensure it handles boundaries (e.g., min/max values if provided).",starterCode:`function useCounter(initial = 0, { min = -Infinity, max = Infinity } = {}) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(c => Math.min(c + 1, max));
  const decrement = () => setCount(c => Math.max(c - 1, min));
  const reset = () => setCount(initial);

  return { count, increment, decrement, reset };
}

// TODO: Write comprehensive hook tests
describe('useCounter', () => {
  // TODO
});`,solution:`describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('initializes with provided value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('increments the count', () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it('decrements the count', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => result.current.decrement());
    expect(result.current.count).toBe(4);
  });

  it('resets to initial value', () => {
    const { result } = renderHook(() => useCounter(3));
    act(() => result.current.increment());
    act(() => result.current.increment());
    act(() => result.current.reset());
    expect(result.current.count).toBe(3);
  });

  it('does not exceed max', () => {
    const { result } = renderHook(() => useCounter(9, { max: 10 }));
    act(() => result.current.increment());
    act(() => result.current.increment());
    expect(result.current.count).toBe(10);
  });

  it('does not go below min', () => {
    const { result } = renderHook(() => useCounter(1, { min: 0 }));
    act(() => result.current.decrement());
    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });
});`,hints:["Use renderHook from @testing-library/react to test hooks","Wrap state updates in act() to flush React updates","Test boundary conditions: what happens at min/max limits"]}}],test:[{id:"mod16-q1",question:"What is the primary philosophy of React Testing Library?",options:["Test internal component state and lifecycle methods","Test components the way users interact with them","Achieve 100% code coverage on every component","Test the virtual DOM diffing algorithm"],correctAnswer:1,explanation:"React Testing Library encourages testing components the way users interact with them — finding elements by role, label, or text content rather than implementation details like state, props, or component instances."},{id:"mod16-q2",question:"Which query should you prefer when selecting a button in tests?",options:['screen.getByTestId("submit-btn")','screen.getByRole("button", { name: /submit/i })','document.querySelector(".submit-button")','screen.getByClassName("submit-button")'],correctAnswer:1,explanation:"getByRole is the preferred query because it tests accessibility. It finds elements by their ARIA role, which is how assistive technologies identify elements. getByTestId should be a last resort."},{id:"mod16-q3",question:"When should you use findByText instead of getByText?",options:["When the text might not exist in the document","When the element appears asynchronously (e.g., after a fetch)","When there are multiple elements with the same text","When testing in a production environment"],correctAnswer:1,explanation:"findByText returns a Promise that resolves when the element appears in the DOM. Use it when elements appear asynchronously, such as after API calls or state updates that trigger re-renders."},{id:"mod16-q4",question:"What does act() do in React hook tests?",options:["It mocks the hook for testing purposes","It wraps state updates to ensure all renders and effects are processed","It skips the hook execution for faster tests","It creates a new React component for testing"],correctAnswer:1,explanation:"act() ensures that all state updates, effects, and re-renders triggered by the wrapped code are fully processed before assertions. Without it, you might assert against stale state."},{id:"mod16-q5",question:"Why should you avoid testing implementation details?",options:["Implementation details are not testable in JavaScript","Tests become fragile and break when refactoring, even if behavior is unchanged","React Testing Library physically prevents access to implementation details","Implementation detail tests run slower than behavioral tests"],correctAnswer:1,explanation:"Testing implementation details (internal state, method names, component structure) creates fragile tests that break when you refactor. Behavior-focused tests remain valid as long as the user-facing behavior is unchanged."}]},lm={id:"mod-17",title:"Accessibility (a11y)",description:"Build inclusive React applications: ARIA roles and attributes, focus management, keyboard navigation, screen reader support, and semantic HTML patterns.",topics:[{id:"mod17-t1",title:"Semantic HTML & ARIA Basics",explanation:`## Why Accessibility Matters

1 in 4 adults in the US have some form of disability. Accessible apps work for everyone and are often legally required.

### Semantic HTML First

Use the right HTML elements — they have built-in accessibility:

\`\`\`jsx
// ❌ Bad — div with onClick has no keyboard support or role
<div onClick={handleClick}>Click me</div>

// ✅ Good — button has built-in keyboard, focus, and role
<button onClick={handleClick}>Click me</button>
\`\`\`

### Semantic Elements to Use

| Instead of... | Use... |
|--------------|--------|
| \`<div>\` for navigation | \`<nav>\` |
| \`<div>\` for main content | \`<main>\` |
| \`<div>\` for header | \`<header>\` |
| \`<div>\` for footer | \`<footer>\` |
| \`<div>\` for sections | \`<section>\` with heading |
| \`<span onClick>\` | \`<button>\` |
| \`<div>\` for list | \`<ul>\`, \`<ol>\` |

### ARIA Roles

When semantic HTML isn't enough, use ARIA:

\`\`\`jsx
// ❌ Unclear to screen readers
<div className="alert-box">Error occurred!</div>

// ✅ Announced as an alert
<div role="alert">Error occurred!</div>
\`\`\`

### Common ARIA Attributes

\`\`\`jsx
// Labeling
<button aria-label="Close dialog">✕</button>
<input aria-labelledby="name-label" />
<span id="name-label">Full Name</span>

// State
<button aria-expanded={isOpen}>Menu</button>
<input aria-invalid={hasError} />
<div aria-busy={loading}>Content</div>

// Relationships
<input aria-describedby="help-text" />
<p id="help-text">Must be at least 8 characters</p>

// Live regions (screen reader announces changes)
<div aria-live="polite">3 items found</div>
<div aria-live="assertive">Error: connection lost!</div>
\`\`\`

### The First Rule of ARIA

> Don't use ARIA when native HTML can do the job.

\`\`\`jsx
// ❌ Unnecessary ARIA
<div role="button" tabIndex={0} onClick={handleClick}>Save</div>

// ✅ Just use a button
<button onClick={handleClick}>Save</button>
\`\`\``,task:{description:"Refactor a poorly accessible component to use semantic HTML and proper ARIA attributes. The component is a notification center with a list of messages, a dismiss button for each, and a clear-all button.",starterCode:`// ❌ Current inaccessible version
function NotificationCenter({ notifications, onDismiss, onClearAll }) {
  return (
    <div className="notif-panel">
      <div className="notif-title">Notifications</div>
      <div className="notif-list">
        {notifications.map(n => (
          <div key={n.id} className="notif-item">
            <div>{n.message}</div>
            <div className="notif-close" onClick={() => onDismiss(n.id)}>✕</div>
          </div>
        ))}
      </div>
      <div className="notif-clear" onClick={onClearAll}>Clear All</div>
    </div>
  );
}`,solution:`function NotificationCenter({ notifications, onDismiss, onClearAll }) {
  return (
    <section aria-label="Notifications">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <>
          <ul role="list">
            {notifications.map(n => (
              <li key={n.id}>
                <span>{n.message}</span>
                <button
                  aria-label={\`Dismiss notification: \${n.message}\`}
                  onClick={() => onDismiss(n.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
          <button onClick={onClearAll}>Clear All</button>
        </>
      )}
    </section>
  );
}`,hints:["Replace outer div with <section> and add aria-label","Use <h2> for the title, <ul>/<li> for the list, <button> for actions","Add aria-label to the dismiss button explaining what it dismisses"]}},{id:"mod17-t2",title:"Keyboard Navigation",explanation:`## Keyboard Accessibility

All interactive elements must be usable with keyboard only (Tab, Enter, Space, Escape, Arrow keys).

### Focus Order (Tab Index)

\`\`\`jsx
// tabIndex="0" — element is focusable in natural tab order
<div tabIndex={0} role="button" onClick={handleClick}>Custom button</div>

// tabIndex="-1" — focusable programmatically but not via Tab
<div tabIndex={-1} ref={errorRef}>Error message</div>

// ❌ Never use tabIndex > 0 — it overrides natural order
\`\`\`

### Keyboard Event Handlers

\`\`\`jsx
function MenuButton({ onSelect }) {
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        onSelect();
        break;
      case 'Escape':
        closeMenu();
        break;
      case 'ArrowDown':
        e.preventDefault();
        focusNextItem();
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusPreviousItem();
        break;
    }
  };

  return <div role="menu" onKeyDown={handleKeyDown}>...</div>;
}
\`\`\`

### Focus Trapping (for Modals)

\`\`\`jsx
function useFocusTrap(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const focusable = el.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    el.addEventListener('keydown', handleKeyDown);
    first?.focus();

    return () => el.removeEventListener('keydown', handleKeyDown);
  }, [ref]);
}
\`\`\`

### Skip Navigation Link

\`\`\`jsx
function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav>...</nav>
      <main id="main-content">{children}</main>
    </>
  );
}

// CSS
.skip-link {
  position: absolute;
  left: -9999px;
}
.skip-link:focus {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
\`\`\``,task:{description:"Create an accessible `Modal` component with focus trapping. When the modal opens, focus should move to the modal. Tab/Shift+Tab should cycle within the modal. Escape closes it. When closed, focus returns to the trigger.",starterCode:`function Modal({ isOpen, onClose, title, children }) {
  // TODO: Focus trap inside modal
  // TODO: Escape key closes modal
  // TODO: Return focus to trigger on close
  if (!isOpen) return null;
  return null;
}`,solution:`function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      setTimeout(() => modalRef.current?.focus(), 0);
    } else if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        <h2>{title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}`,hints:["Save document.activeElement before opening to restore focus later",'Use role="dialog" and aria-modal="true" on the modal container',"Query all focusable elements and trap Tab between first and last"]}},{id:"mod17-t3",title:"Screen Reader Support",explanation:`## Making Content Screen Reader Friendly

### Visually Hidden but Accessible

\`\`\`jsx
// CSS class for screen-reader-only content
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Usage
<button>
  <TrashIcon />
  <span className="sr-only">Delete item</span>
</button>
\`\`\`

### Live Regions for Dynamic Content

\`\`\`jsx
function SearchResults({ results, loading }) {
  return (
    <div>
      {/* Polite: announced when screen reader is idle */}
      <div aria-live="polite" className="sr-only">
        {loading ? 'Searching...' : \\\`\\\${results.length} results found\\\`}
      </div>

      {results.map(r => <ResultItem key={r.id} {...r} />)}
    </div>
  );
}
\`\`\`

### Announcing Status Changes

\`\`\`jsx
function useAnnounce() {
  const [message, setMessage] = useState('');

  const announce = (text) => {
    setMessage('');
    // Small delay ensures screen reader detects the change
    setTimeout(() => setMessage(text), 100);
  };

  const Announcer = () => (
    <div aria-live="assertive" className="sr-only">
      {message}
    </div>
  );

  return { announce, Announcer };
}

// Usage
function TodoApp() {
  const { announce, Announcer } = useAnnounce();

  const addTodo = (text) => {
    setTodos(prev => [...prev, { text }]);
    announce(\\\`Added: \\\${text}\\\`);
  };

  const deleteTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    setTodos(prev => prev.filter(t => t.id !== id));
    announce(\\\`Deleted: \\\${todo.text}\\\`);
  };

  return (
    <div>
      <Announcer />
      {/* rest of component */}
    </div>
  );
}
\`\`\`

### Image Accessibility

\`\`\`jsx
// Informative image — describe it
<img src="chart.png" alt="Sales increased 25% in Q3 2024" />

// Decorative image — empty alt
<img src="divider.png" alt="" />

// Complex image — longer description
<figure>
  <img src="architecture.png" alt="System architecture diagram" />
  <figcaption>
    The system uses a microservices architecture with three major layers...
  </figcaption>
</figure>
\`\`\`

### Heading Hierarchy

\`\`\`jsx
// ✅ Proper heading hierarchy
<h1>Dashboard</h1>
  <h2>Recent Activity</h2>
  <h2>Statistics</h2>
    <h3>Daily Users</h3>
    <h3>Revenue</h3>

// ❌ Skipping levels
<h1>Dashboard</h1>
  <h4>Activity</h4>  // Skipped h2 and h3!
\`\`\``,task:{description:"Create a `Toast` notification system that is screen-reader accessible. Toasts should be announced via aria-live when they appear. Include a visually hidden announcer and proper dismiss functionality.",starterCode:`function useToast() {
  // TODO: Manage toast state
  // TODO: Provide announce function
  // TODO: Auto-dismiss after timeout
}

function ToastContainer() {
  // TODO: Render toasts with proper aria-live
  return null;
}`,solution:`function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', duration = 5000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    if (duration > 0) {
      setTimeout(() => dismissToast(id), duration);
    }
  };

  const dismissToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return { toasts, addToast, dismissToast };
}

function ToastContainer({ toasts, onDismiss }) {
  return (
    <div aria-live="polite" aria-label="Notifications" role="region">
      {toasts.map(toast => (
        <div key={toast.id} role="status" className={\`toast toast-\${toast.type}\`}>
          <span>{toast.message}</span>
          <button
            aria-label={\`Dismiss: \${toast.message}\`}
            onClick={() => onDismiss(toast.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}`,hints:['Use aria-live="polite" on the container so new toasts are announced','Each toast should have role="status" for proper screen reader support',"Dismiss buttons need aria-label explaining what they dismiss"]}},{id:"mod17-t4",title:"Testing Accessibility",explanation:`## Automated Accessibility Testing

### Using jest-axe

\`\`\`tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('has no accessibility violations', async () => {
  const { container } = render(<LoginForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`

### RTL Accessibility Queries

React Testing Library's queries are accessibility-focused by design:

\`\`\`tsx
// These test accessibility by default
screen.getByRole('button', { name: /submit/i });  // Tests role + accessible name
screen.getByLabelText(/email/i);                    // Tests label association
screen.getByRole('heading', { level: 2 });          // Tests heading hierarchy
screen.getByRole('alert');                           // Tests alert role
\`\`\`

### Testing Keyboard Navigation

\`\`\`tsx
it('supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Menu items={['Home', 'About', 'Contact']} />);

  // Tab to the menu
  await user.tab();
  expect(screen.getByText('Home')).toHaveFocus();

  // Arrow down to next item
  await user.keyboard('{ArrowDown}');
  expect(screen.getByText('About')).toHaveFocus();

  // Enter to select
  await user.keyboard('{Enter}');
  expect(mockOnSelect).toHaveBeenCalledWith('About');
});
\`\`\`

### Testing Focus Management

\`\`\`tsx
it('traps focus in modal', async () => {
  const user = userEvent.setup();
  render(<Modal isOpen={true} onClose={mockClose} />);

  const closeBtn = screen.getByRole('button', { name: /close/i });
  const input = screen.getByRole('textbox');

  // Focus should start in the modal
  expect(closeBtn).toHaveFocus();

  // Tab should cycle within modal
  await user.tab();
  expect(input).toHaveFocus();

  await user.tab();
  expect(closeBtn).toHaveFocus(); // Back to first element
});

it('closes modal on Escape', async () => {
  const user = userEvent.setup();
  render(<Modal isOpen={true} onClose={mockClose} />);

  await user.keyboard('{Escape}');
  expect(mockClose).toHaveBeenCalled();
});
\`\`\`

### Accessibility Checklist

- [ ] All images have alt text (or alt="" for decorative)
- [ ] All form inputs have associated labels
- [ ] Color is not the only way to convey information
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Focus is visible and managed correctly
- [ ] All functionality is keyboard accessible
- [ ] Dynamic content uses aria-live regions
- [ ] Modals trap focus and restore it on close
- [ ] Sufficient color contrast (4.5:1 for text)`,task:{description:"Write accessibility tests for a `NavigationMenu` component. Test: proper ARIA roles, keyboard navigation (arrow keys to move between items, Enter to select), and that the current page is indicated with aria-current.",starterCode:`function NavigationMenu({ items, currentPath, onNavigate }) {
  return (
    <nav aria-label="Main navigation">
      <ul role="menubar">
        {items.map((item) => (
          <li key={item.path} role="none">
            <a
              href={item.path}
              role="menuitem"
              aria-current={item.path === currentPath ? 'page' : undefined}
              onClick={(e) => { e.preventDefault(); onNavigate(item.path); }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// TODO: Write accessibility tests
describe('NavigationMenu a11y', () => {
  // TODO
});`,solution:`const mockItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

describe('NavigationMenu a11y', () => {
  it('has navigation landmark with label', () => {
    render(<NavigationMenu items={mockItems} currentPath="/" onNavigate={() => {}} />);
    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument();
  });

  it('renders items with menuitem role', () => {
    render(<NavigationMenu items={mockItems} currentPath="/" onNavigate={() => {}} />);
    const items = screen.getAllByRole('menuitem');
    expect(items).toHaveLength(3);
  });

  it('marks current page with aria-current', () => {
    render(<NavigationMenu items={mockItems} currentPath="/about" onNavigate={() => {}} />);
    expect(screen.getByText('About')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Home')).not.toHaveAttribute('aria-current');
  });

  it('calls onNavigate when item is clicked', async () => {
    const user = userEvent.setup();
    const mockNav = vi.fn();
    render(<NavigationMenu items={mockItems} currentPath="/" onNavigate={mockNav} />);

    await user.click(screen.getByText('About'));
    expect(mockNav).toHaveBeenCalledWith('/about');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <NavigationMenu items={mockItems} currentPath="/" onNavigate={() => {}} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});`,hints:['Use getByRole("navigation") to verify the nav landmark',"Use toHaveAttribute to check aria-current","Use jest-axe for automated accessibility violation detection"]}}],test:[{id:"mod17-q1",question:'What is the "first rule of ARIA"?',options:["Always use aria-label on every element","Don't use ARIA when native HTML elements can provide the semantics","Use ARIA roles on every div element","ARIA attributes are required for all interactive elements"],correctAnswer:1,explanation:'The first rule of ARIA is to not use it when native HTML provides the same semantics. A <button> is better than <div role="button"> because it includes keyboard support, focus management, and form submission for free.'},{id:"mod17-q2",question:'What does aria-live="polite" do?',options:["It makes the element focusable via Tab key","It announces content changes to screen readers when the user is idle","It prevents the element from being read by screen readers","It adds a polite animation when content changes"],correctAnswer:1,explanation:'aria-live="polite" creates a live region. Screen readers will announce content changes in this element when they finish reading the current content. Use "assertive" for urgent messages that interrupt.'},{id:"mod17-q3",question:"Why is focus trapping important for modals?",options:["It improves the visual appearance of the modal","It prevents keyboard users from tabbing to content hidden behind the modal","It makes the modal load faster","It reduces the number of DOM elements rendered"],correctAnswer:1,explanation:"Focus trapping keeps keyboard focus within the modal, preventing users from tabbing to invisible content behind it. Without it, keyboard users can interact with page elements they can't see, causing confusion."},{id:"mod17-q4",question:"What is the purpose of the sr-only CSS class?",options:["It hides content from all users including screen readers","It hides content visually but keeps it accessible to screen readers","It applies special styling only when a screen reader is detected","It enlarges text for users with low vision"],correctAnswer:1,explanation:"The sr-only (screen reader only) class visually hides content while keeping it in the accessibility tree. Screen readers can still read it. This is used for adding context that sighted users get visually (like icon button labels)."},{id:"mod17-q5",question:'What is aria-current="page" used for?',options:["To indicate which page was loaded first","To indicate the current page in a navigation menu for assistive technology","To mark a page as the homepage of the site","To set the default page when no URL is specified"],correctAnswer:1,explanation:'aria-current="page" tells assistive technology which link in a navigation corresponds to the current page. Screen readers announce it as "current page", helping users understand where they are in the site.'}]},um={id:"mod-18",title:"React Ecosystem & Tooling",description:"Navigate the React ecosystem: Vite configuration, ESLint and Prettier setup, monorepo basics, Storybook for component development, and CI/CD for React apps.",topics:[{id:"mod18-t1",title:"Vite Configuration & Optimization",explanation:`## Vite — The Modern Build Tool

Vite uses native ES modules for development and Rollup for production builds.

### Basic Configuration

\`\`\`ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
    },
  },
});
\`\`\`

### Path Aliases with TypeScript

\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
\`\`\`

\`\`\`tsx
// Now you can import like this:
import { Button } from '@components/Button';
import { useAuth } from '@/hooks/useAuth';
\`\`\`

### Environment Variables

\`\`\`
# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
\`\`\`

\`\`\`tsx
// Access in code (must start with VITE_)
const apiUrl = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
\`\`\`

### Proxy API Requests

\`\`\`ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, ''),
      },
    },
  },
});
\`\`\`

### Code Splitting

\`\`\`tsx
// Automatic code splitting with lazy loading
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

// Manual chunk configuration
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});
\`\`\``,task:{description:"Create a Vite configuration file with: path aliases (@/ for src), environment-based API URL, dev server proxy for /api routes, manual chunks for vendor libraries, and source maps in production.",starterCode:`// vite.config.ts
// TODO: Configure with all the requirements
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // TODO: Add configuration
});`,solution:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, ''),
      },
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});`,hints:["Use path.resolve for aliases to get absolute paths","Environment variables in Vite must start with VITE_","manualChunks splits specified packages into separate bundle files"]}},{id:"mod18-t2",title:"ESLint & Prettier",explanation:`## Code Quality with ESLint

### Setup

\`\`\`bash
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh
\`\`\`

### Flat Config (ESLint 9+)

\`\`\`js
// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
      }],
    },
  },
  { ignores: ['dist/'] },
);
\`\`\`

### Important React ESLint Rules

| Rule | Purpose |
|------|---------|
| \`react-hooks/rules-of-hooks\` | Enforces Hooks rules (only call at top level) |
| \`react-hooks/exhaustive-deps\` | Warns about missing useEffect dependencies |
| \`no-unused-vars\` | Catches dead code |
| \`no-console\` | Prevents debug logs in production |

## Prettier — Code Formatting

### Setup

\`\`\`bash
npm install -D prettier eslint-config-prettier
\`\`\`

\`\`\`json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "always"
}
\`\`\`

### Integrating with ESLint

Add \`eslint-config-prettier\` last to disable conflicting rules:

\`\`\`js
// eslint.config.js
import prettierConfig from 'eslint-config-prettier';

export default [
  // ... other configs
  prettierConfig, // Must be last
];
\`\`\`

### Package.json Scripts

\`\`\`json
{
  "scripts": {
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/",
    "format:check": "prettier --check src/"
  }
}
\`\`\`

### Pre-commit Hooks with Husky

\`\`\`bash
npm install -D husky lint-staged
npx husky init
\`\`\`

\`\`\`json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,md,json}": ["prettier --write"]
  }
}
\`\`\``,task:{description:"Create an ESLint flat config and Prettier config for a React TypeScript project. Include rules for hooks, unused variables, no console.log, and TypeScript strict mode. Set up package.json scripts for linting and formatting.",starterCode:`// eslint.config.js
// TODO: Create ESLint flat config

// .prettierrc
// TODO: Create Prettier config

// package.json scripts
// TODO: Add lint and format scripts`,solution:`// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  prettierConfig,
  { ignores: ['dist/'] },
);

// .prettierrc
// { "semi": true, "singleQuote": true, "trailingComma": "all", "printWidth": 100, "tabWidth": 2 }

// package.json scripts
// "lint": "eslint src/",
// "lint:fix": "eslint src/ --fix",
// "format": "prettier --write 'src/**/*.{ts,tsx,css,json}'",
// "format:check": "prettier --check 'src/**/*.{ts,tsx,css,json}'"`,hints:["eslint-config-prettier must be the last item to override conflicting rules",'Use argsIgnorePattern: "^_" to allow unused args prefixed with underscore',"Add the ignores config to exclude the dist folder"]}},{id:"mod18-t3",title:"Storybook for Component Development",explanation:`## Storybook — Develop Components in Isolation

### Setup

\`\`\`bash
npx storybook@latest init
\`\`\`

### Writing Stories

\`\`\`tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
\`\`\`

### Story Types

| Type | Purpose |
|------|---------|
| Args Stories | Configure via controls panel |
| Render Stories | Custom JSX layout |
| Play Stories | Interactive tests (click, type) |
| Template Stories | Share setup across variants |

### Interactive Stories with Play

\`\`\`tsx
import { within, userEvent, expect } from '@storybook/test';

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText('Email'),
      'test@example.com'
    );
    await userEvent.type(
      canvas.getByLabelText('Password'),
      'password123'
    );
    await userEvent.click(canvas.getByRole('button', { name: /log in/i }));

    await expect(canvas.getByText('Welcome!')).toBeInTheDocument();
  },
};
\`\`\`

### Documenting with MDX

\`\`\`mdx
{/* Button.mdx */}
import { Meta, Story, Canvas, ArgsTable } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

# Button Component

Buttons trigger actions. Use the appropriate variant for the context.

<Canvas of={ButtonStories.Primary} />

## Props

<ArgsTable of={ButtonStories} />
\`\`\``,task:{description:'Write Storybook stories for a `Card` component that has props: title, description, imageUrl (optional), variant ("default" | "highlighted"), and onClick. Include stories for default, highlighted, with image, and without image variants.',starterCode:`// Card.stories.tsx
// TODO: Write meta and stories for the Card component

function Card({ title, description, imageUrl, variant = 'default', onClick }) {
  return (
    <div className={\`card card-\${variant}\`} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}`,solution:`import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'highlighted'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Getting Started',
    description: 'Learn the basics of React development.',
    variant: 'default',
  },
};

export const Highlighted: Story = {
  args: {
    title: 'Featured Course',
    description: 'Our most popular course this month.',
    variant: 'highlighted',
  },
};

export const WithImage: Story = {
  args: {
    title: 'React Mastery',
    description: 'A comprehensive guide to React.',
    imageUrl: 'https://via.placeholder.com/300x200',
    variant: 'default',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Quick Tip',
    description: 'Use React.memo to prevent unnecessary re-renders.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Card title="Default" description="Default variant" variant="default" />
      <Card title="Highlighted" description="Highlighted variant" variant="highlighted" />
    </div>
  ),
};`,hints:["Use Meta<typeof Card> for type-safe story configuration","Each exported const is a separate story in the Storybook sidebar","Use the render function for stories that show multiple variants together"]}},{id:"mod18-t4",title:"CI/CD for React Apps",explanation:`## Continuous Integration & Deployment

### GitHub Actions for React

\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run format:check
      - run: npm run test -- --run
      - run: npm run build
\`\`\`

### Deploy to GitHub Pages

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
\`\`\`

### Deploy to Netlify

\`\`\`yaml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

### Deploy to Vercel

\`\`\`json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
\`\`\`

### Quality Gates

\`\`\`yaml
# Add to CI workflow
- name: Check test coverage
  run: npm run test -- --run --coverage
  env:
    MIN_COVERAGE: 80

- name: Bundle size check
  run: |
    npm run build
    SIZE=$(du -sk dist/assets/*.js | awk '{sum += $1} END {print sum}')
    if [ $SIZE -gt 500 ]; then
      echo "Bundle too large: \${SIZE}KB"
      exit 1
    fi
\`\`\`

### Preview Deployments

Many platforms offer preview deployments for pull requests:
- **Vercel**: Automatic preview for every PR
- **Netlify**: Deploy previews with unique URLs
- **GitHub Pages**: Use PR-specific branches

This gives reviewers a live preview of changes before merging.`,task:{description:"Create a GitHub Actions CI/CD workflow that: lints, type-checks, tests (with coverage threshold), builds, and deploys to GitHub Pages on push to main. Include a separate job for PR checks.",starterCode:`# .github/workflows/ci.yml
# TODO: Create CI/CD pipeline
# Requirements:
# - Lint and format check
# - TypeScript type check
# - Tests with coverage
# - Build
# - Deploy to GitHub Pages (only on main)`,solution:`name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run test -- --run --coverage

  build:
    needs: quality
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/

  deploy:
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    needs: build
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist/
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,hints:['Use "needs" to create job dependencies (deploy needs build needs quality)','Use "if" condition to only deploy from main branch pushes',"Upload build artifacts to pass them between jobs"]}}],test:[{id:"mod18-q1",question:"What is the purpose of path aliases in Vite?",options:["To encrypt import paths for security","To create shorter, more readable imports instead of relative paths like ../../","To prevent circular dependencies at build time","To lazy-load modules based on their alias name"],correctAnswer:1,explanation:"Path aliases like @/ map to directories (e.g., src/), replacing deeply nested relative paths like ../../../components/Button with clean imports like @/components/Button."},{id:"mod18-q2",question:"Why must eslint-config-prettier be listed last in ESLint config?",options:["It is alphabetically the last package name","It disables all ESLint rules that conflict with Prettier formatting","It enables Prettier to run after ESLint","ESLint requires all config packages to be in alphabetical order"],correctAnswer:1,explanation:"eslint-config-prettier turns off ESLint rules that would conflict with Prettier's formatting. It must be last so it can override any conflicting rules from earlier configurations."},{id:"mod18-q3",question:"What is the main benefit of Storybook?",options:["It reduces the bundle size of the application","It lets you develop and test UI components in isolation, outside the app","It automatically generates React components from design files","It replaces the need for unit tests"],correctAnswer:1,explanation:"Storybook provides an isolated development environment for components. You can develop, test, and document components without running the full app, making it easier to handle different states and edge cases."},{id:"mod18-q4",question:"What does the SPA redirect rule do in deployment configs (/* → /index.html)?",options:["It redirects all traffic to the homepage","It ensures client-side routing works by serving index.html for all routes","It blocks access to all files except index.html","It compresses all responses to reduce bandwidth"],correctAnswer:1,explanation:"SPAs use client-side routing. When a user directly visits /about, the server needs to serve index.html (not look for an /about file). The rewrite rule ensures React Router handles all routes client-side."},{id:"mod18-q5",question:"What is the purpose of manualChunks in Vite build config?",options:["To manually delete unused code from the bundle","To split specific libraries into separate files for better caching","To compress JavaScript files into smaller chunks","To specify which files should not be included in the build"],correctAnswer:1,explanation:"manualChunks splits specified packages into separate bundle files. This improves caching — when your app code changes, users only re-download the app chunk, not the unchanged vendor libraries like React."}]},cm=[{id:"ft-1",question:"What is the primary benefit of the virtual DOM?",options:["It minimizes direct DOM manipulations by batching and diffing updates","It replaces the need for HTML by providing its own markup language","It makes JavaScript execution faster by compiling it to native code","It eliminates the need for CSS by handling all styling automatically"],correctAnswer:0,explanation:"The virtual DOM is a lightweight copy of the real DOM. React diffs changes against it and applies only the minimal set of updates to the real DOM, improving performance."},{id:"ft-2",question:"Which hook should you use to run code after every render?",options:["useState with an initial value","useEffect without a dependency array","useRef with a DOM element attached","useMemo with empty dependencies"],correctAnswer:1,explanation:"useEffect without a dependency array runs after every render. Adding [] makes it run only on mount; adding [deps] makes it run when those deps change."},{id:"ft-3",question:"How do you prevent a child component from re-rendering when the parent re-renders?",options:["Wrap the child with React.memo and memoize its props","Use useState in the child to track whether it should re-render","Use useEffect in the child component to skip redundant render cycles","Move the child component definition outside the parent function body"],correctAnswer:0,explanation:"React.memo wraps a component to skip re-rendering when its props haven't changed (shallow comparison). Combined with useMemo/useCallback for props, this prevents unnecessary re-renders."},{id:"ft-4",question:"What is the difference between useEffect and useLayoutEffect?",options:["They are functionally identical and can always be used interchangeably in every case","useLayoutEffect runs synchronously after DOM mutations but before paint; useEffect runs asynchronously after paint","useLayoutEffect is the original hook designed only for class component migration patterns","useEffect fires before the render phase completes, while useLayoutEffect fires after reconciliation finishes"],correctAnswer:1,explanation:"useLayoutEffect fires synchronously after all DOM mutations but before the browser paints. useEffect fires asynchronously after paint. Use useLayoutEffect for DOM measurements."},{id:"ft-5",question:"What happens when you call setState inside useEffect without proper dependencies?",options:["It can cause an infinite re-render loop","Nothing special happens — React handles it automatically","React silently ignores the state update and does not re-render","The state updates are queued and applied in the next browser session"],correctAnswer:0,explanation:"If useEffect updates state that is in its own dependency array (or has no dependency array), it triggers a re-render, which runs the effect again, causing an infinite loop."},{id:"ft-6",question:"In React Router v6, how do you create a layout that wraps multiple routes?",options:["Use a Higher-Order Component wrapper on each individual route component","Wrap each Route declaration inside a div element with a shared CSS class","Use a layout Route without a path that renders an Outlet","Use Redux global state management to synchronize all layout rendering"],correctAnswer:2,explanation:"A layout route (Route without a path or with a parent path) renders a layout component containing an <Outlet />, where matched child routes are displayed."},{id:"ft-7",question:"What is the purpose of the key prop in React?",options:["Applying inline CSS styling properties to elements rendered inside a list","Authenticating API requests by attaching a token to each list element","Helping React track which elements changed in a list for efficient reconciliation","Encrypting data attributes on list elements for security and privacy purposes"],correctAnswer:2,explanation:"Keys help React's reconciliation algorithm identify which items in a list have changed, been added, or removed. They should be stable and unique among siblings."},{id:"ft-8",question:"When should you use useReducer over useState?",options:["For managing any piece of state at all, since it is always better than useState","Only in class components because functional components do not support reducers","When state logic is complex, has multiple sub-values, or next state depends on previous state","Only when state is a simple boolean value that toggles between true and false"],correctAnswer:2,explanation:"useReducer excels with complex state: multiple related values, actions with different update patterns, and when the next state depends on the previous one in non-trivial ways."},{id:"ft-9",question:"What is the compound component pattern?",options:["Using multiple useState hooks to manage separate pieces of related component state","Components that share implicit state via context while letting consumers control composition","Deeply nesting div elements to create complex multi-level layout structures","Applying TypeScript generics to enforce strict type safety across components"],correctAnswer:1,explanation:"Compound components work together by sharing internal state via context. The consumer controls how they're composed (e.g., Tabs + Tab + Panel), while logic is encapsulated."},{id:"ft-10",question:"What is the correct order of operations in a React component lifecycle?",options:["Render → Browser paint → Effect → (on next update: Cleanup → Render → Paint → Effect)","Effect runs first → Component renders → Cleanup executes after the render completes","Cleanup runs first → Component renders → Effect fires after the render is committed","Effect fires immediately → Cleanup runs → Component renders the updated output"],correctAnswer:0,explanation:"React renders, the browser paints, then effects run. On updates, React runs cleanup from the previous effect, renders, paints, then runs the new effect."},{id:"ft-11",question:"What does React.lazy() do?",options:["Delays the rendering of a component until the browser's next idle frame period","Creates a temporary placeholder component that displays while data is fetching","Memoizes a component and prevents it from re-rendering when its props change","Loads a component dynamically (on demand) via code splitting"],correctAnswer:3,explanation:"React.lazy() enables code splitting by loading a component only when it's first rendered. It takes a function that returns a dynamic import() and must be used with Suspense."},{id:"ft-12",question:"How do you share logic between components without changing the component hierarchy?",options:["Copy-paste the code","Use inheritance","Create a custom hook","Use global variables"],correctAnswer:2,explanation:"Custom hooks extract and share stateful logic between components. They don't affect the component tree structure and can be composed together."},{id:"ft-13",question:"What is prop drilling and how do you solve it?",options:["Drilling into DOM elements manually from parent to child; use CSS selectors instead","Passing props through many intermediate components that don't use them; use Context API","Adding too many props to one component interface and overloading it; use fewer props","A performance optimization technique for reducing re-renders; use React.memo exclusively"],correctAnswer:1,explanation:"Prop drilling occurs when props are passed through multiple component levels just to reach a deeply nested child. Context API or state management libraries solve this."},{id:"ft-14",question:"Why should you never mutate state directly in React?",options:["It causes a syntax error during the component's next render cycle","It causes security vulnerabilities by exposing internal state references","It's perfectly fine — you can mutate state directly without any issues","React won't detect the change and the UI won't update"],correctAnswer:3,explanation:"React uses reference comparison to detect state changes. If you mutate an object/array in place, the reference stays the same and React won't know to re-render."},{id:"ft-15",question:"What is the best place to apply code splitting in a React application?",options:["Every single component should be individually code-split for best performance","Inside useEffect hooks to defer loading of expensive side-effect dependencies","Only the root component of the application should be wrapped in a lazy boundary","Route boundaries — loading each page on demand"],correctAnswer:3,explanation:"Route-based code splitting is the most impactful and natural place to split your code. Each page is loaded only when the user navigates to it."}],dm=[{id:"lt-1",question:"What is JSX in React?",options:["A syntax extension that allows writing HTML-like code in JavaScript","A query language designed for fetching and managing database records","A preprocessor that converts custom syntax into standard CSS rules","A testing framework that automatically validates component behavior"],correctAnswer:0,explanation:"JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file."},{id:"lt-2",question:"Which hook is used to manage state in a functional component?",options:["useEffect","useRef","useState","useContext"],correctAnswer:2,explanation:"useState is the primary hook for adding state variables to functional components."},{id:"lt-3",question:"What does the virtual DOM do?",options:["Replaces the browser DOM entirely by using a custom rendering engine","Provides a lightweight copy of the real DOM to optimize updates","Stores component data on the server and retrieves it via an API","Compiles JSX templates directly into static HTML pages at build time"],correctAnswer:1,explanation:"The virtual DOM is a lightweight JavaScript representation of the real DOM used to determine the minimal set of changes needed."},{id:"lt-4",question:"What is the purpose of the key prop when rendering lists?",options:["It helps React identify which items have changed, been added, or removed","It applies CSS class names to list items based on their position index","It determines the visual ordering and sort direction of list elements","It encrypts list data before transmitting it between parent and child"],correctAnswer:0,explanation:"Keys help React identify which items in a list have changed. They should be stable, unique identifiers among siblings."},{id:"lt-5",question:"Which method is used to pass data from a parent to a child component?",options:["State","Context","Props","Refs"],correctAnswer:2,explanation:"Props are the primary mechanism for passing data from parent to child components."},{id:"lt-6",question:"When does useEffect with an empty dependency array run?",options:["Only on the first render (mount)","On every single render cycle the component goes through","Only when any piece of component state changes","Never — empty arrays disable the effect entirely"],correctAnswer:0,explanation:"useEffect with [] runs only once after the initial render (mount)."},{id:"lt-7",question:"What is the correct way to update state based on previous state?",options:["setState(state + 1) direct value","setState(prev => prev + 1)","state = state + 1 assignment","this.state += 1 increment"],correctAnswer:1,explanation:"Use the functional updater form to ensure you work with the latest state value."},{id:"lt-8",question:"What is a controlled component in React?",options:["A form element whose value is driven by React state","A component that manages and orchestrates other components","A component that receives no props from its parent component","A component that accesses DOM elements directly through refs"],correctAnswer:0,explanation:"A controlled component is a form element whose value is controlled by React state and updated via onChange."},{id:"lt-9",question:"What does React.memo do?",options:["Stores component data in localStorage and retrieves it on mount","Memoizes a component to skip re-renders when props haven't changed","Creates a mutable ref that persists across component re-renders","Wraps a component with an error boundary for graceful fallbacks"],correctAnswer:1,explanation:"React.memo skips re-rendering when props haven't changed (shallow comparison)."},{id:"lt-10",question:"Which hook shares state across deeply nested components without prop drilling?",options:["useState","useReducer","useContext","useRef"],correctAnswer:2,explanation:"useContext reads context values created with createContext, avoiding prop drilling."},{id:"lt-11",question:"What is the purpose of useReducer?",options:["To manage complex state logic with a reducer function","To reduce the total number of components in the tree","To reduce the final JavaScript bundle size at build time","To optimize rendering speed by batching DOM operations"],correctAnswer:0,explanation:"useReducer manages complex state with multiple sub-values or interdependent transitions."},{id:"lt-12",question:"What is the children prop in React?",options:["An array of child component class definitions passed as a prop","Content placed between opening and closing tags of a component","A lifecycle method that executes when children mount or unmount","A required prop that every component must declare and consume"],correctAnswer:1,explanation:"The children prop contains whatever JSX is placed between the opening and closing tags of a component."},{id:"lt-13",question:"What happens if you mutate state directly (e.g., state.push(item))?",options:["React detects the mutation and triggers an immediate re-render","The application throws a runtime error and crashes immediately","React does not detect the change and the UI won't update","It works in development mode but silently fails in production"],correctAnswer:2,explanation:"React uses reference comparison. Mutating in place keeps the same reference, so React won't re-render."},{id:"lt-14",question:"Which is NOT a valid way to conditionally render in React?",options:["{condition && <Component />}","{condition ? <A /> : <B />}","if (condition) return <Component />","<if condition={true}><Component /></if>"],correctAnswer:3,explanation:"There is no <if> element in JSX. Use JavaScript expressions like &&, ternary, or early returns."},{id:"lt-15",question:"What is the difference between useEffect and useLayoutEffect?",options:["useLayoutEffect runs synchronously after DOM mutations but before paint; useEffect runs after paint","They are functionally identical and can always be used interchangeably","useLayoutEffect is the hook version designed only for class component lifecycle methods","useEffect fires before the render phase while useLayoutEffect fires during reconciliation"],correctAnswer:0,explanation:"useLayoutEffect fires synchronously after DOM mutations but before the browser paints."},{id:"lt-16",question:"What does useRef return?",options:["A reactive state variable that triggers a re-render whenever its value changes","A memoized callback function reference that changes only when dependencies update","A mutable ref object with a .current property that persists across renders","A context value object that propagates updates down through the component tree"],correctAnswer:2,explanation:"useRef returns a mutable object whose .current property persists across renders without causing re-renders."},{id:"lt-17",question:"What is prop drilling?",options:["A performance optimization technique that reduces unnecessary re-renders","A pattern where too many props are added to a single component interface","Manipulating DOM elements directly by drilling into the element hierarchy","Passing props through many intermediate components that don't use them"],correctAnswer:3,explanation:"Prop drilling is passing props through multiple component levels just to reach a deeply nested child."},{id:"lt-18",question:"How do you prevent a form from reloading the page on submit?",options:['Use type="button" on the submit button instead of type="submit"',"Call e.preventDefault() in the onSubmit handler","Return false from the event handler to stop the default action","Remove the action attribute entirely from the form element tag"],correctAnswer:1,explanation:"Calling e.preventDefault() prevents the browser's default form submission behavior."},{id:"lt-19",question:"What does React.lazy() do?",options:["Loads a component dynamically via code splitting","Delays the rendering of a component until the next idle frame","Memoizes a component and caches its rendered output in memory","Creates a placeholder component that renders while data is loading"],correctAnswer:0,explanation:"React.lazy() enables code splitting by loading a component only when it's first rendered."},{id:"lt-20",question:"What is the Suspense component used for?",options:["Catching and handling JavaScript errors thrown during the render phase","Providing a global state management solution across the component tree","Showing fallback content while lazy-loaded components are loading","Defining route boundaries and handling navigation between pages"],correctAnswer:2,explanation:"Suspense wraps lazy-loaded components and shows a fallback UI while they load."},{id:"lt-21",question:"What is the purpose of useCallback?",options:["To create callback functions that can dispatch state updates to a reducer","To provide error handling and automatic retry logic for async callbacks","To schedule a function to run synchronously after the component renders","To memoize a function reference so it only changes when dependencies change"],correctAnswer:3,explanation:"useCallback returns a memoized function that only changes when dependencies change."},{id:"lt-22",question:"What is the difference between useMemo and useCallback?",options:["They are functionally identical and can be used interchangeably in all cases","useMemo caches a computed value; useCallback caches a function reference","useMemo is intended for class components, useCallback for functional components","useMemo recalculates on every render while useCallback runs only on mount"],correctAnswer:1,explanation:"useMemo returns the memoized result of calling a function. useCallback returns the memoized function itself."},{id:"lt-23",question:"What does <Outlet /> do in React Router?",options:["Renders the matched child route's element in nested routes","Creates a navigation link that highlights when the route matches","Redirects the user from one route path to a different route path","Renders a 404 error page when no child routes match the current URL"],correctAnswer:0,explanation:"<Outlet /> is a placeholder where the matched child route's element will be rendered."},{id:"lt-24",question:"How do you access URL parameters like /users/:id?",options:["window.location.params","props.match.params","useParams() hook","useLocation().params"],correctAnswer:2,explanation:"useParams() returns an object of key/value pairs from the current URL matching the dynamic segments."},{id:"lt-25",question:"What is a Higher-Order Component (HOC)?",options:["A component that is rendered at the top of the DOM above all other elements","A component that utilizes every available React hook in its implementation","A component that accepts and manages more than ten props simultaneously","A function that takes a component and returns a new enhanced component"],correctAnswer:3,explanation:"A HOC accepts a component and returns a new component with additional behavior or props."},{id:"lt-26",question:"What is the compound component pattern?",options:["Components sharing implicit state via context while consumers control composition","Using multiple useState hooks together to manage related pieces of state","Deeply nesting div elements to create complex layout structures in JSX","Applying TypeScript generics to enforce strict type safety on component props"],correctAnswer:0,explanation:"Compound components share internal state via context while letting the consumer control composition."},{id:"lt-27",question:"What is the render props pattern?",options:["Using the render() lifecycle method from class-based React components","A pattern specifically designed for server-side rendering of components","Serializing all component props as text strings before passing them down","A component receives a function prop and calls it to determine what to render"],correctAnswer:3,explanation:"Render props: a component receives a function and calls it with data, letting the consumer decide what to render."},{id:"lt-28",question:"Why should component names start with a capital letter?",options:["It is just a convention with no technical enforcement by the framework","React treats lowercase tags as HTML elements and uppercase as components","It improves runtime performance by enabling faster component tree lookups","It is a strict requirement enforced by the TypeScript compiler for JSX files"],correctAnswer:1,explanation:"React uses the case of the first letter to distinguish between HTML elements and custom components."},{id:"lt-29",question:"What is StrictMode used for?",options:["Enforcing TypeScript type-checking at runtime in addition to compile time","Optimizing the app for production by stripping out development-only code","Highlighting potential problems by running extra checks in development","Preventing unauthorized access by validating user sessions on each render"],correctAnswer:2,explanation:"StrictMode helps identify potential problems by double-invoking certain functions in development."},{id:"lt-30",question:"What is React.Fragment (<> </>) for?",options:["Grouping elements without adding extra DOM nodes","Creating a portal to render children in a different DOM tree","Caching components in memory to prevent unnecessary re-renders","Breaking a single component into smaller reusable sub-components"],correctAnswer:0,explanation:"Fragments let you group multiple elements without adding an extra wrapper DOM node."},{id:"lt-31",question:"What causes an infinite loop in useEffect?",options:["Declaring the effect callback as an async function returning a Promise","Returning a cleanup function that removes event listeners on unmount","Using multiple useEffect hooks that each watch different state variables","Setting state inside useEffect without proper dependencies, causing re-trigger"],correctAnswer:3,explanation:"If useEffect updates state that triggers re-render and the effect runs again due to wrong dependencies, it loops."},{id:"lt-32",question:"How do you handle multiple form inputs with one onChange handler?",options:["Use a separate ref for each input element and read values from the DOM directly","Declare separate state variables and individual handlers for every form field","Use a state object and computed property names: [e.target.name]: e.target.value","Each input requires its own dedicated handler function — there is no shared way"],correctAnswer:2,explanation:"Give each input a name attribute and use computed property names to update the correct field."},{id:"lt-33",question:"What does the useNavigate hook do?",options:["Registers a new route definition in the React Router configuration","Returns a function for programmatic navigation","Navigates to an external URL outside the single-page application","Generates a breadcrumb trail based on the current route hierarchy"],correctAnswer:1,explanation:"useNavigate returns a function that lets you navigate programmatically."},{id:"lt-34",question:'What is an "index" route in React Router?',options:["Generates the index.html file used as the entry point for the SPA","A permanent redirect from any unknown path to the application homepage","The default child route that renders at the parent URL","A route specifically designed for handling query parameters and filters"],correctAnswer:2,explanation:"An index route renders at the parent's URL when no other child route matches."},{id:"lt-35",question:"Why use AbortController when fetching in useEffect?",options:["To cancel in-flight requests on unmount, preventing stale state updates","To improve request speed by compressing the fetch payload automatically","It is strictly required by the Fetch API specification for all requests","To implement automatic retry logic when network requests fail or timeout"],correctAnswer:0,explanation:"AbortController cancels in-flight requests, preventing state updates on unmounted components."},{id:"lt-36",question:'What is "lifting state up"?',options:["Moving all component state into a Redux store for centralized management","Moving state declarations inside a useEffect hook for deferred initialization","Persisting state to localStorage so it survives across page refreshes","Moving state to the closest common parent of components that share it"],correctAnswer:3,explanation:"Lifting state up means moving shared state to the closest common ancestor."},{id:"lt-37",question:"What is derived state?",options:["State that comes from props and should always be stored in a separate variable","State shared between sibling components via a common parent's props","State fetched from the server that is cached locally in the component","State that can be computed from existing state — duplicating can cause sync bugs"],correctAnswer:3,explanation:"Derived state is computable from existing state. A separate copy can get out of sync, causing bugs."},{id:"lt-38",question:"What does <NavLink> do that <Link> does not?",options:["Navigates to external URLs outside the current single-page application","Supports active state styling based on the current URL","Opens navigation links in a new browser tab or window by default","Automatically preloads the route component when hovering over the link"],correctAnswer:1,explanation:'NavLink adds support for an "active" class/style when its path matches the current URL.'},{id:"lt-39",question:"What is the lazy initializer pattern for useState?",options:["Wrapping the initial value in a setTimeout to defer its computation","Setting the initial state to null and populating it after the first render","Passing a function to useState that runs only once to compute the initial value","Using a useEffect on mount to compute and set the initial state value"],correctAnswer:2,explanation:"useState(() => expensive()) accepts a function that runs only on the first render."},{id:"lt-40",question:"When should you use a key prop other than the array index?",options:["When items can be reordered, inserted, or deleted","Never — using the array index is always the correct approach","Only when using TypeScript, since it enforces strict key types","Only in production builds where React enables strict consistency"],correctAnswer:0,explanation:"Index keys cause bugs when items are reordered, inserted, or deleted. Use stable, unique IDs."},{id:"lt-41",question:"What is the purpose of an Error Boundary?",options:["To validate form inputs and display field-level error messages to users","To prevent React runtime warnings from appearing in the browser console","To intercept and handle HTTP errors returned from network API requests","Catch JavaScript errors in a component tree and display a fallback UI"],correctAnswer:3,explanation:"Error Boundaries catch rendering errors in child components and show a fallback UI."},{id:"lt-42",question:"Can you use hooks inside a conditional statement?",options:["Yes, hooks can be called anywhere including inside conditions and loops","Only in class components — functional components have different rules","Only the useState hook can be conditional; other hooks cannot be used","No — hooks must be called at the top level, in the same order every render"],correctAnswer:3,explanation:"Hooks must be called at the top level to ensure consistent ordering between renders."},{id:"lt-43",question:"What is the correct React render + effect lifecycle order?",options:["Effect runs first → Component renders → Cleanup executes afterward","Render → Paint → Effect → (update: Cleanup → Render → Paint → Effect)","Cleanup runs first → Component renders → Effect executes afterward","Effect fires immediately → Cleanup runs → Component renders to the screen"],correctAnswer:1,explanation:"React renders, browser paints, then effects run. On updates, cleanup runs before the new effect."},{id:"lt-44",question:"What does createContext do?",options:["Creates a context object to share values across the component tree","Creates a new standalone component with its own isolated state scope","Wraps existing components with additional style and theme properties","Creates memoized event handlers that persist across component renders"],correctAnswer:0,explanation:"createContext creates a Context object for sharing values without prop drilling."},{id:"lt-45",question:'What is "composition over inheritance" in React?',options:["Extending components using class inheritance to share common behavior","Using TypeScript interfaces to enforce strict type hierarchies on components","Building UIs by combining components via props and children rather than inheritance","Avoiding the children prop entirely and passing all data through explicit props"],correctAnswer:2,explanation:"React favors composition — building UIs from small, reusable components — over class inheritance."},{id:"lt-46",question:"What is a pure component?",options:["A component that is written exclusively in TypeScript with full type annotations","Any functional component regardless of whether it has side effects or not","A component that does not accept or render any children inside its body","Always renders the same output for the same props, with no side effects during render"],correctAnswer:3,explanation:"A pure component returns the same JSX for the same props/state, with no render-phase side effects."},{id:"lt-47",question:"How can you debounce a search input in React?",options:["Call the search API on every single keystroke without any delay","Use useEffect with setTimeout and clear it in cleanup","Wrap the input component in React.memo to limit re-renders","Disable the input field between search API calls and re-enable after"],correctAnswer:1,explanation:"Use setTimeout in useEffect and clearTimeout in cleanup — changes before timeout fire cancel the previous call."},{id:"lt-48",question:"What is the difference between controlled and uncontrolled components?",options:["Controlled: value driven by state. Uncontrolled: value in the DOM, read via ref","Controlled components use class syntax while uncontrolled use function syntax","They are functionally identical and can be used interchangeably in all cases","Uncontrolled components cannot have an onChange handler attached to them at all"],correctAnswer:0,explanation:"Controlled: React state drives form value. Uncontrolled: DOM holds the value, accessed via ref."},{id:"lt-49",question:"What does the spread operator do with props: <C {...obj} />?",options:["Creates a deep copy of the component with all of its internal state","Merges the component definition and the object into a new component","Passes all properties of obj as individual props to C","Converts the object to a JSON string and passes it as a single prop"],correctAnswer:2,explanation:"The spread operator passes each property of the object as a separate prop to the component."},{id:"lt-50",question:"Why can an object literal in useEffect deps cause infinite re-runs?",options:["Objects are not a valid type for the useEffect dependency array values","A new reference is created each render, so React thinks the dep changed","The useEffect hook does not support objects as dependency array entries","It triggers a syntax error because objects cannot be compared by React"],correctAnswer:1,explanation:"React uses Object.is() for deps comparison. A new object literal has a new reference each render."},{id:"lt-51",question:"Where is the best place to apply code splitting?",options:["Every single component should be individually code-split for best performance","Inside useEffect hooks to defer loading of expensive side-effect logic","Only the root application component should be wrapped in a lazy boundary","Route boundaries — loading each page on demand"],correctAnswer:3,explanation:"Route-based splitting ensures each page's code is loaded only when the user navigates to it."},{id:"lt-52",question:"How do custom hooks share logic between components?",options:["By encapsulating reusable logic — each caller gets its own copy of state","By sharing the same state instance across all components that call the hook","By using global variables that are accessible from any component in the app","By rendering shared UI elements that are injected into the calling component"],correctAnswer:0,explanation:"Each component calling a custom hook gets its own independent copy of the hook's state."},{id:"lt-53",question:"What must a custom hook's name start with?",options:["get","handle","use","on"],correctAnswer:2,explanation:'Custom hooks must start with "use" so React can enforce the rules of hooks.'},{id:"lt-54",question:"What is reconciliation in React?",options:["The process of merging two separate state objects into a single state value","The process of diffing virtual DOM trees and updating the real DOM efficiently","The mechanism for connecting React components to an external API data source","The lifecycle phase responsible for cleaning up effects before a component unmounts"],correctAnswer:1,explanation:"Reconciliation diffs two virtual DOM trees to determine the minimum number of real DOM changes."},{id:"lt-55",question:"When does a component re-render?",options:["Only when its own internal state changes via a setState or dispatch call","Only when the props passed to it from the parent component have changed","When its state changes, parent re-renders, or a subscribed context changes","Only when the user directly interacts with the component via mouse or keyboard"],correctAnswer:2,explanation:"A component re-renders when its state changes, parent re-renders, or a consumed context changes."},{id:"lt-56",question:"What is a portal in React?",options:["A mechanism for redirecting users between different pages in the application","A specialized context provider that broadcasts theme values to all children","A security feature that sandboxes component rendering in an isolated scope","A way to render children into a DOM node outside the parent's hierarchy"],correctAnswer:3,explanation:"createPortal renders a child into a different DOM node, useful for modals and tooltips."},{id:"lt-57",question:"What happens if you forget cleanup when adding an event listener in useEffect?",options:["Nothing — React automatically manages and removes event listeners for you","The listener accumulates on each re-render, causing memory leaks","The application throws an error and crashes on the next user interaction","The listener is automatically garbage collected when the component unmounts"],correctAnswer:1,explanation:"Without cleanup, each render adds another listener without removing the old one — memory leak and duplicate calls."},{id:"lt-58",question:"What type of value can useState initial state be?",options:["Only primitive values like strings, numbers, and booleans are accepted","Only string values are supported as the initial state for useState hooks","Only objects and arrays can be used because state must be serializable","Any value: primitives, objects, arrays, null, or a lazy initializer function"],correctAnswer:3,explanation:"useState accepts any value as initial state, including a function for lazy initialization."},{id:"lt-59",question:'What does the path="*" route do in React Router v6?',options:["It matches all defined routes simultaneously and renders them in parallel","It enables advanced regex-based pattern matching for route path definitions","It creates a wildcard redirect that forwards all traffic to the root route","Acts as a catch-all for unmatched URLs (404 page)"],correctAnswer:3,explanation:`path="*" matches any URL that doesn't match other defined routes, commonly used for 404 pages.`},{id:"lt-60",question:"What is batching in React?",options:["Grouping multiple components together into a single compound component unit","React groups multiple state updates into a single re-render for performance","Splitting application code into smaller chunks that load independently","Running multiple useEffect cleanup functions in parallel during unmounting"],correctAnswer:1,explanation:"React batches state updates from the same event handler into a single re-render."}];function Rl(e=30){const t=[...dm];for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t.slice(0,e).map((n,r)=>({...n,id:`lt-r-${r}`}))}const ae={title:"React Mastery",description:"A comprehensive course covering everything from React fundamentals to advanced patterns, performance optimization, and best practices.",modules:[$f,Qf,Jf,Xf,Kf,Gf,Yf,Zf,em,tm,nm,rm,om,sm,am,im,lm,um],finalTest:cm};function pm(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}function hm({onRandomQuestion:e,onQuickLine:t}){const{progress:n}=yn(),r=o=>{const s=ae.modules.find(i=>i.id===o);if(!s)return 0;const a=s.topics.filter(i=>{var l;return(l=n.topicProgress[i.id])==null?void 0:l.completed}).length;return Math.round(a/s.topics.length*100)};return d.jsxs("aside",{className:"sidebar",children:[d.jsx("div",{className:"sidebar-header",children:d.jsxs("h2",{children:["⚛️ ",ae.title]})}),d.jsxs("nav",{className:"sidebar-nav",children:[d.jsx(Nr,{to:"/",end:!0,className:"nav-item",children:"🏠 Dashboard"}),d.jsxs(Nr,{to:"/level-test",className:"nav-item",children:["📋 Level Evaluation",n.levelTestResult&&d.jsx("span",{className:"badge",children:pm(Math.round(n.levelTestResult.score/n.levelTestResult.total*100))})]}),e&&d.jsx("button",{className:"nav-item random-q-btn",onClick:e,children:"🎲 Random Question"}),t&&d.jsx("button",{className:"nav-item quick-line-btn",onClick:t,children:"⚡ Quick Line"}),d.jsx("div",{className:"nav-section",children:d.jsx("span",{className:"nav-section-title",children:"Modules"})}),ae.modules.map((o,s)=>d.jsx("div",{className:"module-nav",children:d.jsxs(Nr,{to:`/module/${o.id}`,className:"nav-item module-link",children:[d.jsxs("span",{children:[s+1,". ",o.title]}),d.jsxs("span",{className:"progress-badge",children:[r(o.id),"%"]})]})},o.id)),d.jsx("div",{className:"nav-section",children:d.jsx("span",{className:"nav-section-title",children:"Assessment"})}),d.jsxs(Nr,{to:"/final-test",className:"nav-item",children:["🏆 Final Test",n.finalTestResult&&d.jsxs("span",{className:"badge",children:[n.finalTestResult.score,"/",n.finalTestResult.total]})]})]})]})}function fm(){const e=[];for(const t of ae.modules)e.push(...t.test);return e.push(...ae.finalTest),e}const El=fm();function Al(){return El[Math.floor(Math.random()*El.length)]}function mm({onClose:e}){const[t,n]=S.useState(Al),[r,o]=S.useState(null),[s,a]=S.useState(!1),[i,l]=S.useState(0),[u,m]=S.useState(!1),[h,g]=S.useState(0),x=S.useCallback(()=>{n(Al()),o(null),a(!1),m(!1)},[]),v=w=>{s||(o(w),a(!0),w===t.correctAnswer?l(k=>k+1):(g(i),m(!0),l(0)))};return d.jsx("div",{className:"modal-backdrop",onClick:e,children:d.jsxs("div",{className:"modal-content",onClick:w=>w.stopPropagation(),children:[d.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),d.jsx("h3",{className:"rq-question",children:t.question}),!u&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"rq-options",children:t.options.map((w,k)=>{let p="option";return r===k&&(p+=" selected"),s&&(k===t.correctAnswer?p+=" correct":r===k&&(p+=" incorrect")),d.jsx("button",{className:p,onClick:()=>v(k),children:w},k)})}),s&&r===t.correctAnswer&&d.jsx("p",{className:"rq-explanation",children:t.explanation}),s&&r===t.correctAnswer&&d.jsxs("div",{className:"rq-actions",children:[d.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",i]}),d.jsx("button",{className:"btn btn-primary",onClick:x,children:"Next Random Question →"})]})]}),u&&d.jsxs("div",{className:"rq-streak-end",children:[d.jsxs("p",{children:["OK. This one is incorrect. However, that was ",d.jsx("strong",{children:h})," correct answer",h!==1?"s":""," in a row. Congrats!"]}),d.jsx("button",{className:"btn btn-primary",onClick:x,children:"Continue →"})]})]})})}const Il=[{id:"ql-1",prompt:'Destructure the "name" and "age" props in the function parameter.',codeBefore:[],codeAfter:["  return <p>{name} is {age} years old</p>;","}"],answer:"function UserInfo({ name, age }) {",hint:"Destructure props directly in the parameter list: { prop1, prop2 }"},{id:"ql-2",prompt:"Render the items array as a list. Fill in the map line with key and content.",codeBefore:["function ItemList({ items }) {","  return (","    <ul>"],codeAfter:["    </ul>","  );","}"],answer:"{items.map(item => <li key={item.id}>{item.name}</li>)}",hint:"Use items.map() and don't forget the key prop."},{id:"ql-3",prompt:'Initialize a state variable "count" with value 0.',codeBefore:["function Counter() {"],codeAfter:["  return <button onClick={() => setCount(count + 1)}>{count}</button>;","}"],answer:"const [count, setCount] = useState(0);",hint:"Use array destructuring with useState(initialValue)."},{id:"ql-4",prompt:"Add the correct dependency array so this effect runs only when userId changes.",codeBefore:["useEffect(() => {","  fetchUser(userId);"],codeAfter:[],answer:"}, [userId]);",hint:"The dependency array comes after the callback, inside useEffect()."},{id:"ql-5",prompt:"Conditionally render <AdminPanel /> only if user.isAdmin is true.",codeBefore:["function Dashboard({ user }) {","  return (","    <div>","      <h1>Welcome</h1>"],codeAfter:["    </div>","  );","}"],answer:"{user.isAdmin && <AdminPanel />}",hint:"Use the logical AND (&&) pattern for conditional rendering."},{id:"ql-6",prompt:"Create a ref to store a DOM element reference.",codeBefore:["function TextInput() {"],codeAfter:["  return <input ref={inputRef} />;","}"],answer:"const inputRef = useRef(null);",hint:"useRef(null) creates a mutable ref object with a .current property."},{id:"ql-7",prompt:"Memoize the filtered array so it only recalculates when items or query changes.",codeBefore:["function SearchList({ items, query }) {"],codeAfter:["  return <ul>{filtered.map(i => <li key={i.id}>{i.name}</li>)}</ul>;","}"],answer:"const filtered = useMemo(() => items.filter(i => i.name.includes(query)), [items, query]);",hint:"useMemo(() => computation, [deps]) caches the result."},{id:"ql-8",prompt:"Wrap the handleClick function with useCallback so it only changes when count changes.",codeBefore:["function Button({ count }) {"],codeAfter:["  return <button onClick={handleClick}>Clicked {count}</button>;","}"],answer:"const handleClick = useCallback(() => console.log(count), [count]);",hint:"useCallback(fn, [deps]) memoizes the function reference."},{id:"ql-9",prompt:"Use functional update to increment count without stale closure.",codeBefore:["const increment = () => {"],codeAfter:["};"],answer:"setCount(prev => prev + 1);",hint:"Pass a function to setState: setState(previousValue => newValue)."},{id:"ql-10",prompt:"Create a new array with the item added without mutating the original.",codeBefore:["const addItem = (item) => {"],codeAfter:["};"],answer:"setItems(prev => [...prev, item]);",hint:"Use spread operator: [...existingArray, newItem]."},{id:"ql-11",prompt:"Remove the item with the given id immutably.",codeBefore:["const removeItem = (id) => {"],codeAfter:["};"],answer:"setItems(prev => prev.filter(item => item.id !== id));",hint:"filter() returns a new array without the matching item."},{id:"ql-12",prompt:"Update the name property of a user object immutably.",codeBefore:["const updateName = (newName) => {"],codeAfter:["};"],answer:"setUser(prev => ({ ...prev, name: newName }));",hint:"Spread the previous object and override the property: { ...prev, key: value }."},{id:"ql-13",prompt:"Use a ternary to show either <LoggedIn /> or <LoggedOut /> based on isAuth.",codeBefore:["function App({ isAuth }) {","  return (","    <div>"],codeAfter:["    </div>","  );","}"],answer:"{isAuth ? <LoggedIn /> : <LoggedOut />}",hint:"Ternary in JSX: {condition ? <A /> : <B />}."},{id:"ql-14",prompt:"Spread all remaining props onto the inner input element.",codeBefore:["function TextInput({ label, ...rest }) {","  return (","    <div>","      <label>{label}</label>"],codeAfter:["    </div>","  );","}"],answer:"<input {...rest} />",hint:"Use the spread operator on JSX: <element {...objectOfProps} />."},{id:"ql-15",prompt:"Return a cleanup function that clears the interval.",codeBefore:["useEffect(() => {","  const id = setInterval(() => tick(), 1000);"],codeAfter:["}, []);"],answer:"return () => clearInterval(id);",hint:"Return a function from useEffect for cleanup."},{id:"ql-16",prompt:"Add an event listener on mount and remove it on cleanup.",codeBefore:["useEffect(() => {",'  window.addEventListener("resize", handleResize);'],codeAfter:["}, []);"],answer:'return () => window.removeEventListener("resize", handleResize);',hint:"Clean up by removing the same event listener in the return function."},{id:"ql-17",prompt:"Type the useState to hold either a User object or null.",codeBefore:["interface User { id: number; name: string; }","function Profile() {"],codeAfter:["  // ...","}"],answer:"const [user, setUser] = useState<User | null>(null);",hint:"Provide the generic type: useState<Type>(initialValue)."},{id:"ql-18",prompt:"Define the type for an onClick handler prop.",codeBefore:["interface ButtonProps {","  label: string;"],codeAfter:["}"],answer:"onClick: () => void;",hint:"A function that takes no args and returns nothing: () => void."},{id:"ql-19",prompt:"Consume the ThemeContext to get the current theme.",codeBefore:["function Header() {"],codeAfter:["  return <h1 className={theme}>Title</h1>;","}"],answer:"const theme = useContext(ThemeContext);",hint:"useContext(ContextObject) returns the current context value."},{id:"ql-20",prompt:"Sort a copy of the array alphabetically by name without mutating the original.",codeBefore:["const sortByName = (items) => {"],codeAfter:["};"],answer:"return [...items].sort((a, b) => a.name.localeCompare(b.name));",hint:"Copy first with [...arr] since sort() mutates in place."},{id:"ql-21",prompt:"Prevent the default form submission behavior.",codeBefore:["const handleSubmit = (e) => {"],codeAfter:["  // submit logic","};"],answer:"e.preventDefault();",hint:"Call preventDefault() on the event object."},{id:"ql-22",prompt:'Get the "id" parameter from the URL using React Router.',codeBefore:["function ProductPage() {"],codeAfter:["  return <h1>Product {id}</h1>;","}"],answer:"const { id } = useParams();",hint:"useParams() returns an object of URL parameters."},{id:"ql-23",prompt:"Navigate programmatically to the /dashboard route.",codeBefore:["function LoginPage() {","  const navigate = useNavigate();","  const handleLogin = () => {","    // after successful login..."],codeAfter:["  };","}"],answer:'navigate("/dashboard");',hint:"Call the navigate function with the target path."},{id:"ql-24",prompt:"Lazy-load the Settings component for code splitting.",codeBefore:['import { lazy } from "react";'],codeAfter:["","// used inside <Suspense>"],answer:'const Settings = lazy(() => import("./Settings"));',hint:"lazy() takes a function that returns a dynamic import()."},{id:"ql-25",prompt:"Provide a fallback UI while the lazy component loads.",codeBefore:[],codeAfter:["  <LazyComponent />","</Suspense>"],answer:"<Suspense fallback={<p>Loading...</p>}>",hint:"Suspense takes a fallback prop with JSX to show while loading."},{id:"ql-26",prompt:"Create a portal that renders children into document.body.",codeBefore:["function Overlay({ children }) {","  return ("],codeAfter:["  );","}"],answer:"createPortal(children, document.body)",hint:'createPortal(element, container) from "react-dom".'},{id:"ql-27",prompt:"Set the document title when the component mounts.",codeBefore:["function Page({ title }) {"],codeAfter:["  return <div>{title}</div>;","}"],answer:"useEffect(() => { document.title = title; }, [title]);",hint:"Use useEffect with title as a dependency."},{id:"ql-28",prompt:"Debounce: set a timeout that clears the previous one on each value change.",codeBefore:["useEffect(() => {","  const timer = setTimeout(() => setDebounced(value), 300);"],codeAfter:["}, [value]);"],answer:"return () => clearTimeout(timer);",hint:"Return a cleanup function that calls clearTimeout."},{id:"ql-29",prompt:"Stop the click event from bubbling up to parent elements.",codeBefore:['<div className="modal-content" onClick={'],codeAfter:["}>"],answer:"e => e.stopPropagation()",hint:"Call stopPropagation() on the event to prevent bubbling."},{id:"ql-30",prompt:"Derive the total price from a cart array during render (don't use state).",codeBefore:["function Cart({ items }) {"],codeAfter:["  return <p>Total: ${total}</p>;","}"],answer:"const total = items.reduce((sum, item) => sum + item.price, 0);",hint:"Use reduce() to sum up values. Don't store derived data in state."}];function Pl(){return Il[Math.floor(Math.random()*Il.length)]}function gm({onClose:e}){const[t,n]=S.useState(Pl),[r,o]=S.useState(""),[s,a]=S.useState(null),[i,l]=S.useState(!1),[u,m]=S.useState(0),[h,g]=S.useState(!1),[x,v]=S.useState(0),w=S.useCallback(()=>{n(Pl()),o(""),a(null),l(!1),g(!1)},[]),k=()=>{if(s)return;const c=r.trim();c&&(c===t.answer.trim()?(a("correct"),m(f=>f+1)):(a("incorrect"),v(u),g(!0),m(0)))},p=c=>{c.key==="Enter"&&k()};return d.jsx("div",{className:"modal-backdrop",onClick:e,children:d.jsxs("div",{className:"modal-content ql-modal",onClick:c=>c.stopPropagation(),children:[d.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),d.jsx("h3",{className:"ql-prompt",children:t.prompt}),!h&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"ql-code-block",children:[t.codeBefore.map((c,f)=>d.jsx("div",{className:"ql-code-line",children:c||" "},"b"+f)),d.jsxs("div",{className:"ql-code-input-row",children:[d.jsx("span",{className:"ql-blank-marker",children:"→"}),d.jsx("input",{className:"ql-input"+(s==="correct"?" correct":s==="incorrect"?" incorrect":""),value:r,onChange:c=>o(c.target.value),onKeyDown:p,placeholder:"Type your one line here...",disabled:s!==null,autoFocus:!0})]}),t.codeAfter.map((c,f)=>d.jsx("div",{className:"ql-code-line",children:c||" "},"a"+f))]}),!s&&d.jsxs("div",{className:"ql-actions",children:[!i&&d.jsx("button",{className:"btn btn-secondary",onClick:()=>l(!0),children:"💡 Hint"}),d.jsx("button",{className:"btn btn-primary",onClick:k,children:"Check ✓"})]}),i&&!s&&d.jsxs("p",{className:"ql-hint",children:["💡 ",t.hint]}),s==="correct"&&d.jsxs("div",{className:"ql-result correct",children:[d.jsx("p",{children:"✅ Correct!"}),d.jsxs("div",{className:"ql-actions",children:[d.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",u]}),d.jsx("button",{className:"btn btn-primary",onClick:w,children:"Next Quick Line →"})]})]})]}),h&&d.jsxs("div",{className:"ql-streak-end",children:[d.jsx("p",{children:"❌ Not quite. The correct line was:"}),d.jsx("div",{className:"ql-answer-reveal",children:d.jsx("code",{children:t.answer})}),d.jsxs("p",{className:"ql-streak-msg",children:["That was ",d.jsx("strong",{children:x})," correct answer",x!==1?"s":""," in a row. Keep going!"]}),d.jsx("button",{className:"btn btn-primary",onClick:w,children:"Continue →"})]})]})})}function vm(){const{progress:e,dispatch:t}=yn(),n=ae.modules.reduce((a,i)=>a+i.topics.length,0),r=Object.values(e.topicProgress).filter(a=>a.completed).length,o=n>0?Math.round(r/n*100):0,s=Object.values(e.moduleTestResults).filter(a=>a.passed).length;return d.jsxs("div",{className:"page dashboard",children:[d.jsx("h1",{children:ae.title}),d.jsx("p",{className:"subtitle",children:ae.description}),d.jsxs("div",{className:"stats-grid",children:[d.jsxs("div",{className:"stat-card",children:[d.jsxs("div",{className:"stat-value",children:[o,"%"]}),d.jsx("div",{className:"stat-label",children:"Overall Progress"}),d.jsx("div",{className:"progress-bar",children:d.jsx("div",{className:"progress-fill",style:{width:`${o}%`}})})]}),d.jsxs("div",{className:"stat-card",children:[d.jsxs("div",{className:"stat-value",children:[r,"/",n]}),d.jsx("div",{className:"stat-label",children:"Topics Completed"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsxs("div",{className:"stat-value",children:[s,"/",ae.modules.length]}),d.jsx("div",{className:"stat-label",children:"Module Tests Passed"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-value",children:e.finalTestResult?`${e.finalTestResult.score}/${e.finalTestResult.total}`:"—"}),d.jsx("div",{className:"stat-label",children:"Final Test"})]})]}),!e.levelTestResult&&d.jsxs("div",{className:"cta-card",children:[d.jsx("h2",{children:"Start Here"}),d.jsx("p",{children:"Take the level evaluation test to assess your current React knowledge."}),d.jsx($e,{to:"/level-test",className:"btn btn-primary",children:"Take Level Test →"})]}),d.jsx("h2",{children:"Course Modules"}),d.jsx("div",{className:"modules-grid",children:ae.modules.map((a,i)=>{const l=a.topics.length,u=a.topics.filter(g=>{var x;return(x=e.topicProgress[g.id])==null?void 0:x.completed}).length,m=Math.round(u/l*100),h=e.moduleTestResults[a.id];return d.jsxs($e,{to:`/module/${a.id}`,className:"module-card",children:[d.jsx("div",{className:"module-number",children:i+1}),d.jsx("h3",{children:a.title}),d.jsx("p",{children:a.description}),d.jsxs("div",{className:"module-meta",children:[d.jsxs("span",{children:[l," topics"]}),d.jsxs("span",{children:[m,"% done"]}),h&&d.jsxs("span",{className:h.passed?"pass":"fail",children:["Test: ",h.score,"/",h.total]})]}),d.jsx("div",{className:"progress-bar",children:d.jsx("div",{className:"progress-fill",style:{width:`${m}%`}})})]},a.id)})}),r>0&&d.jsx("div",{className:"reset-section",children:d.jsx("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Reset all progress? This cannot be undone.")&&t({type:"RESET"})},children:"Reset All Progress"})})]})}function ii({title:e,questions:t,onComplete:n,previousResult:r,renderResult:o}){const[s,a]=S.useState({}),[i,l]=S.useState(!1),[u,m]=S.useState(r??null);if(u&&!i){const v=d.jsx("div",{className:"result-banner",children:d.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]})});return d.jsxs("div",{className:"quiz completed-quiz",children:[d.jsx("h2",{children:e}),o?o(u):v,d.jsx("button",{className:"btn",onClick:()=>{m(null),a({})},children:"Retake Test"})]})}const h=(v,w)=>{i||a(k=>({...k,[v]:w}))},g=()=>{let v=0;for(const k of t)s[k.id]===k.correctAnswer&&v++;const w={score:v,total:t.length,passed:v>=Math.ceil(t.length*.7),answers:s};m(w),l(!0),n(w)},x=t.every(v=>s[v.id]!==void 0);return d.jsxs("div",{className:"quiz",children:[d.jsx("h2",{children:e}),d.jsxs("p",{className:"quiz-progress",children:[Object.keys(s).length," of ",t.length," answered"]}),d.jsx("div",{className:"questions",children:t.map((v,w)=>d.jsxs("div",{className:`question ${i?"revealed":""}`,children:[d.jsxs("h3",{children:[w+1,". ",v.question]}),d.jsx("div",{className:"options",children:v.options.map((k,p)=>{let c="option";return s[v.id]===p&&(c+=" selected"),i&&(p===v.correctAnswer?c+=" correct":s[v.id]===p&&(c+=" incorrect")),d.jsx("button",{className:c,onClick:()=>h(v.id,p),disabled:i,children:k},p)})}),i&&d.jsx("p",{className:"explanation",children:v.explanation})]},v.id))}),!i&&d.jsx("button",{className:"btn btn-primary submit-btn",onClick:g,disabled:!x,children:"Submit Answers"}),i&&u&&(o?o(u):d.jsx("div",{className:"result-banner",children:d.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]})}))]})}function ym(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}const wm={Beginner:"You're just getting started with React. We recommend beginning from Module 1 and working through the entire course.",Intermediate:"You know the basics! Focus on Modules 3–5 to strengthen your understanding of effects, advanced hooks, and routing.",Advanced:"Solid foundation! Check out Modules 6–8 covering state management patterns, advanced component patterns, and performance.",Proficient:"You have strong React skills. Review Modules 7–8 for advanced patterns and best practices, then take the final test.","Highly Proficient":"Excellent React knowledge! You can go straight to the final test, or browse specific topics for a refresher."},Ol={Beginner:"#ef4444",Intermediate:"#f59e0b",Advanced:"#3b82f6",Proficient:"#22c55e","Highly Proficient":"#a855f7"};function Ll({result:e}){const t=Math.round(e.score/e.total*100),n=ym(t),r=Ol[n];return d.jsxs("div",{className:"level-result",children:[d.jsx("div",{className:"level-badge",style:{borderColor:r,color:r},children:n}),d.jsxs("p",{className:"level-score",children:[e.score,"/",e.total," (",t,"%)"]}),d.jsx("p",{className:"level-description",children:wm[n]}),d.jsx("div",{className:"level-scale",children:["Beginner","Intermediate","Advanced","Proficient","Highly Proficient"].map(o=>d.jsx("div",{className:`level-dot ${o===n?"active":""}`,style:o===n?{background:Ol[o]}:{},children:d.jsx("span",{className:"level-dot-label",children:o})},o))})]})}function xm(){var a;const{progress:e,dispatch:t}=yn(),[n,r]=S.useState(()=>Rl()),o=i=>{t({type:"SET_LEVEL_TEST",payload:i})},s=()=>{t({type:"RESET_LEVEL_TEST"}),r(Rl())};return d.jsxs("div",{className:"page",children:[d.jsx("h1",{children:"Level Evaluation Test"}),d.jsx("p",{className:"subtitle",children:"30 randomly selected questions to evaluate your React proficiency level. Each attempt gives you a different set of questions."}),e.levelTestResult&&d.jsxs(d.Fragment,{children:[d.jsx(Ll,{result:e.levelTestResult}),d.jsx("div",{className:"retake-section",children:d.jsx("button",{className:"btn",onClick:s,children:"Retake with New Questions"})})]}),!e.levelTestResult&&d.jsx(ii,{title:"React Knowledge Assessment",questions:n,onComplete:o,renderResult:i=>d.jsx(Ll,{result:i})},(a=n[0])==null?void 0:a.id)]})}function Sm(){const{moduleId:e}=td(),t=ai(),{progress:n,dispatch:r}=yn(),o=ae.modules.findIndex(u=>u.id===e),s=ae.modules[o];if(!s)return d.jsxs("div",{className:"page",children:[d.jsx("h1",{children:"Module Not Found"}),d.jsx($e,{to:"/",className:"btn",children:"Back to Dashboard"})]});const a=u=>{r({type:"SET_MODULE_TEST",payload:{moduleId:s.id,result:u}})},i=ae.modules[o+1],l=ae.modules[o-1];return d.jsxs("div",{className:"page module-page",children:[d.jsxs("div",{className:"module-header",children:[d.jsxs("span",{className:"module-badge",children:["Module ",o+1]}),d.jsx("h1",{children:s.title}),d.jsx("p",{className:"subtitle",children:s.description})]}),d.jsxs("div",{className:"topics-list",children:[d.jsx("h2",{children:"Topics"}),s.topics.map((u,m)=>{const h=n.topicProgress[u.id];return d.jsxs($e,{to:`/module/${s.id}/topic/${u.id}`,className:`topic-card ${h!=null&&h.completed?"completed":""}`,children:[d.jsx("span",{className:"topic-number",children:m+1}),d.jsx("span",{className:"topic-title",children:u.title}),(h==null?void 0:h.completed)&&d.jsx("span",{className:"check",children:"✓"})]},u.id)})]}),d.jsxs("div",{className:"module-test-section",children:[d.jsx("h2",{children:"Module Test"}),s.topics.every(u=>{var m;return(m=n.topicProgress[u.id])==null?void 0:m.completed})?d.jsx(ii,{title:`${s.title} — Test`,questions:s.test,onComplete:a,previousResult:n.moduleTestResults[s.id]}):d.jsx("p",{className:"test-locked",children:"🔒 Complete all practice tasks above to unlock the module test."})]}),d.jsxs("div",{className:"module-navigation",children:[l&&d.jsxs("button",{className:"btn",onClick:()=>t(`/module/${l.id}`),children:["← ",l.title]}),i&&d.jsxs("button",{className:"btn btn-primary",onClick:()=>t(`/module/${i.id}`),children:[i.title," →"]})]})]})}function bm({content:e}){const t=km(e);return d.jsx("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}})}function km(e){let t=e;return t=t.replace(/```(\w*)\n([\s\S]*?)```/g,(n,r,o)=>{const s=Nl(o.trim());return`<div class="code-block"><div class="code-header"><span class="code-lang">${r||"code"}</span></div><pre><code>${s}</code></pre></div>`}),t=t.replace(/`([^`]+)`/g,(n,r)=>`<code class="inline-code">${Nl(r)}</code>`),t=t.replace(/\n(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g,(n,r,o,s)=>{const a=r.split("|").filter(l=>l.trim()).map(l=>`<th>${l.trim()}</th>`).join(""),i=s.trim().split(`
`).map(l=>`<tr>${l.split("|").filter(m=>m.trim()).map(m=>`<td>${m.trim()}</td>`).join("")}</tr>`).join("");return`<table><thead><tr>${a}</tr></thead><tbody>${i}</tbody></table>`}),t=t.replace(/^### (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^## (.+)$/gm,"<h2>$1</h2>"),t=t.replace(/^# (.+)$/gm,"<h1>$1</h1>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/^(\d+)\. (.+)$/gm,"<oli>$2</oli>"),t=t.replace(/((?:<oli>.+<\/oli>\n?)+)/g,n=>`<ol>${n.replace(/<\/?oli>/g,o=>o==="<oli>"?"<li>":"</li>")}</ol>`),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/((?:<li>.+<\/li>\n?)+)/g,"<ul>$1</ul>"),t=t.replace(/^(?!<[a-z])((?!<\/?\w).+)$/gm,"<p>$1</p>"),t=t.replace(/<p>\s*<\/p>/g,""),t}function Nl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Cm({code:e,language:t="jsx"}){const[n,r]=S.useState(!1),o=()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return d.jsxs("div",{className:"code-block",children:[d.jsxs("div",{className:"code-header",children:[d.jsx("span",{className:"code-lang",children:t}),d.jsx("button",{className:"copy-btn",onClick:o,children:n?"✓ Copied":"Copy"})]}),d.jsx("pre",{children:d.jsx("code",{children:e})})]})}function Tm({task:e,onComplete:t,completed:n}){const[r,o]=S.useState(!1),[s,a]=S.useState(!1),[i,l]=S.useState(e.starterCode),[u,m]=S.useState(!!n),h=()=>{m(!0),t()};return d.jsxs("div",{className:"task-view",children:[d.jsx("h3",{children:"📝 Practice Task"}),d.jsx("p",{className:"task-description",children:e.description}),d.jsxs("div",{className:"task-code",children:[d.jsx("h4",{children:"Your Code"}),d.jsx("textarea",{className:"code-editor",value:i,onChange:g=>l(g.target.value),rows:i.split(`
`).length+2,spellCheck:!1})]}),d.jsxs("div",{className:"task-actions",children:[d.jsx("button",{className:"btn",onClick:()=>o(!r),children:r?"Hide Hints":"Show Hints"}),d.jsx("button",{className:"btn",onClick:()=>a(!s),children:s?"Hide Solution":"Show Solution"}),!u&&d.jsx("button",{className:"btn btn-primary",onClick:h,children:"Mark as Completed ✓"}),u&&d.jsx("span",{className:"completed-badge",children:"✓ Completed"})]}),r&&d.jsxs("div",{className:"hints",children:[d.jsx("h4",{children:"Hints"}),d.jsx("ul",{children:e.hints.map((g,x)=>d.jsx("li",{children:g},x))})]}),s&&d.jsxs("div",{className:"solution",children:[d.jsx("h4",{children:"Solution"}),d.jsx(Cm,{code:e.solution})]})]})}function Rm(){const{moduleId:e,topicId:t}=td(),n=ai(),{progress:r,dispatch:o}=yn(),s=ae.modules.find(g=>g.id===e);if(!s)return d.jsxs("div",{className:"page",children:[d.jsx("h1",{children:"Module Not Found"}),d.jsx($e,{to:"/",className:"btn",children:"Back to Dashboard"})]});const a=s.topics.findIndex(g=>g.id===t),i=s.topics[a];if(!i)return d.jsxs("div",{className:"page",children:[d.jsx("h1",{children:"Topic Not Found"}),d.jsx($e,{to:`/module/${s.id}`,className:"btn",children:"Back to Module"})]});const l=()=>{o({type:"COMPLETE_TOPIC",payload:{topicId:i.id}})},u=r.topicProgress[i.id],m=s.topics[a+1],h=s.topics[a-1];return d.jsxs("div",{className:"page topic-page",children:[d.jsxs("div",{className:"breadcrumb",children:[d.jsx($e,{to:"/",children:"Dashboard"}),d.jsx("span",{children:" / "}),d.jsx($e,{to:`/module/${s.id}`,children:s.title}),d.jsx("span",{children:" / "}),d.jsx("span",{children:i.title})]}),d.jsx("h1",{children:i.title}),d.jsx("div",{className:"topic-content",children:d.jsx(bm,{content:i.explanation})}),d.jsx("hr",{}),d.jsx(Tm,{task:i.task,onComplete:l,completed:!!(u!=null&&u.completed)},i.id),d.jsxs("div",{className:"topic-navigation",children:[h&&d.jsxs("button",{className:"btn",onClick:()=>n(`/module/${s.id}/topic/${h.id}`),children:["← ",h.title]}),m?d.jsxs("button",{className:"btn btn-primary",onClick:()=>n(`/module/${s.id}/topic/${m.id}`),children:[m.title," →"]}):d.jsx("button",{className:"btn btn-primary",onClick:()=>n(`/module/${s.id}`),children:"Back to Module →"})]})]})}function Em(){const{progress:e,dispatch:t}=yn(),n=r=>{t({type:"SET_FINAL_TEST",payload:r})};return d.jsxs("div",{className:"page",children:[d.jsx("h1",{children:"🏆 Final Test"}),d.jsx("p",{className:"subtitle",children:"This comprehensive test covers all 8 modules. You need 70% to pass and earn your certificate. Take your time!"}),d.jsx(ii,{title:"React Mastery — Final Assessment",questions:ae.finalTest,onComplete:n,previousResult:e.finalTestResult})]})}function Am(){const[e,t]=S.useState(!1),[n,r]=S.useState(!1);return d.jsx(Mf,{children:d.jsx(Vf,{children:d.jsxs("div",{className:"app-layout",children:[d.jsx(hm,{onRandomQuestion:()=>t(!0),onQuickLine:()=>r(!0)}),e&&d.jsx(mm,{onClose:()=>t(!1)}),n&&d.jsx(gm,{onClose:()=>r(!1)}),d.jsx("main",{className:"main-content",children:d.jsxs(If,{children:[d.jsx(Et,{path:"/",element:d.jsx(vm,{})}),d.jsx(Et,{path:"/level-test",element:d.jsx(xm,{})}),d.jsx(Et,{path:"/module/:moduleId",element:d.jsx(Sm,{})}),d.jsx(Et,{path:"/module/:moduleId/topic/:topicId",element:d.jsx(Rm,{})}),d.jsx(Et,{path:"/final-test",element:d.jsx(Em,{})}),d.jsx(Et,{path:"*",element:d.jsx("div",{className:"page",children:d.jsx("h1",{children:"404 — Page Not Found"})})})]})})]})})})}ms.createRoot(document.getElementById("root")).render(d.jsx(Hl.StrictMode,{children:d.jsx(Am,{})}));
