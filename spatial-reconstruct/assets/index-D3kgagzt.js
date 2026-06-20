(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function _v(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gc={exports:{}},Xa={},Wc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function vv(){if(mm)return _t;mm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function x(O,J,Fe){this.props=O,this.context=J,this.refs=C,this.updater=Fe||y}x.prototype.isReactComponent={},x.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=x.prototype;function R(O,J,Fe){this.props=O,this.context=J,this.refs=C,this.updater=Fe||y}var b=R.prototype=new S;b.constructor=R,E(b,x.prototype),b.isPureReactComponent=!0;var L=Array.isArray,N=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(O,J,Fe){var Ve,Ne={},ae=null,Se=null;if(J!=null)for(Ve in J.ref!==void 0&&(Se=J.ref),J.key!==void 0&&(ae=""+J.key),J)N.call(J,Ve)&&!F.hasOwnProperty(Ve)&&(Ne[Ve]=J[Ve]);var me=arguments.length-2;if(me===1)Ne.children=Fe;else if(1<me){for(var Ie=Array(me),Qe=0;Qe<me;Qe++)Ie[Qe]=arguments[Qe+2];Ne.children=Ie}if(O&&O.defaultProps)for(Ve in me=O.defaultProps,me)Ne[Ve]===void 0&&(Ne[Ve]=me[Ve]);return{$$typeof:r,type:O,key:ae,ref:Se,props:Ne,_owner:D.current}}function U(O,J){return{$$typeof:r,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function j(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function B(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Fe){return J[Fe]})}var q=/\/+/g;function ue(O,J){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):J.toString(36)}function fe(O,J,Fe,Ve,Ne){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(ae){case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case r:case e:Se=!0}}if(Se)return Se=O,Ne=Ne(Se),O=Ve===""?"."+ue(Se,0):Ve,L(Ne)?(Fe="",O!=null&&(Fe=O.replace(q,"$&/")+"/"),fe(Ne,J,Fe,"",function(Qe){return Qe})):Ne!=null&&(j(Ne)&&(Ne=U(Ne,Fe+(!Ne.key||Se&&Se.key===Ne.key?"":(""+Ne.key).replace(q,"$&/")+"/")+O)),J.push(Ne)),1;if(Se=0,Ve=Ve===""?".":Ve+":",L(O))for(var me=0;me<O.length;me++){ae=O[me];var Ie=Ve+ue(ae,me);Se+=fe(ae,J,Fe,Ie,Ne)}else if(Ie=m(O),typeof Ie=="function")for(O=Ie.call(O),me=0;!(ae=O.next()).done;)ae=ae.value,Ie=Ve+ue(ae,me++),Se+=fe(ae,J,Fe,Ie,Ne);else if(ae==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return Se}function H(O,J,Fe){if(O==null)return O;var Ve=[],Ne=0;return fe(O,Ve,"","",function(ae){return J.call(Fe,ae,Ne++)}),Ve}function Q(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(Fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Fe)},function(Fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Fe)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var X={current:null},Y={transition:null},le={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:Y,ReactCurrentOwner:D};function oe(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:H,forEach:function(O,J,Fe){H(O,function(){J.apply(this,arguments)},Fe)},count:function(O){var J=0;return H(O,function(){J++}),J},toArray:function(O){return H(O,function(J){return J})||[]},only:function(O){if(!j(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=x,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=R,_t.StrictMode=s,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,_t.act=oe,_t.cloneElement=function(O,J,Fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ve=E({},O.props),Ne=O.key,ae=O.ref,Se=O._owner;if(J!=null){if(J.ref!==void 0&&(ae=J.ref,Se=D.current),J.key!==void 0&&(Ne=""+J.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ie in J)N.call(J,Ie)&&!F.hasOwnProperty(Ie)&&(Ve[Ie]=J[Ie]===void 0&&me!==void 0?me[Ie]:J[Ie])}var Ie=arguments.length-2;if(Ie===1)Ve.children=Fe;else if(1<Ie){me=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)me[Qe]=arguments[Qe+2];Ve.children=me}return{$$typeof:r,type:O.type,key:Ne,ref:ae,props:Ve,_owner:Se}},_t.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},_t.createElement=w,_t.createFactory=function(O){var J=w.bind(null,O);return J.type=O,J},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:f,render:O}},_t.isValidElement=j,_t.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:Q}},_t.memo=function(O,J){return{$$typeof:p,type:O,compare:J===void 0?null:J}},_t.startTransition=function(O){var J=Y.transition;Y.transition={};try{O()}finally{Y.transition=J}},_t.unstable_act=oe,_t.useCallback=function(O,J){return X.current.useCallback(O,J)},_t.useContext=function(O){return X.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return X.current.useDeferredValue(O)},_t.useEffect=function(O,J){return X.current.useEffect(O,J)},_t.useId=function(){return X.current.useId()},_t.useImperativeHandle=function(O,J,Fe){return X.current.useImperativeHandle(O,J,Fe)},_t.useInsertionEffect=function(O,J){return X.current.useInsertionEffect(O,J)},_t.useLayoutEffect=function(O,J){return X.current.useLayoutEffect(O,J)},_t.useMemo=function(O,J){return X.current.useMemo(O,J)},_t.useReducer=function(O,J,Fe){return X.current.useReducer(O,J,Fe)},_t.useRef=function(O){return X.current.useRef(O)},_t.useState=function(O){return X.current.useState(O)},_t.useSyncExternalStore=function(O,J,Fe){return X.current.useSyncExternalStore(O,J,Fe)},_t.useTransition=function(){return X.current.useTransition()},_t.version="18.3.1",_t}var gm;function wd(){return gm||(gm=1,Wc.exports=vv()),Wc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function xv(){if(_m)return Xa;_m=1;var r=wd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var _,v={},m=null,y=null;p!==void 0&&(m=""+p),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:f,key:m,ref:y,props:v,_owner:o.current}}return Xa.Fragment=t,Xa.jsx=c,Xa.jsxs=c,Xa}var vm;function Sv(){return vm||(vm=1,Gc.exports=xv()),Gc.exports}var Xe=Sv(),ne=wd();const gl=_v(ne);var _l={},Xc={exports:{}},On={},jc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function yv(){return xm||(xm=1,(function(r){function e(Y,le){var oe=Y.length;Y.push(le);e:for(;0<oe;){var O=oe-1>>>1,J=Y[O];if(0<o(J,le))Y[O]=le,Y[oe]=J,oe=O;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var le=Y[0],oe=Y.pop();if(oe!==le){Y[0]=oe;e:for(var O=0,J=Y.length,Fe=J>>>1;O<Fe;){var Ve=2*(O+1)-1,Ne=Y[Ve],ae=Ve+1,Se=Y[ae];if(0>o(Ne,oe))ae<J&&0>o(Se,Ne)?(Y[O]=Se,Y[ae]=oe,O=ae):(Y[O]=Ne,Y[Ve]=oe,O=Ve);else if(ae<J&&0>o(Se,oe))Y[O]=Se,Y[ae]=oe,O=ae;else break e}}return le}function o(Y,le){var oe=Y.sortIndex-le.sortIndex;return oe!==0?oe:Y.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],_=1,v=null,m=3,y=!1,E=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(Y){for(var le=t(p);le!==null;){if(le.callback===null)s(p);else if(le.startTime<=Y)s(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function L(Y){if(C=!1,b(Y),!E)if(t(h)!==null)E=!0,Q(N);else{var le=t(p);le!==null&&X(L,le.startTime-Y)}}function N(Y,le){E=!1,C&&(C=!1,S(w),w=-1),y=!0;var oe=m;try{for(b(le),v=t(h);v!==null&&(!(v.expirationTime>le)||Y&&!B());){var O=v.callback;if(typeof O=="function"){v.callback=null,m=v.priorityLevel;var J=O(v.expirationTime<=le);le=r.unstable_now(),typeof J=="function"?v.callback=J:v===t(h)&&s(h),b(le)}else s(h);v=t(h)}if(v!==null)var Fe=!0;else{var Ve=t(p);Ve!==null&&X(L,Ve.startTime-le),Fe=!1}return Fe}finally{v=null,m=oe,y=!1}}var D=!1,F=null,w=-1,U=5,j=-1;function B(){return!(r.unstable_now()-j<U)}function q(){if(F!==null){var Y=r.unstable_now();j=Y;var le=!0;try{le=F(!0,Y)}finally{le?ue():(D=!1,F=null)}}else D=!1}var ue;if(typeof R=="function")ue=function(){R(q)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,H=fe.port2;fe.port1.onmessage=q,ue=function(){H.postMessage(null)}}else ue=function(){x(q,0)};function Q(Y){F=Y,D||(D=!0,ue())}function X(Y,le){w=x(function(){Y(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){E||y||(E=!0,Q(N))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(Y){switch(m){case 1:case 2:case 3:var le=3;break;default:le=m}var oe=m;m=le;try{return Y()}finally{m=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var oe=m;m=Y;try{return le()}finally{m=oe}},r.unstable_scheduleCallback=function(Y,le,oe){var O=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,Y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=oe+J,Y={id:_++,callback:le,priorityLevel:Y,startTime:oe,expirationTime:J,sortIndex:-1},oe>O?(Y.sortIndex=oe,e(p,Y),t(h)===null&&Y===t(p)&&(C?(S(w),w=-1):C=!0,X(L,oe-O))):(Y.sortIndex=J,e(h,Y),E||y||(E=!0,Q(N))),Y},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(Y){var le=m;return function(){var oe=m;m=le;try{return Y.apply(this,arguments)}finally{m=oe}}}})(Yc)),Yc}var Sm;function Ev(){return Sm||(Sm=1,jc.exports=yv()),jc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Mv(){if(ym)return On;ym=1;var r=wd(),e=Ev();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function m(n){return h.call(v,n)?!0:h.call(_,n)?!1:p.test(n)?v[n]=!0:(_[n]=!0,!1)}function y(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||y(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,u,d,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,a,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,u)&&(a=null),u||d===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var L=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),B=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),Y=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function J(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Fe=!1;function Ve(n,i){if(!n||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var u=se}Reflect.construct(n,[],i)}else{try{i.call()}catch(se){u=se}n.call(i.prototype)}else{try{throw Error()}catch(se){u=se}n()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var d=se.stack.split(`
`),g=u.stack.split(`
`),T=d.length-1,I=g.length-1;1<=T&&0<=I&&d[T]!==g[I];)I--;for(;1<=T&&0<=I;T--,I--)if(d[T]!==g[I]){if(T!==1||I!==1)do if(T--,I--,0>I||d[T]!==g[I]){var k=`
`+d[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=I);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?J(n):""}function Ne(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ve(n.type,!1),n;case 11:return n=Ve(n.type.render,!1),n;case 1:return n=Ve(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case D:return"Portal";case U:return"Profiler";case w:return"StrictMode";case ue:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case j:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case Q:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Je(n){n._valueTracker||(n._valueTracker=Qe(n))}function Ut(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ie(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mt(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Lt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function jt(n,i){ft(n,i);var a=me(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pn(n,i.type,a):i.hasOwnProperty("defaultValue")&&pn(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ft(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function pn(n,i,a){(i!=="number"||ct(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var V=Array.isArray;function Ot(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function dt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ct(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(V(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:me(a)}}function Le(n,i){var a=me(i.value),u=me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function zt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function P(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?P(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function ce(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=ce(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Ue=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(n,i){if(i){if(Ue[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function nt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,pt=null,z=null;function we(n){if(n=Pa(n)){if(typeof st!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Lo(i),st(n.stateNode,n.type,i))}}function de(n){pt?z?z.push(n):z=[n]:pt=n}function Oe(){if(pt){var n=pt,i=z;if(z=pt=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function Re(n,i){return n(i)}function _e(){}var je=!1;function at(n,i,a){if(je)return n(i,a);je=!0;try{return Re(n,i,a)}finally{je=!1,(pt!==null||z!==null)&&(_e(),Oe())}}function It(n,i){var a=n.stateNode;if(a===null)return null;var u=Lo(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Tt=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){Tt=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Tt=!1}function Yn(n,i,a,u,d,g,T,I,k){var se=Array.prototype.slice.call(arguments,3);try{i.apply(a,se)}catch(xe){this.onError(xe)}}var Oi=!1,hs=null,Br=!1,ps=null,Bi={onError:function(n){Oi=!0,hs=n}};function ua(n,i,a,u,d,g,T,I,k){Oi=!1,hs=null,Yn.apply(Bi,arguments)}function po(n,i,a,u,d,g,T,I,k){if(ua.apply(this,arguments),Oi){if(Oi){var se=hs;Oi=!1,hs=null}else throw Error(t(198));Br||(Br=!0,ps=se)}}function Si(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function kr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ca(n){if(Si(n)!==n)throw Error(t(188))}function ms(n){var i=n.alternate;if(!i){if(i=Si(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return ca(d),n;if(g===u)return ca(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=g;else{for(var T=!1,I=d.child;I;){if(I===a){T=!0,a=d,u=g;break}if(I===u){T=!0,u=d,a=g;break}I=I.sibling}if(!T){for(I=g.child;I;){if(I===a){T=!0,a=g,u=d;break}if(I===u){T=!0,u=g,a=d;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function fa(n){return n=ms(n),n!==null?da(n):null}function da(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=da(n);if(i!==null)return i;n=n.sibling}return null}var mo=e.unstable_scheduleCallback,go=e.unstable_cancelCallback,du=e.unstable_shouldYield,hu=e.unstable_requestPaint,Yt=e.unstable_now,pu=e.unstable_getCurrentPriorityLevel,ha=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,W=e.unstable_NormalPriority,re=e.unstable_LowPriority,ee=e.unstable_IdlePriority,Z=null,be=null;function He(n){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Z,n,void 0,(n.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:ot,Ye=Math.log,Ze=Math.LN2;function ot(n){return n>>>=0,n===0?32:31-(Ye(n)/Ze|0)|0}var lt=64,qe=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes,T=a&268435455;if(T!==0){var I=T&~d;I!==0?u=St(I):(g&=T,g!==0&&(u=St(g)))}else T=a&~d,T!==0?u=St(T):g!==0&&(u=St(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Ce(i),d=1<<a,u|=n[a],i&=~d;return u}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-Ce(g),I=1<<T,k=d[T];k===-1?((I&a)===0||(I&u)!==0)&&(d[T]=Wt(I,i)):k<=i&&(n.expiredLanes|=I),g&=~I}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ke(){var n=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),n}function mn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function mt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ce(i),n[i]=a}function Pn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ce(a),g=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~g}}function Ln(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ce(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var gt=0;function ki(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var At,Ht,ri,bt,si,yi=!1,zr=[],cr=null,fr=null,dr=null,pa=new Map,ma=new Map,hr=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(n,i){switch(n){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":pa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(i.pointerId)}}function ga(n,i,a,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Pa(i),i!==null&&Ht(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function z0(n,i,a,u,d){switch(i){case"focusin":return cr=ga(cr,n,i,a,u,d),!0;case"dragenter":return fr=ga(fr,n,i,a,u,d),!0;case"mouseover":return dr=ga(dr,n,i,a,u,d),!0;case"pointerover":var g=d.pointerId;return pa.set(g,ga(pa.get(g)||null,n,i,a,u,d)),!0;case"gotpointercapture":return g=d.pointerId,ma.set(g,ga(ma.get(g)||null,n,i,a,u,d)),!0}return!1}function Jd(n){var i=Hr(n.target);if(i!==null){var a=Si(i);if(a!==null){if(i=a.tag,i===13){if(i=kr(a),i!==null){n.blockedOn=i,si(n.priority,function(){ri(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _o(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=gu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Me=u,a.target.dispatchEvent(u),Me=null}else return i=Pa(a),i!==null&&Ht(i),n.blockedOn=a,!1;i.shift()}return!0}function eh(n,i,a){_o(n)&&a.delete(i)}function H0(){yi=!1,cr!==null&&_o(cr)&&(cr=null),fr!==null&&_o(fr)&&(fr=null),dr!==null&&_o(dr)&&(dr=null),pa.forEach(eh),ma.forEach(eh)}function _a(n,i){n.blockedOn===i&&(n.blockedOn=null,yi||(yi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,H0)))}function va(n){function i(d){return _a(d,n)}if(0<zr.length){_a(zr[0],n);for(var a=1;a<zr.length;a++){var u=zr[a];u.blockedOn===n&&(u.blockedOn=null)}}for(cr!==null&&_a(cr,n),fr!==null&&_a(fr,n),dr!==null&&_a(dr,n),pa.forEach(i),ma.forEach(i),a=0;a<hr.length;a++)u=hr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Jd(a),a.blockedOn===null&&hr.shift()}var gs=L.ReactCurrentBatchConfig,vo=!0;function V0(n,i,a,u){var d=gt,g=gs.transition;gs.transition=null;try{gt=1,mu(n,i,a,u)}finally{gt=d,gs.transition=g}}function G0(n,i,a,u){var d=gt,g=gs.transition;gs.transition=null;try{gt=4,mu(n,i,a,u)}finally{gt=d,gs.transition=g}}function mu(n,i,a,u){if(vo){var d=gu(n,i,a,u);if(d===null)Nu(n,i,u,xo,a),Qd(n,u);else if(z0(d,n,i,a,u))u.stopPropagation();else if(Qd(n,u),i&4&&-1<k0.indexOf(n)){for(;d!==null;){var g=Pa(d);if(g!==null&&At(g),g=gu(n,i,a,u),g===null&&Nu(n,i,u,xo,a),g===d)break;d=g}d!==null&&u.stopPropagation()}else Nu(n,i,u,null,a)}}var xo=null;function gu(n,i,a,u){if(xo=null,n=nt(u),n=Hr(n),n!==null)if(i=Si(n),i===null)n=null;else if(a=i.tag,a===13){if(n=kr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return xo=n,null}function th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pu()){case ha:return 1;case A:return 4;case W:case re:return 16;case ee:return 536870912;default:return 16}default:return 16}}var pr=null,_u=null,So=null;function nh(){if(So)return So;var n,i=_u,a=i.length,u,d="value"in pr?pr.value:pr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(u=1;u<=T&&i[a-u]===d[g-u];u++);return So=d.slice(n,1<u?1-u:void 0)}function yo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Eo(){return!0}function ih(){return!1}function zn(n){function i(a,u,d,g,T){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Eo:ih,this.isPropagationStopped=ih,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),i}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=zn(_s),xa=oe({},_s,{view:0,detail:0}),W0=zn(xa),xu,Su,Sa,Mo=oe({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Sa&&(Sa&&n.type==="mousemove"?(xu=n.screenX-Sa.screenX,Su=n.screenY-Sa.screenY):Su=xu=0,Sa=n),xu)},movementY:function(n){return"movementY"in n?n.movementY:Su}}),rh=zn(Mo),X0=oe({},Mo,{dataTransfer:0}),j0=zn(X0),Y0=oe({},xa,{relatedTarget:0}),yu=zn(Y0),$0=oe({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),q0=zn($0),K0=oe({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Z0=zn(K0),Q0=oe({},_s,{data:0}),sh=zn(Q0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=t_[n])?!!i[n]:!1}function Eu(){return n_}var i_=oe({},xa,{key:function(n){if(n.key){var i=J0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=yo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?e_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(n){return n.type==="keypress"?yo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),r_=zn(i_),s_=oe({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=zn(s_),a_=oe({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),o_=zn(a_),l_=oe({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=zn(l_),c_=oe({},Mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=zn(c_),d_=[9,13,27,32],Mu=f&&"CompositionEvent"in window,ya=null;f&&"documentMode"in document&&(ya=document.documentMode);var h_=f&&"TextEvent"in window&&!ya,oh=f&&(!Mu||ya&&8<ya&&11>=ya),lh=" ",uh=!1;function ch(n,i){switch(n){case"keyup":return d_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vs=!1;function p_(n,i){switch(n){case"compositionend":return fh(i);case"keypress":return i.which!==32?null:(uh=!0,lh);case"textInput":return n=i.data,n===lh&&uh?null:n;default:return null}}function m_(n,i){if(vs)return n==="compositionend"||!Mu&&ch(n,i)?(n=nh(),So=_u=pr=null,vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var g_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!g_[n.type]:i==="textarea"}function hh(n,i,a,u){de(u),i=Ro(i,"onChange"),0<i.length&&(a=new vu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Ea=null,Ma=null;function __(n){Lh(n,0)}function To(n){var i=Ms(n);if(Ut(i))return n}function v_(n,i){if(n==="change")return i}var ph=!1;if(f){var Tu;if(f){var wu="oninput"in document;if(!wu){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),wu=typeof mh.oninput=="function"}Tu=wu}else Tu=!1;ph=Tu&&(!document.documentMode||9<document.documentMode)}function gh(){Ea&&(Ea.detachEvent("onpropertychange",_h),Ma=Ea=null)}function _h(n){if(n.propertyName==="value"&&To(Ma)){var i=[];hh(i,Ma,n,nt(n)),at(__,i)}}function x_(n,i,a){n==="focusin"?(gh(),Ea=i,Ma=a,Ea.attachEvent("onpropertychange",_h)):n==="focusout"&&gh()}function S_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return To(Ma)}function y_(n,i){if(n==="click")return To(i)}function E_(n,i){if(n==="input"||n==="change")return To(i)}function M_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ai=typeof Object.is=="function"?Object.is:M_;function Ta(n,i){if(ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!ai(n[d],i[d]))return!1}return!0}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xh(n,i){var a=vh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vh(a)}}function Sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function yh(){for(var n=window,i=ct();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ct(n.document)}return i}function Au(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function T_(n){var i=yh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Sh(a.ownerDocument.documentElement,a)){if(u!==null&&Au(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!n.extend&&g>u&&(d=u,u=g,g=d),d=xh(a,g);var T=xh(a,u);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var w_=f&&"documentMode"in document&&11>=document.documentMode,xs=null,Cu=null,wa=null,Ru=!1;function Eh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ru||xs==null||xs!==ct(u)||(u=xs,"selectionStart"in u&&Au(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),wa&&Ta(wa,u)||(wa=u,u=Ro(Cu,"onSelect"),0<u.length&&(i=new vu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=xs)))}function wo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ss={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},bu={},Mh={};f&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Ao(n){if(bu[n])return bu[n];if(!Ss[n])return n;var i=Ss[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mh)return bu[n]=i[a];return n}var Th=Ao("animationend"),wh=Ao("animationiteration"),Ah=Ao("animationstart"),Ch=Ao("transitionend"),Rh=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,i){Rh.set(n,i),l(i,[n])}for(var Pu=0;Pu<bh.length;Pu++){var Lu=bh[Pu],A_=Lu.toLowerCase(),C_=Lu[0].toUpperCase()+Lu.slice(1);mr(A_,"on"+C_)}mr(Th,"onAnimationEnd"),mr(wh,"onAnimationIteration"),mr(Ah,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(Ch,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function Ph(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,po(u,i,void 0,n),n.currentTarget=null}function Lh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var T=u.length-1;0<=T;T--){var I=u[T],k=I.instance,se=I.currentTarget;if(I=I.listener,k!==g&&d.isPropagationStopped())break e;Ph(d,I,se),g=k}else for(T=0;T<u.length;T++){if(I=u[T],k=I.instance,se=I.currentTarget,I=I.listener,k!==g&&d.isPropagationStopped())break e;Ph(d,I,se),g=k}}}if(Br)throw n=ps,Br=!1,ps=null,n}function Vt(n,i){var a=i[ku];a===void 0&&(a=i[ku]=new Set);var u=n+"__bubble";a.has(u)||(Dh(i,n,2,!1),a.add(u))}function Du(n,i,a){var u=0;i&&(u|=4),Dh(a,n,u,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Ca(n){if(!n[Co]){n[Co]=!0,s.forEach(function(a){a!=="selectionchange"&&(R_.has(a)||Du(a,!1,n),Du(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Co]||(i[Co]=!0,Du("selectionchange",!1,i))}}function Dh(n,i,a,u){switch(th(i)){case 1:var d=V0;break;case 4:d=G0;break;default:d=mu}a=d.bind(null,i,a,n),d=void 0,!Tt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Nu(n,i,a,u,d){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(T===4)for(T=u.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;T=T.return}for(;I!==null;){if(T=Hr(I),T===null)return;if(k=T.tag,k===5||k===6){u=g=T;continue e}I=I.parentNode}}u=u.return}at(function(){var se=g,xe=nt(a),ye=[];e:{var ve=Rh.get(n);if(ve!==void 0){var ze=vu,We=n;switch(n){case"keypress":if(yo(a)===0)break e;case"keydown":case"keyup":ze=r_;break;case"focusin":We="focus",ze=yu;break;case"focusout":We="blur",ze=yu;break;case"beforeblur":case"afterblur":ze=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=o_;break;case Th:case wh:case Ah:ze=q0;break;case Ch:ze=u_;break;case"scroll":ze=W0;break;case"wheel":ze=f_;break;case"copy":case"cut":case"paste":ze=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=ah}var $e=(i&4)!==0,Qt=!$e&&n==="scroll",K=$e?ve!==null?ve+"Capture":null:ve;$e=[];for(var G=se,te;G!==null;){te=G;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,K!==null&&(Te=It(G,K),Te!=null&&$e.push(Ra(G,Te,te)))),Qt)break;G=G.return}0<$e.length&&(ve=new ze(ve,We,null,a,xe),ye.push({event:ve,listeners:$e}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ve&&a!==Me&&(We=a.relatedTarget||a.fromElement)&&(Hr(We)||We[zi]))break e;if((ze||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ze?(We=a.relatedTarget||a.toElement,ze=se,We=We?Hr(We):null,We!==null&&(Qt=Si(We),We!==Qt||We.tag!==5&&We.tag!==6)&&(We=null)):(ze=null,We=se),ze!==We)){if($e=rh,Te="onMouseLeave",K="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&($e=ah,Te="onPointerLeave",K="onPointerEnter",G="pointer"),Qt=ze==null?ve:Ms(ze),te=We==null?ve:Ms(We),ve=new $e(Te,G+"leave",ze,a,xe),ve.target=Qt,ve.relatedTarget=te,Te=null,Hr(xe)===se&&($e=new $e(K,G+"enter",We,a,xe),$e.target=te,$e.relatedTarget=Qt,Te=$e),Qt=Te,ze&&We)t:{for($e=ze,K=We,G=0,te=$e;te;te=ys(te))G++;for(te=0,Te=K;Te;Te=ys(Te))te++;for(;0<G-te;)$e=ys($e),G--;for(;0<te-G;)K=ys(K),te--;for(;G--;){if($e===K||K!==null&&$e===K.alternate)break t;$e=ys($e),K=ys(K)}$e=null}else $e=null;ze!==null&&Nh(ye,ve,ze,$e,!1),We!==null&&Qt!==null&&Nh(ye,Qt,We,$e,!0)}}e:{if(ve=se?Ms(se):window,ze=ve.nodeName&&ve.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ve.type==="file")var Ke=v_;else if(dh(ve))if(ph)Ke=E_;else{Ke=S_;var et=x_}else(ze=ve.nodeName)&&ze.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ke=y_);if(Ke&&(Ke=Ke(n,se))){hh(ye,Ke,a,xe);break e}et&&et(n,ve,se),n==="focusout"&&(et=ve._wrapperState)&&et.controlled&&ve.type==="number"&&pn(ve,"number",ve.value)}switch(et=se?Ms(se):window,n){case"focusin":(dh(et)||et.contentEditable==="true")&&(xs=et,Cu=se,wa=null);break;case"focusout":wa=Cu=xs=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Eh(ye,a,xe);break;case"selectionchange":if(w_)break;case"keydown":case"keyup":Eh(ye,a,xe)}var tt;if(Mu)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else vs?ch(n,a)&&(it="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(oh&&a.locale!=="ko"&&(vs||it!=="onCompositionStart"?it==="onCompositionEnd"&&vs&&(tt=nh()):(pr=xe,_u="value"in pr?pr.value:pr.textContent,vs=!0)),et=Ro(se,it),0<et.length&&(it=new sh(it,n,null,a,xe),ye.push({event:it,listeners:et}),tt?it.data=tt:(tt=fh(a),tt!==null&&(it.data=tt)))),(tt=h_?p_(n,a):m_(n,a))&&(se=Ro(se,"onBeforeInput"),0<se.length&&(xe=new sh("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:se}),xe.data=tt))}Lh(ye,i)})}function Ra(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ro(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=It(n,a),g!=null&&u.unshift(Ra(n,g,d)),g=It(n,i),g!=null&&u.push(Ra(n,g,d))),n=n.return}return u}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,i,a,u,d){for(var g=i._reactName,T=[];a!==null&&a!==u;){var I=a,k=I.alternate,se=I.stateNode;if(k!==null&&k===u)break;I.tag===5&&se!==null&&(I=se,d?(k=It(a,g),k!=null&&T.unshift(Ra(a,k,I))):d||(k=It(a,g),k!=null&&T.push(Ra(a,k,I)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var b_=/\r\n?/g,P_=/\u0000|\uFFFD/g;function Ih(n){return(typeof n=="string"?n:""+n).replace(b_,`
`).replace(P_,"")}function bo(n,i,a){if(i=Ih(i),Ih(n)!==i&&a)throw Error(t(425))}function Po(){}var Iu=null,Uu=null;function Fu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,L_=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,D_=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(n){return Uh.resolve(null).then(n).catch(N_)}:Ou;function N_(n){setTimeout(function(){throw n})}function Bu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),va(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);va(i)}function gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Es,ba="__reactProps$"+Es,zi="__reactContainer$"+Es,ku="__reactEvents$"+Es,I_="__reactListeners$"+Es,U_="__reactHandles$"+Es;function Hr(n){var i=n[Ei];if(i)return i;for(var a=n.parentNode;a;){if(i=a[zi]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[Ei])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function Pa(n){return n=n[Ei]||n[zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Lo(n){return n[ba]||null}var zu=[],Ts=-1;function _r(n){return{current:n}}function Gt(n){0>Ts||(n.current=zu[Ts],zu[Ts]=null,Ts--)}function kt(n,i){Ts++,zu[Ts]=n.current,n.current=i}var vr={},Sn=_r(vr),Dn=_r(!1),Vr=vr;function ws(n,i){var a=n.type.contextTypes;if(!a)return vr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Nn(n){return n=n.childContextTypes,n!=null}function Do(){Gt(Dn),Gt(Sn)}function Oh(n,i,a){if(Sn.current!==vr)throw Error(t(168));kt(Sn,i),kt(Dn,a)}function Bh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Se(n)||"Unknown",d));return oe({},a,u)}function No(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,Vr=Sn.current,kt(Sn,n),kt(Dn,Dn.current),!0}function kh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Bh(n,i,Vr),u.__reactInternalMemoizedMergedChildContext=n,Gt(Dn),Gt(Sn),kt(Sn,n)):Gt(Dn),kt(Dn,a)}var Hi=null,Io=!1,Hu=!1;function zh(n){Hi===null?Hi=[n]:Hi.push(n)}function F_(n){Io=!0,zh(n)}function xr(){if(!Hu&&Hi!==null){Hu=!0;var n=0,i=gt;try{var a=Hi;for(gt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Hi=null,Io=!1}catch(d){throw Hi!==null&&(Hi=Hi.slice(n+1)),mo(ha,xr),d}finally{gt=i,Hu=!1}}return null}var As=[],Cs=0,Uo=null,Fo=0,$n=[],qn=0,Gr=null,Vi=1,Gi="";function Wr(n,i){As[Cs++]=Fo,As[Cs++]=Uo,Uo=n,Fo=i}function Hh(n,i,a){$n[qn++]=Vi,$n[qn++]=Gi,$n[qn++]=Gr,Gr=n;var u=Vi;n=Gi;var d=32-Ce(u)-1;u&=~(1<<d),a+=1;var g=32-Ce(i)+d;if(30<g){var T=d-d%5;g=(u&(1<<T)-1).toString(32),u>>=T,d-=T,Vi=1<<32-Ce(i)+d|a<<d|u,Gi=g+n}else Vi=1<<g|a<<d|u,Gi=n}function Vu(n){n.return!==null&&(Wr(n,1),Hh(n,1,0))}function Gu(n){for(;n===Uo;)Uo=As[--Cs],As[Cs]=null,Fo=As[--Cs],As[Cs]=null;for(;n===Gr;)Gr=$n[--qn],$n[qn]=null,Gi=$n[--qn],$n[qn]=null,Vi=$n[--qn],$n[qn]=null}var Hn=null,Vn=null,Xt=!1,oi=null;function Vh(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Gh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Gr!==null?{id:Vi,overflow:Gi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Hn=n,Vn=null,!0):!1;default:return!1}}function Wu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xu(n){if(Xt){var i=Vn;if(i){var a=i;if(!Gh(n,i)){if(Wu(n))throw Error(t(418));i=gr(a.nextSibling);var u=Hn;i&&Gh(n,i)?Vh(u,a):(n.flags=n.flags&-4097|2,Xt=!1,Hn=n)}}else{if(Wu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,Hn=n}}}function Wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Oo(n){if(n!==Hn)return!1;if(!Xt)return Wh(n),Xt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fu(n.type,n.memoizedProps)),i&&(i=Vn)){if(Wu(n))throw Xh(),Error(t(418));for(;i;)Vh(n,i),i=gr(i.nextSibling)}if(Wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Hn?gr(n.stateNode.nextSibling):null;return!0}function Xh(){for(var n=Vn;n;)n=gr(n.nextSibling)}function Rs(){Vn=Hn=null,Xt=!1}function ju(n){oi===null?oi=[n]:oi.push(n)}var O_=L.ReactCurrentBatchConfig;function La(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var I=d.refs;T===null?delete I[g]:I[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Bo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function jh(n){var i=n._init;return i(n._payload)}function Yh(n){function i(K,G){if(n){var te=K.deletions;te===null?(K.deletions=[G],K.flags|=16):te.push(G)}}function a(K,G){if(!n)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function u(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function d(K,G){return K=Cr(K,G),K.index=0,K.sibling=null,K}function g(K,G,te){return K.index=te,n?(te=K.alternate,te!==null?(te=te.index,te<G?(K.flags|=2,G):te):(K.flags|=2,G)):(K.flags|=1048576,G)}function T(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,G,te,Te){return G===null||G.tag!==6?(G=Oc(te,K.mode,Te),G.return=K,G):(G=d(G,te),G.return=K,G)}function k(K,G,te,Te){var Ke=te.type;return Ke===F?xe(K,G,te.props.children,Te,te.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&jh(Ke)===G.type)?(Te=d(G,te.props),Te.ref=La(K,G,te),Te.return=K,Te):(Te=ll(te.type,te.key,te.props,null,K.mode,Te),Te.ref=La(K,G,te),Te.return=K,Te)}function se(K,G,te,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Bc(te,K.mode,Te),G.return=K,G):(G=d(G,te.children||[]),G.return=K,G)}function xe(K,G,te,Te,Ke){return G===null||G.tag!==7?(G=Qr(te,K.mode,Te,Ke),G.return=K,G):(G=d(G,te),G.return=K,G)}function ye(K,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Oc(""+G,K.mode,te),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return te=ll(G.type,G.key,G.props,null,K.mode,te),te.ref=La(K,null,G),te.return=K,te;case D:return G=Bc(G,K.mode,te),G.return=K,G;case Q:var Te=G._init;return ye(K,Te(G._payload),te)}if(V(G)||le(G))return G=Qr(G,K.mode,te,null),G.return=K,G;Bo(K,G)}return null}function ve(K,G,te,Te){var Ke=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:I(K,G,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case N:return te.key===Ke?k(K,G,te,Te):null;case D:return te.key===Ke?se(K,G,te,Te):null;case Q:return Ke=te._init,ve(K,G,Ke(te._payload),Te)}if(V(te)||le(te))return Ke!==null?null:xe(K,G,te,Te,null);Bo(K,te)}return null}function ze(K,G,te,Te,Ke){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get(te)||null,I(G,K,""+Te,Ke);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case N:return K=K.get(Te.key===null?te:Te.key)||null,k(G,K,Te,Ke);case D:return K=K.get(Te.key===null?te:Te.key)||null,se(G,K,Te,Ke);case Q:var et=Te._init;return ze(K,G,te,et(Te._payload),Ke)}if(V(Te)||le(Te))return K=K.get(te)||null,xe(G,K,Te,Ke,null);Bo(G,Te)}return null}function We(K,G,te,Te){for(var Ke=null,et=null,tt=G,it=G=0,dn=null;tt!==null&&it<te.length;it++){tt.index>it?(dn=tt,tt=null):dn=tt.sibling;var wt=ve(K,tt,te[it],Te);if(wt===null){tt===null&&(tt=dn);break}n&&tt&&wt.alternate===null&&i(K,tt),G=g(wt,G,it),et===null?Ke=wt:et.sibling=wt,et=wt,tt=dn}if(it===te.length)return a(K,tt),Xt&&Wr(K,it),Ke;if(tt===null){for(;it<te.length;it++)tt=ye(K,te[it],Te),tt!==null&&(G=g(tt,G,it),et===null?Ke=tt:et.sibling=tt,et=tt);return Xt&&Wr(K,it),Ke}for(tt=u(K,tt);it<te.length;it++)dn=ze(tt,K,it,te[it],Te),dn!==null&&(n&&dn.alternate!==null&&tt.delete(dn.key===null?it:dn.key),G=g(dn,G,it),et===null?Ke=dn:et.sibling=dn,et=dn);return n&&tt.forEach(function(Rr){return i(K,Rr)}),Xt&&Wr(K,it),Ke}function $e(K,G,te,Te){var Ke=le(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var et=Ke=null,tt=G,it=G=0,dn=null,wt=te.next();tt!==null&&!wt.done;it++,wt=te.next()){tt.index>it?(dn=tt,tt=null):dn=tt.sibling;var Rr=ve(K,tt,wt.value,Te);if(Rr===null){tt===null&&(tt=dn);break}n&&tt&&Rr.alternate===null&&i(K,tt),G=g(Rr,G,it),et===null?Ke=Rr:et.sibling=Rr,et=Rr,tt=dn}if(wt.done)return a(K,tt),Xt&&Wr(K,it),Ke;if(tt===null){for(;!wt.done;it++,wt=te.next())wt=ye(K,wt.value,Te),wt!==null&&(G=g(wt,G,it),et===null?Ke=wt:et.sibling=wt,et=wt);return Xt&&Wr(K,it),Ke}for(tt=u(K,tt);!wt.done;it++,wt=te.next())wt=ze(tt,K,it,wt.value,Te),wt!==null&&(n&&wt.alternate!==null&&tt.delete(wt.key===null?it:wt.key),G=g(wt,G,it),et===null?Ke=wt:et.sibling=wt,et=wt);return n&&tt.forEach(function(gv){return i(K,gv)}),Xt&&Wr(K,it),Ke}function Qt(K,G,te,Te){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case N:e:{for(var Ke=te.key,et=G;et!==null;){if(et.key===Ke){if(Ke=te.type,Ke===F){if(et.tag===7){a(K,et.sibling),G=d(et,te.props.children),G.return=K,K=G;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&jh(Ke)===et.type){a(K,et.sibling),G=d(et,te.props),G.ref=La(K,et,te),G.return=K,K=G;break e}a(K,et);break}else i(K,et);et=et.sibling}te.type===F?(G=Qr(te.props.children,K.mode,Te,te.key),G.return=K,K=G):(Te=ll(te.type,te.key,te.props,null,K.mode,Te),Te.ref=La(K,G,te),Te.return=K,K=Te)}return T(K);case D:e:{for(et=te.key;G!==null;){if(G.key===et)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(K,G.sibling),G=d(G,te.children||[]),G.return=K,K=G;break e}else{a(K,G);break}else i(K,G);G=G.sibling}G=Bc(te,K.mode,Te),G.return=K,K=G}return T(K);case Q:return et=te._init,Qt(K,G,et(te._payload),Te)}if(V(te))return We(K,G,te,Te);if(le(te))return $e(K,G,te,Te);Bo(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(a(K,G.sibling),G=d(G,te),G.return=K,K=G):(a(K,G),G=Oc(te,K.mode,Te),G.return=K,K=G),T(K)):a(K,G)}return Qt}var bs=Yh(!0),$h=Yh(!1),ko=_r(null),zo=null,Ps=null,Yu=null;function $u(){Yu=Ps=zo=null}function qu(n){var i=ko.current;Gt(ko),n._currentValue=i}function Ku(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ls(n,i){zo=n,Yu=Ps=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(In=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(Yu!==n)if(n={context:n,memoizedValue:i,next:null},Ps===null){if(zo===null)throw Error(t(308));Ps=n,zo.dependencies={lanes:0,firstContext:n}}else Ps=Ps.next=n;return i}var Xr=null;function Zu(n){Xr===null?Xr=[n]:Xr.push(n)}function qh(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Zu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Wi(n,u)}function Wi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Sr=!1;function Qu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(yt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Wi(n,a)}return d=u.interleaved,d===null?(i.next=i,Zu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Wi(n,a)}function Ho(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ln(n,a)}}function Zh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Vo(n,i,a,u){var d=n.updateQueue;Sr=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,se=k.next;k.next=null,T===null?g=se:T.next=se,T=k;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==T&&(I===null?xe.firstBaseUpdate=se:I.next=se,xe.lastBaseUpdate=k))}if(g!==null){var ye=d.baseState;T=0,xe=se=k=null,I=g;do{var ve=I.lane,ze=I.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var We=n,$e=I;switch(ve=i,ze=a,$e.tag){case 1:if(We=$e.payload,typeof We=="function"){ye=We.call(ze,ye,ve);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=$e.payload,ve=typeof We=="function"?We.call(ze,ye,ve):We,ve==null)break e;ye=oe({},ye,ve);break e;case 2:Sr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[I]:ve.push(I))}else ze={eventTime:ze,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(se=xe=ze,k=ye):xe=xe.next=ze,T|=ve;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(k=ye),d.baseState=k,d.firstBaseUpdate=se,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);$r|=T,n.lanes=T,n.memoizedState=ye}}function Qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Da={},Mi=_r(Da),Na=_r(Da),Ia=_r(Da);function jr(n){if(n===Da)throw Error(t(174));return n}function Ju(n,i){switch(kt(Ia,i),kt(Na,n),kt(Mi,Da),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Gt(Mi),kt(Mi,i)}function Ds(){Gt(Mi),Gt(Na),Gt(Ia)}function Jh(n){jr(Ia.current);var i=jr(Mi.current),a=M(i,n.type);i!==a&&(kt(Na,n),kt(Mi,a))}function ec(n){Na.current===n&&(Gt(Mi),Gt(Na))}var $t=_r(0);function Go(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tc=[];function nc(){for(var n=0;n<tc.length;n++)tc[n]._workInProgressVersionPrimary=null;tc.length=0}var Wo=L.ReactCurrentDispatcher,ic=L.ReactCurrentBatchConfig,Yr=0,qt=null,sn=null,cn=null,Xo=!1,Ua=!1,Fa=0,B_=0;function yn(){throw Error(t(321))}function rc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ai(n[a],i[a]))return!1;return!0}function sc(n,i,a,u,d,g){if(Yr=g,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wo.current=n===null||n.memoizedState===null?V_:G_,n=a(u,d),Ua){g=0;do{if(Ua=!1,Fa=0,25<=g)throw Error(t(301));g+=1,cn=sn=null,i.updateQueue=null,Wo.current=W_,n=a(u,d)}while(Ua)}if(Wo.current=$o,i=sn!==null&&sn.next!==null,Yr=0,cn=sn=qt=null,Xo=!1,i)throw Error(t(300));return n}function ac(){var n=Fa!==0;return Fa=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?qt.memoizedState=cn=n:cn=cn.next=n,cn}function Zn(){if(sn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var i=cn===null?qt.memoizedState:cn.next;if(i!==null)cn=i,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},cn===null?qt.memoizedState=cn=n:cn=cn.next=n}return cn}function Oa(n,i){return typeof i=="function"?i(n):i}function oc(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=sn,d=u.baseQueue,g=a.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}u.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,u=u.baseState;var I=T=null,k=null,se=g;do{var xe=se.lane;if((Yr&xe)===xe)k!==null&&(k=k.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:n(u,se.action);else{var ye={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};k===null?(I=k=ye,T=u):k=k.next=ye,qt.lanes|=xe,$r|=xe}se=se.next}while(se!==null&&se!==g);k===null?T=u:k.next=I,ai(u,i.memoizedState)||(In=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=k,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do g=d.lane,qt.lanes|=g,$r|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function lc(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do g=n(g,T.action),T=T.next;while(T!==d);ai(g,i.memoizedState)||(In=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function ep(){}function tp(n,i){var a=qt,u=Zn(),d=i(),g=!ai(u.memoizedState,d);if(g&&(u.memoizedState=d,In=!0),u=u.queue,uc(rp.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,Ba(9,ip.bind(null,a,u,d,i),void 0,null),fn===null)throw Error(t(349));(Yr&30)!==0||np(a,i,d)}return d}function np(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ip(n,i,a,u){i.value=a,i.getSnapshot=u,sp(i)&&ap(n)}function rp(n,i,a){return a(function(){sp(i)&&ap(n)})}function sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ai(n,a)}catch{return!0}}function ap(n){var i=Wi(n,1);i!==null&&fi(i,n,1,-1)}function op(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:n},i.queue=n,n=n.dispatch=H_.bind(null,qt,n),[i.memoizedState,n]}function Ba(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function lp(){return Zn().memoizedState}function jo(n,i,a,u){var d=Ti();qt.flags|=n,d.memoizedState=Ba(1|i,a,void 0,u===void 0?null:u)}function Yo(n,i,a,u){var d=Zn();u=u===void 0?null:u;var g=void 0;if(sn!==null){var T=sn.memoizedState;if(g=T.destroy,u!==null&&rc(u,T.deps)){d.memoizedState=Ba(i,a,g,u);return}}qt.flags|=n,d.memoizedState=Ba(1|i,a,g,u)}function up(n,i){return jo(8390656,8,n,i)}function uc(n,i){return Yo(2048,8,n,i)}function cp(n,i){return Yo(4,2,n,i)}function fp(n,i){return Yo(4,4,n,i)}function dp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function hp(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4,4,dp.bind(null,i,n),a)}function cc(){}function pp(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&rc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function mp(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&rc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function gp(n,i,a){return(Yr&21)===0?(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=a):(ai(a,i)||(a=ke(),qt.lanes|=a,$r|=a,n.baseState=!0),i)}function k_(n,i){var a=gt;gt=a!==0&&4>a?a:4,n(!0);var u=ic.transition;ic.transition={};try{n(!1),i()}finally{gt=a,ic.transition=u}}function _p(){return Zn().memoizedState}function z_(n,i,a){var u=wr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},vp(n))xp(i,a);else if(a=qh(n,i,a,u),a!==null){var d=Rn();fi(a,n,u,d),Sp(a,i,u)}}function H_(n,i,a){var u=wr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(vp(n))xp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,I=g(T,a);if(d.hasEagerState=!0,d.eagerState=I,ai(I,T)){var k=i.interleaved;k===null?(d.next=d,Zu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=qh(n,i,d,u),a!==null&&(d=Rn(),fi(a,n,u,d),Sp(a,i,u))}}function vp(n){var i=n.alternate;return n===qt||i!==null&&i===qt}function xp(n,i){Ua=Xo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Sp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ln(n,a)}}var $o={readContext:Kn,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},V_={readContext:Kn,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,jo(4194308,4,dp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return jo(4194308,4,n,i)},useInsertionEffect:function(n,i){return jo(4,2,n,i)},useMemo:function(n,i){var a=Ti();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ti();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=z_.bind(null,qt,n),[u.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:cc,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=k_.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=qt,d=Ti();if(Xt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),fn===null)throw Error(t(349));(Yr&30)!==0||np(u,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,up(rp.bind(null,u,g,n),[n]),u.flags|=2048,Ba(9,ip.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Ti(),i=fn.identifierPrefix;if(Xt){var a=Gi,u=Vi;a=(u&~(1<<32-Ce(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Fa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=B_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},G_={readContext:Kn,useCallback:pp,useContext:Kn,useEffect:uc,useImperativeHandle:hp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:oc,useRef:lp,useState:function(){return oc(Oa)},useDebugValue:cc,useDeferredValue:function(n){var i=Zn();return gp(i,sn.memoizedState,n)},useTransition:function(){var n=oc(Oa)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1},W_={readContext:Kn,useCallback:pp,useContext:Kn,useEffect:uc,useImperativeHandle:hp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:lc,useRef:lp,useState:function(){return lc(Oa)},useDebugValue:cc,useDeferredValue:function(n){var i=Zn();return sn===null?i.memoizedState=n:gp(i,sn.memoizedState,n)},useTransition:function(){var n=lc(Oa)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1};function li(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function fc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var qo={isMounted:function(n){return(n=n._reactInternals)?Si(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Rn(),d=wr(n),g=Xi(u,d);g.payload=i,a!=null&&(g.callback=a),i=yr(n,g,d),i!==null&&(fi(i,n,d,u),Ho(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Rn(),d=wr(n),g=Xi(u,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=yr(n,g,d),i!==null&&(fi(i,n,d,u),Ho(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Rn(),u=wr(n),d=Xi(a,u);d.tag=2,i!=null&&(d.callback=i),i=yr(n,d,u),i!==null&&(fi(i,n,u,a),Ho(i,n,u))}};function yp(n,i,a,u,d,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,T):i.prototype&&i.prototype.isPureReactComponent?!Ta(a,u)||!Ta(d,g):!0}function Ep(n,i,a){var u=!1,d=vr,g=i.contextType;return typeof g=="object"&&g!==null?g=Kn(g):(d=Nn(i)?Vr:Sn.current,u=i.contextTypes,g=(u=u!=null)?ws(n,d):vr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Mp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&qo.enqueueReplaceState(i,i.state,null)}function dc(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Qu(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Kn(g):(g=Nn(i)?Vr:Sn.current,d.context=ws(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(fc(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&qo.enqueueReplaceState(d,d.state,null),Vo(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,i){try{var a="",u=i;do a+=Ne(u),u=u.return;while(u);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function hc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function pc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var X_=typeof WeakMap=="function"?WeakMap:Map;function Tp(n,i,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){nl||(nl=!0,bc=u),pc(n,i)},a}function wp(n,i,a){a=Xi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){pc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){pc(n,i),typeof u!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Ap(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new X_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=sv.bind(null,n,i,a),i.then(n,n))}function Cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rp(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Xi(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var j_=L.ReactCurrentOwner,In=!1;function Cn(n,i,a,u){i.child=n===null?$h(i,null,a,u):bs(i,n.child,a,u)}function bp(n,i,a,u,d){a=a.render;var g=i.ref;return Ls(i,d),u=sc(n,i,a,u,g,d),a=ac(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(Xt&&a&&Vu(i),i.flags|=1,Cn(n,i,u,d),i.child)}function Pp(n,i,a,u,d){if(n===null){var g=a.type;return typeof g=="function"&&!Fc(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Lp(n,i,g,u,d)):(n=ll(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ta,a(T,u)&&n.ref===i.ref)return ji(n,i,d)}return i.flags|=1,n=Cr(g,u),n.ref=i.ref,n.return=i,i.child=n}function Lp(n,i,a,u,d){if(n!==null){var g=n.memoizedProps;if(Ta(g,u)&&n.ref===i.ref)if(In=!1,i.pendingProps=u=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(In=!0);else return i.lanes=n.lanes,ji(n,i,d)}return mc(n,i,a,u,d)}function Dp(n,i,a){var u=i.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Us,Gn),Gn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Us,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,kt(Us,Gn),Gn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,kt(Us,Gn),Gn|=u;return Cn(n,i,d,a),i.child}function Np(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function mc(n,i,a,u,d){var g=Nn(a)?Vr:Sn.current;return g=ws(i,g),Ls(i,d),a=sc(n,i,a,u,g,d),u=ac(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(Xt&&u&&Vu(i),i.flags|=1,Cn(n,i,a,d),i.child)}function Ip(n,i,a,u,d){if(Nn(a)){var g=!0;No(i)}else g=!1;if(Ls(i,d),i.stateNode===null)Zo(n,i),Ep(i,a,u),dc(i,a,u,d),u=!0;else if(n===null){var T=i.stateNode,I=i.memoizedProps;T.props=I;var k=T.context,se=a.contextType;typeof se=="object"&&se!==null?se=Kn(se):(se=Nn(a)?Vr:Sn.current,se=ws(i,se));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==u||k!==se)&&Mp(i,T,u,se),Sr=!1;var ve=i.memoizedState;T.state=ve,Vo(i,u,T,d),k=i.memoizedState,I!==u||ve!==k||Dn.current||Sr?(typeof xe=="function"&&(fc(i,a,xe,u),k=i.memoizedState),(I=Sr||yp(i,a,I,u,ve,k,se))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),T.props=u,T.state=k,T.context=se,u=I):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,Kh(n,i),I=i.memoizedProps,se=i.type===i.elementType?I:li(i.type,I),T.props=se,ye=i.pendingProps,ve=T.context,k=a.contextType,typeof k=="object"&&k!==null?k=Kn(k):(k=Nn(a)?Vr:Sn.current,k=ws(i,k));var ze=a.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ye||ve!==k)&&Mp(i,T,u,k),Sr=!1,ve=i.memoizedState,T.state=ve,Vo(i,u,T,d);var We=i.memoizedState;I!==ye||ve!==We||Dn.current||Sr?(typeof ze=="function"&&(fc(i,a,ze,u),We=i.memoizedState),(se=Sr||yp(i,a,se,u,ve,We,k)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,We,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,We,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=We),T.props=u,T.state=We,T.context=k,u=se):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return gc(n,i,a,u,g,d)}function gc(n,i,a,u,d,g){Np(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return d&&kh(i,a,!1),ji(n,i,g);u=i.stateNode,j_.current=i;var I=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=bs(i,n.child,null,g),i.child=bs(i,null,I,g)):Cn(n,i,I,g),i.memoizedState=u.state,d&&kh(i,a,!0),i.child}function Up(n){var i=n.stateNode;i.pendingContext?Oh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Oh(n,i.context,!1),Ju(n,i.containerInfo)}function Fp(n,i,a,u,d){return Rs(),ju(d),i.flags|=256,Cn(n,i,a,u),i.child}var _c={dehydrated:null,treeContext:null,retryLane:0};function vc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Op(n,i,a){var u=i.pendingProps,d=$t.current,g=!1,T=(i.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt($t,d&1),n===null)return Xu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,g?(u=i.mode,g=i.child,T={mode:"hidden",children:T},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=ul(T,u,0,null),n=Qr(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=vc(a),i.memoizedState=_c,n):xc(i,T));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Y_(n,i,T,u,I,d,a);if(g){g=u.fallback,T=i.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=Cr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?g=Cr(I,g):(g=Qr(g,T,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,T=n.child.memoizedState,T=T===null?vc(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~a,i.memoizedState=_c,u}return g=n.child,n=g.sibling,u=Cr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function xc(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ko(n,i,a,u){return u!==null&&ju(u),bs(i,n.child,null,a),n=xc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Y_(n,i,a,u,d,g,T){if(a)return i.flags&256?(i.flags&=-257,u=hc(Error(t(422))),Ko(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,d=i.mode,u=ul({mode:"visible",children:u.children},d,0,null),g=Qr(g,d,T,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&bs(i,n.child,null,T),i.child.memoizedState=vc(T),i.memoizedState=_c,g);if((i.mode&1)===0)return Ko(n,i,T,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,g=Error(t(419)),u=hc(g,u,void 0),Ko(n,i,T,u)}if(I=(T&n.childLanes)!==0,In||I){if(u=fn,u!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|T))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Wi(n,d),fi(u,n,d,-1))}return Uc(),u=hc(Error(t(421))),Ko(n,i,T,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=av.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Vn=gr(d.nextSibling),Hn=i,Xt=!0,oi=null,n!==null&&($n[qn++]=Vi,$n[qn++]=Gi,$n[qn++]=Gr,Vi=n.id,Gi=n.overflow,Gr=i),i=xc(i,u.children),i.flags|=4096,i)}function Bp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ku(n.return,i,a)}function Sc(n,i,a,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=d)}function kp(n,i,a){var u=i.pendingProps,d=u.revealOrder,g=u.tail;if(Cn(n,i,u.children,a),u=$t.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,a,i);else if(n.tag===19)Bp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt($t,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Go(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Sc(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Go(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sc(i,!0,a,null,g);break;case"together":Sc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),$r|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Cr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Cr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function $_(n,i,a){switch(i.tag){case 3:Up(i),Rs();break;case 5:Jh(i);break;case 1:Nn(i.type)&&No(i);break;case 4:Ju(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;kt(ko,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt($t,$t.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Op(n,i,a):(kt($t,$t.current&1),n=ji(n,i,a),n!==null?n.sibling:null);kt($t,$t.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return kp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt($t,$t.current),u)break;return null;case 22:case 23:return i.lanes=0,Dp(n,i,a)}return ji(n,i,a)}var zp,yc,Hp,Vp;zp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yc=function(){},Hp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,jr(Mi.current);var g=null;switch(a){case"input":d=Mt(n,d),u=Mt(n,u),g=[];break;case"select":d=oe({},d,{value:void 0}),u=oe({},u,{value:void 0}),g=[];break;case"textarea":d=dt(n,d),u=dt(n,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Po)}Be(a,u);var T;a=null;for(se in d)if(!u.hasOwnProperty(se)&&d.hasOwnProperty(se)&&d[se]!=null)if(se==="style"){var I=d[se];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?g||(g=[]):(g=g||[]).push(se,null));for(se in u){var k=u[se];if(I=d!=null?d[se]:void 0,u.hasOwnProperty(se)&&k!==I&&(k!=null||I!=null))if(se==="style")if(I){for(T in I)!I.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in k)k.hasOwnProperty(T)&&I[T]!==k[T]&&(a||(a={}),a[T]=k[T])}else a||(g||(g=[]),g.push(se,a)),a=k;else se==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(g=g||[]).push(se,k)):se==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(se,""+k):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(k!=null&&se==="onScroll"&&Vt("scroll",n),g||I===k||(g=[])):(g=g||[]).push(se,k))}a&&(g=g||[]).push("style",a);var se=g;(i.updateQueue=se)&&(i.flags|=4)}},Vp=function(n,i,a,u){a!==u&&(i.flags|=4)};function ka(n,i){if(!Xt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function En(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function q_(n,i,a){var u=i.pendingProps;switch(Gu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return Nn(i.type)&&Do(),En(i),null;case 3:return u=i.stateNode,Ds(),Gt(Dn),Gt(Sn),nc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Oo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(Dc(oi),oi=null))),yc(n,i),En(i),null;case 5:ec(i);var d=jr(Ia.current);if(a=i.type,n!==null&&i.stateNode!=null)Hp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return En(i),null}if(n=jr(Mi.current),Oo(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[Ei]=i,u[ba]=g,n=(i.mode&1)!==0,a){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(d=0;d<Aa.length;d++)Vt(Aa[d],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":Lt(u,g),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Vt("invalid",u);break;case"textarea":Ct(u,g),Vt("invalid",u)}Be(a,g),d=null;for(var T in g)if(g.hasOwnProperty(T)){var I=g[T];T==="children"?typeof I=="string"?u.textContent!==I&&(g.suppressHydrationWarning!==!0&&bo(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&bo(u.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Vt("scroll",u)}switch(a){case"input":Je(u),Ft(u,g,!0);break;case"textarea":Je(u),zt(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Po)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[Ei]=i,n[ba]=u,zp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ae(a,u),a){case"dialog":Vt("cancel",n),Vt("close",n),d=u;break;case"iframe":case"object":case"embed":Vt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Aa.length;d++)Vt(Aa[d],n);d=u;break;case"source":Vt("error",n),d=u;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),d=u;break;case"details":Vt("toggle",n),d=u;break;case"input":Lt(n,u),d=Mt(n,u),Vt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=oe({},u,{value:void 0}),Vt("invalid",n);break;case"textarea":Ct(n,u),d=dt(n,u),Vt("invalid",n);break;default:d=u}Be(a,d),I=d;for(g in I)if(I.hasOwnProperty(g)){var k=I[g];g==="style"?pe(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&he(n,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ge(n,k):typeof k=="number"&&ge(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Vt("scroll",n):k!=null&&b(n,g,k,T))}switch(a){case"input":Je(n),Ft(n,u,!1);break;case"textarea":Je(n),zt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+me(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?Ot(n,!!u.multiple,g,!1):u.defaultValue!=null&&Ot(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Po)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=jr(Ia.current),jr(Mi.current),Oo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ei]=i,(g=u.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:bo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bo(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ei]=i,i.stateNode=u}return En(i),null;case 13:if(Gt($t),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xh(),Rs(),i.flags|=98560,g=!1;else if(g=Oo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ei]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),g=!1}else oi!==null&&(Dc(oi),oi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||($t.current&1)!==0?an===0&&(an=3):Uc())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return Ds(),yc(n,i),n===null&&Ca(i.stateNode.containerInfo),En(i),null;case 10:return qu(i.type._context),En(i),null;case 17:return Nn(i.type)&&Do(),En(i),null;case 19:if(Gt($t),g=i.memoizedState,g===null)return En(i),null;if(u=(i.flags&128)!==0,T=g.rendering,T===null)if(u)ka(g,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Go(n),T!==null){for(i.flags|=128,ka(g,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt($t,$t.current&1|2),i.child}n=n.sibling}g.tail!==null&&Yt()>Fs&&(i.flags|=128,u=!0,ka(g,!1),i.lanes=4194304)}else{if(!u)if(n=Go(T),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ka(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!Xt)return En(i),null}else 2*Yt()-g.renderingStartTime>Fs&&a!==1073741824&&(i.flags|=128,u=!0,ka(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(a=g.last,a!==null?a.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Yt(),i.sibling=null,a=$t.current,kt($t,u?a&1|2:a&1),i):(En(i),null);case 22:case 23:return Ic(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function K_(n,i){switch(Gu(i),i.tag){case 1:return Nn(i.type)&&Do(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ds(),Gt(Dn),Gt(Sn),nc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ec(i),null;case 13:if(Gt($t),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Gt($t),null;case 4:return Ds(),null;case 10:return qu(i.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var Qo=!1,Mn=!1,Z_=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Is(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Zt(n,i,u)}else a.current=null}function Ec(n,i,a){try{a()}catch(u){Zt(n,i,u)}}var Gp=!1;function Q_(n,i){if(Iu=vo,n=yh(),Au(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,I=-1,k=-1,se=0,xe=0,ye=n,ve=null;t:for(;;){for(var ze;ye!==a||d!==0&&ye.nodeType!==3||(I=T+d),ye!==g||u!==0&&ye.nodeType!==3||(k=T+u),ye.nodeType===3&&(T+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)ve=ye,ye=ze;for(;;){if(ye===n)break t;if(ve===a&&++se===d&&(I=T),ve===g&&++xe===u&&(k=T),(ze=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=ze}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uu={focusedElem:n,selectionRange:a},vo=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var $e=We.memoizedProps,Qt=We.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?$e:li(i.type,$e),Qt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Zt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return We=Gp,Gp=!1,We}function za(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Ec(i,a,g)}d=d.next}while(d!==u)}}function Jo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Mc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wp(n){var i=n.alternate;i!==null&&(n.alternate=null,Wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[ba],delete i[ku],delete i[I_],delete i[U_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xp(n){return n.tag===5||n.tag===3||n.tag===4}function jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Po));else if(u!==4&&(n=n.child,n!==null))for(Tc(n,i,a),n=n.sibling;n!==null;)Tc(n,i,a),n=n.sibling}function wc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(wc(n,i,a),n=n.sibling;n!==null;)wc(n,i,a),n=n.sibling}var gn=null,ui=!1;function Er(n,i,a){for(a=a.child;a!==null;)Yp(n,i,a),a=a.sibling}function Yp(n,i,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Z,a)}catch{}switch(a.tag){case 5:Mn||Is(a,i);case 6:var u=gn,d=ui;gn=null,Er(n,i,a),gn=u,ui=d,gn!==null&&(ui?(n=gn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):gn.removeChild(a.stateNode));break;case 18:gn!==null&&(ui?(n=gn,a=a.stateNode,n.nodeType===8?Bu(n.parentNode,a):n.nodeType===1&&Bu(n,a),va(n)):Bu(gn,a.stateNode));break;case 4:u=gn,d=ui,gn=a.stateNode.containerInfo,ui=!0,Er(n,i,a),gn=u,ui=d;break;case 0:case 11:case 14:case 15:if(!Mn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&Ec(a,i,T),d=d.next}while(d!==u)}Er(n,i,a);break;case 1:if(!Mn&&(Is(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){Zt(a,i,I)}Er(n,i,a);break;case 21:Er(n,i,a);break;case 22:a.mode&1?(Mn=(u=Mn)||a.memoizedState!==null,Er(n,i,a),Mn=u):Er(n,i,a);break;default:Er(n,i,a)}}function $p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Z_),i.forEach(function(u){var d=ov.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var g=n,T=i,I=T;e:for(;I!==null;){switch(I.tag){case 5:gn=I.stateNode,ui=!1;break e;case 3:gn=I.stateNode.containerInfo,ui=!0;break e;case 4:gn=I.stateNode.containerInfo,ui=!0;break e}I=I.return}if(gn===null)throw Error(t(160));Yp(g,T,d),gn=null,ui=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(se){Zt(d,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qp(i,n),i=i.sibling}function qp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),wi(n),u&4){try{za(3,n,n.return),Jo(3,n)}catch($e){Zt(n,n.return,$e)}try{za(5,n,n.return)}catch($e){Zt(n,n.return,$e)}}break;case 1:ci(i,n),wi(n),u&512&&a!==null&&Is(a,a.return);break;case 5:if(ci(i,n),wi(n),u&512&&a!==null&&Is(a,a.return),n.flags&32){var d=n.stateNode;try{ge(d,"")}catch($e){Zt(n,n.return,$e)}}if(u&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,T=a!==null?a.memoizedProps:g,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&ft(d,g),Ae(I,T);var se=Ae(I,g);for(T=0;T<k.length;T+=2){var xe=k[T],ye=k[T+1];xe==="style"?pe(d,ye):xe==="dangerouslySetInnerHTML"?he(d,ye):xe==="children"?ge(d,ye):b(d,xe,ye,se)}switch(I){case"input":jt(d,g);break;case"textarea":Le(d,g);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var ze=g.value;ze!=null?Ot(d,!!g.multiple,ze,!1):ve!==!!g.multiple&&(g.defaultValue!=null?Ot(d,!!g.multiple,g.defaultValue,!0):Ot(d,!!g.multiple,g.multiple?[]:"",!1))}d[ba]=g}catch($e){Zt(n,n.return,$e)}}break;case 6:if(ci(i,n),wi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch($e){Zt(n,n.return,$e)}}break;case 3:if(ci(i,n),wi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{va(i.containerInfo)}catch($e){Zt(n,n.return,$e)}break;case 4:ci(i,n),wi(n);break;case 13:ci(i,n),wi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Rc=Yt())),u&4&&$p(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(Mn=(se=Mn)||xe,ci(i,n),Mn=se):ci(i,n),wi(n),u&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!xe&&(n.mode&1)!==0)for(Ge=n,xe=n.child;xe!==null;){for(ye=Ge=xe;Ge!==null;){switch(ve=Ge,ze=ve.child,ve.tag){case 0:case 11:case 14:case 15:za(4,ve,ve.return);break;case 1:Is(ve,ve.return);var We=ve.stateNode;if(typeof We.componentWillUnmount=="function"){u=ve,a=ve.return;try{i=u,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch($e){Zt(u,a,$e)}}break;case 5:Is(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Qp(ye);continue}}ze!==null?(ze.return=ve,Ge=ze):Qp(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,se?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=ye.stateNode,k=ye.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=ce("display",T))}catch($e){Zt(n,n.return,$e)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=se?"":ye.memoizedProps}catch($e){Zt(n,n.return,$e)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ci(i,n),wi(n),u&4&&$p(n);break;case 21:break;default:ci(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ge(d,""),u.flags&=-33);var g=jp(n);wc(n,g,d);break;case 3:case 4:var T=u.stateNode.containerInfo,I=jp(n);Tc(n,I,T);break;default:throw Error(t(161))}}catch(k){Zt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function J_(n,i,a){Ge=n,Kp(n)}function Kp(n,i,a){for(var u=(n.mode&1)!==0;Ge!==null;){var d=Ge,g=d.child;if(d.tag===22&&u){var T=d.memoizedState!==null||Qo;if(!T){var I=d.alternate,k=I!==null&&I.memoizedState!==null||Mn;I=Qo;var se=Mn;if(Qo=T,(Mn=k)&&!se)for(Ge=d;Ge!==null;)T=Ge,k=T.child,T.tag===22&&T.memoizedState!==null?Jp(d):k!==null?(k.return=T,Ge=k):Jp(d);for(;g!==null;)Ge=g,Kp(g),g=g.sibling;Ge=d,Qo=I,Mn=se}Zp(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,Ge=g):Zp(n)}}function Zp(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||Jo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Mn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:li(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Qh(i,g,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Qh(i,T,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&va(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||i.flags&512&&Mc(i)}catch(ve){Zt(i,i.return,ve)}}if(i===n){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Qp(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Jp(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Jo(4,i)}catch(k){Zt(i,a,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Zt(i,d,k)}}var g=i.return;try{Mc(i)}catch(k){Zt(i,g,k)}break;case 5:var T=i.return;try{Mc(i)}catch(k){Zt(i,T,k)}}}catch(k){Zt(i,i.return,k)}if(i===n){Ge=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ge=I;break}Ge=i.return}}var ev=Math.ceil,el=L.ReactCurrentDispatcher,Ac=L.ReactCurrentOwner,Qn=L.ReactCurrentBatchConfig,yt=0,fn=null,tn=null,_n=0,Gn=0,Us=_r(0),an=0,Ha=null,$r=0,tl=0,Cc=0,Va=null,Un=null,Rc=0,Fs=1/0,Yi=null,nl=!1,bc=null,Mr=null,il=!1,Tr=null,rl=0,Ga=0,Pc=null,sl=-1,al=0;function Rn(){return(yt&6)!==0?Yt():sl!==-1?sl:sl=Yt()}function wr(n){return(n.mode&1)===0?1:(yt&2)!==0&&_n!==0?_n&-_n:O_.transition!==null?(al===0&&(al=ke()),al):(n=gt,n!==0||(n=window.event,n=n===void 0?16:th(n.type)),n)}function fi(n,i,a,u){if(50<Ga)throw Ga=0,Pc=null,Error(t(185));mt(n,a,u),((yt&2)===0||n!==fn)&&(n===fn&&((yt&2)===0&&(tl|=a),an===4&&Ar(n,_n)),Fn(n,u),a===1&&yt===0&&(i.mode&1)===0&&(Fs=Yt()+500,Io&&xr()))}function Fn(n,i){var a=n.callbackNode;Rt(n,i);var u=Bt(n,n===fn?_n:0);if(u===0)a!==null&&go(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&go(a),i===1)n.tag===0?F_(tm.bind(null,n)):zh(tm.bind(null,n)),D_(function(){(yt&6)===0&&xr()}),a=null;else{switch(ki(u)){case 1:a=ha;break;case 4:a=A;break;case 16:a=W;break;case 536870912:a=ee;break;default:a=W}a=um(a,em.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function em(n,i){if(sl=-1,al=0,(yt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Os()&&n.callbackNode!==a)return null;var u=Bt(n,n===fn?_n:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ol(n,u);else{i=u;var d=yt;yt|=2;var g=im();(fn!==n||_n!==i)&&(Yi=null,Fs=Yt()+500,Kr(n,i));do try{iv();break}catch(I){nm(n,I)}while(!0);$u(),el.current=g,yt=d,tn!==null?i=0:(fn=null,_n=0,i=an)}if(i!==0){if(i===2&&(d=en(n),d!==0&&(u=d,i=Lc(n,d))),i===1)throw a=Ha,Kr(n,0),Ar(n,u),Fn(n,Yt()),a;if(i===6)Ar(n,u);else{if(d=n.current.alternate,(u&30)===0&&!tv(d)&&(i=ol(n,u),i===2&&(g=en(n),g!==0&&(u=g,i=Lc(n,g))),i===1))throw a=Ha,Kr(n,0),Ar(n,u),Fn(n,Yt()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Zr(n,Un,Yi);break;case 3:if(Ar(n,u),(u&130023424)===u&&(i=Rc+500-Yt(),10<i)){if(Bt(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Rn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ou(Zr.bind(null,n,Un,Yi),i);break}Zr(n,Un,Yi);break;case 4:if(Ar(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var T=31-Ce(u);g=1<<T,T=i[T],T>d&&(d=T),u&=~g}if(u=d,u=Yt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ev(u/1960))-u,10<u){n.timeoutHandle=Ou(Zr.bind(null,n,Un,Yi),u);break}Zr(n,Un,Yi);break;case 5:Zr(n,Un,Yi);break;default:throw Error(t(329))}}}return Fn(n,Yt()),n.callbackNode===a?em.bind(null,n):null}function Lc(n,i){var a=Va;return n.current.memoizedState.isDehydrated&&(Kr(n,i).flags|=256),n=ol(n,i),n!==2&&(i=Un,Un=a,i!==null&&Dc(i)),n}function Dc(n){Un===null?Un=n:Un.push.apply(Un,n)}function tv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],g=d.getSnapshot;d=d.value;try{if(!ai(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ar(n,i){for(i&=~Cc,i&=~tl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ce(i),u=1<<a;n[a]=-1,i&=~u}}function tm(n){if((yt&6)!==0)throw Error(t(327));Os();var i=Bt(n,0);if((i&1)===0)return Fn(n,Yt()),null;var a=ol(n,i);if(n.tag!==0&&a===2){var u=en(n);u!==0&&(i=u,a=Lc(n,u))}if(a===1)throw a=Ha,Kr(n,0),Ar(n,i),Fn(n,Yt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zr(n,Un,Yi),Fn(n,Yt()),null}function Nc(n,i){var a=yt;yt|=1;try{return n(i)}finally{yt=a,yt===0&&(Fs=Yt()+500,Io&&xr())}}function qr(n){Tr!==null&&Tr.tag===0&&(yt&6)===0&&Os();var i=yt;yt|=1;var a=Qn.transition,u=gt;try{if(Qn.transition=null,gt=1,n)return n()}finally{gt=u,Qn.transition=a,yt=i,(yt&6)===0&&xr()}}function Ic(){Gn=Us.current,Gt(Us)}function Kr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,L_(a)),tn!==null)for(a=tn.return;a!==null;){var u=a;switch(Gu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Do();break;case 3:Ds(),Gt(Dn),Gt(Sn),nc();break;case 5:ec(u);break;case 4:Ds();break;case 13:Gt($t);break;case 19:Gt($t);break;case 10:qu(u.type._context);break;case 22:case 23:Ic()}a=a.return}if(fn=n,tn=n=Cr(n.current,null),_n=Gn=i,an=0,Ha=null,Cc=tl=$r=0,Un=Va=null,Xr!==null){for(i=0;i<Xr.length;i++)if(a=Xr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,g=a.pending;if(g!==null){var T=g.next;g.next=d,u.next=T}a.pending=u}Xr=null}return n}function nm(n,i){do{var a=tn;try{if($u(),Wo.current=$o,Xo){for(var u=qt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Xo=!1}if(Yr=0,cn=sn=qt=null,Ua=!1,Fa=0,Ac.current=null,a===null||a.return===null){an=1,Ha=i,tn=null;break}e:{var g=n,T=a.return,I=a,k=i;if(i=_n,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var se=k,xe=I,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=Cp(T);if(ze!==null){ze.flags&=-257,Rp(ze,T,I,g,i),ze.mode&1&&Ap(g,se,i),i=ze,k=se;var We=i.updateQueue;if(We===null){var $e=new Set;$e.add(k),i.updateQueue=$e}else We.add(k);break e}else{if((i&1)===0){Ap(g,se,i),Uc();break e}k=Error(t(426))}}else if(Xt&&I.mode&1){var Qt=Cp(T);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Rp(Qt,T,I,g,i),ju(Ns(k,I));break e}}g=k=Ns(k,I),an!==4&&(an=2),Va===null?Va=[g]:Va.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var K=Tp(g,k,i);Zh(g,K);break e;case 1:I=k;var G=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Mr===null||!Mr.has(te)))){g.flags|=65536,i&=-i,g.lanes|=i;var Te=wp(g,I,i);Zh(g,Te);break e}}g=g.return}while(g!==null)}sm(a)}catch(Ke){i=Ke,tn===a&&a!==null&&(tn=a=a.return);continue}break}while(!0)}function im(){var n=el.current;return el.current=$o,n===null?$o:n}function Uc(){(an===0||an===3||an===2)&&(an=4),fn===null||($r&268435455)===0&&(tl&268435455)===0||Ar(fn,_n)}function ol(n,i){var a=yt;yt|=2;var u=im();(fn!==n||_n!==i)&&(Yi=null,Kr(n,i));do try{nv();break}catch(d){nm(n,d)}while(!0);if($u(),yt=a,el.current=u,tn!==null)throw Error(t(261));return fn=null,_n=0,an}function nv(){for(;tn!==null;)rm(tn)}function iv(){for(;tn!==null&&!du();)rm(tn)}function rm(n){var i=lm(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?sm(n):tn=i,Ac.current=null}function sm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=q_(a,i,Gn),a!==null){tn=a;return}}else{if(a=K_(a,i),a!==null){a.flags&=32767,tn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=n}while(i!==null);an===0&&(an=5)}function Zr(n,i,a){var u=gt,d=Qn.transition;try{Qn.transition=null,gt=1,rv(n,i,a,u)}finally{Qn.transition=d,gt=u}return null}function rv(n,i,a,u){do Os();while(Tr!==null);if((yt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Pn(n,g),n===fn&&(tn=fn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||il||(il=!0,um(W,function(){return Os(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Qn.transition,Qn.transition=null;var T=gt;gt=1;var I=yt;yt|=4,Ac.current=null,Q_(n,a),qp(a,n),T_(Uu),vo=!!Iu,Uu=Iu=null,n.current=a,J_(a),hu(),yt=I,gt=T,Qn.transition=g}else n.current=a;if(il&&(il=!1,Tr=n,rl=d),g=n.pendingLanes,g===0&&(Mr=null),He(a.stateNode),Fn(n,Yt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(nl)throw nl=!1,n=bc,bc=null,n;return(rl&1)!==0&&n.tag!==0&&Os(),g=n.pendingLanes,(g&1)!==0?n===Pc?Ga++:(Ga=0,Pc=n):Ga=0,xr(),null}function Os(){if(Tr!==null){var n=ki(rl),i=Qn.transition,a=gt;try{if(Qn.transition=null,gt=16>n?16:n,Tr===null)var u=!1;else{if(n=Tr,Tr=null,rl=0,(yt&6)!==0)throw Error(t(331));var d=yt;for(yt|=4,Ge=n.current;Ge!==null;){var g=Ge,T=g.child;if((Ge.flags&16)!==0){var I=g.deletions;if(I!==null){for(var k=0;k<I.length;k++){var se=I[k];for(Ge=se;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:za(8,xe,g)}var ye=xe.child;if(ye!==null)ye.return=xe,Ge=ye;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,ze=xe.return;if(Wp(xe),xe===se){Ge=null;break}if(ve!==null){ve.return=ze,Ge=ve;break}Ge=ze}}}var We=g.alternate;if(We!==null){var $e=We.child;if($e!==null){We.child=null;do{var Qt=$e.sibling;$e.sibling=null,$e=Qt}while($e!==null)}}Ge=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,Ge=T;else e:for(;Ge!==null;){if(g=Ge,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:za(9,g,g.return)}var K=g.sibling;if(K!==null){K.return=g.return,Ge=K;break e}Ge=g.return}}var G=n.current;for(Ge=G;Ge!==null;){T=Ge;var te=T.child;if((T.subtreeFlags&2064)!==0&&te!==null)te.return=T,Ge=te;else e:for(T=G;Ge!==null;){if(I=Ge,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Jo(9,I)}}catch(Ke){Zt(I,I.return,Ke)}if(I===T){Ge=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Ge=Te;break e}Ge=I.return}}if(yt=d,xr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Z,n)}catch{}u=!0}return u}finally{gt=a,Qn.transition=i}}return!1}function am(n,i,a){i=Ns(a,i),i=Tp(n,i,1),n=yr(n,i,1),i=Rn(),n!==null&&(mt(n,1,i),Fn(n,i))}function Zt(n,i,a){if(n.tag===3)am(n,n,a);else for(;i!==null;){if(i.tag===3){am(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Mr===null||!Mr.has(u))){n=Ns(a,n),n=wp(i,n,1),i=yr(i,n,1),n=Rn(),i!==null&&(mt(i,1,n),Fn(i,n));break}}i=i.return}}function sv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Rn(),n.pingedLanes|=n.suspendedLanes&a,fn===n&&(_n&a)===a&&(an===4||an===3&&(_n&130023424)===_n&&500>Yt()-Rc?Kr(n,0):Cc|=a),Fn(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=qe,qe<<=1,(qe&130023424)===0&&(qe=4194304)));var a=Rn();n=Wi(n,i),n!==null&&(mt(n,i,a),Fn(n,a))}function av(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),om(n,a)}function ov(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),om(n,a)}var lm;lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Dn.current)In=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return In=!1,$_(n,i,a);In=(n.flags&131072)!==0}else In=!1,Xt&&(i.flags&1048576)!==0&&Hh(i,Fo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Zo(n,i),n=i.pendingProps;var d=ws(i,Sn.current);Ls(i,a),d=sc(null,i,u,n,d,a);var g=ac();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(u)?(g=!0,No(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Qu(i),d.updater=qo,i.stateNode=d,d._reactInternals=i,dc(i,u,n,a),i=gc(null,i,u,!0,g,a)):(i.tag=0,Xt&&g&&Vu(i),Cn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Zo(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=uv(u),n=li(u,n),d){case 0:i=mc(null,i,u,n,a);break e;case 1:i=Ip(null,i,u,n,a);break e;case 11:i=bp(null,i,u,n,a);break e;case 14:i=Pp(null,i,u,li(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),mc(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),Ip(n,i,u,d,a);case 3:e:{if(Up(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,d=g.element,Kh(n,i),Vo(i,u,null,a);var T=i.memoizedState;if(u=T.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Ns(Error(t(423)),i),i=Fp(n,i,u,a,d);break e}else if(u!==d){d=Ns(Error(t(424)),i),i=Fp(n,i,u,a,d);break e}else for(Vn=gr(i.stateNode.containerInfo.firstChild),Hn=i,Xt=!0,oi=null,a=$h(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),u===d){i=ji(n,i,a);break e}Cn(n,i,u,a)}i=i.child}return i;case 5:return Jh(i),n===null&&Xu(i),u=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,T=d.children,Fu(u,d)?T=null:g!==null&&Fu(u,g)&&(i.flags|=32),Np(n,i),Cn(n,i,T,a),i.child;case 6:return n===null&&Xu(i),null;case 13:return Op(n,i,a);case 4:return Ju(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=bs(i,null,u,a):Cn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),bp(n,i,u,d,a);case 7:return Cn(n,i,i.pendingProps,a),i.child;case 8:return Cn(n,i,i.pendingProps.children,a),i.child;case 12:return Cn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,g=i.memoizedProps,T=d.value,kt(ko,u._currentValue),u._currentValue=T,g!==null)if(ai(g.value,T)){if(g.children===d.children&&!Dn.current){i=ji(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){T=g.child;for(var k=I.firstContext;k!==null;){if(k.context===u){if(g.tag===1){k=Xi(-1,a&-a),k.tag=2;var se=g.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),se.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Ku(g.return,a,i),I.lanes|=a;break}k=k.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),Ku(T,a,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Cn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ls(i,a),d=Kn(d),u=u(d),i.flags|=1,Cn(n,i,u,a),i.child;case 14:return u=i.type,d=li(u,i.pendingProps),d=li(u.type,d),Pp(n,i,u,d,a);case 15:return Lp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),Zo(n,i),i.tag=1,Nn(u)?(n=!0,No(i)):n=!1,Ls(i,a),Ep(i,u,d),dc(i,u,d,a),gc(null,i,u,!0,n,a);case 19:return kp(n,i,a);case 22:return Dp(n,i,a)}throw Error(t(156,i.tag))};function um(n,i){return mo(n,i)}function lv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,u){return new lv(n,i,a,u)}function Fc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function uv(n){if(typeof n=="function")return Fc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===H)return 14}return 2}function Cr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ll(n,i,a,u,d,g){var T=2;if(u=n,typeof n=="function")Fc(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return Qr(a.children,d,g,i);case w:T=8,d|=8;break;case U:return n=Jn(12,a,i,d|2),n.elementType=U,n.lanes=g,n;case ue:return n=Jn(13,a,i,d),n.elementType=ue,n.lanes=g,n;case fe:return n=Jn(19,a,i,d),n.elementType=fe,n.lanes=g,n;case X:return ul(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:T=10;break e;case B:T=9;break e;case q:T=11;break e;case H:T=14;break e;case Q:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(T,a,i,d),i.elementType=n,i.type=u,i.lanes=g,i}function Qr(n,i,a,u){return n=Jn(7,n,u,i),n.lanes=a,n}function ul(n,i,a,u){return n=Jn(22,n,u,i),n.elementType=X,n.lanes=a,n.stateNode={isHidden:!1},n}function Oc(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function Bc(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function cv(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function kc(n,i,a,u,d,g,T,I,k){return n=new cv(n,i,a,I,k),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Jn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(g),n}function fv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function cm(n){if(!n)return vr;n=n._reactInternals;e:{if(Si(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Nn(a))return Bh(n,a,i)}return i}function fm(n,i,a,u,d,g,T,I,k){return n=kc(a,u,!0,n,d,g,T,I,k),n.context=cm(null),a=n.current,u=Rn(),d=wr(a),g=Xi(u,d),g.callback=i??null,yr(a,g,d),n.current.lanes=d,mt(n,d,u),Fn(n,u),n}function cl(n,i,a,u){var d=i.current,g=Rn(),T=wr(d);return a=cm(a),i.context===null?i.context=a:i.pendingContext=a,i=Xi(g,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=yr(d,i,T),n!==null&&(fi(n,d,T,g),Ho(n,d,T)),T}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function zc(n,i){dm(n,i),(n=n.alternate)&&dm(n,i)}function dv(){return null}var hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hc(n){this._internalRoot=n}dl.prototype.render=Hc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));cl(n,i,null,null)},dl.prototype.unmount=Hc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){cl(null,n,null,null)}),i[zi]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=bt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<hr.length&&i!==0&&i<hr[a].priority;a++);hr.splice(a,0,n),a===0&&Jd(n)}};function Vc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pm(){}function hv(n,i,a,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var se=fl(T);g.call(se)}}var T=fm(i,u,n,0,null,!1,!1,"",pm);return n._reactRootContainer=T,n[zi]=T.current,Ca(n.nodeType===8?n.parentNode:n),qr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var se=fl(k);I.call(se)}}var k=kc(n,0,!1,null,null,!1,!1,"",pm);return n._reactRootContainer=k,n[zi]=k.current,Ca(n.nodeType===8?n.parentNode:n),qr(function(){cl(i,k,a,u)}),k}function pl(n,i,a,u,d){var g=a._reactRootContainer;if(g){var T=g;if(typeof d=="function"){var I=d;d=function(){var k=fl(T);I.call(k)}}cl(i,T,n,d)}else T=hv(a,i,n,d,u);return fl(T)}At=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=St(i.pendingLanes);a!==0&&(Ln(i,a|1),Fn(i,Yt()),(yt&6)===0&&(Fs=Yt()+500,xr()))}break;case 13:qr(function(){var u=Wi(n,1);if(u!==null){var d=Rn();fi(u,n,1,d)}}),zc(n,1)}},Ht=function(n){if(n.tag===13){var i=Wi(n,134217728);if(i!==null){var a=Rn();fi(i,n,134217728,a)}zc(n,134217728)}},ri=function(n){if(n.tag===13){var i=wr(n),a=Wi(n,i);if(a!==null){var u=Rn();fi(a,n,i,u)}zc(n,i)}},bt=function(){return gt},si=function(n,i){var a=gt;try{return gt=n,i()}finally{gt=a}},st=function(n,i,a){switch(i){case"input":if(jt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Lo(u);if(!d)throw Error(t(90));Ut(u),jt(u,d)}}}break;case"textarea":Le(n,a);break;case"select":i=a.value,i!=null&&Ot(n,!!a.multiple,i,!1)}},Re=Nc,_e=qr;var pv={usingClientEntryPoint:!1,Events:[Pa,Ms,Lo,de,Oe,Nc]},Wa={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mv={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fa(n),n===null?null:n.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{Z=ml.inject(mv),be=ml}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv,On.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(i))throw Error(t(200));return fv(n,i,null,a)},On.createRoot=function(n,i){if(!Vc(n))throw Error(t(299));var a=!1,u="",d=hm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=kc(n,1,!1,null,null,a,!1,u,d),n[zi]=i.current,Ca(n.nodeType===8?n.parentNode:n),new Hc(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fa(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return qr(n)},On.hydrate=function(n,i,a){if(!hl(i))throw Error(t(200));return pl(null,n,i,!0,a)},On.hydrateRoot=function(n,i,a){if(!Vc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,g="",T=hm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=fm(i,null,n,1,a??null,d,!1,g,T),n[zi]=i.current,Ca(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new dl(i)},On.render=function(n,i,a){if(!hl(i))throw Error(t(200));return pl(null,n,i,!1,a)},On.unmountComponentAtNode=function(n){if(!hl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){pl(null,null,n,!1,function(){n._reactRootContainer=null,n[zi]=null})}),!0):!1},On.unstable_batchedUpdates=Nc,On.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!hl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return pl(n,i,a,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var Em;function Tv(){if(Em)return Xc.exports;Em=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xc.exports=Mv(),Xc.exports}var Mm;function wv(){if(Mm)return _l;Mm=1;var r=Tv();return _l.createRoot=r.createRoot,_l.hydrateRoot=r.hydrateRoot,_l}var Av=wv();/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ad=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Ng=/^[\\/]{2}/;function Cv(r,e){return e+r.replace(/\\/g,"/")}var Tm="popstate";function wm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Rv(r={}){function e(s,o){var p;let l=(p=o.state)==null?void 0:p.masked,{pathname:c,search:f,hash:h}=l||s.location;return Df("",{pathname:c,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,o){return typeof o=="string"?o:no(o)}return Pv(e,t,null,r)}function Kt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ii(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bv(){return Math.random().toString(36).substring(2,10)}function Am(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Df(r,e,t=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?sa(e):e,state:t,key:e&&e.key||s||bv(),mask:o}}function no({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function sa(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function Pv(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,f="POP",h=null,p=_();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function _(){return(c.state||{idx:null}).idx}function v(){f="POP";let x=_(),S=x==null?null:x-p;p=x,h&&h({action:f,location:C.location,delta:S})}function m(x,S){f="PUSH";let R=wm(x)?x:Df(C.location,x,S);p=_()+1;let b=Am(R,p),L=C.createHref(R.mask||R);try{c.pushState(b,"",L)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(L)}l&&h&&h({action:f,location:C.location,delta:1})}function y(x,S){f="REPLACE";let R=wm(x)?x:Df(C.location,x,S);p=_();let b=Am(R,p),L=C.createHref(R.mask||R);c.replaceState(b,"",L),l&&h&&h({action:f,location:C.location,delta:0})}function E(x){return Lv(o,x)}let C={get action(){return f},get location(){return r(o,c)},listen(x){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Tm,v),h=x,()=>{o.removeEventListener(Tm,v),h=null}},createHref(x){return e(o,x)},createURL:E,encodeLocation(x){let S=E(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:y,go(x){return c.go(x)}};return C}function Lv(r,e,t=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),Kt(s,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:no(e);return o=o.replace(/ $/,"%20"),!t&&Ng.test(o)&&(o=s+o),new URL(o,s)}function Ig(r,e,t="/"){return Dv(r,e,t,!1)}function Dv(r,e,t,s,o){let l=typeof e=="string"?sa(e):e,c=rr(l.pathname||"/",t);if(c==null)return null;let f=Nv(r),h=null,p=Wv(c);for(let _=0;h==null&&_<f.length;++_)h=Gv(f[_],p,s);return h}function Nv(r){let e=Ug(r);return Iv(e),e}function Ug(r,e=[],t=[],s="",o=!1){let l=(c,f,h=o,p)=>{let _={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&h)return;Kt(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let v=vi([s,_.relativePath]),m=t.concat(_);c.children&&c.children.length>0&&(Kt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Ug(c.children,e,m,v,h)),!(c.path==null&&!c.index)&&e.push({path:v,score:Hv(v,c.index),routesMeta:m.map((y,E)=>{let[C,x]=Bg(y.relativePath,y.caseSensitive,E===m.length-1);return{...y,matcher:C,compiledParams:x}})})};return r.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of Fg(c.path))l(c,f,!0,p)}),e}function Fg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=Fg(s.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function Iv(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Vv(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Uv=/^:[\w-]+$/,Fv=3,Ov=2,Bv=1,kv=10,zv=-2,Cm=r=>r==="*";function Hv(r,e){let t=r.split("/"),s=t.length;return t.some(Cm)&&(s+=zv),e&&(s+=Ov),t.filter(o=>!Cm(o)).reduce((o,l)=>o+(Uv.test(l)?Fv:l===""?Bv:kv),s)}function Vv(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Gv(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",c=[];for(let f=0;f<s.length;++f){let h=s[f],p=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",v={path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m=h.matcher&&h.compiledParams?Og(v,_,h.matcher,h.compiledParams):Kl(v,_),y=h.route;if(!m&&p&&t&&!s[s.length-1].route.index&&(m=Kl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},_)),!m)return null;Object.assign(o,m.params),c.push({params:o,pathname:vi([l,m.pathname]),pathnameBase:Yv(vi([l,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(l=vi([l,m.pathnameBase]))}return c}function Kl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=Bg(r.path,r.caseSensitive,r.end);return Og(r,e,t,s)}function Og(r,e,t,s){let o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:v},m)=>{if(_==="*"){let E=f[m]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const y=f[m];return v&&!y?p[_]=void 0:p[_]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function Bg(r,e=!1,t=!0){Ii(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h,p,_)=>{if(s.push({paramName:f,isOptional:h!=null}),h){let v=_.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Wv(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ii(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function rr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function Xv(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?sa(r):r,l;return t?(t=zg(t),t.startsWith("/")?l=Rm(t.substring(1),"/"):l=Rm(t,e)):l=e,{pathname:l,search:$v(s),hash:qv(o)}}function Rm(r,e){let t=Zl(e).split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function $c(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jv(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function kg(r){let e=jv(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Cd(r,e,t,s=!1){let o;typeof r=="string"?o=sa(r):(o={...r},Kt(!o.pathname||!o.pathname.includes("?"),$c("?","pathname","search",o)),Kt(!o.pathname||!o.pathname.includes("#"),$c("#","pathname","hash",o)),Kt(!o.search||!o.search.includes("#"),$c("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let m=c.split("/");for(;m[0]==="..";)m.shift(),v-=1;o.pathname=m.join("/")}f=v>=0?e[v]:"/"}let h=Xv(o,f),p=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||_)&&(h.pathname+="/"),h}var zg=r=>r.replace(/[\\/]{2,}/g,"/"),vi=r=>zg(r.join("/")),Zl=r=>r.replace(/\/+$/,""),Yv=r=>Zl(r).replace(/^\/*/,"/"),$v=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,qv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Kv=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Zv(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Qv(r){let e=r.map(t=>t.route.path).filter(Boolean);return vi(e)||"/"}var Hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Vg(r,e){let t=r;if(typeof t!="string"||!Ad.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(Hg)try{let l=new URL(window.location.href),c=Ng.test(t)?new URL(Cv(t,l.protocol)):new URL(t),f=rr(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:o=!0}catch{Ii(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Gg=["POST","PUT","PATCH","DELETE"];new Set(Gg);var Jv=["GET",...Gg];new Set(Jv);var ex=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function tx(r){try{return ex.includes(new URL(r).protocol)}catch{return!1}}var aa=ne.createContext(null);aa.displayName="DataRouter";var ru=ne.createContext(null);ru.displayName="DataRouterState";var Wg=ne.createContext(!1);function nx(){return ne.useContext(Wg)}var Xg=ne.createContext({isTransitioning:!1});Xg.displayName="ViewTransition";var ix=ne.createContext(new Map);ix.displayName="Fetchers";var rx=ne.createContext(null);rx.displayName="Await";var ii=ne.createContext(null);ii.displayName="Navigation";var ao=ne.createContext(null);ao.displayName="Location";var or=ne.createContext({outlet:null,matches:[],isDataRoute:!1});or.displayName="Route";var Rd=ne.createContext(null);Rd.displayName="RouteError";var jg="REACT_ROUTER_ERROR",sx="REDIRECT",ax="ROUTE_ERROR_RESPONSE";function ox(r){if(r.startsWith(`${jg}:${sx}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function lx(r){if(r.startsWith(`${jg}:${ax}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Kv(e.status,e.statusText,e.data)}catch{}}function ux(r,{relative:e}={}){Kt(oo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=ne.useContext(ii),{hash:o,pathname:l,search:c}=lo(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:vi([t,l])),s.createHref({pathname:f,search:c,hash:o})}function oo(){return ne.useContext(ao)!=null}function lr(){return Kt(oo(),"useLocation() may be used only in the context of a <Router> component."),ne.useContext(ao).location}var Yg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $g(r){ne.useContext(ii).static||ne.useLayoutEffect(r)}function cx(){let{isDataRoute:r}=ne.useContext(or);return r?Mx():fx()}function fx(){Kt(oo(),"useNavigate() may be used only in the context of a <Router> component.");let r=ne.useContext(aa),{basename:e,navigator:t}=ne.useContext(ii),{matches:s}=ne.useContext(or),{pathname:o}=lr(),l=JSON.stringify(kg(s)),c=ne.useRef(!1);return $g(()=>{c.current=!0}),ne.useCallback((h,p={})=>{if(Ii(c.current,Yg),!c.current)return;if(typeof h=="number"){t.go(h);return}let _=Cd(h,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:vi([e,_.pathname])),(p.replace?t.replace:t.push)(_,p.state,p)},[e,t,l,o,r])}ne.createContext(null);function lo(r,{relative:e}={}){let{matches:t}=ne.useContext(or),{pathname:s}=lr(),o=JSON.stringify(kg(t));return ne.useMemo(()=>Cd(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function dx(r,e){return qg(r,e)}function qg(r,e,t){var x;Kt(oo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=ne.useContext(ii),{matches:o}=ne.useContext(or),l=o[o.length-1],c=l?l.params:{},f=l?l.pathname:"/",h=l?l.pathnameBase:"/",p=l&&l.route;{let S=p&&p.path||"";Zg(f,!p||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let _=lr(),v;if(e){let S=typeof e=="string"?sa(e):e;Kt(h==="/"||((x=S.pathname)==null?void 0:x.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${S.pathname}" was given in the \`location\` prop.`),v=S}else v=_;let m=v.pathname||"/",y=m;if(h!=="/"){let S=h.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(S=>Object.assign(S,{route:t.manifest[S.route.id]||S.route})):Ig(r,{pathname:y});Ii(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ii(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=_x(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},c,S.params),pathname:vi([h,s.encodeLocation?s.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?h:vi([h,s.encodeLocation?s.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),o,t);return e&&C?ne.createElement(ao.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},C):C}function hx(){let r=Ex(),e=Zv(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=ne.createElement(ne.Fragment,null,ne.createElement("p",null,"💿 Hey developer 👋"),ne.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ne.createElement("code",{style:l},"ErrorBoundary")," or"," ",ne.createElement("code",{style:l},"errorElement")," prop on your route.")),ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},e),t?ne.createElement("pre",{style:o},t):null,c)}var px=ne.createElement(hx,null),Kg=class extends ne.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=lx(r.digest);t&&(r=t)}let e=r!==void 0?ne.createElement(or.Provider,{value:this.props.routeContext},ne.createElement(Rd.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ne.createElement(mx,{error:r},e):e}};Kg.contextType=Wg;var qc=new WeakMap;function mx({children:r,error:e}){let{basename:t}=ne.useContext(ii);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=ox(e.digest);if(s){let o=qc.get(e);if(o)throw o;let l=Vg(s.location,t),c=l.absoluteURL||l.to;if(tx(c))throw new Error("Invalid redirect location");if(Hg&&!qc.get(e))if(l.isExternal||s.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw qc.set(e,f),f}return ne.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return r}function gx({routeContext:r,match:e,children:t}){let s=ne.useContext(aa);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ne.createElement(or.Provider,{value:r},t)}function _x(r,e=[],t){let s=t==null?void 0:t.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,l=s==null?void 0:s.errors;if(l!=null){let _=o.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);Kt(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,_+1))}let c=!1,f=-1;if(t&&s){c=s.renderFallback;for(let _=0;_<o.length;_++){let v=o[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=_),v.route.id){let{loaderData:m,errors:y}=s,E=v.route.loader&&!m.hasOwnProperty(v.route.id)&&(!y||y[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}}let h=t==null?void 0:t.onError,p=s&&h?(_,v)=>{var m,y;h(_,{location:s.location,params:((y=(m=s.matches)==null?void 0:m[0])==null?void 0:y.params)??{},pattern:Qv(s.matches),errorInfo:v})}:void 0;return o.reduceRight((_,v,m)=>{let y,E=!1,C=null,x=null;s&&(y=l&&v.route.id?l[v.route.id]:void 0,C=v.route.errorElement||px,c&&(f<0&&m===0?(Zg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):f===m&&(E=!0,x=v.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),R=()=>{let b;return y?b=C:E?b=x:v.route.Component?b=ne.createElement(v.route.Component,null):v.route.element?b=v.route.element:b=_,ne.createElement(gx,{match:v,routeContext:{outlet:_,matches:S,isDataRoute:s!=null},children:b})};return s&&(v.route.ErrorBoundary||v.route.errorElement||m===0)?ne.createElement(Kg,{location:s.location,revalidation:s.revalidation,component:C,error:y,children:R(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:p}):R()},null)}function bd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vx(r){let e=ne.useContext(aa);return Kt(e,bd(r)),e}function xx(r){let e=ne.useContext(ru);return Kt(e,bd(r)),e}function Sx(r){let e=ne.useContext(or);return Kt(e,bd(r)),e}function Pd(r){let e=Sx(r),t=e.matches[e.matches.length-1];return Kt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function yx(){return Pd("useRouteId")}function Ex(){var s;let r=ne.useContext(Rd),e=xx("useRouteError"),t=Pd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function Mx(){let{router:r}=vx("useNavigate"),e=Pd("useNavigate"),t=ne.useRef(!1);return $g(()=>{t.current=!0}),ne.useCallback(async(o,l={})=>{Ii(t.current,Yg),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var bm={};function Zg(r,e,t){!e&&!bm[r]&&(bm[r]=!0,Ii(!1,t))}ne.memo(Tx);function Tx({routes:r,manifest:e,future:t,state:s,isStatic:o,onError:l}){return qg(r,void 0,{manifest:e,state:s,isStatic:o,onError:l})}function Qg(r){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wx({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,useTransitions:c}){Kt(!oo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=ne.useMemo(()=>({basename:f,navigator:o,static:l,useTransitions:c,future:{}}),[f,o,l,c]);typeof t=="string"&&(t=sa(t));let{pathname:p="/",search:_="",hash:v="",state:m=null,key:y="default",mask:E}=t,C=ne.useMemo(()=>{let x=rr(p,f);return x==null?null:{location:{pathname:x,search:_,hash:v,state:m,key:y,mask:E},navigationType:s}},[f,p,_,v,m,y,s,E]);return Ii(C!=null,`<Router basename="${f}"> is not able to match the URL "${p}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:ne.createElement(ii.Provider,{value:h},ne.createElement(ao.Provider,{children:e,value:C}))}function Ax({children:r,location:e}){return dx(Nf(r),e)}function Nf(r,e=[]){let t=[];return ne.Children.forEach(r,(s,o)=>{if(!ne.isValidElement(s))return;let l=[...e,o];if(s.type===ne.Fragment){t.push.apply(t,Nf(s.props.children,l));return}Kt(s.type===Qg,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Nf(s.props.children,l)),t.push(c)}),t}var Vl="get",Gl="application/x-www-form-urlencoded";function su(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Cx(r){return su(r)&&r.tagName.toLowerCase()==="button"}function Rx(r){return su(r)&&r.tagName.toLowerCase()==="form"}function bx(r){return su(r)&&r.tagName.toLowerCase()==="input"}function Px(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Lx(r,e){return r.button===0&&(!e||e==="_self")&&!Px(r)}var vl=null;function Dx(){if(vl===null)try{new FormData(document.createElement("form"),0),vl=!1}catch{vl=!0}return vl}var Nx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kc(r){return r!=null&&!Nx.has(r)?(Ii(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gl}"`),null):r}function Ix(r,e){let t,s,o,l,c;if(Rx(r)){let f=r.getAttribute("action");s=f?rr(f,e):null,t=r.getAttribute("method")||Vl,o=Kc(r.getAttribute("enctype"))||Gl,l=new FormData(r)}else if(Cx(r)||bx(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||f.getAttribute("action");if(s=h?rr(h,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Vl,o=Kc(r.getAttribute("formenctype"))||Kc(f.getAttribute("enctype"))||Gl,l=new FormData(f,r),!Dx()){let{name:p,type:_,value:v}=r;if(_==="image"){let m=p?`${p}.`:"";l.append(`${m}x`,"0"),l.append(`${m}y`,"0")}else p&&l.append(p,v)}}else{if(su(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Vl,s=null,o=Gl,c=r}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ld(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Jg(r,e,t,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&rr(o.pathname,e)==="/"?o.pathname=`${Zl(e)}/_root.${s}`:o.pathname=`${Zl(o.pathname)}.${s}`,o}async function Ux(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fx(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ox(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await Ux(l,t);return c.links?c.links():[]}return[]}));return Hx(s.flat(1).filter(Fx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Pm(r,e,t,s,o,l){let c=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,f=(h,p)=>{var _;return t[p].pathname!==h.pathname||((_=t[p].route.path)==null?void 0:_.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,p)=>c(h,p)||f(h,p)):l==="data"?e.filter((h,p)=>{var v;let _=s.routes[h.route.id];if(!_||!_.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let m=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Bx(r,e,{includeHydrateFallback:t}={}){return kx(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function kx(r){return[...new Set(r)]}function zx(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Hx(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(zx(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function Dd(){let r=ne.useContext(aa);return Ld(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Vx(){let r=ne.useContext(ru);return Ld(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Nd=ne.createContext(void 0);Nd.displayName="FrameworkContext";function au(){let r=ne.useContext(Nd);return Ld(r,"You must render this element inside a <HydratedRouter> element"),r}function Gx(r,e){let t=ne.useContext(Nd),[s,o]=ne.useState(!1),[l,c]=ne.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:_,onTouchStart:v}=e,m=ne.useRef(null);ne.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let C=S=>{S.forEach(R=>{c(R.isIntersecting)})},x=new IntersectionObserver(C,{threshold:.5});return m.current&&x.observe(m.current),()=>{x.disconnect()}}},[r]),ne.useEffect(()=>{if(s){let C=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(C)}}},[s]);let y=()=>{o(!0)},E=()=>{o(!1),c(!1)};return t?r!=="intent"?[l,m,{}]:[l,m,{onFocus:ja(f,y),onBlur:ja(h,E),onMouseEnter:ja(p,y),onMouseLeave:ja(_,E),onTouchStart:ja(v,y)}]:[!1,m,{}]}function ja(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Wx({page:r,...e}){let t=nx(),{nonce:s}=au(),{router:o}=Dd(),l=ne.useMemo(()=>Ig(o.routes,r,o.basename),[o.routes,r,o.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?ne.createElement(jx,{page:r,matches:l,...e}):ne.createElement(Yx,{page:r,matches:l,...e})):null}function Xx(r){let{manifest:e,routeModules:t}=au(),[s,o]=ne.useState([]);return ne.useEffect(()=>{let l=!1;return Ox(r,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[r,e,t]),s}function jx({page:r,matches:e,...t}){let s=lr(),{future:o}=au(),{basename:l}=Dd(),c=ne.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let f=Jg(r,l,o.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,p=[];for(let _ of e)typeof _.route.shouldRevalidate=="function"?h=!0:p.push(_.route.id);return h&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,o.v8_trailingSlashAwareDataRequests,r,s,e]);return ne.createElement(ne.Fragment,null,c.map(f=>ne.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function Yx({page:r,matches:e,...t}){let s=lr(),{future:o,manifest:l,routeModules:c}=au(),{basename:f}=Dd(),{loaderData:h,matches:p}=Vx(),_=ne.useMemo(()=>Pm(r,e,p,l,s,"data"),[r,e,p,l,s]),v=ne.useMemo(()=>Pm(r,e,p,l,s,"assets"),[r,e,p,l,s]),m=ne.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,x=!1;if(e.forEach(R=>{var L;let b=l.routes[R.route.id];!b||!b.hasLoader||(!_.some(N=>N.route.id===R.route.id)&&R.route.id in h&&((L=c[R.route.id])!=null&&L.shouldRevalidate)||b.hasClientLoader?x=!0:C.add(R.route.id))}),C.size===0)return[];let S=Jg(r,f,o.v8_trailingSlashAwareDataRequests,"data");return x&&C.size>0&&S.searchParams.set("_routes",e.filter(R=>C.has(R.route.id)).map(R=>R.route.id).join(",")),[S.pathname+S.search]},[f,o.v8_trailingSlashAwareDataRequests,h,s,l,_,e,r,c]),y=ne.useMemo(()=>Bx(v,l),[v,l]),E=Xx(v);return ne.createElement(ne.Fragment,null,m.map(C=>ne.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...t})),y.map(C=>ne.createElement("link",{key:C,rel:"modulepreload",href:C,...t})),E.map(({key:C,link:x})=>ne.createElement("link",{key:C,nonce:t.nonce,...x,crossOrigin:x.crossOrigin??t.crossOrigin})))}function $x(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var qx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qx&&(window.__reactRouterVersion="7.18.0")}catch{}function Kx({basename:r,children:e,useTransitions:t,window:s}){let o=ne.useRef();o.current==null&&(o.current=Rv({window:s,v5Compat:!0}));let l=o.current,[c,f]=ne.useState({action:l.action,location:l.location}),h=ne.useCallback(p=>{t===!1?f(p):ne.startTransition(()=>f(p))},[t]);return ne.useLayoutEffect(()=>l.listen(h),[l,h]),ne.createElement(wx,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var e0=ne.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,mask:f,state:h,target:p,to:_,preventScrollReset:v,viewTransition:m,defaultShouldRevalidate:y,...E},C){let{basename:x,navigator:S,useTransitions:R}=ne.useContext(ii),b=typeof _=="string"&&Ad.test(_),L=Vg(_,x);_=L.to;let N=ux(_,{relative:o}),D=lr(),F=null;if(f){let H=Cd(f,[],D.mask?D.mask.pathname:"/",!0);x!=="/"&&(H.pathname=H.pathname==="/"?x:vi([x,H.pathname])),F=S.createHref(H)}let[w,U,j]=Gx(s,E),B=eS(_,{replace:c,mask:f,state:h,target:p,preventScrollReset:v,relative:o,viewTransition:m,defaultShouldRevalidate:y,useTransitions:R});function q(H){e&&e(H),H.defaultPrevented||B(H)}let ue=!(L.isExternal||l),fe=ne.createElement("a",{...E,...j,href:(ue?F:void 0)||L.absoluteURL||N,onClick:ue?q:e,ref:$x(C,U),target:p,"data-discover":!b&&t==="render"?"true":void 0});return w&&!b?ne.createElement(ne.Fragment,null,fe,ne.createElement(Wx,{page:N})):fe});e0.displayName="Link";var Zx=ne.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:f,children:h,...p},_){let v=lo(c,{relative:p.relative}),m=lr(),y=ne.useContext(ru),{navigator:E,basename:C}=ne.useContext(ii),x=y!=null&&sS(v)&&f===!0,S=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,R=m.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(R=R.toLowerCase(),b=b?b.toLowerCase():null,S=S.toLowerCase()),b&&C&&(b=rr(b,C)||b);const L=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let N=R===S||!o&&R.startsWith(S)&&R.charAt(L)==="/",D=b!=null&&(b===S||!o&&b.startsWith(S)&&b.charAt(S.length)==="/"),F={isActive:N,isPending:D,isTransitioning:x},w=N?e:void 0,U;typeof s=="function"?U=s(F):U=[s,N?"active":null,D?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let j=typeof l=="function"?l(F):l;return ne.createElement(e0,{...p,"aria-current":w,className:U,ref:_,style:j,to:c,viewTransition:f},typeof h=="function"?h(F):h)});Zx.displayName="NavLink";var Qx=ne.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=Vl,action:f,onSubmit:h,relative:p,preventScrollReset:_,viewTransition:v,defaultShouldRevalidate:m,...y},E)=>{let{useTransitions:C}=ne.useContext(ii),x=iS(),S=rS(f,{relative:p}),R=c.toLowerCase()==="get"?"get":"post",b=typeof f=="string"&&Ad.test(f),L=N=>{if(h&&h(N),N.defaultPrevented)return;N.preventDefault();let D=N.nativeEvent.submitter,F=(D==null?void 0:D.getAttribute("formmethod"))||c,w=()=>x(D||N.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:o,state:l,relative:p,preventScrollReset:_,viewTransition:v,defaultShouldRevalidate:m});C&&t!==!1?ne.startTransition(()=>w()):w()};return ne.createElement("form",{ref:E,method:R,action:S,onSubmit:s?h:L,...y,"data-discover":!b&&r==="render"?"true":void 0})});Qx.displayName="Form";function Jx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t0(r){let e=ne.useContext(aa);return Kt(e,Jx(r)),e}function eS(r,{target:e,replace:t,mask:s,state:o,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:h,useTransitions:p}={}){let _=cx(),v=lr(),m=lo(r,{relative:c});return ne.useCallback(y=>{if(Lx(y,e)){y.preventDefault();let E=t!==void 0?t:no(v)===no(m),C=()=>_(r,{replace:E,mask:s,state:o,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:h});p?ne.startTransition(()=>C()):C()}},[v,_,m,t,s,o,e,r,l,c,f,h,p])}var tS=0,nS=()=>`__${String(++tS)}__`;function iS(){let{router:r}=t0("useSubmit"),{basename:e}=ne.useContext(ii),t=yx(),s=r.fetch,o=r.navigate;return ne.useCallback(async(l,c={})=>{let{action:f,method:h,encType:p,formData:_,body:v}=Ix(l,e);if(c.navigate===!1){let m=c.fetcherKey||nS();await s(m,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:v,formMethod:c.method||h,formEncType:c.encType||p,flushSync:c.flushSync})}else await o(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:v,formMethod:c.method||h,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,o,e,t])}function rS(r,{relative:e}={}){let{basename:t}=ne.useContext(ii),s=ne.useContext(or);Kt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...lo(r||".",{relative:e})},c=lr();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(_=>_==="")){f.delete("index"),h.filter(v=>v).forEach(v=>f.append("index",v));let _=f.toString();l.search=_?`?${_}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:vi([t,l.pathname])),no(l)}function sS(r,{relative:e}={}){let t=ne.useContext(Xg);Kt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=t0("useViewTransitionState"),o=lo(r,{relative:e});if(!t.isTransitioning)return!1;let l=rr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=rr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Kl(o.pathname,c)!=null||Kl(o.pathname,l)!=null}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Lm=r=>{const e=oS(r);return e.charAt(0).toUpperCase()+e.slice(1)},n0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),lS=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=ne.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...f},h)=>ne.createElement("svg",{ref:h,...uS,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:n0("lucide",o),...!l&&!lS(f)&&{"aria-hidden":"true"},...f},[...c.map(([p,_])=>ne.createElement(p,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=(r,e)=>{const t=ne.forwardRef(({className:s,...o},l)=>ne.createElement(cS,{ref:l,iconNode:e,className:n0(`lucide-${aS(Lm(r))}`,`lucide-${r}`,s),...o}));return t.displayName=Lm(r),t};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],dS=ou("image",fS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],pS=ou("refresh-cw",hS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],gS=ou("trash-2",mS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],vS=ou("upload",_S),Dm=r=>{let e;const t=new Set,s=(p,_)=>{const v=typeof p=="function"?p(e):p;if(!Object.is(v,e)){const m=e;e=_??(typeof v!="object"||v===null)?v:Object.assign({},e,v),t.forEach(y=>y(e,m))}},o=()=>e,f={setState:s,getState:o,getInitialState:()=>h,subscribe:p=>(t.add(p),()=>t.delete(p))},h=e=r(s,o,f);return f},xS=(r=>r?Dm(r):Dm),SS=r=>r;function yS(r,e=SS){const t=gl.useSyncExternalStore(r.subscribe,gl.useCallback(()=>e(r.getState()),[r,e]),gl.useCallback(()=>e(r.getInitialState()),[r,e]));return gl.useDebugValue(t),t}const Nm=r=>{const e=xS(r),t=s=>yS(e,s);return Object.assign(t,e),t},ES=(r=>r?Nm(r):Nm),ls=ES(r=>({originalImage:null,depthImage:null,isProcessing:!1,parallaxStrength:1,isLocked:!1,setOriginalImage:e=>r({originalImage:e}),setDepthImage:e=>r({depthImage:e}),setIsProcessing:e=>r({isProcessing:e}),setParallaxStrength:e=>r({parallaxStrength:e}),toggleLock:()=>r(e=>({isLocked:!e.isLocked})),reset:()=>r({originalImage:null,depthImage:null,isProcessing:!1,parallaxStrength:1,isLocked:!1})}));function MS(){const[r,e]=ne.useState(!1),t=ne.useRef(null),{originalImage:s,setOriginalImage:o,isProcessing:l,reset:c}=ls(),f=ne.useCallback(async m=>{if(!m.type.startsWith("image/")){alert("请上传图片文件（JPG / PNG / WebP）");return}const y=new FileReader;y.onload=E=>{var x;const C=(x=E.target)==null?void 0:x.result;o(C)},y.readAsDataURL(m)},[o]),h=ne.useCallback(m=>{var E;m.preventDefault(),e(!1);const y=(E=m.dataTransfer.files)==null?void 0:E[0];y&&f(y)},[f]),p=ne.useCallback(m=>{m.preventDefault(),r||e(!0)},[r]),_=ne.useCallback(m=>{m.preventDefault(),e(!1)},[]),v=ne.useCallback(m=>{var E;const y=(E=m.target.files)==null?void 0:E[0];y&&f(y),t.current&&(t.current.value="")},[f]);return s?Xe.jsxs("div",{"trae-inspector-start-line":"50","trae-inspector-start-column":"6","trae-inspector-end-line":"95","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full h-full flex flex-col items-center justify-center gap-4 relative",children:[Xe.jsxs("div",{"trae-inspector-start-line":"51","trae-inspector-start-column":"8","trae-inspector-end-line":"64","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative max-w-full max-h-full",children:[Xe.jsx("img",{"trae-inspector-start-line":"52","trae-inspector-start-column":"10","trae-inspector-end-line":"56","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:s,alt:"已上传图片",className:"max-w-full max-h-[50vh] object-contain rounded-xl shadow-xl"}),l&&Xe.jsxs("div",{"trae-inspector-start-line":"58","trae-inspector-start-column":"12","trae-inspector-end-line":"62","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 bg-black/70 rounded-xl flex flex-col items-center justify-center",children:[Xe.jsx("div",{"trae-inspector-start-line":"59","trae-inspector-start-column":"14","trae-inspector-end-line":"59","trae-inspector-end-column":"120","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3"}),Xe.jsx("p",{"trae-inspector-start-line":"60","trae-inspector-start-column":"14","trae-inspector-end-line":"60","trae-inspector-end-column":"75","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%AD%A3%E5%9C%A8%E5%88%86%E6%9E%90%E7%A9%BA%E9%97%B4%E6%B7%B1%E5%BA%A6...%22%2C%22textStartLine%22%3A%2260%22%2C%22textStartColumn%22%3A%2260%22%2C%22textEndLine%22%3A%2260%22%2C%22textEndColumn%22%3A%2271%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white text-sm font-medium",children:"正在分析空间深度..."}),Xe.jsx("p",{"trae-inspector-start-line":"61","trae-inspector-start-column":"14","trae-inspector-end-line":"61","trae-inspector-end-column":"67","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%87%A0%E7%A7%92%E9%92%9F%E5%8D%B3%E5%8F%AF%E5%AE%8C%E6%88%90%22%2C%22textStartLine%22%3A%2261%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%2261%22%2C%22textEndColumn%22%3A%2263%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/50 text-xs mt-1",children:"几秒钟即可完成"})]})]}),Xe.jsxs("div",{"trae-inspector-start-line":"66","trae-inspector-start-column":"8","trae-inspector-end-line":"86","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2 flex-wrap justify-center mt-2",children:[Xe.jsxs("button",{"trae-inspector-start-line":"67","trae-inspector-start-column":"10","trae-inspector-end-line":"75","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>{var m;return(m=t.current)==null?void 0:m.click()},className:`px-4 py-3 rounded-xl text-sm font-medium
                       bg-white/10 text-white hover:bg-white/20 transition-all
                       flex items-center gap-2 active:scale-95`,children:[Xe.jsx(pS,{className:"w-4 h-4"}),"换一张图"]}),Xe.jsxs("button",{"trae-inspector-start-line":"77","trae-inspector-start-column":"10","trae-inspector-end-line":"85","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:c,className:`px-4 py-3 rounded-xl text-sm font-medium
                       bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all
                       flex items-center gap-2 active:scale-95`,children:[Xe.jsx(gS,{className:"w-4 h-4"}),"清空"]})]}),Xe.jsx("input",{"trae-inspector-start-line":"88","trae-inspector-start-column":"8","trae-inspector-end-line":"94","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",ref:t,type:"file",accept:"image/*",className:"hidden",onChange:v})]}):Xe.jsx("div",{"trae-inspector-start-line":"101","trae-inspector-start-column":"4","trae-inspector-end-line":"149","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full h-full",children:Xe.jsxs("label",{"trae-inspector-start-line":"102","trae-inspector-start-column":"6","trae-inspector-end-line":"148","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",htmlFor:"file-input",className:`
          w-full h-full min-h-[280px]
          flex flex-col items-center justify-center
          border-2 border-dashed rounded-2xl transition-all cursor-pointer select-none
          px-4
          ${r?"border-cyan-400 bg-cyan-400/10 scale-[1.02]":"border-white/20 hover:border-cyan-400/60 bg-white/5 hover:bg-cyan-400/5"}
        `,onDrop:h,onDragOver:p,onDragLeave:_,children:[Xe.jsx("input",{"trae-inspector-start-line":"118","trae-inspector-start-column":"8","trae-inspector-end-line":"125","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",id:"file-input",ref:t,type:"file",accept:"image/*",className:"sr-only",onChange:v}),Xe.jsx("div",{"trae-inspector-start-line":"127","trae-inspector-start-column":"8","trae-inspector-end-line":"137","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`
          w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4
          bg-gradient-to-br from-cyan-500/20 to-purple-500/20
          border border-white/10
        `,children:r?Xe.jsx(dS,{className:"w-8 h-8 md:w-9 md:h-9 text-cyan-400"}):Xe.jsx(vS,{className:"w-8 h-8 md:w-9 md:h-9 text-white/70"})}),Xe.jsx("h2",{"trae-inspector-start-line":"139","trae-inspector-start-column":"8","trae-inspector-end-line":"141","trae-inspector-end-column":"13","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg md:text-xl font-semibold text-white mb-2",children:r?"松开以上传":"上传照片"}),Xe.jsx("p",{"trae-inspector-start-line":"142","trae-inspector-start-column":"8","trae-inspector-end-line":"144","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%8B%96%E6%8B%BD%E5%9B%BE%E7%89%87%E5%88%B0%E8%BF%99%E9%87%8C%EF%BC%8C%E6%88%96%E7%82%B9%E5%87%BB%E9%80%89%E6%8B%A9%E6%96%87%E4%BB%B6%22%2C%22textStartLine%22%3A%22142%22%2C%22textStartColumn%22%3A%2277%22%2C%22textEndLine%22%3A%22144%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/50 text-xs md:text-sm text-center max-w-xs",children:"拖拽图片到这里，或点击选择文件"}),Xe.jsx("p",{"trae-inspector-start-line":"145","trae-inspector-start-column":"8","trae-inspector-end-line":"147","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%94%AF%E6%8C%81%20JPG%20%C2%B7%20PNG%20%C2%B7%20WebP%22%2C%22textStartLine%22%3A%22145%22%2C%22textStartColumn%22%3A%2265%22%2C%22textEndLine%22%3A%22147%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/30 text-[10px] md:text-xs mt-3",children:"支持 JPG · PNG · WebP"})]})})}function TS(r){const e=document.createElement("canvas"),t=Math.min(r.width,1024),s=Math.min(r.height,1024);e.width=t,e.height=s;const o=e.getContext("2d");o.drawImage(r,0,0,t,s);const c=o.getImageData(0,0,t,s).data,f=new Float32Array(t*s);for(let b=0;b<t*s;b++)f[b]=.299*c[b*4]+.587*c[b*4+1]+.114*c[b*4+2];const h=new Float32Array(t*s);for(let b=1;b<s-1;b++)for(let L=1;L<t-1;L++){const N=b*t+L,D=-f[N-t-1]-2*f[N-1]-f[N+t-1]+f[N-t+1]+2*f[N+1]+f[N+t+1],F=-f[N-t-1]-2*f[N-t]-f[N-t+1]+f[N+t-1]+2*f[N+t]+f[N+t+1];h[N]=Math.sqrt(D*D+F*F)}const p=new Float32Array(t*s),_=new Float32Array(t*s),v=5;for(let b=0;b<s;b++){let L=0;for(let N=-v;N<=v;N++)L+=h[b*t+Math.min(Math.max(N,0),t-1)];for(let N=0;N<t;N++){_[b*t+N]=L/(v*2+1);const D=N-v,F=N+v+1;D>=0&&(L-=h[b*t+D]),F<t&&(L+=h[b*t+F])}}for(let b=0;b<t;b++){let L=0;for(let N=-v;N<=v;N++)L+=_[Math.min(Math.max(N,0),s-1)*t+b];for(let N=0;N<s;N++){p[N*t+b]=L/(v*2+1);const D=N-v,F=N+v+1;D>=0&&(L-=_[D*t+b]),F<s&&(L+=_[F*t+b])}}let m=1/0,y=-1/0;for(let b=0;b<t*s;b++)p[b]<m&&(m=p[b]),p[b]>y&&(y=p[b]);const E=y-m||1,C=o.createImageData(t,s),x=t/2,S=s/2,R=Math.sqrt(x*x+S*S);for(let b=0;b<t*s;b++){const L=b%t,N=Math.floor(b/t),D=c[b*4]/255,F=c[b*4+1]/255,w=c[b*4+2]/255,U=Math.max(D,F,w),j=Math.min(D,F,w),B=(U+j)/2,q=U-j,ue=(p[b]-m)/E,H=1-Math.sqrt((L-x)**2+(N-S)**2)/R*.6;let Q=ue*.5+q*.25+H*.15+B*.1;Q=Math.pow(Q,1.25),Q=Math.max(0,Math.min(1,Q));const X=Math.round(Q*255);C.data[b*4]=X,C.data[b*4+1]=X,C.data[b*4+2]=X,C.data[b*4+3]=255}return C}function wS(){const{originalImage:r,depthImage:e,setDepthImage:t,setIsProcessing:s}=ls(),[o,l]=ne.useState(!0);return ne.useEffect(()=>{if(!r||e)return;s(!0);const c=setTimeout(()=>{const f=new Image;f.onload=()=>{try{const h=TS(f);t(h)}finally{s(!1)}},f.onerror=()=>s(!1),f.src=r},150);return()=>clearTimeout(c)},[r,e,t,s]),ne.useEffect(()=>{const c=setTimeout(()=>l(!1),5e3);return()=>clearTimeout(c)},[]),Xe.jsxs("div",{"trae-inspector-start-line":"124","trae-inspector-start-column":"4","trae-inspector-end-line":"165","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full h-[100dvh] flex flex-col overflow-hidden",children:[Xe.jsx("header",{"trae-inspector-start-line":"126","trae-inspector-start-column":"6","trae-inspector-end-line":"136","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative z-10 px-4 py-3 md:px-6 md:py-5 flex-shrink-0",children:Xe.jsxs("div",{"trae-inspector-start-line":"127","trae-inspector-start-column":"8","trae-inspector-end-line":"135","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[Xe.jsx("div",{"trae-inspector-start-line":"128","trae-inspector-start-column":"10","trae-inspector-end-line":"130","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center",children:Xe.jsx("span",{"trae-inspector-start-line":"129","trae-inspector-start-column":"12","trae-inspector-end-line":"129","trae-inspector-end-column":"80","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22S%22%2C%22textStartLine%22%3A%22129%22%2C%22textStartColumn%22%3A%2272%22%2C%22textEndLine%22%3A%22129%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-black font-bold text-sm md:text-base",children:"S"})}),Xe.jsxs("div",{"trae-inspector-start-line":"131","trae-inspector-start-column":"10","trae-inspector-end-line":"134","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[Xe.jsx("h1",{"trae-inspector-start-line":"132","trae-inspector-start-column":"12","trae-inspector-end-line":"132","trae-inspector-end-column":"112","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Spatial%20Reconstruct%22%2C%22textStartLine%22%3A%22132%22%2C%22textStartColumn%22%3A%2288%22%2C%22textEndLine%22%3A%22132%22%2C%22textEndColumn%22%3A%22107%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white font-semibold text-base md:text-lg leading-tight",children:"Spatial Reconstruct"}),Xe.jsx("p",{"trae-inspector-start-line":"133","trae-inspector-start-column":"12","trae-inspector-end-line":"133","trae-inspector-end-column":"88","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%A9%BA%E9%97%B4%E9%87%8D%E6%9E%84%20%C2%B7%20%E6%8A%8A%202D%20%E7%85%A7%E7%89%87%E5%8F%98%E6%88%90%E7%AB%8B%E4%BD%93%E4%B8%96%E7%95%8C%22%2C%22textStartLine%22%3A%22133%22%2C%22textStartColumn%22%3A%2264%22%2C%22textEndLine%22%3A%22133%22%2C%22textEndColumn%22%3A%2284%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/40 text-[10px] md:text-xs",children:"空间重构 · 把 2D 照片变成立体世界"})]})]})}),Xe.jsxs("main",{"trae-inspector-start-line":"139","trae-inspector-start-column":"6","trae-inspector-end-line":"164","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1 relative z-10 px-3 md:px-6 pb-32 flex flex-col items-center min-h-0 overflow-auto",children:[!r&&Xe.jsxs("div",{"trae-inspector-start-line":"142","trae-inspector-start-column":"10","trae-inspector-end-line":"149","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center mb-4 md:mb-8 max-w-2xl",children:[Xe.jsx("h2",{"trae-inspector-start-line":"143","trae-inspector-start-column":"12","trae-inspector-end-line":"147","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl md:text-3xl font-bold text-white mb-2 md:mb-3",children:Xe.jsx("span",{"trae-inspector-start-line":"144","trae-inspector-start-column":"14","trae-inspector-end-line":"146","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%8A%8A%E7%85%A7%E7%89%87%E5%8F%98%E6%88%90%E7%AB%8B%E4%BD%93%E7%A9%BA%E9%97%B4%22%2C%22textStartLine%22%3A%22144%22%2C%22textStartColumn%22%3A%22120%22%2C%22textEndLine%22%3A%22146%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"把照片变成立体空间"})}),Xe.jsx("p",{"trae-inspector-start-line":"148","trae-inspector-start-column":"12","trae-inspector-end-line":"148","trae-inspector-end-column":"92","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%8A%E4%BC%A0%E4%BB%BB%E6%84%8F%E7%85%A7%E7%89%87%20%E2%86%92%20%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90%E7%A9%BA%E9%97%B4%E6%B7%B1%E5%BA%A6%20%E2%86%92%20%E6%8B%96%E5%8A%A8%E6%9F%A5%E7%9C%8B%E8%A7%86%E5%B7%AE%E6%95%88%E6%9E%9C%22%2C%22textStartLine%22%3A%22148%22%2C%22textStartColumn%22%3A%2260%22%2C%22textEndLine%22%3A%22148%22%2C%22textEndColumn%22%3A%2288%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/50 text-xs md:text-sm",children:"上传任意照片 → 算法分析空间深度 → 拖动查看视差效果"})]}),Xe.jsx("div",{"trae-inspector-start-line":"153","trae-inspector-start-column":"8","trae-inspector-end-line":"157","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full max-w-3xl flex-1 min-h-0 flex items-center justify-center",children:Xe.jsx("div",{"trae-inspector-start-line":"154","trae-inspector-start-column":"10","trae-inspector-end-line":"156","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full max-h-full",children:Xe.jsx(MS,{})})}),o&&!r&&Xe.jsx("div",{"trae-inspector-start-line":"160","trae-inspector-start-column":"10","trae-inspector-end-line":"162","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%92%A1%20%E4%B8%8A%E4%BC%A0%E5%90%8E%E5%8F%AF%E6%8B%96%E5%8A%A8%E7%85%A7%E7%89%87%E4%BD%93%E9%AA%8C%E8%A7%86%E5%B7%AE%E6%95%88%E6%9E%9C%22%2C%22textStartLine%22%3A%22160%22%2C%22textStartColumn%22%3A%2280%22%2C%22textEndLine%22%3A%22162%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"md:hidden mt-4 text-center text-white/30 text-[11px]",children:"💡 上传后可拖动照片体验视差效果"})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Id="184",AS=0,Im=1,CS=2,Wl=1,RS=2,eo=3,Or=0,kn=1,Ji=2,tr=0,Js=1,Um=2,Fm=3,Om=4,bS=5,rs=100,PS=101,LS=102,DS=103,NS=104,IS=200,US=201,FS=202,OS=203,If=204,Uf=205,BS=206,kS=207,zS=208,HS=209,VS=210,GS=211,WS=212,XS=213,jS=214,Ff=0,Of=1,Bf=2,ta=3,kf=4,zf=5,Hf=6,Vf=7,i0=0,YS=1,$S=2,Li=0,r0=1,s0=2,a0=3,o0=4,l0=5,u0=6,c0=7,f0=300,us=301,na=302,Zc=303,Qc=304,lu=306,Gf=1e3,er=1001,Wf=1002,vn=1003,qS=1004,xl=1005,rn=1006,Jc=1007,as=1008,ni=1009,d0=1010,h0=1011,io=1012,Ud=1013,Ui=1014,bi=1015,sr=1016,Fd=1017,Od=1018,ro=1020,p0=35902,m0=35899,g0=1021,_0=1022,_i=1023,ar=1026,os=1027,v0=1028,Bd=1029,cs=1030,kd=1031,zd=1033,Xl=33776,jl=33777,Yl=33778,$l=33779,Xf=35840,jf=35841,Yf=35842,$f=35843,qf=36196,Kf=37492,Zf=37496,Qf=37488,Jf=37489,Ql=37490,ed=37491,td=37808,nd=37809,id=37810,rd=37811,sd=37812,ad=37813,od=37814,ld=37815,ud=37816,cd=37817,fd=37818,dd=37819,hd=37820,pd=37821,md=36492,gd=36494,_d=36495,vd=36283,xd=36284,Jl=36285,Sd=36286,KS=3200,Bm=0,ZS=1,Ur="",ti="srgb",eu="srgb-linear",tu="linear",Pt="srgb",Bs=7680,km=519,QS=512,JS=513,ey=514,Hd=515,ty=516,ny=517,Vd=518,iy=519,zm=35044,Hm="300 es",Pi=2e3,nu=2001;function ry(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function so(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sy(){const r=so("canvas");return r.style.display="block",r}const Vm={};function Gm(...r){const e="THREE."+r.shift();console.log(e,...r)}function x0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function rt(...r){r=x0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Et(...r){r=x0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function yd(...r){const e=r.join(" ");e in Vm||(Vm[e]=!0,rt(...r))}function ay(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const oy={[Ff]:Of,[Bf]:Hf,[kf]:Vf,[ta]:zf,[Of]:Ff,[Hf]:Bf,[Vf]:kf,[zf]:ta};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=Math.PI/180,Ed=180/Math.PI;function uo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function ly(r,e){return(r%e+e)%e}function tf(r,e,t){return(1-t)*r+t*e}function Ya(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Yd=class Yd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yd.prototype.isVector2=!0;let Nt=Yd;class oa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3],m=l[c+0],y=l[c+1],E=l[c+2],C=l[c+3];if(v!==C||h!==m||p!==y||_!==E){let x=h*m+p*y+_*E+v*C;x<0&&(m=-m,y=-y,E=-E,C=-C,x=-x);let S=1-f;if(x<.9995){const R=Math.acos(x),b=Math.sin(R);S=Math.sin(S*R)/b,f=Math.sin(f*R)/b,h=h*S+m*f,p=p*S+y*f,_=_*S+E*f,v=v*S+C*f}else{h=h*S+m*f,p=p*S+y*f,_=_*S+E*f,v=v*S+C*f;const R=1/Math.sqrt(h*h+p*p+_*_+v*v);h*=R,p*=R,_*=R,v*=R}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],h=s[o+1],p=s[o+2],_=s[o+3],v=l[c],m=l[c+1],y=l[c+2],E=l[c+3];return e[t]=f*E+_*v+h*y-p*m,e[t+1]=h*E+_*m+p*v-f*y,e[t+2]=p*E+_*y+f*m-h*v,e[t+3]=_*E-f*v-h*m-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),_=f(o/2),v=f(l/2),m=h(s/2),y=h(o/2),E=h(l/2);switch(c){case"XYZ":this._x=m*_*v+p*y*E,this._y=p*y*v-m*_*E,this._z=p*_*E+m*y*v,this._w=p*_*v-m*y*E;break;case"YXZ":this._x=m*_*v+p*y*E,this._y=p*y*v-m*_*E,this._z=p*_*E-m*y*v,this._w=p*_*v+m*y*E;break;case"ZXY":this._x=m*_*v-p*y*E,this._y=p*y*v+m*_*E,this._z=p*_*E+m*y*v,this._w=p*_*v-m*y*E;break;case"ZYX":this._x=m*_*v-p*y*E,this._y=p*y*v+m*_*E,this._z=p*_*E-m*y*v,this._w=p*_*v+m*y*E;break;case"YZX":this._x=m*_*v+p*y*E,this._y=p*y*v+m*_*E,this._z=p*_*E-m*y*v,this._w=p*_*v-m*y*E;break;case"XZY":this._x=m*_*v-p*y*E,this._y=p*y*v-m*_*E,this._z=p*_*E+m*y*v,this._w=p*_*v+m*y*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],_=t[6],v=t[10],m=s+f+v;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(_-h)*y,this._y=(l-p)*y,this._z=(c-o)*y}else if(s>f&&s>v){const y=2*Math.sqrt(1+s-f-v);this._w=(_-h)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+p)/y}else if(f>v){const y=2*Math.sqrt(1+f-s-v);this._w=(l-p)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+v-s-f);this._w=(c-o)/y,this._x=(l+p)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=s*_+c*f+o*p-l*h,this._y=o*_+c*h+l*f-s*p,this._z=l*_+c*p+s*h-o*f,this._w=c*_-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $d=class $d{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*s),_=2*(f*t-l*o),v=2*(l*s-c*t);return this.x=t+h*p+c*v-f*_,this.y=s+h*_+f*p-l*v,this.z=o+h*v+l*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$d.prototype.isVector3=!0;let ie=$d;const nf=new ie,Wm=new oa,qd=class qd{constructor(e,t,s,o,l,c,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p)}set(e,t,s,o,l,c,f,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=s,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],_=s[4],v=s[7],m=s[2],y=s[5],E=s[8],C=o[0],x=o[3],S=o[6],R=o[1],b=o[4],L=o[7],N=o[2],D=o[5],F=o[8];return l[0]=c*C+f*R+h*N,l[3]=c*x+f*b+h*D,l[6]=c*S+f*L+h*F,l[1]=p*C+_*R+v*N,l[4]=p*x+_*b+v*D,l[7]=p*S+_*L+v*F,l[2]=m*C+y*R+E*N,l[5]=m*x+y*b+E*D,l[8]=m*S+y*L+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*c*_-t*f*p-s*l*_+s*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],v=_*c-f*p,m=f*h-_*l,y=p*l-c*h,E=t*v+s*m+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(o*p-_*s)*C,e[2]=(f*s-o*c)*C,e[3]=m*C,e[4]=(_*t-o*h)*C,e[5]=(o*l-f*t)*C,e[6]=y*C,e[7]=(s*h-p*t)*C,e[8]=(c*t-s*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(rf.makeScale(e,t)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qd.prototype.isMatrix3=!0;let ut=qd;const rf=new ut,Xm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){const r={enabled:!0,workingColorSpace:eu,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Pt&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(o.r=ea(o.r),o.g=ea(o.g),o.b=ea(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?tu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return yd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return yd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[eu]:{primaries:e,whitePoint:s,transfer:tu,toXYZ:Xm,fromXYZ:jm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:Pt,toXYZ:Xm,fromXYZ:jm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const vt=uy();function nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ea(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class cy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ks===void 0&&(ks=so("canvas")),ks.width=e.width,ks.height=e.height;const o=ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ks}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=so("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=nr(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(nr(t[s]/255)*255):t[s]=nr(t[s]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fy=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(sf(o[c].image)):l.push(sf(o[c]))}else l=sf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function sf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let dy=0;const af=new ie;class xn extends ds{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,s=er,o=er,l=rn,c=as,f=_i,h=ni,p=xn.DEFAULT_ANISOTROPY,_=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=uo(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(af).x}get height(){return this.source.getSize(af).y}get depth(){return this.source.getSize(af).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gf:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gf:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=f0;xn.DEFAULT_ANISOTROPY=1;const Kd=class Kd{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],_=h[4],v=h[8],m=h[1],y=h[5],E=h[9],C=h[2],x=h[6],S=h[10];if(Math.abs(_-m)<.01&&Math.abs(v-C)<.01&&Math.abs(E-x)<.01){if(Math.abs(_+m)<.1&&Math.abs(v+C)<.1&&Math.abs(E+x)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,L=(y+1)/2,N=(S+1)/2,D=(_+m)/4,F=(v+C)/4,w=(E+x)/4;return b>L&&b>N?b<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(b),o=D/s,l=F/s):L>N?L<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),s=D/o,l=w/o):N<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),s=F/l,o=w/l),this.set(s,o,l,t),this}let R=Math.sqrt((x-E)*(x-E)+(v-C)*(v-C)+(m-_)*(m-_));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(v-C)/R,this.z=(m-_)/R,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kd.prototype.isVector4=!0;let Jt=Kd;class hy extends ds{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new xn(o),c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Gd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends hy{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class S0 extends xn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class py extends xn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=class iu{constructor(e,t,s,o,l,c,f,h,p,_,v,m,y,E,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p,_,v,m,y,E,C,x)}set(e,t,s,o,l,c,f,h,p,_,v,m,y,E,C,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=c,S[9]=f,S[13]=h,S[2]=p,S[6]=_,S[10]=v,S[14]=m,S[3]=y,S[7]=E,S[11]=C,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new iu().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/zs.setFromMatrixColumn(e,0).length(),l=1/zs.setFromMatrixColumn(e,1).length(),c=1/zs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const m=c*_,y=c*v,E=f*_,C=f*v;t[0]=h*_,t[4]=-h*v,t[8]=p,t[1]=y+E*p,t[5]=m-C*p,t[9]=-f*h,t[2]=C-m*p,t[6]=E+y*p,t[10]=c*h}else if(e.order==="YXZ"){const m=h*_,y=h*v,E=p*_,C=p*v;t[0]=m+C*f,t[4]=E*f-y,t[8]=c*p,t[1]=c*v,t[5]=c*_,t[9]=-f,t[2]=y*f-E,t[6]=C+m*f,t[10]=c*h}else if(e.order==="ZXY"){const m=h*_,y=h*v,E=p*_,C=p*v;t[0]=m-C*f,t[4]=-c*v,t[8]=E+y*f,t[1]=y+E*f,t[5]=c*_,t[9]=C-m*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const m=c*_,y=c*v,E=f*_,C=f*v;t[0]=h*_,t[4]=E*p-y,t[8]=m*p+C,t[1]=h*v,t[5]=C*p+m,t[9]=y*p-E,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,y=c*p,E=f*h,C=f*p;t[0]=h*_,t[4]=C-m*v,t[8]=E*v+y,t[1]=v,t[5]=c*_,t[9]=-f*_,t[2]=-p*_,t[6]=y*v+E,t[10]=m-C*v}else if(e.order==="XZY"){const m=c*h,y=c*p,E=f*h,C=f*p;t[0]=h*_,t[4]=-v,t[8]=p*_,t[1]=m*v+C,t[5]=c*_,t[9]=y*v-E,t[2]=E*v-y,t[6]=f*_,t[10]=C*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(my,e,gy)}lookAt(e,t,s){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),br.crossVectors(s,Wn),br.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),br.crossVectors(s,Wn)),br.normalize(),Sl.crossVectors(Wn,br),o[0]=br.x,o[4]=Sl.x,o[8]=Wn.x,o[1]=br.y,o[5]=Sl.y,o[9]=Wn.y,o[2]=br.z,o[6]=Sl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],_=s[1],v=s[5],m=s[9],y=s[13],E=s[2],C=s[6],x=s[10],S=s[14],R=s[3],b=s[7],L=s[11],N=s[15],D=o[0],F=o[4],w=o[8],U=o[12],j=o[1],B=o[5],q=o[9],ue=o[13],fe=o[2],H=o[6],Q=o[10],X=o[14],Y=o[3],le=o[7],oe=o[11],O=o[15];return l[0]=c*D+f*j+h*fe+p*Y,l[4]=c*F+f*B+h*H+p*le,l[8]=c*w+f*q+h*Q+p*oe,l[12]=c*U+f*ue+h*X+p*O,l[1]=_*D+v*j+m*fe+y*Y,l[5]=_*F+v*B+m*H+y*le,l[9]=_*w+v*q+m*Q+y*oe,l[13]=_*U+v*ue+m*X+y*O,l[2]=E*D+C*j+x*fe+S*Y,l[6]=E*F+C*B+x*H+S*le,l[10]=E*w+C*q+x*Q+S*oe,l[14]=E*U+C*ue+x*X+S*O,l[3]=R*D+b*j+L*fe+N*Y,l[7]=R*F+b*B+L*H+N*le,l[11]=R*w+b*q+L*Q+N*oe,l[15]=R*U+b*ue+L*X+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],_=e[2],v=e[6],m=e[10],y=e[14],E=e[3],C=e[7],x=e[11],S=e[15],R=h*y-p*m,b=f*y-p*v,L=f*m-h*v,N=c*y-p*_,D=c*m-h*_,F=c*v-f*_;return t*(C*R-x*b+S*L)-s*(E*R-x*N+S*D)+o*(E*b-C*N+S*F)-l*(E*L-C*D+x*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],v=e[9],m=e[10],y=e[11],E=e[12],C=e[13],x=e[14],S=e[15],R=t*f-s*c,b=t*h-o*c,L=t*p-l*c,N=s*h-o*f,D=s*p-l*f,F=o*p-l*h,w=_*C-v*E,U=_*x-m*E,j=_*S-y*E,B=v*x-m*C,q=v*S-y*C,ue=m*S-y*x,fe=R*ue-b*q+L*B+N*j-D*U+F*w;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/fe;return e[0]=(f*ue-h*q+p*B)*H,e[1]=(o*q-s*ue-l*B)*H,e[2]=(C*F-x*D+S*N)*H,e[3]=(m*D-v*F-y*N)*H,e[4]=(h*j-c*ue-p*U)*H,e[5]=(t*ue-o*j+l*U)*H,e[6]=(x*L-E*F-S*b)*H,e[7]=(_*F-m*L+y*b)*H,e[8]=(c*q-f*j+p*w)*H,e[9]=(s*j-t*q-l*w)*H,e[10]=(E*D-C*L+S*R)*H,e[11]=(v*L-_*D-y*R)*H,e[12]=(f*U-c*B-h*w)*H,e[13]=(t*B-s*U+o*w)*H,e[14]=(C*b-E*N-x*R)*H,e[15]=(_*N-v*b+m*R)*H,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,_=l*f;return this.set(p*c+s,p*f-o*h,p*h+o*f,0,p*f+o*h,_*f+s,_*h-o*c,0,p*h-o*f,_*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,_=c+c,v=f+f,m=l*p,y=l*_,E=l*v,C=c*_,x=c*v,S=f*v,R=h*p,b=h*_,L=h*v,N=s.x,D=s.y,F=s.z;return o[0]=(1-(C+S))*N,o[1]=(y+L)*N,o[2]=(E-b)*N,o[3]=0,o[4]=(y-L)*D,o[5]=(1-(m+S))*D,o[6]=(x+R)*D,o[7]=0,o[8]=(E+b)*F,o[9]=(x-R)*F,o[10]=(1-(m+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let c=zs.set(o[0],o[1],o[2]).length();const f=zs.set(o[4],o[5],o[6]).length(),h=zs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),di.copy(this);const p=1/c,_=1/f,v=1/h;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=_,di.elements[5]*=_,di.elements[6]*=_,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,t.setFromRotationMatrix(di),s.x=c,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,c,f=Pi,h=!1){const p=this.elements,_=2*l/(t-e),v=2*l/(s-o),m=(t+e)/(t-e),y=(s+o)/(s-o);let E,C;if(h)E=l/(c-l),C=c*l/(c-l);else if(f===Pi)E=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(f===nu)E=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Pi,h=!1){const p=this.elements,_=2/(t-e),v=2/(s-o),m=-(t+e)/(t-e),y=-(s+o)/(s-o);let E,C;if(h)E=1/(c-l),C=c/(c-l);else if(f===Pi)E=-2/(c-l),C=-(c+l)/(c-l);else if(f===nu)E=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=m,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};iu.prototype.isMatrix4=!0;let on=iu;const zs=new ie,di=new on,my=new ie(0,0,0),gy=new ie(1,1,1),br=new ie,Sl=new ie,Wn=new ie,Ym=new on,$m=new oa;class fs{constructor(e=0,t=0,s=0,o=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],_=o[9],v=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ym,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _y=0;const qm=new ie,Hs=new oa,$i=new on,yl=new ie,$a=new ie,vy=new ie,xy=new oa,Km=new ie(1,0,0),Zm=new ie(0,1,0),Qm=new ie(0,0,1),Jm={type:"added"},Sy={type:"removed"},Vs={type:"childadded",child:null},of={type:"childremoved",child:null};class jn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new ie,t=new fs,s=new oa,o=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new on},normalMatrix:{value:new ut}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Km,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Km,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?yl.copy(e):yl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt($a,yl,this.up):$i.lookAt(yl,$a,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix($i),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sy),of.child=e,this.dispatchEvent(of),of.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),_=c(e.images),v=c(e.shapes),m=c(e.skeletons),y=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),m.length>0&&(s.skeletons=m),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}jn.DEFAULT_UP=new ie(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class El extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const x=t.getJointPose(C,s),S=this._getHandJoint(p,C);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],m=_.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&m>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&m<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new El;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const E0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function uf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Dt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=vt.workingColorSpace){return this.r=e,this.g=t,this.b=s,vt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=vt.workingColorSpace){if(e=ly(e,1),t=xt(t,0,1),s=xt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=uf(c,l,e+1/3),this.g=uf(c,l,e),this.b=uf(c,l,e-1/3)}return vt.colorSpaceToWorking(this,o),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=E0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return vt.workingToColorSpace(wn.copy(this),e),Math.round(xt(wn.r*255,0,255))*65536+Math.round(xt(wn.g*255,0,255))*256+Math.round(xt(wn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(wn.copy(this),t);const s=wn.r,o=wn.g,l=wn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const _=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=_<=.5?v/(c+f):v/(2-c-f),c){case s:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-s)/v+2;break;case l:h=(s-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ti){vt.workingToColorSpace(wn.copy(this),e);const t=wn.r,s=wn.g,o=wn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(Ml);const s=tf(Pr.h,Ml.h,t),o=tf(Pr.s,Ml.s,t),l=tf(Pr.l,Ml.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Dt;Dt.NAMES=E0;class Ey extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hi=new ie,qi=new ie,cf=new ie,Ki=new ie,Gs=new ie,Ws=new ie,eg=new ie,ff=new ie,df=new ie,hf=new ie,pf=new Jt,mf=new Jt,gf=new Jt;class gi{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),hi.subVectors(e,t),o.cross(hi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){hi.subVectors(o,t),qi.subVectors(s,t),cf.subVectors(e,t);const c=hi.dot(hi),f=hi.dot(qi),h=hi.dot(cf),p=qi.dot(qi),_=qi.dot(cf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const m=1/v,y=(p*h-f*_)*m,E=(c*_-f*h)*m;return l.set(1-y-E,E,y)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,Ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ki.x),h.addScaledVector(c,Ki.y),h.addScaledVector(f,Ki.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,t),mf.fromBufferAttribute(e,s),gf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(pf,l.x),c.addScaledVector(mf,l.y),c.addScaledVector(gf,l.z),c}static isFrontFacing(e,t,s,o){return hi.subVectors(s,t),qi.subVectors(e,t),hi.cross(qi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),hi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return gi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;Gs.subVectors(o,s),Ws.subVectors(l,s),ff.subVectors(e,s);const h=Gs.dot(ff),p=Ws.dot(ff);if(h<=0&&p<=0)return t.copy(s);df.subVectors(e,o);const _=Gs.dot(df),v=Ws.dot(df);if(_>=0&&v<=_)return t.copy(o);const m=h*v-_*p;if(m<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(s).addScaledVector(Gs,c);hf.subVectors(e,l);const y=Gs.dot(hf),E=Ws.dot(hf);if(E>=0&&y<=E)return t.copy(l);const C=y*p-h*E;if(C<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Ws,f);const x=_*E-y*v;if(x<=0&&v-_>=0&&y-E>=0)return eg.subVectors(l,o),f=(v-_)/(v-_+(y-E)),t.copy(o).addScaledVector(eg,f);const S=1/(x+C+m);return c=C*S,f=m*S,t.copy(s).addScaledVector(Gs,c).addScaledVector(Ws,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class co{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,pi):pi.fromBufferAttribute(l,c),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tl.copy(s.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),wl.subVectors(this.max,qa),Xs.subVectors(e.a,qa),js.subVectors(e.b,qa),Ys.subVectors(e.c,qa),Lr.subVectors(js,Xs),Dr.subVectors(Ys,js),Jr.subVectors(Xs,Ys);let t=[0,-Lr.z,Lr.y,0,-Dr.z,Dr.y,0,-Jr.z,Jr.y,Lr.z,0,-Lr.x,Dr.z,0,-Dr.x,Jr.z,0,-Jr.x,-Lr.y,Lr.x,0,-Dr.y,Dr.x,0,-Jr.y,Jr.x,0];return!_f(t,Xs,js,Ys,wl)||(t=[1,0,0,0,1,0,0,0,1],!_f(t,Xs,js,Ys,wl))?!1:(Al.crossVectors(Lr,Dr),t=[Al.x,Al.y,Al.z],_f(t,Xs,js,Ys,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],pi=new ie,Tl=new co,Xs=new ie,js=new ie,Ys=new ie,Lr=new ie,Dr=new ie,Jr=new ie,qa=new ie,wl=new ie,Al=new ie,es=new ie;function _f(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){es.fromArray(r,l);const f=o.x*Math.abs(es.x)+o.y*Math.abs(es.y)+o.z*Math.abs(es.z),h=e.dot(es),p=t.dot(es),_=s.dot(es);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const nn=new ie,Cl=new Nt;let My=0;class Ni extends ds{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=zm,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ya(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Bn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ya(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ya(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ya(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ya(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),s=Bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),s=Bn(s,this.array),o=Bn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),s=Bn(s,this.array),o=Bn(o,this.array),l=Bn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class M0 extends Ni{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class T0 extends Ni{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class ir extends Ni{constructor(e,t,s){super(new Float32Array(e),t,s)}}const Ty=new co,Ka=new ie,vf=new ie;class Wd{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Ty.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);const t=Ka.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Ka,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(vf)),this.expandByPoint(Ka.copy(e.center).sub(vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wy=0;const ei=new on,xf=new jn,$s=new ie,Xn=new co,Za=new co,hn=new ie;class ur extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ry(e)?T0:M0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ut().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ir(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Za.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors(Xn.min,Za.min),Xn.expandByPoint(hn),hn.addVectors(Xn.max,Za.max),Xn.expandByPoint(hn)):(Xn.expandByPoint(Za.min),Xn.expandByPoint(Za.max))}Xn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(hn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)hn.fromBufferAttribute(f,p),h&&($s.fromBufferAttribute(e,p),hn.add($s)),o=Math.max(o,s.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<s.count;w++)f[w]=new ie,h[w]=new ie;const p=new ie,_=new ie,v=new ie,m=new Nt,y=new Nt,E=new Nt,C=new ie,x=new ie;function S(w,U,j){p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,U),v.fromBufferAttribute(s,j),m.fromBufferAttribute(l,w),y.fromBufferAttribute(l,U),E.fromBufferAttribute(l,j),_.sub(p),v.sub(p),y.sub(m),E.sub(m);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(B),x.copy(v).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(B),f[w].add(C),f[U].add(C),f[j].add(C),h[w].add(x),h[U].add(x),h[j].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,U=R.length;w<U;++w){const j=R[w],B=j.start,q=j.count;for(let ue=B,fe=B+q;ue<fe;ue+=3)S(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const b=new ie,L=new ie,N=new ie,D=new ie;function F(w){N.fromBufferAttribute(o,w),D.copy(N);const U=f[w];b.copy(U),b.sub(N.multiplyScalar(N.dot(U))).normalize(),L.crossVectors(D,U);const B=L.dot(h[w])<0?-1:1;c.setXYZW(w,b.x,b.y,b.z,B)}for(let w=0,U=R.length;w<U;++w){const j=R[w],B=j.start,q=j.count;for(let ue=B,fe=B+q;ue<fe;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let m=0,y=s.count;m<y;m++)s.setXYZ(m,0,0,0);const o=new ie,l=new ie,c=new ie,f=new ie,h=new ie,p=new ie,_=new ie,v=new ie;if(e)for(let m=0,y=e.count;m<y;m+=3){const E=e.getX(m+0),C=e.getX(m+1),x=e.getX(m+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,x),_.subVectors(c,l),v.subVectors(o,l),_.cross(v),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),f.add(_),h.add(_),p.add(_),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(C,h.x,h.y,h.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),_.subVectors(c,l),v.subVectors(o,l),_.cross(v),s.setXYZ(m+0,_.x,_.y,_.z),s.setXYZ(m+1,_.x,_.y,_.z),s.setXYZ(m+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,v=f.normalized,m=new p.constructor(h.length*_);let y=0,E=0;for(let C=0,x=h.length;C<x;C++){f.isInterleavedBufferAttribute?y=h[C]*f.data.stride+f.offset:y=h[C]*_;for(let S=0;S<_;S++)m[E++]=p[y++]}return new Ni(m,_,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,v=p.length;_<v;_++){const m=p[_],y=e(m,s);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let v=0,m=p.length;v<m;v++){const y=p[v];_.push(y.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],v=l[p];for(let m=0,y=v.length;m<y;m++)_.push(v[m].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ay=0;class uu extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=Js,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Uf,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(s.blending=this.blending),this.side!==Or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==If&&(s.blendSrc=this.blendSrc),this.blendDst!==Uf&&(s.blendDst=this.blendDst),this.blendEquation!==rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==km&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new ie,Sf=new ie,Rl=new ie,Nr=new ie,yf=new ie,bl=new ie,Ef=new ie;class Cy{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Sf.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(Sf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Rl),f=Nr.dot(this.direction),h=-Nr.dot(Rl),p=Nr.lengthSq(),_=Math.abs(1-c*c);let v,m,y,E;if(_>0)if(v=c*h-f,m=c*f-h,E=l*_,v>=0)if(m>=-E)if(m<=E){const C=1/_;v*=C,m*=C,y=v*(v+c*m+2*f)+m*(c*v+m+2*h)+p}else m=l,v=Math.max(0,-(c*m+f)),y=-v*v+m*(m+2*h)+p;else m=-l,v=Math.max(0,-(c*m+f)),y=-v*v+m*(m+2*h)+p;else m<=-E?(v=Math.max(0,-(-c*l+f)),m=v>0?-l:Math.min(Math.max(-l,-h),l),y=-v*v+m*(m+2*h)+p):m<=E?(v=0,m=Math.min(Math.max(-l,-h),l),y=m*(m+2*h)+p):(v=Math.max(0,-(c*l+f)),m=v>0?l:Math.min(Math.max(-l,-h),l),y=-v*v+m*(m+2*h)+p);else m=c>0?-l:l,v=Math.max(0,-(c*m+f)),y=-v*v+m*(m+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Sf).addScaledVector(Rl,m),y}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const s=Qi.dot(this.direction),o=Qi.dot(Qi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,m=this.origin;return p>=0?(s=(e.min.x-m.x)*p,o=(e.max.x-m.x)*p):(s=(e.max.x-m.x)*p,o=(e.min.x-m.x)*p),_>=0?(l=(e.min.y-m.y)*_,c=(e.max.y-m.y)*_):(l=(e.max.y-m.y)*_,c=(e.min.y-m.y)*_),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-m.z)*v,h=(e.max.z-m.z)*v):(f=(e.max.z-m.z)*v,h=(e.min.z-m.z)*v),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,s,o,l){yf.subVectors(t,e),bl.subVectors(s,e),Ef.crossVectors(yf,bl);let c=this.direction.dot(Ef),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Nr.subVectors(this.origin,e);const h=f*this.direction.dot(bl.crossVectors(Nr,bl));if(h<0)return null;const p=f*this.direction.dot(yf.cross(Nr));if(p<0||h+p>c)return null;const _=-f*Nr.dot(Ef);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class w0 extends uu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tg=new on,ts=new Cy,Pl=new Wd,ng=new ie,Ll=new ie,Dl=new ie,Nl=new ie,Mf=new ie,Il=new ie,ig=new ie,Ul=new ie;class Fi extends jn{constructor(e=new ur,t=new w0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Il.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],v=l[h];_!==0&&(Mf.fromBufferAttribute(v,e),c?Il.addScaledVector(Mf,_):Il.addScaledVector(Mf.sub(t),_))}t.add(Il)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pl.copy(s.boundingSphere),Pl.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(Pl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Pl,ng)===null||ts.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(l).invert(),ts.copy(e.ray).applyMatrix4(tg),!(s.boundingBox!==null&&ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,m=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,C=m.length;E<C;E++){const x=m[E],S=c[x.materialIndex],R=Math.max(x.start,y.start),b=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let L=R,N=b;L<N;L+=3){const D=f.getX(L),F=f.getX(L+1),w=f.getX(L+2);o=Fl(this,S,e,s,p,_,v,D,F,w),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(f.count,y.start+y.count);for(let x=E,S=C;x<S;x+=3){const R=f.getX(x),b=f.getX(x+1),L=f.getX(x+2);o=Fl(this,c,e,s,p,_,v,R,b,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,C=m.length;E<C;E++){const x=m[E],S=c[x.materialIndex],R=Math.max(x.start,y.start),b=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let L=R,N=b;L<N;L+=3){const D=L,F=L+1,w=L+2;o=Fl(this,S,e,s,p,_,v,D,F,w),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let x=E,S=C;x<S;x+=3){const R=x,b=x+1,L=x+2;o=Fl(this,c,e,s,p,_,v,R,b,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Ry(r,e,t,s,o,l,c,f){let h;if(e.side===kn?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===Or,f),h===null)return null;Ul.copy(f),Ul.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ul);return p<t.near||p>t.far?null:{distance:p,point:Ul.clone(),object:r}}function Fl(r,e,t,s,o,l,c,f,h,p){r.getVertexPosition(f,Ll),r.getVertexPosition(h,Dl),r.getVertexPosition(p,Nl);const _=Ry(r,e,t,s,Ll,Dl,Nl,ig);if(_){const v=new ie;gi.getBarycoord(ig,Ll,Dl,Nl,v),o&&(_.uv=gi.getInterpolatedAttribute(o,f,h,p,v,new Nt)),l&&(_.uv1=gi.getInterpolatedAttribute(l,f,h,p,v,new Nt)),c&&(_.normal=gi.getInterpolatedAttribute(c,f,h,p,v,new ie),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const m={a:f,b:h,c:p,normal:new ie,materialIndex:0};gi.getNormal(Ll,Dl,Nl,m.normal),_.face=m,_.barycoord=v}return _}class by extends xn{constructor(e=null,t=1,s=1,o,l,c,f,h,p=vn,_=vn,v,m){super(null,c,f,h,p,_,o,l,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=new ie,Py=new ie,Ly=new ut;class is{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Tf.subVectors(s,t).cross(Py.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(Tf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Ly.getNormalMatrix(e),o=this.coplanarPoint(Tf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Wd,Dy=new Nt(.5,.5),Ol=new ie;class A0{constructor(e=new is,t=new is,s=new is,o=new is,l=new is,c=new is){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Pi,s=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],_=l[4],v=l[5],m=l[6],y=l[7],E=l[8],C=l[9],x=l[10],S=l[11],R=l[12],b=l[13],L=l[14],N=l[15];if(o[0].setComponents(p-c,y-_,S-E,N-R).normalize(),o[1].setComponents(p+c,y+_,S+E,N+R).normalize(),o[2].setComponents(p+f,y+v,S+C,N+b).normalize(),o[3].setComponents(p-f,y-v,S-C,N-b).normalize(),s)o[4].setComponents(h,m,x,L).normalize(),o[5].setComponents(p-h,y-m,S-x,N-L).normalize();else if(o[4].setComponents(p-h,y-m,S-x,N-L).normalize(),t===Pi)o[5].setComponents(p+h,y+m,S+x,N+L).normalize();else if(t===nu)o[5].setComponents(h,m,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=Dy.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Ol.x=o.normal.x>0?e.max.x:e.min.x,Ol.y=o.normal.y>0?e.max.y:e.min.y,Ol.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C0 extends xn{constructor(e=[],t=us,s,o,l,c,f,h,p,_){super(e,t,s,o,l,c,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ny extends xn{constructor(e,t,s,o,l,c,f,h,p){super(e,t,s,o,l,c,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ia extends xn{constructor(e,t,s=Ui,o,l,c,f=vn,h=vn,p,_=ar,v=1){if(_!==ar&&_!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,l,c,f,h,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Iy extends ia{constructor(e,t=Ui,s=us,o,l,c=vn,f=vn,h,p=ar){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,t,s,o,l,c,f,h,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class R0 extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fo extends ur{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],_=[],v=[];let m=0,y=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new ir(p,3)),this.setAttribute("normal",new ir(_,3)),this.setAttribute("uv",new ir(v,2));function E(C,x,S,R,b,L,N,D,F,w,U){const j=L/F,B=N/w,q=L/2,ue=N/2,fe=D/2,H=F+1,Q=w+1;let X=0,Y=0;const le=new ie;for(let oe=0;oe<Q;oe++){const O=oe*B-ue;for(let J=0;J<H;J++){const Fe=J*j-q;le[C]=Fe*R,le[x]=O*b,le[S]=fe,p.push(le.x,le.y,le.z),le[C]=0,le[x]=0,le[S]=D>0?1:-1,_.push(le.x,le.y,le.z),v.push(J/F),v.push(1-oe/w),X+=1}}for(let oe=0;oe<w;oe++)for(let O=0;O<F;O++){const J=m+O+H*oe,Fe=m+O+H*(oe+1),Ve=m+(O+1)+H*(oe+1),Ne=m+(O+1)+H*oe;h.push(J,Fe,Ne),h.push(Fe,Ve,Ne),Y+=6}f.addGroup(y,Y,U),y+=Y,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ho extends ur{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,_=h+1,v=e/f,m=t/h,y=[],E=[],C=[],x=[];for(let S=0;S<_;S++){const R=S*m-c;for(let b=0;b<p;b++){const L=b*v-l;E.push(L,-R,0),C.push(0,0,1),x.push(b/f),x.push(1-S/h)}}for(let S=0;S<h;S++)for(let R=0;R<f;R++){const b=R+p*S,L=R+p*(S+1),N=R+1+p*(S+1),D=R+1+p*S;y.push(b,L,D),y.push(L,N,D)}this.setIndex(y),this.setAttribute("position",new ir(E,3)),this.setAttribute("normal",new ir(C,3)),this.setAttribute("uv",new ir(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.widthSegments,e.heightSegments)}}function ra(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(rg(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(rg(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const s=ra(r[t]);for(const o in s)e[o]=s[o]}return e}function rg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Uy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function b0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Fy={clone:ra,merge:bn};var Oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,By=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends uu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oy,this.fragmentShader=By,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=Uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class ky extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zy extends uu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hy extends uu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(sg(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!sg(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function sg(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Vy{constructor(e,t,s){const o=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this._abortController=null,this.itemStart=function(_){f++,l===!1&&o.onStart!==void 0&&o.onStart(_,c,f),l=!0},this.itemEnd=function(_){c++,o.onProgress!==void 0&&o.onProgress(_,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(_){o.onError!==void 0&&o.onError(_)},this.resolveURL=function(_){return h?h(_):_},this.setURLModifier=function(_){return h=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,m=p.length;v<m;v+=2){const y=p[v],E=p[v+1];if(y.global&&(y.lastIndex=0),y.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Gy=new Vy;class Xd{constructor(e){this.manager=e!==void 0?e:Gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xd.DEFAULT_MATERIAL_NAME="__DEFAULT";const qs=new WeakMap;class Wy extends Xd{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=wf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=qs.get(c);v===void 0&&(v=[],qs.set(c,v)),v.push({onLoad:t,onError:o})}return c}const f=so("img");function h(){_(),t&&t(this);const v=qs.get(this)||[];for(let m=0;m<v.length;m++){const y=v[m];y.onLoad&&y.onLoad(this)}qs.delete(this),l.manager.itemEnd(e)}function p(v){_(),o&&o(v),wf.remove(`image:${e}`);const m=qs.get(this)||[];for(let y=0;y<m.length;y++){const E=m[y];E.onError&&E.onError(v)}qs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function _(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),wf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class Xy extends Xd{constructor(e){super(e)}load(e,t,s,o){const l=new xn,c=new Wy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}const Bl=new ie,kl=new oa,Ai=new ie;class P0 extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,kl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,kl,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Bl,kl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,kl,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new ie,ag=new Nt,og=new Nt;class mi extends P0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,ag,og),t.subVectors(og,ag)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ef*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/p,o*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jd extends P0{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ks=-90,Zs=1;class jy extends jn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new mi(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const l=new mi(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const c=new mi(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const f=new mi(Ks,Zs,e,t);f.layers=this.layers,this.add(f);const h=new mi(Ks,Zs,e,t);h.layers=this.layers,this.add(h);const p=new mi(Ks,Zs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Pi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===nu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,_]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(v,m,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Yy extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zd=class Zd{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Zd.prototype.isMatrix2=!0;let lg=Zd;function ug(r,e,t,s){const o=$y(s);switch(t){case g0:return r*e;case v0:return r*e/o.components*o.byteLength;case Bd:return r*e/o.components*o.byteLength;case cs:return r*e*2/o.components*o.byteLength;case kd:return r*e*2/o.components*o.byteLength;case _0:return r*e*3/o.components*o.byteLength;case _i:return r*e*4/o.components*o.byteLength;case zd:return r*e*4/o.components*o.byteLength;case Xl:case jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jf:case $f:return Math.max(r,16)*Math.max(e,8)/4;case Xf:case Yf:return Math.max(r,8)*Math.max(e,8)/2;case qf:case Kf:case Qf:case Jf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zf:case Ql:case ed:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case id:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case sd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ad:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ld:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ud:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case fd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case pd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case md:case gd:case _d:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vd:case xd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Jl:case Sd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $y(r){switch(r){case ni:case d0:return{byteLength:1,components:1};case io:case h0:case sr:return{byteLength:2,components:1};case Fd:case Od:return{byteLength:2,components:4};case Ui:case Ud:case bi:return{byteLength:4,components:1};case p0:case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L0(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function qy(r){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,v=p.byteLength,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,h,p){const _=h.array,v=h.updateRanges;if(r.bindBuffer(p,f),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,E)=>y.start-E.start);let m=0;for(let y=1;y<v.length;y++){const E=v[m],C=v[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++m,v[m]=C)}v.length=m+1;for(let y=0,E=v.length;y<E;y++){const C=v[y];r.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,VE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$E=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Ky,alphahash_pars_fragment:Zy,alphamap_fragment:Qy,alphamap_pars_fragment:Jy,alphatest_fragment:eE,alphatest_pars_fragment:tE,aomap_fragment:nE,aomap_pars_fragment:iE,batching_pars_vertex:rE,batching_vertex:sE,begin_vertex:aE,beginnormal_vertex:oE,bsdfs:lE,iridescence_fragment:uE,bumpmap_pars_fragment:cE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:dE,clipping_planes_pars_vertex:hE,clipping_planes_vertex:pE,color_fragment:mE,color_pars_fragment:gE,color_pars_vertex:_E,color_vertex:vE,common:xE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:yE,displacementmap_pars_vertex:EE,displacementmap_vertex:ME,emissivemap_fragment:TE,emissivemap_pars_fragment:wE,colorspace_fragment:AE,colorspace_pars_fragment:CE,envmap_fragment:RE,envmap_common_pars_fragment:bE,envmap_pars_fragment:PE,envmap_pars_vertex:LE,envmap_physical_pars_fragment:VE,envmap_vertex:DE,fog_vertex:NE,fog_pars_vertex:IE,fog_fragment:UE,fog_pars_fragment:FE,gradientmap_pars_fragment:OE,lightmap_pars_fragment:BE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:zE,lights_pars_begin:HE,lights_toon_fragment:GE,lights_toon_pars_fragment:WE,lights_phong_fragment:XE,lights_phong_pars_fragment:jE,lights_physical_fragment:YE,lights_physical_pars_fragment:$E,lights_fragment_begin:qE,lights_fragment_maps:KE,lights_fragment_end:ZE,lightprobes_pars_fragment:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:eM,logdepthbuf_pars_vertex:tM,logdepthbuf_vertex:nM,map_fragment:iM,map_pars_fragment:rM,map_particle_fragment:sM,map_particle_pars_fragment:aM,metalnessmap_fragment:oM,metalnessmap_pars_fragment:lM,morphinstance_vertex:uM,morphcolor_vertex:cM,morphnormal_vertex:fM,morphtarget_pars_vertex:dM,morphtarget_vertex:hM,normal_fragment_begin:pM,normal_fragment_maps:mM,normal_pars_fragment:gM,normal_pars_vertex:_M,normal_vertex:vM,normalmap_pars_fragment:xM,clearcoat_normal_fragment_begin:SM,clearcoat_normal_fragment_maps:yM,clearcoat_pars_fragment:EM,iridescence_pars_fragment:MM,opaque_fragment:TM,packing:wM,premultiplied_alpha_fragment:AM,project_vertex:CM,dithering_fragment:RM,dithering_pars_fragment:bM,roughnessmap_fragment:PM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:NM,shadowmap_vertex:IM,shadowmask_pars_fragment:UM,skinbase_vertex:FM,skinning_pars_vertex:OM,skinning_vertex:BM,skinnormal_vertex:kM,specularmap_fragment:zM,specularmap_pars_fragment:HM,tonemapping_fragment:VM,tonemapping_pars_fragment:GM,transmission_fragment:WM,transmission_pars_fragment:XM,uv_pars_fragment:jM,uv_pars_vertex:YM,uv_vertex:$M,worldpos_vertex:qM,background_vert:KM,background_frag:ZM,backgroundCube_vert:QM,backgroundCube_frag:JM,cube_vert:e2,cube_frag:t2,depth_vert:n2,depth_frag:i2,distance_vert:r2,distance_frag:s2,equirect_vert:a2,equirect_frag:o2,linedashed_vert:l2,linedashed_frag:u2,meshbasic_vert:c2,meshbasic_frag:f2,meshlambert_vert:d2,meshlambert_frag:h2,meshmatcap_vert:p2,meshmatcap_frag:m2,meshnormal_vert:g2,meshnormal_frag:_2,meshphong_vert:v2,meshphong_frag:x2,meshphysical_vert:S2,meshphysical_frag:y2,meshtoon_vert:E2,meshtoon_frag:M2,points_vert:T2,points_frag:w2,shadow_vert:A2,shadow_frag:C2,sprite_vert:R2,sprite_frag:b2},De={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ri={basic:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:bn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:bn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:bn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:bn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:bn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:bn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:bn([De.common,De.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:bn([De.lights,De.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ri.physical={uniforms:bn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const zl={r:0,b:0,g:0},P2=new on,D0=new ut;D0.set(-1,0,0,0,1,0,0,0,1);function L2(r,e,t,s,o,l){const c=new Dt(0);let f=o===!0?0:1,h,p,_=null,v=0,m=null;function y(R){let b=R.isScene===!0?R.background:null;if(b&&b.isTexture){const L=R.backgroundBlurriness>0;b=e.get(b,L)}return b}function E(R){let b=!1;const L=y(R);L===null?x(c,f):L&&L.isColor&&(x(L,1),b=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(R,b){const L=y(b);L&&(L.isCubeTexture||L.mapping===lu)?(p===void 0&&(p=new Fi(new fo(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:ra(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(P2.makeRotationFromEuler(b.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(D0),p.material.toneMapped=vt.getTransfer(L.colorSpace)!==Pt,(_!==L||v!==L.version||m!==r.toneMapping)&&(p.material.needsUpdate=!0,_=L,v=L.version,m=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Fi(new ho(2,2),new xi({name:"BackgroundMaterial",uniforms:ra(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=vt.getTransfer(L.colorSpace)!==Pt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,_=L,v=L.version,m=r.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,b){R.getRGB(zl,b0(r)),t.buffers.color.setClear(zl.r,zl.g,zl.b,b,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,b=1){c.set(R),f=b,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(c,f)},render:E,addToRenderList:C,dispose:S}}function D2(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=m(null);let l=o,c=!1;function f(B,q,ue,fe,H){let Q=!1;const X=v(B,fe,ue,q);l!==X&&(l=X,p(l.object)),Q=y(B,fe,ue,H),Q&&E(B,fe,ue,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(Q||c)&&(c=!1,L(B,q,ue,fe),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function h(){return r.createVertexArray()}function p(B){return r.bindVertexArray(B)}function _(B){return r.deleteVertexArray(B)}function v(B,q,ue,fe){const H=fe.wireframe===!0;let Q=s[q.id];Q===void 0&&(Q={},s[q.id]=Q);const X=B.isInstancedMesh===!0?B.id:0;let Y=Q[X];Y===void 0&&(Y={},Q[X]=Y);let le=Y[ue.id];le===void 0&&(le={},Y[ue.id]=le);let oe=le[H];return oe===void 0&&(oe=m(h()),le[H]=oe),oe}function m(B){const q=[],ue=[],fe=[];for(let H=0;H<t;H++)q[H]=0,ue[H]=0,fe[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ue,attributeDivisors:fe,object:B,attributes:{},index:null}}function y(B,q,ue,fe){const H=l.attributes,Q=q.attributes;let X=0;const Y=ue.getAttributes();for(const le in Y)if(Y[le].location>=0){const O=H[le];let J=Q[le];if(J===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;X++}return l.attributesNum!==X||l.index!==fe}function E(B,q,ue,fe){const H={},Q=q.attributes;let X=0;const Y=ue.getAttributes();for(const le in Y)if(Y[le].location>=0){let O=Q[le];O===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(O=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(O=B.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),H[le]=J,X++}l.attributes=H,l.attributesNum=X,l.index=fe}function C(){const B=l.newAttributes;for(let q=0,ue=B.length;q<ue;q++)B[q]=0}function x(B){S(B,0)}function S(B,q){const ue=l.newAttributes,fe=l.enabledAttributes,H=l.attributeDivisors;ue[B]=1,fe[B]===0&&(r.enableVertexAttribArray(B),fe[B]=1),H[B]!==q&&(r.vertexAttribDivisor(B,q),H[B]=q)}function R(){const B=l.newAttributes,q=l.enabledAttributes;for(let ue=0,fe=q.length;ue<fe;ue++)q[ue]!==B[ue]&&(r.disableVertexAttribArray(ue),q[ue]=0)}function b(B,q,ue,fe,H,Q,X){X===!0?r.vertexAttribIPointer(B,q,ue,H,Q):r.vertexAttribPointer(B,q,ue,fe,H,Q)}function L(B,q,ue,fe){C();const H=fe.attributes,Q=ue.getAttributes(),X=q.defaultAttributeValues;for(const Y in Q){const le=Q[Y];if(le.location>=0){let oe=H[Y];if(oe===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),oe!==void 0){const O=oe.normalized,J=oe.itemSize,Fe=e.get(oe);if(Fe===void 0)continue;const Ve=Fe.buffer,Ne=Fe.type,ae=Fe.bytesPerElement,Se=Ne===r.INT||Ne===r.UNSIGNED_INT||oe.gpuType===Ud;if(oe.isInterleavedBufferAttribute){const me=oe.data,Ie=me.stride,Qe=oe.offset;if(me.isInstancedInterleavedBuffer){for(let Je=0;Je<le.locationSize;Je++)S(le.location+Je,me.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Je=0;Je<le.locationSize;Je++)x(le.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let Je=0;Je<le.locationSize;Je++)b(le.location+Je,J/le.locationSize,Ne,O,Ie*ae,(Qe+J/le.locationSize*Je)*ae,Se)}else{if(oe.isInstancedBufferAttribute){for(let me=0;me<le.locationSize;me++)S(le.location+me,oe.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<le.locationSize;me++)x(le.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let me=0;me<le.locationSize;me++)b(le.location+me,J/le.locationSize,Ne,O,J*ae,J/le.locationSize*me*ae,Se)}}else if(X!==void 0){const O=X[Y];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(le.location,O);break;case 3:r.vertexAttrib3fv(le.location,O);break;case 4:r.vertexAttrib4fv(le.location,O);break;default:r.vertexAttrib1fv(le.location,O)}}}}R()}function N(){U();for(const B in s){const q=s[B];for(const ue in q){const fe=q[ue];for(const H in fe){const Q=fe[H];for(const X in Q)_(Q[X].object),delete Q[X];delete fe[H]}}delete s[B]}}function D(B){if(s[B.id]===void 0)return;const q=s[B.id];for(const ue in q){const fe=q[ue];for(const H in fe){const Q=fe[H];for(const X in Q)_(Q[X].object),delete Q[X];delete fe[H]}}delete s[B.id]}function F(B){for(const q in s){const ue=s[q];for(const fe in ue){const H=ue[fe];if(H[B.id]===void 0)continue;const Q=H[B.id];for(const X in Q)_(Q[X].object),delete Q[X];delete H[B.id]}}}function w(B){for(const q in s){const ue=s[q],fe=B.isInstancedMesh===!0?B.id:0,H=ue[fe];if(H!==void 0){for(const Q in H){const X=H[Q];for(const Y in X)_(X[Y].object),delete X[Y];delete H[Q]}delete ue[fe],Object.keys(ue).length===0&&delete s[q]}}}function U(){j(),c=!0,l!==o&&(l=o,p(l.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:j,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:x,disableUnusedAttributes:R}}function N2(r,e,t){let s;function o(h){s=h}function l(h,p){r.drawArrays(s,h,p),t.update(p,s,1)}function c(h,p,_){_!==0&&(r.drawArraysInstanced(s,h,p,_),t.update(p,s,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,p,0,_);let m=0;for(let y=0;y<_;y++)m+=p[y];t.update(m,s,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function I2(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==_i&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const w=F===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ni&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==bi&&!w)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(rt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:L,maxSamples:N,samples:D}}function U2(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new is,f=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const y=v.length!==0||m||s!==0||o;return o=m,s=v.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,m){t=_(v,m,0)},this.setState=function(v,m,y){const E=v.clippingPlanes,C=v.clipIntersection,x=v.clipShadows,S=r.get(v);if(!o||E===null||E.length===0||l&&!x)l?_(null):p();else{const R=l?0:s,b=R*4;let L=S.clippingState||null;h.value=L,L=_(E,m,b,y);for(let N=0;N!==b;++N)L[N]=t[N];S.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,m,y,E){const C=v!==null?v.length:0;let x=null;if(C!==0){if(x=h.value,E!==!0||x===null){const S=y+C*4,R=m.matrixWorldInverse;f.getNormalMatrix(R),(x===null||x.length<S)&&(x=new Float32Array(S));for(let b=0,L=y;b!==C;++b,L+=4)c.copy(v[b]).applyMatrix4(R,f),c.normal.toArray(x,L),x[L+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}const Fr=4,cg=[.125,.215,.35,.446,.526,.582],ss=20,F2=256,Qa=new jd,fg=new Dt;let Af=null,Cf=0,Rf=0,bf=!1;const O2=new ie;class dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:c=256,position:f=O2}=l;Af=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Cf,Rf),this._renderer.xr.enabled=bf,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:sr,format:_i,colorSpace:eu,depthBuffer:!1},o=hg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hg(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=B2(l)),this._blurMaterial=z2(l,e,t),this._ggxMaterial=k2(l,e,t)}return o}_compileMaterial(e){const t=new Fi(new ur,e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,s,o,l){const h=new mi(90,1,t,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(fg),v.toneMapping=Li,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new fo,new w0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let S=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,S=!0):(x.color.copy(fg),S=!0);for(let b=0;b<6;b++){const L=b%3;L===0?(h.up.set(0,p[b],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[b],l.y,l.z)):L===1?(h.up.set(0,0,p[b]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[b],l.z)):(h.up.set(0,p[b],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[b]));const N=this._cubeSize;Qs(o,L*N,b>2?N:0,N,N),v.setRenderTarget(o),S&&v.render(C,h),v.render(e,h)}v.toneMapping=y,v.autoClear=m,e.background=R}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===us||e.mapping===na;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Qs(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,Qa)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,p=s/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),m=0+p*1.25,y=v*m,{_lodMax:E}=this,C=this._sizeLods[s],x=3*C*(s>E-Fr?s-E+Fr:0),S=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=E-t,Qs(l,x,S,3*C,2*C),o.setRenderTarget(l),o.render(f,Qa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-s,Qs(e,x,S,3*C,2*C),o.setRenderTarget(e),o.render(f,Qa)}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const m=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ss-1),C=l/E,x=isFinite(l)?1+Math.floor(_*C):ss;x>ss&&rt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ss}`);const S=[];let R=0;for(let F=0;F<ss;++F){const w=F/C,U=Math.exp(-w*w/2);S.push(U),F===0?R+=U:F<x&&(R+=2*U)}for(let F=0;F<S.length;F++)S[F]=S[F]/R;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=S,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:b}=this;m.dTheta.value=E,m.mipInt.value=b-s;const L=this._sizeLods[o],N=3*L*(o>b-Fr?o-b+Fr:0),D=4*(this._cubeSize-L);Qs(t,N,D,3*L,2*L),h.setRenderTarget(t),h.render(v,Qa)}}function B2(r){const e=[],t=[],s=[];let o=r;const l=r-Fr+1+cg.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>r-Fr?h=cg[c-r+Fr-1]:c===0&&(h=0),t.push(h);const p=1/(f-2),_=-p,v=1+p,m=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,E=6,C=3,x=2,S=1,R=new Float32Array(C*E*y),b=new Float32Array(x*E*y),L=new Float32Array(S*E*y);for(let D=0;D<y;D++){const F=D%3*2/3-1,w=D>2?0:-1,U=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];R.set(U,C*E*D),b.set(m,x*E*D);const j=[D,D,D,D,D,D];L.set(j,S*E*D)}const N=new ur;N.setAttribute("position",new Ni(R,C)),N.setAttribute("uv",new Ni(b,x)),N.setAttribute("faceIndex",new Ni(L,S)),s.push(new Fi(N,null)),o>Fr&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function hg(r,e,t){const s=new Di(r,e,t);return s.texture.mapping=lu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Qs(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function k2(r,e,t){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function z2(r,e,t){const s=new Float32Array(ss),o=new ie(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function pg(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function mg(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class N0 extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new C0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new fo(5,5,5),l=new xi({name:"CubemapFromEquirect",uniforms:ra(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:tr});l.uniforms.tEquirect.value=t;const c=new Fi(o,l),f=t.minFilter;return t.minFilter===as&&(t.minFilter=rn),new jy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}function H2(r){let e=new WeakMap,t=new WeakMap,s=null;function o(m,y=!1){return m==null?null:y?c(m):l(m)}function l(m){if(m&&m.isTexture){const y=m.mapping;if(y===Zc||y===Qc)if(e.has(m)){const E=e.get(m).texture;return f(E,m.mapping)}else{const E=m.image;if(E&&E.height>0){const C=new N0(E.height);return C.fromEquirectangularTexture(r,m),e.set(m,C),m.addEventListener("dispose",p),f(C.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,E=y===Zc||y===Qc,C=y===us||y===na;if(E||C){let x=t.get(m);const S=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return s===null&&(s=new dg(r)),x=E?s.fromEquirectangular(m,x):s.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),x.texture;if(x!==void 0)return x.texture;{const R=m.image;return E&&R&&R.height>0||C&&R&&h(R)?(s===null&&(s=new dg(r)),x=E?s.fromEquirectangular(m):s.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),m.addEventListener("dispose",_),x.texture):null}}}return m}function f(m,y){return y===Zc?m.mapping=us:y===Qc&&(m.mapping=na),m}function h(m){let y=0;const E=6;for(let C=0;C<E;C++)m[C]!==void 0&&y++;return y===E}function p(m){const y=m.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function _(m){const y=m.target;y.removeEventListener("dispose",_);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function v(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:v}}function V2(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&yd("WebGLRenderer: "+s+" extension not supported."),o}}}function G2(r,e,t,s){const o={},l=new WeakMap;function c(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);m.removeEventListener("dispose",c),delete o[m.id];const y=l.get(m);y&&(e.remove(y),l.delete(m)),s.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(v,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function h(v){const m=v.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER)}function p(v){const m=[],y=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(y!==null){const R=y.array;C=y.version;for(let b=0,L=R.length;b<L;b+=3){const N=R[b+0],D=R[b+1],F=R[b+2];m.push(N,D,D,F,F,N)}}else{const R=E.array;C=E.version;for(let b=0,L=R.length/3-1;b<L;b+=3){const N=b+0,D=b+1,F=b+2;m.push(N,D,D,F,F,N)}}const x=new(E.count>=65535?T0:M0)(m,1);x.version=C;const S=l.get(v);S&&e.remove(S),l.set(v,x)}function _(v){const m=l.get(v);if(m){const y=v.index;y!==null&&m.version<y.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:_}}function W2(r,e,t){let s;function o(v){s=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,m){r.drawElements(s,m,l,v*c),t.update(m,s,1)}function p(v,m,y){y!==0&&(r.drawElementsInstanced(s,m,l,v*c,y),t.update(m,s,y))}function _(v,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,m,0,l,v,0,y);let C=0;for(let x=0;x<y;x++)C+=m[x];t.update(C,s,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_}function X2(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Et("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function j2(r,e,t){const s=new WeakMap,o=new Jt;function l(c,f,h){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let m=s.get(f);if(m===void 0||m.count!==v){let j=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",j)};var y=j;m!==void 0&&m.texture.dispose();const E=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let L=0;E===!0&&(L=1),C===!0&&(L=2),x===!0&&(L=3);let N=f.attributes.position.count*L,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*D*4*v),w=new S0(F,N,D,v);w.type=bi,w.needsUpdate=!0;const U=L*4;for(let B=0;B<v;B++){const q=S[B],ue=R[B],fe=b[B],H=N*D*4*B;for(let Q=0;Q<q.count;Q++){const X=Q*U;E===!0&&(o.fromBufferAttribute(q,Q),F[H+X+0]=o.x,F[H+X+1]=o.y,F[H+X+2]=o.z,F[H+X+3]=0),C===!0&&(o.fromBufferAttribute(ue,Q),F[H+X+4]=o.x,F[H+X+5]=o.y,F[H+X+6]=o.z,F[H+X+7]=0),x===!0&&(o.fromBufferAttribute(fe,Q),F[H+X+8]=o.x,F[H+X+9]=o.y,F[H+X+10]=o.z,F[H+X+11]=fe.itemSize===4?o.w:1)}}m={count:v,texture:w,size:new Nt(N,D)},s.set(f,m),f.addEventListener("dispose",j)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const C=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",C),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:l}}function Y2(r,e,t,s,o){let l=new WeakMap;function c(p){const _=o.render.frame,v=p.geometry,m=e.get(p,v);if(l.get(m)!==_&&(e.update(m),l.set(m,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==_&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==_&&(y.update(),l.set(y,_))}return m}function f(){l=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),s.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:c,dispose:f}}const $2={[r0]:"LINEAR_TONE_MAPPING",[s0]:"REINHARD_TONE_MAPPING",[a0]:"CINEON_TONE_MAPPING",[o0]:"ACES_FILMIC_TONE_MAPPING",[u0]:"AGX_TONE_MAPPING",[c0]:"NEUTRAL_TONE_MAPPING",[l0]:"CUSTOM_TONE_MAPPING"};function q2(r,e,t,s,o){const l=new Di(e,t,{type:r,depthBuffer:s,stencilBuffer:o,depthTexture:s?new ia(e,t):void 0}),c=new Di(e,t,{type:sr,depthBuffer:!1,stencilBuffer:!1}),f=new ur;f.setAttribute("position",new ir([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ir([0,2,0,0,2,0],2));const h=new ky({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Fi(f,h),_=new jd(-1,1,1,-1,0,1);let v=null,m=null,y=!1,E,C=null,x=[],S=!1;this.setSize=function(R,b){l.setSize(R,b),c.setSize(R,b);for(let L=0;L<x.length;L++){const N=x[L];N.setSize&&N.setSize(R,b)}},this.setEffects=function(R){x=R,S=x.length>0&&x[0].isRenderPass===!0;const b=l.width,L=l.height;for(let N=0;N<x.length;N++){const D=x[N];D.setSize&&D.setSize(b,L)}},this.begin=function(R,b){if(y||R.toneMapping===Li&&x.length===0)return!1;if(C=b,b!==null){const L=b.width,N=b.height;(l.width!==L||l.height!==N)&&this.setSize(L,N)}return S===!1&&R.setRenderTarget(l),E=R.toneMapping,R.toneMapping=Li,!0},this.hasRenderPass=function(){return S},this.end=function(R,b){R.toneMapping=E,y=!0;let L=l,N=c;for(let D=0;D<x.length;D++){const F=x[D];if(F.enabled!==!1&&(F.render(R,N,L,b),F.needsSwap!==!1)){const w=L;L=N,N=w}}if(v!==R.outputColorSpace||m!==R.toneMapping){v=R.outputColorSpace,m=R.toneMapping,h.defines={},vt.getTransfer(v)===Pt&&(h.defines.SRGB_TRANSFER="");const D=$2[m];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(C),R.render(p,_),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const I0=new xn,Md=new ia(1,1),U0=new S0,F0=new py,O0=new C0,gg=[],_g=[],vg=new Float32Array(16),xg=new Float32Array(9),Sg=new Float32Array(4);function la(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=gg[o];if(l===void 0&&(l=new Float32Array(o),gg[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function ln(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function fu(r,e){let t=_g[e];t===void 0&&(t=new Int32Array(e),_g[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function K2(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Z2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function Q2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function J2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function e1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(ln(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,s))return;Sg.set(s),r.uniformMatrix2fv(this.addr,!1,Sg),un(t,s)}}function t1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(ln(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,s))return;xg.set(s),r.uniformMatrix3fv(this.addr,!1,xg),un(t,s)}}function n1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(ln(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,s))return;vg.set(s),r.uniformMatrix4fv(this.addr,!1,vg),un(t,s)}}function i1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function r1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function s1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function a1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function o1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function u1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function c1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function f1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Md.compareFunction=t.isReversedDepthBuffer()?Vd:Hd,l=Md):l=I0,t.setTexture2D(e||l,o)}function d1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||F0,o)}function h1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||O0,o)}function p1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||U0,o)}function m1(r){switch(r){case 5126:return K2;case 35664:return Z2;case 35665:return Q2;case 35666:return J2;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return a1;case 5125:return o1;case 36294:return l1;case 36295:return u1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(r,e){r.uniform1fv(this.addr,e)}function _1(r,e){const t=la(e,this.size,2);r.uniform2fv(this.addr,t)}function v1(r,e){const t=la(e,this.size,3);r.uniform3fv(this.addr,t)}function x1(r,e){const t=la(e,this.size,4);r.uniform4fv(this.addr,t)}function S1(r,e){const t=la(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function y1(r,e){const t=la(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function E1(r,e){const t=la(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function M1(r,e){r.uniform1iv(this.addr,e)}function T1(r,e){r.uniform2iv(this.addr,e)}function w1(r,e){r.uniform3iv(this.addr,e)}function A1(r,e){r.uniform4iv(this.addr,e)}function C1(r,e){r.uniform1uiv(this.addr,e)}function R1(r,e){r.uniform2uiv(this.addr,e)}function b1(r,e){r.uniform3uiv(this.addr,e)}function P1(r,e){r.uniform4uiv(this.addr,e)}function L1(r,e,t){const s=this.cache,o=e.length,l=fu(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),un(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=Md:c=I0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function D1(r,e,t){const s=this.cache,o=e.length,l=fu(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||F0,l[c])}function N1(r,e,t){const s=this.cache,o=e.length,l=fu(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||O0,l[c])}function I1(r,e,t){const s=this.cache,o=e.length,l=fu(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||U0,l[c])}function U1(r){switch(r){case 5126:return g1;case 35664:return _1;case 35665:return v1;case 35666:return x1;case 35674:return S1;case 35675:return y1;case 35676:return E1;case 5124:case 35670:return M1;case 35667:case 35671:return T1;case 35668:case 35672:return w1;case 35669:case 35673:return A1;case 5125:return C1;case 36294:return R1;case 36295:return b1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return I1}}class F1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=m1(t.type)}}class O1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U1(t.type)}}class B1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const Pf=/(\w+)(\])?(\[|\.)?/g;function yg(r,e){r.seq.push(e),r.map[e.id]=e}function k1(r,e,t){const s=r.name,o=s.length;for(Pf.lastIndex=0;;){const l=Pf.exec(s),c=Pf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){yg(t,p===void 0?new F1(f,r,e):new O1(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new B1(f),yg(t,v)),t=v}}}class ql{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);k1(f,h,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function Eg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const z1=37297;let H1=0;function V1(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Mg=new ut;function G1(r){vt._getMatrix(Mg,vt.workingColorSpace,r);const e=`mat3( ${Mg.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case tu:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Tg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+V1(r.getShaderSource(e),f)}else return l}function W1(r,e){const t=G1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const X1={[r0]:"Linear",[s0]:"Reinhard",[a0]:"Cineon",[o0]:"ACESFilmic",[u0]:"AgX",[c0]:"Neutral",[l0]:"Custom"};function j1(r,e){const t=X1[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new ie;function Y1(){vt.getLuminanceCoefficients(Hl);const r=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function q1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function K1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function to(r){return r!==""}function wg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ag(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(r){return r.replace(Z1,J1)}const Q1=new Map;function J1(r,e){let t=ht[e];if(t===void 0){const s=Q1.get(e);if(s!==void 0)t=ht[s],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Td(t)}const eT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cg(r){return r.replace(eT,tT)}function tT(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Rg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nT={[Wl]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function iT(r){return nT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rT={[us]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE",[lu]:"ENVMAP_TYPE_CUBE_UV"};function sT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const aT={[na]:"ENVMAP_MODE_REFRACTION"};function oT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":aT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lT={[i0]:"ENVMAP_BLENDING_MULTIPLY",[YS]:"ENVMAP_BLENDING_MIX",[$S]:"ENVMAP_BLENDING_ADD"};function uT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lT[r.combine]||"ENVMAP_BLENDING_NONE"}function cT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function fT(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=iT(t),p=sT(t),_=oT(t),v=uT(t),m=cT(t),y=$1(t),E=q1(l),C=o.createProgram();let x,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(to).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(to).join(`
`),S.length>0&&(S+=`
`)):(x=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),S=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?ht.tonemapping_pars_fragment:"",t.toneMapping!==Li?j1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,W1("linearToOutputTexel",t.outputColorSpace),Y1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),c=Td(c),c=wg(c,t),c=Ag(c,t),f=Td(f),f=wg(f,t),f=Ag(f,t),c=Cg(c),f=Cg(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=R+x+c,L=R+S+f,N=Eg(o,o.VERTEX_SHADER,b),D=Eg(o,o.FRAGMENT_SHADER,L);o.attachShader(C,N),o.attachShader(C,D),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(B){if(r.debug.checkShaderErrors){const q=o.getProgramInfoLog(C)||"",ue=o.getShaderInfoLog(N)||"",fe=o.getShaderInfoLog(D)||"",H=q.trim(),Q=ue.trim(),X=fe.trim();let Y=!0,le=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,C,N,D);else{const oe=Tg(o,N,"vertex"),O=Tg(o,D,"fragment");Et("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+H+`
`+oe+`
`+O)}else H!==""?rt("WebGLProgram: Program Info Log:",H):(Q===""||X==="")&&(le=!1);le&&(B.diagnostics={runnable:Y,programLog:H,vertexShader:{log:Q,prefix:x},fragmentShader:{log:X,prefix:S}})}o.deleteShader(N),o.deleteShader(D),w=new ql(o,C),U=K1(o,C)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(C,z1)),j},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=N,this.fragmentShader=D,this}let dT=0;class hT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new pT(e),t.set(e,s)),s}}class pT{constructor(e){this.id=dT++,this.code=e,this.usedTimes=0}}function mT(r){return r===cs||r===Ql||r===Jl}function gT(r,e,t,s,o,l){const c=new y0,f=new hT,h=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let m=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return h.add(w),w===0?"uv":`uv${w}`}function C(w,U,j,B,q,ue){const fe=B.fog,H=q.geometry,Q=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,X=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||Q,X),le=Y&&Y.mapping===lu?Y.image.height:null,oe=y[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&rt("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const O=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,J=O!==void 0?O.length:0;let Fe=0;H.morphAttributes.position!==void 0&&(Fe=1),H.morphAttributes.normal!==void 0&&(Fe=2),H.morphAttributes.color!==void 0&&(Fe=3);let Ve,Ne,ae,Se;if(oe){const at=Ri[oe];Ve=at.vertexShader,Ne=at.fragmentShader}else Ve=w.vertexShader,Ne=w.fragmentShader,f.update(w),ae=f.getVertexShaderID(w),Se=f.getFragmentShaderID(w);const me=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Qe=q.isInstancedMesh===!0,Je=q.isBatchedMesh===!0,Ut=!!w.map,ct=!!w.matcap,Mt=!!Y,Lt=!!w.aoMap,ft=!!w.lightMap,jt=!!w.bumpMap,Ft=!!w.normalMap,pn=!!w.displacementMap,V=!!w.emissiveMap,Ot=!!w.metalnessMap,dt=!!w.roughnessMap,Ct=w.anisotropy>0,Le=w.clearcoat>0,zt=w.dispersion>0,P=w.iridescence>0,M=w.sheen>0,$=w.transmission>0,he=Ct&&!!w.anisotropyMap,ge=Le&&!!w.clearcoatMap,Ee=Le&&!!w.clearcoatNormalMap,Pe=Le&&!!w.clearcoatRoughnessMap,ce=P&&!!w.iridescenceMap,pe=P&&!!w.iridescenceThicknessMap,Ue=M&&!!w.sheenColorMap,Be=M&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,Me=!!w.specularColorMap,nt=!!w.specularIntensityMap,st=$&&!!w.transmissionMap,pt=$&&!!w.thicknessMap,z=!!w.gradientMap,we=!!w.alphaMap,de=w.alphaTest>0,Oe=!!w.alphaHash,Re=!!w.extensions;let _e=Li;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=r.toneMapping);const je={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:Ne,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Je,batchingColor:Je&&q._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&q.instanceColor!==null,instancingMorph:Qe&&q.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Ut,matcap:ct,envMap:Mt,envMapMode:Mt&&Y.mapping,envMapCubeUVHeight:le,aoMap:Lt,lightMap:ft,bumpMap:jt,normalMap:Ft,displacementMap:pn,emissiveMap:V,normalMapObjectSpace:Ft&&w.normalMapType===ZS,normalMapTangentSpace:Ft&&w.normalMapType===Bm,packedNormalMap:Ft&&w.normalMapType===Bm&&mT(w.normalMap.format),metalnessMap:Ot,roughnessMap:dt,anisotropy:Ct,anisotropyMap:he,clearcoat:Le,clearcoatMap:ge,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Pe,dispersion:zt,iridescence:P,iridescenceMap:ce,iridescenceThicknessMap:pe,sheen:M,sheenColorMap:Ue,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:Me,specularIntensityMap:nt,transmission:$,transmissionMap:st,thicknessMap:pt,gradientMap:z,opaque:w.transparent===!1&&w.blending===Js&&w.alphaToCoverage===!1,alphaMap:we,alphaTest:de,alphaHash:Oe,combine:w.combine,mapUv:Ut&&E(w.map.channel),aoMapUv:Lt&&E(w.aoMap.channel),lightMapUv:ft&&E(w.lightMap.channel),bumpMapUv:jt&&E(w.bumpMap.channel),normalMapUv:Ft&&E(w.normalMap.channel),displacementMapUv:pn&&E(w.displacementMap.channel),emissiveMapUv:V&&E(w.emissiveMap.channel),metalnessMapUv:Ot&&E(w.metalnessMap.channel),roughnessMapUv:dt&&E(w.roughnessMap.channel),anisotropyMapUv:he&&E(w.anisotropyMap.channel),clearcoatMapUv:ge&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(w.sheenRoughnessMap.channel),specularMapUv:Ae&&E(w.specularMap.channel),specularColorMapUv:Me&&E(w.specularColorMap.channel),specularIntensityMapUv:nt&&E(w.specularIntensityMap.channel),transmissionMapUv:st&&E(w.transmissionMap.channel),thicknessMapUv:pt&&E(w.thicknessMap.channel),alphaMapUv:we&&E(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ft||Ct),vertexNormals:!!H.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!H.attributes.uv&&(Ut||we),fog:!!fe,useFog:w.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||H.attributes.normal===void 0&&Ft===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ie,skinning:q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Fe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ut&&w.map.isVideoTexture===!0&&vt.getTransfer(w.map.colorSpace)===Pt,decodeVideoTextureEmissive:V&&w.emissiveMap.isVideoTexture===!0&&vt.getTransfer(w.emissiveMap.colorSpace)===Pt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ji,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function x(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)U.push(j),U.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(S(U,w),R(U,w),U.push(r.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function S(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function R(w,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),w.push(c.mask)}function b(w){const U=y[w.type];let j;if(U){const B=Ri[U];j=Fy.clone(B.uniforms)}else j=w.uniforms;return j}function L(w,U){let j=_.get(U);return j!==void 0?++j.usedTimes:(j=new fT(r,U,w,o),p.push(j),_.set(U,j)),j}function N(w){if(--w.usedTimes===0){const U=p.indexOf(w);p[U]=p[p.length-1],p.pop(),_.delete(w.cacheKey),w.destroy()}}function D(w){f.remove(w)}function F(){f.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:b,acquireProgram:L,releaseProgram:N,releaseShaderCache:D,programs:p,dispose:F}}function _T(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function o(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function vT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function bg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Pg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function f(m,y,E,C,x,S){let R=r[e];return R===void 0?(R={id:m.id,object:m,geometry:y,material:E,materialVariant:c(m),groupOrder:C,renderOrder:m.renderOrder,z:x,group:S},r[e]=R):(R.id=m.id,R.object=m,R.geometry=y,R.material=E,R.materialVariant=c(m),R.groupOrder=C,R.renderOrder=m.renderOrder,R.z=x,R.group=S),e++,R}function h(m,y,E,C,x,S){const R=f(m,y,E,C,x,S);E.transmission>0?s.push(R):E.transparent===!0?o.push(R):t.push(R)}function p(m,y,E,C,x,S){const R=f(m,y,E,C,x,S);E.transmission>0?s.unshift(R):E.transparent===!0?o.unshift(R):t.unshift(R)}function _(m,y){t.length>1&&t.sort(m||vT),s.length>1&&s.sort(y||bg),o.length>1&&o.sort(y||bg)}function v(){for(let m=e,y=r.length;m<y;m++){const E=r[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:p,finish:v,sort:_}}function xT(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new Pg,r.set(s,[c])):o>=l.length?(c=new Pg,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function ST(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Dt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function yT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ET=0;function MT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function TT(r){const e=new ST,t=yT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const o=new ie,l=new on,c=new on;function f(p){let _=0,v=0,m=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,E=0,C=0,x=0,S=0,R=0,b=0,L=0,N=0,D=0,F=0;p.sort(MT);for(let U=0,j=p.length;U<j;U++){const B=p[U],q=B.color,ue=B.intensity,fe=B.distance;let H=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===cs?H=B.shadow.map.texture:H=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)_+=q.r*ue,v+=q.g*ue,m+=q.b*ue;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(B.sh.coefficients[Q],ue);F++}else if(B.isDirectionalLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const X=B.shadow,Y=t.get(B);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=H,s.directionalShadowMatrix[y]=B.shadow.matrix,R++}s.directional[y]=Q,y++}else if(B.isSpotLight){const Q=e.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(q).multiplyScalar(ue),Q.distance=fe,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,s.spot[C]=Q;const X=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,X.updateMatrices(B),B.castShadow&&D++),s.spotLightMatrix[C]=X.matrix,B.castShadow){const Y=t.get(B);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,s.spotShadow[C]=Y,s.spotShadowMap[C]=H,L++}C++}else if(B.isRectAreaLight){const Q=e.get(B);Q.color.copy(q).multiplyScalar(ue),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),s.rectArea[x]=Q,x++}else if(B.isPointLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const X=B.shadow,Y=t.get(B);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=H,s.pointShadowMatrix[E]=B.shadow.matrix,b++}s.point[E]=Q,E++}else if(B.isHemisphereLight){const Q=e.get(B);Q.skyColor.copy(B.color).multiplyScalar(ue),Q.groundColor.copy(B.groundColor).multiplyScalar(ue),s.hemi[S]=Q,S++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=m;const w=s.hash;(w.directionalLength!==y||w.pointLength!==E||w.spotLength!==C||w.rectAreaLength!==x||w.hemiLength!==S||w.numDirectionalShadows!==R||w.numPointShadows!==b||w.numSpotShadows!==L||w.numSpotMaps!==N||w.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=x,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=L+N-D,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=F,w.directionalLength=y,w.pointLength=E,w.spotLength=C,w.rectAreaLength=x,w.hemiLength=S,w.numDirectionalShadows=R,w.numPointShadows=b,w.numSpotShadows=L,w.numSpotMaps=N,w.numLightProbes=F,s.version=ET++)}function h(p,_){let v=0,m=0,y=0,E=0,C=0;const x=_.matrixWorldInverse;for(let S=0,R=p.length;S<R;S++){const b=p[S];if(b.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),v++}else if(b.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),y++}else if(b.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(x),c.identity(),l.copy(b.matrixWorld),l.premultiply(x),c.extractRotation(l),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),E++}else if(b.isPointLight){const L=s.point[m];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(x),C++}}}return{setup:f,setupView:h,state:s}}function Lg(r){const e=new TT(r),t=[],s=[],o=[];function l(m){v.camera=m,t.length=0,s.length=0,o.length=0}function c(m){t.push(m)}function f(m){s.push(m)}function h(m){o.push(m)}function p(){e.setup(t)}function _(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:p,setupLightsView:_,pushLight:c,pushShadow:f,pushLightProbeGrid:h}}function wT(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Lg(r),e.set(o,[f])):l>=c.length?(f=new Lg(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const AT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RT=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],bT=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Dg=new on,Ja=new ie,Lf=new ie;function PT(r,e,t){let s=new A0;const o=new Nt,l=new Nt,c=new Jt,f=new zy,h=new Hy,p={},_=t.maxTextureSize,v={[Or]:kn,[kn]:Or,[Ji]:Ji},m=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:AT,fragmentShader:CT}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const E=new ur;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Fi(E,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let S=this.type;this.render=function(D,F,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===RS&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wl);const U=r.getRenderTarget(),j=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),q=r.state;q.setBlending(tr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ue=S!==this.type;ue&&F.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(H=>H.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,H=D.length;fe<H;fe++){const Q=D[fe],X=Q.shadow;if(X===void 0){rt("WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const Y=X.getFrameExtents();o.multiply(Y),l.copy(X.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/Y.x),o.x=l.x*Y.x,X.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/Y.y),o.y=l.y*Y.y,X.mapSize.y=l.y));const le=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=le,X.map===null||ue===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===eo){if(Q.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Di(o.x,o.y,{format:cs,type:sr,minFilter:rn,magFilter:rn,generateMipmaps:!1}),X.map.texture.name=Q.name+".shadowMap",X.map.depthTexture=new ia(o.x,o.y,bi),X.map.depthTexture.name=Q.name+".shadowMapDepth",X.map.depthTexture.format=ar,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn}else Q.isPointLight?(X.map=new N0(o.x),X.map.depthTexture=new Iy(o.x,Ui)):(X.map=new Di(o.x,o.y),X.map.depthTexture=new ia(o.x,o.y,Ui)),X.map.depthTexture.name=Q.name+".shadowMap",X.map.depthTexture.format=ar,this.type===Wl?(X.map.depthTexture.compareFunction=le?Vd:Hd,X.map.depthTexture.minFilter=rn,X.map.depthTexture.magFilter=rn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn);X.camera.updateProjectionMatrix()}const oe=X.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<oe;O++){if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,O),r.clear();else{O===0&&(r.setRenderTarget(X.map),r.clear());const J=X.getViewport(O);c.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),q.viewport(c)}if(Q.isPointLight){const J=X.camera,Fe=X.matrix,Ve=Q.distance||J.far;Ve!==J.far&&(J.far=Ve,J.updateProjectionMatrix()),Ja.setFromMatrixPosition(Q.matrixWorld),J.position.copy(Ja),Lf.copy(J.position),Lf.add(RT[O]),J.up.copy(bT[O]),J.lookAt(Lf),J.updateMatrixWorld(),Fe.makeTranslation(-Ja.x,-Ja.y,-Ja.z),Dg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Dg,J.coordinateSystem,J.reversedDepth)}else X.updateMatrices(Q);s=X.getFrustum(),L(F,w,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===eo&&R(X,w),X.needsUpdate=!1}S=this.type,x.needsUpdate=!1,r.setRenderTarget(U,j,B)};function R(D,F){const w=e.update(C);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Di(o.x,o.y,{format:cs,type:sr})),m.uniforms.shadow_pass.value=D.map.depthTexture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(F,null,w,m,C,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(F,null,w,y,C,null)}function b(D,F,w,U){let j=null;const B=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)j=B;else if(j=w.isPointLight===!0?h:f,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=j.uuid,ue=F.uuid;let fe=p[q];fe===void 0&&(fe={},p[q]=fe);let H=fe[ue];H===void 0&&(H=j.clone(),fe[ue]=H,F.addEventListener("dispose",N)),j=H}if(j.visible=F.visible,j.wireframe=F.wireframe,U===eo?j.side=F.shadowSide!==null?F.shadowSide:F.side:j.side=F.shadowSide!==null?F.shadowSide:v[F.side],j.alphaMap=F.alphaMap,j.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,j.map=F.map,j.clipShadows=F.clipShadows,j.clippingPlanes=F.clippingPlanes,j.clipIntersection=F.clipIntersection,j.displacementMap=F.displacementMap,j.displacementScale=F.displacementScale,j.displacementBias=F.displacementBias,j.wireframeLinewidth=F.wireframeLinewidth,j.linewidth=F.linewidth,w.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const q=r.properties.get(j);q.light=w}return j}function L(D,F,w,U,j){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===eo)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const ue=e.update(D),fe=D.material;if(Array.isArray(fe)){const H=ue.groups;for(let Q=0,X=H.length;Q<X;Q++){const Y=H[Q],le=fe[Y.materialIndex];if(le&&le.visible){const oe=b(D,le,U,j);D.onBeforeShadow(r,D,F,w,ue,oe,Y),r.renderBufferDirect(w,null,ue,oe,D,Y),D.onAfterShadow(r,D,F,w,ue,oe,Y)}}}else if(fe.visible){const H=b(D,fe,U,j);D.onBeforeShadow(r,D,F,w,ue,H,null),r.renderBufferDirect(w,null,ue,H,D,null),D.onAfterShadow(r,D,F,w,ue,H,null)}}const q=D.children;for(let ue=0,fe=q.length;ue<fe;ue++)L(q[ue],F,w,U,j)}function N(D){D.target.removeEventListener("dispose",N);for(const w in p){const U=p[w],j=D.target.uuid;j in U&&(U[j].dispose(),delete U[j])}}}function LT(r,e){function t(){let z=!1;const we=new Jt;let de=null;const Oe=new Jt(0,0,0,0);return{setMask:function(Re){de!==Re&&!z&&(r.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){z=Re},setClear:function(Re,_e,je,at,It){It===!0&&(Re*=at,_e*=at,je*=at),we.set(Re,_e,je,at),Oe.equals(we)===!1&&(r.clearColor(Re,_e,je,at),Oe.copy(we))},reset:function(){z=!1,de=null,Oe.set(-1,0,0,0)}}}function s(){let z=!1,we=!1,de=null,Oe=null,Re=null;return{setReversed:function(_e){if(we!==_e){const je=e.get("EXT_clip_control");_e?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),we=_e;const at=Re;Re=null,this.setClear(at)}},getReversed:function(){return we},setTest:function(_e){_e?me(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(_e){de!==_e&&!z&&(r.depthMask(_e),de=_e)},setFunc:function(_e){if(we&&(_e=oy[_e]),Oe!==_e){switch(_e){case Ff:r.depthFunc(r.NEVER);break;case Of:r.depthFunc(r.ALWAYS);break;case Bf:r.depthFunc(r.LESS);break;case ta:r.depthFunc(r.LEQUAL);break;case kf:r.depthFunc(r.EQUAL);break;case zf:r.depthFunc(r.GEQUAL);break;case Hf:r.depthFunc(r.GREATER);break;case Vf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=_e}},setLocked:function(_e){z=_e},setClear:function(_e){Re!==_e&&(Re=_e,we&&(_e=1-_e),r.clearDepth(_e))},reset:function(){z=!1,de=null,Oe=null,Re=null,we=!1}}}function o(){let z=!1,we=null,de=null,Oe=null,Re=null,_e=null,je=null,at=null,It=null;return{setTest:function(Tt){z||(Tt?me(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(Tt){we!==Tt&&!z&&(r.stencilMask(Tt),we=Tt)},setFunc:function(Tt,An,Yn){(de!==Tt||Oe!==An||Re!==Yn)&&(r.stencilFunc(Tt,An,Yn),de=Tt,Oe=An,Re=Yn)},setOp:function(Tt,An,Yn){(_e!==Tt||je!==An||at!==Yn)&&(r.stencilOp(Tt,An,Yn),_e=Tt,je=An,at=Yn)},setLocked:function(Tt){z=Tt},setClear:function(Tt){It!==Tt&&(r.clearStencil(Tt),It=Tt)},reset:function(){z=!1,we=null,de=null,Oe=null,Re=null,_e=null,je=null,at=null,It=null}}}const l=new t,c=new s,f=new o,h=new WeakMap,p=new WeakMap;let _={},v={},m={},y=new WeakMap,E=[],C=null,x=!1,S=null,R=null,b=null,L=null,N=null,D=null,F=null,w=new Dt(0,0,0),U=0,j=!1,B=null,q=null,ue=null,fe=null,H=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const le=r.getParameter(r.VERSION);le.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(le)[1]),X=Y>=1):le.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),X=Y>=2);let oe=null,O={};const J=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),Ve=new Jt().fromArray(J),Ne=new Jt().fromArray(Fe);function ae(z,we,de,Oe){const Re=new Uint8Array(4),_e=r.createTexture();r.bindTexture(z,_e),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<de;je++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(we+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return _e}const Se={};Se[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),me(r.DEPTH_TEST),c.setFunc(ta),jt(!1),Ft(Im),me(r.CULL_FACE),Lt(tr);function me(z){_[z]!==!0&&(r.enable(z),_[z]=!0)}function Ie(z){_[z]!==!1&&(r.disable(z),_[z]=!1)}function Qe(z,we){return m[z]!==we?(r.bindFramebuffer(z,we),m[z]=we,z===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=we),z===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=we),!0):!1}function Je(z,we){let de=E,Oe=!1;if(z){de=y.get(we),de===void 0&&(de=[],y.set(we,de));const Re=z.textures;if(de.length!==Re.length||de[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,je=Re.length;_e<je;_e++)de[_e]=r.COLOR_ATTACHMENT0+_e;de.length=Re.length,Oe=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(de)}function Ut(z){return C!==z?(r.useProgram(z),C=z,!0):!1}const ct={[rs]:r.FUNC_ADD,[PS]:r.FUNC_SUBTRACT,[LS]:r.FUNC_REVERSE_SUBTRACT};ct[DS]=r.MIN,ct[NS]=r.MAX;const Mt={[IS]:r.ZERO,[US]:r.ONE,[FS]:r.SRC_COLOR,[If]:r.SRC_ALPHA,[VS]:r.SRC_ALPHA_SATURATE,[zS]:r.DST_COLOR,[BS]:r.DST_ALPHA,[OS]:r.ONE_MINUS_SRC_COLOR,[Uf]:r.ONE_MINUS_SRC_ALPHA,[HS]:r.ONE_MINUS_DST_COLOR,[kS]:r.ONE_MINUS_DST_ALPHA,[GS]:r.CONSTANT_COLOR,[WS]:r.ONE_MINUS_CONSTANT_COLOR,[XS]:r.CONSTANT_ALPHA,[jS]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(z,we,de,Oe,Re,_e,je,at,It,Tt){if(z===tr){x===!0&&(Ie(r.BLEND),x=!1);return}if(x===!1&&(me(r.BLEND),x=!0),z!==bS){if(z!==S||Tt!==j){if((R!==rs||N!==rs)&&(r.blendEquation(r.FUNC_ADD),R=rs,N=rs),Tt)switch(z){case Js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Um:r.blendFunc(r.ONE,r.ONE);break;case Fm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Om:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Et("WebGLState: Invalid blending: ",z);break}else switch(z){case Js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Um:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Fm:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Om:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",z);break}b=null,L=null,D=null,F=null,w.set(0,0,0),U=0,S=z,j=Tt}return}Re=Re||we,_e=_e||de,je=je||Oe,(we!==R||Re!==N)&&(r.blendEquationSeparate(ct[we],ct[Re]),R=we,N=Re),(de!==b||Oe!==L||_e!==D||je!==F)&&(r.blendFuncSeparate(Mt[de],Mt[Oe],Mt[_e],Mt[je]),b=de,L=Oe,D=_e,F=je),(at.equals(w)===!1||It!==U)&&(r.blendColor(at.r,at.g,at.b,It),w.copy(at),U=It),S=z,j=!1}function ft(z,we){z.side===Ji?Ie(r.CULL_FACE):me(r.CULL_FACE);let de=z.side===kn;we&&(de=!de),jt(de),z.blending===Js&&z.transparent===!1?Lt(tr):Lt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),l.setMask(z.colorWrite);const Oe=z.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),V(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function jt(z){B!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),B=z)}function Ft(z){z!==AS?(me(r.CULL_FACE),z!==q&&(z===Im?r.cullFace(r.BACK):z===CS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),q=z}function pn(z){z!==ue&&(X&&r.lineWidth(z),ue=z)}function V(z,we,de){z?(me(r.POLYGON_OFFSET_FILL),(fe!==we||H!==de)&&(fe=we,H=de,c.getReversed()&&(we=-we),r.polygonOffset(we,de))):Ie(r.POLYGON_OFFSET_FILL)}function Ot(z){z?me(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function dt(z){z===void 0&&(z=r.TEXTURE0+Q-1),oe!==z&&(r.activeTexture(z),oe=z)}function Ct(z,we,de){de===void 0&&(oe===null?de=r.TEXTURE0+Q-1:de=oe);let Oe=O[de];Oe===void 0&&(Oe={type:void 0,texture:void 0},O[de]=Oe),(Oe.type!==z||Oe.texture!==we)&&(oe!==de&&(r.activeTexture(de),oe=de),r.bindTexture(z,we||Se[z]),Oe.type=z,Oe.texture=we)}function Le(){const z=O[oe];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function zt(){try{r.compressedTexImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function M(){try{r.texSubImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function $(){try{r.texSubImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function Ee(){try{r.texStorage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function Pe(){try{r.texStorage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function ce(){try{r.texImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function pe(){try{r.texImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function Ue(z){return v[z]!==void 0?v[z]:r.getParameter(z)}function Be(z,we){v[z]!==we&&(r.pixelStorei(z,we),v[z]=we)}function Ae(z){Ve.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Ve.copy(z))}function Me(z){Ne.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Ne.copy(z))}function nt(z,we){let de=p.get(we);de===void 0&&(de=new WeakMap,p.set(we,de));let Oe=de.get(z);Oe===void 0&&(Oe=r.getUniformBlockIndex(we,z.name),de.set(z,Oe))}function st(z,we){const Oe=p.get(we).get(z);h.get(we)!==Oe&&(r.uniformBlockBinding(we,Oe,z.__bindingPointIndex),h.set(we,Oe))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},oe=null,O={},m={},y=new WeakMap,E=[],C=null,x=!1,S=null,R=null,b=null,L=null,N=null,D=null,F=null,w=new Dt(0,0,0),U=0,j=!1,B=null,q=null,ue=null,fe=null,H=null,Ve.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:me,disable:Ie,bindFramebuffer:Qe,drawBuffers:Je,useProgram:Ut,setBlending:Lt,setMaterial:ft,setFlipSided:jt,setCullFace:Ft,setLineWidth:pn,setPolygonOffset:V,setScissorTest:Ot,activeTexture:dt,bindTexture:Ct,unbindTexture:Le,compressedTexImage2D:zt,compressedTexImage3D:P,texImage2D:ce,texImage3D:pe,pixelStorei:Be,getParameter:Ue,updateUBOMapping:nt,uniformBlockBinding:st,texStorage2D:Ee,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Ae,viewport:Me,reset:pt}}function DT(r,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,_=new WeakMap,v=new Set;let m;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(P,M){return E?new OffscreenCanvas(P,M):so("canvas")}function x(P,M,$){let he=1;const ge=zt(P);if((ge.width>$||ge.height>$)&&(he=$/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ee=Math.floor(he*ge.width),Pe=Math.floor(he*ge.height);m===void 0&&(m=C(Ee,Pe));const ce=M?C(Ee,Pe):m;return ce.width=Ee,ce.height=Pe,ce.getContext("2d").drawImage(P,0,0,Ee,Pe),rt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ee+"x"+Pe+")."),ce}else return"data"in P&&rt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function R(P){r.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,M,$,he,ge,Ee=!1){if(P!==null){if(r[P]!==void 0)return r[P];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Pe;he&&(Pe=e.get("EXT_texture_norm16"),Pe||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=M;if(M===r.RED&&($===r.FLOAT&&(ce=r.R32F),$===r.HALF_FLOAT&&(ce=r.R16F),$===r.UNSIGNED_BYTE&&(ce=r.R8),$===r.UNSIGNED_SHORT&&Pe&&(ce=Pe.R16_EXT),$===r.SHORT&&Pe&&(ce=Pe.R16_SNORM_EXT)),M===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.R8UI),$===r.UNSIGNED_SHORT&&(ce=r.R16UI),$===r.UNSIGNED_INT&&(ce=r.R32UI),$===r.BYTE&&(ce=r.R8I),$===r.SHORT&&(ce=r.R16I),$===r.INT&&(ce=r.R32I)),M===r.RG&&($===r.FLOAT&&(ce=r.RG32F),$===r.HALF_FLOAT&&(ce=r.RG16F),$===r.UNSIGNED_BYTE&&(ce=r.RG8),$===r.UNSIGNED_SHORT&&Pe&&(ce=Pe.RG16_EXT),$===r.SHORT&&Pe&&(ce=Pe.RG16_SNORM_EXT)),M===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RG8UI),$===r.UNSIGNED_SHORT&&(ce=r.RG16UI),$===r.UNSIGNED_INT&&(ce=r.RG32UI),$===r.BYTE&&(ce=r.RG8I),$===r.SHORT&&(ce=r.RG16I),$===r.INT&&(ce=r.RG32I)),M===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),$===r.UNSIGNED_INT&&(ce=r.RGB32UI),$===r.BYTE&&(ce=r.RGB8I),$===r.SHORT&&(ce=r.RGB16I),$===r.INT&&(ce=r.RGB32I)),M===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),$===r.UNSIGNED_INT&&(ce=r.RGBA32UI),$===r.BYTE&&(ce=r.RGBA8I),$===r.SHORT&&(ce=r.RGBA16I),$===r.INT&&(ce=r.RGBA32I)),M===r.RGB&&($===r.UNSIGNED_SHORT&&Pe&&(ce=Pe.RGB16_EXT),$===r.SHORT&&Pe&&(ce=Pe.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),M===r.RGBA){const pe=Ee?tu:vt.getTransfer(ge);$===r.FLOAT&&(ce=r.RGBA32F),$===r.HALF_FLOAT&&(ce=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ce=pe===Pt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Pe&&(ce=Pe.RGBA16_EXT),$===r.SHORT&&Pe&&(ce=Pe.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function N(P,M){let $;return P?M===null||M===Ui||M===ro?$=r.DEPTH24_STENCIL8:M===bi?$=r.DEPTH32F_STENCIL8:M===io&&($=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ui||M===ro?$=r.DEPTH_COMPONENT24:M===bi?$=r.DEPTH_COMPONENT32F:M===io&&($=r.DEPTH_COMPONENT16),$}function D(P,M){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==vn&&P.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function F(P){const M=P.target;M.removeEventListener("dispose",F),U(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function w(P){const M=P.target;M.removeEventListener("dispose",w),B(M)}function U(P){const M=s.get(P);if(M.__webglInit===void 0)return;const $=P.source,he=y.get($);if(he){const ge=he[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&j(P),Object.keys(he).length===0&&y.delete($)}s.remove(P)}function j(P){const M=s.get(P);r.deleteTexture(M.__webglTexture);const $=P.source,he=y.get($);delete he[M.__cacheKey],c.memory.textures--}function B(P){const M=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let ge=0;ge<M.__webglFramebuffer[he].length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[he][ge]);else r.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)r.deleteFramebuffer(M.__webglFramebuffer[he]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=P.textures;for(let he=0,ge=$.length;he<ge;he++){const Ee=s.get($[he]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),c.memory.textures--),s.remove($[he])}s.remove(P)}let q=0;function ue(){q=0}function fe(){return q}function H(P){q=P}function Q(){const P=q;return P>=o.maxTextures&&rt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),q+=1,P}function X(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Y(P,M){const $=s.get(P);if(P.isVideoTexture&&Ct(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const he=P.image;if(he===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie($,P,M);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+M)}function le(P,M){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Ie($,P,M);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+M)}function oe(P,M){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Ie($,P,M);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+M)}function O(P,M){const $=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){Qe($,P,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+M)}const J={[Gf]:r.REPEAT,[er]:r.CLAMP_TO_EDGE,[Wf]:r.MIRRORED_REPEAT},Fe={[vn]:r.NEAREST,[qS]:r.NEAREST_MIPMAP_NEAREST,[xl]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[Jc]:r.LINEAR_MIPMAP_NEAREST,[as]:r.LINEAR_MIPMAP_LINEAR},Ve={[QS]:r.NEVER,[iy]:r.ALWAYS,[JS]:r.LESS,[Hd]:r.LEQUAL,[ey]:r.EQUAL,[Vd]:r.GEQUAL,[ty]:r.GREATER,[ny]:r.NOTEQUAL};function Ne(P,M){if(M.type===bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===Jc||M.magFilter===xl||M.magFilter===as||M.minFilter===rn||M.minFilter===Jc||M.minFilter===xl||M.minFilter===as)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,J[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,J[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,J[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Fe[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Fe[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===vn||M.minFilter!==xl&&M.minFilter!==as||M.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ae(P,M){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",F));const he=M.source;let ge=y.get(he);ge===void 0&&(ge={},y.set(he,ge));const Ee=X(M);if(Ee!==P.__cacheKey){ge[Ee]===void 0&&(ge[Ee]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ge[Ee].usedTimes++;const Pe=ge[P.__cacheKey];Pe!==void 0&&(ge[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&j(M)),P.__cacheKey=Ee,P.__webglTexture=ge[Ee].texture}return $}function Se(P,M,$){return Math.floor(Math.floor(P/$)/M)}function me(P,M,$,he){const Ee=P.updateRanges;if(Ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,$,he,M.data);else{Ee.sort((Be,Ae)=>Be.start-Ae.start);let Pe=0;for(let Be=1;Be<Ee.length;Be++){const Ae=Ee[Pe],Me=Ee[Be],nt=Ae.start+Ae.count,st=Se(Me.start,M.width,4),pt=Se(Ae.start,M.width,4);Me.start<=nt+1&&st===pt&&Se(Me.start+Me.count-1,M.width,4)===st?Ae.count=Math.max(Ae.count,Me.start+Me.count-Ae.start):(++Pe,Ee[Pe]=Me)}Ee.length=Pe+1;const ce=t.getParameter(r.UNPACK_ROW_LENGTH),pe=t.getParameter(r.UNPACK_SKIP_PIXELS),Ue=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Ae=Ee.length;Be<Ae;Be++){const Me=Ee[Be],nt=Math.floor(Me.start/4),st=Math.ceil(Me.count/4),pt=nt%M.width,z=Math.floor(nt/M.width),we=st,de=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,pt,z,we,de,$,he,M.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ce),t.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ue)}}function Ie(P,M,$){let he=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=r.TEXTURE_3D);const ge=ae(P,M),Ee=M.source;t.bindTexture(he,P.__webglTexture,r.TEXTURE0+$);const Pe=s.get(Ee);if(Ee.version!==Pe.__version||ge===!0){if(t.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const de=vt.getPrimaries(vt.workingColorSpace),Oe=M.colorSpace===Ur?null:vt.getPrimaries(M.colorSpace),Re=M.colorSpace===Ur||de===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let pe=x(M.image,!1,o.maxTextureSize);pe=Le(M,pe);const Ue=l.convert(M.format,M.colorSpace),Be=l.convert(M.type);let Ae=L(M.internalFormat,Ue,Be,M.normalized,M.colorSpace,M.isVideoTexture);Ne(he,M);let Me;const nt=M.mipmaps,st=M.isVideoTexture!==!0,pt=Pe.__version===void 0||ge===!0,z=Ee.dataReady,we=D(M,pe);if(M.isDepthTexture)Ae=N(M.format===os,M.type),pt&&(st?t.texStorage2D(r.TEXTURE_2D,1,Ae,pe.width,pe.height):t.texImage2D(r.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Ue,Be,null));else if(M.isDataTexture)if(nt.length>0){st&&pt&&t.texStorage2D(r.TEXTURE_2D,we,Ae,nt[0].width,nt[0].height);for(let de=0,Oe=nt.length;de<Oe;de++)Me=nt[de],st?z&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Me.width,Me.height,Ue,Be,Me.data):t.texImage2D(r.TEXTURE_2D,de,Ae,Me.width,Me.height,0,Ue,Be,Me.data);M.generateMipmaps=!1}else st?(pt&&t.texStorage2D(r.TEXTURE_2D,we,Ae,pe.width,pe.height),z&&me(M,pe,Ue,Be)):t.texImage2D(r.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Ue,Be,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){st&&pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,Ae,nt[0].width,nt[0].height,pe.depth);for(let de=0,Oe=nt.length;de<Oe;de++)if(Me=nt[de],M.format!==_i)if(Ue!==null)if(st){if(z)if(M.layerUpdates.size>0){const Re=ug(Me.width,Me.height,M.format,M.type);for(const _e of M.layerUpdates){const je=Me.data.subarray(_e*Re/Me.data.BYTES_PER_ELEMENT,(_e+1)*Re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,_e,Me.width,Me.height,1,Ue,je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,pe.depth,Ue,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,Ae,Me.width,Me.height,pe.depth,0,Me.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,pe.depth,Ue,Be,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,Ae,Me.width,Me.height,pe.depth,0,Ue,Be,Me.data)}else{st&&pt&&t.texStorage2D(r.TEXTURE_2D,we,Ae,nt[0].width,nt[0].height);for(let de=0,Oe=nt.length;de<Oe;de++)Me=nt[de],M.format!==_i?Ue!==null?st?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Me.width,Me.height,Ue,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,de,Ae,Me.width,Me.height,0,Me.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?z&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Me.width,Me.height,Ue,Be,Me.data):t.texImage2D(r.TEXTURE_2D,de,Ae,Me.width,Me.height,0,Ue,Be,Me.data)}else if(M.isDataArrayTexture)if(st){if(pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,Ae,pe.width,pe.height,pe.depth),z)if(M.layerUpdates.size>0){const de=ug(pe.width,pe.height,M.format,M.type);for(const Oe of M.layerUpdates){const Re=pe.data.subarray(Oe*de/pe.data.BYTES_PER_ELEMENT,(Oe+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Oe,pe.width,pe.height,1,Ue,Be,Re)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Be,pe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,pe.width,pe.height,pe.depth,0,Ue,Be,pe.data);else if(M.isData3DTexture)st?(pt&&t.texStorage3D(r.TEXTURE_3D,we,Ae,pe.width,pe.height,pe.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Be,pe.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,pe.width,pe.height,pe.depth,0,Ue,Be,pe.data);else if(M.isFramebufferTexture){if(pt)if(st)t.texStorage2D(r.TEXTURE_2D,we,Ae,pe.width,pe.height);else{let de=pe.width,Oe=pe.height;for(let Re=0;Re<we;Re++)t.texImage2D(r.TEXTURE_2D,Re,Ae,de,Oe,0,Ue,Be,null),de>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const de=r.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),pe.parentNode!==de){de.appendChild(pe),v.add(M),de.onpaint=at=>{const It=at.changedElements;for(const Tt of v)It.includes(Tt.image)&&(Tt.needsUpdate=!0)},de.requestPaint();return}const Oe=0,Re=r.RGBA,_e=r.RGBA,je=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Oe,Re,_e,je,pe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(st&&pt){const de=zt(nt[0]);t.texStorage2D(r.TEXTURE_2D,we,Ae,de.width,de.height)}for(let de=0,Oe=nt.length;de<Oe;de++)Me=nt[de],st?z&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ue,Be,Me):t.texImage2D(r.TEXTURE_2D,de,Ae,Ue,Be,Me);M.generateMipmaps=!1}else if(st){if(pt){const de=zt(pe);t.texStorage2D(r.TEXTURE_2D,we,Ae,de.width,de.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,Be,pe)}else t.texImage2D(r.TEXTURE_2D,0,Ae,Ue,Be,pe);S(M)&&R(he),Pe.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Qe(P,M,$){if(M.image.length!==6)return;const he=ae(P,M),ge=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+$);const Ee=s.get(ge);if(ge.version!==Ee.__version||he===!0){t.activeTexture(r.TEXTURE0+$);const Pe=vt.getPrimaries(vt.workingColorSpace),ce=M.colorSpace===Ur?null:vt.getPrimaries(M.colorSpace),pe=M.colorSpace===Ur||Pe===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let _e=0;_e<6;_e++)!Ue&&!Be?Ae[_e]=x(M.image[_e],!0,o.maxCubemapSize):Ae[_e]=Be?M.image[_e].image:M.image[_e],Ae[_e]=Le(M,Ae[_e]);const Me=Ae[0],nt=l.convert(M.format,M.colorSpace),st=l.convert(M.type),pt=L(M.internalFormat,nt,st,M.normalized,M.colorSpace),z=M.isVideoTexture!==!0,we=Ee.__version===void 0||he===!0,de=ge.dataReady;let Oe=D(M,Me);Ne(r.TEXTURE_CUBE_MAP,M);let Re;if(Ue){z&&we&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,pt,Me.width,Me.height);for(let _e=0;_e<6;_e++){Re=Ae[_e].mipmaps;for(let je=0;je<Re.length;je++){const at=Re[je];M.format!==_i?nt!==null?z?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,at.width,at.height,nt,at.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,pt,at.width,at.height,0,at.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,at.width,at.height,nt,st,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,pt,at.width,at.height,0,nt,st,at.data)}}}else{if(Re=M.mipmaps,z&&we){Re.length>0&&Oe++;const _e=zt(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,pt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Be){z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ae[_e].width,Ae[_e].height,nt,st,Ae[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,Ae[_e].width,Ae[_e].height,0,nt,st,Ae[_e].data);for(let je=0;je<Re.length;je++){const It=Re[je].image[_e].image;z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,It.width,It.height,nt,st,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,pt,It.width,It.height,0,nt,st,It.data)}}else{z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,nt,st,Ae[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,nt,st,Ae[_e]);for(let je=0;je<Re.length;je++){const at=Re[je];z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,nt,st,at.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,pt,nt,st,at.image[_e])}}}S(M)&&R(r.TEXTURE_CUBE_MAP),Ee.__version=ge.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Je(P,M,$,he,ge,Ee){const Pe=l.convert($.format,$.colorSpace),ce=l.convert($.type),pe=L($.internalFormat,Pe,ce,$.normalized,$.colorSpace),Ue=s.get(M),Be=s.get($);if(Be.__renderTarget=M,!Ue.__hasExternalTextures){const Ae=Math.max(1,M.width>>Ee),Me=Math.max(1,M.height>>Ee);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ee,pe,Ae,Me,M.depth,0,Pe,ce,null):t.texImage2D(ge,Ee,pe,Ae,Me,0,Pe,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),dt(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ge,Be.__webglTexture,0,Ot(M)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ge,Be.__webglTexture,Ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(P,M,$){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const he=M.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Ee=N(M.stencilBuffer,ge),Pe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;dt(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(M),Ee,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(M),Ee,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,P)}else{const he=M.textures;for(let ge=0;ge<he.length;ge++){const Ee=he[ge],Pe=l.convert(Ee.format,Ee.colorSpace),ce=l.convert(Ee.type),pe=L(Ee.internalFormat,Pe,ce,Ee.normalized,Ee.colorSpace);dt(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(M),pe,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(M),pe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,pe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(P,M,$){const he=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ue=l.convert(M.depthTexture.format),Be=l.convert(M.depthTexture.type);let Ae;M.depthTexture.format===ar?Ae=r.DEPTH_COMPONENT24:M.depthTexture.format===os&&(Ae=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ae,M.width,M.height,0,Ue,Be,null)}}else Y(M.depthTexture,0);const Ee=ge.__webglTexture,Pe=Ot(M),ce=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,pe=M.depthTexture.format===os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ar)dt(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ce,Ee,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ce,Ee,0);else if(M.depthTexture.format===os)dt(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ce,Ee,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ce,Ee,0);else throw new Error("Unknown depthTexture format")}function Mt(P){const M=s.get(P),$=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const he=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=he}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let he=0;he<6;he++)ct(M.__webglFramebuffer[he],P,he);else{const he=P.texture.mipmaps;he&&he.length>0?ct(M.__webglFramebuffer[0],P,0):ct(M.__webglFramebuffer,P,0)}else if($){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=r.createRenderbuffer(),Ut(M.__webglDepthbuffer[he],P,!1);else{const ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ee)}}else{const he=P.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ut(M.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(P,M,$){const he=s.get(P);M!==void 0&&Je(he.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&Mt(P)}function ft(P){const M=P.texture,$=s.get(P),he=s.get(M);P.addEventListener("dispose",w);const ge=P.textures,Ee=P.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=M.version,c.memory.textures++),Ee){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let pe=0;pe<M.mipmaps.length;pe++)$.__webglFramebuffer[ce][pe]=r.createFramebuffer()}else $.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)$.__webglFramebuffer[ce]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let ce=0,pe=ge.length;ce<pe;ce++){const Ue=s.get(ge[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&dt(P)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<ge.length;ce++){const pe=ge[ce];$.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);const Ue=l.convert(pe.format,pe.colorSpace),Be=l.convert(pe.type),Ae=L(pe.internalFormat,Ue,Be,pe.normalized,pe.colorSpace,P.isXRRenderTarget===!0),Me=Ot(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,Ae,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Je($.__webglFramebuffer[ce][pe],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else Je($.__webglFramebuffer[ce],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);S(M)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ce=0,pe=ge.length;ce<pe;ce++){const Ue=ge[ce],Be=s.get(Ue);let Ae=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Be.__webglTexture),Ne(Ae,Ue),Je($.__webglFramebuffer,P,Ue,r.COLOR_ATTACHMENT0+ce,Ae,0),S(Ue)&&R(Ae)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,he.__webglTexture),Ne(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Je($.__webglFramebuffer[pe],P,M,r.COLOR_ATTACHMENT0,ce,pe);else Je($.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,ce,0);S(M)&&R(ce),t.unbindTexture()}P.depthBuffer&&Mt(P)}function jt(P){const M=P.textures;for(let $=0,he=M.length;$<he;$++){const ge=M[$];if(S(ge)){const Ee=b(P),Pe=s.get(ge).__webglTexture;t.bindTexture(Ee,Pe),R(Ee),t.unbindTexture()}}}const Ft=[],pn=[];function V(P){if(P.samples>0){if(dt(P)===!1){const M=P.textures,$=P.width,he=P.height;let ge=r.COLOR_BUFFER_BIT;const Ee=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(P),ce=M.length>1;if(ce)for(let Ue=0;Ue<M.length;Ue++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const pe=P.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const Be=s.get(M[Ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,$,he,0,0,$,he,ge,r.NEAREST),h===!0&&(Ft.length=0,pn.length=0,Ft.push(r.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ft.push(Ee),pn.push(Ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Ue=0;Ue<M.length;Ue++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const Be=s.get(M[Ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,Be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ot(P){return Math.min(o.maxSamples,P.samples)}function dt(P){const M=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(P){const M=c.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function Le(P,M){const $=P.colorSpace,he=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==eu&&$!==Ur&&(vt.getTransfer($)===Pt?(he!==_i||ge!==ni)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",$)),M}function zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=ue,this.getTextureUnits=fe,this.setTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=le,this.setTexture3D=oe,this.setTextureCube=O,this.rebindTextures=Lt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NT(r,e){function t(s,o=Ur){let l;const c=vt.getTransfer(o);if(s===ni)return r.UNSIGNED_BYTE;if(s===Fd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Od)return r.UNSIGNED_SHORT_5_5_5_1;if(s===p0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===m0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===d0)return r.BYTE;if(s===h0)return r.SHORT;if(s===io)return r.UNSIGNED_SHORT;if(s===Ud)return r.INT;if(s===Ui)return r.UNSIGNED_INT;if(s===bi)return r.FLOAT;if(s===sr)return r.HALF_FLOAT;if(s===g0)return r.ALPHA;if(s===_0)return r.RGB;if(s===_i)return r.RGBA;if(s===ar)return r.DEPTH_COMPONENT;if(s===os)return r.DEPTH_STENCIL;if(s===v0)return r.RED;if(s===Bd)return r.RED_INTEGER;if(s===cs)return r.RG;if(s===kd)return r.RG_INTEGER;if(s===zd)return r.RGBA_INTEGER;if(s===Xl||s===jl||s===Yl||s===$l)if(c===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xf||s===jf||s===Yf||s===$f)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Xf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$f)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qf||s===Kf||s===Zf||s===Qf||s===Jf||s===Ql||s===ed)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===qf||s===Kf)return c===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Zf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Qf)return l.COMPRESSED_R11_EAC;if(s===Jf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Ql)return l.COMPRESSED_RG11_EAC;if(s===ed)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===td||s===nd||s===id||s===rd||s===sd||s===ad||s===od||s===ld||s===ud||s===cd||s===fd||s===dd||s===hd||s===pd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===td)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===id)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ad)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===od)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ld)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ud)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===md||s===gd||s===_d)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===md)return c===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_d)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vd||s===xd||s===Jl||s===Sd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===vd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===xd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ro?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const IT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new R0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new xi({vertexShader:IT,fragmentShader:UT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fi(new ho(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OT extends ds{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,_=null,v=null,m=null,y=null,E=null;const C=typeof XRWebGLBinding<"u",x=new FT,S={},R=t.getContextAttributes();let b=null,L=null;const N=[],D=[],F=new Nt;let w=null;const U=new mi;U.viewport=new Jt;const j=new mi;j.viewport=new Jt;const B=[U,j],q=new Yy;let ue=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Se=N[ae];return Se===void 0&&(Se=new lf,N[ae]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ae){let Se=N[ae];return Se===void 0&&(Se=new lf,N[ae]=Se),Se.getGripSpace()},this.getHand=function(ae){let Se=N[ae];return Se===void 0&&(Se=new lf,N[ae]=Se),Se.getHandSpace()};function H(ae){const Se=D.indexOf(ae.inputSource);if(Se===-1)return;const me=N[Se];me!==void 0&&(me.update(ae.inputSource,ae.frame,p||c),me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Q(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",X);for(let ae=0;ae<N.length;ae++){const Se=D[ae];Se!==null&&(D[ae]=null,N[ae].disconnect(Se))}ue=null,fe=null,x.reset();for(const ae in S)delete S[ae];e.setRenderTarget(b),y=null,m=null,v=null,o=null,L=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,s.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,s.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",X),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,Qe=null;R.depth&&(Qe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=R.stencil?os:ar,Ie=R.stencil?ro:Ui);const Je={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:l};v=this.getBinding(),m=v.createProjectionLayer(Je),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),L=new Di(m.textureWidth,m.textureHeight,{format:_i,type:ni,depthTexture:new ia(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Di(y.framebufferWidth,y.framebufferHeight,{format:_i,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Ne.setContext(o),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(ae){for(let Se=0;Se<ae.removed.length;Se++){const me=ae.removed[Se],Ie=D.indexOf(me);Ie>=0&&(D[Ie]=null,N[Ie].disconnect(me))}for(let Se=0;Se<ae.added.length;Se++){const me=ae.added[Se];let Ie=D.indexOf(me);if(Ie===-1){for(let Je=0;Je<N.length;Je++)if(Je>=D.length){D.push(me),Ie=Je;break}else if(D[Je]===null){D[Je]=me,Ie=Je;break}if(Ie===-1)break}const Qe=N[Ie];Qe&&Qe.connect(me)}}const Y=new ie,le=new ie;function oe(ae,Se,me){Y.setFromMatrixPosition(Se.matrixWorld),le.setFromMatrixPosition(me.matrixWorld);const Ie=Y.distanceTo(le),Qe=Se.projectionMatrix.elements,Je=me.projectionMatrix.elements,Ut=Qe[14]/(Qe[10]-1),ct=Qe[14]/(Qe[10]+1),Mt=(Qe[9]+1)/Qe[5],Lt=(Qe[9]-1)/Qe[5],ft=(Qe[8]-1)/Qe[0],jt=(Je[8]+1)/Je[0],Ft=Ut*ft,pn=Ut*jt,V=Ie/(-ft+jt),Ot=V*-ft;if(Se.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ot),ae.translateZ(V),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Qe[10]===-1)ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const dt=Ut+V,Ct=ct+V,Le=Ft-Ot,zt=pn+(Ie-Ot),P=Mt*ct/Ct*dt,M=Lt*ct/Ct*dt;ae.projectionMatrix.makePerspective(Le,zt,P,M,dt,Ct),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,Se){Se===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Se.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Se=ae.near,me=ae.far;x.texture!==null&&(x.depthNear>0&&(Se=x.depthNear),x.depthFar>0&&(me=x.depthFar)),q.near=j.near=U.near=Se,q.far=j.far=U.far=me,(ue!==q.near||fe!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),ue=q.near,fe=q.far),q.layers.mask=ae.layers.mask|6,U.layers.mask=q.layers.mask&-5,j.layers.mask=q.layers.mask&-3;const Ie=ae.parent,Qe=q.cameras;O(q,Ie);for(let Je=0;Je<Qe.length;Je++)O(Qe[Je],Ie);Qe.length===2?oe(q,U,j):q.projectionMatrix.copy(U.projectionMatrix),J(ae,q,Ie)};function J(ae,Se,me){me===null?ae.matrix.copy(Se.matrixWorld):(ae.matrix.copy(me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Se.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ed*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(ae){h=ae,m!==null&&(m.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(q)},this.getCameraTexture=function(ae){return S[ae]};let Fe=null;function Ve(ae,Se){if(_=Se.getViewerPose(p||c),E=Se,_!==null){const me=_.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Ie=!1;me.length!==q.cameras.length&&(q.cameras.length=0,Ie=!0);for(let ct=0;ct<me.length;ct++){const Mt=me[ct];let Lt=null;if(y!==null)Lt=y.getViewport(Mt);else{const jt=v.getViewSubImage(m,Mt);Lt=jt.viewport,ct===0&&(e.setRenderTargetTextures(L,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(L))}let ft=B[ct];ft===void 0&&(ft=new mi,ft.layers.enable(ct),ft.viewport=new Jt,B[ct]=ft),ft.matrix.fromArray(Mt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Mt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ct===0&&(q.matrix.copy(ft.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ie===!0&&q.cameras.push(ft)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const ct=v.getDepthInformation(me[0]);ct&&ct.isValid&&ct.texture&&x.init(ct,o.renderState)}if(Qe&&Qe.includes("camera-access")&&C){e.state.unbindTexture(),v=s.getBinding();for(let ct=0;ct<me.length;ct++){const Mt=me[ct].camera;if(Mt){let Lt=S[Mt];Lt||(Lt=new R0,S[Mt]=Lt);const ft=v.getCameraImage(Mt);Lt.sourceTexture=ft}}}}for(let me=0;me<N.length;me++){const Ie=D[me],Qe=N[me];Ie!==null&&Qe!==void 0&&Qe.update(Ie,Se,p||c)}Fe&&Fe(ae,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),E=null}const Ne=new L0;Ne.setAnimationLoop(Ve),this.setAnimationLoop=function(ae){Fe=ae},this.dispose=function(){}}}const BT=new on,B0=new ut;B0.set(-1,0,0,0,1,0,0,0,1);function kT(r,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function s(x,S){S.color.getRGB(x.fogColor.value,b0(r)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,R,b,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),v(x,S)):S.isMeshPhongMaterial?(l(x,S),_(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),m(x,S),S.isMeshPhysicalMaterial&&y(x,S,L)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),C(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(c(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?h(x,S,R,b):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===kn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===kn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const R=e.get(S),b=R.envMap,L=R.envMapRotation;b&&(x.envMap.value=b,x.envMapRotation.value.setFromMatrix4(BT.makeRotationFromEuler(L)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(B0),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function c(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function h(x,S,R,b){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*R,x.scale.value=b*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function _(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function v(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function m(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,R){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function C(x,S){const R=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function zT(r,e,t,s){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,b){const L=b.program;s.uniformBlockBinding(R,L)}function p(R,b){let L=o[R.id];L===void 0&&(E(R),L=_(R),o[R.id]=L,R.addEventListener("dispose",x));const N=b.program;s.updateUBOMapping(R,N);const D=e.render.frame;l[R.id]!==D&&(m(R),l[R.id]=D)}function _(R){const b=v();R.__bindingPointIndex=b;const L=r.createBuffer(),N=R.__size,D=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,N,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,L),L}function v(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const b=o[R.id],L=R.uniforms,N=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let D=0,F=L.length;D<F;D++){const w=Array.isArray(L[D])?L[D]:[L[D]];for(let U=0,j=w.length;U<j;U++){const B=w[U];if(y(B,D,U,N)===!0){const q=B.__offset,ue=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let H=0;H<ue.length;H++){const Q=ue[H],X=C(Q);typeof Q=="number"||typeof Q=="boolean"?(B.__data[0]=Q,r.bufferSubData(r.UNIFORM_BUFFER,q+fe,B.__data)):Q.isMatrix3?(B.__data[0]=Q.elements[0],B.__data[1]=Q.elements[1],B.__data[2]=Q.elements[2],B.__data[3]=0,B.__data[4]=Q.elements[3],B.__data[5]=Q.elements[4],B.__data[6]=Q.elements[5],B.__data[7]=0,B.__data[8]=Q.elements[6],B.__data[9]=Q.elements[7],B.__data[10]=Q.elements[8],B.__data[11]=0):ArrayBuffer.isView(Q)?B.__data.set(new Q.constructor(Q.buffer,Q.byteOffset,B.__data.length)):(Q.toArray(B.__data,fe),fe+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,b,L,N){const D=R.value,F=b+"_"+L;if(N[F]===void 0)return typeof D=="number"||typeof D=="boolean"?N[F]=D:ArrayBuffer.isView(D)?N[F]=D.slice():N[F]=D.clone(),!0;{const w=N[F];if(typeof D=="number"||typeof D=="boolean"){if(w!==D)return N[F]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(w.equals(D)===!1)return w.copy(D),!0}}return!1}function E(R){const b=R.uniforms;let L=0;const N=16;for(let F=0,w=b.length;F<w;F++){const U=Array.isArray(b[F])?b[F]:[b[F]];for(let j=0,B=U.length;j<B;j++){const q=U[j],ue=Array.isArray(q.value)?q.value:[q.value];for(let fe=0,H=ue.length;fe<H;fe++){const Q=ue[fe],X=C(Q),Y=L%N,le=Y%X.boundary,oe=Y+le;L+=le,oe!==0&&N-oe<X.storage&&(L+=N-oe),q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=L,L+=X.storage}}}const D=L%N;return D>0&&(L+=N-D),R.__size=L,R.__cache={},this}function C(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(b.boundary=16,b.storage=R.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",R),b}function x(R){const b=R.target;b.removeEventListener("dispose",x);const L=c.indexOf(b.__bindingPointIndex);c.splice(L,1),r.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function S(){for(const R in o)r.deleteBuffer(o[R]);c=[],o={},l={}}return{bind:h,update:p,dispose:S}}const HT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function VT(){return Ci===null&&(Ci=new by(HT,16,16,cs,sr),Ci.name="DFG_LUT",Ci.minFilter=rn,Ci.magFilter=rn,Ci.wrapS=er,Ci.wrapT=er,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class GT{constructor(e={}){const{canvas:t=sy(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:y=ni}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=c;const C=y,x=new Set([zd,kd,Bd]),S=new Set([ni,Ui,io,ro,Fd,Od]),R=new Uint32Array(4),b=new Int32Array(4),L=new ie;let N=null,D=null;const F=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let B=!1,q=null;this._outputColorSpace=ti;let ue=0,fe=0,H=null,Q=-1,X=null;const Y=new Jt,le=new Jt;let oe=null;const O=new Dt(0);let J=0,Fe=t.width,Ve=t.height,Ne=1,ae=null,Se=null;const me=new Jt(0,0,Fe,Ve),Ie=new Jt(0,0,Fe,Ve);let Qe=!1;const Je=new A0;let Ut=!1,ct=!1;const Mt=new on,Lt=new ie,ft=new Jt,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function pn(){return H===null?Ne:1}let V=s;function Ot(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Id}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",at,!1),V===null){const W="webgl2";if(V=Ot(W,A),V===null)throw Ot(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let dt,Ct,Le,zt,P,M,$,he,ge,Ee,Pe,ce,pe,Ue,Be,Ae,Me,nt,st,pt,z,we,de;function Oe(){dt=new V2(V),dt.init(),z=new NT(V,dt),Ct=new I2(V,dt,e,z),Le=new LT(V,dt),Ct.reversedDepthBuffer&&m&&Le.buffers.depth.setReversed(!0),zt=new X2(V),P=new _T,M=new DT(V,dt,Le,P,Ct,z,zt),$=new H2(j),he=new qy(V),we=new D2(V,he),ge=new G2(V,he,zt,we),Ee=new Y2(V,ge,he,we,zt),nt=new j2(V,Ct,M),Be=new U2(P),Pe=new gT(j,$,dt,Ct,we,Be),ce=new kT(j,P),pe=new xT,Ue=new wT(dt),Me=new L2(j,$,Le,Ee,E,h),Ae=new PT(j,Ee,Ct),de=new zT(V,zt,Ct,Le),st=new N2(V,dt,zt),pt=new W2(V,dt,zt),zt.programs=Pe.programs,j.capabilities=Ct,j.extensions=dt,j.properties=P,j.renderLists=pe,j.shadowMap=Ae,j.state=Le,j.info=zt}Oe(),C!==ni&&(U=new q2(C,t.width,t.height,o,l));const Re=new OT(j,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(A){A!==void 0&&(Ne=A,this.setSize(Fe,Ve,!1))},this.getSize=function(A){return A.set(Fe,Ve)},this.setSize=function(A,W,re=!0){if(Re.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=A,Ve=W,t.width=Math.floor(A*Ne),t.height=Math.floor(W*Ne),re===!0&&(t.style.width=A+"px",t.style.height=W+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(Fe*Ne,Ve*Ne).floor()},this.setDrawingBufferSize=function(A,W,re){Fe=A,Ve=W,Ne=re,t.width=Math.floor(A*re),t.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(C===ni){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,W,re,ee){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,W,re,ee),Le.viewport(Y.copy(me).multiplyScalar(Ne).round())},this.getScissor=function(A){return A.copy(Ie)},this.setScissor=function(A,W,re,ee){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,W,re,ee),Le.scissor(le.copy(Ie).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){Le.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,re=!0){let ee=0;if(A){let Z=!1;if(H!==null){const be=H.texture.format;Z=x.has(be)}if(Z){const be=H.texture.type,He=S.has(be),Ce=Me.getClearColor(),Ye=Me.getClearAlpha(),Ze=Ce.r,ot=Ce.g,lt=Ce.b;He?(R[0]=Ze,R[1]=ot,R[2]=lt,R[3]=Ye,V.clearBufferuiv(V.COLOR,0,R)):(b[0]=Ze,b[1]=ot,b[2]=lt,b[3]=Ye,V.clearBufferiv(V.COLOR,0,b))}else ee|=V.COLOR_BUFFER_BIT}W&&(ee|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Me.dispose(),pe.dispose(),Ue.dispose(),P.dispose(),$.dispose(),Ee.dispose(),we.dispose(),de.dispose(),Pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Br),Re.removeEventListener("sessionend",ps),Bi.stop()};function _e(A){A.preventDefault(),Gm("WebGLRenderer: Context Lost."),B=!0}function je(){Gm("WebGLRenderer: Context Restored."),B=!1;const A=zt.autoReset,W=Ae.enabled,re=Ae.autoUpdate,ee=Ae.needsUpdate,Z=Ae.type;Oe(),zt.autoReset=A,Ae.enabled=W,Ae.autoUpdate=re,Ae.needsUpdate=ee,Ae.type=Z}function at(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function It(A){const W=A.target;W.removeEventListener("dispose",It),Tt(W)}function Tt(A){An(A),P.remove(A)}function An(A){const W=P.get(A).programs;W!==void 0&&(W.forEach(function(re){Pe.releaseProgram(re)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,ee,Z,be){W===null&&(W=jt);const He=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=go(A,W,re,ee,Z);Le.setMaterial(ee,He);let Ye=re.index,Ze=1;if(ee.wireframe===!0){if(Ye=ge.getWireframeAttribute(re),Ye===void 0)return;Ze=2}const ot=re.drawRange,lt=re.attributes.position;let qe=ot.start*Ze,St=(ot.start+ot.count)*Ze;be!==null&&(qe=Math.max(qe,be.start*Ze),St=Math.min(St,(be.start+be.count)*Ze)),Ye!==null?(qe=Math.max(qe,0),St=Math.min(St,Ye.count)):lt!=null&&(qe=Math.max(qe,0),St=Math.min(St,lt.count));const Bt=St-qe;if(Bt<0||Bt===1/0)return;we.setup(Z,ee,Ce,re,Ye);let Wt,Rt=st;if(Ye!==null&&(Wt=he.get(Ye),Rt=pt,Rt.setIndex(Wt)),Z.isMesh)ee.wireframe===!0?(Le.setLineWidth(ee.wireframeLinewidth*pn()),Rt.setMode(V.LINES)):Rt.setMode(V.TRIANGLES);else if(Z.isLine){let en=ee.linewidth;en===void 0&&(en=1),Le.setLineWidth(en*pn()),Z.isLineSegments?Rt.setMode(V.LINES):Z.isLineLoop?Rt.setMode(V.LINE_LOOP):Rt.setMode(V.LINE_STRIP)}else Z.isPoints?Rt.setMode(V.POINTS):Z.isSprite&&Rt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const en=Z._multiDrawStarts,ke=Z._multiDrawCounts,mn=Z._multiDrawCount,mt=Ye?he.get(Ye).bytesPerElement:1,Pn=P.get(ee).currentProgram.getUniforms();for(let Ln=0;Ln<mn;Ln++)Pn.setValue(V,"_gl_DrawID",Ln),Rt.render(en[Ln]/mt,ke[Ln])}else if(Z.isInstancedMesh)Rt.renderInstances(qe,Bt,Z.count);else if(re.isInstancedBufferGeometry){const en=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ke=Math.min(re.instanceCount,en);Rt.renderInstances(qe,Bt,ke)}else Rt.render(qe,Bt)};function Yn(A,W,re){A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,ms(A,W,re),A.side=Or,A.needsUpdate=!0,ms(A,W,re),A.side=Ji):ms(A,W,re)}this.compile=function(A,W,re=null){re===null&&(re=A),D=Ue.get(re),D.init(W),w.push(D),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),A!==re&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),D.setupLights();const ee=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const be=Z.material;if(be)if(Array.isArray(be))for(let He=0;He<be.length;He++){const Ce=be[He];Yn(Ce,re,Z),ee.add(Ce)}else Yn(be,re,Z),ee.add(be)}),D=w.pop(),ee},this.compileAsync=function(A,W,re=null){const ee=this.compile(A,W,re);return new Promise(Z=>{function be(){if(ee.forEach(function(He){P.get(He).currentProgram.isReady()&&ee.delete(He)}),ee.size===0){Z(A);return}setTimeout(be,10)}dt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Oi=null;function hs(A){Oi&&Oi(A)}function Br(){Bi.stop()}function ps(){Bi.start()}const Bi=new L0;Bi.setAnimationLoop(hs),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(A){Oi=A,Re.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},Re.addEventListener("sessionstart",Br),Re.addEventListener("sessionend",ps),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;q!==null&&q.renderStart(A,W);const re=Re.enabled===!0&&Re.isPresenting===!0,ee=U!==null&&(H===null||re)&&U.begin(j,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,W,H),D=Ue.get(A,w.length),D.init(W),D.state.textureUnits=M.getTextureUnits(),w.push(D),Mt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Je.setFromProjectionMatrix(Mt,Pi,W.reversedDepth),ct=this.localClippingEnabled,Ut=Be.init(this.clippingPlanes,ct),N=pe.get(A,F.length),N.init(),F.push(N),Re.enabled===!0&&Re.isPresenting===!0){const He=j.xr.getDepthSensingMesh();He!==null&&ua(He,W,-1/0,j.sortObjects)}ua(A,W,0,j.sortObjects),N.finish(),j.sortObjects===!0&&N.sort(ae,Se),Ft=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ft&&Me.addToRenderList(N,A),this.info.render.frame++,Ut===!0&&Be.beginShadows();const Z=D.state.shadowsArray;if(Ae.render(Z,A,W),Ut===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&U.hasRenderPass())===!1){const He=N.opaque,Ce=N.transmissive;if(D.setupLights(),W.isArrayCamera){const Ye=W.cameras;if(Ce.length>0)for(let Ze=0,ot=Ye.length;Ze<ot;Ze++){const lt=Ye[Ze];Si(He,Ce,A,lt)}Ft&&Me.render(A);for(let Ze=0,ot=Ye.length;Ze<ot;Ze++){const lt=Ye[Ze];po(N,A,lt,lt.viewport)}}else Ce.length>0&&Si(He,Ce,A,W),Ft&&Me.render(A),po(N,A,W)}H!==null&&fe===0&&(M.updateMultisampleRenderTarget(H),M.updateRenderTargetMipmap(H)),ee&&U.end(j),A.isScene===!0&&A.onAfterRender(j,A,W),we.resetDefaultState(),Q=-1,X=null,w.pop(),w.length>0?(D=w[w.length-1],M.setTextureUnits(D.state.textureUnits),Ut===!0&&Be.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?N=F[F.length-1]:N=null,q!==null&&q.renderEnd()};function ua(A,W,re,ee){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Je.intersectsSprite(A)){ee&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const He=Ee.update(A),Ce=A.material;Ce.visible&&N.push(A,He,Ce,re,ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Je.intersectsObject(A))){const He=Ee.update(A),Ce=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ft.copy(He.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ce)){const Ye=He.groups;for(let Ze=0,ot=Ye.length;Ze<ot;Ze++){const lt=Ye[Ze],qe=Ce[lt.materialIndex];qe&&qe.visible&&N.push(A,He,qe,re,ft.z,lt)}}else Ce.visible&&N.push(A,He,Ce,re,ft.z,null)}}const be=A.children;for(let He=0,Ce=be.length;He<Ce;He++)ua(be[He],W,re,ee)}function po(A,W,re,ee){const{opaque:Z,transmissive:be,transparent:He}=A;D.setupLightsView(re),Ut===!0&&Be.setGlobalState(j.clippingPlanes,re),ee&&Le.viewport(Y.copy(ee)),Z.length>0&&kr(Z,W,re),be.length>0&&kr(be,W,re),He.length>0&&kr(He,W,re),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Si(A,W,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ee.id]===void 0){const qe=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ee.id]=new Di(1,1,{generateMipmaps:!0,type:qe?sr:ni,minFilter:as,samples:Math.max(4,Ct.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const be=D.state.transmissionRenderTarget[ee.id],He=ee.viewport||Y;be.setSize(He.z*j.transmissionResolutionScale,He.w*j.transmissionResolutionScale);const Ce=j.getRenderTarget(),Ye=j.getActiveCubeFace(),Ze=j.getActiveMipmapLevel();j.setRenderTarget(be),j.getClearColor(O),J=j.getClearAlpha(),J<1&&j.setClearColor(16777215,.5),j.clear(),Ft&&Me.render(re);const ot=j.toneMapping;j.toneMapping=Li;const lt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),D.setupLightsView(ee),Ut===!0&&Be.setGlobalState(j.clippingPlanes,ee),kr(A,re,ee),M.updateMultisampleRenderTarget(be),M.updateRenderTargetMipmap(be),dt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let St=0,Bt=W.length;St<Bt;St++){const Wt=W[St],{object:Rt,geometry:en,material:ke,group:mn}=Wt;if(ke.side===Ji&&Rt.layers.test(ee.layers)){const mt=ke.side;ke.side=kn,ke.needsUpdate=!0,ca(Rt,re,ee,en,ke,mn),ke.side=mt,ke.needsUpdate=!0,qe=!0}}qe===!0&&(M.updateMultisampleRenderTarget(be),M.updateRenderTargetMipmap(be))}j.setRenderTarget(Ce,Ye,Ze),j.setClearColor(O,J),lt!==void 0&&(ee.viewport=lt),j.toneMapping=ot}function kr(A,W,re){const ee=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,be=A.length;Z<be;Z++){const He=A[Z],{object:Ce,geometry:Ye,group:Ze}=He;let ot=He.material;ot.allowOverride===!0&&ee!==null&&(ot=ee),Ce.layers.test(re.layers)&&ca(Ce,W,re,Ye,ot,Ze)}}function ca(A,W,re,ee,Z,be){A.onBeforeRender(j,W,re,ee,Z,be),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(j,W,re,ee,A,be),Z.transparent===!0&&Z.side===Ji&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,j.renderBufferDirect(re,W,ee,Z,A,be),Z.side=Or,Z.needsUpdate=!0,j.renderBufferDirect(re,W,ee,Z,A,be),Z.side=Ji):j.renderBufferDirect(re,W,ee,Z,A,be),A.onAfterRender(j,W,re,ee,Z,be)}function ms(A,W,re){W.isScene!==!0&&(W=jt);const ee=P.get(A),Z=D.state.lights,be=D.state.shadowsArray,He=Z.state.version,Ce=Pe.getParameters(A,Z.state,be,W,re,D.state.lightProbeGridArray),Ye=Pe.getProgramCacheKey(Ce);let Ze=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ee.fog=W.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=$.get(A.envMap||ee.environment,ot),ee.envMapRotation=ee.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",It),Ze=new Map,ee.programs=Ze);let lt=Ze.get(Ye);if(lt!==void 0){if(ee.currentProgram===lt&&ee.lightsStateVersion===He)return da(A,Ce),lt}else Ce.uniforms=Pe.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,re,Ce),A.onBeforeCompile(Ce,j),lt=Pe.acquireProgram(Ce,Ye),Ze.set(Ye,lt),ee.uniforms=Ce.uniforms;const qe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Be.uniform),da(A,Ce),ee.needsLights=hu(A),ee.lightsStateVersion=He,ee.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.lightProbeGrid=D.state.lightProbeGridArray.length>0,ee.currentProgram=lt,ee.uniformsList=null,lt}function fa(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=ql.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function da(A,W){const re=P.get(A);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function mo(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(W.matrixWorld);for(let re=0,ee=A.length;re<ee;re++){const Z=A[re];if(Z.texture!==null&&Z.boundingBox.containsPoint(L))return Z}return null}function go(A,W,re,ee,Z){W.isScene!==!0&&(W=jt),M.resetTextureUnits();const be=W.fog,He=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?W.environment:null,Ce=H===null?j.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:vt.workingColorSpace,Ye=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ze=$.get(ee.envMap||He,Ye),ot=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!re.morphAttributes.position,St=!!re.morphAttributes.normal,Bt=!!re.morphAttributes.color;let Wt=Li;ee.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Wt=j.toneMapping);const Rt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,en=Rt!==void 0?Rt.length:0,ke=P.get(ee),mn=D.state.lights;if(Ut===!0&&(ct===!0||A!==X)){const bt=A===X&&ee.id===Q;Be.setState(ee,A,bt)}let mt=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==mn.state.version||ke.outputColorSpace!==Ce||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isBatchedMesh&&ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ke.instancingMorph===!1&&Z.morphTexture!==null||ke.envMap!==Ze||ee.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Be.numPlanes||ke.numIntersection!==Be.numIntersection)||ke.vertexAlphas!==ot||ke.vertexTangents!==lt||ke.morphTargets!==qe||ke.morphNormals!==St||ke.morphColors!==Bt||ke.toneMapping!==Wt||ke.morphTargetsCount!==en||!!ke.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,ke.__version=ee.version);let Pn=ke.currentProgram;mt===!0&&(Pn=ms(ee,W,Z),q&&ee.isNodeMaterial&&q.onUpdateProgram(ee,Pn,ke));let Ln=!1,gt=!1,ki=!1;const At=Pn.getUniforms(),Ht=ke.uniforms;if(Le.useProgram(Pn.program)&&(Ln=!0,gt=!0,ki=!0),ee.id!==Q&&(Q=ee.id,gt=!0),ke.needsLights){const bt=mo(D.state.lightProbeGridArray,Z);ke.lightProbeGrid!==bt&&(ke.lightProbeGrid=bt,gt=!0)}if(Ln||X!==A){Le.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(V,"projectionMatrix",A.projectionMatrix),At.setValue(V,"viewMatrix",A.matrixWorldInverse);const si=At.map.cameraPosition;si!==void 0&&si.setValue(V,Lt.setFromMatrixPosition(A.matrixWorld)),Ct.logarithmicDepthBuffer&&At.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&At.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,gt=!0,ki=!0)}if(ke.needsLights&&(mn.state.directionalShadowMap.length>0&&At.setValue(V,"directionalShadowMap",mn.state.directionalShadowMap,M),mn.state.spotShadowMap.length>0&&At.setValue(V,"spotShadowMap",mn.state.spotShadowMap,M),mn.state.pointShadowMap.length>0&&At.setValue(V,"pointShadowMap",mn.state.pointShadowMap,M)),Z.isSkinnedMesh){At.setOptional(V,Z,"bindMatrix"),At.setOptional(V,Z,"bindMatrixInverse");const bt=Z.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),At.setValue(V,"boneTexture",bt.boneTexture,M))}Z.isBatchedMesh&&(At.setOptional(V,Z,"batchingTexture"),At.setValue(V,"batchingTexture",Z._matricesTexture,M),At.setOptional(V,Z,"batchingIdTexture"),At.setValue(V,"batchingIdTexture",Z._indirectTexture,M),At.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&At.setValue(V,"batchingColorTexture",Z._colorsTexture,M));const ri=re.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&nt.update(Z,re,Pn),(gt||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,At.setValue(V,"receiveShadow",Z.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&W.environment!==null&&(Ht.envMapIntensity.value=W.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=VT()),gt){if(At.setValue(V,"toneMappingExposure",j.toneMappingExposure),ke.needsLights&&du(Ht,ki),be&&ee.fog===!0&&ce.refreshFogUniforms(Ht,be),ce.refreshMaterialUniforms(Ht,ee,Ne,Ve,D.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const bt=ke.lightProbeGrid;Ht.probesSH.value=bt.texture,Ht.probesMin.value.copy(bt.boundingBox.min),Ht.probesMax.value.copy(bt.boundingBox.max),Ht.probesResolution.value.copy(bt.resolution)}ql.upload(V,fa(ke),Ht,M)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ql.upload(V,fa(ke),Ht,M),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&At.setValue(V,"center",Z.center),At.setValue(V,"modelViewMatrix",Z.modelViewMatrix),At.setValue(V,"normalMatrix",Z.normalMatrix),At.setValue(V,"modelMatrix",Z.matrixWorld),ee.uniformsGroups!==void 0){const bt=ee.uniformsGroups;for(let si=0,yi=bt.length;si<yi;si++){const zr=bt[si];de.update(zr,Pn),de.bind(zr,Pn)}}return Pn}function du(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function hu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,re){const ee=P.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),P.get(A.texture).__webglTexture=W,P.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const re=P.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const Yt=V.createFramebuffer();this.setRenderTarget=function(A,W=0,re=0){H=A,ue=W,fe=re;let ee=null,Z=!1,be=!1;if(A){const Ce=P.get(A);if(Ce.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(V.FRAMEBUFFER,Ce.__webglFramebuffer),Y.copy(A.viewport),le.copy(A.scissor),oe=A.scissorTest,Le.viewport(Y),Le.scissor(le),Le.setScissorTest(oe),Q=-1;return}else if(Ce.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Ce.__hasExternalTextures)M.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(Ce.__boundDepthTexture!==ot){if(ot!==null&&P.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(be=!0);const Ze=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?ee=Ze[W][re]:ee=Ze[W],Z=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?ee=P.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?ee=Ze[re]:ee=Ze,Y.copy(A.viewport),le.copy(A.scissor),oe=A.scissorTest}else Y.copy(me).multiplyScalar(Ne).floor(),le.copy(Ie).multiplyScalar(Ne).floor(),oe=Qe;if(re!==0&&(ee=Yt),Le.bindFramebuffer(V.FRAMEBUFFER,ee)&&Le.drawBuffers(A,ee),Le.viewport(Y),Le.scissor(le),Le.setScissorTest(oe),Z){const Ce=P.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,re)}else if(be){const Ce=W;for(let Ye=0;Ye<A.textures.length;Ye++){const Ze=P.get(A.textures[Ye]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,re,Ce)}}else if(A!==null&&re!==0){const Ce=P.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ce.__webglTexture,re)}Q=-1},this.readRenderTargetPixels=function(A,W,re,ee,Z,be,He,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye){Le.bindFramebuffer(V.FRAMEBUFFER,Ye);try{const Ze=A.textures[Ce],ot=Ze.format,lt=Ze.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!Ct.textureFormatReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ee&&re>=0&&re<=A.height-Z&&V.readPixels(W,re,ee,Z,z.convert(ot),z.convert(lt),be)}finally{const Ze=H!==null?P.get(H).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,re,ee,Z,be,He,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye)if(W>=0&&W<=A.width-ee&&re>=0&&re<=A.height-Z){Le.bindFramebuffer(V.FRAMEBUFFER,Ye);const Ze=A.textures[Ce],ot=Ze.format,lt=Ze.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!Ct.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.bufferData(V.PIXEL_PACK_BUFFER,be.byteLength,V.STREAM_READ),V.readPixels(W,re,ee,Z,z.convert(ot),z.convert(lt),0);const St=H!==null?P.get(H).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,St);const Bt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ay(V,Bt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,be),V.deleteBuffer(qe),V.deleteSync(Bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,re=0){const ee=Math.pow(2,-re),Z=Math.floor(A.image.width*ee),be=Math.floor(A.image.height*ee),He=W!==null?W.x:0,Ce=W!==null?W.y:0;M.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,He,Ce,Z,be),Le.unbindTexture()};const pu=V.createFramebuffer(),ha=V.createFramebuffer();this.copyTextureToTexture=function(A,W,re=null,ee=null,Z=0,be=0){let He,Ce,Ye,Ze,ot,lt,qe,St,Bt;const Wt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(re!==null)He=re.max.x-re.min.x,Ce=re.max.y-re.min.y,Ye=re.isBox3?re.max.z-re.min.z:1,Ze=re.min.x,ot=re.min.y,lt=re.isBox3?re.min.z:0;else{const Ht=Math.pow(2,-Z);He=Math.floor(Wt.width*Ht),Ce=Math.floor(Wt.height*Ht),A.isDataArrayTexture?Ye=Wt.depth:A.isData3DTexture?Ye=Math.floor(Wt.depth*Ht):Ye=1,Ze=0,ot=0,lt=0}ee!==null?(qe=ee.x,St=ee.y,Bt=ee.z):(qe=0,St=0,Bt=0);const Rt=z.convert(W.format),en=z.convert(W.type);let ke;W.isData3DTexture?(M.setTexture3D(W,0),ke=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(M.setTexture2DArray(W,0),ke=V.TEXTURE_2D_ARRAY):(M.setTexture2D(W,0),ke=V.TEXTURE_2D),Le.activeTexture(V.TEXTURE0),Le.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),Le.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Le.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const mn=Le.getParameter(V.UNPACK_ROW_LENGTH),mt=Le.getParameter(V.UNPACK_IMAGE_HEIGHT),Pn=Le.getParameter(V.UNPACK_SKIP_PIXELS),Ln=Le.getParameter(V.UNPACK_SKIP_ROWS),gt=Le.getParameter(V.UNPACK_SKIP_IMAGES);Le.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),Le.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),Le.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),Le.pixelStorei(V.UNPACK_SKIP_ROWS,ot),Le.pixelStorei(V.UNPACK_SKIP_IMAGES,lt);const ki=A.isDataArrayTexture||A.isData3DTexture,At=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Ht=P.get(A),ri=P.get(W),bt=P.get(Ht.__renderTarget),si=P.get(ri.__renderTarget);Le.bindFramebuffer(V.READ_FRAMEBUFFER,bt.__webglFramebuffer),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let yi=0;yi<Ye;yi++)ki&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,P.get(A).__webglTexture,Z,lt+yi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,P.get(W).__webglTexture,be,Bt+yi)),V.blitFramebuffer(Ze,ot,He,Ce,qe,St,He,Ce,V.DEPTH_BUFFER_BIT,V.NEAREST);Le.bindFramebuffer(V.READ_FRAMEBUFFER,null),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||P.has(A)){const Ht=P.get(A),ri=P.get(W);Le.bindFramebuffer(V.READ_FRAMEBUFFER,pu),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,ha);for(let bt=0;bt<Ye;bt++)ki?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ht.__webglTexture,Z,lt+bt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ht.__webglTexture,Z),At?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ri.__webglTexture,be,Bt+bt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ri.__webglTexture,be),Z!==0?V.blitFramebuffer(Ze,ot,He,Ce,qe,St,He,Ce,V.COLOR_BUFFER_BIT,V.NEAREST):At?V.copyTexSubImage3D(ke,be,qe,St,Bt+bt,Ze,ot,He,Ce):V.copyTexSubImage2D(ke,be,qe,St,Ze,ot,He,Ce);Le.bindFramebuffer(V.READ_FRAMEBUFFER,null),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(ke,be,qe,St,Bt,He,Ce,Ye,Rt,en,Wt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,be,qe,St,Bt,He,Ce,Ye,Rt,Wt.data):V.texSubImage3D(ke,be,qe,St,Bt,He,Ce,Ye,Rt,en,Wt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,be,qe,St,He,Ce,Rt,en,Wt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,be,qe,St,Wt.width,Wt.height,Rt,Wt.data):V.texSubImage2D(V.TEXTURE_2D,be,qe,St,He,Ce,Rt,en,Wt);Le.pixelStorei(V.UNPACK_ROW_LENGTH,mn),Le.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt),Le.pixelStorei(V.UNPACK_SKIP_PIXELS,Pn),Le.pixelStorei(V.UNPACK_SKIP_ROWS,Ln),Le.pixelStorei(V.UNPACK_SKIP_IMAGES,gt),be===0&&W.generateMipmaps&&V.generateMipmap(ke),Le.unbindTexture()},this.initRenderTarget=function(A){P.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){ue=0,fe=0,H=null,Le.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}function WT(){const r=ne.useRef(null),e=ne.useRef(null),t=ne.useRef(0),s=ne.useRef({x:0,y:0}),o=ne.useRef({x:0,y:0}),{originalImage:l,depthImage:c,parallaxStrength:f,isLocked:h}=ls();ne.useEffect(()=>{if(!r.current)return;const m=r.current,y=m.clientWidth,E=m.clientHeight,C=new Ey,x=new jd(-y/2,y/2,E/2,-E/2,.1,1e3);x.position.z=500;const S=new GT({alpha:!0,antialias:!0});S.setSize(y,E),S.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.appendChild(S.domElement);const R=new ho(y,E),b=new xi({uniforms:{uTexture:{value:null},uDepthTexture:{value:null},uRotationX:{value:0},uRotationY:{value:0},uStrength:{value:f}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uTexture;
        uniform sampler2D uDepthTexture;
        uniform float uRotationX;
        uniform float uRotationY;
        uniform float uStrength;
        varying vec2 vUv;

        void main() {
          vec4 depthColor = texture2D(uDepthTexture, vUv);
          float depth = depthColor.r;

          vec2 offset = vec2(uRotationY, -uRotationX) * depth * uStrength * 0.15;
          vec2 uv = vUv + offset;
          uv = clamp(uv, 0.0, 1.0);

          vec4 color = texture2D(uTexture, uv);
          gl_FragColor = color;
        }
      `,transparent:!0}),L=new Fi(R,b);C.add(L),e.current=L;const N=()=>{if(t.current=requestAnimationFrame(N),o.current.x+=(s.current.x-o.current.x)*.1,o.current.y+=(s.current.y-o.current.y)*.1,e.current){const F=e.current.material;F.uniforms.uRotationX.value=o.current.x,F.uniforms.uRotationY.value=o.current.y,F.uniforms.uStrength.value=f}S.render(C,x)};N();const D=()=>{const F=m.clientWidth,w=m.clientHeight;x.left=-F/2,x.right=F/2,x.top=w/2,x.bottom=-w/2,x.updateProjectionMatrix(),S.setSize(F,w)};return window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D),cancelAnimationFrame(t.current),S.dispose(),R.dispose(),b.dispose(),m.removeChild(S.domElement)}},[]),ne.useEffect(()=>{if(!e.current||!l)return;new Xy().load(l,y=>{if(y.minFilter=rn,y.magFilter=rn,e.current){const E=e.current.material;E.uniforms.uTexture.value=y}})},[l]),ne.useEffect(()=>{if(!e.current||!c)return;const m=document.createElement("canvas");m.width=c.width,m.height=c.height,m.getContext("2d").putImageData(c,0,0);const E=new Ny(m);E.minFilter=rn,E.magFilter=rn;const C=e.current.material;C.uniforms.uDepthTexture.value=E},[c]),ne.useEffect(()=>{if(e.current){const m=e.current.material;m.uniforms.uStrength.value=f}},[f]);const p=ne.useCallback(m=>{if(h||!r.current)return;const y=r.current.getBoundingClientRect(),E=(m.clientX-y.left)/y.width-.5,C=(m.clientY-y.top)/y.height-.5;s.current.x=C*.3,s.current.y=E*.3},[h]),_=ne.useCallback(m=>{if(h||!r.current||m.touches.length===0)return;const y=m.touches[0],E=r.current.getBoundingClientRect(),C=(y.clientX-E.left)/E.width-.5,x=(y.clientY-E.top)/E.height-.5;s.current.x=x*.3,s.current.y=C*.3},[h]),v=ne.useCallback(()=>{s.current.x=0,s.current.y=0},[]);return{containerRef:r,handleMouseMove:p,handleTouchMove:_,handleMouseLeave:v}}function XT(){const{originalImage:r,depthImage:e}=ls(),{containerRef:t,handleMouseMove:s,handleTouchMove:o,handleMouseLeave:l}=WT();return!r||!e?null:Xe.jsx("div",{"trae-inspector-start-line":"16","trae-inspector-start-column":"4","trae-inspector-end-line":"23","trae-inspector-end-column":"6","trae-inspector-file-path":"src/components/SpatialScene.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",ref:t,className:"w-full h-full cursor-grab active:cursor-grabbing",onMouseMove:s,onMouseLeave:l,onTouchMove:o,style:{touchAction:"none"}})}function jT(){const{parallaxStrength:r,setParallaxStrength:e,isLocked:t,toggleLock:s,reset:o}=ls();return Xe.jsxs("div",{"trae-inspector-start-line":"13","trae-inspector-start-column":"4","trae-inspector-end-line":"53","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`absolute bottom-6 left-4 right-4 md:left-6 md:right-6
                    bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4`,children:[Xe.jsxs("div",{"trae-inspector-start-line":"16","trae-inspector-start-column":"6","trae-inspector-end-line":"34","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3 mb-3",children:[Xe.jsx("span",{"trae-inspector-start-line":"17","trae-inspector-start-column":"8","trae-inspector-end-line":"17","trae-inspector-end-column":"100","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B7%B1%E5%BA%A6%E5%BC%BA%E5%BA%A6%22%2C%22textStartLine%22%3A%2217%22%2C%22textStartColumn%22%3A%2289%22%2C%22textEndLine%22%3A%2217%22%2C%22textEndColumn%22%3A%2293%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/60 text-xs md:text-sm font-medium whitespace-nowrap",children:"深度强度"}),Xe.jsx("input",{"trae-inspector-start-line":"18","trae-inspector-start-column":"8","trae-inspector-end-line":"32","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",type:"range",min:"0",max:"2",step:"0.1",value:r,onChange:l=>e(parseFloat(l.target.value)),className:`flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-cyan-400
                     [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,212,255,0.5)]
                     [&::-webkit-slider-thumb]:cursor-pointer`}),Xe.jsx("span",{"trae-inspector-start-line":"33","trae-inspector-start-column":"8","trae-inspector-end-line":"33","trae-inspector-end-column":"110","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/40 text-xs md:text-sm w-8 text-right",children:r.toFixed(1)})]}),Xe.jsxs("div",{"trae-inspector-start-line":"37","trae-inspector-start-column":"6","trae-inspector-end-line":"52","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[Xe.jsx("button",{"trae-inspector-start-line":"38","trae-inspector-start-column":"8","trae-inspector-end-line":"44","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:s,className:`flex-1 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all active:scale-95
            ${t?"bg-cyan-500 text-black":"bg-white/10 text-white hover:bg-white/20"}`,children:t?"已锁定":"锁定视角"}),Xe.jsx("button",{"trae-inspector-start-line":"45","trae-inspector-start-column":"8","trae-inspector-end-line":"51","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%8D%A2%E5%BC%A0%E5%9B%BE%22%2C%22textStartLine%22%3A%2249%22%2C%22textStartColumn%22%3A%229%22%2C%22textEndLine%22%3A%2251%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:o,className:`flex-1 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium
                     bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95`,children:"换张图"})]})]})}function YT(){const r=ls(s=>s.originalImage),e=ls(s=>s.depthImage),t=r&&e;return Xe.jsx(Kx,{children:Xe.jsxs("div",{"trae-inspector-start-line":"15","trae-inspector-start-column":"6","trae-inspector-end-line":"37","trae-inspector-end-column":"12","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative w-full h-[100dvh] overflow-hidden bg-[#0a0a0f] text-white",children:[Xe.jsx("div",{"trae-inspector-start-line":"17","trae-inspector-start-column":"8","trae-inspector-end-line":"17","trae-inspector-end-column":"115","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f] opacity-80"}),Xe.jsxs("div",{"trae-inspector-start-line":"18","trae-inspector-start-column":"8","trae-inspector-end-line":"21","trae-inspector-end-column":"14","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 overflow-hidden pointer-events-none",children:[Xe.jsx("div",{"trae-inspector-start-line":"19","trae-inspector-start-column":"10","trae-inspector-end-line":"19","trae-inspector-end-column":"120","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"}),Xe.jsx("div",{"trae-inspector-start-line":"20","trae-inspector-start-column":"10","trae-inspector-end-line":"20","trae-inspector-end-column":"159","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse",style:{animationDelay:"1s"}})]}),Xe.jsx("div",{"trae-inspector-start-line":"24","trae-inspector-start-column":"8","trae-inspector-end-line":"28","trae-inspector-end-column":"14","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative z-10 w-full h-full",children:Xe.jsx(Ax,{children:Xe.jsx(Qg,{path:"/",element:Xe.jsx(wS,{})})})}),t&&Xe.jsxs("div",{"trae-inspector-start-line":"32","trae-inspector-start-column":"10","trae-inspector-end-line":"35","trae-inspector-end-column":"16","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 z-20",children:[Xe.jsx(XT,{}),Xe.jsx(jT,{})]})]})})}Av.createRoot(document.getElementById("root")).render(Xe.jsx(ne.StrictMode,{children:Xe.jsx(YT,{})}));
