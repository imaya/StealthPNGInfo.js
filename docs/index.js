/******/ var __webpack_modules__ = ({

/***/ 594:
/***/ (function() {

/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';function n(e){throw e;}var p=void 0,aa=this;function t(e,b){var d=e.split("."),c=aa;!(d[0]in c)&&c.execScript&&c.execScript("var "+d[0]);for(var a;d.length&&(a=d.shift());)!d.length&&b!==p?c[a]=b:c=c[a]?c[a]:c[a]={}};var x="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;new (x?Uint8Array:Array)(256);var y;for(y=0;256>y;++y)for(var A=y,ba=7,A=A>>>1;A;A>>>=1)--ba;function B(e,b,d){var c,a="number"===typeof b?b:b=0,f="number"===typeof d?d:e.length;c=-1;for(a=f&7;a--;++b)c=c>>>8^C[(c^e[b])&255];for(a=f>>3;a--;b+=8)c=c>>>8^C[(c^e[b])&255],c=c>>>8^C[(c^e[b+1])&255],c=c>>>8^C[(c^e[b+2])&255],c=c>>>8^C[(c^e[b+3])&255],c=c>>>8^C[(c^e[b+4])&255],c=c>>>8^C[(c^e[b+5])&255],c=c>>>8^C[(c^e[b+6])&255],c=c>>>8^C[(c^e[b+7])&255];return(c^4294967295)>>>0}
var D=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,
2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,
2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,
2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,
3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,
936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],C=x?new Uint32Array(D):D;function E(){}E.prototype.getName=function(){return this.name};E.prototype.getData=function(){return this.data};E.prototype.G=function(){return this.H};function G(e){var b=e.length,d=0,c=Number.POSITIVE_INFINITY,a,f,k,l,m,r,q,g,h,v;for(g=0;g<b;++g)e[g]>d&&(d=e[g]),e[g]<c&&(c=e[g]);a=1<<d;f=new (x?Uint32Array:Array)(a);k=1;l=0;for(m=2;k<=d;){for(g=0;g<b;++g)if(e[g]===k){r=0;q=l;for(h=0;h<k;++h)r=r<<1|q&1,q>>=1;v=k<<16|g;for(h=r;h<a;h+=m)f[h]=v;++l}++k;l<<=1;m<<=1}return[f,d,c]};var J=[],K;for(K=0;288>K;K++)switch(!0){case 143>=K:J.push([K+48,8]);break;case 255>=K:J.push([K-144+400,9]);break;case 279>=K:J.push([K-256+0,7]);break;case 287>=K:J.push([K-280+192,8]);break;default:n("invalid literal: "+K)}
var ca=function(){function e(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,
a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:n("invalid length: "+a)}}var b=[],d,c;for(d=3;258>=d;d++)c=e(d),b[d]=c[2]<<24|c[1]<<
16|c[0];return b}();x&&new Uint32Array(ca);function L(e,b){this.i=[];this.j=32768;this.d=this.f=this.c=this.n=0;this.input=x?new Uint8Array(e):e;this.o=!1;this.k=M;this.w=!1;if(b||!(b={}))b.index&&(this.c=b.index),b.bufferSize&&(this.j=b.bufferSize),b.bufferType&&(this.k=b.bufferType),b.resize&&(this.w=b.resize);switch(this.k){case N:this.a=32768;this.b=new (x?Uint8Array:Array)(32768+this.j+258);break;case M:this.a=0;this.b=new (x?Uint8Array:Array)(this.j);this.e=this.D;this.q=this.A;this.l=this.C;break;default:n(Error("invalid inflate mode"))}}
var N=0,M=1;
L.prototype.g=function(){for(;!this.o;){var e=P(this,3);e&1&&(this.o=!0);e>>>=1;switch(e){case 0:var b=this.input,d=this.c,c=this.b,a=this.a,f=b.length,k=p,l=p,m=c.length,r=p;this.d=this.f=0;d+1>=f&&n(Error("invalid uncompressed block header: LEN"));k=b[d++]|b[d++]<<8;d+1>=f&&n(Error("invalid uncompressed block header: NLEN"));l=b[d++]|b[d++]<<8;k===~l&&n(Error("invalid uncompressed block header: length verify"));d+k>b.length&&n(Error("input buffer is broken"));switch(this.k){case N:for(;a+k>c.length;){r=
m-a;k-=r;if(x)c.set(b.subarray(d,d+r),a),a+=r,d+=r;else for(;r--;)c[a++]=b[d++];this.a=a;c=this.e();a=this.a}break;case M:for(;a+k>c.length;)c=this.e({t:2});break;default:n(Error("invalid inflate mode"))}if(x)c.set(b.subarray(d,d+k),a),a+=k,d+=k;else for(;k--;)c[a++]=b[d++];this.c=d;this.a=a;this.b=c;break;case 1:this.l(da,ea);break;case 2:for(var q=P(this,5)+257,g=P(this,5)+1,h=P(this,4)+4,v=new (x?Uint8Array:Array)(Q.length),s=p,F=p,H=p,w=p,z=p,O=p,I=p,u=p,Z=p,u=0;u<h;++u)v[Q[u]]=P(this,3);if(!x){u=
h;for(h=v.length;u<h;++u)v[Q[u]]=0}s=G(v);w=new (x?Uint8Array:Array)(q+g);u=0;for(Z=q+g;u<Z;)switch(z=R(this,s),z){case 16:for(I=3+P(this,2);I--;)w[u++]=O;break;case 17:for(I=3+P(this,3);I--;)w[u++]=0;O=0;break;case 18:for(I=11+P(this,7);I--;)w[u++]=0;O=0;break;default:O=w[u++]=z}F=x?G(w.subarray(0,q)):G(w.slice(0,q));H=x?G(w.subarray(q)):G(w.slice(q));this.l(F,H);break;default:n(Error("unknown BTYPE: "+e))}}return this.q()};
var S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=x?new Uint16Array(S):S,fa=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],ga=x?new Uint16Array(fa):fa,ha=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],T=x?new Uint8Array(ha):ha,ia=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],ja=x?new Uint16Array(ia):ia,ka=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,
11,12,12,13,13],U=x?new Uint8Array(ka):ka,V=new (x?Uint8Array:Array)(288),W,la;W=0;for(la=V.length;W<la;++W)V[W]=143>=W?8:255>=W?9:279>=W?7:8;var da=G(V),X=new (x?Uint8Array:Array)(30),Y,ma;Y=0;for(ma=X.length;Y<ma;++Y)X[Y]=5;var ea=G(X);function P(e,b){for(var d=e.f,c=e.d,a=e.input,f=e.c,k=a.length,l;c<b;)f>=k&&n(Error("input buffer is broken")),d|=a[f++]<<c,c+=8;l=d&(1<<b)-1;e.f=d>>>b;e.d=c-b;e.c=f;return l}
function R(e,b){for(var d=e.f,c=e.d,a=e.input,f=e.c,k=a.length,l=b[0],m=b[1],r,q;c<m&&!(f>=k);)d|=a[f++]<<c,c+=8;r=l[d&(1<<m)-1];q=r>>>16;q>c&&n(Error("invalid code length: "+q));e.f=d>>q;e.d=c-q;e.c=f;return r&65535}
L.prototype.l=function(e,b){var d=this.b,c=this.a;this.r=e;for(var a=d.length-258,f,k,l,m;256!==(f=R(this,e));)if(256>f)c>=a&&(this.a=c,d=this.e(),c=this.a),d[c++]=f;else{k=f-257;m=ga[k];0<T[k]&&(m+=P(this,T[k]));f=R(this,b);l=ja[f];0<U[f]&&(l+=P(this,U[f]));c>=a&&(this.a=c,d=this.e(),c=this.a);for(;m--;)d[c]=d[c++-l]}for(;8<=this.d;)this.d-=8,this.c--;this.a=c};
L.prototype.C=function(e,b){var d=this.b,c=this.a;this.r=e;for(var a=d.length,f,k,l,m;256!==(f=R(this,e));)if(256>f)c>=a&&(d=this.e(),a=d.length),d[c++]=f;else{k=f-257;m=ga[k];0<T[k]&&(m+=P(this,T[k]));f=R(this,b);l=ja[f];0<U[f]&&(l+=P(this,U[f]));c+m>a&&(d=this.e(),a=d.length);for(;m--;)d[c]=d[c++-l]}for(;8<=this.d;)this.d-=8,this.c--;this.a=c};
L.prototype.e=function(){var e=new (x?Uint8Array:Array)(this.a-32768),b=this.a-32768,d,c,a=this.b;if(x)e.set(a.subarray(32768,e.length));else{d=0;for(c=e.length;d<c;++d)e[d]=a[d+32768]}this.i.push(e);this.n+=e.length;if(x)a.set(a.subarray(b,b+32768));else for(d=0;32768>d;++d)a[d]=a[b+d];this.a=32768;return a};
L.prototype.D=function(e){var b,d=this.input.length/this.c+1|0,c,a,f,k=this.input,l=this.b;e&&("number"===typeof e.t&&(d=e.t),"number"===typeof e.z&&(d+=e.z));2>d?(c=(k.length-this.c)/this.r[2],f=258*(c/2)|0,a=f<l.length?l.length+f:l.length<<1):a=l.length*d;x?(b=new Uint8Array(a),b.set(l)):b=l;return this.b=b};
L.prototype.q=function(){var e=0,b=this.b,d=this.i,c,a=new (x?Uint8Array:Array)(this.n+(this.a-32768)),f,k,l,m;if(0===d.length)return x?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);f=0;for(k=d.length;f<k;++f){c=d[f];l=0;for(m=c.length;l<m;++l)a[e++]=c[l]}f=32768;for(k=this.a;f<k;++f)a[e++]=b[f];this.i=[];return this.buffer=a};
L.prototype.A=function(){var e,b=this.a;x?this.w?(e=new Uint8Array(b),e.set(this.b.subarray(0,b))):e=this.b.subarray(0,b):(this.b.length>b&&(this.b.length=b),e=this.b);return this.buffer=e};function $(e){this.input=e;this.c=0;this.m=[];this.s=!1}$.prototype.F=function(){this.s||this.g();return this.m.slice()};
$.prototype.g=function(){for(var e=this.input.length;this.c<e;){var b=new E,d=p,c=p,a=p,f=p,k=p,l=p,m=p,r=p,q=p,g=this.input,h=this.c;b.u=g[h++];b.v=g[h++];(31!==b.u||139!==b.v)&&n(Error("invalid file signature:"+b.u+","+b.v));b.p=g[h++];switch(b.p){case 8:break;default:n(Error("unknown compression method: "+b.p))}b.h=g[h++];r=g[h++]|g[h++]<<8|g[h++]<<16|g[h++]<<24;b.H=new Date(1E3*r);b.N=g[h++];b.M=g[h++];0<(b.h&4)&&(b.I=g[h++]|g[h++]<<8,h+=b.I);if(0<(b.h&8)){m=[];for(l=0;0<(k=g[h++]);)m[l++]=String.fromCharCode(k);
b.name=m.join("")}if(0<(b.h&16)){m=[];for(l=0;0<(k=g[h++]);)m[l++]=String.fromCharCode(k);b.J=m.join("")}0<(b.h&2)&&(b.B=B(g,0,h)&65535,b.B!==(g[h++]|g[h++]<<8)&&n(Error("invalid header crc16")));d=g[g.length-4]|g[g.length-3]<<8|g[g.length-2]<<16|g[g.length-1]<<24;g.length-h-4-4<512*d&&(f=d);c=new L(g,{index:h,bufferSize:f});b.data=a=c.g();h=c.c;b.K=q=(g[h++]|g[h++]<<8|g[h++]<<16|g[h++]<<24)>>>0;B(a,p,p)!==q&&n(Error("invalid CRC-32 checksum: 0x"+B(a,p,p).toString(16)+" / 0x"+q.toString(16)));b.L=
d=(g[h++]|g[h++]<<8|g[h++]<<16|g[h++]<<24)>>>0;(a.length&4294967295)!==d&&n(Error("invalid input size: "+(a.length&4294967295)+" / "+d));this.m.push(b);this.c=h}this.s=!0;var v=this.m,s,F,H=0,w=0,z;s=0;for(F=v.length;s<F;++s)w+=v[s].data.length;if(x){z=new Uint8Array(w);for(s=0;s<F;++s)z.set(v[s].data,H),H+=v[s].data.length}else{z=[];for(s=0;s<F;++s)z[s]=v[s].data;z=Array.prototype.concat.apply([],z)}return z};t("Zlib.Gunzip",$);t("Zlib.Gunzip.prototype.decompress",$.prototype.g);t("Zlib.Gunzip.prototype.getMembers",$.prototype.F);t("Zlib.GunzipMember",E);t("Zlib.GunzipMember.prototype.getName",E.prototype.getName);t("Zlib.GunzipMember.prototype.getData",E.prototype.getData);t("Zlib.GunzipMember.prototype.getMtime",E.prototype.G);}).call(this);


