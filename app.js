(()=>{var Rp=0,Mu=1,Cp=2;var qs=1,Pp=2,Vr=3,Mi=0,pn=1,Ft=2,cn=0,Wr=1,oi=2,Su=3,bu=4,ic=5;var Jn=100,Ip=101,Lp=102,Dp=103,Np=104,$s=200,Up=201,Op=202,Fp=203,Tu=204,Eu=205,oo=206,Bp=207,lo=208,kp=209,zp=210,Hp=211,Gp=212,Vp=213,Wp=214,Al=0,Rl=1,Cl=2,wr=3,Pl=4,Il=5,Ll=6,Dl=7,sc=0,Xp=1,qp=2,Si=0,co=1,ho=2,uo=3,fo=4,po=5,mo=6,Ys=7,su="attached",$p="detached",wu=300,Ks=301,Xr=302,rc=303,ac=304,Sn=1e3,Yn=1001,Ar=1002,Nt=1003,oc=1004;var js=1005;var Qt=1006,qr=1007;var Qn=1008;var bn=1009,Au=1010,Ru=1011,$r=1012,lc=1013,li=1014,Wn=1015,Bt=1016,cc=1017,hc=1018,Qi=1020,Cu=35902,Pu=35899,Iu=1021,Lu=1022,Un=1023,Hi=1026,ci=1027,uc=1028,dc=1029,Ss=1030,fc=1031;var pc=1033,go=33776,xo=33777,_o=33778,vo=33779,mc=35840,gc=35841,xc=35842,_c=35843,vc=36196,yc=37492,Mc=37496,Sc=37488,bc=37489,yo=37490,Tc=37491,Ec=37808,wc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Lc=37815,Dc=37816,Nc=37817,Uc=37818,Oc=37819,Fc=37820,Bc=37821,kc=36492,zc=36494,Hc=36495,Gc=36283,Vc=36284,Mo=36285,Wc=36286;var Us=2300,Os=2301,El=2302,ru=2303,au=2400,ou=2401,lu=2402,Yp=2500;var Du=0,So=1,Yr=2,Kp=3200;var Kr=0,jp=1,es="",wt="srgb",Cn="srgb-linear",Aa="linear",yt="srgb";var wl=7680;var Zp=519,Jp=512,Qp=513,em=514,Nu=515,tm=516,nm=517,Uu=518,Ou=519,Fu=35044;var Bu="300 es",Kn=2e3,Rr=2001;function $0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Y0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function im(){let i=Cr("canvas");return i.style.display="block",i}var Lf={},Pr=null;function Ra(...i){let e="THREE."+i.shift();Pr?Pr("log",e,...i):console.log(e,...i)}function sm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=sm(i);let e="THREE."+i.shift();if(Pr)Pr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=sm(i);let e="THREE."+i.shift();if(Pr)Pr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ns(...i){let e=i.join(" ");e in Lf||(Lf[e]=!0,Xe(...i))}function rm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var am={[Al]:Al,[Cl]:Ll,[Pl]:Pl,[wr]:Il,[Rl]:Rl,[Ll]:Cl,[Dl]:Dl,[Il]:wr},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=1234567,ba=Math.PI/180,Fs=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function ku(i,e){return(i%e+e)%e}function K0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function j0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ta(i,e,t){return(1-t)*i+t*e}function Z0(i,e,t,n){return Ta(i,e,1-Math.exp(-t*n))}function J0(i,e=1){return e-Math.abs(ku(i,e*2)-e)}function Q0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function eg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ng(i,e){return i+Math.random()*(e-i)}function ig(i){return i*(.5-Math.random())}function sg(i){i!==void 0&&(Df=i);let e=Df+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rg(i){return i*ba}function ag(i){return i*Fs}function og(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*h,o*l);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hu(i,e){if(e.constructor===Float32Array)return i;let t=Xc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Gu(i,e){if(e.constructor===Float32Array)return i;let t=Xc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var bi={DEG2RAD:ba,RAD2DEG:Fs,generateUUID:hi,clamp:ct,euclideanModulo:ku,mapLinear:K0,inverseLerp:j0,lerp:Ta,damp:Z0,pingpong:J0,smoothstep:Q0,smootherstep:eg,randInt:tg,randFloat:ng,randFloatSpread:ig,seededRandom:sg,degToRad:rg,radToDeg:ag,isPowerOfTwo:og,ceilPowerOfTwo:lg,floorPowerOfTwo:zu,setQuaternionFromProperEuler:cg,normalize:Gu,denormalize:Hu},Yu=class Yu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yu.prototype.isVector2=!0;var de=Yu,Gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||c!==d||l!==f||h!==p){let m=c*d+l*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,o=Math.sin(o*v)/b,c=c*g+d*o,l=l*g+f*o,h=h*g+p*o,u=u*g+_*o}else{c=c*g+d*o,l=l*g+f*o,h=h*g+p*o,u=u*g+_*o;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-o*f,e[t+2]=l*p+h*f+o*d-c*u,e[t+3]=h*p-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ku=class Ku{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ph.copy(this).projectOnVector(e),this.sub(Ph)}reflect(e){return this.sub(Ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ku.prototype.isVector3=!0;var O=Ku,Ph=new O,Nf=new Gn,ju=class ju{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],v=s[1],b=s[4],M=s[7],E=s[2],S=s[5],x=s[8];return r[0]=a*_+o*v+c*E,r[3]=a*m+o*b+c*S,r[6]=a*g+o*M+c*x,r[1]=l*_+h*v+u*E,r[4]=l*m+h*b+u*S,r[7]=l*g+h*M+u*x,r[2]=d*_+f*v+p*E,r[5]=d*m+f*b+p*S,r[8]=d*g+f*M+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ih.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ih.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ju.prototype.isMatrix3=!0;var tt=ju,Ih=new tt,Uf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){let i={enabled:!0,workingColorSpace:Cn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cn]:{primaries:e,whitePoint:n,transfer:Aa,toXYZ:Uf,fromXYZ:Of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Uf,fromXYZ:Of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),i}var lt=hg();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var or,Nl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=Cr("canvas")),or.width=e.width,or.height=e.height;let s=or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ug=0,Ir=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lh(s[a].image)):r.push(Lh(s[a]))}else r=Lh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Lh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var dg=0,Dh=new O,$t=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=Qt,a=Qn,o=Un,c=bn,l=i.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=hi(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=wu;$t.DEFAULT_ANISOTROPY=1;var Zu=class Zu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(f+1)/2,E=(g+1)/2,S=(h+d)/4,x=(u+_)/4,y=(p+m)/4;return b>M&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=x/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zu.prototype.isVector4=!0;var Mt=Zu,Ul=class extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new $t({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends Ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ca=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var nc=class nc{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,p,_,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,_=o*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,p=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,f=a*l,p=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fg,e,pg)}lookAt(e,t,n){let s=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),os.crossVectors(n,kn),os.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),os.crossVectors(n,kn)),os.normalize(),Ko.crossVectors(kn,os),s[0]=os.x,s[4]=Ko.x,s[8]=kn.x,s[1]=os.y,s[5]=Ko.y,s[9]=kn.y,s[2]=os.z,s[6]=Ko.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],b=n[7],M=n[11],E=n[15],S=s[0],x=s[4],y=s[8],I=s[12],w=s[1],C=s[5],N=s[9],H=s[13],P=s[2],G=s[6],V=s[10],U=s[14],q=s[3],z=s[7],D=s[11],B=s[15];return r[0]=a*S+o*w+c*P+l*q,r[4]=a*x+o*C+c*G+l*z,r[8]=a*y+o*N+c*V+l*D,r[12]=a*I+o*H+c*U+l*B,r[1]=h*S+u*w+d*P+f*q,r[5]=h*x+u*C+d*G+f*z,r[9]=h*y+u*N+d*V+f*D,r[13]=h*I+u*H+d*U+f*B,r[2]=p*S+_*w+m*P+g*q,r[6]=p*x+_*C+m*G+g*z,r[10]=p*y+_*N+m*V+g*D,r[14]=p*I+_*H+m*U+g*B,r[3]=v*S+b*w+M*P+E*q,r[7]=v*x+b*C+M*G+E*z,r[11]=v*y+b*N+M*V+E*D,r[15]=v*I+b*H+M*U+E*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=c*f-l*d,b=o*f-l*u,M=o*d-c*u,E=a*f-l*h,S=a*d-c*h,x=a*u-o*h;return t*(_*v-m*b+g*M)-n*(p*v-m*E+g*S)+s*(p*b-_*E+g*x)-r*(p*M-_*S+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*o-n*a,b=t*c-s*a,M=t*l-r*a,E=n*c-s*o,S=n*l-r*o,x=s*l-r*c,y=h*_-u*p,I=h*m-d*p,w=h*g-f*p,C=u*m-d*_,N=u*g-f*_,H=d*g-f*m,P=v*H-b*N+M*C+E*w-S*I+x*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/P;return e[0]=(o*H-c*N+l*C)*G,e[1]=(s*N-n*H-r*C)*G,e[2]=(_*x-m*S+g*E)*G,e[3]=(d*S-u*x-f*E)*G,e[4]=(c*w-a*H-l*I)*G,e[5]=(t*H-s*w+r*I)*G,e[6]=(m*M-p*x-g*b)*G,e[7]=(h*x-d*M+f*b)*G,e[8]=(a*N-o*w+l*y)*G,e[9]=(n*w-t*N-r*y)*G,e[10]=(p*S-_*M+g*v)*G,e[11]=(u*M-h*S-f*v)*G,e[12]=(o*I-a*C-c*y)*G,e[13]=(t*C-n*I+s*y)*G,e[14]=(_*b-p*E-m*v)*G,e[15]=(h*E-u*b+d*v)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,p=r*u,_=a*h,m=a*u,g=o*u,v=c*l,b=c*h,M=c*u,E=n.x,S=n.y,x=n.z;return s[0]=(1-(_+g))*E,s[1]=(f+M)*E,s[2]=(p-b)*E,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(d+g))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(p+b)*x,s[9]=(m-v)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=lr.set(s[0],s[1],s[2]).length(),o=lr.set(s[4],s[5],s[6]).length(),c=lr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ii.copy(this);let l=1/a,h=1/o,u=1/c;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,t.setFromRotationMatrix(ii),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Kn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,_;if(c)p=r/(a-r),_=a*r/(a-r);else if(o===Kn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Rr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Kn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,_;if(c)p=1/(a-r),_=a/(a-r);else if(o===Kn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Rr)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};nc.prototype.isMatrix4=!0;var qe=nc,lr=new O,ii=new qe,fg=new O(0,0,0),pg=new O(1,1,1),os=new O,Ko=new O,kn=new O,Ff=new qe,Bf=new Gn,_i=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mg=0,kf=new O,cr=new Gn,Di=new qe,jo=new O,ha=new O,gg=new O,xg=new Gn,zf=new O(1,0,0),Hf=new O(0,1,0),Gf=new O(0,0,1),Vf={type:"added"},_g={type:"removed"},hr={type:"childadded",child:null},Nh={type:"childremoved",child:null},Lt=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new _i,n=new Gn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new tt}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(zf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jo.copy(e):jo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ha,jo,this.up):Di.lookAt(jo,ha,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Di),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vf),hr.child=e,this.dispatchEvent(hr),hr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_g),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vf),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,gg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new O(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var it=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vg={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Uh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=ku(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Uh(a,r,e+1/3),this.g=Uh(a,r,e),this.b=Uh(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=om[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return lt.workingToColorSpace(Mn.copy(this),e),Math.round(ct(Mn.r*255,0,255))*65536+Math.round(ct(Mn.g*255,0,255))*256+Math.round(ct(Mn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=wt){lt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Zo);let n=Ta(ls.h,Zo.h,t),s=Ta(ls.s,Zo.s,t),r=Ta(ls.l,Zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Re;Re.NAMES=om;var Pa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=new O,Ni=new O,Oh=new O,Ui=new O,ur=new O,dr=new O,Wf=new O,Fh=new O,Bh=new O,kh=new O,zh=new Mt,Hh=new Mt,Gh=new Mt,ki=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){si.subVectors(s,t),Ni.subVectors(n,t),Oh.subVectors(e,t);let a=si.dot(si),o=si.dot(Ni),c=si.dot(Oh),l=Ni.dot(Ni),h=Ni.dot(Oh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(a,Ui.y),c.addScaledVector(o,Ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return zh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),zh.fromBufferAttribute(e,t),Hh.fromBufferAttribute(e,n),Gh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(zh,r.x),a.addScaledVector(Hh,r.y),a.addScaledVector(Gh,r.z),a}static isFrontFacing(e,t,n,s){return si.subVectors(n,t),Ni.subVectors(e,t),si.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),si.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ur.subVectors(s,n),dr.subVectors(r,n),Fh.subVectors(e,n);let c=ur.dot(Fh),l=dr.dot(Fh);if(c<=0&&l<=0)return t.copy(n);Bh.subVectors(e,s);let h=ur.dot(Bh),u=dr.dot(Bh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(ur,a);kh.subVectors(e,r);let f=ur.dot(kh),p=dr.dot(kh);if(p>=0&&f<=p)return t.copy(r);let _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(dr,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Wf.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(Wf,o);let g=1/(m+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(ur,a).addScaledVector(dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Qo.subVectors(this.max,ua),fr.subVectors(e.a,ua),pr.subVectors(e.b,ua),mr.subVectors(e.c,ua),cs.subVectors(pr,fr),hs.subVectors(mr,pr),Cs.subVectors(fr,mr);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Cs.z,Cs.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Cs.z,0,-Cs.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Cs.y,Cs.x,0];return!Vh(t,fr,pr,mr,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Vh(t,fr,pr,mr,Qo))?!1:(el.crossVectors(cs,hs),t=[el.x,el.y,el.z],Vh(t,fr,pr,mr,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new O,new O,new O,new O,new O,new O,new O,new O],ri=new O,Jo=new dn,fr=new O,pr=new O,mr=new O,cs=new O,hs=new O,Cs=new O,ua=new O,Qo=new O,el=new O,Ps=new O;function Vh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ps.fromArray(i,r);let o=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),c=e.dot(Ps),l=t.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var jt=new O,tl=new de,yg=0,Vt=class extends xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?Xc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Hu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gu(e,this.array)}};var Ia=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var La=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mg=new dn,da=new O,Wh=new O,Dn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(da,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Wh)),this.expandByPoint(da.copy(e.center).sub(Wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sg=0,$n=new qe,Xh=new Lt,gr=new O,zn=new dn,fa=new dn,ln=new O,At=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($0(e)?La:Ia)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(zn.min,fa.min),zn.expandByPoint(ln),ln.addVectors(zn.max,fa.max),zn.expandByPoint(ln)):(zn.expandByPoint(fa.min),zn.expandByPoint(fa.max))}zn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ln.fromBufferAttribute(o,l),c&&(gr.fromBufferAttribute(e,l),ln.add(gr)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new O,c[I]=new O;let h=new O,u=new O,d=new O,f=new de,p=new de,_=new de,m=new O,g=new O;function v(I,w,C){l[I]=l[w]=l[C]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),u.sub(h),d.sub(h),p.sub(f),_.sub(f);let N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(N),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(N),o[I].add(m),o[w].add(m),o[C].add(m),c[I].add(g),c[w].add(g),c[C].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,w=b.length;I<w;++I){let C=b[I],N=C.start,H=C.count;for(let P=N,G=N+H;P<G;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new O,E=new O,S=new O,x=new O;function y(I){S.fromBufferAttribute(s,I),x.copy(S);let w=o[I];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),E.crossVectors(x,w);let N=E.dot(c[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,N)}for(let I=0,w=n.count;I<w;++I)l[I]&&y(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new Vt(d,h,u)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ks=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Xf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Xf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Xf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=hi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Rn=new O,fs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Xc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Hu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gu(e,this.data.array)}},qh=new O,bg=new O,Tg=new tt,Hn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=qh.subVectors(n,t).cross(bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(qh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tg.getNormalMatrix(e),s=this.coplanarPoint(qh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Eg=0,fn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Wr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=Eu,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wl,this.stencilZFail=wl,this.stencilZPass=wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nr=class extends fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xr,pa=new O,_r=new O,vr=new O,yr=new de,ma=new de,lm=new qe,nl=new O,ga=new O,il=new O,qf=new de,$h=new de,$f=new de,Da=class extends Lt{constructor(e=new Nr){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ks(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new fs(n,3,0,!1)),xr.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=xr,this.material=e,this.center=new de(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),lm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-vr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;sl(nl.set(-.5,-.5,0),vr,a,_r,s,r),sl(ga.set(.5,-.5,0),vr,a,_r,s,r),sl(il.set(.5,.5,0),vr,a,_r,s,r),qf.set(0,0),$h.set(1,0),$f.set(1,1);let o=e.ray.intersectTriangle(nl,ga,il,!1,pa);if(o===null&&(sl(ga.set(-.5,.5,0),vr,a,_r,s,r),$h.set(0,1),o=e.ray.intersectTriangle(nl,il,ga,!1,pa),o===null))return;let c=e.ray.origin.distanceTo(pa);c<e.near||c>e.far||t.push({distance:c,point:pa.clone(),uv:ki.getInterpolation(pa,nl,ga,il,qf,$h,$f,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function sl(i,e,t,n,s,r){yr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ma.x=r*yr.x-s*yr.y,ma.y=s*yr.x+r*yr.y):ma.copy(yr),i.copy(e),i.x+=ma.x,i.y+=ma.y,i.applyMatrix4(lm)}var Fi=new O,Yh=new O,rl=new O,al=new O,ps=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yh.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),al.copy(this.origin).sub(Yh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(rl),o=al.dot(this.direction),c=-al.dot(rl),l=al.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*c-o,d=a*o-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yh).addScaledVector(rl,d),f}intersectSphere(e,t){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,m=t.z-a.z,g=n.x-a.x,v=n.y-a.y,b=n.z-a.z,M=Math.abs(c),E=Math.abs(l),S=Math.abs(h),x,y,I,w,C,N,H,P,G,V,U,q;if(M>=E&&M>=S?(I=c,N=u,G=p,q=g,c>=0?(x=l,y=h,w=d,C=f,H=_,P=m,V=v,U=b):(x=h,y=l,w=f,C=d,H=m,P=_,V=b,U=v)):E>=S?(I=l,N=d,G=_,q=v,l>=0?(x=h,y=c,w=f,C=u,H=m,P=p,V=b,U=g):(x=c,y=h,w=u,C=f,H=p,P=m,V=g,U=b)):(I=h,N=f,G=m,q=b,h>=0?(x=c,y=l,w=u,C=d,H=p,P=_,V=g,U=v):(x=l,y=c,w=d,C=u,H=_,P=p,V=v,U=g)),I===0)return null;let z=x/I,D=y/I,B=1/I,L=w-z*N,X=C-D*N,F=H-z*G,W=P-D*G,te=V-z*q,fe=U-D*q,he=te*W-fe*F,re=L*fe-X*te,Se=F*X-W*L;if(s){if(he<0||re<0||Se<0)return null}else if((he<0||re<0||Se<0)&&(he>0||re>0||Se>0))return null;let Ce=he+re+Se;if(Ce===0)return null;let Fe=B*(he*N+re*G+Se*q);return(Ce>0?Fe<0:Fe>0)?null:this.at(Fe/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yf=new qe,Is=new ps,ol=new Dn,Kf=new O,ll=new O,cl=new O,hl=new O,Kh=new O,ul=new O,jf=new O,dl=new O,Ze=class extends Lt{constructor(e=new At,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ul.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Kh.fromBufferAttribute(u,e),a?ul.addScaledVector(Kh,h):ul.addScaledVector(Kh.sub(t),h))}t.add(ul)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(ol.containsPoint(Is.origin)===!1&&(Is.intersectSphere(ol,Kf)===null||Is.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(Yf.copy(r).invert(),Is.copy(e.ray).applyMatrix4(Yf),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,E=b;M<E;M+=3){let S=o.getX(M),x=o.getX(M+1),y=o.getX(M+2);s=fl(this,g,e,n,l,h,u,S,x,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let v=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=fl(this,a,e,n,l,h,u,v,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,E=b;M<E;M+=3){let S=M,x=M+1,y=M+2;s=fl(this,g,e,n,l,h,u,S,x,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let v=m,b=m+1,M=m+2;s=fl(this,a,e,n,l,h,u,v,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function wg(i,e,t,n,s,r,a,o){let c;if(e.side===pn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Mi,o),c===null)return null;dl.copy(o),dl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(dl);return l<t.near||l>t.far?null:{distance:l,point:dl.clone(),object:i}}function fl(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ll),i.getVertexPosition(c,cl),i.getVertexPosition(l,hl);let h=wg(i,e,t,n,ll,cl,hl,jf);if(h){let u=new O;ki.getBarycoord(jf,ll,cl,hl,u),s&&(h.uv=ki.getInterpolatedAttribute(s,o,c,l,u,new de)),r&&(h.uv1=ki.getInterpolatedAttribute(r,o,c,l,u,new de)),a&&(h.normal=ki.getInterpolatedAttribute(a,o,c,l,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new O,materialIndex:0};ki.getNormal(ll,cl,hl,d.normal),h.face=d,h.barycoord=u}return h}var xa=new Mt,Zf=new Mt,Jf=new Mt,Ag=new Mt,Qf=new qe,pl=new O,jh=new Dn,ep=new qe,Zh=new ps,Na=class extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=su,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pl),this.boundingBox.expandByPoint(pl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pl),this.boundingSphere.expandByPoint(pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jh.copy(this.boundingSphere),jh.applyMatrix4(s),e.ray.intersectsSphere(jh)!==!1&&(ep.copy(s).invert(),Zh.copy(e.ray).applyMatrix4(ep),!(this.boundingBox!==null&&Zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$p?this.bindMatrixInverse.copy(this.bindMatrix).invert():Xe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Zf.fromBufferAttribute(s.attributes.skinIndex,e),Jf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(xa.copy(t),t.set(0,0,0,0)):(xa.set(t.x,t.y,t.z,1),t.set(0,0,0)),xa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Jf.getComponent(r);if(a!==0){let o=Zf.getComponent(r);Qf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ag.copy(xa).applyMatrix4(Qf),a)}}return t.isVector4&&(t.w=xa.w),t.applyMatrix4(this.bindMatrixInverse)}},Ur=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},jn=class extends $t{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,h=Nt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tp=new qe,Rg=new qe,Ua=class i{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Xe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Rg;tp.multiplyMatrices(o,t[r]),tp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new jn(t,e,e,Un,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Xe("Skeleton: No bone found with UUID:",r),a=new Ur),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Gi=class extends Vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new qe,np=new qe,ml=[],ip=new dn,Cg=new qe,_a=new Ze,va=new Dn,Vi=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),ip.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(ip)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),va.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(n),e.ray.intersectsSphere(va)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),np.multiplyMatrices(n,Mr),_a.matrixWorld=np,_a.raycast(e,ml);for(let a=0,o=ml.length;a<o;a++){let c=ml[a];c.instanceId=r,c.object=this,t.push(c)}ml.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jn(new Float32Array(s*this.count),s,this.count,uc,Wn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ls=new Dn,Pg=new de(.5,.5),gl=new O,ms=class{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],b=r[13],M=r[14],E=r[15];if(s[0].setComponents(l-a,f-h,g-p,E-v).normalize(),s[1].setComponents(l+a,f+h,g+p,E+v).normalize(),s[2].setComponents(l+o,f+u,g+_,E+b).normalize(),s[3].setComponents(l-o,f-u,g-_,E-b).normalize(),n)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,f-d,g-m,E-M).normalize();else if(s[4].setComponents(l-c,f-d,g-m,E-M).normalize(),t===Kn)s[5].setComponents(l+c,f+d,g+m,E+M).normalize();else if(t===Rr)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let t=Pg.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(gl.x=s.normal.x>0?e.max.x:e.min.x,gl.y=s.normal.y>0?e.max.y:e.min.y,gl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sp=new qe,Fl=class i{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];sp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ms),n[s].setFromProjectionMatrix(sp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ms),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var gs=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bl=new O,kl=new O,rp=new qe,ya=new ps,xl=new Dn,Jh=new O,ap=new O,zs=class extends Lt{constructor(e=new At,t=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bl.fromBufferAttribute(t,s-1),kl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bl.distanceTo(kl);e.setAttribute("lineDistance",new ft(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),xl.radius+=r,e.ray.intersectsSphere(xl)===!1)return;rp.copy(s).invert(),ya.copy(e.ray).applyMatrix4(rp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=l){let g=h.getX(_),v=h.getX(_+1),b=_l(this,e,ya,c,g,v,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(f),g=_l(this,e,ya,c,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=l){let g=_l(this,e,ya,c,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=_l(this,e,ya,c,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _l(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Bl.fromBufferAttribute(o,s),kl.fromBufferAttribute(o,r),t.distanceSqToSegment(Bl,kl,Jh,ap)>n)return;Jh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Jh);if(!(l<e.near||l>e.far))return{distance:l,point:ap.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var op=new O,lp=new O,Hs=class extends zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)op.fromBufferAttribute(t,s),lp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+op.distanceTo(lp);e.setAttribute("lineDistance",new ft(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oa=class extends zs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Wi=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cp=new qe,cu=new ps,vl=new Dn,yl=new O,xs=class extends Lt{constructor(e=new At,t=new Wi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(s),vl.radius+=r,e.ray.intersectsSphere(vl)===!1)return;cp.copy(s).invert(),cu.copy(e.ray).applyMatrix4(cp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,_=f;p<_;p++){let m=l.getX(p);yl.fromBufferAttribute(u,m),hp(yl,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)yl.fromBufferAttribute(u,p),hp(yl,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hp(i,e,t,n,s,r,a){let o=cu.distanceSqToPoint(i);if(o<t){let c=new O;cu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Fa=class extends $t{constructor(e=[],t=Ks,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zn=class extends $t{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends $t{constructor(e,t,n=li,s,r,a,o=Nt,c=Nt,l,h=Hi,u=1){if(h!==Hi&&h!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ba=class extends ai{constructor(e,t=li,n=Ks,s,r,a=Nt,o=Nt,c,l=Hi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ka=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xt=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function p(_,m,g,v,b,M,E,S,x,y,I){let w=M/x,C=E/y,N=M/2,H=E/2,P=S/2,G=x+1,V=y+1,U=0,q=0,z=new O;for(let D=0;D<V;D++){let B=D*C-H;for(let L=0;L<G;L++){let X=L*w-N;z[_]=X*v,z[m]=B*b,z[g]=P,l.push(z.x,z.y,z.z),z[_]=0,z[m]=0,z[g]=S>0?1:-1,h.push(z.x,z.y,z.z),u.push(L/x),u.push(1-D/y),U+=1}}for(let D=0;D<y;D++)for(let B=0;B<x;B++){let L=d+B+G*D,X=d+B+G*(D+1),F=d+(B+1)+G*(D+1),W=d+(B+1)+G*D;c.push(L,X,W),c.push(X,F,W),q+=6}o.addGroup(f,q,I),f+=q,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},za=class i extends At{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,_=s+1,m=new O,g=new O;for(let v=0;v<=p;v++){let b=0,M=0,E=0,S=0;if(v<=n){let I=v/n,w=I*Math.PI/2;M=-h-e*Math.cos(w),E=e*Math.sin(w),S=-e*Math.cos(w),b=I*u}else if(v<=n+r){let I=(v-n)/r;M=-h+I*t,E=e,S=0,b=u+I*d}else{let I=(v-n-r)/n,w=I*Math.PI/2;M=h+e*Math.sin(w),E=e*Math.cos(w),S=e*Math.sin(w),b=u+d+I*u}let x=Math.max(0,Math.min(1,b/f)),y=0;v===0?y=.5/s:v===p&&(y=-.5/s);for(let I=0;I<=s;I++){let w=I/s,C=w*Math.PI*2,N=Math.sin(C),H=Math.cos(C);g.x=-E*H,g.y=M,g.z=E*N,o.push(g.x,g.y,g.z),m.set(-E*H,S,E*N),m.normalize(),c.push(m.x,m.y,m.z),l.push(w+y,x)}if(v>0){let I=(v-1)*_;for(let w=0;w<s;w++){let C=I+w,N=I+w+1,H=v*_+w,P=v*_+w+1;a.push(C,N,H),a.push(N,P,H)}}}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ha=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new O,h=new de;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ht=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,_=[],m=n/2,g=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function v(){let M=new O,E=new O,S=0,x=(t-e)/n;for(let y=0;y<=r;y++){let I=[],w=y/r,C=w*(t-e)+e;for(let N=0;N<=s;N++){let H=N/s,P=H*c+o,G=Math.sin(P),V=Math.cos(P);E.x=C*G,E.y=-w*n+m,E.z=C*V,u.push(E.x,E.y,E.z),M.set(G,x,V).normalize(),d.push(M.x,M.y,M.z),f.push(H,1-w),I.push(p++)}_.push(I)}for(let y=0;y<s;y++)for(let I=0;I<r;I++){let w=_[I][y],C=_[I+1][y],N=_[I+1][y+1],H=_[I][y+1];(e>0||I!==0)&&(h.push(w,C,H),S+=3),(t>0||I!==r-1)&&(h.push(C,N,H),S+=3)}l.addGroup(g,S,0),g+=S}function b(M){let E=p,S=new de,x=new O,y=0,I=M===!0?e:t,w=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),p++;let C=p;for(let N=0;N<=s;N++){let P=N/s*c+o,G=Math.cos(P),V=Math.sin(P);x.x=I*V,x.y=m*w,x.z=I*G,u.push(x.x,x.y,x.z),d.push(0,w,0),S.x=G*.5+.5,S.y=V*.5*w+.5,f.push(S.x,S.y),p++}for(let N=0;N<s;N++){let H=E+N,P=C+N;M===!0?h.push(P,P+1,H):h.push(P+1,P,H),y+=3}l.addGroup(g,y,M===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class i extends ht{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new de:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],a=[],o=new O,c=new qe;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new O)}r[0]=new O,a[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Fr=class extends Vn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zl=class extends Fr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var up=new O,dp=new O,Qh=new Vu,eu=new Vu,tu=new Vu,Hl=class extends Vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(dp.subVectors(s[0],s[1]).add(s[0]),l=dp);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(up.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=up),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Qh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,_,m),eu.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,_,m),tu.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),eu.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),tu.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Qh.calc(c),eu.calc(c),tu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Ig(i,e){let t=1-i;return t*t*e}function Lg(i,e){return 2*(1-i)*i*e}function Dg(i,e){return i*i*e}function Ea(i,e,t,n){return Ig(i,e)+Lg(i,t)+Dg(i,n)}function Ng(i,e){let t=1-i;return t*t*t*e}function Ug(i,e){let t=1-i;return 3*t*t*i*e}function Og(i,e){return 3*(1-i)*i*i*e}function Fg(i,e){return i*i*i*e}function wa(i,e,t,n,s){return Ng(i,e)+Ug(i,t)+Og(i,n)+Fg(i,s)}var Ga=class extends Vn{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wa(e,s.x,r.x,a.x,o.x),wa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gl=class extends Vn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wa(e,s.x,r.x,a.x,o.x),wa(e,s.y,r.y,a.y,o.y),wa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Vn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vl=class extends Vn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Vn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ea(e,s.x,r.x,a.x),Ea(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends Vn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ea(e,s.x,r.x,a.x),Ea(e,s.y,r.y,a.y),Ea(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(fp(o,c.x,l.x,h.x,u.x),fp(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},hu=Object.freeze({__proto__:null,ArcCurve:zl,CatmullRomCurve3:Hl,CubicBezierCurve:Ga,CubicBezierCurve3:Gl,EllipseCurve:Fr,LineCurve:Va,LineCurve3:Vl,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Wl,SplineCurve:Xa}),Xl=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new hu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},qa=class extends Xl{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Va(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wa(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ga(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Fr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_s=class extends qa{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qa().fromJSON(s))}return this}};function Bg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=cm(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Vg(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return $a(r,a,t,o,c,l,0),a}function cm(i,e,t,n,s){let r;if(s===ex(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=pp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=pp(a/n|0,i[a],i[a+1],r);return r&&Br(r,r.next)&&(Ka(r),r=r.next),r}function Gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Br(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Ka(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $a(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Yg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?zg(i,n,s,r):kg(i)){e.push(c.i,i.i,l.i),Ka(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Hg(Gs(i),e),$a(i,e,t,n,s,r,2)):a===2&&Gg(i,e,t,n,s,r):$a(Gs(i),e,t,n,s,r,1);break}}}function kg(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ma(s,o,r,c,a,l,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function zg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ht(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),p=Math.min(h,u,d),_=Math.max(o,c,l),m=Math.max(h,u,d),g=uu(f,p,e,t,n),v=uu(_,m,e,t,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=g&&M&&M.z<=v;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&Ma(o,h,c,u,l,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Ma(o,h,c,u,l,d,M.x,M.y)&&Ht(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&Ma(o,h,c,u,l,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Ma(o,h,c,u,l,d,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Hg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Br(n,s)&&um(n,t,t.next,s)&&Ya(n,s)&&Ya(s,n)&&(e.push(n.i,t.i,s.i),Ka(t),Ka(t.next),t=i=s),t=t.next}while(t!==i);return Gs(t)}function Gg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zg(a,o)){let c=dm(a,o);a=Gs(a,a.next),c=Gs(c,c.next),$a(a,e,t,n,s,r,0),$a(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=cm(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(jg(l))}s.sort(Wg);for(let r=0;r<s.length;r++)t=Xg(s[r],t);return t}function Wg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Xg(i,e){let t=qg(i,e);if(!t)return e;let n=dm(t,i);return Gs(n,n.next),Gs(t,t.next)}function qg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Br(i,t))return t;do{if(Br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&hm(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ya(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&$g(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function $g(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function Yg(i,e,t,n){let s=i;do s.z===0&&(s.z=uu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kg(s)}function Kg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function uu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hm(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ma(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&hm(i,e,t,n,s,r,a,o)}function Zg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Jg(i,e)&&(Ya(i,e)&&Ya(e,i)&&Qg(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Br(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Br(i,e){return i.x===e.x&&i.y===e.y}function um(i,e,t,n){let s=Sl(Ht(i,e,t)),r=Sl(Ht(i,e,n)),a=Sl(Ht(t,n,i)),o=Sl(Ht(t,n,e));return!!(s!==r&&a!==o||s===0&&Ml(i,t,e)||r===0&&Ml(i,n,e)||a===0&&Ml(t,i,n)||o===0&&Ml(t,e,n))}function Ml(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sl(i){return i>0?1:i<0?-1:0}function Jg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&um(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ya(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function Qg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dm(i,e){let t=du(i.i,i.x,i.y),n=du(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pp(i,e,t,n){let s=du(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ka(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function du(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ex(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var fu=class{static triangulate(e,t,n=2){return Bg(e,t,n)}},Ds=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];mp(e),gp(n,e);let a=e.length;t.forEach(mp);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,gp(n,t[c]);let o=fu.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function mp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Vs=class i extends At{constructor(e=new _s([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:tx,b,M=!1,E,S,x,y;if(g){b=g.getSpacedPoints(h),M=!0,d=!1;let ee=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,ee),S=new O,x=new O,y=new O}d||(m=0,f=0,p=0,_=0);let I=o.extractPoints(l),w=I.shape,C=I.holes;if(!Ds.isClockWise(w)){w=w.reverse();for(let ee=0,pe=C.length;ee<pe;ee++){let xe=C[ee];Ds.isClockWise(xe)&&(C[ee]=xe.reverse())}}function H(ee){let xe=10000000000000001e-36,Te=ee[0];for(let Me=1;Me<=ee.length;Me++){let Ve=Me%ee.length,Ne=ee[Ve],Ye=Ne.x-Te.x,Qe=Ne.y-Te.y,st=Ye*Ye+Qe*Qe,$=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(Te.x),Math.abs(Te.y)),Ct=xe*$*$;if(st<=Ct){ee.splice(Ve,1),Me--;continue}Te=Ne}}H(w),C.forEach(H);let P=C.length,G=w;for(let ee=0;ee<P;ee++){let pe=C[ee];w=w.concat(pe)}function V(ee,pe,xe){return pe||je("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(pe,xe)}let U=w.length;function q(ee,pe,xe){let Te,Me,Ve,Ne=ee.x-pe.x,Ye=ee.y-pe.y,Qe=xe.x-ee.x,st=xe.y-ee.y,$=Ne*Ne+Ye*Ye,Ct=Ne*st-Ye*Qe;if(Math.abs(Ct)>Number.EPSILON){let rt=Math.sqrt($),le=Math.sqrt(Qe*Qe+st*st),j=pe.x-Ye/rt,me=pe.y+Ne/rt,ue=xe.x-st/le,Ee=xe.y+Qe/le,R=((ue-j)*st-(Ee-me)*Qe)/(Ne*st-Ye*Qe);Te=j+Ne*R-ee.x,Me=me+Ye*R-ee.y;let T=Te*Te+Me*Me;if(T<=2)return new de(Te,Me);Ve=Math.sqrt(T/2)}else{let rt=!1;Ne>Number.EPSILON?Qe>Number.EPSILON&&(rt=!0):Ne<-Number.EPSILON?Qe<-Number.EPSILON&&(rt=!0):Math.sign(Ye)===Math.sign(st)&&(rt=!0),rt?(Te=-Ye,Me=Ne,Ve=Math.sqrt($)):(Te=Ne,Me=Ye,Ve=Math.sqrt($/2))}return new de(Te/Ve,Me/Ve)}let z=[];for(let ee=0,pe=G.length,xe=pe-1,Te=ee+1;ee<pe;ee++,xe++,Te++)xe===pe&&(xe=0),Te===pe&&(Te=0),z[ee]=q(G[ee],G[xe],G[Te]);let D=[],B,L=z.concat();for(let ee=0,pe=P;ee<pe;ee++){let xe=C[ee];B=[];for(let Te=0,Me=xe.length,Ve=Me-1,Ne=Te+1;Te<Me;Te++,Ve++,Ne++)Ve===Me&&(Ve=0),Ne===Me&&(Ne=0),B[Te]=q(xe[Te],xe[Ve],xe[Ne]);D.push(B),L=L.concat(B)}let X;if(m===0)X=Ds.triangulateShape(G,C);else{let ee=[],pe=[];for(let xe=0;xe<m;xe++){let Te=xe/m,Me=f*Math.cos(Te*Math.PI/2),Ve=p*Math.sin(Te*Math.PI/2)+_;for(let Ne=0,Ye=G.length;Ne<Ye;Ne++){let Qe=V(G[Ne],z[Ne],Ve);re(Qe.x,Qe.y,-Me),Te===0&&ee.push(Qe)}for(let Ne=0,Ye=P;Ne<Ye;Ne++){let Qe=C[Ne];B=D[Ne];let st=[];for(let $=0,Ct=Qe.length;$<Ct;$++){let rt=V(Qe[$],B[$],Ve);re(rt.x,rt.y,-Me),Te===0&&st.push(rt)}Te===0&&pe.push(st)}}X=Ds.triangulateShape(ee,pe)}let F=X.length,W=p+_;for(let ee=0;ee<U;ee++){let pe=d?V(w[ee],L[ee],W):w[ee];M?(x.copy(E.normals[0]).multiplyScalar(pe.x),S.copy(E.binormals[0]).multiplyScalar(pe.y),y.copy(b[0]).add(x).add(S),re(y.x,y.y,y.z)):re(pe.x,pe.y,0)}for(let ee=1;ee<=h;ee++)for(let pe=0;pe<U;pe++){let xe=d?V(w[pe],L[pe],W):w[pe];M?(x.copy(E.normals[ee]).multiplyScalar(xe.x),S.copy(E.binormals[ee]).multiplyScalar(xe.y),y.copy(b[ee]).add(x).add(S),re(y.x,y.y,y.z)):re(xe.x,xe.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let pe=ee/m,xe=f*Math.cos(pe*Math.PI/2),Te=p*Math.sin(pe*Math.PI/2)+_;for(let Me=0,Ve=G.length;Me<Ve;Me++){let Ne=V(G[Me],z[Me],Te);re(Ne.x,Ne.y,u+xe)}for(let Me=0,Ve=C.length;Me<Ve;Me++){let Ne=C[Me];B=D[Me];for(let Ye=0,Qe=Ne.length;Ye<Qe;Ye++){let st=V(Ne[Ye],B[Ye],Te);M?re(st.x,st.y+b[h-1].y,b[h-1].x+xe):re(st.x,st.y,u+xe)}}}te(),fe();function te(){let ee=s.length/3;if(d){let pe=0,xe=U*pe;for(let Te=0;Te<F;Te++){let Me=X[Te];Se(Me[2]+xe,Me[1]+xe,Me[0]+xe)}pe=h+m*2,xe=U*pe;for(let Te=0;Te<F;Te++){let Me=X[Te];Se(Me[0]+xe,Me[1]+xe,Me[2]+xe)}}else{for(let pe=0;pe<F;pe++){let xe=X[pe];Se(xe[2],xe[1],xe[0])}for(let pe=0;pe<F;pe++){let xe=X[pe];Se(xe[0]+U*h,xe[1]+U*h,xe[2]+U*h)}}n.addGroup(ee,s.length/3-ee,0)}function fe(){let ee=s.length/3,pe=0;he(G,pe),pe+=G.length;for(let xe=0,Te=C.length;xe<Te;xe++){let Me=C[xe];he(Me,pe),pe+=Me.length}n.addGroup(ee,s.length/3-ee,1)}function he(ee,pe){let xe=ee.length;for(;--xe>=0;){let Te=xe,Me=xe-1;Me<0&&(Me=ee.length-1);for(let Ve=0,Ne=h+m*2;Ve<Ne;Ve++){let Ye=U*Ve,Qe=U*(Ve+1),st=pe+Te+Ye,$=pe+Me+Ye,Ct=pe+Me+Qe,rt=pe+Te+Qe;Ce(st,$,Ct,rt)}}}function re(ee,pe,xe){c.push(ee),c.push(pe),c.push(xe)}function Se(ee,pe,xe){Fe(ee),Fe(pe),Fe(xe);let Te=s.length/3,Me=v.generateTopUV(n,s,Te-3,Te-2,Te-1);Ke(Me[0]),Ke(Me[1]),Ke(Me[2])}function Ce(ee,pe,xe,Te){Fe(ee),Fe(pe),Fe(Te),Fe(pe),Fe(xe),Fe(Te);let Me=s.length/3,Ve=v.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);Ke(Ve[0]),Ke(Ve[1]),Ke(Ve[3]),Ke(Ve[1]),Ke(Ve[2]),Ke(Ve[3])}function Fe(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function Ke(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return nx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hu[s.type]().fromJSON(s)),new i(n,e.options)}},tx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new de(r,a),new de(o,c),new de(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new de(a,1-c),new de(l,1-u),new de(d,1-p),new de(_,1-g)]:[new de(o,1-c),new de(h,1-u),new de(f,1-p),new de(m,1-g)]}};function nx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ja=class i extends At{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ct(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new O,d=new de,f=new O,p=new O,_=new O,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=t;v++){let b=n+v*h*s,M=Math.sin(b),E=Math.cos(b);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*E,a.push(u.x,u.y,u.z),d.x=v/t,d.y=S/(e.length-1),o.push(d.x,d.y);let x=c[3*S+0]*M,y=c[3*S+1],I=c[3*S+0]*E;l.push(x,y,I)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let M=b+v*e.length,E=M,S=M+e.length,x=M+e.length+1,y=M+1;r.push(E,S,y),r.push(x,y,S)}this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("uv",new ft(o,2)),this.setAttribute("normal",new ft(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Xi=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*d-a;for(let b=0;b<l;b++){let M=b*u-r;p.push(M,-v,0),_.push(0,0,1),m.push(b/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let b=v+l*g,M=v+l*(g+1),E=v+1+l*(g+1),S=v+1+l*g;f.push(b,M,S),f.push(M,E,S)}this.setIndex(f),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Yt=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new O,d=new O,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let v=[],b=g/n,M=a+b*o,E=e*Math.cos(M),S=Math.sqrt(e*e-E*E),x=0;g===0&&a===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){let I=y/t,w=s+I*r;u.x=-S*Math.cos(w),u.y=E,u.z=S*Math.sin(w),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(I+x,1-b),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let b=h[g][v+1],M=h[g][v],E=h[g+1][v],S=h[g+1][v+1];(g!==0||a>0)&&f.push(b,M,S),(g!==n-1||c<Math.PI)&&f.push(M,E,S)}this.setIndex(f),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qi=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new O,f=new O,p=new O;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let g=0;g<=s;g++){let v=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,b=(s+1)*(_-1)+m,M=(s+1)*_+m;c.push(g,v,M),c.push(v,b,M)}this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(xp(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(xp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function xp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ix(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var mn={clone:Zs,merge:Tn},sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sx,this.fragmentShader=rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(s.value);break;case"v2":this.uniforms[n].value=new de().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kr=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zt=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pn=class extends Zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Za=class extends fn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ja=class extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=sc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ql=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$l=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ds(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function ax(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _p(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function ox(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yl=class extends vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ou:r=e,o=2*t-n;break;case lu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ou:a=e,c=2*n-t;break;case lu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,b=(-1-f)*m+(1.5+f)*_+.5*p,M=f*m-f*_;for(let E=0;E!==o;++E)r[E]=g*a[h+E]+v*a[l+E]+b*a[c+E]+M*a[u+E];return r}},Kl=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},jl=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zl=class extends vi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*_+a[c+m]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let _=a[l+p],m=a[c+p],g=f*d+p*2,v=u[g],b=u[g+1],M=e*d+p*2,E=h[M],S=h[M+1],x=cx(n,t,v,E,s);r[p]=fm(x,_,b,S,m)}return r}};function fm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function lx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function cx(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=fm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=lx(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ds(t,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ds(e.times,Array),values:ds(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Sa(e.settings)&&(n.settings={inTangents:ds(e.settings.inTangents,Array),outTangents:ds(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break;case ru:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return El;case this.InterpolantFactoryMethodBezier:return ru}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Sa(this.settings)&&(vp(this.settings.inTangents,e),vp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Sa(this.settings)&&(yp(this.settings.inTangents,e),yp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){je("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Y0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===El,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Sa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function yp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Os;var $i=class extends Nn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Us;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Qa.prototype.ValueTypeName="color";var Yi=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Yi.prototype.ValueTypeName="number";var Jl=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Gn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ki=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}};Ki.prototype.ValueTypeName="quaternion";Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Nn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Us;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};vs.prototype.ValueTypeName="vector";var eo=class{constructor(e="",t=-1,n=[],s=Yp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=hi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ux(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=ax(c);c=_p(c,1,h),l=_p(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Yi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function hx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yi;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return Qa;case"quaternion":return Ki;case"bool":case"boolean":return $i;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ux(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hx(i.type);if(i.times===void 0){let n=[],s=[];ox(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Sa(i.settings)&&(t.settings={inTangents:ds(i.settings.inTangents,Float32Array),outTangents:ds(i.settings.outTangents,Float32Array)}),t}var gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Mp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Mp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Mp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ql=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pm=new Ql,yi=class{constructor(e){this.manager=e!==void 0?e:pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi={},pu=class extends Error{constructor(e,t){super(e),this.response=t}},zr=class extends yi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=gi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:s});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Bi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,m=new ReadableStream({start(g){v();function v(){u.read().then(({done:b,value:M})=>{if(b)g.close();else{_+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let S=0,x=h.length;S<x;S++){let y=h[S];y.onProgress&&y.onProgress(E)}g.enqueue(M),v()}},b=>{g.error(b)})}}});return new Response(m)}else throw new pu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{gi.add(`file:${e}`,l);let h=Bi[e];delete Bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Bi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sr=new WeakMap,ec=class extends yi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=gi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Sr.get(a);u===void 0&&(u=[],Sr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Cr("img");function c(){h(),t&&t(this);let u=Sr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Sr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),gi.remove(`image:${e}`);let d=Sr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var to=class extends yi{constructor(e){super(e)}load(e,t,n,s){let r=new $t,a=new ec(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ws=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},no=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nu=new qe,Sp=new O,bp=new O,Hr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Sp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sp),bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){nu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Rr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bl=new O,Tl=new Gn,mi=new O,io=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bl,Tl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Tl,mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bl,Tl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Tl,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new O,Tp=new de,Ep=new de,Jt=class extends io{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Tp,Ep),t.subVectors(Ep,Tp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mu=class extends Hr{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},so=class extends Ws{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new mu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},gu=class extends Hr{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}},Xs=class extends Ws{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zi=class extends io{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xu=class extends Hr{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new xu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ji=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var iu=new WeakMap,ro=class extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Xe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Xe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=gi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{iu.has(a)===!0?(s&&s(iu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return gi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),iu.set(c,l),gi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var br=-90,Tr=1,Gr=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(br,Tr,e,t);s.layers=this.layers,this.add(s);let r=new Jt(br,Tr,e,t);r.layers=this.layers,this.add(r);let a=new Jt(br,Tr,e,t);a.layers=this.layers,this.add(a);let o=new Jt(br,Tr,e,t);o.layers=this.layers,this.add(o);let c=new Jt(br,Tr,e,t);c.layers=this.layers,this.add(c);let l=new Jt(br,Tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},tc=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ao=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=dx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function dx(){this._document.hidden===!1&&this.reset()}var Xu="\\[\\]\\.:\\/",fx=new RegExp("["+Xu+"]","g"),qu="[^"+Xu+"]",px="[^"+Xu.replace("\\.","")+"]",mx=/((?:WC+[\/:])*)/.source.replace("WC",qu),gx=/(WCOD+)?/.source.replace("WCOD",px),xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qu),_x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qu),vx=new RegExp("^"+mx+gx+xx+_x+"$"),yx=["material","materials","bones","map"],_u=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fx,"")}static parseTrackName(e){let t=vx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=_u;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sb=new Float32Array(1);var wp=new qe,Ms=class{constructor(e,t,n=0,s=1/0){this.ray=new ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wp),this}intersectObject(e,t=!0,n=[]){return vu(e,this,n,t),n.sort(Ap),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)vu(e[s],this,n,t);return n.sort(Ap),n}};function Ap(i,e){return i.distance-e.distance}function vu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)vu(r[a],e,t,!0)}}var Ju=class Ju{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ju.prototype.isMatrix2=!0;var yu=Ju;function $u(i,e,t,n){let s=Mx(n);switch(t){case Iu:return i*e;case uc:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case Ss:return i*e*2/s.components*s.byteLength;case fc:return i*e*2/s.components*s.byteLength;case Lu:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case pc:return i*e*4/s.components*s.byteLength;case go:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:case _c:return Math.max(i,16)*Math.max(e,8)/4;case mc:case xc:return Math.max(i,8)*Math.max(e,8)/2;case vc:case yc:case Sc:case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mc:case yo:case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kc:case zc:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mo:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mx(i){switch(i){case bn:case Au:return{byteLength:1,components:1};case $r:case Ru:case Bt:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case li:case lc:case Wn:return{byteLength:4,components:1};case Cu:case Pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Om(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bx(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
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
#endif`,wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
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
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
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
#endif`,Dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
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
#endif`,Bx=`#ifdef USE_BUMPMAP
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$x=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Yx=`vec3 transformedNormal = objectNormal;
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
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",e_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,n_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h_=`#ifdef USE_GRADIENTMAP
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
}`,u_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p_=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,m_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,g_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,__=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,M_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,S_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,w_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
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
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
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
#endif`,$_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,lv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dv=`#ifdef USE_SKINNING
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
#endif`,fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xv=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_v=`#ifdef USE_TRANSMISSION
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tv=`uniform sampler2D t2D;
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`#include <common>
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
}`,Pv=`#if DEPTH_PACKING == 3200
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
}`,Iv=`#define DISTANCE
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
}`,Lv=`#define DISTANCE
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
void main() {
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`uniform float scale;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Bv=`uniform vec3 diffuse;
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
}`,kv=`#define LAMBERT
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
}`,zv=`#define LAMBERT
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
}`,Hv=`#define MATCAP
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
}`,Gv=`#define MATCAP
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
}`,Vv=`#define NORMAL
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
}`,Wv=`#define NORMAL
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
}`,Xv=`#define PHONG
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
}`,qv=`#define PHONG
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
}`,$v=`#define STANDARD
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
}`,Yv=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,Kv=`#define TOON
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
}`,jv=`#define TOON
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
}`,Zv=`uniform float size;
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
}`,Jv=`uniform vec3 diffuse;
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
}`,Qv=`#include <common>
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
}`,ey=`uniform vec3 color;
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
}`,ty=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Tx,alphahash_pars_fragment:Ex,alphamap_fragment:wx,alphamap_pars_fragment:Ax,alphatest_fragment:Rx,alphatest_pars_fragment:Cx,aomap_fragment:Px,aomap_pars_fragment:Ix,batching_pars_vertex:Lx,batching_vertex:Dx,begin_vertex:Nx,beginnormal_vertex:Ux,bsdfs:Ox,iridescence_fragment:Fx,bumpmap_pars_fragment:Bx,clipping_planes_fragment:kx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Gx,color_fragment:Vx,color_pars_fragment:Wx,color_pars_vertex:Xx,color_vertex:qx,common:$x,defaultnormal_vertex:Yx,displacementmap_pars_vertex:Kx,displacementmap_vertex:jx,emissivemap_fragment:Zx,emissivemap_pars_fragment:Jx,colorspace_fragment:Qx,colorspace_pars_fragment:e_,envmap_fragment:t_,envmap_common_pars_fragment:n_,envmap_pars_fragment:i_,envmap_pars_vertex:s_,envmap_physical_pars_fragment:m_,envmap_vertex:r_,fog_vertex:a_,fog_pars_vertex:o_,fog_fragment:l_,fog_pars_fragment:c_,gradientmap_pars_fragment:h_,lightmap_pars_fragment:u_,lights_lambert_fragment:d_,lights_lambert_pars_fragment:f_,lights_pars_begin:p_,lights_toon_fragment:g_,lights_toon_pars_fragment:x_,lights_phong_fragment:__,lights_phong_pars_fragment:v_,lights_physical_fragment:y_,lights_physical_pars_fragment:M_,lights_fragment_begin:S_,lights_fragment_maps:b_,lights_fragment_end:T_,lightprobes_pars_fragment:E_,logdepthbuf_fragment:w_,logdepthbuf_pars_fragment:A_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:C_,map_fragment:P_,map_pars_fragment:I_,map_particle_fragment:L_,map_particle_pars_fragment:D_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:U_,morphinstance_vertex:O_,morphcolor_vertex:F_,morphnormal_vertex:B_,morphtarget_pars_vertex:k_,morphtarget_vertex:z_,normal_fragment_begin:H_,normal_fragment_maps:G_,normal_pars_fragment:V_,normal_pars_vertex:W_,normal_vertex:X_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:$_,clearcoat_normal_fragment_maps:Y_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:j_,opaque_fragment:Z_,packing:J_,premultiplied_alpha_fragment:Q_,project_vertex:ev,dithering_fragment:tv,dithering_pars_fragment:nv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:rv,shadowmap_pars_vertex:av,shadowmap_vertex:ov,shadowmask_pars_fragment:lv,skinbase_vertex:cv,skinning_pars_vertex:hv,skinning_vertex:uv,skinnormal_vertex:dv,specularmap_fragment:fv,specularmap_pars_fragment:pv,tonemapping_fragment:mv,tonemapping_pars_fragment:gv,transmission_fragment:xv,transmission_pars_fragment:_v,uv_pars_fragment:vv,uv_pars_vertex:yv,uv_vertex:Mv,worldpos_vertex:Sv,background_vert:bv,background_frag:Tv,backgroundCube_vert:Ev,backgroundCube_frag:wv,cube_vert:Av,cube_frag:Rv,depth_vert:Cv,depth_frag:Pv,distance_vert:Iv,distance_frag:Lv,equirect_vert:Dv,equirect_frag:Nv,linedashed_vert:Uv,linedashed_frag:Ov,meshbasic_vert:Fv,meshbasic_frag:Bv,meshlambert_vert:kv,meshlambert_frag:zv,meshmatcap_vert:Hv,meshmatcap_frag:Gv,meshnormal_vert:Vv,meshnormal_frag:Wv,meshphong_vert:Xv,meshphong_frag:qv,meshphysical_vert:$v,meshphysical_frag:Yv,meshtoon_vert:Kv,meshtoon_frag:jv,points_vert:Zv,points_frag:Jv,shadow_vert:Qv,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},Ue={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Ei={basic:{uniforms:Tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Tn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Tn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Tn([Ue.points,Ue.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Tn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Tn([Ue.common,Ue.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Tn([Ue.sprite,Ue.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Tn([Ue.common,Ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Tn([Ue.lights,Ue.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ei.physical={uniforms:Tn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var qc={r:0,b:0,g:0},iy=new qe,Fm=new tt;Fm.set(-1,0,0,0,1,0,0,0,1);function sy(i,e,t,n,s,r){let a=new Re(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let M=v.backgroundBlurriness>0;b=e.get(b,M)}return b}function p(v){let b=!1,M=f(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,b){let M=f(b);M&&M.isCubeTexture?(l===void 0&&(l=new Ze(new Xt(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Zs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Fm),l.material.toneMapped=lt.getTransfer(M.colorSpace)!==yt,(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ze(new Xi(2,2),new Rt({name:"BackgroundMaterial",uniforms:Zs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=lt.getTransfer(M.colorSpace)!==yt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(qc,Wu(i)),t.buffers.color.setClear(qc.r,qc.g,qc.b,b,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:_,dispose:g}}function ry(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,N,H,P,G){let V=!1,U=u(C,P,H,N);r!==U&&(r=U,l(r.object)),V=f(C,P,H,G),V&&p(C,P,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(C,N,H,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,N,H,P){let G=P.wireframe===!0,V=n[N.id];V===void 0&&(V={},n[N.id]=V);let U=C.isInstancedMesh===!0?C.id:0,q=V[U];q===void 0&&(q={},V[U]=q);let z=q[H.id];z===void 0&&(z={},q[H.id]=z);let D=z[G];return D===void 0&&(D=d(c()),z[G]=D),D}function d(C){let N=[],H=[],P=[];for(let G=0;G<t;G++)N[G]=0,H[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,N,H,P){let G=r.attributes,V=N.attributes,U=0,q=H.getAttributes();for(let z in q)if(q[z].location>=0){let B=G[z],L=V[z];if(L===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),B===void 0||B.attribute!==L||L&&B.data!==L.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function p(C,N,H,P){let G={},V=N.attributes,U=0,q=H.getAttributes();for(let z in q)if(q[z].location>=0){let B=V[z];B===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(B=C.instanceColor));let L={};L.attribute=B,B&&B.data&&(L.data=B.data),G[z]=L,U++}r.attributes=G,r.attributesNum=U,r.index=P}function _(){let C=r.newAttributes;for(let N=0,H=C.length;N<H;N++)C[N]=0}function m(C){g(C,0)}function g(C,N){let H=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;H[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),G[C]!==N&&(i.vertexAttribDivisor(C,N),G[C]=N)}function v(){let C=r.newAttributes,N=r.enabledAttributes;for(let H=0,P=N.length;H<P;H++)N[H]!==C[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function b(C,N,H,P,G,V,U){U===!0?i.vertexAttribIPointer(C,N,H,G,V):i.vertexAttribPointer(C,N,H,P,G,V)}function M(C,N,H,P){_();let G=P.attributes,V=H.getAttributes(),U=N.defaultAttributeValues;for(let q in V){let z=V[q];if(z.location>=0){let D=G[q];if(D===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(D=C.instanceColor)),D!==void 0){let B=D.normalized,L=D.itemSize,X=e.get(D);if(X===void 0)continue;let F=X.buffer,W=X.type,te=X.bytesPerElement,fe=W===i.INT||W===i.UNSIGNED_INT||D.gpuType===lc;if(D.isInterleavedBufferAttribute){let he=D.data,re=he.isInterleavedBuffer===!0?he.stride:he.itemSize,Se=D.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Ce=0;Ce<z.locationSize;Ce++)g(z.location+Ce,he.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ce=0;Ce<z.locationSize;Ce++)m(z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,F);for(let Ce=0;Ce<z.locationSize;Ce++)b(z.location+Ce,L/z.locationSize,W,B,re*te,(Se+L/z.locationSize*Ce)*te,fe)}else{if(D.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)g(z.location+he,D.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let he=0;he<z.locationSize;he++)m(z.location+he);i.bindBuffer(i.ARRAY_BUFFER,F);for(let he=0;he<z.locationSize;he++)b(z.location+he,L/z.locationSize,W,B,L*te,L/z.locationSize*he*te,fe)}}else if(U!==void 0){let B=U[q];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(z.location,B);break;case 3:i.vertexAttrib3fv(z.location,B);break;case 4:i.vertexAttrib4fv(z.location,B);break;default:i.vertexAttrib1fv(z.location,B)}}}}v()}function E(){I();for(let C in n){let N=n[C];for(let H in N){let P=N[H];for(let G in P){let V=P[G];for(let U in V)h(V[U].object),delete V[U];delete P[G]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let N=n[C.id];for(let H in N){let P=N[H];for(let G in P){let V=P[G];for(let U in V)h(V[U].object),delete V[U];delete P[G]}}delete n[C.id]}function x(C){for(let N in n){let H=n[N];for(let P in H){let G=H[P];if(G[C.id]===void 0)continue;let V=G[C.id];for(let U in V)h(V[U].object),delete V[U];delete G[C.id]}}}function y(C){for(let N in n){let H=n[N],P=C.isInstancedMesh===!0?C.id:0,G=H[P];if(G!==void 0){for(let V in G){let U=G[V];for(let q in U)h(U[q].object),delete U[q];delete G[V]}delete H[P],Object.keys(H).length===0&&delete n[N]}}}function I(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function ay(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function oy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Un&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let y=x===Bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==bn&&x!==Wn&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Xe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Xe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:M,maxSamples:E,samples:S}}function ly(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Hn,o=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,b=v*4,M=g.clippingState||null;c.value=M,M=h(p,d,b,f);for(let E=0;E!==b;++E)M[E]=t[E];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,p!==!0||m===null){let g=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,M=f;b!==_;++b,M+=4)a.copy(u[b]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Eo=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:cn});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Qt),new Gr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},mm=256,cy=3,hy=20,Bm=256,km=16,uy=3,dy=new O,fy=new Re,Zr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gr(1,10,null),this._boxMesh=new Ze(new Xt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=dy}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(fy));let m=new Gr(n,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(mm,zu(e))}_fromTexture(e,t){e.mapping===Ks||e.mapping===Xr?this._setSize(e.image.length===0?mm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=gm(e,!1,!1),n=Math.log2(e)-cy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=gm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ks||e.mapping===Xr?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=py(),this._integrationMaterial=my());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/km);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-uy)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Bm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=gy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function gm(i,e,t){return new Eo(i,{minFilter:Qn,generateMipmaps:e,type:Bt,colorSpace:Cn,depthBuffer:t})}function wo(i,e,t){return new Rt({name:i,uniforms:e,vertexShader:ut.cube_vert,fragmentShader:t,side:pn,blending:cn,depthTest:!1,depthWrite:!1})}function py(){return wo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function my(){return wo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:km}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gy(){return wo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xm(){return wo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _m(){return wo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===rc||f===ac)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Eo(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===rc||f===ac,_=f===Ks||f===Xr;if(p||_){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Zr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new Zr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===rc?d.mapping=Ks:f===ac&&(d.mapping=Xr),d}function c(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function _y(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function vy(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function u(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,b=m.count>=65535?La:Ia,M=new b(Math.ceil(v/3)*6,1),E=M.array;if(_!==null){let x=_.array;g=_.version;for(let y=0,I=0;y<v;y+=3){let w=x[y+0],C=x[y+1],N=x[y+2];E[I++]=w,E[I++]=C,E[I++]=C,E[I++]=N,E[I++]=N,E[I++]=w}}else{g=m.version;for(let x=0,y=0;x<v;x+=3){let I=x+0,w=x+1,C=x+2;E[y++]=I,E[y++]=w,E[y++]=w,E[y++]=C,E[y++]=C,E[y++]=I}}M.version=g;let S=r.get(p);S&&e.remove(S),r.set(p,M)}function d(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let _=s[p].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function yy(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function My(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sy(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let M=o.attributes.position.count*b,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*E*4*u),x=new Ca(S,M,E,u);x.type=Wn,x.needsUpdate=!0;let y=b*4;for(let w=0;w<u;w++){let C=m[w],N=g[w],H=v[w],P=M*E*4*w;for(let G=0;G<C.count;G++){let V=G*y;f===!0&&(s.fromBufferAttribute(C,G),S[P+V+0]=s.x,S[P+V+1]=s.y,S[P+V+2]=s.z,S[P+V+3]=0),p===!0&&(s.fromBufferAttribute(N,G),S[P+V+4]=s.x,S[P+V+5]=s.y,S[P+V+6]=s.z,S[P+V+7]=0),_===!0&&(s.fromBufferAttribute(H,G),S[P+V+8]=s.x,S[P+V+9]=s.y,S[P+V+10]=s.z,S[P+V+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new de(M,E)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function by(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Ty={[co]:"LINEAR_TONE_MAPPING",[ho]:"REINHARD_TONE_MAPPING",[uo]:"CINEON_TONE_MAPPING",[fo]:"ACES_FILMIC_TONE_MAPPING",[mo]:"AGX_TONE_MAPPING",[Ys]:"NEUTRAL_TONE_MAPPING",[po]:"CUSTOM_TONE_MAPPING"};function Ey(i,e,t,n,s,r){let a=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new At;h.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ft([0,2,0,0,2,0],2));let u=new kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ze(h,u),f=new Zi(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,v=null,b=[],M=!1;this.setSize=function(E,S){a.setSize(E,S),o!==null&&o.setSize(E,S),c!==null&&c.setSize(E,S);for(let x=0;x<b.length;x++){let y=b[x];y.setSize&&y.setSize(E,S)}},this.setEffects=function(E){b=E,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,x=a.height;b.length>0&&o===null&&(o=new Ut(S,x,{type:Bt,depthBuffer:!1,stencilBuffer:!1}),c=new Ut(S,x,{type:Bt,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&b.some(I=>I.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new ai(S,x),r===!0&&(l.format=ci,l.type=Qi)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let I=0;I<b.length;I++){let w=b[I];w.setSize&&w.setSize(S,x),y&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(l)}},this.begin=function(E,S){if(m||E.toneMapping===Si&&b.length===0)return!1;if(v=S,S!==null){let x=S.width,y=S.height;(a.width!==x||a.height!==y)&&this.setSize(x,y)}return M===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=Si,!0},this.hasRenderPass=function(){return M},this.end=function(E,S){E.toneMapping=g,m=!0;let x=a,y=o;for(let I=0;I<b.length;I++){let w=b[I];w.enabled!==!1&&(w.render(E,y,x,S),w.needsSwap!==!1&&(x=y,y=y===o?c:o))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,u.defines={},lt.getTransfer(p)===yt&&(u.defines.SRGB_TRANSFER="");let I=Ty[_];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var zm=new $t,Hm=new ai(1,1),Gm=new Ba(1),Vm=new Ca,Wm=new Ol,Xm=new Fa,vm=[],ym=[],Mm=new Float32Array(16),Sm=new Float32Array(9),bm=new Float32Array(4);function Jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vm[s];if(r===void 0&&(r=new Float32Array(s),vm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kc(i,e){let t=ym[e];t===void 0&&(t=new Int32Array(e),ym[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Py(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;bm.set(n),i.uniformMatrix2fv(this.addr,!1,bm),tn(t,n)}}function Iy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Sm.set(n),i.uniformMatrix3fv(this.addr,!1,Sm),tn(t,n)}}function Ly(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Mm.set(n),i.uniformMatrix4fv(this.addr,!1,Mm),tn(t,n)}}function Dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function jc(i){return i.version===0&&(i.compareFunction=Ou,i.needsUpdate=!0),i}function Hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=jc(Hm):r=zm,t.setTexture2D(e||r,s)}function Gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wm,s)}function Vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=jc(Gm):r=Xm,t.setTextureCube(e||r,s)}function Wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vm,s)}function Xy(i){switch(i){case 5126:return wy;case 35664:return Ay;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Iy;case 35676:return Ly;case 5124:case 35670:return Dy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return By;case 36295:return ky;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Wy}}function qy(i,e){i.uniform1fv(this.addr,e)}function $y(i,e){let t=Jr(e,this.size,2);i.uniform2fv(this.addr,t)}function Yy(i,e){let t=Jr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ky(i,e){let t=Jr(e,this.size,4);i.uniform4fv(this.addr,t)}function jy(i,e){let t=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zy(i,e){let t=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jy(i,e){let t=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qy(i,e){i.uniform1iv(this.addr,e)}function eM(i,e){i.uniform2iv(this.addr,e)}function tM(i,e){i.uniform3iv(this.addr,e)}function nM(i,e){i.uniform4iv(this.addr,e)}function iM(i,e){i.uniform1uiv(this.addr,e)}function sM(i,e){i.uniform2uiv(this.addr,e)}function rM(i,e){i.uniform3uiv(this.addr,e)}function aM(i,e){i.uniform4uiv(this.addr,e)}function oM(i,e,t){let n=this.cache,s=e.length,r=Kc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=jc(Hm):a=zm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function lM(i,e,t){let n=this.cache,s=e.length,r=Kc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wm,r[a])}function cM(i,e,t){let n=this.cache,s=e.length,r=Kc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=jc(Gm):a=Xm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function hM(i,e,t){let n=this.cache,s=e.length,r=Kc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vm,r[a])}function uM(i){switch(i){case 5126:return qy;case 35664:return $y;case 35665:return Yy;case 35666:return Ky;case 35674:return jy;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return sM;case 36295:return rM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return hM}}var td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xy(t.type)}},nd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uM(t.type)}},id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Qu=/(\w+)(\])?(\[|\.)?/g;function Tm(i,e){i.seq.push(e),i.map[e.id]=e}function dM(i,e,t){let n=i.name,s=n.length;for(Qu.lastIndex=0;;){let r=Qu.exec(n),a=Qu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Tm(t,l===void 0?new td(o,i,e):new nd(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new id(o),Tm(t,u)),t=u}}}var jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);dM(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Em(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fM=37297,pM=0;function mM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var wm=new tt;function gM(i){lt._getMatrix(wm,lt.workingColorSpace,i);let e=`mat3( ${wm.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Aa:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Am(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+mM(i.getShaderSource(e),o)}else return r}function xM(i,e){let t=gM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _M={[co]:"Linear",[ho]:"Reinhard",[uo]:"Cineon",[fo]:"ACESFilmic",[mo]:"AgX",[Ys]:"Neutral",[po]:"Custom"};function vM(i,e){let t=_M[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $c=new O;function yM(){lt.getLuminanceCoefficients($c);let i=$c.x.toFixed(4),e=$c.y.toFixed(4),t=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function SM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function To(i){return i!==""}function Rm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Cm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(i){return i.replace(TM,EM)}function EM(i,e){let t=ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return sd(t)}var wM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(i){return i.replace(wM,AM)}function AM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Im(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var RM={[qs]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function CM(i){return RM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var PM={[Xr]:"ENVMAP_MODE_REFRACTION"};function IM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":PM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var LM={[sc]:"ENVMAP_BLENDING_MULTIPLY",[Xp]:"ENVMAP_BLENDING_MIX",[qp]:"ENVMAP_BLENDING_ADD"};function DM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":LM[i.combine]||"ENVMAP_BLENDING_NONE"}function NM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=CM(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=IM(t),u=DM(t),d=MM(t),f=SM(r),p=s.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(To).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(To).join(`
`),m.length>0&&(m+=`
`)):(_=[Im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),m=[Im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?ut.tonemapping_pars_fragment:"",t.toneMapping!==Si?vM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,xM("linearToOutputTexel",t.outputColorSpace),yM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),a=sd(a),a=Rm(a,t),a=Cm(a,t),o=sd(o),o=Rm(o,t),o=Cm(o,t),a=Pm(a),o=Pm(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+_+a,b=g+m+o,M=Em(s,s.VERTEX_SHADER,v),E=Em(s,s.FRAGMENT_SHADER,b);s.attachShader(p,M),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(w){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(p)||"",N=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(E)||"",P=C.trim(),G=N.trim(),V=H.trim(),U=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,E);else{let z=Am(s,M,"vertex"),D=Am(s,E,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+z+`
`+D)}else P!==""?Xe("WebGLProgram: Program Info Log:",P):(G===""||V==="")&&(q=!1);q&&(w.diagnostics={runnable:U,programLog:P,vertexShader:{log:G,prefix:_},fragmentShader:{log:V,prefix:m}})}s.deleteShader(M),s.deleteShader(E),x=new jr(s,p),y=bM(s,p)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(p,fM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}var UM=0,rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ad(e),t.set(e,n)),n}},ad=class{constructor(e){this.id=UM++,this.code=e,this.usedTimes=0}};function OM(i){return i===Ss||i===yo||i===Mo}function FM(i,e,t,n,s,r){let a=new Lr,o=new rd,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,y,I,w,C,N){let H=w.fog,P=C.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||G,V),q=d[x.type],z=n.precision;x.precision!==null&&(z=n.getMaxPrecision(x.precision),z!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",z,"instead."));let D=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,B=D!==void 0?D.length:0,L=0;P.morphAttributes.position!==void 0&&(L=1),P.morphAttributes.normal!==void 0&&(L=2),P.morphAttributes.color!==void 0&&(L=3);let X,F,W,te;if(q){let De=Ei[q];X=De.vertexShader,F=De.fragmentShader}else{X=x.vertexShader,F=x.fragmentShader;let De=o.getVertexShaderStage(x),Et=o.getFragmentShaderStage(x);o.update(x,De,Et),W=De.id,te=Et.id}let fe=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),re=C.isInstancedMesh===!0,Se=C.isBatchedMesh===!0,Ce=!!x.map,Fe=!!x.matcap,Ke=!!U,ee=Ke&&U.isPMREMTexture===!0,pe=!!x.aoMap,xe=!!x.lightMap,Te=!!x.bumpMap&&x.wireframe===!1,Me=!!x.normalMap,Ve=!!x.displacementMap,Ne=!!x.emissiveMap,Ye=!!x.metalnessMap,Qe=!!x.roughnessMap,st=x.anisotropy>0,$=x.clearcoat>0,Ct=x.diffuseRoughness>0,rt=x.dispersion>0,le=x.retroreflectivity>0,j=x.iridescence>0,me=x.sheen>0,ue=x.transmission>0,Ee=st&&!!x.anisotropyMap,R=$&&!!x.clearcoatMap,T=$&&!!x.clearcoatNormalMap,K=$&&!!x.clearcoatRoughnessMap,ce=Ct&&!!x.diffuseRoughnessMap,ne=j&&!!x.iridescenceMap,ge=j&&!!x.iridescenceThicknessMap,ve=me&&!!x.sheenColorMap,se=me&&!!x.sheenRoughnessMap,ae=!!x.specularMap,_e=!!x.specularColorMap,k=!!x.specularIntensityMap,oe=ue&&!!x.transmissionMap,J=ue&&!!x.thicknessMap,we=!!x.gradientMap,be=!!x.alphaMap,Ae=x.alphaTest>0,Be=!!x.alphaHash,nt=!!x.extensions,ye=Si;x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ye=i.toneMapping);let We=ee?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,et={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:F,defines:x.defines,customVertexShaderID:W,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:z,batching:Se,batchingColor:Se&&C._colorsTexture!==null,instancing:re,instancingColor:re&&C.instanceColor!==null,instancingMorph:re&&C.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:Fe,envMap:Ke,envMapMode:Ke&&U.mapping,envMapPMREM:ee,envMapMaxLod:ee?We.length-1:null,envMapSize:ee?We[0].width:null,aoMap:pe,lightMap:xe,bumpMap:Te,normalMap:Me,displacementMap:Ve,emissiveMap:Ne,normalMapObjectSpace:Me&&x.normalMapType===jp,normalMapTangentSpace:Me&&x.normalMapType===Kr,packedNormalMap:Me&&x.normalMapType===Kr&&OM(x.normalMap.format),metalnessMap:Ye,roughnessMap:Qe,anisotropy:st,anisotropyMap:Ee,clearcoat:$,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:K,diffuseRoughness:Ct,diffuseRoughnessMap:ce,dispersion:rt,retroreflection:le,iridescence:j,iridescenceMap:ne,iridescenceThicknessMap:ge,sheen:me,sheenColorMap:ve,sheenRoughnessMap:se,specularMap:ae,specularColorMap:_e,specularIntensityMap:k,transmission:ue,transmissionMap:oe,thicknessMap:J,gradientMap:we,opaque:x.transparent===!1&&x.blending===Wr&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:Ae,alphaHash:Be,combine:x.combine,mapUv:Ce&&f(x.map.channel),aoMapUv:pe&&f(x.aoMap.channel),lightMapUv:xe&&f(x.lightMap.channel),bumpMapUv:Te&&f(x.bumpMap.channel),normalMapUv:Me&&f(x.normalMap.channel),displacementMapUv:Ve&&f(x.displacementMap.channel),emissiveMapUv:Ne&&f(x.emissiveMap.channel),metalnessMapUv:Ye&&f(x.metalnessMap.channel),roughnessMapUv:Qe&&f(x.roughnessMap.channel),anisotropyMapUv:Ee&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&f(x.sheenRoughnessMap.channel),specularMapUv:ae&&f(x.specularMap.channel),specularColorMapUv:_e&&f(x.specularColorMap.channel),specularIntensityMapUv:k&&f(x.specularIntensityMap.channel),transmissionMapUv:oe&&f(x.transmissionMap.channel),thicknessMapUv:J&&f(x.thicknessMap.channel),alphaMapUv:be&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Me||st),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(Ce||be),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:L,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:N.filter(De=>De.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:Ne&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ft,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function _(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(y,x),g(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function m(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function g(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let y=d[x.type],I;if(y){let w=Ei[y];I=mn.clone(w.uniforms)}else I=x.uniforms;return I}function b(x,y){let I=h.get(y);return I!==void 0?++I.usedTimes:(I=new NM(i,y,x,s),l.push(I),h.set(y,I)),I}function M(x){if(--x.usedTimes===0){let y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function S(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:S}}function BM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function kM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Lm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,m,g){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=g),e++,v}function c(d,f,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let b=o(d,f,p,_,m,g);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function l(d,f,p,_,m,g){let v=o(d,f,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||kM),n.length>1&&n.sort(f||Lm),s.length>1&&s.sort(f||Lm)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function zM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Dm,i.set(n,[a])):s>=r.length?(a=new Dm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function HM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Re};break;case"SpotLight":t={position:new O,direction:new O,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function GM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var VM=0;function WM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function XM(i){let e=new HM,t=GM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new qe,a=new qe;function o(l){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,v=0,b=0,M=0,E=0,S=0,x=0,y=0,I=0,w=0;l.sort(WM);for(let N=0,H=l.length;N<H;N++){let P=l[N],G=P.color,V=P.intensity,U=P.distance,q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ss?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*V,u+=G.g*V,d+=G.b*V;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],V);w++}else if(P.isSunLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let D=P.shadow,B=t.get(P);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),n.sunShadow[p]=B,n.sunShadowMap[p]=q;let L=D.getViewportCount();for(let X=0;X<L;X++)n.sunShadowMatrix[_+X]=D.getMatrix(X),n.sunShadowCascade[_+X]=D._cascadeData[X];_+=L,p++}n.sun[f]=z,f++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let D=P.shadow,B=t.get(P);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=z,m++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(G).multiplyScalar(V),z.distance=U,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[v]=z;let D=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,D.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[v]=D.matrix,P.castShadow){let B=t.get(P);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=q,x++}v++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(G).multiplyScalar(V),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=z,b++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let D=P.shadow,B=t.get(P);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,B.shadowCameraNear=D.camera.near,B.shadowCameraFar=D.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=z,g++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(V),z.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[M]=z,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==b||C.hemiLength!==M||C.numSunShadows!==p||C.numDirectionalShadows!==E||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==y||C.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=b,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=w,C.sunLength=f,C.directionalLength=m,C.pointLength=g,C.spotLength=v,C.rectAreaLength=b,C.hemiLength=M,C.numSunShadows=p,C.numDirectionalShadows=E,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=y,C.numLightProbes=w,n.version=VM++)}function c(l,h){let u=0,d=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let v=0,b=l.length;v<b;v++){let M=l[v];if(M.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(M.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function Nm(i){let e=new XM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function qM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Nm(i),e.set(s,[o])):r>=a.length?(o=new Nm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`,KM=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],jM=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Um=new qe,bo=new O,ed=new O;function ZM(i,e,t){let n=new ms,s=new de,r=new de,a=new Mt,o=new ql,c=new $l,l={},h=t.maxTextureSize,u={[Mi]:pn,[pn]:Mi,[Ft]:Ft},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:$M,fragmentShader:YM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new At;p.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ze(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let g=this.type;this.render=function(S,x,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Pp&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);let I=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(cn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=g!==this.type;H&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=S.length;P<G;P++){let V=S[P],U=V.shadow;if(U===void 0){Xe("WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let q=U.getFrameExtents();s.multiply(q),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,U.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=z,U.map===null||H===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Vr){if(V.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ut(s.x,s.y,{format:Ss,type:Bt,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),U.map.texture.name=V.name+".shadowMap",U.map.depthTexture=new ai(s.x,s.y,Wn),U.map.depthTexture.name=V.name+".shadowMapDepth",U.map.depthTexture.format=Hi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Nt,U.map.depthTexture.magFilter=Nt}else V.isPointLight?(U.map=new Eo(s.x),U.map.depthTexture=new Ba(s.x,li)):(U.map=new Ut(s.x,s.y),U.map.depthTexture=new ai(s.x,s.y,li)),U.map.depthTexture.name=V.name+".shadowMap",U.map.depthTexture.format=Hi,this.type===qs?(U.map.depthTexture.compareFunction=z?Uu:Nu,U.map.depthTexture.minFilter=Qt,U.map.depthTexture.magFilter=Qt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Nt,U.map.depthTexture.magFilter=Nt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let D=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();V.isPointLight!==!0&&U.updateMatrices(V,y);let B=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:y.layers;for(let L=0;L<D;L++){let X=U.getCamera(L);if(V.isPointLight){let F=U.camera,W=U.matrix,te=V.distance||F.far;te!==F.far&&(F.far=te,F.updateProjectionMatrix()),bo.setFromMatrixPosition(V.matrixWorld),F.position.copy(bo),ed.copy(F.position),ed.add(KM[L]),F.up.copy(jM[L]),F.lookAt(ed),F.updateMatrixWorld(),W.makeTranslation(-bo.x,-bo.y,-bo.z),Um.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Um,F.coordinateSystem,F.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,L),i.clear();else{L===0&&(i.setRenderTarget(U.map),i.clear());let F=U.getViewport(L);a.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),N.viewport(a)}n=U.getFrustum(L),M(x,y,X,V,B,this.type)}U.isPointLightShadow!==!0&&this.type===Vr&&v(U,y),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(I,w,C)};function v(S,x){let y=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ut(s.x,s.y,{format:Ss,type:Bt}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(x,null,y,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(x,null,y,f,_,null)}function b(S,x,y,I){let w=null,C=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)w=C;else if(w=y.isPointLight===!0?c:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=w.uuid,H=x.uuid,P=l[N];P===void 0&&(P={},l[N]=P);let G=P[H];G===void 0&&(G=w.clone(),P[H]=G,x.addEventListener("dispose",E)),w=G}if(w.visible=x.visible,w.wireframe=x.wireframe,I===Vr?w.side=x.shadowSide!==null?x.shadowSide:x.side:w.side=x.shadowSide!==null?x.shadowSide:u[x.side],w.alphaMap=x.alphaMap,w.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,w.map=x.map,w.clipShadows=x.clipShadows,w.clippingPlanes=x.clippingPlanes,w.clipIntersection=x.clipIntersection,w.displacementMap=x.displacementMap,w.displacementScale=x.displacementScale,w.displacementBias=x.displacementBias,w.wireframeLinewidth=x.wireframeLinewidth,w.linewidth=x.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let N=i.properties.get(w);N.light=y}return w}function M(S,x,y,I,w,C){if(S.visible===!1)return;if(S.layers.test(w)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Vr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let P=e.update(S),G=S.material;if(Array.isArray(G)){let V=P.groups;for(let U=0,q=V.length;U<q;U++){let z=V[U],D=G[z.materialIndex];if(D&&D.visible){let B=b(S,D,I,C);S.onBeforeShadow(i,S,x,y,P,B,z),i.renderBufferDirect(y,null,P,B,S,z),S.onAfterShadow(i,S,x,y,P,B,z)}}}else if(G.visible){let V=b(S,G,I,C);S.onBeforeShadow(i,S,x,y,P,V,null),i.renderBufferDirect(y,null,P,V,S,null),S.onAfterShadow(i,S,x,y,P,V,null)}}let H=S.children;for(let P=0,G=H.length;P<G;P++)M(H[P],x,y,I,w,C)}function E(S){S.target.removeEventListener("dispose",E);for(let y in l){let I=l[y],w=S.target.uuid;w in I&&(I[w].dispose(),delete I[w])}}}function JM(i,e){function t(){let k=!1,oe=new Mt,J=null,we=new Mt(0,0,0,0);return{setMask:function(be){J!==be&&!k&&(i.colorMask(be,be,be,be),J=be)},setLocked:function(be){k=be},setClear:function(be,Ae,Be,nt,ye){ye===!0&&(be*=nt,Ae*=nt,Be*=nt),oe.set(be,Ae,Be,nt),we.equals(oe)===!1&&(i.clearColor(be,Ae,Be,nt),we.copy(oe))},reset:function(){k=!1,J=null,we.set(-1,0,0,0)}}}function n(){let k=!1,oe=!1,J=null,we=null,be=null;return{setReversed:function(Ae){if(oe!==Ae){let Be=e.get("EXT_clip_control");Ae?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),oe=Ae;let nt=be;be=null,this.setClear(nt)}},getReversed:function(){return oe},setTest:function(Ae){Ae?he(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(Ae){J!==Ae&&!k&&(i.depthMask(Ae),J=Ae)},setFunc:function(Ae){if(oe&&(Ae=am[Ae]),we!==Ae){switch(Ae){case Al:i.depthFunc(i.NEVER);break;case Rl:i.depthFunc(i.ALWAYS);break;case Cl:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case Pl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Ll:i.depthFunc(i.GREATER);break;case Dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Ae}},setLocked:function(Ae){k=Ae},setClear:function(Ae){be!==Ae&&(be=Ae,oe&&(Ae=1-Ae),i.clearDepth(Ae))},reset:function(){k=!1,J=null,we=null,be=null,oe=!1}}}function s(){let k=!1,oe=null,J=null,we=null,be=null,Ae=null,Be=null,nt=null,ye=null;return{setTest:function(We){k||(We?he(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(We){oe!==We&&!k&&(i.stencilMask(We),oe=We)},setFunc:function(We,et,De){(J!==We||we!==et||be!==De)&&(i.stencilFunc(We,et,De),J=We,we=et,be=De)},setOp:function(We,et,De){(Ae!==We||Be!==et||nt!==De)&&(i.stencilOp(We,et,De),Ae=We,Be=et,nt=De)},setLocked:function(We){k=We},setClear:function(We){ye!==We&&(i.clearStencil(We),ye=We)},reset:function(){k=!1,oe=null,J=null,we=null,be=null,Ae=null,Be=null,nt=null,ye=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,M=null,E=null,S=null,x=null,y=new Re(0,0,0),I=0,w=!1,C=null,N=null,H=null,P=null,G=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,q=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=q>=2);let D=null,B={},L=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),F=new Mt().fromArray(L),W=new Mt().fromArray(X);function te(k,oe,J,we){let be=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(k,Ae),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<J;Be++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(oe+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Ae}let fe={};fe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(wr),Te(!1),Me(Mu),he(i.CULL_FACE),pe(cn);function he(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function re(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Se(k,oe){return d[k]!==oe?(i.bindFramebuffer(k,oe),d[k]=oe,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ce(k,oe){let J=p,we=!1;if(k){J=f.get(oe),J===void 0&&(J=[],f.set(oe,J));let be=k.textures;if(J.length!==be.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,Be=be.length;Ae<Be;Ae++)J[Ae]=i.COLOR_ATTACHMENT0+Ae;J.length=be.length,we=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,we=!0);we&&i.drawBuffers(J)}function Fe(k){return _!==k?(i.useProgram(k),_=k,!0):!1}let Ke={[Jn]:i.FUNC_ADD,[Ip]:i.FUNC_SUBTRACT,[Lp]:i.FUNC_REVERSE_SUBTRACT};Ke[Dp]=i.MIN,Ke[Np]=i.MAX;let ee={[$s]:i.ZERO,[Up]:i.ONE,[Op]:i.SRC_COLOR,[Tu]:i.SRC_ALPHA,[zp]:i.SRC_ALPHA_SATURATE,[lo]:i.DST_COLOR,[oo]:i.DST_ALPHA,[Fp]:i.ONE_MINUS_SRC_COLOR,[Eu]:i.ONE_MINUS_SRC_ALPHA,[kp]:i.ONE_MINUS_DST_COLOR,[Bp]:i.ONE_MINUS_DST_ALPHA,[Hp]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Vp]:i.CONSTANT_ALPHA,[Wp]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(k,oe,J,we,be,Ae,Be,nt,ye,We){if(k===cn){m===!0&&(re(i.BLEND),m=!1);return}if(m===!1&&(he(i.BLEND),m=!0),k!==ic){if(k!==g||We!==w){if((v!==Jn||E!==Jn)&&(i.blendEquation(i.FUNC_ADD),v=Jn,E=Jn),We)switch(k){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFunc(i.ONE,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",k);break}else switch(k){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Su:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",k);break}b=null,M=null,S=null,x=null,y.set(0,0,0),I=0,g=k,w=We}return}be=be||oe,Ae=Ae||J,Be=Be||we,(oe!==v||be!==E)&&(i.blendEquationSeparate(Ke[oe],Ke[be]),v=oe,E=be),(J!==b||we!==M||Ae!==S||Be!==x)&&(i.blendFuncSeparate(ee[J],ee[we],ee[Ae],ee[Be]),b=J,M=we,S=Ae,x=Be),(nt.equals(y)===!1||ye!==I)&&(i.blendColor(nt.r,nt.g,nt.b,ye),y.copy(nt),I=ye),g=k,w=!1}function xe(k,oe){k.side===Ft?re(i.CULL_FACE):he(i.CULL_FACE);let J=k.side===pn;oe&&(J=!J),Te(J),k.blending===Wr&&k.transparent===!1?pe(cn):pe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let we=k.stencilWrite;o.setTest(we),we&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(k){C!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),C=k)}function Me(k){k!==Rp?(he(i.CULL_FACE),k!==N&&(k===Mu?i.cullFace(i.BACK):k===Cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),N=k}function Ve(k){k!==H&&(U&&i.lineWidth(k),H=k)}function Ne(k,oe,J){k?(he(i.POLYGON_OFFSET_FILL),(P!==oe||G!==J)&&(P=oe,G=J,a.getReversed()&&(oe=-oe,J=-J),i.polygonOffset(oe,J))):re(i.POLYGON_OFFSET_FILL)}function Ye(k){k?he(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function Qe(k){k===void 0&&(k=i.TEXTURE0+V-1),D!==k&&(i.activeTexture(k),D=k)}function st(k,oe,J){J===void 0&&(D===null?J=i.TEXTURE0+V-1:J=D);let we=B[J];we===void 0&&(we={type:void 0,texture:void 0},B[J]=we),(we.type!==k||we.texture!==oe)&&(D!==J&&(i.activeTexture(J),D=J),i.bindTexture(k,oe||fe[k]),we.type=k,we.texture=oe)}function $(){let k=B[D];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ct(){try{i.compressedTexImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function rt(){try{i.compressedTexImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function le(){try{i.texSubImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function j(){try{i.texSubImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function ue(){try{i.compressedTexSubImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function Ee(){try{i.texStorage2D(...arguments)}catch(k){je("WebGLState:",k)}}function R(){try{i.texStorage3D(...arguments)}catch(k){je("WebGLState:",k)}}function T(){try{i.texImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function K(){try{i.texImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function ce(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function ne(k,oe){u[k]!==oe&&(i.pixelStorei(k,oe),u[k]=oe)}function ge(k){F.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),F.copy(k))}function ve(k){W.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),W.copy(k))}function se(k,oe){let J=l.get(oe);J===void 0&&(J=new WeakMap,l.set(oe,J));let we=J.get(k);we===void 0&&(we=i.getUniformBlockIndex(oe,k.name),i.uniformBlockBinding(oe,we,we),J.set(k,we))}function ae(k,oe,J){let be=l.get(oe).get(k);c[be]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,be,J),c[be]=J)}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},D=null,B={},d={},c={},f=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,M=null,E=null,S=null,x=null,y=new Re(0,0,0),I=0,w=!1,C=null,N=null,H=null,P=null,G=null,F.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:re,bindFramebuffer:Se,drawBuffers:Ce,useProgram:Fe,setBlending:pe,setMaterial:xe,setFlipSided:Te,setCullFace:Me,setLineWidth:Ve,setPolygonOffset:Ne,setScissorTest:Ye,activeTexture:Qe,bindTexture:st,unbindTexture:$,compressedTexImage2D:Ct,compressedTexImage3D:rt,texImage2D:T,texImage3D:K,pixelStorei:ne,getParameter:ce,updateUBOMapping:se,uniformBlockBinding:ae,texStorage2D:Ee,texStorage3D:R,texSubImage2D:le,texSubImage3D:j,compressedTexSubImage2D:me,compressedTexSubImage3D:ue,scissor:ge,viewport:ve,reset:_e}}function QM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return m?new OffscreenCanvas(R,T):Cr("canvas")}function v(R,T,K){let ce=1,ne=Ee(R);if((ne.width>K||ne.height>K)&&(ce=K/Math.max(ne.width,ne.height)),ce<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let ge=Math.floor(ce*ne.width),ve=Math.floor(ce*ne.height);d===void 0&&(d=g(ge,ve));let se=T?g(ge,ve):d;return se.width=ge,se.height=ve,se.getContext("2d").drawImage(R,0,0,ge,ve),Xe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ge+"x"+ve+")."),se}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function b(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,T,K,ce,ne,ge=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ve;ce&&(ve=e.get("EXT_texture_norm16"),ve||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=T;if(T===i.RED&&(K===i.FLOAT&&(se=i.R32F),K===i.HALF_FLOAT&&(se=i.R16F),K===i.UNSIGNED_BYTE&&(se=i.R8),K===i.UNSIGNED_SHORT&&ve&&(se=ve.R16_EXT),K===i.SHORT&&ve&&(se=ve.R16_SNORM_EXT)),T===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(se=i.R8UI),K===i.UNSIGNED_SHORT&&(se=i.R16UI),K===i.UNSIGNED_INT&&(se=i.R32UI),K===i.BYTE&&(se=i.R8I),K===i.SHORT&&(se=i.R16I),K===i.INT&&(se=i.R32I)),T===i.RG&&(K===i.FLOAT&&(se=i.RG32F),K===i.HALF_FLOAT&&(se=i.RG16F),K===i.UNSIGNED_BYTE&&(se=i.RG8),K===i.UNSIGNED_SHORT&&ve&&(se=ve.RG16_EXT),K===i.SHORT&&ve&&(se=ve.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(se=i.RG8UI),K===i.UNSIGNED_SHORT&&(se=i.RG16UI),K===i.UNSIGNED_INT&&(se=i.RG32UI),K===i.BYTE&&(se=i.RG8I),K===i.SHORT&&(se=i.RG16I),K===i.INT&&(se=i.RG32I)),T===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(se=i.RGB8UI),K===i.UNSIGNED_SHORT&&(se=i.RGB16UI),K===i.UNSIGNED_INT&&(se=i.RGB32UI),K===i.BYTE&&(se=i.RGB8I),K===i.SHORT&&(se=i.RGB16I),K===i.INT&&(se=i.RGB32I)),T===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),K===i.UNSIGNED_INT&&(se=i.RGBA32UI),K===i.BYTE&&(se=i.RGBA8I),K===i.SHORT&&(se=i.RGBA16I),K===i.INT&&(se=i.RGBA32I)),T===i.RGB&&(K===i.UNSIGNED_SHORT&&ve&&(se=ve.RGB16_EXT),K===i.SHORT&&ve&&(se=ve.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),T===i.RGBA){let ae=ge?Aa:lt.getTransfer(ne);K===i.FLOAT&&(se=i.RGBA32F),K===i.HALF_FLOAT&&(se=i.RGBA16F),K===i.UNSIGNED_BYTE&&(se=ae===yt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&ve&&(se=ve.RGBA16_EXT),K===i.SHORT&&ve&&(se=ve.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(R,T){let K;return R?T===null||T===li||T===Qi?K=i.DEPTH24_STENCIL8:T===Wn?K=i.DEPTH32F_STENCIL8:T===$r&&(K=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===li||T===Qi?K=i.DEPTH_COMPONENT24:T===Wn?K=i.DEPTH_COMPONENT32F:T===$r&&(K=i.DEPTH_COMPONENT16),K}function y(R,T){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==Qt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function I(R){let T=new WeakRef(R);n.get(R).__ref=T,p.add(T),_.register(R,T,T)}function w(R){let T=n.get(R).__ref;T!==void 0&&(p.delete(T),_.unregister(T))}function C(R){H(R.target)}function N(R){P(R.target)}function H(R){R.removeEventListener("dispose",C),w(R),V(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function P(R){R.removeEventListener("dispose",N),w(R),q(R)}function G(){for(let R of p){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):H(T))}p.clear(),u.clear()}function V(R){let T=n.get(R);if(T.__webglInit===void 0)return;let K=R.source,ce=f.get(K);if(ce){let ne=ce[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&U(R),Object.keys(ce).length===0&&f.delete(K)}n.remove(R)}function U(R){let T=n.get(R);i.deleteTexture(T.__webglTexture);let K=R.source,ce=f.get(K);delete ce[T.__cacheKey],a.memory.textures--}function q(R){let T=n.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let K=R.depthTexture;if(K&&K.renderTarget===R&&H(K),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let ge=0;ge<T.__webglFramebuffer[ne].length;ge++)i.deleteFramebuffer(T.__webglFramebuffer[ne][ge]);else i.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)i.deleteFramebuffer(T.__webglFramebuffer[ne]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ce=R.textures;for(let ne=0,ge=ce.length;ne<ge;ne++){let ve=n.get(ce[ne]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(ce[ne])}n.remove(R)}let z=0;function D(){z=0}function B(){return z}function L(R){z=R}function X(){let R=z;return R>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,R}function F(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function W(R,T){let K=n.get(R);if(R.isVideoTexture&&me(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){let ce=R.image;if(ce===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(K,R,T);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+T)}function te(R,T){let K=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){xe(K,R,T);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+T)}function fe(R,T){let K=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){xe(K,R,T);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+T)}function he(R,T){let K=n.get(R);if(R.version>0&&K.__version!==R.version){Te(K,R,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+T)}let re={[Sn]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Ar]:i.MIRRORED_REPEAT},Se={[Nt]:i.NEAREST,[oc]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Ce={[Jp]:i.NEVER,[Ou]:i.ALWAYS,[Qp]:i.LESS,[Nu]:i.LEQUAL,[em]:i.EQUAL,[Uu]:i.GEQUAL,[tm]:i.GREATER,[nm]:i.NOTEQUAL};function Fe(R,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qt||T.magFilter===qr||T.magFilter===js||T.magFilter===Qn||T.minFilter===Qt||T.minFilter===qr||T.minFilter===js||T.minFilter===Qn)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,re[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Se[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Se[T.minFilter]),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nt||T.minFilter!==js&&T.minFilter!==Qn||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ke(R,T){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",C),I(T));let ce=T.source,ne=f.get(ce);ne===void 0&&(ne={},f.set(ce,ne));let ge=F(T);if(ge!==R.__cacheKey){ne[ge]===void 0&&(ne[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ne[ge].usedTimes++;let ve=ne[R.__cacheKey];ve!==void 0&&(ne[R.__cacheKey].usedTimes--,ve.usedTimes===0&&U(T)),R.__cacheKey=ge,R.__webglTexture=ne[ge].texture}return K}function ee(R,T,K){return Math.floor(Math.floor(R/K)/T)}function pe(R,T,K,ce){let ge=R.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,K,ce,T.data);else{ge.sort((k,oe)=>k.start-oe.start);let ve=0;for(let k=1;k<ge.length;k++){let oe=ge[ve],J=ge[k],we=oe.start+oe.count,be=ee(J.start,T.width,4),Ae=ee(oe.start,T.width,4);J.start<=we+1&&be===Ae&&ee(J.start+J.count-1,T.width,4)===be?oe.count=Math.max(oe.count,J.start+J.count-oe.start):(++ve,ge[ve]=J)}ge.length=ve+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let k=0,oe=ge.length;k<oe;k++){let J=ge[k],we=Math.floor(J.start/4),be=Math.ceil(J.count/4),Ae=we%T.width,Be=Math.floor(we/T.width),nt=be,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(i.TEXTURE_2D,0,Ae,Be,nt,ye,K,ce,T.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function xe(R,T,K){let ce=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=i.TEXTURE_3D);let ne=Ke(R,T),ge=T.source;t.bindTexture(ce,R.__webglTexture,i.TEXTURE0+K);let ve=n.get(ge);if(ge.version!==ve.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap!="undefined"&&T.image instanceof ImageBitmap)===!1){let ye=lt.getPrimaries(lt.workingColorSpace),We=T.colorSpace===es?null:lt.getPrimaries(T.colorSpace),et=T.colorSpace===es||ye===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ae=v(T.image,!1,s.maxTextureSize);ae=ue(T,ae);let _e=r.convert(T.format,T.colorSpace),k=r.convert(T.type),oe=S(T.internalFormat,_e,k,T.normalized,T.colorSpace,T.isVideoTexture);Fe(ce,T);let J,we=T.mipmaps,be=T.isVideoTexture!==!0,Ae=ve.__version===void 0||ne===!0,Be=ge.dataReady,nt=y(T,ae);if(T.isDepthTexture)oe=x(T.format===ci,T.type),Ae&&(be?t.texStorage2D(i.TEXTURE_2D,1,oe,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,oe,ae.width,ae.height,0,_e,k,null));else if(T.isDataTexture)if(we.length>0){be&&Ae&&t.texStorage2D(i.TEXTURE_2D,nt,oe,we[0].width,we[0].height);for(let ye=0,We=we.length;ye<We;ye++)J=we[ye],be?Be&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,J.width,J.height,_e,k,J.data):t.texImage2D(i.TEXTURE_2D,ye,oe,J.width,J.height,0,_e,k,J.data);T.generateMipmaps=!1}else be?(Ae&&t.texStorage2D(i.TEXTURE_2D,nt,oe,ae.width,ae.height),Be&&pe(T,ae,_e,k)):t.texImage2D(i.TEXTURE_2D,0,oe,ae.width,ae.height,0,_e,k,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){be&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,oe,we[0].width,we[0].height,ae.depth);for(let ye=0,We=we.length;ye<We;ye++)if(J=we[ye],T.format!==Un)if(_e!==null)if(be){if(Be)if(T.layerUpdates.size>0){let et=$u(J.width,J.height,T.format,T.type);for(let De of T.layerUpdates){let Et=J.data.subarray(De*et/J.data.BYTES_PER_ELEMENT,(De+1)*et/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,De,J.width,J.height,1,_e,Et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,J.width,J.height,ae.depth,_e,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,oe,J.width,J.height,ae.depth,0,J.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,J.width,J.height,ae.depth,_e,k,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,oe,J.width,J.height,ae.depth,0,_e,k,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{be&&Ae&&t.texStorage2D(i.TEXTURE_2D,nt,oe,we[0].width,we[0].height);for(let ye=0,We=we.length;ye<We;ye++)J=we[ye],T.format!==Un?_e!==null?be?Be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,J.width,J.height,_e,J.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,oe,J.width,J.height,0,J.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Be&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,J.width,J.height,_e,k,J.data):t.texImage2D(i.TEXTURE_2D,ye,oe,J.width,J.height,0,_e,k,J.data)}else if(T.isDataArrayTexture)if(be){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,oe,ae.width,ae.height,ae.depth),Be)if(T.layerUpdates.size>0){let ye=$u(ae.width,ae.height,T.format,T.type);for(let We of T.layerUpdates){let et=ae.data.subarray(We*ye/ae.data.BYTES_PER_ELEMENT,(We+1)*ye/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,We,ae.width,ae.height,1,_e,k,et)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,k,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,ae.width,ae.height,ae.depth,0,_e,k,ae.data);else if(T.isData3DTexture)be?(Ae&&t.texStorage3D(i.TEXTURE_3D,nt,oe,ae.width,ae.height,ae.depth),Be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,k,ae.data)):t.texImage3D(i.TEXTURE_3D,0,oe,ae.width,ae.height,ae.depth,0,_e,k,ae.data);else if(T.isFramebufferTexture){if(Ae)if(be)t.texStorage2D(i.TEXTURE_2D,nt,oe,ae.width,ae.height);else{let ye=ae.width,We=ae.height;for(let et=0;et<nt;et++)t.texImage2D(i.TEXTURE_2D,et,oe,ye,We,0,_e,k,null),ye>>=1,We>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),ae.parentNode!==ye){ye.appendChild(ae),u.add(T),ye.onpaint=We=>{let et=We.changedElements;for(let De of u)et.includes(De.image)&&(De.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let et=i.RGBA,De=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,et,De,Et,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(be&&Ae){let ye=Ee(we[0]);t.texStorage2D(i.TEXTURE_2D,nt,oe,ye.width,ye.height)}for(let ye=0,We=we.length;ye<We;ye++)J=we[ye],be?Be&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,_e,k,J):t.texImage2D(i.TEXTURE_2D,ye,oe,_e,k,J);T.generateMipmaps=!1}else if(be){if(Ae){let ye=Ee(ae);t.texStorage2D(i.TEXTURE_2D,nt,oe,ye.width,ye.height)}Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,k,ae)}else t.texImage2D(i.TEXTURE_2D,0,oe,_e,k,ae);b(T)&&T.mipmapsAutoUpdate===!0&&M(ce),ve.__version=ge.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Te(R,T,K){if(T.image.length!==6)return;let ce=Ke(R,T),ne=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+K);let ge=n.get(ne);if(ne.version!==ge.__version||ce===!0){t.activeTexture(i.TEXTURE0+K);let ve=lt.getPrimaries(lt.workingColorSpace),se=T.colorSpace===es?null:lt.getPrimaries(T.colorSpace),ae=T.colorSpace===es||ve===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let _e=T.isCompressedTexture||T.image[0].isCompressedTexture,k=T.image[0]&&T.image[0].isDataTexture,oe=[];for(let De=0;De<6;De++)!_e&&!k?oe[De]=v(T.image[De],!0,s.maxCubemapSize):oe[De]=k?T.image[De].image:T.image[De],oe[De]=ue(T,oe[De]);let J=oe[0],we=r.convert(T.format,T.colorSpace),be=r.convert(T.type),Ae=S(T.internalFormat,we,be,T.normalized,T.colorSpace),Be=T.isVideoTexture!==!0,nt=ge.__version===void 0||ce===!0,ye=ne.dataReady,We=y(T,J);Fe(i.TEXTURE_CUBE_MAP,T);let et;if(T.isDepthTexture){if(Ae=x(T.format===ci,T.type),nt)if(Be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ae,J.width,J.height);else for(let De=0;De<6;De++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ae,J.width,J.height,0,we,be,null)}else if(_e){Be&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Ae,J.width,J.height);for(let De=0;De<6;De++){et=oe[De].mipmaps;for(let Et=0;Et<et.length;Et++){let an=et[Et];T.format!==Un?we!==null?Be?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Et,0,0,an.width,an.height,we,an.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Et,Ae,an.width,an.height,0,an.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Et,0,0,an.width,an.height,we,be,an.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Et,Ae,an.width,an.height,0,we,be,an.data)}}}else{if(et=T.mipmaps,Be&&nt){et.length>0&&We++;let De=Ee(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Ae,De.width,De.height)}for(let De=0;De<6;De++)if(k){Be?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,oe[De].width,oe[De].height,we,be,oe[De].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ae,oe[De].width,oe[De].height,0,we,be,oe[De].data);for(let Et=0;Et<et.length;Et++){let rs=et[Et].image[De].image;Be?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Et+1,0,0,rs.width,rs.height,we,be,rs.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Et+1,Ae,rs.width,rs.height,0,we,be,rs.data)}}else{Be?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,we,be,oe[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ae,we,be,oe[De]);for(let Et=0;Et<et.length;Et++){let an=et[Et];Be?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Et+1,0,0,we,be,an.image[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Et+1,Ae,we,be,an.image[De])}}}b(T)&&T.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ge.__version=ne.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Me(R,T,K,ce,ne,ge){let ve=r.convert(K.format,K.colorSpace),se=r.convert(K.type),ae=S(K.internalFormat,ve,se,K.normalized,K.colorSpace),_e=n.get(T),k=n.get(K);if(k.__renderTarget=T,!_e.__hasExternalTextures){let oe=Math.max(1,T.width>>ge),J=Math.max(1,T.height>>ge);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ge,ae,oe,J,T.depth,0,ve,se,null):t.texImage2D(ne,ge,ae,oe,J,0,ve,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),j(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,ne,k.__webglTexture,0,le(T)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,ne,k.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(R,T,K){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer){let ce=T.depthTexture,ne=ce&&ce.isDepthTexture?ce.type:null,ge=x(T.stencilBuffer,ne),ve=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;j(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(T),ge,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(T),ge,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ge,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,R)}else{let ce=T.textures;for(let ne=0;ne<ce.length;ne++){let ge=ce[ne],ve=r.convert(ge.format,ge.colorSpace),se=r.convert(ge.type),ae=S(ge.internalFormat,ve,se,ge.normalized,ge.colorSpace);j(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(T),ae,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(T),ae,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ae,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(R,T,K){let ce=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(T.depthTexture);ne.__renderTarget=T;let ge=ce?T.depthTexture.image[0]:T.depthTexture.image;(!ne.__webglTexture||ge.width!==T.width||ge.height!==T.height)&&(ge.width=T.width,ge.height=T.height,T.depthTexture.needsUpdate=!0),ce?he(T.depthTexture,0):W(T.depthTexture,0);let ve=ne.__webglTexture,se=le(T),ae=ce?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,_e=T.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Hi)j(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ae,ve,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ae,ve,0);else if(T.depthTexture.format===ci)j(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ae,ve,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ae,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(R){let T=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let ce=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ce){let ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ce.removeEventListener("dispose",ne)};ce.addEventListener("dispose",ne),T.__depthDisposeCallback=ne}T.__boundDepthTexture=ce}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let ce=0;ce<6;ce++)Ne(T.__webglFramebuffer[ce],R,ce);else R.texture.mipmaps.length>0?Ne(T.__webglFramebuffer[0],R,0):Ne(T.__webglFramebuffer,R,0);else if(K){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]===void 0)T.__webglDepthbuffer[ce]=i.createRenderbuffer(),Ve(T.__webglDepthbuffer[ce],R,!1);else{let ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ge)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ve(T.__webglDepthbuffer,R,!1);else{let ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(R,T,K){let ce=n.get(R);T!==void 0&&Me(ce.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ye(R)}function st(R){let T=R.texture,K=n.get(R),ce=n.get(T);R.addEventListener("dispose",N),I(R);let ne=R.textures,ge=R.isWebGLCubeRenderTarget===!0,ve=ne.length>1;if(ve||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=T.version,a.memory.textures++),ge){K.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps.length>0){K.__webglFramebuffer[se]=[];for(let ae=0;ae<T.mipmaps.length;ae++)K.__webglFramebuffer[se][ae]=i.createFramebuffer()}else K.__webglFramebuffer[se]=i.createFramebuffer()}else{if(T.mipmaps.length>0){K.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)K.__webglFramebuffer[se]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(ve)for(let se=0,ae=ne.length;se<ae;se++){let _e=n.get(ne[se]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&j(R)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let se=0;se<ne.length;se++){let ae=ne[se];K.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[se]);let _e=r.convert(ae.format,ae.colorSpace),k=r.convert(ae.type),oe=S(ae.internalFormat,_e,k,ae.normalized,ae.colorSpace,R.isXRRenderTarget===!0),J=le(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,oe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,K.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Me(K.__webglFramebuffer[se][ae],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ae);else Me(K.__webglFramebuffer[se],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);b(T)?M(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let se=0,ae=ne.length;se<ae;se++){let _e=ne[se],k=n.get(_e),oe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,k.__webglTexture),Fe(oe,_e),Me(K.__webglFramebuffer,R,_e,i.COLOR_ATTACHMENT0+se,oe,0),b(_e)&&M(oe)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,ce.__webglTexture),Fe(se,T),T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Me(K.__webglFramebuffer[ae],R,T,i.COLOR_ATTACHMENT0,se,ae);else Me(K.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,se,0);b(T)?M(se):T.mipmaps.length>0&&i.texParameteri(se,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Ye(R)}function $(R){let T=R.textures;for(let K=0,ce=T.length;K<ce;K++){let ne=T[K];if(b(ne)&&ne.mipmapsAutoUpdate===!0){let ge=E(R),ve=n.get(ne).__webglTexture;t.bindTexture(ge,ve),M(ge),t.unbindTexture()}}}let Ct=[];function rt(R){if(R.samples>0){if(j(R)===!1){let T=R.textures,K=R.width,ce=R.height,ne=i.COLOR_BUFFER_BIT,ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(R),se=T.length>1;if(se)for(let _e=0;_e<T.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);let k=n.get(T[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,K,ce,0,0,K,ce,ne,i.NEAREST),c===!0&&(Ct.length=0,Ct.push(i.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ct.push(ge),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let _e=0;_e<T.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);let k=n.get(T[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,k,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function le(R){return Math.min(s.maxSamples,R.samples)}function j(R){let T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function me(R){let T=a.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function ue(R,T){let K=R.colorSpace,ce=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==Cn&&K!==es&&(lt.getTransfer(K)===yt?(ce!==Un||ne!==bn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",K)),T}function Ee(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=D,this.getTextureUnits=B,this.setTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=te,this.setTexture3D=fe,this.setTextureCube=he,this.rebindTextures=Qe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=j,this.dispose=G}function eS(i,e){function t(n,s=es){let r,a=lt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return i.BYTE;if(n===Ru)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Bt)return i.HALF_FLOAT;if(n===Iu)return i.ALPHA;if(n===Lu)return i.RGB;if(n===Un)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===go||n===xo||n===_o||n===vo)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===xc||n===_c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vc||n===yc||n===Mc||n===Sc||n===bc||n===yo||n===Tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vc||n===yc)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sc)return r.COMPRESSED_R11_EAC;if(n===bc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return r.COMPRESSED_RG11_EAC;if(n===Tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ec)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kc||n===zc||n===Hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===kc)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gc||n===Vc||n===Mo||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nS=`
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

}`,od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rt({vertexShader:tS,fragmentShader:nS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ld=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,_=typeof XRWebGLBinding!="undefined",m=new od,g={},v=t.getContextAttributes(),b=null,M=null,E=[],S=[],x=new de,y=null,I=null,w=new Jt;w.viewport=new Mt;let C=new Jt;C.viewport=new Mt;let N=[w,C],H=new tc,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let W=E[F];return W===void 0&&(W=new Dr,E[F]=W),W.getTargetRaySpace()},this.getControllerGrip=function(F){let W=E[F];return W===void 0&&(W=new Dr,E[F]=W),W.getGripSpace()},this.getHand=function(F){let W=E[F];return W===void 0&&(W=new Dr,E[F]=W),W.getHandSpace()};function V(F){let W=S.indexOf(F.inputSource);if(W===-1)return;let te=E[W];te!==void 0&&(te.update(F.inputSource,F.frame,l||a),te.dispatchEvent({type:F.type,data:F.inputSource}))}function U(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",q);for(let F=0;F<E.length;F++){let W=S[F];W!==null&&(S[F]=null,E[F].disconnect(W))}P=null,G=null,m.reset();for(let F in g)delete g[F];if(e.setRenderTarget(b),f=null,d=null,u=null,s=null,M=null,X.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),I!==null){let F=I.camera;F.fov=I.fov,F.zoom=I.zoom,F.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",U),s.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,fe=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=v.stencil?ci:Hi,fe=v.stencil?Qi:li);let re={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ut(d.textureWidth,d.textureHeight,{format:Un,type:bn,depthTexture:new ai(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ut(f.framebufferWidth,f.framebufferHeight,{format:Un,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(F){for(let W=0;W<F.removed.length;W++){let te=F.removed[W],fe=S.indexOf(te);fe>=0&&(S[fe]=null,E[fe].disconnect(te))}for(let W=0;W<F.added.length;W++){let te=F.added[W],fe=S.indexOf(te);if(fe===-1){for(let re=0;re<E.length;re++)if(re>=S.length){S.push(te),fe=re;break}else if(S[re]===null){S[re]=te,fe=re;break}if(fe===-1)break}let he=E[fe];he&&he.connect(te)}}function z(F,W){W===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(W.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let W=F.near,te=F.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(te=m.depthFar)),H.near=C.near=w.near=W,H.far=C.far=w.far=te,(P!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,G=H.far),H.layers.mask=F.layers.mask|6,w.layers.mask=H.layers.mask&-5,C.layers.mask=H.layers.mask&-3;let fe=F.parent,he=H.cameras;z(H,fe);for(let re=0;re<he.length;re++)z(he[re],fe);H.projectionMatrix.copy(w.projectionMatrix),H.projectionMatrixInverse.copy(w.projectionMatrixInverse),I===null&&F.isPerspectiveCamera&&(I={camera:F,fov:F.fov,zoom:F.zoom}),D(F,H,fe)};function D(F,W,te){te===null?F.matrix.copy(W.matrixWorld):(F.matrix.copy(te.matrixWorld),F.matrix.invert(),F.matrix.multiply(W.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(W.projectionMatrix),F.projectionMatrixInverse.copy(W.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Fs*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(F){c=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(F){return g[F]};let B=null;function L(F,W){if(h=W.getViewerPose(l||a),p=W,h!==null){let te=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let fe=!1;te.length!==H.cameras.length&&(H.cameras.length=0,fe=!0);for(let Ce=0;Ce<te.length;Ce++){let Fe=te[Ce],Ke=null;if(f!==null)Ke=f.getViewport(Fe);else{let pe=u.getViewSubImage(d,Fe);Ke=pe.viewport,Ce===0&&(e.setRenderTargetTextures(M,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(M))}let ee=N[Ce];ee===void 0&&(ee=new Jt,ee.layers.enable(Ce),ee.viewport=new Mt,N[Ce]=ee),ee.matrix.fromArray(Fe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Fe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ce===0&&(H.matrix.copy(ee.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),fe===!0&&H.cameras.push(ee)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Ce=u.getDepthInformation(te[0]);Ce&&Ce.isValid&&Ce.texture&&m.init(Ce,s.renderState)}if(he&&he.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Ce=0;Ce<te.length;Ce++){let Fe=te[Ce].camera;if(Fe){let Ke=g[Fe];Ke||(Ke=new ka,g[Fe]=Ke);let ee=u.getCameraImage(Fe);Ke.sourceTexture=ee}}}}for(let te=0;te<E.length;te++){let fe=S[te],he=E[te];fe!==null&&he!==void 0&&he.update(fe,W,l||a)}B&&B(F,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),p=null}let X=new Om;X.setAnimationLoop(L),this.setAnimationLoop=function(F){B=F},this.dispose=function(){}}},iS=new qe,qm=new tt;qm.set(-1,0,0,0,1,0,0,0,1);function sS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Wu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,b,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,v,b):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),b=v.envMap,M=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(iS.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rS(i,e,t,n){let s={},r={};function a(v,b){let M=b.program;n.uniformBlockBinding(v,M,s[v.id])}function o(v,b){let M=s[v.id];M===void 0&&(p(v),M=c(v),s[v.id]=M,v.addEventListener("dispose",m));let E=b.program;n.updateUBOMapping(v,E);let S=e.render.frame;r[v.id]!==S&&(l(v),r[v.id]=S)}function c(v){let b=i.createBuffer(),M=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function l(v){let b=s[v.id],M=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,x=M.length;S<x;S++){let y=M[S];if(Array.isArray(y))for(let I=0,w=y.length;I<w;I++)h(y[I],S,I,E);else h(y,S,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,b,M,E){if(d(v,b,M,E)===!0){let S=v.__offset,x=v.value;if(Array.isArray(x)){let y=0;for(let I=0;I<x.length;I++){let w=x[I],C=_(w,!0);u(w,v.__data,y),y+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,v.__data)}}function u(v,b,M){typeof v=="number"||typeof v=="boolean"?b[M]=v:v.isMatrix3?(b[M]=v.elements[0],b[M+1]=v.elements[1],b[M+2]=v.elements[2],b[M+3]=0,b[M+4]=v.elements[3],b[M+5]=v.elements[4],b[M+6]=v.elements[5],b[M+7]=0,b[M+8]=v.elements[6],b[M+9]=v.elements[7],b[M+10]=v.elements[8],b[M+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-M),M):v.toArray(b,M)}function d(v,b,M,E){let S=v.value,x=b+"_"+M;if(Array.isArray(S)){E[x]===void 0&&(E[x]=[]);let y=E[x],I=!1;for(let w=0;w<S.length;w++)f(S[w],y,w)===!0&&(I=!0);return I}return f(S,E,x)}function f(v,b,M){if(b[M]===void 0)return typeof v=="number"||typeof v=="boolean"?b[M]=v:ArrayBuffer.isView(v)?b[M]=v.slice():b[M]=v.clone(),!0;{let E=b[M];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return b[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function p(v){let b=v.uniforms,M=0,E=16;for(let x=0,y=b.length;x<y;x++){let I=Array.isArray(b[x])?b[x]:[b[x]];for(let w=0,C=I.length;w<C;w++){let N=I[w],H=Array.isArray(N.value)?N.value:[N.value],P=Array.isArray(b[x])||Array.isArray(N.value),G=M;for(let U=0,q=H.length;U<q;U++){let z=H[U],D=_(z,P),B=M%E,L=B%D.boundary,X=B+L;M+=L,X!==0&&E-X<D.storage&&(M+=E-X),U===0&&(G=M),M+=D.storage}let V=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new V((M-G)/Float32Array.BYTES_PER_ELEMENT),N.__offset=G}}let S=M%E;return S>0&&(M+=E-S),v.__size=M,v.__cache={},this}function _(v,b){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(v){let b=v.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}var aS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function oS(){return Ti===null&&(Ti=new jn(aS,16,16,Ss,Bt),Ti.name="DFG_LUT",Ti.minFilter=Qt,Ti.magFilter=Qt,Ti.wrapS=Yn,Ti.wrapT=Yn,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var Yc=class{constructor(e={}){let{canvas:t=im(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=f,m=new Set([pc,fc,dc]),g=new Set([bn,li,$r,Qi,cc,hc]),v=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,S=null,x=[],y=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,C=!1,N=null,H=null,P=null,G=null;this._outputColorSpace=wt;let V=0,U=0,q=null,z=-1,D=null,B=new Mt,L=new Mt,X=null,F=new Re(0),W=0,te=t.width,fe=t.height,he=1,re=null,Se=null,Ce=new Mt(0,0,te,fe),Fe=new Mt(0,0,te,fe),Ke=!1,ee=new ms,pe=new Fl,xe=!1,Te=!1,Me=new qe,Ve=new O,Ne=new Mt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function st(){return q===null?he:1}let $=n;function Ct(A,Y){return t.getContext(A,Y)}let rt,le,j,me,ue,Ee,R,T,K,ce,ne,ge,ve,se,ae,_e,k,oe,J,we,be,Ae,Be;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",De,!1),$===null){let Y="webgl2";if($=Ct(Y,A),$===null)throw Ct(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(A){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",De,!1),je("WebGLRenderer: "+A.message),A}function nt(){rt=new _y($),rt.init(),be=new eS($,rt),le=new oy($,rt,e,be),j=new JM($,rt),le.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),H=$.createFramebuffer(),P=$.createFramebuffer(),G=$.createFramebuffer(),me=new My($),ue=new BM,Ee=new QM($,rt,j,ue,le,be,me),R=new xy(w),T=new bx($),Ae=new ry($,T),K=new vy($,T,me,Ae),ce=new by($,K,T,Ae,me),oe=new Sy($,le,Ee),ae=new ly(ue),ne=new FM(w,R,rt,le,Ae,ae),ge=new sS(w,ue),ve=new zM,se=new qM(rt),k=new sy(w,R,j,ce,p,c),_e=new ZM(w,ce,le),Be=new rS($,me,le,j),J=new ay($,rt,me),we=new yy($,rt,me),me.programs=ne.programs,w.capabilities=le,w.extensions=rt,w.properties=ue,w.renderLists=ve,w.shadowMap=_e,w.state=j,w.info=me}_!==bn&&(I=new Ey(_,t.width,t.height,o,s,r));let ye=new ld(w,$);this.xr=ye,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(te,fe,!1))},this.getSize=function(A){return A.set(te,fe)},this.setSize=function(A,Y,ie=!0){if(ye.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,fe=Y,t.width=Math.floor(A*he),t.height=Math.floor(Y*he),ie===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(te*he,fe*he).floor()},this.setDrawingBufferSize=function(A,Y,ie){te=A,fe=Y,he=ie,t.width=Math.floor(A*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(_===bn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(Ce)},this.setViewport=function(A,Y,ie,Z){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,Y,ie,Z),j.viewport(B.copy(Ce).multiplyScalar(st()).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,Y,ie,Z){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,Y,ie,Z),j.scissor(L.copy(Fe).multiplyScalar(st()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(A){j.setScissorTest(Ke=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ie=!0){let Z=0;if(A){let Q=!1;if(q!==null){let Le=q.texture.format;Q=m.has(Le)}if(Q){let Le=q.texture.type,ke=g.has(Le),Pe=k.getClearColor(),Oe=k.getClearAlpha(),Ge=Pe.r,at=Pe.g,mt=Pe.b;ke?(v[0]=Ge,v[1]=at,v[2]=mt,v[3]=Oe,$.clearBufferuiv($.COLOR,0,v)):(b[0]=Ge,b[1]=at,b[2]=mt,b[3]=Oe,$.clearBufferiv($.COLOR,0,b))}else Z|=$.COLOR_BUFFER_BIT}Y&&(Z|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(Z|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&$.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",De,!1),k.dispose(),ve.dispose(),se.dispose(),Ee.dispose(),ue.dispose(),R.dispose(),ce.dispose(),K.dispose(),Ae.dispose(),Be.dispose(),ne.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Sf),ye.removeEventListener("sessionend",bf),ws.stop()};function We(A){A.preventDefault(),Ra("WebGLRenderer: Context Lost."),C=!0}function et(){Ra("WebGLRenderer: Context Restored."),C=!1;let A=me.autoReset,Y=_e.enabled,ie=_e.autoUpdate,Z=_e.needsUpdate,Q=_e.type;nt(),me.autoReset=A,_e.enabled=Y,_e.autoUpdate=ie,_e.needsUpdate=Z,_e.type=Q}function De(A){je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Et(A){let Y=A.target;Y.removeEventListener("dispose",Et),an(Y)}function an(A){rs(A),ue.remove(A)}function rs(A){let Y=ue.get(A).programs;Y!==void 0&&(Y.forEach(function(ie){ne.releaseProgram(ie)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ie,Z,Q,Le){Y===null&&(Y=Ye);let ke=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Pe=W0(A,Y,ie,Z,Q);j.setMaterial(Z,ke);let Oe=ie.index,Ge=1;if(Z.wireframe===!0){if(Oe=K.getWireframeAttribute(ie),Oe===void 0)return;Ge=2}let at=ie.drawRange,mt=ie.attributes.position,ze=at.start*Ge,gt=(at.start+at.count)*Ge;Le!==null&&(ze=Math.max(ze,Le.start*Ge),gt=Math.min(gt,(Le.start+Le.count)*Ge)),Oe!==null?(ze=Math.max(ze,0),gt=Math.min(gt,Oe.count)):mt!=null&&(ze=Math.max(ze,0),gt=Math.min(gt,mt.count));let Kt=gt-ze;if(Kt<0||Kt===1/0)return;Ae.setup(Q,Z,Pe,ie,Oe);let Dt,Pt=J;if(Oe!==null&&(Dt=T.get(Oe),Pt=we,Pt.setIndex(Dt)),Q.isMesh)Z.wireframe===!0?(j.setLineWidth(Z.wireframeLinewidth*st()),Pt.setMode($.LINES)):Pt.setMode($.TRIANGLES);else if(Q.isLine){let _n=Z.linewidth;_n===void 0&&(_n=1),j.setLineWidth(_n*st()),Q.isLineSegments?Pt.setMode($.LINES):Q.isLineLoop?Pt.setMode($.LINE_LOOP):Pt.setMode($.LINE_STRIP)}else Q.isPoints?Pt.setMode($.POINTS):Q.isSprite&&Pt.setMode($.TRIANGLES);if(Q.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let _n=Q._multiDrawStarts,He=Q._multiDrawCounts,An=Q._multiDrawCount,St=Oe?T.get(Oe).bytesPerElement:1,As=ue.get(Z).currentProgram.getUniforms();for(let vn=0;vn<An;vn++)As.setValue($,"_gl_DrawID",vn),Pt.render(_n[vn]/St,He[vn])}else if(Q.isInstancedMesh)Pt.renderInstances(ze,Kt,Q.count);else if(ie.isInstancedBufferGeometry){let _n=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,He=Math.min(ie.instanceCount,_n);Pt.renderInstances(ze,Kt,He)}else Pt.render(ze,Kt)};function Mf(A,Y,ie,Z){N!==null&&A.isNodeMaterial&&N.setObject(Z,A),xe===!0&&ae.setState(A,ie,!1),A.transparent===!0&&A.side===Ft&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,ca(A,Y,Z),A.side=Mi,A.needsUpdate=!0,ca(A,Y,Z),A.side=Ft):ca(A,Y,Z)}this.compile=function(A,Y,ie=null){ie===null&&(ie=A),N!==null&&N.renderStart(A,Y,ie),S=se.get(ie),S.init(Y),y.push(S),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),A!==ie&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),Te=this.localClippingEnabled,xe=ae.init(this.clippingPlanes,Te),xe===!0&&ae.setGlobalState(this.clippingPlanes,Y),N!==null&&_e.render(S.state.shadowsArray,ie,Y);let Z=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Le=Q.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){let Pe=Le[ke];Mf(Pe,ie,Y,Q),Z.add(Pe)}else Mf(Le,ie,Y,Q),Z.add(Le)}),S=y.pop(),N!==null&&N.renderEnd(),Z},this.compileAsync=function(A,Y,ie=null){let Z=this.compile(A,Y,ie);return new Promise(Q=>{function Le(){if(Z.forEach(function(ke){let Oe=ue.get(ke).currentProgram;(Oe===void 0||Oe.isReady())&&Z.delete(ke)}),Z.size===0){Q(A);return}setTimeout(Le,10)}rt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Rh=null;function G0(A){Rh&&Rh(A)}function Sf(){ws.stop()}function bf(){ws.start()}let ws=new Om;ws.setAnimationLoop(G0),typeof self!="undefined"&&ws.setContext(self),this.setAnimationLoop=function(A){Rh=A,ye.setAnimationLoop(A),A===null?ws.stop():ws.start()},ye.addEventListener("sessionstart",Sf),ye.addEventListener("sessionend",bf),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(A,Y);let ie=ye.enabled===!0&&ye.isPresenting===!0,Z=I!==null&&(q===null||ie)&&I.begin(w,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(Y),Y=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Y,q),S=se.get(A,y.length),S.init(Y),S.state.textureUnits=Ee.getTextureUnits(),y.push(S),Me.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?pe.setFromArrayCamera(Y):ee.setFromProjectionMatrix(Me,Kn,Y.reversedDepth),Te=this.localClippingEnabled,xe=ae.init(this.clippingPlanes,Te),E=ve.get(A,x.length),E.init(),x.push(E),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let ke=w.xr.getDepthSensingMesh();ke!==null&&Ch(ke,Y,-1/0,w.sortObjects)}Ch(A,Y,0,w.sortObjects),E.finish(),N!==null&&N.updateLights(S.state.lightsArray),w.sortObjects===!0&&E.sort(re,Se),Qe=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Qe&&k.addToRenderList(E,A),this.info.autoReset===!0&&this.info.reset(),xe===!0&&ae.beginShadows();let Q=S.state.shadowsArray;if(_e.render(Q,A,Y),xe===!0&&ae.endShadows(),(Z&&I.hasRenderPass())===!1){let ke=E.opaque,Pe=E.transmissive;if(S.setupLights(),Y.isArrayCamera){let Oe=Y.cameras;if(Pe.length>0)for(let Ge=0,at=Oe.length;Ge<at;Ge++){let mt=Oe[Ge];Ef(ke,Pe,A,mt)}Qe&&k.render(A);for(let Ge=0,at=Oe.length;Ge<at;Ge++){let mt=Oe[Ge];Tf(E,A,mt,mt.viewport)}}else Pe.length>0&&Ef(ke,Pe,A,Y),Qe&&k.render(A),Tf(E,A,Y)}q!==null&&U===0&&(Ee.updateMultisampleRenderTarget(q),Ee.updateRenderTargetMipmap(q)),Z&&I.end(w),A.isScene===!0&&A.onAfterRender(w,A,Y),Ae.resetDefaultState(),z=-1,D=null,y.pop(),y.length>0?(S=y[y.length-1],Ee.setTextureUnits(S.state.textureUnits),xe===!0&&ae.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,N!==null&&N.renderEnd()};function Ch(A,Y,ie,Z){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let ke=Y.isArrayCamera?pe:ee;if(!A.frustumCulled||A.intersectsFrustum(ke)){Z&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);let Pe=ce.update(A),Oe=A.material;Oe.visible&&E.push(A,Pe,Oe,ie,Ne.z,null,Y)}}else if(A.isMesh||A.isLine||A.isPoints){let ke=Y.isArrayCamera?pe:ee;if(!A.frustumCulled||A.intersectsFrustum(ke)){let Pe=ce.update(A),Oe=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ne.copy(Pe.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Oe)){let Ge=Pe.groups;for(let at=0,mt=Ge.length;at<mt;at++){let ze=Ge[at],gt=Oe[ze.materialIndex];gt&&gt.visible&&E.push(A,Pe,gt,ie,Ne.z,ze,Y)}}else Oe.visible&&E.push(A,Pe,Oe,ie,Ne.z,null,Y)}}}let Le=A.children;for(let ke=0,Pe=Le.length;ke<Pe;ke++)Ch(Le[ke],Y,ie,Z)}function Tf(A,Y,ie,Z){let{opaque:Q,transmissive:Le,transparent:ke}=A;S.setupLightsView(ie),xe===!0&&ae.setGlobalState(w.clippingPlanes,ie),Z&&j.viewport(B.copy(Z)),Q.length>0&&$o(Q,Y,ie),Le.length>0&&$o(Le,Y,ie),ke.length>0&&$o(ke,Y,ie),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Ef(A,Y,ie,Z){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let ze=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new Ut(1,1,{generateMipmaps:!0,type:ze?Bt:bn,minFilter:Qn,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Le=S.state.transmissionRenderTarget[Z.id],ke=Z.viewport||B;Le.setSize(ke.z*w.transmissionResolutionScale,ke.w*w.transmissionResolutionScale);let Pe=w.getRenderTarget(),Oe=w.getActiveCubeFace(),Ge=w.getActiveMipmapLevel();w.setRenderTarget(Le),w.getClearColor(F),W=w.getClearAlpha(),W<1&&w.setClearColor(16777215,.5),w.clear(),Qe&&k.render(ie);let at=w.toneMapping;w.toneMapping=Si;let mt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),xe===!0&&ae.setGlobalState(w.clippingPlanes,Z),$o(A,ie,Z),Ee.updateMultisampleRenderTarget(Le),Ee.updateRenderTargetMipmap(Le),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let gt=0,Kt=Y.length;gt<Kt;gt++){let Dt=Y[gt],{object:Pt,geometry:_n,material:He,group:An}=Dt;if(He.side===Ft&&Pt.layers.test(Z.layers)){let St=He.side;He.side=pn,He.needsUpdate=!0,wf(Pt,ie,Z,_n,He,An),He.side=St,He.needsUpdate=!0,ze=!0}}ze===!0&&(Ee.updateMultisampleRenderTarget(Le),Ee.updateRenderTargetMipmap(Le))}w.setRenderTarget(Pe,Oe,Ge),w.setClearColor(F,W),mt!==void 0&&(Z.viewport=mt),w.toneMapping=at}function $o(A,Y,ie){let Z=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Le=A.length;Q<Le;Q++){let ke=A[Q],{object:Pe,geometry:Oe,group:Ge}=ke,at=ke.material;at.allowOverride===!0&&Z!==null&&(at=Z),Pe.layers.test(ie.layers)&&wf(Pe,Y,ie,Oe,at,Ge)}}function wf(A,Y,ie,Z,Q,Le){N!==null&&Q.isNodeMaterial&&N.setObject(A,Q),A.onBeforeRender(w,Y,ie,Z,Q,Le),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(w,Y,ie,Z,A,Le),Q.transparent===!0&&Q.side===Ft&&Q.forceSinglePass===!1?(Q.side=pn,Q.needsUpdate=!0,w.renderBufferDirect(ie,Y,Z,Q,A,Le),Q.side=Mi,Q.needsUpdate=!0,w.renderBufferDirect(ie,Y,Z,Q,A,Le),Q.side=Ft):w.renderBufferDirect(ie,Y,Z,Q,A,Le),A.onAfterRender(w,Y,ie,Z,Q,Le)}function Af(A){let Y=0;for(let ie of A)ie.texture!==null&&Y++;return Y}function ca(A,Y,ie){Y.isScene!==!0&&(Y=Ye);let Z=ue.get(A),Q=S.state.lights,Le=S.state.shadowsArray,ke=Q.state.version,Pe=ne.getParameters(A,Q.state,Le,Y,ie,S.state.lightProbeGridArray),Oe=ne.getProgramCacheKey(Pe),Ge=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,Z.fog=Y.fog;let at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=R.get(A.envMap||Z.environment,at),Z.envMapRotation=Z.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",Et),Ge=new Map,Z.programs=Ge,Z.programVariants=new Map);let mt=Ge.get(Oe);if(mt!==void 0){if(Z.currentProgram===mt&&Z.lightsStateVersion===ke)return Cf(A,Pe),mt}else Pe.uniforms=ne.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,ie,Pe),A.onBeforeCompile(Pe,w),mt=ne.acquireProgram(Pe,Oe),Ge.set(Oe,mt),Z.uniforms=Pe.uniforms;let ze=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=ae.uniform),Cf(A,Pe),Z.needsLights=q0(A),Z.lightsStateVersion=ke,Z.needsLights&&(ze.ambientLightColor.value=Q.state.ambient,ze.lightProbe.value=Q.state.probe,ze.sunLights.value=Q.state.sun,ze.sunLightShadows.value=Q.state.sunShadow,ze.directionalLights.value=Q.state.directional,ze.directionalLightShadows.value=Q.state.directionalShadow,ze.spotLights.value=Q.state.spot,ze.spotLightShadows.value=Q.state.spotShadow,ze.rectAreaLights.value=Q.state.rectArea,ze.ltc_1.value=Q.state.rectAreaLTC1,ze.ltc_2.value=Q.state.rectAreaLTC2,ze.pointLights.value=Q.state.point,ze.pointLightShadows.value=Q.state.pointShadow,ze.hemisphereLights.value=Q.state.hemi,ze.sunShadowMatrix.value=Q.state.sunShadowMatrix,ze.sunShadowCascade.value=Q.state.sunShadowCascade,ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ze.spotLightMatrix.value=Q.state.spotLightMatrix,ze.spotLightMap.value=Q.state.spotLightMap,ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),Z.numLightProbeGrids=Af(S.state.lightProbeGridArray),Z.currentProgram=mt,Z.uniformsList=null,mt}function V0(A,Y,ie,Z,Q){let Le=ue.get(A),ke=Le.currentProgram.id+","+Z+","+Q,Pe=Le.programVariants.get(ke);return Pe===void 0?(Pe=ca(A,Y,ie),Le.programVariants.set(ke,Pe)):(Le.currentProgram=Pe,Le.uniformsList=null,Le.outputColorSpace=Z,Le.toneMapping=Q),Pe}function Rf(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=jr.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Cf(A,Y){let ie=ue.get(A);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function W0(A,Y,ie,Z,Q){Y.isScene!==!0&&(Y=Ye),Ee.resetTextureUnits();let Le=Y.fog,ke=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?Y.environment:null,Pe=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:lt.workingColorSpace,Oe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ge=R.get(Z.envMap||ke,Oe),at=Z.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,mt=!!ie.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!ie.morphAttributes.position,gt=!!ie.morphAttributes.normal,Kt=!!ie.morphAttributes.color,Dt=Si;Z.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Dt=w.toneMapping);let Pt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,_n=Pt!==void 0?Pt.length:0,He=ue.get(Z),An=S.state.lights;if(xe===!0&&(Te===!0||A!==D)){let zt=A===D&&Z.id===z;ae.setState(Z,A,zt)}let St=!1,As=!1;Z.version===He.__version?He.needsLights&&He.lightsStateVersion!==An.state.version||Q.isBatchedMesh&&He.batching===!1||!Q.isBatchedMesh&&He.batching===!0||Q.isBatchedMesh&&He.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&He.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&He.instancing===!1||!Q.isInstancedMesh&&He.instancing===!0||Q.isSkinnedMesh&&He.skinning===!1||!Q.isSkinnedMesh&&He.skinning===!0||Q.isInstancedMesh&&He.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&He.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&He.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&He.instancingMorph===!1&&Q.morphTexture!==null||He.envMap!==Ge||Z.fog===!0&&He.fog!==Le||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ae.numPlanes||He.numIntersection!==ae.numIntersection)||He.vertexAlphas!==at||He.vertexTangents!==mt||He.morphTargets!==ze||He.morphNormals!==gt||He.morphColors!==Kt||He.morphTargetsCount!==_n||He.numLightProbeGrids!==Af(S.state.lightProbeGridArray)?St=!0:(He.outputColorSpace!==Pe||He.toneMapping!==Dt)&&(As=!0):(St=!0,He.__version=Z.version);let vn=He.currentProgram;(St===!0||As===!0)&&(vn=As===!0?V0(Z,Y,Q,Pe,Dt):ca(Z,Y,Q),N&&Z.isNodeMaterial&&N.onUpdateProgram(Z,vn,He));let Yo=!1,as=!1,Rs=!1,vt=vn.getUniforms(),un=He.uniforms;if(j.useProgram(vn.program)&&(Yo=!0,as=!0,Rs=!0),Z.id!==z&&(z=Z.id,as=!0),Yo||D!==A){j.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),vt.setValue($,"projectionMatrix",A.projectionMatrix),vt.setValue($,"viewMatrix",A.matrixWorldInverse);let on=vt.map.cameraPosition;on!==void 0&&on.setValue($,Ve.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&vt.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&vt.setValue($,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,as=!0,Rs=!0)}if(He.needsLights&&(An.state.sunShadowMap.length>0&&vt.setValue($,"sunShadowMap",An.state.sunShadowMap,Ee),An.state.directionalShadowMap.length>0&&vt.setValue($,"directionalShadowMap",An.state.directionalShadowMap,Ee),An.state.spotShadowMap.length>0&&vt.setValue($,"spotShadowMap",An.state.spotShadowMap,Ee),An.state.pointShadowMap.length>0&&vt.setValue($,"pointShadowMap",An.state.pointShadowMap,Ee)),Q.isSkinnedMesh){vt.setOptional($,Q,"bindMatrix"),vt.setOptional($,Q,"bindMatrixInverse");let zt=Q.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),vt.setValue($,"boneTexture",zt.boneTexture,Ee))}Q.isBatchedMesh&&(vt.setOptional($,Q,"batchingTexture"),vt.setValue($,"batchingTexture",Q._matricesTexture,Ee),vt.setOptional($,Q,"batchingIdTexture"),vt.setValue($,"batchingIdTexture",Q._indirectTexture,Ee),vt.setOptional($,Q,"batchingColorTexture"),Q._colorsTexture!==null&&vt.setValue($,"batchingColorTexture",Q._colorsTexture,Ee));let ni=ie.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&oe.update(Q,ie,vn),(as||He.receiveShadow!==Q.receiveShadow)&&(He.receiveShadow=Q.receiveShadow,vt.setValue($,"receiveShadow",Q.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&Y.environment!==null&&(un.envMapIntensity.value=Y.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=oS()),as){if(vt.setValue($,"toneMappingExposure",w.toneMappingExposure),He.needsLights&&X0(un,Rs),Le&&Z.fog===!0&&ge.refreshFogUniforms(un,Le),ge.refreshMaterialUniforms(un,Z,he,fe,S.state.transmissionRenderTarget[A.id]),He.needsLights&&He.numLightProbeGrids>0){let zt=M,on=0;for(let Li of S.state.lightProbeGridArray)Li.texture!==null&&(zt.textures[on]=Li.texture,zt.min[on]=Li.boundingBox.min,zt.max[on]=Li.boundingBox.max,zt.resolution[on]=Li.resolution,on++);for(let Li in zt)zt[Li].length=on;un.probesSH.value=zt.textures,un.probesMin.value=zt.min,un.probesMax.value=zt.max,un.probesResolution.value=zt.resolution}jr.upload($,Rf(He),un,Ee)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(jr.upload($,Rf(He),un,Ee),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&vt.setValue($,"center",Q.center),vt.setValue($,"modelViewMatrix",Q.modelViewMatrix),vt.setValue($,"normalMatrix",Q.normalMatrix),vt.setValue($,"modelMatrix",Q.matrixWorld),Z.uniformsGroups!==void 0){let zt=Z.uniformsGroups;for(let on=0,Li=zt.length;on<Li;on++){let If=zt[on];Be.update(If,vn),Be.bind(If,vn)}}return vn}function X0(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.sunLights.needsUpdate=Y,A.sunLightShadows.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function q0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Y,ie){let Z=ue.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ue.get(A.texture).__webglTexture=Y,ue.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ie,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){let ie=ue.get(A);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,ie=0){q=A,V=Y,U=ie;let Z=null,Q=!1,Le=!1;if(A){let Pe=ue.get(A);if(Pe.__useDefaultFramebuffer!==void 0){j.bindFramebuffer($.FRAMEBUFFER,Pe.__webglFramebuffer),B.copy(A.viewport),L.copy(A.scissor),X=A.scissorTest,j.viewport(B),j.scissor(L),j.setScissorTest(X),z=-1;return}else if(Pe.__webglFramebuffer===void 0)Ee.setupRenderTarget(A);else if(Pe.__hasExternalTextures)Ee.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let at=A.depthTexture;if(Pe.__boundDepthTexture!==at){if(at!==null&&ue.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(A)}}let Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Le=!0);let Ge=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[Y])?Z=Ge[Y][ie]:Z=Ge[Y],Q=!0):A.samples>0&&Ee.useMultisampledRTT(A)===!1?Z=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?Z=Ge[ie]:Z=Ge,B.copy(A.viewport),L.copy(A.scissor),X=A.scissorTest}else B.copy(Ce).multiplyScalar(he).floor(),L.copy(Fe).multiplyScalar(he).floor(),X=Ke;if(ie!==0&&(Z=H),j.bindFramebuffer($.FRAMEBUFFER,Z)&&j.drawBuffers(A,Z),j.viewport(B),j.scissor(L),j.setScissorTest(X),Q){let Pe=ue.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,ie)}else if(Le){let Pe=Y;for(let Oe=0;Oe<A.textures.length;Oe++){let Ge=ue.get(A.textures[Oe]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Oe,Ge.__webglTexture,ie,Pe)}}else if(A!==null&&ie!==0){let Pe=ue.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Pe.__webglTexture,ie)}z=-1};function Pf(A){let Y=ue.get(A);return(Y.__readFormat!==A.format||Y.__readType!==A.type)&&(Y.__readFormat=A.format,Y.__readType=A.type,Y.__formatReadable=le.textureFormatReadable(A.format),Y.__typeReadable=le.textureTypeReadable(A.type)),Y}this.readRenderTargetPixels=function(A,Y,ie,Z,Q,Le,ke,Pe=0){if(!(A&&A.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Oe=Oe[ke],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){j.bindFramebuffer($.FRAMEBUFFER,Oe);try{let Ge=A.textures[Pe],at=Ge.format,mt=Ge.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Pe);let ze=Pf(Ge);if(ze.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-Z&&ie>=0&&ie<=A.height-Q&&$.readPixels(Y,ie,Z,Q,be.convert(at),be.convert(mt),Le)}finally{let Ge=q!==null?ue.get(q).__webglFramebuffer:null;j.bindFramebuffer($.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ie,Z,Q,Le,ke,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Oe=Oe[ke],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(Y>=0&&Y<=A.width-Z&&ie>=0&&ie<=A.height-Q){j.bindFramebuffer($.FRAMEBUFFER,Oe);let Ge=A.textures[Pe],at=Ge.format,mt=Ge.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Pe);let ze=Pf(Ge);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,gt),$.bufferData($.PIXEL_PACK_BUFFER,Le.byteLength,$.STREAM_READ),$.readPixels(Y,ie,Z,Q,be.convert(at),be.convert(mt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let Kt=q!==null?ue.get(q).__webglFramebuffer:null;j.bindFramebuffer($.FRAMEBUFFER,Kt);let Dt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await rm($,Dt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,gt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Le),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(gt),$.deleteSync(Dt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ie=0){let Z=Math.pow(2,-ie),Q=Math.floor(A.image.width*Z),Le=Math.floor(A.image.height*Z),ke=Y!==null?Y.x:0,Pe=Y!==null?Y.y:0;Ee.setTexture2D(A,0),$.copyTexSubImage2D($.TEXTURE_2D,ie,0,0,ke,Pe,Q,Le),j.unbindTexture()},this.copyTextureToTexture=function(A,Y,ie=null,Z=null,Q=0,Le=0){let ke,Pe,Oe,Ge,at,mt,ze,gt,Kt,Dt=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(ie!==null)ke=ie.max.x-ie.min.x,Pe=ie.max.y-ie.min.y,Oe=ie.isBox3?ie.max.z-ie.min.z:1,Ge=ie.min.x,at=ie.min.y,mt=ie.isBox3?ie.min.z:0;else{let vt=Math.pow(2,-Q);ke=Math.floor(Dt.width*vt),Pe=Math.floor(Dt.height*vt),A.isDataArrayTexture?Oe=Dt.depth:A.isData3DTexture?Oe=Math.floor(Dt.depth*vt):Oe=1,Ge=0,at=0,mt=0}Z!==null?(ze=Z.x,gt=Z.y,Kt=Z.z):(ze=0,gt=0,Kt=0);let Pt=be.convert(Y.format),_n=be.convert(Y.type),He;Y.isData3DTexture?(Ee.setTexture3D(Y,0),He=$.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Ee.setTexture2DArray(Y,0),He=$.TEXTURE_2D_ARRAY):(Ee.setTexture2D(Y,0),He=$.TEXTURE_2D),j.activeTexture($.TEXTURE0),j.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Y.flipY),j.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),j.pixelStorei($.UNPACK_ALIGNMENT,Y.unpackAlignment);let An=j.getParameter($.UNPACK_ROW_LENGTH),St=j.getParameter($.UNPACK_IMAGE_HEIGHT),As=j.getParameter($.UNPACK_SKIP_PIXELS),vn=j.getParameter($.UNPACK_SKIP_ROWS),Yo=j.getParameter($.UNPACK_SKIP_IMAGES);j.pixelStorei($.UNPACK_ROW_LENGTH,Dt.width),j.pixelStorei($.UNPACK_IMAGE_HEIGHT,Dt.height),j.pixelStorei($.UNPACK_SKIP_PIXELS,Ge),j.pixelStorei($.UNPACK_SKIP_ROWS,at),j.pixelStorei($.UNPACK_SKIP_IMAGES,mt);let as=A.isDataArrayTexture||A.isData3DTexture,Rs=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){let vt=ue.get(A),un=ue.get(Y),ni=ue.get(vt.__renderTarget),zt=ue.get(un.__renderTarget);j.bindFramebuffer($.READ_FRAMEBUFFER,ni.__webglFramebuffer),j.bindFramebuffer($.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let on=0;on<Oe;on++)as&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ue.get(A).__webglTexture,Q,mt+on),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ue.get(Y).__webglTexture,Le,Kt+on)),$.blitFramebuffer(Ge,at,Ge+ke,at+Pe,ze,gt,ze+ke,gt+Pe,$.DEPTH_BUFFER_BIT,$.NEAREST);j.bindFramebuffer($.READ_FRAMEBUFFER,null),j.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||ue.has(A)){let vt=ue.get(A),un=ue.get(Y);j.bindFramebuffer($.READ_FRAMEBUFFER,P),j.bindFramebuffer($.DRAW_FRAMEBUFFER,G);for(let ni=0;ni<Oe;ni++)as?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,vt.__webglTexture,Q,mt+ni):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,vt.__webglTexture,Q),Rs?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,un.__webglTexture,Le,Kt+ni):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,un.__webglTexture,Le),Q!==0?$.blitFramebuffer(Ge,at,Ge+ke,at+Pe,ze,gt,ze+ke,gt+Pe,$.COLOR_BUFFER_BIT,$.NEAREST):Rs?$.copyTexSubImage3D(He,Le,ze,gt,Kt+ni,Ge,at,ke,Pe):$.copyTexSubImage2D(He,Le,ze,gt,Ge,at,ke,Pe);j.bindFramebuffer($.READ_FRAMEBUFFER,null),j.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Rs?A.isDataTexture||A.isData3DTexture?$.texSubImage3D(He,Le,ze,gt,Kt,ke,Pe,Oe,Pt,_n,Dt.data):Y.isCompressedArrayTexture?$.compressedTexSubImage3D(He,Le,ze,gt,Kt,ke,Pe,Oe,Pt,Dt.data):$.texSubImage3D(He,Le,ze,gt,Kt,ke,Pe,Oe,Pt,_n,Dt):A.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Le,ze,gt,ke,Pe,Pt,_n,Dt.data):A.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Le,ze,gt,Dt.width,Dt.height,Pt,Dt.data):$.texSubImage2D($.TEXTURE_2D,Le,ze,gt,ke,Pe,Pt,_n,Dt);j.pixelStorei($.UNPACK_ROW_LENGTH,An),j.pixelStorei($.UNPACK_IMAGE_HEIGHT,St),j.pixelStorei($.UNPACK_SKIP_PIXELS,As),j.pixelStorei($.UNPACK_SKIP_ROWS,vn),j.pixelStorei($.UNPACK_SKIP_IMAGES,Yo),Le===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&$.generateMipmap(He),j.unbindTexture()},this.initRenderTarget=function(A){ue.get(A).__webglFramebuffer===void 0&&Ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ee.setTextureCube(A,0):A.isData3DTexture?Ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ee.setTexture2DArray(A,0):Ee.setTexture2D(A,0),j.unbindTexture()},this.resetState=function(){V=0,U=0,q=null,j.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};function cd(i,e){if(e===Du)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yr||e===So){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Yr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function $m(i){let e=new Map,t=new Map,n=i.clone();return Ym(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ym(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ym(i.children[n],e.children[n],t)}var Ro=class extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new Zc(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zc(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ji.extractUrlBase(e);a=Ji.resolveURL(l,this.path)}else a=Ji.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new zr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Qm){try{a[dt.KHR_BINARY_GLTF]=new Id(e)}catch(u){s&&s(u);return}r=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Bd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new pd;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ld(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new Dd;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new Nd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function lS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fd=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Cn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ys(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Xs(h),l.distance=u;break;case"spot":l=new so(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},pd=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Cn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},gd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(r,r)}return Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},vd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,wt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Md=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Sd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],Cn),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Td=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],Cn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,wt)),Promise.all(s)}},Ed=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},wd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ad=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Rd=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Cd=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Zc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Pd=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ei.TRIANGLES&&l.mode!==ei.TRIANGLE_STRIP&&l.mode!==ei.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let p of u){let _=new qe,m=new O,g=new Gn,v=new O(1,1,1),b=new Vi(p.geometry,p.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,E),c.SCALE&&v.fromBufferAttribute(c.SCALE,E),b.setMatrixAt(E,_.compose(m,g,v));let M=null;for(let E in c)if(E==="_COLOR_0"){let S=c[E];b.instanceColor=new Gi(S.array,S.itemSize,S.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(M===null){let x=b.geometry;M=new At,M.name=x.name;for(let y in x.attributes)M.setAttribute(y,x.attributes[y]);for(let y in x.morphAttributes)M.morphAttributes[y]=x.morphAttributes[y];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(let y of x.groups)M.addGroup(y.start,y.count,y.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),b.geometry=M}let S=c[E];M.setAttribute(E,new Gi(S.array,S.itemSize,S.normalized))}Lt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Qm="glTF",Ao=12,Km={JSON:1313821514,BIN:5130562},Id=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ao,r=new DataView(e,Ao),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Km.JSON){let l=new Uint8Array(e,Ao+a,o);this.content=n.decode(l)}else if(c===Km.BIN){let l=Ao+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ld=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Od[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Od[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Qr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let _=f.attributes[p],m=c[p];m!==void 0&&(_.normalized=m)}u(f)},o,l,Cn,d)})})}},Dd=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nd=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},Jc=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,_=p-l,m=-2*f+3*d,g=f-d,v=1-m,b=g-d+u;for(let M=0;M!==o;M++){let E=a[_+M+o],S=a[_+M+c]*h,x=a[p+M+o],y=a[p+M]*h;r[M]=v*E+b*S+m*x+g*y}return r}},cS=new Gn,Ud=class extends Jc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return cS.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jm={9728:Nt,9729:Qt,9984:oc,9985:qr,9986:js,9987:Qn},Zm={33071:Yn,33648:Ar,10497:Sn},hd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Od={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hS={CUBICSPLINE:void 0,LINEAR:Os,STEP:Us},ud={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),i.DefaultMaterial}function Qs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function fS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pS(i){let e,t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dd(t.attributes):e=i.indices+":"+dd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+dd(i.targets[n]);return e}function dd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gS=new qe,Bd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?(this.textureLoader=new to(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ro(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Qs(r,o,s),wi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ji.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=hd[s.type],o=Qr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Vt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=hd[s.type],l=Qr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,_,m;if(f&&f!==u){let g=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,b=t.cache.get(v);b||(_=new l(o,g*f,s.count*f/h),b=new ks(_,f/h),t.cache.add(v,b)),m=new fs(b,c,d%f/h,p)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),m=new Vt(_,c,p);if(s.sparse!==void 0){let g=hd.SCALAR,v=Qr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,E=new v(a[1],b,s.sparse.count*g),S=new l(a[2],M,s.sparse.count*c);o!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,y=E.length;x<y;x++){let I=E[x];if(m.setX(I,S[x*c]),c>=2&&m.setY(I,S[x*c+1]),c>=3&&m.setZ(I,S[x*c+2]),c>=4&&m.setW(I,S[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=jm[d.magFilter]||Qt,h.minFilter=jm[d.minFilter]||Qn,h.wrapS=Zm[d.wrapS]||Sn,h.wrapT=Zm[d.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Qt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(m){let g=new $t(m);g.needsUpdate=!0,f(g)}),t.load(Ji.resolveURL(d,r.path),_,void 0,p)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),wi(d,a),d.userData.mimeType=a.mimeType||mS(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Wi,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new gs,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Zt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Cn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,wt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ft);let h=r.alphaMode||ud.OPAQUE;if(h===ud.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ud.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Wt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wt){let u=r.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],Cn)}return r.emissiveTexture!==void 0&&a!==Wt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,wt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Qs(s,u,r),u})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Jm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=pS(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Jm(new At,l,t),l.mode===ei.TRIANGLE_STRIP?d=d.then(f=>cd(f,So)):l.mode===ei.TRIANGLE_FAN&&(d=d.then(f=>cd(f,Yr))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?uS(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let _=h[f],m=a[f],g,v=l[f];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0){let b=r.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&M?new Na(_,v):new Ze(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ei.LINES)g=new Hs(_,v);else if(m.mode===ei.LINE_STRIP)g=new zs(_,v);else if(m.mode===ei.LINE_LOOP)g=new Oa(_,v);else if(m.mode===ei.POINTS)g=new xs(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&fS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),wi(g,r),m.extensions&&Qs(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Qs(s,u[0],r),u[0];let d=new it;r.extensions&&Qs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(bi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Zi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ua(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],_=f.target,m=_.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let b=0,M=d.length;b<M;b++){let E=d[b],S=f[b],x=p[b],y=_[b],I=m[b];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let w=n._createAnimationTracks(E,S,x,y,I);if(w)for(let C=0;C<w.length;C++)g.push(w[C])}let v=new eo(r,void 0,g);return wi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gS)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new O().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Ur:l.length>1?h=new it:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),wi(h,r),r.extensions&&Qs(n,h,r),r.matrix!==void 0){let u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new it;n.name&&(r.name=s.createUniqueName(n.name)),wi(r,n),n.extensions&&Qs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add($m(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof fn||d instanceof $t)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}bs[r.path]===bs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(bs[r.path]){case bs.weights:h=Yi;break;case bs.rotation:h=Ki;break;case bs.translation:case bs.scale:h=vs;break;default:n.itemSize===1?h=Yi:h=vs;break}let u=s.interpolation!==void 0?hS[s.interpolation]:Os,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let _=new h(c[f]+"."+bs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Fd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ki?Ud:Jc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xS(i,e,t){let n=e.attributes,s=new dn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),o.normalized){let h=Fd(Qr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new O,c=new O;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let _=Fd(Qr[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Dn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Jm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Od[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return lt.workingColorSpace!==Cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),wi(i,e),xS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dS(i,e.targets,t):i})}var tr=["guestA","guestB","guestC"],t0={guestA:"\uB370\uB2D8 \uBCC4\uBB34\uB2AC",guestB:"\uAE08\uBC1C \uB54B\uC740 \uBA38\uB9AC",guestC:"\uD770 \uC6D0\uD53C\uC2A4"},zd=new Set;function n0(){let i=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]),e=new jn(i,3,1);return e.minFilter=e.magFilter=Nt,e.needsUpdate=!0,e}var er="#fde9e7",_S="#f5c6c9",e0={guestA:{hair:"#4b3634",hairStyle:"long",top:"#bfe2f1",sleeve:null,bottom:"pants",bottomColor:"#8fa1df",shoes:"#bfe2f1",F:[12,20,202,350],B:[20,393,195,722],head:[.12,0,.88,.385],topCrop:[.22,.43,.78,.67],legL:[.12,.63,.5,.94],legR:[.5,.63,.88,.94]},guestB:{hair:"#f2df8c",hairStyle:"braids",top:"#ffffff",sleeve:"#ffcaca",bottom:"shorts",bottomColor:"#cdebc9",warmers:"#ffffff",shoes:"#ffcaca",F:[234,19,413,352],B:[239,393,407,722],head:[.12,0,.88,.385],topCrop:[.2,.43,.8,.66],lowCrop:[.15,.62,.85,.76]},guestC:{hair:"#a68a6b",hairStyle:"wavy",top:"#fffdfb",sleeve:"#fffdfb",longSleeve:!0,bottom:"dress",bottomColor:"#fffdfb",boots:"#8c6d58",F:[444,22,634,348],B:[450,395,628,720],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.78]},shop:{hair:"#3f302f",hairStyle:"wavy",top:"#bfe2f1",sleeve:"#bfe2f1",bottom:"dress",bottomColor:"#fbf09b",shoes:"#bfe2f1",F:[666,23,844,347],B:[671,395,839,719],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]},cafe:{hair:"#3f302f",hairStyle:"ponytail",top:"#fbdede",sleeve:"#fbdede",bottom:"dress",bottomColor:"#d4efbf",shoes:"#fbdede",F:[868,3,1075,368],B:[881,376,1062,738],head:[.1,.02,.86,.405],headB:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]}},Co=new Image;Co.src="looks.png";var kd=new Map;function vS(i,e,t,{clean:n=!1,skinBelow:s=!1}={}){let r=i.join(",")+e.join(",")+t+n+s;if(kd.has(r))return kd.get(r);let[a,o,c,l]=i,h=c-a,u=l-o,d=a+e[0]*h,f=o+e[1]*u,p=(e[2]-e[0])*h,_=(e[3]-e[1])*u,m=n?Math.max(48,Math.round(p)):256,g=Math.round(m*_/p),v=document.createElement("canvas");v.width=m,v.height=g;let b=v.getContext("2d",{willReadFrequently:n});b.fillStyle=t,b.fillRect(0,0,m,g),s&&(b.fillStyle=er,b.fillRect(0,g*.55,m,g));let M=new Zn(v);M.colorSpace=wt,M.anisotropy=4;let E=()=>{if(b.drawImage(Co,d,f,p,_,0,0,m,g),n){let S=b.getImageData(0,0,m,g),x=S.data,y=new Uint8ClampedArray(x),I=3,w=C=>x[C]*.3+x[C+1]*.59+x[C+2]*.11;for(let C=0;C<g;C++)for(let N=0;N<m;N++){let H=(C*m+N)*4,P=w(H),G=H,V=P;for(let U=-I;U<=I;U++){let q=C+U;if(!(q<0||q>=g))for(let z=-I;z<=I;z++){let D=N+z;if(D<0||D>=m)continue;let B=(q*m+D)*4,L=w(B);L>V&&(V=L,G=B)}}P<V*.84&&(y[H]=x[G],y[H+1]=x[G+1],y[H+2]=x[G+2])}S.data.set(y),b.putImageData(S,0,0)}M.needsUpdate=!0};return Co.complete&&Co.naturalWidth?E():Co.addEventListener("load",E,{once:!0}),kd.set(r,M),M}function Hd(i,e={}){let t=new it,n=[],s=[],r={root:t,arms:n,head:null,animate:m,setLook:u,look:null},a=null,o=document.createElement("canvas");o.width=o.height=64;let c=o.getContext("2d"),l=c.createRadialGradient(32,32,4,32,32,30);l.addColorStop(0,"rgba(90,60,120,0.32)"),l.addColorStop(1,"rgba(90,60,120,0)"),c.fillStyle=l,c.fillRect(0,0,64,64);let h=new Ze(new Xi(.62,.62),new Wt({map:new Zn(o),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.004,t.add(h);function u(g){a&&t.remove(a);let v=e0[g]||e0.guestA;r.look=g;let b=new Map,M=(V,U=1)=>{let q=V+U;return b.has(q)||b.set(q,new Wt({color:new Re(V).multiplyScalar(U)})),b.get(q)},E=(V,U,q,z)=>new Wt({map:vS(v[V],U,q,z),side:Ft}),S={clean:!0},x=(V,U,q,z=0,D=0,B=0)=>{let L=new Ze(U,q);return L.position.set(z,D,B),L.castShadow=!0,V.add(L),L},y=(V,U=10,q=8)=>new Yt(V,U,q),I=(V,U,q,z,D,B,L,X=0,F=8)=>(x(V,new ht(U,q,z,F,1,!0,-Math.PI/2,Math.PI),D,0,L,X),x(V,new ht(U,q,z,F,1,!0,Math.PI/2,Math.PI),B,0,L,X));a=new it,t.add(a),n.length=0,s.length=0;for(let V of[-1,1]){let U=new it;if(U.position.set(.07*V,.34,0),a.add(U),v.bottom==="pants"){let q=new it;q.position.y=-.12,U.add(q),I(q,.075,.085,.28,E("F",V<0?v.legL:v.legR,v.bottomColor,S),E("B",V<0?v.legR:v.legL,v.bottomColor,S),0)}else x(U,new ht(.044,.04,.24,6),M(er),0,-.12,0);v.warmers&&x(U,new ht(.058,.06,.11,7),M(v.warmers),0,-.205,0),v.boots?(x(U,new ht(.06,.058,.14,7),M(v.boots),0,-.2,0),x(U,y(.066,8,6),M(v.boots),0,-.275,.02).scale.set(1,.6,1.3)):x(U,y(.066,8,6),M(v.shoes),0,-.29,.022).scale.set(1,.62,1.35),s.push(U)}x(a,new ht(.06,.06,.12,10),M(er),0,.68,0),v.bottom==="dress"?I(a,.12,.25,.4,E("F",v.lowCrop,v.bottomColor,S),E("B",v.lowCrop,v.bottomColor,S),.44):(I(a,.115,.135,.28,E("F",v.topCrop,v.top,S),E("B",v.topCrop,v.top,S),.5),v.bottom==="pants"&&I(a,.135,.15,.06,M(v.bottomColor),M(v.bottomColor,.94),.37),v.bottom==="shorts"&&I(a,.14,.17,.13,E("F",v.lowCrop,v.bottomColor,S),E("B",v.lowCrop,v.bottomColor,S),.33));for(let V of[-1,1]){let U=new it;U.position.set(.14*V,.61,0),a.add(U),v.sleeve&&x(U,y(v.longSleeve?.06:.07,8,6),M(v.sleeve),.01*V,-.03,0).scale.set(1,1.1,1),x(U,new ht(.036,.04,.2,6),M(v.longSleeve?v.sleeve:er),.012*V,-.12,0),v.longSleeve&&x(U,y(.05,8,6),M(v.sleeve),.014*V,-.19,0).scale.set(1,.7,1),x(U,y(.055,8,6),M(er),.016*V,-.245,.006),U.rotation.z=.32*V,n.push(U)}let w=new it;w.position.set(0,.89,0),a.add(w);let C=.24,N=1.12,H=.97;x(w,y(C*1.04,14,10),M(er)).scale.set(N,H,1),x(w,new Yt(C*1.06,16,10,0,Math.PI,0,Math.PI*.69),E("F",v.head,v.hair,{skinBelow:!0})).scale.set(N,H,1),x(w,new Yt(C*1.055,16,10,Math.PI,Math.PI,0,Math.PI*.72),E("B",v.headB||v.head,v.hair)).scale.set(N,H,1);for(let V of[-1,1])x(w,y(.08,8,6),M(er),.3*V,-.03,.02).scale.set(.55,1,.75),x(w,y(.048,8,6),M(_S),.32*V,-.03,.035).scale.set(.35,.8,.6);d(w,v,x,M,y),r.head=w,t.traverse(V=>{V.isMesh&&(V.frustumCulled=!1)})}function d(g,v,b,M,E){if(v.hairStyle!=="braids")return;let S=M(v.hair,.97);for(let x of[-1,1])for(let y=0;y<5;y++)b(g,E(.045-y*.003,7,5),S,(.2-y*.006)*x,-.15-y*.065,.09+y*.012).scale.set(1,.85,1)}let f=0,p=0,_=0;function m(g,v,b,M=!1,E=!1){let S=r.head;if(_+=((M?1:0)-_)*Math.min(1,g*10),_>.02){s[0].rotation.x=s[1].rotation.x=-1.45*_,n[0].rotation.x=n[1].rotation.x=-.5*_,a.position.y=.11*_,a.rotation.x=0,S.rotation.z=0,p=0;return}let x=Math.min(1,v/2);p+=(x-p)*Math.min(1,g*10),f+=g*(5+v*3.2);let y=Math.sin(f)*.75*p;s[0].rotation.x=y,s[1].rotation.x=-y,n[0].rotation.x=-y*.8,n[1].rotation.x=y*.8,n[0].rotation.z=-.32,n[1].rotation.z=.32,E&&(n[0].rotation.x=n[1].rotation.x=-1.2),a.position.y=Math.abs(Math.sin(f))*.035*p+Math.sin(b*2.2)*.006*(1-p),S.rotation.z=Math.sin(f*.5)*.05*p,a.rotation.x=.07*p}return u(e.look||"guestA"),r}var yS=500,Qc=6,ih=1.05,ts={tteok:{name:"\uB5A1\uAF2C\uCE58",price:2e3,emoji:"\u{1F361}",tag:"\uB300\uD45C",desc:"\uB2EC\uCF64\uC9ED\uC9E4 \uC18C\uC2A4 \uB5A1\uAF2C\uCE58 \xB7 \uD3EC\uC7A5 \uAC00\uB2A5",model:"skewer"},mochi:{name:"\uACFC\uC77C\uCC39\uC300\uB5A1",price:4500,emoji:"\u{1F353}",desc:"\uBCF4\uB4E4\uBCF4\uB4E4\uD55C \uD53C\uC5D0 \uACFC\uC77C\uC774 \uAC00\uB4DD",model:"mochi",opts:{flavor:["\uC694\uAC70\uC0E4\uC778\uBA38\uC2A4\uCF13","\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"]}},kiwiPf:{name:"\uD0A4\uC704 \uD30C\uC778 \uD06C\uB9BC \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",price:12e3,emoji:"\u{1F95D}",desc:"\uACFC\uC77C \uAC00\uB4DD, \uCAC0\uCAC0\uD55C \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",model:"kiwiParfait"},puddPf:{name:"\uD478\uB529\uCD08\uCF54\uD30C\uB974\uD398",price:12e3,emoji:"\u{1F36E}",desc:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529\uACFC \uBC14\uB098\uB098\uC758 \uC870\uD569",model:"puddingParfait"},tangSoda:{name:"\uADE4\uC18C\uB2E4",price:6e3,emoji:"\u{1F34A}",model:"soda",c:"#ffa81e",scoop:"#fff4dc"},melonSoda:{name:"\uBA54\uB860\uC18C\uB2E4",price:6e3,emoji:"\u{1F348}",model:"soda",c:"#6fd34a",scoop:"#d6f2c4"},creamSoda:{name:"\uD06C\uB9BC\uC18C\uB2E4",price:6e3,emoji:"\u{1FAE7}",desc:"\uC5F4\uB300\uACFC\uC77C + \uB77C\uBB34\uB124\uB9DB",model:"soda",c:"#2f93ee",scoop:"#fff0c8"},chocoMilk:{name:"\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F36B}",model:"milk",c:"#7b4a33",drizzle:!0},greenMilk:{name:"\uB179\uCC28\uC6B0\uC720",price:6e3,emoji:"\u{1F375}",model:"milk",c:"#86a95b",drizzle:!0},melonMilk:{name:"\uBA54\uB860\uC6B0\uC720",price:6e3,emoji:"\u{1F348}",model:"milk",c:"#b9e3a0"},bananaMilk:{name:"\uBC14\uB098\uB098\uC6B0\uC720",price:6e3,emoji:"\u{1F34C}",model:"milk",c:"#f3dc8e"},mintMilk:{name:"\uBBFC\uD2B8\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F33F}",model:"milk",c:"#7d5a47",cream:"#d4f5e6"},americano:{name:"\uC544\uBA54\uB9AC\uCE74\uB178",price:4500,emoji:"\u2615",desc:"\uB354\uCE58 \uC6D0\uC561\uC744 \uC368\uC694",model:"coffee",opts:{temp:["\uC544\uC774\uC2A4","\uD56B"],shot:!0}},latte:{name:"\uC5F0\uC720\uB77C\uB5BC",price:5e3,emoji:"\u{1F95B}",desc:"\uC544\uC774\uC2A4\uB9CC \uAC00\uB2A5\uD574\uC694",model:"latte",opts:{shot:!0}},sodaSlush:{name:"\uC18C\uB2E4 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F9CA}",model:"slush",c:"#9dd6ff"},mintSlush:{name:"\uBBFC\uD2B8\uCD08\uCF54 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F367}",model:"slush",c:"#bdeedb",chips:!0},pineSando:{name:"\uD30C\uC778\uC560\uD50C \uC0B0\uB3C4",price:6500,emoji:"\u{1F96A}",model:"sando"},pudding:{name:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529",price:4500,emoji:"\u{1F36E}",model:"pudding"},peachTea:{name:"\uBCF5\uC22D\uC544 \uC544\uC774\uC2A4\uD2F0",price:4500,emoji:"\u{1F351}",model:"tea",c:"#f0a050"}},Gd=[["\uCD94\uCC9C",["tteok","mochi","kiwiPf","puddPf"]],["\uC18C\uB2E4",["tangSoda","melonSoda","creamSoda"]],["\uC6B0\uC720",["chocoMilk","greenMilk","melonMilk","bananaMilk","mintMilk"]],["\uCEE4\uD53C",["americano","latte"]],["\uC2AC\uB7EC\uC2DC",["sodaSlush","mintSlush"]],["\uB514\uC800\uD2B8",["pineSando","puddPf","pudding"]],["\uD2F0",["peachTea"]]],Vd=i=>i.toLocaleString("ko-KR")+"\uC6D0",Wd=new Map;function ot(i,e={}){let t=i+JSON.stringify(e);return Wd.has(t)||Wd.set(t,new Zt({color:i,roughness:.45,metalness:0,...e})),Wd.get(t)}var sh=()=>ot("#eef8fc",{transparent:!0,opacity:.32,roughness:.05,depthWrite:!1});function Je(i,e,t,n=0,s=0,r=0){let a=new Ze(e,t);return a.position.set(n,s,r),i.add(a),a}var Io=(i,e=20)=>new ja(i.map(([t,n])=>new de(t,n)),e);function eh(i,e,{h:t=.17,w:n=.04}={}){Je(i,Io([[0,0],[.034,0],[.035,.006],[.008,.014],[.007,.06-.008],[.014,.06],[n*.75,.06+.035],[n,t-.02],[n+.002,t]]),sh()).renderOrder=3;let r=new it;return r.position.y=.06+.002,i.add(r),Je(r,Io([[0,0],[.012,0],[n*.72,.035],[n-.004,t-.06-.03],[0,t-.06-.03]]),ot(e,{roughness:.3})),{lv:r,top:t-.02}}function Xd(i,e,t="#fffaf3",n=1){let s=new it;s.position.y=e,i.add(s);let r=ot(t,{roughness:.75});return Je(s,new Yt(.036*n,12,8),r,0,.008,0).scale.y=.6,Je(s,new Yt(.027*n,12,8),r,0,.028*n,0).scale.y=.7,Je(s,new Or(.018*n,.03*n,10),r,0,.05*n,0),s}function Po(i,e,t,n){let s=new it;s.position.set(e,t,n),i.add(s),Je(s,new Yt(.013,10,8),ot("#e0142f",{roughness:.15}));let r=Je(s,new ht(.0015,.0015,.04,4),ot("#5b7a2a"),.006,.022,0);return r.rotation.z=-.35,s}function th(i,e,t,n=.12){let s=Je(i,new ht(.004,.004,n,6),ot(e));return s.position.set(.012,t,.005),s.rotation.z=-.22,s}function nh(i,e=.085){Je(i,new ht(e,e*.8,.01,24),ot("#fffdf8",{roughness:.3}),0,.005,0)}function i0(i,e){let t=ts[i],n=new it,s=[],r=[],a=null;switch(t.model){case"soda":{let o=eh(n,t.c);a=o.lv;let c=Je(n,new Yt(.035,14,10),ot(t.scoop,{roughness:.85}),0,o.top+.012,0);c.scale.y=.85,s.push(c),s.push(Po(n,.012,o.top+.048,.012));break}case"milk":{let o=eh(n,t.c);a=o.lv;let c=Xd(n,o.top-.004,t.cream);if(s.push(c),t.drizzle)for(let l=0;l<3;l++){let h=Je(c,new qi(.026-l*.006,.0025,4,18),ot("#4a2a1d"),0,.015+l*.016,0);h.rotation.x=Math.PI/2}s.push(Po(n,0,o.top+.066,0));break}case"slush":{let o=eh(n,t.c,{h:.16,w:.042});a=o.lv;let c=Je(n,new Yt(.043,14,8,0,Math.PI*2,0,Math.PI/2),ot(t.c,{roughness:.95}),0,o.top-.004,0);if(c.scale.y=.7,s.push(c),t.chips)for(let l=0;l<6;l++)s.push(Je(n,new Xt(.008,.004,.008),ot("#3b2418"),Math.cos(l)*.022,o.top+.016,Math.sin(l*1.7)*.022));s.push(th(n,"#ff8fb8",o.top));break}case"tea":{let o=Je(n,Io([[0,0],[.034,0],[.04,.15],[.041,.15]]),sh());o.renderOrder=3,a=new it,a.position.y=.004,n.add(a),Je(a,new ht(.037,.032,.13,18),ot(t.c,{roughness:.25,transparent:!0,opacity:.88}),0,.065,0);for(let l=0;l<3;l++)Je(a,new Xt(.02,.02,.02),ot("#ffffff",{transparent:!0,opacity:.55,roughness:.05}),Math.cos(l*2.1)*.016,.115,Math.sin(l*2.1)*.016).rotation.y=l;let c=Je(n,new ht(.02,.02,.005,14),ot("#ffd58a"),.03,.15,0);c.rotation.z=Math.PI/2,s.push(c),s.push(th(n,"#9be0c4",.14,.16));break}case"coffee":{if(e.temp==="\uD56B"){Je(n,new ht(.075,.06,.008,20),ot("#fffdf8"),0,.004,0),Je(n,new ht(.042,.034,.08,18,1,!0),ot("#fffaf2",{side:Ft}),0,.048,0),Je(n,new ht(.034,.034,.004,18),ot("#fffaf2"),0,.01,0);let o=Je(n,new qi(.02,.006,6,12,Math.PI),ot("#fffaf2"),.042,.05,0);o.rotation.z=-Math.PI/2,a=new it,a.position.y=.012,n.add(a),Je(a,new ht(.039,.034,.066,18),ot("#3a2014",{roughness:.15}),0,.033,0)}else{let o=Je(n,Io([[0,0],[.034,0],[.04,.15],[.041,.15]]),sh());o.renderOrder=3,a=new it,a.position.y=.004,n.add(a),Je(a,new ht(.037,.032,.13,18),ot("#3a1f12",{roughness:.2,transparent:!0,opacity:.92}),0,.065,0);for(let c=0;c<3;c++)Je(a,new Xt(.02,.02,.02),ot("#ffffff",{transparent:!0,opacity:.5,roughness:.05}),Math.cos(c*2.1)*.016,.118,Math.sin(c*2.1)*.016).rotation.y=c;s.push(th(n,"#2b2b2b",.14,.16))}break}case"latte":{let o=Je(n,Io([[0,0],[.034,0],[.04,.15],[.041,.15]]),sh());o.renderOrder=3,a=new it,a.position.y=.004,n.add(a),Je(a,new ht(.034,.032,.03,18),ot("#fff6e2"),0,.015,0),Je(a,new ht(.036,.034,.05,18),ot("#f1e5d2"),0,.055,0),Je(a,new ht(.037,.036,.05,18),ot("#8a5634",{roughness:.25}),0,.105,0),s.push(th(n,"#f7b6cf",.14,.16));break}case"puddingParfait":case"kiwiParfait":{let o=eh(n,t.model==="kiwiParfait"?"#f6efe0":"#5a3322",{h:.15,w:.045});a=o.lv;let c=o.top;if(s.push(Xd(n,c-.006,"#fffaf3",1.25)),t.model==="puddingParfait"){let l=new it;l.position.set(-.012,c+.02,.012),n.add(l),s.push(l),Je(l,new ht(.022,.028,.032,18),ot("#f7c75a",{roughness:.35}),0,.016,0),Je(l,new ht(.0225,.022,.008,18),ot("#8c4a12",{roughness:.2}),0,.034,0),s.push(Po(n,-.012,c+.072,.012));for(let u=0;u<3;u++){let d=Je(n,new ht(.013,.013,.006,12),ot("#fff2c4"),.03,c+.01+u*.012,-.02+u*.016);d.rotation.x=Math.PI/2-.4,s.push(d)}let h=Je(n,new Yt(.009,8,6),ot("#ff9cc0"),.028,c+.032,.028);h.scale.z=.4,s.push(h)}else{for(let h=0;h<5;h++)s.push(Je(n,new Xt(.018,.016,.018),ot("#ffd23f",{roughness:.35}),Math.cos(h*1.3)*.03,c+.022+h%2*.012,Math.sin(h*1.3)*.03));for(let h=0;h<2;h++){let u=Je(n,new ht(.016,.016,.005,14),ot("#9ccf3a",{roughness:.4}),-.026+h*.05,c+.04,.02-h*.03);u.rotation.x=Math.PI/2-.3,u.rotation.z=h?.4:-.4,s.push(u)}let l=Je(n,new Yt(.02,12,8),ot("#fffefa",{roughness:.8}),0,c+.05,0);l.scale.y=.75,s.push(l),s.push(Po(n,.004,c+.075,.004))}break}case"pudding":{nh(n);let o=new it;n.add(o),r.push(o),Je(o,new ht(.028,.038,.045,20),ot("#f7c75a",{roughness:.35}),0,.032,0),Je(o,new ht(.0285,.028,.01,20),ot("#8c4a12",{roughness:.2}),0,.058,0);let c=Xd(o,.062,"#fffaf3",.55);s.push(c),s.push(Po(o,0,.09,0));break}case"sando":{nh(n,.095);for(let o of[-1,1]){let c=new it;c.position.set(.032*o,.01,0),c.rotation.y=.3*o,n.add(c),r.push(c),Je(c,new Xt(.05,.065,.026),ot("#fffaf2",{roughness:.9}),0,.033,0),Je(c,new Xt(.051,.026,.02),ot("#fff7e6",{roughness:.6}),0,.033,.0035);let l=Je(c,new Or(.012,.016,12),ot("#ffcf3d",{roughness:.35}),0,.034,.014);l.rotation.x=Math.PI/2}break}case"skewer":{nh(n,.095);let o=new it;o.position.y=.018,o.rotation.y=.5,n.add(o),r.push(o);let c=Je(o,new ht(.0022,.0022,.2,5),ot("#d9b07a"),0,0,0);c.rotation.z=Math.PI/2;for(let l=0;l<4;l++)Je(o,new Xt(.022,.016,.03),ot("#d9561e",{roughness:.25}),-.04+l*.024,0,0);break}case"mochi":{nh(n,.07);let o=new it;n.add(o),r.push(o),Je(o,new ht(.045,.036,.022,14,1,!0),ot("#8fd16b",{side:Ft}),0,.02,0);let c=Je(o,new Yt(.042,16,12),ot("#fffefb",{roughness:.9}),0,.04,0);c.scale.y=.72;let l=e.flavor==="\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"?"#ffd23f":"#b9e46a";Je(o,new Yt(.01,8,6),ot(l),.02,.066,.012);break}}return n.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),n.scale.setScalar(ih),{g:n,top:s,body:r,lv:a,stage:0,pop:0}}function s0({scene3d:i,storeRoot:e,data:t,hero:n,npcs:s,showToast:r,isTouch:a,canOccupy:o,playGame:c}){let l=le=>document.getElementById(le),h=l("menu"),u=l("order-btn"),d=l("eat-btn"),f=l("order-chip"),p=s.find(le=>le.id==="cafe"),_=[],m=0,g="idle",v=0,b=0,M=[],E=null,S=[],x=null,y=0,I=le=>[le.temp,le.shot?"shot":"",le.flavor].filter(Boolean).join("\xB7"),w=le=>ts[le.key].price+(le.opt.shot?yS:0),C=()=>_.reduce((le,j)=>le+j.qty,0),N=()=>_.reduce((le,j)=>le+w(j)*j.qty,0);function H(le,j=4e3){p&&(clearTimeout(H.t),p.el.textContent=le,H.t=setTimeout(()=>p.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",j))}function P(){if(g==="done")return G();let[,le]=Gd[m];h.innerHTML=`
      <div class="mhead"><div><b>Soo it Happy MENU</b><span>\uC218\uC787\uD574\uD53C \uCE74\uD398 \xB7 \uC6D0\uD558\uB294 \uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="cats">${Gd.map(([j],me)=>`<button class="${me===m?"on":""}" data-cat="${me}">${j}</button>`).join("")}</div>
      ${Gd[m][0]==="\uCEE4\uD53C"?'<p class="note">* \uB354\uCE58 \uC6D0\uC561 \uC0AC\uC6A9 \xB7 \uC544\uBA54\uB9AC\uCE74\uB178\uB294 \uC544\uC774\uC2A4/\uD56B \uC120\uD0DD \xB7 \uC5F0\uC720\uB77C\uB5BC\uB294 \uC544\uC774\uC2A4\uB9CC \xB7 \uC0F7 \uCD94\uAC00 +500\uC6D0</p>':""}
      <div class="items">${le.map(j=>{let me=ts[j],ue=me.opts||{};return`<div class="item" data-key="${j}">
          <span class="emo">${me.emoji}</span>
          <div class="info"><b>${me.name}${me.tag?` <i>${me.tag}</i>`:""}</b>${me.desc?`<small>${me.desc}</small>`:""}
            ${ue.temp?`<div class="seg">${ue.temp.map((Ee,R)=>`<button data-opt="temp" data-v="${Ee}" class="${R?"":"on"}">${Ee}</button>`).join("")}</div>`:""}
            ${ue.flavor?`<div class="seg">${ue.flavor.map((Ee,R)=>`<button data-opt="flavor" data-v="${Ee}" class="${R?"":"on"}">${Ee}</button>`).join("")}</div>`:""}
            ${ue.shot?'<label class="shot"><input type="checkbox" data-opt="shot"> \uC0F7 \uCD94\uAC00 +500\uC6D0</label>':""}
          </div>
          <div class="buy"><span class="price">${Vd(me.price)}</span><button class="add" data-act="add">\uB2F4\uAE30</button></div>
        </div>`}).join("")}</div>
      <div class="cart">
        ${_.length?`<div class="lines">${_.map((j,me)=>`<div class="line"><span>${ts[j.key].emoji} ${ts[j.key].name}${I(j.opt)?` <small>(${I(j.opt)})</small>`:""}</span>
          <span class="step"><button data-act="dec" data-i="${me}" aria-label="\uBE7C\uAE30">\u2212</button><b>${j.qty}</b><button data-act="inc" data-i="${me}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join("")}</div>`:'<p class="empty">\uC544\uC9C1 \uB2F4\uC740 \uBA54\uB274\uAC00 \uC5C6\uC5B4\uC694</p>'}
        <button class="go" data-act="order" ${_.length?"":"disabled"}>${_.length?`\u{1F9FE} ${C()}\uAC1C \xB7 ${Vd(N())} \uC8FC\uBB38\uD558\uAE30`:"\uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC8FC\uBB38\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p>
      </div>`}function G(){h.innerHTML=`
      <div class="mhead"><div><b>\uC8FC\uBB38 \uC644\uB8CC! \u{1F9FE}</b><span>\uC8FC\uBB38\uBC88\uD638 ${v} \xB7 ${Vd(E.total)}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="done">
        <div class="list">${E.lines.map(le=>`<div>${ts[le.key].emoji} ${ts[le.key].name}${I(le.opt)?` (${I(le.opt)})`:""} \xD7 ${le.qty}</div>`).join("")}</div>
        <p>\uC5B4\uB5BB\uAC8C \uBC1B\uC744\uAE4C\uC694?</p>
        <button class="go" data-act="eat">\u{1F37D}\uFE0F \uADF8\uB0E5 \uBA39\uC744\uB798\uC694</button>
        <button class="go game" data-act="game">\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30 \uD558\uACE0 \uBA39\uAE30</button>
      </div>`}function V(){g==="done"&&(g="idle"),P(),h.hidden=!1,h.offsetWidth,h.classList.add("on")}function U(){h.classList.remove("on"),setTimeout(()=>{h.classList.contains("on")||(h.hidden=!0)},250)}h.addEventListener("click",le=>{let j=le.target.closest("button");if(!j)return;if(j.dataset.cat){m=+j.dataset.cat,P(),h.querySelector(".items").scrollTop=0;return}if(j.dataset.opt){j.parentElement.querySelectorAll("button").forEach(ue=>ue.classList.toggle("on",ue===j));return}let me=j.dataset.act;if(me==="close")U();else if(me==="add"){let ue=j.closest(".item"),Ee=ue.dataset.key,R={};ue.querySelectorAll(".seg .on").forEach(ne=>R[ne.dataset.opt]=ne.dataset.v);let T=ue.querySelector("[data-opt=shot]");if(T&&T.checked&&(R.shot=!0),C()>=Qc){r(`\uD55C \uBC88\uC5D0 ${Qc}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}let K=_.find(ne=>ne.key===Ee&&I(ne.opt)===I(R));K?K.qty++:_.push({key:Ee,opt:R,qty:1}),P(),r(`${ts[Ee].emoji} ${ts[Ee].name} \uB2F4\uC558\uC5B4\uC694`);let ce=h.querySelector(".lines");ce&&(ce.scrollTop=ce.scrollHeight)}else if(me==="inc"||me==="dec"){let ue=_[+j.dataset.i];if(me==="inc"){if(C()>=Qc){r(`\uD55C \uBC88\uC5D0 ${Qc}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}ue.qty++}else--ue.qty<=0&&_.splice(+j.dataset.i,1);P()}else if(me==="order"){if(g!=="idle"&&g!=="done"||M.length){r("\uBA3C\uC800 \uC8FC\uBB38\uD55C \uBA54\uB274\uB97C \uBC1B\uC740 \uB4A4\uC5D0 \uB610 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694");return}v=10+Math.floor(Math.random()*89),E={lines:_.map(ue=>({...ue,opt:{...ue.opt}})),total:N()},_.length=0,g="done",P()}else me==="eat"?(U(),g="making",b=performance.now()+4500,H(`\uC8FC\uBB38\uBC88\uD638 ${v}\uBC88, \uC8FC\uBB38 \uBC1B\uC558\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC544 \uACC4\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F353}`,6e3),r("\u{1FA91} \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694 \xB7 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694")):me==="game"&&q(E)});function q(){if(U(),!c)return r("\u{1F3AE} \uAC8C\uC784\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694");g="gaming",c(le=>{g="making",b=performance.now()+(le?800:1500),H(le?"\uAC8C\uC784 \uC131\uACF5! \uBC14\uB85C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F389}":"\uAD1C\uCC2E\uC544\uC694! \uADF8\uB798\uB3C4 \uB9DB\uC788\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F60A}",5e3),r(le?"\u{1F389} \uC131\uACF5! \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":"\uBA54\uB274\uB294 \uADF8\uB300\uB85C \uC900\uBE44\uD574 \uB4DC\uB824\uC694 \xB7 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694")})}u.addEventListener("click",le=>{V(),le.currentTarget.blur()}),addEventListener("keydown",le=>{le.code==="Escape"&&!h.hidden&&U()});let z=new Ms,D=new O(0,-1,0),B=new O;function L(le,j){z.set(B.set(le,1.4,j),D),z.far=1.4;for(let me of z.intersectObject(e,!0))if(me.point.y>.4&&me.point.y<1.05)return me.point.y;return null}function X(le,j){let me=Math.sin(le[2]),ue=Math.cos(le[2]),Ee=ue,R=-me,T=.42,K=null;for(let ge of[.3,.36,.42,.5,.58]){let ve=L(le[0]+me*ge,le[1]+ue*ge);if(ve!==null){T=ge+.04,K=ve;break}}K===null&&(K=.74);let ce=j.length,ne=Math.min(3,ce);j.forEach((ge,ve)=>{let se=Math.floor(ve/3),ae=se?ce-3:ne,k=(ve%3-(ae-1)/2)*.13,oe=T+se*.12,J=i0(ge.key,ge.opt);J.g.position.set(le[0]+me*oe+Ee*k,K+.002,le[1]+ue*oe+R*k),J.g.rotation.y=le[2]+Math.PI+(Math.random()-.5)*.4,J.g.scale.setScalar(.001),J.pop=.001,i.add(J.g),S.push({food:J,seat:le})})}let F=p&&{x:p.x,z:p.z,face:p.face,y:p.c.root.position.y};p&&(p.y=F.y,p.speed=0);let W=.2,te=.15,fe=1.25,he=t.floor.map(le=>le[0]),re=t.floor.map(le=>le[1]),Se=Math.min(...he),Ce=Math.min(...re),Fe=Math.ceil((Math.max(...he)-Se)/te)+1,Ke=Math.ceil((Math.max(...re)-Ce)/te)+1,ee=new Map,pe=le=>Se+le*te,xe=le=>Ce+le*te;function Te(le,j){if(le<0||j<0||le>=Fe||j>=Ke)return!1;let me=j*Fe+le,ue=ee.get(me);return ue===void 0&&(ue=o(pe(le),xe(j),W),ee.set(me,ue)),ue}function Me(le,j,me=8){let ue=Math.round((le-Se)/te),Ee=Math.round((j-Ce)/te);for(let R=0;R<=me;R++){let T=null,K=1e9;for(let ce=-R;ce<=R;ce++)for(let ne=-R;ne<=R;ne++){if(Math.max(Math.abs(ce),Math.abs(ne))!==R||!Te(ue+ce,Ee+ne))continue;let ge=Math.hypot(pe(ue+ce)-le,xe(Ee+ne)-j);ge<K&&(K=ge,T=[ue+ce,Ee+ne])}if(T)return T}return null}function Ve(le,j,me,ue){let Ee=Math.ceil(Math.hypot(me-le,ue-j)/.06);for(let R=1;R<Ee;R++)if(!o(le+(me-le)*R/Ee,j+(ue-j)*R/Ee,W))return!1;return!0}function Ne(le,j,me,ue){let Ee=Me(le,j),R=Me(me,ue);if(!Ee||!R)return null;let T=(J,we)=>we*Fe+J,K=T(R[0],R[1]),ce=[[0,Ee[0],Ee[1]]],ne=new Map([[T(Ee[0],Ee[1]),0]]),ge=new Map,ve=new Set,se=!1,ae=0;for(;ce.length&&ae++<4e4;){let J=0;for(let Be=1;Be<ce.length;Be++)ce[Be][0]<ce[J][0]&&(J=Be);let[,we,be]=ce.splice(J,1)[0],Ae=T(we,be);if(!ve.has(Ae)){if(ve.add(Ae),Ae===K){se=!0;break}for(let[Be,nt]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let ye=we+Be,We=be+nt;if(!Te(ye,We)||Be&&nt&&(!Te(we+Be,be)||!Te(we,be+nt)))continue;let et=T(ye,We),De=ne.get(Ae)+Math.hypot(Be,nt);De<(ne.has(et)?ne.get(et):1e9)&&(ne.set(et,De),ge.set(et,Ae),ce.push([De+Math.hypot(ye-R[0],We-R[1]),ye,We]))}}}if(!se)return null;let _e=[];for(let J=K;J!==void 0;J=ge.get(J))_e.push([pe(J%Fe),xe(Math.floor(J/Fe))]);_e.reverse(),_e.push([me,ue]);let k=[_e[0]],oe=0;for(;oe<_e.length-1;){let J=_e.length-1;for(;J>oe+1&&!Ve(_e[oe][0],_e[oe][1],_e[J][0],_e[J][1]);)J--;k.push(_e[J]),oe=J}return k}let Ye=null,Qe=ot("#ffc2da",{roughness:.5});function st(le){let j=M;if(M=[],!p){X(le,j),g="idle";return}let me=Math.sin(le[2]),ue=Math.cos(le[2]),Ee=[le[0]+me*.5,le[1]+ue*.5],R=null;for(let[K,ce]of[[ue,-me],[-ue,me],[me,ue]])for(let ne of[.55,.7,.85]){let ge=Ee[0]+K*ne,ve=Ee[1]+ce*ne;if(!o(ge,ve,W))continue;let se=Ne(F.x,F.z,ge,ve);if(se){(!R||se.length<R.length)&&(R=se);break}}if(g="delivering",!R){X(le,j),g="idle",r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}");return}let T=new it;T.position.set(0,.5,.24),Je(T,new Xt(.36,.016,.26),Qe),j.slice(0,6).forEach((K,ce)=>{let ne=i0(K.key,K.opt);ne.g.scale.setScalar(ih*.62),ne.g.position.set((ce%3-1)*.1,.008,j.length>3?(Math.floor(ce/3)-.5)*.09:0),T.add(ne.g)}),p.c.root.add(T),Ye={stage:"go",path:[[F.x,F.z],...R],i:1,seat:le,wait:0,tray:T,items:j,look:Ee},p.carry=!0,H("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694! \u{1F370}",2e4)}function $(le){let j=p,me=Ye;if(me.stage==="go"||me.stage==="back"){let[ue,Ee]=me.path[me.i],R=ue-j.x,T=Ee-j.z,K=Math.hypot(R,T),ce=Math.min(K,fe*le);if(K>1e-4){j.x+=R/K*ce,j.z+=T/K*ce;let ge=Math.atan2(R,T)-j.face;ge=Math.atan2(Math.sin(ge),Math.cos(ge)),j.face+=ge*Math.min(1,le*10)}j.speed=fe;let ne=Math.hypot(j.x-F.x,j.z-F.z);j.y=F.y*bi.clamp(1-(ne-.15)/.35,0,1),K<.02&&++me.i>=me.path.length&&(j.speed=0,me.stage==="go"?(me.stage="serve",me.wait=.7):(j.x=F.x,j.z=F.z,j.face=F.face,j.y=F.y,Ye=null))}else if(me.stage==="serve"){let ue=Math.atan2(me.look[0]-j.x,me.look[1]-j.z)-j.face;if(ue=Math.atan2(Math.sin(ue),Math.cos(ue)),j.face+=ue*Math.min(1,le*8),me.wait-=le,me.wait<=0&&me.tray)j.c.root.remove(me.tray),me.tray=null,j.carry=!1,X(me.seat,me.items),g="idle",H("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uB098\uC654\uC2B5\uB2C8\uB2E4! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}",4e3),r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}"),me.wait=1.2;else if(me.wait<=0){let Ee=Ne(j.x,j.z,F.x,F.z);me.stage="back",me.path=Ee?[[j.x,j.z],...Ee.slice(0,-1),[F.x,F.z]]:[[j.x,j.z],[F.x,F.z]],me.i=1,g="idle"}}}let Ct=()=>S.filter(le=>le.seat===x);function rt(){let le=Ct();if(!le.length)return;let j=le[0].food;j.stage++,y=.7;let me=j.stage;for(let ue of j.top)me>=2?ue.visible=!1:ue.scale.multiplyScalar(.65);j.lv&&(j.lv.scale.y=Math.max(.02,1-me/3));for(let ue of j.body)ue.scale.setScalar(Math.max(.05,1-me*.3));me>=3&&(j.dying=1,setTimeout(()=>{i.remove(j.g),S.splice(S.findIndex(ue=>ue.food===j),1),S.some(ue=>ue.seat===x)||r("\uB2E4 \uBA39\uC5C8\uC5B4\uC694! \uB9DB\uC788\uC5C8\uB2E4 \u{1F60B} \uB610 \uC8FC\uBB38\uD574 \uBCF4\uC138\uC694")},450))}return d.addEventListener("click",le=>{rt(),le.currentTarget.blur()}),{get open(){return!h.hidden},onSit(le){x=le,g==="ready"&&M.length&&!Ye&&st(le)},get npcBusy(){return!!Ye},onStand(){x=null},update(le,j,me){me!==x&&(x=me),g==="making"&&performance.now()>=b&&(M=E.lines.flatMap(T=>Array.from({length:T.qty},()=>({key:T.key,opt:T.opt}))),g="ready",x&&!Ye?st(x):(H(`\uC8FC\uBB38\uBC88\uD638 ${v}\uBC88 \uBA54\uB274 \uB098\uC654\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC73C\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F370}`,7e3),r("\u{1F514} \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uCE74\uD398 \uC758\uC790\uB97C \uB20C\uB7EC \uC549\uC73C\uBA74 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694"))),Ye&&$(le);let ue=p&&!me&&!Ye&&Math.hypot(j.x-F.x,j.z-F.z)<2.6;u.hidden=!ue||!h.hidden;let Ee=!!me&&Ct().length>0;d.hidden=!Ee;let R=g==="making"?"\u{1F9D1}\u200D\u{1F373} \uBA54\uB274 \uB9CC\uB4DC\uB294 \uC911\u2026 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":g==="ready"?`\u{1F514} \uBA54\uB274 ${M.length}\uAC1C \uC900\uBE44\uB410\uC5B4\uC694 \xB7 \uCE74\uD398 \uC758\uC790\uC5D0 \uC549\uC544 \uBCF4\uC138\uC694`:g==="delivering"?"\u{1F370} \uC9C1\uC6D0\uC774 \uBA54\uB274\uB97C \uAC00\uC838\uB2E4 \uB4DC\uB9AC\uB294 \uC911\u2026":"";f.textContent!==R&&(f.textContent=R),f.hidden=!R||!h.hidden;for(let{food:T}of S){if(T.pop<1){T.pop=Math.min(1,T.pop+le*3);let K=1-Math.pow(1-T.pop,3);T.g.scale.setScalar(ih*(.2+.8*K+Math.sin(T.pop*Math.PI)*.12))}T.dying&&(T.dying=Math.max(0,T.dying-le*2.5),T.g.scale.setScalar(ih*T.dying))}if(y>0&&n.arms){y=Math.max(0,y-le);let T=Math.sin((1-y/.7)*Math.PI);n.arms[0].rotation.x=-.5-1.7*T,n.head.rotation.x=.12*T}}}}var nr='stroke="#4a3f66" stroke-linejoin="round" stroke-linecap="round"',_t=nr+' stroke-width="2.6"',r0=(i,e,t,n=2.6)=>`<circle cx="${i}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${e}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${i+.9}" cy="${t-.9}" r="0.9" fill="#fff"/><circle cx="${e+.9}" cy="${t-.9}" r="0.9" fill="#fff"/>`,Kd=(i,e,t)=>`<ellipse cx="${i}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/><ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/>`,rh=(i,e)=>`<path d="M${i} ${e} q3 -10 9 -12" fill="none" ${nr} stroke-width="1.8"/><circle cx="${i}" cy="${e+2}" r="5.5" fill="#e8243c" ${_t}/><circle cx="${i-1.8}" cy="${e}" r="1.5" fill="#fff" opacity=".8"/>`,qd=(i,e,t)=>`
  <path d="M43 76 h14 l2 12 h-18z" fill="#eef8fc" ${_t}/><ellipse cx="50" cy="89" rx="15" ry="4" fill="#eef8fc" ${_t}/>
  <path d="M27 36 h46 l-7 36 q-16 8 -32 0z" fill="${i}" ${_t}/>
  <path d="M33 42 l-3 22" stroke="#fff" stroke-width="3" opacity=".55" stroke-linecap="round"/>
  ${e?`<circle cx="50" cy="30" r="14" fill="${e}" ${_t}/><path d="M38 34 q12 6 24 0" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`:""}
  ${t?`<path d="M30 37 q-3 -10 8 -12 q2 -10 12 -9 q10 -1 12 9 q11 2 8 12z" fill="${t}" ${_t}/><path d="M36 31 q14 -6 28 0" fill="none" stroke="#6b3b25" stroke-width="2.4" stroke-linecap="round"/>`:""}`,Lo=(i,e,t=1,n="")=>`<g transform="translate(${i} ${e}) scale(${t})">
  <ellipse cx="-17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(18 -17 2)"/><ellipse cx="17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(-18 17 2)"/>
  <path d="M-16 -6 q-4 -14 8 -16 q8 -8 16 0 q12 2 8 16 q6 10 -2 20 q-14 10 -28 0 q-8 -10 -2 -20z" fill="#fff" ${_t}/>
  ${r0(-6,6,0,2.8)}<ellipse cx="0" cy="7" rx="3" ry="2.2" fill="#3b2f4a"/><path d="M-3 10 q3 3 6 0" fill="none" ${nr} stroke-width="1.6"/>
  ${Kd(-11,11,8)}${n}</g>`,$d=({hair:i,hairDark:e,bun:t,glasses:n,clip:s,collar:r})=>`
  ${t?`<circle cx="50" cy="20" r="11" fill="${i}" ${_t}/>`:""}
  <path d="M22 54 q-4 -34 28 -36 q32 2 28 36 q-2 10 -8 12 l-40 0 q-6 -2 -8 -12z" fill="${i}" ${_t}/>
  <ellipse cx="50" cy="54" rx="22" ry="21" fill="#ffe6d6" ${_t}/>
  <path d="M28 46 q8 -14 22 -12 q-2 8 -10 10 q10 -2 14 -10 q8 10 18 12 q-4 -18 -22 -18 q-18 0 -22 18z" fill="${i}"/>
  <path d="M27 58 q-3 10 1 20 M73 58 q3 10 -1 20" fill="none" stroke="${e}" stroke-width="7" stroke-linecap="round"/>
  ${r0(41,59,55,3)}${Kd(35,65,63)}<path d="M46 65 q4 4 8 0" fill="none" ${nr} stroke-width="1.8"/>
  ${n?'<circle cx="41" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><circle cx="59" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><path d="M48 54 h4" stroke="#4a3326" stroke-width="2.4"/>':""}
  ${s?`<circle cx="32" cy="36" r="5" fill="#e8243c" ${nr} stroke-width="1.8"/><path d="M30 31 l2 -3 l2 3" fill="#6cc05a"/>`:""}
  ${r?`<path d="M34 78 q16 8 32 0 l6 10 q-22 10 -44 0z" fill="${r}" ${_t}/>`:""}`,ir={menu:{name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",color:"#d6efbf",stickers:[qd("#2f93ee","#fff0c8")+rh(57,14),qd("#6fd34a","#d6f2c4")+rh(57,14),`<ellipse cx="50" cy="80" rx="34" ry="9" fill="#fff" ${_t}/><path d="M32 78 l6 -34 h24 l6 34z" fill="#f7c75a" ${_t}/><path d="M38 44 h24 l-1 7 q-11 4 -22 0z" fill="#8c4a12" ${_t}/>
       <path d="M40 44 q-3 -9 6 -10 q4 -8 8 0 q9 1 6 10z" fill="#fffaf3" ${_t}/>${rh(50,24)}<path d="M37 70 q13 4 26 0" stroke="#fff" stroke-width="2.4" opacity=".5" fill="none"/>`,`<path d="M18 86 L84 20" stroke="#d9b07a" stroke-width="4" stroke-linecap="round"/>
       ${[0,1,2,3].map(i=>`<rect x="${24+i*13}" y="${56-i*13}" width="15" height="12" rx="4" fill="#e0622a" ${_t} transform="rotate(-45 ${31+i*13} ${62-i*13})"/>`).join("")}
       <path d="M30 60 l40 -40" stroke="#fff" stroke-width="2" opacity=".45" stroke-linecap="round"/>`,`<path d="M22 64 h56 l-6 18 h-44z" fill="#8fd16b" ${_t}/><path d="M28 64 l4 18 M40 64 l1 18 M52 64 l-1 18 M64 64 l-3 18" stroke="#6aa94a" stroke-width="1.6"/>`+Lo(50,44,1.05),qd("#7b4a33",null,"#fffaf3")+rh(54,10)]},staff:{name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",color:"#ffe1ee",stickers:[$d({hair:"#7a5640",hairDark:"#64432f",bun:!0,collar:"#c4e76a"}),$d({hair:"#3d3346",hairDark:"#2c2433",glasses:!0,collar:"#fff0a3"}),$d({hair:"#f7a9c8",hairDark:"#ec8db5",clip:!0,collar:"#aee3cf"}),`<path d="M10 24 q0 -12 14 -12 h52 q14 0 14 12 v30 q0 12 -14 12 h-36 l-14 14 l2 -14 q-18 0 -18 -12z" fill="#fff" ${_t}/>
       <text x="50" y="47" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="12.5" fill="#e0457b">\uC5B4\uC11C\uC624\uC138\uC694!</text>`,`<path d="M50 86 C10 58 12 22 34 20 C44 19 50 28 50 32 C50 28 56 19 66 20 C88 22 90 58 50 86z" fill="#f6a9c9" ${_t}/>
       <text x="50" y="54" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="13" fill="#c2477e">\uC218\uC787\uD574\uD53C</text>`,`<path d="M50 50 l-30 -18 q-8 -2 -8 8 v20 q0 10 8 8z M50 50 l30 -18 q8 -2 8 8 v20 q0 10 -8 8z" fill="#ff9cc0" ${_t}/>
       <path d="M44 52 l-10 30 l8 -4 l4 8 l6 -32z M56 52 l10 30 l-8 -4 l-4 8 l-6 -32z" fill="#ff86b2" ${_t}/><circle cx="50" cy="50" r="8" fill="#ffb8d2" ${_t}/>`]},dog:{name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",color:"#e3f3ff",stickers:[Lo(50,52,1.5,'<path d="M-3 12 q3 5 6 0z" fill="#ff8fb0" stroke="#4a3f66" stroke-width="1.4"/>'),`<ellipse cx="52" cy="72" rx="24" ry="16" fill="#fff" ${_t}/><ellipse cx="38" cy="84" rx="7" ry="5" fill="#fff" ${_t}/><ellipse cx="62" cy="84" rx="7" ry="5" fill="#fff" ${_t}/>
       <path d="M74 66 q12 -6 8 -16" fill="none" ${nr} stroke-width="5"/><path d="M74 66 q12 -6 8 -16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`+Lo(48,40,1.05),`<ellipse cx="50" cy="66" rx="34" ry="18" fill="#fff" ${_t}/><path d="M24 62 q-4 -16 12 -18 q10 -10 20 0" fill="#fff" ${_t}/>
       <path d="M30 60 q4 3 8 0 M44 60 q4 3 8 0" fill="none" ${nr} stroke-width="2"/><ellipse cx="41" cy="67" rx="2.6" ry="2" fill="#3b2f4a"/>${Kd(28,54,68)}
       <text x="66" y="38" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="15" fill="#9a8cc4">z</text><text x="76" y="26" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="11" fill="#9a8cc4">z</text>`,Lo(50,54,1.4)+`<path d="M50 24 l-14 -8 q-4 0 -4 4 v8 q0 4 4 4z M50 24 l14 -8 q4 0 4 4 v8 q0 4 -4 4z" fill="#ff8fb7" ${_t}/><circle cx="50" cy="24" r="4.5" fill="#ffb3cf" ${_t}/>`,`<ellipse cx="50" cy="62" rx="18" ry="15" fill="#f7a9c8" ${_t}/>${[[28,40],[42,30],[58,30],[72,40]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="7" ry="8.5" fill="#f7a9c8" ${_t}/>`).join("")}`,`<path d="M14 20 q0 -10 12 -10 h48 q12 0 12 10 v26 q0 10 -12 10 h-30 l-14 12 l2 -12 h-6 q-12 0 -12 -10z" fill="#fffbe0" ${_t}/>
       <text x="50" y="42" text-anchor="middle" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="18" fill="#4a3f66">\uBA4D!</text>`+Lo(70,76,.8)]}},Yd=new Map;function ui(i,e){let t=i+e;if(!Yd.has(t)){let n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" width="224" height="224">
      <defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feMorphology in="SourceAlpha" operator="dilate" radius="4.5" result="d"/>
      <feFlood flood-color="#ffffff"/><feComposite in2="d" operator="in" result="w"/>
      <feGaussianBlur in="d" stdDeviation="1.6" result="s"/><feOffset in="s" dy="1.4" result="so"/><feFlood flood-color="#6a53a0" flood-opacity=".28"/><feComposite in2="so" operator="in" result="sh"/>
      <feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g filter="url(#b)">${ir[i].stickers[e]}</g></svg>`;Yd.set(t,"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n))}return Yd.get(t)}var nn={stkMenu:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"menu",desc:"\uD06C\uB9BC\uC18C\uB2E4\xB7\uBA54\uB860\uC18C\uB2E4\xB7\uD478\uB529\xB7\uB5A1\uAF2C\uCE58\u2026",color:"#d6efbf"},stkStaff:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"staff",desc:"\uCE74\uD398 \uC5B8\uB2C8\xB7\uC18C\uD488\uC0F5 \uC5B8\uB2C8\xB7\uC190\uB2D8",color:"#ffd3e4"},stkDog:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"dog",desc:"\uBABD\uAE00\uBABD\uAE00 \uD558\uC580 \uAC15\uC544\uC9C0",color:"#dcefff"},diary:{cat:"\uBB38\uAD6C",name:"\uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9",price:5e3,emoji:"\u{1F4D2}",desc:"\uCE74\uD398 \uC790\uB9AC\uC5D0\uC11C \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694",color:"#f7c9dc"},penBear:{cat:"\uBB38\uAD6C",name:"\uACF0\uB3CC\uC774 \uBCFC\uD39C",price:2500,emoji:"\u{1F43B}",desc:"\uCD08\uCF54 \uBE0C\uB77C\uC6B4 \uC789\uD06C",ink:"#7a4a33",color:"#c99c6e"},penBerry:{cat:"\uBB38\uAD6C",name:"\uB538\uAE30 \uBCFC\uD39C",price:2500,emoji:"\u{1F353}",desc:"\uB538\uAE30 \uD551\uD06C \uC789\uD06C",ink:"#e0457b",color:"#f48fb9"},penMint:{cat:"\uBB38\uAD6C",name:"\uBBFC\uD2B8 \uC824\uD39C",price:2500,emoji:"\u{1F33F}",desc:"\uBBFC\uD2B8 \uC789\uD06C",ink:"#2f9d8f",color:"#9fe0cf"},tapeHeart:{cat:"\uBB38\uAD6C",name:"\uD558\uD2B8 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F497}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"heart",color:"#ffc2da"},tapeCheck:{cat:"\uBB38\uAD6C",name:"\uAE45\uC5C4 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F49A}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"check",color:"#bfe6a8"},memo:{cat:"\uBB38\uAD6C",name:"\uB9D0\uB791 \uBA54\uBAA8\uC9C0",price:2e3,emoji:"\u{1F5D2}\uFE0F",color:"#fff3b0"},letter:{cat:"\uBB38\uAD6C",name:"\uD3B8\uC9C0\uC9C0 \uC138\uD2B8",price:3500,emoji:"\u{1F48C}",color:"#ffe1ee"},postcard:{cat:"\uBB38\uAD6C",name:"\uC218\uC787\uD574\uD53C \uC5FD\uC11C",price:1500,emoji:"\u{1F5BC}\uFE0F",color:"#cdbcf0"},plushDog:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC778\uD615",price:15e3,emoji:"\u{1F436}",color:"#ffffff"},keyBear:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uACF0\uB3CC\uC774 \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F9F8}",color:"#e6bf93"},keyBunny:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD1A0\uB07C \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F430}",color:"#f8b9d3"},hairpin:{cat:"\uC7A1\uD654",name:"\uB538\uAE30 \uBA38\uB9AC\uD540",price:3e3,emoji:"\u{1F380}",color:"#ff8fb0"}},a0=["\uC2A4\uD2F0\uCEE4","\uBB38\uAD6C","\uC778\uD615\xB7\uD0A4\uB9C1","\uC7A1\uD654"],ah=i=>i.toLocaleString("ko-KR")+"\uC6D0",jd=i=>{let e=nn[i];return e.sheet?`<img src="${ui(e.sheet,0)}" alt="">`:e.emoji},On={items:{},stickers:{}};try{Object.assign(On,JSON.parse(localStorage.getItem("sh-inv"))||{})}catch{}function oh(){try{localStorage.setItem("sh-inv",JSON.stringify(On))}catch{}}var lh=i=>(On.items[i]||0)>0;function MS(){let i=document.createElement("canvas");i.width=512,i.height=128;let e=i.getContext("2d");e.fillStyle="#f4a7bf",e.fillRect(0,0,512,128),e.globalCompositeOperation="destination-out";let t=(s,r,a)=>{e.beginPath(),e.moveTo(s,r+a*.9),e.bezierCurveTo(s-a*1.3,r,s-a*.7,r-a*.9,s,r-a*.3),e.bezierCurveTo(s+a*.7,r-a*.9,s+a*1.3,r,s,r+a*.9),e.fill()};for(let s=0;s<2;s++)for(let r=0;r<16;r++)t(16+r*32+(s?16:0),44+s*42,11);let n=new Zn(i);return n.colorSpace=wt,n.wrapS=Sn,n.anisotropy=4,n}function SS(){let i=new it,e=new Zt({color:"#f4a7bf",roughness:.55}),t=new Zt({map:MS(),alphaTest:.5,side:Ft,roughness:.55}),n=new it;n.scale.set(1.3,1,.85),i.add(n);let s=.1,r=new Ze(new ht(.11,.08,s,28,1,!0),t);r.position.y=s/2,n.add(r);let a=new Ze(new Ha(.08,24),e);a.rotation.x=-Math.PI/2,a.position.y=.002,n.add(a);let o=new Ze(new qi(.11,.008,6,32),e);o.rotation.x=Math.PI/2,o.position.y=s,n.add(o);for(let l of[-1,1]){let h=new Ze(new qi(.075,.009,6,18,Math.PI),e);h.position.set(0,s,.07*l),h.rotation.x=.25*l,i.add(h)}let c=new it;return c.position.y=.01,i.add(c),i.traverse(l=>{l.isMesh&&(l.castShadow=!1)}),{g:i,goods:c}}function o0({scene3d:i,hero:e,npcs:t,showToast:n,inShop:s}){let r=C=>document.getElementById(C),a=r("shop"),o=r("shop-btn"),c=r("basket-btn"),l=r("stop-btn"),h=t.find(C=>C.id==="shop"),u=SS();u.g.position.set(.21,.29,.24),u.g.rotation.y=Math.PI/2;let d=!1,f="browse",p=0,_=0,m={},g=()=>Object.values(m).reduce((C,N)=>C+N,0),v=()=>Object.entries(m).reduce((C,[N,H])=>C+nn[N].price*H,0),b=()=>h&&Math.hypot(e.root.position.x-h.x,e.root.position.z-h.z)<2.8;function M(){u.goods.clear();let C=0;for(let[N,H]of Object.entries(m))for(let P=0;P<H&&C<10;P++,C++){let G=nn[N],V=new Ze(G.sheet?new Xt(.06,.004,.08):new Xt(.045,.035,.04),new Zt({color:G.color,roughness:.6}));V.position.set((C%3-1)*.06,.02+Math.floor(C/3)*.025,(C%2-.5)*.04),V.rotation.set(.2*(C%2-.5),C*.7,.15*(C%3-1)),u.goods.add(V)}}function E(){d=!0,e.root.add(u.g),M(),n("\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8\uB97C \uB4E4\uC5C8\uC5B4\uC694! \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"),y("browse")}function S(){d=!1,e.root.remove(u.g);for(let C of Object.keys(m))delete m[C];I(),n("\uC1FC\uD551\uC744 \uADF8\uB9CC\uB480\uC5B4\uC694. \uBC14\uAD6C\uB2C8\uB294 \uC81C\uC790\uB9AC\uC5D0 \uB450\uC5C8\uC5B4\uC694")}function x(){let C=g(),N=`<div class="cats">${[["browse","\u{1F6CD}\uFE0F \uC0C1\uD488"],["cart",`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${C}`],["mine","\u{1F392} \uB0B4 \uBB3C\uAC74"]].map(([P,G])=>`<button class="${f===P?"on":""}" data-tab="${P}">${G}</button>`).join("")}</div>`,H="";if(f==="browse")H=`<div class="cats sub">${a0.map((P,G)=>`<button class="${G===p?"on":""}" data-cat="${G}">${P}</button>`).join("")}</div>
      <div class="items">${Object.entries(nn).filter(([,P])=>P.cat===a0[p]).map(([P,G])=>`
        <div class="item"><span class="emo">${jd(P)}</span>
          <div class="info"><b>${G.name}</b>${G.desc?`<small>${G.desc}</small>`:""}
            ${G.sheet?`<div class="mini">${ir[G.sheet].stickers.map((V,U)=>`<img src="${ui(G.sheet,U)}" alt="">`).join("")}</div>`:""}</div>
          <div class="buy"><span class="price">${ah(G.price)}</span><button class="add" data-add="${P}">${m[P]?`\uB2F4\uC74C ${m[P]}`:"\uB2F4\uAE30"}</button></div>
        </div>`).join("")}</div>
      <div class="cart"><button class="go" data-tab="cart" ${C?"":"disabled"}>${C?`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 \uBCF4\uAE30 \xB7 ${C}\uAC1C \xB7 ${ah(v())}`:"\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"}</button></div>`;else if(f==="cart"){let P=b();H=`<div class="items">${C?Object.entries(m).map(([G,V])=>`
        <div class="item"><span class="emo">${jd(G)}</span><div class="info"><b>${nn[G].name}</b><small>${ah(nn[G].price)}</small></div>
          <span class="step"><button data-dec="${G}" aria-label="\uBE7C\uAE30">\u2212</button><b>${V}</b><button data-inc="${G}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join(""):'<p class="empty">\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694</p>'}</div>
      <div class="cart">
        <button class="go" data-act="pay" ${C&&P?"":"disabled"}>${C?P?`\u{1F4B3} ${ah(v())} \uACC4\uC0B0\uD558\uAE30`:"\u{1F380} \uACC4\uC0B0\uB300 \uC9C1\uC6D0\uC5D0\uAC8C \uAC00\uBA74 \uACC4\uC0B0\uD560 \uC218 \uC788\uC5B4\uC694":"\uB2F4\uC740 \uC0C1\uD488\uC774 \uC5C6\uC5B4\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC1FC\uD551\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p></div>`}else{let P=Object.entries(On.items).filter(([,G])=>G>0);H=`<div class="items">${P.length?P.map(([G,V])=>`
        <div class="item"><span class="emo">${jd(G)}</span><div class="info"><b>${nn[G].name}</b><small>${V}\uAC1C \uAC00\uC9C0\uACE0 \uC788\uC5B4\uC694</small></div></div>`).join(""):'<p class="empty">\uC544\uC9C1 \uC0B0 \uBB3C\uAC74\uC774 \uC5C6\uC5B4\uC694</p>'}
        <p class="fine">\u{1F4D2} \uB2E4\uC774\uC5B4\uB9AC + \uC2A4\uD2F0\uCEE4 + \uBCFC\uD39C\uC774 \uC788\uC73C\uBA74 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694</p></div>`}a.innerHTML=`<div class="mhead"><div><b>\uC218\uC9D1\uC218\uC9D1 \uC18C\uD488\uC0F5</b><span>${d?"\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uACE0 \uACC4\uC0B0\uB300\uC5D0\uC11C \uACC4\uC0B0\uD574\uC694":"\uB0B4\uAC00 \uC0B0 \uBB3C\uAC74"}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>${N}${H}`}function y(C){f=C||f,x(),a.hidden=!1,a.offsetWidth,a.classList.add("on")}function I(){a.classList.remove("on"),setTimeout(()=>{a.classList.contains("on")||(a.hidden=!0)},250)}a.addEventListener("click",C=>{let N=C.target.closest("button");if(!N)return;let H=N.dataset;if(H.act==="close")return I();if(H.tab)return!d&&H.tab!=="mine"?void 0:(f=H.tab,x());if(H.cat)return p=+H.cat,x();if(H.add)return g()>=20?n("\uBC14\uAD6C\uB2C8\uAC00 \uAC00\uB4DD \uCC3C\uC5B4\uC694"):(m[H.add]=(m[H.add]||0)+1,M(),n(`\u{1F9FA} ${nn[H.add].name} \uB2F4\uC558\uC5B4\uC694`),x());if(H.inc)return m[H.inc]++,M(),x();if(H.dec)return--m[H.dec]<=0&&delete m[H.dec],M(),x();if(H.act==="pay"){for(let[P,G]of Object.entries(m)){On.items[P]=(On.items[P]||0)+G;let V=nn[P].sheet;V&&ir[V].stickers.forEach((U,q)=>{On.stickers[V+":"+q]=(On.stickers[V+":"+q]||0)+G}),delete m[P]}oh(),M(),h&&(h.el.textContent="\uAC10\uC0AC\uD569\uB2C8\uB2E4! \uB610 \uB180\uB7EC \uC624\uC138\uC694 \u{1F380}",setTimeout(()=>h.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",5e3)),n("\u{1F4B3} \uACC4\uC0B0 \uC644\uB8CC! \uC0B0 \uBB3C\uAC74\uC740 \u{1F392} \uB0B4 \uBB3C\uAC74\uC5D0 \uC788\uC5B4\uC694"),f="mine",x()}}),o.addEventListener("click",C=>{E(),C.currentTarget.blur()}),c.addEventListener("click",C=>{y(g()?"cart":"browse"),C.currentTarget.blur()}),l.addEventListener("click",C=>{if(C.currentTarget.blur(),g()&&performance.now()-_>3e3)return _=performance.now(),l.textContent="\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uB0B4\uB824\uB193\uC544\uC694",n("\uB2F4\uC740 \uC0C1\uD488\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB0B4\uB824\uB193\uC544\uC694");S()}),addEventListener("keydown",C=>{C.code==="Escape"&&!a.hidden&&I()});let w=null;return{get open(){return!a.hidden},get shopping(){return d},openMine(){y("mine")},update(C,N){let H=s(C);if(o.hidden=d||!!N||!H,c.hidden=!d,l.hidden=!d,d){let G=`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${g()}`;c.textContent!==G&&(c.textContent=G),performance.now()-_>3e3&&l.textContent!=="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30"&&(l.textContent="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30")}u.g.visible=!N,d&&!N&&(e.arms[1].rotation.x=-.95,e.arms[1].rotation.z=.12);let P=b();P!==w&&(w=P,!a.hidden&&f==="cart"&&x())}}}async function ea(i,e){let t=await new Promise(a=>i.toBlob(a,"image/jpeg",.92)),n=new File([t],e,{type:"image/jpeg"});if(matchMedia("(pointer:coarse)").matches&&navigator.canShare&&navigator.canShare({files:[n]}))try{return await navigator.share({files:[n],title:"\uC218\uC787\uD574\uD53C"}),"shared"}catch(a){if(a.name==="AbortError")return"cancel"}let r=document.createElement("a");return r.href=URL.createObjectURL(t),r.download=e,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},4e3),"downloaded"}var ta=()=>{let i=new Date;return`${i.getFullYear()}.${String(i.getMonth()+1).padStart(2,"0")}.${String(i.getDate()).padStart(2,"0")}`};var Zd='"Gamja Flower", "Poor Story", cursive',hh=6,bS={heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="25" height="25" patternUnits="userSpaceOnUse">
    <path d="M12.5 19 C3 12 5 5 9 5 C11 5 12.5 7 12.5 8 C12.5 7 14 5 16 5 C20 5 22 12 12.5 19z" fill="#ff8fb7"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="#ffd9e7" opacity=".88"/>
    <rect x="4" y="0" width="242" height="50" fill="url(#p)" opacity=".85"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#eaf7df"/><rect width="8" height="16" fill="#a9db8a" opacity=".55"/><rect width="16" height="8" fill="#a9db8a" opacity=".55"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="url(#p)" opacity=".9"/></svg>`},Jd=i=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(bS[i]),sr={page:0,pages:Array.from({length:hh},()=>[])};try{let i=JSON.parse(localStorage.getItem("sh-diary"));i&&i.pages&&(sr=i)}catch{}var ch=()=>{try{return localStorage.setItem("sh-diary",JSON.stringify(sr)),!0}catch{return!1}};function l0({showToast:i}){let t=(D=>document.getElementById(D))("diary");t.innerHTML=`
    <div class="dtop"><b>\u{1F4D2} \uB098\uC758 \uB2E4\uC774\uC5B4\uB9AC</b><span class="pg"></span>
      <button data-act="prev" aria-label="\uC774\uC804 \uC7A5">\u25C0</button><button data-act="next" aria-label="\uB2E4\uC74C \uC7A5">\u25B6</button>
      <button data-act="save">\u{1F4BE} \uC800\uC7A5</button><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
    <div class="dwrap"><div class="dpage"></div></div>
    <div class="dsel" hidden><button data-act="rotl">\u21BA</button><button data-act="rotr">\u21BB</button><button data-act="big">\uFF0B</button><button data-act="small">\uFF0D</button><button data-act="del">\u{1F5D1} \uB5BC\uAE30</button></div>
    <form class="dinput" hidden><input maxlength="40" placeholder="\uBCFC\uD39C\uC73C\uB85C \uC4F8 \uB9D0\uC744 \uC785\uB825\uD574\uC694" enterkeyhint="done"><button>\uC4F0\uAE30 \u270F\uFE0F</button></form>
    <div class="dtray"><div class="dtabs"></div><div class="dlist"></div></div>
    <input type="file" accept="image/*" class="dfile" hidden>
    <div class="dcrop" hidden><div class="dcard">
      <b>\u{1F4F7} \uC0AC\uC9C4 \uC790\uB974\uAE30</b><small>\uC0AC\uC9C4\uC744 \uB04C\uC5B4\uC11C \uC704\uCE58\uB97C \uB9DE\uCD94\uACE0, \uC544\uB798 \uB9C9\uB300\uB85C \uD06C\uAE30\uB97C \uC870\uC808\uD574\uC694</small>
      <div class="dshape"><button data-shape="1" class="on">\uC815\uC0AC\uAC01</button><button data-shape="0.75">\uC138\uB85C</button><button data-shape="1.333">\uAC00\uB85C</button><button data-shape="circle">\uB3D9\uADF8\uB77C\uBBF8</button></div>
      <div class="dview"><img alt="" draggable="false"></div>
      <input type="range" class="dzoom" min="1" max="4" step="0.01" value="1" aria-label="\uC0AC\uC9C4 \uD06C\uAE30">
      <div class="srow"><button data-crop="cancel">\uCDE8\uC18C</button><button class="go" data-crop="ok">\uBD99\uC774\uAE30 \u2728</button></div>
    </div></div>`;let n=t.querySelector(".dpage"),s=t.querySelector(".dsel"),r=t.querySelector(".dinput"),a=r.querySelector("input"),o=t.querySelector(".dtabs"),c=t.querySelector(".dlist"),l=t.querySelector(".dfile"),h=t.querySelector(".dcrop"),u=h.querySelector(".dview"),d=u.querySelector("img"),f=h.querySelector(".dzoom"),p="stk",_=null,m=null,g=null,v=()=>sr.pages[sr.page];function b(){t.querySelector(".pg").textContent=`${sr.page+1} / ${hh}`;let D=n.clientWidth;n.innerHTML=v().map((B,L)=>{let X=`left:${B.x*100}%;top:${B.y*100}%;transform:translate(-50%,-50%) rotate(${B.r}deg)`;if(B.t==="x")return`<div class="de dt ${m===L?"on":""}" data-i="${L}" style="${X};color:${B.color};font-size:${B.s*D}px;max-width:${.84*D}px">${B.text.replace(/[<&]/g,W=>W==="<"?"&lt;":"&amp;")}</div>`;let F=B.t==="i"?B.src:B.t==="s"?ui(...B.k.split(":").map((W,te)=>te?+W:W)):Jd(B.k);return`<img class="de${B.t==="i"?" dph":""} ${m===L?"on":""}" data-i="${L}" src="${F}" style="${X};width:${B.s*D}px" draggable="false" alt="">`}).join(""),s.hidden=m===null}function M(){let D=Object.keys(nn).filter(L=>nn[L].ink&&lh(L)),B=Object.keys(nn).filter(L=>nn[L].tape&&lh(L));if(!_&&D.length&&(_=D[0]),o.innerHTML=[["stk","\u{1F31F} \uC2A4\uD2F0\uCEE4"],["photo","\u{1F4F7} \uC0AC\uC9C4"],["pen","\u270F\uFE0F \uBCFC\uD39C"],["tape","\u{1F380} \uD14C\uC774\uD504"]].map(([L,X])=>`<button class="${p===L?"on":""}" data-tab="${L}">${X}</button>`).join(""),p==="stk"){let L=Object.entries(On.stickers).filter(([,X])=>X>0);c.innerHTML=L.length?L.map(([X,F])=>{let[W,te]=X.split(":");return`<button class="dst" data-stk="${X}"><img src="${ui(W,+te)}" alt=""><i>${F}</i></button>`}).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uC2A4\uD2F0\uCEE4\uB97C \uC0AC \uC624\uBA74 \uC5EC\uAE30\uC11C \uB5BC\uC5B4 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F31F}</p>"}else p==="photo"?c.innerHTML='<button class="dpen" data-pick="1">\u{1F5BC}\uFE0F \uB0B4 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uC0AC\uC9C4 \uACE0\uB974\uAE30</button><p class="tip">\uACE0\uB978 \uC0AC\uC9C4\uC740 \uC798\uB77C\uC11C \uD06C\uAE30\uB97C \uB9DE\uCD98 \uB4A4 \uBD99\uC5EC\uC694</p>':p==="pen"?c.innerHTML=D.length?D.map(L=>`<button class="dpen ${_===L?"on":""}" data-pen="${L}"><span style="background:${nn[L].ink}"></span>${nn[L].name}</button>`).join("")+'<p class="tip">\uB2E4\uC774\uC5B4\uB9AC \uBE48 \uACF3\uC744 \uD1A1 \uB204\uB974\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694</p>':"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uC190\uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694 \u270F\uFE0F</p>":c.innerHTML=B.length?B.map(L=>`<button class="dtape" data-tape="${nn[L].tape}"><img src="${Jd(nn[L].tape)}" alt=""></button>`).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504\uB97C \uC0AC \uC624\uBA74 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F380}</p>"}let E=D=>{v().push(D),m=v().length-1,ch()||(v().pop(),m=null,i("\uB2E4\uC774\uC5B4\uB9AC \uC800\uC7A5 \uACF5\uAC04\uC774 \uAF49 \uCC3C\uC5B4\uC694. \uC0AC\uC9C4\uC744 \uBA87 \uC7A5 \uB5BC\uACE0 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694")),b()},S=null,x="1",y={s:1,x:0,y:0,base:1},I=()=>{let D=Math.min(300,innerWidth-80),B=x==="circle"?1:+x;return[D,D/B]};function w(){let[D,B]=I();u.style.width=D+"px",u.style.height=B+"px",u.classList.toggle("circle",x==="circle"),y.base=Math.max(D/S.width,B/S.height),C(),N()}function C(){let[D,B]=I(),L=y.base*y.s,X=S.width*L,F=S.height*L;y.x=Math.min(0,Math.max(D-X,y.x)),y.y=Math.min(0,Math.max(B-F,y.y))}function N(){let D=y.base*y.s;d.style.width=S.width*D+"px",d.style.transform=`translate(${y.x}px,${y.y}px)`}l.addEventListener("change",async()=>{let D=l.files&&l.files[0];if(D)try{let B=URL.createObjectURL(D),L=new Image;L.src=B,await L.decode(),S=L,d.src=B,x="1",y={s:1,x:0,y:0,base:1},f.value=1,h.querySelectorAll("[data-shape]").forEach(te=>te.classList.toggle("on",te.dataset.shape===x)),h.hidden=!1,w();let[X,F]=I(),W=y.base;y.x=(X-S.width*W)/2,y.y=(F-S.height*W)/2,C(),N()}catch{i("\uC774 \uC0AC\uC9C4\uC740 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uB978 \uC0AC\uC9C4\uC744 \uACE8\uB77C \uC8FC\uC138\uC694")}}),f.addEventListener("input",()=>{let[D,B]=I(),L=y.base*y.s;y.s=+f.value;let X=y.base*y.s;y.x=D/2-(D/2-y.x)*X/L,y.y=B/2-(B/2-y.y)*X/L,C(),N()});let H=null;u.addEventListener("pointerdown",D=>{H={id:D.pointerId,x:D.clientX-y.x,y:D.clientY-y.y},u.setPointerCapture(D.pointerId),D.preventDefault()}),u.addEventListener("pointermove",D=>{!H||D.pointerId!==H.id||(y.x=D.clientX-H.x,y.y=D.clientY-H.y,C(),N())}),u.addEventListener("pointerup",()=>H=null),u.addEventListener("pointercancel",()=>H=null),u.addEventListener("wheel",D=>{D.preventDefault(),f.value=Math.min(4,Math.max(1,+f.value-D.deltaY*.002)),f.dispatchEvent(new Event("input"))},{passive:!1}),h.addEventListener("click",D=>{let B=D.target.closest("button");if(B){if(B.dataset.shape){x=B.dataset.shape,h.querySelectorAll("[data-shape]").forEach(L=>L.classList.toggle("on",L===B)),w();return}if(B.dataset.crop==="cancel"){h.hidden=!0;return}if(B.dataset.crop==="ok"){let[L,X]=I(),F=y.base*y.s,W=x==="circle",te=W?420:560,fe=Math.round(te*X/L),he=Math.round(te*.05),re=document.createElement("canvas");re.width=te+he*2,re.height=fe+he*2;let Se=re.getContext("2d");W?(Se.fillStyle="#fff",Se.beginPath(),Se.arc(re.width/2,re.height/2,re.width/2,0,7),Se.fill(),Se.save(),Se.beginPath(),Se.arc(re.width/2,re.height/2,te/2,0,7),Se.clip()):(Se.fillStyle="#fff",Se.fillRect(0,0,re.width,re.height)),Se.drawImage(S,-y.x/F,-y.y/F,L/F,X/F,he,he,te,fe),W&&Se.restore();let Ce=W?re.toDataURL("image/png"):re.toDataURL("image/jpeg",.84);h.hidden=!0,E({t:"i",src:Ce,x:.5,y:.45,s:x==="0.75"?.4:.48,r:Math.round((Math.random()-.5)*10)})}}}),o.addEventListener("click",D=>{let B=D.target.closest("[data-tab]");B&&(p=B.dataset.tab,r.hidden=!0,M())}),c.addEventListener("click",D=>{let B=D.target.closest("button");if(B)if(B.dataset.stk){let L=B.dataset.stk;if(!(On.stickers[L]>0))return;On.stickers[L]--,oh(),E({t:"s",k:L,x:.35+Math.random()*.3,y:.3+Math.random()*.4,s:.26,r:Math.round((Math.random()-.5)*24)}),M()}else B.dataset.pick?(l.value="",l.click()):B.dataset.pen?(_=B.dataset.pen,M()):B.dataset.tape&&E({t:"p",k:B.dataset.tape,x:.5,y:.2+Math.random()*.6,s:.55,r:Math.round((Math.random()-.5)*16)})});let P=null;n.addEventListener("pointerdown",D=>{let B=D.target.closest(".de"),L=n.getBoundingClientRect();if(B){m=+B.dataset.i;let X=v()[m];P={id:D.pointerId,ox:X.x-(D.clientX-L.left)/L.width,oy:X.y-(D.clientY-L.top)/L.height,node:B},n.setPointerCapture(D.pointerId),s.hidden=!1,n.querySelectorAll(".de.on").forEach(F=>F!==B&&F.classList.remove("on")),B.classList.add("on"),D.preventDefault();return}m=null,b(),p==="pen"&&_?(g={x:(D.clientX-L.left)/L.width,y:(D.clientY-L.top)/L.height},r.hidden=!1,a.value="",setTimeout(()=>a.focus(),30)):p==="pen"&&i("\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694")}),n.addEventListener("pointermove",D=>{if(!P||D.pointerId!==P.id)return;let B=n.getBoundingClientRect(),L=v()[m];L.x=Math.min(1,Math.max(0,(D.clientX-B.left)/B.width+P.ox)),L.y=Math.min(1,Math.max(0,(D.clientY-B.top)/B.height+P.oy)),P.node.style.left=L.x*100+"%",P.node.style.top=L.y*100+"%"});let G=D=>{P&&D.pointerId===P.id&&(P=null,ch())};n.addEventListener("pointerup",G),n.addEventListener("pointercancel",G),r.addEventListener("submit",D=>{D.preventDefault();let B=a.value.trim();r.hidden=!0,a.blur(),!(!B||!g)&&E({t:"x",text:B,color:nn[_].ink,x:g.x,y:g.y,s:.07,r:Math.round((Math.random()-.5)*8)})}),t.addEventListener("click",async D=>{let B=D.target.closest("[data-act]");if(!B)return;let L=B.dataset.act,X=m!==null?v()[m]:null;if(L==="close")return z();if(L==="prev"||L==="next")return sr.page=(sr.page+(L==="next"?1:hh-1))%hh,m=null,r.hidden=!0,ch(),b();if(L==="save")return U();X&&(L==="rotl"?X.r-=12:L==="rotr"?X.r+=12:L==="big"?X.s=Math.min(X.t==="x"?.2:.9,X.s*1.18):L==="small"?X.s=Math.max(X.t==="x"?.03:.08,X.s/1.18):L==="del"&&(v().splice(m,1),X.t==="s"&&(On.stickers[X.k]=(On.stickers[X.k]||0)+1,oh(),M()),m=null),ch(),b())});function V(D,B,L){D.fillStyle="#fffdf6",D.fillRect(0,0,B,L),D.fillStyle="#e9dcef";for(let X=60;X<L;X+=36)for(let F=90;F<B-20;F+=36)D.beginPath(),D.arc(F,X,2,0,7),D.fill();D.fillStyle="#f6e3ec",D.fillRect(0,0,54,L);for(let X=40;X<L;X+=60)D.fillStyle="#d8cde6",D.beginPath(),D.arc(27,X,9,0,7),D.fill()}async function U(){try{await document.fonts.load(`40px ${Zd}`)}catch{}let D=900,B=1200,L=document.createElement("canvas");L.width=D,L.height=B;let X=L.getContext("2d");V(X,D,B);for(let W of v()){if(X.save(),X.translate(W.x*D,W.y*B),X.rotate(W.r*Math.PI/180),W.t==="x"){X.font=`${W.s*D}px ${Zd}`,X.fillStyle=W.color,X.textAlign="center",X.textBaseline="middle";let te=[],fe="";for(let re of W.text.split(/(\s+)/))fe&&X.measureText(fe+re).width>D*.84?(te.push(fe.trim()),fe=re.trimStart()):fe+=re;te.push(fe.trim());let he=W.s*D*1.05;te.forEach((re,Se)=>X.fillText(re,0,(Se-(te.length-1)/2)*he))}else{let te=new Image;te.src=W.t==="i"?W.src:W.t==="s"?ui(...W.k.split(":").map((re,Se)=>Se?+re:re)):Jd(W.k),await te.decode().catch(()=>{});let fe=W.s*D,he=fe*(te.naturalHeight/te.naturalWidth||1);X.drawImage(te,-fe/2,-he/2,fe,he)}X.restore()}X.font=`28px ${Zd}`,X.fillStyle="#b9a6cf",X.textAlign="right",X.fillText(`\uC218\uC787\uD574\uD53C \uB2E4\uC774\uC5B4\uB9AC \xB7 ${ta()}`,D-30,B-30);let F=await ea(L,`suithappy-diary-${Date.now()}.jpg`);i(F==="downloaded"?"\u{1F4BE} \uB2E4\uC774\uC5B4\uB9AC\uB97C \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5\uD588\uC5B4\uC694":F==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}function q(){if(!lh("diary"))return i("\u{1F4D2} \uC18C\uD488\uC0F5\uC5D0\uC11C \uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9\uC744 \uC0AC \uC624\uBA74 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694");t.hidden=!1,m=null,r.hidden=!0,M(),requestAnimationFrame(b)}function z(){t.hidden=!0,r.hidden=!0}return addEventListener("resize",()=>{t.hidden||b()}),addEventListener("keydown",D=>{D.code==="Escape"&&!t.hidden&&r.hidden&&z()}),{open:q,close:z,get isOpen(){return!t.hidden}}}var c0={v:{label:"\u270C\uFE0F \uBE0C\uC774",arm:[-2.75,.32],tilt:.12},heart:{label:"\u{1FAF6} \uD558\uD2B8",arm:[-3.05,-.55],tilt:-.1},chin:{label:"\u{1F338} \uAF43\uBC1B\uCE68",arm:[-2,-.62],tilt:.2}};function h0({hero:i,mirrors:e,camera:t,player:n,showToast:s,renderNow:r}){let a=U=>document.getElementById(U),o=a("photo-btn"),c=a("photo-bar"),l=a("shot");c.innerHTML=`<div class="poses">${Object.entries(c0).map(([U,q])=>`<button data-pose="${U}">${q.label}</button>`).join("")}</div>
    <div class="prow"><button class="pclose" data-act="exit">\uB2EB\uAE30</button><button class="shutter" data-act="shoot" aria-label="\uCC0D\uAE30"></button><span class="ptip">\uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uCC30\uCE75!</span></div>`;let h=U=>new Zt({color:U,roughness:.4}),u=new it,d=new Ze(new Xt(.07,.13,.014),h("#9f8af0"));u.add(d);let f=new Ze(new ht(.006,.006,.004,10),h("#3b2f4a"));f.rotation.x=Math.PI/2,f.position.set(-.018,.048,.008),u.add(f),u.position.set(0,-.27,.035),u.rotation.x=Math.PI/2;let p=new it;p.position.set(.012,-.27,0);let _=h("#ffe3d0"),m=new it;p.add(m);for(let U of[-1,1]){let q=new Ze(new za(.011,.05,3,6),_);q.position.set(.012*U,-.04,0),q.rotation.z=.28*U,m.add(q)}let g=new it,v=new _s;v.moveTo(0,-.05),v.bezierCurveTo(-.07,0,-.04,.05,0,.025),v.bezierCurveTo(.04,.05,.07,0,0,-.05),g.add(new Ze(new Vs(v,{depth:.015,bevelEnabled:!1}),h("#ff6fa5"))),g.position.set(0,1.38,.05),g.scale.setScalar(1.8);let b=new it;for(let U=0;U<5;U++){let q=new Ze(new Yt(.03,8,6),h(U%2?"#ffd1e3":"#fff3b0"));q.position.set(Math.cos(U*1.256)*.05,0,Math.sin(U*1.256)*.05),b.add(q)}b.position.set(0,.92,.2);let M=!1,E=null,S="v",x=!1,y=0,I=0,w=new O;function C(){for(let U of e){let q=U.c.x-n.x,z=n.z-U.c.z;if(q>.6&&q<2.6&&Math.abs(z)<.85)return U}return null}function N(U){S=U,c.querySelectorAll("[data-pose]").forEach(q=>q.classList.toggle("on",q.dataset.pose===U)),m.visible=U==="v",g.visible=U==="heart",b.visible=U==="chin"}function H(){if(E=C(),!!E){M=!0,n.face=Math.PI/2,I=t.fov,t.fov=64,t.updateProjectionMatrix();try{document.fonts.load('40px "Gamja Flower"')}catch{}i.arms[0].add(u),i.arms[1].add(p),i.root.add(g),i.root.add(b),N(S),c.hidden=!1,o.hidden=!0,document.body.classList.add("photo"),s("\u{1F4F8} \uAC70\uC6B8\uC0F7 \uBAA8\uB4DC! \uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uB3D9\uADF8\uB780 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC694")}}function P(){M=!1,c.hidden=!0,document.body.classList.remove("photo"),I&&(t.fov=I,t.updateProjectionMatrix()),i.arms[0].remove(u),i.arms[1].remove(p),i.root.remove(g),i.root.remove(b),i.head.rotation.z=0}c.addEventListener("click",U=>{let q=U.target.closest("button");q&&(q.dataset.pose?N(q.dataset.pose):q.dataset.act==="exit"?P():q.dataset.act==="shoot"&&(y=1,V.applyPose(performance.now()/1e3),i.root.updateMatrixWorld(!0),V.camera(),x=!0,V.afterRender(r())))}),o.addEventListener("click",U=>{H(),U.currentTarget.blur()});let G=null;l.addEventListener("click",async U=>{let q=U.target.closest("button");if(q&&(q.dataset.act==="again"&&(l.hidden=!0),q.dataset.act==="save"&&G)){let z=await ea(G,`suithappy-mirror-${Date.now()}.jpg`);s(z==="downloaded"?"\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":z==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}}),addEventListener("keydown",U=>{U.code==="Escape"&&M&&(l.hidden?P():l.hidden=!0)});let V={get active(){return M},update(U){o.hidden=M||!!U||!C()},applyPose(U){if(!M)return;let q=c0[S];i.arms[0].rotation.x=-1.95,i.arms[0].rotation.z=-.55,i.arms[1].rotation.x=q.arm[0],i.arms[1].rotation.z=q.arm[1],i.head.rotation.z=q.tilt,i.head.rotation.y=0,g.rotation.y=Math.sin(U*2)*.3,g.position.y=1.38+Math.sin(U*3)*.02},camera(){if(!M)return!1;let U=n.face,q=Math.sin(U),z=Math.cos(U),D=z,B=-q;return t.position.set(n.x+q*.42-D*.1,.78,n.z+z*.42-B*.1),t.lookAt(E.c.x,.72,n.z*.7+E.c.z*.3),!0},afterRender(U){let q=document.getElementById("flash");if(y>0&&(y=Math.max(0,y-.08),q.style.opacity=y),!x)return;x=!1;let z=900,D=1200,B=document.createElement("canvas");B.width=z,B.height=D;let L=B.getContext("2d"),X=U.width,F=U.height,W=3/4,te=X,fe=X/W;fe>F&&(fe=F,te=F*W),L.fillStyle="#fff",L.fillRect(0,0,z,D),L.drawImage(U,(X-te)/2,(F-fe)/2,te,fe,30,30,z-60,D-150),L.fillStyle="#ff8fb7",L.font='700 40px "Gamja Flower", cursive',L.textAlign="left",L.fillText("Soo it Happy \u{1F353} \uC218\uC9D1\uC218\uC9D1",40,D-62),L.fillStyle="#b9a6cf",L.font='30px "Gamja Flower", cursive',L.textAlign="right",L.fillText(ta(),z-40,D-62),G=B,l.innerHTML=`<div class="shotcard"><img src="${B.toDataURL("image/jpeg",.85)}" alt="\uCC0D\uC740 \uAC70\uC6B8\uC0F7"><div class="srow"><button data-act="again">\uB2E4\uC2DC \uCC0D\uAE30</button><button class="go" data-act="save">\u{1F4F2} \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5</button></div></div>`,l.hidden=!1}};return V}var Do=(i,e)=>i+Math.random()*(e-i),u0=i=>i[Math.floor(Math.random()*i.length)],dh=(i,e,t)=>Math.max(e,Math.min(t,i)),Qd=(i,e,t)=>i+(e-i)*t,uh=(i,e,t)=>{let n=parseInt(i.slice(1),16),s=parseInt(e.slice(1),16),r=a=>Math.round(Qd(n>>a&255,s>>a&255,dh(t,0,1)));return`rgb(${r(16)},${r(8)},${r(0)})`},rr=null,fh=()=>{if(!rr)try{rr=new(window.AudioContext||window.webkitAudioContext)}catch{}return rr&&rr.state==="suspended"&&rr.resume(),rr};function Ai(i,e=.12,t="triangle",n=.12,s=0){let r=fh();if(!r)return;let a=r.currentTime+s,o=r.createOscillator(),c=r.createGain();o.type=t,o.frequency.setValueAtTime(i,a),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(n,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(c).connect(r.destination),o.start(a),o.stop(a+e+.02)}function TS(i=.05,e=.08,t=0,n=6e3){let s=fh();if(!s)return;let r=s.currentTime+t,a=Math.floor(s.sampleRate*i),o=s.createBuffer(1,a,s.sampleRate),c=o.getChannelData(0);for(let d=0;d<a;d++)c[d]=(Math.random()*2-1)*(1-d/a);let l=s.createBufferSource(),h=s.createBiquadFilter(),u=s.createGain();h.type="highpass",h.frequency.value=n,u.gain.value=e,l.buffer=o,l.connect(h).connect(u).connect(s.destination),l.start(r)}var En={good:()=>{Ai(880,.1),Ai(1320,.12,"triangle",.1,.06)},bad:()=>Ai(180,.2,"sawtooth",.08),pop:()=>Ai(660,.08,"sine",.12),win:()=>[523,659,784,1047].forEach((i,e)=>Ai(i,.18,"triangle",.12,e*.09))};function sn(i,e,t,n,s,r){i.beginPath(),i.roundRect(e,t,n,s,r)}function Ri(i,e,t,n,s){i.font=`${s}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,t,n)}function gn(i,e,t,n,s=16,r="#4a3f66",a=800,o="center"){i.font=`${a} ${s}px "Malgun Gothic","Apple SD Gothic Neo",sans-serif`,i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",i.fillText(e,t,n)}function No(i,e,t){for(let n of i)n.t+=t,n.y-=40*t,e.globalAlpha=dh(1-n.t/.9,0,1),gn(e,n.s,n.x,n.y,n.size||18,n.c||"#e0457b",900);e.globalAlpha=1;for(let n=i.length-1;n>=0;n--)i[n].t>.9&&i.splice(n,1)}function ph(i,e,t){sn(i,10,10,110,34,17),i.fillStyle="#ffffffcc",i.fill(),gn(i,`\u23F1 ${Math.max(0,Math.ceil(e))}\uCD08`,65,27,15),sn(i,220,10,130,34,17),i.fillStyle="#ffffffcc",i.fill(),gn(i,`\uC810\uC218 ${t}`,285,27,15,"#e0457b")}function ES(){let i=[],e=20,t=0,n=0,s,r=0,a=()=>({side:0,done:[0,0],rate:Do(.3,.42)+r*.05,flips:0,slide:0,squash:0,grades:[]});s=a();let o=l=>l<.55?uh("#f6f1e7","#f2d6a2",l/.55):l<.85?uh("#f2d6a2","#e39b4f",(l-.55)/.3):l<1.05?uh("#e39b4f","#a8582b",(l-.85)/.2):uh("#a8582b","#2e221d",(l-1.05)/.35);function c(){if(s.slide)return;let l=s.done[s.side],h;l<.55?(h=["\uB35C \uC775\uC5C8\uC5B4\uC694 \u{1F62F}",10,"#8a7bb8"],En.bad()):l<.85?(h=["PERFECT \uB178\uB987\uB178\uB987!",100,"#e0457b"],En.good()):l<1.05?(h=["\uC88B\uC544\uC694 \u{1F44D}",60,"#e39b4f"],En.pop()):(h=["\uC557 \uD0D4\uC5B4\uC694\u2026 \u{1F525}",-20,"#5a4a44"],En.bad()),s.grades.push(h[1]),t=Math.max(0,t+h[1]),i.push({s:h[0],x:360/2,y:250,t:0,c:h[2]}),s.flips++,s.squash=1,s.flips>=2?(s.slide=.001,n++,r++,s.grades.every(u=>u===100)&&(t+=100,i.push({s:"\uC644\uBCBD\uD55C \uB5A1\uAF2C\uCE58! +100",x:360/2,y:300,t:0,size:20}),En.win())):s.side=1}return{title:"\u{1F361} \uB5A1\uAF2C\uCE58 \uAD7D\uAE30",desc:"\uAC8C\uC774\uC9C0\uAC00 <b>\uCD08\uB85D(\uB178\uB987\uB178\uB987)</b>\uC77C \uB54C \uB4A4\uC9D1\uC5B4\uC694!<br>\uB108\uBB34 \uBE68\uB9AC \uB4A4\uC9D1\uC73C\uBA74 \uB35C \uC775\uACE0, \uB2A6\uC73C\uBA74 \uD0C0 \uBC84\uB824\uC694. 20\uCD08 \uB3D9\uC548 \uB9CE\uC774 \uAD6C\uC6CC \uBCF4\uC138\uC694.",buttons:[{label:"\u{1F504} \uB4A4\uC9D1\uAE30!",act:c}],key(l){(l==="Space"||l==="Enter")&&c()},tap(){c()},update(l){return e-=l,s.slide?(s.slide+=l*1.6,s.slide>1&&(s=a())):s.done[s.side]=Math.min(1.5,s.done[s.side]+s.rate*l),s.squash=Math.max(0,s.squash-l*4),e<=0?{score:t,msg:`\uB5A1\uAF2C\uCE58 ${n}\uAC1C \uC644\uC131!`}:null},draw(l,h,u){let d=l.createLinearGradient(0,0,0,560);d.addColorStop(0,"#fff3e6"),d.addColorStop(1,"#ffe1d2"),l.fillStyle=d,l.fillRect(0,0,360,560),ph(l,e,t);let f=s.done[s.side],p=40,_=70,m=280;sn(l,p,_,m,18,9),l.fillStyle="#f1e6ee",l.fill();let g=(E,S,x)=>{l.fillStyle=x,l.fillRect(p+m*E/1.4,_,m*(S-E)/1.4,18)};g(.55,.85,"#9be08a"),g(.85,1.05,"#ffd27a"),g(1.05,1.4,"#d9a0a0"),l.fillStyle="#4a3f66",l.fillRect(p+m*Math.min(f,1.4)/1.4-2,_-6,4,30),gn(l,s.slide?"\uC644\uC131!":s.side?"\uB4B7\uBA74 \uAD7D\uB294 \uC911":"\uC55E\uBA74 \uAD7D\uB294 \uC911",360/2,108,14,"#7a6c99"),sn(l,30,300,300,150,18),l.fillStyle="#4b3a3f",l.fill();for(let E=0;E<9;E++)l.fillStyle=`rgba(255,${120+40*Math.sin(u*3+E)},60,0.35)`,l.beginPath(),l.arc(55+E*32,420,12,0,7),l.fill();l.strokeStyle="#9b8f96",l.lineWidth=4;for(let E=0;E<7;E++)l.beginPath(),l.moveTo(40,320+E*18),l.lineTo(320,320+E*18),l.stroke();let v=s.slide?Qd(360/2,560,s.slide):360/2,b=330-Math.sin(s.squash*Math.PI)*30;l.strokeStyle="#d9b07a",l.lineWidth=8,l.lineCap="round",l.beginPath(),l.moveTo(v-150,b+20),l.lineTo(v+150,b+20),l.stroke();let M=s.slide?Math.max(s.done[0],s.done[1]):f;for(let E=0;E<4;E++){let S=v-105+E*70,x=1-Math.sin(s.squash*Math.PI)*.3;if(sn(l,S-30,b+20-28*x,60,56*x,16),l.fillStyle=o(M),l.fill(),s.slide){l.strokeStyle="#d33a2c",l.lineWidth=6,l.beginPath();for(let y=0;y<5;y++)l.lineTo(S-24+y*12,b+8+y%2*22);l.stroke()}l.fillStyle="#ffffff55",sn(l,S-22,b-2,16,8,4),l.fill()}if(!s.slide&&f>.3)for(let E=0;E<4;E++)l.globalAlpha=.35,l.fillStyle="#fff",l.beginPath(),l.arc(v-100+E*66+Math.sin(u*5+E)*6,b-40-(u*40+E*20)%60,5,0,7),l.fill(),l.globalAlpha=1;gn(l,"\uD654\uBA74\uC774\uB098 \uBC84\uD2BC\uC744 \uB20C\uB7EC \uB4A4\uC9D1\uC5B4\uC694",360/2,500,13,"#9a8cc4",700),No(i,l,h)}}}function wS(){let i=[["\u{1F353}",56,44],["\u{1F34C}",78,40],["\u{1F352}",50,46],["\u{1F95D}",60,44],["\u{1F366}",62,56],["\u{1F351}",58,48],["\u{1F9C7}",76,40],["\u{1F36E}",66,50]],e=[],t=45,n=0,s=0,r=null,a=0,o={x:360/2,y:470,w:120,h:26,e:null},c=[o],l=null,h=null,u=()=>{let[p,_,m]=u0(i);l={e:p,w:_,h:m,ph:Do(0,6),sp:1.6+c.length*.07}};u();let d=()=>c[c.length-1];function f(){if(h||r||!l)return;let p=360/2+Math.sin(l.ph)*120;h={...l,x:p,y:120+s,vy:0},l=null,En.pop()}return{title:"\u{1F368} \uD30C\uB974\uD398 \uD0D1 \uC313\uAE30",desc:"\uC88C\uC6B0\uB85C \uD754\uB4E4\uB9AC\uB294 \uC7AC\uB8CC\uB97C <b>\uD0ED</b>\uD574\uC11C \uB5A8\uC5B4\uB728\uB824\uC694.<br>\uAC00\uC6B4\uB370\uC5D0 \uC798 \uB9DE\uCDB0 \uB192\uC774 \uC313\uC744\uC218\uB85D \uC810\uC218! \uC911\uC2EC\uC744 \uBC97\uC5B4\uB098\uBA74 \uC640\uB974\uB974\u2026 (45\uCD08)",buttons:[{label:"\u2B07\uFE0F \uB5A8\uC5B4\uB728\uB9AC\uAE30",act:f}],key(p){(p==="Space"||p==="Enter")&&f()},tap:f,update(p){if(a+=p,t-=p,l&&(l.ph+=l.sp*p),h){h.vy+=1600*p,h.y+=h.vy*p;let m=d(),g=m.y-m.h/2-h.h/2;if(h.y>=g){let v=h.x-m.x,b=(m.w+h.w)/2*.55;if(Math.abs(v)>b)r={t:0,x:h.x,y:g,dir:Math.sign(v)},En.bad(),e.push({s:"\uC640\uB974\uB974\u2026 \u{1F635}",x:360/2,y:260,t:0,size:22});else{let M=Math.abs(v)<6,E={e:h.e,w:h.w,h:h.h,x:M?m.x:h.x,y:g,wob:1};c.push(E),n+=M?30:10,e.push({s:M?"PERFECT! +30":"+10",x:E.x,y:g-30-s,t:0,c:M?"#e0457b":"#7a6c99"}),M?En.good():En.pop();let S=c.slice(1),x=S.reduce((y,I)=>y+I.x,0)/S.length;Math.abs(x-o.x)>58?(r={t:0,x,y:g,dir:Math.sign(x-o.x)},En.bad(),e.push({s:"\uAE30\uC6B8\uC5B4\uC11C \uC640\uB974\uB974\u2026 \u{1F635}",x:360/2,y:260,t:0,size:20})):u()}h=null}}let _=Math.max(0,470-d().y-250);s=Qd(s,_,Math.min(1,p*4));for(let m of c)m.wob&&(m.wob=Math.max(0,m.wob-p*3));return r&&(r.t+=p,r.t>1.4)?{score:n,msg:`${c.length-1}\uCE35\uAE4C\uC9C0 \uC313\uC558\uC5B4\uC694!`}:t<=0?{score:n,msg:`${c.length-1}\uCE35 \uD30C\uB974\uD398 \uC644\uC131! \u{1F368}`}:null},draw(p,_,m){let g=p.createLinearGradient(0,0,0,560);g.addColorStop(0,"#e8f6ff"),g.addColorStop(1,"#ffe8f1"),p.fillStyle=g,p.fillRect(0,0,360,560),p.fillStyle="#ffffff66";for(let v=0;v<12;v++)p.beginPath(),p.arc(v*73%360,(v*131+s*.3)%560,18,0,7),p.fill();p.save(),p.translate(0,s),p.fillStyle="#ffffffb0",p.strokeStyle="#c9e6f2",p.lineWidth=3,p.beginPath(),p.moveTo(o.x-70,470),p.lineTo(o.x+70,470),p.lineTo(o.x+40,540),p.lineTo(o.x-40,540),p.closePath(),p.fill(),p.stroke(),sn(p,o.x-12,540,24,30,6),p.fill(),p.stroke(),sn(p,o.x-60,456,120,26,13),p.fillStyle="#fff7f0",p.fill();for(let v=1;v<c.length;v++){let b=c[v],M=r&&v===c.length-1&&r.t>0;p.save(),p.translate(b.x+(M?r.dir*r.t*140:0),b.y+(M?r.t*r.t*300:0)),p.rotate((b.wob?Math.sin(b.wob*20)*.08*b.wob:0)+(M?r.dir*r.t*3:0)+(r&&!M?r.dir*r.t*.25*(v/c.length):0)),Ri(p,b.e,0,0,b.h*1.15),p.restore()}if(h&&Ri(p,h.e,h.x,h.y,h.h*1.15),r&&!h&&r.t,p.restore(),l){let v=180+Math.sin(l.ph)*120;p.strokeStyle="#c6a6f0",p.lineWidth=2,p.beginPath(),p.moveTo(360/2,60),p.lineTo(v,104),p.stroke(),Ri(p,l.e,v,120,l.h*1.15)}ph(p,t,n),gn(p,`${c.length-1}\uCE35`,360/2,75,16,"#e0457b"),No(e,p,_)}}}function AS(){let i=[["\u{1F9CA}","\uC5BC\uC74C"],["\u{1F95B}","\uC6B0\uC720"],["\u{1F353}","\uB538\uAE30"],["\u{1F36B}","\uCD08\uCF54"],["\u{1FAE7}","\uD0C4\uC0B0"],["\u{1F366}","\uC544\uC774\uC2A4\uD06C\uB9BC"],["\u{1F352}","\uCCB4\uB9AC"],["\u{1F375}","\uB179\uCC28"],["\u{1F34C}","\uBC14\uB098\uB098"],["\u2615","\uCEE4\uD53C"]],e=["\uD06C\uB9BC\uC18C\uB2E4","\uB538\uAE30\uC6B0\uC720","\uCD08\uCF54\uB77C\uB5BC","\uB179\uCC28\uB77C\uB5BC","\uBC14\uB098\uB098\uC6B0\uC720","\uBA54\uB860\uC18C\uB2E4","\uCCB4\uB9AC\uD30C\uB974\uD398","\uC544\uC778\uC288\uD398\uB108"],t=[],n=60,s=0,r=0,a=null,o=0,c="show",l=0,h=[],u=0,d=()=>{let p=dh(3+Math.floor(o/2),3,6);a={name:u0(e),seq:Array.from({length:p},()=>Math.floor(Math.random()*i.length))},c="show",l=Math.max(1.8,3-o*.1),h=[]};d();function f(p){if(c!=="make")return;h.push(p),En.pop();let _=h.length-1;if(a.seq[_]!==p){r=0,c="result",u=-1,En.bad(),t.push({s:"\uC557, \uC21C\uC11C\uAC00 \uB2EC\uB77C\uC694! \u{1F623}",x:360/2,y:250,t:0,c:"#8a7bb8"}),setTimeout(d,900);return}if(h.length===a.seq.length){r++,o++;let m=Math.round(a.seq.length*20*(1+(r-1)*.25));s+=m,c="result",u=1,En.good(),t.push({s:r>1?`\uCF64\uBCF4 ${r}! +${m}`:`\uC644\uBCBD\uD574\uC694! +${m}`,x:360/2,y:250,t:0,size:20}),setTimeout(d,700)}}return{title:"\u{1F92B} \uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30",desc:"\uC190\uB2D8 \uC8FC\uBB38\uC774 <b>3\uCD08</b> \uB3D9\uC548 \uBCF4\uC5EC\uC694. \uC0AC\uB77C\uC9C0\uBA74<br>\uC7AC\uB8CC\uB97C <b>\uC21C\uC11C\uB300\uB85C</b> \uACE8\uB77C \uC644\uC131\uD574\uC694. \uC5F0\uC18D \uC815\uB2F5\uC774\uBA74 \uCF64\uBCF4! (60\uCD08)",buttons:i.map(([p,_],m)=>({label:`${p}<small>${_}</small>`,act:()=>f(m),cls:"ing"})),key(p){let _=parseInt(p.replace("Digit",""),10);isNaN(_)||f((_+9)%10)},update(p){return n-=p,c==="show"&&(l-=p,l<=0&&(c="make")),u*=.9,n<=0?{score:s,msg:`\uC8FC\uBB38 ${o}\uAC1C \uC131\uACF5!`}:null},draw(p,_){let m=p.createLinearGradient(0,0,0,560);m.addColorStop(0,"#fffbe8"),m.addColorStop(1,"#f1fae9"),p.fillStyle=m,p.fillRect(0,0,360,560),ph(p,n,s),Ri(p,"\u{1F469}\u200D\u{1F4BC}",300,90,40),gn(p,c==="show"?"\uC0AC\uC7A5\uB2D8\uC774 \uBCF4\uAE30 \uC804\uC5D0 \uBE68\uB9AC \uC678\uC6CC\uC694!":"\uC27F\u2026 \uBAB0\uB798 \uB9CC\uB4DC\uB294 \uC911 \u{1F92B}",360/2-20,90,13,"#7a6c99",700),sn(p,30,130,300,190,20),p.fillStyle=u>.1?"#e3f8dc":u<-.1?"#ffe3ea":"#ffffff",p.fill(),p.strokeStyle="#f3d5e2",p.lineWidth=3,p.stroke(),gn(p,`\u{1F9FE} \uC190\uB2D8 \uC8FC\uBB38: ${a.name}`,360/2,160,18);let g=a.seq.length,v=Math.min(52,260/g);a.seq.forEach((b,M)=>{let E=180+(M-(g-1)/2)*v;if(c==="show")Ri(p,i[b][0],E,225,34);else{let S=h[M];S!==void 0?Ri(p,i[S][0],E,225,34):(sn(p,E-18,207,36,36,10),p.fillStyle="#f1e9ff",p.fill(),gn(p,"?",E,226,18,"#c6a6f0"))}M<g-1&&gn(p,"\u2192",E+v/2,226,14,"#c6a6f0")}),c==="show"?(sn(p,60,280,240,10,5),p.fillStyle="#f1e6ee",p.fill(),sn(p,60,280,240*dh(l/3,0,1),10,5),p.fillStyle="#f48fb9",p.fill()):gn(p,"\uC544\uB798 \uC7AC\uB8CC\uB97C \uC21C\uC11C\uB300\uB85C \uB20C\uB7EC\uC694",360/2,288,13,"#9a8cc4",700),r>1&&gn(p,`\u{1F525} \uCF64\uBCF4 ${r}`,360/2,350,18,"#e0457b"),No(t,p,_)}}}function RS(){let i=[],e=40,t=0,n=0,s=0,r=0,a=0,o=3,c=0,l=Do(.8,1.6),h=0,u=0,d=0,f=["\u{1F964}","\u2615","\u{1F9CB}"],p=_=>()=>{r=_};return{title:"\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14",desc:"\uC7C1\uBC18\uC774 \uAE30\uC6B8\uBA74 <b>\u25C0 \u25B6</b>\uB85C \uBC18\uB300\uCABD\uC744 \uB20C\uB7EC \uADE0\uD615\uC744 \uC7A1\uC544\uC694.<br>\uB108\uBB34 \uAE30\uC6B8\uBA74 \uCEF5\uC774 \uB5A8\uC5B4\uC838\uC694! \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC3DF\uC9C0 \uC54A\uACE0 \uC62E\uAE30\uAE30 (40\uCD08)",buttons:[{label:"\u25C0 \uC67C\uCABD",down:p(-1),up:p(0)},{label:"\uC624\uB978\uCABD \u25B6",down:p(1),up:p(0)}],key(_,m){(_==="ArrowLeft"||_==="KeyA")&&(r=m?-1:r===-1?0:r),(_==="ArrowRight"||_==="KeyD")&&(r=m?1:r===1?0:r)},pointer(_,m){r=m?_<360/2?-1:1:0},keyUp:!0,update(_){if(e-=_,h+=_,d-=_,l-=_,l<=0&&(s+=Do(-1.6,1.6)*(1+u*.15),l=Do(.5,1.3)-u*.04),s+=(-n*1.2+r*2.6+Math.sin(h*9)*.25)*_*3,s*=Math.pow(.35,_),n+=s*_,Math.abs(n)>.48&&d<=0&&(o--,d=.6,s*=-.4,n*=.6,En.bad(),i.push({s:"\uC557 \uC3DF\uC558\uC5B4\uC694! \u{1F4A6}",x:360/2,y:210,t:0,c:"#8a7bb8"}),o<=0&&(a=0,o=3,n=0,s=0,i.push({s:"\uB2E4\uC2DC \uCE74\uC6B4\uD130\uC5D0\uC11C \uBC1B\uC544 \uC640\uC694",x:360/2,y:240,t:0,c:"#7a6c99",size:15}))),a+=_*(.16+u*.01),a>=1){let m=o*100;t+=m,c+=o,En.win(),i.push({s:`\uC11C\uBE59 \uC644\uB8CC! ${o}\uC794 +${m}`,x:360/2,y:200,t:0,size:20}),a=0,o=3,u++,n*=.3}return e<=0?{score:t,msg:`\uC74C\uB8CC ${c}\uC794 \uBC30\uB2EC \uC131\uACF5!`}:null},draw(_,m,g){_.fillStyle="#e6f6dd",_.fillRect(0,0,360,560),_.fillStyle="#f6dce6",_.fillRect(0,400,360,160);for(let b=0;b<8;b++)_.fillStyle="#ffffff88",_.fillRect(((b*70-a*400)%430+360+70)%430-35,400,34,160);ph(_,e,t),sn(_,40,60,280,14,7),_.fillStyle="#ffffffaa",_.fill(),sn(_,40,60,280*a,14,7),_.fillStyle="#9be08a",_.fill(),Ri(_,"\u{1F37D}\uFE0F",326,67,22),Ri(_,"\u{1F9D1}\u200D\u{1F373}",30,67,20),_.strokeStyle="#f1e6ee",_.lineWidth=10,_.beginPath(),_.arc(360/2,170,60,Math.PI*1.1,Math.PI*1.9),_.stroke(),_.strokeStyle="#9be08a",_.beginPath(),_.arc(360/2,170,60,Math.PI*1.5-.3,Math.PI*1.5+.3),_.stroke(),_.strokeStyle="#e0457b",_.lineWidth=4,_.beginPath(),_.moveTo(360/2,170),_.lineTo(360/2+Math.sin(n*1.6)*60,170-Math.cos(n*1.6)*60),_.stroke();let v=330+Math.abs(Math.sin(h*9))*6;_.fillStyle="#ffe6dc",_.beginPath(),_.arc(360/2,v-40,34,0,7),_.fill(),_.fillStyle="#4b3634",_.beginPath(),_.arc(360/2,v-50,34,Math.PI,0),_.fill(),_.fillStyle="#2b2125",_.beginPath(),_.arc(360/2-11,v-38,4,0,7),_.arc(360/2+11,v-38,4,0,7),_.fill(),sn(_,360/2-26,v-6,52,64,16),_.fillStyle="#bfe2f1",_.fill(),_.save(),_.translate(360/2,v-90),_.rotate(n),sn(_,-80,-6,160,12,6),_.fillStyle="#ffc2da",_.fill();for(let b=0;b<o;b++)Ri(_,f[b],-46+b*46,-28,34);_.restore(),gn(_,"\u25C0 \u25B6 \uB97C \uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uADF8\uCABD\uC73C\uB85C \uC7C1\uBC18\uC744 \uB4E4\uC5B4 \uC62C\uB824\uC694",360/2,520,12,"#9a8cc4",700),No(i,_,m)}}}function CS(){let e=.5357142857142857,t=30,n=470,s=1.5,r=[360/2-100,360/2,360/2+100],a=["\u{1F353}","\u{1F351}","\u{1F347}"],o=[[523,659,784],[587,698,880],[659,784,988]],c=[];for(let S=4;S*e*.5<t-1.5;S++){let x=S*e*.5;(S%2===0?Math.random()<.85:Math.random()<.35)&&c.push({t:x,lane:Math.floor(Math.random()*3),hit:0})}let l=[],h=-1.2,u=0,d=0,f=0,p=0,_=0,m=0,g=!1,v=0,b=0;function M(S){E(S);let x=null,y=1;for(let I of c)if(!I.hit&&I.lane===S){let w=Math.abs(I.t-h);w<y&&(y=w,x=I)}!x||y>.14||(x.hit=y<=.06?2:1,d++,f=Math.max(f,d),x.hit===2?(p++,u+=100+d*5,l.push({s:d>2?`PERFECT \xD7${d}`:"PERFECT",x:r[S],y:n-40,t:0})):(_++,u+=50,l.push({s:"GOOD",x:r[S],y:n-40,t:0,c:"#e39b4f"})))}let E=S=>Ai(o[S][1]*2,.08,"square",.05);return{title:"\u{1F3B5} \uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784",desc:"\uACFC\uC77C \uC18C\uC2A4\uAC00 \uC120\uC5D0 \uB2FF\uC744 \uB54C \uADF8 \uC904\uC744 \uD0ED!<br><b>PERFECT</b>\uB97C \uC774\uC5B4 \uAC00\uBA74 \uB5A1\uAF2C\uCE58\uC5D0 \uC608\uC05C \uC9C0\uADF8\uC7AC\uADF8 \uC18C\uC2A4\uAC00 \uADF8\uB824\uC838\uC694 (30\uCD08, \uC18C\uB9AC \uCF1C \uC8FC\uC138\uC694 \u{1F50A})",buttons:[0,1,2].map(S=>({label:a[S],down:()=>M(S),cls:"lane"})),key(S,x){if(!x)return;let y={ArrowLeft:0,KeyA:0,KeyJ:0,ArrowDown:1,KeyS:1,KeyK:1,ArrowRight:2,KeyD:2,KeyL:2}[S];y!==void 0&&M(y)},pointer(S,x){x&&M(S<360/3?0:S<360*2/3?1:2)},update(S){if(!g){g=!0;let y=fh();b=y?y.currentTime+1.2:0}let x=rr;for(h=x&&b?x.currentTime-b:h+S;v*e*.5<h+.2&&v*e*.5<t;){let y=v*e*.5-h;y>-.05&&(v%2===0?Ai(90,.12,"sine",.25,Math.max(0,y)):TS(.04,.05,Math.max(0,y))),v++}for(let y of c)!y.hit&&h-y.t>.15&&(y.hit=-1,m++,d=0,l.push({s:"MISS",x:r[y.lane],y:n-30,t:0,c:"#9a8cc4",size:15}));return h>=t?{score:u,msg:`PERFECT ${p} \xB7 GOOD ${_} \xB7 MISS ${m} \xB7 \uCD5C\uB300 \uCF64\uBCF4 ${f}`}:null},draw(S,x){let y=S.createLinearGradient(0,0,0,560);y.addColorStop(0,"#2d2250"),y.addColorStop(1,"#6b4a8a"),S.fillStyle=y,S.fillRect(0,0,360,560),r.forEach((w,C)=>{S.fillStyle="#ffffff12",S.fillRect(w-44,0,88,560)}),S.strokeStyle="#ffd27a",S.lineWidth=4,S.beginPath(),S.moveTo(20,n),S.lineTo(340,n),S.stroke(),r.forEach(w=>{S.strokeStyle="#ffffff80",S.lineWidth=3,S.beginPath(),S.arc(w,n,30,0,7),S.stroke()});for(let w of c){if(w.hit)continue;let C=n-(w.t-h)/s*n;C<-40||C>600||Ri(S,a[w.lane],r[w.lane],C,40)}S.strokeStyle="#d9b07a",S.lineWidth=6,S.beginPath(),S.moveTo(40,528),S.lineTo(320,528),S.stroke();for(let w=0;w<4;w++)sn(S,62+w*62,508,54,40,12),S.fillStyle="#f2c98d",S.fill();let I=Math.min(1,p/30);S.strokeStyle="#d33a2c",S.lineWidth=5,S.beginPath();for(let w=0;w<=40*I;w++)S.lineTo(66+w*6,514+w%2*26);S.stroke(),sn(S,10,10,110,34,17),S.fillStyle="#ffffffcc",S.fill(),gn(S,`\u23F1 ${Math.max(0,Math.ceil(t-h))}\uCD08`,65,27,15),sn(S,220,10,130,34,17),S.fillStyle="#ffffffcc",S.fill(),gn(S,`\uC810\uC218 ${u}`,285,27,15,"#e0457b"),d>1&&gn(S,`${d} COMBO`,360/2,80,26,"#ffd27a",900),h<0&&gn(S,h<-.6?"\uC900\uBE44~":"\uC2DC\uC791!",360/2,260,34,"#fff",900),No(l,S,x)}}}var PS={grill:ES,parfait:wS,order:AS,serving:RS,rhythm:CS},ef=[["grill","\u{1F361}","\uB5A1\uAF2C\uCE58 \uAD7D\uAE30","\uD0C0\uC774\uBC0D \uB9DE\uCDB0 \uB4A4\uC9D1\uAE30"],["parfait","\u{1F368}","\uD30C\uB974\uD398 \uD0D1 \uC313\uAE30","\uB192\uC774\uB192\uC774 \uC313\uAE30"],["order","\u{1F92B}","\uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30","\uAE30\uC5B5\uB825 \uAC8C\uC784"],["serving","\u2615","\uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14","\uADE0\uD615 \uC7A1\uAE30"],["rhythm","\u{1F3B5}","\uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784","\uBC15\uC790 \uB9DE\uCD94\uAE30"]];function d0({showToast:i}){let t=(m=>document.getElementById(m))("mini"),n=null,s=null,r=0,a=0,o=null,c=!1,l=m=>{try{return+localStorage.getItem("sh-best-"+m)||0}catch{return 0}},h=(m,g)=>{try{localStorage.setItem("sh-best-"+m,g)}catch{}};function u(m,g){s=m,o=g||null,c=!1,n=PS[m](),t.innerHTML=`<div class="mcard"><div class="ghead"><b>${n.title}</b><span class="mbest">\uCD5C\uACE0 ${l(s)}</span><button class="x" data-a="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="mstage"><canvas width="${360*2}" height="${560*2}"></canvas>
        <div class="mintro"><p>${n.desc}</p><button class="go" data-a="start">\u25B6 \uC2DC\uC791!</button></div></div>
      <div class="mbtns">${n.buttons.map((v,b)=>`<button data-b="${b}" class="${v.cls||""}">${v.label}</button>`).join("")}</div></div>`,t.hidden=!1}function d(){t.querySelector(".mintro").remove(),fh();let m=t.querySelector("canvas"),g=m.getContext("2d");g.setTransform(2,0,0,2,0,0);let v=0;a=performance.now();let b=M=>{if(!n)return;let E=Math.min(.05,(M-a)/1e3);a=M,v+=E;let S=n.update(E);if(n.draw(g,E,v),S&&!c)return f(S);r=requestAnimationFrame(b)};r=requestAnimationFrame(b)}function f(m){c=!0,cancelAnimationFrame(r);let g=l(s),v=m.score>g;v&&h(s,m.score),En.win();let b=document.createElement("div");b.className="mintro",b.innerHTML=`<h3>${v?"\u{1F389} \uCD5C\uACE0 \uAE30\uB85D!":"\uC218\uACE0\uD588\uC5B4\uC694! \u2728"}</h3><p class="mscore">${m.score}\uC810</p><p>${m.msg}</p><p class="mprev">\uCD5C\uACE0 \uAE30\uB85D ${Math.max(g,m.score)}\uC810</p>
      <button class="go" data-a="again">\u{1F501} \uB2E4\uC2DC \uD558\uAE30</button><button class="gsub" data-a="close">${o?"\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30":"\uB2EB\uAE30"}</button>`,t.querySelector(".mstage").appendChild(b),t.querySelector(".mbest").textContent=`\uCD5C\uACE0 ${Math.max(g,m.score)}`}function p(){cancelAnimationFrame(r),n=null,t.hidden=!0,t.innerHTML="";let m=o;o=null,m&&m(c)}t.addEventListener("click",m=>{let g=m.target.closest("button");if(g){if(g.dataset.a==="start"&&d(),g.dataset.a==="close"&&p(),g.dataset.a==="again"){let v=o;o=null,u(s,v),d()}if(g.dataset.b!==void 0&&n){let v=n.buttons[+g.dataset.b];v.act&&v.act()}}}),t.addEventListener("pointerdown",m=>{let g=m.target.closest("[data-b]");if(g&&n){let E=n.buttons[+g.dataset.b];E.down&&(m.preventDefault(),E.down());return}let v=m.target.closest("canvas");if(!v||!n||t.querySelector(".mintro"))return;let b=v.getBoundingClientRect(),M=(m.clientX-b.left)*360/b.width;n.pointer?n.pointer(M,!0):n.tap&&n.tap()});let _=m=>{if(!n)return;let g=m.target.closest&&m.target.closest("[data-b]");if(g){let v=n.buttons[+g.dataset.b];v.up&&v.up()}else n.pointer&&n.pointer.length&&n.pointer(0,!1)};return t.addEventListener("pointerup",_),t.addEventListener("pointercancel",_),t.addEventListener("pointerleave",_),addEventListener("keydown",m=>{if(!(t.hidden||!n)){if(m.code==="Escape")return p();if(t.querySelector(".mintro")&&!c&&(m.code==="Space"||m.code==="Enter"))return m.preventDefault(),d();n.key&&(m.preventDefault(),n.key(m.code,!0))}}),addEventListener("keyup",m=>{!t.hidden&&n&&n.key&&n.keyUp&&n.key(m.code,!1)}),{open:u,get isOpen(){return!t.hidden},result(m,g,v){i(`${m} \xB7 ${g}\uC810 ${v||""}`)}}}var mh={title:"\uBB35\uCC0C\uBE60 \uC2B9\uB9AC \uCFE0\uD3F0",benefit:"\uC18C\uD488 10% \uD560\uC778",note:"\uC624\uD504\uB77C\uC778 \uB9E4\uC7A5 \uACC4\uC0B0\uB300\uC5D0\uC11C \uC9C1\uC6D0\uC5D0\uAC8C \uBCF4\uC5EC \uC8FC\uC138\uC694",days:30},na={muk:{emo:"\u270A",name:"\uBB35"},jji:{emo:"\u270C\uFE0F",name:"\uCC0C"},ppa:{emo:"\u{1F590}\uFE0F",name:"\uBE60"}},f0={muk:"jji",jji:"ppa",ppa:"muk"},p0=i=>i[Math.floor(Math.random()*i.length)],m0=i=>new Promise(e=>setTimeout(e,i));function g0({showToast:i,npcs:e,capture:t,views:n,minis:s,treasure:r}){let a=L=>document.getElementById(L),o=e.find(L=>L.id==="shop"),c=e.find(L=>L.id==="cafe"),l=(L,X=3500)=>{o&&(clearTimeout(l.t),o.el.textContent=L,l.t=setTimeout(()=>o.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",X))},h=a("mjp"),u=null,d=!1;function f(){u={me:0,boss:0,round:1,attacker:null,log:"\uAC00\uC704\uBC14\uC704\uBCF4\uB85C \uACF5\uACA9\uD560 \uC0AC\uB78C\uC744 \uC815\uD574\uC694!"},h.hidden=!1,_("?","?"),l("\uBB35\uCC0C\uBE60 \uD55C \uD310 \uD574\uC694! \uC0BC\uC138\uD310\uC774\uC5D0\uC694 \u270A\u270C\uFE0F\u{1F590}\uFE0F",5e3)}let p=()=>{h.hidden=!0,u=null};function _(L,X,F=!1){let W=u.attacker==="me"?"\uB0B4\uAC00 \uACF5\uACA9 \uC911 \u{1F525}":u.attacker==="boss"?"\uC0AC\uC7A5\uB2D8\uC774 \uACF5\uACA9 \uC911 \u{1F525}":"\uAC00\uC704\uBC14\uC704\uBCF4!";h.innerHTML=`<div class="gcard">
      <div class="ghead"><b>\u270A \uC0AC\uC7A5\uB2D8\uACFC \uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310</b><button class="x" data-g="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="gscore"><span>\uB098 <i>${u.me}</i></span><small>${u.round}\uD310\uC9F8 \xB7 2\uBC88 \uBA3C\uC800 \uC774\uAE30\uBA74 \uC2B9\uB9AC</small><span><i>${u.boss}</i> \uC0AC\uC7A5\uB2D8</span></div>
      <div class="garena ${F?"shake":""}"><div><em>${L}</em><small>\uB098</small></div><b>VS</b><div><em>${X}</em><small>\uC0AC\uC7A5\uB2D8</small></div></div>
      <p class="gturn">${W}</p><p class="glog">${u.log}</p>
      ${u.done?u.done==="win"?`<div class="gcoupon"><img alt="\uCFE0\uD3F0" src="${b().toDataURL("image/png")}"><button class="go" data-g="coupon">\u{1F4F2} \uCFE0\uD3F0 \uC774\uBBF8\uC9C0 \uC800\uC7A5</button><button class="gsub" data-g="close">\uB2EB\uAE30</button></div>`:'<button class="go" data-g="again">\u{1F501} \uB2E4\uC2DC \uB3C4\uC804</button>':`<div class="ghands">${Object.entries(na).map(([te,fe])=>`<button data-h="${te}" ${d?"disabled":""}><em>${fe.emo}</em>${fe.name}</button>`).join("")}</div>`}
    </div>`}async function m(L){if(d||!u||u.done)return;d=!0;let X=p0(Object.keys(na));for(let te of["muk","jji","ppa"])u.log=u.attacker?`${na[te].name}!`:["\uAC00\uC704","\uBC14\uC704","\uBCF4!"][Object.keys(na).indexOf(te)],_("\u270A","\u270A",!0),await m0(260);let F=na[L],W=na[X];if(!u.attacker)L===X?u.log=`\uB458 \uB2E4 ${F.name}! \uB2E4\uC2DC \uAC00\uC704\uBC14\uC704\uBCF4 \u{1F648}`:(u.attacker=f0[L]===X?"me":"boss",u.log=u.attacker==="me"?"\uB0B4\uAC00 \uC774\uACBC\uC5B4\uC694! \uC774\uC81C \uB0B4\uAC00 \uACF5\uACA9, \uAC19\uC740 \uAC78 \uB0B4\uAC8C \uB9CC\uB4E4\uC5B4\uC694":"\uC0AC\uC7A5\uB2D8\uC774 \uC774\uACBC\uC5B4\uC694! \uC0AC\uC7A5\uB2D8 \uACF5\uACA9, \uB2E4\uB978 \uAC78 \uB0B4\uC57C \uBC84\uD168\uC694");else if(L===X){let te=u.attacker==="me";if(te?u.me++:u.boss++,u.log=te?`\uB458 \uB2E4 ${F.name}! \uB0B4\uAC00 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F389}`:`\uB458 \uB2E4 ${F.name}! \uC0AC\uC7A5\uB2D8\uC774 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F61D}`,l(te?"\uC557 \uC84C\uB2E4\u2026! \u{1F633}":"\uC81C\uAC00 \uC774\uACBC\uC8E0? \u{1F60E}"),u.attacker=null,u.round++,(u.me>=2||u.boss>=2)&&(u.done=u.me>=2?"win":"lose",u.log=u.done==="win"?`${u.me} : ${u.boss} \uC0BC\uC138\uD310 \uC2B9\uB9AC! \uCFE0\uD3F0\uC744 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}`:`${u.me} : ${u.boss} \uC544\uC27D\uAC8C \uC84C\uC5B4\uC694\u2026 \uB2E4\uC2DC \uB3C4\uC804\uD574 \uBCFC\uAE4C\uC694?`,l(u.done==="win"?"\uCD95\uD558\uD574\uC694! \uCFE0\uD3F0 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}":"\uB2E4\uC74C\uC5D0 \uB610 \uB3C4\uC804\uD574\uC694! \u{1F606}",6e3),u.done==="win")){v();try{localStorage.setItem("sh-coupon",JSON.stringify(g))}catch{}}}else u.attacker=f0[L]===X?"me":"boss",u.log=`${F.name} vs ${W.name} \u2192 ${u.attacker==="me"?"\uACF5\uACA9\uAD8C\uC774 \uB098\uC5D0\uAC8C!":"\uACF5\uACA9\uAD8C\uC774 \uC0AC\uC7A5\uB2D8\uAED8!"}`;d=!1,_(F.emo,W.emo)}let g=null;function v(){let L="SH-"+Math.random().toString(36).slice(2,6).toUpperCase()+"-"+String(Date.now()%1e4).padStart(4,"0"),X=new Date(Date.now()+mh.days*864e5);g={code:L,issued:ta(),until:`${X.getFullYear()}.${String(X.getMonth()+1).padStart(2,"0")}.${String(X.getDate()).padStart(2,"0")}`}}function b(){g||v();let L=1080,X=600,F=document.createElement("canvas");F.width=L,F.height=X;let W=F.getContext("2d"),te=W.createLinearGradient(0,0,L,X);te.addColorStop(0,"#ffe3ef"),te.addColorStop(1,"#e4f6ea"),W.fillStyle=te,W.fillRect(0,0,L,X),W.fillStyle="#ffffff66";for(let he=30;he<X;he+=60)for(let re=he/60%2?30:60;re<L;re+=60)W.beginPath(),W.arc(re,he,10,0,7),W.fill();W.fillStyle="#fffdfb",W.beginPath(),W.roundRect(40,40,L-80,X-80,36),W.fill(),W.setLineDash([14,10]),W.strokeStyle="#f48fb9",W.lineWidth=5,W.beginPath(),W.roundRect(56,56,L-112,X-112,28),W.stroke(),W.setLineDash([]),W.strokeStyle="#f3c6d8",W.lineWidth=3,W.beginPath(),W.moveTo(760,80),W.lineTo(760,X-80),W.stroke(),W.textAlign="left",W.fillStyle="#f27fae",W.font='700 40px "Gamja Flower", sans-serif',W.fillText("\uC218\uC9D1\uC218\uC9D1 \xD7 \uC218\uC787\uD574\uD53C",100,130),W.fillStyle="#4a3f66",W.font='900 34px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',W.fillText(mh.title+" \u270A\u270C\uFE0F\u{1F590}\uFE0F",100,190),W.fillStyle="#e0457b",W.font='900 84px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',W.fillText(mh.benefit,100,310),W.fillStyle="#7a6c99",W.font='600 26px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',W.fillText(mh.note,100,380),W.fillText(`\uBC1C\uAE09 ${g.issued} \xB7 ${g.until}\uAE4C\uC9C0 \xB7 1\uC778 1\uD68C`,100,420),W.fillStyle="#4a3f66",W.font="800 30px ui-monospace, Consolas, monospace",W.fillText(g.code,100,480);let fe=new Image;return fe.src=ui("staff",1),fe.complete&&W.drawImage(fe,790,150,240,240),W.textAlign="center",W.fillStyle="#f27fae",W.font='700 34px "Gamja Flower", sans-serif',W.fillText("\uC0AC\uC7A5\uB2D8\uC744 \uC774\uACBC\uC5B4\uC694!",910,440),F}{let L=new Image;L.src=ui("staff",1)}h.addEventListener("click",async L=>{let X=L.target.closest("button");if(!X)return;if(X.dataset.h)return m(X.dataset.h);let F=X.dataset.g;if(F==="close"&&p(),F==="again"&&f(),F==="coupon"){let W=await ea(b(),`suithappy-coupon-${g.code}.jpg`);i(W==="downloaded"?"\u{1F4BE} \uCFE0\uD3F0\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":W==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}});let M=a("spot"),E=Array.from({length:n},(L,X)=>X),S=null,x=[],y=null,I=Object.keys(ir).flatMap(L=>ir[L].stickers.map((X,F)=>[L,F]));function w(L){y=L||null,x.length||(x=E.slice().sort(()=>Math.random()-.5)),M.hidden=!1,N()}function C(){M.hidden=!0;let L=y;y=null,S=null,L&&L(!1)}async function N(){x.length||(x=E.slice().sort(()=>Math.random()-.5));let L=x.pop();M.innerHTML=`<div class="spwrap"><div class="ghead"><b>\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30</b><span class="spcount">\uBD88\uB7EC\uC624\uB294 \uC911\u2026</span><button class="gsub" data-s="hint">\u{1F4A1} \uD78C\uD2B8</button><button class="x" data-s="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="sppair"><div class="spimg"><canvas></canvas><small>\uC6D0\uB798 \uADF8\uB9BC</small></div><div class="spimg"><canvas></canvas><small>\uB2E4\uB978 \uACF3 5\uAC1C\uB97C \uCC3E\uC544\uC694</small></div></div>
      <p class="spmsg">${y?"\uB2E4 \uCC3E\uC73C\uBA74 \uC8FC\uBB38\uD55C \uBA54\uB274\uAC00 \uB098\uC640\uC694! \u2615":"\uB450 \uADF8\uB9BC \uC911 \uC544\uBB34 \uCABD\uC774\uB098 \uB2E4\uB978 \uACF3\uC744 \uB20C\uB7EC\uC694"}</p></div>`,await m0(30);let X=t(L),[F,W]=M.querySelectorAll("canvas"),te=X.width,fe=X.height;for(let he of[F,W])he.width=te,he.height=fe,he.getContext("2d").drawImage(X,0,0);S={W:te,H:fe,ca:F,cb:W,base:F.getContext("2d").getImageData(0,0,te,fe),diffs:H(W,te,fe),found:0,miss:0},P(),G()}function H(L,X,F){let W=L.getContext("2d"),te=[],fe=["hue","flip","sticker","erase","swap","hue","sticker"].sort(()=>Math.random()-.5),he=0;for(;te.length<5&&he++<400;){let re=Math.round(X*(.08+Math.random()*.05)),Se=Math.round(X*.05+Math.random()*(X*.9-re)),Ce=Math.round(F*.06+Math.random()*(F*.88-re));if(te.some(ee=>Math.abs(ee.x-Se)<(ee.s+re)/2+30&&Math.abs(ee.y-Ce)<(ee.s+re)/2+30))continue;let Fe=fe[te.length],Ke={x:Se,y:Ce,s:re,k:Fe,hit:!1};if(Fe==="hue"||Fe==="swap"){let ee=W.getImageData(Se,Ce,re,re),pe=ee.data,xe=(100+Math.random()*140)*Math.PI/180,Te=Math.cos(xe),Me=Math.sin(xe),Ve=[.299+.701*Te+.168*Me,.587-.587*Te+.33*Me,.114-.114*Te-.497*Me,.299-.299*Te-.328*Me,.587+.413*Te+.035*Me,.114-.114*Te+.292*Me,.299-.3*Te+1.25*Me,.587-.588*Te-1.05*Me,.114+.886*Te-.203*Me];for(let Ne=0;Ne<pe.length;Ne+=4){let Ye=pe[Ne],Qe=pe[Ne+1],st=pe[Ne+2];if(Fe==="swap"){pe[Ne]=st,pe[Ne+2]=Ye;continue}pe[Ne]=Ve[0]*Ye+Ve[1]*Qe+Ve[2]*st,pe[Ne+1]=Ve[3]*Ye+Ve[4]*Qe+Ve[5]*st,pe[Ne+2]=Ve[6]*Ye+Ve[7]*Qe+Ve[8]*st}W.putImageData(ee,Se,Ce)}else if(Fe==="flip"){let ee=document.createElement("canvas");ee.width=ee.height=re,ee.getContext("2d").drawImage(L,Se,Ce,re,re,0,0,re,re),W.save(),W.translate(Se+re,Ce),W.scale(-1,1),W.drawImage(ee,0,0),W.restore(),Math.random()<.5&&(W.save(),W.translate(Se,Ce+re),W.scale(1,-1),W.drawImage(ee,0,0),W.restore())}else if(Fe==="sticker"){let ee=new Image,[pe,xe]=p0(I);ee.src=ui(pe,xe),ee.decode().then(()=>W.drawImage(ee,Se,Ce,re,re)).catch(()=>{})}else{let ee=Se+re+12<X-re?Se+re+12:Se-re-12,pe=document.createElement("canvas");pe.width=pe.height=re;let xe=pe.getContext("2d");xe.drawImage(L,ee,Ce,re,re,0,0,re,re);let Te=xe.createRadialGradient(re/2,re/2,re*.3,re/2,re/2,re*.5);Te.addColorStop(0,"#000"),Te.addColorStop(1,"rgba(0,0,0,0)"),xe.globalCompositeOperation="destination-in",xe.fillStyle=Te,xe.fillRect(0,0,re,re),W.drawImage(pe,Se,Ce)}te.push(Ke)}return te}function P(){for(let L of[S.ca,S.cb]){let X=L.getContext("2d");for(let F of S.diffs)F.hit&&(X.lineWidth=Math.max(4,S.W/200),X.strokeStyle="#ff3d8b",X.shadowColor="#fff",X.shadowBlur=6,X.beginPath(),X.arc(F.x+F.s/2,F.y+F.s/2,F.s*.72,0,7),X.stroke(),X.shadowBlur=0)}}let G=()=>{let L=M.querySelector(".spcount");L&&S&&(L.textContent=`\uCC3E\uC740 \uACF3 ${S.found} / 5`)};M.addEventListener("click",L=>{let X=L.target.closest("button");if(X&&X.dataset.s==="close")return C();if(X&&X.dataset.s==="next")return N();if(X&&X.dataset.s==="done"){let Se=y;y=null,M.hidden=!0,S=null,Se&&Se(!0);return}if(X&&X.dataset.s==="hint"&&S){let Se=S.diffs.find(Ce=>!Ce.hit);if(!Se)return;for(let Ce of[S.ca,S.cb]){let Fe=Ce.getBoundingClientRect(),Ke=document.createElement("div");Ke.className="sphint";let ee=Fe.width/S.W;Object.assign(Ke.style,{left:Fe.left+(Se.x-Se.s*.3)*ee+"px",top:Fe.top+(Se.y-Se.s*.3)*ee+"px",width:Se.s*1.6*ee+"px",height:Se.s*1.6*ee+"px"}),document.body.appendChild(Ke),setTimeout(()=>Ke.remove(),1400)}return}let F=L.target.closest("canvas");if(!F||!S)return;let W=F.getBoundingClientRect(),te=(L.clientX-W.left)*S.W/W.width,fe=(L.clientY-W.top)*S.H/W.height,he=S.W*.02,re=S.diffs.find(Se=>!Se.hit&&te>Se.x-he&&te<Se.x+Se.s+he&&fe>Se.y-he&&fe<Se.y+Se.s+he);if(re)re.hit=!0,S.found++,P(),G(),S.found===5&&(M.querySelector(".spmsg").innerHTML=`\u{1F389} \uB2E4 \uCC3E\uC558\uC5B4\uC694! ${S.miss?`(\uD5DB\uD074\uB9AD ${S.miss}\uBC88)`:"\uD55C \uBC88\uB3C4 \uC548 \uD2C0\uB838\uC5B4\uC694!"}
          ${y?'<button class="go" data-s="done">\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30</button>':'<button class="go" data-s="next">\uB2E4\uC74C \uADF8\uB9BC \u25B6</button>'}`);else{S.miss++;let Se=L.clientX,Ce=L.clientY,Fe=document.createElement("div");Fe.className="spmiss",Fe.textContent="\u2715",Object.assign(Fe.style,{left:Se+"px",top:Ce+"px"}),document.body.appendChild(Fe),setTimeout(()=>Fe.remove(),600)}});let V=a("gmenu"),U=null,q=[["mjp","\u270A\u270C\uFE0F\u{1F590}\uFE0F","\uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310","\uC774\uAE30\uBA74 \uC624\uD504\uB77C\uC778 \uCFE0\uD3F0 \u{1F381}"],["spot","\u{1F50D}","\uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30","\uB9E4\uC7A5 \uC18D \uB2E4\uB978 \uACF3 5\uAC1C"],["treasure","\u2B50","\uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30","\uC228\uC740 \uBCC4\uC0AC\uD0D5 7\uAC1C \xB7 90\uCD08"]];function z(L="shop",X=null){U=X;let F=L==="shop",W=F?q:ef;V.innerHTML=`<div class="gcard"><div class="ghead"><b>${F?"\u{1F380} \uC18C\uD488\uC0F5 \uC0AC\uC7A5\uB2D8":"\u2615 \uCE74\uD398 \uC9C1\uC6D0"}</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${F?"\uC5B4\uC11C \uC624\uC138\uC694! \uC2EC\uC2EC\uD558\uBA74 \uC800\uB791 \uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F60A}":X?"\uAC8C\uC784 \uD55C \uD310 \uD558\uB294 \uB3D9\uC548 \uBA54\uB274 \uB9CC\uB4E4\uC5B4 \uB458\uAC8C\uC694! \u{1F353}":"\uCE74\uD398 \uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \uC7AC\uBC0C\uC5B4\uC694 \u{1F606}"}</p>
      <div class="gpick ${W.length>3?"many":""}">${W.map(([te,fe,he,re])=>`<button data-m="${te}"><em>${fe}</em><b>${he}</b><small>${re}</small></button>`).join("")}</div></div>`,V.hidden=!1,F?l("\uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F606}",4e3):c&&(c.el.textContent="\uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \u{1F606}",setTimeout(()=>c.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",4e3))}V.addEventListener("click",L=>{let X=L.target.closest("button");if(!X)return;V.hidden=!0;let F=X.dataset.m,W=U;if(U=null,F==="close"){W&&W(!1);return}F==="mjp"?f():F==="spot"?w(W):F==="treasure"||F==="again-treasure"?r.start():ef.some(te=>te[0]===F)&&s.open(F,W)});function D({found:L,total:X,time:F,done:W}){let te=0;try{te=+localStorage.getItem("sh-best-treasure")||0}catch{}let fe=L*100+(W?Math.max(0,90-F)*5:0),he=fe>te;if(he)try{localStorage.setItem("sh-best-treasure",fe)}catch{}V.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2B50 \uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${W?`\u{1F389} ${F}\uCD08 \uB9CC\uC5D0 \uBCC4\uC0AC\uD0D5 ${X}\uAC1C\uB97C \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!`:`\uBCC4\uC0AC\uD0D5 ${X}\uAC1C \uC911 ${L}\uAC1C\uB97C \uCC3E\uC558\uC5B4\uC694!`}</p>
      <p class="mscore">${fe}\uC810</p><p class="mprev">${he?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${te}\uC810`}</p>
      <button class="go" data-m="again-treasure">\u{1F501} \uB2E4\uC2DC \uD558\uAE30</button></div>`,V.hidden=!1}addEventListener("keydown",L=>{L.code==="Escape"&&(V.hidden?h.hidden?M.hidden||C():p():V.hidden=!0)});let B=L=>o&&Math.hypot(L.x-o.x,L.z-o.z)<2.8;return{get open(){return!h.hidden||!M.hidden||!V.hidden},mjp:f,spot:w,menu:z,owner:o,cafeStaff:c,treasureResult:D,update(L,X){a("mjp-btn").hidden=!B(L)||!!X||!h.hidden||!V.hidden,a("cafegame-btn").hidden=!(c&&Math.hypot(L.x-c.x,L.z-c.z)<2.8)||!!X||!V.hidden}}}var IS=7,x0=90,LS=.8;function _0({scene3d:i,data:e,canOccupy:t,player:n,camera:s,showToast:r,onFinish:a}){let c=(y=>document.getElementById(y))("treasure-hud"),l=!1,h=[],u=0,d=0,f=2,p=new _s;for(let y=0;y<10;y++){let I=y*Math.PI/5+Math.PI/2,w=y%2?.045:.1,C=Math.cos(I)*w,N=Math.sin(I)*w;y?p.lineTo(C,N):p.moveTo(C,N)}let _=new Vs(p,{depth:.035,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});_.center();let m=["#ffd54a","#ff9cc0","#9fe0cf","#c6a6f0","#ffd54a","#a9d4f5","#ffb37a"],g=(()=>{let y=document.createElement("canvas");y.width=y.height=64;let I=y.getContext("2d"),w=I.createRadialGradient(32,32,0,32,32,32);return w.addColorStop(0,"rgba(255,240,180,1)"),w.addColorStop(1,"rgba(255,240,180,0)"),I.fillStyle=w,I.fillRect(0,0,64,64),new Zn(y)})();function v(){let y=[],I=(P,G)=>y.every(V=>Math.hypot(V.x-P,V.z-G)>1.6),w=e.seats.slice().sort(()=>Math.random()-.5);for(let P of w){if(y.length>=3)break;I(P[0],P[1])&&y.push({x:P[0],z:P[1],y:.16,where:"\uC758\uC790 \uC544\uB798"})}let C=e.blocks.filter(P=>P[2]>.15&&P[3]>.15).sort(()=>Math.random()-.5);for(let P of C){if(y.length>=5)break;let[G,V,U,q,z]=P,D=Math.floor(Math.random()*4),B=Math.cos(z),L=Math.sin(z),X=D<2?(D?1:-1)*(U+.3):b(-U,U),F=D>=2?(D===3?1:-1)*(q+.3):b(-q,q),W=G+X*B-F*L,te=V+X*L+F*B;t(W,te,.22)&&I(W,te)&&y.push({x:W,z:te,y:.35,where:"\uC9C4\uC5F4\uB300 \uC606"})}let N=e.floor.map(P=>P[0]),H=e.floor.map(P=>P[1]);for(let P=0;y.length<IS&&P<600;P++){let G=b(Math.min(...N),Math.max(...N)),V=b(Math.min(...H),Math.max(...H));t(G,V,.3)&&!t(G,V,.75)&&I(G,V)&&y.push({x:G,z:V,y:.25,where:"\uBCBD\xB7\uCEE4\uD2BC \uADFC\uCC98"})}return y}function b(y,I){return y+Math.random()*(I-y)}function M(){for(let y of h)i.remove(y.g);h=[]}function E(){M(),l=!0,u=x0,d=0,f=2,v().forEach((y,I)=>{let w=new it;w.position.set(y.x,y.y,y.z);let C=new Ze(_,new Wt({color:new Re(m[I%m.length]).multiplyScalar(1.6),toneMapped:!1})),N=new Da(new Nr({map:g,color:m[I%m.length],transparent:!0,opacity:.7,depthWrite:!1,blending:oi}));N.scale.setScalar(.5),w.add(N,C),i.add(w),h.push({g:w,m:C,glow:N,p:y,got:!1,pop:0,ph:Math.random()*6})}),r(`\u2B50 \uBCC4\uC0AC\uD0D5 ${h.length}\uAC1C\uB97C 90\uCD08 \uC548\uC5D0 \uCC3E\uC544\uC694! \uAC00\uAE4C\uC774 \uAC00\uBA74 \uC8FC\uC6CC\uC694`),x()}function S(y){l=!1,c.hidden=!0,setTimeout(M,600),a&&a({found:d,total:h.length,time:Math.round(x0-u),done:y})}function x(){c.hidden=!l,l&&(c.innerHTML=`<b>\u2B50 ${d} / ${h.length}</b><span>\u23F1 ${Math.ceil(u)}\uCD08</span><button data-t="hint" ${f?"":"disabled"}>\u{1F4A1} \uD78C\uD2B8 ${f}</button><button data-t="quit">\uADF8\uB9CC</button>`)}return c.addEventListener("click",y=>{let I=y.target.closest("button");if(I){if(I.dataset.t==="quit")return S(!1);if(I.dataset.t==="hint"&&f>0){f--;let w=h.filter(C=>!C.got).sort((C,N)=>Math.hypot(C.p.x-n.x,C.p.z-n.z)-Math.hypot(N.p.x-n.x,N.p.z-n.z))[0];if(w){let C=new O;s.getWorldDirection(C);let N=w.p.x-n.x,H=w.p.z-n.z,P=Math.hypot(N,H),G=Math.atan2(C.x*H-C.z*N,C.x*N+C.z*H),V=Math.abs(G)<.5?"\uC55E\uCABD":Math.abs(G)>2.5?"\uB4A4\uCABD":G>0?"\uC67C\uCABD":"\uC624\uB978\uCABD";r(`\u{1F4A1} \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uBCC4\uC0AC\uD0D5: ${V}\uC73C\uB85C \uC57D ${P.toFixed(1)}m \xB7 ${w.p.where}`),w.flash=2.5}x()}}}),{start:E,get active(){return l},get spots(){return h.map(y=>y.p)},update(y,I){for(let w of h)w.m.rotation.y+=y*2,w.g.position.y=w.p.y+Math.sin(I*2.5+w.ph)*.04,w.flash&&(w.flash=Math.max(0,w.flash-y),w.glow.scale.setScalar(.5+Math.sin(w.flash*12)*.25+.3)),w.got&&(w.pop+=y*3,w.g.scale.setScalar(Math.max(.001,1+w.pop*1.5)*(1-Math.min(1,w.pop))),w.g.position.y+=w.pop*.5);if(l){u-=y;for(let w of h)!w.got&&Math.hypot(w.p.x-n.x,w.p.z-n.z)<LS&&(w.got=!0,d++,x(),r(d===h.length?"\u{1F389} \uBCC4\uC0AC\uD0D5\uC744 \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!":`\u2B50 \uCC3E\uC558\uB2E4! ${d} / ${h.length}`),Ai(880,.1,"triangle",.12),Ai(1320,.14,"triangle",.1,.07));if(d===h.length)return S(!0);if(u<=0)return S(!1);Math.ceil(u)!==x.last&&(x.last=Math.ceil(u),x())}}}}function DS(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new Zn(i);return n.colorSpace=wt,n}function v0({scene3d:i,data:e,storeRoot:t,isTouch:n}){let s=e.ceiling||2.9,r=e.floor.map(q=>q[0]),a=e.floor.map(q=>q[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],c=(q,z)=>{let D=!1,B=e.floor;for(let L=0,X=B.length-1;L<B.length;X=L++){let[F,W]=B[L],[te,fe]=B[X];W>z!=fe>z&&q<(te-F)*(z-W)/(fe-W)+F&&(D=!D)}return D},l=DS(),h=n?140:260,u=new Float32Array(h*3),d=new Float32Array(h*3),f=new Float32Array(h),p=["#ffffff","#ffd6e7","#d9f5e6","#e3dcff","#fff1c9"].map(q=>new Re(q));for(let q=0;q<h;q++){let z,D;do z=o[0]+Math.random()*(o[2]-o[0]),D=o[1]+Math.random()*(o[3]-o[1]);while(!c(z,D));u.set([z,.3+Math.random()*(s-.5),D],q*3);let B=p[q%p.length];d.set([B.r,B.g,B.b],q*3),f[q]=Math.random()*100}let _=new At;_.setAttribute("position",new Vt(u,3)),_.setAttribute("color",new Vt(d,3));let m=new xs(_,new Wi({size:.07,map:l,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:oi,sizeAttenuation:!0}));m.frustumCulled=!1,m.renderOrder=5,i.add(m);let g=u.slice(),v=[],b=e.floor,M=(o[0]+o[2])/2,E=(o[1]+o[3])/2;for(let q=0;q<b.length;q++){let[z,D]=b[q],[B,L]=b[(q+1)%b.length],X=Math.hypot(B-z,L-D);if(X<1.2)continue;let F=-(L-D)/X,W=(B-z)/X,te=(z+B)/2,fe=(D+L)/2;c(te+F*.2,fe+W*.2)||(F=-F,W=-W);let he=Math.max(1,Math.round(X/1.15)),re=6;for(let Se=0;Se<he;Se++)for(let Ce=0;Ce<re;Ce++){let Fe=(Se+Ce/re)/he,Ke=Ce/re,ee=z+(B-z)*Fe+F*.07,pe=D+(L-D)*Fe+W*.07,xe=s-.14-Math.sin(Ke*Math.PI)*.16;c(ee,pe)&&v.push([ee,xe,pe])}}let S=["#fff4d6","#ffc2da","#c9f2dc","#fff4d6","#d9ccff"].map(q=>new Re(q)),x=new Wt({color:new Re(2.8,2.8,2.8),toneMapped:!1}),y=new Vi(new Yt(.032,10,8),x,v.length),I=new qe,w=new Re;v.forEach(([q,z,D],B)=>{I.makeTranslation(q,z,D),y.setMatrixAt(B,I),y.setColorAt(B,S[B%S.length])}),y.frustumCulled=!1,i.add(y);let C=new At().setFromPoints(v.flatMap((q,z)=>z&&Math.hypot(q[0]-v[z-1][0],q[2]-v[z-1][2])<.4?[new O(...v[z-1]),new O(...q)]:[]));i.add(new Hs(C,new gs({color:"#b7a6c9",transparent:!0,opacity:.6})));let N=new At;N.setAttribute("position",new Vt(new Float32Array(v.flat()),3));let H=new Float32Array(v.length*3);v.forEach((q,z)=>{let D=S[z%S.length];H.set([D.r,D.g,D.b],z*3)}),N.setAttribute("color",new Vt(H,3));let P=new xs(N,new Wi({size:.3,map:l,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:oi}));P.frustumCulled=!1,i.add(P);let G=[];t.updateMatrixWorld(!0),t.traverse(q=>{if(q.isMesh&&q.material&&q.material.name==="light"){let z=new dn().setFromObject(q);G.push(z.getCenter(new O).setY(z.min.y))}});let V=new Rt({transparent:!0,depthWrite:!1,blending:oi,side:Ft,uniforms:{uColor:{value:new Re("#fff3df")},uStrength:{value:.045}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:"uniform vec3 uColor; uniform float uStrength; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 2.5); float a = uStrength * smoothstep(0.0, 1.0, vY) * edge; gl_FragColor = vec4(uColor * a, a); }"}),U=Math.max(1,Math.ceil(G.length/(n?6:10)));return G.filter((q,z)=>z%U===0).forEach(q=>{let z=q.y-.02,D=new Ze(new ht(.22,.7,z,24,1,!0),V);D.position.set(q.x,z/2,q.z),D.renderOrder=4,i.add(D)}),{update(q,z){let D=_.attributes.position.array;for(let B=0;B<h;B++){let L=f[B],X=B*3;D[X]=g[X]+Math.sin(z*.21+L)*.25,D[X+1]=g[X+1]+Math.sin(z*.17+L*1.3)*.18,D[X+2]=g[X+2]+Math.cos(z*.19+L*.7)*.25}_.attributes.position.needsUpdate=!0,m.material.opacity=.65+Math.sin(z*1.3)*.15;for(let B=0;B<6;B++){let L=Math.floor(Math.random()*v.length);w.copy(S[L%S.length]).multiplyScalar(.55+Math.random()*.9),y.setColorAt(L,w)}y.instanceColor.needsUpdate=!0}}}var gh=class extends Bs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Xt;e.deleteAttribute("uv");let t=new Zt({side:pn}),n=new Zt,s=new Xs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ze(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Vi(e,n,6),o=new Lt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Ze(e,ia(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ze(e,ia(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Ze(e,ia(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ze(e,ia(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ze(e,ia(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ze(e,ia(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ia(i){return new Ja({color:0,emissive:16777215,emissiveIntensity:i})}var Ci={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},NS=new Zi(-1,1,1,-1,0,1),tf=class extends At{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}},US=new tf,Pi=class{constructor(e){this._mesh=new Ze(US,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var sa=class extends In{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mn.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Uo=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},xh=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _h=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sa(Ci),this.copyPass.material.blending=cn,this.timer=new ao}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Uo!==void 0&&(a instanceof Uo?n=!0:a instanceof xh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vh=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Oo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new qe},cameraProjectionMatrixInverse:{value:new qe},cameraWorldMatrix:{value:new qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Fo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},yh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function y0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=OS(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new O(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new jn(s,e,e);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}function OS(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Bo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:nf(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraProjectionMatrixInverse:{value:new qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function nf(i,e,t){let n=FS(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function FS(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new O(Math.cos(r),Math.sin(r),a))}return n}var Mh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,p=e-d,_=t-f,m,g;p>_?(m=1,g=0):(m=0,g=1);let v=p-m+h,b=_-g+h,M=p-1+2*h,E=_-1+2*h,S=c&255,x=l&255,y=this.perm[S+this.perm[x]]%12,I=this.perm[S+m+this.perm[x+g]]%12,w=this.perm[S+1+this.perm[x+1]]%12,C=.5-p*p-_*_;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[y],p,_));let N=.5-v*v-b*b;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[I],v,b));let H=.5-M*M-E*E;return H<0?r=0:(H*=H,r=H*H*this._dot(this.grad3[w],M,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,p=(h+u+d)*f,_=h-p,m=u-p,g=d-p,v=e-_,b=t-m,M=n-g,E,S,x,y,I,w;v>=b?b>=M?(E=1,S=0,x=0,y=1,I=1,w=0):v>=M?(E=1,S=0,x=0,y=1,I=0,w=1):(E=0,S=0,x=1,y=1,I=0,w=1):b<M?(E=0,S=0,x=1,y=0,I=1,w=1):v<M?(E=0,S=1,x=0,y=0,I=1,w=1):(E=0,S=1,x=0,y=1,I=1,w=0);let C=v-E+f,N=b-S+f,H=M-x+f,P=v-y+2*f,G=b-I+2*f,V=M-w+2*f,U=v-1+3*f,q=b-1+3*f,z=M-1+3*f,D=h&255,B=u&255,L=d&255,X=this.perm[D+this.perm[B+this.perm[L]]]%12,F=this.perm[D+E+this.perm[B+S+this.perm[L+x]]]%12,W=this.perm[D+y+this.perm[B+I+this.perm[L+w]]]%12,te=this.perm[D+1+this.perm[B+1+this.perm[L+1]]]%12,fe=.6-v*v-b*b-M*M;fe<0?s=0:(fe*=fe,s=fe*fe*this._dot3(this.grad3[X],v,b,M));let he=.6-C*C-N*N-H*H;he<0?r=0:(he*=he,r=he*he*this._dot3(this.grad3[F],C,N,H));let re=.6-P*P-G*G-V*V;re<0?a=0:(re*=re,a=re*re*this._dot3(this.grad3[W],P,G,V));let Se=.6-U*U-q*q-z*z;return Se<0?o=0:(Se*=Se,o=Se*Se*this._dot3(this.grad3[te],U,q,z)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,f,p,_=(e+t+n+s)*c,m=Math.floor(e+_),g=Math.floor(t+_),v=Math.floor(n+_),b=Math.floor(s+_),M=(m+g+v+b)*l,E=m-M,S=g-M,x=v-M,y=b-M,I=e-E,w=t-S,C=n-x,N=s-y,H=I>w?32:0,P=I>C?16:0,G=w>C?8:0,V=I>N?4:0,U=w>N?2:0,q=C>N?1:0,z=H+P+G+V+U+q,D=a[z][0]>=3?1:0,B=a[z][1]>=3?1:0,L=a[z][2]>=3?1:0,X=a[z][3]>=3?1:0,F=a[z][0]>=2?1:0,W=a[z][1]>=2?1:0,te=a[z][2]>=2?1:0,fe=a[z][3]>=2?1:0,he=a[z][0]>=1?1:0,re=a[z][1]>=1?1:0,Se=a[z][2]>=1?1:0,Ce=a[z][3]>=1?1:0,Fe=I-D+l,Ke=w-B+l,ee=C-L+l,pe=N-X+l,xe=I-F+2*l,Te=w-W+2*l,Me=C-te+2*l,Ve=N-fe+2*l,Ne=I-he+3*l,Ye=w-re+3*l,Qe=C-Se+3*l,st=N-Ce+3*l,$=I-1+4*l,Ct=w-1+4*l,rt=C-1+4*l,le=N-1+4*l,j=m&255,me=g&255,ue=v&255,Ee=b&255,R=o[j+o[me+o[ue+o[Ee]]]]%32,T=o[j+D+o[me+B+o[ue+L+o[Ee+X]]]]%32,K=o[j+F+o[me+W+o[ue+te+o[Ee+fe]]]]%32,ce=o[j+he+o[me+re+o[ue+Se+o[Ee+Ce]]]]%32,ne=o[j+1+o[me+1+o[ue+1+o[Ee+1]]]]%32,ge=.6-I*I-w*w-C*C-N*N;ge<0?h=0:(ge*=ge,h=ge*ge*this._dot4(r[R],I,w,C,N));let ve=.6-Fe*Fe-Ke*Ke-ee*ee-pe*pe;ve<0?u=0:(ve*=ve,u=ve*ve*this._dot4(r[T],Fe,Ke,ee,pe));let se=.6-xe*xe-Te*Te-Me*Me-Ve*Ve;se<0?d=0:(se*=se,d=se*se*this._dot4(r[K],xe,Te,Me,Ve));let ae=.6-Ne*Ne-Ye*Ye-Qe*Qe-st*st;ae<0?f=0:(ae*=ae,f=ae*ae*this._dot4(r[ce],Ne,Ye,Qe,st));let _e=.6-$*$-Ct*Ct-rt*rt-le*le;return _e<0?p=0:(_e*=_e,p=_e*_e*this._dot4(r[ne],$,Ct,rt,le)),27*(h+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ra=class i extends In{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=y0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ut(this.width,this.height,{type:Bt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Rt({defines:Object.assign({},Oo.defines),uniforms:mn.clone(Oo.uniforms),vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,blending:cn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Za,this.normalMaterial.blending=cn,this.pdMaterial=new Rt({defines:Object.assign({},Bo.defines),uniforms:mn.clone(Bo.uniforms),vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Rt({defines:Object.assign({},Fo.defines),uniforms:mn.clone(Fo.uniforms),vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,blending:cn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Rt({uniforms:mn.clone(Ci.uniforms),vertexShader:Ci.vertexShader,fragmentShader:Ci.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:lo,blendDst:$s,blendEquation:Jn,blendSrcAlpha:oo,blendDstAlpha:$s,blendEquationAlpha:Jn}),this.blendMaterial=new Rt({uniforms:mn.clone(yh.uniforms),vertexShader:yh.vertexShader,fragmentShader:yh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ic,blendSrc:lo,blendDst:$s,blendEquation:Jn,blendSrcAlpha:oo,blendDstAlpha:$s,blendEquationAlpha:Jn}),this._fsQuad=new Pi(null),this._originalClearColor=new Re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new ai;s.format=ci,s.type=Qi,this.normalRenderTarget=new Ut(this.width,this.height,{minFilter:Nt,magFilter:Nt,type:Bt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=nf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=cn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=cn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=cn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=cn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=cn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Mh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new jn(s,e,e,Un,bn);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}};ra.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ko={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Sh=class extends In{constructor(){super(),this.isOutputPass=!0,this.uniforms=mn.clone(ko.uniforms),this.material=new kr({name:ko.name,uniforms:this.uniforms,vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader}),this._fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===co?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ys?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===po&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var M0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var aa=class i extends In{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:Bt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ut(r,a,{type:Bt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ut(r,a,{type:Bt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=M0;this.highPassUniforms=mn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mn.clone(Ci.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:Ci.vertexShader,fragmentShader:Ci.fragmentShader,premultipliedAlpha:!0,blending:oi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Re,this._oldClearAlpha=1,this._basic=new Wt,this._fsQuad=new Pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Rt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};aa.BlurDirectionX=new de(1,0);aa.BlurDirectionY=new de(0,1);var zo=class i extends Ze{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new Hn,u=new O,d=new O,f=new O,p=new qe,_=new O(0,0,-1),m=new Mt,g=new O,v=new O,b=new Mt,M=new qe,E=new Ut(r,a,{samples:l,type:Bt}),S=new Rt({name:c.name!==void 0?c.name:"unspecified",uniforms:mn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});S.uniforms.tDiffuse.value=E.texture,S.uniforms.color.value=s,S.uniforms.textureMatrix.value=M,this.material=S,this.onBeforeRender=function(x,y,I){let w=this.getReflectionCamera(I);if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(I.matrixWorld),p.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(p),g.subVectors(d,f),g.dot(u)>0===!0&&this.forceUpdate===!1)return;g.reflect(u).negate(),g.add(d),p.extractRotation(I.matrixWorld),_.set(0,0,-1),_.applyMatrix4(p),_.add(f),v.subVectors(d,_),v.reflect(u).negate(),v.add(d),w.position.copy(g),w.up.set(0,1,0),w.up.applyMatrix4(p),w.up.reflect(u),w.lookAt(v),w.far=I.far,w.updateMatrixWorld(),w.projectionMatrix.copy(I.projectionMatrix),w.projectionMatrix.elements[8]*=-1,w.projectionMatrix.elements[12]*=-1,M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(w.projectionMatrix),M.multiply(w.matrixWorldInverse),M.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(w.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let N=w.projectionMatrix;w.isOrthographicCamera?(b.x=(Math.sign(m.x)+N.elements[8])/N.elements[0],b.y=(Math.sign(m.y)+N.elements[9])/N.elements[5],b.z=-I.far,b.w=1):(b.x=(Math.sign(m.x)+N.elements[8])/N.elements[0],b.y=(Math.sign(m.y)+N.elements[9])/N.elements[5],b.z=-1,b.w=(1+N.elements[10])/N.elements[14]),m.multiplyScalar(2/m.dot(b)),N.elements[2]=m.x,N.elements[6]=m.y,w.isOrthographicCamera?(N.elements[10]=m.z-o,N.elements[14]=m.w-1):(N.elements[10]=m.z+1-o,N.elements[14]=m.w),n.visible=!1;let H=x.getRenderTarget(),P=x.xr.enabled,G=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(E),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(y,w),x.xr.enabled=P,x.shadowMap.autoUpdate=G,x.setRenderTarget(H);let V=I.viewport;V!==void 0&&x.state.viewport(V),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let y=this._reflectionCameras.get(x);return y===void 0&&(y=x.clone(),this._reflectionCameras.set(x,y)),y}}};zo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Tt=i=>document.getElementById(i),$e={canvas:Tt("room"),overlay:Tt("overlay"),bar:Tt("bar"),pct:Tt("pct"),enter:Tt("enter"),where:Tt("where"),map:Tt("map"),toast:Tt("toast"),joy:Tt("joy"),knob:Tt("knob"),err:Tt("err")},qn=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",qn);var Ot;try{Ot=new Yc({canvas:$e.canvas,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(i){throw $e.err.hidden=!1,$e.err.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C 3D(WebGL)\uB97C \uCF24 \uC218 \uC5C6\uC5B4\uC694. \uCD5C\uC2E0 Chrome\xB7Safari\xB7Edge\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.",i}Ot.setPixelRatio(Math.min(window.devicePixelRatio||1,qn?1.5:1.75));Ot.outputColorSpace=wt;Ot.toneMapping=Ys;Ot.toneMappingExposure=1.05;Ot.shadowMap.enabled=!0;Ot.shadowMap.type=qs;Ot.shadowMap.autoUpdate=!1;var kt=new Bs,P0=new Re("#e9e2fb");kt.background=P0;kt.fog=new Pa(P0,13,32);var bt=new Jt(66,1,.05,60),BS=new Zr(Ot);kt.environment=BS.fromScene(new gh,.04).texture;kt.environmentIntensity=.55;kt.add(new no("#fffafd","#e3d2ec",.7));var pi=new ys("#fff6ec",2.4);pi.position.set(-3.2,9,2.4);pi.target.position.set(0,0,.4);kt.add(pi.target);pi.castShadow=!0;pi.shadow.mapSize.set(qn?2048:3072,qn?2048:3072);Object.assign(pi.shadow.camera,{left:-10.5,right:10.5,top:10.5,bottom:-10.5,near:1,far:22});pi.shadow.bias=-4e-4;pi.shadow.normalBias=.025;pi.shadow.radius=5;pi.shadow.blurSamples=12;var I0=new ys("#f1e9ff",.55);I0.position.set(2.5,4,-3);kt.add(I0);kt.add(pi);var L0=n0(),of={floor:"#e4d6d8",mint:"#cbeebb",trim:"#b2dca0",ceiling:"#f8f3fb",pink:"#f6b7d2",pinkChair:"#f2a6c9",mintChair:"#a9dcbf",shelf:"#fff3e3",blue:"#a9d4f5",white:"#fbf8f2",steel:"#b3b8c6",glass:"#bfe3f0",curtain:"#f2a9c8",greenDrape:"#b9d6a4",greenCloth:"#b7df8f",pegboard:"#f1dfbd",paperA:"#f2b0c2",paperB:"#a9d0ec",paperC:"#f3d08f",paperD:"#c3dca0",paperE:"#cdbcf0",light:"#fffbe9",handle:"#8fb98a",displayWire:"#e6def2",acrylicEdge:"#c9e6f2",labelInk:"#8a78b8",pinkBasket:"#e7a2c4",meshTray:"#cdc4e6",paperWhite:"#fffaf7",line:"#c8b9c9",wood:"#e6bf93",woodDark:"#c99c6e",plushCream:"#fbecc9",plushPink:"#f8b9d3",plushBlue:"#bcdcf6",clothWhite:"#fffbf6"},sf=new Map;function lf(i){if(sf.has(i.name))return sf.get(i.name);let e=of[i.name]?new Re(of[i.name]):i.color.clone(),t=new Zt({color:e,roughness:.72,metalness:0,side:Ft});return(i.name==="steel"||i.name==="handle")&&(t.metalness=.45,t.roughness=.35),i.name==="floor"&&(t.roughness=.5),i.name==="acrylicEdge"&&(t.roughness=.25),i.name==="mirror"&&(t.metalness=1,t.roughness=.04,t.color=new Re("#eef3f7"),t.envMapIntensity=1.4),i.name==="leafGreen"&&(t.color=new Re("#86cc78")),t.name=i.name,i.name==="glass"&&(t.transparent=!0,t.opacity=.32,t.depthWrite=!1,t.roughness=.05,t.metalness=.1),i.name==="light"&&(t.emissive=new Re("#fff6e0"),t.emissiveIntensity=2.6),i.name==="ceiling"&&(t.emissive=new Re("#f3ecf7"),t.emissiveIntensity=.55),(i.name==="curtain"||i.name==="greenCloth")&&(t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec3 vWN;`).replace("#include <project_vertex>",`#include <project_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec3 vWN;`).replace("#include <color_fragment>",`#include <color_fragment>
          vec2 g = abs(vWN.y) > 0.6 ? vWPos.xz : vec2(vWPos.x + vWPos.z, vWPos.y);
          g /= 0.07;
          float a = step(0.5, fract(g.x)), b = step(0.5, fract(g.y));
          diffuseColor.rgb = mix(vec3(1.0, 0.985, 0.99), diffuseColor.rgb, (a + b) * 0.5);`)}),i.name==="floor"&&(t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <project_vertex>",`#include <project_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <color_fragment>",`#include <color_fragment>
          vec2 tuv = vWPos.xz / 0.6;
          vec2 tf = abs(fract(tuv + 0.5) - 0.5);
          vec2 taa = max(fwidth(tuv), vec2(0.001));
          vec2 te = smoothstep(vec2(0.014), vec2(0.014) + taa, tf);
          float chk = mod(floor(tuv.x) + floor(tuv.y), 2.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.02, 1.01, 1.02), chk);
          diffuseColor.rgb *= 0.88 + 0.12 * te.x * te.y;`)}),sf.set(i.name,t),t}var kS=1.32,zS=.2,S0=2.4,Ie={x:0,z:0,yaw:0,pitch:-.06,face:0},Es=!0,Ts=2.4,D0=2.7,pf=-.5,cf=null;try{cf=localStorage.getItem("sh-look")}catch{}var rn=Hd(L0,{look:tr.includes(cf)?cf:tr[Math.floor(Math.random()*tr.length)]});kt.add(rn.root);var pt=null,qo=!1,la=!1,b0=!1,Xn=null,is=null,fi=null,Ln=null,hf=null,xn=null,Th=null,Ho=null,T0=()=>Th&&Th.isOpen||xn&&xn.open||Xn&&Xn.open||is&&is.open||fi&&fi.isOpen||Ln&&Ln.active;function Eh(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[a,o]=t[s],[c,l]=t[r];o>e!=l>e&&i<(c-a)*(e-o)/(l-o)+a&&(n=!n)}return n}var N0=Array.from({length:12},(i,e)=>[Math.cos(e*Math.PI/6),Math.sin(e*Math.PI/6)]);function ar(i,e,t=zS){if(!Eh(i,e,pt.floor))return!1;for(let[n,s]of N0)if(!Eh(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){let c=i-n,l=e-s,h=Math.cos(o),u=Math.sin(o),d=Math.max(0,Math.abs(c*h+l*u)-r),f=Math.max(0,Math.abs(-c*u+l*h)-a);if(d*d+f*f<t*t)return!1}return!0}function HS(i,e,t=.12){if(!Eh(i,e,pt.floor))return!1;for(let[n,s]of N0)if(!Eh(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){if(Math.min(r,a)>.1)continue;let c=i-n,l=e-s,h=Math.cos(o),u=Math.sin(o),d=Math.max(0,Math.abs(c*h+l*u)-r),f=Math.max(0,Math.abs(-c*u+l*h)-a);if(d*d+f*f<t*t)return!1}return!0}function rf(i,e,t=-.06){qt=null,Ie.x=i[0],Ie.z=i[1],Ie.yaw=Ie.face=Math.atan2(e[0]-Ie.x,e[1]-Ie.z),Ie.pitch=Es?pf:t,Ts=.5}var Wo=()=>pt&&pt.scale||1,wh={entry:()=>rf(pt.spawn,pt.look),display:()=>rf(pt.displayView,pt.displayLook,-.3),cafe:()=>rf(pt.cafe,[-2.6*Wo(),3.7*Wo()])};async function GS(){let i=fetch("scene.json").then(r=>{if(!r.ok)throw Error("scene.json "+r.status);return r.json()}),e=7907728,t=(async()=>{let r=await fetch("store.json");if(!r.ok)throw Error("store.json "+r.status);let a;if(r.body&&r.body.getReader){let l=r.body.getReader(),h=[],u=0;for(;;){let{done:d,value:f}=await l.read();if(d)break;h.push(f),u+=f.length;let p=Math.min(99,Math.round(u/e*100));$e.bar.style.width=p+"%",$e.pct.textContent="\uB9E4\uC7A5 \uBD88\uB7EC\uC624\uB294 \uC911\u2026 "+p+"%"}a=new TextDecoder().decode(await new Blob(h).arrayBuffer())}else a=await r.text();let o=atob(JSON.parse(a)),c=new Uint8Array(o.length);for(let l=0;l<o.length;l++)c[l]=o.charCodeAt(l);return new Ro().parseAsync(c.buffer,"")})(),[n,s]=await Promise.all([i,t]);pt=n,s.scene.traverse(r=>{if(r.isMesh){r.material=Array.isArray(r.material)?r.material.map(lf):lf(r.material),r.material.name==="glass"&&(r.renderOrder=2);let a=r.material.name;r.receiveShadow=!0,r.castShadow=!["ceiling","light","glass","floor","curtain"].includes(a),r.matrixAutoUpdate=!1,r.updateMatrix()}}),kt.add(s.scene),Ii=s.scene,QS(s.scene),JS(-.5),ZS(),jS(s.scene).catch(r=>console.warn("baked light unavailable",r)),wh.entry(),tb(),Th=d0({showToast:di}),Ho=_0({scene3d:kt,data:pt,canOccupy:ar,player:Ie,camera:bt,showToast:di,onFinish:r=>xn.treasureResult(r)}),xn=g0({showToast:di,npcs:ns,capture:A0,views:ff.length,minis:Th,treasure:Ho}),Xn=s0({scene3d:kt,storeRoot:Ii,data:pt,hero:rn,npcs:ns,showToast:di,isTouch:qn,canOccupy:ar,playGame:r=>xn.menu("cafe",r)}),is=o0({scene3d:kt,hero:rn,npcs:ns,showToast:di,inShop:r=>!pt.seats.some(a=>Math.hypot(r.x-a[0],r.z-a[1])<1.3)&&!ns.some(a=>a.id==="cafe"&&Math.hypot(r.x-a.x,r.z-a.z)<2.8)}),fi=l0({showToast:di}),Ln=h0({hero:rn,mirrors:Xo,camera:bt,player:Ie,showToast:di,renderNow:()=>(rn.root.position.set(Ie.x,0,Ie.z),rn.root.rotation.y=Ie.face,rn.root.visible=!0,z0(),Bn!=="low"?ti.render():Ot.render(kt,bt),Ot.domElement)}),Tt("diary-btn").addEventListener("click",r=>{fi.open(),r.currentTarget.blur()}),hf=v0({scene3d:kt,data:pt,storeRoot:Ii,isTouch:qn}),Ot.compile(kt,bt),Ot.shadowMap.needsUpdate=!0,qo=!0,$e.bar.style.width="100%",$e.pct.textContent="\uC900\uBE44 \uC644\uB8CC",$e.enter.disabled=!1,$e.enter.textContent="\uB9E4\uC7A5 \uB4E4\uC5B4\uAC00\uAE30",window.__store={mirrors:Xo,sit:r=>{let a=pt.seats[r];qt=a,Ie.x=a[0],Ie.z=a[1],Ie.face=a[2],Xn.onSit(a)},get cafe(){return Xn},get shop(){return is},get diary(){return fi},get photo(){return Ln},stand:()=>qt&&Vo(),get seats(){return pt.seats},player:Ie,setView:r=>_f(r),setQuality:r=>{Bn=r,yf()},canOccupy:ar,spots:wh,keys:wn,get entered(){return la},info:()=>Ot.info.render,bloom:vf,grade:B0,npcs:ns,lmFloor:df,get root(){return Ii},shot:r=>A0(r),get treasure(){return Ho},set camD(r){D0=r}}}GS().catch(i=>{console.error(i),$e.pct.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.",$e.enter.textContent="\uB2E4\uC2DC \uC2DC\uB3C4",$e.enter.disabled=!1,$e.enter.onclick=()=>location.reload()});$e.enter.addEventListener("click",()=>{qo&&(la=!0,$e.overlay.classList.add("gone"),setTimeout(()=>$e.overlay.hidden=!0,450),di(qn?"\uC67C\uCABD \uC544\uB798 \uC6D0\uC73C\uB85C \uAC77\uACE0, \uD654\uBA74\uC744 \uB4DC\uB798\uADF8\uD574 \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694":"WASD\uB85C \uAC77\uACE0, \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8\uB85C \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694 \xB7 V \uC2DC\uC810 \uC804\uD658"))});var wn=new Set,VS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyQ","KeyE"]);addEventListener("keydown",i=>{i.target.closest&&i.target.closest("input,textarea")||!VS.has(i.code)||i.altKey||i.ctrlKey||i.metaKey||(i.preventDefault(),wn.add(i.code))});addEventListener("keyup",i=>wn.delete(i.code));addEventListener("blur",()=>{wn.clear(),hn.x=hn.y=0});var Go=new Map;$e.canvas.addEventListener("pointerdown",i=>{if(la&&!(i.pointerType==="mouse"&&i.button!==0)){Go.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now()});try{$e.canvas.setPointerCapture(i.pointerId)}catch{}$e.canvas.classList.add("dragging")}});$e.canvas.addEventListener("pointermove",i=>{let e=Go.get(i.pointerId);if(!e)return;let t=i.pointerType==="mouse"?.0042:.0065;Ie.yaw-=(i.clientX-e.x)*t,Ie.pitch=bi.clamp(Ie.pitch-(i.clientY-e.y)*t,Es?-1.1:-1.05,Es?-.12:.9),e.x=i.clientX,e.y=i.clientY});var mf=i=>{let e=Go.get(i.pointerId);e&&i.type==="pointerup"&&Math.hypot(i.clientX-e.sx,i.clientY-e.sy)<9&&performance.now()-e.t<450&&$S(i.clientX,i.clientY),Go.delete(i.pointerId),Go.size||$e.canvas.classList.remove("dragging")};$e.canvas.addEventListener("pointerup",mf);$e.canvas.addEventListener("pointercancel",mf);$e.canvas.addEventListener("lostpointercapture",mf);$e.canvas.addEventListener("contextmenu",i=>i.preventDefault());var hn={id:null,x:0,y:0,cx:0,cy:0};$e.joy.addEventListener("pointerdown",i=>{if(hn.id!==null)return;i.preventDefault();let e=$e.joy.getBoundingClientRect();hn.id=i.pointerId,hn.cx=e.left+e.width/2,hn.cy=e.top+e.height/2;try{$e.joy.setPointerCapture(i.pointerId)}catch{}U0(i)});function U0(i){if(i.pointerId!==hn.id)return;let e=$e.joy.clientWidth*.36,t=i.clientX-hn.cx,n=i.clientY-hn.cy,s=Math.hypot(t,n);s>e&&(t*=e/s,n*=e/s),hn.x=t/e,hn.y=n/e,$e.knob.style.transform=`translate(${t}px, ${n}px)`}$e.joy.addEventListener("pointermove",U0);var gf=i=>{i.pointerId===hn.id&&(hn.id=null,hn.x=hn.y=0,$e.knob.style.transform="")};$e.joy.addEventListener("pointerup",gf);$e.joy.addEventListener("pointercancel",gf);$e.joy.addEventListener("lostpointercapture",gf);document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>{qo&&wh[i.dataset.spot](),i.blur()}));var uf=Tt("burger"),O0=Tt("spots"),xf=i=>{O0.hidden=!i,uf.setAttribute("aria-expanded",String(i)),uf.setAttribute("aria-label",i?"\uBA54\uB274 \uB2EB\uAE30":"\uBA54\uB274 \uC5F4\uAE30")};uf.addEventListener("click",i=>{xf(O0.hidden),i.currentTarget.blur()});document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>xf(!1)));$e.canvas.addEventListener("pointerdown",()=>xf(!1));function WS(i){qt=i,Ie.x=i[0],Ie.z=i[1],Ie.face=i[2],Ie.yaw=i[2],Fn.set(0,0),Xn&&Xn.onSit(i)}function XS(){let i=ns.find(e=>e.id==="cafe");return i&&pt.seats.filter(e=>e[1]>3).sort((e,t)=>Math.hypot(e[0]-i.x,e[1]-i.z)-Math.hypot(t[0]-i.x,t[1]-i.z))[0]||pt.seats[0]}document.querySelectorAll("[data-nav]").forEach(i=>i.addEventListener("click",()=>{if(i.blur(),!qo||!la)return;fi&&fi.isOpen&&fi.close();let e=i.dataset.nav;if(e==="shop")qt&&Vo(),is.shopping?Tt("basket-btn").click():is.open||(Tt("shop-btn").hidden?(wh.display(),setTimeout(()=>Tt("shop-btn").click(),60)):Tt("shop-btn").click());else if(e==="cafe"){qt&&Vo();let t=ns.find(n=>n.id==="cafe");t&&(Ie.x=t.x-1.55,Ie.z=t.z,Ie.yaw=Ie.face=Math.PI/2,Ie.pitch=Es?pf:-.06,qt=null),setTimeout(()=>Tt("order-btn").click(),60)}else if(e==="diary")qt||WS(XS()),fi.open();else if(e==="photo"){qt&&Vo();let t=Xo[0];if(!t)return;Ie.x=t.c.x-1.2,Ie.z=t.c.z,Ie.yaw=Ie.face=Math.PI/2,Tt("photo-btn").click()}else e==="mine"&&is.openMine()}));Tt("look-toggle").addEventListener("click",i=>{if(i.currentTarget.blur(),Ln&&Ln.active)return;let e=tr[(tr.indexOf(rn.look)+1)%tr.length];rn.setLook(e),rn.root.traverse(t=>{t.isMesh&&(t.frustumCulled=!1)});try{localStorage.setItem("sh-look",e)}catch{}di(`\u{1F457} \uCE90\uB9AD\uD130\uB97C \uBC14\uAFE8\uC5B4\uC694 \xB7 ${t0[e]}`)});Tt("mjp-btn").addEventListener("click",i=>{i.currentTarget.blur(),xn.menu("shop")});Tt("cafegame-btn").addEventListener("click",i=>{i.currentTarget.blur(),xn.menu("cafe")});Tt("hint-toggle").addEventListener("click",i=>{let e=Tt("hint");e.hidden=!e.hidden,i.currentTarget.blur()});var F0=Tt("view-toggle");function _f(i){Es=i,rn.root.visible=i,Ie.pitch=i?pf:-.06,Ts=.5,F0.querySelector(".lbl").textContent=i?"1\uC778\uCE6D":"3\uC778\uCE6D"}F0.addEventListener("click",i=>{_f(!Es),i.currentTarget.blur()});addEventListener("keydown",i=>{i.code==="KeyV"&&la&&!(i.target.closest&&i.target.closest("input,textarea"))&&_f(!Es)});var E0;function di(i){$e.toast.textContent=i,$e.toast.classList.add("on"),clearTimeout(E0),E0=setTimeout(()=>$e.toast.classList.remove("on"),3600)}var xt=$e.map?$e.map.getContext("2d"):null,af=null;function qS(){if(!$e.map||$e.map.hidden||!pt)return;if(!af){let s=pt.floor.map(c=>c[0]),r=pt.floor.map(c=>c[1]),a=[Math.min(...s),Math.min(...r),Math.max(...s),Math.max(...r)],o=Math.min(($e.map.width-24)/(a[2]-a[0]),($e.map.height-24)/(a[3]-a[1]));af={s:o,mp:(c,l)=>[$e.map.width/2+(c-(a[0]+a[2])/2)*o,$e.map.height/2+(l-(a[1]+a[3])/2)*o]}}let{s:i,mp:e}=af;xt.clearRect(0,0,$e.map.width,$e.map.height),xt.beginPath(),pt.floor.forEach(([s,r],a)=>xt[a?"lineTo":"moveTo"](...e(s,r))),xt.closePath(),xt.fillStyle="#dff3e8",xt.fill(),xt.strokeStyle="#8fc7aa",xt.lineWidth=3,xt.stroke();for(let[s,r,a,o,c,l]of pt.icons)xt.save(),xt.translate(...e(s,r)),xt.rotate(c),xt.fillStyle=of[l]||"#"+pt.colors[l],xt.strokeStyle="#a89cc4",xt.lineWidth=1.2,xt.fillRect(-a*i/2,-o*i/2,a*i,o*i),xt.strokeRect(-a*i/2,-o*i/2,a*i,o*i),xt.restore();xt.textAlign="center",xt.font="700 19px system-ui, sans-serif",xt.fillStyle="#5d4f7c";for(let[s,[r,a]]of pt.labels)xt.fillText(s,...e(r,a));let[t,n]=e(Ie.x,Ie.z);xt.save(),xt.translate(t,n),xt.rotate(-Ie.yaw),xt.beginPath(),xt.moveTo(0,15),xt.lineTo(-9,-8),xt.lineTo(9,-8),xt.closePath(),xt.fillStyle="#9a72d8",xt.fill(),xt.lineWidth=2.5,xt.strokeStyle="#fff",xt.stroke(),xt.restore()}function Ah(){let i=$e.canvas.clientWidth,e=$e.canvas.clientHeight;Ot.setSize(i,e,!1),typeof ti!="undefined"&&(ti.setPixelRatio(Ot.getPixelRatio()),ti.setSize(i,e)),bt.aspect=i/e;let t=74*Math.PI/180,n=2*Math.atan(Math.tan(t/2)/bt.aspect)*180/Math.PI;bt.fov=Math.min(92,Math.max(64,n)),bt.updateProjectionMatrix()}var ti=new _h(Ot,new Ut(1,1,{type:Bt,samples:qn?2:4}));ti.addPass(new vh(kt,bt));var ss=new ra(kt,bt,1,1);ss.output=ra.OUTPUT.Default;ss.blendIntensity=1;ss.updateGtaoMaterial({radius:.55,distanceExponent:1.3,thickness:1.4,scale:1.25,samples:qn?8:14});ss.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:qn?8:16});ti.addPass(ss);{let i=ss.render.bind(ss);ss.render=(...e)=>{for(let t of zd)t.visible=!1;i(...e);for(let t of zd)t.visible=!0}}var vf=new aa(new de(256,256),.3,.5,2);ti.addPass(vf);ti.addPass(new Sh);var B0=new sa({uniforms:{tDiffuse:{value:null},saturation:{value:1.12},contrast:{value:1.05},warmth:{value:.025},lift:{value:.012},vignette:{value:.22}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float saturation, contrast, warmth, lift, vignette; varying vec2 vUv;
    void main() {
      vec4 tex = texture2D(tDiffuse, vUv); vec3 c = tex.rgb;
      c += vec3(warmth, warmth * 0.25, -warmth);                 // warm white balance
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, saturation);                            // livelier pastel colours
      c = (c - 0.5) * contrast + 0.5;                             // gentle S-curve feel
      c = c * (1.0 - lift) + lift * vec3(1.0, 0.97, 1.0);         // soft, slightly pink blacks
      vec2 d = vUv - 0.5; c *= 1.0 - vignette * smoothstep(0.35, 0.85, length(d * vec2(1.1, 1.0)));
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), tex.a);
    }`});ti.addPass(B0);var Bn=qn?"mid":"high";try{Bn=localStorage.getItem("sh-quality")||Bn}catch{}var k0=Tt("quality-toggle");function yf(){ss.enabled=Bn==="high",vf.enabled=Bn!=="low",Ot.shadowMap.enabled=Bn!=="low",kt.traverse(i=>{i.material&&i.material.needsUpdate!==void 0&&(i.material.needsUpdate=!0)}),Ot.shadowMap.needsUpdate=!0,k0.querySelector(".lbl").textContent={high:"\uACE0\uD654\uC9C8",mid:"\uBCF4\uD1B5",low:"\uAC00\uBCCD\uAC8C"}[Bn]}k0.addEventListener("click",i=>{Bn={high:"mid",mid:"low",low:"high"}[Bn];try{localStorage.setItem("sh-quality",Bn)}catch{}yf(),Ah(),i.currentTarget.blur()});yf();new ResizeObserver(Ah).observe($e.canvas);Ah();var qt=null,Ii=null,bh=new Ms,w0=new de;function $S(i,e){if(!pt||!pt.seats||!Ii)return;let t=$e.canvas.getBoundingClientRect();if(w0.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),bh.setFromCamera(w0,bt),xn&&xn.owner&&bh.intersectObject(xn.owner.c.root,!0).length){xn.menu("shop");return}if(xn&&xn.cafeStaff&&bh.intersectObject(xn.cafeStaff.c.root,!0).length){xn.menu("cafe");return}let n=bh.intersectObject(Ii,!0)[0];if(!n)return;let s=null,r=.6;for(let a of pt.seats){let o=Math.hypot(a[0]-n.point.x,a[1]-n.point.z);o<r&&n.point.y<1.1&&(r=o,s=a)}s&&(qt=s,Ie.x=s[0],Ie.z=s[1],Ie.face=s[2],Fn.set(0,0),di("\uC758\uC790\uC5D0 \uC549\uC558\uC5B4\uC694 \u{1FA91} \uC6C0\uC9C1\uC774\uBA74 \uC77C\uC5B4\uB098\uC694"),Xn&&Xn.onSit(s))}function Vo(){let i=qt;qt=null,Xn&&Xn.onStand();let e=i[2]+Math.PI;for(let t of[.45,.6,.8,1,1.25])for(let n of[0,.5,-.5,1,-1,1.6,-1.6]){let s=i[0]+Math.sin(e+n)*t,r=i[1]+Math.cos(e+n)*t;if(ar(s,r)){Ie.x=s,Ie.z=r;return}}}var YS=[/^Perimeter wall/,/^Guest floor$/,/^Ceiling$/,/^Display hall - angled partition$/,/^Cafe partition$/,/^Corridor partition$/,/^Corridor return$/,/^Cafe end wall/,/^Round column/,/^Shop counter - (staff area room|back wall|side wall)/],KS=1.12,df={value:0};async function jS(i){let e=await fetch("light.json");if(!e.ok)return;let t=await e.json(),n=l=>{let h=atob(l),u=new Uint8Array(h.length);for(let d=0;d<h.length;d++)u[d]=h.charCodeAt(d);return u},s=await new Ro().parseAsync(n(t.shell).buffer,""),r=await createImageBitmap(new Blob([n(t.lightmap)],{type:"image/jpeg"}),{imageOrientation:"none"}),a=new $t(r);a.flipY=!1,a.colorSpace=wt,a.needsUpdate=!0,a.anisotropy=4;{let l=document.createElement("canvas");l.width=l.height=64;let h=l.getContext("2d");h.drawImage(r,0,0,64,64);let u=h.getImageData(0,0,64,64).data,d=[];for(let f=0;f<u.length;f+=4)d.push(Math.pow((u[f]*.2126+u[f+1]*.7152+u[f+2]*.0722)/255,2.2));d.sort((f,p)=>f-p),df.value=d[Math.floor(d.length*.9)]*.85}let o=l=>{l.uniforms.lmFloor=df,l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
uniform float lmFloor;`).replace("reflectedLight.indirectDiffuse += lightMapTexel.rgb","reflectedLight.indirectDiffuse += max(lightMapTexel.rgb, vec3(lmFloor))")},c=new Map;s.scene.traverse(l=>{if(!l.isMesh)return;let h=Array.isArray(l.material)?l.material[0]:l.material,u=h.name;if(!c.has(u)){let d=lf(h),f=new Wt({color:d.color,lightMap:a,lightMapIntensity:t.gain||KS,side:Ft});f.name=u,d.onBeforeCompile&&u==="floor"?f.onBeforeCompile=d.onBeforeCompile:f.onBeforeCompile=o,c.set(u,f)}l.material=c.get(u),l.castShadow=!1,l.receiveShadow=!1}),i.traverse(l=>{let h=(l.name||"").replace(/_/g," ");YS.some(u=>u.test(h))&&l.traverse(u=>{u.isMesh&&(u.visible=!1)})}),kt.add(s.scene),Ot.shadowMap.needsUpdate=!0}function ZS(){Ii.updateMatrixWorld(!0);let i=new Ms,e=new O,t=new O;for(let n of pt.seats){let s=null;for(let r of[.55,.65,.75])for(let a=0;a<72;a++){let o=a*Math.PI/36;t.set(Math.sin(o),0,Math.cos(o)),e.set(n[0],r,n[1]),i.set(e,t),i.far=.9;let c=i.intersectObject(Ii,!0).find(l=>l.object.visible&&!/chair|mint|trim|pink$/i.test(l.object.material&&l.object.material.name||""));c&&(!s||c.distance<s.d-.01)&&(s={d:c.distance,a:o})}s&&s.d<.8&&(n[2]=Math.atan2(Math.sin(s.a),Math.cos(s.a)))}}function JS(i){Ii.updateMatrixWorld(!0);let e=s=>/^Cafe end - cafe order counter/.test((s&&s.name||"").replace(/_/g," ")),t=[];Ii.traverse(s=>{e(s)&&!e(s.parent)&&t.push(s)});for(let s of t){let r=s.parent.worldToLocal(new O(0,0,0)),a=s.parent.worldToLocal(new O(i,0,0));s.position.add(a.sub(r)),s.updateMatrix(),s.updateMatrixWorld(!0)}for(let s of pt.blocks)Math.abs(s[0]-5.246)<.05&&Math.abs(s[1]-4.508)<.05&&(s[0]+=i);let n=(pt.npcs||[]).find(s=>s.id==="cafe");n&&(n.x=5.55)}var ff=[{p:[6.2,1.5,-4.6],t:[2.5,.8,-1.2]},{p:[.9,1.6,3],t:[-1.5,.7,-2]},{p:[3.4,1.5,3.6],t:[-3,.7,6.2]},{p:[3,1.5,4.5],t:[5.6,1,4.5]},{p:[5.4,1.5,-2.9],t:[4.6,.9,-5.8]},{p:[-6.4,1.6,6],t:[0,.7,2]},{p:[-2,1.7,-3],t:[3,.7,-5.2]},{p:[2.5,2.2,-.5],t:[-4,.4,4]},{p:[-1,1.6,5.8],t:[3,.8,1]},{p:[7,1.5,-2.6],t:[7,.9,2]}];function A0(i){let e=ff[i%ff.length],t=960,n=720,s={p:bt.position.clone(),q:bt.quaternion.clone(),fov:bt.fov,vis:rn.root.visible};rn.root.visible=!1,Ot.setSize(t,n,!1),ti.setSize(t,n),bt.aspect=t/n,bt.fov=62,bt.updateProjectionMatrix(),bt.position.set(...e.p),bt.lookAt(...e.t),bt.updateMatrixWorld(),Bn!=="low"?ti.render():Ot.render(kt,bt);let r=document.createElement("canvas");return r.width=t,r.height=n,r.getContext("2d").drawImage(Ot.domElement,0,0,t,n),bt.position.copy(s.p),bt.quaternion.copy(s.q),bt.fov=s.fov,rn.root.visible=s.vis,Ah(),r}var Xo=[];function QS(i){i.updateMatrixWorld(!0),i.traverse(e=>{if(!e.isMesh||!e.material||e.material.name!=="mirror")return;let t=e,n=!1;for(;t;)/leaning.mirror/i.test(t.name.replace(/_/g," "))&&(n=!0),t=t.parent;if(!n)return;let s=new dn().setFromObject(e),r=s.getCenter(new O),a=s.getSize(new O),o=.12,c=new O(-Math.cos(o),Math.sin(o),0),l=Math.max(a.x,a.z)-.02,h=a.y/Math.cos(o)-.02,u=Math.min(window.devicePixelRatio||1,2),d=new zo(new Xi(l,h),{textureWidth:Math.round((qn?384:640)*u*(l/h)*2),textureHeight:Math.round((qn?384:640)*u),color:14674158,clipBias:.003});d.position.copy(r).addScaledVector(c,.02),e.visible=!1,d.lookAt(d.position.clone().add(c)),kt.add(d),Xo.push({ref:d,c:r,pane:e})})}function z0(){for(let i of Xo)i.ref.visible=(Bn!=="low"||Ln&&Ln.active)&&Math.hypot(Ie.x-i.c.x,Ie.z-i.c.z)<7,i.pane.visible=!i.ref.visible}var ns=[],eb={cafe:{opt:{look:"cafe"},say:"\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615"},shop:{opt:{look:"shop"},say:"\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}"}};function tb(){for(let i of pt.npcs||[]){let e=eb[i.id];if(!e)continue;let t=Hd(L0,e.opt);t.root.position.set(i.x,0,i.z),t.root.rotation.y=i.face,t.root.scale.setScalar(1.12),t.root.position.y=i.id==="shop"?.15:.2,kt.add(t.root);let n=document.createElement("div");n.className="bubble",n.textContent=e.say,Tt("bubbles").appendChild(n),ns.push({...i,c:t,el:n,yaw:0})}}var oa=new O;function nb(i,e){for(let t of ns){t.c.animate(i,t.speed||0,e+t.id.length),t.y!==void 0&&(t.c.root.position.set(t.x,t.y,t.z),t.c.root.rotation.y=t.face),t.carry&&(t.c.arms[0].rotation.x=t.c.arms[1].rotation.x=-1.35);let n=Ie.x-t.x,s=Ie.z-t.z,r=Math.hypot(n,s),a=0;if(r<4&&!t.speed&&(a=Math.atan2(n,s)-t.face,a=Math.atan2(Math.sin(a),Math.cos(a)),a=bi.clamp(a,-.9,.9)),t.yaw+=(a-t.yaw)*Math.min(1,i*5),t.c.head.rotation.y=t.yaw,t.c.head.rotation.x+=((r<4?-.22:0)-t.c.head.rotation.x)*Math.min(1,i*4),r<2.8){oa.set(t.x,1.6,t.z).project(bt);let c=$e.canvas.getBoundingClientRect(),l=oa.z<1&&Math.abs(oa.x)<1.1&&Math.abs(oa.y)<1.1;t.el.style.transform=`translate(${(oa.x*.5+.5)*c.width}px, ${(-oa.y*.5+.5)*c.height}px) translate(-50%, -100%)`,t.el.classList.toggle("on",l)}else t.el.classList.remove("on")}}var Fn=new de,R0=performance.now(),C0=0;function ib(){let i=Wo();return qt?"\u{1FA91} \uC549\uC544\uC11C \uC26C\uB294 \uC911":Ie.z>1.75*i?"\u2615 \uCE74\uD398 \uC88C\uC11D":Ie.x>3.2*i&&Ie.z<-1.6*i?"\u{1F6AA} \uC785\uAD6C":Ie.x>3*i?"\u{1F380} \uBCF5\uB3C4":"\u{1F9F8} \uC9C4\uC5F4\uB300 \uC0AC\uC774"}function H0(i){let e=Math.min((i-R0)/1e3,.05);if(R0=i,qo){if(la){let o=(wn.has("ArrowLeft")||wn.has("KeyQ")?1:0)-(wn.has("ArrowRight")||wn.has("KeyE")?1:0);Ie.yaw+=o*1.7*e;let c=(wn.has("KeyW")||wn.has("ArrowUp")?1:0)-(wn.has("KeyS")||wn.has("ArrowDown")?1:0),l=(wn.has("KeyD")?1:0)-(wn.has("KeyA")?1:0);hn.id!==null&&(c=-hn.y,l=hn.x);let h=Math.hypot(c,l);h>1&&(c/=h,l/=h),qt&&h>.25&&Vo(),(qt||T0())&&(c=0,l=0);let u=wn.has("ShiftLeft")||wn.has("ShiftRight")?1.6:1,d=Math.sin(Ie.yaw),f=Math.cos(Ie.yaw),p=(c*d-l*f)*S0*u,_=(c*f+l*d)*S0*u,m=1-Math.exp(-e*12);Fn.x+=(p-Fn.x)*m,Fn.y+=(_-Fn.y)*m;let g=Fn.x*e,v=Fn.y*e;Math.abs(g)+Math.abs(v)>1e-5&&(ar(Ie.x+g,Ie.z+v)?(Ie.x+=g,Ie.z+=v):(ar(Ie.x+g,Ie.z)?Ie.x+=g:Fn.x=0,ar(Ie.x,Ie.z+v)?Ie.z+=v:Fn.y=0));let b=Math.hypot(Fn.x,Fn.y);if(b>.15){let E=Math.atan2(Fn.x,Fn.y)-Ie.face;E=Math.atan2(Math.sin(E),Math.cos(E)),Ie.face+=E*Math.min(1,e*12)}rn.animate(e,b,i/1e3,!!qt),Xn&&Xn.update(e,Ie,qt),hf&&hf.update(e,i/1e3),xn&&xn.update(Ie,qt),Ho&&Ho.update(e,i/1e3),is&&is.update(Ie,qt),Ln&&(Ln.update(qt),Ln.applyPose(i/1e3)),Tt("diary-btn").hidden=!qt||!fi||fi.isOpen,Tt("actions").style.visibility=T0()?"hidden":"",nb(e,i/1e3),z0(),!b0&&Ie.z>2*Wo()&&Ie.x<3.6*Wo()&&(b0=!0,di("\uCE74\uD398 \uC88C\uC11D\uC5D0 \uB3C4\uCC29\uD588\uC5B4\uC694 \u2615"))}let t=Math.sin(Ie.pitch),n=Math.cos(Ie.pitch),s=Math.sin(Ie.yaw),r=Math.cos(Ie.yaw);if(rn.root.position.set(Ie.x,0,Ie.z),rn.root.rotation.y=Ie.face,Ln&&Ln.camera())rn.root.visible=!0;else if(Es){let o=Ie.x,c=.9,l=Ie.z,h=-s,u=-r,d=D0,f=n*d,p=f;for(let v=.2;v<=f;v+=.08)if(!HS(o+h*v,l+u*v)){p=Math.max(.15,v-.15);break}Ts+=(p-Ts)*Math.min(1,e*(p<Ts?18:3));let _=(pt.ceiling||2.65)-.25,m=Math.min(_,c-t*d);bt.position.set(o+h*Ts,m,l+u*Ts);let g=bi.clamp(1-Ts/f,0,1);bt.lookAt(o+s*g*1.8,c+.05+g*.15,l+r*g*1.8),g>.7&&(bt.position.y=Math.min(_+.03,m+.1)),rn.root.visible=!0}else{let o=qt?1.02:kS;bt.position.set(Ie.x,o,Ie.z),bt.lookAt(Ie.x+s*n,o+t,Ie.z+r*n)}Bn!=="low"?ti.render():Ot.render(kt,bt),Ln&&Ln.afterRender(Ot.domElement);let a=ib();$e.where.textContent!==a&&($e.where.textContent=a),(C0=(C0+1)%2)===0&&qS()}requestAnimationFrame(H0)}requestAnimationFrame(H0);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
