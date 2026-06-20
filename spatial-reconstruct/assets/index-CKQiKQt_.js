(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function x_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gu={exports:{}},$a={},Wu={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function S_(){if(mm)return vt;mm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function x(O,J,Oe){this.props=O,this.context=J,this.refs=C,this.updater=Oe||y}x.prototype.isReactComponent={},x.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=x.prototype;function R(O,J,Oe){this.props=O,this.context=J,this.refs=C,this.updater=Oe||y}var b=R.prototype=new S;b.constructor=R,M(b,x.prototype),b.isPureReactComponent=!0;var P=Array.isArray,N=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(O,J,Oe){var Ge,Ie={},ae=null,Se=null;if(J!=null)for(Ge in J.ref!==void 0&&(Se=J.ref),J.key!==void 0&&(ae=""+J.key),J)N.call(J,Ge)&&!F.hasOwnProperty(Ge)&&(Ie[Ge]=J[Ge]);var me=arguments.length-2;if(me===1)Ie.children=Oe;else if(1<me){for(var Ue=Array(me),Qe=0;Qe<me;Qe++)Ue[Qe]=arguments[Qe+2];Ie.children=Ue}if(O&&O.defaultProps)for(Ge in me=O.defaultProps,me)Ie[Ge]===void 0&&(Ie[Ge]=me[Ge]);return{$$typeof:r,type:O,key:ae,ref:Se,props:Ie,_owner:D.current}}function I(O,J){return{$$typeof:r,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function j(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function B(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Oe){return J[Oe]})}var K=/\/+/g;function oe(O,J){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):J.toString(36)}function fe(O,J,Oe,Ge,Ie){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(ae){case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case r:case e:Se=!0}}if(Se)return Se=O,Ie=Ie(Se),O=Ge===""?"."+oe(Se,0):Ge,P(Ie)?(Oe="",O!=null&&(Oe=O.replace(K,"$&/")+"/"),fe(Ie,J,Oe,"",function(Qe){return Qe})):Ie!=null&&(j(Ie)&&(Ie=I(Ie,Oe+(!Ie.key||Se&&Se.key===Ie.key?"":(""+Ie.key).replace(K,"$&/")+"/")+O)),J.push(Ie)),1;if(Se=0,Ge=Ge===""?".":Ge+":",P(O))for(var me=0;me<O.length;me++){ae=O[me];var Ue=Ge+oe(ae,me);Se+=fe(ae,J,Oe,Ue,Ie)}else if(Ue=m(O),typeof Ue=="function")for(O=Ue.call(O),me=0;!(ae=O.next()).done;)ae=ae.value,Ue=Ge+oe(ae,me++),Se+=fe(ae,J,Oe,Ue,Ie);else if(ae==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return Se}function H(O,J,Oe){if(O==null)return O;var Ge=[],Ie=0;return fe(O,Ge,"","",function(ae){return J.call(Oe,ae,Ie++)}),Ge}function $(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(Oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Oe)},function(Oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Oe)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var W={current:null},Y={transition:null},ce={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Y,ReactCurrentOwner:D};function le(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:H,forEach:function(O,J,Oe){H(O,function(){J.apply(this,arguments)},Oe)},count:function(O){var J=0;return H(O,function(){J++}),J},toArray:function(O){return H(O,function(J){return J})||[]},only:function(O){if(!j(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},vt.Component=x,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=R,vt.StrictMode=s,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,vt.act=le,vt.cloneElement=function(O,J,Oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ge=M({},O.props),Ie=O.key,ae=O.ref,Se=O._owner;if(J!=null){if(J.ref!==void 0&&(ae=J.ref,Se=D.current),J.key!==void 0&&(Ie=""+J.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ue in J)N.call(J,Ue)&&!F.hasOwnProperty(Ue)&&(Ge[Ue]=J[Ue]===void 0&&me!==void 0?me[Ue]:J[Ue])}var Ue=arguments.length-2;if(Ue===1)Ge.children=Oe;else if(1<Ue){me=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)me[Qe]=arguments[Qe+2];Ge.children=me}return{$$typeof:r,type:O.type,key:Ie,ref:ae,props:Ge,_owner:Se}},vt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},vt.createElement=T,vt.createFactory=function(O){var J=T.bind(null,O);return J.type=O,J},vt.createRef=function(){return{current:null}},vt.forwardRef=function(O){return{$$typeof:f,render:O}},vt.isValidElement=j,vt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:$}},vt.memo=function(O,J){return{$$typeof:p,type:O,compare:J===void 0?null:J}},vt.startTransition=function(O){var J=Y.transition;Y.transition={};try{O()}finally{Y.transition=J}},vt.unstable_act=le,vt.useCallback=function(O,J){return W.current.useCallback(O,J)},vt.useContext=function(O){return W.current.useContext(O)},vt.useDebugValue=function(){},vt.useDeferredValue=function(O){return W.current.useDeferredValue(O)},vt.useEffect=function(O,J){return W.current.useEffect(O,J)},vt.useId=function(){return W.current.useId()},vt.useImperativeHandle=function(O,J,Oe){return W.current.useImperativeHandle(O,J,Oe)},vt.useInsertionEffect=function(O,J){return W.current.useInsertionEffect(O,J)},vt.useLayoutEffect=function(O,J){return W.current.useLayoutEffect(O,J)},vt.useMemo=function(O,J){return W.current.useMemo(O,J)},vt.useReducer=function(O,J,Oe){return W.current.useReducer(O,J,Oe)},vt.useRef=function(O){return W.current.useRef(O)},vt.useState=function(O){return W.current.useState(O)},vt.useSyncExternalStore=function(O,J,Oe){return W.current.useSyncExternalStore(O,J,Oe)},vt.useTransition=function(){return W.current.useTransition()},vt.version="18.3.1",vt}var gm;function Td(){return gm||(gm=1,Wu.exports=S_()),Wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function y_(){if(vm)return $a;vm=1;var r=Td(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,_={},m=null,y=null;p!==void 0&&(m=""+p),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(v in h)s.call(h,v)&&!l.hasOwnProperty(v)&&(_[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:f,key:m,ref:y,props:_,_owner:o.current}}return $a.Fragment=t,$a.jsx=u,$a.jsxs=u,$a}var _m;function E_(){return _m||(_m=1,Gu.exports=y_()),Gu.exports}var Le=E_(),te=Td();const vl=x_(te);var _l={},Xu={exports:{}},On={},ju={exports:{}},$u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function M_(){return xm||(xm=1,(function(r){function e(Y,ce){var le=Y.length;Y.push(ce);e:for(;0<le;){var O=le-1>>>1,J=Y[O];if(0<o(J,ce))Y[O]=ce,Y[le]=J,le=O;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ce=Y[0],le=Y.pop();if(le!==ce){Y[0]=le;e:for(var O=0,J=Y.length,Oe=J>>>1;O<Oe;){var Ge=2*(O+1)-1,Ie=Y[Ge],ae=Ge+1,Se=Y[ae];if(0>o(Ie,le))ae<J&&0>o(Se,Ie)?(Y[O]=Se,Y[ae]=le,O=ae):(Y[O]=Ie,Y[Ge]=le,O=Ge);else if(ae<J&&0>o(Se,le))Y[O]=Se,Y[ae]=le,O=ae;else break e}}return ce}function o(Y,ce){var le=Y.sortIndex-ce.sortIndex;return le!==0?le:Y.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,_=null,m=3,y=!1,M=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(Y){for(var ce=t(p);ce!==null;){if(ce.callback===null)s(p);else if(ce.startTime<=Y)s(p),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(p)}}function P(Y){if(C=!1,b(Y),!M)if(t(h)!==null)M=!0,$(N);else{var ce=t(p);ce!==null&&W(P,ce.startTime-Y)}}function N(Y,ce){M=!1,C&&(C=!1,S(T),T=-1),y=!0;var le=m;try{for(b(ce),_=t(h);_!==null&&(!(_.expirationTime>ce)||Y&&!B());){var O=_.callback;if(typeof O=="function"){_.callback=null,m=_.priorityLevel;var J=O(_.expirationTime<=ce);ce=r.unstable_now(),typeof J=="function"?_.callback=J:_===t(h)&&s(h),b(ce)}else s(h);_=t(h)}if(_!==null)var Oe=!0;else{var Ge=t(p);Ge!==null&&W(P,Ge.startTime-ce),Oe=!1}return Oe}finally{_=null,m=le,y=!1}}var D=!1,F=null,T=-1,I=5,j=-1;function B(){return!(r.unstable_now()-j<I)}function K(){if(F!==null){var Y=r.unstable_now();j=Y;var ce=!0;try{ce=F(!0,Y)}finally{ce?oe():(D=!1,F=null)}}else D=!1}var oe;if(typeof R=="function")oe=function(){R(K)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,H=fe.port2;fe.port1.onmessage=K,oe=function(){H.postMessage(null)}}else oe=function(){x(K,0)};function $(Y){F=Y,D||(D=!0,oe())}function W(Y,ce){T=x(function(){Y(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){M||y||(M=!0,$(N))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(Y){switch(m){case 1:case 2:case 3:var ce=3;break;default:ce=m}var le=m;m=ce;try{return Y()}finally{m=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,ce){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var le=m;m=Y;try{return ce()}finally{m=le}},r.unstable_scheduleCallback=function(Y,ce,le){var O=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,Y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=le+J,Y={id:v++,callback:ce,priorityLevel:Y,startTime:le,expirationTime:J,sortIndex:-1},le>O?(Y.sortIndex=le,e(p,Y),t(h)===null&&Y===t(p)&&(C?(S(T),T=-1):C=!0,W(P,le-O))):(Y.sortIndex=J,e(h,Y),M||y||(M=!0,$(N))),Y},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(Y){var ce=m;return function(){var le=m;m=ce;try{return Y.apply(this,arguments)}finally{m=le}}}})($u)),$u}var Sm;function w_(){return Sm||(Sm=1,ju.exports=M_()),ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function T_(){if(ym)return On;ym=1;var r=Td(),e=w_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function m(n){return h.call(_,n)?!0:h.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,d,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,O;function J(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Oe=!1;function Ge(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var c=se}Reflect.construct(n,[],i)}else{try{i.call()}catch(se){c=se}n.call(i.prototype)}else{try{throw Error()}catch(se){c=se}n()}}catch(se){if(se&&c&&typeof se.stack=="string"){for(var d=se.stack.split(`
`),g=c.stack.split(`
`),w=d.length-1,U=g.length-1;1<=w&&0<=U&&d[w]!==g[U];)U--;for(;1<=w&&0<=U;w--,U--)if(d[w]!==g[U]){if(w!==1||U!==1)do if(w--,U--,0>U||d[w]!==g[U]){var k=`
`+d[w].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=w&&0<=U);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?J(n):""}function Ie(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ge(n.type,!1),n;case 11:return n=Ge(n.type.render,!1),n;case 1:return n=Ge(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case D:return"Portal";case I:return"Profiler";case T:return"StrictMode";case oe:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case j:return(n._context.displayName||"Context")+".Provider";case K:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case $:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Je(n){n._valueTracker||(n._valueTracker=Qe(n))}function Ut(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mt(n,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Lt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function jt(n,i){ft(n,i);var a=me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pn(n,i.type,a):i.hasOwnProperty("defaultValue")&&pn(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ft(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function pn(n,i,a){(i!=="number"||ut(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var V=Array.isArray;function Ot(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function dt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ct(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(V(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:me(a)}}function De(n,i){var a=me(i.value),c=me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function zt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var q,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(q=q||document.createElement("div"),q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function ue(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ue(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(n,i){if(i){if(Fe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function nt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,pt=null,z=null;function Te(n){if(n=Da(n)){if(typeof st!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Do(i),st(n.stateNode,n.type,i))}}function de(n){pt?z?z.push(n):z=[n]:pt=n}function Be(){if(pt){var n=pt,i=z;if(z=pt=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function Re(n,i){return n(i)}function ve(){}var je=!1;function at(n,i,a){if(je)return n(i,a);je=!0;try{return Re(n,i,a)}finally{je=!1,(pt!==null||z!==null)&&(ve(),Be())}}function It(n,i){var a=n.stateNode;if(a===null)return null;var c=Do(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var wt=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){wt=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{wt=!1}function $n(n,i,a,c,d,g,w,U,k){var se=Array.prototype.slice.call(arguments,3);try{i.apply(a,se)}catch(xe){this.onError(xe)}}var Bi=!1,ps=null,zr=!1,ms=null,ki={onError:function(n){Bi=!0,ps=n}};function fa(n,i,a,c,d,g,w,U,k){Bi=!1,ps=null,$n.apply(ki,arguments)}function mo(n,i,a,c,d,g,w,U,k){if(fa.apply(this,arguments),Bi){if(Bi){var se=ps;Bi=!1,ps=null}else throw Error(t(198));zr||(zr=!0,ms=se)}}function yi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Hr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function da(n){if(yi(n)!==n)throw Error(t(188))}function gs(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return da(d),n;if(g===c)return da(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var w=!1,U=d.child;U;){if(U===a){w=!0,a=d,c=g;break}if(U===c){w=!0,c=d,a=g;break}U=U.sibling}if(!w){for(U=g.child;U;){if(U===a){w=!0,a=g,c=d;break}if(U===c){w=!0,c=g,a=d;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ha(n){return n=gs(n),n!==null?pa(n):null}function pa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=pa(n);if(i!==null)return i;n=n.sibling}return null}var go=e.unstable_scheduleCallback,vo=e.unstable_cancelCallback,dc=e.unstable_shouldYield,hc=e.unstable_requestPaint,$t=e.unstable_now,pc=e.unstable_getCurrentPriorityLevel,ma=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,re=e.unstable_LowPriority,ee=e.unstable_IdlePriority,Q=null,be=null;function Ve(n){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Q,n,void 0,(n.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:ot,$e=Math.log,Ze=Math.LN2;function ot(n){return n>>>=0,n===0?32:31-($e(n)/Ze|0)|0}var lt=64,qe=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~d;U!==0?c=St(U):(g&=w,g!==0&&(c=St(g)))}else w=a&~d,w!==0?c=St(w):g!==0&&(c=St(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ce(i),d=1<<a,c|=n[a],i&=~d;return c}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-Ce(g),U=1<<w,k=d[w];k===-1?((U&a)===0||(U&c)!==0)&&(d[w]=Wt(U,i)):k<=i&&(n.expiredLanes|=U),g&=~U}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ze(){var n=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),n}function mn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function mt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ce(i),n[i]=a}function Pn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ce(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Ln(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ce(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var gt=0;function zi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var At,Ht,ai,bt,oi,Ei=!1,Vr=[],fr=null,dr=null,hr=null,ga=new Map,va=new Map,pr=[],H0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(n,i){switch(n){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":ga.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(i.pointerId)}}function _a(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Da(i),i!==null&&Ht(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function V0(n,i,a,c,d){switch(i){case"focusin":return fr=_a(fr,n,i,a,c,d),!0;case"dragenter":return dr=_a(dr,n,i,a,c,d),!0;case"mouseover":return hr=_a(hr,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return ga.set(g,_a(ga.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,va.set(g,_a(va.get(g)||null,n,i,a,c,d)),!0}return!1}function Jd(n){var i=Gr(n.target);if(i!==null){var a=yi(i);if(a!==null){if(i=a.tag,i===13){if(i=Hr(a),i!==null){n.blockedOn=i,oi(n.priority,function(){ai(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _o(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Me=c,a.target.dispatchEvent(c),Me=null}else return i=Da(a),i!==null&&Ht(i),n.blockedOn=a,!1;i.shift()}return!0}function eh(n,i,a){_o(n)&&a.delete(i)}function G0(){Ei=!1,fr!==null&&_o(fr)&&(fr=null),dr!==null&&_o(dr)&&(dr=null),hr!==null&&_o(hr)&&(hr=null),ga.forEach(eh),va.forEach(eh)}function xa(n,i){n.blockedOn===i&&(n.blockedOn=null,Ei||(Ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,G0)))}function Sa(n){function i(d){return xa(d,n)}if(0<Vr.length){xa(Vr[0],n);for(var a=1;a<Vr.length;a++){var c=Vr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(fr!==null&&xa(fr,n),dr!==null&&xa(dr,n),hr!==null&&xa(hr,n),ga.forEach(i),va.forEach(i),a=0;a<pr.length;a++)c=pr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)Jd(a),a.blockedOn===null&&pr.shift()}var vs=P.ReactCurrentBatchConfig,xo=!0;function W0(n,i,a,c){var d=gt,g=vs.transition;vs.transition=null;try{gt=1,mc(n,i,a,c)}finally{gt=d,vs.transition=g}}function X0(n,i,a,c){var d=gt,g=vs.transition;vs.transition=null;try{gt=4,mc(n,i,a,c)}finally{gt=d,vs.transition=g}}function mc(n,i,a,c){if(xo){var d=gc(n,i,a,c);if(d===null)Nc(n,i,c,So,a),Qd(n,c);else if(V0(d,n,i,a,c))c.stopPropagation();else if(Qd(n,c),i&4&&-1<H0.indexOf(n)){for(;d!==null;){var g=Da(d);if(g!==null&&At(g),g=gc(n,i,a,c),g===null&&Nc(n,i,c,So,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Nc(n,i,c,null,a)}}var So=null;function gc(n,i,a,c){if(So=null,n=nt(c),n=Gr(n),n!==null)if(i=yi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Hr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return So=n,null}function th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pc()){case ma:return 1;case A:return 4;case X:case re:return 16;case ee:return 536870912;default:return 16}default:return 16}}var mr=null,vc=null,yo=null;function nh(){if(yo)return yo;var n,i=vc,a=i.length,c,d="value"in mr?mr.value:mr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===d[g-c];c++);return yo=d.slice(n,1<c?1-c:void 0)}function Eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Mo(){return!0}function ih(){return!1}function zn(n){function i(a,c,d,g,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Mo:ih,this.isPropagationStopped=ih,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),i}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=zn(_s),ya=le({},_s,{view:0,detail:0}),j0=zn(ya),xc,Sc,Ea,wo=le({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(xc=n.screenX-Ea.screenX,Sc=n.screenY-Ea.screenY):Sc=xc=0,Ea=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),rh=zn(wo),$0=le({},wo,{dataTransfer:0}),Y0=zn($0),q0=le({},ya,{relatedTarget:0}),yc=zn(q0),K0=le({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),Z0=zn(K0),Q0=le({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),J0=zn(Q0),ev=le({},_s,{data:0}),sh=zn(ev),tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=iv[n])?!!i[n]:!1}function Ec(){return rv}var sv=le({},ya,{key:function(n){if(n.key){var i=tv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?nv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(n){return n.type==="keypress"?Eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),av=zn(sv),ov=le({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=zn(ov),lv=le({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),cv=zn(lv),uv=le({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=zn(uv),dv=le({},wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),hv=zn(dv),pv=[9,13,27,32],Mc=f&&"CompositionEvent"in window,Ma=null;f&&"documentMode"in document&&(Ma=document.documentMode);var mv=f&&"TextEvent"in window&&!Ma,oh=f&&(!Mc||Ma&&8<Ma&&11>=Ma),lh=" ",ch=!1;function uh(n,i){switch(n){case"keyup":return pv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function gv(n,i){switch(n){case"compositionend":return fh(i);case"keypress":return i.which!==32?null:(ch=!0,lh);case"textInput":return n=i.data,n===lh&&ch?null:n;default:return null}}function vv(n,i){if(xs)return n==="compositionend"||!Mc&&uh(n,i)?(n=nh(),yo=vc=mr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!_v[n.type]:i==="textarea"}function hh(n,i,a,c){de(c),i=bo(i,"onChange"),0<i.length&&(a=new _c("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var wa=null,Ta=null;function xv(n){Lh(n,0)}function To(n){var i=ws(n);if(Ut(i))return n}function Sv(n,i){if(n==="change")return i}var ph=!1;if(f){var wc;if(f){var Tc="oninput"in document;if(!Tc){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),Tc=typeof mh.oninput=="function"}wc=Tc}else wc=!1;ph=wc&&(!document.documentMode||9<document.documentMode)}function gh(){wa&&(wa.detachEvent("onpropertychange",vh),Ta=wa=null)}function vh(n){if(n.propertyName==="value"&&To(Ta)){var i=[];hh(i,Ta,n,nt(n)),at(xv,i)}}function yv(n,i,a){n==="focusin"?(gh(),wa=i,Ta=a,wa.attachEvent("onpropertychange",vh)):n==="focusout"&&gh()}function Ev(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return To(Ta)}function Mv(n,i){if(n==="click")return To(i)}function wv(n,i){if(n==="input"||n==="change")return To(i)}function Tv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var li=typeof Object.is=="function"?Object.is:Tv;function Aa(n,i){if(li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!li(n[d],i[d]))return!1}return!0}function _h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xh(n,i){var a=_h(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_h(a)}}function Sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function yh(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ut(n.document)}return i}function Ac(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Av(n){var i=yh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Sh(a.ownerDocument.documentElement,a)){if(c!==null&&Ac(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=xh(a,g);var w=xh(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Cv=f&&"documentMode"in document&&11>=document.documentMode,Ss=null,Cc=null,Ca=null,Rc=!1;function Eh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||Ss==null||Ss!==ut(c)||(c=Ss,"selectionStart"in c&&Ac(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ca&&Aa(Ca,c)||(Ca=c,c=bo(Cc,"onSelect"),0<c.length&&(i=new _c("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ss)))}function Ao(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ys={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},bc={},Mh={};f&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Co(n){if(bc[n])return bc[n];if(!ys[n])return n;var i=ys[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mh)return bc[n]=i[a];return n}var wh=Co("animationend"),Th=Co("animationiteration"),Ah=Co("animationstart"),Ch=Co("transitionend"),Rh=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(n,i){Rh.set(n,i),l(i,[n])}for(var Pc=0;Pc<bh.length;Pc++){var Lc=bh[Pc],Rv=Lc.toLowerCase(),bv=Lc[0].toUpperCase()+Lc.slice(1);gr(Rv,"on"+bv)}gr(wh,"onAnimationEnd"),gr(Th,"onAnimationIteration"),gr(Ah,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(Ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Ph(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,mo(c,i,void 0,n),n.currentTarget=null}function Lh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var U=c[w],k=U.instance,se=U.currentTarget;if(U=U.listener,k!==g&&d.isPropagationStopped())break e;Ph(d,U,se),g=k}else for(w=0;w<c.length;w++){if(U=c[w],k=U.instance,se=U.currentTarget,U=U.listener,k!==g&&d.isPropagationStopped())break e;Ph(d,U,se),g=k}}}if(zr)throw n=ms,zr=!1,ms=null,n}function Vt(n,i){var a=i[kc];a===void 0&&(a=i[kc]=new Set);var c=n+"__bubble";a.has(c)||(Dh(i,n,2,!1),a.add(c))}function Dc(n,i,a){var c=0;i&&(c|=4),Dh(a,n,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function ba(n){if(!n[Ro]){n[Ro]=!0,s.forEach(function(a){a!=="selectionchange"&&(Pv.has(a)||Dc(a,!1,n),Dc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Dc("selectionchange",!1,i))}}function Dh(n,i,a,c){switch(th(i)){case 1:var d=W0;break;case 4:d=X0;break;default:d=mc}a=d.bind(null,i,a,n),d=void 0,!wt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Nc(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;w=w.return}for(;U!==null;){if(w=Gr(U),w===null)return;if(k=w.tag,k===5||k===6){c=g=w;continue e}U=U.parentNode}}c=c.return}at(function(){var se=g,xe=nt(a),ye=[];e:{var _e=Rh.get(n);if(_e!==void 0){var He=_c,Xe=n;switch(n){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":He=av;break;case"focusin":Xe="focus",He=yc;break;case"focusout":Xe="blur",He=yc;break;case"beforeblur":case"afterblur":He=yc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=cv;break;case wh:case Th:case Ah:He=Z0;break;case Ch:He=fv;break;case"scroll":He=j0;break;case"wheel":He=hv;break;case"copy":case"cut":case"paste":He=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=ah}var Ye=(i&4)!==0,Qt=!Ye&&n==="scroll",Z=Ye?_e!==null?_e+"Capture":null:_e;Ye=[];for(var G=se,ne;G!==null;){ne=G;var we=ne.stateNode;if(ne.tag===5&&we!==null&&(ne=we,Z!==null&&(we=It(G,Z),we!=null&&Ye.push(Pa(G,we,ne)))),Qt)break;G=G.return}0<Ye.length&&(_e=new He(_e,Xe,null,a,xe),ye.push({event:_e,listeners:Ye}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",_e&&a!==Me&&(Xe=a.relatedTarget||a.fromElement)&&(Gr(Xe)||Xe[Hi]))break e;if((He||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,He?(Xe=a.relatedTarget||a.toElement,He=se,Xe=Xe?Gr(Xe):null,Xe!==null&&(Qt=yi(Xe),Xe!==Qt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(He=null,Xe=se),He!==Xe)){if(Ye=rh,we="onMouseLeave",Z="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=ah,we="onPointerLeave",Z="onPointerEnter",G="pointer"),Qt=He==null?_e:ws(He),ne=Xe==null?_e:ws(Xe),_e=new Ye(we,G+"leave",He,a,xe),_e.target=Qt,_e.relatedTarget=ne,we=null,Gr(xe)===se&&(Ye=new Ye(Z,G+"enter",Xe,a,xe),Ye.target=ne,Ye.relatedTarget=Qt,we=Ye),Qt=we,He&&Xe)t:{for(Ye=He,Z=Xe,G=0,ne=Ye;ne;ne=Es(ne))G++;for(ne=0,we=Z;we;we=Es(we))ne++;for(;0<G-ne;)Ye=Es(Ye),G--;for(;0<ne-G;)Z=Es(Z),ne--;for(;G--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=Es(Ye),Z=Es(Z)}Ye=null}else Ye=null;He!==null&&Nh(ye,_e,He,Ye,!1),Xe!==null&&Qt!==null&&Nh(ye,Qt,Xe,Ye,!0)}}e:{if(_e=se?ws(se):window,He=_e.nodeName&&_e.nodeName.toLowerCase(),He==="select"||He==="input"&&_e.type==="file")var Ke=Sv;else if(dh(_e))if(ph)Ke=wv;else{Ke=Ev;var et=yv}else(He=_e.nodeName)&&He.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ke=Mv);if(Ke&&(Ke=Ke(n,se))){hh(ye,Ke,a,xe);break e}et&&et(n,_e,se),n==="focusout"&&(et=_e._wrapperState)&&et.controlled&&_e.type==="number"&&pn(_e,"number",_e.value)}switch(et=se?ws(se):window,n){case"focusin":(dh(et)||et.contentEditable==="true")&&(Ss=et,Cc=se,Ca=null);break;case"focusout":Ca=Cc=Ss=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Eh(ye,a,xe);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":Eh(ye,a,xe)}var tt;if(Mc)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else xs?uh(n,a)&&(it="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(oh&&a.locale!=="ko"&&(xs||it!=="onCompositionStart"?it==="onCompositionEnd"&&xs&&(tt=nh()):(mr=xe,vc="value"in mr?mr.value:mr.textContent,xs=!0)),et=bo(se,it),0<et.length&&(it=new sh(it,n,null,a,xe),ye.push({event:it,listeners:et}),tt?it.data=tt:(tt=fh(a),tt!==null&&(it.data=tt)))),(tt=mv?gv(n,a):vv(n,a))&&(se=bo(se,"onBeforeInput"),0<se.length&&(xe=new sh("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:se}),xe.data=tt))}Lh(ye,i)})}function Pa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function bo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=It(n,a),g!=null&&c.unshift(Pa(n,g,d)),g=It(n,i),g!=null&&c.push(Pa(n,g,d))),n=n.return}return c}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,i,a,c,d){for(var g=i._reactName,w=[];a!==null&&a!==c;){var U=a,k=U.alternate,se=U.stateNode;if(k!==null&&k===c)break;U.tag===5&&se!==null&&(U=se,d?(k=It(a,g),k!=null&&w.unshift(Pa(a,k,U))):d||(k=It(a,g),k!=null&&w.push(Pa(a,k,U)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Lv=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function Ih(n){return(typeof n=="string"?n:""+n).replace(Lv,`
`).replace(Dv,"")}function Po(n,i,a){if(i=Ih(i),Ih(n)!==i&&a)throw Error(t(425))}function Lo(){}var Ic=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,Nv=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,Iv=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(n){return Uh.resolve(null).then(n).catch(Uv)}:Oc;function Uv(n){setTimeout(function(){throw n})}function Bc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Sa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Sa(i)}function vr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Ms,La="__reactProps$"+Ms,Hi="__reactContainer$"+Ms,kc="__reactEvents$"+Ms,Fv="__reactListeners$"+Ms,Ov="__reactHandles$"+Ms;function Gr(n){var i=n[Mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Hi]||a[Mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[Mi])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function Da(n){return n=n[Mi]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Do(n){return n[La]||null}var zc=[],Ts=-1;function _r(n){return{current:n}}function Gt(n){0>Ts||(n.current=zc[Ts],zc[Ts]=null,Ts--)}function kt(n,i){Ts++,zc[Ts]=n.current,n.current=i}var xr={},Sn=_r(xr),Dn=_r(!1),Wr=xr;function As(n,i){var a=n.type.contextTypes;if(!a)return xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Nn(n){return n=n.childContextTypes,n!=null}function No(){Gt(Dn),Gt(Sn)}function Oh(n,i,a){if(Sn.current!==xr)throw Error(t(168));kt(Sn,i),kt(Dn,a)}function Bh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Se(n)||"Unknown",d));return le({},a,c)}function Io(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,Wr=Sn.current,kt(Sn,n),kt(Dn,Dn.current),!0}function kh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bh(n,i,Wr),c.__reactInternalMemoizedMergedChildContext=n,Gt(Dn),Gt(Sn),kt(Sn,n)):Gt(Dn),kt(Dn,a)}var Vi=null,Uo=!1,Hc=!1;function zh(n){Vi===null?Vi=[n]:Vi.push(n)}function Bv(n){Uo=!0,zh(n)}function Sr(){if(!Hc&&Vi!==null){Hc=!0;var n=0,i=gt;try{var a=Vi;for(gt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Vi=null,Uo=!1}catch(d){throw Vi!==null&&(Vi=Vi.slice(n+1)),go(ma,Sr),d}finally{gt=i,Hc=!1}}return null}var Cs=[],Rs=0,Fo=null,Oo=0,Yn=[],qn=0,Xr=null,Gi=1,Wi="";function jr(n,i){Cs[Rs++]=Oo,Cs[Rs++]=Fo,Fo=n,Oo=i}function Hh(n,i,a){Yn[qn++]=Gi,Yn[qn++]=Wi,Yn[qn++]=Xr,Xr=n;var c=Gi;n=Wi;var d=32-Ce(c)-1;c&=~(1<<d),a+=1;var g=32-Ce(i)+d;if(30<g){var w=d-d%5;g=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Gi=1<<32-Ce(i)+d|a<<d|c,Wi=g+n}else Gi=1<<g|a<<d|c,Wi=n}function Vc(n){n.return!==null&&(jr(n,1),Hh(n,1,0))}function Gc(n){for(;n===Fo;)Fo=Cs[--Rs],Cs[Rs]=null,Oo=Cs[--Rs],Cs[Rs]=null;for(;n===Xr;)Xr=Yn[--qn],Yn[qn]=null,Wi=Yn[--qn],Yn[qn]=null,Gi=Yn[--qn],Yn[qn]=null}var Hn=null,Vn=null,Xt=!1,ci=null;function Vh(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Gh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=vr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Xr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Hn=n,Vn=null,!0):!1;default:return!1}}function Wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(Xt){var i=Vn;if(i){var a=i;if(!Gh(n,i)){if(Wc(n))throw Error(t(418));i=vr(a.nextSibling);var c=Hn;i&&Gh(n,i)?Vh(c,a):(n.flags=n.flags&-4097|2,Xt=!1,Hn=n)}}else{if(Wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,Hn=n}}}function Wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Bo(n){if(n!==Hn)return!1;if(!Xt)return Wh(n),Xt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=Vn)){if(Wc(n))throw Xh(),Error(t(418));for(;i;)Vh(n,i),i=vr(i.nextSibling)}if(Wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=vr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Hn?vr(n.stateNode.nextSibling):null;return!0}function Xh(){for(var n=Vn;n;)n=vr(n.nextSibling)}function bs(){Vn=Hn=null,Xt=!1}function jc(n){ci===null?ci=[n]:ci.push(n)}var kv=P.ReactCurrentBatchConfig;function Na(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var U=d.refs;w===null?delete U[g]:U[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ko(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function jh(n){var i=n._init;return i(n._payload)}function $h(n){function i(Z,G){if(n){var ne=Z.deletions;ne===null?(Z.deletions=[G],Z.flags|=16):ne.push(G)}}function a(Z,G){if(!n)return null;for(;G!==null;)i(Z,G),G=G.sibling;return null}function c(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function d(Z,G){return Z=Rr(Z,G),Z.index=0,Z.sibling=null,Z}function g(Z,G,ne){return Z.index=ne,n?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<G?(Z.flags|=2,G):ne):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function w(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,G,ne,we){return G===null||G.tag!==6?(G=Ou(ne,Z.mode,we),G.return=Z,G):(G=d(G,ne),G.return=Z,G)}function k(Z,G,ne,we){var Ke=ne.type;return Ke===F?xe(Z,G,ne.props.children,we,ne.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===$&&jh(Ke)===G.type)?(we=d(G,ne.props),we.ref=Na(Z,G,ne),we.return=Z,we):(we=cl(ne.type,ne.key,ne.props,null,Z.mode,we),we.ref=Na(Z,G,ne),we.return=Z,we)}function se(Z,G,ne,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==ne.containerInfo||G.stateNode.implementation!==ne.implementation?(G=Bu(ne,Z.mode,we),G.return=Z,G):(G=d(G,ne.children||[]),G.return=Z,G)}function xe(Z,G,ne,we,Ke){return G===null||G.tag!==7?(G=es(ne,Z.mode,we,Ke),G.return=Z,G):(G=d(G,ne),G.return=Z,G)}function ye(Z,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Ou(""+G,Z.mode,ne),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return ne=cl(G.type,G.key,G.props,null,Z.mode,ne),ne.ref=Na(Z,null,G),ne.return=Z,ne;case D:return G=Bu(G,Z.mode,ne),G.return=Z,G;case $:var we=G._init;return ye(Z,we(G._payload),ne)}if(V(G)||ce(G))return G=es(G,Z.mode,ne,null),G.return=Z,G;ko(Z,G)}return null}function _e(Z,G,ne,we){var Ke=G!==null?G.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ke!==null?null:U(Z,G,""+ne,we);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:return ne.key===Ke?k(Z,G,ne,we):null;case D:return ne.key===Ke?se(Z,G,ne,we):null;case $:return Ke=ne._init,_e(Z,G,Ke(ne._payload),we)}if(V(ne)||ce(ne))return Ke!==null?null:xe(Z,G,ne,we,null);ko(Z,ne)}return null}function He(Z,G,ne,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return Z=Z.get(ne)||null,U(G,Z,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case N:return Z=Z.get(we.key===null?ne:we.key)||null,k(G,Z,we,Ke);case D:return Z=Z.get(we.key===null?ne:we.key)||null,se(G,Z,we,Ke);case $:var et=we._init;return He(Z,G,ne,et(we._payload),Ke)}if(V(we)||ce(we))return Z=Z.get(ne)||null,xe(G,Z,we,Ke,null);ko(G,we)}return null}function Xe(Z,G,ne,we){for(var Ke=null,et=null,tt=G,it=G=0,dn=null;tt!==null&&it<ne.length;it++){tt.index>it?(dn=tt,tt=null):dn=tt.sibling;var Tt=_e(Z,tt,ne[it],we);if(Tt===null){tt===null&&(tt=dn);break}n&&tt&&Tt.alternate===null&&i(Z,tt),G=g(Tt,G,it),et===null?Ke=Tt:et.sibling=Tt,et=Tt,tt=dn}if(it===ne.length)return a(Z,tt),Xt&&jr(Z,it),Ke;if(tt===null){for(;it<ne.length;it++)tt=ye(Z,ne[it],we),tt!==null&&(G=g(tt,G,it),et===null?Ke=tt:et.sibling=tt,et=tt);return Xt&&jr(Z,it),Ke}for(tt=c(Z,tt);it<ne.length;it++)dn=He(tt,Z,it,ne[it],we),dn!==null&&(n&&dn.alternate!==null&&tt.delete(dn.key===null?it:dn.key),G=g(dn,G,it),et===null?Ke=dn:et.sibling=dn,et=dn);return n&&tt.forEach(function(br){return i(Z,br)}),Xt&&jr(Z,it),Ke}function Ye(Z,G,ne,we){var Ke=ce(ne);if(typeof Ke!="function")throw Error(t(150));if(ne=Ke.call(ne),ne==null)throw Error(t(151));for(var et=Ke=null,tt=G,it=G=0,dn=null,Tt=ne.next();tt!==null&&!Tt.done;it++,Tt=ne.next()){tt.index>it?(dn=tt,tt=null):dn=tt.sibling;var br=_e(Z,tt,Tt.value,we);if(br===null){tt===null&&(tt=dn);break}n&&tt&&br.alternate===null&&i(Z,tt),G=g(br,G,it),et===null?Ke=br:et.sibling=br,et=br,tt=dn}if(Tt.done)return a(Z,tt),Xt&&jr(Z,it),Ke;if(tt===null){for(;!Tt.done;it++,Tt=ne.next())Tt=ye(Z,Tt.value,we),Tt!==null&&(G=g(Tt,G,it),et===null?Ke=Tt:et.sibling=Tt,et=Tt);return Xt&&jr(Z,it),Ke}for(tt=c(Z,tt);!Tt.done;it++,Tt=ne.next())Tt=He(tt,Z,it,Tt.value,we),Tt!==null&&(n&&Tt.alternate!==null&&tt.delete(Tt.key===null?it:Tt.key),G=g(Tt,G,it),et===null?Ke=Tt:et.sibling=Tt,et=Tt);return n&&tt.forEach(function(__){return i(Z,__)}),Xt&&jr(Z,it),Ke}function Qt(Z,G,ne,we){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:e:{for(var Ke=ne.key,et=G;et!==null;){if(et.key===Ke){if(Ke=ne.type,Ke===F){if(et.tag===7){a(Z,et.sibling),G=d(et,ne.props.children),G.return=Z,Z=G;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===$&&jh(Ke)===et.type){a(Z,et.sibling),G=d(et,ne.props),G.ref=Na(Z,et,ne),G.return=Z,Z=G;break e}a(Z,et);break}else i(Z,et);et=et.sibling}ne.type===F?(G=es(ne.props.children,Z.mode,we,ne.key),G.return=Z,Z=G):(we=cl(ne.type,ne.key,ne.props,null,Z.mode,we),we.ref=Na(Z,G,ne),we.return=Z,Z=we)}return w(Z);case D:e:{for(et=ne.key;G!==null;){if(G.key===et)if(G.tag===4&&G.stateNode.containerInfo===ne.containerInfo&&G.stateNode.implementation===ne.implementation){a(Z,G.sibling),G=d(G,ne.children||[]),G.return=Z,Z=G;break e}else{a(Z,G);break}else i(Z,G);G=G.sibling}G=Bu(ne,Z.mode,we),G.return=Z,Z=G}return w(Z);case $:return et=ne._init,Qt(Z,G,et(ne._payload),we)}if(V(ne))return Xe(Z,G,ne,we);if(ce(ne))return Ye(Z,G,ne,we);ko(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,G!==null&&G.tag===6?(a(Z,G.sibling),G=d(G,ne),G.return=Z,Z=G):(a(Z,G),G=Ou(ne,Z.mode,we),G.return=Z,Z=G),w(Z)):a(Z,G)}return Qt}var Ps=$h(!0),Yh=$h(!1),zo=_r(null),Ho=null,Ls=null,$c=null;function Yc(){$c=Ls=Ho=null}function qc(n){var i=zo.current;Gt(zo),n._currentValue=i}function Kc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ds(n,i){Ho=n,$c=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(In=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if($c!==n)if(n={context:n,memoizedValue:i,next:null},Ls===null){if(Ho===null)throw Error(t(308));Ls=n,Ho.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return i}var $r=null;function Zc(n){$r===null?$r=[n]:$r.push(n)}function qh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Zc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Xi(n,c)}function Xi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var yr=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Er(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(yt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Xi(n,a)}return d=c.interleaved,d===null?(i.next=i,Zc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Xi(n,a)}function Vo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ln(n,a)}}function Zh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Go(n,i,a,c){var d=n.updateQueue;yr=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var k=U,se=k.next;k.next=null,w===null?g=se:w.next=se,w=k;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==w&&(U===null?xe.firstBaseUpdate=se:U.next=se,xe.lastBaseUpdate=k))}if(g!==null){var ye=d.baseState;w=0,xe=se=k=null,U=g;do{var _e=U.lane,He=U.eventTime;if((c&_e)===_e){xe!==null&&(xe=xe.next={eventTime:He,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,Ye=U;switch(_e=i,He=a,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){ye=Xe.call(He,ye,_e);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,_e=typeof Xe=="function"?Xe.call(He,ye,_e):Xe,_e==null)break e;ye=le({},ye,_e);break e;case 2:yr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[U]:_e.push(U))}else He={eventTime:He,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(se=xe=He,k=ye):xe=xe.next=He,w|=_e;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(xe===null&&(k=ye),d.baseState=k,d.firstBaseUpdate=se,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Kr|=w,n.lanes=w,n.memoizedState=ye}}function Qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ia={},wi=_r(Ia),Ua=_r(Ia),Fa=_r(Ia);function Yr(n){if(n===Ia)throw Error(t(174));return n}function Jc(n,i){switch(kt(Fa,i),kt(Ua,n),kt(wi,Ia),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Gt(wi),kt(wi,i)}function Ns(){Gt(wi),Gt(Ua),Gt(Fa)}function Jh(n){Yr(Fa.current);var i=Yr(wi.current),a=E(i,n.type);i!==a&&(kt(Ua,n),kt(wi,a))}function eu(n){Ua.current===n&&(Gt(wi),Gt(Ua))}var Yt=_r(0);function Wo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var Xo=P.ReactCurrentDispatcher,iu=P.ReactCurrentBatchConfig,qr=0,qt=null,sn=null,un=null,jo=!1,Oa=!1,Ba=0,zv=0;function yn(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!li(n[a],i[a]))return!1;return!0}function su(n,i,a,c,d,g){if(qr=g,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?Wv:Xv,n=a(c,d),Oa){g=0;do{if(Oa=!1,Ba=0,25<=g)throw Error(t(301));g+=1,un=sn=null,i.updateQueue=null,Xo.current=jv,n=a(c,d)}while(Oa)}if(Xo.current=qo,i=sn!==null&&sn.next!==null,qr=0,un=sn=qt=null,jo=!1,i)throw Error(t(300));return n}function au(){var n=Ba!==0;return Ba=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?qt.memoizedState=un=n:un=un.next=n,un}function Zn(){if(sn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var i=un===null?qt.memoizedState:un.next;if(i!==null)un=i,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},un===null?qt.memoizedState=un=n:un=un.next=n}return un}function ka(n,i){return typeof i=="function"?i(n):i}function ou(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=sn,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var U=w=null,k=null,se=g;do{var xe=se.lane;if((qr&xe)===xe)k!==null&&(k=k.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),c=se.hasEagerState?se.eagerState:n(c,se.action);else{var ye={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};k===null?(U=k=ye,w=c):k=k.next=ye,qt.lanes|=xe,Kr|=xe}se=se.next}while(se!==null&&se!==g);k===null?w=c:k.next=U,li(c,i.memoizedState)||(In=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,qt.lanes|=g,Kr|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function lu(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do g=n(g,w.action),w=w.next;while(w!==d);li(g,i.memoizedState)||(In=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function ep(){}function tp(n,i){var a=qt,c=Zn(),d=i(),g=!li(c.memoizedState,d);if(g&&(c.memoizedState=d,In=!0),c=c.queue,cu(rp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||un!==null&&un.memoizedState.tag&1){if(a.flags|=2048,za(9,ip.bind(null,a,c,d,i),void 0,null),fn===null)throw Error(t(349));(qr&30)!==0||np(a,i,d)}return d}function np(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ip(n,i,a,c){i.value=a,i.getSnapshot=c,sp(i)&&ap(n)}function rp(n,i,a){return a(function(){sp(i)&&ap(n)})}function sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!li(n,a)}catch{return!0}}function ap(n){var i=Xi(n,1);i!==null&&hi(i,n,1,-1)}function op(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},i.queue=n,n=n.dispatch=Gv.bind(null,qt,n),[i.memoizedState,n]}function za(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function lp(){return Zn().memoizedState}function $o(n,i,a,c){var d=Ti();qt.flags|=n,d.memoizedState=za(1|i,a,void 0,c===void 0?null:c)}function Yo(n,i,a,c){var d=Zn();c=c===void 0?null:c;var g=void 0;if(sn!==null){var w=sn.memoizedState;if(g=w.destroy,c!==null&&ru(c,w.deps)){d.memoizedState=za(i,a,g,c);return}}qt.flags|=n,d.memoizedState=za(1|i,a,g,c)}function cp(n,i){return $o(8390656,8,n,i)}function cu(n,i){return Yo(2048,8,n,i)}function up(n,i){return Yo(4,2,n,i)}function fp(n,i){return Yo(4,4,n,i)}function dp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function hp(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4,4,dp.bind(null,i,n),a)}function uu(){}function pp(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function mp(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function gp(n,i,a){return(qr&21)===0?(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=a):(li(a,i)||(a=ze(),qt.lanes|=a,Kr|=a,n.baseState=!0),i)}function Hv(n,i){var a=gt;gt=a!==0&&4>a?a:4,n(!0);var c=iu.transition;iu.transition={};try{n(!1),i()}finally{gt=a,iu.transition=c}}function vp(){return Zn().memoizedState}function Vv(n,i,a){var c=Ar(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},_p(n))xp(i,a);else if(a=qh(n,i,a,c),a!==null){var d=Rn();hi(a,n,c,d),Sp(a,i,c)}}function Gv(n,i,a){var c=Ar(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(_p(n))xp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,U=g(w,a);if(d.hasEagerState=!0,d.eagerState=U,li(U,w)){var k=i.interleaved;k===null?(d.next=d,Zc(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=qh(n,i,d,c),a!==null&&(d=Rn(),hi(a,n,c,d),Sp(a,i,c))}}function _p(n){var i=n.alternate;return n===qt||i!==null&&i===qt}function xp(n,i){Oa=jo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Sp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ln(n,a)}}var qo={readContext:Kn,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},Wv={readContext:Kn,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:cp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$o(4194308,4,dp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $o(4194308,4,n,i)},useInsertionEffect:function(n,i){return $o(4,2,n,i)},useMemo:function(n,i){var a=Ti();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ti();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Vv.bind(null,qt,n),[c.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:uu,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=Hv.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=qt,d=Ti();if(Xt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),fn===null)throw Error(t(349));(qr&30)!==0||np(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,cp(rp.bind(null,c,g,n),[n]),c.flags|=2048,za(9,ip.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ti(),i=fn.identifierPrefix;if(Xt){var a=Wi,c=Gi;a=(c&~(1<<32-Ce(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ba++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=zv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Xv={readContext:Kn,useCallback:pp,useContext:Kn,useEffect:cu,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:fp,useMemo:mp,useReducer:ou,useRef:lp,useState:function(){return ou(ka)},useDebugValue:uu,useDeferredValue:function(n){var i=Zn();return gp(i,sn.memoizedState,n)},useTransition:function(){var n=ou(ka)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:vp,unstable_isNewReconciler:!1},jv={readContext:Kn,useCallback:pp,useContext:Kn,useEffect:cu,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:fp,useMemo:mp,useReducer:lu,useRef:lp,useState:function(){return lu(ka)},useDebugValue:uu,useDeferredValue:function(n){var i=Zn();return sn===null?i.memoizedState=n:gp(i,sn.memoizedState,n)},useTransition:function(){var n=lu(ka)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:vp,unstable_isNewReconciler:!1};function ui(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function fu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:le({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ko={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Rn(),d=Ar(n),g=ji(c,d);g.payload=i,a!=null&&(g.callback=a),i=Er(n,g,d),i!==null&&(hi(i,n,d,c),Vo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Rn(),d=Ar(n),g=ji(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Er(n,g,d),i!==null&&(hi(i,n,d,c),Vo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Rn(),c=Ar(n),d=ji(a,c);d.tag=2,i!=null&&(d.callback=i),i=Er(n,d,c),i!==null&&(hi(i,n,c,a),Vo(i,n,c))}};function yp(n,i,a,c,d,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!Aa(a,c)||!Aa(d,g):!0}function Ep(n,i,a){var c=!1,d=xr,g=i.contextType;return typeof g=="object"&&g!==null?g=Kn(g):(d=Nn(i)?Wr:Sn.current,c=i.contextTypes,g=(c=c!=null)?As(n,d):xr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ko,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Mp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ko.enqueueReplaceState(i,i.state,null)}function du(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Qc(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Kn(g):(g=Nn(i)?Wr:Sn.current,d.context=As(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(fu(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ko.enqueueReplaceState(d,d.state,null),Go(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,i){try{var a="",c=i;do a+=Ie(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function hu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var $v=typeof WeakMap=="function"?WeakMap:Map;function wp(n,i,a){a=ji(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){il||(il=!0,bu=c),pu(n,i)},a}function Tp(n,i,a){a=ji(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){pu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){pu(n,i),typeof c!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Ap(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new $v;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=o_.bind(null,n,i,a),i.then(n,n))}function Cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ji(-1,1),i.tag=2,Er(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Yv=P.ReactCurrentOwner,In=!1;function Cn(n,i,a,c){i.child=n===null?Yh(i,null,a,c):Ps(i,n.child,a,c)}function bp(n,i,a,c,d){a=a.render;var g=i.ref;return Ds(i,d),c=su(n,i,a,c,g,d),a=au(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,$i(n,i,d)):(Xt&&a&&Vc(i),i.flags|=1,Cn(n,i,c,d),i.child)}function Pp(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Fu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Lp(n,i,g,c,d)):(n=cl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Aa,a(w,c)&&n.ref===i.ref)return $i(n,i,d)}return i.flags|=1,n=Rr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Lp(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(Aa(g,c)&&n.ref===i.ref)if(In=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(In=!0);else return i.lanes=n.lanes,$i(n,i,d)}return mu(n,i,a,c,d)}function Dp(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Fs,Gn),Gn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Fs,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,kt(Fs,Gn),Gn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,kt(Fs,Gn),Gn|=c;return Cn(n,i,d,a),i.child}function Np(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,a,c,d){var g=Nn(a)?Wr:Sn.current;return g=As(i,g),Ds(i,d),a=su(n,i,a,c,g,d),c=au(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,$i(n,i,d)):(Xt&&c&&Vc(i),i.flags|=1,Cn(n,i,a,d),i.child)}function Ip(n,i,a,c,d){if(Nn(a)){var g=!0;Io(i)}else g=!1;if(Ds(i,d),i.stateNode===null)Qo(n,i),Ep(i,a,c),du(i,a,c,d),c=!0;else if(n===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var k=w.context,se=a.contextType;typeof se=="object"&&se!==null?se=Kn(se):(se=Nn(a)?Wr:Sn.current,se=As(i,se));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==c||k!==se)&&Mp(i,w,c,se),yr=!1;var _e=i.memoizedState;w.state=_e,Go(i,c,w,d),k=i.memoizedState,U!==c||_e!==k||Dn.current||yr?(typeof xe=="function"&&(fu(i,a,xe,c),k=i.memoizedState),(U=yr||yp(i,a,U,c,_e,k,se))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),w.props=c,w.state=k,w.context=se,c=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Kh(n,i),U=i.memoizedProps,se=i.type===i.elementType?U:ui(i.type,U),w.props=se,ye=i.pendingProps,_e=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=Kn(k):(k=Nn(a)?Wr:Sn.current,k=As(i,k));var He=a.getDerivedStateFromProps;(xe=typeof He=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==ye||_e!==k)&&Mp(i,w,c,k),yr=!1,_e=i.memoizedState,w.state=_e,Go(i,c,w,d);var Xe=i.memoizedState;U!==ye||_e!==Xe||Dn.current||yr?(typeof He=="function"&&(fu(i,a,He,c),Xe=i.memoizedState),(se=yr||yp(i,a,se,c,_e,Xe,k)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Xe,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Xe,k)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),w.props=c,w.state=Xe,w.context=k,c=se):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return gu(n,i,a,c,g,d)}function gu(n,i,a,c,d,g){Np(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&kh(i,a,!1),$i(n,i,g);c=i.stateNode,Yv.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Ps(i,n.child,null,g),i.child=Ps(i,null,U,g)):Cn(n,i,U,g),i.memoizedState=c.state,d&&kh(i,a,!0),i.child}function Up(n){var i=n.stateNode;i.pendingContext?Oh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Oh(n,i.context,!1),Jc(n,i.containerInfo)}function Fp(n,i,a,c,d){return bs(),jc(d),i.flags|=256,Cn(n,i,a,c),i.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function _u(n){return{baseLanes:n,cachePool:null,transitions:null}}function Op(n,i,a){var c=i.pendingProps,d=Yt.current,g=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Yt,d&1),n===null)return Xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=ul(w,c,0,null),n=es(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=_u(a),i.memoizedState=vu,n):xu(i,w));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return qv(n,i,w,c,U,d,a);if(g){g=c.fallback,w=i.mode,d=n.child,U=d.sibling;var k={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=Rr(d,k),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?g=Rr(U,g):(g=es(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?_u(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=vu,c}return g=n.child,n=g.sibling,c=Rr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function xu(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Zo(n,i,a,c){return c!==null&&jc(c),Ps(i,n.child,null,a),n=xu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function qv(n,i,a,c,d,g,w){if(a)return i.flags&256?(i.flags&=-257,c=hu(Error(t(422))),Zo(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=ul({mode:"visible",children:c.children},d,0,null),g=es(g,d,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ps(i,n.child,null,w),i.child.memoizedState=_u(w),i.memoizedState=vu,g);if((i.mode&1)===0)return Zo(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,g=Error(t(419)),c=hu(g,c,void 0),Zo(n,i,w,c)}if(U=(w&n.childLanes)!==0,In||U){if(c=fn,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Xi(n,d),hi(c,n,d,-1))}return Uu(),c=hu(Error(t(421))),Zo(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=l_.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Vn=vr(d.nextSibling),Hn=i,Xt=!0,ci=null,n!==null&&(Yn[qn++]=Gi,Yn[qn++]=Wi,Yn[qn++]=Xr,Gi=n.id,Wi=n.overflow,Xr=i),i=xu(i,c.children),i.flags|=4096,i)}function Bp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Kc(n.return,i,a)}function Su(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function kp(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Cn(n,i,c.children,a),c=Yt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,a,i);else if(n.tag===19)Bp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Yt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Wo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Su(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Wo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Su(i,!0,a,null,g);break;case"together":Su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function $i(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Rr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Rr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Kv(n,i,a){switch(i.tag){case 3:Up(i),bs();break;case 5:Jh(i);break;case 1:Nn(i.type)&&Io(i);break;case 4:Jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(zo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Yt,Yt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Op(n,i,a):(kt(Yt,Yt.current&1),n=$i(n,i,a),n!==null?n.sibling:null);kt(Yt,Yt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return kp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Yt,Yt.current),c)break;return null;case 22:case 23:return i.lanes=0,Dp(n,i,a)}return $i(n,i,a)}var zp,yu,Hp,Vp;zp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yu=function(){},Hp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Yr(wi.current);var g=null;switch(a){case"input":d=Mt(n,d),c=Mt(n,c),g=[];break;case"select":d=le({},d,{value:void 0}),c=le({},c,{value:void 0}),g=[];break;case"textarea":d=dt(n,d),c=dt(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Lo)}ke(a,c);var w;a=null;for(se in d)if(!c.hasOwnProperty(se)&&d.hasOwnProperty(se)&&d[se]!=null)if(se==="style"){var U=d[se];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?g||(g=[]):(g=g||[]).push(se,null));for(se in c){var k=c[se];if(U=d!=null?d[se]:void 0,c.hasOwnProperty(se)&&k!==U&&(k!=null||U!=null))if(se==="style")if(U){for(w in U)!U.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&U[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(g||(g=[]),g.push(se,a)),a=k;else se==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(g=g||[]).push(se,k)):se==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(se,""+k):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(k!=null&&se==="onScroll"&&Vt("scroll",n),g||U===k||(g=[])):(g=g||[]).push(se,k))}a&&(g=g||[]).push("style",a);var se=g;(i.updateQueue=se)&&(i.flags|=4)}},Vp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ha(n,i){if(!Xt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function En(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Zv(n,i,a){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return Nn(i.type)&&No(),En(i),null;case 3:return c=i.stateNode,Ns(),Gt(Dn),Gt(Sn),nu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ci!==null&&(Du(ci),ci=null))),yu(n,i),En(i),null;case 5:eu(i);var d=Yr(Fa.current);if(a=i.type,n!==null&&i.stateNode!=null)Hp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return En(i),null}if(n=Yr(wi.current),Bo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Mi]=i,c[La]=g,n=(i.mode&1)!==0,a){case"dialog":Vt("cancel",c),Vt("close",c);break;case"iframe":case"object":case"embed":Vt("load",c);break;case"video":case"audio":for(d=0;d<Ra.length;d++)Vt(Ra[d],c);break;case"source":Vt("error",c);break;case"img":case"image":case"link":Vt("error",c),Vt("load",c);break;case"details":Vt("toggle",c);break;case"input":Lt(c,g),Vt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Vt("invalid",c);break;case"textarea":Ct(c,g),Vt("invalid",c)}ke(a,g),d=null;for(var w in g)if(g.hasOwnProperty(w)){var U=g[w];w==="children"?typeof U=="string"?c.textContent!==U&&(g.suppressHydrationWarning!==!0&&Po(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Po(c.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Vt("scroll",c)}switch(a){case"input":Je(c),Ft(c,g,!0);break;case"textarea":Je(c),zt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Lo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Mi]=i,n[La]=c,zp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ae(a,c),a){case"dialog":Vt("cancel",n),Vt("close",n),d=c;break;case"iframe":case"object":case"embed":Vt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ra.length;d++)Vt(Ra[d],n);d=c;break;case"source":Vt("error",n),d=c;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),d=c;break;case"details":Vt("toggle",n),d=c;break;case"input":Lt(n,c),d=Mt(n,c),Vt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=le({},c,{value:void 0}),Vt("invalid",n);break;case"textarea":Ct(n,c),d=dt(n,c),Vt("invalid",n);break;default:d=c}ke(a,d),U=d;for(g in U)if(U.hasOwnProperty(g)){var k=U[g];g==="style"?pe(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&he(n,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ge(n,k):typeof k=="number"&&ge(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Vt("scroll",n):k!=null&&b(n,g,k,w))}switch(a){case"input":Je(n),Ft(n,c,!1);break;case"textarea":Je(n),zt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+me(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Ot(n,!!c.multiple,g,!1):c.defaultValue!=null&&Ot(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Lo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yr(Fa.current),Yr(wi.current),Bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Mi]=i,(g=c.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:Po(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Mi]=i,i.stateNode=c}return En(i),null;case 13:if(Gt(Yt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xh(),bs(),i.flags|=98560,g=!1;else if(g=Bo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Mi]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),g=!1}else ci!==null&&(Du(ci),ci=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Yt.current&1)!==0?an===0&&(an=3):Uu())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return Ns(),yu(n,i),n===null&&ba(i.stateNode.containerInfo),En(i),null;case 10:return qc(i.type._context),En(i),null;case 17:return Nn(i.type)&&No(),En(i),null;case 19:if(Gt(Yt),g=i.memoizedState,g===null)return En(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)Ha(g,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Wo(n),w!==null){for(i.flags|=128,Ha(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Yt,Yt.current&1|2),i.child}n=n.sibling}g.tail!==null&&$t()>Os&&(i.flags|=128,c=!0,Ha(g,!1),i.lanes=4194304)}else{if(!c)if(n=Wo(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ha(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Xt)return En(i),null}else 2*$t()-g.renderingStartTime>Os&&a!==1073741824&&(i.flags|=128,c=!0,Ha(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=$t(),i.sibling=null,a=Yt.current,kt(Yt,c?a&1|2:a&1),i):(En(i),null);case 22:case 23:return Iu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Qv(n,i){switch(Gc(i),i.tag){case 1:return Nn(i.type)&&No(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ns(),Gt(Dn),Gt(Sn),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(Gt(Yt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Gt(Yt),null;case 4:return Ns(),null;case 10:return qc(i.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var Jo=!1,Mn=!1,Jv=typeof WeakSet=="function"?WeakSet:Set,We=null;function Us(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Zt(n,i,c)}else a.current=null}function Eu(n,i,a){try{a()}catch(c){Zt(n,i,c)}}var Gp=!1;function e_(n,i){if(Ic=xo,n=yh(),Ac(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,U=-1,k=-1,se=0,xe=0,ye=n,_e=null;t:for(;;){for(var He;ye!==a||d!==0&&ye.nodeType!==3||(U=w+d),ye!==g||c!==0&&ye.nodeType!==3||(k=w+c),ye.nodeType===3&&(w+=ye.nodeValue.length),(He=ye.firstChild)!==null;)_e=ye,ye=He;for(;;){if(ye===n)break t;if(_e===a&&++se===d&&(U=w),_e===g&&++xe===c&&(k=w),(He=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=He}a=U===-1||k===-1?null:{start:U,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},xo=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,Qt=Xe.memoizedState,Z=i.stateNode,G=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ui(i.type,Ye),Qt);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Zt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return Xe=Gp,Gp=!1,Xe}function Va(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Eu(i,a,g)}d=d.next}while(d!==c)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Mu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wp(n){var i=n.alternate;i!==null&&(n.alternate=null,Wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[La],delete i[kc],delete i[Fv],delete i[Ov])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xp(n){return n.tag===5||n.tag===3||n.tag===4}function jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Lo));else if(c!==4&&(n=n.child,n!==null))for(wu(n,i,a),n=n.sibling;n!==null;)wu(n,i,a),n=n.sibling}function Tu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Tu(n,i,a),n=n.sibling;n!==null;)Tu(n,i,a),n=n.sibling}var gn=null,fi=!1;function Mr(n,i,a){for(a=a.child;a!==null;)$p(n,i,a),a=a.sibling}function $p(n,i,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Q,a)}catch{}switch(a.tag){case 5:Mn||Us(a,i);case 6:var c=gn,d=fi;gn=null,Mr(n,i,a),gn=c,fi=d,gn!==null&&(fi?(n=gn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):gn.removeChild(a.stateNode));break;case 18:gn!==null&&(fi?(n=gn,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),Sa(n)):Bc(gn,a.stateNode));break;case 4:c=gn,d=fi,gn=a.stateNode.containerInfo,fi=!0,Mr(n,i,a),gn=c,fi=d;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Eu(a,i,w),d=d.next}while(d!==c)}Mr(n,i,a);break;case 1:if(!Mn&&(Us(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Zt(a,i,U)}Mr(n,i,a);break;case 21:Mr(n,i,a);break;case 22:a.mode&1?(Mn=(c=Mn)||a.memoizedState!==null,Mr(n,i,a),Mn=c):Mr(n,i,a);break;default:Mr(n,i,a)}}function Yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Jv),i.forEach(function(c){var d=c_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function di(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:gn=U.stateNode,fi=!1;break e;case 3:gn=U.stateNode.containerInfo,fi=!0;break e;case 4:gn=U.stateNode.containerInfo,fi=!0;break e}U=U.return}if(gn===null)throw Error(t(160));$p(g,w,d),gn=null,fi=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(se){Zt(d,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qp(i,n),i=i.sibling}function qp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),Ai(n),c&4){try{Va(3,n,n.return),el(3,n)}catch(Ye){Zt(n,n.return,Ye)}try{Va(5,n,n.return)}catch(Ye){Zt(n,n.return,Ye)}}break;case 1:di(i,n),Ai(n),c&512&&a!==null&&Us(a,a.return);break;case 5:if(di(i,n),Ai(n),c&512&&a!==null&&Us(a,a.return),n.flags&32){var d=n.stateNode;try{ge(d,"")}catch(Ye){Zt(n,n.return,Ye)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,U=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&ft(d,g),Ae(U,w);var se=Ae(U,g);for(w=0;w<k.length;w+=2){var xe=k[w],ye=k[w+1];xe==="style"?pe(d,ye):xe==="dangerouslySetInnerHTML"?he(d,ye):xe==="children"?ge(d,ye):b(d,xe,ye,se)}switch(U){case"input":jt(d,g);break;case"textarea":De(d,g);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var He=g.value;He!=null?Ot(d,!!g.multiple,He,!1):_e!==!!g.multiple&&(g.defaultValue!=null?Ot(d,!!g.multiple,g.defaultValue,!0):Ot(d,!!g.multiple,g.multiple?[]:"",!1))}d[La]=g}catch(Ye){Zt(n,n.return,Ye)}}break;case 6:if(di(i,n),Ai(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(Ye){Zt(n,n.return,Ye)}}break;case 3:if(di(i,n),Ai(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Sa(i.containerInfo)}catch(Ye){Zt(n,n.return,Ye)}break;case 4:di(i,n),Ai(n);break;case 13:di(i,n),Ai(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Ru=$t())),c&4&&Yp(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(Mn=(se=Mn)||xe,di(i,n),Mn=se):di(i,n),Ai(n),c&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!xe&&(n.mode&1)!==0)for(We=n,xe=n.child;xe!==null;){for(ye=We=xe;We!==null;){switch(_e=We,He=_e.child,_e.tag){case 0:case 11:case 14:case 15:Va(4,_e,_e.return);break;case 1:Us(_e,_e.return);var Xe=_e.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(Ye){Zt(c,a,Ye)}}break;case 5:Us(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Qp(ye);continue}}He!==null?(He.return=_e,We=He):Qp(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,se?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=ye.stateNode,k=ye.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=ue("display",w))}catch(Ye){Zt(n,n.return,Ye)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=se?"":ye.memoizedProps}catch(Ye){Zt(n,n.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:di(i,n),Ai(n),c&4&&Yp(n);break;case 21:break;default:di(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ge(d,""),c.flags&=-33);var g=jp(n);Tu(n,g,d);break;case 3:case 4:var w=c.stateNode.containerInfo,U=jp(n);wu(n,U,w);break;default:throw Error(t(161))}}catch(k){Zt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function t_(n,i,a){We=n,Kp(n)}function Kp(n,i,a){for(var c=(n.mode&1)!==0;We!==null;){var d=We,g=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||Jo;if(!w){var U=d.alternate,k=U!==null&&U.memoizedState!==null||Mn;U=Jo;var se=Mn;if(Jo=w,(Mn=k)&&!se)for(We=d;We!==null;)w=We,k=w.child,w.tag===22&&w.memoizedState!==null?Jp(d):k!==null?(k.return=w,We=k):Jp(d);for(;g!==null;)We=g,Kp(g),g=g.sibling;We=d,Jo=U,Mn=se}Zp(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,We=g):Zp(n)}}function Zp(n){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||el(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ui(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Qh(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Qh(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Sa(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||i.flags&512&&Mu(i)}catch(_e){Zt(i,i.return,_e)}}if(i===n){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function Qp(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function Jp(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(k){Zt(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){Zt(i,d,k)}}var g=i.return;try{Mu(i)}catch(k){Zt(i,g,k)}break;case 5:var w=i.return;try{Mu(i)}catch(k){Zt(i,w,k)}}}catch(k){Zt(i,i.return,k)}if(i===n){We=null;break}var U=i.sibling;if(U!==null){U.return=i.return,We=U;break}We=i.return}}var n_=Math.ceil,tl=P.ReactCurrentDispatcher,Au=P.ReactCurrentOwner,Qn=P.ReactCurrentBatchConfig,yt=0,fn=null,tn=null,vn=0,Gn=0,Fs=_r(0),an=0,Ga=null,Kr=0,nl=0,Cu=0,Wa=null,Un=null,Ru=0,Os=1/0,Yi=null,il=!1,bu=null,wr=null,rl=!1,Tr=null,sl=0,Xa=0,Pu=null,al=-1,ol=0;function Rn(){return(yt&6)!==0?$t():al!==-1?al:al=$t()}function Ar(n){return(n.mode&1)===0?1:(yt&2)!==0&&vn!==0?vn&-vn:kv.transition!==null?(ol===0&&(ol=ze()),ol):(n=gt,n!==0||(n=window.event,n=n===void 0?16:th(n.type)),n)}function hi(n,i,a,c){if(50<Xa)throw Xa=0,Pu=null,Error(t(185));mt(n,a,c),((yt&2)===0||n!==fn)&&(n===fn&&((yt&2)===0&&(nl|=a),an===4&&Cr(n,vn)),Fn(n,c),a===1&&yt===0&&(i.mode&1)===0&&(Os=$t()+500,Uo&&Sr()))}function Fn(n,i){var a=n.callbackNode;Rt(n,i);var c=Bt(n,n===fn?vn:0);if(c===0)a!==null&&vo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&vo(a),i===1)n.tag===0?Bv(tm.bind(null,n)):zh(tm.bind(null,n)),Iv(function(){(yt&6)===0&&Sr()}),a=null;else{switch(zi(c)){case 1:a=ma;break;case 4:a=A;break;case 16:a=X;break;case 536870912:a=ee;break;default:a=X}a=cm(a,em.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function em(n,i){if(al=-1,ol=0,(yt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Bs()&&n.callbackNode!==a)return null;var c=Bt(n,n===fn?vn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ll(n,c);else{i=c;var d=yt;yt|=2;var g=im();(fn!==n||vn!==i)&&(Yi=null,Os=$t()+500,Qr(n,i));do try{s_();break}catch(U){nm(n,U)}while(!0);Yc(),tl.current=g,yt=d,tn!==null?i=0:(fn=null,vn=0,i=an)}if(i!==0){if(i===2&&(d=en(n),d!==0&&(c=d,i=Lu(n,d))),i===1)throw a=Ga,Qr(n,0),Cr(n,c),Fn(n,$t()),a;if(i===6)Cr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!i_(d)&&(i=ll(n,c),i===2&&(g=en(n),g!==0&&(c=g,i=Lu(n,g))),i===1))throw a=Ga,Qr(n,0),Cr(n,c),Fn(n,$t()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Jr(n,Un,Yi);break;case 3:if(Cr(n,c),(c&130023424)===c&&(i=Ru+500-$t(),10<i)){if(Bt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Rn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Oc(Jr.bind(null,n,Un,Yi),i);break}Jr(n,Un,Yi);break;case 4:if(Cr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-Ce(c);g=1<<w,w=i[w],w>d&&(d=w),c&=~g}if(c=d,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*n_(c/1960))-c,10<c){n.timeoutHandle=Oc(Jr.bind(null,n,Un,Yi),c);break}Jr(n,Un,Yi);break;case 5:Jr(n,Un,Yi);break;default:throw Error(t(329))}}}return Fn(n,$t()),n.callbackNode===a?em.bind(null,n):null}function Lu(n,i){var a=Wa;return n.current.memoizedState.isDehydrated&&(Qr(n,i).flags|=256),n=ll(n,i),n!==2&&(i=Un,Un=a,i!==null&&Du(i)),n}function Du(n){Un===null?Un=n:Un.push.apply(Un,n)}function i_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!li(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Cr(n,i){for(i&=~Cu,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ce(i),c=1<<a;n[a]=-1,i&=~c}}function tm(n){if((yt&6)!==0)throw Error(t(327));Bs();var i=Bt(n,0);if((i&1)===0)return Fn(n,$t()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(i=c,a=Lu(n,c))}if(a===1)throw a=Ga,Qr(n,0),Cr(n,i),Fn(n,$t()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Jr(n,Un,Yi),Fn(n,$t()),null}function Nu(n,i){var a=yt;yt|=1;try{return n(i)}finally{yt=a,yt===0&&(Os=$t()+500,Uo&&Sr())}}function Zr(n){Tr!==null&&Tr.tag===0&&(yt&6)===0&&Bs();var i=yt;yt|=1;var a=Qn.transition,c=gt;try{if(Qn.transition=null,gt=1,n)return n()}finally{gt=c,Qn.transition=a,yt=i,(yt&6)===0&&Sr()}}function Iu(){Gn=Fs.current,Gt(Fs)}function Qr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Nv(a)),tn!==null)for(a=tn.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&No();break;case 3:Ns(),Gt(Dn),Gt(Sn),nu();break;case 5:eu(c);break;case 4:Ns();break;case 13:Gt(Yt);break;case 19:Gt(Yt);break;case 10:qc(c.type._context);break;case 22:case 23:Iu()}a=a.return}if(fn=n,tn=n=Rr(n.current,null),vn=Gn=i,an=0,Ga=null,Cu=nl=Kr=0,Un=Wa=null,$r!==null){for(i=0;i<$r.length;i++)if(a=$r[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=d,c.next=w}a.pending=c}$r=null}return n}function nm(n,i){do{var a=tn;try{if(Yc(),Xo.current=qo,jo){for(var c=qt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}jo=!1}if(qr=0,un=sn=qt=null,Oa=!1,Ba=0,Au.current=null,a===null||a.return===null){an=1,Ga=i,tn=null;break}e:{var g=n,w=a.return,U=a,k=i;if(i=vn,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var se=k,xe=U,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var He=Cp(w);if(He!==null){He.flags&=-257,Rp(He,w,U,g,i),He.mode&1&&Ap(g,se,i),i=He,k=se;var Xe=i.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(k),i.updateQueue=Ye}else Xe.add(k);break e}else{if((i&1)===0){Ap(g,se,i),Uu();break e}k=Error(t(426))}}else if(Xt&&U.mode&1){var Qt=Cp(w);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Rp(Qt,w,U,g,i),jc(Is(k,U));break e}}g=k=Is(k,U),an!==4&&(an=2),Wa===null?Wa=[g]:Wa.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var Z=wp(g,k,i);Zh(g,Z);break e;case 1:U=k;var G=g.type,ne=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(wr===null||!wr.has(ne)))){g.flags|=65536,i&=-i,g.lanes|=i;var we=Tp(g,U,i);Zh(g,we);break e}}g=g.return}while(g!==null)}sm(a)}catch(Ke){i=Ke,tn===a&&a!==null&&(tn=a=a.return);continue}break}while(!0)}function im(){var n=tl.current;return tl.current=qo,n===null?qo:n}function Uu(){(an===0||an===3||an===2)&&(an=4),fn===null||(Kr&268435455)===0&&(nl&268435455)===0||Cr(fn,vn)}function ll(n,i){var a=yt;yt|=2;var c=im();(fn!==n||vn!==i)&&(Yi=null,Qr(n,i));do try{r_();break}catch(d){nm(n,d)}while(!0);if(Yc(),yt=a,tl.current=c,tn!==null)throw Error(t(261));return fn=null,vn=0,an}function r_(){for(;tn!==null;)rm(tn)}function s_(){for(;tn!==null&&!dc();)rm(tn)}function rm(n){var i=lm(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?sm(n):tn=i,Au.current=null}function sm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Zv(a,i,Gn),a!==null){tn=a;return}}else{if(a=Qv(a,i),a!==null){a.flags&=32767,tn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=n}while(i!==null);an===0&&(an=5)}function Jr(n,i,a){var c=gt,d=Qn.transition;try{Qn.transition=null,gt=1,a_(n,i,a,c)}finally{Qn.transition=d,gt=c}return null}function a_(n,i,a,c){do Bs();while(Tr!==null);if((yt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Pn(n,g),n===fn&&(tn=fn=null,vn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,cm(X,function(){return Bs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Qn.transition,Qn.transition=null;var w=gt;gt=1;var U=yt;yt|=4,Au.current=null,e_(n,a),qp(a,n),Av(Uc),xo=!!Ic,Uc=Ic=null,n.current=a,t_(a),hc(),yt=U,gt=w,Qn.transition=g}else n.current=a;if(rl&&(rl=!1,Tr=n,sl=d),g=n.pendingLanes,g===0&&(wr=null),Ve(a.stateNode),Fn(n,$t()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(il)throw il=!1,n=bu,bu=null,n;return(sl&1)!==0&&n.tag!==0&&Bs(),g=n.pendingLanes,(g&1)!==0?n===Pu?Xa++:(Xa=0,Pu=n):Xa=0,Sr(),null}function Bs(){if(Tr!==null){var n=zi(sl),i=Qn.transition,a=gt;try{if(Qn.transition=null,gt=16>n?16:n,Tr===null)var c=!1;else{if(n=Tr,Tr=null,sl=0,(yt&6)!==0)throw Error(t(331));var d=yt;for(yt|=4,We=n.current;We!==null;){var g=We,w=g.child;if((We.flags&16)!==0){var U=g.deletions;if(U!==null){for(var k=0;k<U.length;k++){var se=U[k];for(We=se;We!==null;){var xe=We;switch(xe.tag){case 0:case 11:case 15:Va(8,xe,g)}var ye=xe.child;if(ye!==null)ye.return=xe,We=ye;else for(;We!==null;){xe=We;var _e=xe.sibling,He=xe.return;if(Wp(xe),xe===se){We=null;break}if(_e!==null){_e.return=He,We=_e;break}We=He}}}var Xe=g.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var Qt=Ye.sibling;Ye.sibling=null,Ye=Qt}while(Ye!==null)}}We=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,We=w;else e:for(;We!==null;){if(g=We,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Va(9,g,g.return)}var Z=g.sibling;if(Z!==null){Z.return=g.return,We=Z;break e}We=g.return}}var G=n.current;for(We=G;We!==null;){w=We;var ne=w.child;if((w.subtreeFlags&2064)!==0&&ne!==null)ne.return=w,We=ne;else e:for(w=G;We!==null;){if(U=We,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:el(9,U)}}catch(Ke){Zt(U,U.return,Ke)}if(U===w){We=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,We=we;break e}We=U.return}}if(yt=d,Sr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Q,n)}catch{}c=!0}return c}finally{gt=a,Qn.transition=i}}return!1}function am(n,i,a){i=Is(a,i),i=wp(n,i,1),n=Er(n,i,1),i=Rn(),n!==null&&(mt(n,1,i),Fn(n,i))}function Zt(n,i,a){if(n.tag===3)am(n,n,a);else for(;i!==null;){if(i.tag===3){am(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(wr===null||!wr.has(c))){n=Is(a,n),n=Tp(i,n,1),i=Er(i,n,1),n=Rn(),i!==null&&(mt(i,1,n),Fn(i,n));break}}i=i.return}}function o_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Rn(),n.pingedLanes|=n.suspendedLanes&a,fn===n&&(vn&a)===a&&(an===4||an===3&&(vn&130023424)===vn&&500>$t()-Ru?Qr(n,0):Cu|=a),Fn(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=qe,qe<<=1,(qe&130023424)===0&&(qe=4194304)));var a=Rn();n=Xi(n,i),n!==null&&(mt(n,i,a),Fn(n,a))}function l_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),om(n,a)}function c_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),om(n,a)}var lm;lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Dn.current)In=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return In=!1,Kv(n,i,a);In=(n.flags&131072)!==0}else In=!1,Xt&&(i.flags&1048576)!==0&&Hh(i,Oo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qo(n,i),n=i.pendingProps;var d=As(i,Sn.current);Ds(i,a),d=su(null,i,c,n,d,a);var g=au();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(c)?(g=!0,Io(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Qc(i),d.updater=Ko,i.stateNode=d,d._reactInternals=i,du(i,c,n,a),i=gu(null,i,c,!0,g,a)):(i.tag=0,Xt&&g&&Vc(i),Cn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=f_(c),n=ui(c,n),d){case 0:i=mu(null,i,c,n,a);break e;case 1:i=Ip(null,i,c,n,a);break e;case 11:i=bp(null,i,c,n,a);break e;case 14:i=Pp(null,i,c,ui(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),mu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),Ip(n,i,c,d,a);case 3:e:{if(Up(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Kh(n,i),Go(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Is(Error(t(423)),i),i=Fp(n,i,c,a,d);break e}else if(c!==d){d=Is(Error(t(424)),i),i=Fp(n,i,c,a,d);break e}else for(Vn=vr(i.stateNode.containerInfo.firstChild),Hn=i,Xt=!0,ci=null,a=Yh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),c===d){i=$i(n,i,a);break e}Cn(n,i,c,a)}i=i.child}return i;case 5:return Jh(i),n===null&&Xc(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,w=d.children,Fc(c,d)?w=null:g!==null&&Fc(c,g)&&(i.flags|=32),Np(n,i),Cn(n,i,w,a),i.child;case 6:return n===null&&Xc(i),null;case 13:return Op(n,i,a);case 4:return Jc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ps(i,null,c,a):Cn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),bp(n,i,c,d,a);case 7:return Cn(n,i,i.pendingProps,a),i.child;case 8:return Cn(n,i,i.pendingProps.children,a),i.child;case 12:return Cn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,w=d.value,kt(zo,c._currentValue),c._currentValue=w,g!==null)if(li(g.value,w)){if(g.children===d.children&&!Dn.current){i=$i(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){w=g.child;for(var k=U.firstContext;k!==null;){if(k.context===c){if(g.tag===1){k=ji(-1,a&-a),k.tag=2;var se=g.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),se.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Kc(g.return,a,i),U.lanes|=a;break}k=k.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),Kc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Cn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ds(i,a),d=Kn(d),c=c(d),i.flags|=1,Cn(n,i,c,a),i.child;case 14:return c=i.type,d=ui(c,i.pendingProps),d=ui(c.type,d),Pp(n,i,c,d,a);case 15:return Lp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),Qo(n,i),i.tag=1,Nn(c)?(n=!0,Io(i)):n=!1,Ds(i,a),Ep(i,c,d),du(i,c,d,a),gu(null,i,c,!0,n,a);case 19:return kp(n,i,a);case 22:return Dp(n,i,a)}throw Error(t(156,i.tag))};function cm(n,i){return go(n,i)}function u_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,c){return new u_(n,i,a,c)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function f_(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===H)return 14}return 2}function Rr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,c,d,g){var w=2;if(c=n,typeof n=="function")Fu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case F:return es(a.children,d,g,i);case T:w=8,d|=8;break;case I:return n=Jn(12,a,i,d|2),n.elementType=I,n.lanes=g,n;case oe:return n=Jn(13,a,i,d),n.elementType=oe,n.lanes=g,n;case fe:return n=Jn(19,a,i,d),n.elementType=fe,n.lanes=g,n;case W:return ul(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:w=10;break e;case B:w=9;break e;case K:w=11;break e;case H:w=14;break e;case $:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(w,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function es(n,i,a,c){return n=Jn(7,n,c,i),n.lanes=a,n}function ul(n,i,a,c){return n=Jn(22,n,c,i),n.elementType=W,n.lanes=a,n.stateNode={isHidden:!1},n}function Ou(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function Bu(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function d_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ku(n,i,a,c,d,g,w,U,k){return n=new d_(n,i,a,U,k),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Jn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(g),n}function h_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function um(n){if(!n)return xr;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Nn(a))return Bh(n,a,i)}return i}function fm(n,i,a,c,d,g,w,U,k){return n=ku(a,c,!0,n,d,g,w,U,k),n.context=um(null),a=n.current,c=Rn(),d=Ar(a),g=ji(c,d),g.callback=i??null,Er(a,g,d),n.current.lanes=d,mt(n,d,c),Fn(n,c),n}function fl(n,i,a,c){var d=i.current,g=Rn(),w=Ar(d);return a=um(a),i.context===null?i.context=a:i.pendingContext=a,i=ji(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Er(d,i,w),n!==null&&(hi(n,d,w,g),Vo(n,d,w)),w}function dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function zu(n,i){dm(n,i),(n=n.alternate)&&dm(n,i)}function p_(){return null}var hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hu(n){this._internalRoot=n}hl.prototype.render=Hu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},hl.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Zr(function(){fl(null,n,null,null)}),i[Hi]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=bt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<pr.length&&i!==0&&i<pr[a].priority;a++);pr.splice(a,0,n),a===0&&Jd(n)}};function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pm(){}function m_(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var se=dl(w);g.call(se)}}var w=fm(i,c,n,0,null,!1,!1,"",pm);return n._reactRootContainer=w,n[Hi]=w.current,ba(n.nodeType===8?n.parentNode:n),Zr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var se=dl(k);U.call(se)}}var k=ku(n,0,!1,null,null,!1,!1,"",pm);return n._reactRootContainer=k,n[Hi]=k.current,ba(n.nodeType===8?n.parentNode:n),Zr(function(){fl(i,k,a,c)}),k}function ml(n,i,a,c,d){var g=a._reactRootContainer;if(g){var w=g;if(typeof d=="function"){var U=d;d=function(){var k=dl(w);U.call(k)}}fl(i,w,n,d)}else w=m_(a,i,n,d,c);return dl(w)}At=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=St(i.pendingLanes);a!==0&&(Ln(i,a|1),Fn(i,$t()),(yt&6)===0&&(Os=$t()+500,Sr()))}break;case 13:Zr(function(){var c=Xi(n,1);if(c!==null){var d=Rn();hi(c,n,1,d)}}),zu(n,1)}},Ht=function(n){if(n.tag===13){var i=Xi(n,134217728);if(i!==null){var a=Rn();hi(i,n,134217728,a)}zu(n,134217728)}},ai=function(n){if(n.tag===13){var i=Ar(n),a=Xi(n,i);if(a!==null){var c=Rn();hi(a,n,i,c)}zu(n,i)}},bt=function(){return gt},oi=function(n,i){var a=gt;try{return gt=n,i()}finally{gt=a}},st=function(n,i,a){switch(i){case"input":if(jt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Do(c);if(!d)throw Error(t(90));Ut(c),jt(c,d)}}}break;case"textarea":De(n,a);break;case"select":i=a.value,i!=null&&Ot(n,!!a.multiple,i,!1)}},Re=Nu,ve=Zr;var g_={usingClientEntryPoint:!1,Events:[Da,ws,Do,de,Be,Nu]},ja={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v_={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ha(n),n===null?null:n.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||p_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Q=gl.inject(v_),be=gl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g_,On.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(i))throw Error(t(200));return h_(n,i,null,a)},On.createRoot=function(n,i){if(!Vu(n))throw Error(t(299));var a=!1,c="",d=hm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ku(n,1,!1,null,null,a,!1,c,d),n[Hi]=i.current,ba(n.nodeType===8?n.parentNode:n),new Hu(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ha(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return Zr(n)},On.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},On.hydrateRoot=function(n,i,a){if(!Vu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",w=hm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=fm(i,null,n,1,a??null,d,!1,g,w),n[Hi]=i.current,ba(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new hl(i)},On.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},On.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},On.unstable_batchedUpdates=Nu,On.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,c)},On.version="18.3.1-next-f1338f8080-20240426",On}var Em;function A_(){if(Em)return Xu.exports;Em=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xu.exports=T_(),Xu.exports}var Mm;function C_(){if(Mm)return _l;Mm=1;var r=A_();return _l.createRoot=r.createRoot,_l.hydrateRoot=r.hydrateRoot,_l}var R_=C_();/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ad=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Ig=/^[\\/]{2}/;function b_(r,e){return e+r.replace(/\\/g,"/")}var wm="popstate";function Tm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function P_(r={}){function e(s,o){var p;let l=(p=o.state)==null?void 0:p.masked,{pathname:u,search:f,hash:h}=l||s.location;return Df("",{pathname:u,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,o){return typeof o=="string"?o:ro(o)}return D_(e,t,null,r)}function Kt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ui(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function L_(){return Math.random().toString(36).substring(2,10)}function Am(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Df(r,e,t=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?oa(e):e,state:t,key:e&&e.key||s||L_(),mask:o}}function ro({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function oa(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function D_(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,f="POP",h=null,p=v();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function v(){return(u.state||{idx:null}).idx}function _(){f="POP";let x=v(),S=x==null?null:x-p;p=x,h&&h({action:f,location:C.location,delta:S})}function m(x,S){f="PUSH";let R=Tm(x)?x:Df(C.location,x,S);p=v()+1;let b=Am(R,p),P=C.createHref(R.mask||R);try{u.pushState(b,"",P)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(P)}l&&h&&h({action:f,location:C.location,delta:1})}function y(x,S){f="REPLACE";let R=Tm(x)?x:Df(C.location,x,S);p=v();let b=Am(R,p),P=C.createHref(R.mask||R);u.replaceState(b,"",P),l&&h&&h({action:f,location:C.location,delta:0})}function M(x){return N_(o,x)}let C={get action(){return f},get location(){return r(o,u)},listen(x){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(wm,_),h=x,()=>{o.removeEventListener(wm,_),h=null}},createHref(x){return e(o,x)},createURL:M,encodeLocation(x){let S=M(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:y,go(x){return u.go(x)}};return C}function N_(r,e,t=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),Kt(s,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:ro(e);return o=o.replace(/ $/,"%20"),!t&&Ig.test(o)&&(o=s+o),new URL(o,s)}function Ug(r,e,t="/"){return I_(r,e,t,!1)}function I_(r,e,t,s,o){let l=typeof e=="string"?oa(e):e,u=sr(l.pathname||"/",t);if(u==null)return null;let f=U_(r),h=null,p=j_(u);for(let v=0;h==null&&v<f.length;++v)h=X_(f[v],p,s);return h}function U_(r){let e=Fg(r);return F_(e),e}function Fg(r,e=[],t=[],s="",o=!1){let l=(u,f,h=o,p)=>{let v={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&h)return;Kt(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let _=Si([s,v.relativePath]),m=t.concat(v);u.children&&u.children.length>0&&(Kt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Fg(u.children,e,m,_,h)),!(u.path==null&&!u.index)&&e.push({path:_,score:G_(_,u.index),routesMeta:m.map((y,M)=>{let[C,x]=kg(y.relativePath,y.caseSensitive,M===m.length-1);return{...y,matcher:C,compiledParams:x}})})};return r.forEach((u,f)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))l(u,f);else for(let p of Og(u.path))l(u,f,!0,p)}),e}function Og(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=Og(s.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...u),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function F_(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:W_(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var O_=/^:[\w-]+$/,B_=3,k_=2,z_=1,H_=10,V_=-2,Cm=r=>r==="*";function G_(r,e){let t=r.split("/"),s=t.length;return t.some(Cm)&&(s+=V_),e&&(s+=k_),t.filter(o=>!Cm(o)).reduce((o,l)=>o+(O_.test(l)?B_:l===""?z_:H_),s)}function W_(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function X_(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",u=[];for(let f=0;f<s.length;++f){let h=s[f],p=f===s.length-1,v=l==="/"?e:e.slice(l.length)||"/",_={path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m=h.matcher&&h.compiledParams?Bg(_,v,h.matcher,h.compiledParams):Zl(_,v),y=h.route;if(!m&&p&&t&&!s[s.length-1].route.index&&(m=Zl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!m)return null;Object.assign(o,m.params),u.push({params:o,pathname:Si([l,m.pathname]),pathnameBase:q_(Si([l,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(l=Si([l,m.pathnameBase]))}return u}function Zl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=kg(r.path,r.caseSensitive,r.end);return Bg(r,e,t,s)}function Bg(r,e,t,s){let o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((p,{paramName:v,isOptional:_},m)=>{if(v==="*"){let M=f[m]||"";u=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const y=f[m];return _&&!y?p[v]=void 0:p[v]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:r}}function kg(r,e=!1,t=!0){Ui(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h,p,v)=>{if(s.push({paramName:f,isOptional:h!=null}),h){let _=v.charAt(p+u.length);return _&&_!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function j_(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ui(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function sr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function $_(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?oa(r):r,l;return t?(t=Hg(t),t.startsWith("/")?l=Rm(t.substring(1),"/"):l=Rm(t,e)):l=e,{pathname:l,search:K_(s),hash:Z_(o)}}function Rm(r,e){let t=Ql(e).split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Yu(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Y_(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function zg(r){let e=Y_(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Cd(r,e,t,s=!1){let o;typeof r=="string"?o=oa(r):(o={...r},Kt(!o.pathname||!o.pathname.includes("?"),Yu("?","pathname","search",o)),Kt(!o.pathname||!o.pathname.includes("#"),Yu("#","pathname","hash",o)),Kt(!o.search||!o.search.includes("#"),Yu("#","search","hash",o)));let l=r===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=t;else{let _=e.length-1;if(!s&&u.startsWith("..")){let m=u.split("/");for(;m[0]==="..";)m.shift(),_-=1;o.pathname=m.join("/")}f=_>=0?e[_]:"/"}let h=$_(o,f),p=u&&u!=="/"&&u.endsWith("/"),v=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||v)&&(h.pathname+="/"),h}var Hg=r=>r.replace(/[\\/]{2,}/g,"/"),Si=r=>Hg(r.join("/")),Ql=r=>r.replace(/\/+$/,""),q_=r=>Ql(r).replace(/^\/*/,"/"),K_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Z_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Q_=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function J_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function ex(r){let e=r.map(t=>t.route.path).filter(Boolean);return Si(e)||"/"}var Vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gg(r,e){let t=r;if(typeof t!="string"||!Ad.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(Vg)try{let l=new URL(window.location.href),u=Ig.test(t)?new URL(b_(t,l.protocol)):new URL(t),f=sr(u.pathname,e);u.origin===l.origin&&f!=null?t=f+u.search+u.hash:o=!0}catch{Ui(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Wg=["POST","PUT","PATCH","DELETE"];new Set(Wg);var tx=["GET",...Wg];new Set(tx);var nx=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function ix(r){try{return nx.includes(new URL(r).protocol)}catch{return!1}}var la=te.createContext(null);la.displayName="DataRouter";var sc=te.createContext(null);sc.displayName="DataRouterState";var Xg=te.createContext(!1);function rx(){return te.useContext(Xg)}var jg=te.createContext({isTransitioning:!1});jg.displayName="ViewTransition";var sx=te.createContext(new Map);sx.displayName="Fetchers";var ax=te.createContext(null);ax.displayName="Await";var ri=te.createContext(null);ri.displayName="Navigation";var lo=te.createContext(null);lo.displayName="Location";var lr=te.createContext({outlet:null,matches:[],isDataRoute:!1});lr.displayName="Route";var Rd=te.createContext(null);Rd.displayName="RouteError";var $g="REACT_ROUTER_ERROR",ox="REDIRECT",lx="ROUTE_ERROR_RESPONSE";function cx(r){if(r.startsWith(`${$g}:${ox}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function ux(r){if(r.startsWith(`${$g}:${lx}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Q_(e.status,e.statusText,e.data)}catch{}}function fx(r,{relative:e}={}){Kt(co(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=te.useContext(ri),{hash:o,pathname:l,search:u}=uo(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Si([t,l])),s.createHref({pathname:f,search:u,hash:o})}function co(){return te.useContext(lo)!=null}function cr(){return Kt(co(),"useLocation() may be used only in the context of a <Router> component."),te.useContext(lo).location}var Yg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qg(r){te.useContext(ri).static||te.useLayoutEffect(r)}function dx(){let{isDataRoute:r}=te.useContext(lr);return r?Tx():hx()}function hx(){Kt(co(),"useNavigate() may be used only in the context of a <Router> component.");let r=te.useContext(la),{basename:e,navigator:t}=te.useContext(ri),{matches:s}=te.useContext(lr),{pathname:o}=cr(),l=JSON.stringify(zg(s)),u=te.useRef(!1);return qg(()=>{u.current=!0}),te.useCallback((h,p={})=>{if(Ui(u.current,Yg),!u.current)return;if(typeof h=="number"){t.go(h);return}let v=Cd(h,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Si([e,v.pathname])),(p.replace?t.replace:t.push)(v,p.state,p)},[e,t,l,o,r])}te.createContext(null);function uo(r,{relative:e}={}){let{matches:t}=te.useContext(lr),{pathname:s}=cr(),o=JSON.stringify(zg(t));return te.useMemo(()=>Cd(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function px(r,e){return Kg(r,e)}function Kg(r,e,t){var x;Kt(co(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=te.useContext(ri),{matches:o}=te.useContext(lr),l=o[o.length-1],u=l?l.params:{},f=l?l.pathname:"/",h=l?l.pathnameBase:"/",p=l&&l.route;{let S=p&&p.path||"";Qg(f,!p||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let v=cr(),_;if(e){let S=typeof e=="string"?oa(e):e;Kt(h==="/"||((x=S.pathname)==null?void 0:x.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${S.pathname}" was given in the \`location\` prop.`),_=S}else _=v;let m=_.pathname||"/",y=m;if(h!=="/"){let S=h.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let M=t&&t.state.matches.length?t.state.matches.map(S=>Object.assign(S,{route:t.manifest[S.route.id]||S.route})):Ug(r,{pathname:y});Ui(p||M!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Ui(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=xx(M&&M.map(S=>Object.assign({},S,{params:Object.assign({},u,S.params),pathname:Si([h,s.encodeLocation?s.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?h:Si([h,s.encodeLocation?s.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),o,t);return e&&C?te.createElement(lo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,..._},navigationType:"POP"}},C):C}function mx(){let r=wx(),e=J_(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=te.createElement(te.Fragment,null,te.createElement("p",null,"💿 Hey developer 👋"),te.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",te.createElement("code",{style:l},"ErrorBoundary")," or"," ",te.createElement("code",{style:l},"errorElement")," prop on your route.")),te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),t?te.createElement("pre",{style:o},t):null,u)}var gx=te.createElement(mx,null),Zg=class extends te.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=ux(r.digest);t&&(r=t)}let e=r!==void 0?te.createElement(lr.Provider,{value:this.props.routeContext},te.createElement(Rd.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?te.createElement(vx,{error:r},e):e}};Zg.contextType=Xg;var qu=new WeakMap;function vx({children:r,error:e}){let{basename:t}=te.useContext(ri);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=cx(e.digest);if(s){let o=qu.get(e);if(o)throw o;let l=Gg(s.location,t),u=l.absoluteURL||l.to;if(ix(u))throw new Error("Invalid redirect location");if(Vg&&!qu.get(e))if(l.isExternal||s.reloadDocument)window.location.href=u;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw qu.set(e,f),f}return te.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u}`})}}return r}function _x({routeContext:r,match:e,children:t}){let s=te.useContext(la);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),te.createElement(lr.Provider,{value:r},t)}function xx(r,e=[],t){let s=t==null?void 0:t.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,l=s==null?void 0:s.errors;if(l!=null){let v=o.findIndex(_=>_.route.id&&(l==null?void 0:l[_.route.id])!==void 0);Kt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,v+1))}let u=!1,f=-1;if(t&&s){u=s.renderFallback;for(let v=0;v<o.length;v++){let _=o[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(f=v),_.route.id){let{loaderData:m,errors:y}=s,M=_.route.loader&&!m.hasOwnProperty(_.route.id)&&(!y||y[_.route.id]===void 0);if(_.route.lazy||M){t.isStatic&&(u=!0),f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}}let h=t==null?void 0:t.onError,p=s&&h?(v,_)=>{var m,y;h(v,{location:s.location,params:((y=(m=s.matches)==null?void 0:m[0])==null?void 0:y.params)??{},pattern:ex(s.matches),errorInfo:_})}:void 0;return o.reduceRight((v,_,m)=>{let y,M=!1,C=null,x=null;s&&(y=l&&_.route.id?l[_.route.id]:void 0,C=_.route.errorElement||gx,u&&(f<0&&m===0?(Qg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,x=null):f===m&&(M=!0,x=_.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),R=()=>{let b;return y?b=C:M?b=x:_.route.Component?b=te.createElement(_.route.Component,null):_.route.element?b=_.route.element:b=v,te.createElement(_x,{match:_,routeContext:{outlet:v,matches:S,isDataRoute:s!=null},children:b})};return s&&(_.route.ErrorBoundary||_.route.errorElement||m===0)?te.createElement(Zg,{location:s.location,revalidation:s.revalidation,component:C,error:y,children:R(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:p}):R()},null)}function bd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sx(r){let e=te.useContext(la);return Kt(e,bd(r)),e}function yx(r){let e=te.useContext(sc);return Kt(e,bd(r)),e}function Ex(r){let e=te.useContext(lr);return Kt(e,bd(r)),e}function Pd(r){let e=Ex(r),t=e.matches[e.matches.length-1];return Kt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function Mx(){return Pd("useRouteId")}function wx(){var s;let r=te.useContext(Rd),e=yx("useRouteError"),t=Pd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function Tx(){let{router:r}=Sx("useNavigate"),e=Pd("useNavigate"),t=te.useRef(!1);return qg(()=>{t.current=!0}),te.useCallback(async(o,l={})=>{Ui(t.current,Yg),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var bm={};function Qg(r,e,t){!e&&!bm[r]&&(bm[r]=!0,Ui(!1,t))}te.memo(Ax);function Ax({routes:r,manifest:e,future:t,state:s,isStatic:o,onError:l}){return Kg(r,void 0,{manifest:e,state:s,isStatic:o,onError:l})}function Jg(r){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cx({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,useTransitions:u}){Kt(!co(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=te.useMemo(()=>({basename:f,navigator:o,static:l,useTransitions:u,future:{}}),[f,o,l,u]);typeof t=="string"&&(t=oa(t));let{pathname:p="/",search:v="",hash:_="",state:m=null,key:y="default",mask:M}=t,C=te.useMemo(()=>{let x=sr(p,f);return x==null?null:{location:{pathname:x,search:v,hash:_,state:m,key:y,mask:M},navigationType:s}},[f,p,v,_,m,y,s,M]);return Ui(C!=null,`<Router basename="${f}"> is not able to match the URL "${p}${v}${_}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:te.createElement(ri.Provider,{value:h},te.createElement(lo.Provider,{children:e,value:C}))}function Rx({children:r,location:e}){return px(Nf(r),e)}function Nf(r,e=[]){let t=[];return te.Children.forEach(r,(s,o)=>{if(!te.isValidElement(s))return;let l=[...e,o];if(s.type===te.Fragment){t.push.apply(t,Nf(s.props.children,l));return}Kt(s.type===Jg,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=Nf(s.props.children,l)),t.push(u)}),t}var Gl="get",Wl="application/x-www-form-urlencoded";function ac(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function bx(r){return ac(r)&&r.tagName.toLowerCase()==="button"}function Px(r){return ac(r)&&r.tagName.toLowerCase()==="form"}function Lx(r){return ac(r)&&r.tagName.toLowerCase()==="input"}function Dx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Nx(r,e){return r.button===0&&(!e||e==="_self")&&!Dx(r)}var xl=null;function Ix(){if(xl===null)try{new FormData(document.createElement("form"),0),xl=!1}catch{xl=!0}return xl}var Ux=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ku(r){return r!=null&&!Ux.has(r)?(Ui(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wl}"`),null):r}function Fx(r,e){let t,s,o,l,u;if(Px(r)){let f=r.getAttribute("action");s=f?sr(f,e):null,t=r.getAttribute("method")||Gl,o=Ku(r.getAttribute("enctype"))||Wl,l=new FormData(r)}else if(bx(r)||Lx(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||f.getAttribute("action");if(s=h?sr(h,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Gl,o=Ku(r.getAttribute("formenctype"))||Ku(f.getAttribute("enctype"))||Wl,l=new FormData(f,r),!Ix()){let{name:p,type:v,value:_}=r;if(v==="image"){let m=p?`${p}.`:"";l.append(`${m}x`,"0"),l.append(`${m}y`,"0")}else p&&l.append(p,_)}}else{if(ac(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Gl,s=null,o=Wl,u=r}return l&&o==="text/plain"&&(u=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ld(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function e0(r,e,t,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&sr(o.pathname,e)==="/"?o.pathname=`${Ql(e)}/_root.${s}`:o.pathname=`${Ql(o.pathname)}.${s}`,o}async function Ox(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Bx(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function kx(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await Ox(l,t);return u.links?u.links():[]}return[]}));return Gx(s.flat(1).filter(Bx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Pm(r,e,t,s,o,l){let u=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,f=(h,p)=>{var v;return t[p].pathname!==h.pathname||((v=t[p].route.path)==null?void 0:v.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,p)=>u(h,p)||f(h,p)):l==="data"?e.filter((h,p)=>{var _;let v=s.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(u(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let m=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=t[0])==null?void 0:_.params)||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function zx(r,e,{includeHydrateFallback:t}={}){return Hx(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Hx(r){return[...new Set(r)]}function Vx(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Gx(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(Vx(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function Dd(){let r=te.useContext(la);return Ld(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Wx(){let r=te.useContext(sc);return Ld(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Nd=te.createContext(void 0);Nd.displayName="FrameworkContext";function oc(){let r=te.useContext(Nd);return Ld(r,"You must render this element inside a <HydratedRouter> element"),r}function Xx(r,e){let t=te.useContext(Nd),[s,o]=te.useState(!1),[l,u]=te.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:v,onTouchStart:_}=e,m=te.useRef(null);te.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let C=S=>{S.forEach(R=>{u(R.isIntersecting)})},x=new IntersectionObserver(C,{threshold:.5});return m.current&&x.observe(m.current),()=>{x.disconnect()}}},[r]),te.useEffect(()=>{if(s){let C=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(C)}}},[s]);let y=()=>{o(!0)},M=()=>{o(!1),u(!1)};return t?r!=="intent"?[l,m,{}]:[l,m,{onFocus:Ya(f,y),onBlur:Ya(h,M),onMouseEnter:Ya(p,y),onMouseLeave:Ya(v,M),onTouchStart:Ya(_,y)}]:[!1,m,{}]}function Ya(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function jx({page:r,...e}){let t=rx(),{nonce:s}=oc(),{router:o}=Dd(),l=te.useMemo(()=>Ug(o.routes,r,o.basename),[o.routes,r,o.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?te.createElement(Yx,{page:r,matches:l,...e}):te.createElement(qx,{page:r,matches:l,...e})):null}function $x(r){let{manifest:e,routeModules:t}=oc(),[s,o]=te.useState([]);return te.useEffect(()=>{let l=!1;return kx(r,e,t).then(u=>{l||o(u)}),()=>{l=!0}},[r,e,t]),s}function Yx({page:r,matches:e,...t}){let s=cr(),{future:o}=oc(),{basename:l}=Dd(),u=te.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let f=e0(r,l,o.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,p=[];for(let v of e)typeof v.route.shouldRevalidate=="function"?h=!0:p.push(v.route.id);return h&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,o.v8_trailingSlashAwareDataRequests,r,s,e]);return te.createElement(te.Fragment,null,u.map(f=>te.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function qx({page:r,matches:e,...t}){let s=cr(),{future:o,manifest:l,routeModules:u}=oc(),{basename:f}=Dd(),{loaderData:h,matches:p}=Wx(),v=te.useMemo(()=>Pm(r,e,p,l,s,"data"),[r,e,p,l,s]),_=te.useMemo(()=>Pm(r,e,p,l,s,"assets"),[r,e,p,l,s]),m=te.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,x=!1;if(e.forEach(R=>{var P;let b=l.routes[R.route.id];!b||!b.hasLoader||(!v.some(N=>N.route.id===R.route.id)&&R.route.id in h&&((P=u[R.route.id])!=null&&P.shouldRevalidate)||b.hasClientLoader?x=!0:C.add(R.route.id))}),C.size===0)return[];let S=e0(r,f,o.v8_trailingSlashAwareDataRequests,"data");return x&&C.size>0&&S.searchParams.set("_routes",e.filter(R=>C.has(R.route.id)).map(R=>R.route.id).join(",")),[S.pathname+S.search]},[f,o.v8_trailingSlashAwareDataRequests,h,s,l,v,e,r,u]),y=te.useMemo(()=>zx(_,l),[_,l]),M=$x(_);return te.createElement(te.Fragment,null,m.map(C=>te.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...t})),y.map(C=>te.createElement("link",{key:C,rel:"modulepreload",href:C,...t})),M.map(({key:C,link:x})=>te.createElement("link",{key:C,nonce:t.nonce,...x,crossOrigin:x.crossOrigin??t.crossOrigin})))}function Kx(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Zx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Zx&&(window.__reactRouterVersion="7.18.0")}catch{}function Qx({basename:r,children:e,useTransitions:t,window:s}){let o=te.useRef();o.current==null&&(o.current=P_({window:s,v5Compat:!0}));let l=o.current,[u,f]=te.useState({action:l.action,location:l.location}),h=te.useCallback(p=>{t===!1?f(p):te.startTransition(()=>f(p))},[t]);return te.useLayoutEffect(()=>l.listen(h),[l,h]),te.createElement(Cx,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:l,useTransitions:t})}var t0=te.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:u,mask:f,state:h,target:p,to:v,preventScrollReset:_,viewTransition:m,defaultShouldRevalidate:y,...M},C){let{basename:x,navigator:S,useTransitions:R}=te.useContext(ri),b=typeof v=="string"&&Ad.test(v),P=Gg(v,x);v=P.to;let N=fx(v,{relative:o}),D=cr(),F=null;if(f){let H=Cd(f,[],D.mask?D.mask.pathname:"/",!0);x!=="/"&&(H.pathname=H.pathname==="/"?x:Si([x,H.pathname])),F=S.createHref(H)}let[T,I,j]=Xx(s,M),B=nS(v,{replace:u,mask:f,state:h,target:p,preventScrollReset:_,relative:o,viewTransition:m,defaultShouldRevalidate:y,useTransitions:R});function K(H){e&&e(H),H.defaultPrevented||B(H)}let oe=!(P.isExternal||l),fe=te.createElement("a",{...M,...j,href:(oe?F:void 0)||P.absoluteURL||N,onClick:oe?K:e,ref:Kx(C,I),target:p,"data-discover":!b&&t==="render"?"true":void 0});return T&&!b?te.createElement(te.Fragment,null,fe,te.createElement(jx,{page:N})):fe});t0.displayName="Link";var Jx=te.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:f,children:h,...p},v){let _=uo(u,{relative:p.relative}),m=cr(),y=te.useContext(sc),{navigator:M,basename:C}=te.useContext(ri),x=y!=null&&oS(_)&&f===!0,S=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,R=m.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(R=R.toLowerCase(),b=b?b.toLowerCase():null,S=S.toLowerCase()),b&&C&&(b=sr(b,C)||b);const P=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let N=R===S||!o&&R.startsWith(S)&&R.charAt(P)==="/",D=b!=null&&(b===S||!o&&b.startsWith(S)&&b.charAt(S.length)==="/"),F={isActive:N,isPending:D,isTransitioning:x},T=N?e:void 0,I;typeof s=="function"?I=s(F):I=[s,N?"active":null,D?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let j=typeof l=="function"?l(F):l;return te.createElement(t0,{...p,"aria-current":T,className:I,ref:v,style:j,to:u,viewTransition:f},typeof h=="function"?h(F):h)});Jx.displayName="NavLink";var eS=te.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:u=Gl,action:f,onSubmit:h,relative:p,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:m,...y},M)=>{let{useTransitions:C}=te.useContext(ri),x=sS(),S=aS(f,{relative:p}),R=u.toLowerCase()==="get"?"get":"post",b=typeof f=="string"&&Ad.test(f),P=N=>{if(h&&h(N),N.defaultPrevented)return;N.preventDefault();let D=N.nativeEvent.submitter,F=(D==null?void 0:D.getAttribute("formmethod"))||u,T=()=>x(D||N.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:o,state:l,relative:p,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:m});C&&t!==!1?te.startTransition(()=>T()):T()};return te.createElement("form",{ref:M,method:R,action:S,onSubmit:s?h:P,...y,"data-discover":!b&&r==="render"?"true":void 0})});eS.displayName="Form";function tS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function n0(r){let e=te.useContext(la);return Kt(e,tS(r)),e}function nS(r,{target:e,replace:t,mask:s,state:o,preventScrollReset:l,relative:u,viewTransition:f,defaultShouldRevalidate:h,useTransitions:p}={}){let v=dx(),_=cr(),m=uo(r,{relative:u});return te.useCallback(y=>{if(Nx(y,e)){y.preventDefault();let M=t!==void 0?t:ro(_)===ro(m),C=()=>v(r,{replace:M,mask:s,state:o,preventScrollReset:l,relative:u,viewTransition:f,defaultShouldRevalidate:h});p?te.startTransition(()=>C()):C()}},[_,v,m,t,s,o,e,r,l,u,f,h,p])}var iS=0,rS=()=>`__${String(++iS)}__`;function sS(){let{router:r}=n0("useSubmit"),{basename:e}=te.useContext(ri),t=Mx(),s=r.fetch,o=r.navigate;return te.useCallback(async(l,u={})=>{let{action:f,method:h,encType:p,formData:v,body:_}=Fx(l,e);if(u.navigate===!1){let m=u.fetcherKey||rS();await s(m,t,u.action||f,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:_,formMethod:u.method||h,formEncType:u.encType||p,flushSync:u.flushSync})}else await o(u.action||f,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:_,formMethod:u.method||h,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[s,o,e,t])}function aS(r,{relative:e}={}){let{basename:t}=te.useContext(ri),s=te.useContext(lr);Kt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...uo(r||".",{relative:e})},u=cr();if(r==null){l.search=u.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(v=>v==="")){f.delete("index"),h.filter(_=>_).forEach(_=>f.append("index",_));let v=f.toString();l.search=v?`?${v}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Si([t,l.pathname])),ro(l)}function oS(r,{relative:e}={}){let t=te.useContext(jg);Kt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=n0("useViewTransitionState"),o=uo(r,{relative:e});if(!t.isTransitioning)return!1;let l=sr(t.currentLocation.pathname,s)||t.currentLocation.pathname,u=sr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Zl(o.pathname,u)!=null||Zl(o.pathname,l)!=null}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Lm=r=>{const e=cS(r);return e.charAt(0).toUpperCase()+e.slice(1)},i0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),uS=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=te.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:u,...f},h)=>te.createElement("svg",{ref:h,...fS,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:i0("lucide",o),...!l&&!uS(f)&&{"aria-hidden":"true"},...f},[...u.map(([p,v])=>te.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=(r,e)=>{const t=te.forwardRef(({className:s,...o},l)=>te.createElement(dS,{ref:l,iconNode:e,className:i0(`lucide-${lS(Lm(r))}`,`lucide-${r}`,s),...o}));return t.displayName=Lm(r),t};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],pS=si("grid-3x3",hS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],r0=si("image",mS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],vS=si("lock-open",gS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],xS=si("lock",_S);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],yS=si("pause",SS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],MS=si("play",ES);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],TS=si("refresh-cw",wS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],CS=si("rotate-ccw",AS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],bS=si("sparkles",RS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],LS=si("trash-2",PS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],NS=si("upload",DS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],US=si("wand-sparkles",IS),Dm=r=>{let e;const t=new Set,s=(p,v)=>{const _=typeof p=="function"?p(e):p;if(!Object.is(_,e)){const m=e;e=v??(typeof _!="object"||_===null)?_:Object.assign({},e,_),t.forEach(y=>y(e,m))}},o=()=>e,f={setState:s,getState:o,getInitialState:()=>h,subscribe:p=>(t.add(p),()=>t.delete(p))},h=e=r(s,o,f);return f},FS=(r=>r?Dm(r):Dm),OS=r=>r;function BS(r,e=OS){const t=vl.useSyncExternalStore(r.subscribe,vl.useCallback(()=>e(r.getState()),[r,e]),vl.useCallback(()=>e(r.getInitialState()),[r,e]));return vl.useDebugValue(t),t}const Nm=r=>{const e=FS(r),t=s=>BS(e,s);return Object.assign(t,e),t},kS=(r=>r?Nm(r):Nm),Br=kS(r=>({originalImage:null,depthImage:null,isProcessing:!1,parallaxStrength:1,isLocked:!1,viewMode:"spatial",autoDemo:!1,rotation:{x:0,y:0},setOriginalImage:e=>r({originalImage:e}),setDepthImage:e=>r({depthImage:e}),setIsProcessing:e=>r({isProcessing:e}),setParallaxStrength:e=>r({parallaxStrength:e}),toggleLock:()=>r(e=>({isLocked:!e.isLocked})),setViewMode:e=>r({viewMode:e}),toggleAutoDemo:()=>r(e=>({autoDemo:!e.autoDemo})),setRotation:e=>r({rotation:e}),reset:()=>r({originalImage:null,depthImage:null,isProcessing:!1,parallaxStrength:1,isLocked:!1,viewMode:"spatial",autoDemo:!1,rotation:{x:0,y:0}}),resetView:()=>r({rotation:{x:0,y:0}})}));function zS(){const[r,e]=te.useState(!1),t=te.useRef(null),{originalImage:s,setOriginalImage:o,isProcessing:l,reset:u}=Br(),f=te.useCallback(async m=>{if(!m.type.startsWith("image/")){alert("请上传图片文件（JPG / PNG / WebP）");return}const y=new FileReader;y.onload=M=>{var S;const C=(S=M.target)==null?void 0:S.result;o(C);const x=new Image;x.onload=()=>{window.dispatchEvent(new CustomEvent("spatial:image-loaded",{detail:{image:x}}))},x.src=C},y.readAsDataURL(m)},[o]),h=te.useCallback(m=>{var M;m.preventDefault(),e(!1);const y=(M=m.dataTransfer.files)==null?void 0:M[0];y&&f(y)},[f]),p=te.useCallback(m=>{m.preventDefault(),r||e(!0)},[r]),v=te.useCallback(m=>{m.preventDefault(),e(!1)},[]),_=te.useCallback(m=>{var M;const y=(M=m.target.files)==null?void 0:M[0];y&&f(y),t.current&&(t.current.value="")},[f]);return s?Le.jsxs("div",{"trae-inspector-start-line":"59","trae-inspector-start-column":"6","trae-inspector-end-line":"105","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full h-full flex flex-col items-center justify-center gap-4 relative",children:[Le.jsxs("div",{"trae-inspector-start-line":"60","trae-inspector-start-column":"8","trae-inspector-end-line":"73","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative max-w-full max-h-full",children:[Le.jsx("img",{"trae-inspector-start-line":"61","trae-inspector-start-column":"10","trae-inspector-end-line":"65","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:s,alt:"已上传图片",className:"max-w-full max-h-[50vh] object-contain rounded-xl shadow-xl"}),l&&Le.jsxs("div",{"trae-inspector-start-line":"67","trae-inspector-start-column":"12","trae-inspector-end-line":"71","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 bg-black/70 rounded-xl flex flex-col items-center justify-center",children:[Le.jsx("div",{"trae-inspector-start-line":"68","trae-inspector-start-column":"14","trae-inspector-end-line":"68","trae-inspector-end-column":"120","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3"}),Le.jsx("p",{"trae-inspector-start-line":"69","trae-inspector-start-column":"14","trae-inspector-end-line":"69","trae-inspector-end-column":"75","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%AD%A3%E5%9C%A8%E5%88%86%E6%9E%90%E7%A9%BA%E9%97%B4%E6%B7%B1%E5%BA%A6...%22%2C%22textStartLine%22%3A%2269%22%2C%22textStartColumn%22%3A%2260%22%2C%22textEndLine%22%3A%2269%22%2C%22textEndColumn%22%3A%2271%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white text-sm font-medium",children:"正在分析空间深度..."}),Le.jsx("p",{"trae-inspector-start-line":"70","trae-inspector-start-column":"14","trae-inspector-end-line":"70","trae-inspector-end-column":"67","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%87%A0%E7%A7%92%E9%92%9F%E5%8D%B3%E5%8F%AF%E5%AE%8C%E6%88%90%22%2C%22textStartLine%22%3A%2270%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%2270%22%2C%22textEndColumn%22%3A%2263%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/50 text-xs mt-1",children:"几秒钟即可完成"})]})]}),Le.jsxs("div",{"trae-inspector-start-line":"76","trae-inspector-start-column":"8","trae-inspector-end-line":"96","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2 flex-wrap justify-center mt-2",children:[Le.jsxs("button",{"trae-inspector-start-line":"77","trae-inspector-start-column":"10","trae-inspector-end-line":"85","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>{var m;return(m=t.current)==null?void 0:m.click()},className:`px-4 py-3 rounded-xl text-sm font-medium
                       bg-white/10 text-white hover:bg-white/20 transition-all
                       flex items-center gap-2 active:scale-95`,children:[Le.jsx(TS,{className:"w-4 h-4"}),"换一张图"]}),Le.jsxs("button",{"trae-inspector-start-line":"87","trae-inspector-start-column":"10","trae-inspector-end-line":"95","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:u,className:`px-4 py-3 rounded-xl text-sm font-medium
                       bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all
                       flex items-center gap-2 active:scale-95`,children:[Le.jsx(LS,{className:"w-4 h-4"}),"清空"]})]}),Le.jsx("input",{"trae-inspector-start-line":"98","trae-inspector-start-column":"8","trae-inspector-end-line":"104","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",ref:t,type:"file",accept:"image/*",className:"hidden",onChange:_})]}):Le.jsx("div",{"trae-inspector-start-line":"111","trae-inspector-start-column":"4","trae-inspector-end-line":"159","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full h-full",children:Le.jsxs("label",{"trae-inspector-start-line":"112","trae-inspector-start-column":"6","trae-inspector-end-line":"158","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",htmlFor:"file-input",className:`
          w-full h-full min-h-[280px]
          flex flex-col items-center justify-center
          border-2 border-dashed rounded-2xl transition-all cursor-pointer select-none
          px-4
          ${r?"border-cyan-400 bg-cyan-400/10 scale-[1.02]":"border-white/20 hover:border-cyan-400/60 bg-white/5 hover:bg-cyan-400/5"}
        `,onDrop:h,onDragOver:p,onDragLeave:v,children:[Le.jsx("input",{"trae-inspector-start-line":"128","trae-inspector-start-column":"8","trae-inspector-end-line":"135","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",id:"file-input",ref:t,type:"file",accept:"image/*",className:"sr-only",onChange:_}),Le.jsx("div",{"trae-inspector-start-line":"137","trae-inspector-start-column":"8","trae-inspector-end-line":"147","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`
          w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4
          bg-gradient-to-br from-cyan-500/20 to-purple-500/20
          border border-white/10
        `,children:r?Le.jsx(r0,{className:"w-8 h-8 md:w-9 md:h-9 text-cyan-400"}):Le.jsx(NS,{className:"w-8 h-8 md:w-9 md:h-9 text-white/70"})}),Le.jsx("h2",{"trae-inspector-start-line":"149","trae-inspector-start-column":"8","trae-inspector-end-line":"151","trae-inspector-end-column":"13","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg md:text-xl font-semibold text-white mb-2",children:r?"松开以上传":"上传照片"}),Le.jsx("p",{"trae-inspector-start-line":"152","trae-inspector-start-column":"8","trae-inspector-end-line":"154","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%8B%96%E6%8B%BD%E5%9B%BE%E7%89%87%E5%88%B0%E8%BF%99%E9%87%8C%EF%BC%8C%E6%88%96%E7%82%B9%E5%87%BB%E9%80%89%E6%8B%A9%E6%96%87%E4%BB%B6%22%2C%22textStartLine%22%3A%22152%22%2C%22textStartColumn%22%3A%2277%22%2C%22textEndLine%22%3A%22154%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/50 text-xs md:text-sm text-center max-w-xs",children:"拖拽图片到这里，或点击选择文件"}),Le.jsx("p",{"trae-inspector-start-line":"155","trae-inspector-start-column":"8","trae-inspector-end-line":"157","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/UploadZone.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%94%AF%E6%8C%81%20JPG%20%C2%B7%20PNG%20%C2%B7%20WebP%22%2C%22textStartLine%22%3A%22155%22%2C%22textStartColumn%22%3A%2265%22%2C%22textEndLine%22%3A%22157%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/30 text-[10px] md:text-xs mt-3",children:"支持 JPG · PNG · WebP"})]})})}function Im(r){const e=document.createElement("canvas"),t=Math.min(r.width,1024),s=Math.min(r.height,1024);e.width=t,e.height=s;const o=e.getContext("2d");o.drawImage(r,0,0,t,s);const u=o.getImageData(0,0,t,s).data,f=new Float32Array(t*s);for(let b=0;b<t*s;b++)f[b]=.299*u[b*4]+.587*u[b*4+1]+.114*u[b*4+2];const h=new Float32Array(t*s);for(let b=1;b<s-1;b++)for(let P=1;P<t-1;P++){const N=b*t+P,D=-f[N-t-1]-2*f[N-1]-f[N+t-1]+f[N-t+1]+2*f[N+1]+f[N+t+1],F=-f[N-t-1]-2*f[N-t]-f[N-t+1]+f[N+t-1]+2*f[N+t]+f[N+t+1];h[N]=Math.sqrt(D*D+F*F)}const p=new Float32Array(t*s),v=new Float32Array(t*s),_=5;for(let b=0;b<s;b++){let P=0;for(let N=-_;N<=_;N++)P+=h[b*t+Math.min(Math.max(N,0),t-1)];for(let N=0;N<t;N++){v[b*t+N]=P/(_*2+1);const D=N-_,F=N+_+1;D>=0&&(P-=h[b*t+D]),F<t&&(P+=h[b*t+F])}}for(let b=0;b<t;b++){let P=0;for(let N=-_;N<=_;N++)P+=v[Math.min(Math.max(N,0),s-1)*t+b];for(let N=0;N<s;N++){p[N*t+b]=P/(_*2+1);const D=N-_,F=N+_+1;D>=0&&(P-=v[D*t+b]),F<s&&(P+=v[F*t+b])}}let m=1/0,y=-1/0;for(let b=0;b<t*s;b++)p[b]<m&&(m=p[b]),p[b]>y&&(y=p[b]);const M=y-m||1,C=o.createImageData(t,s),x=t/2,S=s/2,R=Math.sqrt(x*x+S*S);for(let b=0;b<t*s;b++){const P=b%t,N=Math.floor(b/t),D=u[b*4]/255,F=u[b*4+1]/255,T=u[b*4+2]/255,I=Math.max(D,F,T),j=Math.min(D,F,T),B=(I+j)/2,K=I-j,oe=(p[b]-m)/M,H=1-Math.sqrt((P-x)**2+(N-S)**2)/R*.6;let $=oe*.5+K*.25+H*.15+B*.1;$=Math.pow($,1.25),$=Math.max(0,Math.min(1,$));const W=Math.round($*255);C.data[b*4]=W,C.data[b*4+1]=W,C.data[b*4+2]=W,C.data[b*4+3]=255}return C}function HS(){const{originalImage:r,depthImage:e,setDepthImage:t,setIsProcessing:s}=Br(),[o,l]=te.useState(!0),u=r&&e;return te.useEffect(()=>{if(!r||e)return;s(!0);const f=setTimeout(()=>{const h=new Image;h.onload=()=>{try{const p=Im(h);t(p)}finally{s(!1)}},h.onerror=()=>s(!1),h.src=r},150);return()=>clearTimeout(f)},[r,e,t,s]),te.useEffect(()=>{const f=setTimeout(()=>l(!1),5e3);return()=>clearTimeout(f)},[]),te.useEffect(()=>{const f=h=>{var v;const p=h;if((v=p.detail)!=null&&v.image)try{s(!0);const _=Im(p.detail.image);t(_)}finally{s(!1)}};return window.addEventListener("spatial:image-loaded",f),()=>window.removeEventListener("spatial:image-loaded",f)},[t,s]),Le.jsxs("div",{"trae-inspector-start-line":"166","trae-inspector-start-column":"4","trae-inspector-end-line":"231","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full h-[100dvh] flex flex-col overflow-hidden pointer-events-none",children:[Le.jsx("header",{"trae-inspector-start-line":"168","trae-inspector-start-column":"6","trae-inspector-end-line":"187","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`relative z-20 px-4 py-3 md:px-6 md:py-5 flex-shrink-0 pointer-events-auto
                    ${u?"opacity-70 hover:opacity-100 transition-opacity":""}`,children:Le.jsxs("div",{"trae-inspector-start-line":"172","trae-inspector-start-column":"8","trae-inspector-end-line":"186","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[Le.jsx("div",{"trae-inspector-start-line":"173","trae-inspector-start-column":"10","trae-inspector-end-line":"177","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`w-9 h-9 md:w-10 md:h-10 rounded-xl
                          bg-gradient-to-br from-cyan-400 to-purple-500
                          flex items-center justify-center shadow-lg shadow-purple-500/20`,children:Le.jsx("span",{"trae-inspector-start-line":"176","trae-inspector-start-column":"12","trae-inspector-end-line":"176","trae-inspector-end-column":"80","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22S%22%2C%22textStartLine%22%3A%22176%22%2C%22textStartColumn%22%3A%2272%22%2C%22textEndLine%22%3A%22176%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-black font-bold text-sm md:text-base",children:"S"})}),Le.jsxs("div",{"trae-inspector-start-line":"178","trae-inspector-start-column":"10","trae-inspector-end-line":"185","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[Le.jsx("h1",{"trae-inspector-start-line":"179","trae-inspector-start-column":"12","trae-inspector-end-line":"181","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Spatial%20Reconstruct%22%2C%22textStartLine%22%3A%22179%22%2C%22textStartColumn%22%3A%2288%22%2C%22textEndLine%22%3A%22181%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white font-semibold text-base md:text-lg leading-tight",children:"Spatial Reconstruct"}),Le.jsx("p",{"trae-inspector-start-line":"182","trae-inspector-start-column":"12","trae-inspector-end-line":"184","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/40 text-[10px] md:text-xs",children:u?"3D 视差模式":"空间重构 · 把 2D 照片变成立体世界"})]})]})}),!u&&Le.jsxs("main",{"trae-inspector-start-line":"191","trae-inspector-start-column":"8","trae-inspector-end-line":"219","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`flex-1 relative z-10 px-3 md:px-6 pb-32 md:pb-48
                         flex flex-col items-center min-h-0 overflow-auto pointer-events-auto`,children:[Le.jsxs("div",{"trae-inspector-start-line":"194","trae-inspector-start-column":"10","trae-inspector-end-line":"204","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center mb-4 md:mb-8 max-w-2xl",children:[Le.jsx("h2",{"trae-inspector-start-line":"195","trae-inspector-start-column":"12","trae-inspector-end-line":"200","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl md:text-3xl font-bold text-white mb-2 md:mb-3",children:Le.jsx("span",{"trae-inspector-start-line":"196","trae-inspector-start-column":"14","trae-inspector-end-line":"199","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%8A%8A%E7%85%A7%E7%89%87%E5%8F%98%E6%88%90%E7%AB%8B%E4%BD%93%E7%A9%BA%E9%97%B4%22%2C%22textStartLine%22%3A%22197%22%2C%22textStartColumn%22%3A%2262%22%2C%22textEndLine%22%3A%22199%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:`bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400
                               bg-clip-text text-transparent`,children:"把照片变成立体空间"})}),Le.jsx("p",{"trae-inspector-start-line":"201","trae-inspector-start-column":"12","trae-inspector-end-line":"203","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%8A%E4%BC%A0%E4%BB%BB%E6%84%8F%E7%85%A7%E7%89%87%20%E2%86%92%20%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90%E7%A9%BA%E9%97%B4%E6%B7%B1%E5%BA%A6%20%E2%86%92%20%E6%8B%96%E5%8A%A8%E6%9F%A5%E7%9C%8B%E8%A7%86%E5%B7%AE%E6%95%88%E6%9E%9C%22%2C%22textStartLine%22%3A%22201%22%2C%22textStartColumn%22%3A%2260%22%2C%22textEndLine%22%3A%22203%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/50 text-xs md:text-sm",children:"上传任意照片 → 算法分析空间深度 → 拖动查看视差效果"})]}),Le.jsx("div",{"trae-inspector-start-line":"207","trae-inspector-start-column":"10","trae-inspector-end-line":"211","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full max-w-3xl flex-1 min-h-0 flex items-center justify-center",children:Le.jsx("div",{"trae-inspector-start-line":"208","trae-inspector-start-column":"12","trae-inspector-end-line":"210","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full max-h-full",children:Le.jsx(zS,{})})}),o&&!r&&Le.jsx("div",{"trae-inspector-start-line":"215","trae-inspector-start-column":"12","trae-inspector-end-line":"217","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%92%A1%20%E4%B8%8A%E4%BC%A0%E5%90%8E%E5%8F%AF%E6%8B%96%E5%8A%A8%E7%85%A7%E7%89%87%20%C2%B7%20%E8%B0%83%E8%8A%82%E6%B7%B1%E5%BA%A6%E5%BC%BA%E5%BA%A6%20%C2%B7%20%E5%88%87%E6%8D%A2%E6%98%BE%E7%A4%BA%E6%A8%A1%E5%BC%8F%22%2C%22textStartLine%22%3A%22215%22%2C%22textStartColumn%22%3A%2282%22%2C%22textEndLine%22%3A%22217%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"md:hidden mt-4 text-center text-white/30 text-[11px]",children:"💡 上传后可拖动照片 · 调节深度强度 · 切换显示模式"})]}),u&&Le.jsx("div",{"trae-inspector-start-line":"224","trae-inspector-start-column":"8","trae-inspector-end-line":"229","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`absolute top-16 left-0 right-0 text-center pointer-events-none
                        hidden md:block`,children:Le.jsx("p",{"trae-inspector-start-line":"226","trae-inspector-start-column":"10","trae-inspector-end-line":"228","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%8B%96%E5%8A%A8%E5%B1%8F%E5%B9%95%20%2F%20%E9%BC%A0%E6%A0%87%20%E2%86%92%20%E4%BD%93%E9%AA%8C%E8%A7%86%E5%B7%AE%E6%95%88%E6%9E%9C%22%2C%22textStartLine%22%3A%22226%22%2C%22textStartColumn%22%3A%2247%22%2C%22textEndLine%22%3A%22228%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/30 text-xs",children:"拖动屏幕 / 鼠标 → 体验视差效果"})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Id="184",VS=0,Um=1,GS=2,Xl=1,WS=2,no=3,kr=0,kn=1,er=2,nr=0,ea=1,Fm=2,Om=3,Bm=4,XS=5,as=100,jS=101,$S=102,YS=103,qS=104,KS=200,ZS=201,QS=202,JS=203,If=204,Uf=205,ey=206,ty=207,ny=208,iy=209,ry=210,sy=211,ay=212,oy=213,ly=214,Ff=0,Of=1,Bf=2,na=3,kf=4,zf=5,Hf=6,Vf=7,s0=0,cy=1,uy=2,Di=0,a0=1,o0=2,l0=3,c0=4,u0=5,f0=6,d0=7,h0=300,us=301,ia=302,Zu=303,Qu=304,lc=306,Gf=1e3,tr=1001,Wf=1002,_n=1003,fy=1004,Sl=1005,rn=1006,Ju=1007,ls=1008,ni=1009,p0=1010,m0=1011,so=1012,Ud=1013,Fi=1014,Pi=1015,ar=1016,Fd=1017,Od=1018,ao=1020,g0=35902,v0=35899,_0=1021,x0=1022,xi=1023,or=1026,cs=1027,S0=1028,Bd=1029,fs=1030,kd=1031,zd=1033,jl=33776,$l=33777,Yl=33778,ql=33779,Xf=35840,jf=35841,$f=35842,Yf=35843,qf=36196,Kf=37492,Zf=37496,Qf=37488,Jf=37489,Jl=37490,ed=37491,td=37808,nd=37809,id=37810,rd=37811,sd=37812,ad=37813,od=37814,ld=37815,cd=37816,ud=37817,fd=37818,dd=37819,hd=37820,pd=37821,md=36492,gd=36494,vd=36495,_d=36283,xd=36284,ec=36285,Sd=36286,dy=3200,km=0,hy=1,Fr="",ti="srgb",tc="srgb-linear",nc="linear",Pt="srgb",ks=7680,zm=519,py=512,my=513,gy=514,Hd=515,vy=516,_y=517,Vd=518,xy=519,Hm=35044,Vm="300 es",Li=2e3,ic=2001;function Sy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function oo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yy(){const r=oo("canvas");return r.style.display="block",r}const Gm={};function Wm(...r){const e="THREE."+r.shift();console.log(e,...r)}function y0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function rt(...r){r=y0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Et(...r){r=y0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function yd(...r){const e=r.join(" ");e in Gm||(Gm[e]=!0,rt(...r))}function Ey(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const My={[Ff]:Of,[Bf]:Hf,[kf]:Vf,[na]:zf,[Of]:Ff,[Hf]:Bf,[Vf]:kf,[zf]:na};class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=Math.PI/180,Ed=180/Math.PI;function fo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function wy(r,e){return(r%e+e)%e}function tf(r,e,t){return(1-t)*r+t*e}function qa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const $d=class $d{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$d.prototype.isVector2=!0;let Nt=$d;class ca{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let h=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3],m=l[u+0],y=l[u+1],M=l[u+2],C=l[u+3];if(_!==C||h!==m||p!==y||v!==M){let x=h*m+p*y+v*M+_*C;x<0&&(m=-m,y=-y,M=-M,C=-C,x=-x);let S=1-f;if(x<.9995){const R=Math.acos(x),b=Math.sin(R);S=Math.sin(S*R)/b,f=Math.sin(f*R)/b,h=h*S+m*f,p=p*S+y*f,v=v*S+M*f,_=_*S+C*f}else{h=h*S+m*f,p=p*S+y*f,v=v*S+M*f,_=_*S+C*f;const R=1/Math.sqrt(h*h+p*p+v*v+_*_);h*=R,p*=R,v*=R,_*=R}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],h=s[o+1],p=s[o+2],v=s[o+3],_=l[u],m=l[u+1],y=l[u+2],M=l[u+3];return e[t]=f*M+v*_+h*y-p*m,e[t+1]=h*M+v*m+p*_-f*y,e[t+2]=p*M+v*y+f*m-h*_,e[t+3]=v*M-f*_-h*m-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),v=f(o/2),_=f(l/2),m=h(s/2),y=h(o/2),M=h(l/2);switch(u){case"XYZ":this._x=m*v*_+p*y*M,this._y=p*y*_-m*v*M,this._z=p*v*M+m*y*_,this._w=p*v*_-m*y*M;break;case"YXZ":this._x=m*v*_+p*y*M,this._y=p*y*_-m*v*M,this._z=p*v*M-m*y*_,this._w=p*v*_+m*y*M;break;case"ZXY":this._x=m*v*_-p*y*M,this._y=p*y*_+m*v*M,this._z=p*v*M+m*y*_,this._w=p*v*_-m*y*M;break;case"ZYX":this._x=m*v*_-p*y*M,this._y=p*y*_+m*v*M,this._z=p*v*M-m*y*_,this._w=p*v*_+m*y*M;break;case"YZX":this._x=m*v*_+p*y*M,this._y=p*y*_+m*v*M,this._z=p*v*M-m*y*_,this._w=p*v*_-m*y*M;break;case"XZY":this._x=m*v*_-p*y*M,this._y=p*y*_-m*v*M,this._z=p*v*M+m*y*_,this._w=p*v*_+m*y*M;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],_=t[10],m=s+f+_;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(v-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(s>f&&s>_){const y=2*Math.sqrt(1+s-f-_);this._w=(v-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>_){const y=2*Math.sqrt(1+f-s-_);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+v)/y}else{const y=2*Math.sqrt(1+_-s-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=s*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-s*p,this._z=l*v+u*p+s*h-o*f,this._w=u*v-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yd=class Yd{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*s),v=2*(f*t-l*o),_=2*(l*s-u*t);return this.x=t+h*p+u*_-f*v,this.y=s+h*v+f*p-l*_,this.z=o+h*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-s*h,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yd.prototype.isVector3=!0;let ie=Yd;const nf=new ie,Xm=new ca,qd=class qd{constructor(e,t,s,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p)}set(e,t,s,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],v=s[4],_=s[7],m=s[2],y=s[5],M=s[8],C=o[0],x=o[3],S=o[6],R=o[1],b=o[4],P=o[7],N=o[2],D=o[5],F=o[8];return l[0]=u*C+f*R+h*N,l[3]=u*x+f*b+h*D,l[6]=u*S+f*P+h*F,l[1]=p*C+v*R+_*N,l[4]=p*x+v*b+_*D,l[7]=p*S+v*P+_*F,l[2]=m*C+y*R+M*N,l[5]=m*x+y*b+M*D,l[8]=m*S+y*P+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-s*l*v+s*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=v*u-f*p,m=f*h-v*l,y=p*l-u*h,M=t*_+s*m+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=_*C,e[1]=(o*p-v*s)*C,e[2]=(f*s-o*u)*C,e[3]=m*C,e[4]=(v*t-o*h)*C,e[5]=(o*l-f*t)*C,e[6]=y*C,e[7]=(s*h-p*t)*C,e[8]=(u*t-s*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(rf.makeScale(e,t)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qd.prototype.isMatrix3=!0;let ct=qd;const rf=new ct,jm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$m=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ty(){const r={enabled:!0,workingColorSpace:tc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Pt&&(o.r=ir(o.r),o.g=ir(o.g),o.b=ir(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Pt&&(o.r=ta(o.r),o.g=ta(o.g),o.b=ta(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fr?nc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return yd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return yd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[tc]:{primaries:e,whitePoint:s,transfer:nc,toXYZ:jm,fromXYZ:$m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:Pt,toXYZ:jm,fromXYZ:$m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const _t=Ty();function ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zs;class Ay{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{zs===void 0&&(zs=oo("canvas")),zs.width=e.width,zs.height=e.height;const o=zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=zs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ir(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ir(t[s]/255)*255):t[s]=ir(t[s]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cy=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(sf(o[u].image)):l.push(sf(o[u]))}else l=sf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function sf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ay.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Ry=0;const af=new ie;class xn extends hs{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,s=tr,o=tr,l=rn,u=ls,f=xi,h=ni,p=xn.DEFAULT_ANISOTROPY,v=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=fo(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(af).x}get height(){return this.source.getSize(af).y}get depth(){return this.source.getSize(af).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gf:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gf:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=h0;xn.DEFAULT_ANISOTROPY=1;const Kd=class Kd{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],v=h[4],_=h[8],m=h[1],y=h[5],M=h[9],C=h[2],x=h[6],S=h[10];if(Math.abs(v-m)<.01&&Math.abs(_-C)<.01&&Math.abs(M-x)<.01){if(Math.abs(v+m)<.1&&Math.abs(_+C)<.1&&Math.abs(M+x)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,P=(y+1)/2,N=(S+1)/2,D=(v+m)/4,F=(_+C)/4,T=(M+x)/4;return b>P&&b>N?b<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(b),o=D/s,l=F/s):P>N?P<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),s=D/o,l=T/o):N<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),s=F/l,o=T/l),this.set(s,o,l,t),this}let R=Math.sqrt((x-M)*(x-M)+(_-C)*(_-C)+(m-v)*(m-v));return Math.abs(R)<.001&&(R=1),this.x=(x-M)/R,this.y=(_-C)/R,this.z=(m-v)/R,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kd.prototype.isVector4=!0;let Jt=Kd;class by extends hs{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new xn(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Gd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends by{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class E0 extends xn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Py extends xn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rc=class rc{constructor(e,t,s,o,l,u,f,h,p,v,_,m,y,M,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p,v,_,m,y,M,C,x)}set(e,t,s,o,l,u,f,h,p,v,_,m,y,M,C,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=u,S[9]=f,S[13]=h,S[2]=p,S[6]=v,S[10]=_,S[14]=m,S[3]=y,S[7]=M,S[11]=C,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const m=u*v,y=u*_,M=f*v,C=f*_;t[0]=h*v,t[4]=-h*_,t[8]=p,t[1]=y+M*p,t[5]=m-C*p,t[9]=-f*h,t[2]=C-m*p,t[6]=M+y*p,t[10]=u*h}else if(e.order==="YXZ"){const m=h*v,y=h*_,M=p*v,C=p*_;t[0]=m+C*f,t[4]=M*f-y,t[8]=u*p,t[1]=u*_,t[5]=u*v,t[9]=-f,t[2]=y*f-M,t[6]=C+m*f,t[10]=u*h}else if(e.order==="ZXY"){const m=h*v,y=h*_,M=p*v,C=p*_;t[0]=m-C*f,t[4]=-u*_,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*v,t[9]=C-m*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const m=u*v,y=u*_,M=f*v,C=f*_;t[0]=h*v,t[4]=M*p-y,t[8]=m*p+C,t[1]=h*_,t[5]=C*p+m,t[9]=y*p-M,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const m=u*h,y=u*p,M=f*h,C=f*p;t[0]=h*v,t[4]=C-m*_,t[8]=M*_+y,t[1]=_,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=y*_+M,t[10]=m-C*_}else if(e.order==="XZY"){const m=u*h,y=u*p,M=f*h,C=f*p;t[0]=h*v,t[4]=-_,t[8]=p*v,t[1]=m*_+C,t[5]=u*v,t[9]=y*_-M,t[2]=M*_-y,t[6]=f*v,t[10]=C*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ly,e,Dy)}lookAt(e,t,s){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Pr.crossVectors(s,Wn),Pr.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Pr.crossVectors(s,Wn)),Pr.normalize(),yl.crossVectors(Wn,Pr),o[0]=Pr.x,o[4]=yl.x,o[8]=Wn.x,o[1]=Pr.y,o[5]=yl.y,o[9]=Wn.y,o[2]=Pr.z,o[6]=yl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],v=s[1],_=s[5],m=s[9],y=s[13],M=s[2],C=s[6],x=s[10],S=s[14],R=s[3],b=s[7],P=s[11],N=s[15],D=o[0],F=o[4],T=o[8],I=o[12],j=o[1],B=o[5],K=o[9],oe=o[13],fe=o[2],H=o[6],$=o[10],W=o[14],Y=o[3],ce=o[7],le=o[11],O=o[15];return l[0]=u*D+f*j+h*fe+p*Y,l[4]=u*F+f*B+h*H+p*ce,l[8]=u*T+f*K+h*$+p*le,l[12]=u*I+f*oe+h*W+p*O,l[1]=v*D+_*j+m*fe+y*Y,l[5]=v*F+_*B+m*H+y*ce,l[9]=v*T+_*K+m*$+y*le,l[13]=v*I+_*oe+m*W+y*O,l[2]=M*D+C*j+x*fe+S*Y,l[6]=M*F+C*B+x*H+S*ce,l[10]=M*T+C*K+x*$+S*le,l[14]=M*I+C*oe+x*W+S*O,l[3]=R*D+b*j+P*fe+N*Y,l[7]=R*F+b*B+P*H+N*ce,l[11]=R*T+b*K+P*$+N*le,l[15]=R*I+b*oe+P*W+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],_=e[6],m=e[10],y=e[14],M=e[3],C=e[7],x=e[11],S=e[15],R=h*y-p*m,b=f*y-p*_,P=f*m-h*_,N=u*y-p*v,D=u*m-h*v,F=u*_-f*v;return t*(C*R-x*b+S*P)-s*(M*R-x*N+S*D)+o*(M*b-C*N+S*F)-l*(M*P-C*D+x*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=e[9],m=e[10],y=e[11],M=e[12],C=e[13],x=e[14],S=e[15],R=t*f-s*u,b=t*h-o*u,P=t*p-l*u,N=s*h-o*f,D=s*p-l*f,F=o*p-l*h,T=v*C-_*M,I=v*x-m*M,j=v*S-y*M,B=_*x-m*C,K=_*S-y*C,oe=m*S-y*x,fe=R*oe-b*K+P*B+N*j-D*I+F*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/fe;return e[0]=(f*oe-h*K+p*B)*H,e[1]=(o*K-s*oe-l*B)*H,e[2]=(C*F-x*D+S*N)*H,e[3]=(m*D-_*F-y*N)*H,e[4]=(h*j-u*oe-p*I)*H,e[5]=(t*oe-o*j+l*I)*H,e[6]=(x*P-M*F-S*b)*H,e[7]=(v*F-m*P+y*b)*H,e[8]=(u*K-f*j+p*T)*H,e[9]=(s*j-t*K-l*T)*H,e[10]=(M*D-C*P+S*R)*H,e[11]=(_*P-v*D-y*R)*H,e[12]=(f*I-u*B-h*T)*H,e[13]=(t*B-s*I+o*T)*H,e[14]=(C*b-M*N-x*R)*H,e[15]=(v*N-_*b+m*R)*H,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+s,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+s,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,_=f+f,m=l*p,y=l*v,M=l*_,C=u*v,x=u*_,S=f*_,R=h*p,b=h*v,P=h*_,N=s.x,D=s.y,F=s.z;return o[0]=(1-(C+S))*N,o[1]=(y+P)*N,o[2]=(M-b)*N,o[3]=0,o[4]=(y-P)*D,o[5]=(1-(m+S))*D,o[6]=(x+R)*D,o[7]=0,o[8]=(M+b)*F,o[9]=(x-R)*F,o[10]=(1-(m+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let u=Hs.set(o[0],o[1],o[2]).length();const f=Hs.set(o[4],o[5],o[6]).length(),h=Hs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),pi.copy(this);const p=1/u,v=1/f,_=1/h;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=v,pi.elements[5]*=v,pi.elements[6]*=v,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,t.setFromRotationMatrix(pi),s.x=u,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,u,f=Li,h=!1){const p=this.elements,v=2*l/(t-e),_=2*l/(s-o),m=(t+e)/(t-e),y=(s+o)/(s-o);let M,C;if(h)M=l/(u-l),C=u*l/(u-l);else if(f===Li)M=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===ic)M=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Li,h=!1){const p=this.elements,v=2/(t-e),_=2/(s-o),m=-(t+e)/(t-e),y=-(s+o)/(s-o);let M,C;if(h)M=1/(u-l),C=u/(u-l);else if(f===Li)M=-2/(u-l),C=-(u+l)/(u-l);else if(f===ic)M=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=m,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};rc.prototype.isMatrix4=!0;let on=rc;const Hs=new ie,pi=new on,Ly=new ie(0,0,0),Dy=new ie(1,1,1),Pr=new ie,yl=new ie,Wn=new ie,Ym=new on,qm=new ca;class ds{constructor(e=0,t=0,s=0,o=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],_=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(m,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ym,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class M0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ny=0;const Km=new ie,Vs=new ca,qi=new on,El=new ie,Ka=new ie,Iy=new ie,Uy=new ca,Zm=new ie(1,0,0),Qm=new ie(0,1,0),Jm=new ie(0,0,1),eg={type:"added"},Fy={type:"removed"},Gs={type:"childadded",child:null},of={type:"childremoved",child:null};class jn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new ie,t=new ds,s=new ca,o=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new on},normalMatrix:{value:new ct}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(Jm,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(Jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?El.copy(e):El.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ka,El,this.up):qi.lookAt(El,Ka,this.up),this.quaternion.setFromRotationMatrix(qi),o&&(qi.extractRotation(o.matrixWorld),Vs.setFromRotationMatrix(qi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fy),of.child=e,this.dispatchEvent(of),of.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,Iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),m=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),m.length>0&&(s.skeletons=m),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=o,s;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}jn.DEFAULT_UP=new ie(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ml extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oy={type:"move"};class lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const x=t.getJointPose(C,s),S=this._getHandJoint(p,C);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],m=v.position.distanceTo(_.position),y=.02,M=.005;p.inputState.pinching&&m>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&m<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Oy)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Ml;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function cf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Dt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=_t.workingColorSpace){return this.r=e,this.g=t,this.b=s,_t.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=_t.workingColorSpace){if(e=wy(e,1),t=xt(t,0,1),s=xt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=cf(u,l,e+1/3),this.g=cf(u,l,e),this.b=cf(u,l,e-1/3)}return _t.colorSpaceToWorking(this,o),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=w0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return _t.workingToColorSpace(Tn.copy(this),e),Math.round(xt(Tn.r*255,0,255))*65536+Math.round(xt(Tn.g*255,0,255))*256+Math.round(xt(Tn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Tn.copy(this),t);const s=Tn.r,o=Tn.g,l=Tn.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const _=u-f;switch(p=v<=.5?_/(u+f):_/(2-u-f),u){case s:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-s)/_+2;break;case l:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ti){_t.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,s=Tn.g,o=Tn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(wl);const s=tf(Lr.h,wl.h,t),o=tf(Lr.s,wl.s,t),l=tf(Lr.l,wl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Dt;Dt.NAMES=w0;class By extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ds,this.environmentIntensity=1,this.environmentRotation=new ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mi=new ie,Ki=new ie,uf=new ie,Zi=new ie,Ws=new ie,Xs=new ie,tg=new ie,ff=new ie,df=new ie,hf=new ie,pf=new Jt,mf=new Jt,gf=new Jt;class _i{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),mi.subVectors(e,t),o.cross(mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){mi.subVectors(o,t),Ki.subVectors(s,t),uf.subVectors(e,t);const u=mi.dot(mi),f=mi.dot(Ki),h=mi.dot(uf),p=Ki.dot(Ki),v=Ki.dot(uf),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const m=1/_,y=(p*h-f*v)*m,M=(u*v-f*h)*m;return l.set(1-y-M,M,y)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,s,o,l,u,f,h){return this.getBarycoord(e,t,s,o,Zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Zi.x),h.addScaledVector(u,Zi.y),h.addScaledVector(f,Zi.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,t),mf.fromBufferAttribute(e,s),gf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(pf,l.x),u.addScaledVector(mf,l.y),u.addScaledVector(gf,l.z),u}static isFrontFacing(e,t,s,o){return mi.subVectors(s,t),Ki.subVectors(e,t),mi.cross(Ki).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),mi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return _i.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;Ws.subVectors(o,s),Xs.subVectors(l,s),ff.subVectors(e,s);const h=Ws.dot(ff),p=Xs.dot(ff);if(h<=0&&p<=0)return t.copy(s);df.subVectors(e,o);const v=Ws.dot(df),_=Xs.dot(df);if(v>=0&&_<=v)return t.copy(o);const m=h*_-v*p;if(m<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(s).addScaledVector(Ws,u);hf.subVectors(e,l);const y=Ws.dot(hf),M=Xs.dot(hf);if(M>=0&&y<=M)return t.copy(l);const C=y*p-h*M;if(C<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(s).addScaledVector(Xs,f);const x=v*M-y*_;if(x<=0&&_-v>=0&&y-M>=0)return tg.subVectors(l,o),f=(_-v)/(_-v+(y-M)),t.copy(o).addScaledVector(tg,f);const S=1/(x+C+m);return u=C*S,f=m*S,t.copy(s).addScaledVector(Ws,u).addScaledVector(Xs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ho{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,gi):gi.fromBufferAttribute(l,u),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tl.copy(s.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),Al.subVectors(this.max,Za),js.subVectors(e.a,Za),$s.subVectors(e.b,Za),Ys.subVectors(e.c,Za),Dr.subVectors($s,js),Nr.subVectors(Ys,$s),ts.subVectors(js,Ys);let t=[0,-Dr.z,Dr.y,0,-Nr.z,Nr.y,0,-ts.z,ts.y,Dr.z,0,-Dr.x,Nr.z,0,-Nr.x,ts.z,0,-ts.x,-Dr.y,Dr.x,0,-Nr.y,Nr.x,0,-ts.y,ts.x,0];return!vf(t,js,$s,Ys,Al)||(t=[1,0,0,0,1,0,0,0,1],!vf(t,js,$s,Ys,Al))?!1:(Cl.crossVectors(Dr,Nr),t=[Cl.x,Cl.y,Cl.z],vf(t,js,$s,Ys,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],gi=new ie,Tl=new ho,js=new ie,$s=new ie,Ys=new ie,Dr=new ie,Nr=new ie,ts=new ie,Za=new ie,Al=new ie,Cl=new ie,ns=new ie;function vf(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){ns.fromArray(r,l);const f=o.x*Math.abs(ns.x)+o.y*Math.abs(ns.y)+o.z*Math.abs(ns.z),h=e.dot(ns),p=t.dot(ns),v=s.dot(ns);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const nn=new ie,Rl=new Nt;let ky=0;class Ii extends hs{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ky++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Hm,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=qa(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Bn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),s=Bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),s=Bn(s,this.array),o=Bn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),s=Bn(s,this.array),o=Bn(o,this.array),l=Bn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T0 extends Ii{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class A0 extends Ii{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class rr extends Ii{constructor(e,t,s){super(new Float32Array(e),t,s)}}const zy=new ho,Qa=new ie,_f=new ie;class Wd{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):zy.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);const t=Qa.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Qa,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(_f)),this.expandByPoint(Qa.copy(e.center).sub(_f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hy=0;const ei=new on,xf=new jn,qs=new ie,Xn=new ho,Ja=new ho,hn=new ie;class ur extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sy(e)?A0:T0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ct().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new rr(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Ja.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors(Xn.min,Ja.min),Xn.expandByPoint(hn),hn.addVectors(Xn.max,Ja.max),Xn.expandByPoint(hn)):(Xn.expandByPoint(Ja.min),Xn.expandByPoint(Ja.max))}Xn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(hn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)hn.fromBufferAttribute(f,p),h&&(qs.fromBufferAttribute(e,p),hn.add(qs)),o=Math.max(o,s.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<s.count;T++)f[T]=new ie,h[T]=new ie;const p=new ie,v=new ie,_=new ie,m=new Nt,y=new Nt,M=new Nt,C=new ie,x=new ie;function S(T,I,j){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,I),_.fromBufferAttribute(s,j),m.fromBufferAttribute(l,T),y.fromBufferAttribute(l,I),M.fromBufferAttribute(l,j),v.sub(p),_.sub(p),y.sub(m),M.sub(m);const B=1/(y.x*M.y-M.x*y.y);isFinite(B)&&(C.copy(v).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(B),x.copy(_).multiplyScalar(y.x).addScaledVector(v,-M.x).multiplyScalar(B),f[T].add(C),f[I].add(C),f[j].add(C),h[T].add(x),h[I].add(x),h[j].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,I=R.length;T<I;++T){const j=R[T],B=j.start,K=j.count;for(let oe=B,fe=B+K;oe<fe;oe+=3)S(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const b=new ie,P=new ie,N=new ie,D=new ie;function F(T){N.fromBufferAttribute(o,T),D.copy(N);const I=f[T];b.copy(I),b.sub(N.multiplyScalar(N.dot(I))).normalize(),P.crossVectors(D,I);const B=P.dot(h[T])<0?-1:1;u.setXYZW(T,b.x,b.y,b.z,B)}for(let T=0,I=R.length;T<I;++T){const j=R[T],B=j.start,K=j.count;for(let oe=B,fe=B+K;oe<fe;oe+=3)F(e.getX(oe+0)),F(e.getX(oe+1)),F(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ii(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let m=0,y=s.count;m<y;m++)s.setXYZ(m,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,h=new ie,p=new ie,v=new ie,_=new ie;if(e)for(let m=0,y=e.count;m<y;m+=3){const M=e.getX(m+0),C=e.getX(m+1),x=e.getX(m+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,x),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(s,M),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),f.add(v),h.add(v),p.add(v),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(C,h.x,h.y,h.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),s.setXYZ(m+0,v.x,v.y,v.z),s.setXYZ(m+1,v.x,v.y,v.z),s.setXYZ(m+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,_=f.normalized,m=new p.constructor(h.length*v);let y=0,M=0;for(let C=0,x=h.length;C<x;C++){f.isInterleavedBufferAttribute?y=h[C]*f.data.stride+f.offset:y=h[C]*v;for(let S=0;S<v;S++)m[M++]=p[y++]}return new Ii(m,v,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,_=p.length;v<_;v++){const m=p[v],y=e(m,s);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let _=0,m=p.length;_<m;_++){const y=p[_];v.push(y.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let m=0,y=_.length;m<y;m++)v.push(_[m].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Vy=0;class cc extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=ea,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Uf,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(s.blending=this.blending),this.side!==kr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==If&&(s.blendSrc=this.blendSrc),this.blendDst!==Uf&&(s.blendDst=this.blendDst),this.blendEquation!==as&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ji=new ie,Sf=new ie,bl=new ie,Ir=new ie,yf=new ie,Pl=new ie,Ef=new ie;class Gy{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Sf.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(Sf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(bl),f=Ir.dot(this.direction),h=-Ir.dot(bl),p=Ir.lengthSq(),v=Math.abs(1-u*u);let _,m,y,M;if(v>0)if(_=u*h-f,m=u*f-h,M=l*v,_>=0)if(m>=-M)if(m<=M){const C=1/v;_*=C,m*=C,y=_*(_+u*m+2*f)+m*(u*_+m+2*h)+p}else m=l,_=Math.max(0,-(u*m+f)),y=-_*_+m*(m+2*h)+p;else m=-l,_=Math.max(0,-(u*m+f)),y=-_*_+m*(m+2*h)+p;else m<=-M?(_=Math.max(0,-(-u*l+f)),m=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+m*(m+2*h)+p):m<=M?(_=0,m=Math.min(Math.max(-l,-h),l),y=m*(m+2*h)+p):(_=Math.max(0,-(u*l+f)),m=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+m*(m+2*h)+p);else m=u>0?-l:l,_=Math.max(0,-(u*m+f)),y=-_*_+m*(m+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Sf).addScaledVector(bl,m),y}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);const s=Ji.dot(this.direction),o=Ji.dot(Ji)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,m=this.origin;return p>=0?(s=(e.min.x-m.x)*p,o=(e.max.x-m.x)*p):(s=(e.max.x-m.x)*p,o=(e.min.x-m.x)*p),v>=0?(l=(e.min.y-m.y)*v,u=(e.max.y-m.y)*v):(l=(e.max.y-m.y)*v,u=(e.min.y-m.y)*v),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-m.z)*_,h=(e.max.z-m.z)*_):(f=(e.max.z-m.z)*_,h=(e.min.z-m.z)*_),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,s,o,l){yf.subVectors(t,e),Pl.subVectors(s,e),Ef.crossVectors(yf,Pl);let u=this.direction.dot(Ef),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ir.subVectors(this.origin,e);const h=f*this.direction.dot(Pl.crossVectors(Ir,Pl));if(h<0)return null;const p=f*this.direction.dot(yf.cross(Ir));if(p<0||h+p>u)return null;const v=-f*Ir.dot(Ef);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class C0 extends cc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ds,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ng=new on,is=new Gy,Ll=new Wd,ig=new ie,Dl=new ie,Nl=new ie,Il=new ie,Mf=new ie,Ul=new ie,rg=new ie,Fl=new ie;class Oi extends jn{constructor(e=new ur,t=new C0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ul.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],_=l[h];v!==0&&(Mf.fromBufferAttribute(_,e),u?Ul.addScaledVector(Mf,v):Ul.addScaledVector(Mf.sub(t),v))}t.add(Ul)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ll.copy(s.boundingSphere),Ll.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Ll.containsPoint(is.origin)===!1&&(is.intersectSphere(Ll,ig)===null||is.origin.distanceToSquared(ig)>(e.far-e.near)**2))&&(ng.copy(l).invert(),is.copy(e.ray).applyMatrix4(ng),!(s.boundingBox!==null&&is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,m=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,C=m.length;M<C;M++){const x=m[M],S=u[x.materialIndex],R=Math.max(x.start,y.start),b=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let P=R,N=b;P<N;P+=3){const D=f.getX(P),F=f.getX(P+1),T=f.getX(P+2);o=Ol(this,S,e,s,p,v,_,D,F,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),C=Math.min(f.count,y.start+y.count);for(let x=M,S=C;x<S;x+=3){const R=f.getX(x),b=f.getX(x+1),P=f.getX(x+2);o=Ol(this,u,e,s,p,v,_,R,b,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,C=m.length;M<C;M++){const x=m[M],S=u[x.materialIndex],R=Math.max(x.start,y.start),b=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let P=R,N=b;P<N;P+=3){const D=P,F=P+1,T=P+2;o=Ol(this,S,e,s,p,v,_,D,F,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let x=M,S=C;x<S;x+=3){const R=x,b=x+1,P=x+2;o=Ol(this,u,e,s,p,v,_,R,b,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Wy(r,e,t,s,o,l,u,f){let h;if(e.side===kn?h=s.intersectTriangle(u,l,o,!0,f):h=s.intersectTriangle(o,l,u,e.side===kr,f),h===null)return null;Fl.copy(f),Fl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Fl);return p<t.near||p>t.far?null:{distance:p,point:Fl.clone(),object:r}}function Ol(r,e,t,s,o,l,u,f,h,p){r.getVertexPosition(f,Dl),r.getVertexPosition(h,Nl),r.getVertexPosition(p,Il);const v=Wy(r,e,t,s,Dl,Nl,Il,rg);if(v){const _=new ie;_i.getBarycoord(rg,Dl,Nl,Il,_),o&&(v.uv=_i.getInterpolatedAttribute(o,f,h,p,_,new Nt)),l&&(v.uv1=_i.getInterpolatedAttribute(l,f,h,p,_,new Nt)),u&&(v.normal=_i.getInterpolatedAttribute(u,f,h,p,_,new ie),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const m={a:f,b:h,c:p,normal:new ie,materialIndex:0};_i.getNormal(Dl,Nl,Il,m.normal),v.face=m,v.barycoord=_}return v}class Xy extends xn{constructor(e=null,t=1,s=1,o,l,u,f,h,p=_n,v=_n,_,m){super(null,u,f,h,p,v,o,l,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wf=new ie,jy=new ie,$y=new ct;class ss{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=wf.subVectors(s,t).cross(jy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(wf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||$y.getNormalMatrix(e),o=this.coplanarPoint(wf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Wd,Yy=new Nt(.5,.5),Bl=new ie;class R0{constructor(e=new ss,t=new ss,s=new ss,o=new ss,l=new ss,u=new ss){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Li,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],_=l[5],m=l[6],y=l[7],M=l[8],C=l[9],x=l[10],S=l[11],R=l[12],b=l[13],P=l[14],N=l[15];if(o[0].setComponents(p-u,y-v,S-M,N-R).normalize(),o[1].setComponents(p+u,y+v,S+M,N+R).normalize(),o[2].setComponents(p+f,y+_,S+C,N+b).normalize(),o[3].setComponents(p-f,y-_,S-C,N-b).normalize(),s)o[4].setComponents(h,m,x,P).normalize(),o[5].setComponents(p-h,y-m,S-x,N-P).normalize();else if(o[4].setComponents(p-h,y-m,S-x,N-P).normalize(),t===Li)o[5].setComponents(p+h,y+m,S+x,N+P).normalize();else if(t===ic)o[5].setComponents(h,m,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=Yy.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Bl.x=o.normal.x>0?e.max.x:e.min.x,Bl.y=o.normal.y>0?e.max.y:e.min.y,Bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b0 extends xn{constructor(e=[],t=us,s,o,l,u,f,h,p,v){super(e,t,s,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qy extends xn{constructor(e,t,s,o,l,u,f,h,p){super(e,t,s,o,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ra extends xn{constructor(e,t,s=Fi,o,l,u,f=_n,h=_n,p,v=or,_=1){if(v!==or&&v!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,o,l,u,f,h,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ky extends ra{constructor(e,t=Fi,s=us,o,l,u=_n,f=_n,h,p=or){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,s,o,l,u,f,h,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P0 extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class po extends ur{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],_=[];let m=0,y=0;M("z","y","x",-1,-1,s,t,e,u,l,0),M("z","y","x",1,-1,s,t,-e,u,l,1),M("x","z","y",1,1,e,s,t,o,u,2),M("x","z","y",1,-1,e,s,-t,o,u,3),M("x","y","z",1,-1,e,t,s,o,l,4),M("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new rr(p,3)),this.setAttribute("normal",new rr(v,3)),this.setAttribute("uv",new rr(_,2));function M(C,x,S,R,b,P,N,D,F,T,I){const j=P/F,B=N/T,K=P/2,oe=N/2,fe=D/2,H=F+1,$=T+1;let W=0,Y=0;const ce=new ie;for(let le=0;le<$;le++){const O=le*B-oe;for(let J=0;J<H;J++){const Oe=J*j-K;ce[C]=Oe*R,ce[x]=O*b,ce[S]=fe,p.push(ce.x,ce.y,ce.z),ce[C]=0,ce[x]=0,ce[S]=D>0?1:-1,v.push(ce.x,ce.y,ce.z),_.push(J/F),_.push(1-le/T),W+=1}}for(let le=0;le<T;le++)for(let O=0;O<F;O++){const J=m+O+H*le,Oe=m+O+H*(le+1),Ge=m+(O+1)+H*(le+1),Ie=m+(O+1)+H*le;h.push(J,Oe,Ie),h.push(Oe,Ge,Ie),Y+=6}f.addGroup(y,Y,I),y+=Y,m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sa extends ur{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,v=h+1,_=e/f,m=t/h,y=[],M=[],C=[],x=[];for(let S=0;S<v;S++){const R=S*m-u;for(let b=0;b<p;b++){const P=b*_-l;M.push(P,-R,0),C.push(0,0,1),x.push(b/f),x.push(1-S/h)}}for(let S=0;S<h;S++)for(let R=0;R<f;R++){const b=R+p*S,P=R+p*(S+1),N=R+1+p*(S+1),D=R+1+p*S;y.push(b,P,D),y.push(P,N,D)}this.setIndex(y),this.setAttribute("position",new rr(M,3)),this.setAttribute("normal",new rr(C,3)),this.setAttribute("uv",new rr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.widthSegments,e.heightSegments)}}function aa(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(sg(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(sg(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const s=aa(r[t]);for(const o in s)e[o]=s[o]}return e}function sg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Zy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function L0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Qy={clone:aa,merge:bn};var Jy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends cc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jy,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=Zy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class tE extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nE extends cc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iE extends cc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(ag(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!ag(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function ag(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class rE{constructor(e,t,s){const o=this;let l=!1,u=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this._abortController=null,this.itemStart=function(v){f++,l===!1&&o.onStart!==void 0&&o.onStart(v,u,f),l=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return h?h(v):v},this.setURLModifier=function(v){return h=v,this},this.addHandler=function(v,_){return p.push(v,_),this},this.removeHandler=function(v){const _=p.indexOf(v);return _!==-1&&p.splice(_,2),this},this.getHandler=function(v){for(let _=0,m=p.length;_<m;_+=2){const y=p[_],M=p[_+1];if(y.global&&(y.lastIndex=0),y.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sE=new rE;class Xd{constructor(e){this.manager=e!==void 0?e:sE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ks=new WeakMap;class aE extends Xd{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Tf.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let _=Ks.get(u);_===void 0&&(_=[],Ks.set(u,_)),_.push({onLoad:t,onError:o})}return u}const f=oo("img");function h(){v(),t&&t(this);const _=Ks.get(this)||[];for(let m=0;m<_.length;m++){const y=_[m];y.onLoad&&y.onLoad(this)}Ks.delete(this),l.manager.itemEnd(e)}function p(_){v(),o&&o(_),Tf.remove(`image:${e}`);const m=Ks.get(this)||[];for(let y=0;y<m.length;y++){const M=m[y];M.onError&&M.onError(_)}Ks.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Tf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class oE extends Xd{constructor(e){super(e)}load(e,t,s,o){const l=new xn,u=new aE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}const kl=new ie,zl=new ca,Ci=new ie;class D0 extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kl,zl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,zl,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(kl,zl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,zl,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new ie,og=new Nt,lg=new Nt;class vi extends D0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,og,lg),t.subVectors(lg,og)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ef*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jd extends D0{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=-90,Qs=1;class lE extends jn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new vi(Zs,Qs,e,t);o.layers=this.layers,this.add(o);const l=new vi(Zs,Qs,e,t);l.layers=this.layers,this.add(l);const u=new vi(Zs,Qs,e,t);u.layers=this.layers,this.add(u);const f=new vi(Zs,Qs,e,t);f.layers=this.layers,this.add(f);const h=new vi(Zs,Qs,e,t);h.layers=this.layers,this.add(h);const p=new vi(Zs,Qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Li)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,m,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class cE extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zd=class Zd{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Zd.prototype.isMatrix2=!0;let cg=Zd;function ug(r,e,t,s){const o=uE(s);switch(t){case _0:return r*e;case S0:return r*e/o.components*o.byteLength;case Bd:return r*e/o.components*o.byteLength;case fs:return r*e*2/o.components*o.byteLength;case kd:return r*e*2/o.components*o.byteLength;case x0:return r*e*3/o.components*o.byteLength;case xi:return r*e*4/o.components*o.byteLength;case zd:return r*e*4/o.components*o.byteLength;case jl:case $l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yl:case ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jf:case Yf:return Math.max(r,16)*Math.max(e,8)/4;case Xf:case $f:return Math.max(r,8)*Math.max(e,8)/2;case qf:case Kf:case Qf:case Jf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zf:case Jl:case ed:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case id:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case sd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ad:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ld:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case cd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ud:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case fd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case pd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case md:case gd:case vd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _d:case xd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ec:case Sd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uE(r){switch(r){case ni:case p0:return{byteLength:1,components:1};case so:case m0:case ar:return{byteLength:2,components:1};case Fd:case Od:return{byteLength:2,components:4};case Fi:case Ud:case Pi:return{byteLength:4,components:1};case g0:case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N0(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function fE(r){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,_=p.byteLength,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,p,v),f.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,h,p){const v=h.array,_=h.updateRanges;if(r.bindBuffer(p,f),_.length===0)r.bufferSubData(p,0,v);else{_.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<_.length;y++){const M=_[m],C=_[y];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++m,_[m]=C)}_.length=m+1;for(let y=0,M=_.length;y<M;y++){const C=_[y];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var dE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hE=`#ifdef USE_ALPHAHASH
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
#endif`,pE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_E=`#ifdef USE_AOMAP
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
#endif`,xE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SE=`#ifdef USE_BATCHING
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
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TE=`#ifdef USE_IRIDESCENCE
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
#endif`,AE=`#ifdef USE_BUMPMAP
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,UE=`#define PI 3.141592653589793
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
} // validated`,FE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OE=`vec3 transformedNormal = objectNormal;
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
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VE="gl_FragColor = linearToOutputTexel( gl_FragColor );",GE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WE=`#ifdef USE_ENVMAP
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
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
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
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
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
#endif`,uM=`uniform sampler2D dfgLUT;
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
}`,fM=`
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
#endif`,dM=`#if defined( RE_IndirectDiffuse )
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EM=`#if defined( USE_POINTS_UV )
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
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
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
#endif`,bM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UM=`#ifdef USE_NORMALMAP
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
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZM=`float getShadowMask() {
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
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,e2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t2=`#ifdef USE_SKINNING
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
#endif`,n2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a2=`#ifdef USE_TRANSMISSION
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
#endif`,o2=`#ifdef USE_TRANSMISSION
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
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h2=`uniform sampler2D t2D;
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
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_2=`#include <common>
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
}`,x2=`#if DEPTH_PACKING == 3200
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
}`,S2=`#define DISTANCE
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
}`,y2=`#define DISTANCE
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
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w2=`uniform float scale;
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
}`,T2=`uniform vec3 diffuse;
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
}`,A2=`#include <common>
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
}`,C2=`uniform vec3 diffuse;
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
}`,R2=`#define LAMBERT
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
}`,b2=`#define LAMBERT
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
}`,P2=`#define MATCAP
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
}`,L2=`#define MATCAP
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
}`,D2=`#define NORMAL
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
}`,N2=`#define NORMAL
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
}`,I2=`#define PHONG
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
}`,U2=`#define PHONG
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
}`,F2=`#define STANDARD
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
}`,O2=`#define STANDARD
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
}`,B2=`#define TOON
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
}`,k2=`#define TOON
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
}`,z2=`uniform float size;
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
}`,H2=`uniform vec3 diffuse;
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
}`,V2=`#include <common>
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
}`,G2=`uniform vec3 color;
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
}`,W2=`uniform float rotation;
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
}`,X2=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:dE,alphahash_pars_fragment:hE,alphamap_fragment:pE,alphamap_pars_fragment:mE,alphatest_fragment:gE,alphatest_pars_fragment:vE,aomap_fragment:_E,aomap_pars_fragment:xE,batching_pars_vertex:SE,batching_vertex:yE,begin_vertex:EE,beginnormal_vertex:ME,bsdfs:wE,iridescence_fragment:TE,bumpmap_pars_fragment:AE,clipping_planes_fragment:CE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:PE,color_fragment:LE,color_pars_fragment:DE,color_pars_vertex:NE,color_vertex:IE,common:UE,cube_uv_reflection_fragment:FE,defaultnormal_vertex:OE,displacementmap_pars_vertex:BE,displacementmap_vertex:kE,emissivemap_fragment:zE,emissivemap_pars_fragment:HE,colorspace_fragment:VE,colorspace_pars_fragment:GE,envmap_fragment:WE,envmap_common_pars_fragment:XE,envmap_pars_fragment:jE,envmap_pars_vertex:$E,envmap_physical_pars_fragment:rM,envmap_vertex:YE,fog_vertex:qE,fog_pars_vertex:KE,fog_fragment:ZE,fog_pars_fragment:QE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:aM,lights_phong_fragment:oM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:hM,lightprobes_pars_fragment:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:_M,map_fragment:xM,map_pars_fragment:SM,map_particle_fragment:yM,map_particle_pars_fragment:EM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:wM,morphinstance_vertex:TM,morphcolor_vertex:AM,morphnormal_vertex:CM,morphtarget_pars_vertex:RM,morphtarget_vertex:bM,normal_fragment_begin:PM,normal_fragment_maps:LM,normal_pars_fragment:DM,normal_pars_vertex:NM,normal_vertex:IM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:kM,opaque_fragment:zM,packing:HM,premultiplied_alpha_fragment:VM,project_vertex:GM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:$M,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:qM,shadowmap_vertex:KM,shadowmask_pars_fragment:ZM,skinbase_vertex:QM,skinning_pars_vertex:JM,skinning_vertex:e2,skinnormal_vertex:t2,specularmap_fragment:n2,specularmap_pars_fragment:i2,tonemapping_fragment:r2,tonemapping_pars_fragment:s2,transmission_fragment:a2,transmission_pars_fragment:o2,uv_pars_fragment:l2,uv_pars_vertex:c2,uv_vertex:u2,worldpos_vertex:f2,background_vert:d2,background_frag:h2,backgroundCube_vert:p2,backgroundCube_frag:m2,cube_vert:g2,cube_frag:v2,depth_vert:_2,depth_frag:x2,distance_vert:S2,distance_frag:y2,equirect_vert:E2,equirect_frag:M2,linedashed_vert:w2,linedashed_frag:T2,meshbasic_vert:A2,meshbasic_frag:C2,meshlambert_vert:R2,meshlambert_frag:b2,meshmatcap_vert:P2,meshmatcap_frag:L2,meshnormal_vert:D2,meshnormal_frag:N2,meshphong_vert:I2,meshphong_frag:U2,meshphysical_vert:F2,meshphysical_frag:O2,meshtoon_vert:B2,meshtoon_frag:k2,points_vert:z2,points_frag:H2,shadow_vert:V2,shadow_frag:G2,sprite_vert:W2,sprite_frag:X2},Ne={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},bi={basic:{uniforms:bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:bn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:bn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:bn([Ne.points,Ne.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:bn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:bn([Ne.common,Ne.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:bn([Ne.sprite,Ne.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:bn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:bn([Ne.lights,Ne.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};bi.physical={uniforms:bn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Hl={r:0,b:0,g:0},j2=new on,I0=new ct;I0.set(-1,0,0,0,1,0,0,0,1);function $2(r,e,t,s,o,l){const u=new Dt(0);let f=o===!0?0:1,h,p,v=null,_=0,m=null;function y(R){let b=R.isScene===!0?R.background:null;if(b&&b.isTexture){const P=R.backgroundBlurriness>0;b=e.get(b,P)}return b}function M(R){let b=!1;const P=y(R);P===null?x(u,f):P&&P.isColor&&(x(P,1),b=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(R,b){const P=y(b);P&&(P.isCubeTexture||P.mapping===lc)?(p===void 0&&(p=new Oi(new po(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:aa(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(j2.makeRotationFromEuler(b.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(I0),p.material.toneMapped=_t.getTransfer(P.colorSpace)!==Pt,(v!==P||_!==P.version||m!==r.toneMapping)&&(p.material.needsUpdate=!0,v=P,_=P.version,m=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new Oi(new sa(2,2),new ii({name:"BackgroundMaterial",uniforms:aa(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=_t.getTransfer(P.colorSpace)!==Pt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,v=P,_=P.version,m=r.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,b){R.getRGB(Hl,L0(r)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,b,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,b=1){u.set(R),f=b,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(u,f)},render:M,addToRenderList:C,dispose:S}}function Y2(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=m(null);let l=o,u=!1;function f(B,K,oe,fe,H){let $=!1;const W=_(B,fe,oe,K);l!==W&&(l=W,p(l.object)),$=y(B,fe,oe,H),$&&M(B,fe,oe,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,P(B,K,oe,fe),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function h(){return r.createVertexArray()}function p(B){return r.bindVertexArray(B)}function v(B){return r.deleteVertexArray(B)}function _(B,K,oe,fe){const H=fe.wireframe===!0;let $=s[K.id];$===void 0&&($={},s[K.id]=$);const W=B.isInstancedMesh===!0?B.id:0;let Y=$[W];Y===void 0&&(Y={},$[W]=Y);let ce=Y[oe.id];ce===void 0&&(ce={},Y[oe.id]=ce);let le=ce[H];return le===void 0&&(le=m(h()),ce[H]=le),le}function m(B){const K=[],oe=[],fe=[];for(let H=0;H<t;H++)K[H]=0,oe[H]=0,fe[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:oe,attributeDivisors:fe,object:B,attributes:{},index:null}}function y(B,K,oe,fe){const H=l.attributes,$=K.attributes;let W=0;const Y=oe.getAttributes();for(const ce in Y)if(Y[ce].location>=0){const O=H[ce];let J=$[ce];if(J===void 0&&(ce==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),ce==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;W++}return l.attributesNum!==W||l.index!==fe}function M(B,K,oe,fe){const H={},$=K.attributes;let W=0;const Y=oe.getAttributes();for(const ce in Y)if(Y[ce].location>=0){let O=$[ce];O===void 0&&(ce==="instanceMatrix"&&B.instanceMatrix&&(O=B.instanceMatrix),ce==="instanceColor"&&B.instanceColor&&(O=B.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),H[ce]=J,W++}l.attributes=H,l.attributesNum=W,l.index=fe}function C(){const B=l.newAttributes;for(let K=0,oe=B.length;K<oe;K++)B[K]=0}function x(B){S(B,0)}function S(B,K){const oe=l.newAttributes,fe=l.enabledAttributes,H=l.attributeDivisors;oe[B]=1,fe[B]===0&&(r.enableVertexAttribArray(B),fe[B]=1),H[B]!==K&&(r.vertexAttribDivisor(B,K),H[B]=K)}function R(){const B=l.newAttributes,K=l.enabledAttributes;for(let oe=0,fe=K.length;oe<fe;oe++)K[oe]!==B[oe]&&(r.disableVertexAttribArray(oe),K[oe]=0)}function b(B,K,oe,fe,H,$,W){W===!0?r.vertexAttribIPointer(B,K,oe,H,$):r.vertexAttribPointer(B,K,oe,fe,H,$)}function P(B,K,oe,fe){C();const H=fe.attributes,$=oe.getAttributes(),W=K.defaultAttributeValues;for(const Y in $){const ce=$[Y];if(ce.location>=0){let le=H[Y];if(le===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(le=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(le=B.instanceColor)),le!==void 0){const O=le.normalized,J=le.itemSize,Oe=e.get(le);if(Oe===void 0)continue;const Ge=Oe.buffer,Ie=Oe.type,ae=Oe.bytesPerElement,Se=Ie===r.INT||Ie===r.UNSIGNED_INT||le.gpuType===Ud;if(le.isInterleavedBufferAttribute){const me=le.data,Ue=me.stride,Qe=le.offset;if(me.isInstancedInterleavedBuffer){for(let Je=0;Je<ce.locationSize;Je++)S(ce.location+Je,me.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Je=0;Je<ce.locationSize;Je++)x(ce.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let Je=0;Je<ce.locationSize;Je++)b(ce.location+Je,J/ce.locationSize,Ie,O,Ue*ae,(Qe+J/ce.locationSize*Je)*ae,Se)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<ce.locationSize;me++)S(ce.location+me,le.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<ce.locationSize;me++)x(ce.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let me=0;me<ce.locationSize;me++)b(ce.location+me,J/ce.locationSize,Ie,O,J*ae,J/ce.locationSize*me*ae,Se)}}else if(W!==void 0){const O=W[Y];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(ce.location,O);break;case 3:r.vertexAttrib3fv(ce.location,O);break;case 4:r.vertexAttrib4fv(ce.location,O);break;default:r.vertexAttrib1fv(ce.location,O)}}}}R()}function N(){I();for(const B in s){const K=s[B];for(const oe in K){const fe=K[oe];for(const H in fe){const $=fe[H];for(const W in $)v($[W].object),delete $[W];delete fe[H]}}delete s[B]}}function D(B){if(s[B.id]===void 0)return;const K=s[B.id];for(const oe in K){const fe=K[oe];for(const H in fe){const $=fe[H];for(const W in $)v($[W].object),delete $[W];delete fe[H]}}delete s[B.id]}function F(B){for(const K in s){const oe=s[K];for(const fe in oe){const H=oe[fe];if(H[B.id]===void 0)continue;const $=H[B.id];for(const W in $)v($[W].object),delete $[W];delete H[B.id]}}}function T(B){for(const K in s){const oe=s[K],fe=B.isInstancedMesh===!0?B.id:0,H=oe[fe];if(H!==void 0){for(const $ in H){const W=H[$];for(const Y in W)v(W[Y].object),delete W[Y];delete H[$]}delete oe[fe],Object.keys(oe).length===0&&delete s[K]}}}function I(){j(),u=!0,l!==o&&(l=o,p(l.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:j,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:x,disableUnusedAttributes:R}}function q2(r,e,t){let s;function o(h){s=h}function l(h,p){r.drawArrays(s,h,p),t.update(p,s,1)}function u(h,p,v){v!==0&&(r.drawArraysInstanced(s,h,p,v),t.update(p,s,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,p,0,v);let m=0;for(let y=0;y<v;y++)m+=p[y];t.update(m,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function K2(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==xi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const T=F===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ni&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Pi&&!T)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(rt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:P,maxSamples:N,samples:D}}function Z2(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new ss,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const y=_.length!==0||m||s!==0||o;return o=m,s=_.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,m){t=v(_,m,0)},this.setState=function(_,m,y){const M=_.clippingPlanes,C=_.clipIntersection,x=_.clipShadows,S=r.get(_);if(!o||M===null||M.length===0||l&&!x)l?v(null):p();else{const R=l?0:s,b=R*4;let P=S.clippingState||null;h.value=P,P=v(M,m,b,y);for(let N=0;N!==b;++N)P[N]=t[N];S.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,m,y,M){const C=_!==null?_.length:0;let x=null;if(C!==0){if(x=h.value,M!==!0||x===null){const S=y+C*4,R=m.matrixWorldInverse;f.getNormalMatrix(R),(x===null||x.length<S)&&(x=new Float32Array(S));for(let b=0,P=y;b!==C;++b,P+=4)u.copy(_[b]).applyMatrix4(R,f),u.normal.toArray(x,P),x[P+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}const Or=4,fg=[.125,.215,.35,.446,.526,.582],os=20,Q2=256,eo=new jd,dg=new Dt;let Af=null,Cf=0,Rf=0,bf=!1;const J2=new ie;class hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=J2}=l;Af=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Cf,Rf),this._renderer.xr.enabled=bf,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ar,format:xi,colorSpace:tc,depthBuffer:!1},o=pg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e1(l)),this._blurMaterial=n1(l,e,t),this._ggxMaterial=t1(l,e,t)}return o}_compileMaterial(e){const t=new Oi(new ur,e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,s,o,l){const h=new vi(90,1,t,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,y=_.toneMapping;_.getClearColor(dg),_.toneMapping=Di,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new po,new C0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let S=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,S=!0):(x.color.copy(dg),S=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(h.up.set(0,p[b],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[b],l.y,l.z)):P===1?(h.up.set(0,0,p[b]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[b],l.z)):(h.up.set(0,p[b],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[b]));const N=this._cubeSize;Js(o,P*N,b>2?N:0,N,N),_.setRenderTarget(o),S&&_.render(C,h),_.render(e,h)}_.toneMapping=y,_.autoClear=m,e.background=R}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===us||e.mapping===ia;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Js(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,eo)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),m=0+p*1.25,y=_*m,{_lodMax:M}=this,C=this._sizeLods[s],x=3*C*(s>M-Or?s-M+Or:0),S=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=M-t,Js(l,x,S,3*C,2*C),o.setRenderTarget(l),o.render(f,eo),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-s,Js(e,x,S,3*C,2*C),o.setRenderTarget(e),o.render(f,eo)}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=p;const m=p.uniforms,y=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*os-1),C=l/M,x=isFinite(l)?1+Math.floor(v*C):os;x>os&&rt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${os}`);const S=[];let R=0;for(let F=0;F<os;++F){const T=F/C,I=Math.exp(-T*T/2);S.push(I),F===0?R+=I:F<x&&(R+=2*I)}for(let F=0;F<S.length;F++)S[F]=S[F]/R;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=S,m.latitudinal.value=u==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:b}=this;m.dTheta.value=M,m.mipInt.value=b-s;const P=this._sizeLods[o],N=3*P*(o>b-Or?o-b+Or:0),D=4*(this._cubeSize-P);Js(t,N,D,3*P,2*P),h.setRenderTarget(t),h.render(_,eo)}}function e1(r){const e=[],t=[],s=[];let o=r;const l=r-Or+1+fg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>r-Or?h=fg[u-r+Or-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,_=1+p,m=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,M=6,C=3,x=2,S=1,R=new Float32Array(C*M*y),b=new Float32Array(x*M*y),P=new Float32Array(S*M*y);for(let D=0;D<y;D++){const F=D%3*2/3-1,T=D>2?0:-1,I=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];R.set(I,C*M*D),b.set(m,x*M*D);const j=[D,D,D,D,D,D];P.set(j,S*M*D)}const N=new ur;N.setAttribute("position",new Ii(R,C)),N.setAttribute("uv",new Ii(b,x)),N.setAttribute("faceIndex",new Ii(P,S)),s.push(new Oi(N,null)),o>Or&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function pg(r,e,t){const s=new Ni(r,e,t);return s.texture.mapping=lc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function t1(r,e,t){return new ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Q2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function n1(r,e,t){const s=new Float32Array(os),o=new ie(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:uc(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function mg(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function gg(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}class U0 extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new b0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new po(5,5,5),l=new ii({name:"CubemapFromEquirect",uniforms:aa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:nr});l.uniforms.tEquirect.value=t;const u=new Oi(o,l),f=t.minFilter;return t.minFilter===ls&&(t.minFilter=rn),new lE(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function i1(r){let e=new WeakMap,t=new WeakMap,s=null;function o(m,y=!1){return m==null?null:y?u(m):l(m)}function l(m){if(m&&m.isTexture){const y=m.mapping;if(y===Zu||y===Qu)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const C=new U0(M.height);return C.fromEquirectangularTexture(r,m),e.set(m,C),m.addEventListener("dispose",p),f(C.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const y=m.mapping,M=y===Zu||y===Qu,C=y===us||y===ia;if(M||C){let x=t.get(m);const S=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return s===null&&(s=new hg(r)),x=M?s.fromEquirectangular(m,x):s.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),x.texture;if(x!==void 0)return x.texture;{const R=m.image;return M&&R&&R.height>0||C&&R&&h(R)?(s===null&&(s=new hg(r)),x=M?s.fromEquirectangular(m):s.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),m.addEventListener("dispose",v),x.texture):null}}}return m}function f(m,y){return y===Zu?m.mapping=us:y===Qu&&(m.mapping=ia),m}function h(m){let y=0;const M=6;for(let C=0;C<M;C++)m[C]!==void 0&&y++;return y===M}function p(m){const y=m.target;y.removeEventListener("dispose",p);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function v(m){const y=m.target;y.removeEventListener("dispose",v);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function r1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&yd("WebGLRenderer: "+s+" extension not supported."),o}}}function s1(r,e,t,s){const o={},l=new WeakMap;function u(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete o[m.id];const y=l.get(m);y&&(e.remove(y),l.delete(m)),s.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(_,m){return o[m.id]===!0||(m.addEventListener("dispose",u),o[m.id]=!0,t.memory.geometries++),m}function h(_){const m=_.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER)}function p(_){const m=[],y=_.index,M=_.attributes.position;let C=0;if(M===void 0)return;if(y!==null){const R=y.array;C=y.version;for(let b=0,P=R.length;b<P;b+=3){const N=R[b+0],D=R[b+1],F=R[b+2];m.push(N,D,D,F,F,N)}}else{const R=M.array;C=M.version;for(let b=0,P=R.length/3-1;b<P;b+=3){const N=b+0,D=b+1,F=b+2;m.push(N,D,D,F,F,N)}}const x=new(M.count>=65535?A0:T0)(m,1);x.version=C;const S=l.get(_);S&&e.remove(S),l.set(_,x)}function v(_){const m=l.get(_);if(m){const y=_.index;y!==null&&m.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:v}}function a1(r,e,t){let s;function o(_){s=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,m){r.drawElements(s,m,l,_*u),t.update(m,s,1)}function p(_,m,y){y!==0&&(r.drawElementsInstanced(s,m,l,_*u,y),t.update(m,s,y))}function v(_,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,m,0,l,_,0,y);let C=0;for(let x=0;x<y;x++)C+=m[x];t.update(C,s,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function o1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Et("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function l1(r,e,t){const s=new WeakMap,o=new Jt;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let m=s.get(f);if(m===void 0||m.count!==_){let j=function(){T.dispose(),s.delete(f),f.removeEventListener("dispose",j)};var y=j;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),C===!0&&(P=2),x===!0&&(P=3);let N=f.attributes.position.count*P,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*D*4*_),T=new E0(F,N,D,_);T.type=Pi,T.needsUpdate=!0;const I=P*4;for(let B=0;B<_;B++){const K=S[B],oe=R[B],fe=b[B],H=N*D*4*B;for(let $=0;$<K.count;$++){const W=$*I;M===!0&&(o.fromBufferAttribute(K,$),F[H+W+0]=o.x,F[H+W+1]=o.y,F[H+W+2]=o.z,F[H+W+3]=0),C===!0&&(o.fromBufferAttribute(oe,$),F[H+W+4]=o.x,F[H+W+5]=o.y,F[H+W+6]=o.z,F[H+W+7]=0),x===!0&&(o.fromBufferAttribute(fe,$),F[H+W+8]=o.x,F[H+W+9]=o.y,F[H+W+10]=o.z,F[H+W+11]=fe.itemSize===4?o.w:1)}}m={count:_,texture:T,size:new Nt(N,D)},s.set(f,m),f.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const C=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",C),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:l}}function c1(r,e,t,s,o){let l=new WeakMap;function u(p){const v=o.render.frame,_=p.geometry,m=e.get(p,_);if(l.get(m)!==v&&(e.update(m),l.set(m,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==v&&(y.update(),l.set(y,v))}return m}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const u1={[a0]:"LINEAR_TONE_MAPPING",[o0]:"REINHARD_TONE_MAPPING",[l0]:"CINEON_TONE_MAPPING",[c0]:"ACES_FILMIC_TONE_MAPPING",[f0]:"AGX_TONE_MAPPING",[d0]:"NEUTRAL_TONE_MAPPING",[u0]:"CUSTOM_TONE_MAPPING"};function f1(r,e,t,s,o){const l=new Ni(e,t,{type:r,depthBuffer:s,stencilBuffer:o,depthTexture:s?new ra(e,t):void 0}),u=new Ni(e,t,{type:ar,depthBuffer:!1,stencilBuffer:!1}),f=new ur;f.setAttribute("position",new rr([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new rr([0,2,0,0,2,0],2));const h=new tE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Oi(f,h),v=new jd(-1,1,1,-1,0,1);let _=null,m=null,y=!1,M,C=null,x=[],S=!1;this.setSize=function(R,b){l.setSize(R,b),u.setSize(R,b);for(let P=0;P<x.length;P++){const N=x[P];N.setSize&&N.setSize(R,b)}},this.setEffects=function(R){x=R,S=x.length>0&&x[0].isRenderPass===!0;const b=l.width,P=l.height;for(let N=0;N<x.length;N++){const D=x[N];D.setSize&&D.setSize(b,P)}},this.begin=function(R,b){if(y||R.toneMapping===Di&&x.length===0)return!1;if(C=b,b!==null){const P=b.width,N=b.height;(l.width!==P||l.height!==N)&&this.setSize(P,N)}return S===!1&&R.setRenderTarget(l),M=R.toneMapping,R.toneMapping=Di,!0},this.hasRenderPass=function(){return S},this.end=function(R,b){R.toneMapping=M,y=!0;let P=l,N=u;for(let D=0;D<x.length;D++){const F=x[D];if(F.enabled!==!1&&(F.render(R,N,P,b),F.needsSwap!==!1)){const T=P;P=N,N=T}}if(_!==R.outputColorSpace||m!==R.toneMapping){_=R.outputColorSpace,m=R.toneMapping,h.defines={},_t.getTransfer(_)===Pt&&(h.defines.SRGB_TRANSFER="");const D=u1[m];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(C),R.render(p,v),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const F0=new xn,Md=new ra(1,1),O0=new E0,B0=new Py,k0=new b0,vg=[],_g=[],xg=new Float32Array(16),Sg=new Float32Array(9),yg=new Float32Array(4);function ua(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=vg[o];if(l===void 0&&(l=new Float32Array(o),vg[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function ln(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function cn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function fc(r,e){let t=_g[e];t===void 0&&(t=new Int32Array(e),_g[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function d1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function h1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2fv(this.addr,e),cn(t,e)}}function p1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;r.uniform3fv(this.addr,e),cn(t,e)}}function m1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4fv(this.addr,e),cn(t,e)}}function g1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(ln(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,s))return;yg.set(s),r.uniformMatrix2fv(this.addr,!1,yg),cn(t,s)}}function v1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(ln(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,s))return;Sg.set(s),r.uniformMatrix3fv(this.addr,!1,Sg),cn(t,s)}}function _1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(ln(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,s))return;xg.set(s),r.uniformMatrix4fv(this.addr,!1,xg),cn(t,s)}}function x1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function S1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2iv(this.addr,e),cn(t,e)}}function y1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3iv(this.addr,e),cn(t,e)}}function E1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4iv(this.addr,e),cn(t,e)}}function M1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function w1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2uiv(this.addr,e),cn(t,e)}}function T1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3uiv(this.addr,e),cn(t,e)}}function A1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4uiv(this.addr,e),cn(t,e)}}function C1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Md.compareFunction=t.isReversedDepthBuffer()?Vd:Hd,l=Md):l=F0,t.setTexture2D(e||l,o)}function R1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||B0,o)}function b1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||k0,o)}function P1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||O0,o)}function L1(r){switch(r){case 5126:return d1;case 35664:return h1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return v1;case 35676:return _1;case 5124:case 35670:return x1;case 35667:case 35671:return S1;case 35668:case 35672:return y1;case 35669:case 35673:return E1;case 5125:return M1;case 36294:return w1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return P1}}function D1(r,e){r.uniform1fv(this.addr,e)}function N1(r,e){const t=ua(e,this.size,2);r.uniform2fv(this.addr,t)}function I1(r,e){const t=ua(e,this.size,3);r.uniform3fv(this.addr,t)}function U1(r,e){const t=ua(e,this.size,4);r.uniform4fv(this.addr,t)}function F1(r,e){const t=ua(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function O1(r,e){const t=ua(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function B1(r,e){const t=ua(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function k1(r,e){r.uniform1iv(this.addr,e)}function z1(r,e){r.uniform2iv(this.addr,e)}function H1(r,e){r.uniform3iv(this.addr,e)}function V1(r,e){r.uniform4iv(this.addr,e)}function G1(r,e){r.uniform1uiv(this.addr,e)}function W1(r,e){r.uniform2uiv(this.addr,e)}function X1(r,e){r.uniform3uiv(this.addr,e)}function j1(r,e){r.uniform4uiv(this.addr,e)}function $1(r,e,t){const s=this.cache,o=e.length,l=fc(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),cn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Md:u=F0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function Y1(r,e,t){const s=this.cache,o=e.length,l=fc(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),cn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||B0,l[u])}function q1(r,e,t){const s=this.cache,o=e.length,l=fc(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),cn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||k0,l[u])}function K1(r,e,t){const s=this.cache,o=e.length,l=fc(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),cn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||O0,l[u])}function Z1(r){switch(r){case 5126:return D1;case 35664:return N1;case 35665:return I1;case 35666:return U1;case 35674:return F1;case 35675:return O1;case 35676:return B1;case 5124:case 35670:return k1;case 35667:case 35671:return z1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return X1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return K1}}class Q1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=L1(t.type)}}class J1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z1(t.type)}}class ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const Pf=/(\w+)(\])?(\[|\.)?/g;function Eg(r,e){r.seq.push(e),r.map[e.id]=e}function tw(r,e,t){const s=r.name,o=s.length;for(Pf.lastIndex=0;;){const l=Pf.exec(s),u=Pf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){Eg(t,p===void 0?new Q1(f,r,e):new J1(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new ew(f),Eg(t,_)),t=_}}}class Kl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);tw(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Mg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const nw=37297;let iw=0;function rw(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const wg=new ct;function sw(r){_t._getMatrix(wg,_t.workingColorSpace,r);const e=`mat3( ${wg.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(r)){case nc:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Tg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+rw(r.getShaderSource(e),f)}else return l}function aw(r,e){const t=sw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ow={[a0]:"Linear",[o0]:"Reinhard",[l0]:"Cineon",[c0]:"ACESFilmic",[f0]:"AgX",[d0]:"Neutral",[u0]:"Custom"};function lw(r,e){const t=ow[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vl=new ie;function cw(){_t.getLuminanceCoefficients(Vl);const r=Vl.x.toFixed(4),e=Vl.y.toFixed(4),t=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function fw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function dw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function io(r){return r!==""}function Ag(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(r){return r.replace(hw,mw)}const pw=new Map;function mw(r,e){let t=ht[e];if(t===void 0){const s=pw.get(e);if(s!==void 0)t=ht[s],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return wd(t)}const gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(r){return r.replace(gw,vw)}function vw(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function bg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const _w={[Xl]:"SHADOWMAP_TYPE_PCF",[no]:"SHADOWMAP_TYPE_VSM"};function xw(r){return _w[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sw={[us]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE",[lc]:"ENVMAP_TYPE_CUBE_UV"};function yw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Sw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ew={[ia]:"ENVMAP_MODE_REFRACTION"};function Mw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ew[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ww={[s0]:"ENVMAP_BLENDING_MULTIPLY",[cy]:"ENVMAP_BLENDING_MIX",[uy]:"ENVMAP_BLENDING_ADD"};function Tw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ww[r.combine]||"ENVMAP_BLENDING_NONE"}function Aw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function Cw(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=xw(t),p=yw(t),v=Mw(t),_=Tw(t),m=Aw(t),y=uw(t),M=fw(l),C=o.createProgram();let x,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(io).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(io).join(`
`),S.length>0&&(S+=`
`)):(x=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),S=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?ht.tonemapping_pars_fragment:"",t.toneMapping!==Di?lw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,aw("linearToOutputTexel",t.outputColorSpace),cw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),u=wd(u),u=Ag(u,t),u=Cg(u,t),f=wd(f),f=Ag(f,t),f=Cg(f,t),u=Rg(u),f=Rg(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=R+x+u,P=R+S+f,N=Mg(o,o.VERTEX_SHADER,b),D=Mg(o,o.FRAGMENT_SHADER,P);o.attachShader(C,N),o.attachShader(C,D),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(B){if(r.debug.checkShaderErrors){const K=o.getProgramInfoLog(C)||"",oe=o.getShaderInfoLog(N)||"",fe=o.getShaderInfoLog(D)||"",H=K.trim(),$=oe.trim(),W=fe.trim();let Y=!0,ce=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,C,N,D);else{const le=Tg(o,N,"vertex"),O=Tg(o,D,"fragment");Et("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+H+`
`+le+`
`+O)}else H!==""?rt("WebGLProgram: Program Info Log:",H):($===""||W==="")&&(ce=!1);ce&&(B.diagnostics={runnable:Y,programLog:H,vertexShader:{log:$,prefix:x},fragmentShader:{log:W,prefix:S}})}o.deleteShader(N),o.deleteShader(D),T=new Kl(o,C),I=dw(o,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(C,nw)),j},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=N,this.fragmentShader=D,this}let Rw=0;class bw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Pw(e),t.set(e,s)),s}}class Pw{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}}function Lw(r){return r===fs||r===Jl||r===ec}function Dw(r,e,t,s,o,l){const u=new M0,f=new bw,h=new Set,p=[],v=new Map,_=s.logarithmicDepthBuffer;let m=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function C(T,I,j,B,K,oe){const fe=B.fog,H=K.geometry,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Y=e.get(T.envMap||$,W),ce=Y&&Y.mapping===lc?Y.image.height:null,le=y[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const O=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,J=O!==void 0?O.length:0;let Oe=0;H.morphAttributes.position!==void 0&&(Oe=1),H.morphAttributes.normal!==void 0&&(Oe=2),H.morphAttributes.color!==void 0&&(Oe=3);let Ge,Ie,ae,Se;if(le){const at=bi[le];Ge=at.vertexShader,Ie=at.fragmentShader}else Ge=T.vertexShader,Ie=T.fragmentShader,f.update(T),ae=f.getVertexShaderID(T),Se=f.getFragmentShaderID(T);const me=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),Qe=K.isInstancedMesh===!0,Je=K.isBatchedMesh===!0,Ut=!!T.map,ut=!!T.matcap,Mt=!!Y,Lt=!!T.aoMap,ft=!!T.lightMap,jt=!!T.bumpMap,Ft=!!T.normalMap,pn=!!T.displacementMap,V=!!T.emissiveMap,Ot=!!T.metalnessMap,dt=!!T.roughnessMap,Ct=T.anisotropy>0,De=T.clearcoat>0,zt=T.dispersion>0,L=T.iridescence>0,E=T.sheen>0,q=T.transmission>0,he=Ct&&!!T.anisotropyMap,ge=De&&!!T.clearcoatMap,Ee=De&&!!T.clearcoatNormalMap,Pe=De&&!!T.clearcoatRoughnessMap,ue=L&&!!T.iridescenceMap,pe=L&&!!T.iridescenceThicknessMap,Fe=E&&!!T.sheenColorMap,ke=E&&!!T.sheenRoughnessMap,Ae=!!T.specularMap,Me=!!T.specularColorMap,nt=!!T.specularIntensityMap,st=q&&!!T.transmissionMap,pt=q&&!!T.thicknessMap,z=!!T.gradientMap,Te=!!T.alphaMap,de=T.alphaTest>0,Be=!!T.alphaHash,Re=!!T.extensions;let ve=Di;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ve=r.toneMapping);const je={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:Ge,fragmentShader:Ie,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Je,batchingColor:Je&&K._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&K.instanceColor!==null,instancingMorph:Qe&&K.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ut,matcap:ut,envMap:Mt,envMapMode:Mt&&Y.mapping,envMapCubeUVHeight:ce,aoMap:Lt,lightMap:ft,bumpMap:jt,normalMap:Ft,displacementMap:pn,emissiveMap:V,normalMapObjectSpace:Ft&&T.normalMapType===hy,normalMapTangentSpace:Ft&&T.normalMapType===km,packedNormalMap:Ft&&T.normalMapType===km&&Lw(T.normalMap.format),metalnessMap:Ot,roughnessMap:dt,anisotropy:Ct,anisotropyMap:he,clearcoat:De,clearcoatMap:ge,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Pe,dispersion:zt,iridescence:L,iridescenceMap:ue,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Fe,sheenRoughnessMap:ke,specularMap:Ae,specularColorMap:Me,specularIntensityMap:nt,transmission:q,transmissionMap:st,thicknessMap:pt,gradientMap:z,opaque:T.transparent===!1&&T.blending===ea&&T.alphaToCoverage===!1,alphaMap:Te,alphaTest:de,alphaHash:Be,combine:T.combine,mapUv:Ut&&M(T.map.channel),aoMapUv:Lt&&M(T.aoMap.channel),lightMapUv:ft&&M(T.lightMap.channel),bumpMapUv:jt&&M(T.bumpMap.channel),normalMapUv:Ft&&M(T.normalMap.channel),displacementMapUv:pn&&M(T.displacementMap.channel),emissiveMapUv:V&&M(T.emissiveMap.channel),metalnessMapUv:Ot&&M(T.metalnessMap.channel),roughnessMapUv:dt&&M(T.roughnessMap.channel),anisotropyMapUv:he&&M(T.anisotropyMap.channel),clearcoatMapUv:ge&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ke&&M(T.sheenRoughnessMap.channel),specularMapUv:Ae&&M(T.specularMap.channel),specularColorMapUv:Me&&M(T.specularColorMap.channel),specularIntensityMapUv:nt&&M(T.specularIntensityMap.channel),transmissionMapUv:st&&M(T.transmissionMap.channel),thicknessMapUv:pt&&M(T.thicknessMap.channel),alphaMapUv:Te&&M(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ft||Ct),vertexNormals:!!H.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!H.attributes.uv&&(Ut||Te),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||H.attributes.normal===void 0&&Ft===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ue,skinning:K.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Oe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:Ut&&T.map.isVideoTexture===!0&&_t.getTransfer(T.map.colorSpace)===Pt,decodeVideoTextureEmissive:V&&T.emissiveMap.isVideoTexture===!0&&_t.getTransfer(T.emissiveMap.colorSpace)===Pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===er,flipSided:T.side===kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Re&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&T.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function x(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const j in T.defines)I.push(j),I.push(T.defines[j]);return T.isRawShaderMaterial===!1&&(S(I,T),R(I,T),I.push(r.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function S(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function R(T,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function b(T){const I=y[T.type];let j;if(I){const B=bi[I];j=Qy.clone(B.uniforms)}else j=T.uniforms;return j}function P(T,I){let j=v.get(I);return j!==void 0?++j.usedTimes:(j=new Cw(r,I,T,o),p.push(j),v.set(I,j)),j}function N(T){if(--T.usedTimes===0){const I=p.indexOf(T);p[I]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function D(T){f.remove(T)}function F(){f.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:b,acquireProgram:P,releaseProgram:N,releaseShaderCache:D,programs:p,dispose:F}}function Nw(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function Iw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Pg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Lg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function f(m,y,M,C,x,S){let R=r[e];return R===void 0?(R={id:m.id,object:m,geometry:y,material:M,materialVariant:u(m),groupOrder:C,renderOrder:m.renderOrder,z:x,group:S},r[e]=R):(R.id=m.id,R.object=m,R.geometry=y,R.material=M,R.materialVariant=u(m),R.groupOrder=C,R.renderOrder=m.renderOrder,R.z=x,R.group=S),e++,R}function h(m,y,M,C,x,S){const R=f(m,y,M,C,x,S);M.transmission>0?s.push(R):M.transparent===!0?o.push(R):t.push(R)}function p(m,y,M,C,x,S){const R=f(m,y,M,C,x,S);M.transmission>0?s.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function v(m,y){t.length>1&&t.sort(m||Iw),s.length>1&&s.sort(y||Pg),o.length>1&&o.sort(y||Pg)}function _(){for(let m=e,y=r.length;m<y;m++){const M=r[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:p,finish:_,sort:v}}function Uw(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Lg,r.set(s,[u])):o>=l.length?(u=new Lg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function Fw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Dt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function Ow(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Bw=0;function kw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zw(r){const e=new Fw,t=Ow(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const o=new ie,l=new on,u=new on;function f(p){let v=0,_=0,m=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let y=0,M=0,C=0,x=0,S=0,R=0,b=0,P=0,N=0,D=0,F=0;p.sort(kw);for(let I=0,j=p.length;I<j;I++){const B=p[I],K=B.color,oe=B.intensity,fe=B.distance;let H=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===fs?H=B.shadow.map.texture:H=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=K.r*oe,_+=K.g*oe,m+=K.b*oe;else if(B.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(B.sh.coefficients[$],oe);F++}else if(B.isDirectionalLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,Y=t.get(B);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=H,s.directionalShadowMatrix[y]=B.shadow.matrix,R++}s.directional[y]=$,y++}else if(B.isSpotLight){const $=e.get(B);$.position.setFromMatrixPosition(B.matrixWorld),$.color.copy(K).multiplyScalar(oe),$.distance=fe,$.coneCos=Math.cos(B.angle),$.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),$.decay=B.decay,s.spot[C]=$;const W=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,W.updateMatrices(B),B.castShadow&&D++),s.spotLightMatrix[C]=W.matrix,B.castShadow){const Y=t.get(B);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,s.spotShadow[C]=Y,s.spotShadowMap[C]=H,P++}C++}else if(B.isRectAreaLight){const $=e.get(B);$.color.copy(K).multiplyScalar(oe),$.halfWidth.set(B.width*.5,0,0),$.halfHeight.set(0,B.height*.5,0),s.rectArea[x]=$,x++}else if(B.isPointLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),$.distance=B.distance,$.decay=B.decay,B.castShadow){const W=B.shadow,Y=t.get(B);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,s.pointShadow[M]=Y,s.pointShadowMap[M]=H,s.pointShadowMatrix[M]=B.shadow.matrix,b++}s.point[M]=$,M++}else if(B.isHemisphereLight){const $=e.get(B);$.skyColor.copy(B.color).multiplyScalar(oe),$.groundColor.copy(B.groundColor).multiplyScalar(oe),s.hemi[S]=$,S++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=m;const T=s.hash;(T.directionalLength!==y||T.pointLength!==M||T.spotLength!==C||T.rectAreaLength!==x||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==b||T.numSpotShadows!==P||T.numSpotMaps!==N||T.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=x,s.point.length=M,s.hemi.length=S,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=P+N-D,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=F,T.directionalLength=y,T.pointLength=M,T.spotLength=C,T.rectAreaLength=x,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=b,T.numSpotShadows=P,T.numSpotMaps=N,T.numLightProbes=F,s.version=Bw++)}function h(p,v){let _=0,m=0,y=0,M=0,C=0;const x=v.matrixWorldInverse;for(let S=0,R=p.length;S<R;S++){const b=p[S];if(b.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),_++}else if(b.isSpotLight){const P=s.spot[y];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),y++}else if(b.isRectAreaLight){const P=s.rectArea[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),u.identity(),l.copy(b.matrixWorld),l.premultiply(x),u.extractRotation(l),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const P=s.point[m];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){const P=s.hemi[C];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(x),C++}}}return{setup:f,setupView:h,state:s}}function Dg(r){const e=new zw(r),t=[],s=[],o=[];function l(m){_.camera=m,t.length=0,s.length=0,o.length=0}function u(m){t.push(m)}function f(m){s.push(m)}function h(m){o.push(m)}function p(){e.setup(t)}function v(m){e.setupView(t,m)}const _={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function Hw(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Dg(r),e.set(o,[f])):l>=u.length?(f=new Dg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const Vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
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
}`,Ww=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],Xw=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Ng=new on,to=new ie,Lf=new ie;function jw(r,e,t){let s=new R0;const o=new Nt,l=new Nt,u=new Jt,f=new nE,h=new iE,p={},v=t.maxTextureSize,_={[kr]:kn,[kn]:kr,[er]:er},m=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Vw,fragmentShader:Gw}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const M=new ur;M.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Oi(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let S=this.type;this.render=function(D,F,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===WS&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xl);const I=r.getRenderTarget(),j=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),K=r.state;K.setBlending(nr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const oe=S!==this.type;oe&&F.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(H=>H.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,H=D.length;fe<H;fe++){const $=D[fe],W=$.shadow;if(W===void 0){rt("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Y=W.getFrameExtents();o.multiply(Y),l.copy(W.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Y.x),o.x=l.x*Y.x,W.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Y.y),o.y=l.y*Y.y,W.mapSize.y=l.y));const ce=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ce,W.map===null||oe===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===no){if($.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ni(o.x,o.y,{format:fs,type:ar,minFilter:rn,magFilter:rn,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new ra(o.x,o.y,Pi),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=or,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n}else $.isPointLight?(W.map=new U0(o.x),W.map.depthTexture=new Ky(o.x,Fi)):(W.map=new Ni(o.x,o.y),W.map.depthTexture=new ra(o.x,o.y,Fi)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=or,this.type===Xl?(W.map.depthTexture.compareFunction=ce?Vd:Hd,W.map.depthTexture.minFilter=rn,W.map.depthTexture.magFilter=rn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n);W.camera.updateProjectionMatrix()}const le=W.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<le;O++){if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,O),r.clear();else{O===0&&(r.setRenderTarget(W.map),r.clear());const J=W.getViewport(O);u.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),K.viewport(u)}if($.isPointLight){const J=W.camera,Oe=W.matrix,Ge=$.distance||J.far;Ge!==J.far&&(J.far=Ge,J.updateProjectionMatrix()),to.setFromMatrixPosition($.matrixWorld),J.position.copy(to),Lf.copy(J.position),Lf.add(Ww[O]),J.up.copy(Xw[O]),J.lookAt(Lf),J.updateMatrixWorld(),Oe.makeTranslation(-to.x,-to.y,-to.z),Ng.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ng,J.coordinateSystem,J.reversedDepth)}else W.updateMatrices($);s=W.getFrustum(),P(F,T,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===no&&R(W,T),W.needsUpdate=!1}S=this.type,x.needsUpdate=!1,r.setRenderTarget(I,j,B)};function R(D,F){const T=e.update(C);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ni(o.x,o.y,{format:fs,type:ar})),m.uniforms.shadow_pass.value=D.map.depthTexture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(F,null,T,m,C,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(F,null,T,y,C,null)}function b(D,F,T,I){let j=null;const B=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)j=B;else if(j=T.isPointLight===!0?h:f,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=j.uuid,oe=F.uuid;let fe=p[K];fe===void 0&&(fe={},p[K]=fe);let H=fe[oe];H===void 0&&(H=j.clone(),fe[oe]=H,F.addEventListener("dispose",N)),j=H}if(j.visible=F.visible,j.wireframe=F.wireframe,I===no?j.side=F.shadowSide!==null?F.shadowSide:F.side:j.side=F.shadowSide!==null?F.shadowSide:_[F.side],j.alphaMap=F.alphaMap,j.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,j.map=F.map,j.clipShadows=F.clipShadows,j.clippingPlanes=F.clippingPlanes,j.clipIntersection=F.clipIntersection,j.displacementMap=F.displacementMap,j.displacementScale=F.displacementScale,j.displacementBias=F.displacementBias,j.wireframeLinewidth=F.wireframeLinewidth,j.linewidth=F.linewidth,T.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const K=r.properties.get(j);K.light=T}return j}function P(D,F,T,I,j){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===no)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const oe=e.update(D),fe=D.material;if(Array.isArray(fe)){const H=oe.groups;for(let $=0,W=H.length;$<W;$++){const Y=H[$],ce=fe[Y.materialIndex];if(ce&&ce.visible){const le=b(D,ce,I,j);D.onBeforeShadow(r,D,F,T,oe,le,Y),r.renderBufferDirect(T,null,oe,le,D,Y),D.onAfterShadow(r,D,F,T,oe,le,Y)}}}else if(fe.visible){const H=b(D,fe,I,j);D.onBeforeShadow(r,D,F,T,oe,H,null),r.renderBufferDirect(T,null,oe,H,D,null),D.onAfterShadow(r,D,F,T,oe,H,null)}}const K=D.children;for(let oe=0,fe=K.length;oe<fe;oe++)P(K[oe],F,T,I,j)}function N(D){D.target.removeEventListener("dispose",N);for(const T in p){const I=p[T],j=D.target.uuid;j in I&&(I[j].dispose(),delete I[j])}}}function $w(r,e){function t(){let z=!1;const Te=new Jt;let de=null;const Be=new Jt(0,0,0,0);return{setMask:function(Re){de!==Re&&!z&&(r.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){z=Re},setClear:function(Re,ve,je,at,It){It===!0&&(Re*=at,ve*=at,je*=at),Te.set(Re,ve,je,at),Be.equals(Te)===!1&&(r.clearColor(Re,ve,je,at),Be.copy(Te))},reset:function(){z=!1,de=null,Be.set(-1,0,0,0)}}}function s(){let z=!1,Te=!1,de=null,Be=null,Re=null;return{setReversed:function(ve){if(Te!==ve){const je=e.get("EXT_clip_control");ve?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Te=ve;const at=Re;Re=null,this.setClear(at)}},getReversed:function(){return Te},setTest:function(ve){ve?me(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(ve){de!==ve&&!z&&(r.depthMask(ve),de=ve)},setFunc:function(ve){if(Te&&(ve=My[ve]),Be!==ve){switch(ve){case Ff:r.depthFunc(r.NEVER);break;case Of:r.depthFunc(r.ALWAYS);break;case Bf:r.depthFunc(r.LESS);break;case na:r.depthFunc(r.LEQUAL);break;case kf:r.depthFunc(r.EQUAL);break;case zf:r.depthFunc(r.GEQUAL);break;case Hf:r.depthFunc(r.GREATER);break;case Vf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=ve}},setLocked:function(ve){z=ve},setClear:function(ve){Re!==ve&&(Re=ve,Te&&(ve=1-ve),r.clearDepth(ve))},reset:function(){z=!1,de=null,Be=null,Re=null,Te=!1}}}function o(){let z=!1,Te=null,de=null,Be=null,Re=null,ve=null,je=null,at=null,It=null;return{setTest:function(wt){z||(wt?me(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(wt){Te!==wt&&!z&&(r.stencilMask(wt),Te=wt)},setFunc:function(wt,An,$n){(de!==wt||Be!==An||Re!==$n)&&(r.stencilFunc(wt,An,$n),de=wt,Be=An,Re=$n)},setOp:function(wt,An,$n){(ve!==wt||je!==An||at!==$n)&&(r.stencilOp(wt,An,$n),ve=wt,je=An,at=$n)},setLocked:function(wt){z=wt},setClear:function(wt){It!==wt&&(r.clearStencil(wt),It=wt)},reset:function(){z=!1,Te=null,de=null,Be=null,Re=null,ve=null,je=null,at=null,It=null}}}const l=new t,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let v={},_={},m={},y=new WeakMap,M=[],C=null,x=!1,S=null,R=null,b=null,P=null,N=null,D=null,F=null,T=new Dt(0,0,0),I=0,j=!1,B=null,K=null,oe=null,fe=null,H=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ce)[1]),W=Y>=1):ce.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),W=Y>=2);let le=null,O={};const J=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),Ge=new Jt().fromArray(J),Ie=new Jt().fromArray(Oe);function ae(z,Te,de,Be){const Re=new Uint8Array(4),ve=r.createTexture();r.bindTexture(z,ve),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<de;je++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(Te+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return ve}const Se={};Se[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),me(r.DEPTH_TEST),u.setFunc(na),jt(!1),Ft(Um),me(r.CULL_FACE),Lt(nr);function me(z){v[z]!==!0&&(r.enable(z),v[z]=!0)}function Ue(z){v[z]!==!1&&(r.disable(z),v[z]=!1)}function Qe(z,Te){return m[z]!==Te?(r.bindFramebuffer(z,Te),m[z]=Te,z===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Te),z===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Je(z,Te){let de=M,Be=!1;if(z){de=y.get(Te),de===void 0&&(de=[],y.set(Te,de));const Re=z.textures;if(de.length!==Re.length||de[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,je=Re.length;ve<je;ve++)de[ve]=r.COLOR_ATTACHMENT0+ve;de.length=Re.length,Be=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,Be=!0);Be&&r.drawBuffers(de)}function Ut(z){return C!==z?(r.useProgram(z),C=z,!0):!1}const ut={[as]:r.FUNC_ADD,[jS]:r.FUNC_SUBTRACT,[$S]:r.FUNC_REVERSE_SUBTRACT};ut[YS]=r.MIN,ut[qS]=r.MAX;const Mt={[KS]:r.ZERO,[ZS]:r.ONE,[QS]:r.SRC_COLOR,[If]:r.SRC_ALPHA,[ry]:r.SRC_ALPHA_SATURATE,[ny]:r.DST_COLOR,[ey]:r.DST_ALPHA,[JS]:r.ONE_MINUS_SRC_COLOR,[Uf]:r.ONE_MINUS_SRC_ALPHA,[iy]:r.ONE_MINUS_DST_COLOR,[ty]:r.ONE_MINUS_DST_ALPHA,[sy]:r.CONSTANT_COLOR,[ay]:r.ONE_MINUS_CONSTANT_COLOR,[oy]:r.CONSTANT_ALPHA,[ly]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(z,Te,de,Be,Re,ve,je,at,It,wt){if(z===nr){x===!0&&(Ue(r.BLEND),x=!1);return}if(x===!1&&(me(r.BLEND),x=!0),z!==XS){if(z!==S||wt!==j){if((R!==as||N!==as)&&(r.blendEquation(r.FUNC_ADD),R=as,N=as),wt)switch(z){case ea:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fm:r.blendFunc(r.ONE,r.ONE);break;case Om:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Et("WebGLState: Invalid blending: ",z);break}else switch(z){case ea:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Om:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bm:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",z);break}b=null,P=null,D=null,F=null,T.set(0,0,0),I=0,S=z,j=wt}return}Re=Re||Te,ve=ve||de,je=je||Be,(Te!==R||Re!==N)&&(r.blendEquationSeparate(ut[Te],ut[Re]),R=Te,N=Re),(de!==b||Be!==P||ve!==D||je!==F)&&(r.blendFuncSeparate(Mt[de],Mt[Be],Mt[ve],Mt[je]),b=de,P=Be,D=ve,F=je),(at.equals(T)===!1||It!==I)&&(r.blendColor(at.r,at.g,at.b,It),T.copy(at),I=It),S=z,j=!1}function ft(z,Te){z.side===er?Ue(r.CULL_FACE):me(r.CULL_FACE);let de=z.side===kn;Te&&(de=!de),jt(de),z.blending===ea&&z.transparent===!1?Lt(nr):Lt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const Be=z.stencilWrite;f.setTest(Be),Be&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),V(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function jt(z){B!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),B=z)}function Ft(z){z!==VS?(me(r.CULL_FACE),z!==K&&(z===Um?r.cullFace(r.BACK):z===GS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),K=z}function pn(z){z!==oe&&(W&&r.lineWidth(z),oe=z)}function V(z,Te,de){z?(me(r.POLYGON_OFFSET_FILL),(fe!==Te||H!==de)&&(fe=Te,H=de,u.getReversed()&&(Te=-Te),r.polygonOffset(Te,de))):Ue(r.POLYGON_OFFSET_FILL)}function Ot(z){z?me(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function dt(z){z===void 0&&(z=r.TEXTURE0+$-1),le!==z&&(r.activeTexture(z),le=z)}function Ct(z,Te,de){de===void 0&&(le===null?de=r.TEXTURE0+$-1:de=le);let Be=O[de];Be===void 0&&(Be={type:void 0,texture:void 0},O[de]=Be),(Be.type!==z||Be.texture!==Te)&&(le!==de&&(r.activeTexture(de),le=de),r.bindTexture(z,Te||Se[z]),Be.type=z,Be.texture=Te)}function De(){const z=O[le];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function zt(){try{r.compressedTexImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function E(){try{r.texSubImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function q(){try{r.texSubImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function Ee(){try{r.texStorage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function Pe(){try{r.texStorage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function ue(){try{r.texImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function pe(){try{r.texImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function Fe(z){return _[z]!==void 0?_[z]:r.getParameter(z)}function ke(z,Te){_[z]!==Te&&(r.pixelStorei(z,Te),_[z]=Te)}function Ae(z){Ge.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Ge.copy(z))}function Me(z){Ie.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Ie.copy(z))}function nt(z,Te){let de=p.get(Te);de===void 0&&(de=new WeakMap,p.set(Te,de));let Be=de.get(z);Be===void 0&&(Be=r.getUniformBlockIndex(Te,z.name),de.set(z,Be))}function st(z,Te){const Be=p.get(Te).get(z);h.get(Te)!==Be&&(r.uniformBlockBinding(Te,Be,z.__bindingPointIndex),h.set(Te,Be))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},le=null,O={},m={},y=new WeakMap,M=[],C=null,x=!1,S=null,R=null,b=null,P=null,N=null,D=null,F=null,T=new Dt(0,0,0),I=0,j=!1,B=null,K=null,oe=null,fe=null,H=null,Ge.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:me,disable:Ue,bindFramebuffer:Qe,drawBuffers:Je,useProgram:Ut,setBlending:Lt,setMaterial:ft,setFlipSided:jt,setCullFace:Ft,setLineWidth:pn,setPolygonOffset:V,setScissorTest:Ot,activeTexture:dt,bindTexture:Ct,unbindTexture:De,compressedTexImage2D:zt,compressedTexImage3D:L,texImage2D:ue,texImage3D:pe,pixelStorei:ke,getParameter:Fe,updateUBOMapping:nt,uniformBlockBinding:st,texStorage2D:Ee,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:q,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Ae,viewport:Me,reset:pt}}function Yw(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,v=new WeakMap,_=new Set;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(L,E){return M?new OffscreenCanvas(L,E):oo("canvas")}function x(L,E,q){let he=1;const ge=zt(L);if((ge.width>q||ge.height>q)&&(he=q/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ee=Math.floor(he*ge.width),Pe=Math.floor(he*ge.height);m===void 0&&(m=C(Ee,Pe));const ue=E?C(Ee,Pe):m;return ue.width=Ee,ue.height=Pe,ue.getContext("2d").drawImage(L,0,0,Ee,Pe),rt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ee+"x"+Pe+")."),ue}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function S(L){return L.generateMipmaps}function R(L){r.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(L,E,q,he,ge,Ee=!1){if(L!==null){if(r[L]!==void 0)return r[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Pe;he&&(Pe=e.get("EXT_texture_norm16"),Pe||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=E;if(E===r.RED&&(q===r.FLOAT&&(ue=r.R32F),q===r.HALF_FLOAT&&(ue=r.R16F),q===r.UNSIGNED_BYTE&&(ue=r.R8),q===r.UNSIGNED_SHORT&&Pe&&(ue=Pe.R16_EXT),q===r.SHORT&&Pe&&(ue=Pe.R16_SNORM_EXT)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ue=r.R8UI),q===r.UNSIGNED_SHORT&&(ue=r.R16UI),q===r.UNSIGNED_INT&&(ue=r.R32UI),q===r.BYTE&&(ue=r.R8I),q===r.SHORT&&(ue=r.R16I),q===r.INT&&(ue=r.R32I)),E===r.RG&&(q===r.FLOAT&&(ue=r.RG32F),q===r.HALF_FLOAT&&(ue=r.RG16F),q===r.UNSIGNED_BYTE&&(ue=r.RG8),q===r.UNSIGNED_SHORT&&Pe&&(ue=Pe.RG16_EXT),q===r.SHORT&&Pe&&(ue=Pe.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ue=r.RG8UI),q===r.UNSIGNED_SHORT&&(ue=r.RG16UI),q===r.UNSIGNED_INT&&(ue=r.RG32UI),q===r.BYTE&&(ue=r.RG8I),q===r.SHORT&&(ue=r.RG16I),q===r.INT&&(ue=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),q===r.UNSIGNED_INT&&(ue=r.RGB32UI),q===r.BYTE&&(ue=r.RGB8I),q===r.SHORT&&(ue=r.RGB16I),q===r.INT&&(ue=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),q===r.UNSIGNED_INT&&(ue=r.RGBA32UI),q===r.BYTE&&(ue=r.RGBA8I),q===r.SHORT&&(ue=r.RGBA16I),q===r.INT&&(ue=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGB16_EXT),q===r.SHORT&&Pe&&(ue=Pe.RGB16_SNORM_EXT),q===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),E===r.RGBA){const pe=Ee?nc:_t.getTransfer(ge);q===r.FLOAT&&(ue=r.RGBA32F),q===r.HALF_FLOAT&&(ue=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ue=pe===Pt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGBA16_EXT),q===r.SHORT&&Pe&&(ue=Pe.RGBA16_SNORM_EXT),q===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function N(L,E){let q;return L?E===null||E===Fi||E===ao?q=r.DEPTH24_STENCIL8:E===Pi?q=r.DEPTH32F_STENCIL8:E===so&&(q=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Fi||E===ao?q=r.DEPTH_COMPONENT24:E===Pi?q=r.DEPTH_COMPONENT32F:E===so&&(q=r.DEPTH_COMPONENT16),q}function D(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==_n&&L.minFilter!==rn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),I(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&_.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),B(E)}function I(L){const E=s.get(L);if(E.__webglInit===void 0)return;const q=L.source,he=y.get(q);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&j(L),Object.keys(he).length===0&&y.delete(q)}s.remove(L)}function j(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const q=L.source,he=y.get(q);delete he[E.__cacheKey],u.memory.textures--}function B(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)r.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else r.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)r.deleteFramebuffer(E.__webglFramebuffer[he]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=L.textures;for(let he=0,ge=q.length;he<ge;he++){const Ee=s.get(q[he]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),u.memory.textures--),s.remove(q[he])}s.remove(L)}let K=0;function oe(){K=0}function fe(){return K}function H(L){K=L}function $(){const L=K;return L>=o.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),K+=1,L}function W(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Y(L,E){const q=s.get(L);if(L.isVideoTexture&&Ct(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const he=L.image;if(he===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function ce(L,E){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Ue(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function le(L,E){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Ue(q,L,E);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function O(L,E){const q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){Qe(q,L,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const J={[Gf]:r.REPEAT,[tr]:r.CLAMP_TO_EDGE,[Wf]:r.MIRRORED_REPEAT},Oe={[_n]:r.NEAREST,[fy]:r.NEAREST_MIPMAP_NEAREST,[Sl]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[Ju]:r.LINEAR_MIPMAP_NEAREST,[ls]:r.LINEAR_MIPMAP_LINEAR},Ge={[py]:r.NEVER,[xy]:r.ALWAYS,[my]:r.LESS,[Hd]:r.LEQUAL,[gy]:r.EQUAL,[Vd]:r.GEQUAL,[vy]:r.GREATER,[_y]:r.NOTEQUAL};function Ie(L,E){if(E.type===Pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===rn||E.magFilter===Ju||E.magFilter===Sl||E.magFilter===ls||E.minFilter===rn||E.minFilter===Ju||E.minFilter===Sl||E.minFilter===ls)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,J[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Oe[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Oe[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_n||E.minFilter!==Sl&&E.minFilter!==ls||E.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ae(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const he=E.source;let ge=y.get(he);ge===void 0&&(ge={},y.set(he,ge));const Ee=W(E);if(Ee!==L.__cacheKey){ge[Ee]===void 0&&(ge[Ee]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,q=!0),ge[Ee].usedTimes++;const Pe=ge[L.__cacheKey];Pe!==void 0&&(ge[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&j(E)),L.__cacheKey=Ee,L.__webglTexture=ge[Ee].texture}return q}function Se(L,E,q){return Math.floor(Math.floor(L/q)/E)}function me(L,E,q,he){const Ee=L.updateRanges;if(Ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,he,E.data);else{Ee.sort((ke,Ae)=>ke.start-Ae.start);let Pe=0;for(let ke=1;ke<Ee.length;ke++){const Ae=Ee[Pe],Me=Ee[ke],nt=Ae.start+Ae.count,st=Se(Me.start,E.width,4),pt=Se(Ae.start,E.width,4);Me.start<=nt+1&&st===pt&&Se(Me.start+Me.count-1,E.width,4)===st?Ae.count=Math.max(Ae.count,Me.start+Me.count-Ae.start):(++Pe,Ee[Pe]=Me)}Ee.length=Pe+1;const ue=t.getParameter(r.UNPACK_ROW_LENGTH),pe=t.getParameter(r.UNPACK_SKIP_PIXELS),Fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let ke=0,Ae=Ee.length;ke<Ae;ke++){const Me=Ee[ke],nt=Math.floor(Me.start/4),st=Math.ceil(Me.count/4),pt=nt%E.width,z=Math.floor(nt/E.width),Te=st,de=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,pt,z,Te,de,q,he,E.data)}L.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ue),t.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Fe)}}function Ue(L,E,q){let he=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=r.TEXTURE_3D);const ge=ae(L,E),Ee=E.source;t.bindTexture(he,L.__webglTexture,r.TEXTURE0+q);const Pe=s.get(Ee);if(Ee.version!==Pe.__version||ge===!0){if(t.activeTexture(r.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const de=_t.getPrimaries(_t.workingColorSpace),Be=E.colorSpace===Fr?null:_t.getPrimaries(E.colorSpace),Re=E.colorSpace===Fr||de===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=x(E.image,!1,o.maxTextureSize);pe=De(E,pe);const Fe=l.convert(E.format,E.colorSpace),ke=l.convert(E.type);let Ae=P(E.internalFormat,Fe,ke,E.normalized,E.colorSpace,E.isVideoTexture);Ie(he,E);let Me;const nt=E.mipmaps,st=E.isVideoTexture!==!0,pt=Pe.__version===void 0||ge===!0,z=Ee.dataReady,Te=D(E,pe);if(E.isDepthTexture)Ae=N(E.format===cs,E.type),pt&&(st?t.texStorage2D(r.TEXTURE_2D,1,Ae,pe.width,pe.height):t.texImage2D(r.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Fe,ke,null));else if(E.isDataTexture)if(nt.length>0){st&&pt&&t.texStorage2D(r.TEXTURE_2D,Te,Ae,nt[0].width,nt[0].height);for(let de=0,Be=nt.length;de<Be;de++)Me=nt[de],st?z&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Me.width,Me.height,Fe,ke,Me.data):t.texImage2D(r.TEXTURE_2D,de,Ae,Me.width,Me.height,0,Fe,ke,Me.data);E.generateMipmaps=!1}else st?(pt&&t.texStorage2D(r.TEXTURE_2D,Te,Ae,pe.width,pe.height),z&&me(E,pe,Fe,ke)):t.texImage2D(r.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Fe,ke,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ae,nt[0].width,nt[0].height,pe.depth);for(let de=0,Be=nt.length;de<Be;de++)if(Me=nt[de],E.format!==xi)if(Fe!==null)if(st){if(z)if(E.layerUpdates.size>0){const Re=ug(Me.width,Me.height,E.format,E.type);for(const ve of E.layerUpdates){const je=Me.data.subarray(ve*Re/Me.data.BYTES_PER_ELEMENT,(ve+1)*Re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,ve,Me.width,Me.height,1,Fe,je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,pe.depth,Fe,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,Ae,Me.width,Me.height,pe.depth,0,Me.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,pe.depth,Fe,ke,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,Ae,Me.width,Me.height,pe.depth,0,Fe,ke,Me.data)}else{st&&pt&&t.texStorage2D(r.TEXTURE_2D,Te,Ae,nt[0].width,nt[0].height);for(let de=0,Be=nt.length;de<Be;de++)Me=nt[de],E.format!==xi?Fe!==null?st?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Me.width,Me.height,Fe,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,de,Ae,Me.width,Me.height,0,Me.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?z&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Me.width,Me.height,Fe,ke,Me.data):t.texImage2D(r.TEXTURE_2D,de,Ae,Me.width,Me.height,0,Fe,ke,Me.data)}else if(E.isDataArrayTexture)if(st){if(pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ae,pe.width,pe.height,pe.depth),z)if(E.layerUpdates.size>0){const de=ug(pe.width,pe.height,E.format,E.type);for(const Be of E.layerUpdates){const Re=pe.data.subarray(Be*de/pe.data.BYTES_PER_ELEMENT,(Be+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Be,pe.width,pe.height,1,Fe,ke,Re)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Fe,ke,pe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,pe.width,pe.height,pe.depth,0,Fe,ke,pe.data);else if(E.isData3DTexture)st?(pt&&t.texStorage3D(r.TEXTURE_3D,Te,Ae,pe.width,pe.height,pe.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Fe,ke,pe.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,pe.width,pe.height,pe.depth,0,Fe,ke,pe.data);else if(E.isFramebufferTexture){if(pt)if(st)t.texStorage2D(r.TEXTURE_2D,Te,Ae,pe.width,pe.height);else{let de=pe.width,Be=pe.height;for(let Re=0;Re<Te;Re++)t.texImage2D(r.TEXTURE_2D,Re,Ae,de,Be,0,Fe,ke,null),de>>=1,Be>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const de=r.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),pe.parentNode!==de){de.appendChild(pe),_.add(E),de.onpaint=at=>{const It=at.changedElements;for(const wt of _)It.includes(wt.image)&&(wt.needsUpdate=!0)},de.requestPaint();return}const Be=0,Re=r.RGBA,ve=r.RGBA,je=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Be,Re,ve,je,pe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(st&&pt){const de=zt(nt[0]);t.texStorage2D(r.TEXTURE_2D,Te,Ae,de.width,de.height)}for(let de=0,Be=nt.length;de<Be;de++)Me=nt[de],st?z&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Fe,ke,Me):t.texImage2D(r.TEXTURE_2D,de,Ae,Fe,ke,Me);E.generateMipmaps=!1}else if(st){if(pt){const de=zt(pe);t.texStorage2D(r.TEXTURE_2D,Te,Ae,de.width,de.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,ke,pe)}else t.texImage2D(r.TEXTURE_2D,0,Ae,Fe,ke,pe);S(E)&&R(he),Pe.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Qe(L,E,q){if(E.image.length!==6)return;const he=ae(L,E),ge=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+q);const Ee=s.get(ge);if(ge.version!==Ee.__version||he===!0){t.activeTexture(r.TEXTURE0+q);const Pe=_t.getPrimaries(_t.workingColorSpace),ue=E.colorSpace===Fr?null:_t.getPrimaries(E.colorSpace),pe=E.colorSpace===Fr||Pe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let ve=0;ve<6;ve++)!Fe&&!ke?Ae[ve]=x(E.image[ve],!0,o.maxCubemapSize):Ae[ve]=ke?E.image[ve].image:E.image[ve],Ae[ve]=De(E,Ae[ve]);const Me=Ae[0],nt=l.convert(E.format,E.colorSpace),st=l.convert(E.type),pt=P(E.internalFormat,nt,st,E.normalized,E.colorSpace),z=E.isVideoTexture!==!0,Te=Ee.__version===void 0||he===!0,de=ge.dataReady;let Be=D(E,Me);Ie(r.TEXTURE_CUBE_MAP,E);let Re;if(Fe){z&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,pt,Me.width,Me.height);for(let ve=0;ve<6;ve++){Re=Ae[ve].mipmaps;for(let je=0;je<Re.length;je++){const at=Re[je];E.format!==xi?nt!==null?z?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,at.width,at.height,nt,at.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,pt,at.width,at.height,0,at.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,at.width,at.height,nt,st,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,pt,at.width,at.height,0,nt,st,at.data)}}}else{if(Re=E.mipmaps,z&&Te){Re.length>0&&Be++;const ve=zt(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,pt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(ke){z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ae[ve].width,Ae[ve].height,nt,st,Ae[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pt,Ae[ve].width,Ae[ve].height,0,nt,st,Ae[ve].data);for(let je=0;je<Re.length;je++){const It=Re[je].image[ve].image;z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,It.width,It.height,nt,st,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,pt,It.width,It.height,0,nt,st,It.data)}}else{z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,nt,st,Ae[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pt,nt,st,Ae[ve]);for(let je=0;je<Re.length;je++){const at=Re[je];z?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,nt,st,at.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,pt,nt,st,at.image[ve])}}}S(E)&&R(r.TEXTURE_CUBE_MAP),Ee.__version=ge.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Je(L,E,q,he,ge,Ee){const Pe=l.convert(q.format,q.colorSpace),ue=l.convert(q.type),pe=P(q.internalFormat,Pe,ue,q.normalized,q.colorSpace),Fe=s.get(E),ke=s.get(q);if(ke.__renderTarget=E,!Fe.__hasExternalTextures){const Ae=Math.max(1,E.width>>Ee),Me=Math.max(1,E.height>>Ee);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ee,pe,Ae,Me,E.depth,0,Pe,ue,null):t.texImage2D(ge,Ee,pe,Ae,Me,0,Pe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),dt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ge,ke.__webglTexture,0,Ot(E)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ge,ke.__webglTexture,Ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(L,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Ee=N(E.stencilBuffer,ge),Pe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;dt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(E),Ee,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(E),Ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,L)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const Ee=he[ge],Pe=l.convert(Ee.format,Ee.colorSpace),ue=l.convert(Ee.type),pe=P(Ee.internalFormat,Pe,ue,Ee.normalized,Ee.colorSpace);dt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(E),pe,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(E),pe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(L,E,q){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,E.depthTexture);const Fe=l.convert(E.depthTexture.format),ke=l.convert(E.depthTexture.type);let Ae;E.depthTexture.format===or?Ae=r.DEPTH_COMPONENT24:E.depthTexture.format===cs&&(Ae=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ae,E.width,E.height,0,Fe,ke,null)}}else Y(E.depthTexture,0);const Ee=ge.__webglTexture,Pe=Ot(E),ue=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,pe=E.depthTexture.format===cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===or)dt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ue,Ee,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ue,Ee,0);else if(E.depthTexture.format===cs)dt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ue,Ee,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ue,Ee,0);else throw new Error("Unknown depthTexture format")}function Mt(L){const E=s.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)ut(E.__webglFramebuffer[he],L,he);else{const he=L.texture.mipmaps;he&&he.length>0?ut(E.__webglFramebuffer[0],L,0):ut(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=r.createRenderbuffer(),Ut(E.__webglDepthbuffer[he],L,!1);else{const ge=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ee)}}else{const he=L.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ut(E.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(L,E,q){const he=s.get(L);E!==void 0&&Je(he.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Mt(L)}function ft(L){const E=L.texture,q=s.get(L),he=s.get(E);L.addEventListener("dispose",T);const ge=L.textures,Ee=L.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=E.version,u.memory.textures++),Ee){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let pe=0;pe<E.mipmaps.length;pe++)q.__webglFramebuffer[ue][pe]=r.createFramebuffer()}else q.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)q.__webglFramebuffer[ue]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let ue=0,pe=ge.length;ue<pe;ue++){const Fe=s.get(ge[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&dt(L)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ue=0;ue<ge.length;ue++){const pe=ge[ue];q.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ue]);const Fe=l.convert(pe.format,pe.colorSpace),ke=l.convert(pe.type),Ae=P(pe.internalFormat,Fe,ke,pe.normalized,pe.colorSpace,L.isXRRenderTarget===!0),Me=Ot(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,Ae,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,q.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Je(q.__webglFramebuffer[ue][pe],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else Je(q.__webglFramebuffer[ue],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(E)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ue=0,pe=ge.length;ue<pe;ue++){const Fe=ge[ue],ke=s.get(Fe);let Ae=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ke.__webglTexture),Ie(Ae,Fe),Je(q.__webglFramebuffer,L,Fe,r.COLOR_ATTACHMENT0+ue,Ae,0),S(Fe)&&R(Ae)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,he.__webglTexture),Ie(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Je(q.__webglFramebuffer[pe],L,E,r.COLOR_ATTACHMENT0,ue,pe);else Je(q.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,ue,0);S(E)&&R(ue),t.unbindTexture()}L.depthBuffer&&Mt(L)}function jt(L){const E=L.textures;for(let q=0,he=E.length;q<he;q++){const ge=E[q];if(S(ge)){const Ee=b(L),Pe=s.get(ge).__webglTexture;t.bindTexture(Ee,Pe),R(Ee),t.unbindTexture()}}}const Ft=[],pn=[];function V(L){if(L.samples>0){if(dt(L)===!1){const E=L.textures,q=L.width,he=L.height;let ge=r.COLOR_BUFFER_BIT;const Ee=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(L),ue=E.length>1;if(ue)for(let Fe=0;Fe<E.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const pe=L.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const ke=s.get(E[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ke,0)}r.blitFramebuffer(0,0,q,he,0,0,q,he,ge,r.NEAREST),h===!0&&(Ft.length=0,pn.length=0,Ft.push(r.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ft.push(Ee),pn.push(Ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Fe=0;Fe<E.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const ke=s.get(E[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ot(L){return Math.min(o.maxSamples,L.samples)}function dt(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ct(L){const E=u.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function De(L,E){const q=L.colorSpace,he=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==tc&&q!==Fr&&(_t.getTransfer(q)===Pt?(he!==xi||ge!==ni)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",q)),E}function zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=oe,this.getTextureUnits=fe,this.setTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=O,this.rebindTextures=Lt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qw(r,e){function t(s,o=Fr){let l;const u=_t.getTransfer(o);if(s===ni)return r.UNSIGNED_BYTE;if(s===Fd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Od)return r.UNSIGNED_SHORT_5_5_5_1;if(s===g0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===v0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===p0)return r.BYTE;if(s===m0)return r.SHORT;if(s===so)return r.UNSIGNED_SHORT;if(s===Ud)return r.INT;if(s===Fi)return r.UNSIGNED_INT;if(s===Pi)return r.FLOAT;if(s===ar)return r.HALF_FLOAT;if(s===_0)return r.ALPHA;if(s===x0)return r.RGB;if(s===xi)return r.RGBA;if(s===or)return r.DEPTH_COMPONENT;if(s===cs)return r.DEPTH_STENCIL;if(s===S0)return r.RED;if(s===Bd)return r.RED_INTEGER;if(s===fs)return r.RG;if(s===kd)return r.RG_INTEGER;if(s===zd)return r.RGBA_INTEGER;if(s===jl||s===$l||s===Yl||s===ql)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$l)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xf||s===jf||s===$f||s===Yf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Xf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$f)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qf||s===Kf||s===Zf||s===Qf||s===Jf||s===Jl||s===ed)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===qf||s===Kf)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Zf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Qf)return l.COMPRESSED_R11_EAC;if(s===Jf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Jl)return l.COMPRESSED_RG11_EAC;if(s===ed)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===td||s===nd||s===id||s===rd||s===sd||s===ad||s===od||s===ld||s===cd||s===ud||s===fd||s===dd||s===hd||s===pd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===td)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===id)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ad)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===od)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ld)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ud)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===md||s===gd||s===vd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===md)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_d||s===xd||s===ec||s===Sd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===_d)return l.COMPRESSED_RED_RGTC1_EXT;if(s===xd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ec)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ao?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const Kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zw=`
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

}`;class Qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new P0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new ii({vertexShader:Kw,fragmentShader:Zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oi(new sa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jw extends hs{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,_=null,m=null,y=null,M=null;const C=typeof XRWebGLBinding<"u",x=new Qw,S={},R=t.getContextAttributes();let b=null,P=null;const N=[],D=[],F=new Nt;let T=null;const I=new vi;I.viewport=new Jt;const j=new vi;j.viewport=new Jt;const B=[I,j],K=new cE;let oe=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Se=N[ae];return Se===void 0&&(Se=new lf,N[ae]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ae){let Se=N[ae];return Se===void 0&&(Se=new lf,N[ae]=Se),Se.getGripSpace()},this.getHand=function(ae){let Se=N[ae];return Se===void 0&&(Se=new lf,N[ae]=Se),Se.getHandSpace()};function H(ae){const Se=D.indexOf(ae.inputSource);if(Se===-1)return;const me=N[Se];me!==void 0&&(me.update(ae.inputSource,ae.frame,p||u),me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function $(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",W);for(let ae=0;ae<N.length;ae++){const Se=D[ae];Se!==null&&(D[ae]=null,N[ae].disconnect(Se))}oe=null,fe=null,x.reset();for(const ae in S)delete S[ae];e.setRenderTarget(b),y=null,m=null,_=null,o=null,P=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,s.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,s.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",$),o.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,Qe=null;R.depth&&(Qe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=R.stencil?cs:or,Ue=R.stencil?ao:Fi);const Je={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:l};_=this.getBinding(),m=_.createProjectionLayer(Je),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new Ni(m.textureWidth,m.textureHeight,{format:xi,type:ni,depthTexture:new ra(m.textureWidth,m.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Ni(y.framebufferWidth,y.framebufferHeight,{format:xi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ie.setContext(o),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(ae){for(let Se=0;Se<ae.removed.length;Se++){const me=ae.removed[Se],Ue=D.indexOf(me);Ue>=0&&(D[Ue]=null,N[Ue].disconnect(me))}for(let Se=0;Se<ae.added.length;Se++){const me=ae.added[Se];let Ue=D.indexOf(me);if(Ue===-1){for(let Je=0;Je<N.length;Je++)if(Je>=D.length){D.push(me),Ue=Je;break}else if(D[Je]===null){D[Je]=me,Ue=Je;break}if(Ue===-1)break}const Qe=N[Ue];Qe&&Qe.connect(me)}}const Y=new ie,ce=new ie;function le(ae,Se,me){Y.setFromMatrixPosition(Se.matrixWorld),ce.setFromMatrixPosition(me.matrixWorld);const Ue=Y.distanceTo(ce),Qe=Se.projectionMatrix.elements,Je=me.projectionMatrix.elements,Ut=Qe[14]/(Qe[10]-1),ut=Qe[14]/(Qe[10]+1),Mt=(Qe[9]+1)/Qe[5],Lt=(Qe[9]-1)/Qe[5],ft=(Qe[8]-1)/Qe[0],jt=(Je[8]+1)/Je[0],Ft=Ut*ft,pn=Ut*jt,V=Ue/(-ft+jt),Ot=V*-ft;if(Se.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ot),ae.translateZ(V),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Qe[10]===-1)ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const dt=Ut+V,Ct=ut+V,De=Ft-Ot,zt=pn+(Ue-Ot),L=Mt*ut/Ct*dt,E=Lt*ut/Ct*dt;ae.projectionMatrix.makePerspective(De,zt,L,E,dt,Ct),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,Se){Se===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Se.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Se=ae.near,me=ae.far;x.texture!==null&&(x.depthNear>0&&(Se=x.depthNear),x.depthFar>0&&(me=x.depthFar)),K.near=j.near=I.near=Se,K.far=j.far=I.far=me,(oe!==K.near||fe!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),oe=K.near,fe=K.far),K.layers.mask=ae.layers.mask|6,I.layers.mask=K.layers.mask&-5,j.layers.mask=K.layers.mask&-3;const Ue=ae.parent,Qe=K.cameras;O(K,Ue);for(let Je=0;Je<Qe.length;Je++)O(Qe[Je],Ue);Qe.length===2?le(K,I,j):K.projectionMatrix.copy(I.projectionMatrix),J(ae,K,Ue)};function J(ae,Se,me){me===null?ae.matrix.copy(Se.matrixWorld):(ae.matrix.copy(me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Se.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ed*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(ae){h=ae,m!==null&&(m.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(K)},this.getCameraTexture=function(ae){return S[ae]};let Oe=null;function Ge(ae,Se){if(v=Se.getViewerPose(p||u),M=Se,v!==null){const me=v.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Ue=!1;me.length!==K.cameras.length&&(K.cameras.length=0,Ue=!0);for(let ut=0;ut<me.length;ut++){const Mt=me[ut];let Lt=null;if(y!==null)Lt=y.getViewport(Mt);else{const jt=_.getViewSubImage(m,Mt);Lt=jt.viewport,ut===0&&(e.setRenderTargetTextures(P,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(P))}let ft=B[ut];ft===void 0&&(ft=new vi,ft.layers.enable(ut),ft.viewport=new Jt,B[ut]=ft),ft.matrix.fromArray(Mt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Mt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ut===0&&(K.matrix.copy(ft.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ue===!0&&K.cameras.push(ft)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const ut=_.getDepthInformation(me[0]);ut&&ut.isValid&&ut.texture&&x.init(ut,o.renderState)}if(Qe&&Qe.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let ut=0;ut<me.length;ut++){const Mt=me[ut].camera;if(Mt){let Lt=S[Mt];Lt||(Lt=new P0,S[Mt]=Lt);const ft=_.getCameraImage(Mt);Lt.sourceTexture=ft}}}}for(let me=0;me<N.length;me++){const Ue=D[me],Qe=N[me];Ue!==null&&Qe!==void 0&&Qe.update(Ue,Se,p||u)}Oe&&Oe(ae,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),M=null}const Ie=new N0;Ie.setAnimationLoop(Ge),this.setAnimationLoop=function(ae){Oe=ae},this.dispose=function(){}}}const eT=new on,z0=new ct;z0.set(-1,0,0,0,1,0,0,0,1);function tT(r,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function s(x,S){S.color.getRGB(x.fogColor.value,L0(r)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,R,b,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),_(x,S)):S.isMeshPhongMaterial?(l(x,S),v(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),m(x,S),S.isMeshPhysicalMaterial&&y(x,S,P)):S.isMeshMatcapMaterial?(l(x,S),M(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),C(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?h(x,S,R,b):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===kn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===kn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const R=e.get(S),b=R.envMap,P=R.envMapRotation;b&&(x.envMap.value=b,x.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(P)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(z0),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function h(x,S,R,b){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*R,x.scale.value=b*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function v(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function m(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,R){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,S){S.matcap&&(x.matcap.value=S.matcap)}function C(x,S){const R=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function nT(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,b){const P=b.program;s.uniformBlockBinding(R,P)}function p(R,b){let P=o[R.id];P===void 0&&(M(R),P=v(R),o[R.id]=P,R.addEventListener("dispose",x));const N=b.program;s.updateUBOMapping(R,N);const D=e.render.frame;l[R.id]!==D&&(m(R),l[R.id]=D)}function v(R){const b=_();R.__bindingPointIndex=b;const P=r.createBuffer(),N=R.__size,D=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,N,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,P),P}function _(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const b=o[R.id],P=R.uniforms,N=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let D=0,F=P.length;D<F;D++){const T=Array.isArray(P[D])?P[D]:[P[D]];for(let I=0,j=T.length;I<j;I++){const B=T[I];if(y(B,D,I,N)===!0){const K=B.__offset,oe=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let H=0;H<oe.length;H++){const $=oe[H],W=C($);typeof $=="number"||typeof $=="boolean"?(B.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,K+fe,B.__data)):$.isMatrix3?(B.__data[0]=$.elements[0],B.__data[1]=$.elements[1],B.__data[2]=$.elements[2],B.__data[3]=0,B.__data[4]=$.elements[3],B.__data[5]=$.elements[4],B.__data[6]=$.elements[5],B.__data[7]=0,B.__data[8]=$.elements[6],B.__data[9]=$.elements[7],B.__data[10]=$.elements[8],B.__data[11]=0):ArrayBuffer.isView($)?B.__data.set(new $.constructor($.buffer,$.byteOffset,B.__data.length)):($.toArray(B.__data,fe),fe+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,b,P,N){const D=R.value,F=b+"_"+P;if(N[F]===void 0)return typeof D=="number"||typeof D=="boolean"?N[F]=D:ArrayBuffer.isView(D)?N[F]=D.slice():N[F]=D.clone(),!0;{const T=N[F];if(typeof D=="number"||typeof D=="boolean"){if(T!==D)return N[F]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(T.equals(D)===!1)return T.copy(D),!0}}return!1}function M(R){const b=R.uniforms;let P=0;const N=16;for(let F=0,T=b.length;F<T;F++){const I=Array.isArray(b[F])?b[F]:[b[F]];for(let j=0,B=I.length;j<B;j++){const K=I[j],oe=Array.isArray(K.value)?K.value:[K.value];for(let fe=0,H=oe.length;fe<H;fe++){const $=oe[fe],W=C($),Y=P%N,ce=Y%W.boundary,le=Y+ce;P+=ce,le!==0&&N-le<W.storage&&(P+=N-le),K.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=P,P+=W.storage}}}const D=P%N;return D>0&&(P+=N-D),R.__size=P,R.__cache={},this}function C(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(b.boundary=16,b.storage=R.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",R),b}function x(R){const b=R.target;b.removeEventListener("dispose",x);const P=u.indexOf(b.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function S(){for(const R in o)r.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:h,update:p,dispose:S}}const iT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function rT(){return Ri===null&&(Ri=new Xy(iT,16,16,fs,ar),Ri.name="DFG_LUT",Ri.minFilter=rn,Ri.magFilter=rn,Ri.wrapS=tr,Ri.wrapT=tr,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class sT{constructor(e={}){const{canvas:t=yy(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:y=ni}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=u;const C=y,x=new Set([zd,kd,Bd]),S=new Set([ni,Fi,so,ao,Fd,Od]),R=new Uint32Array(4),b=new Int32Array(4),P=new ie;let N=null,D=null;const F=[],T=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let B=!1,K=null;this._outputColorSpace=ti;let oe=0,fe=0,H=null,$=-1,W=null;const Y=new Jt,ce=new Jt;let le=null;const O=new Dt(0);let J=0,Oe=t.width,Ge=t.height,Ie=1,ae=null,Se=null;const me=new Jt(0,0,Oe,Ge),Ue=new Jt(0,0,Oe,Ge);let Qe=!1;const Je=new R0;let Ut=!1,ut=!1;const Mt=new on,Lt=new ie,ft=new Jt,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function pn(){return H===null?Ie:1}let V=s;function Ot(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Id}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",at,!1),V===null){const X="webgl2";if(V=Ot(X,A),V===null)throw Ot(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let dt,Ct,De,zt,L,E,q,he,ge,Ee,Pe,ue,pe,Fe,ke,Ae,Me,nt,st,pt,z,Te,de;function Be(){dt=new r1(V),dt.init(),z=new qw(V,dt),Ct=new K2(V,dt,e,z),De=new $w(V,dt),Ct.reversedDepthBuffer&&m&&De.buffers.depth.setReversed(!0),zt=new o1(V),L=new Nw,E=new Yw(V,dt,De,L,Ct,z,zt),q=new i1(j),he=new fE(V),Te=new Y2(V,he),ge=new s1(V,he,zt,Te),Ee=new c1(V,ge,he,Te,zt),nt=new l1(V,Ct,E),ke=new Z2(L),Pe=new Dw(j,q,dt,Ct,Te,ke),ue=new tT(j,L),pe=new Uw,Fe=new Hw(dt),Me=new $2(j,q,De,Ee,M,h),Ae=new jw(j,Ee,Ct),de=new nT(V,zt,Ct,De),st=new q2(V,dt,zt),pt=new a1(V,dt,zt),zt.programs=Pe.programs,j.capabilities=Ct,j.extensions=dt,j.properties=L,j.renderLists=pe,j.shadowMap=Ae,j.state=De,j.info=zt}Be(),C!==ni&&(I=new f1(C,t.width,t.height,o,l));const Re=new Jw(j,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(A){A!==void 0&&(Ie=A,this.setSize(Oe,Ge,!1))},this.getSize=function(A){return A.set(Oe,Ge)},this.setSize=function(A,X,re=!0){if(Re.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=A,Ge=X,t.width=Math.floor(A*Ie),t.height=Math.floor(X*Ie),re===!0&&(t.style.width=A+"px",t.style.height=X+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Oe*Ie,Ge*Ie).floor()},this.setDrawingBufferSize=function(A,X,re){Oe=A,Ge=X,Ie=re,t.width=Math.floor(A*re),t.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(C===ni){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,X,re,ee){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,X,re,ee),De.viewport(Y.copy(me).multiplyScalar(Ie).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,X,re,ee){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,X,re,ee),De.scissor(ce.copy(Ue).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){De.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,re=!0){let ee=0;if(A){let Q=!1;if(H!==null){const be=H.texture.format;Q=x.has(be)}if(Q){const be=H.texture.type,Ve=S.has(be),Ce=Me.getClearColor(),$e=Me.getClearAlpha(),Ze=Ce.r,ot=Ce.g,lt=Ce.b;Ve?(R[0]=Ze,R[1]=ot,R[2]=lt,R[3]=$e,V.clearBufferuiv(V.COLOR,0,R)):(b[0]=Ze,b[1]=ot,b[2]=lt,b[3]=$e,V.clearBufferiv(V.COLOR,0,b))}else ee|=V.COLOR_BUFFER_BIT}X&&(ee|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Me.dispose(),pe.dispose(),Fe.dispose(),L.dispose(),q.dispose(),Ee.dispose(),Te.dispose(),de.dispose(),Pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",zr),Re.removeEventListener("sessionend",ms),ki.stop()};function ve(A){A.preventDefault(),Wm("WebGLRenderer: Context Lost."),B=!0}function je(){Wm("WebGLRenderer: Context Restored."),B=!1;const A=zt.autoReset,X=Ae.enabled,re=Ae.autoUpdate,ee=Ae.needsUpdate,Q=Ae.type;Be(),zt.autoReset=A,Ae.enabled=X,Ae.autoUpdate=re,Ae.needsUpdate=ee,Ae.type=Q}function at(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function It(A){const X=A.target;X.removeEventListener("dispose",It),wt(X)}function wt(A){An(A),L.remove(A)}function An(A){const X=L.get(A).programs;X!==void 0&&(X.forEach(function(re){Pe.releaseProgram(re)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,ee,Q,be){X===null&&(X=jt);const Ve=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=vo(A,X,re,ee,Q);De.setMaterial(ee,Ve);let $e=re.index,Ze=1;if(ee.wireframe===!0){if($e=ge.getWireframeAttribute(re),$e===void 0)return;Ze=2}const ot=re.drawRange,lt=re.attributes.position;let qe=ot.start*Ze,St=(ot.start+ot.count)*Ze;be!==null&&(qe=Math.max(qe,be.start*Ze),St=Math.min(St,(be.start+be.count)*Ze)),$e!==null?(qe=Math.max(qe,0),St=Math.min(St,$e.count)):lt!=null&&(qe=Math.max(qe,0),St=Math.min(St,lt.count));const Bt=St-qe;if(Bt<0||Bt===1/0)return;Te.setup(Q,ee,Ce,re,$e);let Wt,Rt=st;if($e!==null&&(Wt=he.get($e),Rt=pt,Rt.setIndex(Wt)),Q.isMesh)ee.wireframe===!0?(De.setLineWidth(ee.wireframeLinewidth*pn()),Rt.setMode(V.LINES)):Rt.setMode(V.TRIANGLES);else if(Q.isLine){let en=ee.linewidth;en===void 0&&(en=1),De.setLineWidth(en*pn()),Q.isLineSegments?Rt.setMode(V.LINES):Q.isLineLoop?Rt.setMode(V.LINE_LOOP):Rt.setMode(V.LINE_STRIP)}else Q.isPoints?Rt.setMode(V.POINTS):Q.isSprite&&Rt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const en=Q._multiDrawStarts,ze=Q._multiDrawCounts,mn=Q._multiDrawCount,mt=$e?he.get($e).bytesPerElement:1,Pn=L.get(ee).currentProgram.getUniforms();for(let Ln=0;Ln<mn;Ln++)Pn.setValue(V,"_gl_DrawID",Ln),Rt.render(en[Ln]/mt,ze[Ln])}else if(Q.isInstancedMesh)Rt.renderInstances(qe,Bt,Q.count);else if(re.isInstancedBufferGeometry){const en=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ze=Math.min(re.instanceCount,en);Rt.renderInstances(qe,Bt,ze)}else Rt.render(qe,Bt)};function $n(A,X,re){A.transparent===!0&&A.side===er&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,gs(A,X,re),A.side=kr,A.needsUpdate=!0,gs(A,X,re),A.side=er):gs(A,X,re)}this.compile=function(A,X,re=null){re===null&&(re=A),D=Fe.get(re),D.init(X),T.push(D),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),A!==re&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights();const ee=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const be=Q.material;if(be)if(Array.isArray(be))for(let Ve=0;Ve<be.length;Ve++){const Ce=be[Ve];$n(Ce,re,Q),ee.add(Ce)}else $n(be,re,Q),ee.add(be)}),D=T.pop(),ee},this.compileAsync=function(A,X,re=null){const ee=this.compile(A,X,re);return new Promise(Q=>{function be(){if(ee.forEach(function(Ve){L.get(Ve).currentProgram.isReady()&&ee.delete(Ve)}),ee.size===0){Q(A);return}setTimeout(be,10)}dt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Bi=null;function ps(A){Bi&&Bi(A)}function zr(){ki.stop()}function ms(){ki.start()}const ki=new N0;ki.setAnimationLoop(ps),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){Bi=A,Re.setAnimationLoop(A),A===null?ki.stop():ki.start()},Re.addEventListener("sessionstart",zr),Re.addEventListener("sessionend",ms),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;K!==null&&K.renderStart(A,X);const re=Re.enabled===!0&&Re.isPresenting===!0,ee=I!==null&&(H===null||re)&&I.begin(j,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,X,H),D=Fe.get(A,T.length),D.init(X),D.state.textureUnits=E.getTextureUnits(),T.push(D),Mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Je.setFromProjectionMatrix(Mt,Li,X.reversedDepth),ut=this.localClippingEnabled,Ut=ke.init(this.clippingPlanes,ut),N=pe.get(A,F.length),N.init(),F.push(N),Re.enabled===!0&&Re.isPresenting===!0){const Ve=j.xr.getDepthSensingMesh();Ve!==null&&fa(Ve,X,-1/0,j.sortObjects)}fa(A,X,0,j.sortObjects),N.finish(),j.sortObjects===!0&&N.sort(ae,Se),Ft=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ft&&Me.addToRenderList(N,A),this.info.render.frame++,Ut===!0&&ke.beginShadows();const Q=D.state.shadowsArray;if(Ae.render(Q,A,X),Ut===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&I.hasRenderPass())===!1){const Ve=N.opaque,Ce=N.transmissive;if(D.setupLights(),X.isArrayCamera){const $e=X.cameras;if(Ce.length>0)for(let Ze=0,ot=$e.length;Ze<ot;Ze++){const lt=$e[Ze];yi(Ve,Ce,A,lt)}Ft&&Me.render(A);for(let Ze=0,ot=$e.length;Ze<ot;Ze++){const lt=$e[Ze];mo(N,A,lt,lt.viewport)}}else Ce.length>0&&yi(Ve,Ce,A,X),Ft&&Me.render(A),mo(N,A,X)}H!==null&&fe===0&&(E.updateMultisampleRenderTarget(H),E.updateRenderTargetMipmap(H)),ee&&I.end(j),A.isScene===!0&&A.onAfterRender(j,A,X),Te.resetDefaultState(),$=-1,W=null,T.pop(),T.length>0?(D=T[T.length-1],E.setTextureUnits(D.state.textureUnits),Ut===!0&&ke.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?N=F[F.length-1]:N=null,K!==null&&K.renderEnd()};function fa(A,X,re,ee){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Je.intersectsSprite(A)){ee&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const Ve=Ee.update(A),Ce=A.material;Ce.visible&&N.push(A,Ve,Ce,re,ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Je.intersectsObject(A))){const Ve=Ee.update(A),Ce=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ft.copy(Ve.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ce)){const $e=Ve.groups;for(let Ze=0,ot=$e.length;Ze<ot;Ze++){const lt=$e[Ze],qe=Ce[lt.materialIndex];qe&&qe.visible&&N.push(A,Ve,qe,re,ft.z,lt)}}else Ce.visible&&N.push(A,Ve,Ce,re,ft.z,null)}}const be=A.children;for(let Ve=0,Ce=be.length;Ve<Ce;Ve++)fa(be[Ve],X,re,ee)}function mo(A,X,re,ee){const{opaque:Q,transmissive:be,transparent:Ve}=A;D.setupLightsView(re),Ut===!0&&ke.setGlobalState(j.clippingPlanes,re),ee&&De.viewport(Y.copy(ee)),Q.length>0&&Hr(Q,X,re),be.length>0&&Hr(be,X,re),Ve.length>0&&Hr(Ve,X,re),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function yi(A,X,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ee.id]===void 0){const qe=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ee.id]=new Ni(1,1,{generateMipmaps:!0,type:qe?ar:ni,minFilter:ls,samples:Math.max(4,Ct.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const be=D.state.transmissionRenderTarget[ee.id],Ve=ee.viewport||Y;be.setSize(Ve.z*j.transmissionResolutionScale,Ve.w*j.transmissionResolutionScale);const Ce=j.getRenderTarget(),$e=j.getActiveCubeFace(),Ze=j.getActiveMipmapLevel();j.setRenderTarget(be),j.getClearColor(O),J=j.getClearAlpha(),J<1&&j.setClearColor(16777215,.5),j.clear(),Ft&&Me.render(re);const ot=j.toneMapping;j.toneMapping=Di;const lt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),D.setupLightsView(ee),Ut===!0&&ke.setGlobalState(j.clippingPlanes,ee),Hr(A,re,ee),E.updateMultisampleRenderTarget(be),E.updateRenderTargetMipmap(be),dt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let St=0,Bt=X.length;St<Bt;St++){const Wt=X[St],{object:Rt,geometry:en,material:ze,group:mn}=Wt;if(ze.side===er&&Rt.layers.test(ee.layers)){const mt=ze.side;ze.side=kn,ze.needsUpdate=!0,da(Rt,re,ee,en,ze,mn),ze.side=mt,ze.needsUpdate=!0,qe=!0}}qe===!0&&(E.updateMultisampleRenderTarget(be),E.updateRenderTargetMipmap(be))}j.setRenderTarget(Ce,$e,Ze),j.setClearColor(O,J),lt!==void 0&&(ee.viewport=lt),j.toneMapping=ot}function Hr(A,X,re){const ee=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,be=A.length;Q<be;Q++){const Ve=A[Q],{object:Ce,geometry:$e,group:Ze}=Ve;let ot=Ve.material;ot.allowOverride===!0&&ee!==null&&(ot=ee),Ce.layers.test(re.layers)&&da(Ce,X,re,$e,ot,Ze)}}function da(A,X,re,ee,Q,be){A.onBeforeRender(j,X,re,ee,Q,be),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(j,X,re,ee,A,be),Q.transparent===!0&&Q.side===er&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,j.renderBufferDirect(re,X,ee,Q,A,be),Q.side=kr,Q.needsUpdate=!0,j.renderBufferDirect(re,X,ee,Q,A,be),Q.side=er):j.renderBufferDirect(re,X,ee,Q,A,be),A.onAfterRender(j,X,re,ee,Q,be)}function gs(A,X,re){X.isScene!==!0&&(X=jt);const ee=L.get(A),Q=D.state.lights,be=D.state.shadowsArray,Ve=Q.state.version,Ce=Pe.getParameters(A,Q.state,be,X,re,D.state.lightProbeGridArray),$e=Pe.getProgramCacheKey(Ce);let Ze=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ee.fog=X.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=q.get(A.envMap||ee.environment,ot),ee.envMapRotation=ee.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",It),Ze=new Map,ee.programs=Ze);let lt=Ze.get($e);if(lt!==void 0){if(ee.currentProgram===lt&&ee.lightsStateVersion===Ve)return pa(A,Ce),lt}else Ce.uniforms=Pe.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,re,Ce),A.onBeforeCompile(Ce,j),lt=Pe.acquireProgram(Ce,$e),Ze.set($e,lt),ee.uniforms=Ce.uniforms;const qe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=ke.uniform),pa(A,Ce),ee.needsLights=hc(A),ee.lightsStateVersion=Ve,ee.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotLightMatrix.value=Q.state.spotLightMatrix,qe.spotLightMap.value=Q.state.spotLightMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ee.lightProbeGrid=D.state.lightProbeGridArray.length>0,ee.currentProgram=lt,ee.uniformsList=null,lt}function ha(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Kl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function pa(A,X){const re=L.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function go(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(X.matrixWorld);for(let re=0,ee=A.length;re<ee;re++){const Q=A[re];if(Q.texture!==null&&Q.boundingBox.containsPoint(P))return Q}return null}function vo(A,X,re,ee,Q){X.isScene!==!0&&(X=jt),E.resetTextureUnits();const be=X.fog,Ve=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?X.environment:null,Ce=H===null?j.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:_t.workingColorSpace,$e=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ze=q.get(ee.envMap||Ve,$e),ot=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!re.morphAttributes.position,St=!!re.morphAttributes.normal,Bt=!!re.morphAttributes.color;let Wt=Di;ee.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Wt=j.toneMapping);const Rt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,en=Rt!==void 0?Rt.length:0,ze=L.get(ee),mn=D.state.lights;if(Ut===!0&&(ut===!0||A!==W)){const bt=A===W&&ee.id===$;ke.setState(ee,A,bt)}let mt=!1;ee.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==mn.state.version||ze.outputColorSpace!==Ce||Q.isBatchedMesh&&ze.batching===!1||!Q.isBatchedMesh&&ze.batching===!0||Q.isBatchedMesh&&ze.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ze.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ze.instancing===!1||!Q.isInstancedMesh&&ze.instancing===!0||Q.isSkinnedMesh&&ze.skinning===!1||!Q.isSkinnedMesh&&ze.skinning===!0||Q.isInstancedMesh&&ze.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ze.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ze.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ze.instancingMorph===!1&&Q.morphTexture!==null||ze.envMap!==Ze||ee.fog===!0&&ze.fog!==be||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ke.numPlanes||ze.numIntersection!==ke.numIntersection)||ze.vertexAlphas!==ot||ze.vertexTangents!==lt||ze.morphTargets!==qe||ze.morphNormals!==St||ze.morphColors!==Bt||ze.toneMapping!==Wt||ze.morphTargetsCount!==en||!!ze.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,ze.__version=ee.version);let Pn=ze.currentProgram;mt===!0&&(Pn=gs(ee,X,Q),K&&ee.isNodeMaterial&&K.onUpdateProgram(ee,Pn,ze));let Ln=!1,gt=!1,zi=!1;const At=Pn.getUniforms(),Ht=ze.uniforms;if(De.useProgram(Pn.program)&&(Ln=!0,gt=!0,zi=!0),ee.id!==$&&($=ee.id,gt=!0),ze.needsLights){const bt=go(D.state.lightProbeGridArray,Q);ze.lightProbeGrid!==bt&&(ze.lightProbeGrid=bt,gt=!0)}if(Ln||W!==A){De.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(V,"projectionMatrix",A.projectionMatrix),At.setValue(V,"viewMatrix",A.matrixWorldInverse);const oi=At.map.cameraPosition;oi!==void 0&&oi.setValue(V,Lt.setFromMatrixPosition(A.matrixWorld)),Ct.logarithmicDepthBuffer&&At.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&At.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,gt=!0,zi=!0)}if(ze.needsLights&&(mn.state.directionalShadowMap.length>0&&At.setValue(V,"directionalShadowMap",mn.state.directionalShadowMap,E),mn.state.spotShadowMap.length>0&&At.setValue(V,"spotShadowMap",mn.state.spotShadowMap,E),mn.state.pointShadowMap.length>0&&At.setValue(V,"pointShadowMap",mn.state.pointShadowMap,E)),Q.isSkinnedMesh){At.setOptional(V,Q,"bindMatrix"),At.setOptional(V,Q,"bindMatrixInverse");const bt=Q.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),At.setValue(V,"boneTexture",bt.boneTexture,E))}Q.isBatchedMesh&&(At.setOptional(V,Q,"batchingTexture"),At.setValue(V,"batchingTexture",Q._matricesTexture,E),At.setOptional(V,Q,"batchingIdTexture"),At.setValue(V,"batchingIdTexture",Q._indirectTexture,E),At.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&At.setValue(V,"batchingColorTexture",Q._colorsTexture,E));const ai=re.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&nt.update(Q,re,Pn),(gt||ze.receiveShadow!==Q.receiveShadow)&&(ze.receiveShadow=Q.receiveShadow,At.setValue(V,"receiveShadow",Q.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&X.environment!==null&&(Ht.envMapIntensity.value=X.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=rT()),gt){if(At.setValue(V,"toneMappingExposure",j.toneMappingExposure),ze.needsLights&&dc(Ht,zi),be&&ee.fog===!0&&ue.refreshFogUniforms(Ht,be),ue.refreshMaterialUniforms(Ht,ee,Ie,Ge,D.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const bt=ze.lightProbeGrid;Ht.probesSH.value=bt.texture,Ht.probesMin.value.copy(bt.boundingBox.min),Ht.probesMax.value.copy(bt.boundingBox.max),Ht.probesResolution.value.copy(bt.resolution)}Kl.upload(V,ha(ze),Ht,E)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Kl.upload(V,ha(ze),Ht,E),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&At.setValue(V,"center",Q.center),At.setValue(V,"modelViewMatrix",Q.modelViewMatrix),At.setValue(V,"normalMatrix",Q.normalMatrix),At.setValue(V,"modelMatrix",Q.matrixWorld),ee.uniformsGroups!==void 0){const bt=ee.uniformsGroups;for(let oi=0,Ei=bt.length;oi<Ei;oi++){const Vr=bt[oi];de.update(Vr,Pn),de.bind(Vr,Pn)}}return Pn}function dc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function hc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,X,re){const ee=L.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),L.get(A.texture).__webglTexture=X,L.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const re=L.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const $t=V.createFramebuffer();this.setRenderTarget=function(A,X=0,re=0){H=A,oe=X,fe=re;let ee=null,Q=!1,be=!1;if(A){const Ce=L.get(A);if(Ce.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(V.FRAMEBUFFER,Ce.__webglFramebuffer),Y.copy(A.viewport),ce.copy(A.scissor),le=A.scissorTest,De.viewport(Y),De.scissor(ce),De.setScissorTest(le),$=-1;return}else if(Ce.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ce.__hasExternalTextures)E.rebindTextures(A,L.get(A.texture).__webglTexture,L.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(Ce.__boundDepthTexture!==ot){if(ot!==null&&L.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(be=!0);const Ze=L.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?ee=Ze[X][re]:ee=Ze[X],Q=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?ee=L.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?ee=Ze[re]:ee=Ze,Y.copy(A.viewport),ce.copy(A.scissor),le=A.scissorTest}else Y.copy(me).multiplyScalar(Ie).floor(),ce.copy(Ue).multiplyScalar(Ie).floor(),le=Qe;if(re!==0&&(ee=$t),De.bindFramebuffer(V.FRAMEBUFFER,ee)&&De.drawBuffers(A,ee),De.viewport(Y),De.scissor(ce),De.setScissorTest(le),Q){const Ce=L.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,re)}else if(be){const Ce=X;for(let $e=0;$e<A.textures.length;$e++){const Ze=L.get(A.textures[$e]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+$e,Ze.__webglTexture,re,Ce)}}else if(A!==null&&re!==0){const Ce=L.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ce.__webglTexture,re)}$=-1},this.readRenderTargetPixels=function(A,X,re,ee,Q,be,Ve,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=L.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e){De.bindFramebuffer(V.FRAMEBUFFER,$e);try{const Ze=A.textures[Ce],ot=Ze.format,lt=Ze.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!Ct.textureFormatReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ee&&re>=0&&re<=A.height-Q&&V.readPixels(X,re,ee,Q,z.convert(ot),z.convert(lt),be)}finally{const Ze=H!==null?L.get(H).__webglFramebuffer:null;De.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,ee,Q,be,Ve,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=L.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e)if(X>=0&&X<=A.width-ee&&re>=0&&re<=A.height-Q){De.bindFramebuffer(V.FRAMEBUFFER,$e);const Ze=A.textures[Ce],ot=Ze.format,lt=Ze.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!Ct.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.bufferData(V.PIXEL_PACK_BUFFER,be.byteLength,V.STREAM_READ),V.readPixels(X,re,ee,Q,z.convert(ot),z.convert(lt),0);const St=H!==null?L.get(H).__webglFramebuffer:null;De.bindFramebuffer(V.FRAMEBUFFER,St);const Bt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ey(V,Bt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,be),V.deleteBuffer(qe),V.deleteSync(Bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,re=0){const ee=Math.pow(2,-re),Q=Math.floor(A.image.width*ee),be=Math.floor(A.image.height*ee),Ve=X!==null?X.x:0,Ce=X!==null?X.y:0;E.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ve,Ce,Q,be),De.unbindTexture()};const pc=V.createFramebuffer(),ma=V.createFramebuffer();this.copyTextureToTexture=function(A,X,re=null,ee=null,Q=0,be=0){let Ve,Ce,$e,Ze,ot,lt,qe,St,Bt;const Wt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(re!==null)Ve=re.max.x-re.min.x,Ce=re.max.y-re.min.y,$e=re.isBox3?re.max.z-re.min.z:1,Ze=re.min.x,ot=re.min.y,lt=re.isBox3?re.min.z:0;else{const Ht=Math.pow(2,-Q);Ve=Math.floor(Wt.width*Ht),Ce=Math.floor(Wt.height*Ht),A.isDataArrayTexture?$e=Wt.depth:A.isData3DTexture?$e=Math.floor(Wt.depth*Ht):$e=1,Ze=0,ot=0,lt=0}ee!==null?(qe=ee.x,St=ee.y,Bt=ee.z):(qe=0,St=0,Bt=0);const Rt=z.convert(X.format),en=z.convert(X.type);let ze;X.isData3DTexture?(E.setTexture3D(X,0),ze=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(E.setTexture2DArray(X,0),ze=V.TEXTURE_2D_ARRAY):(E.setTexture2D(X,0),ze=V.TEXTURE_2D),De.activeTexture(V.TEXTURE0),De.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),De.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),De.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const mn=De.getParameter(V.UNPACK_ROW_LENGTH),mt=De.getParameter(V.UNPACK_IMAGE_HEIGHT),Pn=De.getParameter(V.UNPACK_SKIP_PIXELS),Ln=De.getParameter(V.UNPACK_SKIP_ROWS),gt=De.getParameter(V.UNPACK_SKIP_IMAGES);De.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),De.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),De.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),De.pixelStorei(V.UNPACK_SKIP_ROWS,ot),De.pixelStorei(V.UNPACK_SKIP_IMAGES,lt);const zi=A.isDataArrayTexture||A.isData3DTexture,At=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Ht=L.get(A),ai=L.get(X),bt=L.get(Ht.__renderTarget),oi=L.get(ai.__renderTarget);De.bindFramebuffer(V.READ_FRAMEBUFFER,bt.__webglFramebuffer),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let Ei=0;Ei<$e;Ei++)zi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,L.get(A).__webglTexture,Q,lt+Ei),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,L.get(X).__webglTexture,be,Bt+Ei)),V.blitFramebuffer(Ze,ot,Ve,Ce,qe,St,Ve,Ce,V.DEPTH_BUFFER_BIT,V.NEAREST);De.bindFramebuffer(V.READ_FRAMEBUFFER,null),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||L.has(A)){const Ht=L.get(A),ai=L.get(X);De.bindFramebuffer(V.READ_FRAMEBUFFER,pc),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,ma);for(let bt=0;bt<$e;bt++)zi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ht.__webglTexture,Q,lt+bt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ht.__webglTexture,Q),At?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ai.__webglTexture,be,Bt+bt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ai.__webglTexture,be),Q!==0?V.blitFramebuffer(Ze,ot,Ve,Ce,qe,St,Ve,Ce,V.COLOR_BUFFER_BIT,V.NEAREST):At?V.copyTexSubImage3D(ze,be,qe,St,Bt+bt,Ze,ot,Ve,Ce):V.copyTexSubImage2D(ze,be,qe,St,Ze,ot,Ve,Ce);De.bindFramebuffer(V.READ_FRAMEBUFFER,null),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(ze,be,qe,St,Bt,Ve,Ce,$e,Rt,en,Wt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(ze,be,qe,St,Bt,Ve,Ce,$e,Rt,Wt.data):V.texSubImage3D(ze,be,qe,St,Bt,Ve,Ce,$e,Rt,en,Wt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,be,qe,St,Ve,Ce,Rt,en,Wt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,be,qe,St,Wt.width,Wt.height,Rt,Wt.data):V.texSubImage2D(V.TEXTURE_2D,be,qe,St,Ve,Ce,Rt,en,Wt);De.pixelStorei(V.UNPACK_ROW_LENGTH,mn),De.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt),De.pixelStorei(V.UNPACK_SKIP_PIXELS,Pn),De.pixelStorei(V.UNPACK_SKIP_ROWS,Ln),De.pixelStorei(V.UNPACK_SKIP_IMAGES,gt),be===0&&X.generateMipmaps&&V.generateMipmap(ze),De.unbindTexture()},this.initRenderTarget=function(A){L.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),De.unbindTexture()},this.resetState=function(){oe=0,fe=0,H=null,De.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}function aT(){const r=te.useRef(null),e=te.useRef(null),t=te.useRef(null),s=te.useRef(null),o=te.useRef(null),l=te.useRef(0),u=te.useRef(!1),f=te.useRef({x:0,y:0}),h=te.useRef({x:0,y:0}),p=te.useRef({x:0,y:0}),{originalImage:v,depthImage:_,parallaxStrength:m,viewMode:y,isLocked:M,autoDemo:C}=Br();te.useEffect(()=>{if(!r.current)return;const P=r.current,N=P.clientWidth,D=P.clientHeight,F=new By;e.current=F;const T=new jd(-N/2,N/2,D/2,-D/2,.1,1e3);T.position.z=500,t.current=T;const I=new sT({alpha:!0,antialias:!0});I.setSize(N,D),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.domElement.style.display="block",P.appendChild(I.domElement),s.current=I;const j=()=>y==="original"||y==="depth"?new ii({uniforms:{uTexture:{value:null}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D uTexture;
            varying vec2 vUv;
            void main() {
              gl_FragColor = texture2D(uTexture, vUv);
            }
          `,transparent:!0}):new ii({uniforms:{uTexture:{value:null},uDepthTexture:{value:null},uRotationX:{value:0},uRotationY:{value:0},uStrength:{value:m}},vertexShader:`
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

            // 根据深度 + 视角做 UV 偏移（深度越深 → 位移越大）
            vec2 offset = vec2(uRotationY, -uRotationX) * depth * uStrength * 0.15;
            vec2 uv = vUv + offset;
            uv = clamp(uv, 0.0, 1.0);

            vec4 color = texture2D(uTexture, uv);

            // 轻微景深伪效果：深度小的(远)加一点模糊近似（用相邻采样）
            float blur = (1.0 - depth) * uStrength * 0.005;
            vec4 c = texture2D(uTexture, uv);
            c += texture2D(uTexture, uv + vec2(blur, 0.0));
            c += texture2D(uTexture, uv - vec2(blur, 0.0));
            c += texture2D(uTexture, uv + vec2(0.0, blur));
            c += texture2D(uTexture, uv - vec2(0.0, blur));
            color = mix(color, c / 5.0, (1.0 - depth) * 0.5 * uStrength);

            gl_FragColor = color;
          }
        `,transparent:!0}),B=new sa(N,D),K=j(),oe=new Oi(B,K);F.add(oe),o.current=oe;const fe=()=>{if(l.current=requestAnimationFrame(fe),C&&!M){const $=performance.now()/1e3;h.current.x=Math.sin($*.7)*.15,h.current.y=Math.cos($*.5)*.25}if(p.current.x+=(h.current.x-p.current.x)*.15,p.current.y+=(h.current.y-p.current.y)*.15,o.current){const $=o.current.material;"uRotationX"in $.uniforms&&($.uniforms.uRotationX.value=p.current.x,$.uniforms.uRotationY.value=p.current.y,$.uniforms.uStrength.value=m)}I.render(F,T)};fe();const H=()=>{const $=P.clientWidth,W=P.clientHeight;T.left=-$/2,T.right=$/2,T.top=W/2,T.bottom=-W/2,T.updateProjectionMatrix(),I.setSize($,W),o.current&&(o.current.geometry.dispose(),o.current.geometry=new sa($,W))};return window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H),cancelAnimationFrame(l.current),I.dispose(),B.dispose(),K.dispose(),P.removeChild(I.domElement)}},[y]),te.useEffect(()=>{if(!o.current||!v||y==="depth")return;new oE().load(v,N=>{if(N.minFilter=rn,N.magFilter=rn,N.needsUpdate=!0,o.current){const D=o.current.material;D.uniforms.uTexture.value=N,D.needsUpdate=!0}})},[v,y]),te.useEffect(()=>{if(!o.current||!_)return;const P=document.createElement("canvas");P.width=_.width,P.height=_.height,P.getContext("2d").putImageData(_,0,0);const D=new qy(P);D.minFilter=rn,D.magFilter=rn;const F=o.current.material;y==="depth"?(F.uniforms.uTexture.value=D,F.needsUpdate=!0):"uDepthTexture"in F.uniforms&&(F.uniforms.uDepthTexture.value=D,F.needsUpdate=!0)},[_,y]);const x=te.useCallback(P=>{if(!(M||C)){u.current=!0,f.current.x=P.clientX,f.current.y=P.clientY;try{P.target.setPointerCapture(P.pointerId)}catch{}}},[M,C]),S=te.useCallback(P=>{if(!u.current||M||C||!r.current)return;const N=r.current.getBoundingClientRect(),D=(P.clientX-f.current.x)/N.width,F=(P.clientY-f.current.y)/N.height;h.current.y+=D*.8,h.current.x+=F*.8,h.current.x=Math.max(-.4,Math.min(.4,h.current.x)),h.current.y=Math.max(-.4,Math.min(.4,h.current.y)),f.current.x=P.clientX,f.current.y=P.clientY},[M,C]),R=te.useCallback(()=>{u.current=!1},[]),b=te.useCallback(P=>{if(u.current||M||C||!r.current)return;const N=r.current.getBoundingClientRect(),D=(P.clientX-N.left)/N.width-.5,F=(P.clientY-N.top)/N.height-.5;h.current.x=F*.2,h.current.y=D*.3},[M,C]);return{containerRef:r,handlePointerDown:x,handlePointerMove:S,handlePointerUp:R,handleMouseMove:b}}function oT(){const{originalImage:r,depthImage:e}=Br(),{containerRef:t,handlePointerDown:s,handlePointerMove:o,handlePointerUp:l,handleMouseMove:u}=aT();return!r||!e?null:Le.jsx("div",{"trae-inspector-start-line":"17","trae-inspector-start-column":"4","trae-inspector-end-line":"29","trae-inspector-end-column":"6","trae-inspector-file-path":"src/components/SpatialScene.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",ref:t,className:"w-full h-full select-none",onPointerDown:s,onPointerMove:o,onPointerUp:l,onPointerCancel:l,onMouseMove:u,style:{touchAction:"none",cursor:"grab"}})}const lT=[{id:"spatial",label:"3D视差",icon:pS},{id:"original",label:"原图",icon:r0},{id:"depth",label:"深度图",icon:bS}];function cT(){const{parallaxStrength:r,setParallaxStrength:e,viewMode:t,setViewMode:s,isLocked:o,toggleLock:l,autoDemo:u,toggleAutoDemo:f,reset:h,resetView:p}=Br(),[v,_]=te.useState(!0);return Le.jsxs("div",{"trae-inspector-start-line":"34","trae-inspector-start-column":"4","trae-inspector-end-line":"173","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute left-0 right-0 bottom-0 px-3 pb-3 md:px-6 md:pb-6",children:[Le.jsx("button",{"trae-inspector-start-line":"36","trae-inspector-start-column":"6","trae-inspector-end-line":"44","trae-inspector-end-column":"15","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>_(m=>!m),className:`absolute left-1/2 -translate-x-1/2 -top-8
                   bg-black/50 backdrop-blur-xl border border-white/10
                   px-3 py-1 rounded-full text-xs text-white/60 hover:text-white
                   active:scale-95 transition`,children:v?"收起面板 ▾":"展开面板 ▴"}),v&&Le.jsxs("div",{"trae-inspector-start-line":"47","trae-inspector-start-column":"8","trae-inspector-end-line":"171","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`bg-black/60 backdrop-blur-2xl
                        border border-white/10 rounded-2xl p-3 md:p-4
                        shadow-2xl`,children:[Le.jsx("div",{"trae-inspector-start-line":"51","trae-inspector-start-column":"10","trae-inspector-end-line":"74","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex gap-1 md:gap-2 mb-3",children:lT.map(m=>{const y=m.icon,M=t===m.id;return Le.jsxs("button",{"trae-inspector-start-line":"56","trae-inspector-start-column":"16","trae-inspector-end-line":"71","trae-inspector-end-column":"25","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>s(m.id),className:`
                    flex-1 flex items-center justify-center gap-1.5 md:gap-2
                    py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-medium
                    transition-all active:scale-95
                    ${M?"bg-gradient-to-br from-cyan-400/30 to-purple-400/30 text-white border border-cyan-400/40":"bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-transparent"}
                  `,children:[Le.jsx(y,{className:"w-4 h-4 md:w-[18px] md:h-[18px]"}),Le.jsx("span",{"trae-inspector-start-line":"70","trae-inspector-start-column":"18","trae-inspector-end-line":"70","trae-inspector-end-column":"73","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"whitespace-nowrap",children:m.label})]},m.id)})}),t==="spatial"&&Le.jsxs("div",{"trae-inspector-start-line":"78","trae-inspector-start-column":"12","trae-inspector-end-line":"105","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3 mb-3",children:[Le.jsx("span",{"trae-inspector-start-line":"79","trae-inspector-start-column":"14","trae-inspector-end-line":"81","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B7%B1%E5%BA%A6%22%2C%22textStartLine%22%3A%2279%22%2C%22textStartColumn%22%3A%2295%22%2C%22textEndLine%22%3A%2281%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/60 text-xs md:text-sm font-medium whitespace-nowrap",children:"深度"}),Le.jsx("input",{"trae-inspector-start-line":"82","trae-inspector-start-column":"14","trae-inspector-end-line":"101","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",type:"range",min:"0",max:"2",step:"0.05",value:r,onChange:m=>e(parseFloat(m.target.value)),className:`flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer
                           [&::-webkit-slider-thumb]:appearance-none
                           [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                           [&::-webkit-slider-thumb]:rounded-full
                           [&::-webkit-slider-thumb]:bg-gradient-to-br
                           [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-purple-400
                           [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(0,212,255,0.6)]
                           [&::-webkit-slider-thumb]:cursor-pointer
                           [&::-webkit-slider-thumb]:-mt-1.5`,style:{background:`linear-gradient(90deg, rgba(0,212,255,0.6) 0%, rgba(191,90,242,0.6) ${r/2*100}%, rgba(255,255,255,0.1) ${r/2*100}%)`}}),Le.jsx("span",{"trae-inspector-start-line":"102","trae-inspector-start-column":"14","trae-inspector-end-line":"104","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/40 text-xs md:text-sm w-8 text-right",children:r.toFixed(1)})]}),Le.jsxs("div",{"trae-inspector-start-line":"109","trae-inspector-start-column":"10","trae-inspector-end-line":"165","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-4 gap-1.5 md:gap-2",children:[Le.jsxs("button",{"trae-inspector-start-line":"110","trae-inspector-start-column":"12","trae-inspector-end-line":"126","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:f,className:`
                flex flex-col items-center justify-center gap-1 py-2.5 md:py-3
                rounded-xl text-[10px] md:text-xs font-medium transition-all active:scale-95
                ${u?"bg-purple-400/20 text-purple-200 border border-purple-400/30":"bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"}
              `,children:[u?Le.jsx(yS,{className:"w-4 h-4 md:w-5 md:h-5"}):Le.jsx(MS,{className:"w-4 h-4 md:w-5 md:h-5"}),u?"停止演示":"自动演示"]}),Le.jsxs("button",{"trae-inspector-start-line":"128","trae-inspector-start-column":"12","trae-inspector-end-line":"136","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:p,className:`flex flex-col items-center justify-center gap-1 py-2.5 md:py-3
                         rounded-xl text-[10px] md:text-xs font-medium transition-all active:scale-95
                         bg-white/5 text-white/60 hover:bg-white/10 hover:text-white`,children:[Le.jsx(CS,{className:"w-4 h-4 md:w-5 md:h-5"}),"重置视角"]}),Le.jsxs("button",{"trae-inspector-start-line":"138","trae-inspector-start-column":"12","trae-inspector-end-line":"154","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:l,className:`
                flex flex-col items-center justify-center gap-1 py-2.5 md:py-3
                rounded-xl text-[10px] md:text-xs font-medium transition-all active:scale-95
                ${o?"bg-cyan-400/20 text-cyan-200 border border-cyan-400/30":"bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"}
              `,children:[o?Le.jsx(xS,{className:"w-4 h-4 md:w-5 md:h-5"}):Le.jsx(vS,{className:"w-4 h-4 md:w-5 md:h-5"}),o?"已锁定":"锁定视角"]}),Le.jsxs("button",{"trae-inspector-start-line":"156","trae-inspector-start-column":"12","trae-inspector-end-line":"164","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:h,className:`flex flex-col items-center justify-center gap-1 py-2.5 md:py-3
                         rounded-xl text-[10px] md:text-xs font-medium transition-all active:scale-95
                         bg-red-500/10 text-red-200/70 hover:bg-red-500/20 hover:text-red-100`,children:[Le.jsx(US,{className:"w-4 h-4 md:w-5 md:h-5"}),"换张图"]})]}),Le.jsx("p",{"trae-inspector-start-line":"168","trae-inspector-start-column":"10","trae-inspector-end-line":"170","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/ControlPanel.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%92%A1%20%E6%8B%96%E5%8A%A8%E5%B1%8F%E5%B9%95%20%2F%20%E9%BC%A0%E6%A0%87%E6%94%B9%E5%8F%98%E8%A7%86%E8%A7%92%20%C2%B7%20%E8%AF%95%E8%AF%95%5C%22%E8%87%AA%E5%8A%A8%E6%BC%94%E7%A4%BA%5C%22%E7%9C%8B%E6%95%88%E6%9E%9C%22%2C%22textStartLine%22%3A%22168%22%2C%22textStartColumn%22%3A%2284%22%2C%22textEndLine%22%3A%22170%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hidden md:block text-center text-white/25 text-[11px] mt-3",children:'💡 拖动屏幕 / 鼠标改变视角 · 试试"自动演示"看效果'})]})]})}function uT(){const r=Br(o=>o.originalImage),e=Br(o=>o.depthImage),t=Br(o=>o.isProcessing),s=r&&e&&!t;return Le.jsx(Qx,{children:Le.jsxs("div",{"trae-inspector-start-line":"16","trae-inspector-start-column":"6","trae-inspector-end-line":"59","trae-inspector-end-column":"12","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`relative w-full h-[100dvh] overflow-hidden
                    bg-[#0a0a0f] text-white select-none`,children:[Le.jsx("div",{"trae-inspector-start-line":"21","trae-inspector-start-column":"8","trae-inspector-end-line":"23","trae-inspector-end-column":"38","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`pointer-events-none absolute inset-0
                        bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f]
                        opacity-80`}),Le.jsxs("div",{"trae-inspector-start-line":"26","trae-inspector-start-column":"8","trae-inspector-end-line":"37","trae-inspector-end-column":"14","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"pointer-events-none absolute inset-0 overflow-hidden",children:[Le.jsx("div",{"trae-inspector-start-line":"27","trae-inspector-start-column":"10","trae-inspector-end-line":"31","trae-inspector-end-column":"12","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`absolute top-[10%] left-[10%] w-[40vmin] h-[40vmin]
                       bg-cyan-500/15 rounded-full blur-[80px] animate-pulse`,style:{animationDuration:"4s"}}),Le.jsx("div",{"trae-inspector-start-line":"32","trae-inspector-start-column":"10","trae-inspector-end-line":"36","trae-inspector-end-column":"12","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`absolute bottom-[10%] right-[10%] w-[40vmin] h-[40vmin]
                       bg-purple-500/15 rounded-full blur-[80px] animate-pulse`,style:{animationDuration:"6s",animationDelay:"1.5s"}})]}),Le.jsx("div",{"trae-inspector-start-line":"40","trae-inspector-start-column":"8","trae-inspector-end-line":"44","trae-inspector-end-column":"14","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative z-20",children:Le.jsx(Rx,{children:Le.jsx(Jg,{path:"/",element:Le.jsx(HS,{})})})}),s&&Le.jsxs(Le.Fragment,{children:[Le.jsx("div",{"trae-inspector-start-line":"50","trae-inspector-start-column":"12","trae-inspector-end-line":"52","trae-inspector-end-column":"18","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 z-10",children:Le.jsx(oT,{})}),Le.jsx("div",{"trae-inspector-start-line":"54","trae-inspector-start-column":"12","trae-inspector-end-line":"56","trae-inspector-end-column":"18","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-x-0 bottom-0 z-30",children:Le.jsx(cT,{})})]})]})})}R_.createRoot(document.getElementById("root")).render(Le.jsx(te.StrictMode,{children:Le.jsx(uT,{})}));