/***/ }),

/***/ 106:
/***/ (function() {

/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';var l=void 0,aa=this;function r(c,d){var a=c.split("."),b=aa;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)!a.length&&d!==l?b[e]=d:b=b[e]?b[e]:b[e]={}};var t="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function v(c){var d=c.length,a=0,b=Number.POSITIVE_INFINITY,e,f,g,h,k,m,n,p,s,x;for(p=0;p<d;++p)c[p]>a&&(a=c[p]),c[p]<b&&(b=c[p]);e=1<<a;f=new (t?Uint32Array:Array)(e);g=1;h=0;for(k=2;g<=a;){for(p=0;p<d;++p)if(c[p]===g){m=0;n=h;for(s=0;s<g;++s)m=m<<1|n&1,n>>=1;x=g<<16|p;for(s=m;s<e;s+=k)f[s]=x;++h}++g;h<<=1;k<<=1}return[f,a,b]};function w(c,d){this.g=[];this.h=32768;this.d=this.f=this.a=this.l=0;this.input=t?new Uint8Array(c):c;this.m=!1;this.i=y;this.r=!1;if(d||!(d={}))d.index&&(this.a=d.index),d.bufferSize&&(this.h=d.bufferSize),d.bufferType&&(this.i=d.bufferType),d.resize&&(this.r=d.resize);switch(this.i){case A:this.b=32768;this.c=new (t?Uint8Array:Array)(32768+this.h+258);break;case y:this.b=0;this.c=new (t?Uint8Array:Array)(this.h);this.e=this.z;this.n=this.v;this.j=this.w;break;default:throw Error("invalid inflate mode");
}}var A=0,y=1,B={t:A,s:y};
w.prototype.k=function(){for(;!this.m;){var c=C(this,3);c&1&&(this.m=!0);c>>>=1;switch(c){case 0:var d=this.input,a=this.a,b=this.c,e=this.b,f=d.length,g=l,h=l,k=b.length,m=l;this.d=this.f=0;if(a+1>=f)throw Error("invalid uncompressed block header: LEN");g=d[a++]|d[a++]<<8;if(a+1>=f)throw Error("invalid uncompressed block header: NLEN");h=d[a++]|d[a++]<<8;if(g===~h)throw Error("invalid uncompressed block header: length verify");if(a+g>d.length)throw Error("input buffer is broken");switch(this.i){case A:for(;e+
g>b.length;){m=k-e;g-=m;if(t)b.set(d.subarray(a,a+m),e),e+=m,a+=m;else for(;m--;)b[e++]=d[a++];this.b=e;b=this.e();e=this.b}break;case y:for(;e+g>b.length;)b=this.e({p:2});break;default:throw Error("invalid inflate mode");}if(t)b.set(d.subarray(a,a+g),e),e+=g,a+=g;else for(;g--;)b[e++]=d[a++];this.a=a;this.b=e;this.c=b;break;case 1:this.j(ba,ca);break;case 2:for(var n=C(this,5)+257,p=C(this,5)+1,s=C(this,4)+4,x=new (t?Uint8Array:Array)(D.length),S=l,T=l,U=l,u=l,M=l,F=l,z=l,q=l,V=l,q=0;q<s;++q)x[D[q]]=
C(this,3);if(!t){q=s;for(s=x.length;q<s;++q)x[D[q]]=0}S=v(x);u=new (t?Uint8Array:Array)(n+p);q=0;for(V=n+p;q<V;)switch(M=E(this,S),M){case 16:for(z=3+C(this,2);z--;)u[q++]=F;break;case 17:for(z=3+C(this,3);z--;)u[q++]=0;F=0;break;case 18:for(z=11+C(this,7);z--;)u[q++]=0;F=0;break;default:F=u[q++]=M}T=t?v(u.subarray(0,n)):v(u.slice(0,n));U=t?v(u.subarray(n)):v(u.slice(n));this.j(T,U);break;default:throw Error("unknown BTYPE: "+c);}}return this.n()};
var G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=t?new Uint16Array(G):G,H=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],I=t?new Uint16Array(H):H,J=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],K=t?new Uint8Array(J):J,L=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],da=t?new Uint16Array(L):L,ea=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,
13,13],N=t?new Uint8Array(ea):ea,O=new (t?Uint8Array:Array)(288),P,fa;P=0;for(fa=O.length;P<fa;++P)O[P]=143>=P?8:255>=P?9:279>=P?7:8;var ba=v(O),Q=new (t?Uint8Array:Array)(30),R,ga;R=0;for(ga=Q.length;R<ga;++R)Q[R]=5;var ca=v(Q);function C(c,d){for(var a=c.f,b=c.d,e=c.input,f=c.a,g=e.length,h;b<d;){if(f>=g)throw Error("input buffer is broken");a|=e[f++]<<b;b+=8}h=a&(1<<d)-1;c.f=a>>>d;c.d=b-d;c.a=f;return h}
function E(c,d){for(var a=c.f,b=c.d,e=c.input,f=c.a,g=e.length,h=d[0],k=d[1],m,n;b<k&&!(f>=g);)a|=e[f++]<<b,b+=8;m=h[a&(1<<k)-1];n=m>>>16;if(n>b)throw Error("invalid code length: "+n);c.f=a>>n;c.d=b-n;c.a=f;return m&65535}
w.prototype.j=function(c,d){var a=this.c,b=this.b;this.o=c;for(var e=a.length-258,f,g,h,k;256!==(f=E(this,c));)if(256>f)b>=e&&(this.b=b,a=this.e(),b=this.b),a[b++]=f;else{g=f-257;k=I[g];0<K[g]&&(k+=C(this,K[g]));f=E(this,d);h=da[f];0<N[f]&&(h+=C(this,N[f]));b>=e&&(this.b=b,a=this.e(),b=this.b);for(;k--;)a[b]=a[b++-h]}for(;8<=this.d;)this.d-=8,this.a--;this.b=b};
w.prototype.w=function(c,d){var a=this.c,b=this.b;this.o=c;for(var e=a.length,f,g,h,k;256!==(f=E(this,c));)if(256>f)b>=e&&(a=this.e(),e=a.length),a[b++]=f;else{g=f-257;k=I[g];0<K[g]&&(k+=C(this,K[g]));f=E(this,d);h=da[f];0<N[f]&&(h+=C(this,N[f]));b+k>e&&(a=this.e(),e=a.length);for(;k--;)a[b]=a[b++-h]}for(;8<=this.d;)this.d-=8,this.a--;this.b=b};
w.prototype.e=function(){var c=new (t?Uint8Array:Array)(this.b-32768),d=this.b-32768,a,b,e=this.c;if(t)c.set(e.subarray(32768,c.length));else{a=0;for(b=c.length;a<b;++a)c[a]=e[a+32768]}this.g.push(c);this.l+=c.length;if(t)e.set(e.subarray(d,d+32768));else for(a=0;32768>a;++a)e[a]=e[d+a];this.b=32768;return e};
w.prototype.z=function(c){var d,a=this.input.length/this.a+1|0,b,e,f,g=this.input,h=this.c;c&&("number"===typeof c.p&&(a=c.p),"number"===typeof c.u&&(a+=c.u));2>a?(b=(g.length-this.a)/this.o[2],f=258*(b/2)|0,e=f<h.length?h.length+f:h.length<<1):e=h.length*a;t?(d=new Uint8Array(e),d.set(h)):d=h;return this.c=d};
w.prototype.n=function(){var c=0,d=this.c,a=this.g,b,e=new (t?Uint8Array:Array)(this.l+(this.b-32768)),f,g,h,k;if(0===a.length)return t?this.c.subarray(32768,this.b):this.c.slice(32768,this.b);f=0;for(g=a.length;f<g;++f){b=a[f];h=0;for(k=b.length;h<k;++h)e[c++]=b[h]}f=32768;for(g=this.b;f<g;++f)e[c++]=d[f];this.g=[];return this.buffer=e};
w.prototype.v=function(){var c,d=this.b;t?this.r?(c=new Uint8Array(d),c.set(this.c.subarray(0,d))):c=this.c.subarray(0,d):(this.c.length>d&&(this.c.length=d),c=this.c);return this.buffer=c};function W(c,d){var a,b;this.input=c;this.a=0;if(d||!(d={}))d.index&&(this.a=d.index),d.verify&&(this.A=d.verify);a=c[this.a++];b=c[this.a++];switch(a&15){case ha:this.method=ha;break;default:throw Error("unsupported compression method");}if(0!==((a<<8)+b)%31)throw Error("invalid fcheck flag:"+((a<<8)+b)%31);if(b&32)throw Error("fdict flag is not supported");this.q=new w(c,{index:this.a,bufferSize:d.bufferSize,bufferType:d.bufferType,resize:d.resize})}
W.prototype.k=function(){var c=this.input,d,a;d=this.q.k();this.a=this.q.a;if(this.A){a=(c[this.a++]<<24|c[this.a++]<<16|c[this.a++]<<8|c[this.a++])>>>0;var b=d;if("string"===typeof b){var e=b.split(""),f,g;f=0;for(g=e.length;f<g;f++)e[f]=(e[f].charCodeAt(0)&255)>>>0;b=e}for(var h=1,k=0,m=b.length,n,p=0;0<m;){n=1024<m?1024:m;m-=n;do h+=b[p++],k+=h;while(--n);h%=65521;k%=65521}if(a!==(k<<16|h)>>>0)throw Error("invalid adler-32 checksum");}return d};var ha=8;r("Zlib.Inflate",W);r("Zlib.Inflate.prototype.decompress",W.prototype.k);var X={ADAPTIVE:B.s,BLOCK:B.t},Y,Z,$,ia;if(Object.keys)Y=Object.keys(X);else for(Z in Y=[],$=0,X)Y[$++]=Z;$=0;for(ia=Y.length;$<ia;++$)Z=Y[$],r("Zlib.Inflate.BufferType."+Z,X[Z]);}).call(this);


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nccwpck_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__nccwpck_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nccwpck_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ StealthPngInfoParser)
});

