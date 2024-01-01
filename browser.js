// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;function t(t){return t===r||t===e}var n="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function a(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function c(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function l(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=c(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=c(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(r){return"string"==typeof r}var p=Math.abs,y=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,h=/e\+(\d)$/,w=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,A=/\.0*e/,_=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!a(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,A,"e"),t=d.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,h,"e+0$1"),t=d.call(t,w,"e-0$1"),r.alternate&&(t=d.call(t,b,"$1."),t=d.call(t,v,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):y.call(t)}function U(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function I(r,e,t){var n=e-r.length;return n<0?r:r=t?r+U(n):U(n)+r}var S=String.fromCharCode,x=isNaN,k=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,i,a,o,u,f,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(s(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,x(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=I(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function O(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function $(r){var e,t,n;if(!V(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=O(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return j.apply(null,t)}var G,H=Object.prototype,W=H.toString,C=H.__defineGetter__,L=H.__defineSetter__,P=H.__lookupGetter__,R=H.__lookupSetter__;G=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===W.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=H,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,t.get),o&&L&&L.call(r,e,t.set),r};var Z,X=G,Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";Z=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return z.call(r);t=r[B],a=B,e=null!=(i=r)&&M.call(i,a);try{r[B]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[B]=t:delete r[B],n}:function(r){return z.call(r)};var D,J=Z,K="function"==typeof Uint32Array,Q="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(K&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,tr=D,nr="function"==typeof Float64Array,ir="function"==typeof Float64Array?Float64Array:null,ar="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),t=e,r=(nr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,cr=er,ur="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,lr="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),t=e,r=(ur&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var sr,pr=or,yr="function"==typeof Uint16Array,gr="function"==typeof Uint16Array?Uint16Array:null,dr="function"==typeof Uint16Array?Uint16Array:void 0;sr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(yr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,wr={uint16:sr,uint8:pr};(hr=new wr.uint16(1))[0]=4660;var br,vr,mr=52===new wr.uint8(hr.buffer)[0];!0===mr?(br=1,vr=0):(br=0,vr=1);var Ar={HIGH:br,LOW:vr},_r=new cr(1),Er=new tr(_r.buffer),Ur=Ar.HIGH,Ir=Ar.LOW;function Sr(r,e,t,n){return _r[0]=r,e[n]=Er[Ur],e[n+t]=Er[Ir],e}function xr(r){return Sr(r,[0,0],1,0)}X(xr,"assign",{configurable:!1,enumerable:!1,writable:!1,value:Sr});var kr,Fr,jr=!0===mr?1:0,Tr=new cr(1),Nr=new tr(Tr.buffer);function Or(r){return Tr[0]=r,Nr[jr]}!0===mr?(kr=1,Fr=0):(kr=0,Fr=1);var Vr={HIGH:kr,LOW:Fr},$r=new cr(1),Gr=new tr($r.buffer),Hr=Vr.HIGH,Wr=Vr.LOW,Cr=[0,0];function Lr(r,e){var t,n,i,a;return xr.assign(r,Cr,1,0),t=Cr[0],t&=2147483647,n=Or(e),i=t|=n&=2147483648,a=Cr[1],Gr[Hr]=i,Gr[Wr]=a,$r[0]}function Pr(r){return r!=r}var Rr=1.5707963267948966,Zr=6123233995736766e-32,Xr=3.141592653589793;function Yr(n,i){var a;return Pr(i)||Pr(n)?NaN:t(i)?i===r?t(n)?Lr(Xr/4,n):Lr(0,n):t(n)?Lr(3*Xr/4,n):Lr(Xr,n):t(n)?Lr(Xr/2,n):0===n?i>=0&&!function(r){return!!(Or(r)>>>31)}(i)?Lr(0,n):Lr(Xr,n):0===i?Lr(Xr/2,n):(a=function(t){var n,i,a,o;return Pr(t)||0===t?t:t===r?Rr:t===e?-Rr:(t<0&&(i=!0,t=-t),n=0,t>2.414213562373095?(a=Rr,n=1,t=-1/t):t<=.66?a=0:(a=.7853981633974483,n=2,t=(t-1)/(t+1)),o=(o=t*t)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=t*o+t,2===n?o+=.5*Zr:1===n&&(o+=Zr),a+=o,i?-a:a)}(n/i),i<0?a<=0?a+Xr:a-Xr:a)}return function(r){return Yr(function(r){return r.im}(r),function(r){return r.re}(r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cphase=e();
//# sourceMappingURL=browser.js.map
