// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,o=t,e=r,i=function(n){return n===o||n===e},u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),f=Object.prototype.toString,c=f,a=function(n){return c.call(n)},y=Object.prototype.hasOwnProperty,l=function(n,t){return null!=n&&y.call(n,t)},p="function"==typeof Symbol?Symbol.toStringTag:"",A=l,b=p,w=f,U=a,d=function(n){var t,r,o;if(null==n)return w.call(n);r=n[b],t=A(n,b);try{n[b]=void 0}catch(t){return w.call(n)}return o=w.call(n),t?n[b]=r:delete n[b],o},m=u&&"symbol"==typeof Symbol.toStringTag?d:U,v=m,s="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,I=function(n){return s&&n instanceof Uint32Array||"[object Uint32Array]"===v(n)},N=h,F=function(){var n,t;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,4294967296,4294967297]),n=I(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},S="function"==typeof Uint32Array?Uint32Array:void 0,g=function(){throw new Error("not implemented")},H=F()?S:g,O=m,T="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,E=function(n){return T&&n instanceof Float64Array||"[object Float64Array]"===O(n)},G=j,L=function(){var n,t;if("function"!=typeof G)return!1;try{t=new G([1,3.14,-3.14,NaN]),n=E(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},W="function"==typeof Float64Array?Float64Array:void 0,x=function(){throw new Error("not implemented")},P=L()?W:x,V=m,Y="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,k=function(n){return Y&&n instanceof Uint8Array||"[object Uint8Array]"===V(n)},q=_,z=function(){var n,t;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,256,257]),n=k(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},B="function"==typeof Uint8Array?Uint8Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,J=m,K="function"==typeof Uint16Array,M="function"==typeof Uint16Array?Uint16Array:null,Q=function(n){return K&&n instanceof Uint16Array||"[object Uint16Array]"===J(n)},R=M,X=function(){var n,t;if("function"!=typeof R)return!1;try{t=new R(t=[1,3.14,-3.14,65536,65537]),n=Q(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Z="function"==typeof Uint16Array?Uint16Array:void 0,$=function(){throw new Error("not implemented")},nn={uint16:X()?Z:$,uint8:D};(n=new nn.uint16(1))[0]=4660;var tn,rn,on=52===new nn.uint8(n.buffer)[0];!0===on?(tn=1,rn=0):(tn=0,rn=1);var en,un,fn=H,cn={HIGH:tn,LOW:rn},an=new P(1),yn=new fn(an.buffer),ln=cn.HIGH,pn=cn.LOW,An=function(n,t){return an[0]=t,n[0]=yn[ln],n[1]=yn[pn],n},bn=function(n,t){return 1===arguments.length?An([0,0],n):An(n,t)},wn=bn,Un=H,dn=!0===on?1:0,mn=new P(1),vn=new Un(mn.buffer),sn=function(n){return mn[0]=n,vn[dn]};!0===on?(en=1,un=0):(en=0,un=1);var hn=H,In={HIGH:en,LOW:un},Nn=new P(1),Fn=new hn(Nn.buffer),Sn=In.HIGH,gn=In.LOW,Hn=function(n,t){return Fn[Sn]=n,Fn[gn]=t,Nn[0]},On=wn,Tn=sn,jn=Hn,En=[0,0],Gn=sn,Ln=function(n){return n!=n},Wn=Ln,xn=t,Pn=1.5707963267948966,Vn=r,Yn=function(n){return 0===n?-64.85021904942025:n*(n*(n*(-.8750608600031904*n-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025},_n=function(n){return 0===n?194.5506571482614:194.5506571482614+n*(485.3903996359137+n*(432.88106049129027+n*(165.02700983169885+n*(24.858464901423062+1*n))))},kn=6123233995736766e-32,qn=i,zn=function(n,t){var r,o;return On(En,n),r=En[0],r&=2147483647,o=Tn(t),jn(r|=o&=2147483648,En[1])},Bn=function(n){return!!(Gn(n)>>>31)},Cn=Ln,Dn=function(n){var t,r,o,e;return Wn(n)||0===n?n:n===xn?Pn:n===Vn?-Pn:(n<0&&(r=!0,n=-n),t=0,n>2.414213562373095?(o=Pn,t=1,n=-1/n):n<=.66?o=0:(o=.7853981633974483,t=2,n=(n-1)/(n+1)),e=n*(e=(e=n*n)*Yn(e)/_n(e))+n,2===t?e+=.5*kn:1===t&&(e+=kn),o+=e,r?-o:o)},Jn=t,Kn=3.141592653589793,Mn=function(n,t){var r;return Cn(t)||Cn(n)?NaN:qn(t)?t===Jn?qn(n)?zn(Kn/4,n):zn(0,n):qn(n)?zn(3*Kn/4,n):zn(Kn,n):qn(n)?zn(Kn/2,n):0===n?t>=0&&!Bn(t)?zn(0,n):zn(Kn,n):0===t?zn(Kn/2,n):(r=Dn(n/t),t<0?r<=0?r+Kn:r-Kn:r)};return function(n,t){return Mn(t,n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).cphase=t();
//# sourceMappingURL=index.js.map