// EXTERNAL MODULE: ./node_modules/zlibjs/bin/gunzip.min.js
var gunzip_min = __nccwpck_require__(594);
var gunzip_min_default = /*#__PURE__*/__nccwpck_require__.n(gunzip_min);
;// CONCATENATED MODULE: ./src/stealth_pnginfo.ts
//
// This TypeScript code is a port of the original python code.
// The original code can be found at https://github.com/ashen-sensored/sd_webui_stealth_pnginfo
//

const gunzip = (gunzip_min_default()).Zlib.Gunzip;
function readInfoFromImageStealth(pixels, width, height, hasAlpha) {
    let mode = null;
    let compressed = false;
    let binaryData = '';
    let bufferA = '';
    let bufferRGB = '';
    let indexA = 0;
    let indexRGB = 0;
    let sigConfirmed = false;
    let confirmingSignature = true;
    let readingParamLength = false;
    let readingParam = false;
    let readEnd = false;
    let paramLength = 0;
    for (let x = 0; x < width; ++x) {
        for (let y = 0; y < height; ++y) {
            let r, g, b, a;
            if (hasAlpha) {
                r = pixels[(y * width + x) * 4];
                g = pixels[(y * width + x) * 4 + 1];
                b = pixels[(y * width + x) * 4 + 2];
                a = pixels[(y * width + x) * 4 + 3];
                bufferA += a & 1;
                indexA += 1;
            }
            else {
                r = pixels[(y * width + x) * 3];
                g = pixels[(y * width + x) * 3 + 1];
                b = pixels[(y * width + x) * 3 + 2];
            }
            bufferRGB += r & 1;
            bufferRGB += g & 1;
            bufferRGB += b & 1;
            indexRGB += 3;
            if (confirmingSignature) {
                if (indexA === 'stealth_pnginfo'.length * 8) {
                    let decodedSig = "";
                    for (let i = 0, il = bufferA.length; i < il; i += 8) {
                        decodedSig += String.fromCharCode(parseInt(bufferA.slice(i, i + 8), 2));
                    }
                    if (['stealth_pnginfo', 'stealth_pngcomp'].includes(decodedSig)) {
                        confirmingSignature = false;
                        sigConfirmed = true;
                        readingParamLength = true;
                        mode = 'alpha';
                        if (decodedSig == 'stealth_pngcomp') {
                            compressed = true;
                        }
                        bufferA = '';
                        indexA = 0;
                    }
                    else {
                        readEnd = true;
                        break;
                    }
                }
                else if (indexRGB == 'stealth_pnginfo'.length * 8) {
                    let decodedSig = "";
                    for (let i = 0, il = bufferRGB.length; i < il; i += 8) {
                        decodedSig += String.fromCharCode(parseInt(bufferRGB.slice(i, i + 8), 2));
                    }
                    if (['stealth_rgbinfo', 'stealth_rgbcomp'].includes(decodedSig)) {
                        confirmingSignature = false;
                        sigConfirmed = true;
                        readingParamLength = true;
                        mode = 'rgb';
                        if (decodedSig == 'stealth_rgbcomp') {
                            compressed = true;
                        }
                        bufferRGB = '';
                        indexRGB = 0;
                    }
                }
            }
            else if (readingParamLength) {
                if (mode == 'alpha') {
                    if (indexA == 32) {
                        paramLength = parseInt(bufferA, 2);
                        readingParamLength = false;
                        readingParam = true;
                        bufferA = '';
                        indexA = 0;
                    }
                }
                else {
                    if (indexRGB == 33) {
                        const pop = bufferRGB.slice(-1);
                        bufferRGB = bufferRGB.slice(0, -1);
                        paramLength = parseInt(bufferRGB, 2);
                        readingParamLength = false;
                        readingParam = true;
                        bufferRGB = pop;
                        indexRGB = 1;
                    }
                }
            }
            else if (readingParam) {
                if (mode == 'alpha') {
                    if (indexA == paramLength) {
                        binaryData = bufferA;
                        readEnd = true;
                        break;
                    }
                }
                else {
                    if (indexRGB >= paramLength) {
                        const diff = paramLength - indexRGB;
                        if (diff < 0) {
                            bufferRGB = bufferRGB.slice(0, diff);
                        }
                        binaryData = bufferRGB;
                        readEnd = true;
                        break;
                    }
                }
            }
            else {
                // impossible
                readEnd = true;
                break;
            }
        }
        if (readEnd) {
            break;
        }
    }
    if (sigConfirmed && binaryData !== '') {
        let byteData = new Uint8Array(binaryData.length / 8 | 0);
        for (let i = 0, il = binaryData.length / 8 | 0; i < il; ++i) {
            byteData[i] += parseInt(binaryData.slice(i * 8, i * 8 + 8), 2);
        }
        let decodedData;
        if (compressed) {
            decodedData = new gunzip(byteData).decompress();
        }
        else {
            decodedData = byteData;
        }
        const chars = [];
        for (let i = 0, il = decodedData.length; i < il; ++i) {
            chars.push(String.fromCharCode(decodedData[i]));
        }
        return chars.join('');
    }
    return null;
}


