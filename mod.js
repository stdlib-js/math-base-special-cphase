// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;function t(t){return t===r||t===e}var n=2147483648,i=2147483647,a="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function c(r){return"number"==typeof r}function u(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function f(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+u(i):u(i)+r,n&&(r="-"+r)),r}var l=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function p(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=f(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=f(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var y=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,v=String.prototype.replace,h=/e\+(\d)$/,w=/e-(\d)$/,b=/^(\d+)$/,m=/^(\d+)e/,A=/\.0$/,_=/\.0*e/,E=/(\..*[^0])0*e/;function U(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!c(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":y(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=v.call(t,E,"$1e"),t=v.call(t,_,"e"),t=v.call(t,A,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=v.call(t,h,"e+0$1"),t=v.call(t,w,"e-0$1"),r.alternate&&(t=v.call(t,b,"$1."),t=v.call(t,m,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):g.call(t)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var I=String.fromCharCode,k=Array.isArray;function x(r){return r!=r}function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,i,a,o,c,u,l,s,y,g,d;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)o+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,x(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):I(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=U(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-s.length)<0?s:s=g?s+S(d):S(d)+s)),o+=n.arg||"",c+=1}return o}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){var e,t;if("string"!=typeof r)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return j.apply(null,e)}var $,G=Object.prototype,H=G.toString,W=G.__defineGetter__,C=G.__defineSetter__,L=G.__lookupGetter__,P=G.__lookupSetter__;$=function(){try{return a({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||P.call(r,e)?(n=r.__proto__,r.__proto__=G,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&W&&W.call(r,e,t.get),o&&C&&C.call(r,e,t.set),r};var R=$;var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var z,M="function"==typeof Symbol?Symbol:void 0,q="function"==typeof M?M.toStringTag:"";z=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return X.call(r);t=r[q],a=q,e=null!=(i=r)&&Y.call(i,a);try{r[q]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[q]=t:delete r[q],n}:function(r){return X.call(r)};var B=z,D="function"==typeof Uint32Array;var J="function"==typeof Uint32Array?Uint32Array:null;var K,Q="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(D&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr=K,er="function"==typeof Float64Array;var tr="function"==typeof Float64Array?Float64Array:null;var nr,ir="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,NaN]),t=e,r=(er&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=nr,or="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null;var ur,fr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),t=e,r=(or&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var lr=ur,sr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var yr,gr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(sr&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,vr={uint16:yr,uint8:lr};(dr=new vr.uint16(1))[0]=4660;var hr,wr,br=52===new vr.uint8(dr.buffer)[0];!0===br?(hr=1,wr=0):(hr=0,wr=1);var mr={HIGH:hr,LOW:wr},Ar=new ar(1),_r=new rr(Ar.buffer),Er=mr.HIGH,Ur=mr.LOW;function Sr(r,e,t,n){return Ar[0]=r,e[n]=_r[Er],e[n+t]=_r[Ur],e}function Ir(r){return Sr(r,[0,0],1,0)}R(Ir,"assign",{configurable:!1,enumerable:!1,writable:!1,value:Sr});var kr,xr,Fr=!0===br?1:0,jr=new ar(1),Tr=new rr(jr.buffer);function Or(r){return jr[0]=r,Tr[Fr]}!0===br?(kr=1,xr=0):(kr=0,xr=1);var Vr={HIGH:kr,LOW:xr},Nr=new ar(1),$r=new rr(Nr.buffer),Gr=Vr.HIGH,Hr=Vr.LOW;var Wr=[0,0];function Cr(r,e){var t,a,o,c;return Ir.assign(r,Wr,1,0),t=Wr[0],t&=i,a=Or(e),o=t|=a&=n,c=Wr[1],$r[Gr]=o,$r[Hr]=c,Nr[0]}function Lr(r){return r!=r}var Pr=1.5707963267948966,Rr=.7853981633974483;var Zr=6123233995736766e-32,Xr=2.414213562373095;var Yr=3.141592653589793;function zr(n,i){var a;return Lr(i)||Lr(n)?NaN:t(i)?i===r?t(n)?Cr(Yr/4,n):Cr(0,n):t(n)?Cr(3*Yr/4,n):Cr(Yr,n):t(n)?Cr(Yr/2,n):0===n?i>=0&&!function(r){return!!(Or(r)>>>31)}(i)?Cr(0,n):Cr(Yr,n):0===i?Cr(Yr/2,n):(a=function(t){var n,i,a,o;return Lr(t)||0===t?t:t===r?Pr:t===e?-Pr:(t<0&&(i=!0,t=-t),n=0,t>Xr?(a=Pr,n=1,t=-1/t):t<=.66?a=0:(a=Rr,n=2,t=(t-1)/(t+1)),o=(o=t*t)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=t*o+t,2===n?o+=.5*Zr:1===n&&(o+=Zr),a+=o,i?-a:a)}(n/i),i<0?a<=0?a+Yr:a-Yr:a)}function Mr(r){return zr(function(r){return r.im}(r),function(r){return r.re}(r))}export{Mr as default};
//# sourceMappingURL=mod.js.map