// EXTERNAL MODULE: ./node_modules/zlibjs/bin/inflate.min.js
var inflate_min = __nccwpck_require__(106);
var inflate_min_default = /*#__PURE__*/__nccwpck_require__.n(inflate_min);
;// CONCATENATED MODULE: ./src/png.identify.ts
/**
 * png file viewer in JavaScript
 *
 * The MIT License
 *
 * Copyright (c) 2012 imaya
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview png file viewer in JavaScript.
 */

class PngIdentify {
    constructor(input) {
        this.input = input;
        this.chunks = [];
        this.filters = [];
        this.width = -1;
        this.height = -1;
        this.bitDepth = -1;
        this.colourType = -1;
        this.compressionMethod = -1;
        this.filterMethod = -1;
        this.interlaceMethod = -1;
        //histgram: PngIdentifyBufferType
        this.pos = -1;
        this.palette = [];
        this.filterCount = [];
    }
    static isPNG(data) {
        for (let i = 0, il = PngIdentify.Signature.length; i < il; ++i) {
            if (data[i] !== PngIdentify.Signature[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * get pixel line filters.
     */
    getFilters(data) {
        let length;
        let rowFilters = [];
        let pos;
        let row;
        let scanlineLength;
        if (data.length === 0) {
            return [];
        }
        scanlineLength = (this.getByteLength(this.colourType) * this.bitDepth * this.width + 7) / 8 | 0;
        length = data.length;
        for (pos = 0, row = 0; pos < length; pos += scanlineLength) {
            rowFilters[row++] = data[pos++];
        }
        this.filters = rowFilters;
        return rowFilters;
    }
    /**
     * parse png chunks
     */
    parse() {
        const data = this.input;
        var chunk = this.chunks = [];
        var chunkSize;
        var section; // chunk type
        var pos;
        /*
        var crc32a: number
        var crc32b: number
        */
        var idat;
        var idatLength = 0;
        var idatChunk;
        var idatChunks = [];
        var palette = this.palette = [];
        /*
        // @type {!(Array.<number>|Uint8Array)}
        var histogram;
        // @type {number}
        var histogramTotal;
        */
        if (!PngIdentify.isPNG(data)) {
            throw new Error('invalid png file');
        }
        this.pos = 8;
        while (true) {
            // chunk position
            pos = this.pos;
            // chunk size
            chunkSize = ((data[this.pos++] << 24) | (data[this.pos++] << 16) |
                (data[this.pos++] << 8) | (data[this.pos++])) >>> 0;
            // chunk type
            section = (() => {
                var section = [];
                for (let i = 0; i < 4; i++) {
                    section.push(String.fromCharCode(data[this.pos++]));
                }
                return section.join('');
            })();
            // crc32-a
            /*
            crc32a = Zlib.CRC32.calc(
              USE_TYPEDARRAY ?
              data.subarray(this.pos - 4, this.pos + chunkSize) :
              data.slice(this.pos - 4, this.pos + chunkSize)
            );
            */
            // idat
            switch (section) {
                case 'IHDR':
                    this.width = ((data[this.pos++] << 24) | (data[this.pos++] << 16) |
                        (data[this.pos++] << 8) | (data[this.pos++])) >>> 0;
                    this.height = ((data[this.pos++] << 24) | (data[this.pos++] << 16) |
                        (data[this.pos++] << 8) | (data[this.pos++])) >>> 0;
                    this.bitDepth = data[this.pos++];
                    this.colourType = data[this.pos++];
                    this.compressionMethod = data[this.pos++];
                    this.filterMethod = data[this.pos++];
                    this.interlaceMethod = data[this.pos++];
                    break;
                case 'IDAT':
                    idatChunks.push(subarray(data, this.pos, this.pos += chunkSize));
                    idatLength += chunkSize;
                    break;
                case 'PLTE':
                    for (let i = 0, j = 0; i < chunkSize; i += 3) {
                        palette[j++] =
                            [data[this.pos++], data[this.pos++], data[this.pos++], 255];
                    }
                    break;
                case 'tRNS':
                    if (this.colourType === PngIdentify.ColourType['INDEXED_COLOR']) {
                        for (let i = 0, il = chunkSize; i < il; ++i) {
                            palette[i][3] = data[this.pos++];
                        }
                    }
                    break;
                default:
                    this.pos += chunkSize;
                    break;
            }
            // crc32-b
            const crc32b = ((data[this.pos++] << 24) | (data[this.pos++] << 16) |
                (data[this.pos++] << 8) | (data[this.pos++])) >>> 0;
            chunk.push({
                'type': section,
                'size': chunkSize,
                /*
                'crc32': [
                  uint32ToHexString(crc32b),
                  'verify: ' + (crc32a === crc32b)
                ].join(' / '),
                */
                'position': pos
            });
            if (section === 'IEND') {
                break;
            }
        }
        // join idat
        idat = this.idat = new Uint8Array(idatLength);
        for (let pos = 0, i = 0, il = idatChunks.length; i < il; ++i) {
            idatChunk = idatChunks[i];
            for (let j = 0, jl = idatChunk.length; j < jl; ++j) {
                idat[pos++] = idatChunk[j];
            }
        }
        // decompress image data
        this.imageData = (new (inflate_min_default()).Zlib.Inflate(idat)).decompress();
        //this.imageData = (this.zlibstat = new ZlibStat.Inflate(idat)).decompress();
        //this.blockInfo = this.zlibstat.getBlocks();
        // color histogram
        /*
        TODO: bit depth とフィルタを考慮したデコードを行っていないため凍結
        if (this.colourType === PngIdentify.ColourType.INDEXED_COLOR) {
          histogramTotal = 0;
          idat = this.imageData;
          histogram = this.histogram =
            new (USE_TYPEDARRAY ? Uint32Array : Array)(palette.length);
          if (USE_TYPEDARRAY) {
            for (i = 0, il = idat.length; i < il; ++i) {
              ++histogram[idat[i]];
              ++histogramTotal;
            }
          } else {
            for (i = 0, il = idat.length; i < il; ++i) {
              histogram[idat[i]] = (histogram[idat[i]] | 0) + 1;
              ++histogramTotal;
            }
          }
        }
        */
        const pixels = this.parseImageData();
        this.pixels = pixels;
        return chunk;
    }
    parseImageData() {
        const imageData = this.imageData;
        const width = this.width;
        const height = this.height;
        let inputPos = 0;
        let pixelsPos = 0;
        let size = width * height;
        const pixelLength = (this.getByteLength(this.colourType) * this.bitDepth) / 8 | 0;
        const scanlineLength = (this.getByteLength(this.colourType) * this.bitDepth * this.width + 7) / 8 | 0;
        let filter = -1;
        let pixels = new (this.bitDepth === 16 ? Uint16Array : Uint8Array)(size * this.getByteLength(this.colourType));
        const getPixelIndex = (x, y) => {
            return (y * width + x) * pixelLength;
        };
        const mask = (1 << this.bitDepth) - 1;
        for (let y = 0; y < height; ++y) {
            filter = imageData[inputPos++];
            const startPos = inputPos;
            switch (filter) {
                case 0: // NONE
                    for (let x = 0; x < width; ++x) {
                        for (let i = 0; i < pixelLength; ++i) {
                            pixels[pixelsPos++] = imageData[inputPos++];
                        }
                    }
                    break;
                case 1: // SUB
                    for (let x = 0; x < width; ++x) {
                        for (let i = 0; i < pixelLength; ++i) {
                            if (x === 0) {
                                pixels[pixelsPos++] = imageData[inputPos++];
                            }
                            else {
                                pixels[pixelsPos++] = (imageData[inputPos++] + pixels[getPixelIndex(x - 1, y) + i]) & mask;
                            }
                        }
                    }
                    break;
                case 2: // UP
                    for (let x = 0; x < width; ++x) {
                        for (let i = 0; i < pixelLength; ++i) {
                            if (y === 0) {
                                pixels[pixelsPos++] = imageData[inputPos++];
                            }
                            else {
                                pixels[pixelsPos++] = (imageData[inputPos++] + pixels[getPixelIndex(x, y - 1) + i]) & ((1 << this.bitDepth) - 1);
                            }
                        }
                    }
                    break;
                case 3: // AVERAGE
                    for (let x = 0; x < width; ++x) {
                        for (let i = 0; i < pixelLength; ++i) {
                            const prevX = (x === 0) ? 0 : pixels[getPixelIndex(x - 1, y) + i];
                            const prevY = (y === 0) ? 0 : pixels[getPixelIndex(x, y - 1) + i];
                            pixels[pixelsPos++] = (imageData[inputPos++] + ((prevX + prevY) >>> 1)) & ((1 << this.bitDepth) - 1);
                        }
                    }
                    break;
                case 4: // PAETH
                    for (let x = 0; x < width; ++x) {
                        for (let i = 0; i < pixelLength; ++i) {
                            const left = (x === 0) ? 0 : pixels[getPixelIndex(x - 1, y) + i];
                            const up = (y === 0) ? 0 : pixels[getPixelIndex(x, y - 1) + i];
                            const leftup = (x === 0 || y === 0) ? 0 : pixels[getPixelIndex(x - 1, y - 1) + i];
                            const paeth = this.paethPredictor(left, up, leftup);
                            pixels[pixelsPos++] = (imageData[inputPos++] + paeth) & ((1 << this.bitDepth) - 1);
                        }
                    }
                    break;
                default:
                    throw new Error("invalid filter type:" + filter);
            }
            inputPos = startPos + scanlineLength;
            //throw new Error("tmp")
        }
        return pixels;
    }
    paethPredictor(a, b, c) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        return (pa <= pb && pa <= pc) ? a : (pb <= pc) ? b : c;
    }
    /**
     * update filter information
     */
    updateFilterInfo() {
        var filters, filterCount, prevFilter, filterMode = PngIdentify.BasicFilterType['UNKNOWN'], i, il;
        if (!this.imageData) {
            throw new Error("imageData is not found");
        }
        // get filter information
        filters = this.getFilters(this.imageData);
        this.filters = filters;
        // filter counting
        filterCount = [];
        for (i = 0, il = filters.length; i < il; i++) {
            // detect mixed
            if (i === 0) {
                prevFilter = filters[i];
            }
            if (prevFilter !== filters[i]) {
                filterMode = PngIdentify.BasicFilterType['MIXED'];
            }
            prevFilter = filters[i];
            // counting
            filterCount[filters[i]] = (filterCount[filters[i]] >>> 0) + 1;
        }
        // filter mode
        //this.filterMode = filterMode;
        if (filterMode !== PngIdentify.BasicFilterType['MIXED'] && filters.length > 0) {
            // this.filterMode = filters[0];
        }
        // filter count
        if (filterMode === PngIdentify.BasicFilterType['MIXED']) {
            this.filterCount = filterCount;
        }
    }
    getByteLength(colourType) {
        switch (colourType) {
            case PngIdentify.ColourType['GRAYSCALE']:
            case PngIdentify.ColourType['INDEXED_COLOR']:
                return 1;
            case PngIdentify.ColourType['GRAYSCALE_WITH_ALPHA']:
                return 2;
            case PngIdentify.ColourType['TRUECOLOR']:
                return 3;
            case PngIdentify.ColourType['TRUECOLOR_WITH_ALPHA']:
                return 4;
            default:
                throw new Error("Invalid ColourType:" + colourType);
        }
    }
}
/**
 * PNG Signature
 * @const
 * @type {!Array.<number>}
 */
PngIdentify.Signature = [137, 80, 78, 71, 13, 10, 26, 10];
/**
 * 基本となる 5 種類のフィルタ
 */
PngIdentify.BasicFilterType = {
    'UNKNOWN': -2,
    'NONE': 0,
    'SUB': 1,
    'UP': 2,
    'AVERAGE': 3,
    'PAETH': 4,
    'MIXED': -1
};
/**
 * 圧縮フラグ
 * @enum {number}
 */
PngIdentify.CompressionFlag = {
    'UNCOMPRESSED': 0,
    'COMPRESSED': 1
};
/**
 * 圧縮方法
 * 現在は Deflate 圧縮のみ定義されている
 * @enum {number}
 */
PngIdentify.CompressionMethod = {
    'DEFLATE': 0
};
/**
 * 色空間の定義
 * 1 ビット目(0x01)が立っていればパレット使用,
 * 2 ビット目(0x02)が立っていればカラー,
 * 3 ビット目(0x04)が立っていればαチャンネル付き
 * @enum {number}
 */
PngIdentify.ColourType = {
    'GRAYSCALE': 0,
    'TRUECOLOR': 2,
    'INDEXED_COLOR': 3,
    'GRAYSCALE_WITH_ALPHA': 4,
    'TRUECOLOR_WITH_ALPHA': 6
};
/**
 * フィルタ方法
 * 現在は 0 の基本 5 種類のフィルタのみ定義
 * @enum {number}
 */
PngIdentify.FilterMethod = {
    'BASIC': 0
};
/**
 * インタレース方法
 * @enum {number}
 */
PngIdentify.InterlaceMethod = {
    'NONE': 0,
    'ADAM7': 1
};
/**
 * Rendering intent for Standard RGB colour space
 * @enum {number}
 */
PngIdentify.RenderingIntent = {
    'PERCEPTUAL': 0,
    'RELATIVE': 1,
    'SATURATION': 2,
    'ABSOLUTE': 3
};
/**
 * Unit Specifier for Physical pixel dimensions
 * @enum {number}
 */
PngIdentify.UnitSpecifier = {
    'UNKNOWN': 0,
    'METRE': 1
};
/**
 * @enum {Object}
 */
PngIdentify.Resource = {
    BasicFilterType: enumToResource(PngIdentify.BasicFilterType),
    CompressionFlag: enumToResource(PngIdentify.CompressionFlag),
    CompressionMethod: enumToResource(PngIdentify.CompressionMethod),
    ColourType: enumToResource(PngIdentify.ColourType),
    FilterMethod: enumToResource(PngIdentify.FilterMethod),
    InterlaceMethod: enumToResource(PngIdentify.InterlaceMethod),
    RenderingIntent: enumToResource(PngIdentify.RenderingIntent),
    UnitSpecifier: enumToResource(PngIdentify.UnitSpecifier)
};
/**
 * enum to resource object.
 * @param {!Object} en enum object.
 * @return {!Object} resource object.
 */
function enumToResource(en) {
    var obj, keys, key, value, i, l;
    obj = reverseKeyValue_(en);
    keys = Object.keys(obj);
    for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        value = obj[key];
        obj[key] = value[0].toUpperCase().charAt(0) +
            value.toLowerCase().substr(1);
    }
    return obj;
}
/**
 * from key-value to value-key.
 * @param {!Object} object target object.
 * @return {!Object} new object.
 */
function reverseKeyValue_(object) {
    /** @type {!Object} */
    var newObject = {};
    /** @type {Array.<string>} */
    var keys = Object.keys(object);
    /** @type {number} */
    var i;
    /** @type {number} */
    var il;
    for (i = 0, il = keys.length; i < il; i++) {
        newObject[object[keys[i]]] = keys[i];
    }
    return newObject;
}
/**
 * unsigned 32-bit integer to hex string.
 * @param {number} uint32 unsigned 32-bit interger.
 * @return {string} hex string.
 */
function uint32ToHexString(uint32) {
    /** @type {string} */
    var hex = '0123456789ABCDEF';
    return hex[uint32 >>> 28 & 0x0F] + hex[uint32 >>> 24 & 0x0F] +
        hex[uint32 >>> 20 & 0x0F] + hex[uint32 >>> 16 & 0x0F] +
        hex[uint32 >>> 12 & 0x0F] + hex[uint32 >>> 8 & 0x0F] +
        hex[uint32 >>> 4 & 0x0F] + hex[uint32 >>> 0 & 0x0F];
}
function subarray(arrayLike, ...args) {
    if (arrayLike instanceof Uint8Array) {
        return arrayLike.subarray(...args);
    }
    else if (typeof arrayLike.slice === 'function') {
        return arrayLike.slice(...args);
    }
    else {
        throw new Error("invalid argument: arrayLike.slice is not callable");
    }
}
//-----------------------------------------------------------------------------
// export
//-----------------------------------------------------------------------------

/* vim:set expandtab ts=2 sw=2: */

;// CONCATENATED MODULE: ./src/index.ts


class StealthPngInfoParser {
    constructor(input) {
        this.input = input;
    }
    parse() {
        const pi = new PngIdentify(this.input);
        pi.parse();
        if (!pi.imageData) {
            throw new Error('cant parse imagefile');
        }
        if (pi.bitDepth !== 8 && pi.bitDepth !== 16) {
            throw new Error('unsupported bit depth:' + pi.bitDepth);
        }
        switch (pi.colourType) {
            case PngIdentify.ColourType.GRAYSCALE_WITH_ALPHA:
            case PngIdentify.ColourType.TRUECOLOR_WITH_ALPHA:
                return readInfoFromImageStealth(pi.pixels, pi.width, pi.height, true);
            default:
                return readInfoFromImageStealth(pi.pixels, pi.width, pi.height, false);
        }
    }
}


})();

var __webpack_exports__StealthPngInfoParser = __webpack_exports__.M;
export { __webpack_exports__StealthPngInfoParser as StealthPngInfoParser };
