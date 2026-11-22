(()=>{var um=0,Yu=1,fm=2;var fr=1,dm=2,la=3,Ni=0,Sn=1,Ht=2,gn=0,ca=1,ti=2,Ku=3,ju=4,Cc=5;var hi=100,pm=101,mm=102,gm=103,xm=104,dr=200,_m=201,vm=202,ym=203,Zu=204,Ju=205,Io=206,Mm=207,Lo=208,Sm=209,bm=210,Tm=211,Em=212,wm=213,Am=214,Ql=0,ec=1,tc=2,$r=3,nc=4,ic=5,sc=6,rc=7,Pc=0,Rm=1,Cm=2,Ui=0,Do=1,No=2,Uo=3,Fo=4,Oo=5,Bo=6,pr=7,Iu="attached",Pm="detached",Qu=300,mr=301,ha=302,Ic=303,Lc=304,Rn=1e3,ai=1001,qr=1002,Bt=1003,Dc=1004;var gr=1005;var ln=1006,ua=1007;var ui=1008;var Cn=1009,ef=1010,tf=1011,fa=1012,Nc=1013,Mi=1014,ni=1015,Xt=1016,Uc=1017,Fc=1018,fs=1020,nf=35902,sf=35899,rf=1021,af=1022,Vn=1023,es=1026,Si=1027,Oc=1028,Bc=1029,ks=1030,kc=1031;var zc=1033,ko=33776,zo=33777,Ho=33778,Go=33779,Hc=35840,Gc=35841,Vc=35842,Wc=35843,Xc=36196,$c=37492,qc=37496,Yc=37488,Kc=37489,Vo=37490,jc=37491,Zc=37808,Jc=37809,Qc=37810,eh=37811,th=37812,nh=37813,ih=37814,sh=37815,rh=37816,ah=37817,oh=37818,lh=37819,ch=37820,hh=37821,uh=36492,fh=36494,dh=36495,ph=36283,mh=36284,Wo=36285,gh=36286;var tr=2300,nr=2301,Zl=2302,Lu=2303,Du=2400,Nu=2401,Uu=2402,Im=2500;var of=0,Xo=1,da=2,Lm=3200;var pa=0,Dm=1,ds="",Lt="srgb",Fn="srgb-linear",Ka="linear",At="srgb";var Jl=7680;var Nm=519,Um=512,Fm=513,Om=514,lf=515,Bm=516,km=517,cf=518,hf=519,uf=35044;var ff="300 es",oi=2e3,Yr=2001;function Xg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zm(){let i=Kr("canvas");return i.style.display="block",i}var mp={},jr=null;function ja(...i){let e="THREE."+i.shift();jr?jr("log",e,...i):console.log(e,...i)}function Hm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=Hm(i);let e="THREE."+i.shift();if(jr)jr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=Hm(i);let e="THREE."+i.shift();if(jr)jr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function er(...i){let e=i.join(" ");e in mp||(mp[e]=!0,Ye(...i))}function Gm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Vm={[Ql]:Ql,[tc]:sc,[nc]:nc,[$r]:ic,[ec]:ec,[sc]:tc,[rc]:rc,[ic]:$r},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gp=1234567,Xa=Math.PI/180,ir=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function df(i,e){return(i%e+e)%e}function qg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yg(i,e,t){return i!==e?(t-i)/(e-i):0}function $a(i,e,t){return(1-t)*i+t*e}function Kg(i,e,t,n){return $a(i,e,1-Math.exp(-t*n))}function jg(i,e=1){return e-Math.abs(df(i,e*2)-e)}function Zg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ex(i,e){return i+Math.random()*(e-i)}function tx(i){return i*(.5-Math.random())}function nx(i){i!==void 0&&(gp=i);let e=gp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ix(i){return i*Xa}function sx(i){return i*ir}function rx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ax(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ox(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mf(i,e){if(e.constructor===Float32Array)return i;let t=xh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function gf(i,e){if(e.constructor===Float32Array)return i;let t=xh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Fi={DEG2RAD:Xa,RAD2DEG:ir,generateUUID:bi,clamp:ft,euclideanModulo:df,mapLinear:qg,inverseLerp:Yg,lerp:$a,damp:Kg,pingpong:jg,smoothstep:Zg,smootherstep:Jg,randInt:Qg,randFloat:ex,randFloatSpread:tx,seededRandom:nx,degToRad:ix,radToDeg:sx,isPowerOfTwo:rx,ceilPowerOfTwo:ax,floorPowerOfTwo:pf,setQuaternionFromProperEuler:ox,normalize:gf,denormalize:mf},Sf=class Sf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sf.prototype.isVector2=!0;var ye=Sf,Qn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*_;p<0&&(f=-f,d=-d,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),v=Math.sin(M);m=Math.sin(m*M)/v,o=Math.sin(o*M)/v,l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+_*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+_*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bf=class bf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bf.prototype.isVector3=!0;var H=bf,iu=new H,xp=new Qn,Tf=class Tf{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],M=s[1],v=s[4],y=s[7],T=s[2],E=s[5],x=s[8];return r[0]=a*_+o*M+l*T,r[3]=a*p+o*v+l*E,r[6]=a*m+o*y+l*x,r[1]=c*_+h*M+u*T,r[4]=c*p+h*v+u*E,r[7]=c*m+h*y+u*x,r[2]=f*_+d*M+g*T,r[5]=f*p+d*v+g*E,r[8]=f*m+d*y+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(su.makeScale(e,t)),this}rotate(e){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(su.makeRotation(-e)),this}translate(e,t){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tf.prototype.isMatrix3=!0;var rt=Tf,su=new rt,_p=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vp=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){let i={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(s.r=Xr(s.r),s.g=Xr(s.g),s.b=Xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ds?Ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fn]:{primaries:e,whitePoint:n,transfer:Ka,toXYZ:_p,fromXYZ:vp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:At,toXYZ:_p,fromXYZ:vp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}var ht=lx();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ar,ac=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=Kr("canvas")),Ar.width=e.width,Ar.height=e.height;let s=Ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cx=0,Zr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ru(s[a].image)):r.push(ru(s[a]))}else r=ru(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ru(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ac.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var hx=0,au=new H,tn=class i extends Pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ai,s=ai,r=ln,a=ui,o=Vn,l=Cn,c=i.DEFAULT_ANISOTROPY,h=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=bi(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Qu;tn.DEFAULT_ANISOTROPY=1;var Ef=class Ef{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(d+1)/2,T=(m+1)/2,E=(h+f)/4,x=(u+_)/4,b=(g+p)/4;return v>y&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=x/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ef.prototype.isVector4=!0;var Rt=Ef,oc=class extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends oc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Za=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lc=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Rc=class Rc{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,_,p)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Rr.setFromMatrixColumn(e,0).length(),r=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,fx)}lookAt(e,t,n){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),bs.crossVectors(n,jn),bs.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),bs.crossVectors(n,jn)),bs.normalize(),Ml.crossVectors(jn,bs),s[0]=bs.x,s[4]=Ml.x,s[8]=jn.x,s[1]=bs.y,s[5]=Ml.y,s[9]=jn.y,s[2]=bs.z,s[6]=Ml.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],v=n[7],y=n[11],T=n[15],E=s[0],x=s[4],b=s[8],P=s[12],S=s[1],R=s[5],I=s[9],z=s[13],L=s[2],w=s[6],U=s[10],D=s[14],O=s[3],k=s[7],F=s[11],B=s[15];return r[0]=a*E+o*S+l*L+c*O,r[4]=a*x+o*R+l*w+c*k,r[8]=a*b+o*I+l*U+c*F,r[12]=a*P+o*z+l*D+c*B,r[1]=h*E+u*S+f*L+d*O,r[5]=h*x+u*R+f*w+d*k,r[9]=h*b+u*I+f*U+d*F,r[13]=h*P+u*z+f*D+d*B,r[2]=g*E+_*S+p*L+m*O,r[6]=g*x+_*R+p*w+m*k,r[10]=g*b+_*I+p*U+m*F,r[14]=g*P+_*z+p*D+m*B,r[3]=M*E+v*S+y*L+T*O,r[7]=M*x+v*R+y*w+T*k,r[11]=M*b+v*I+y*U+T*F,r[15]=M*P+v*z+y*D+T*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],M=l*d-c*f,v=o*d-c*u,y=o*f-l*u,T=a*d-c*h,E=a*f-l*h,x=a*u-o*h;return t*(_*M-p*v+m*y)-n*(g*M-p*T+m*E)+s*(g*v-_*T+m*x)-r*(g*y-_*E+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=t*o-n*a,v=t*l-s*a,y=t*c-r*a,T=n*l-s*o,E=n*c-r*o,x=s*c-r*l,b=h*_-u*g,P=h*p-f*g,S=h*m-d*g,R=u*p-f*_,I=u*m-d*_,z=f*m-d*p,L=M*z-v*I+y*R+T*S-E*P+x*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/L;return e[0]=(o*z-l*I+c*R)*w,e[1]=(s*I-n*z-r*R)*w,e[2]=(_*x-p*E+m*T)*w,e[3]=(f*E-u*x-d*T)*w,e[4]=(l*S-a*z-c*P)*w,e[5]=(t*z-s*S+r*P)*w,e[6]=(p*y-g*x-m*v)*w,e[7]=(h*x-f*y+d*v)*w,e[8]=(a*I-o*S+c*b)*w,e[9]=(n*S-t*I-r*b)*w,e[10]=(g*E-_*y+m*M)*w,e[11]=(u*y-h*E-d*M)*w,e[12]=(o*P-a*R-l*b)*w,e[13]=(t*R-n*P+s*b)*w,e[14]=(_*v-g*T-p*M)*w,e[15]=(h*T-u*v+f*M)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,p=a*u,m=o*u,M=l*c,v=l*h,y=l*u,T=n.x,E=n.y,x=n.z;return s[0]=(1-(_+m))*T,s[1]=(d+y)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+v)*x,s[9]=(p-M)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Rr.set(s[0],s[1],s[2]).length(),o=Rr.set(s[4],s[5],s[6]).length(),l=Rr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xi.copy(this);let c=1/a,h=1/o,u=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,t.setFromRotationMatrix(xi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=oi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===oi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Yr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=oi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===oi)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Yr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Rc.prototype.isMatrix4=!0;var Ke=Rc,Rr=new H,xi=new Ke,ux=new H(0,0,0),fx=new H(1,1,1),bs=new H,Ml=new H,jn=new H,yp=new Ke,Mp=new Qn,Ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mp.setFromEuler(this),this.setFromQuaternion(Mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dx=0,Sp=new H,Cr=new Qn,$i=new Ke,Sl=new H,La=new H,px=new H,mx=new Qn,bp=new H(1,0,0),Tp=new H(0,1,0),Ep=new H(0,0,1),wp={type:"added"},gx={type:"removed"},Pr={type:"childadded",child:null},ou={type:"childremoved",child:null},Ft=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Ii,n=new Qn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new rt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(bp,e)}rotateY(e){return this.rotateOnAxis(Tp,e)}rotateZ(e){return this.rotateOnAxis(Ep,e)}translateOnAxis(e,t){return Sp.copy(e).applyQuaternion(this.quaternion),this.position.add(Sp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bp,e)}translateY(e){return this.translateOnAxis(Tp,e)}translateZ(e){return this.translateOnAxis(Ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sl.copy(e):Sl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(La,Sl,this.up):$i.lookAt(Sl,La,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix($i),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wp),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gx),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wp),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nt=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},xx={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},bl={h:0,s:0,l:0};function lu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=df(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lu(a,r,e+1/3),this.g=lu(a,r,e),this.b=lu(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Wm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return ht.workingToColorSpace(An.copy(this),e),Math.round(ft(An.r*255,0,255))*65536+Math.round(ft(An.g*255,0,255))*256+Math.round(ft(An.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(An.copy(this),t);let n=An.r,s=An.g,r=An.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Lt){ht.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,s=An.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(bl);let n=$a(Ts.h,bl.h,t),s=$a(Ts.s,bl.s,t),r=$a(Ts.l,bl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new De;De.NAMES=Wm;var Ja=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sr=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new H,qi=new H,cu=new H,Yi=new H,Ir=new H,Lr=new H,Ap=new H,hu=new H,uu=new H,fu=new H,du=new Rt,pu=new Rt,mu=new Rt,Ji=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_i.subVectors(e,t),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_i.subVectors(s,t),qi.subVectors(n,t),cu.subVectors(e,t);let a=_i.dot(_i),o=_i.dot(qi),l=_i.dot(cu),c=qi.dot(qi),h=qi.dot(cu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return du.setScalar(0),pu.setScalar(0),mu.setScalar(0),du.fromBufferAttribute(e,t),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(du,r.x),a.addScaledVector(pu,r.y),a.addScaledVector(mu,r.z),a}static isFrontFacing(e,t,n,s){return _i.subVectors(n,t),qi.subVectors(e,t),_i.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),_i.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ir.subVectors(s,n),Lr.subVectors(r,n),hu.subVectors(e,n);let l=Ir.dot(hu),c=Lr.dot(hu);if(l<=0&&c<=0)return t.copy(n);uu.subVectors(e,s);let h=Ir.dot(uu),u=Lr.dot(uu);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ir,a);fu.subVectors(e,r);let d=Ir.dot(fu),g=Lr.dot(fu);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Lr,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Ap.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Ap,o);let m=1/(p+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(Ir,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tl.copy(n.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),El.subVectors(this.max,Da),Dr.subVectors(e.a,Da),Nr.subVectors(e.b,Da),Ur.subVectors(e.c,Da),Es.subVectors(Nr,Dr),ws.subVectors(Ur,Nr),Ks.subVectors(Dr,Ur);let t=[0,-Es.z,Es.y,0,-ws.z,ws.y,0,-Ks.z,Ks.y,Es.z,0,-Es.x,ws.z,0,-ws.x,Ks.z,0,-Ks.x,-Es.y,Es.x,0,-ws.y,ws.x,0,-Ks.y,Ks.x,0];return!gu(t,Dr,Nr,Ur,El)||(t=[1,0,0,0,1,0,0,0,1],!gu(t,Dr,Nr,Ur,El))?!1:(wl.crossVectors(Es,ws),t=[wl.x,wl.y,wl.z],gu(t,Dr,Nr,Ur,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new H,new H,new H,new H,new H,new H,new H,new H],vi=new H,Tl=new yn,Dr=new H,Nr=new H,Ur=new H,Es=new H,ws=new H,Ks=new H,Da=new H,El=new H,wl=new H,js=new H;function gu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){js.fromArray(i,r);let o=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),l=e.dot(js),c=t.dot(js),h=n.dot(js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var an=new H,Al=new ye,_x=0,Zt=class extends Pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_x++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uf,this.updateRanges=[],this.gpuType=ni,this.version=0,this._normalizationScale=e!==void 0?xh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gf(e,this.array)}};var Qa=class extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var eo=class extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},vx=new yn,Na=new H,xu=new H,Hn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);let t=Na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Na,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(xu)),this.expandByPoint(Na.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yx=0,ri=new Ke,_u=new Ft,Fr=new H,Zn=new yn,Ua=new yn,mn=new H,Pt=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xg(e)?eo:Qa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ua.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Zn.min,Ua.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,Ua.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(Ua.min),Zn.expandByPoint(Ua.max))}Zn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mn.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(e,c),mn.add(Fr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new H,l[P]=new H;let h=new H,u=new H,f=new H,d=new ye,g=new ye,_=new ye,p=new H,m=new H;function M(P,S,R){c[P]=c[S]=c[R]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,R),d.fromBufferAttribute(r,P),g.fromBufferAttribute(r,S),_.fromBufferAttribute(r,R),u.sub(h),f.sub(h),g.sub(d),_.sub(d);let I=1/(g.x*_.y-_.x*g.y);isFinite(I)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(I),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(I),o[P].add(p),o[S].add(p),o[R].add(p),l[P].add(m),l[S].add(m),l[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,S=v.length;P<S;++P){let R=v[P],I=R.start,z=R.count;for(let L=I,w=I+z;L<w;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let y=new H,T=new H,E=new H,x=new H;function b(P){E.fromBufferAttribute(s,P),x.copy(E);let S=o[P];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),T.crossVectors(x,S);let I=T.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,S=n.count;P<S;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,h=new H,u=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Zt(f,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uf,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Rp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Rp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Rp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=bi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Un=new H,Cs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?xh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gf(e,this.data.array)}},vu=new H,Mx=new H,Sx=new rt,Jn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vu.subVectors(n,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(vu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sx.getNormalMatrix(e),s=this.coplanarPoint(vu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bx=0,Mn=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=ca,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Ju,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jl,this.stencilZFail=Jl,this.stencilZPass=Jl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ea=class extends Mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Or,Fa=new H,Br=new H,kr=new H,zr=new ye,Oa=new ye,Xm=new Ke,Rl=new H,Ba=new H,Cl=new H,Cp=new ye,yu=new ye,Pp=new ye,to=class extends Ft{constructor(e=new ea){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rr(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new Cs(n,3,0,!1)),Or.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=Or,this.material=e,this.center=new ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),Xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-kr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Pl(Rl.set(-.5,-.5,0),kr,a,Br,s,r),Pl(Ba.set(.5,-.5,0),kr,a,Br,s,r),Pl(Cl.set(.5,.5,0),kr,a,Br,s,r),Cp.set(0,0),yu.set(1,0),Pp.set(1,1);let o=e.ray.intersectTriangle(Rl,Ba,Cl,!1,Fa);if(o===null&&(Pl(Ba.set(-.5,.5,0),kr,a,Br,s,r),yu.set(0,1),o=e.ray.intersectTriangle(Rl,Cl,Ba,!1,Fa),o===null))return;let l=e.ray.origin.distanceTo(Fa);l<e.near||l>e.far||t.push({distance:l,point:Fa.clone(),uv:Ji.getInterpolation(Fa,Rl,Ba,Cl,Cp,yu,Pp,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Pl(i,e,t,n,s,r){zr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Oa.x=r*zr.x-s*zr.y,Oa.y=s*zr.x+r*zr.y):Oa.copy(zr),i.copy(e),i.x+=Oa.x,i.y+=Oa.y,i.applyMatrix4(Xm)}var ji=new H,Mu=new H,Il=new H,Ll=new H,Ps=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mu.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Ll.copy(this.origin).sub(Mu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Il),o=Ll.dot(this.direction),l=-Ll.dot(Il),c=Ll.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mu).addScaledVector(Il,f),d}intersectSphere(e,t){if(e.radius<0)return null;ji.subVectors(e.center,this.origin);let n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=n.x-a.x,M=n.y-a.y,v=n.z-a.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,b,P,S,R,I,z,L,w,U,D,O;if(y>=T&&y>=E?(P=l,I=u,w=g,O=m,l>=0?(x=c,b=h,S=f,R=d,z=_,L=p,U=M,D=v):(x=h,b=c,S=d,R=f,z=p,L=_,U=v,D=M)):T>=E?(P=c,I=f,w=_,O=M,c>=0?(x=h,b=l,S=d,R=u,z=p,L=g,U=v,D=m):(x=l,b=h,S=u,R=d,z=g,L=p,U=m,D=v)):(P=h,I=d,w=p,O=v,h>=0?(x=l,b=c,S=u,R=f,z=g,L=_,U=m,D=M):(x=c,b=l,S=f,R=u,z=_,L=g,U=M,D=m)),P===0)return null;let k=x/P,F=b/P,B=1/P,$=S-k*I,ee=R-F*I,Z=z-k*w,V=L-F*w,ne=U-k*O,q=D-F*O,J=ne*V-q*Z,W=$*q-ee*ne,Q=Z*ee-V*$;if(s){if(J<0||W<0||Q<0)return null}else if((J<0||W<0||Q<0)&&(J>0||W>0||Q>0))return null;let oe=J+W+Q;if(oe===0)return null;let ie=B*(J*I+W*w+Q*O);return(oe>0?ie<0:ie>0)?null:this.at(ie/oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ip=new Ke,Zs=new Ps,Dl=new Hn,Lp=new H,Nl=new H,Ul=new H,Fl=new H,Su=new H,Ol=new H,Dp=new H,Bl=new H,Je=class extends Ft{constructor(e=new Pt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ol.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Su.fromBufferAttribute(u,e),a?Ol.addScaledVector(Su,h):Ol.addScaledVector(Su.sub(t),h))}t.add(Ol)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(r),Zs.copy(e.ray).recast(e.near),!(Dl.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Dl,Lp)===null||Zs.origin.distanceToSquared(Lp)>(e.far-e.near)**2))&&(Ip.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Ip),!(n.boundingBox!==null&&Zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,T=v;y<T;y+=3){let E=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);s=kl(this,m,e,n,c,h,u,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let M=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);s=kl(this,a,e,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,T=v;y<T;y+=3){let E=y,x=y+1,b=y+2;s=kl(this,m,e,n,c,h,u,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let M=p,v=p+1,y=p+2;s=kl(this,a,e,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Tx(i,e,t,n,s,r,a,o){let l;if(e.side===Sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ni,o),l===null)return null;Bl.copy(o),Bl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Bl);return c<t.near||c>t.far?null:{distance:c,point:Bl.clone(),object:i}}function kl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Nl),i.getVertexPosition(l,Ul),i.getVertexPosition(c,Fl);let h=Tx(i,e,t,n,Nl,Ul,Fl,Dp);if(h){let u=new H;Ji.getBarycoord(Dp,Nl,Ul,Fl,u),s&&(h.uv=Ji.getInterpolatedAttribute(s,o,l,c,u,new ye)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,o,l,c,u,new ye)),a&&(h.normal=Ji.getInterpolatedAttribute(a,o,l,c,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new H,materialIndex:0};Ji.getNormal(Nl,Ul,Fl,f.normal),h.face=f,h.barycoord=u}return h}var ka=new Rt,Np=new Rt,Up=new Rt,Ex=new Rt,Fp=new Ke,zl=new H,bu=new Hn,Op=new Ke,Tu=new Ps,no=class extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zl),this.boundingBox.expandByPoint(zl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zl),this.boundingSphere.expandByPoint(zl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bu.copy(this.boundingSphere),bu.applyMatrix4(s),e.ray.intersectsSphere(bu)!==!1&&(Op.copy(s).invert(),Tu.copy(e.ray).applyMatrix4(Op),!(this.boundingBox!==null&&Tu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Np.fromBufferAttribute(s.attributes.skinIndex,e),Up.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ka.copy(t),t.set(0,0,0,0)):(ka.set(t.x,t.y,t.z,1),t.set(0,0,0)),ka.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Up.getComponent(r);if(a!==0){let o=Np.getComponent(r);Fp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ex.copy(ka).applyMatrix4(Fp),a)}}return t.isVector4&&(t.w=ka.w),t.applyMatrix4(this.bindMatrixInverse)}},ta=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},li=class extends tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Bt,h=Bt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bp=new Ke,wx=new Ke,io=class i{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:wx;Bp.multiplyMatrices(o,t[r]),Bp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new li(t,e,e,Vn,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ye("Skeleton: No bone found with UUID:",r),a=new ta),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ts=class extends Zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hr=new Ke,kp=new Ke,Hl=[],zp=new yn,Ax=new Ke,za=new Je,Ha=new Hn,ns=class extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ax)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),zp.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(zp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),Ha.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(za.geometry=this.geometry,za.material=this.material,za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(n),e.ray.intersectsSphere(Ha)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hr),kp.multiplyMatrices(n,Hr),za.matrixWorld=kp,za.raycast(e,Hl);for(let a=0,o=Hl.length;a<o;a++){let l=Hl[a];l.instanceId=r,l.object=this,t.push(l)}Hl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new li(new Float32Array(s*this.count),s,this.count,Oc,ni));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Js=new Hn,Rx=new ye(.5,.5),Gl=new H,Is=class{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],p=r[10],m=r[11],M=r[12],v=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,m-g,T-M).normalize(),s[1].setComponents(c+a,d+h,m+g,T+M).normalize(),s[2].setComponents(c+o,d+u,m+_,T+v).normalize(),s[3].setComponents(c-o,d-u,m-_,T-v).normalize(),n)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,d-f,m-p,T-y).normalize();else if(s[4].setComponents(c-l,d-f,m-p,T-y).normalize(),t===oi)s[5].setComponents(c+l,d+f,m+p,T+y).normalize();else if(t===Yr)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=Rx.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Gl.x=s.normal.x>0?e.max.x:e.min.x,Gl.y=s.normal.y>0?e.max.y:e.min.y,Gl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hp=new Ke,cc=class i{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Hp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Is),n[s].setFromProjectionMatrix(Hp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Is),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ls=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hc=new H,uc=new H,Gp=new Ke,Ga=new Ps,Vl=new Hn,Eu=new H,Vp=new H,ar=class extends Ft{constructor(e=new Pt,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)hc.fromBufferAttribute(t,s-1),uc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=hc.distanceTo(uc);e.setAttribute("lineDistance",new ut(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vl.copy(n.boundingSphere),Vl.applyMatrix4(s),Vl.radius+=r,e.ray.intersectsSphere(Vl)===!1)return;Gp.copy(s).invert(),Ga.copy(e.ray).applyMatrix4(Gp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){let m=h.getX(_),M=h.getX(_+1),v=Wl(this,e,Ga,l,m,M,_);v&&t.push(v)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(d),m=Wl(this,e,Ga,l,_,p,g-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){let m=Wl(this,e,Ga,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Wl(this,e,Ga,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(hc.fromBufferAttribute(o,s),uc.fromBufferAttribute(o,r),t.distanceSqToSegment(hc,uc,Eu,Vp)>n)return;Eu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Eu);if(!(c<e.near||c>e.far))return{distance:c,point:Vp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Wp=new H,Xp=new H,or=class extends ar{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wp.fromBufferAttribute(t,s),Xp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wp.distanceTo(Xp);e.setAttribute("lineDistance",new ut(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},so=class extends ar{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},is=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$p=new Ke,Fu=new Ps,Xl=new Hn,$l=new H,Ds=class extends Ft{constructor(e=new Pt,t=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xl.copy(n.boundingSphere),Xl.applyMatrix4(s),Xl.radius+=r,e.ray.intersectsSphere(Xl)===!1)return;$p.copy(s).invert(),Fu.copy(e.ray).applyMatrix4($p);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){let p=c.getX(g);$l.fromBufferAttribute(u,p),qp($l,p,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)$l.fromBufferAttribute(u,g),qp($l,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qp(i,e,t,n,s,r,a){let o=Fu.distanceSqToPoint(i);if(o<t){let l=new H;Fu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ro=class extends tn{constructor(e=[],t=mr,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ci=class extends tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends tn{constructor(e,t,n=Mi,s,r,a,o=Bt,l=Bt,c,h=es,u=1){if(h!==es&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ao=class extends yi{constructor(e,t=Mi,n=mr,s,r,a=Bt,o=Bt,l,c=es){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oo=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gt=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(_,p,m,M,v,y,T,E,x,b,P){let S=y/x,R=T/b,I=y/2,z=T/2,L=E/2,w=x+1,U=b+1,D=0,O=0,k=new H;for(let F=0;F<U;F++){let B=F*R-z;for(let $=0;$<w;$++){let ee=$*S-I;k[_]=ee*M,k[p]=B*v,k[m]=L,c.push(k.x,k.y,k.z),k[_]=0,k[p]=0,k[m]=E>0?1:-1,h.push(k.x,k.y,k.z),u.push($/x),u.push(1-F/b),D+=1}}for(let F=0;F<b;F++)for(let B=0;B<x;B++){let $=f+B+w*F,ee=f+B+w*(F+1),Z=f+(B+1)+w*(F+1),V=f+(B+1)+w*F;l.push($,ee,V),l.push(ee,Z,V),O+=6}o.addGroup(d,O,P),d+=O,f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},lo=class i extends Pt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+r,_=s+1,p=new H,m=new H;for(let M=0;M<=g;M++){let v=0,y=0,T=0,E=0;if(M<=n){let P=M/n,S=P*Math.PI/2;y=-h-e*Math.cos(S),T=e*Math.sin(S),E=-e*Math.cos(S),v=P*u}else if(M<=n+r){let P=(M-n)/r;y=-h+P*t,T=e,E=0,v=u+P*f}else{let P=(M-n-r)/n,S=P*Math.PI/2;y=h+e*Math.sin(S),T=e*Math.cos(S),E=e*Math.sin(S),v=u+f+P*u}let x=Math.max(0,Math.min(1,v/d)),b=0;M===0?b=.5/s:M===g&&(b=-.5/s);for(let P=0;P<=s;P++){let S=P/s,R=S*Math.PI*2,I=Math.sin(R),z=Math.cos(R);m.x=-T*z,m.y=y,m.z=T*I,o.push(m.x,m.y,m.z),p.set(-T*z,E,T*I),p.normalize(),l.push(p.x,p.y,p.z),c.push(S+b,x)}if(M>0){let P=(M-1)*_;for(let S=0;S<s;S++){let R=P+S,I=P+S+1,z=M*_+S,L=M*_+S+1;a.push(R,I,z),a.push(I,L,z)}}}this.setIndex(a),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},co=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new H,h=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},lt=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],p=n/2,m=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(d,2));function M(){let y=new H,T=new H,E=0,x=(t-e)/n;for(let b=0;b<=r;b++){let P=[],S=b/r,R=S*(t-e)+e;for(let I=0;I<=s;I++){let z=I/s,L=z*l+o,w=Math.sin(L),U=Math.cos(L);T.x=R*w,T.y=-S*n+p,T.z=R*U,u.push(T.x,T.y,T.z),y.set(w,x,U).normalize(),f.push(y.x,y.y,y.z),d.push(z,1-S),P.push(g++)}_.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let S=_[P][b],R=_[P+1][b],I=_[P+1][b+1],z=_[P][b+1];(e>0||P!==0)&&(h.push(S,R,z),E+=3),(t>0||P!==r-1)&&(h.push(R,I,z),E+=3)}c.addGroup(m,E,0),m+=E}function v(y){let T=g,E=new ye,x=new H,b=0,P=y===!0?e:t,S=y===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),g++;let R=g;for(let I=0;I<=s;I++){let L=I/s*l+o,w=Math.cos(L),U=Math.sin(L);x.x=P*U,x.y=p*S,x.z=P*w,u.push(x.x,x.y,x.z),f.push(0,S,0),E.x=w*.5+.5,E.y=U*.5*S+.5,d.push(E.x,E.y),g++}for(let I=0;I<s;I++){let z=T+I,L=R+I;y===!0?h.push(L,L+1,z):h.push(L+1,L,z),b+=3}c.addGroup(m,b,y===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ns=class i extends lt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ye:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],a=[],o=new H,l=new Ke;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ft(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ft(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},na=class extends ei{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fc=class extends na{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xf(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Yp=new H,Kp=new H,wu=new xf,Au=new xf,Ru=new xf,dc=class extends ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Kp.subVectors(s[0],s[1]).add(s[0]),c=Kp);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yp),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),wu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),Au.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),Ru.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(wu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Au.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ru.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(wu.calc(l),Au.calc(l),Ru.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Cx(i,e){let t=1-i;return t*t*e}function Px(i,e){return 2*(1-i)*i*e}function Ix(i,e){return i*i*e}function qa(i,e,t,n){return Cx(i,e)+Px(i,t)+Ix(i,n)}function Lx(i,e){let t=1-i;return t*t*t*e}function Dx(i,e){let t=1-i;return 3*t*t*i*e}function Nx(i,e){return 3*(1-i)*i*i*e}function Ux(i,e){return i*i*i*e}function Ya(i,e,t,n,s){return Lx(i,e)+Dx(i,t)+Nx(i,n)+Ux(i,s)}var ho=class extends ei{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ya(e,s.x,r.x,a.x,o.x),Ya(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pc=class extends ei{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ya(e,s.x,r.x,a.x,o.x),Ya(e,s.y,r.y,a.y,o.y),Ya(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uo=class extends ei{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mc=class extends ei{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends ei{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(qa(e,s.x,r.x,a.x),qa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gc=class extends ei{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(qa(e,s.x,r.x,a.x),qa(e,s.y,r.y,a.y),qa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(jp(o,l.x,c.x,h.x,u.x),jp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},Ou=Object.freeze({__proto__:null,ArcCurve:fc,CatmullRomCurve3:dc,CubicBezierCurve:ho,CubicBezierCurve3:pc,EllipseCurve:na,LineCurve:uo,LineCurve3:mc,QuadraticBezierCurve:fo,QuadraticBezierCurve3:gc,SplineCurve:po}),xc=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ou[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ou[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},mo=class extends xc{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new uo(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new fo(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ho(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new po(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new na(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class extends mo{constructor(e){super(e),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new mo().fromJSON(s))}return this}};function Fx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=$m(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Hx(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let f=t;f<s;f+=t){let d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return go(r,a,t,o,l,c,0),a}function $m(i,e,t,n,s){let r;if(s===Jx(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Zp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Zp(a/n|0,i[a],i[a+1],r);return r&&ia(r,r.next)&&(_o(r),r=r.next),r}function lr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ia(t,t.next)||qt(t.prev,t,t.next)===0)){if(_o(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function go(i,e,t,n,s,r,a){if(!i)return;!a&&r&&$x(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Bx(i,n,s,r):Ox(i)){e.push(l.i,i.i,c.i),_o(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=kx(lr(i),e),go(i,e,t,n,s,r,2)):a===2&&zx(i,e,t,n,s,r):go(lr(i),e,t,n,s,r,1);break}}}function Ox(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Va(s,o,r,l,a,c,g.x,g.y)&&qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),_=Math.max(o,l,c),p=Math.max(h,u,f),m=Bu(d,g,e,t,n),M=Bu(_,p,e,t,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&Va(o,h,l,u,c,f,v.x,v.y)&&qt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Va(o,h,l,u,c,f,y.x,y.y)&&qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&Va(o,h,l,u,c,f,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Va(o,h,l,u,c,f,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ia(n,s)&&Ym(n,t,t.next,s)&&xo(n,s)&&xo(s,n)&&(e.push(n.i,t.i,s.i),_o(t),_o(t.next),t=i=s),t=t.next}while(t!==i);return lr(t)}function zx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kx(a,o)){let l=Km(a,o);a=lr(a,a.next),l=lr(l,l.next),go(a,e,t,n,s,r,0),go(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Hx(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=$m(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Yx(c))}s.sort(Gx);for(let r=0;r<s.length;r++)t=Vx(s[r],t);return t}function Gx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Vx(i,e){let t=Wx(i,e);if(!t)return e;let n=Km(t,i);return lr(n,n.next),lr(t,t.next)}function Wx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ia(i,t))return t;do{if(ia(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&qm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);xo(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Xx(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Xx(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function $x(i,e,t,n){let s=i;do s.z===0&&(s.z=Bu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qx(s)}function qx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Bu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Yx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qm(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Va(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&qm(i,e,t,n,s,r,a,o)}function Kx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jx(i,e)&&(xo(i,e)&&xo(e,i)&&Zx(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||ia(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ia(i,e){return i.x===e.x&&i.y===e.y}function Ym(i,e,t,n){let s=Yl(qt(i,e,t)),r=Yl(qt(i,e,n)),a=Yl(qt(t,n,i)),o=Yl(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&ql(i,t,e)||r===0&&ql(i,n,e)||a===0&&ql(t,i,n)||o===0&&ql(t,e,n))}function ql(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Yl(i){return i>0?1:i<0?-1:0}function jx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ym(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xo(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function Zx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Km(i,e){let t=ku(i.i,i.x,i.y),n=ku(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Zp(i,e,t,n){let s=ku(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ku(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var zu=class{static triangulate(e,t,n=2){return Fx(e,t,n)}},Qs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jp(e),Qp(n,e);let a=e.length;t.forEach(Jp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Qp(n,t[l]);let o=zu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Jp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var cr=class i extends Pt{constructor(e=new Us([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Qx,v,y=!1,T,E,x,b;if(m){v=m.getSpacedPoints(h),y=!0,f=!1;let re=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,re),E=new H,x=new H,b=new H}f||(p=0,d=0,g=0,_=0);let P=o.extractPoints(c),S=P.shape,R=P.holes;if(!Qs.isClockWise(S)){S=S.reverse();for(let re=0,xe=R.length;re<xe;re++){let ue=R[re];Qs.isClockWise(ue)&&(R[re]=ue.reverse())}}function z(re){let ue=10000000000000001e-36,ve=re[0];for(let Se=1;Se<=re.length;Se++){let Ae=Se%re.length,Le=re[Ae],ze=Le.x-ve.x,He=Le.y-ve.y,tt=ze*ze+He*He,X=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(ve.x),Math.abs(ve.y)),gt=ue*X*X;if(tt<=gt){re.splice(Ae,1),Se--;continue}ve=Le}}z(S),R.forEach(z);let L=R.length,w=S;for(let re=0;re<L;re++){let xe=R[re];S=S.concat(xe)}function U(re,xe,ue){return xe||et("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(xe,ue)}let D=S.length;function O(re,xe,ue){let ve,Se,Ae,Le=re.x-xe.x,ze=re.y-xe.y,He=ue.x-re.x,tt=ue.y-re.y,X=Le*Le+ze*ze,gt=Le*tt-ze*He;if(Math.abs(gt)>Number.EPSILON){let Ze=Math.sqrt(X),at=Math.sqrt(He*He+tt*tt),j=xe.x-ze/Ze,me=xe.y+Le/Ze,le=ue.x-tt/at,Me=ue.y+He/at,N=((le-j)*tt-(Me-me)*He)/(Le*tt-ze*He);ve=j+Le*N-re.x,Se=me+ze*N-re.y;let A=ve*ve+Se*Se;if(A<=2)return new ye(ve,Se);Ae=Math.sqrt(A/2)}else{let Ze=!1;Le>Number.EPSILON?He>Number.EPSILON&&(Ze=!0):Le<-Number.EPSILON?He<-Number.EPSILON&&(Ze=!0):Math.sign(ze)===Math.sign(tt)&&(Ze=!0),Ze?(ve=-ze,Se=Le,Ae=Math.sqrt(X)):(ve=Le,Se=ze,Ae=Math.sqrt(X/2))}return new ye(ve/Ae,Se/Ae)}let k=[];for(let re=0,xe=w.length,ue=xe-1,ve=re+1;re<xe;re++,ue++,ve++)ue===xe&&(ue=0),ve===xe&&(ve=0),k[re]=O(w[re],w[ue],w[ve]);let F=[],B,$=k.concat();for(let re=0,xe=L;re<xe;re++){let ue=R[re];B=[];for(let ve=0,Se=ue.length,Ae=Se-1,Le=ve+1;ve<Se;ve++,Ae++,Le++)Ae===Se&&(Ae=0),Le===Se&&(Le=0),B[ve]=O(ue[ve],ue[Ae],ue[Le]);F.push(B),$=$.concat(B)}let ee;if(p===0)ee=Qs.triangulateShape(w,R);else{let re=[],xe=[];for(let ue=0;ue<p;ue++){let ve=ue/p,Se=d*Math.cos(ve*Math.PI/2),Ae=g*Math.sin(ve*Math.PI/2)+_;for(let Le=0,ze=w.length;Le<ze;Le++){let He=U(w[Le],k[Le],Ae);W(He.x,He.y,-Se),ve===0&&re.push(He)}for(let Le=0,ze=L;Le<ze;Le++){let He=R[Le];B=F[Le];let tt=[];for(let X=0,gt=He.length;X<gt;X++){let Ze=U(He[X],B[X],Ae);W(Ze.x,Ze.y,-Se),ve===0&&tt.push(Ze)}ve===0&&xe.push(tt)}}ee=Qs.triangulateShape(re,xe)}let Z=ee.length,V=g+_;for(let re=0;re<D;re++){let xe=f?U(S[re],$[re],V):S[re];y?(x.copy(T.normals[0]).multiplyScalar(xe.x),E.copy(T.binormals[0]).multiplyScalar(xe.y),b.copy(v[0]).add(x).add(E),W(b.x,b.y,b.z)):W(xe.x,xe.y,0)}for(let re=1;re<=h;re++)for(let xe=0;xe<D;xe++){let ue=f?U(S[xe],$[xe],V):S[xe];y?(x.copy(T.normals[re]).multiplyScalar(ue.x),E.copy(T.binormals[re]).multiplyScalar(ue.y),b.copy(v[re]).add(x).add(E),W(b.x,b.y,b.z)):W(ue.x,ue.y,u/h*re)}for(let re=p-1;re>=0;re--){let xe=re/p,ue=d*Math.cos(xe*Math.PI/2),ve=g*Math.sin(xe*Math.PI/2)+_;for(let Se=0,Ae=w.length;Se<Ae;Se++){let Le=U(w[Se],k[Se],ve);W(Le.x,Le.y,u+ue)}for(let Se=0,Ae=R.length;Se<Ae;Se++){let Le=R[Se];B=F[Se];for(let ze=0,He=Le.length;ze<He;ze++){let tt=U(Le[ze],B[ze],ve);y?W(tt.x,tt.y+v[h-1].y,v[h-1].x+ue):W(tt.x,tt.y,u+ue)}}}ne(),q();function ne(){let re=s.length/3;if(f){let xe=0,ue=D*xe;for(let ve=0;ve<Z;ve++){let Se=ee[ve];Q(Se[2]+ue,Se[1]+ue,Se[0]+ue)}xe=h+p*2,ue=D*xe;for(let ve=0;ve<Z;ve++){let Se=ee[ve];Q(Se[0]+ue,Se[1]+ue,Se[2]+ue)}}else{for(let xe=0;xe<Z;xe++){let ue=ee[xe];Q(ue[2],ue[1],ue[0])}for(let xe=0;xe<Z;xe++){let ue=ee[xe];Q(ue[0]+D*h,ue[1]+D*h,ue[2]+D*h)}}n.addGroup(re,s.length/3-re,0)}function q(){let re=s.length/3,xe=0;J(w,xe),xe+=w.length;for(let ue=0,ve=R.length;ue<ve;ue++){let Se=R[ue];J(Se,xe),xe+=Se.length}n.addGroup(re,s.length/3-re,1)}function J(re,xe){let ue=re.length;for(;--ue>=0;){let ve=ue,Se=ue-1;Se<0&&(Se=re.length-1);for(let Ae=0,Le=h+p*2;Ae<Le;Ae++){let ze=D*Ae,He=D*(Ae+1),tt=xe+ve+ze,X=xe+Se+ze,gt=xe+Se+He,Ze=xe+ve+He;oe(tt,X,gt,Ze)}}}function W(re,xe,ue){l.push(re),l.push(xe),l.push(ue)}function Q(re,xe,ue){ie(re),ie(xe),ie(ue);let ve=s.length/3,Se=M.generateTopUV(n,s,ve-3,ve-2,ve-1);Ee(Se[0]),Ee(Se[1]),Ee(Se[2])}function oe(re,xe,ue,ve){ie(re),ie(xe),ie(ve),ie(xe),ie(ue),ie(ve);let Se=s.length/3,Ae=M.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);Ee(Ae[0]),Ee(Ae[1]),Ee(Ae[3]),Ee(Ae[1]),Ee(Ae[2]),Ee(Ae[3])}function ie(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Ee(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return e_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ou[s.type]().fromJSON(s)),new i(n,e.options)}},Qx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ye(r,a),new ye(o,l),new ye(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-u),new ye(f,1-g),new ye(_,1-m)]:[new ye(o,1-l),new ye(h,1-u),new ye(d,1-g),new ye(p,1-m)]}};function e_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var vo=class i extends Pt{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ft(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new H,f=new ye,d=new H,g=new H,_=new H,p=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=t;M++){let v=n+M*h*s,y=Math.sin(v),T=Math.cos(v);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*T,a.push(u.x,u.y,u.z),f.x=M/t,f.y=E/(e.length-1),o.push(f.x,f.y);let x=l[3*E+0]*y,b=l[3*E+1],P=l[3*E+0]*T;c.push(x,b,P)}}for(let M=0;M<t;M++)for(let v=0;v<e.length-1;v++){let y=v+M*e.length,T=y,E=y+e.length,x=y+e.length+1,b=y+1;r.push(T,E,b),r.push(x,b,E)}this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("uv",new ut(o,2)),this.setAttribute("normal",new ut(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ss=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let M=m*f-a;for(let v=0;v<c;v++){let y=v*u-r;g.push(y,-M,0),_.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let v=M+c*m,y=M+c*(m+1),T=M+1+c*(m+1),E=M+1+c*m;d.push(v,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},yo=class i extends Pt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new H,g=new ye;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let m=r+p/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let p=_*(n+1);for(let m=0;m<n;m++){let M=m+p,v=M,y=M+n+1,T=M+n+2,E=M+1;o.push(v,y,E),o.push(y,T,E)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var nn=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new H,f=new H,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let M=[],v=m/n,y=a+v*o,T=e*Math.cos(y),E=Math.sqrt(e*e-T*T),x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let P=b/t,S=s+P*r;u.x=-E*Math.cos(S),u.y=T,u.z=E*Math.sin(S),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(P+x,1-v),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let v=h[m][M+1],y=h[m][M],T=h[m+1][M],E=h[m+1][M+1];(m!==0||a>0)&&d.push(v,y,E),(m!==n-1||l<Math.PI)&&d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rs=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new H,d=new H,g=new H;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(M),d.y=(e+t*Math.cos(p))*Math.sin(M),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let m=(s+1)*_+p-1,M=(s+1)*(_-1)+p-1,v=(s+1)*(_-1)+p,y=(s+1)*_+p;l.push(m,M,y),l.push(M,v,y)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(em(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(em(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pn(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let s in n)e[s]=n[s]}return e}function em(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function t_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _f(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var bn={clone:xr,merge:Pn},n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=t_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sa=class extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Jt=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},On=class extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return er('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){er('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Mo=class extends Mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},So=class extends Mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Pc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_c=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vc=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function s_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function tm(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function r_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yc=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nu:r=e,o=2*t-n;break;case Uu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:a=e,l=2*n-t;break;case Uu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*_+.5*g,y=d*p-d*_;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+M*a[c+T]+v*a[l+T]+y*a[u+T];return r}},Mc=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Sc=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bc=class extends Li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),_=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*g;return r}let f=o*2,d=e-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=d*f+g*2,M=u[m],v=u[m+1],y=e*f+g*2,T=h[y],E=h[y+1],x=o_(n,t,M,T,s);r[g]=jm(x,_,v,E,p)}return r}};function jm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function a_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function o_(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=jm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=a_(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wa(e.settings)&&(n.settings={inTangents:Rs(e.settings.inTangents,Array),outTangents:Rs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case Zl:t=this.InterpolantFactoryMethodSmooth;break;case Lu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return Zl;case this.InterpolantFactoryMethodBezier:return Lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Wa(this.settings)&&(nm(this.settings.inTangents,e),nm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wa(this.settings)&&(im(this.settings.inTangents,e),im(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){et("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&$g(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function im(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=nr;var as=class extends Gn{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=tr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};bo.prototype.ValueTypeName="color";var os=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};os.prototype.ValueTypeName="number";var Tc=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Qn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ls=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Gn{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=tr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Fs.prototype.ValueTypeName="vector";var To=class{constructor(e="",t=-1,n=[],s=Im){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(c_(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=s_(l);l=tm(l,1,h),c=tm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new os(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function l_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return Fs;case"color":return bo;case"quaternion":return ls;case"bool":case"boolean":return as;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function c_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=l_(i.type);if(i.times===void 0){let n=[],s=[];r_(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Wa(i.settings)&&(t.settings={inTangents:Rs(i.settings.inTangents,Float32Array),outTangents:Rs(i.settings.outTangents,Float32Array)}),t}var Ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(sm(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!sm(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function sm(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ec=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zm=new Ec,Di=class{constructor(e){this.manager=e!==void 0?e:Zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zi={},Hu=class extends Error{constructor(e,t){super(e),this.response=t}},ra=class extends Di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:s});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Zi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,_=0,p=new ReadableStream({start(m){M();function M(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{_+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,x=h.length;E<x;E++){let b=h[E];b.onProgress&&b.onProgress(T)}m.enqueue(y),M()}},v=>{m.error(v)})}}});return new Response(p)}else throw new Hu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ci.add(`file:${e}`,c);let h=Zi[e];delete Zi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Zi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gr=new WeakMap,wc=class extends Di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Gr.get(a);u===void 0&&(u=[],Gr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Kr("img");function l(){h(),t&&t(this);let u=Gr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Gr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ci.remove(`image:${e}`);let f=Gr.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}Gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Eo=class extends Di{constructor(e){super(e)}load(e,t,n,s){let r=new tn,a=new wc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},hr=class extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wo=class extends hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cu=new Ke,rm=new H,am=new H,aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rm.setFromMatrixPosition(e.matrixWorld),t.position.copy(rm),am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(am),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Cu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Yr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kl=new H,jl=new Qn,Ri=new H,Ao=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kl,jl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,jl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Kl,jl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,jl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},As=new H,om=new ye,lm=new ye,on=class extends Ao{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,om,lm),t.subVectors(lm,om)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gu=class extends aa{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ro=class extends hr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Vu=class extends aa{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},ur=class extends hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hs=class extends Ao{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wu=class extends aa{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var us=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Pu=new WeakMap,Co=class extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ci.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Pu.has(a)===!0?(s&&s(Pu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Pu.set(l,c),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vr=-90,Wr=1,oa=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Vr,Wr,e,t);s.layers=this.layers,this.add(s);let r=new on(Vr,Wr,e,t);r.layers=this.layers,this.add(r);let a=new on(Vr,Wr,e,t);a.layers=this.layers,this.add(a);let o=new on(Vr,Wr,e,t);o.layers=this.layers,this.add(o);let l=new on(Vr,Wr,e,t);l.layers=this.layers,this.add(l);let c=new on(Vr,Wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ac=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Po=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=h_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function h_(){this._document.hidden===!1&&this.reset()}var vf="\\[\\]\\.:\\/",u_=new RegExp("["+vf+"]","g"),yf="[^"+vf+"]",f_="[^"+vf.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",yf),p_=/(WCOD+)?/.source.replace("WCOD",f_),m_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yf),g_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yf),x_=new RegExp("^"+d_+p_+m_+g_+"$"),__=["material","materials","bones","map"],Xu=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){let t=x_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);__.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Xu;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var c1=new Float32Array(1);var cm=new Ke,Bs=class{constructor(e,t,n=0,s=1/0){this.ray=new Ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cm),this}intersectObject(e,t=!0,n=[]){return $u(e,this,n,t),n.sort(hm),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$u(e[s],this,n,t);return n.sort(hm),n}};function hm(i,e){return i.distance-e.distance}function $u(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)$u(r[a],e,t,!0)}}var wf=class wf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};wf.prototype.isMatrix2=!0;var qu=wf;function Mf(i,e,t,n){let s=v_(n);switch(t){case rf:return i*e;case Oc:return i*e/s.components*s.byteLength;case Bc:return i*e/s.components*s.byteLength;case ks:return i*e*2/s.components*s.byteLength;case kc:return i*e*2/s.components*s.byteLength;case af:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case zc:return i*e*4/s.components*s.byteLength;case ko:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gc:case Wc:return Math.max(i,16)*Math.max(e,8)/4;case Hc:case Vc:return Math.max(i,8)*Math.max(e,8)/2;case Xc:case $c:case Yc:case Kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qc:case Vo:case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ch:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uh:case fh:case dh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ph:case mh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wo:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v_(i){switch(i){case Cn:case ef:return{byteLength:1,components:1};case fa:case tf:case Xt:return{byteLength:2,components:1};case Uc:case Fc:return{byteLength:2,components:4};case Mi:case Nc:case ni:return{byteLength:4,components:1};case nf:case sf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function v0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function M_(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b_=`#ifdef USE_ALPHAHASH
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
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
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
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,I_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U_=`#ifdef USE_IRIDESCENCE
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
#endif`,F_=`#ifdef USE_BUMPMAP
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
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,$_=`vec3 transformedNormal = objectNormal;
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
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",J_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lv=`#ifdef USE_GRADIENTMAP
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
}`,cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dv=`#ifdef USE_ENVMAP
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
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_v=`PhysicalMaterial material;
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
#endif`,vv=`uniform sampler2D dfgLUT;
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
}`,yv=`
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iv=`#if defined( USE_POINTS_UV )
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
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
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
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
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
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ay=`float getShadowMask() {
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
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform float backgroundBlurriness;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Cy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,By=`#define LAMBERT
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
}`,ky=`#define MATCAP
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
}`,zy=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Vy=`#define PHONG
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,$y=`#define STANDARD
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
}`,qy=`#define TOON
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
}`,Yy=`#define TOON
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
}`,Ky=`uniform float size;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Zy=`#include <common>
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
}`,Jy=`uniform vec3 color;
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
}`,Qy=`uniform float rotation;
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
}`,eM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:S_,alphahash_pars_fragment:b_,alphamap_fragment:T_,alphamap_pars_fragment:E_,alphatest_fragment:w_,alphatest_pars_fragment:A_,aomap_fragment:R_,aomap_pars_fragment:C_,batching_pars_vertex:P_,batching_vertex:I_,begin_vertex:L_,beginnormal_vertex:D_,bsdfs:N_,iridescence_fragment:U_,bumpmap_pars_fragment:F_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:z_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:V_,color_vertex:W_,common:X_,defaultnormal_vertex:$_,displacementmap_pars_vertex:q_,displacementmap_vertex:Y_,emissivemap_fragment:K_,emissivemap_pars_fragment:j_,colorspace_fragment:Z_,colorspace_pars_fragment:J_,envmap_fragment:Q_,envmap_common_pars_fragment:ev,envmap_pars_fragment:tv,envmap_pars_vertex:nv,envmap_physical_pars_fragment:dv,envmap_vertex:iv,fog_vertex:sv,fog_pars_vertex:rv,fog_fragment:av,fog_pars_fragment:ov,gradientmap_pars_fragment:lv,lightmap_pars_fragment:cv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:uv,lights_pars_begin:fv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:xv,lights_physical_fragment:_v,lights_physical_pars_fragment:vv,lights_fragment_begin:yv,lights_fragment_maps:Mv,lights_fragment_end:Sv,lightprobes_pars_fragment:bv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Ev,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Av,map_fragment:Rv,map_pars_fragment:Cv,map_particle_fragment:Pv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Nv,morphcolor_vertex:Uv,morphnormal_vertex:Fv,morphtarget_pars_vertex:Ov,morphtarget_vertex:Bv,normal_fragment_begin:kv,normal_fragment_maps:zv,normal_pars_fragment:Hv,normal_pars_vertex:Gv,normal_vertex:Vv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Yv,opaque_fragment:Kv,packing:jv,premultiplied_alpha_fragment:Zv,project_vertex:Jv,dithering_fragment:Qv,dithering_pars_fragment:ey,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:sy,shadowmap_vertex:ry,shadowmask_pars_fragment:ay,skinbase_vertex:oy,skinning_pars_vertex:ly,skinning_vertex:cy,skinnormal_vertex:hy,specularmap_fragment:uy,specularmap_pars_fragment:fy,tonemapping_fragment:dy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:xy,uv_pars_vertex:_y,uv_vertex:vy,worldpos_vertex:yy,background_vert:My,background_frag:Sy,backgroundCube_vert:by,backgroundCube_frag:Ty,cube_vert:Ey,cube_frag:wy,depth_vert:Ay,depth_frag:Ry,distance_vert:Cy,distance_frag:Py,equirect_vert:Iy,equirect_frag:Ly,linedashed_vert:Dy,linedashed_frag:Ny,meshbasic_vert:Uy,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:By,meshmatcap_vert:ky,meshmatcap_frag:zy,meshnormal_vert:Hy,meshnormal_frag:Gy,meshphong_vert:Vy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:$y,meshtoon_vert:qy,meshtoon_frag:Yy,points_vert:Ky,points_frag:jy,shadow_vert:Zy,shadow_frag:Jy,sprite_vert:Qy,sprite_frag:eM},Be={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Bi={basic:{uniforms:Pn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Pn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Pn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Pn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Pn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new De(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Pn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Pn([Be.points,Be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Pn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Pn([Be.common,Be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Pn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Pn([Be.sprite,Be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Pn([Be.common,Be.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Pn([Be.lights,Be.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Bi.physical={uniforms:Pn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var _h={r:0,b:0,g:0},tM=new Ke,y0=new rt;y0.set(-1,0,0,0,1,0,0,0,1);function nM(i,e,t,n,s,r){let a=new De(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let v=M.isScene===!0?M.background:null;if(v&&v.isTexture){let y=M.backgroundBlurriness>0;v=e.get(v,y)}return v}function g(M){let v=!1,y=d(M);y===null?p(a,o):y&&y.isColor&&(p(y,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,v){let y=d(v);y&&y.isCubeTexture?(c===void 0&&(c=new Je(new Gt(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:xr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tM.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(y0),c.material.toneMapped=ht.getTransfer(y.colorSpace)!==At,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Je(new ss(2,2),new Dt({name:"BackgroundMaterial",uniforms:xr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ht.getTransfer(y.colorSpace)!==At,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(_h,_f(i)),t.buffers.color.setClear(_h.r,_h.g,_h.b,v,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),o=v,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:_,dispose:m}}function iM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(R,I,z,L,w){let U=!1,D=u(R,L,z,I);r!==D&&(r=D,c(r.object)),U=d(R,L,z,w),U&&g(R,L,z,w),w!==null&&e.update(w,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(R,I,z,L),w!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,I,z,L){let w=L.wireframe===!0,U=n[I.id];U===void 0&&(U={},n[I.id]=U);let D=R.isInstancedMesh===!0?R.id:0,O=U[D];O===void 0&&(O={},U[D]=O);let k=O[z.id];k===void 0&&(k={},O[z.id]=k);let F=k[w];return F===void 0&&(F=f(l()),k[w]=F),F}function f(R){let I=[],z=[],L=[];for(let w=0;w<t;w++)I[w]=0,z[w]=0,L[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:L,object:R,attributes:{},index:null}}function d(R,I,z,L){let w=r.attributes,U=I.attributes,D=0,O=z.getAttributes();for(let k in O)if(O[k].location>=0){let B=w[k],$=U[k];if($===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),B===void 0||B.attribute!==$||$&&B.data!==$.data)return!0;D++}return r.attributesNum!==D||r.index!==L}function g(R,I,z,L){let w={},U=I.attributes,D=0,O=z.getAttributes();for(let k in O)if(O[k].location>=0){let B=U[k];B===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(B=R.instanceColor));let $={};$.attribute=B,B&&B.data&&($.data=B.data),w[k]=$,D++}r.attributes=w,r.attributesNum=D,r.index=L}function _(){let R=r.newAttributes;for(let I=0,z=R.length;I<z;I++)R[I]=0}function p(R){m(R,0)}function m(R,I){let z=r.newAttributes,L=r.enabledAttributes,w=r.attributeDivisors;z[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),w[R]!==I&&(i.vertexAttribDivisor(R,I),w[R]=I)}function M(){let R=r.newAttributes,I=r.enabledAttributes;for(let z=0,L=I.length;z<L;z++)I[z]!==R[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function v(R,I,z,L,w,U,D){D===!0?i.vertexAttribIPointer(R,I,z,w,U):i.vertexAttribPointer(R,I,z,L,w,U)}function y(R,I,z,L){_();let w=L.attributes,U=z.getAttributes(),D=I.defaultAttributeValues;for(let O in U){let k=U[O];if(k.location>=0){let F=w[O];if(F===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),F!==void 0){let B=F.normalized,$=F.itemSize,ee=e.get(F);if(ee===void 0)continue;let Z=ee.buffer,V=ee.type,ne=ee.bytesPerElement,q=V===i.INT||V===i.UNSIGNED_INT||F.gpuType===Nc;if(F.isInterleavedBufferAttribute){let J=F.data,W=J.isInterleavedBuffer===!0?J.stride:J.itemSize,Q=F.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)m(k.location+oe,J.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let oe=0;oe<k.locationSize;oe++)p(k.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let oe=0;oe<k.locationSize;oe++)v(k.location+oe,$/k.locationSize,V,B,W*ne,(Q+$/k.locationSize*oe)*ne,q)}else{if(F.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)m(k.location+J,F.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let J=0;J<k.locationSize;J++)p(k.location+J);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let J=0;J<k.locationSize;J++)v(k.location+J,$/k.locationSize,V,B,$*ne,$/k.locationSize*J*ne,q)}}else if(D!==void 0){let B=D[O];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(k.location,B);break;case 3:i.vertexAttrib3fv(k.location,B);break;case 4:i.vertexAttrib4fv(k.location,B);break;default:i.vertexAttrib1fv(k.location,B)}}}}M()}function T(){P();for(let R in n){let I=n[R];for(let z in I){let L=I[z];for(let w in L){let U=L[w];for(let D in U)h(U[D].object),delete U[D];delete L[w]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;let I=n[R.id];for(let z in I){let L=I[z];for(let w in L){let U=L[w];for(let D in U)h(U[D].object),delete U[D];delete L[w]}}delete n[R.id]}function x(R){for(let I in n){let z=n[I];for(let L in z){let w=z[L];if(w[R.id]===void 0)continue;let U=w[R.id];for(let D in U)h(U[D].object),delete U[D];delete w[R.id]}}}function b(R){for(let I in n){let z=n[I],L=R.isInstancedMesh===!0?R.id:0,w=z[L];if(w!==void 0){for(let U in w){let D=w[U];for(let O in D)h(D[O].object),delete D[O];delete w[U]}delete z[L],Object.keys(z).length===0&&delete n[I]}}}function P(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function sM(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Vn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Cn&&x!==ni&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,maxSamples:T,samples:E}}function aM(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Jn,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,v=M*4,y=m.clippingState||null;l.value=y,y=h(g,f,v,d);for(let T=0;T!==v;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=d;v!==_;++v,y+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Yo=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ro(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:gn});r.uniforms.tEquirect.value=t;let a=new Je(s,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=ln),new oa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Jm=256,oM=3,lM=20,M0=256,S0=16,cM=3,hM=new H,uM=new De,ga=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new oa(1,10,null),this._boxMesh=new Je(new Gt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=hM}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(uM));let p=new oa(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jm,pf(e))}_fromTexture(e,t){e.mapping===mr||e.mapping===ha?this._setSize(e.image.length===0?Jm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Qm(e,!1,!1),n=Math.log2(e)-oM;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Qm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===mr||e.mapping===ha?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=e0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=fM(),this._integrationMaterial=dM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/S0);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-cM)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(M0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pM());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Qm(i,e,t){return new Yo(i,{minFilter:ui,generateMipmaps:e,type:Xt,colorSpace:Fn,depthBuffer:t})}function Ko(i,e,t){return new Dt({name:i,uniforms:e,vertexShader:dt.cube_vert,fragmentShader:t,side:Sn,blending:gn,depthTest:!1,depthWrite:!1})}function fM(){return Ko("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${M0}u

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
	`)}function dM(){return Ko("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:S0}},`

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
	`)}function pM(){return Ko("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lM}
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
	`)}function e0(){return Ko("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function t0(){return Ko("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ic||d===Lc)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new Yo(g.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Ic||d===Lc,_=d===mr||d===ha;if(g||_){let p=t.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ga(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let M=f.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new ga(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===Ic?f.mapping=mr:d===Lc&&(f.mapping=ha),f}function l(f){let d=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function gM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&er("WebGLRenderer: "+n+" extension not supported."),s}}}function xM(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let _=r.get(g);_&&(e.remove(_),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(g){let _=g.attributes;for(let p in _)e.update(_[p],i.ARRAY_BUFFER)}function u(g){let _=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=_!==null?_.array.length:p.array.length/3-1,v=p.count>=65535?eo:Qa,y=new v(Math.ceil(M/3)*6,1),T=y.array;if(_!==null){let x=_.array;m=_.version;for(let b=0,P=0;b<M;b+=3){let S=x[b+0],R=x[b+1],I=x[b+2];T[P++]=S,T[P++]=R,T[P++]=R,T[P++]=I,T[P++]=I,T[P++]=S}}else{m=p.version;for(let x=0,b=0;x<M;x+=3){let P=x+0,S=x+1,R=x+2;T[b++]=P,T[b++]=S,T[b++]=S,T[b++]=R,T[b++]=R,T[b++]=P}}y.version=m;let E=r.get(g);E&&e.remove(E),r.set(g,y)}function f(g){let _=r.get(g);if(_){let p=g.index;p!==null&&_.version<p.version&&u(g)}else u(g);return r.get(g)}function d(){for(let g in s){let _=s[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function _M(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yM(i,e,t){let n=new WeakMap,s=new Rt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*u),x=new Za(E,y,T,u);x.type=ni,x.needsUpdate=!0;let b=v*4;for(let S=0;S<u;S++){let R=p[S],I=m[S],z=M[S],L=y*T*4*S;for(let w=0;w<R.count;w++){let U=w*b;d===!0&&(s.fromBufferAttribute(R,w),E[L+U+0]=s.x,E[L+U+1]=s.y,E[L+U+2]=s.z,E[L+U+3]=0),g===!0&&(s.fromBufferAttribute(I,w),E[L+U+4]=s.x,E[L+U+5]=s.y,E[L+U+6]=s.z,E[L+U+7]=0),_===!0&&(s.fromBufferAttribute(z,w),E[L+U+8]=s.x,E[L+U+9]=s.y,E[L+U+10]=s.z,E[L+U+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new ye(y,T)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function MM(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var SM={[Do]:"LINEAR_TONE_MAPPING",[No]:"REINHARD_TONE_MAPPING",[Uo]:"CINEON_TONE_MAPPING",[Fo]:"ACES_FILMIC_TONE_MAPPING",[Bo]:"AGX_TONE_MAPPING",[pr]:"NEUTRAL_TONE_MAPPING",[Oo]:"CUSTOM_TONE_MAPPING"};function bM(i,e,t,n,s,r){let a=new kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Pt;h.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ut([0,2,0,0,2,0],2));let u=new sa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Je(h,u),d=new hs(-1,1,1,-1,0,1),g=null,_=null,p=!1,m,M=null,v=[],y=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<v.length;x++){let b=v[x];b.setSize&&b.setSize(T,E)}},this.setEffects=function(T){v=T,y=v.length>0&&v[0].isRenderPass===!0;let E=a.width,x=a.height;v.length>0&&o===null&&(o=new kt(E,x,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),l=new kt(E,x,{type:Xt,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&v.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new yi(E,x),r===!0&&(c.format=Si,c.type=fs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<v.length;P++){let S=v[P];S.setSize&&S.setSize(E,x),b&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===Ui&&v.length===0)return!1;if(M=E,E!==null){let x=E.width,b=E.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return y===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Ui,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=m,p=!0;let x=a,b=o;for(let P=0;P<v.length;P++){let S=v[P];S.enabled!==!1&&(S.render(T,b,x,E),S.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(g!==T.outputColorSpace||_!==T.toneMapping){g=T.outputColorSpace,_=T.toneMapping,u.defines={},ht.getTransfer(g)===At&&(u.defines.SRGB_TRANSFER="");let P=SM[_];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(M),T.render(f,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var b0=new tn,T0=new yi(1,1),E0=new ao(1),w0=new Za,A0=new lc,R0=new ro,n0=[],i0=[],s0=new Float32Array(16),r0=new Float32Array(9),a0=new Float32Array(4);function xa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=n0[s];if(r===void 0&&(r=new Float32Array(s),n0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mh(i,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function TM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function EM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function wM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function AM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function RM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;a0.set(n),i.uniformMatrix2fv(this.addr,!1,a0),hn(t,n)}}function CM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;r0.set(n),i.uniformMatrix3fv(this.addr,!1,r0),hn(t,n)}}function PM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;s0.set(n),i.uniformMatrix4fv(this.addr,!1,s0),hn(t,n)}}function IM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function LM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function DM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function NM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function UM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function FM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function OM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function BM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function Sh(i){return i.version===0&&(i.compareFunction=hf,i.needsUpdate=!0),i}function kM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sh(T0):r=b0,t.setTexture2D(e||r,s)}function zM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||A0,s)}function HM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sh(E0):r=R0,t.setTextureCube(e||r,s)}function GM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||w0,s)}function VM(i){switch(i){case 5126:return TM;case 35664:return EM;case 35665:return wM;case 35666:return AM;case 35674:return RM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return IM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return NM;case 5125:return UM;case 36294:return FM;case 36295:return OM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}function WM(i,e){i.uniform1fv(this.addr,e)}function XM(i,e){let t=xa(e,this.size,2);i.uniform2fv(this.addr,t)}function $M(i,e){let t=xa(e,this.size,3);i.uniform3fv(this.addr,t)}function qM(i,e){let t=xa(e,this.size,4);i.uniform4fv(this.addr,t)}function YM(i,e){let t=xa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function KM(i,e){let t=xa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jM(i,e){let t=xa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ZM(i,e){i.uniform1iv(this.addr,e)}function JM(i,e){i.uniform2iv(this.addr,e)}function QM(i,e){i.uniform3iv(this.addr,e)}function eS(i,e){i.uniform4iv(this.addr,e)}function tS(i,e){i.uniform1uiv(this.addr,e)}function nS(i,e){i.uniform2uiv(this.addr,e)}function iS(i,e){i.uniform3uiv(this.addr,e)}function sS(i,e){i.uniform4uiv(this.addr,e)}function rS(i,e,t){let n=this.cache,s=e.length,r=Mh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sh(T0):a=b0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function aS(i,e,t){let n=this.cache,s=e.length,r=Mh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||A0,r[a])}function oS(i,e,t){let n=this.cache,s=e.length,r=Mh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Sh(E0):a=R0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function lS(i,e,t){let n=this.cache,s=e.length,r=Mh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||w0,r[a])}function cS(i){switch(i){case 5126:return WM;case 35664:return XM;case 35665:return $M;case 35666:return qM;case 35674:return YM;case 35675:return KM;case 35676:return jM;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return sS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return aS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return lS}}var Cf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=VM(t.type)}},Pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cS(t.type)}},If=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Af=/(\w+)(\])?(\[|\.)?/g;function o0(i,e){i.seq.push(e),i.map[e.id]=e}function hS(i,e,t){let n=i.name,s=n.length;for(Af.lastIndex=0;;){let r=Af.exec(n),a=Af.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){o0(t,c===void 0?new Cf(o,i,e):new Pf(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new If(o),o0(t,u)),t=u}}}var ma=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);hS(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function l0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var uS=37297,fS=0;function dS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var c0=new rt;function pS(i){ht._getMatrix(c0,ht.workingColorSpace,i);let e=`mat3( ${c0.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Ka:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function h0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+dS(i.getShaderSource(e),o)}else return r}function mS(i,e){let t=pS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gS={[Do]:"Linear",[No]:"Reinhard",[Uo]:"Cineon",[Fo]:"ACESFilmic",[Bo]:"AgX",[pr]:"Neutral",[Oo]:"Custom"};function xS(i,e){let t=gS[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vh=new H;function _S(){ht.getLuminanceCoefficients(vh);let i=vh.x.toFixed(4),e=vh.y.toFixed(4),t=vh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function yS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function MS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qo(i){return i!==""}function u0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function f0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(i){return i.replace(SS,bS)}function bS(i,e){let t=dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Lf(t)}var TS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(i){return i.replace(TS,ES)}function ES(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function p0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var wS={[fr]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function AS(i){return wS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var RS={[ha]:"ENVMAP_MODE_REFRACTION"};function CS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":RS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var PS={[Pc]:"ENVMAP_BLENDING_MULTIPLY",[Rm]:"ENVMAP_BLENDING_MIX",[Cm]:"ENVMAP_BLENDING_ADD"};function IS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":PS[i.combine]||"ENVMAP_BLENDING_NONE"}function LS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=AS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=CS(t),u=IS(t),f=vS(t),d=yS(r),g=s.createProgram(),_,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(qo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(qo).join(`
`),p.length>0&&(p+=`
`)):(_=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),p=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?xS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,mS("linearToOutputTexel",t.outputColorSpace),_S(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),a=Lf(a),a=u0(a,t),a=f0(a,t),o=Lf(o),o=u0(o,t),o=f0(o,t),a=d0(a),o=d0(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+_+a,v=m+p+o,y=l0(s,s.VERTEX_SHADER,M),T=l0(s,s.FRAGMENT_SHADER,v);s.attachShader(g,y),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(S){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(g)||"",I=s.getShaderInfoLog(y)||"",z=s.getShaderInfoLog(T)||"",L=R.trim(),w=I.trim(),U=z.trim(),D=!0,O=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,T);else{let k=h0(s,y,"vertex"),F=h0(s,T,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+L+`
`+k+`
`+F)}else L!==""?Ye("WebGLProgram: Program Info Log:",L):(w===""||U==="")&&(O=!1);O&&(S.diagnostics={runnable:D,programLog:L,vertexShader:{log:w,prefix:_},fragmentShader:{log:U,prefix:p}})}s.deleteShader(y),s.deleteShader(T),x=new ma(s,g),b=MS(s,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,uS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}var DS=0,Df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nf(e),t.set(e,n)),n}},Nf=class{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}};function NS(i){return i===ks||i===Vo||i===Wo}function US(i,e,t,n,s,r){let a=new Jr,o=new Df,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,P,S,R,I){let z=S.fog,L=R.geometry,w=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?S.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=e.get(x.envMap||w,U),O=f[x.type],k=n.precision;x.precision!==null&&(k=n.getMaxPrecision(x.precision),k!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));let F=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,B=F!==void 0?F.length:0,$=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let ee,Z,V,ne;if(O){let Oe=Bi[O];ee=Oe.vertexShader,Z=Oe.fragmentShader}else{ee=x.vertexShader,Z=x.fragmentShader;let Oe=o.getVertexShaderStage(x),Tt=o.getFragmentShaderStage(x);o.update(x,Oe,Tt),V=Oe.id,ne=Tt.id}let q=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),W=R.isInstancedMesh===!0,Q=R.isBatchedMesh===!0,oe=!!x.map,ie=!!x.matcap,Ee=!!D,re=Ee&&D.isPMREMTexture===!0,xe=!!x.aoMap,ue=!!x.lightMap,ve=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,Ae=!!x.displacementMap,Le=!!x.emissiveMap,ze=!!x.metalnessMap,He=!!x.roughnessMap,tt=x.anisotropy>0,X=x.clearcoat>0,gt=x.diffuseRoughness>0,Ze=x.dispersion>0,at=x.retroreflectivity>0,j=x.iridescence>0,me=x.sheen>0,le=x.transmission>0,Me=tt&&!!x.anisotropyMap,N=X&&!!x.clearcoatMap,A=X&&!!x.clearcoatNormalMap,Y=X&&!!x.clearcoatRoughnessMap,ge=gt&&!!x.diffuseRoughnessMap,ae=j&&!!x.iridescenceMap,_e=j&&!!x.iridescenceThicknessMap,Te=me&&!!x.sheenColorMap,ce=me&&!!x.sheenRoughnessMap,de=!!x.specularMap,Ce=!!x.specularColorMap,G=!!x.specularIntensityMap,pe=le&&!!x.transmissionMap,fe=le&&!!x.thicknessMap,be=!!x.gradientMap,Re=!!x.alphaMap,Pe=x.alphaTest>0,Ve=!!x.alphaHash,Qe=!!x.extensions,we=Ui;x.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(we=i.toneMapping);let qe=re?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,st={shaderID:O,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:Z,defines:x.defines,customVertexShaderID:V,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:Q,batchingColor:Q&&R._colorsTexture!==null,instancing:W,instancingColor:W&&R.instanceColor!==null,instancingMorph:W&&R.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:ie,envMap:Ee,envMapMode:Ee&&D.mapping,envMapPMREM:re,envMapMaxLod:re?qe.length-1:null,envMapSize:re?qe[0].width:null,aoMap:xe,lightMap:ue,bumpMap:ve,normalMap:Se,displacementMap:Ae,emissiveMap:Le,normalMapObjectSpace:Se&&x.normalMapType===Dm,normalMapTangentSpace:Se&&x.normalMapType===pa,packedNormalMap:Se&&x.normalMapType===pa&&NS(x.normalMap.format),metalnessMap:ze,roughnessMap:He,anisotropy:tt,anisotropyMap:Me,clearcoat:X,clearcoatMap:N,clearcoatNormalMap:A,clearcoatRoughnessMap:Y,diffuseRoughness:gt,diffuseRoughnessMap:ge,dispersion:Ze,retroreflection:at,iridescence:j,iridescenceMap:ae,iridescenceThicknessMap:_e,sheen:me,sheenColorMap:Te,sheenRoughnessMap:ce,specularMap:de,specularColorMap:Ce,specularIntensityMap:G,transmission:le,transmissionMap:pe,thicknessMap:fe,gradientMap:be,opaque:x.transparent===!1&&x.blending===ca&&x.alphaToCoverage===!1,alphaMap:Re,alphaTest:Pe,alphaHash:Ve,combine:x.combine,mapUv:oe&&d(x.map.channel),aoMapUv:xe&&d(x.aoMap.channel),lightMapUv:ue&&d(x.lightMap.channel),bumpMapUv:ve&&d(x.bumpMap.channel),normalMapUv:Se&&d(x.normalMap.channel),displacementMapUv:Ae&&d(x.displacementMap.channel),emissiveMapUv:Le&&d(x.emissiveMap.channel),metalnessMapUv:ze&&d(x.metalnessMap.channel),roughnessMapUv:He&&d(x.roughnessMap.channel),anisotropyMapUv:Me&&d(x.anisotropyMap.channel),clearcoatMapUv:N&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(x.sheenRoughnessMap.channel),specularMapUv:de&&d(x.specularMap.channel),specularColorMapUv:Ce&&d(x.specularColorMap.channel),specularIntensityMapUv:G&&d(x.specularIntensityMap.channel),transmissionMapUv:pe&&d(x.transmissionMap.channel),thicknessMapUv:fe&&d(x.thicknessMap.channel),alphaMapUv:Re&&d(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Se||tt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(oe||Re),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:$,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:I.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===At,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===At,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ht,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&x.extensions.multiDraw===!0||Q)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(b,x),m(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let b=f[x.type],P;if(b){let S=Bi[b];P=bn.clone(S.uniforms)}else P=x.uniforms;return P}function v(x,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new LS(i,b,x,s),c.push(P),h.set(b,P)),P}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:M,acquireProgram:v,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function FS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function OS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function m0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function g0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,_,p,m){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},i[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=g,M.materialVariant=a(f),M.groupOrder=_,M.renderOrder=f.renderOrder,M.z=p,M.group=m),e++,M}function l(f,d,g,_,p,m,M){M.reversedDepth===!0&&(p=-p);let v=o(f,d,g,_,p,m);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):t.push(v)}function c(f,d,g,_,p,m){let M=o(f,d,g,_,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,d){t.length>1&&t.sort(f||OS),n.length>1&&n.sort(d||m0),s.length>1&&s.sort(d||m0)}function u(){for(let f=e,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function BS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new g0,i.set(n,[a])):s>=r.length?(a=new g0,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function kS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new De};break;case"SpotLight":t={position:new H,direction:new H,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function zS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var HS=0;function GS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function VS(i){let e=new kS,t=zS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new Ke,a=new Ke;function o(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,v=0,y=0,T=0,E=0,x=0,b=0,P=0,S=0;c.sort(GS);for(let I=0,z=c.length;I<z;I++){let L=c[I],w=L.color,U=L.intensity,D=L.distance,O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ks?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=w.r*U,u+=w.g*U,f+=w.b*U;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],U);S++}else if(L.isSunLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let F=L.shadow,B=t.get(L);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[g]=B,n.sunShadowMap[g]=O;let $=F.getViewportCount();for(let ee=0;ee<$;ee++)n.sunShadowMatrix[_+ee]=F.getMatrix(ee),n.sunShadowCascade[_+ee]=F._cascadeData[ee];_+=$,g++}n.sun[d]=k,d++}else if(L.isDirectionalLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let F=L.shadow,B=t.get(L);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=k,p++}else if(L.isSpotLight){let k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(w).multiplyScalar(U),k.distance=D,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[M]=k;let F=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,F.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[M]=F.matrix,L.castShadow){let B=t.get(L);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,n.spotShadow[M]=B,n.spotShadowMap[M]=O,x++}M++}else if(L.isRectAreaLight){let k=e.get(L);k.color.copy(w).multiplyScalar(U),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[v]=k,v++}else if(L.isPointLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let F=L.shadow,B=t.get(L);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,B.shadowCameraNear=F.camera.near,B.shadowCameraFar=F.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=L.shadow.matrix,E++}n.point[m]=k,m++}else if(L.isHemisphereLight){let k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(U),k.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[y]=k,y++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==m||R.spotLength!==M||R.rectAreaLength!==v||R.hemiLength!==y||R.numSunShadows!==g||R.numDirectionalShadows!==T||R.numPointShadows!==E||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=p,n.spot.length=M,n.rectArea.length=v,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=S,R.sunLength=d,R.directionalLength=p,R.pointLength=m,R.spotLength=M,R.rectAreaLength=v,R.hemiLength=y,R.numSunShadows=g,R.numDirectionalShadows=T,R.numPointShadows=E,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=S,n.version=HS++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let M=0,v=c.length;M<v;M++){let y=c[M];if(y.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function x0(i){let e=new VS(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function WS(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new x0(i),e.set(s,[o])):r>=a.length?(o=new x0(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
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
}`,qS=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],YS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],_0=new Ke,$o=new H,Rf=new H;function KS(i,e,t){let n=new Is,s=new ye,r=new ye,a=new Rt,o=new _c,l=new vc,c={},h=t.maxTextureSize,u={[Ni]:Sn,[Sn]:Ni,[Ht]:Ht},f=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:XS,fragmentShader:$S}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Je(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fr;let m=this.type;this.render=function(E,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===dm&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fr);let P=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(gn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let z=m!==this.type;z&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(w=>w.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,w=E.length;L<w;L++){let U=E[L],D=U.shadow;if(D===void 0){Ye("WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let O=D.getFrameExtents();s.multiply(O),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,D.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(D.camera._reversedDepth=k,D.map===null||z===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===la){if(U.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new kt(s.x,s.y,{format:ks,type:Xt,minFilter:ln,magFilter:ln,generateMipmaps:!1}),D.map.texture.name=U.name+".shadowMap",D.map.depthTexture=new yi(s.x,s.y,ni),D.map.depthTexture.name=U.name+".shadowMapDepth",D.map.depthTexture.format=es,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Bt,D.map.depthTexture.magFilter=Bt}else U.isPointLight?(D.map=new Yo(s.x),D.map.depthTexture=new ao(s.x,Mi)):(D.map=new kt(s.x,s.y),D.map.depthTexture=new yi(s.x,s.y,Mi)),D.map.depthTexture.name=U.name+".shadowMap",D.map.depthTexture.format=es,this.type===fr?(D.map.depthTexture.compareFunction=k?cf:lf,D.map.depthTexture.minFilter=ln,D.map.depthTexture.magFilter=ln):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Bt,D.map.depthTexture.magFilter=Bt);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==s.x||D.map.height!==s.y)&&D.map.setSize(s.x,s.y);let F=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();U.isPointLight!==!0&&D.updateMatrices(U,b);let B=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:b.layers;for(let $=0;$<F;$++){let ee=D.getCamera($);if(U.isPointLight){let Z=D.camera,V=D.matrix,ne=U.distance||Z.far;ne!==Z.far&&(Z.far=ne,Z.updateProjectionMatrix()),$o.setFromMatrixPosition(U.matrixWorld),Z.position.copy($o),Rf.copy(Z.position),Rf.add(qS[$]),Z.up.copy(YS[$]),Z.lookAt(Rf),Z.updateMatrixWorld(),V.makeTranslation(-$o.x,-$o.y,-$o.z),_0.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),D._frustum.setFromProjectionMatrix(_0,Z.coordinateSystem,Z.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)i.setRenderTarget(D.map,$),i.clear();else{$===0&&(i.setRenderTarget(D.map),i.clear());let Z=D.getViewport($);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),I.viewport(a)}n=D.getFrustum($),y(x,b,ee,U,B,this.type)}D.isPointLightShadow!==!0&&this.type===la&&M(D,b),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(P,S,R)};function M(E,x){let b=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new kt(s.x,s.y,{format:ks,type:Xt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,b,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,b,d,_,null)}function v(E,x,b,P){let S=null,R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let I=S.uuid,z=x.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let w=L[z];w===void 0&&(w=S.clone(),L[z]=w,x.addEventListener("dispose",T)),S=w}if(S.visible=x.visible,S.wireframe=x.wireframe,P===la?S.side=x.shadowSide!==null?x.shadowSide:x.side:S.side=x.shadowSide!==null?x.shadowSide:u[x.side],S.alphaMap=x.alphaMap,S.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,S.map=x.map,S.clipShadows=x.clipShadows,S.clippingPlanes=x.clippingPlanes,S.clipIntersection=x.clipIntersection,S.displacementMap=x.displacementMap,S.displacementScale=x.displacementScale,S.displacementBias=x.displacementBias,S.wireframeLinewidth=x.wireframeLinewidth,S.linewidth=x.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=i.properties.get(S);I.light=b}return S}function y(E,x,b,P,S,R){if(E.visible===!1)return;if(E.layers.test(S)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===la)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let L=e.update(E),w=E.material;if(Array.isArray(w)){let U=L.groups;for(let D=0,O=U.length;D<O;D++){let k=U[D],F=w[k.materialIndex];if(F&&F.visible){let B=v(E,F,P,R);E.onBeforeShadow(i,E,x,b,L,B,k),i.renderBufferDirect(b,null,L,B,E,k),E.onAfterShadow(i,E,x,b,L,B,k)}}}else if(w.visible){let U=v(E,w,P,R);E.onBeforeShadow(i,E,x,b,L,U,null),i.renderBufferDirect(b,null,L,U,E,null),E.onAfterShadow(i,E,x,b,L,U,null)}}let z=E.children;for(let L=0,w=z.length;L<w;L++)y(z[L],x,b,P,S,R)}function T(E){E.target.removeEventListener("dispose",T);for(let b in c){let P=c[b],S=E.target.uuid;S in P&&(P[S].dispose(),delete P[S])}}}function jS(i,e){function t(){let G=!1,pe=new Rt,fe=null,be=new Rt(0,0,0,0);return{setMask:function(Re){fe!==Re&&!G&&(i.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){G=Re},setClear:function(Re,Pe,Ve,Qe,we){we===!0&&(Re*=Qe,Pe*=Qe,Ve*=Qe),pe.set(Re,Pe,Ve,Qe),be.equals(pe)===!1&&(i.clearColor(Re,Pe,Ve,Qe),be.copy(pe))},reset:function(){G=!1,fe=null,be.set(-1,0,0,0)}}}function n(){let G=!1,pe=!1,fe=null,be=null,Re=null;return{setReversed:function(Pe){if(pe!==Pe){let Ve=e.get("EXT_clip_control");Pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),pe=Pe;let Qe=Re;Re=null,this.setClear(Qe)}},getReversed:function(){return pe},setTest:function(Pe){Pe?J(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(Pe){fe!==Pe&&!G&&(i.depthMask(Pe),fe=Pe)},setFunc:function(Pe){if(pe&&(Pe=Vm[Pe]),be!==Pe){switch(Pe){case Ql:i.depthFunc(i.NEVER);break;case ec:i.depthFunc(i.ALWAYS);break;case tc:i.depthFunc(i.LESS);break;case $r:i.depthFunc(i.LEQUAL);break;case nc:i.depthFunc(i.EQUAL);break;case ic:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Re!==Pe&&(Re=Pe,pe&&(Pe=1-Pe),i.clearDepth(Pe))},reset:function(){G=!1,fe=null,be=null,Re=null,pe=!1}}}function s(){let G=!1,pe=null,fe=null,be=null,Re=null,Pe=null,Ve=null,Qe=null,we=null;return{setTest:function(qe){G||(qe?J(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(qe){pe!==qe&&!G&&(i.stencilMask(qe),pe=qe)},setFunc:function(qe,st,Oe){(fe!==qe||be!==st||Re!==Oe)&&(i.stencilFunc(qe,st,Oe),fe=qe,be=st,Re=Oe)},setOp:function(qe,st,Oe){(Pe!==qe||Ve!==st||Qe!==Oe)&&(i.stencilOp(qe,st,Oe),Pe=qe,Ve=st,Qe=Oe)},setLocked:function(qe){G=qe},setClear:function(qe){we!==qe&&(i.clearStencil(qe),we=qe)},reset:function(){G=!1,pe=null,fe=null,be=null,Re=null,Pe=null,Ve=null,Qe=null,we=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],_=null,p=!1,m=null,M=null,v=null,y=null,T=null,E=null,x=null,b=new De(0,0,0),P=0,S=!1,R=null,I=null,z=null,L=null,w=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,O=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),D=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),D=O>=2);let F=null,B={},$=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),Z=new Rt().fromArray($),V=new Rt().fromArray(ee);function ne(G,pe,fe,be){let Re=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(G,Pe),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<fe;Ve++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(pe+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Pe}let q={};q[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc($r),ve(!1),Se(Yu),J(i.CULL_FACE),xe(gn);function J(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function W(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Q(G,pe){return f[G]!==pe?(i.bindFramebuffer(G,pe),f[G]=pe,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function oe(G,pe){let fe=g,be=!1;if(G){fe=d.get(pe),fe===void 0&&(fe=[],d.set(pe,fe));let Re=G.textures;if(fe.length!==Re.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,Ve=Re.length;Pe<Ve;Pe++)fe[Pe]=i.COLOR_ATTACHMENT0+Pe;fe.length=Re.length,be=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,be=!0);be&&i.drawBuffers(fe)}function ie(G){return _!==G?(i.useProgram(G),_=G,!0):!1}let Ee={[hi]:i.FUNC_ADD,[pm]:i.FUNC_SUBTRACT,[mm]:i.FUNC_REVERSE_SUBTRACT};Ee[gm]=i.MIN,Ee[xm]=i.MAX;let re={[dr]:i.ZERO,[_m]:i.ONE,[vm]:i.SRC_COLOR,[Zu]:i.SRC_ALPHA,[bm]:i.SRC_ALPHA_SATURATE,[Lo]:i.DST_COLOR,[Io]:i.DST_ALPHA,[ym]:i.ONE_MINUS_SRC_COLOR,[Ju]:i.ONE_MINUS_SRC_ALPHA,[Sm]:i.ONE_MINUS_DST_COLOR,[Mm]:i.ONE_MINUS_DST_ALPHA,[Tm]:i.CONSTANT_COLOR,[Em]:i.ONE_MINUS_CONSTANT_COLOR,[wm]:i.CONSTANT_ALPHA,[Am]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(G,pe,fe,be,Re,Pe,Ve,Qe,we,qe){if(G===gn){p===!0&&(W(i.BLEND),p=!1);return}if(p===!1&&(J(i.BLEND),p=!0),G!==Cc){if(G!==m||qe!==S){if((M!==hi||T!==hi)&&(i.blendEquation(i.FUNC_ADD),M=hi,T=hi),qe)switch(G){case ca:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFunc(i.ONE,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ju:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",G);break}else switch(G){case ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ku:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ju:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",G);break}v=null,y=null,E=null,x=null,b.set(0,0,0),P=0,m=G,S=qe}return}Re=Re||pe,Pe=Pe||fe,Ve=Ve||be,(pe!==M||Re!==T)&&(i.blendEquationSeparate(Ee[pe],Ee[Re]),M=pe,T=Re),(fe!==v||be!==y||Pe!==E||Ve!==x)&&(i.blendFuncSeparate(re[fe],re[be],re[Pe],re[Ve]),v=fe,y=be,E=Pe,x=Ve),(Qe.equals(b)===!1||we!==P)&&(i.blendColor(Qe.r,Qe.g,Qe.b,we),b.copy(Qe),P=we),m=G,S=!1}function ue(G,pe){G.side===Ht?W(i.CULL_FACE):J(i.CULL_FACE);let fe=G.side===Sn;pe&&(fe=!fe),ve(fe),G.blending===ca&&G.transparent===!1?xe(gn):xe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let be=G.stencilWrite;o.setTest(be),be&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Le(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(G){R!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),R=G)}function Se(G){G!==um?(J(i.CULL_FACE),G!==I&&(G===Yu?i.cullFace(i.BACK):G===fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),I=G}function Ae(G){G!==z&&(D&&i.lineWidth(G),z=G)}function Le(G,pe,fe){G?(J(i.POLYGON_OFFSET_FILL),(L!==pe||w!==fe)&&(L=pe,w=fe,a.getReversed()&&(pe=-pe,fe=-fe),i.polygonOffset(pe,fe))):W(i.POLYGON_OFFSET_FILL)}function ze(G){G?J(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function He(G){G===void 0&&(G=i.TEXTURE0+U-1),F!==G&&(i.activeTexture(G),F=G)}function tt(G,pe,fe){fe===void 0&&(F===null?fe=i.TEXTURE0+U-1:fe=F);let be=B[fe];be===void 0&&(be={type:void 0,texture:void 0},B[fe]=be),(be.type!==G||be.texture!==pe)&&(F!==fe&&(i.activeTexture(fe),F=fe),i.bindTexture(G,pe||q[G]),be.type=G,be.texture=pe)}function X(){let G=B[F];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(G){et("WebGLState:",G)}}function Ze(){try{i.compressedTexImage3D(...arguments)}catch(G){et("WebGLState:",G)}}function at(){try{i.texSubImage2D(...arguments)}catch(G){et("WebGLState:",G)}}function j(){try{i.texSubImage3D(...arguments)}catch(G){et("WebGLState:",G)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(G){et("WebGLState:",G)}}function le(){try{i.compressedTexSubImage3D(...arguments)}catch(G){et("WebGLState:",G)}}function Me(){try{i.texStorage2D(...arguments)}catch(G){et("WebGLState:",G)}}function N(){try{i.texStorage3D(...arguments)}catch(G){et("WebGLState:",G)}}function A(){try{i.texImage2D(...arguments)}catch(G){et("WebGLState:",G)}}function Y(){try{i.texImage3D(...arguments)}catch(G){et("WebGLState:",G)}}function ge(G){return u[G]!==void 0?u[G]:i.getParameter(G)}function ae(G,pe){u[G]!==pe&&(i.pixelStorei(G,pe),u[G]=pe)}function _e(G){Z.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Z.copy(G))}function Te(G){V.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),V.copy(G))}function ce(G,pe){let fe=c.get(pe);fe===void 0&&(fe=new WeakMap,c.set(pe,fe));let be=fe.get(G);be===void 0&&(be=i.getUniformBlockIndex(pe,G.name),i.uniformBlockBinding(pe,be,be),fe.set(G,be))}function de(G,pe,fe){let Re=c.get(pe).get(G);l[Re]!==fe&&(i.bindBufferBase(i.UNIFORM_BUFFER,Re,fe),l[Re]=fe)}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},F=null,B={},f={},l={},d=new WeakMap,g=[],_=null,p=!1,m=null,M=null,v=null,y=null,T=null,E=null,x=null,b=new De(0,0,0),P=0,S=!1,R=null,I=null,z=null,L=null,w=null,Z.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:W,bindFramebuffer:Q,drawBuffers:oe,useProgram:ie,setBlending:xe,setMaterial:ue,setFlipSided:ve,setCullFace:Se,setLineWidth:Ae,setPolygonOffset:Le,setScissorTest:ze,activeTexture:He,bindTexture:tt,unbindTexture:X,compressedTexImage2D:gt,compressedTexImage3D:Ze,texImage2D:A,texImage3D:Y,pixelStorei:ae,getParameter:ge,updateUBOMapping:ce,uniformBlockBinding:de,texStorage2D:Me,texStorage3D:N,texSubImage2D:at,texSubImage3D:j,compressedTexSubImage2D:me,compressedTexSubImage3D:le,scissor:_e,viewport:Te,reset:Ce}}function ZS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,_=new FinalizationRegistry(N=>g.delete(N)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return p?new OffscreenCanvas(N,A):Kr("canvas")}function M(N,A,Y){let ge=1,ae=Me(N);if((ae.width>Y||ae.height>Y)&&(ge=Y/Math.max(ae.width,ae.height)),ge<1)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){let _e=Math.floor(ge*ae.width),Te=Math.floor(ge*ae.height);f===void 0&&(f=m(_e,Te));let ce=A?m(_e,Te):f;return ce.width=_e,ce.height=Te,ce.getContext("2d").drawImage(N,0,0,_e,Te),Ye("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+_e+"x"+Te+")."),ce}else return"data"in N&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),N;return N}function v(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(N,A,Y,ge,ae,_e=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Te;ge&&(Te=e.get("EXT_texture_norm16"),Te||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=A;if(A===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8),Y===i.UNSIGNED_SHORT&&Te&&(ce=Te.R16_EXT),Y===i.SHORT&&Te&&(ce=Te.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.R8UI),Y===i.UNSIGNED_SHORT&&(ce=i.R16UI),Y===i.UNSIGNED_INT&&(ce=i.R32UI),Y===i.BYTE&&(ce=i.R8I),Y===i.SHORT&&(ce=i.R16I),Y===i.INT&&(ce=i.R32I)),A===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8),Y===i.UNSIGNED_SHORT&&Te&&(ce=Te.RG16_EXT),Y===i.SHORT&&Te&&(ce=Te.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RG16UI),Y===i.UNSIGNED_INT&&(ce=i.RG32UI),Y===i.BYTE&&(ce=i.RG8I),Y===i.SHORT&&(ce=i.RG16I),Y===i.INT&&(ce=i.RG32I)),A===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),Y===i.UNSIGNED_INT&&(ce=i.RGB32UI),Y===i.BYTE&&(ce=i.RGB8I),Y===i.SHORT&&(ce=i.RGB16I),Y===i.INT&&(ce=i.RGB32I)),A===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ce=i.RGBA32UI),Y===i.BYTE&&(ce=i.RGBA8I),Y===i.SHORT&&(ce=i.RGBA16I),Y===i.INT&&(ce=i.RGBA32I)),A===i.RGB&&(Y===i.UNSIGNED_SHORT&&Te&&(ce=Te.RGB16_EXT),Y===i.SHORT&&Te&&(ce=Te.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),A===i.RGBA){let de=_e?Ka:ht.getTransfer(ae);Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=de===At?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Te&&(ce=Te.RGBA16_EXT),Y===i.SHORT&&Te&&(ce=Te.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(N,A){let Y;return N?A===null||A===Mi||A===fs?Y=i.DEPTH24_STENCIL8:A===ni?Y=i.DEPTH32F_STENCIL8:A===fa&&(Y=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Mi||A===fs?Y=i.DEPTH_COMPONENT24:A===ni?Y=i.DEPTH_COMPONENT32F:A===fa&&(Y=i.DEPTH_COMPONENT16),Y}function b(N,A){return v(N)===!0||N.isFramebufferTexture&&N.minFilter!==Bt&&N.minFilter!==ln?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function P(N){let A=new WeakRef(N);n.get(N).__ref=A,g.add(A),_.register(N,A,A)}function S(N){let A=n.get(N).__ref;A!==void 0&&(g.delete(A),_.unregister(A))}function R(N){z(N.target)}function I(N){L(N.target)}function z(N){N.removeEventListener("dispose",R),S(N),U(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&u.delete(N)}function L(N){N.removeEventListener("dispose",I),S(N),O(N)}function w(){for(let N of g){let A=N.deref();A!==void 0&&(A.isRenderTarget===!0?L(A):z(A))}g.clear(),u.clear()}function U(N){let A=n.get(N);if(A.__webglInit===void 0)return;let Y=N.source,ge=d.get(Y);if(ge){let ae=ge[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&D(N),Object.keys(ge).length===0&&d.delete(Y)}n.remove(N)}function D(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let Y=N.source,ge=d.get(Y);delete ge[A.__cacheKey],a.memory.textures--}function O(N){let A=n.get(N);A.__depthDisposeCallback&&A.__depthDisposeCallback();let Y=N.depthTexture;if(Y&&Y.renderTarget===N&&z(Y),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(A.__webglFramebuffer[ae]))for(let _e=0;_e<A.__webglFramebuffer[ae].length;_e++)i.deleteFramebuffer(A.__webglFramebuffer[ae][_e]);else i.deleteFramebuffer(A.__webglFramebuffer[ae]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ae])}else{if(Array.isArray(A.__webglFramebuffer))for(let ae=0;ae<A.__webglFramebuffer.length;ae++)i.deleteFramebuffer(A.__webglFramebuffer[ae]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ae=0;ae<A.__webglColorRenderbuffer.length;ae++)A.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ae]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let ge=N.textures;for(let ae=0,_e=ge.length;ae<_e;ae++){let Te=n.get(ge[ae]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(ge[ae])}n.remove(N)}let k=0;function F(){k=0}function B(){return k}function $(N){k=N}function ee(){let N=k;return N>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,N}function Z(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.mipmapsAutoUpdate),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function V(N,A){let Y=n.get(N);if(N.isVideoTexture&&me(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){let ge=N.image;if(ge===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Y,N,A);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+A)}function ne(N,A){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ue(Y,N,A);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+A)}function q(N,A){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ue(Y,N,A);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+A)}function J(N,A){let Y=n.get(N);if(N.version>0&&Y.__version!==N.version){ve(Y,N,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+A)}let W={[Rn]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},Q={[Bt]:i.NEAREST,[Dc]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},oe={[Um]:i.NEVER,[hf]:i.ALWAYS,[Fm]:i.LESS,[lf]:i.LEQUAL,[Om]:i.EQUAL,[cf]:i.GEQUAL,[Bm]:i.GREATER,[km]:i.NOTEQUAL};function ie(N,A){if(A.type===ni&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ln||A.magFilter===ua||A.magFilter===gr||A.magFilter===ui||A.minFilter===ln||A.minFilter===ua||A.minFilter===gr||A.minFilter===ui)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,W[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,W[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,W[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Q[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Q[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Bt||A.minFilter!==gr&&A.minFilter!==ui||A.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ee(N,A){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",R),P(A));let ge=A.source,ae=d.get(ge);ae===void 0&&(ae={},d.set(ge,ae));let _e=Z(A);if(_e!==N.__cacheKey){ae[_e]===void 0&&(ae[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[_e].usedTimes++;let Te=ae[N.__cacheKey];Te!==void 0&&(ae[N.__cacheKey].usedTimes--,Te.usedTimes===0&&D(A)),N.__cacheKey=_e,N.__webglTexture=ae[_e].texture}return Y}function re(N,A,Y){return Math.floor(Math.floor(N/Y)/A)}function xe(N,A,Y,ge){let _e=N.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Y,ge,A.data);else{_e.sort((G,pe)=>G.start-pe.start);let Te=0;for(let G=1;G<_e.length;G++){let pe=_e[Te],fe=_e[G],be=pe.start+pe.count,Re=re(fe.start,A.width,4),Pe=re(pe.start,A.width,4);fe.start<=be+1&&Re===Pe&&re(fe.start+fe.count-1,A.width,4)===Re?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++Te,_e[Te]=fe)}_e.length=Te+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let G=0,pe=_e.length;G<pe;G++){let fe=_e[G],be=Math.floor(fe.start/4),Re=Math.ceil(fe.count/4),Pe=be%A.width,Ve=Math.floor(be/A.width),Qe=Re,we=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(i.TEXTURE_2D,0,Pe,Ve,Qe,we,Y,ge,A.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function ue(N,A,Y){let ge=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=i.TEXTURE_3D);let ae=Ee(N,A),_e=A.source;t.bindTexture(ge,N.__webglTexture,i.TEXTURE0+Y);let Te=n.get(_e);if(_e.version!==Te.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap!="undefined"&&A.image instanceof ImageBitmap)===!1){let we=ht.getPrimaries(ht.workingColorSpace),qe=A.colorSpace===ds?null:ht.getPrimaries(A.colorSpace),st=A.colorSpace===ds||we===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let de=M(A.image,!1,s.maxTextureSize);de=le(A,de);let Ce=r.convert(A.format,A.colorSpace),G=r.convert(A.type),pe=E(A.internalFormat,Ce,G,A.normalized,A.colorSpace,A.isVideoTexture);ie(ge,A);let fe,be=A.mipmaps,Re=A.isVideoTexture!==!0,Pe=Te.__version===void 0||ae===!0,Ve=_e.dataReady,Qe=b(A,de);if(A.isDepthTexture)pe=x(A.format===Si,A.type),Pe&&(Re?t.texStorage2D(i.TEXTURE_2D,1,pe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,pe,de.width,de.height,0,Ce,G,null));else if(A.isDataTexture)if(be.length>0){Re&&Pe&&t.texStorage2D(i.TEXTURE_2D,Qe,pe,be[0].width,be[0].height);for(let we=0,qe=be.length;we<qe;we++)fe=be[we],Re?Ve&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,fe.width,fe.height,Ce,G,fe.data):t.texImage2D(i.TEXTURE_2D,we,pe,fe.width,fe.height,0,Ce,G,fe.data);A.generateMipmaps=!1}else Re?(Pe&&t.texStorage2D(i.TEXTURE_2D,Qe,pe,de.width,de.height),Ve&&xe(A,de,Ce,G)):t.texImage2D(i.TEXTURE_2D,0,pe,de.width,de.height,0,Ce,G,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Re&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,pe,be[0].width,be[0].height,de.depth);for(let we=0,qe=be.length;we<qe;we++)if(fe=be[we],A.format!==Vn)if(Ce!==null)if(Re){if(Ve)if(A.layerUpdates.size>0){let st=Mf(fe.width,fe.height,A.format,A.type);for(let Oe of A.layerUpdates){let Tt=fe.data.subarray(Oe*st/fe.data.BYTES_PER_ELEMENT,(Oe+1)*st/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,Oe,fe.width,fe.height,1,Ce,Tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,fe.width,fe.height,de.depth,Ce,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,pe,fe.width,fe.height,de.depth,0,fe.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,fe.width,fe.height,de.depth,Ce,G,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,pe,fe.width,fe.height,de.depth,0,Ce,G,fe.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Re&&Pe&&t.texStorage2D(i.TEXTURE_2D,Qe,pe,be[0].width,be[0].height);for(let we=0,qe=be.length;we<qe;we++)fe=be[we],A.format!==Vn?Ce!==null?Re?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,fe.width,fe.height,Ce,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,we,pe,fe.width,fe.height,0,fe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?Ve&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,fe.width,fe.height,Ce,G,fe.data):t.texImage2D(i.TEXTURE_2D,we,pe,fe.width,fe.height,0,Ce,G,fe.data)}else if(A.isDataArrayTexture)if(Re){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,pe,de.width,de.height,de.depth),Ve)if(A.layerUpdates.size>0){let we=Mf(de.width,de.height,A.format,A.type);for(let qe of A.layerUpdates){let st=de.data.subarray(qe*we/de.data.BYTES_PER_ELEMENT,(qe+1)*we/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,de.width,de.height,1,Ce,G,st)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ce,G,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,de.width,de.height,de.depth,0,Ce,G,de.data);else if(A.isData3DTexture)Re?(Pe&&t.texStorage3D(i.TEXTURE_3D,Qe,pe,de.width,de.height,de.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ce,G,de.data)):t.texImage3D(i.TEXTURE_3D,0,pe,de.width,de.height,de.depth,0,Ce,G,de.data);else if(A.isFramebufferTexture){if(Pe)if(Re)t.texStorage2D(i.TEXTURE_2D,Qe,pe,de.width,de.height);else{let we=de.width,qe=de.height;for(let st=0;st<Qe;st++)t.texImage2D(i.TEXTURE_2D,st,pe,we,qe,0,Ce,G,null),we>>=1,qe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let we=i.canvas;if(we.hasAttribute("layoutsubtree")||we.setAttribute("layoutsubtree","true"),de.parentNode!==we){we.appendChild(de),u.add(A),we.onpaint=qe=>{let st=qe.changedElements;for(let Oe of u)st.includes(Oe.image)&&(Oe.needsUpdate=!0)},we.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let st=i.RGBA,Oe=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,st,Oe,Tt,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(Re&&Pe){let we=Me(be[0]);t.texStorage2D(i.TEXTURE_2D,Qe,pe,we.width,we.height)}for(let we=0,qe=be.length;we<qe;we++)fe=be[we],Re?Ve&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ce,G,fe):t.texImage2D(i.TEXTURE_2D,we,pe,Ce,G,fe);A.generateMipmaps=!1}else if(Re){if(Pe){let we=Me(de);t.texStorage2D(i.TEXTURE_2D,Qe,pe,we.width,we.height)}Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,G,de)}else t.texImage2D(i.TEXTURE_2D,0,pe,Ce,G,de);v(A)&&A.mipmapsAutoUpdate===!0&&y(ge),Te.__version=_e.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ve(N,A,Y){if(A.image.length!==6)return;let ge=Ee(N,A),ae=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Y);let _e=n.get(ae);if(ae.version!==_e.__version||ge===!0){t.activeTexture(i.TEXTURE0+Y);let Te=ht.getPrimaries(ht.workingColorSpace),ce=A.colorSpace===ds?null:ht.getPrimaries(A.colorSpace),de=A.colorSpace===ds||Te===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ce=A.isCompressedTexture||A.image[0].isCompressedTexture,G=A.image[0]&&A.image[0].isDataTexture,pe=[];for(let Oe=0;Oe<6;Oe++)!Ce&&!G?pe[Oe]=M(A.image[Oe],!0,s.maxCubemapSize):pe[Oe]=G?A.image[Oe].image:A.image[Oe],pe[Oe]=le(A,pe[Oe]);let fe=pe[0],be=r.convert(A.format,A.colorSpace),Re=r.convert(A.type),Pe=E(A.internalFormat,be,Re,A.normalized,A.colorSpace),Ve=A.isVideoTexture!==!0,Qe=_e.__version===void 0||ge===!0,we=ae.dataReady,qe=b(A,fe);ie(i.TEXTURE_CUBE_MAP,A);let st;if(A.isDepthTexture){if(Pe=x(A.format===Si,A.type),Qe)if(Ve)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pe,fe.width,fe.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,fe.width,fe.height,0,be,Re,null)}else if(Ce){Ve&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Pe,fe.width,fe.height);for(let Oe=0;Oe<6;Oe++){st=pe[Oe].mipmaps;for(let Tt=0;Tt<st.length;Tt++){let dn=st[Tt];A.format!==Vn?be!==null?Ve?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Tt,0,0,dn.width,dn.height,be,dn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Tt,Pe,dn.width,dn.height,0,dn.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Tt,0,0,dn.width,dn.height,be,Re,dn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Tt,Pe,dn.width,dn.height,0,be,Re,dn.data)}}}else{if(st=A.mipmaps,Ve&&Qe){st.length>0&&qe++;let Oe=Me(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Pe,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(G){Ve?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,pe[Oe].width,pe[Oe].height,be,Re,pe[Oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,pe[Oe].width,pe[Oe].height,0,be,Re,pe[Oe].data);for(let Tt=0;Tt<st.length;Tt++){let Ms=st[Tt].image[Oe].image;Ve?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Tt+1,0,0,Ms.width,Ms.height,be,Re,Ms.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Tt+1,Pe,Ms.width,Ms.height,0,be,Re,Ms.data)}}else{Ve?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,be,Re,pe[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,be,Re,pe[Oe]);for(let Tt=0;Tt<st.length;Tt++){let dn=st[Tt];Ve?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Tt+1,0,0,be,Re,dn.image[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Tt+1,Pe,be,Re,dn.image[Oe])}}}v(A)&&A.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),_e.__version=ae.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Se(N,A,Y,ge,ae,_e){let Te=r.convert(Y.format,Y.colorSpace),ce=r.convert(Y.type),de=E(Y.internalFormat,Te,ce,Y.normalized,Y.colorSpace),Ce=n.get(A),G=n.get(Y);if(G.__renderTarget=A,!Ce.__hasExternalTextures){let pe=Math.max(1,A.width>>_e),fe=Math.max(1,A.height>>_e);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,_e,de,pe,fe,A.depth,0,Te,ce,null):t.texImage2D(ae,_e,de,pe,fe,0,Te,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),j(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ae,G.__webglTexture,0,at(A)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,ae,G.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(N,A,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){let ge=A.depthTexture,ae=ge&&ge.isDepthTexture?ge.type:null,_e=x(A.stencilBuffer,ae),Te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;j(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(A),_e,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(A),_e,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,_e,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,N)}else{let ge=A.textures;for(let ae=0;ae<ge.length;ae++){let _e=ge[ae],Te=r.convert(_e.format,_e.colorSpace),ce=r.convert(_e.type),de=E(_e.internalFormat,Te,ce,_e.normalized,_e.colorSpace);j(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(A),de,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(A),de,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,de,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(N,A,Y){let ge=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(A.depthTexture);ae.__renderTarget=A;let _e=ge?A.depthTexture.image[0]:A.depthTexture.image;(!ae.__webglTexture||_e.width!==A.width||_e.height!==A.height)&&(_e.width=A.width,_e.height=A.height,A.depthTexture.needsUpdate=!0),ge?J(A.depthTexture,0):V(A.depthTexture,0);let Te=ae.__webglTexture,ce=at(A),de=ge?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,Ce=A.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===es)j(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,de,Te,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,de,Te,0);else if(A.depthTexture.format===Si)j(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,de,Te,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,de,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(N){let A=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let ge=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){let ae=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",ae)};ge.addEventListener("dispose",ae),A.__depthDisposeCallback=ae}A.__boundDepthTexture=ge}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let ge=0;ge<6;ge++)Le(A.__webglFramebuffer[ge],N,ge);else N.texture.mipmaps.length>0?Le(A.__webglFramebuffer[0],N,0):Le(A.__webglFramebuffer,N,0);else if(Y){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=i.createRenderbuffer(),Ae(A.__webglDepthbuffer[ge],N,!1);else{let ae=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,_e)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ae(A.__webglDepthbuffer,N,!1);else{let ae=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(N,A,Y){let ge=n.get(N);A!==void 0&&Se(ge.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ze(N)}function tt(N){let A=N.texture,Y=n.get(N),ge=n.get(A);N.addEventListener("dispose",I),P(N);let ae=N.textures,_e=N.isWebGLCubeRenderTarget===!0,Te=ae.length>1;if(Te||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=A.version,a.memory.textures++),_e){Y.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps.length>0){Y.__webglFramebuffer[ce]=[];for(let de=0;de<A.mipmaps.length;de++)Y.__webglFramebuffer[ce][de]=i.createFramebuffer()}else Y.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)Y.__webglFramebuffer[ce]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ce=0,de=ae.length;ce<de;ce++){let Ce=n.get(ae[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&j(N)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){let de=ae[ce];Y.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);let Ce=r.convert(de.format,de.colorSpace),G=r.convert(de.type),pe=E(de.internalFormat,Ce,G,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),fe=at(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,pe,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(Y.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),ie(i.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)Se(Y.__webglFramebuffer[ce][de],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else Se(Y.__webglFramebuffer[ce],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(A)?y(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ce=0,de=ae.length;ce<de;ce++){let Ce=ae[ce],G=n.get(Ce),pe=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,G.__webglTexture),ie(pe,Ce),Se(Y.__webglFramebuffer,N,Ce,i.COLOR_ATTACHMENT0+ce,pe,0),v(Ce)&&y(pe)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ge.__webglTexture),ie(ce,A),A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)Se(Y.__webglFramebuffer[de],N,A,i.COLOR_ATTACHMENT0,ce,de);else Se(Y.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,ce,0);v(A)?y(ce):A.mipmaps.length>0&&i.texParameteri(ce,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&ze(N)}function X(N){let A=N.textures;for(let Y=0,ge=A.length;Y<ge;Y++){let ae=A[Y];if(v(ae)&&ae.mipmapsAutoUpdate===!0){let _e=T(N),Te=n.get(ae).__webglTexture;t.bindTexture(_e,Te),y(_e),t.unbindTexture()}}}let gt=[];function Ze(N){if(N.samples>0){if(j(N)===!1){let A=N.textures,Y=N.width,ge=N.height,ae=i.COLOR_BUFFER_BIT,_e=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(N),ce=A.length>1;if(ce)for(let Ce=0;Ce<A.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);let G=n.get(A[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,Y,ge,0,0,Y,ge,ae,i.NEAREST),l===!0&&(gt.length=0,gt.push(i.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&gt.push(_e),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ce=0;Ce<A.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);let G=n.get(A[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,G,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function at(N){return Math.min(s.maxSamples,N.samples)}function j(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function me(N){let A=a.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function le(N,A){let Y=N.colorSpace,ge=N.format,ae=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Fn&&Y!==ds&&(ht.getTransfer(Y)===At?(ge!==Vn||ae!==Cn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",Y)),A}function Me(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=F,this.getTextureUnits=B,this.setTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=ne,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=He,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=j,this.dispose=w}function JS(i,e){function t(n,s=ds){let r,a=ht.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ef)return i.BYTE;if(n===tf)return i.SHORT;if(n===fa)return i.UNSIGNED_SHORT;if(n===Nc)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===Xt)return i.HALF_FLOAT;if(n===rf)return i.ALPHA;if(n===af)return i.RGB;if(n===Vn)return i.RGBA;if(n===es)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Oc)return i.RED;if(n===Bc)return i.RED_INTEGER;if(n===ks)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===zc)return i.RGBA_INTEGER;if(n===ko||n===zo||n===Ho||n===Go)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Gc||n===Vc||n===Wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===$c||n===qc||n===Yc||n===Kc||n===Vo||n===jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===$c)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yc)return r.COMPRESSED_R11_EAC;if(n===Kc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vo)return r.COMPRESSED_RG11_EAC;if(n===jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zc||n===Jc||n===Qc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eh)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===th)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nh)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ih)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sh)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rh)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ah)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oh)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lh)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ch)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hh)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uh||n===fh||n===dh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uh)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===mh||n===Wo||n===gh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ph)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eb=`
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

}`,Uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dt({vertexShader:QS,fragmentShader:eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ff=class extends Pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding!="undefined",p=new Uf,m={},M=t.getContextAttributes(),v=null,y=null,T=[],E=[],x=new ye,b=null,P=null,S=new on;S.viewport=new Rt;let R=new on;R.viewport=new Rt;let I=[S,R],z=new Ac,L=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let V=T[Z];return V===void 0&&(V=new Qr,T[Z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Z){let V=T[Z];return V===void 0&&(V=new Qr,T[Z]=V),V.getGripSpace()},this.getHand=function(Z){let V=T[Z];return V===void 0&&(V=new Qr,T[Z]=V),V.getHandSpace()};function U(Z){let V=E.indexOf(Z.inputSource);if(V===-1)return;let ne=T[V];ne!==void 0&&(ne.update(Z.inputSource,Z.frame,c||a),ne.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",O);for(let Z=0;Z<T.length;Z++){let V=E[Z];V!==null&&(E[Z]=null,T[Z].disconnect(V))}L=null,w=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(v),d=null,f=null,u=null,s=null,y=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",D),s.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,q=null,J=null;M.depth&&(J=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=M.stencil?Si:es,q=M.stencil?fs:Mi);let W={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(W),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new kt(f.textureWidth,f.textureHeight,{format:Vn,type:Cn,depthTexture:new yi(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ne={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new kt(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(Z){for(let V=0;V<Z.removed.length;V++){let ne=Z.removed[V],q=E.indexOf(ne);q>=0&&(E[q]=null,T[q].disconnect(ne))}for(let V=0;V<Z.added.length;V++){let ne=Z.added[V],q=E.indexOf(ne);if(q===-1){for(let W=0;W<T.length;W++)if(W>=E.length){E.push(ne),q=W;break}else if(E[W]===null){E[W]=ne,q=W;break}if(q===-1)break}let J=T[q];J&&J.connect(ne)}}function k(Z,V){V===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(V.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let V=Z.near,ne=Z.far;p.texture!==null&&(p.depthNear>0&&(V=p.depthNear),p.depthFar>0&&(ne=p.depthFar)),z.near=R.near=S.near=V,z.far=R.far=S.far=ne,(L!==z.near||w!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,w=z.far),z.layers.mask=Z.layers.mask|6,S.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;let q=Z.parent,J=z.cameras;k(z,q);for(let W=0;W<J.length;W++)k(J[W],q);z.projectionMatrix.copy(S.projectionMatrix),z.projectionMatrixInverse.copy(S.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),F(Z,z,q)};function F(Z,V,ne){ne===null?Z.matrix.copy(V.matrixWorld):(Z.matrix.copy(ne.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(V.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ir*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(Z){return m[Z]};let B=null;function $(Z,V){if(h=V.getViewerPose(c||a),g=V,h!==null){let ne=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let q=!1;ne.length!==z.cameras.length&&(z.cameras.length=0,q=!0);for(let oe=0;oe<ne.length;oe++){let ie=ne[oe],Ee=null;if(d!==null)Ee=d.getViewport(ie);else{let xe=u.getViewSubImage(f,ie);Ee=xe.viewport,oe===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let re=I[oe];re===void 0&&(re=new on,re.layers.enable(oe),re.viewport=new Rt,I[oe]=re),re.matrix.fromArray(ie.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ie.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),oe===0&&(z.matrix.copy(re.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),q===!0&&z.cameras.push(re)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let oe=u.getDepthInformation(ne[0]);oe&&oe.isValid&&oe.texture&&p.init(oe,s.renderState)}if(J&&J.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let oe=0;oe<ne.length;oe++){let ie=ne[oe].camera;if(ie){let Ee=m[ie];Ee||(Ee=new oo,m[ie]=Ee);let re=u.getCameraImage(ie);Ee.sourceTexture=re}}}}for(let ne=0;ne<T.length;ne++){let q=E[ne],J=T[ne];q!==null&&J!==void 0&&J.update(q,V,c||a)}B&&B(Z,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}let ee=new v0;ee.setAnimationLoop($),this.setAnimationLoop=function(Z){B=Z},this.dispose=function(){}}},tb=new Ke,C0=new rt;C0.set(-1,0,0,0,1,0,0,0,1);function nb(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_f(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,v,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),v=M.envMap,y=M.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(C0),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ib(i,e,t,n){let s={},r={};function a(M,v){let y=v.program;n.uniformBlockBinding(M,y,s[M.id])}function o(M,v){let y=s[M.id];y===void 0&&(g(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",p));let T=v.program;n.updateUBOMapping(M,T);let E=e.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let v=i.createBuffer(),y=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(M){let v=s[M.id],y=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,x=y.length;E<x;E++){let b=y[E];if(Array.isArray(b))for(let P=0,S=b.length;P<S;P++)h(b[P],E,P,T);else h(b,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,v,y,T){if(f(M,v,y,T)===!0){let E=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let P=0;P<x.length;P++){let S=x[P],R=_(S,!0);u(S,M.__data,b),b+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function u(M,v,y){typeof M=="number"||typeof M=="boolean"?v[y]=M:M.isMatrix3?(v[y]=M.elements[0],v[y+1]=M.elements[1],v[y+2]=M.elements[2],v[y+3]=0,v[y+4]=M.elements[3],v[y+5]=M.elements[4],v[y+6]=M.elements[5],v[y+7]=0,v[y+8]=M.elements[6],v[y+9]=M.elements[7],v[y+10]=M.elements[8],v[y+11]=0):ArrayBuffer.isView(M)?v.set(M.subarray(0,v.length-y),y):M.toArray(v,y)}function f(M,v,y,T){let E=M.value,x=v+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let b=T[x],P=!1;for(let S=0;S<E.length;S++)d(E[S],b,S)===!0&&(P=!0);return P}return d(E,T,x)}function d(M,v,y){if(v[y]===void 0)return typeof M=="number"||typeof M=="boolean"?v[y]=M:ArrayBuffer.isView(M)?v[y]=M.slice():v[y]=M.clone(),!0;{let T=v[y];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return v[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function g(M){let v=M.uniforms,y=0,T=16;for(let x=0,b=v.length;x<b;x++){let P=Array.isArray(v[x])?v[x]:[v[x]];for(let S=0,R=P.length;S<R;S++){let I=P[S],z=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(v[x])||Array.isArray(I.value),w=y;for(let D=0,O=z.length;D<O;D++){let k=z[D],F=_(k,L),B=y%T,$=B%F.boundary,ee=B+$;y+=$,ee!==0&&T-ee<F.storage&&(y+=T-ee),D===0&&(w=y),y+=F.storage}let U=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new U((y-w)/Float32Array.BYTES_PER_ELEMENT),I.__offset=w}}let E=y%T;return E>0&&(y+=T-E),M.__size=y,M.__cache={},this}function _(M,v){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",M),v===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(M){let v=M.target;v.removeEventListener("dispose",p),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function rb(){return Oi===null&&(Oi=new li(sb,16,16,ks,Xt),Oi.name="DFG_LUT",Oi.minFilter=ln,Oi.magFilter=ln,Oi.wrapS=ai,Oi.wrapT=ai,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var yh=class{constructor(e={}){let{canvas:t=zm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=d,p=new Set([zc,kc,Bc]),m=new Set([Cn,Mi,fa,fs,Uc,Fc]),M=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1,I=null,z=null,L=null,w=null;this._outputColorSpace=Lt;let U=0,D=0,O=null,k=-1,F=null,B=new Rt,$=new Rt,ee=null,Z=new De(0),V=0,ne=t.width,q=t.height,J=1,W=null,Q=null,oe=new Rt(0,0,ne,q),ie=new Rt(0,0,ne,q),Ee=!1,re=new Is,xe=new cc,ue=!1,ve=!1,Se=new Ke,Ae=new H,Le=new Rt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function tt(){return O===null?J:1}let X=n;function gt(C,K){return t.getContext(C,K)}let Ze,at,j,me,le,Me,N,A,Y,ge,ae,_e,Te,ce,de,Ce,G,pe,fe,be,Re,Pe,Ve;try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),X===null){let K="webgl2";if(X=gt(K,C),X===null)throw gt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(C){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),et("WebGLRenderer: "+C.message),C}function Qe(){Ze=new gM(X),Ze.init(),Re=new JS(X,Ze),at=new rM(X,Ze,e,Re),j=new jS(X,Ze),at.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),z=X.createFramebuffer(),L=X.createFramebuffer(),w=X.createFramebuffer(),me=new vM(X),le=new FS,Me=new ZS(X,Ze,j,le,at,Re,me),N=new mM(S),A=new M_(X),Pe=new iM(X,A),Y=new xM(X,A,me,Pe),ge=new MM(X,Y,A,Pe,me),pe=new yM(X,at,Me),de=new aM(le),ae=new US(S,N,Ze,at,Pe,de),_e=new nb(S,le),Te=new BS,ce=new WS(Ze),G=new nM(S,N,j,ge,g,l),Ce=new KS(S,ge,at),Ve=new ib(X,me,at,j),fe=new sM(X,Ze,me),be=new _M(X,Ze,me),me.programs=ae.programs,S.capabilities=at,S.extensions=Ze,S.properties=le,S.renderLists=Te,S.shadowMap=Ce,S.state=j,S.info=me}_!==Cn&&(P=new bM(_,t.width,t.height,o,s,r));let we=new Ff(S,X);this.xr=we,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=Ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(ne,q,!1))},this.getSize=function(C){return C.set(ne,q)},this.setSize=function(C,K,he=!0){if(we.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,q=K,t.width=Math.floor(C*J),t.height=Math.floor(K*J),he===!0&&(t.style.width=C+"px",t.style.height=K+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(ne*J,q*J).floor()},this.setDrawingBufferSize=function(C,K,he){ne=C,q=K,J=he,t.width=Math.floor(C*he),t.height=Math.floor(K*he),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(_===Cn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(oe)},this.setViewport=function(C,K,he,te){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,K,he,te),j.viewport(B.copy(oe).multiplyScalar(tt()).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,K,he,te){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,K,he,te),j.scissor($.copy(ie).multiplyScalar(tt()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){j.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,he=!0){let te=0;if(C){let se=!1;if(O!==null){let Fe=O.texture.format;se=p.has(Fe)}if(se){let Fe=O.texture.type,Ge=m.has(Fe),Ue=G.getClearColor(),ke=G.getClearAlpha(),$e=Ue.r,ot=Ue.g,xt=Ue.b;Ge?(M[0]=$e,M[1]=ot,M[2]=xt,M[3]=ke,X.clearBufferuiv(X.COLOR,0,M)):(v[0]=$e,v[1]=ot,v[2]=xt,v[3]=ke,X.clearBufferiv(X.COLOR,0,v))}else te|=X.COLOR_BUFFER_BIT}K&&(te|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),G.dispose(),Te.dispose(),ce.dispose(),Me.dispose(),le.dispose(),N.dispose(),ge.dispose(),Y.dispose(),Pe.dispose(),Ve.dispose(),ae.dispose(),we.dispose(),we.removeEventListener("sessionstart",rp),we.removeEventListener("sessionend",ap),$s.stop()};function qe(C){C.preventDefault(),ja("WebGLRenderer: Context Lost."),R=!0}function st(){ja("WebGLRenderer: Context Restored."),R=!1;let C=me.autoReset,K=Ce.enabled,he=Ce.autoUpdate,te=Ce.needsUpdate,se=Ce.type;Qe(),me.autoReset=C,Ce.enabled=K,Ce.autoUpdate=he,Ce.needsUpdate=te,Ce.type=se}function Oe(C){et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Tt(C){let K=C.target;K.removeEventListener("dispose",Tt),dn(K)}function dn(C){Ms(C),le.remove(C)}function Ms(C){let K=le.get(C).programs;K!==void 0&&(K.forEach(function(he){ae.releaseProgram(he)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,he,te,se,Fe){K===null&&(K=ze);let Ge=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ue=Gg(C,K,he,te,se);j.setMaterial(te,Ge);let ke=he.index,$e=1;if(te.wireframe===!0){if(ke=Y.getWireframeAttribute(he),ke===void 0)return;$e=2}let ot=he.drawRange,xt=he.attributes.position,We=ot.start*$e,_t=(ot.start+ot.count)*$e;Fe!==null&&(We=Math.max(We,Fe.start*$e),_t=Math.min(_t,(Fe.start+Fe.count)*$e)),ke!==null?(We=Math.max(We,0),_t=Math.min(_t,ke.count)):xt!=null&&(We=Math.max(We,0),_t=Math.min(_t,xt.count));let rn=_t-We;if(rn<0||rn===1/0)return;Pe.setup(se,te,Ue,he,ke);let Ot,Nt=fe;if(ke!==null&&(Ot=A.get(ke),Nt=be,Nt.setIndex(Ot)),se.isMesh)te.wireframe===!0?(j.setLineWidth(te.wireframeLinewidth*tt()),Nt.setMode(X.LINES)):Nt.setMode(X.TRIANGLES);else if(se.isLine){let Tn=te.linewidth;Tn===void 0&&(Tn=1),j.setLineWidth(Tn*tt()),se.isLineSegments?Nt.setMode(X.LINES):se.isLineLoop?Nt.setMode(X.LINE_LOOP):Nt.setMode(X.LINE_STRIP)}else se.isPoints?Nt.setMode(X.POINTS):se.isSprite&&Nt.setMode(X.TRIANGLES);if(se.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))Nt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let Tn=se._multiDrawStarts,Xe=se._multiDrawCounts,Nn=se._multiDrawCount,Ct=ke?A.get(ke).bytesPerElement:1,qs=le.get(te).currentProgram.getUniforms();for(let En=0;En<Nn;En++)qs.setValue(X,"_gl_DrawID",En),Nt.render(Tn[En]/Ct,Xe[En])}else if(se.isInstancedMesh)Nt.renderInstances(We,rn,se.count);else if(he.isInstancedBufferGeometry){let Tn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Xe=Math.min(he.instanceCount,Tn);Nt.renderInstances(We,rn,Xe)}else Nt.render(We,rn)};function sp(C,K,he,te){I!==null&&C.isNodeMaterial&&I.setObject(te,C),ue===!0&&de.setState(C,he,!1),C.transparent===!0&&C.side===Ht&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,Ia(C,K,te),C.side=Ni,C.needsUpdate=!0,Ia(C,K,te),C.side=Ht):Ia(C,K,te)}this.compile=function(C,K,he=null){he===null&&(he=C),I!==null&&I.renderStart(C,K,he),E=ce.get(he),E.init(K),b.push(E),he.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(E.pushLight(se),se.castShadow&&E.pushShadow(se))}),C!==he&&C.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(E.pushLight(se),se.castShadow&&E.pushShadow(se))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),ve=this.localClippingEnabled,ue=de.init(this.clippingPlanes,ve),ue===!0&&de.setGlobalState(this.clippingPlanes,K),I!==null&&Ce.render(E.state.shadowsArray,he,K);let te=new Set;return C.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Fe=se.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){let Ue=Fe[Ge];sp(Ue,he,K,se),te.add(Ue)}else sp(Fe,he,K,se),te.add(Fe)}),E=b.pop(),I!==null&&I.renderEnd(),te},this.compileAsync=function(C,K,he=null){let te=this.compile(C,K,he);return new Promise(se=>{function Fe(){if(te.forEach(function(Ge){let ke=le.get(Ge).currentProgram;(ke===void 0||ke.isReady())&&te.delete(Ge)}),te.size===0){se(C);return}setTimeout(Fe,10)}Ze.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let tu=null;function zg(C){tu&&tu(C)}function rp(){$s.stop()}function ap(){$s.start()}let $s=new v0;$s.setAnimationLoop(zg),typeof self!="undefined"&&$s.setContext(self),this.setAnimationLoop=function(C){tu=C,we.setAnimationLoop(C),C===null?$s.stop():$s.start()},we.addEventListener("sessionstart",rp),we.addEventListener("sessionend",ap),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(C,K);let he=we.enabled===!0&&we.isPresenting===!0,te=P!==null&&(O===null||he)&&P.begin(S,O);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(K),K=we.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,K,O),E=ce.get(C,b.length),E.init(K),E.state.textureUnits=Me.getTextureUnits(),b.push(E),Se.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),K.isArrayCamera?xe.setFromArrayCamera(K):re.setFromProjectionMatrix(Se,oi,K.reversedDepth),ve=this.localClippingEnabled,ue=de.init(this.clippingPlanes,ve),T=Te.get(C,x.length),T.init(),x.push(T),this.info.render.frame++,we.enabled===!0&&we.isPresenting===!0){let Ge=S.xr.getDepthSensingMesh();Ge!==null&&nu(Ge,K,-1/0,S.sortObjects)}nu(C,K,0,S.sortObjects),T.finish(),I!==null&&I.updateLights(E.state.lightsArray),S.sortObjects===!0&&T.sort(W,Q),He=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,He&&G.addToRenderList(T,C),this.info.autoReset===!0&&this.info.reset(),ue===!0&&de.beginShadows();let se=E.state.shadowsArray;if(Ce.render(se,C,K),ue===!0&&de.endShadows(),(te&&P.hasRenderPass())===!1){let Ge=T.opaque,Ue=T.transmissive;if(E.setupLights(),K.isArrayCamera){let ke=K.cameras;if(Ue.length>0)for(let $e=0,ot=ke.length;$e<ot;$e++){let xt=ke[$e];lp(Ge,Ue,C,xt)}He&&G.render(C);for(let $e=0,ot=ke.length;$e<ot;$e++){let xt=ke[$e];op(T,C,xt,xt.viewport)}}else Ue.length>0&&lp(Ge,Ue,C,K),He&&G.render(C),op(T,C,K)}O!==null&&D===0&&(Me.updateMultisampleRenderTarget(O),Me.updateRenderTargetMipmap(O)),te&&P.end(S),C.isScene===!0&&C.onAfterRender(S,C,K),Pe.resetDefaultState(),k=-1,F=null,b.pop(),b.length>0?(E=b[b.length-1],Me.setTextureUnits(E.state.textureUnits),ue===!0&&de.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,I!==null&&I.renderEnd()};function nu(C,K,he,te){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)he=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){let Ge=K.isArrayCamera?xe:re;if(!C.frustumCulled||C.intersectsFrustum(Ge)){te&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);let Ue=ge.update(C),ke=C.material;ke.visible&&T.push(C,Ue,ke,he,Le.z,null,K)}}else if(C.isMesh||C.isLine||C.isPoints){let Ge=K.isArrayCamera?xe:re;if(!C.frustumCulled||C.intersectsFrustum(Ge)){let Ue=ge.update(C),ke=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Le.copy(Ue.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(Se)),Array.isArray(ke)){let $e=Ue.groups;for(let ot=0,xt=$e.length;ot<xt;ot++){let We=$e[ot],_t=ke[We.materialIndex];_t&&_t.visible&&T.push(C,Ue,_t,he,Le.z,We,K)}}else ke.visible&&T.push(C,Ue,ke,he,Le.z,null,K)}}}let Fe=C.children;for(let Ge=0,Ue=Fe.length;Ge<Ue;Ge++)nu(Fe[Ge],K,he,te)}function op(C,K,he,te){let{opaque:se,transmissive:Fe,transparent:Ge}=C;E.setupLightsView(he),ue===!0&&de.setGlobalState(S.clippingPlanes,he),te&&j.viewport(B.copy(te)),se.length>0&&vl(se,K,he),Fe.length>0&&vl(Fe,K,he),Ge.length>0&&vl(Ge,K,he),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function lp(C,K,he,te){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[te.id]===void 0){let We=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[te.id]=new kt(1,1,{generateMipmaps:!0,type:We?Xt:Cn,minFilter:ui,samples:Math.max(4,at.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Fe=E.state.transmissionRenderTarget[te.id],Ge=te.viewport||B;Fe.setSize(Ge.z*S.transmissionResolutionScale,Ge.w*S.transmissionResolutionScale);let Ue=S.getRenderTarget(),ke=S.getActiveCubeFace(),$e=S.getActiveMipmapLevel();S.setRenderTarget(Fe),S.getClearColor(Z),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),He&&G.render(he);let ot=S.toneMapping;S.toneMapping=Ui;let xt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),E.setupLightsView(te),ue===!0&&de.setGlobalState(S.clippingPlanes,te),vl(C,he,te),Me.updateMultisampleRenderTarget(Fe),Me.updateRenderTargetMipmap(Fe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let _t=0,rn=K.length;_t<rn;_t++){let Ot=K[_t],{object:Nt,geometry:Tn,material:Xe,group:Nn}=Ot;if(Xe.side===Ht&&Nt.layers.test(te.layers)){let Ct=Xe.side;Xe.side=Sn,Xe.needsUpdate=!0,cp(Nt,he,te,Tn,Xe,Nn),Xe.side=Ct,Xe.needsUpdate=!0,We=!0}}We===!0&&(Me.updateMultisampleRenderTarget(Fe),Me.updateRenderTargetMipmap(Fe))}S.setRenderTarget(Ue,ke,$e),S.setClearColor(Z,V),xt!==void 0&&(te.viewport=xt),S.toneMapping=ot}function vl(C,K,he){let te=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Fe=C.length;se<Fe;se++){let Ge=C[se],{object:Ue,geometry:ke,group:$e}=Ge,ot=Ge.material;ot.allowOverride===!0&&te!==null&&(ot=te),Ue.layers.test(he.layers)&&cp(Ue,K,he,ke,ot,$e)}}function cp(C,K,he,te,se,Fe){I!==null&&se.isNodeMaterial&&I.setObject(C,se),C.onBeforeRender(S,K,he,te,se,Fe),C.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(S,K,he,te,C,Fe),se.transparent===!0&&se.side===Ht&&se.forceSinglePass===!1?(se.side=Sn,se.needsUpdate=!0,S.renderBufferDirect(he,K,te,se,C,Fe),se.side=Ni,se.needsUpdate=!0,S.renderBufferDirect(he,K,te,se,C,Fe),se.side=Ht):S.renderBufferDirect(he,K,te,se,C,Fe),C.onAfterRender(S,K,he,te,se,Fe)}function hp(C){let K=0;for(let he of C)he.texture!==null&&K++;return K}function Ia(C,K,he){K.isScene!==!0&&(K=ze);let te=le.get(C),se=E.state.lights,Fe=E.state.shadowsArray,Ge=se.state.version,Ue=ae.getParameters(C,se.state,Fe,K,he,E.state.lightProbeGridArray),ke=ae.getProgramCacheKey(Ue),$e=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?K.environment:null,te.fog=K.fog;let ot=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=N.get(C.envMap||te.environment,ot),te.envMapRotation=te.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",Tt),$e=new Map,te.programs=$e,te.programVariants=new Map);let xt=$e.get(ke);if(xt!==void 0){if(te.currentProgram===xt&&te.lightsStateVersion===Ge)return fp(C,Ue),xt}else Ue.uniforms=ae.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,he,Ue),C.onBeforeCompile(Ue,S),xt=ae.acquireProgram(Ue,ke),$e.set(ke,xt),te.uniforms=Ue.uniforms;let We=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=de.uniform),fp(C,Ue),te.needsLights=Wg(C),te.lightsStateVersion=Ge,te.needsLights&&(We.ambientLightColor.value=se.state.ambient,We.lightProbe.value=se.state.probe,We.sunLights.value=se.state.sun,We.sunLightShadows.value=se.state.sunShadow,We.directionalLights.value=se.state.directional,We.directionalLightShadows.value=se.state.directionalShadow,We.spotLights.value=se.state.spot,We.spotLightShadows.value=se.state.spotShadow,We.rectAreaLights.value=se.state.rectArea,We.ltc_1.value=se.state.rectAreaLTC1,We.ltc_2.value=se.state.rectAreaLTC2,We.pointLights.value=se.state.point,We.pointLightShadows.value=se.state.pointShadow,We.hemisphereLights.value=se.state.hemi,We.sunShadowMatrix.value=se.state.sunShadowMatrix,We.sunShadowCascade.value=se.state.sunShadowCascade,We.directionalShadowMatrix.value=se.state.directionalShadowMatrix,We.spotLightMatrix.value=se.state.spotLightMatrix,We.spotLightMap.value=se.state.spotLightMap,We.pointShadowMatrix.value=se.state.pointShadowMatrix),te.numLightProbeGrids=hp(E.state.lightProbeGridArray),te.currentProgram=xt,te.uniformsList=null,xt}function Hg(C,K,he,te,se){let Fe=le.get(C),Ge=Fe.currentProgram.id+","+te+","+se,Ue=Fe.programVariants.get(Ge);return Ue===void 0?(Ue=Ia(C,K,he),Fe.programVariants.set(Ge,Ue)):(Fe.currentProgram=Ue,Fe.uniformsList=null,Fe.outputColorSpace=te,Fe.toneMapping=se),Ue}function up(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=ma.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function fp(C,K){let he=le.get(C);he.outputColorSpace=K.outputColorSpace,he.batching=K.batching,he.batchingColor=K.batchingColor,he.instancing=K.instancing,he.instancingColor=K.instancingColor,he.instancingMorph=K.instancingMorph,he.skinning=K.skinning,he.morphTargets=K.morphTargets,he.morphNormals=K.morphNormals,he.morphColors=K.morphColors,he.morphTargetsCount=K.morphTargetsCount,he.numClippingPlanes=K.numClippingPlanes,he.numIntersection=K.numClipIntersection,he.vertexAlphas=K.vertexAlphas,he.vertexTangents=K.vertexTangents,he.toneMapping=K.toneMapping}function Gg(C,K,he,te,se){K.isScene!==!0&&(K=ze),Me.resetTextureUnits();let Fe=K.fog,Ge=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?K.environment:null,Ue=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ht.workingColorSpace,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,$e=N.get(te.envMap||Ge,ke),ot=te.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,xt=!!he.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!he.morphAttributes.position,_t=!!he.morphAttributes.normal,rn=!!he.morphAttributes.color,Ot=Ui;te.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ot=S.toneMapping);let Nt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Tn=Nt!==void 0?Nt.length:0,Xe=le.get(te),Nn=E.state.lights;if(ue===!0&&(ve===!0||C!==F)){let $t=C===F&&te.id===k;de.setState(te,C,$t)}let Ct=!1,qs=!1;te.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==Nn.state.version||se.isBatchedMesh&&Xe.batching===!1||!se.isBatchedMesh&&Xe.batching===!0||se.isBatchedMesh&&Xe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Xe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Xe.instancing===!1||!se.isInstancedMesh&&Xe.instancing===!0||se.isSkinnedMesh&&Xe.skinning===!1||!se.isSkinnedMesh&&Xe.skinning===!0||se.isInstancedMesh&&Xe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Xe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Xe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Xe.instancingMorph===!1&&se.morphTexture!==null||Xe.envMap!==$e||te.fog===!0&&Xe.fog!==Fe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==de.numPlanes||Xe.numIntersection!==de.numIntersection)||Xe.vertexAlphas!==ot||Xe.vertexTangents!==xt||Xe.morphTargets!==We||Xe.morphNormals!==_t||Xe.morphColors!==rn||Xe.morphTargetsCount!==Tn||Xe.numLightProbeGrids!==hp(E.state.lightProbeGridArray)?Ct=!0:(Xe.outputColorSpace!==Ue||Xe.toneMapping!==Ot)&&(qs=!0):(Ct=!0,Xe.__version=te.version);let En=Xe.currentProgram;(Ct===!0||qs===!0)&&(En=qs===!0?Hg(te,K,se,Ue,Ot):Ia(te,K,se),I&&te.isNodeMaterial&&I.onUpdateProgram(te,En,Xe));let yl=!1,Ss=!1,Ys=!1,Et=En.getUniforms(),vn=Xe.uniforms;if(j.useProgram(En.program)&&(yl=!0,Ss=!0,Ys=!0),te.id!==k&&(k=te.id,Ss=!0),yl||F!==C){j.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Et.setValue(X,"projectionMatrix",C.projectionMatrix),Et.setValue(X,"viewMatrix",C.matrixWorldInverse);let pn=Et.map.cameraPosition;pn!==void 0&&pn.setValue(X,Ae.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&Et.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Et.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,Ss=!0,Ys=!0)}if(Xe.needsLights&&(Nn.state.sunShadowMap.length>0&&Et.setValue(X,"sunShadowMap",Nn.state.sunShadowMap,Me),Nn.state.directionalShadowMap.length>0&&Et.setValue(X,"directionalShadowMap",Nn.state.directionalShadowMap,Me),Nn.state.spotShadowMap.length>0&&Et.setValue(X,"spotShadowMap",Nn.state.spotShadowMap,Me),Nn.state.pointShadowMap.length>0&&Et.setValue(X,"pointShadowMap",Nn.state.pointShadowMap,Me)),se.isSkinnedMesh){Et.setOptional(X,se,"bindMatrix"),Et.setOptional(X,se,"bindMatrixInverse");let $t=se.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Et.setValue(X,"boneTexture",$t.boneTexture,Me))}se.isBatchedMesh&&(Et.setOptional(X,se,"batchingTexture"),Et.setValue(X,"batchingTexture",se._matricesTexture,Me),Et.setOptional(X,se,"batchingIdTexture"),Et.setValue(X,"batchingIdTexture",se._indirectTexture,Me),Et.setOptional(X,se,"batchingColorTexture"),se._colorsTexture!==null&&Et.setValue(X,"batchingColorTexture",se._colorsTexture,Me));let gi=he.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&pe.update(se,he,En),(Ss||Xe.receiveShadow!==se.receiveShadow)&&(Xe.receiveShadow=se.receiveShadow,Et.setValue(X,"receiveShadow",se.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&K.environment!==null&&(vn.envMapIntensity.value=K.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=rb()),Ss){if(Et.setValue(X,"toneMappingExposure",S.toneMappingExposure),Xe.needsLights&&Vg(vn,Ys),Fe&&te.fog===!0&&_e.refreshFogUniforms(vn,Fe),_e.refreshMaterialUniforms(vn,te,J,q,E.state.transmissionRenderTarget[C.id]),Xe.needsLights&&Xe.numLightProbeGrids>0){let $t=y,pn=0;for(let Xi of E.state.lightProbeGridArray)Xi.texture!==null&&($t.textures[pn]=Xi.texture,$t.min[pn]=Xi.boundingBox.min,$t.max[pn]=Xi.boundingBox.max,$t.resolution[pn]=Xi.resolution,pn++);for(let Xi in $t)$t[Xi].length=pn;vn.probesSH.value=$t.textures,vn.probesMin.value=$t.min,vn.probesMax.value=$t.max,vn.probesResolution.value=$t.resolution}ma.upload(X,up(Xe),vn,Me)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ma.upload(X,up(Xe),vn,Me),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Et.setValue(X,"center",se.center),Et.setValue(X,"modelViewMatrix",se.modelViewMatrix),Et.setValue(X,"normalMatrix",se.normalMatrix),Et.setValue(X,"modelMatrix",se.matrixWorld),te.uniformsGroups!==void 0){let $t=te.uniformsGroups;for(let pn=0,Xi=$t.length;pn<Xi;pn++){let pp=$t[pn];Ve.update(pp,En),Ve.bind(pp,En)}}return En}function Vg(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.sunLights.needsUpdate=K,C.sunLightShadows.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Wg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,K,he){let te=le.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),le.get(C.texture).__webglTexture=K,le.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:he,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){let he=le.get(C);he.__webglFramebuffer=K,he.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,he=0){O=C,U=K,D=he;let te=null,se=!1,Fe=!1;if(C){let Ue=le.get(C);if(Ue.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(X.FRAMEBUFFER,Ue.__webglFramebuffer),B.copy(C.viewport),$.copy(C.scissor),ee=C.scissorTest,j.viewport(B),j.scissor($),j.setScissorTest(ee),k=-1;return}else if(Ue.__webglFramebuffer===void 0)Me.setupRenderTarget(C);else if(Ue.__hasExternalTextures)Me.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ot=C.depthTexture;if(Ue.__boundDepthTexture!==ot){if(ot!==null&&le.has(ot)&&(C.width!==ot.image.width||C.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(C)}}let ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Fe=!0);let $e=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[K])?te=$e[K][he]:te=$e[K],se=!0):C.samples>0&&Me.useMultisampledRTT(C)===!1?te=le.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?te=$e[he]:te=$e,B.copy(C.viewport),$.copy(C.scissor),ee=C.scissorTest}else B.copy(oe).multiplyScalar(J).floor(),$.copy(ie).multiplyScalar(J).floor(),ee=Ee;if(he!==0&&(te=z),j.bindFramebuffer(X.FRAMEBUFFER,te)&&j.drawBuffers(C,te),j.viewport(B),j.scissor($),j.setScissorTest(ee),se){let Ue=le.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ue.__webglTexture,he)}else if(Fe){let Ue=K;for(let ke=0;ke<C.textures.length;ke++){let $e=le.get(C.textures[ke]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ke,$e.__webglTexture,he,Ue)}}else if(C!==null&&he!==0){let Ue=le.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ue.__webglTexture,he)}k=-1};function dp(C){let K=le.get(C);return(K.__readFormat!==C.format||K.__readType!==C.type)&&(K.__readFormat=C.format,K.__readType=C.type,K.__formatReadable=at.textureFormatReadable(C.format),K.__typeReadable=at.textureTypeReadable(C.type)),K}this.readRenderTargetPixels=function(C,K,he,te,se,Fe,Ge,Ue=0){if(!(C&&C.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge],Array.isArray(ke)&&(ke=ke[0])),ke){j.bindFramebuffer(X.FRAMEBUFFER,ke);try{let $e=C.textures[Ue],ot=$e.format,xt=$e.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ue);let We=dp($e);if(We.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-te&&he>=0&&he<=C.height-se&&X.readPixels(K,he,te,se,Re.convert(ot),Re.convert(xt),Fe)}finally{let $e=O!==null?le.get(O).__webglFramebuffer:null;j.bindFramebuffer(X.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,K,he,te,se,Fe,Ge,Ue=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge],Array.isArray(ke)&&(ke=ke[0])),ke)if(K>=0&&K<=C.width-te&&he>=0&&he<=C.height-se){j.bindFramebuffer(X.FRAMEBUFFER,ke);let $e=C.textures[Ue],ot=$e.format,xt=$e.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ue);let We=dp($e);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,_t),X.bufferData(X.PIXEL_PACK_BUFFER,Fe.byteLength,X.STREAM_READ),X.readPixels(K,he,te,se,Re.convert(ot),Re.convert(xt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let rn=O!==null?le.get(O).__webglFramebuffer:null;j.bindFramebuffer(X.FRAMEBUFFER,rn);let Ot=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Gm(X,Ot,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,_t),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Fe),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(_t),X.deleteSync(Ot),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,he=0){let te=Math.pow(2,-he),se=Math.floor(C.image.width*te),Fe=Math.floor(C.image.height*te),Ge=K!==null?K.x:0,Ue=K!==null?K.y:0;Me.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,he,0,0,Ge,Ue,se,Fe),j.unbindTexture()},this.copyTextureToTexture=function(C,K,he=null,te=null,se=0,Fe=0){let Ge,Ue,ke,$e,ot,xt,We,_t,rn,Ot=C.isCompressedTexture?C.mipmaps[Fe]:C.image;if(he!==null)Ge=he.max.x-he.min.x,Ue=he.max.y-he.min.y,ke=he.isBox3?he.max.z-he.min.z:1,$e=he.min.x,ot=he.min.y,xt=he.isBox3?he.min.z:0;else{let Et=Math.pow(2,-se);Ge=Math.floor(Ot.width*Et),Ue=Math.floor(Ot.height*Et),C.isDataArrayTexture?ke=Ot.depth:C.isData3DTexture?ke=Math.floor(Ot.depth*Et):ke=1,$e=0,ot=0,xt=0}te!==null?(We=te.x,_t=te.y,rn=te.z):(We=0,_t=0,rn=0);let Nt=Re.convert(K.format),Tn=Re.convert(K.type),Xe;K.isData3DTexture?(Me.setTexture3D(K,0),Xe=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Me.setTexture2DArray(K,0),Xe=X.TEXTURE_2D_ARRAY):(Me.setTexture2D(K,0),Xe=X.TEXTURE_2D),j.activeTexture(X.TEXTURE0),j.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);let Nn=j.getParameter(X.UNPACK_ROW_LENGTH),Ct=j.getParameter(X.UNPACK_IMAGE_HEIGHT),qs=j.getParameter(X.UNPACK_SKIP_PIXELS),En=j.getParameter(X.UNPACK_SKIP_ROWS),yl=j.getParameter(X.UNPACK_SKIP_IMAGES);j.pixelStorei(X.UNPACK_ROW_LENGTH,Ot.width),j.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ot.height),j.pixelStorei(X.UNPACK_SKIP_PIXELS,$e),j.pixelStorei(X.UNPACK_SKIP_ROWS,ot),j.pixelStorei(X.UNPACK_SKIP_IMAGES,xt);let Ss=C.isDataArrayTexture||C.isData3DTexture,Ys=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){let Et=le.get(C),vn=le.get(K),gi=le.get(Et.__renderTarget),$t=le.get(vn.__renderTarget);j.bindFramebuffer(X.READ_FRAMEBUFFER,gi.__webglFramebuffer),j.bindFramebuffer(X.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let pn=0;pn<ke;pn++)Ss&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(C).__webglTexture,se,xt+pn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(K).__webglTexture,Fe,rn+pn)),X.blitFramebuffer($e,ot,$e+Ge,ot+Ue,We,_t,We+Ge,_t+Ue,X.DEPTH_BUFFER_BIT,X.NEAREST);j.bindFramebuffer(X.READ_FRAMEBUFFER,null),j.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(se!==0||C.isRenderTargetTexture||le.has(C)){let Et=le.get(C),vn=le.get(K);j.bindFramebuffer(X.READ_FRAMEBUFFER,L),j.bindFramebuffer(X.DRAW_FRAMEBUFFER,w);for(let gi=0;gi<ke;gi++)Ss?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Et.__webglTexture,se,xt+gi):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Et.__webglTexture,se),Ys?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,vn.__webglTexture,Fe,rn+gi):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vn.__webglTexture,Fe),se!==0?X.blitFramebuffer($e,ot,$e+Ge,ot+Ue,We,_t,We+Ge,_t+Ue,X.COLOR_BUFFER_BIT,X.NEAREST):Ys?X.copyTexSubImage3D(Xe,Fe,We,_t,rn+gi,$e,ot,Ge,Ue):X.copyTexSubImage2D(Xe,Fe,We,_t,$e,ot,Ge,Ue);j.bindFramebuffer(X.READ_FRAMEBUFFER,null),j.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ys?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Xe,Fe,We,_t,rn,Ge,Ue,ke,Nt,Tn,Ot.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(Xe,Fe,We,_t,rn,Ge,Ue,ke,Nt,Ot.data):X.texSubImage3D(Xe,Fe,We,_t,rn,Ge,Ue,ke,Nt,Tn,Ot):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Fe,We,_t,Ge,Ue,Nt,Tn,Ot.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Fe,We,_t,Ot.width,Ot.height,Nt,Ot.data):X.texSubImage2D(X.TEXTURE_2D,Fe,We,_t,Ge,Ue,Nt,Tn,Ot);j.pixelStorei(X.UNPACK_ROW_LENGTH,Nn),j.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ct),j.pixelStorei(X.UNPACK_SKIP_PIXELS,qs),j.pixelStorei(X.UNPACK_SKIP_ROWS,En),j.pixelStorei(X.UNPACK_SKIP_IMAGES,yl),Fe===0&&K.generateMipmaps===!0&&K.mipmapsAutoUpdate===!0&&X.generateMipmap(Xe),j.unbindTexture()},this.initRenderTarget=function(C){le.get(C).__webglFramebuffer===void 0&&Me.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Me.setTextureCube(C,0):C.isData3DTexture?Me.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Me.setTexture2DArray(C,0):Me.setTexture2D(C,0),j.unbindTexture()},this.resetState=function(){U=0,D=0,O=null,j.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function Of(i,e){if(e===of)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===da||e===Xo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===da)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function P0(i){let e=new Map,t=new Map,n=i.clone();return I0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function I0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)I0(i.children[n],e.children[n],t)}var Zo=class extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new bh(t,pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bh(t,pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new sd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=us.extractUrlBase(e);a=us.resolveURL(c,this.path)}else a=us.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ra(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===F0){try{a[pt.KHR_BINARY_GLTF]=new rd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new fd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case pt.KHR_MATERIALS_UNLIT:a[u]=new Gf;break;case pt.KHR_DRACO_MESH_COMPRESSION:a[u]=new ad(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:a[u]=new od;break;case pt.KHR_MESH_QUANTIZATION:a[u]=new ld;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ab(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Yt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hf=class{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Fn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Os(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ur(h),c.distance=u;break;case"spot":c=new Ro(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Gf=class{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,n){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Fn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(s)}},Vf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Wf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(r,r)}return Promise.all(s)}},Xf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},$f=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},qf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Yf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Lt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Kf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},jf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],Fn),Promise.all(s)}},Zf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Jf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],Fn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Lt)),Promise.all(s)}},Qf=class{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},nd=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},id=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},bh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},sd=class{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==fi.TRIANGLES&&c.mode!==fi.TRIANGLE_STRIP&&c.mode!==fi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let _=new Ke,p=new H,m=new Qn,M=new H(1,1,1),v=new ns(g.geometry,g.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),v.setMatrixAt(T,_.compose(p,m,M));let y=null;for(let T in l)if(T==="_COLOR_0"){let E=l[T];v.instanceColor=new ts(E.array,E.itemSize,E.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(y===null){let x=v.geometry;y=new Pt,y.name=x.name;for(let b in x.attributes)y.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)y.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)y.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),v.geometry=y}let E=l[T];y.setAttribute(T,new ts(E.array,E.itemSize,E.normalized))}Ft.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},F0="glTF",jo=12,L0={JSON:1313821514,BIN:5130562},rd=class{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,jo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==F0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-jo,r=new DataView(e,jo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===L0.JSON){let c=new Uint8Array(e,jo+a,o);this.content=n.decode(c)}else if(l===L0.BIN){let c=jo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ad=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=hd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=hd[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=_a[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}u(d)},o,c,Fn,f)})})}},od=class{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ld=class{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}},Th=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,M=1-p,v=m-f+u;for(let y=0;y!==o;y++){let T=a[_+y+o],E=a[_+y+l]*h,x=a[g+y+o],b=a[g+y]*h;r[y]=M*T+v*E+p*x+m*b}return r}},ob=new Qn,cd=class extends Th{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ob.fromArray(r).normalize().toArray(r),r}},fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_a={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},D0={9728:Bt,9729:ln,9984:Dc,9985:ua,9986:gr,9987:ui},N0={33071:ai,33648:qr,10497:Rn},Bf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lb={CUBICSPLINE:void 0,LINEAR:nr,STEP:tr},kf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),i.DefaultMaterial}function _r(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function ub(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fb(i){let e,t=i.extensions&&i.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zf(t.attributes):e=i.indices+":"+zf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+zf(i.targets[n]);return e}function zf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ud(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function db(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var pb=new Ke,fd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ab,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?(this.textureLoader=new Eo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Co(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return _r(r,o,s),ki(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(us.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Bf[s.type],o=_a[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Zt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Bf[s.type],c=_a[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,p;if(d&&d!==u){let m=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(M);v||(_=new c(o,m*d,s.count*d/h),v=new rr(_,d/h),t.cache.add(M,v)),p=new Cs(v,l,f%d/h,g)}else o===null?_=new c(s.count*l):_=new c(o,f,s.count*l),p=new Zt(_,l,g);if(s.sparse!==void 0){let m=Bf.SCALAR,M=_a[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new M(a[1],v,s.sparse.count*m),E=new c(a[2],y,s.sparse.count*l);o!==null&&(p=new Zt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,b=T.length;x<b;x++){let P=T[x];if(p.setX(P,E[x*l]),l>=2&&p.setY(P,E[x*l+1]),l>=3&&p.setZ(P,E[x*l+2]),l>=4&&p.setW(P,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=D0[f.magFilter]||ln,h.minFilter=D0[f.minFilter]||ui,h.wrapS=N0[f.wrapS]||Rn,h.wrapT=N0[f.wrapT]||Rn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==ln,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(d,g){t.parse(f,d,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(d,g){let _=d;t.isImageBitmapLoader===!0&&(_=function(p){let m=new tn(p);m.needsUpdate=!0,d(m)}),t.load(us.resolveURL(f,r.path),_,void 0,g)})})}let u=h.then(function(f){return c===!0&&o.revokeObjectURL(l),ki(f,a),f.userData.mimeType=a.mimeType||db(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new is,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ls,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Jt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){let u=s[pt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Fn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Lt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ht);let h=r.alphaMode||kf.OPAQUE;if(h===kf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===kf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==zt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==zt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==zt){let u=r.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],Fn)}return r.emissiveTexture!==void 0&&a!==zt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ki(u,r),t.associations.set(u,{materials:e}),r.extensions&&_r(s,u,r),u})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return U0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=fb(c),u=s[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=U0(new Pt,c,t),c.mode===fi.TRIANGLE_STRIP?f=f.then(d=>Of(d,Xo)):c.mode===fi.TRIANGLE_FAN&&(f=f.then(d=>Of(d,da))),s[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?cb(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let _=h[d],p=a[d],m,M=c[d];if(p.mode===fi.TRIANGLES||p.mode===fi.TRIANGLE_STRIP||p.mode===fi.TRIANGLE_FAN||p.mode===void 0){let v=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");v&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=v&&y?new no(_,M):new Je(_,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===fi.LINES)m=new or(_,M);else if(p.mode===fi.LINE_STRIP)m=new ar(_,M);else if(p.mode===fi.LINE_LOOP)m=new so(_,M);else if(p.mode===fi.POINTS)m=new Ds(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&ub(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ki(m,r),p.extensions&&_r(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&_r(s,u[0],r),u[0];let f=new nt;r.extensions&&_r(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(Fi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new hs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new io(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],_=d.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let v=0,y=f.length;v<y;v++){let T=f[v],E=d[v],x=g[v],b=_[v],P=p[v];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let S=n._createAnimationTracks(T,E,x,b,P);if(S)for(let R=0;R<S.length;R++)m.push(S[R])}let M=new To(r,void 0,m);return ki(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,pb)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,g=u[0];h.pivot=new H().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ta:c.length>1?h=new nt:c.length===1?h=c[0]:h=new Ft,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ki(h,r),r.extensions&&_r(n,h,r),r.matrix!==void 0){let u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new nt;n.name&&(r.name=s.createUniqueName(n.name)),ki(r,n),n.extensions&&_r(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(P0(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Mn||f instanceof tn)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Hs[r.path]===Hs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Hs[r.path]){case Hs.weights:h=os;break;case Hs.rotation:h=ls;break;case Hs.translation:case Hs.scale:h=Fs;break;default:n.itemSize===1?h=os:h=Fs;break}let u=s.interpolation!==void 0?lb[s.interpolation]:nr,f=this._getArrayFromAccessor(n);for(let d=0,g=l.length;d<g;d++){let _=new h(l[d]+"."+Hs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ud(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ls?cd:Th;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function mb(i,e,t){let n=e.attributes,s=new yn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),o.normalized){let h=ud(_a[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new H,l=new H;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=ud(_a[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Hn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function U0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=hd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ht.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),ki(i,e),mb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?hb(i,e.targets,t):i})}var yr=["guestA","guestB","guestC"],B0={guestA:"\uB370\uB2D8 \uBCC4\uBB34\uB2AC",guestB:"\uAE08\uBC1C \uB54B\uC740 \uBA38\uB9AC",guestC:"\uD770 \uC6D0\uD53C\uC2A4"},pd=new Set;function k0(){let i=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]),e=new li(i,3,1);return e.minFilter=e.magFilter=Bt,e.needsUpdate=!0,e}var vr="#fde9e7",gb="#f5c6c9",O0={guestA:{hair:"#4b3634",hairStyle:"long",top:"#bfe2f1",sleeve:null,bottom:"pants",bottomColor:"#8fa1df",shoes:"#bfe2f1",F:[12,20,202,350],B:[20,393,195,722],head:[.12,0,.88,.385],topCrop:[.22,.43,.78,.67],legL:[.12,.63,.5,.94],legR:[.5,.63,.88,.94]},guestB:{hair:"#f2df8c",hairStyle:"braids",top:"#ffffff",sleeve:"#ffcaca",bottom:"shorts",bottomColor:"#cdebc9",warmers:"#ffffff",shoes:"#ffcaca",F:[234,19,413,352],B:[239,393,407,722],head:[.12,0,.88,.385],topCrop:[.2,.43,.8,.66],lowCrop:[.15,.62,.85,.76]},guestC:{hair:"#a68a6b",hairStyle:"wavy",top:"#fffdfb",sleeve:"#fffdfb",longSleeve:!0,bottom:"dress",bottomColor:"#fffdfb",boots:"#8c6d58",F:[444,22,634,348],B:[450,395,628,720],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.78]},shop:{hair:"#3f302f",hairStyle:"wavy",top:"#bfe2f1",sleeve:"#bfe2f1",bottom:"dress",bottomColor:"#fbf09b",shoes:"#bfe2f1",F:[666,23,844,347],B:[671,395,839,719],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]},cafe:{hair:"#3f302f",hairStyle:"ponytail",top:"#fbdede",sleeve:"#fbdede",bottom:"dress",bottomColor:"#d4efbf",shoes:"#fbdede",F:[868,3,1075,368],B:[881,376,1062,738],head:[.1,.02,.86,.405],headB:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]}},Jo=new Image;Jo.src="looks.png";var dd=new Map;function xb(i,e,t,{clean:n=!1,skinBelow:s=!1}={}){let r=i.join(",")+e.join(",")+t+n+s;if(dd.has(r))return dd.get(r);let[a,o,l,c]=i,h=l-a,u=c-o,f=a+e[0]*h,d=o+e[1]*u,g=(e[2]-e[0])*h,_=(e[3]-e[1])*u,p=n?Math.max(48,Math.round(g)):256,m=Math.round(p*_/g),M=document.createElement("canvas");M.width=p,M.height=m;let v=M.getContext("2d",{willReadFrequently:n});v.fillStyle=t,v.fillRect(0,0,p,m),s&&(v.fillStyle=vr,v.fillRect(0,m*.55,p,m));let y=new ci(M);y.colorSpace=Lt,y.anisotropy=4;let T=()=>{if(v.drawImage(Jo,f,d,g,_,0,0,p,m),n){let E=v.getImageData(0,0,p,m),x=E.data,b=new Uint8ClampedArray(x),P=3,S=R=>x[R]*.3+x[R+1]*.59+x[R+2]*.11;for(let R=0;R<m;R++)for(let I=0;I<p;I++){let z=(R*p+I)*4,L=S(z),w=z,U=L;for(let D=-P;D<=P;D++){let O=R+D;if(!(O<0||O>=m))for(let k=-P;k<=P;k++){let F=I+k;if(F<0||F>=p)continue;let B=(O*p+F)*4,$=S(B);$>U&&(U=$,w=B)}}L<U*.84&&(b[z]=x[w],b[z+1]=x[w+1],b[z+2]=x[w+2])}E.data.set(b),v.putImageData(E,0,0)}y.needsUpdate=!0};return Jo.complete&&Jo.naturalWidth?T():Jo.addEventListener("load",T,{once:!0}),dd.set(r,y),y}function md(i,e={}){let t=new nt,n=[],s=[],r={root:t,arms:n,head:null,animate:p,setLook:u,look:null},a=null,o=document.createElement("canvas");o.width=o.height=64;let l=o.getContext("2d"),c=l.createRadialGradient(32,32,4,32,32,30);c.addColorStop(0,"rgba(90,60,120,0.32)"),c.addColorStop(1,"rgba(90,60,120,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new Je(new ss(.62,.62),new zt({map:new ci(o),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.004,t.add(h);function u(m){a&&t.remove(a);let M=O0[m]||O0.guestA;r.look=m;let v=new Map,y=(U,D=1)=>{let O=U+D;return v.has(O)||v.set(O,new zt({color:new De(U).multiplyScalar(D)})),v.get(O)},T=(U,D,O,k)=>new zt({map:xb(M[U],D,O,k),side:Ht}),E={clean:!0},x=(U,D,O,k=0,F=0,B=0)=>{let $=new Je(D,O);return $.position.set(k,F,B),$.castShadow=!0,U.add($),$},b=(U,D=10,O=8)=>new nn(U,D,O),P=(U,D,O,k,F,B,$,ee=0,Z=8)=>(x(U,new lt(D,O,k,Z,1,!0,-Math.PI/2,Math.PI),F,0,$,ee),x(U,new lt(D,O,k,Z,1,!0,Math.PI/2,Math.PI),B,0,$,ee));a=new nt,t.add(a),n.length=0,s.length=0;for(let U of[-1,1]){let D=new nt;if(D.position.set(.07*U,.34,0),a.add(D),M.bottom==="pants"){let O=new nt;O.position.y=-.12,D.add(O),P(O,.075,.085,.28,T("F",U<0?M.legL:M.legR,M.bottomColor,E),T("B",U<0?M.legR:M.legL,M.bottomColor,E),0)}else x(D,new lt(.044,.04,.24,6),y(vr),0,-.12,0);M.warmers&&x(D,new lt(.058,.06,.11,7),y(M.warmers),0,-.205,0),M.boots?(x(D,new lt(.06,.058,.14,7),y(M.boots),0,-.2,0),x(D,b(.066,8,6),y(M.boots),0,-.275,.02).scale.set(1,.6,1.3)):x(D,b(.066,8,6),y(M.shoes),0,-.29,.022).scale.set(1,.62,1.35),s.push(D)}x(a,new lt(.06,.06,.12,10),y(vr),0,.68,0),M.bottom==="dress"?P(a,.12,.25,.4,T("F",M.lowCrop,M.bottomColor,E),T("B",M.lowCrop,M.bottomColor,E),.44):(P(a,.115,.135,.28,T("F",M.topCrop,M.top,E),T("B",M.topCrop,M.top,E),.5),M.bottom==="pants"&&P(a,.135,.15,.06,y(M.bottomColor),y(M.bottomColor,.94),.37),M.bottom==="shorts"&&P(a,.14,.17,.13,T("F",M.lowCrop,M.bottomColor,E),T("B",M.lowCrop,M.bottomColor,E),.33));for(let U of[-1,1]){let D=new nt;D.position.set(.14*U,.61,0),a.add(D),M.sleeve&&x(D,b(M.longSleeve?.06:.07,8,6),y(M.sleeve),.01*U,-.03,0).scale.set(1,1.1,1),x(D,new lt(.036,.04,.2,6),y(M.longSleeve?M.sleeve:vr),.012*U,-.12,0),M.longSleeve&&x(D,b(.05,8,6),y(M.sleeve),.014*U,-.19,0).scale.set(1,.7,1),x(D,b(.055,8,6),y(vr),.016*U,-.245,.006),D.rotation.z=.32*U,n.push(D)}let S=new nt;S.position.set(0,.89,0),a.add(S);let R=.24,I=1.12,z=.97;x(S,b(R*1.04,14,10),y(vr)).scale.set(I,z,1),x(S,new nn(R*1.06,16,10,0,Math.PI,0,Math.PI*.69),T("F",M.head,M.hair,{skinBelow:!0})).scale.set(I,z,1),x(S,new nn(R*1.055,16,10,Math.PI,Math.PI,0,Math.PI*.72),T("B",M.headB||M.head,M.hair)).scale.set(I,z,1);for(let U of[-1,1])x(S,b(.08,8,6),y(vr),.3*U,-.03,.02).scale.set(.55,1,.75),x(S,b(.048,8,6),y(gb),.32*U,-.03,.035).scale.set(.35,.8,.6);f(S,M,x,y,b),r.head=S,t.traverse(U=>{U.isMesh&&(U.frustumCulled=!1)})}function f(m,M,v,y,T){if(M.hairStyle!=="braids")return;let E=y(M.hair,.97);for(let x of[-1,1])for(let b=0;b<5;b++)v(m,T(.045-b*.003,7,5),E,(.2-b*.006)*x,-.15-b*.065,.09+b*.012).scale.set(1,.85,1)}let d=0,g=0,_=0;function p(m,M,v,y=!1,T=!1){let E=r.head;if(_+=((y?1:0)-_)*Math.min(1,m*10),_>.02){s[0].rotation.x=s[1].rotation.x=-1.45*_,n[0].rotation.x=n[1].rotation.x=-.5*_,a.position.y=.11*_,a.rotation.x=0,E.rotation.z=0,g=0;return}let x=Math.min(1,M/2);g+=(x-g)*Math.min(1,m*10),d+=m*(5+M*3.2);let b=Math.sin(d)*.75*g;s[0].rotation.x=b,s[1].rotation.x=-b,n[0].rotation.x=-b*.8,n[1].rotation.x=b*.8,n[0].rotation.z=-.32,n[1].rotation.z=.32,T&&(n[0].rotation.x=n[1].rotation.x=-1.2),a.position.y=Math.abs(Math.sin(d))*.035*g+Math.sin(v*2.2)*.006*(1-g),E.rotation.z=Math.sin(d*.5)*.05*g,a.rotation.x=.07*g}return u(e.look||"guestA"),r}var Mt=null,va=null,tl=null,Wn=null,Qo=null,Sr="all";try{Sr=localStorage.getItem("sh-sound")||"all"}catch{}function Bn(){if(!Mt){try{Mt=new(window.AudioContext||window.webkitAudioContext)}catch{return null}va=Mt.createGain(),va.gain.value=.9;let i=Mt.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=3,va.connect(i).connect(Mt.destination),Qo=Mt.createConvolver();let e=Math.floor(Mt.sampleRate*1.8),t=Mt.createBuffer(2,e,Mt.sampleRate);for(let r=0;r<2;r++){let a=t.getChannelData(r);for(let o=0;o<e;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/e,3.2)}Qo.buffer=t;let n=Mt.createGain();n.gain.value=.22,Qo.connect(n).connect(va),tl=Mt.createGain(),Wn=Mt.createGain(),tl.connect(va),tl.connect(Qo),Wn.connect(va);let s=Mt.createGain();s.gain.value=.35,Wn.connect(s).connect(Qo),yd()}return Mt.state==="suspended"&&Mt.resume(),Mt}function yd(){if(!Mt)return;let i=Mt.currentTime;tl.gain.setTargetAtTime(Sr==="all"?.5*V0:0,i,.4),Wn.gain.setTargetAtTime(Sr==="off"?0:1,i,.05)}var Mr=()=>Sr!=="off";function vt(i,e=.12,t="triangle",n=.12,s=0,r){let a=Bn();if(!a||!r&&!Mr())return;let o=a.currentTime+s,l=a.createOscillator(),c=a.createGain();l.type=t,l.frequency.setValueAtTime(i,o),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c).connect(r||Wn),l.start(o),l.stop(o+e+.02)}var Eh=null;function Ti(i=.05,e=.08,t=0,n=6e3,s,r="highpass",a=.7){let o=Bn();if(!o||!s&&!Mr())return;if(!Eh){Eh=o.createBuffer(1,o.sampleRate,o.sampleRate);let f=Eh.getChannelData(0);for(let d=0;d<f.length;d++)f[d]=Math.random()*2-1}let l=o.currentTime+t,c=o.createBufferSource(),h=o.createBiquadFilter(),u=o.createGain();h.type=r,h.frequency.value=n,h.Q.value=a,u.gain.setValueAtTime(e,l),u.gain.exponentialRampToValueAtTime(1e-4,l+i),c.buffer=Eh,c.connect(h).connect(u).connect(s||Wn),c.start(l,Math.random()*.5),c.stop(l+i+.02)}function ps(i,e,t,n,s){let r=Mt;for(let[a,o]of[[1,1],[2,.35],[3.01,.18],[4.2,.07]]){let l=r.createOscillator(),c=r.createGain();l.type="sine",l.frequency.value=i*a,c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(n*o,e+.006),c.gain.exponentialRampToValueAtTime(1e-4,e+t/a),l.connect(c).connect(s),l.start(e),l.stop(e+t+.05)}}var Qt=i=>440*Math.pow(2,(i-69)/12),en={click:()=>{vt(1250,.045,"sine",.07),vt(1900,.03,"sine",.03,.012)},open:()=>{vt(620,.09,"sine",.08),vt(930,.12,"sine",.07,.05)},toast:()=>{!Bn()||!Mr()||(ps(Qt(88),Mt.currentTime,.6,.05,Wn),ps(Qt(93),Mt.currentTime+.07,.7,.04,Wn))},step:i=>{Ti(.07,.11,0,i?520:440,null,"lowpass",1.2),vt(i?92:80,.06,"sine",.09)},door:()=>{if(!Bn()||!Mr())return;let i=Mt.currentTime;[88,91,88,91,95].forEach((e,t)=>ps(Qt(e),i+t*.085,1.1,.07-t*.008,Wn))},coinUp:()=>{if(!Bn()||!Mr())return;let i=Mt.currentTime;ps(Qt(88),i,.5,.08,Wn),ps(Qt(95),i+.08,.8,.09,Wn)},coinDrop:()=>{vt(Qt(84),.08,"triangle",.07),vt(Qt(79),.12,"triangle",.06,.06)},kaching:()=>{if(Ti(.09,.12,0,3200,null,"bandpass",2),!Bn()||!Mr())return;let i=Mt.currentTime;ps(Qt(91),i+.05,.6,.08,Wn),ps(Qt(96),i+.13,1,.1,Wn)},denied:()=>{vt(330,.12,"square",.04),vt(247,.2,"square",.04,.11)},shutter:()=>{Ti(.035,.25,0,2500),Ti(.05,.2,.07,1800),vt(1800,.02,"square",.03,.07)},sticker:()=>{vt(500,.06,"sine",.1),vt(800,.08,"sine",.09,.04),Ti(.04,.05,.02,4e3)},orderBell:()=>{!Bn()||!Mr()||ps(Qt(93),Mt.currentTime,1.6,.12,Wn)},serve:()=>{Ti(.06,.07,0,2600,null,"bandpass",3),vt(Qt(81),.15,"triangle",.07,.05),vt(Qt(85),.2,"triangle",.07,.12)},munch:()=>{for(let i=0;i<3;i++)Ti(.05,.09,i*.09,900+Math.random()*500,null,"bandpass",1.5)},sit:()=>{Ti(.12,.08,0,300,null,"lowpass"),vt(130,.1,"sine",.06)},chat:()=>{vt(Qt(84),.05,"sine",.06),vt(Qt(88),.07,"sine",.06,.05)},join:()=>{vt(Qt(79),.1,"triangle",.06),vt(Qt(84),.14,"triangle",.06,.08)},fanfare:()=>[72,76,79,84,79,84].forEach((i,e)=>vt(Qt(i),e===5?.5:.14,"triangle",.1,[0,.1,.2,.3,.45,.55][e]))},_b={C:0,D:2,E:4,F:5,G:7,A:9,B:11},H0=i=>{let e=/^([A-G])(#|b)?(\d)$/.exec(i);return 12*(+e[3]+1)+_b[e[1]]+(e[2]==="#"?1:e[2]==="b"?-1:0)},xd=i=>i.trim().split(/\s+/).map(e=>e==="_"||e==="."?e:H0(e)),G0=i=>i.split(" ").map(H0),vb={bpm:88,swing:.12,chords:["F3 A3 C4 E4","E3 G3 B3 D4","D3 F3 A3 C4","C3 E3 G3 B3","Bb2 D3 F3 A3","A2 C3 E3 G3","G2 Bb2 D3 F3","C3 E3 Bb3 D4"].map(G0),bass:[41,40,38,36,34,33,31,36],mel:[xd(`A5 _ C6 _ E6 D6 C6 A5   G5 _ _ E5 G5 A5 B5 _   D6 _ C6 A5 F5 _ A5 C6   B5 _ G5 _ E5 . . .
          D6 _ F6 _ D6 C6 Bb5 A5  C6 _ _ A5 E5 _ G5 A5   Bb5 _ A5 G5 F5 _ D5 F5  G5 _ _ _ E5 _ . .`),xd(`C6 _ A5 _ C6 _ F6 E6    D6 _ B5 _ G5 _ . .     A5 _ F5 _ A5 C6 D6 _    E6 _ D6 C6 B5 _ G5 .
          F5 _ A5 _ D6 _ C6 _     E5 _ A5 _ C6 B5 A5 G5  F5 _ G5 _ Bb5 _ A5 G5   F5 _ _ _ . . . .`)],drums:{k:[0,5],s:[4],h:[0,1,2,3,4,5,6,7]},lead:"bell",leadVol:.06},yb={bpm:128,swing:0,chords:["C4 E4 G4","A3 C4 E4","F3 A3 C4","G3 B3 D4","C4 E4 G4","A3 C4 E4","F3 A3 C4","G3 B3 D4"].map(G0),bass:[36,33,29,31,36,33,29,31],mel:[xd(`E5 G5 C6 G5 E5 G5 A5 G5   E5 . C5 E5 A5 _ G5 E5   F5 A5 C6 A5 F5 A5 C6 D6   D6 _ B5 G5 D5 _ . .
          E5 G5 C6 G5 E5 G5 A5 G5   C6 . A5 C6 E6 _ D6 C6   A5 C6 F6 C6 A5 G5 F5 A5   G5 F5 E5 D5 C5 _ . .`)],drums:{k:[0,3,4],s:[2,6],h:[1,3,5,7]},lead:"pluck",leadVol:.05,arp:!0},Mb={store:vb,game:yb},zi=null,_d="store",el=0,Ma=0,z0=0,ya=null,V0=1;function wh(i,e,t,n,s,r,a=2400){let o=Mt,l=o.createOscillator(),c=o.createOscillator(),h=o.createGain(),u=o.createBiquadFilter();l.type=i,c.type=i,l.frequency.value=e,c.frequency.value=e,c.detune.value=7,u.type="lowpass",u.frequency.value=a,h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(s,t+.02),h.gain.setTargetAtTime(s*.6,t+.05,.2),h.gain.setTargetAtTime(1e-4,t+n,.12),l.connect(u),c.connect(u),u.connect(h).connect(r),l.start(t),c.start(t),l.stop(t+n+.8),c.stop(t+n+.8)}function gd(i,e,t,n=1){let s=Mt;if(i==="k"){let r=s.createOscillator(),a=s.createGain();r.type="sine",r.frequency.setValueAtTime(140,e),r.frequency.exponentialRampToValueAtTime(48,e+.12),a.gain.setValueAtTime(.32*n,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.22),r.connect(a).connect(t),r.start(e),r.stop(e+.25)}else Ti(i==="s"?.14:.035,(i==="s"?.1:.035)*n,e-s.currentTime,i==="s"?1800:7500,t,i==="s"?"bandpass":"highpass",i==="s"?.9:.7)}function Sb(){if(!Mt||!zi)return;let i=Mb[zi.name],e=60/i.bpm/2;for(;Ma<Mt.currentTime+.25;){let t=Math.floor(el/8)%8,n=el%8,s=Math.floor(el/64),r=n%2?e*i.swing:0,a=Ma+r,o=ya;if((n===0||!i.arp&&n===5)&&i.chords[t].forEach((c,h)=>wh("triangle",Qt(c),a+h*.012,n===0?e*4.5:e*2.5,.028,o,1600)),i.arp&&s%2===1){let c=i.chords[t];wh("square",Qt(c[n%c.length]+12),a,e*.5,.012,o,2600)}(n===0||n===3||n===4||i.bpm>100&&n===6)&&wh("triangle",Qt(i.bass[t]+(n===4&&i.bpm>100?12:0)),a,e*(n===0?2.6:1.2),.09,o,700),s===0&&t<2||(i.drums.k.includes(n)&&gd("k",a,o,i.bpm>100?.8:.6),i.drums.s.includes(n)&&gd("s",a,o,.9),i.drums.h.includes(n)&&gd("h",a,o,n%2?.6:1));let l=s%(i.mel.length+1);if(l<i.mel.length){let c=i.mel[l],h=t*8+n,u=c[h];if(typeof u=="number"){let f=1;for(;c[h+f]==="_";)f++;i.lead==="bell"?ps(Qt(u),a,Math.min(2.4,e*f*1.6+.4),i.leadVol,o):wh("triangle",Qt(u),a,e*f*.85,i.leadVol,o,3800)}}Ma+=e,el++}}function vd(i){if(!Bn())return;let e=Mt.currentTime;if(zi){let t=zi.g;t.gain.setTargetAtTime(1e-4,e,.35),setTimeout(()=>t.disconnect(),2500)}if(!i){zi=null;return}ya=Mt.createGain(),ya.gain.setValueAtTime(1e-4,e),ya.gain.setTargetAtTime(1,e+.1,.5),ya.connect(tl),zi={name:i,g:ya},el=0,Ma=e+.15,z0||(z0=setInterval(Sb,60))}var Md={set(i){_d=i,Sr==="all"&&(zi?zi.name:null)!==i&&vd(i)},duck(i){V0=i?.35:1,yd()}};function Sd(){return Sr}function W0(i){Sr=i;try{localStorage.setItem("sh-sound",i)}catch{}Bn(),yd(),i==="all"?!zi&&_d&&vd(_d):zi&&vd(null)}document.addEventListener("visibilitychange",()=>{Mt&&(document.hidden?Mt.suspend():(Mt.resume(),Ma=Math.max(Ma,Mt.currentTime+.1)))});var bb=500,Ah=6,Ih=1.05,ms={tteok:{name:"\uB5A1\uAF2C\uCE58",price:2e3,emoji:"\u{1F361}",tag:"\uB300\uD45C",desc:"\uB2EC\uCF64\uC9ED\uC9E4 \uC18C\uC2A4 \uB5A1\uAF2C\uCE58 \xB7 \uD3EC\uC7A5 \uAC00\uB2A5",model:"skewer"},mochi:{name:"\uACFC\uC77C\uCC39\uC300\uB5A1",price:4500,emoji:"\u{1F353}",desc:"\uBCF4\uB4E4\uBCF4\uB4E4\uD55C \uD53C\uC5D0 \uACFC\uC77C\uC774 \uAC00\uB4DD",model:"mochi",opts:{flavor:["\uC694\uAC70\uC0E4\uC778\uBA38\uC2A4\uCF13","\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"]}},kiwiPf:{name:"\uD0A4\uC704 \uD30C\uC778 \uD06C\uB9BC \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",price:12e3,emoji:"\u{1F95D}",desc:"\uACFC\uC77C \uAC00\uB4DD, \uCAC0\uCAC0\uD55C \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",model:"kiwiParfait"},puddPf:{name:"\uD478\uB529\uCD08\uCF54\uD30C\uB974\uD398",price:12e3,emoji:"\u{1F36E}",desc:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529\uACFC \uBC14\uB098\uB098\uC758 \uC870\uD569",model:"puddingParfait"},tangSoda:{name:"\uADE4\uC18C\uB2E4",price:6e3,emoji:"\u{1F34A}",model:"soda",c:"#ffa81e",scoop:"#fff4dc"},melonSoda:{name:"\uBA54\uB860\uC18C\uB2E4",price:6e3,emoji:"\u{1F348}",model:"soda",c:"#6fd34a",scoop:"#d6f2c4"},creamSoda:{name:"\uD06C\uB9BC\uC18C\uB2E4",price:6e3,emoji:"\u{1FAE7}",desc:"\uC5F4\uB300\uACFC\uC77C + \uB77C\uBB34\uB124\uB9DB",model:"soda",c:"#2f93ee",scoop:"#fff0c8"},chocoMilk:{name:"\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F36B}",model:"milk",c:"#7b4a33",drizzle:!0},greenMilk:{name:"\uB179\uCC28\uC6B0\uC720",price:6e3,emoji:"\u{1F375}",model:"milk",c:"#86a95b",drizzle:!0},melonMilk:{name:"\uBA54\uB860\uC6B0\uC720",price:6e3,emoji:"\u{1F348}",model:"milk",c:"#b9e3a0"},bananaMilk:{name:"\uBC14\uB098\uB098\uC6B0\uC720",price:6e3,emoji:"\u{1F34C}",model:"milk",c:"#f3dc8e"},mintMilk:{name:"\uBBFC\uD2B8\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F33F}",model:"milk",c:"#7d5a47",cream:"#d4f5e6"},americano:{name:"\uC544\uBA54\uB9AC\uCE74\uB178",price:4500,emoji:"\u2615",desc:"\uB354\uCE58 \uC6D0\uC561\uC744 \uC368\uC694",model:"coffee",opts:{temp:["\uC544\uC774\uC2A4","\uD56B"],shot:!0}},latte:{name:"\uC5F0\uC720\uB77C\uB5BC",price:5e3,emoji:"\u{1F95B}",desc:"\uC544\uC774\uC2A4\uB9CC \uAC00\uB2A5\uD574\uC694",model:"latte",opts:{shot:!0}},sodaSlush:{name:"\uC18C\uB2E4 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F9CA}",model:"slush",c:"#9dd6ff"},mintSlush:{name:"\uBBFC\uD2B8\uCD08\uCF54 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F367}",model:"slush",c:"#bdeedb",chips:!0},pineSando:{name:"\uD30C\uC778\uC560\uD50C \uC0B0\uB3C4",price:6500,emoji:"\u{1F96A}",model:"sando"},pudding:{name:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529",price:4500,emoji:"\u{1F36E}",model:"pudding"},peachTea:{name:"\uBCF5\uC22D\uC544 \uC544\uC774\uC2A4\uD2F0",price:4500,emoji:"\u{1F351}",model:"tea",c:"#f0a050"}},bd=[["\uCD94\uCC9C",["tteok","mochi","kiwiPf","puddPf"]],["\uC18C\uB2E4",["tangSoda","melonSoda","creamSoda"]],["\uC6B0\uC720",["chocoMilk","greenMilk","melonMilk","bananaMilk","mintMilk"]],["\uCEE4\uD53C",["americano","latte"]],["\uC2AC\uB7EC\uC2DC",["sodaSlush","mintSlush"]],["\uB514\uC800\uD2B8",["pineSando","puddPf","pudding"]],["\uD2F0",["peachTea"]]],X0=i=>"\u{1FA99} "+i.toLocaleString("ko-KR"),Td=new Map;function ct(i,e={}){let t=i+JSON.stringify(e);return Td.has(t)||Td.set(t,new Jt({color:i,roughness:.45,metalness:0,...e})),Td.get(t)}var Lh=()=>ct("#eef8fc",{transparent:!0,opacity:.32,roughness:.05,depthWrite:!1});function it(i,e,t,n=0,s=0,r=0){let a=new Je(e,t);return a.position.set(n,s,r),i.add(a),a}var il=(i,e=20)=>new vo(i.map(([t,n])=>new ye(t,n)),e);function Rh(i,e,{h:t=.17,w:n=.04}={}){it(i,il([[0,0],[.034,0],[.035,.006],[.008,.014],[.007,.06-.008],[.014,.06],[n*.75,.06+.035],[n,t-.02],[n+.002,t]]),Lh()).renderOrder=3;let r=new nt;return r.position.y=.06+.002,i.add(r),it(r,il([[0,0],[.012,0],[n*.72,.035],[n-.004,t-.06-.03],[0,t-.06-.03]]),ct(e,{roughness:.3})),{lv:r,top:t-.02}}function Ed(i,e,t="#fffaf3",n=1){let s=new nt;s.position.y=e,i.add(s);let r=ct(t,{roughness:.75});return it(s,new nn(.036*n,12,8),r,0,.008,0).scale.y=.6,it(s,new nn(.027*n,12,8),r,0,.028*n,0).scale.y=.7,it(s,new Ns(.018*n,.03*n,10),r,0,.05*n,0),s}function nl(i,e,t,n){let s=new nt;s.position.set(e,t,n),i.add(s),it(s,new nn(.013,10,8),ct("#e0142f",{roughness:.15}));let r=it(s,new lt(.0015,.0015,.04,4),ct("#5b7a2a"),.006,.022,0);return r.rotation.z=-.35,s}function Ch(i,e,t,n=.12){let s=it(i,new lt(.004,.004,n,6),ct(e));return s.position.set(.012,t,.005),s.rotation.z=-.22,s}function Ph(i,e=.085){it(i,new lt(e,e*.8,.01,24),ct("#fffdf8",{roughness:.3}),0,.005,0)}function sl(i,e){let t=ms[i],n=new nt,s=[],r=[],a=null;switch(t.model){case"soda":{let o=Rh(n,t.c);a=o.lv;let l=it(n,new nn(.035,14,10),ct(t.scoop,{roughness:.85}),0,o.top+.012,0);l.scale.y=.85,s.push(l),s.push(nl(n,.012,o.top+.048,.012));break}case"milk":{let o=Rh(n,t.c);a=o.lv;let l=Ed(n,o.top-.004,t.cream);if(s.push(l),t.drizzle)for(let c=0;c<3;c++){let h=it(l,new rs(.026-c*.006,.0025,4,18),ct("#4a2a1d"),0,.015+c*.016,0);h.rotation.x=Math.PI/2}s.push(nl(n,0,o.top+.066,0));break}case"slush":{let o=Rh(n,t.c,{h:.16,w:.042});a=o.lv;let l=it(n,new nn(.043,14,8,0,Math.PI*2,0,Math.PI/2),ct(t.c,{roughness:.95}),0,o.top-.004,0);if(l.scale.y=.7,s.push(l),t.chips)for(let c=0;c<6;c++)s.push(it(n,new Gt(.008,.004,.008),ct("#3b2418"),Math.cos(c)*.022,o.top+.016,Math.sin(c*1.7)*.022));s.push(Ch(n,"#ff8fb8",o.top));break}case"tea":{let o=it(n,il([[0,0],[.034,0],[.04,.15],[.041,.15]]),Lh());o.renderOrder=3,a=new nt,a.position.y=.004,n.add(a),it(a,new lt(.037,.032,.13,18),ct(t.c,{roughness:.25,transparent:!0,opacity:.88}),0,.065,0);for(let c=0;c<3;c++)it(a,new Gt(.02,.02,.02),ct("#ffffff",{transparent:!0,opacity:.55,roughness:.05}),Math.cos(c*2.1)*.016,.115,Math.sin(c*2.1)*.016).rotation.y=c;let l=it(n,new lt(.02,.02,.005,14),ct("#ffd58a"),.03,.15,0);l.rotation.z=Math.PI/2,s.push(l),s.push(Ch(n,"#9be0c4",.14,.16));break}case"coffee":{if(e.temp==="\uD56B"){it(n,new lt(.075,.06,.008,20),ct("#fffdf8"),0,.004,0),it(n,new lt(.042,.034,.08,18,1,!0),ct("#fffaf2",{side:Ht}),0,.048,0),it(n,new lt(.034,.034,.004,18),ct("#fffaf2"),0,.01,0);let o=it(n,new rs(.02,.006,6,12,Math.PI),ct("#fffaf2"),.042,.05,0);o.rotation.z=-Math.PI/2,a=new nt,a.position.y=.012,n.add(a),it(a,new lt(.039,.034,.066,18),ct("#3a2014",{roughness:.15}),0,.033,0)}else{let o=it(n,il([[0,0],[.034,0],[.04,.15],[.041,.15]]),Lh());o.renderOrder=3,a=new nt,a.position.y=.004,n.add(a),it(a,new lt(.037,.032,.13,18),ct("#3a1f12",{roughness:.2,transparent:!0,opacity:.92}),0,.065,0);for(let l=0;l<3;l++)it(a,new Gt(.02,.02,.02),ct("#ffffff",{transparent:!0,opacity:.5,roughness:.05}),Math.cos(l*2.1)*.016,.118,Math.sin(l*2.1)*.016).rotation.y=l;s.push(Ch(n,"#2b2b2b",.14,.16))}break}case"latte":{let o=it(n,il([[0,0],[.034,0],[.04,.15],[.041,.15]]),Lh());o.renderOrder=3,a=new nt,a.position.y=.004,n.add(a),it(a,new lt(.034,.032,.03,18),ct("#fff6e2"),0,.015,0),it(a,new lt(.036,.034,.05,18),ct("#f1e5d2"),0,.055,0),it(a,new lt(.037,.036,.05,18),ct("#8a5634",{roughness:.25}),0,.105,0),s.push(Ch(n,"#f7b6cf",.14,.16));break}case"puddingParfait":case"kiwiParfait":{let o=Rh(n,t.model==="kiwiParfait"?"#f6efe0":"#5a3322",{h:.15,w:.045});a=o.lv;let l=o.top;if(s.push(Ed(n,l-.006,"#fffaf3",1.25)),t.model==="puddingParfait"){let c=new nt;c.position.set(-.012,l+.02,.012),n.add(c),s.push(c),it(c,new lt(.022,.028,.032,18),ct("#f7c75a",{roughness:.35}),0,.016,0),it(c,new lt(.0225,.022,.008,18),ct("#8c4a12",{roughness:.2}),0,.034,0),s.push(nl(n,-.012,l+.072,.012));for(let u=0;u<3;u++){let f=it(n,new lt(.013,.013,.006,12),ct("#fff2c4"),.03,l+.01+u*.012,-.02+u*.016);f.rotation.x=Math.PI/2-.4,s.push(f)}let h=it(n,new nn(.009,8,6),ct("#ff9cc0"),.028,l+.032,.028);h.scale.z=.4,s.push(h)}else{for(let h=0;h<5;h++)s.push(it(n,new Gt(.018,.016,.018),ct("#ffd23f",{roughness:.35}),Math.cos(h*1.3)*.03,l+.022+h%2*.012,Math.sin(h*1.3)*.03));for(let h=0;h<2;h++){let u=it(n,new lt(.016,.016,.005,14),ct("#9ccf3a",{roughness:.4}),-.026+h*.05,l+.04,.02-h*.03);u.rotation.x=Math.PI/2-.3,u.rotation.z=h?.4:-.4,s.push(u)}let c=it(n,new nn(.02,12,8),ct("#fffefa",{roughness:.8}),0,l+.05,0);c.scale.y=.75,s.push(c),s.push(nl(n,.004,l+.075,.004))}break}case"pudding":{Ph(n);let o=new nt;n.add(o),r.push(o),it(o,new lt(.028,.038,.045,20),ct("#f7c75a",{roughness:.35}),0,.032,0),it(o,new lt(.0285,.028,.01,20),ct("#8c4a12",{roughness:.2}),0,.058,0);let l=Ed(o,.062,"#fffaf3",.55);s.push(l),s.push(nl(o,0,.09,0));break}case"sando":{Ph(n,.095);for(let o of[-1,1]){let l=new nt;l.position.set(.032*o,.01,0),l.rotation.y=.3*o,n.add(l),r.push(l),it(l,new Gt(.05,.065,.026),ct("#fffaf2",{roughness:.9}),0,.033,0),it(l,new Gt(.051,.026,.02),ct("#fff7e6",{roughness:.6}),0,.033,.0035);let c=it(l,new Ns(.012,.016,12),ct("#ffcf3d",{roughness:.35}),0,.034,.014);c.rotation.x=Math.PI/2}break}case"skewer":{Ph(n,.095);let o=new nt;o.position.y=.018,o.rotation.y=.5,n.add(o),r.push(o);let l=it(o,new lt(.0022,.0022,.2,5),ct("#d9b07a"),0,0,0);l.rotation.z=Math.PI/2;for(let c=0;c<4;c++)it(o,new Gt(.022,.016,.03),ct("#d9561e",{roughness:.25}),-.04+c*.024,0,0);break}case"mochi":{Ph(n,.07);let o=new nt;n.add(o),r.push(o),it(o,new lt(.045,.036,.022,14,1,!0),ct("#8fd16b",{side:Ht}),0,.02,0);let l=it(o,new nn(.042,16,12),ct("#fffefb",{roughness:.9}),0,.04,0);l.scale.y=.72;let c=e.flavor==="\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"?"#ffd23f":"#b9e46a";it(o,new nn(.01,8,6),ct(c),.02,.066,.012);break}}return n.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),n.scale.setScalar(Ih),{g:n,top:s,body:r,lv:a,stage:0,pop:0}}function $0({scene3d:i,storeRoot:e,data:t,hero:n,npcs:s,showToast:r,isTouch:a,canOccupy:o,playGame:l,coins:c}){let h=j=>document.getElementById(j),u=h("menu"),f=h("order-btn"),d=h("eat-btn"),g=h("order-chip"),_=s.find(j=>j.id==="cafe"),p=[],m=0,M="idle",v=0,y=0,T=[],E=null,x=[],b=null,P=0,S=j=>[j.temp,j.shot?"shot":"",j.flavor].filter(Boolean).join("\xB7"),R=j=>ms[j.key].price+(j.opt.shot?bb:0),I=()=>p.reduce((j,me)=>j+me.qty,0),z=()=>p.reduce((j,me)=>j+R(me)*me.qty,0);function L(j,me=4e3){_&&(clearTimeout(L.t),_.el.textContent=j,L.t=setTimeout(()=>_.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",me))}function w(){if(M==="done")return U();let[,j]=bd[m];u.innerHTML=`
      <div class="mhead"><div><b>Soo it Happy MENU</b><span>\uC218\uC787\uD574\uD53C \uCE74\uD398 \xB7 \uC6D0\uD558\uB294 \uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="cats">${bd.map(([me],le)=>`<button class="${le===m?"on":""}" data-cat="${le}">${me}</button>`).join("")}</div>
      ${bd[m][0]==="\uCEE4\uD53C"?'<p class="note">* \uB354\uCE58 \uC6D0\uC561 \uC0AC\uC6A9 \xB7 \uC544\uBA54\uB9AC\uCE74\uB178\uB294 \uC544\uC774\uC2A4/\uD56B \uC120\uD0DD \xB7 \uC5F0\uC720\uB77C\uB5BC\uB294 \uC544\uC774\uC2A4\uB9CC \xB7 \uC0F7 \uCD94\uAC00 +500\uC6D0</p>':""}
      <div class="items">${j.map(me=>{let le=ms[me],Me=le.opts||{};return`<div class="item" data-key="${me}">
          <span class="emo">${le.emoji}</span>
          <div class="info"><b>${le.name}${le.tag?` <i>${le.tag}</i>`:""}</b>${le.desc?`<small>${le.desc}</small>`:""}
            ${Me.temp?`<div class="seg">${Me.temp.map((N,A)=>`<button data-opt="temp" data-v="${N}" class="${A?"":"on"}">${N}</button>`).join("")}</div>`:""}
            ${Me.flavor?`<div class="seg">${Me.flavor.map((N,A)=>`<button data-opt="flavor" data-v="${N}" class="${A?"":"on"}">${N}</button>`).join("")}</div>`:""}
            ${Me.shot?'<label class="shot"><input type="checkbox" data-opt="shot"> \uC0F7 \uCD94\uAC00 +500\uC6D0</label>':""}
          </div>
          <div class="buy"><span class="price">${X0(le.price)}</span><button class="add" data-act="add">\uB2F4\uAE30</button></div>
        </div>`}).join("")}</div>
      <div class="cart">
        ${p.length?`<div class="lines">${p.map((me,le)=>`<div class="line"><span>${ms[me.key].emoji} ${ms[me.key].name}${S(me.opt)?` <small>(${S(me.opt)})</small>`:""}</span>
          <span class="step"><button data-act="dec" data-i="${le}" aria-label="\uBE7C\uAE30">\u2212</button><b>${me.qty}</b><button data-act="inc" data-i="${le}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join("")}</div>`:'<p class="empty">\uC544\uC9C1 \uB2F4\uC740 \uBA54\uB274\uAC00 \uC5C6\uC5B4\uC694</p>'}
        <button class="go" data-act="order" ${p.length?"":"disabled"}>${p.length?`\u{1F9FE} ${I()}\uAC1C \xB7 \u{1FA99} ${z().toLocaleString("ko-KR")}\uCF54\uC778\uC73C\uB85C \uC8FC\uBB38\uD558\uAE30`:"\uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694"}</button>
        <p class="fine">\uB0B4 \uCF54\uC778 <b>\u{1FA99} ${c?c.fmt(c.balance):0}</b>${c&&p.length&&c.balance<z()?` \xB7 <b style="color:#e0457b">${c.fmt(z()-c.balance)} \uBD80\uC871\uD574\uC694 \u2192 \uC9C1\uC6D0\uC5D0\uAC8C \uC54C\uBC14 \uAC8C\uC784\uC73C\uB85C \uBAA8\uC544\uC694 \u{1F3AE}</b>`:""}<br>\uAC8C\uC784\uC5D0\uC11C \uBAA8\uC740 \uCF54\uC778\uC73C\uB85C \uC8FC\uBB38\uD574\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p>
      </div>`}function U(){u.innerHTML=`
      <div class="mhead"><div><b>\uC8FC\uBB38 \uC644\uB8CC! \u{1F9FE}</b><span>\uC8FC\uBB38\uBC88\uD638 ${v} \xB7 ${X0(E.total)}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="done">
        <div class="list">${E.lines.map(j=>`<div>${ms[j.key].emoji} ${ms[j.key].name}${S(j.opt)?` (${S(j.opt)})`:""} \xD7 ${j.qty}</div>`).join("")}</div>
        <p>\uC5B4\uB5BB\uAC8C \uBC1B\uC744\uAE4C\uC694?</p>
        <button class="go" data-act="eat">\u{1F37D}\uFE0F \uADF8\uB0E5 \uBA39\uC744\uB798\uC694</button>
        <button class="go game" data-act="game">\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30 \uD558\uACE0 \uBA39\uAE30</button>
      </div>`}function D(){M==="done"&&(M="idle"),w(),u.hidden=!1,u.offsetWidth,u.classList.add("on")}function O(){u.classList.remove("on"),setTimeout(()=>{u.classList.contains("on")||(u.hidden=!0)},250)}u.addEventListener("click",j=>{let me=j.target.closest("button");if(!me)return;if(me.dataset.cat){m=+me.dataset.cat,w(),u.querySelector(".items").scrollTop=0;return}if(me.dataset.opt){me.parentElement.querySelectorAll("button").forEach(Me=>Me.classList.toggle("on",Me===me));return}let le=me.dataset.act;if(le==="close")O();else if(le==="add"){let Me=me.closest(".item"),N=Me.dataset.key,A={};Me.querySelectorAll(".seg .on").forEach(_e=>A[_e.dataset.opt]=_e.dataset.v);let Y=Me.querySelector("[data-opt=shot]");if(Y&&Y.checked&&(A.shot=!0),I()>=Ah){r(`\uD55C \uBC88\uC5D0 ${Ah}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}let ge=p.find(_e=>_e.key===N&&S(_e.opt)===S(A));ge?ge.qty++:p.push({key:N,opt:A,qty:1}),w(),r(`${ms[N].emoji} ${ms[N].name} \uB2F4\uC558\uC5B4\uC694`);let ae=u.querySelector(".lines");ae&&(ae.scrollTop=ae.scrollHeight)}else if(le==="inc"||le==="dec"){let Me=p[+me.dataset.i];if(le==="inc"){if(I()>=Ah){r(`\uD55C \uBC88\uC5D0 ${Ah}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}Me.qty++}else--Me.qty<=0&&p.splice(+me.dataset.i,1);w()}else if(le==="order"){if(M!=="idle"&&M!=="done"||T.length){r("\uBA3C\uC800 \uC8FC\uBB38\uD55C \uBA54\uB274\uB97C \uBC1B\uC740 \uB4A4\uC5D0 \uB610 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694");return}if(c&&!c.spend(z(),"\uCE74\uD398 \uC8FC\uBB38"))return w();v=10+Math.floor(Math.random()*89),en.orderBell(),E={lines:p.map(Me=>({...Me,opt:{...Me.opt}})),total:z()},p.length=0,M="done",w()}else le==="eat"?(O(),M="making",y=performance.now()+4500,L(`\uC8FC\uBB38\uBC88\uD638 ${v}\uBC88, \uC8FC\uBB38 \uBC1B\uC558\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC544 \uACC4\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F353}`,6e3),r("\u{1FA91} \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694 \xB7 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694")):le==="game"&&k(E)});function k(){if(O(),!l)return r("\u{1F3AE} \uAC8C\uC784\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694");M="gaming",l(j=>{M="making",y=performance.now()+(j?800:1500),L(j?"\uAC8C\uC784 \uC131\uACF5! \uBC14\uB85C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F389}":"\uAD1C\uCC2E\uC544\uC694! \uADF8\uB798\uB3C4 \uB9DB\uC788\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F60A}",5e3),r(j?"\u{1F389} \uC131\uACF5! \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":"\uBA54\uB274\uB294 \uADF8\uB300\uB85C \uC900\uBE44\uD574 \uB4DC\uB824\uC694 \xB7 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694")})}f.addEventListener("click",j=>{D(),j.currentTarget.blur()}),addEventListener("keydown",j=>{j.code==="Escape"&&!u.hidden&&O()});let F=new Bs,B=new H(0,-1,0),$=new H;function ee(j,me){F.set($.set(j,1.4,me),B),F.far=1.4;for(let le of F.intersectObject(e,!0))if(le.point.y>.4&&le.point.y<1.05)return le.point.y;return null}function Z(j,me){let le=Math.sin(j[2]),Me=Math.cos(j[2]),N=Me,A=-le,Y=.42,ge=null;for(let Te of[.3,.36,.42,.5,.58]){let ce=ee(j[0]+le*Te,j[1]+Me*Te);if(ce!==null){Y=Te+.04,ge=ce;break}}ge===null&&(ge=.74);let ae=me.length,_e=Math.min(3,ae);me.forEach((Te,ce)=>{let de=Math.floor(ce/3),Ce=de?ae-3:_e,pe=(ce%3-(Ce-1)/2)*.13,fe=Y+de*.12,be=sl(Te.key,Te.opt);be.g.position.set(j[0]+le*fe+N*pe,ge+.002,j[1]+Me*fe+A*pe),be.g.rotation.y=j[2]+Math.PI+(Math.random()-.5)*.4,be.g.scale.setScalar(.001),be.pop=.001,i.add(be.g),x.push({food:be,seat:j})}),en.serve()}let V=_&&{x:_.x,z:_.z,face:_.face,y:_.c.root.position.y};_&&(_.y=V.y,_.speed=0);let ne=.2,q=.15,J=1.25,W=t.floor.map(j=>j[0]),Q=t.floor.map(j=>j[1]),oe=Math.min(...W),ie=Math.min(...Q),Ee=Math.ceil((Math.max(...W)-oe)/q)+1,re=Math.ceil((Math.max(...Q)-ie)/q)+1,xe=new Map,ue=j=>oe+j*q,ve=j=>ie+j*q;function Se(j,me){if(j<0||me<0||j>=Ee||me>=re)return!1;let le=me*Ee+j,Me=xe.get(le);return Me===void 0&&(Me=o(ue(j),ve(me),ne),xe.set(le,Me)),Me}function Ae(j,me,le=8){let Me=Math.round((j-oe)/q),N=Math.round((me-ie)/q);for(let A=0;A<=le;A++){let Y=null,ge=1e9;for(let ae=-A;ae<=A;ae++)for(let _e=-A;_e<=A;_e++){if(Math.max(Math.abs(ae),Math.abs(_e))!==A||!Se(Me+ae,N+_e))continue;let Te=Math.hypot(ue(Me+ae)-j,ve(N+_e)-me);Te<ge&&(ge=Te,Y=[Me+ae,N+_e])}if(Y)return Y}return null}function Le(j,me,le,Me){let N=Math.ceil(Math.hypot(le-j,Me-me)/.06);for(let A=1;A<N;A++)if(!o(j+(le-j)*A/N,me+(Me-me)*A/N,ne))return!1;return!0}function ze(j,me,le,Me){let N=Ae(j,me),A=Ae(le,Me);if(!N||!A)return null;let Y=(be,Re)=>Re*Ee+be,ge=Y(A[0],A[1]),ae=[[0,N[0],N[1]]],_e=new Map([[Y(N[0],N[1]),0]]),Te=new Map,ce=new Set,de=!1,Ce=0;for(;ae.length&&Ce++<4e4;){let be=0;for(let Qe=1;Qe<ae.length;Qe++)ae[Qe][0]<ae[be][0]&&(be=Qe);let[,Re,Pe]=ae.splice(be,1)[0],Ve=Y(Re,Pe);if(!ce.has(Ve)){if(ce.add(Ve),Ve===ge){de=!0;break}for(let[Qe,we]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let qe=Re+Qe,st=Pe+we;if(!Se(qe,st)||Qe&&we&&(!Se(Re+Qe,Pe)||!Se(Re,Pe+we)))continue;let Oe=Y(qe,st),Tt=_e.get(Ve)+Math.hypot(Qe,we);Tt<(_e.has(Oe)?_e.get(Oe):1e9)&&(_e.set(Oe,Tt),Te.set(Oe,Ve),ae.push([Tt+Math.hypot(qe-A[0],st-A[1]),qe,st]))}}}if(!de)return null;let G=[];for(let be=ge;be!==void 0;be=Te.get(be))G.push([ue(be%Ee),ve(Math.floor(be/Ee))]);G.reverse(),G.push([le,Me]);let pe=[G[0]],fe=0;for(;fe<G.length-1;){let be=G.length-1;for(;be>fe+1&&!Le(G[fe][0],G[fe][1],G[be][0],G[be][1]);)be--;pe.push(G[be]),fe=be}return pe}let He=null,tt=ct("#ffc2da",{roughness:.5});function X(j){let me=T;if(T=[],!_){Z(j,me),M="idle";return}let le=Math.sin(j[2]),Me=Math.cos(j[2]),N=[j[0]+le*.5,j[1]+Me*.5],A=null;for(let[ge,ae]of[[Me,-le],[-Me,le],[le,Me]])for(let _e of[.55,.7,.85]){let Te=N[0]+ge*_e,ce=N[1]+ae*_e;if(!o(Te,ce,ne))continue;let de=ze(V.x,V.z,Te,ce);if(de){(!A||de.length<A.length)&&(A=de);break}}if(M="delivering",!A){Z(j,me),M="idle",r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}");return}let Y=new nt;Y.position.set(0,.5,.24),it(Y,new Gt(.36,.016,.26),tt),me.slice(0,6).forEach((ge,ae)=>{let _e=sl(ge.key,ge.opt);_e.g.scale.setScalar(Ih*.62),_e.g.position.set((ae%3-1)*.1,.008,me.length>3?(Math.floor(ae/3)-.5)*.09:0),Y.add(_e.g)}),_.c.root.add(Y),He={stage:"go",path:[[V.x,V.z],...A],i:1,seat:j,wait:0,tray:Y,items:me,look:N},_.carry=!0,L("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694! \u{1F370}",2e4)}function gt(j){let me=_,le=He;if(le.stage==="go"||le.stage==="back"){let[Me,N]=le.path[le.i],A=Me-me.x,Y=N-me.z,ge=Math.hypot(A,Y),ae=Math.min(ge,J*j);if(ge>1e-4){me.x+=A/ge*ae,me.z+=Y/ge*ae;let Te=Math.atan2(A,Y)-me.face;Te=Math.atan2(Math.sin(Te),Math.cos(Te)),me.face+=Te*Math.min(1,j*10)}me.speed=J;let _e=Math.hypot(me.x-V.x,me.z-V.z);me.y=V.y*Fi.clamp(1-(_e-.15)/.35,0,1),ge<.02&&++le.i>=le.path.length&&(me.speed=0,le.stage==="go"?(le.stage="serve",le.wait=.7):(me.x=V.x,me.z=V.z,me.face=V.face,me.y=V.y,He=null))}else if(le.stage==="serve"){let Me=Math.atan2(le.look[0]-me.x,le.look[1]-me.z)-me.face;if(Me=Math.atan2(Math.sin(Me),Math.cos(Me)),me.face+=Me*Math.min(1,j*8),le.wait-=j,le.wait<=0&&le.tray)me.c.root.remove(le.tray),le.tray=null,me.carry=!1,Z(le.seat,le.items),M="idle",L("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uB098\uC654\uC2B5\uB2C8\uB2E4! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}",4e3),r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}"),le.wait=1.2;else if(le.wait<=0){let N=ze(me.x,me.z,V.x,V.z);le.stage="back",le.path=N?[[me.x,me.z],...N.slice(0,-1),[V.x,V.z]]:[[me.x,me.z],[V.x,V.z]],le.i=1,M="idle"}}}let Ze=()=>x.filter(j=>j.seat===b);function at(){let j=Ze();if(!j.length)return;let me=j[0].food;me.stage++,P=.7,en.munch();let le=me.stage;for(let Me of me.top)le>=2?Me.visible=!1:Me.scale.multiplyScalar(.65);me.lv&&(me.lv.scale.y=Math.max(.02,1-le/3));for(let Me of me.body)Me.scale.setScalar(Math.max(.05,1-le*.3));le>=3&&(me.dying=1,setTimeout(()=>{i.remove(me.g),x.splice(x.findIndex(Me=>Me.food===me),1),x.some(Me=>Me.seat===b)||r("\uB2E4 \uBA39\uC5C8\uC5B4\uC694! \uB9DB\uC788\uC5C8\uB2E4 \u{1F60B} \uB610 \uC8FC\uBB38\uD574 \uBCF4\uC138\uC694")},450))}return d.addEventListener("click",j=>{at(),j.currentTarget.blur()}),{get open(){return!u.hidden},onSit(j){b=j,M==="ready"&&T.length&&!He&&X(j)},get npcBusy(){return!!He},onStand(){b=null},update(j,me,le){le!==b&&(b=le),M==="making"&&performance.now()>=y&&(T=E.lines.flatMap(Y=>Array.from({length:Y.qty},()=>({key:Y.key,opt:Y.opt}))),M="ready",b&&!He?X(b):(L(`\uC8FC\uBB38\uBC88\uD638 ${v}\uBC88 \uBA54\uB274 \uB098\uC654\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC73C\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F370}`,7e3),r("\u{1F514} \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uCE74\uD398 \uC758\uC790\uB97C \uB20C\uB7EC \uC549\uC73C\uBA74 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694"))),He&&gt(j);let Me=_&&!le&&!He&&Math.hypot(me.x-V.x,me.z-V.z)<2.6;f.hidden=!Me||!u.hidden;let N=!!le&&Ze().length>0;d.hidden=!N;let A=M==="making"?"\u{1F9D1}\u200D\u{1F373} \uBA54\uB274 \uB9CC\uB4DC\uB294 \uC911\u2026 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":M==="ready"?`\u{1F514} \uBA54\uB274 ${T.length}\uAC1C \uC900\uBE44\uB410\uC5B4\uC694 \xB7 \uCE74\uD398 \uC758\uC790\uC5D0 \uC549\uC544 \uBCF4\uC138\uC694`:M==="delivering"?"\u{1F370} \uC9C1\uC6D0\uC774 \uBA54\uB274\uB97C \uAC00\uC838\uB2E4 \uB4DC\uB9AC\uB294 \uC911\u2026":"";g.textContent!==A&&(g.textContent=A),g.hidden=!A||!u.hidden;for(let{food:Y}of x){if(Y.pop<1){Y.pop=Math.min(1,Y.pop+j*3);let ge=1-Math.pow(1-Y.pop,3);Y.g.scale.setScalar(Ih*(.2+.8*ge+Math.sin(Y.pop*Math.PI)*.12))}Y.dying&&(Y.dying=Math.max(0,Y.dying-j*2.5),Y.g.scale.setScalar(Ih*Y.dying))}if(P>0&&n.arms){P=Math.max(0,P-j);let Y=Math.sin((1-P/.7)*Math.PI);n.arms[0].rotation.x=-.5-1.7*Y,n.head.rotation.x=.12*Y}}}}var br='stroke="#4a3f66" stroke-linejoin="round" stroke-linecap="round"',St=br+' stroke-width="2.6"',q0=(i,e,t,n=2.6)=>`<circle cx="${i}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${e}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${i+.9}" cy="${t-.9}" r="0.9" fill="#fff"/><circle cx="${e+.9}" cy="${t-.9}" r="0.9" fill="#fff"/>`,Cd=(i,e,t)=>`<ellipse cx="${i}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/><ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/>`,Dh=(i,e)=>`<path d="M${i} ${e} q3 -10 9 -12" fill="none" ${br} stroke-width="1.8"/><circle cx="${i}" cy="${e+2}" r="5.5" fill="#e8243c" ${St}/><circle cx="${i-1.8}" cy="${e}" r="1.5" fill="#fff" opacity=".8"/>`,wd=(i,e,t)=>`
  <path d="M43 76 h14 l2 12 h-18z" fill="#eef8fc" ${St}/><ellipse cx="50" cy="89" rx="15" ry="4" fill="#eef8fc" ${St}/>
  <path d="M27 36 h46 l-7 36 q-16 8 -32 0z" fill="${i}" ${St}/>
  <path d="M33 42 l-3 22" stroke="#fff" stroke-width="3" opacity=".55" stroke-linecap="round"/>
  ${e?`<circle cx="50" cy="30" r="14" fill="${e}" ${St}/><path d="M38 34 q12 6 24 0" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`:""}
  ${t?`<path d="M30 37 q-3 -10 8 -12 q2 -10 12 -9 q10 -1 12 9 q11 2 8 12z" fill="${t}" ${St}/><path d="M36 31 q14 -6 28 0" fill="none" stroke="#6b3b25" stroke-width="2.4" stroke-linecap="round"/>`:""}`,rl=(i,e,t=1,n="")=>`<g transform="translate(${i} ${e}) scale(${t})">
  <ellipse cx="-17" cy="2" rx="8" ry="13" fill="#fff" ${St} transform="rotate(18 -17 2)"/><ellipse cx="17" cy="2" rx="8" ry="13" fill="#fff" ${St} transform="rotate(-18 17 2)"/>
  <path d="M-16 -6 q-4 -14 8 -16 q8 -8 16 0 q12 2 8 16 q6 10 -2 20 q-14 10 -28 0 q-8 -10 -2 -20z" fill="#fff" ${St}/>
  ${q0(-6,6,0,2.8)}<ellipse cx="0" cy="7" rx="3" ry="2.2" fill="#3b2f4a"/><path d="M-3 10 q3 3 6 0" fill="none" ${br} stroke-width="1.6"/>
  ${Cd(-11,11,8)}${n}</g>`,Ad=({hair:i,hairDark:e,bun:t,glasses:n,clip:s,collar:r})=>`
  ${t?`<circle cx="50" cy="20" r="11" fill="${i}" ${St}/>`:""}
  <path d="M22 54 q-4 -34 28 -36 q32 2 28 36 q-2 10 -8 12 l-40 0 q-6 -2 -8 -12z" fill="${i}" ${St}/>
  <ellipse cx="50" cy="54" rx="22" ry="21" fill="#ffe6d6" ${St}/>
  <path d="M28 46 q8 -14 22 -12 q-2 8 -10 10 q10 -2 14 -10 q8 10 18 12 q-4 -18 -22 -18 q-18 0 -22 18z" fill="${i}"/>
  <path d="M27 58 q-3 10 1 20 M73 58 q3 10 -1 20" fill="none" stroke="${e}" stroke-width="7" stroke-linecap="round"/>
  ${q0(41,59,55,3)}${Cd(35,65,63)}<path d="M46 65 q4 4 8 0" fill="none" ${br} stroke-width="1.8"/>
  ${n?'<circle cx="41" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><circle cx="59" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><path d="M48 54 h4" stroke="#4a3326" stroke-width="2.4"/>':""}
  ${s?`<circle cx="32" cy="36" r="5" fill="#e8243c" ${br} stroke-width="1.8"/><path d="M30 31 l2 -3 l2 3" fill="#6cc05a"/>`:""}
  ${r?`<path d="M34 78 q16 8 32 0 l6 10 q-22 10 -44 0z" fill="${r}" ${St}/>`:""}`,Tr={menu:{name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",color:"#d6efbf",stickers:[wd("#2f93ee","#fff0c8")+Dh(57,14),wd("#6fd34a","#d6f2c4")+Dh(57,14),`<ellipse cx="50" cy="80" rx="34" ry="9" fill="#fff" ${St}/><path d="M32 78 l6 -34 h24 l6 34z" fill="#f7c75a" ${St}/><path d="M38 44 h24 l-1 7 q-11 4 -22 0z" fill="#8c4a12" ${St}/>
       <path d="M40 44 q-3 -9 6 -10 q4 -8 8 0 q9 1 6 10z" fill="#fffaf3" ${St}/>${Dh(50,24)}<path d="M37 70 q13 4 26 0" stroke="#fff" stroke-width="2.4" opacity=".5" fill="none"/>`,`<path d="M18 86 L84 20" stroke="#d9b07a" stroke-width="4" stroke-linecap="round"/>
       ${[0,1,2,3].map(i=>`<rect x="${24+i*13}" y="${56-i*13}" width="15" height="12" rx="4" fill="#e0622a" ${St} transform="rotate(-45 ${31+i*13} ${62-i*13})"/>`).join("")}
       <path d="M30 60 l40 -40" stroke="#fff" stroke-width="2" opacity=".45" stroke-linecap="round"/>`,`<path d="M22 64 h56 l-6 18 h-44z" fill="#8fd16b" ${St}/><path d="M28 64 l4 18 M40 64 l1 18 M52 64 l-1 18 M64 64 l-3 18" stroke="#6aa94a" stroke-width="1.6"/>`+rl(50,44,1.05),wd("#7b4a33",null,"#fffaf3")+Dh(54,10)]},staff:{name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",color:"#ffe1ee",stickers:[Ad({hair:"#7a5640",hairDark:"#64432f",bun:!0,collar:"#c4e76a"}),Ad({hair:"#3d3346",hairDark:"#2c2433",glasses:!0,collar:"#fff0a3"}),Ad({hair:"#f7a9c8",hairDark:"#ec8db5",clip:!0,collar:"#aee3cf"}),`<path d="M10 24 q0 -12 14 -12 h52 q14 0 14 12 v30 q0 12 -14 12 h-36 l-14 14 l2 -14 q-18 0 -18 -12z" fill="#fff" ${St}/>
       <text x="50" y="47" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="12.5" fill="#e0457b">\uC5B4\uC11C\uC624\uC138\uC694!</text>`,`<path d="M50 86 C10 58 12 22 34 20 C44 19 50 28 50 32 C50 28 56 19 66 20 C88 22 90 58 50 86z" fill="#f6a9c9" ${St}/>
       <text x="50" y="54" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="13" fill="#c2477e">\uC218\uC787\uD574\uD53C</text>`,`<path d="M50 50 l-30 -18 q-8 -2 -8 8 v20 q0 10 8 8z M50 50 l30 -18 q8 -2 8 8 v20 q0 10 -8 8z" fill="#ff9cc0" ${St}/>
       <path d="M44 52 l-10 30 l8 -4 l4 8 l6 -32z M56 52 l10 30 l-8 -4 l-4 8 l-6 -32z" fill="#ff86b2" ${St}/><circle cx="50" cy="50" r="8" fill="#ffb8d2" ${St}/>`]},dog:{name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",color:"#e3f3ff",stickers:[rl(50,52,1.5,'<path d="M-3 12 q3 5 6 0z" fill="#ff8fb0" stroke="#4a3f66" stroke-width="1.4"/>'),`<ellipse cx="52" cy="72" rx="24" ry="16" fill="#fff" ${St}/><ellipse cx="38" cy="84" rx="7" ry="5" fill="#fff" ${St}/><ellipse cx="62" cy="84" rx="7" ry="5" fill="#fff" ${St}/>
       <path d="M74 66 q12 -6 8 -16" fill="none" ${br} stroke-width="5"/><path d="M74 66 q12 -6 8 -16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`+rl(48,40,1.05),`<ellipse cx="50" cy="66" rx="34" ry="18" fill="#fff" ${St}/><path d="M24 62 q-4 -16 12 -18 q10 -10 20 0" fill="#fff" ${St}/>
       <path d="M30 60 q4 3 8 0 M44 60 q4 3 8 0" fill="none" ${br} stroke-width="2"/><ellipse cx="41" cy="67" rx="2.6" ry="2" fill="#3b2f4a"/>${Cd(28,54,68)}
       <text x="66" y="38" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="15" fill="#9a8cc4">z</text><text x="76" y="26" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="11" fill="#9a8cc4">z</text>`,rl(50,54,1.4)+`<path d="M50 24 l-14 -8 q-4 0 -4 4 v8 q0 4 4 4z M50 24 l14 -8 q4 0 4 4 v8 q0 4 -4 4z" fill="#ff8fb7" ${St}/><circle cx="50" cy="24" r="4.5" fill="#ffb3cf" ${St}/>`,`<ellipse cx="50" cy="62" rx="18" ry="15" fill="#f7a9c8" ${St}/>${[[28,40],[42,30],[58,30],[72,40]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="7" ry="8.5" fill="#f7a9c8" ${St}/>`).join("")}`,`<path d="M14 20 q0 -10 12 -10 h48 q12 0 12 10 v26 q0 10 -12 10 h-30 l-14 12 l2 -12 h-6 q-12 0 -12 -10z" fill="#fffbe0" ${St}/>
       <text x="50" y="42" text-anchor="middle" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="18" fill="#4a3f66">\uBA4D!</text>`+rl(70,76,.8)]}},Rd=new Map;function Ei(i,e){let t=i+e;if(!Rd.has(t)){let n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" width="224" height="224">
      <defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feMorphology in="SourceAlpha" operator="dilate" radius="4.5" result="d"/>
      <feFlood flood-color="#ffffff"/><feComposite in2="d" operator="in" result="w"/>
      <feGaussianBlur in="d" stdDeviation="1.6" result="s"/><feOffset in="s" dy="1.4" result="so"/><feFlood flood-color="#6a53a0" flood-opacity=".28"/><feComposite in2="so" operator="in" result="sh"/>
      <feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g filter="url(#b)">${Tr[i].stickers[e]}</g></svg>`;Rd.set(t,"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n))}return Rd.get(t)}var un={stkMenu:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"menu",desc:"\uD06C\uB9BC\uC18C\uB2E4\xB7\uBA54\uB860\uC18C\uB2E4\xB7\uD478\uB529\xB7\uB5A1\uAF2C\uCE58\u2026",color:"#d6efbf"},stkStaff:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"staff",desc:"\uCE74\uD398 \uC5B8\uB2C8\xB7\uC18C\uD488\uC0F5 \uC5B8\uB2C8\xB7\uC190\uB2D8",color:"#ffd3e4"},stkDog:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"dog",desc:"\uBABD\uAE00\uBABD\uAE00 \uD558\uC580 \uAC15\uC544\uC9C0",color:"#dcefff"},diary:{cat:"\uBB38\uAD6C",name:"\uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9",price:5e3,emoji:"\u{1F4D2}",desc:"\uCE74\uD398 \uC790\uB9AC\uC5D0\uC11C \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694",color:"#f7c9dc"},penBear:{cat:"\uBB38\uAD6C",name:"\uACF0\uB3CC\uC774 \uBCFC\uD39C",price:2500,emoji:"\u{1F43B}",desc:"\uCD08\uCF54 \uBE0C\uB77C\uC6B4 \uC789\uD06C",ink:"#7a4a33",color:"#c99c6e"},penBerry:{cat:"\uBB38\uAD6C",name:"\uB538\uAE30 \uBCFC\uD39C",price:2500,emoji:"\u{1F353}",desc:"\uB538\uAE30 \uD551\uD06C \uC789\uD06C",ink:"#e0457b",color:"#f48fb9"},penMint:{cat:"\uBB38\uAD6C",name:"\uBBFC\uD2B8 \uC824\uD39C",price:2500,emoji:"\u{1F33F}",desc:"\uBBFC\uD2B8 \uC789\uD06C",ink:"#2f9d8f",color:"#9fe0cf"},tapeHeart:{cat:"\uBB38\uAD6C",name:"\uD558\uD2B8 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F497}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"heart",color:"#ffc2da"},tapeCheck:{cat:"\uBB38\uAD6C",name:"\uAE45\uC5C4 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F49A}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"check",color:"#bfe6a8"},memo:{cat:"\uBB38\uAD6C",name:"\uB9D0\uB791 \uBA54\uBAA8\uC9C0",price:2e3,emoji:"\u{1F5D2}\uFE0F",color:"#fff3b0"},letter:{cat:"\uBB38\uAD6C",name:"\uD3B8\uC9C0\uC9C0 \uC138\uD2B8",price:3500,emoji:"\u{1F48C}",color:"#ffe1ee"},postcard:{cat:"\uBB38\uAD6C",name:"\uC218\uC787\uD574\uD53C \uC5FD\uC11C",price:1500,emoji:"\u{1F5BC}\uFE0F",color:"#cdbcf0"},plushDog:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC778\uD615",price:15e3,emoji:"\u{1F436}",color:"#ffffff"},keyBear:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uACF0\uB3CC\uC774 \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F9F8}",color:"#e6bf93"},keyBunny:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD1A0\uB07C \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F430}",color:"#f8b9d3"},hairpin:{cat:"\uC7A1\uD654",name:"\uB538\uAE30 \uBA38\uB9AC\uD540",price:3e3,emoji:"\u{1F380}",color:"#ff8fb0"}},Y0=["\uC2A4\uD2F0\uCEE4","\uBB38\uAD6C","\uC778\uD615\xB7\uD0A4\uB9C1","\uC7A1\uD654"],Pd=i=>"\u{1FA99} "+i.toLocaleString("ko-KR"),Id=i=>{let e=un[i];return e.sheet?`<img src="${Ei(e.sheet,0)}" alt="">`:e.emoji},Xn={items:{},stickers:{}};try{Object.assign(Xn,JSON.parse(localStorage.getItem("sh-inv"))||{})}catch{}function Nh(){try{localStorage.setItem("sh-inv",JSON.stringify(Xn))}catch{}}var Uh=i=>(Xn.items[i]||0)>0;function Tb(){let i=document.createElement("canvas");i.width=512,i.height=128;let e=i.getContext("2d");e.fillStyle="#f4a7bf",e.fillRect(0,0,512,128),e.globalCompositeOperation="destination-out";let t=(s,r,a)=>{e.beginPath(),e.moveTo(s,r+a*.9),e.bezierCurveTo(s-a*1.3,r,s-a*.7,r-a*.9,s,r-a*.3),e.bezierCurveTo(s+a*.7,r-a*.9,s+a*1.3,r,s,r+a*.9),e.fill()};for(let s=0;s<2;s++)for(let r=0;r<16;r++)t(16+r*32+(s?16:0),44+s*42,11);let n=new ci(i);return n.colorSpace=Lt,n.wrapS=Rn,n.anisotropy=4,n}function Eb(){let i=new nt,e=new Jt({color:"#f4a7bf",roughness:.55}),t=new Jt({map:Tb(),alphaTest:.5,side:Ht,roughness:.55}),n=new nt;n.scale.set(1.3,1,.85),i.add(n);let s=.1,r=new Je(new lt(.11,.08,s,28,1,!0),t);r.position.y=s/2,n.add(r);let a=new Je(new co(.08,24),e);a.rotation.x=-Math.PI/2,a.position.y=.002,n.add(a);let o=new Je(new rs(.11,.008,6,32),e);o.rotation.x=Math.PI/2,o.position.y=s,n.add(o);for(let c of[-1,1]){let h=new Je(new rs(.075,.009,6,18,Math.PI),e);h.position.set(0,s,.07*c),h.rotation.x=.25*c,i.add(h)}let l=new nt;return l.position.y=.01,i.add(l),i.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),{g:i,goods:l}}function K0({scene3d:i,hero:e,npcs:t,showToast:n,inShop:s,coins:r}){let a=I=>document.getElementById(I),o=a("shop"),l=a("shop-btn"),c=a("basket-btn"),h=a("stop-btn"),u=t.find(I=>I.id==="shop"),f=Eb();f.g.position.set(.21,.29,.24),f.g.rotation.y=Math.PI/2;let d=!1,g="browse",_=0,p=0,m={},M=()=>Object.values(m).reduce((I,z)=>I+z,0),v=()=>Object.entries(m).reduce((I,[z,L])=>I+un[z].price*L,0),y=()=>u&&Math.hypot(e.root.position.x-u.x,e.root.position.z-u.z)<2.8;function T(){f.goods.clear();let I=0;for(let[z,L]of Object.entries(m))for(let w=0;w<L&&I<10;w++,I++){let U=un[z],D=new Je(U.sheet?new Gt(.06,.004,.08):new Gt(.045,.035,.04),new Jt({color:U.color,roughness:.6}));D.position.set((I%3-1)*.06,.02+Math.floor(I/3)*.025,(I%2-.5)*.04),D.rotation.set(.2*(I%2-.5),I*.7,.15*(I%3-1)),f.goods.add(D)}}function E(){d=!0,e.root.add(f.g),T(),n("\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8\uB97C \uB4E4\uC5C8\uC5B4\uC694! \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"),P("browse")}function x(){d=!1,e.root.remove(f.g);for(let I of Object.keys(m))delete m[I];S(),n("\uC1FC\uD551\uC744 \uADF8\uB9CC\uB480\uC5B4\uC694. \uBC14\uAD6C\uB2C8\uB294 \uC81C\uC790\uB9AC\uC5D0 \uB450\uC5C8\uC5B4\uC694")}function b(){let I=M(),z=`<div class="cats">${[["browse","\u{1F6CD}\uFE0F \uC0C1\uD488"],["cart",`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${I}`],["mine","\u{1F392} \uB0B4 \uBB3C\uAC74"]].map(([w,U])=>`<button class="${g===w?"on":""}" data-tab="${w}">${U}</button>`).join("")}</div>`,L="";if(g==="browse")L=`<div class="cats sub">${Y0.map((w,U)=>`<button class="${U===_?"on":""}" data-cat="${U}">${w}</button>`).join("")}</div>
      <div class="items">${Object.entries(un).filter(([,w])=>w.cat===Y0[_]).map(([w,U])=>`
        <div class="item"><span class="emo">${Id(w)}</span>
          <div class="info"><b>${U.name}</b>${U.desc?`<small>${U.desc}</small>`:""}
            ${U.sheet?`<div class="mini">${Tr[U.sheet].stickers.map((D,O)=>`<img src="${Ei(U.sheet,O)}" alt="">`).join("")}</div>`:""}</div>
          <div class="buy"><span class="price">${Pd(U.price)}</span><button class="add" data-add="${w}">${m[w]?`\uB2F4\uC74C ${m[w]}`:"\uB2F4\uAE30"}</button></div>
        </div>`).join("")}</div>
      <div class="cart"><button class="go" data-tab="cart" ${I?"":"disabled"}>${I?`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 \uBCF4\uAE30 \xB7 ${I}\uAC1C \xB7 ${Pd(v())}`:"\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"}</button></div>`;else if(g==="cart"){let w=y();L=`<div class="items">${I?Object.entries(m).map(([U,D])=>`
        <div class="item"><span class="emo">${Id(U)}</span><div class="info"><b>${un[U].name}</b><small>${Pd(un[U].price)}</small></div>
          <span class="step"><button data-dec="${U}" aria-label="\uBE7C\uAE30">\u2212</button><b>${D}</b><button data-inc="${U}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join(""):'<p class="empty">\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694</p>'}</div>
      <div class="cart">
        <button class="go" data-act="pay" ${I&&w?"":"disabled"}>${I?w?`\u{1FA99} ${v().toLocaleString("ko-KR")}\uCF54\uC778\uC73C\uB85C \uACC4\uC0B0\uD558\uAE30`:"\u{1F380} \uACC4\uC0B0\uB300 \uC9C1\uC6D0\uC5D0\uAC8C \uAC00\uBA74 \uACC4\uC0B0\uD560 \uC218 \uC788\uC5B4\uC694":"\uB2F4\uC740 \uC0C1\uD488\uC774 \uC5C6\uC5B4\uC694"}</button>
        <p class="fine">\uB0B4 \uCF54\uC778 <b>\u{1FA99} ${r?r.fmt(r.balance):0}</b>${r&&I&&r.balance<v()?` \xB7 <b style="color:#e0457b">${r.fmt(v()-r.balance)} \uBD80\uC871\uD574\uC694 \u2192 \uAC8C\uC784\uC73C\uB85C \uBAA8\uC544\uC694 \u{1F3AE}</b>`:""}<br>\uAC8C\uC784\uC5D0\uC11C \uBAA8\uC740 \uCF54\uC778\uC73C\uB85C \uACC4\uC0B0\uD574\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p></div>`}else{let w=Object.entries(Xn.items).filter(([,U])=>U>0);L=`<div class="items">${w.length?w.map(([U,D])=>`
        <div class="item"><span class="emo">${Id(U)}</span><div class="info"><b>${un[U].name}</b><small>${D}\uAC1C \uAC00\uC9C0\uACE0 \uC788\uC5B4\uC694</small></div></div>`).join(""):'<p class="empty">\uC544\uC9C1 \uC0B0 \uBB3C\uAC74\uC774 \uC5C6\uC5B4\uC694</p>'}
        <p class="fine">\u{1F4D2} \uB2E4\uC774\uC5B4\uB9AC + \uC2A4\uD2F0\uCEE4 + \uBCFC\uD39C\uC774 \uC788\uC73C\uBA74 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694</p></div>`}o.innerHTML=`<div class="mhead"><div><b>\uC218\uC9D1\uC218\uC9D1 \uC18C\uD488\uC0F5</b><span>${d?"\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uACE0 \uACC4\uC0B0\uB300\uC5D0\uC11C \uACC4\uC0B0\uD574\uC694":"\uB0B4\uAC00 \uC0B0 \uBB3C\uAC74"}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>${z}${L}`}function P(I){g=I||g,b(),o.hidden=!1,o.offsetWidth,o.classList.add("on")}function S(){o.classList.remove("on"),setTimeout(()=>{o.classList.contains("on")||(o.hidden=!0)},250)}o.addEventListener("click",I=>{let z=I.target.closest("button");if(!z)return;let L=z.dataset;if(L.act==="close")return S();if(L.tab)return!d&&L.tab!=="mine"?void 0:(g=L.tab,b());if(L.cat)return _=+L.cat,b();if(L.add)return M()>=20?n("\uBC14\uAD6C\uB2C8\uAC00 \uAC00\uB4DD \uCC3C\uC5B4\uC694"):(m[L.add]=(m[L.add]||0)+1,T(),n(`\u{1F9FA} ${un[L.add].name} \uB2F4\uC558\uC5B4\uC694`),b());if(L.inc)return m[L.inc]++,T(),b();if(L.dec)return--m[L.dec]<=0&&delete m[L.dec],T(),b();if(L.act==="pay"){if(r&&!r.spend(v(),"\uC18C\uD488\uC0F5 \uACC4\uC0B0"))return b();for(let[w,U]of Object.entries(m)){Xn.items[w]=(Xn.items[w]||0)+U;let D=un[w].sheet;D&&Tr[D].stickers.forEach((O,k)=>{Xn.stickers[D+":"+k]=(Xn.stickers[D+":"+k]||0)+U}),delete m[w]}Nh(),T(),u&&(u.el.textContent="\uAC10\uC0AC\uD569\uB2C8\uB2E4! \uB610 \uB180\uB7EC \uC624\uC138\uC694 \u{1F380}",setTimeout(()=>u.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",5e3)),n("\u{1F4B3} \uACC4\uC0B0 \uC644\uB8CC! \uC0B0 \uBB3C\uAC74\uC740 \u{1F392} \uB0B4 \uBB3C\uAC74\uC5D0 \uC788\uC5B4\uC694"),g="mine",b()}}),l.addEventListener("click",I=>{E(),I.currentTarget.blur()}),c.addEventListener("click",I=>{P(M()?"cart":"browse"),I.currentTarget.blur()}),h.addEventListener("click",I=>{if(I.currentTarget.blur(),M()&&performance.now()-p>3e3)return p=performance.now(),h.textContent="\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uB0B4\uB824\uB193\uC544\uC694",n("\uB2F4\uC740 \uC0C1\uD488\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB0B4\uB824\uB193\uC544\uC694");x()}),addEventListener("keydown",I=>{I.code==="Escape"&&!o.hidden&&S()});let R=null;return{get open(){return!o.hidden},get shopping(){return d},openMine(){P("mine")},update(I,z){let L=s(I);if(l.hidden=d||!!z||!L,c.hidden=!d,h.hidden=!d,d){let U=`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${M()}`;c.textContent!==U&&(c.textContent=U),performance.now()-p>3e3&&h.textContent!=="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30"&&(h.textContent="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30")}f.g.visible=!z,d&&!z&&(e.arms[1].rotation.x=-.95,e.arms[1].rotation.z=.12);let w=y();w!==R&&(R=w,!o.hidden&&g==="cart"&&b())}}}async function Sa(i,e){let t=await new Promise(a=>i.toBlob(a,"image/jpeg",.92)),n=new File([t],e,{type:"image/jpeg"});if(matchMedia("(pointer:coarse)").matches&&navigator.canShare&&navigator.canShare({files:[n]}))try{return await navigator.share({files:[n],title:"\uC218\uC787\uD574\uD53C"}),"shared"}catch(a){if(a.name==="AbortError")return"cancel"}let r=document.createElement("a");return r.href=URL.createObjectURL(t),r.download=e,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},4e3),"downloaded"}var ba=()=>{let i=new Date;return`${i.getFullYear()}.${String(i.getMonth()+1).padStart(2,"0")}.${String(i.getDate()).padStart(2,"0")}`};var Ld='"Gamja Flower", "Poor Story", cursive',Oh=6,wb={heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="25" height="25" patternUnits="userSpaceOnUse">
    <path d="M12.5 19 C3 12 5 5 9 5 C11 5 12.5 7 12.5 8 C12.5 7 14 5 16 5 C20 5 22 12 12.5 19z" fill="#ff8fb7"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="#ffd9e7" opacity=".88"/>
    <rect x="4" y="0" width="242" height="50" fill="url(#p)" opacity=".85"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#eaf7df"/><rect width="8" height="16" fill="#a9db8a" opacity=".55"/><rect width="16" height="8" fill="#a9db8a" opacity=".55"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="url(#p)" opacity=".9"/></svg>`},Dd=i=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(wb[i]),Er={page:0,pages:Array.from({length:Oh},()=>[])};try{let i=JSON.parse(localStorage.getItem("sh-diary"));i&&i.pages&&(Er=i)}catch{}var Fh=()=>{try{return localStorage.setItem("sh-diary",JSON.stringify(Er)),!0}catch{return!1}};function j0({showToast:i}){let t=(F=>document.getElementById(F))("diary");t.innerHTML=`
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
    </div></div>`;let n=t.querySelector(".dpage"),s=t.querySelector(".dsel"),r=t.querySelector(".dinput"),a=r.querySelector("input"),o=t.querySelector(".dtabs"),l=t.querySelector(".dlist"),c=t.querySelector(".dfile"),h=t.querySelector(".dcrop"),u=h.querySelector(".dview"),f=u.querySelector("img"),d=h.querySelector(".dzoom"),g="stk",_=null,p=null,m=null,M=()=>Er.pages[Er.page];function v(){t.querySelector(".pg").textContent=`${Er.page+1} / ${Oh}`;let F=n.clientWidth;n.innerHTML=M().map((B,$)=>{let ee=`left:${B.x*100}%;top:${B.y*100}%;transform:translate(-50%,-50%) rotate(${B.r}deg)`;if(B.t==="x")return`<div class="de dt ${p===$?"on":""}" data-i="${$}" style="${ee};color:${B.color};font-size:${B.s*F}px;max-width:${.84*F}px">${B.text.replace(/[<&]/g,V=>V==="<"?"&lt;":"&amp;")}</div>`;let Z=B.t==="i"?B.src:B.t==="s"?Ei(...B.k.split(":").map((V,ne)=>ne?+V:V)):Dd(B.k);return`<img class="de${B.t==="i"?" dph":""} ${p===$?"on":""}" data-i="${$}" src="${Z}" style="${ee};width:${B.s*F}px" draggable="false" alt="">`}).join(""),s.hidden=p===null}function y(){let F=Object.keys(un).filter($=>un[$].ink&&Uh($)),B=Object.keys(un).filter($=>un[$].tape&&Uh($));if(!_&&F.length&&(_=F[0]),o.innerHTML=[["stk","\u{1F31F} \uC2A4\uD2F0\uCEE4"],["photo","\u{1F4F7} \uC0AC\uC9C4"],["pen","\u270F\uFE0F \uBCFC\uD39C"],["tape","\u{1F380} \uD14C\uC774\uD504"]].map(([$,ee])=>`<button class="${g===$?"on":""}" data-tab="${$}">${ee}</button>`).join(""),g==="stk"){let $=Object.entries(Xn.stickers).filter(([,ee])=>ee>0);l.innerHTML=$.length?$.map(([ee,Z])=>{let[V,ne]=ee.split(":");return`<button class="dst" data-stk="${ee}"><img src="${Ei(V,+ne)}" alt=""><i>${Z}</i></button>`}).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uC2A4\uD2F0\uCEE4\uB97C \uC0AC \uC624\uBA74 \uC5EC\uAE30\uC11C \uB5BC\uC5B4 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F31F}</p>"}else g==="photo"?l.innerHTML='<button class="dpen" data-pick="1">\u{1F5BC}\uFE0F \uB0B4 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uC0AC\uC9C4 \uACE0\uB974\uAE30</button><p class="tip">\uACE0\uB978 \uC0AC\uC9C4\uC740 \uC798\uB77C\uC11C \uD06C\uAE30\uB97C \uB9DE\uCD98 \uB4A4 \uBD99\uC5EC\uC694</p>':g==="pen"?l.innerHTML=F.length?F.map($=>`<button class="dpen ${_===$?"on":""}" data-pen="${$}"><span style="background:${un[$].ink}"></span>${un[$].name}</button>`).join("")+'<p class="tip">\uB2E4\uC774\uC5B4\uB9AC \uBE48 \uACF3\uC744 \uD1A1 \uB204\uB974\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694</p>':"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uC190\uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694 \u270F\uFE0F</p>":l.innerHTML=B.length?B.map($=>`<button class="dtape" data-tape="${un[$].tape}"><img src="${Dd(un[$].tape)}" alt=""></button>`).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504\uB97C \uC0AC \uC624\uBA74 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F380}</p>"}let T=F=>{M().push(F),p=M().length-1,en.sticker(),Fh()||(M().pop(),p=null,i("\uB2E4\uC774\uC5B4\uB9AC \uC800\uC7A5 \uACF5\uAC04\uC774 \uAF49 \uCC3C\uC5B4\uC694. \uC0AC\uC9C4\uC744 \uBA87 \uC7A5 \uB5BC\uACE0 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694")),v()},E=null,x="1",b={s:1,x:0,y:0,base:1},P=()=>{let F=Math.min(300,innerWidth-80),B=x==="circle"?1:+x;return[F,F/B]};function S(){let[F,B]=P();u.style.width=F+"px",u.style.height=B+"px",u.classList.toggle("circle",x==="circle"),b.base=Math.max(F/E.width,B/E.height),R(),I()}function R(){let[F,B]=P(),$=b.base*b.s,ee=E.width*$,Z=E.height*$;b.x=Math.min(0,Math.max(F-ee,b.x)),b.y=Math.min(0,Math.max(B-Z,b.y))}function I(){let F=b.base*b.s;f.style.width=E.width*F+"px",f.style.transform=`translate(${b.x}px,${b.y}px)`}c.addEventListener("change",async()=>{let F=c.files&&c.files[0];if(F)try{let B=URL.createObjectURL(F),$=new Image;$.src=B,await $.decode(),E=$,f.src=B,x="1",b={s:1,x:0,y:0,base:1},d.value=1,h.querySelectorAll("[data-shape]").forEach(ne=>ne.classList.toggle("on",ne.dataset.shape===x)),h.hidden=!1,S();let[ee,Z]=P(),V=b.base;b.x=(ee-E.width*V)/2,b.y=(Z-E.height*V)/2,R(),I()}catch{i("\uC774 \uC0AC\uC9C4\uC740 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uB978 \uC0AC\uC9C4\uC744 \uACE8\uB77C \uC8FC\uC138\uC694")}}),d.addEventListener("input",()=>{let[F,B]=P(),$=b.base*b.s;b.s=+d.value;let ee=b.base*b.s;b.x=F/2-(F/2-b.x)*ee/$,b.y=B/2-(B/2-b.y)*ee/$,R(),I()});let z=null;u.addEventListener("pointerdown",F=>{z={id:F.pointerId,x:F.clientX-b.x,y:F.clientY-b.y},u.setPointerCapture(F.pointerId),F.preventDefault()}),u.addEventListener("pointermove",F=>{!z||F.pointerId!==z.id||(b.x=F.clientX-z.x,b.y=F.clientY-z.y,R(),I())}),u.addEventListener("pointerup",()=>z=null),u.addEventListener("pointercancel",()=>z=null),u.addEventListener("wheel",F=>{F.preventDefault(),d.value=Math.min(4,Math.max(1,+d.value-F.deltaY*.002)),d.dispatchEvent(new Event("input"))},{passive:!1}),h.addEventListener("click",F=>{let B=F.target.closest("button");if(B){if(B.dataset.shape){x=B.dataset.shape,h.querySelectorAll("[data-shape]").forEach($=>$.classList.toggle("on",$===B)),S();return}if(B.dataset.crop==="cancel"){h.hidden=!0;return}if(B.dataset.crop==="ok"){let[$,ee]=P(),Z=b.base*b.s,V=x==="circle",ne=V?420:560,q=Math.round(ne*ee/$),J=Math.round(ne*.05),W=document.createElement("canvas");W.width=ne+J*2,W.height=q+J*2;let Q=W.getContext("2d");V?(Q.fillStyle="#fff",Q.beginPath(),Q.arc(W.width/2,W.height/2,W.width/2,0,7),Q.fill(),Q.save(),Q.beginPath(),Q.arc(W.width/2,W.height/2,ne/2,0,7),Q.clip()):(Q.fillStyle="#fff",Q.fillRect(0,0,W.width,W.height)),Q.drawImage(E,-b.x/Z,-b.y/Z,$/Z,ee/Z,J,J,ne,q),V&&Q.restore();let oe=V?W.toDataURL("image/png"):W.toDataURL("image/jpeg",.84);h.hidden=!0,T({t:"i",src:oe,x:.5,y:.45,s:x==="0.75"?.4:.48,r:Math.round((Math.random()-.5)*10)})}}}),o.addEventListener("click",F=>{let B=F.target.closest("[data-tab]");B&&(g=B.dataset.tab,r.hidden=!0,y())}),l.addEventListener("click",F=>{let B=F.target.closest("button");if(B)if(B.dataset.stk){let $=B.dataset.stk;if(!(Xn.stickers[$]>0))return;Xn.stickers[$]--,Nh(),T({t:"s",k:$,x:.35+Math.random()*.3,y:.3+Math.random()*.4,s:.26,r:Math.round((Math.random()-.5)*24)}),y()}else B.dataset.pick?(c.value="",c.click()):B.dataset.pen?(_=B.dataset.pen,y()):B.dataset.tape&&T({t:"p",k:B.dataset.tape,x:.5,y:.2+Math.random()*.6,s:.55,r:Math.round((Math.random()-.5)*16)})});let L=null;n.addEventListener("pointerdown",F=>{let B=F.target.closest(".de"),$=n.getBoundingClientRect();if(B){p=+B.dataset.i;let ee=M()[p];L={id:F.pointerId,ox:ee.x-(F.clientX-$.left)/$.width,oy:ee.y-(F.clientY-$.top)/$.height,node:B},n.setPointerCapture(F.pointerId),s.hidden=!1,n.querySelectorAll(".de.on").forEach(Z=>Z!==B&&Z.classList.remove("on")),B.classList.add("on"),F.preventDefault();return}p=null,v(),g==="pen"&&_?(m={x:(F.clientX-$.left)/$.width,y:(F.clientY-$.top)/$.height},r.hidden=!1,a.value="",setTimeout(()=>a.focus(),30)):g==="pen"&&i("\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694")}),n.addEventListener("pointermove",F=>{if(!L||F.pointerId!==L.id)return;let B=n.getBoundingClientRect(),$=M()[p];$.x=Math.min(1,Math.max(0,(F.clientX-B.left)/B.width+L.ox)),$.y=Math.min(1,Math.max(0,(F.clientY-B.top)/B.height+L.oy)),L.node.style.left=$.x*100+"%",L.node.style.top=$.y*100+"%"});let w=F=>{L&&F.pointerId===L.id&&(L=null,Fh())};n.addEventListener("pointerup",w),n.addEventListener("pointercancel",w),r.addEventListener("submit",F=>{F.preventDefault();let B=a.value.trim();r.hidden=!0,a.blur(),!(!B||!m)&&T({t:"x",text:B,color:un[_].ink,x:m.x,y:m.y,s:.07,r:Math.round((Math.random()-.5)*8)})}),t.addEventListener("click",async F=>{let B=F.target.closest("[data-act]");if(!B)return;let $=B.dataset.act,ee=p!==null?M()[p]:null;if($==="close")return k();if($==="prev"||$==="next")return Er.page=(Er.page+($==="next"?1:Oh-1))%Oh,p=null,r.hidden=!0,Fh(),v();if($==="save")return D();ee&&($==="rotl"?ee.r-=12:$==="rotr"?ee.r+=12:$==="big"?ee.s=Math.min(ee.t==="x"?.2:.9,ee.s*1.18):$==="small"?ee.s=Math.max(ee.t==="x"?.03:.08,ee.s/1.18):$==="del"&&(M().splice(p,1),ee.t==="s"&&(Xn.stickers[ee.k]=(Xn.stickers[ee.k]||0)+1,Nh(),y()),p=null),Fh(),v())});function U(F,B,$){F.fillStyle="#fffdf6",F.fillRect(0,0,B,$),F.fillStyle="#e9dcef";for(let ee=60;ee<$;ee+=36)for(let Z=90;Z<B-20;Z+=36)F.beginPath(),F.arc(Z,ee,2,0,7),F.fill();F.fillStyle="#f6e3ec",F.fillRect(0,0,54,$);for(let ee=40;ee<$;ee+=60)F.fillStyle="#d8cde6",F.beginPath(),F.arc(27,ee,9,0,7),F.fill()}async function D(){try{await document.fonts.load(`40px ${Ld}`)}catch{}let F=900,B=1200,$=document.createElement("canvas");$.width=F,$.height=B;let ee=$.getContext("2d");U(ee,F,B);for(let V of M()){if(ee.save(),ee.translate(V.x*F,V.y*B),ee.rotate(V.r*Math.PI/180),V.t==="x"){ee.font=`${V.s*F}px ${Ld}`,ee.fillStyle=V.color,ee.textAlign="center",ee.textBaseline="middle";let ne=[],q="";for(let W of V.text.split(/(\s+)/))q&&ee.measureText(q+W).width>F*.84?(ne.push(q.trim()),q=W.trimStart()):q+=W;ne.push(q.trim());let J=V.s*F*1.05;ne.forEach((W,Q)=>ee.fillText(W,0,(Q-(ne.length-1)/2)*J))}else{let ne=new Image;ne.src=V.t==="i"?V.src:V.t==="s"?Ei(...V.k.split(":").map((W,Q)=>Q?+W:W)):Dd(V.k),await ne.decode().catch(()=>{});let q=V.s*F,J=q*(ne.naturalHeight/ne.naturalWidth||1);ee.drawImage(ne,-q/2,-J/2,q,J)}ee.restore()}ee.font=`28px ${Ld}`,ee.fillStyle="#b9a6cf",ee.textAlign="right",ee.fillText(`\uC218\uC787\uD574\uD53C \uB2E4\uC774\uC5B4\uB9AC \xB7 ${ba()}`,F-30,B-30);let Z=await Sa($,`suithappy-diary-${Date.now()}.jpg`);i(Z==="downloaded"?"\u{1F4BE} \uB2E4\uC774\uC5B4\uB9AC\uB97C \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5\uD588\uC5B4\uC694":Z==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}function O(){if(!Uh("diary"))return i("\u{1F4D2} \uC18C\uD488\uC0F5\uC5D0\uC11C \uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9\uC744 \uC0AC \uC624\uBA74 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694");t.hidden=!1,p=null,r.hidden=!0,y(),requestAnimationFrame(v)}function k(){t.hidden=!0,r.hidden=!0}return addEventListener("resize",()=>{t.hidden||v()}),addEventListener("keydown",F=>{F.code==="Escape"&&!t.hidden&&r.hidden&&k()}),{open:O,close:k,get isOpen(){return!t.hidden}}}var Z0={v:{label:"\u270C\uFE0F \uBE0C\uC774",arm:[-2.75,.32],tilt:.12},heart:{label:"\u{1FAF6} \uD558\uD2B8",arm:[-3.05,-.55],tilt:-.1},chin:{label:"\u{1F338} \uAF43\uBC1B\uCE68",arm:[-2,-.62],tilt:.2}};function J0({hero:i,mirrors:e,camera:t,player:n,showToast:s,renderNow:r}){let a=D=>document.getElementById(D),o=a("photo-btn"),l=a("photo-bar"),c=a("shot");l.innerHTML=`<div class="poses">${Object.entries(Z0).map(([D,O])=>`<button data-pose="${D}">${O.label}</button>`).join("")}</div>
    <div class="prow"><button class="pclose" data-act="exit">\uB2EB\uAE30</button><button class="shutter" data-act="shoot" aria-label="\uCC0D\uAE30"></button><span class="ptip">\uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uCC30\uCE75!</span></div>`;let h=D=>new Jt({color:D,roughness:.4}),u=new nt,f=new Je(new Gt(.07,.13,.014),h("#9f8af0"));u.add(f);let d=new Je(new lt(.006,.006,.004,10),h("#3b2f4a"));d.rotation.x=Math.PI/2,d.position.set(-.018,.048,.008),u.add(d),u.position.set(0,-.27,.035),u.rotation.x=Math.PI/2;let g=new nt;g.position.set(.012,-.27,0);let _=h("#ffe3d0"),p=new nt;g.add(p);for(let D of[-1,1]){let O=new Je(new lo(.011,.05,3,6),_);O.position.set(.012*D,-.04,0),O.rotation.z=.28*D,p.add(O)}let m=new nt,M=new Us;M.moveTo(0,-.05),M.bezierCurveTo(-.07,0,-.04,.05,0,.025),M.bezierCurveTo(.04,.05,.07,0,0,-.05),m.add(new Je(new cr(M,{depth:.015,bevelEnabled:!1}),h("#ff6fa5"))),m.position.set(0,1.38,.05),m.scale.setScalar(1.8);let v=new nt;for(let D=0;D<5;D++){let O=new Je(new nn(.03,8,6),h(D%2?"#ffd1e3":"#fff3b0"));O.position.set(Math.cos(D*1.256)*.05,0,Math.sin(D*1.256)*.05),v.add(O)}v.position.set(0,.92,.2);let y=!1,T=null,E="v",x=!1,b=0,P=0,S=new H;function R(){for(let D of e){let O=D.c.x-n.x,k=n.z-D.c.z;if(O>.6&&O<2.6&&Math.abs(k)<.85)return D}return null}function I(D){E=D,l.querySelectorAll("[data-pose]").forEach(O=>O.classList.toggle("on",O.dataset.pose===D)),p.visible=D==="v",m.visible=D==="heart",v.visible=D==="chin"}function z(){if(T=R(),!!T){y=!0,n.face=Math.PI/2,P=t.fov,t.fov=64,t.updateProjectionMatrix();try{document.fonts.load('40px "Gamja Flower"')}catch{}i.arms[0].add(u),i.arms[1].add(g),i.root.add(m),i.root.add(v),I(E),l.hidden=!1,o.hidden=!0,document.body.classList.add("photo"),s("\u{1F4F8} \uAC70\uC6B8\uC0F7 \uBAA8\uB4DC! \uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uB3D9\uADF8\uB780 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC694")}}function L(){y=!1,l.hidden=!0,document.body.classList.remove("photo"),P&&(t.fov=P,t.updateProjectionMatrix()),i.arms[0].remove(u),i.arms[1].remove(g),i.root.remove(m),i.root.remove(v),i.head.rotation.z=0}l.addEventListener("click",D=>{let O=D.target.closest("button");O&&(O.dataset.pose?I(O.dataset.pose):O.dataset.act==="exit"?L():O.dataset.act==="shoot"&&(en.shutter(),b=1,U.applyPose(performance.now()/1e3),i.root.updateMatrixWorld(!0),U.camera(),x=!0,U.afterRender(r())))}),o.addEventListener("click",D=>{z(),D.currentTarget.blur()});let w=null;c.addEventListener("click",async D=>{let O=D.target.closest("button");if(O&&(O.dataset.act==="again"&&(c.hidden=!0),O.dataset.act==="save"&&w)){let k=await Sa(w,`suithappy-mirror-${Date.now()}.jpg`);s(k==="downloaded"?"\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":k==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}}),addEventListener("keydown",D=>{D.code==="Escape"&&y&&(c.hidden?L():c.hidden=!0)});let U={get active(){return y},update(D){o.hidden=y||!!D||!R()},applyPose(D){if(!y)return;let O=Z0[E];i.arms[0].rotation.x=-1.95,i.arms[0].rotation.z=-.55,i.arms[1].rotation.x=O.arm[0],i.arms[1].rotation.z=O.arm[1],i.head.rotation.z=O.tilt,i.head.rotation.y=0,m.rotation.y=Math.sin(D*2)*.3,m.position.y=1.38+Math.sin(D*3)*.02},camera(){if(!y)return!1;let D=n.face,O=Math.sin(D),k=Math.cos(D),F=k,B=-O;return t.position.set(n.x+O*.42-F*.1,.78,n.z+k*.42-B*.1),t.lookAt(T.c.x,.72,n.z*.7+T.c.z*.3),!0},afterRender(D){let O=document.getElementById("flash");if(b>0&&(b=Math.max(0,b-.08),O.style.opacity=b),!x)return;x=!1;let k=900,F=1200,B=document.createElement("canvas");B.width=k,B.height=F;let $=B.getContext("2d"),ee=D.width,Z=D.height,V=3/4,ne=ee,q=ee/V;q>Z&&(q=Z,ne=Z*V),$.fillStyle="#fff",$.fillRect(0,0,k,F),$.drawImage(D,(ee-ne)/2,(Z-q)/2,ne,q,30,30,k-60,F-150),$.fillStyle="#ff8fb7",$.font='700 40px "Gamja Flower", cursive',$.textAlign="left",$.fillText("Soo it Happy \u{1F353} \uC218\uC9D1\uC218\uC9D1",40,F-62),$.fillStyle="#b9a6cf",$.font='30px "Gamja Flower", cursive',$.textAlign="right",$.fillText(ba(),k-40,F-62),w=B,c.innerHTML=`<div class="shotcard"><img src="${B.toDataURL("image/jpeg",.85)}" alt="\uCC0D\uC740 \uAC70\uC6B8\uC0F7"><div class="srow"><button data-act="again">\uB2E4\uC2DC \uCC0D\uAE30</button><button class="go" data-act="save">\u{1F4F2} \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5</button></div></div>`,c.hidden=!1}};return U}var Q0=3e3,eg=500,tg=1e3,Ab={grill:.4,parfait:1.6,order:.9,rhythm:.22,serving:.8},sg={mjp:"\uC774\uAE30\uBA74 1,500 \xB7 \uC838\uB3C4 200",spot:"\uCC3E\uC744 \uB54C\uB9C8\uB2E4 100 + \uB2E4 \uCC3E\uC73C\uBA74 \uCD5C\uB300 300",treasure:"\uBCC4\uC0AC\uD0D5 1\uAC1C\uB2F9 100 + \uB2E4 \uCC3E\uC73C\uBA74 \uBCF4\uB108\uC2A4",grill:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",parfait:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",order:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",rhythm:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",serving:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000"},ng="sh-coins",ig="sh-coins-daily",Gs=i=>i.toLocaleString("ko-KR");function rg({showToast:i}){let e=!1,t=Q0;try{let f=localStorage.getItem(ng);f===null?e=!0:t=Math.max(0,+f||0)}catch{e=!0}let n=document.getElementById("coin-pill"),s=()=>{try{localStorage.setItem(ng,t)}catch{}};function r(f){n&&(n.querySelector("b").textContent=Gs(t),f&&(n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")))}function a(f){if(!n)return;let d=n.getBoundingClientRect(),g=document.createElement("div");g.className="coin-float "+(f>0?"up":"down"),g.textContent=`${f>0?"+":"\u2212"}${Gs(Math.abs(f))}`,Object.assign(g.style,{left:d.left+d.width/2+"px",top:d.bottom+4+"px"}),document.body.appendChild(g),setTimeout(()=>g.remove(),1300)}function o(f){return f=Math.round(f),f?(t=Math.max(0,t+f),s(),r(!0),a(f),f>0&&en.coinUp(),f):0}let l=()=>{let f=new Date;return`${f.getFullYear()}-${f.getMonth()+1}-${f.getDate()}`};function c(f=eg){if(t<f){let d=null;try{d=localStorage.getItem(ig)}catch{}if(d!==l()){try{localStorage.setItem(ig,l())}catch{}o(tg),i(`\u{1FA99} \uCF54\uC778\uC774 \uBD80\uC871\uD574\uC11C \uC624\uB298\uC758 \uC751\uC6D0 \uCF54\uC778 ${Gs(tg)}\uC744 \uB4DC\uB838\uC5B4\uC694! \uD654\uC774\uD305 \u{1F4AA}`)}}return t<f?(i(`\u{1FA99} \uCF54\uC778\uC774 \uBD80\uC871\uD574\uC694 (\uCC38\uAC00\uBE44 ${Gs(f)}) \xB7 \uB0B4\uC77C \uC751\uC6D0 \uCF54\uC778\uC744 \uB610 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694`),r(!0),en.denied(),!1):(o(-f),en.coinDrop(),!0)}function h(f,d=""){return t<f?(i(`\u{1FA99} \uCF54\uC778\uC774 ${Gs(f-t)} \uBAA8\uC790\uB77C\uC694${d?` (${d})`:""} \xB7 \uAC8C\uC784\uD558\uACE0 \uCF54\uC778\uC744 \uBAA8\uC544 \uC624\uC138\uC694! \u{1F3AE}`),r(!0),en.denied(),!1):(o(-f),en.kaching(),!0)}function u(f,d,g=!1){let _=Ab[f]||.5;return Rb(Math.round(d*_/10)*10,g?0:100,2e3)}return r(!1),{get balance(){return t},add:o,pay:c,spend:h,fromScore:u,fmt:Gs,welcome(){e&&(e=!1,s(),r(!0),setTimeout(()=>i(`\u{1FA99} \uCCAB \uBC29\uBB38 \uC120\uBB3C! \uAE30\uBCF8 \uCF54\uC778 ${Gs(Q0)}\uC744 \uB4DC\uB824\uC694 \xB7 \uAC8C\uC784 \uD55C \uD310 \uCC38\uAC00\uBE44 ${Gs(eg)}`),3800))}}}function Rb(i,e,t){return Math.max(e,Math.min(t,i))}var Ne=360,fn=560,In=(i,e)=>i+Math.random()*(e-i),Cb=i=>i[Math.floor(Math.random()*i.length)],Bh=(i,e,t)=>Math.max(e,Math.min(t,i)),di=(i,e,t)=>i+(e-i)*t,pi=(i,e,t)=>{let n=parseInt(i.slice(1),16),s=parseInt(e.slice(1),16),r=a=>Math.round(di(n>>a&255,s>>a&255,Bh(t,0,1)));return`rgb(${r(16)},${r(8)},${r(0)})`};var Ln={good:()=>{vt(880,.1),vt(1320,.12,"triangle",.1,.06)},bad:()=>vt(180,.2,"sawtooth",.08),pop:()=>vt(660,.08,"sine",.12),win:()=>[523,659,784,1047].forEach((i,e)=>vt(i,.18,"triangle",.12,e*.09))};function It(i,e,t,n,s,r){i.beginPath(),i.roundRect(e,t,n,s,r)}function gs(i,e,t,n,s){i.font=`${s}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,t,n)}function Kt(i,e,t,n,s=16,r="#4a3f66",a=800,o="center"){i.font=`${a} ${s}px "Malgun Gothic","Apple SD Gothic Neo",sans-serif`,i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",i.fillText(e,t,n)}function al(i,e,t){for(let n of i)n.t+=t,n.y-=40*t,e.globalAlpha=Bh(1-n.t/.9,0,1),Kt(e,n.s,n.x,n.y,n.size||18,n.c||"#e0457b",900);e.globalAlpha=1;for(let n=i.length-1;n>=0;n--)i[n].t>.9&&i.splice(n,1)}function Nd(i,e,t,n=Ne/2,s=112){let r=t*22+14;It(i,n-r/2,s-13,r,26,13),i.fillStyle="#ffffffd0",i.fill();for(let a=0;a<t;a++)i.globalAlpha=a<e?1:.28,gs(i,a<e?"\u2764\uFE0F":"\u{1F90D}",n-r/2+18+a*22,s+1,16);i.globalAlpha=1}function kh(i,e,t){It(i,10,10,110,34,17),i.fillStyle="#ffffffcc",i.fill(),Kt(i,`\u23F1 ${Math.max(0,Math.ceil(e))}\uCD08`,65,27,15),It(i,Ne-140,10,130,34,17),i.fillStyle="#ffffffcc",i.fill(),Kt(i,`\uC810\uC218 ${t}`,Ne-75,27,15,"#e0457b")}function Pb(){let i=[],e=[],t=[],n=30,s=0,r=0,a=0,o=0,l=0,c=3,h=!1,u=()=>{c=Math.max(0,c-1),c||(h=!0)},f=[{y:236,s:.84},{y:322,s:.97},{y:420,s:1.1}],d=[.68,.82],g=[.58,.95],_=1.25,p=S=>({side:0,done:[0,0],marks:[0,0],rate:In(.3,.46)*(1+a*.07),ph:Math.random()*6,flips:0,slide:0,lift:0,grades:[],wait:S,dead:0}),m=[p(0),p(2.2),p(4.4)],M=S=>S<.58?pi("#fbf6ec","#f3d9a8",S/.58):S<.82?pi("#f3d9a8","#e49a4c",(S-.58)/.24):S<.95?pi("#e49a4c","#a9572a",(S-.82)/.13):pi("#a9572a","#2a201c",(S-.95)/.3);function v(S){let R=m[S];if(!R||R.slide||R.wait>0||R.dead)return;let I=R.done[R.side],z=f[S],L;if(I<g[0])L=["\uB35C \uC775\uC5C8\uC5B4\uC694 \u{1F62F} \u{1F494}",-10,"#8a7bb8"],Ln.bad(),o=0,u();else if(I>=d[0]&&I<=d[1]){o++,L=[o>1?`PERFECT \xD7${o}!`:"PERFECT \uB178\uB987\uB178\uB987!",100+(o-1)*20,"#e0457b"],Ln.good();for(let w=0;w<10;w++)t.push({x:Ne/2+In(-90,90)*z.s,y:z.y,vx:In(-60,60),vy:In(-160,-60),t:0})}else I<=g[1]?(L=["\uC88B\uC544\uC694 \u{1F44D}",50,"#e39b4f"],Ln.pop(),o=0):(L=["\uC557 \uD0D4\uC5B4\uC694\u2026 \u{1F525} \u{1F494}",-30,"#5a4a44"],Ln.bad(),o=0,u());R.grades.push(L[1]),s=Math.max(0,s+L[1]),i.push({s:L[0],x:Ne/2,y:z.y-46*z.s,t:0,c:L[2]}),R.marks[R.side]=1,R.flips++,R.lift=1,R.flips>=2?(R.slide=.001,r++,a++,R.grades.every(w=>w>=100)&&(s+=80,i.push({s:"\uC644\uBCBD\uD55C \uB5A1\uAF2C\uCE58! +80",x:Ne/2,y:z.y-20,t:0,size:19}),Ln.win())):R.side=1}let y=S=>{let R=0,I=1e9;return f.forEach((z,L)=>{let w=Math.abs(z.y-S);w<I&&(I=w,R=L)}),R},T=190,E=470,x=S=>di(78,8,(S-T)/(E-T)),b=S=>Ne-x(S);function P(S,R,I,z,L){let w=S.createLinearGradient(0,R,0,R+I);return w.addColorStop(0,pi("#ffffff","#fbf6ec",.5)),w.addColorStop(.18,M(z)),w.addColorStop(.62,M((z+L)/2)),w.addColorStop(1,M(L)),w}return{title:"\u{1F361} \uB5A1\uAF2C\uCE58 \uAD7D\uAE30",desc:"\uC22F\uBD88 \uC704 <b>\uAF2C\uCE58 3\uAC1C</b>\uAC00 \uB3D9\uC2DC\uC5D0 \uC775\uC5B4\uC694!<br>\uB5A1\uC774 <b>\uB178\uB987\uB178\uB987</b>(\uAC8C\uC774\uC9C0 \uCD08\uB85D)\uD560 \uB54C \uADF8 \uAF2C\uCE58\uB97C \uB20C\uB7EC \uB4A4\uC9D1\uC5B4\uC694.<br>\uAF2C\uCE58\uB9C8\uB2E4 \uC775\uB294 \uC18D\uB3C4\uAC00 \uB2EC\uB77C\uC694 \xB7 \uC624\uB798 \uB450\uBA74 \uC22F\uC774 \uB3FC\uC694 \u{1F525}<br>\uC5F0\uC18D PERFECT\uBA74 \uCF64\uBCF4 \uBCF4\uB108\uC2A4! (\uD0A4\uBCF4\uB4DC 1\xB72\xB73)<br>\u2764\uFE0F <b>3\uBC88 \uC2E4\uC218</b>(\uB35C \uC775\uD798\xB7\uD0DC\uC6C0\xB7\uC22F)\uD558\uBA74 \uAC8C\uC784 \uC624\uBC84!",buttons:[{label:"\u2460 \uB4A4\uCABD",act:()=>v(0)},{label:"\u2461 \uAC00\uC6B4\uB370",act:()=>v(1)},{label:"\u2462 \uC55E\uCABD",act:()=>v(2)}],key(S){(S==="Digit1"||S==="Numpad1")&&v(0),(S==="Digit2"||S==="Numpad2")&&v(1),(S==="Digit3"||S==="Numpad3")&&v(2)},tapAt(S,R){R>T-50&&R<E+20&&v(y(R))},update(S){return n-=S,m.forEach((R,I)=>{if(R.wait>0){R.wait-=S;return}if(R.slide){R.slide+=S*1.8,R.slide>1&&(m[I]=p(In(.4,1.1)));return}if(R.dead){R.dead+=S,R.dead>1.2&&(m[I]=p(In(.5,1)));return}R.ph+=S;let z=1+Math.sin(R.ph*1.7)*.22+Math.sin(R.ph*4.3+I)*.1;R.done[R.side]=Math.min(1.5,R.done[R.side]+R.rate*z*S),R.done[R.side]>.9&&Math.random()<S*6&&e.push({x:Ne/2+In(-100,100)*f[I].s,y:f[I].y-10,t:0,r:In(6,12),dark:R.done[R.side]>1}),R.done[R.side]>=_&&(R.dead=.001,l++,o=0,u(),s=Math.max(0,s-50),Ln.bad(),i.push({s:"\uC22F\uC774 \uB410\uC5B4\uC694\u2026 -50 \u{1F494}",x:Ne/2,y:f[I].y-40,t:0,c:"#5a4a44"})),R.lift=Math.max(0,R.lift-S*3.5)}),Math.random()<S*2&&e.push({x:In(40,Ne-40),y:450,t:0,r:In(5,9),dark:!1}),h?{score:s,over:!0,msg:`\uC2E4\uC218 3\uBC88! \uB5A1\uAF2C\uCE58 ${r}\uAC1C\uAE4C\uC9C0 \uAD6C\uC6E0\uC5B4\uC694${l?` (\uC22F ${l}\uAC1C \u{1F525})`:""}`}:n<=0?{score:s,msg:`\uB5A1\uAF2C\uCE58 ${r}\uAC1C \uC644\uC131!${l?` (\uC22F ${l}\uAC1C \u{1F525})`:""}`}:null},draw(S,R,I){let z=S.createLinearGradient(0,0,0,fn);z.addColorStop(0,"#ffe9dc"),z.addColorStop(.32,"#ffd7c4"),z.addColorStop(1,"#c98f7a"),S.fillStyle=z,S.fillRect(0,0,Ne,fn);for(let w=0;w<6;w++)S.fillStyle=w%2?"#ff8fb0":"#fff",S.beginPath(),S.moveTo(w*60,52),S.lineTo(w*60+60,52),S.lineTo(w*60+60,78),S.quadraticCurveTo(w*60+30,96,w*60,78),S.fill();kh(S,n,s),o>1&&(It(S,Ne/2-52,12,104,30,15),S.fillStyle="#e0457b",S.fill(),Kt(S,`\u{1F525} \uCF64\uBCF4 ${o}`,Ne/2,27,14,"#fff",900)),Nd(S,c,3,Ne/2,122),S.fillStyle="#3a2b2e",S.beginPath(),S.moveTo(x(T)-10,T-14),S.lineTo(b(T)+10,T-14),S.lineTo(b(E)+12,E+8),S.lineTo(x(E)-12,E+8),S.fill();let L=S.createLinearGradient(0,E,0,E+60);L.addColorStop(0,"#6d5a5e"),L.addColorStop(1,"#2d2224"),S.fillStyle=L,It(S,x(E)-12,E+6,b(E)-x(E)+24,54,8),S.fill(),S.fillStyle="#ffffff22",S.fillRect(x(E)-4,E+14,b(E)-x(E)+8,3);for(let w=0;w<26;w++){let U=T+12+w*37%250,D=di(x(U)+14,b(U)-14,w*53%100/100),O=di(8,15,(U-T)/(E-T)),k=.55+Math.sin(I*3+w*1.7)*.25,F=S.createRadialGradient(D,U,0,D,U,O*1.8);F.addColorStop(0,`rgba(255,${150+60*k|0},70,${k})`),F.addColorStop(1,"rgba(255,90,40,0)"),S.fillStyle=F,S.beginPath(),S.arc(D,U,O*1.8,0,7),S.fill()}for(let w=0;w<=14;w++){let U=w/14,D=di(T,E,U*(.75+.25*U)),O=di(2.2,5,U);S.strokeStyle="rgba(0,0,0,0.45)",S.lineWidth=O,S.beginPath(),S.moveTo(x(D),D+O*.6),S.lineTo(b(D),D+O*.6),S.stroke(),S.strokeStyle="#9d9298",S.lineWidth=O,S.beginPath(),S.moveTo(x(D),D),S.lineTo(b(D),D),S.stroke(),S.strokeStyle="#efe6ea",S.lineWidth=O*.3,S.beginPath(),S.moveTo(x(D)+4,D-O*.22),S.lineTo(b(D)-4,D-O*.22),S.stroke()}S.strokeStyle="#5b4a4f",S.lineWidth=7,S.beginPath(),S.moveTo(x(T)-6,T-8),S.lineTo(b(T)+6,T-8),S.lineTo(b(E)+8,E+4),S.lineTo(x(E)-8,E+4),S.closePath(),S.stroke(),m.forEach((w,U)=>{let D=f[U],O=D.s,k=w.slide?di(Ne/2,Ne+260,w.slide*w.slide):Ne/2;if(w.wait>0){Kt(S,"\u2026",Ne/2,D.y,16*O,"#ffffff88");return}let F=Math.sin(w.lift*Math.PI)*34*O,B=D.y-F-(w.dead?w.dead*30:0);S.globalAlpha=w.dead?Math.max(0,1-w.dead):1,S.fillStyle="rgba(0,0,0,0.35)",S.beginPath(),S.ellipse(k,D.y+16*O,125*O,9*O,0,0,7),S.fill(),S.strokeStyle="#e2bd86",S.lineWidth=6*O,S.lineCap="round",S.beginPath(),S.moveTo(k-160*O,B+4*O),S.lineTo(k+150*O,B+4*O),S.stroke(),S.fillStyle="#c99a5e",It(S,k-178*O,B-3*O,26*O,14*O,4),S.fill();let $=w.done[w.side],ee=w.dead?1.5:w.flips?w.done[0]:0,Z=w.dead?1.5:w.slide?w.done[1]:$;for(let V=0;V<4;V++){let ne=k-102*O+V*68*O,q=56*O,J=36*O,W=B-J/2;if(S.fillStyle=P(S,W,J,ee,Z),It(S,ne-q/2,W,q,J,14*O),S.fill(),w.marks[0]||w.slide){S.strokeStyle="rgba(70,35,20,0.55)",S.lineWidth=3*O;for(let Q=-1;Q<=1;Q++)S.beginPath(),S.moveTo(ne+Q*14*O-6*O,W+8*O),S.lineTo(ne+Q*14*O+6*O,W+J-8*O),S.stroke()}w.slide&&(S.fillStyle="rgba(210,50,40,0.85)",It(S,ne-q/2+3,W+3,q-6,J*.55,10*O),S.fill(),S.fillStyle="#ffffff99",It(S,ne-q/2+8*O,W+6*O,14*O,5*O,3),S.fill()),S.fillStyle="#ffffff66",It(S,ne-q/2+7*O,W+5*O,16*O,6*O,3),S.fill()}if(S.globalAlpha=1,!w.slide&&!w.dead){let V=k-70*O,ne=B-40*O,q=140*O,J=9*O;It(S,V-3,ne-3,q+6,J+6,7),S.fillStyle="#ffffffd9",S.fill();let W=(Q,oe,ie)=>{S.fillStyle=ie,S.fillRect(V+q*Q/_,ne,q*(oe-Q)/_,J)};W(0,g[0],"#eee4ea"),W(g[0],d[0],"#ffe08a"),W(d[0],d[1],"#7fdc7a"),W(d[1],g[1],"#ffe08a"),W(g[1],_,"#e6a0a0"),S.fillStyle="#4a3f66",S.fillRect(V+q*Math.min($,_)/_-2,ne-4,4,J+8),It(S,V-26*O,ne-4*O,18*O,18*O,9*O),S.fillStyle="#e0457b",S.fill(),Kt(S,`${U+1}`,V-17*O,ne+5*O,12*O,"#fff",900),Kt(S,w.side?"\uB4B7\uBA74":"\uC55E\uBA74",V+q+20*O,ne+J/2,11*O,"#fff",800)}});for(let w=e.length-1;w>=0;w--){let U=e[w];U.t+=R,U.y-=34*R,U.x+=Math.sin(U.t*3+w)*10*R,U.r+=10*R,S.globalAlpha=Math.max(0,.32*(1-U.t/1.6)),S.fillStyle=U.dark?"#5a4f52":"#ffffff",S.beginPath(),S.arc(U.x,U.y,U.r,0,7),S.fill(),U.t>1.6&&e.splice(w,1)}for(let w=t.length-1;w>=0;w--){let U=t[w];U.t+=R,U.x+=U.vx*R,U.y+=U.vy*R,U.vy+=300*R,S.globalAlpha=Math.max(0,1-U.t/.7),S.fillStyle="#ffd36b",S.beginPath(),S.arc(U.x,U.y,2.5,0,7),S.fill(),U.t>.7&&t.splice(w,1)}S.globalAlpha=1,Kt(S,"\uC775\uC740 \uAF2C\uCE58\uB97C \uC9C1\uC811 \uB204\uB974\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C \uB4A4\uC9D1\uC5B4\uC694",Ne/2,540,12,"#fff",700),al(i,S,R)}}}function Ib(){let i=[["\uC0DD\uD06C\uB9BC","#fffaf3"],["\uB538\uAE30","#f58aa6"],["\uCD08\uCF54","#8a5638"],["\uB179\uCC28","#a5d07f"],["\uCF58\uD50C\uB808\uC774\uD06C","#e9b860"],["\uBC14\uB2D0\uB77C","#fff0c2"],["\uBE14\uB8E8\uBCA0\uB9AC","#8f88dc"],["\uB9DD\uACE0","#ffc552"],["\uCFE0\uD0A4","#c49a6c"]],e=[],t=[],n=45,s=0,r=0,a=0,o=null,l=0,c=3,h=24,u=455,f=150,d=175,g=[{x:Ne/2,w:f,y:u,c:"#ffffff"}],_=null,p=()=>g[g.length-1];function m(){let y=p(),[T,E]=i[l%i.length];l++;let x=l%2?1:-1;_={name:T,c:E,w:y.w,x:Ne/2-x*d,dir:x,y:y.y-h,sp:120+g.length*9,drop:0}}m();function M(){if(!_||o)return;let y=p(),T=_.x-y.x,E=y.w-Math.abs(T);if(E<=3){if(t.push({x:_.x,y:_.y,w:_.w,c:_.c,vx:Math.sign(T||1)*70,vy:0,r:0}),r=0,Ln.bad(),c--,c<=0){_=null,o={t:0},e.push({s:"\uC557, \uBE57\uB098\uAC14\uC5B4\uC694! \u{1F635}",x:Ne/2,y:230,t:0,size:21});return}e.push({s:`\uBE57\uB098\uAC14\uC5B4\uC694! \u{1F494} \uB0A8\uC740 \uAE30\uD68C ${c}`,x:Ne/2,y:230,t:0,size:18,c:"#8a7bb8"}),l--,m();return}let x,b;if(Math.abs(T)<7){r++,x=y.x,b=Math.min(f,y.w+(r>=3?8:0));let P=25+r*5;s+=P,Ln.good(),e.push({s:r>1?`PERFECT \xD7${r} +${P}`:`PERFECT +${P}`,x:Ne/2,y:_.y-34+a,t:0,c:"#e0457b"})}else{r=0,b=E,x=y.x+T/2;let P=_.w-E,S=T>0?x+b/2+P/2:x-b/2-P/2;t.push({x:S,y:_.y,w:P,c:_.c,vx:Math.sign(T)*90,vy:-80,r:0}),s+=10,Ln.pop(),e.push({s:`${_.name} +10`,x:Ne/2,y:_.y-34+a,t:0,c:"#7a6c99",size:15})}g.push({x,w:b,y:_.y,c:_.c,wob:1}),m()}function v(y,T,E,x,b,P=h){let S=Math.max(4,x*.14),R=y.createLinearGradient(T-x/2,0,T+x/2,0);R.addColorStop(0,pi(b,"#000000",.28)),R.addColorStop(.3,b),R.addColorStop(.55,pi(b,"#ffffff",.18)),R.addColorStop(1,pi(b,"#000000",.32)),y.fillStyle=R,y.beginPath(),y.moveTo(T-x/2,E),y.lineTo(T-x/2,E+P),y.ellipse(T,E+P,x/2,S,0,Math.PI,0,!0),y.lineTo(T+x/2,E),y.closePath(),y.fill(),y.fillStyle=pi(b,"#ffffff",.3),y.beginPath(),y.ellipse(T,E,x/2,S,0,0,7),y.fill(),y.strokeStyle=pi(b,"#000000",.12),y.lineWidth=1,y.stroke()}return{title:"\u{1F368} \uD30C\uB974\uD398 \uD0D1 \uC313\uAE30",desc:"\uC88C\uC6B0\uB85C \uBBF8\uB044\uB7EC\uC9C0\uB294 \uCE35\uC744 <b>\uD0ED</b>\uD574\uC11C \uB0B4\uB824\uB193\uC544\uC694.<br>\uC090\uC838\uB098\uC628 \uBD80\uBD84\uC740 <b>\uC798\uB824\uC11C</b> \uC810\uC810 \uC881\uC544\uC838\uC694! \uB531 \uB9DE\uCD94\uBA74 PERFECT \u2728<br>3\uBC88 \uC5F0\uC18D PERFECT\uBA74 \uB2E4\uC2DC \uC870\uAE08 \uB113\uC5B4\uC838\uC694. <b>3\uBC88 \uBE57\uB098\uAC00\uBA74</b> \uAC8C\uC784 \uC624\uBC84 \u2764\uFE0F\xD73 (45\uCD08)",buttons:[{label:"\u2B07\uFE0F \uB0B4\uB824\uB193\uAE30",act:M}],key(y){(y==="Space"||y==="Enter")&&M()},tap:M,update(y){n-=y,_&&(_.x+=_.dir*_.sp*y,_.x>Ne/2+d&&(_.x=Ne/2+d,_.dir=-1),_.x<Ne/2-d&&(_.x=Ne/2-d,_.dir=1));for(let x of t)x.vy+=1100*y,x.x+=x.vx*y,x.y+=x.vy*y,x.r+=y*3*Math.sign(x.vx);for(let x=t.length-1;x>=0;x--)t[x].y>u+400&&t.splice(x,1);let T=Math.max(0,u-p().y-230);a=di(a,T,Math.min(1,y*4));for(let x of g)x.wob&&(x.wob=Math.max(0,x.wob-y*3));let E=g.length-1;return o&&(o.t+=y,o.t>1.3)?{score:s,over:!0,msg:`3\uBC88 \uBE57\uB098\uAC14\uC5B4\uC694! ${E}\uCE35 \uD30C\uB974\uD398\uB97C \uC313\uC558\uC5B4\uC694 \u{1F368}`}:n<=0?{score:s,msg:`${E}\uCE35 \uD30C\uB974\uD398 \uC644\uC131! \u{1F368}`}:null},draw(y,T,E){let x=y.createLinearGradient(0,0,0,fn);x.addColorStop(0,"#e8f6ff"),x.addColorStop(1,"#ffe8f1"),y.fillStyle=x,y.fillRect(0,0,Ne,fn),y.fillStyle="#ffffff70";for(let P=0;P<12;P++)y.beginPath(),y.arc(P*73%Ne,(P*131+a*.3)%fn,18,0,7),y.fill();y.save(),y.translate(0,a);let b=Ne/2;y.fillStyle="#ffffffb8",y.strokeStyle="#c9e6f2",y.lineWidth=3,y.beginPath(),y.moveTo(b-f/2,u),y.lineTo(b+f/2,u),y.lineTo(b+28,u+62),y.lineTo(b-28,u+62),y.closePath(),y.fill(),y.stroke(),It(y,b-8,u+60,16,26,4),y.fill(),y.stroke(),y.beginPath(),y.ellipse(b,u+88,44,9,0,0,7),y.fill(),y.stroke(),y.fillStyle="#ffffff80",y.fillRect(b-f/2+14,u+6,6,40),y.beginPath(),y.ellipse(b,u,f/2,f*.14,0,0,7),y.fillStyle="#eef8fd",y.fill(),y.strokeStyle="#c9e6f2",y.stroke();for(let P=1;P<g.length;P++){let S=g[P],R=S.wob?Math.sin(S.wob*18)*3*S.wob:0;v(y,S.x+R,S.y,S.w,S.c)}if(!o&&g.length>1){let P=p();gs(y,"\u{1F352}",P.x+P.w*.18,P.y-10,22)}for(let P of t)y.save(),y.translate(P.x,P.y+h/2),y.rotate(P.r),v(y,0,-h/2,P.w,P.c),y.restore();if(_){let P=p();y.globalAlpha=.18,y.fillStyle="#5a3d6e",y.beginPath(),y.ellipse(_.x,P.y,_.w/2,Math.max(4,_.w*.14),0,0,7),y.fill(),y.globalAlpha=1,v(y,_.x,_.y-6+Math.sin(E*6)*2,_.w,_.c)}y.restore(),kh(y,n,s),Kt(y,`${g.length-1}\uCE35`,Ne/2,70,17,"#e0457b",900),Nd(y,c,3,Ne/2,122),r>1&&Kt(y,`\u{1F525} PERFECT \uCF64\uBCF4 ${r}`,Ne/2,94,13,"#e0457b",800),al(e,y,T)}}}function Lb(){let i=[["\u{1F9CA}","\uC5BC\uC74C","#e3f4ff"],["\u{1F95B}","\uC6B0\uC720","#fffaf0"],["\u{1F353}","\uB538\uAE30","#f58aa6"],["\u{1F36B}","\uCD08\uCF54","#8a5638"],["\u{1FAE7}","\uD0C4\uC0B0","#c4ecff"],["\u{1F366}","\uC544\uC774\uC2A4\uD06C\uB9BC","#fff3cf"],["\u{1F352}","\uCCB4\uB9AC","#d6304a"],["\u{1F375}","\uB179\uCC28","#a5d07f"],["\u{1F34C}","\uBC14\uB098\uB098","#f6e08a"],["\u2615","\uCEE4\uD53C","#a0703f"]],e=["\uD06C\uB9BC\uC18C\uB2E4","\uB538\uAE30\uC6B0\uC720","\uCD08\uCF54\uB77C\uB5BC","\uB179\uCC28\uB77C\uB5BC","\uBC14\uB098\uB098\uC6B0\uC720","\uBA54\uB860\uC18C\uB2E4","\uCCB4\uB9AC\uD30C\uB974\uD398","\uC544\uC778\uC288\uD398\uB108"],t=[],n=60,s=0,r=0,a=null,o=0,l=0,c="show",h=0,u=[],f=0,d=0,g=3,_={st:"away",t:3},p=()=>{let v=Bh(3+Math.floor(o/2),3,6);a={name:Cb(e),seq:Array.from({length:v},()=>Math.floor(Math.random()*i.length))},c="show",h=Math.max(1.8,3-o*.1),u=[],_.st!=="away"&&(_.st="away"),_.t=Math.max(_.t,h+In(.8,1.6))};p();function m(v){if(c!=="make")return;if(_.st==="look"){l++,r=0,s=Math.max(0,s-40),f=-1,d=1,Ln.bad(),g--,t.push({s:"\uB4E4\uCF30\uB2E4! -40 \u{1F631} \u{1F494}",x:Ne/2,y:330,t:0,c:"#e0457b",size:22});return}u.push(v),Ln.pop();let y=u.length-1;if(a.seq[y]!==v){r=0,c="result",f=-1,Ln.bad(),g--,t.push({s:"\uC557, \uC21C\uC11C\uAC00 \uB2EC\uB77C\uC694! \u{1F623} \u{1F494}",x:Ne/2,y:330,t:0,c:"#8a7bb8"}),g>0&&setTimeout(p,900);return}if(u.length===a.seq.length){r++,o++;let T=Math.round(a.seq.length*20*(1+(r-1)*.25));s+=T,c="result",f=1,Ln.good(),t.push({s:r>1?`\uCF64\uBCF4 ${r}! +${T}`:`\uC644\uBCBD\uD574\uC694! +${T}`,x:Ne/2,y:330,t:0,size:20}),setTimeout(p,800)}}function M(v,y,T,E,x){It(v,y-34,T+26,68,70,22),v.fillStyle="#f7f2ea",v.fill(),It(v,y-26,T+34,52,62,14),v.fillStyle="#7fc8a0",v.fill(),v.fillStyle="#ffe2cf",v.beginPath(),v.arc(y,T,30,0,7),v.fill(),v.fillStyle="#3f302f",E==="away"?(v.beginPath(),v.arc(y,T,31,0,7),v.fill(),v.beginPath(),v.ellipse(y+4,T+30+Math.sin(x*3)*2,9,18,.15,0,7),v.fill(),v.fillStyle="#ff9cc0",v.beginPath(),v.arc(y+2,T+12,5,0,7),v.fill()):E==="turn"?(v.beginPath(),v.arc(y,T,31,Math.PI*.35,Math.PI*1.75),v.fill(),v.beginPath(),v.arc(y-6,T-14,24,Math.PI,0),v.fill(),v.fillStyle="#3f302f",v.beginPath(),v.arc(y+14,T+2,3.2,0,7),v.fill()):(v.beginPath(),v.arc(y,T-6,30,Math.PI*1.02,Math.PI*1.98),v.fill(),v.fillRect(y-30,T-8,8,20),v.fillRect(y+22,T-8,8,20),v.fillStyle="#3f302f",v.beginPath(),v.arc(y-10,T+4,3.6,0,7),v.arc(y+10,T+4,3.6,0,7),v.fill(),v.strokeStyle="#c0606a",v.lineWidth=2,v.beginPath(),v.moveTo(y-6,T+16),v.lineTo(y+6,T+16),v.stroke(),v.fillStyle="#ffb3c6aa",v.beginPath(),v.arc(y-17,T+12,5,0,7),v.arc(y+17,T+12,5,0,7),v.fill());let b=E==="away"?"\u266A \uD765\uC5BC\uD765\uC5BC~":E==="turn"?"\uD760\u2026?":"\uBB50 \uD574\uC694? \u{1F440}";v.font='800 13px "Malgun Gothic",sans-serif';let P=v.measureText(b).width+20;It(v,y-P/2-6,T-66,P,26,13),v.fillStyle=E==="look"?"#ffe3ea":"#ffffff",v.fill(),Kt(v,b,y-6,T-53,13,E==="look"?"#e0457b":"#7a6c99",800),E==="turn"&&Kt(v,"\u2757",y+34,T-22,20)}return{title:"\u{1F92B} \uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30",desc:'\uC190\uB2D8 \uC8FC\uBB38\uC774 <b>3\uCD08</b> \uB3D9\uC548 \uBCF4\uC5EC\uC694. \uC0AC\uB77C\uC9C0\uBA74 \uC7AC\uB8CC\uB97C <b>\uC21C\uC11C\uB300\uB85C</b> \uACE8\uB77C\uC694.<br>\uB2E8, <b>\uC0AC\uC7A5\uB2D8\uC774 \uB3CC\uC544\uBCF4\uACE0 \uC788\uC744 \uB54C</b> \uB204\uB974\uBA74 \uB4E4\uCF1C\uC694! \u{1F631}<br>"\uD760\u2026?" \uD558\uBA74 \uC7A0\uAE50 \uBA48\uCD94\uAE30. \uC5F0\uC18D \uC815\uB2F5\uC774\uBA74 \uCF64\uBCF4 (60\uCD08)<br>\u2764\uFE0F \uC21C\uC11C \uD2C0\uB9AC\uAC70\uB098 \uB4E4\uD0A4\uAE30 <b>3\uBC88</b>\uC774\uBA74 \uAC8C\uC784 \uC624\uBC84!',buttons:i.map(([v,y],T)=>({label:`${v}<small>${y}</small>`,act:()=>m(T),cls:"ing"})),key(v){let y=parseInt(v.replace("Digit",""),10);isNaN(y)||m((y+9)%10)},update(v){if(n-=v,c==="show"&&(h-=v,h<=0&&(c="make")),_.t-=v,_.t<=0){let y=Math.min(1,o/8);_.st==="away"?(_.st="turn",_.t=di(.75,.5,y)):_.st==="turn"?(_.st="look",_.t=In(1,1.8)):(_.st="away",_.t=In(di(2.4,1.4,y),di(3.8,2.6,y)))}return f*=.9,d=Math.max(0,d-v*3),g<=0?{score:s,over:!0,msg:`\uC2E4\uC218 3\uBC88! \uC0AC\uC7A5\uB2D8\uAED8 \uB531 \uAC78\uB838\uC5B4\uC694 \u{1F631} \xB7 \uC8FC\uBB38 ${o}\uAC1C \uC131\uACF5`}:n<=0?{score:s,msg:`\uC8FC\uBB38 ${o}\uAC1C \uC131\uACF5!${l?` (\uB4E4\uD0A8 \uD69F\uC218 ${l}\uBC88 \u{1F605})`:" \uD55C \uBC88\uB3C4 \uC548 \uB4E4\uCF30\uC5B4\uC694 \u{1F92B}"}`}:null},draw(v,y,T){v.save(),d&&v.translate(Math.sin(T*60)*6*d,0);let E=v.createLinearGradient(0,0,0,fn);E.addColorStop(0,"#fff6e6"),E.addColorStop(1,"#f0f8e8"),v.fillStyle=E,v.fillRect(0,0,Ne,fn),v.fillStyle="#e8d6c4",v.fillRect(0,196,Ne,8);for(let D=0;D<5;D++)gs(v,["\u{1FAD9}","\u{1F36F}","\u{1F9C1}","\u{1FAD6}","\u{1F36A}"][D],30+D*36,184,20);M(v,Ne-66,120,_.st,T),It(v,16,54,210,118,16),v.fillStyle=f>.1?"#e3f8dc":f<-.1?"#ffe3ea":"#ffffff",v.fill(),v.strokeStyle="#f3d5e2",v.lineWidth=2.5,v.stroke(),Kt(v,`\u{1F9FE} ${a.name}`,121,76,15);let x=a.seq.length,b=Math.min(36,186/x);a.seq.forEach((D,O)=>{let k=121+(O-(x-1)/2)*b;if(c==="show")gs(v,i[D][0],k,116,26);else{let F=u[O];F!==void 0?gs(v,i[F][0],k,116,26):(It(v,k-14,102,28,28,8),v.fillStyle="#f1e9ff",v.fill(),Kt(v,"?",k,117,15,"#c6a6f0"))}}),c==="show"?(It(v,36,148,170,8,4),v.fillStyle="#f1e6ee",v.fill(),It(v,36,148,170*Bh(h/3,0,1),8,4),v.fillStyle="#f48fb9",v.fill()):Kt(v,"\uC21C\uC11C\uB300\uB85C \uB2F4\uC544\uC694",121,152,12,"#9a8cc4",700),v.fillStyle="#f6c9d8",v.fillRect(0,470,Ne,90),v.fillStyle="#ffffff70",v.fillRect(0,470,Ne,6);let P=Ne/2,S=260,R=470,I=64,z=46,L=a.seq.length,w=(R-S-30)/L,U=D=>di(z,I,(R-D)/(R-S));u.forEach((D,O)=>{let k=R-6-O*w,F=k-w,B=i[D][2],$=v.createLinearGradient(P-I,0,P+I,0);if($.addColorStop(0,pi(B,"#000000",.2)),$.addColorStop(.4,B),$.addColorStop(1,pi(B,"#000000",.25)),v.fillStyle=$,v.beginPath(),v.moveTo(P-U(k)+4,k),v.lineTo(P-U(F)+4,F),v.lineTo(P+U(F)-4,F),v.lineTo(P+U(k)-4,k),v.closePath(),v.fill(),D===0)for(let ee=0;ee<3;ee++)It(v,P-22+ee*15,F+4,12,12,3),v.fillStyle="#ffffffcc",v.fill()}),v.strokeStyle="#bfe0ee",v.lineWidth=3,v.fillStyle="#ffffff40",v.beginPath(),v.moveTo(P-I,S),v.lineTo(P-z,R),v.lineTo(P+z,R),v.lineTo(P+I,S),v.fill(),v.stroke(),v.beginPath(),v.ellipse(P,S,I,10,0,0,7),v.stroke(),v.fillStyle="#ffffff90",v.fillRect(P-I+10,S+16,6,120),u.length===L&&f>.1&&(v.strokeStyle="#f48fb9",v.lineWidth=7,v.beginPath(),v.moveTo(P+18,S+40),v.lineTo(P+38,S-46),v.stroke()),r>1&&Kt(v,`\u{1F525} \uCF64\uBCF4 ${r}`,Ne/2,240,16,"#e0457b"),v.restore(),_.st==="look"&&c==="make"&&(v.strokeStyle=`rgba(240,80,120,${.45+Math.sin(T*10)*.2})`,v.lineWidth=14,v.strokeRect(0,0,Ne,fn),Kt(v,"\uC9C0\uAE08 \uB204\uB974\uBA74 \uB4E4\uCF1C\uC694!",Ne/2,220,15,"#e0457b",900)),kh(v,n,s),Nd(v,Math.max(0,g),3,121,190),al(t,v,y)}}}function Db(){let i=[],e=40,t=0,n=0,s=0,r=0,a=0,o=3,l=0,c=In(.8,1.6),h=0,u=0,f=0,d=["\u{1F964}","\u2615","\u{1F9CB}"],g=_=>()=>{r=_};return{title:"\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14",desc:"\uC7C1\uBC18\uC774 \uAE30\uC6B8\uBA74 <b>\u25C0 \u25B6</b>\uB85C \uBC18\uB300\uCABD\uC744 \uB20C\uB7EC \uADE0\uD615\uC744 \uC7A1\uC544\uC694.<br>\uB108\uBB34 \uAE30\uC6B8\uBA74 \uCEF5\uC774 \uB5A8\uC5B4\uC838\uC694! \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC3DF\uC9C0 \uC54A\uACE0 \uC62E\uAE30\uAE30 (40\uCD08)",buttons:[{label:"\u25C0 \uC67C\uCABD",down:g(-1),up:g(0)},{label:"\uC624\uB978\uCABD \u25B6",down:g(1),up:g(0)}],key(_,p){(_==="ArrowLeft"||_==="KeyA")&&(r=p?-1:r===-1?0:r),(_==="ArrowRight"||_==="KeyD")&&(r=p?1:r===1?0:r)},pointer(_,p){r=p?_<Ne/2?-1:1:0},keyUp:!0,update(_){if(e-=_,h+=_,f-=_,c-=_,c<=0&&(s+=In(-1.6,1.6)*(1+u*.15),c=In(.5,1.3)-u*.04),s+=(-n*1.2+r*2.6+Math.sin(h*9)*.25)*_*3,s*=Math.pow(.35,_),n+=s*_,Math.abs(n)>.48&&f<=0&&(o--,f=.6,s*=-.4,n*=.6,Ln.bad(),i.push({s:"\uC557 \uC3DF\uC558\uC5B4\uC694! \u{1F4A6}",x:Ne/2,y:210,t:0,c:"#8a7bb8"}),o<=0&&(a=0,o=3,n=0,s=0,i.push({s:"\uB2E4\uC2DC \uCE74\uC6B4\uD130\uC5D0\uC11C \uBC1B\uC544 \uC640\uC694",x:Ne/2,y:240,t:0,c:"#7a6c99",size:15}))),a+=_*(.16+u*.01),a>=1){let p=o*100;t+=p,l+=o,Ln.win(),i.push({s:`\uC11C\uBE59 \uC644\uB8CC! ${o}\uC794 +${p}`,x:Ne/2,y:200,t:0,size:20}),a=0,o=3,u++,n*=.3}return e<=0?{score:t,msg:`\uC74C\uB8CC ${l}\uC794 \uBC30\uB2EC \uC131\uACF5!`}:null},draw(_,p,m){_.fillStyle="#e6f6dd",_.fillRect(0,0,Ne,fn),_.fillStyle="#f6dce6",_.fillRect(0,400,Ne,fn-400);for(let v=0;v<8;v++)_.fillStyle="#ffffff88",_.fillRect(((v*70-a*400)%(Ne+70)+Ne+70)%(Ne+70)-35,400,34,fn-400);kh(_,e,t),It(_,40,60,Ne-80,14,7),_.fillStyle="#ffffffaa",_.fill(),It(_,40,60,(Ne-80)*a,14,7),_.fillStyle="#9be08a",_.fill(),gs(_,"\u{1F37D}\uFE0F",Ne-34,67,22),gs(_,"\u{1F9D1}\u200D\u{1F373}",30,67,20),_.strokeStyle="#f1e6ee",_.lineWidth=10,_.beginPath(),_.arc(Ne/2,170,60,Math.PI*1.1,Math.PI*1.9),_.stroke(),_.strokeStyle="#9be08a",_.beginPath(),_.arc(Ne/2,170,60,Math.PI*1.5-.3,Math.PI*1.5+.3),_.stroke(),_.strokeStyle="#e0457b",_.lineWidth=4,_.beginPath(),_.moveTo(Ne/2,170),_.lineTo(Ne/2+Math.sin(n*1.6)*60,170-Math.cos(n*1.6)*60),_.stroke();let M=330+Math.abs(Math.sin(h*9))*6;_.fillStyle="#ffe6dc",_.beginPath(),_.arc(Ne/2,M-40,34,0,7),_.fill(),_.fillStyle="#4b3634",_.beginPath(),_.arc(Ne/2,M-50,34,Math.PI,0),_.fill(),_.fillStyle="#2b2125",_.beginPath(),_.arc(Ne/2-11,M-38,4,0,7),_.arc(Ne/2+11,M-38,4,0,7),_.fill(),It(_,Ne/2-26,M-6,52,64,16),_.fillStyle="#bfe2f1",_.fill(),_.save(),_.translate(Ne/2,M-90),_.rotate(n),It(_,-80,-6,160,12,6),_.fillStyle="#ffc2da",_.fill();for(let v=0;v<o;v++)gs(_,d[v],-46+v*46,-28,34);_.restore(),Kt(_,"\u25C0 \u25B6 \uB97C \uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uADF8\uCABD\uC73C\uB85C \uC7C1\uBC18\uC744 \uB4E4\uC5B4 \uC62C\uB824\uC694",Ne/2,520,12,"#9a8cc4",700),al(i,_,p)}}}function Nb(){let t=.5357142857142857,n=30,s=462,r=96,a=Ne/2,o=1.6,l=[Ne/2-108,Ne/2,Ne/2+108],c=["\u{1F353}","\u{1F351}","\u{1F347}"],h=["#ff6f91","#ffb36b","#a98bff"],u=[[523,659,784],[587,698,880],[659,784,988]],f=[];for(let w=4;w*t*.5<n-1.5;w++){let U=w*t*.5;if(w%2===0?Math.random()<.85:Math.random()<.38){let D=Math.floor(Math.random()*3);f.push({t:U,lane:D,hit:0}),U>n*.45&&w%2===0&&Math.random()<.28&&f.push({t:U,lane:(D+1+Math.floor(Math.random()*2))%3,hit:0,chord:!0})}}let d=[],g=[],_=[0,0,0],p=-1.2,m=0,M=0,v=0,y=0,T=0,E=0,x=!1,b=0,P=0,S=w=>1/(1+w*3.2),R=w=>r+(s-r)*w,I=(w,U)=>a+(w-a)*U;function z(w){L(w),_[w]=1;let U=null,D=1;for(let O of f)if(!O.hit&&O.lane===w){let k=Math.abs(O.t-p);k<D&&(D=k,U=O)}!U||D>.14||(U.hit=D<=.06?2:1,M++,v=Math.max(v,M),g.push({lane:w,t:0,p:U.hit===2}),U.hit===2?(y++,m+=100+M*5,d.push({s:M>2?`PERFECT \xD7${M}`:"PERFECT",x:l[w],y:s-50,t:0,c:"#ffd27a"})):(T++,m+=50,d.push({s:"GOOD",x:l[w],y:s-50,t:0,c:"#9fe0cf"})))}let L=w=>vt(u[w][1]*2,.08,"square",.05);return{title:"\u{1F3B5} \uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784",desc:"\uACFC\uC77C \uC18C\uC2A4\uAC00 <b>\uC800 \uBA40\uB9AC\uC11C \uB2E4\uAC00\uC640\uC694!</b> \uD310\uC815\uC120 \uB3D9\uADF8\uB77C\uBBF8\uC5D0 \uB2FF\uC744 \uB54C \uADF8 \uC904\uC744 \uD0ED.<br>\uD6C4\uBC18\uC5D4 <b>\uB450 \uC904 \uB3D9\uC2DC</b> \uB178\uD2B8\uB3C4 \uB098\uC640\uC694. PERFECT\uB97C \uC774\uC5B4 \uAC00\uBA74 \uB5A1\uAF2C\uCE58\uC5D0 \uC18C\uC2A4\uAC00 \uADF8\uB824\uC838\uC694<br>\u{1F494} <b>MISS 10\uBC88</b>\uC774\uBA74 \uAC8C\uC784 \uC624\uBC84! (30\uCD08, \uC18C\uB9AC \uCF1C \uC8FC\uC138\uC694 \u{1F50A})",buttons:[0,1,2].map(w=>({label:c[w],down:()=>z(w),cls:"lane"})),key(w,U){if(!U)return;let D={ArrowLeft:0,KeyA:0,KeyJ:0,ArrowDown:1,KeyS:1,KeyK:1,ArrowRight:2,KeyD:2,KeyL:2}[w];D!==void 0&&z(D)},pointer(w,U){U&&z(w<Ne/3?0:w<Ne*2/3?1:2)},update(w){if(!x){x=!0;let D=Bn();P=D?D.currentTime+1.2:0}let U=Bn();for(p=U&&P?U.currentTime-P:p+w;b*t*.5<p+.2&&b*t*.5<n;){let D=b*t*.5-p;D>-.05&&(b%2===0?vt(90,.12,"sine",.25,Math.max(0,D)):Ti(.04,.05,Math.max(0,D))),b++}for(let D of f)!D.hit&&p-D.t>.15&&(D.hit=-1,E++,M=0,d.push({s:"MISS",x:l[D.lane],y:s-34,t:0,c:"#b8acd8",size:15}));if(E>=10)return{score:m,over:!0,msg:`MISS 10\uBC88! \uC18C\uC2A4\uAC00 \uB2E4 \uD758\uB800\uC5B4\uC694 \u{1F4A6} \xB7 PERFECT ${y} \xB7 \uCD5C\uB300 \uCF64\uBCF4 ${v}`};for(let D=0;D<3;D++)_[D]=Math.max(0,_[D]-w*5);return p>=n?{score:m,msg:`PERFECT ${y} \xB7 GOOD ${T} \xB7 MISS ${E} \xB7 \uCD5C\uB300 \uCF64\uBCF4 ${v}`}:null},draw(w,U,D){let O=p>0?Math.pow(1-p/t%1,3):0,k=w.createLinearGradient(0,0,0,fn);k.addColorStop(0,"#1f1840"),k.addColorStop(.5,"#3a2a66"),k.addColorStop(1,"#6b4a8a"),w.fillStyle=k,w.fillRect(0,0,Ne,fn);for(let V=0;V<4;V++){let ne=40+V*93,q=w.createRadialGradient(ne,0,0,ne,0,160);q.addColorStop(0,`rgba(${V%2?"255,150,200":"160,140,255"},${.18+O*.3})`),q.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=q,w.fillRect(ne-160,0,320,200)}for(let V=0;V<18;V++)w.fillStyle=`rgba(255,255,255,${.3+.3*Math.sin(D*2+V)})`,w.fillRect(V*67%Ne,V*29%90,2,2);let F=S(1.35),B=(fn-r)/(s-r),$=(V,ne,q)=>{w.fillStyle=q,w.beginPath(),w.moveTo(I(V,F),R(F)),w.lineTo(I(ne,F),R(F)),w.lineTo(I(ne,B),fn),w.lineTo(I(V,B),fn),w.closePath(),w.fill()};$(l[0]-58,l[2]+58,"#2a2150"),l.forEach((V,ne)=>$(V-50,V+50,_[ne]?`rgba(255,255,255,${.06+_[ne]*.18})`:"#ffffff0d"));for(let V=Math.floor(Math.max(0,p)/t);V<Math.floor(Math.max(0,p)/t)+6;V++){let ne=(V*t-p)/o;if(ne<0||ne>1.35)continue;let q=S(ne),J=R(q);w.strokeStyle=`rgba(255,210,122,${.25*q})`,w.lineWidth=1+q*2,w.beginPath(),w.moveTo(I(l[0]-58,q),J),w.lineTo(I(l[2]+58,q),J),w.stroke()}w.strokeStyle="#ffffff30",w.lineWidth=2,[l[0]-58,l[0]+54,l[1]+54,l[2]+58].forEach(V=>{w.beginPath(),w.moveTo(I(V,F),R(F)),w.lineTo(I(V,B),fn),w.stroke()}),w.strokeStyle=`rgba(255,210,122,${.7+O*.3})`,w.lineWidth=4,w.beginPath(),w.moveTo(I(l[0]-58,1),s),w.lineTo(I(l[2]+58,1),s),w.stroke(),l.forEach((V,ne)=>{w.strokeStyle=h[ne],w.lineWidth=3+_[ne]*3,w.beginPath(),w.ellipse(V,s,34,13,0,0,7),w.stroke()});let ee=f.filter(V=>!V.hit).map(V=>({n:V,d:(V.t-p)/o})).filter(V=>V.d<1.35&&V.d>-.2).sort((V,ne)=>ne.d-V.d);for(let{n:V,d:ne}of ee){let q=S(Math.max(ne,-.15)),J=I(l[V.lane],q),W=R(q);w.fillStyle=`rgba(0,0,0,${.3*q})`,w.beginPath(),w.ellipse(J,W+4*q,26*q,9*q,0,0,7),w.fill(),V.chord&&(w.strokeStyle="#ffffffaa",w.lineWidth=2*q,w.beginPath(),w.arc(J,W-18*q,26*q,0,7),w.stroke()),gs(w,c[V.lane],J,W-18*q,48*q)}for(let V=g.length-1;V>=0;V--){let ne=g[V];ne.t+=U;let q=ne.t/.4,J=l[ne.lane];w.globalAlpha=Math.max(0,1-q),w.strokeStyle=ne.p?"#ffd27a":"#9fe0cf",w.lineWidth=4,w.beginPath(),w.ellipse(J,s,34+q*40,13+q*15,0,0,7),w.stroke();for(let W=0;W<6;W++){let Q=W/6*Math.PI*2;w.fillStyle=h[ne.lane],w.beginPath(),w.arc(J+Math.cos(Q)*q*60,s-14+Math.sin(Q)*q*26-q*20,3.5,0,7),w.fill()}w.globalAlpha=1,ne.t>.4&&g.splice(V,1)}w.strokeStyle="#d9b07a",w.lineWidth=6,w.lineCap="round",w.beginPath(),w.moveTo(40,528),w.lineTo(Ne-40,528),w.stroke();for(let V=0;V<4;V++){let ne=w.createLinearGradient(0,508,0,548);ne.addColorStop(0,"#fbe3b8"),ne.addColorStop(1,"#d99a55"),It(w,62+V*62,508,54,40,12),w.fillStyle=ne,w.fill()}let Z=Math.min(1,y/30);w.strokeStyle="#d33a2c",w.lineWidth=5,w.beginPath();for(let V=0;V<=40*Z;V++)w.lineTo(66+V*6,514+V%2*26);w.stroke(),It(w,10,10,110,34,17),w.fillStyle="#ffffffcc",w.fill(),Kt(w,`\u23F1 ${Math.max(0,Math.ceil(n-p))}\uCD08`,65,27,15),It(w,Ne-140,10,130,34,17),w.fillStyle="#ffffffcc",w.fill(),Kt(w,`\uC810\uC218 ${m}`,Ne-75,27,15,"#e0457b"),It(w,10,50,110,26,13),w.fillStyle=E>=7?"#ffd0dccc":"#ffffffaa",w.fill(),Kt(w,`\u{1F494} MISS ${E}/10`,65,63,12.5,E>=7?"#e0457b":"#4a3f66",900),M>1&&Kt(w,`${M} COMBO`,Ne/2,70+O*-4,24+O*4,"#ffd27a",900),p<0&&Kt(w,p<-.6?"\uC900\uBE44~":"\uC2DC\uC791!",Ne/2,260,34,"#fff",900),al(d,w,U)}}}var Ub={grill:Pb,parfait:Ib,order:Lb,serving:Db,rhythm:Nb},Ud=[["grill","\u{1F361}","\uB5A1\uAF2C\uCE58 \uAD7D\uAE30","\uAF2C\uCE58 3\uAC1C \uB3D9\uC2DC\uC5D0 \uAD7D\uAE30"],["parfait","\u{1F368}","\uD30C\uB974\uD398 \uD0D1 \uC313\uAE30","\uB531 \uB9DE\uCDB0 \uB192\uC774 \uC313\uAE30"],["order","\u{1F92B}","\uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30","\uC678\uC6B0\uACE0\xB7\uB208\uCE58 \uBCF4\uAE30"],["serving","\u2615","\uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14","\uC9C4\uC9DC \uCE74\uD398\uC5D0\uC11C \uC74C\uB8CC \uBC30\uB2EC"],["rhythm","\u{1F3B5}","\uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784","3D \uB808\uC778 \uBC15\uC790 \uB9DE\uCD94\uAE30"]];function ag({showToast:i,coins:e}){let n=(m=>document.getElementById(m))("mini"),s=null,r=null,a=0,o=0,l=null,c=!1,h=m=>{try{return+localStorage.getItem("sh-best-"+m)||0}catch{return 0}},u=(m,M)=>{try{localStorage.setItem("sh-best-"+m,M)}catch{}};function f(m,M){r=m,l=M||null,c=!1,s=Ub[m](),n.innerHTML=`<div class="mcard"><div class="ghead"><b>${s.title}</b><span class="mbest">\uCD5C\uACE0 ${h(r)}</span><button class="x" data-a="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="mstage"><canvas width="${Ne*2}" height="${fn*2}"></canvas>
        <div class="mintro"><p>${s.desc}</p><button class="go" data-a="start">\u25B6 \uC2DC\uC791! <small class="fee">\u{1FA99} 500</small></button></div></div>
      <div class="mbtns">${s.buttons.map((v,y)=>`<button data-b="${y}" class="${v.cls||""}">${v.label}</button>`).join("")}</div></div>`,n.hidden=!1}function d(){if(e&&!e.pay())return;n.querySelector(".mintro").remove(),Bn();let m=n.querySelector("canvas"),M=m.getContext("2d");M.setTransform(2,0,0,2,0,0);let v=0;o=performance.now();let y=T=>{if(!s)return;let E=Math.min(.05,(T-o)/1e3);o=T,v+=E;let x=s.update(E);if(s.draw(M,E,v),x&&!c)return g(x);a=requestAnimationFrame(y)};a=requestAnimationFrame(y)}function g(m){c=!0,cancelAnimationFrame(a);let M=h(r),v=m.score>M;v&&u(r,m.score);let y=e?e.add(e.fromScore(r,m.score,m.over)):0;Ln.win();let T=document.createElement("div");T.className="mintro",T.innerHTML=`<h3>${m.over?"\u{1F4A5} \uAC8C\uC784 \uC624\uBC84!":v?"\u{1F389} \uCD5C\uACE0 \uAE30\uB85D!":"\uC218\uACE0\uD588\uC5B4\uC694! \u2728"}</h3><p class="mscore">${m.score}\uC810</p>${y?`<p class="mcoin">\u{1FA99} +${y.toLocaleString("ko-KR")} \uCF54\uC778 \uD68D\uB4DD!</p>`:""}<p>${m.msg}</p><p class="mprev">\uCD5C\uACE0 \uAE30\uB85D ${Math.max(M,m.score)}\uC810</p>
      <button class="go" data-a="again">\u{1F501} \uB2E4\uC2DC \uD558\uAE30 <small class="fee">\u{1FA99} 500</small></button><button class="gsub" data-a="close">${l?"\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30":"\uB2EB\uAE30"}</button>`,n.querySelector(".mstage").appendChild(T),n.querySelector(".mbest").textContent=`\uCD5C\uACE0 ${Math.max(M,m.score)}`}function _(){cancelAnimationFrame(a),s=null,n.hidden=!0,n.innerHTML="";let m=l;l=null,m&&m(c)}n.addEventListener("click",m=>{let M=m.target.closest("button");if(M){if(M.dataset.a==="start"&&d(),M.dataset.a==="close"&&_(),M.dataset.a==="again"){let v=l;l=null,f(r,v),d()}if(M.dataset.b!==void 0&&s){let v=s.buttons[+M.dataset.b];v.act&&v.act()}}}),n.addEventListener("pointerdown",m=>{let M=m.target.closest("[data-b]");if(M&&s){let x=s.buttons[+M.dataset.b];x.down&&(m.preventDefault(),x.down());return}let v=m.target.closest("canvas");if(!v||!s||n.querySelector(".mintro"))return;let y=v.getBoundingClientRect(),T=(m.clientX-y.left)*Ne/y.width,E=(m.clientY-y.top)*fn/y.height;s.tapAt?s.tapAt(T,E):s.pointer?s.pointer(T,!0):s.tap&&s.tap()});let p=m=>{if(!s)return;let M=m.target.closest&&m.target.closest("[data-b]");if(M){let v=s.buttons[+M.dataset.b];v.up&&v.up()}else s.pointer&&s.pointer.length&&s.pointer(0,!1)};return n.addEventListener("pointerup",p),n.addEventListener("pointercancel",p),n.addEventListener("pointerleave",p),addEventListener("keydown",m=>{if(!(n.hidden||!s)){if(m.code==="Escape")return _();if(n.querySelector(".mintro")&&!c&&(m.code==="Space"||m.code==="Enter"))return m.preventDefault(),d();s.key&&(m.preventDefault(),s.key(m.code,!0))}}),addEventListener("keyup",m=>{!n.hidden&&s&&s.key&&s.keyUp&&s.key(m.code,!1)}),{open:f,get isOpen(){return!n.hidden},get gameId(){return n.hidden?null:r},result(m,M,v){i(`${m} \xB7 ${M}\uC810 ${v||""}`)}}}var zh={title:"\uBB35\uCC0C\uBE60 \uC2B9\uB9AC \uCFE0\uD3F0",benefit:"\uC18C\uD488 10% \uD560\uC778",note:"\uC624\uD504\uB77C\uC778 \uB9E4\uC7A5 \uACC4\uC0B0\uB300\uC5D0\uC11C \uC9C1\uC6D0\uC5D0\uAC8C \uBCF4\uC5EC \uC8FC\uC138\uC694",days:30},Ta={muk:{emo:"\u270A",name:"\uBB35"},jji:{emo:"\u270C\uFE0F",name:"\uCC0C"},ppa:{emo:"\u{1F590}\uFE0F",name:"\uBE60"}},og={muk:"jji",jji:"ppa",ppa:"muk"},lg=i=>i[Math.floor(Math.random()*i.length)],cg=i=>new Promise(e=>setTimeout(e,i));function hg({showToast:i,npcs:e,capture:t,views:n,minis:s,treasure:r,serving:a,coins:o}){let l=()=>!o||o.pay(),c=W=>o?o.add(W):0,h=W=>W?`<p class="mcoin">\u{1FA99} +${W.toLocaleString("ko-KR")} \uCF54\uC778 \uD68D\uB4DD!</p>`:"",u=W=>document.getElementById(W),f=e.find(W=>W.id==="shop"),d=e.find(W=>W.id==="cafe"),g=(W,Q=3500)=>{f&&(clearTimeout(g.t),f.el.textContent=W,g.t=setTimeout(()=>f.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",Q))},_=u("mjp"),p=null,m=!1;function M(){l()&&(p={me:0,boss:0,round:1,attacker:null,log:"\uAC00\uC704\uBC14\uC704\uBCF4\uB85C \uACF5\uACA9\uD560 \uC0AC\uB78C\uC744 \uC815\uD574\uC694!"},_.hidden=!1,y("?","?"),g("\uBB35\uCC0C\uBE60 \uD55C \uD310 \uD574\uC694! \uC0BC\uC138\uD310\uC774\uC5D0\uC694 \u270A\u270C\uFE0F\u{1F590}\uFE0F",5e3))}let v=()=>{_.hidden=!0,p=null};function y(W,Q,oe=!1){let ie=p.attacker==="me"?"\uB0B4\uAC00 \uACF5\uACA9 \uC911 \u{1F525}":p.attacker==="boss"?"\uC0AC\uC7A5\uB2D8\uC774 \uACF5\uACA9 \uC911 \u{1F525}":"\uAC00\uC704\uBC14\uC704\uBCF4!";_.innerHTML=`<div class="gcard">
      <div class="ghead"><b>\u270A \uC0AC\uC7A5\uB2D8\uACFC \uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310</b><button class="x" data-g="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="gscore"><span>\uB098 <i>${p.me}</i></span><small>${p.round}\uD310\uC9F8 \xB7 2\uBC88 \uBA3C\uC800 \uC774\uAE30\uBA74 \uC2B9\uB9AC</small><span><i>${p.boss}</i> \uC0AC\uC7A5\uB2D8</span></div>
      <div class="garena ${oe?"shake":""}"><div><em>${W}</em><small>\uB098</small></div><b>VS</b><div><em>${Q}</em><small>\uC0AC\uC7A5\uB2D8</small></div></div>
      <p class="gturn">${ie}</p><p class="glog">${p.log}</p>${p.done?h(p.coins):""}
      ${p.done?p.done==="win"?`<div class="gcoupon"><img alt="\uCFE0\uD3F0" src="${b().toDataURL("image/png")}"><button class="go" data-g="coupon">\u{1F4F2} \uCFE0\uD3F0 \uC774\uBBF8\uC9C0 \uC800\uC7A5</button><button class="gsub" data-g="close">\uB2EB\uAE30</button></div>`:'<button class="go" data-g="again">\u{1F501} \uB2E4\uC2DC \uB3C4\uC804 <small class="fee">\u{1FA99} 500</small></button>':`<div class="ghands">${Object.entries(Ta).map(([Ee,re])=>`<button data-h="${Ee}" ${m?"disabled":""}><em>${re.emo}</em>${re.name}</button>`).join("")}</div>`}
    </div>`}async function T(W){if(m||!p||p.done)return;m=!0;let Q=lg(Object.keys(Ta));for(let Ee of["muk","jji","ppa"])p.log=p.attacker?`${Ta[Ee].name}!`:["\uAC00\uC704","\uBC14\uC704","\uBCF4!"][Object.keys(Ta).indexOf(Ee)],y("\u270A","\u270A",!0),await cg(260);let oe=Ta[W],ie=Ta[Q];if(!p.attacker)W===Q?p.log=`\uB458 \uB2E4 ${oe.name}! \uB2E4\uC2DC \uAC00\uC704\uBC14\uC704\uBCF4 \u{1F648}`:(p.attacker=og[W]===Q?"me":"boss",p.log=p.attacker==="me"?"\uB0B4\uAC00 \uC774\uACBC\uC5B4\uC694! \uC774\uC81C \uB0B4\uAC00 \uACF5\uACA9, \uAC19\uC740 \uAC78 \uB0B4\uAC8C \uB9CC\uB4E4\uC5B4\uC694":"\uC0AC\uC7A5\uB2D8\uC774 \uC774\uACBC\uC5B4\uC694! \uC0AC\uC7A5\uB2D8 \uACF5\uACA9, \uB2E4\uB978 \uAC78 \uB0B4\uC57C \uBC84\uD168\uC694");else if(W===Q){let Ee=p.attacker==="me";if(Ee?p.me++:p.boss++,p.log=Ee?`\uB458 \uB2E4 ${oe.name}! \uB0B4\uAC00 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F389}`:`\uB458 \uB2E4 ${oe.name}! \uC0AC\uC7A5\uB2D8\uC774 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F61D}`,g(Ee?"\uC557 \uC84C\uB2E4\u2026! \u{1F633}":"\uC81C\uAC00 \uC774\uACBC\uC8E0? \u{1F60E}"),p.attacker=null,p.round++,(p.me>=2||p.boss>=2)&&(p.done=p.me>=2?"win":"lose",p.log=p.done==="win"?`${p.me} : ${p.boss} \uC0BC\uC138\uD310 \uC2B9\uB9AC! \uCFE0\uD3F0\uC744 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}`:`${p.me} : ${p.boss} \uC544\uC27D\uAC8C \uC84C\uC5B4\uC694\u2026 \uB2E4\uC2DC \uB3C4\uC804\uD574 \uBCFC\uAE4C\uC694?`,g(p.done==="win"?"\uCD95\uD558\uD574\uC694! \uCFE0\uD3F0 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}":"\uB2E4\uC74C\uC5D0 \uB610 \uB3C4\uC804\uD574\uC694! \u{1F606}",6e3),p.coins=c(p.done==="win"?1500:200),p.done==="win")){en.fanfare(),x();try{localStorage.setItem("sh-coupon",JSON.stringify(E))}catch{}}}else p.attacker=og[W]===Q?"me":"boss",p.log=`${oe.name} vs ${ie.name} \u2192 ${p.attacker==="me"?"\uACF5\uACA9\uAD8C\uC774 \uB098\uC5D0\uAC8C!":"\uACF5\uACA9\uAD8C\uC774 \uC0AC\uC7A5\uB2D8\uAED8!"}`;m=!1,y(oe.emo,ie.emo)}let E=null;function x(){let W="SH-"+Math.random().toString(36).slice(2,6).toUpperCase()+"-"+String(Date.now()%1e4).padStart(4,"0"),Q=new Date(Date.now()+zh.days*864e5);E={code:W,issued:ba(),until:`${Q.getFullYear()}.${String(Q.getMonth()+1).padStart(2,"0")}.${String(Q.getDate()).padStart(2,"0")}`}}function b(){E||x();let W=1080,Q=600,oe=document.createElement("canvas");oe.width=W,oe.height=Q;let ie=oe.getContext("2d"),Ee=ie.createLinearGradient(0,0,W,Q);Ee.addColorStop(0,"#ffe3ef"),Ee.addColorStop(1,"#e4f6ea"),ie.fillStyle=Ee,ie.fillRect(0,0,W,Q),ie.fillStyle="#ffffff66";for(let xe=30;xe<Q;xe+=60)for(let ue=xe/60%2?30:60;ue<W;ue+=60)ie.beginPath(),ie.arc(ue,xe,10,0,7),ie.fill();ie.fillStyle="#fffdfb",ie.beginPath(),ie.roundRect(40,40,W-80,Q-80,36),ie.fill(),ie.setLineDash([14,10]),ie.strokeStyle="#f48fb9",ie.lineWidth=5,ie.beginPath(),ie.roundRect(56,56,W-112,Q-112,28),ie.stroke(),ie.setLineDash([]),ie.strokeStyle="#f3c6d8",ie.lineWidth=3,ie.beginPath(),ie.moveTo(760,80),ie.lineTo(760,Q-80),ie.stroke(),ie.textAlign="left",ie.fillStyle="#f27fae",ie.font='700 40px "Gamja Flower", sans-serif',ie.fillText("\uC218\uC9D1\uC218\uC9D1 \xD7 \uC218\uC787\uD574\uD53C",100,130),ie.fillStyle="#4a3f66",ie.font='900 34px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',ie.fillText(zh.title+" \u270A\u270C\uFE0F\u{1F590}\uFE0F",100,190),ie.fillStyle="#e0457b",ie.font='900 84px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',ie.fillText(zh.benefit,100,310),ie.fillStyle="#7a6c99",ie.font='600 26px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',ie.fillText(zh.note,100,380),ie.fillText(`\uBC1C\uAE09 ${E.issued} \xB7 ${E.until}\uAE4C\uC9C0 \xB7 1\uC778 1\uD68C`,100,420),ie.fillStyle="#4a3f66",ie.font="800 30px ui-monospace, Consolas, monospace",ie.fillText(E.code,100,480);let re=new Image;return re.src=Ei("staff",1),re.complete&&ie.drawImage(re,790,150,240,240),ie.textAlign="center",ie.fillStyle="#f27fae",ie.font='700 34px "Gamja Flower", sans-serif',ie.fillText("\uC0AC\uC7A5\uB2D8\uC744 \uC774\uACBC\uC5B4\uC694!",910,440),oe}{let W=new Image;W.src=Ei("staff",1)}_.addEventListener("click",async W=>{let Q=W.target.closest("button");if(!Q)return;if(Q.dataset.h)return T(Q.dataset.h);let oe=Q.dataset.g;if(oe==="close"&&v(),oe==="again"&&M(),oe==="coupon"){let ie=await Sa(b(),`suithappy-coupon-${E.code}.jpg`);i(ie==="downloaded"?"\u{1F4BE} \uCFE0\uD3F0\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":ie==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}});let P=u("spot"),S=Array.from({length:n},(W,Q)=>Q),R=null,I=[],z=null,L=Object.keys(Tr).flatMap(W=>Tr[W].stickers.map((Q,oe)=>[W,oe]));function w(W){z=W||null,I.length||(I=S.slice().sort(()=>Math.random()-.5)),P.hidden=!1,D()}function U(){P.hidden=!0;let W=z;z=null,R=null,W&&W(!1)}async function D(){if(I.length||(I=S.slice().sort(()=>Math.random()-.5)),!l()){U();return}let W=I.pop();P.innerHTML=`<div class="spwrap"><div class="ghead"><b>\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30</b><span class="spcount">\uBD88\uB7EC\uC624\uB294 \uC911\u2026</span><button class="gsub" data-s="hint">\u{1F4A1} \uD78C\uD2B8</button><button class="x" data-s="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="sppair"><div class="spimg"><canvas></canvas><small>\uC6D0\uB798 \uADF8\uB9BC</small></div><div class="spimg"><canvas></canvas><small>\uB2E4\uB978 \uACF3 5\uAC1C\uB97C \uCC3E\uC544\uC694</small></div></div>
      <p class="spmsg">${z?"\uB2E4 \uCC3E\uC73C\uBA74 \uC8FC\uBB38\uD55C \uBA54\uB274\uAC00 \uB098\uC640\uC694! \u2615":"\uB450 \uADF8\uB9BC \uC911 \uC544\uBB34 \uCABD\uC774\uB098 \uB2E4\uB978 \uACF3\uC744 \uB20C\uB7EC\uC694"} \xB7 \uD5DB\uD074\uB9AD 5\uBC88\uC774\uBA74 \uAC8C\uC784 \uC624\uBC84</p></div>`,await cg(30);let Q=t(W),[oe,ie]=P.querySelectorAll("canvas"),Ee=Q.width,re=Q.height;for(let xe of[oe,ie])xe.width=Ee,xe.height=re,xe.getContext("2d").drawImage(Q,0,0);R={W:Ee,H:re,ca:oe,cb:ie,base:oe.getContext("2d").getImageData(0,0,Ee,re),diffs:O(ie,Ee,re),found:0,miss:0,hints:0},k(),F()}function O(W,Q,oe){let ie=W.getContext("2d"),Ee=[],re=["hue","flip","sticker","erase","swap","hue","sticker"].sort(()=>Math.random()-.5),xe=0;for(;Ee.length<5&&xe++<400;){let ue=Math.round(Q*(.08+Math.random()*.05)),ve=Math.round(Q*.05+Math.random()*(Q*.9-ue)),Se=Math.round(oe*.06+Math.random()*(oe*.88-ue));if(Ee.some(ze=>Math.abs(ze.x-ve)<(ze.s+ue)/2+30&&Math.abs(ze.y-Se)<(ze.s+ue)/2+30))continue;let Ae=re[Ee.length],Le={x:ve,y:Se,s:ue,k:Ae,hit:!1};if(Ae==="hue"||Ae==="swap"){let ze=ie.getImageData(ve,Se,ue,ue),He=ze.data,tt=(100+Math.random()*140)*Math.PI/180,X=Math.cos(tt),gt=Math.sin(tt),Ze=[.299+.701*X+.168*gt,.587-.587*X+.33*gt,.114-.114*X-.497*gt,.299-.299*X-.328*gt,.587+.413*X+.035*gt,.114-.114*X+.292*gt,.299-.3*X+1.25*gt,.587-.588*X-1.05*gt,.114+.886*X-.203*gt];for(let at=0;at<He.length;at+=4){let j=He[at],me=He[at+1],le=He[at+2];if(Ae==="swap"){He[at]=le,He[at+2]=j;continue}He[at]=Ze[0]*j+Ze[1]*me+Ze[2]*le,He[at+1]=Ze[3]*j+Ze[4]*me+Ze[5]*le,He[at+2]=Ze[6]*j+Ze[7]*me+Ze[8]*le}ie.putImageData(ze,ve,Se)}else if(Ae==="flip"){let ze=document.createElement("canvas");ze.width=ze.height=ue,ze.getContext("2d").drawImage(W,ve,Se,ue,ue,0,0,ue,ue),ie.save(),ie.translate(ve+ue,Se),ie.scale(-1,1),ie.drawImage(ze,0,0),ie.restore(),Math.random()<.5&&(ie.save(),ie.translate(ve,Se+ue),ie.scale(1,-1),ie.drawImage(ze,0,0),ie.restore())}else if(Ae==="sticker"){let ze=new Image,[He,tt]=lg(L);ze.src=Ei(He,tt),ze.decode().then(()=>ie.drawImage(ze,ve,Se,ue,ue)).catch(()=>{})}else{let ze=ve+ue+12<Q-ue?ve+ue+12:ve-ue-12,He=document.createElement("canvas");He.width=He.height=ue;let tt=He.getContext("2d");tt.drawImage(W,ze,Se,ue,ue,0,0,ue,ue);let X=tt.createRadialGradient(ue/2,ue/2,ue*.3,ue/2,ue/2,ue*.5);X.addColorStop(0,"#000"),X.addColorStop(1,"rgba(0,0,0,0)"),tt.globalCompositeOperation="destination-in",tt.fillStyle=X,tt.fillRect(0,0,ue,ue),ie.drawImage(He,ve,Se)}Ee.push(Le)}return Ee}function k(){for(let W of[R.ca,R.cb]){let Q=W.getContext("2d");for(let oe of R.diffs)oe.hit&&(Q.lineWidth=Math.max(4,R.W/200),Q.strokeStyle="#ff3d8b",Q.shadowColor="#fff",Q.shadowBlur=6,Q.beginPath(),Q.arc(oe.x+oe.s/2,oe.y+oe.s/2,oe.s*.72,0,7),Q.stroke(),Q.shadowBlur=0)}}let F=()=>{let W=P.querySelector(".spcount");W&&R&&(W.textContent=`\uCC3E\uC740 \uACF3 ${R.found} / 5`)};P.addEventListener("click",W=>{let Q=W.target.closest("button");if(Q&&Q.dataset.s==="close")return U();if(Q&&Q.dataset.s==="next")return D();if(Q&&Q.dataset.s==="done"){let ve=z;z=null,P.hidden=!0,R=null,ve&&ve(!0);return}if(Q&&Q.dataset.s==="hint"&&R){let ve=R.diffs.find(Se=>!Se.hit);if(!ve)return;R.hints++;for(let Se of[R.ca,R.cb]){let Ae=Se.getBoundingClientRect(),Le=document.createElement("div");Le.className="sphint";let ze=Ae.width/R.W;Object.assign(Le.style,{left:Ae.left+(ve.x-ve.s*.3)*ze+"px",top:Ae.top+(ve.y-ve.s*.3)*ze+"px",width:ve.s*1.6*ze+"px",height:ve.s*1.6*ze+"px"}),document.body.appendChild(Le),setTimeout(()=>Le.remove(),1400)}return}let oe=W.target.closest("canvas");if(!oe||!R)return;let ie=oe.getBoundingClientRect(),Ee=(W.clientX-ie.left)*R.W/ie.width,re=(W.clientY-ie.top)*R.H/ie.height,xe=R.W*.02;if(R.over)return;let ue=R.diffs.find(ve=>!ve.hit&&Ee>ve.x-xe&&Ee<ve.x+ve.s+xe&&re>ve.y-xe&&re<ve.y+ve.s+xe);if(ue){if(ue.hit=!0,R.found++,k(),F(),c(100),R.found===5){let ve=c(Math.max(0,300-R.miss*20-R.hints*80));P.querySelector(".spmsg").innerHTML=`\u{1F389} \uB2E4 \uCC3E\uC558\uC5B4\uC694! ${R.miss?`(\uD5DB\uD074\uB9AD ${R.miss}\uBC88)`:"\uD55C \uBC88\uB3C4 \uC548 \uD2C0\uB838\uC5B4\uC694!"} \xB7 \u{1FA99} ${(500+ve).toLocaleString("ko-KR")} \uCF54\uC778 \uD68D\uB4DD
          ${z?'<button class="go" data-s="done">\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30</button>':'<button class="go" data-s="next">\uB2E4\uC74C \uADF8\uB9BC \u25B6 <small class="fee">\u{1FA99} 500</small></button>'}`}}else{if(R.found>=5||R.over)return;if(R.miss++,R.miss>=5){R.over=!0;let Le=P.querySelector(".spcount");Le&&(Le.textContent=`\uCC3E\uC740 \uACF3 ${R.found} / 5 \xB7 \uD5DB\uD074\uB9AD 5\uBC88`),P.querySelector(".spmsg").innerHTML=`\u{1F4A5} <b>\uAC8C\uC784 \uC624\uBC84!</b> \uD5DB\uD074\uB9AD 5\uBC88\uC774\uC5D0\uC694 (\uCC3E\uC740 \uACF3 ${R.found}\uAC1C \xB7 \u{1FA99} ${R.found*100} \uD68D\uB4DD)
          ${z?'<button class="go" data-s="done">\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30</button>':'<button class="go" data-s="next">\uB2E4\uC2DC \uB3C4\uC804 \u25B6 <small class="fee">\u{1FA99} 500</small></button>'}`}let ve=W.clientX,Se=W.clientY,Ae=document.createElement("div");Ae.className="spmiss",Ae.textContent="\u2715",Object.assign(Ae.style,{left:ve+"px",top:Se+"px"}),document.body.appendChild(Ae),setTimeout(()=>Ae.remove(),600)}});let B=u("gmenu"),$=null,ee=[["mjp","\u270A\u270C\uFE0F\u{1F590}\uFE0F","\uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310","\uC774\uAE30\uBA74 \uC624\uD504\uB77C\uC778 \uCFE0\uD3F0 \u{1F381}"],["spot","\u{1F50D}","\uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30","\uB9E4\uC7A5 \uC18D \uB2E4\uB978 \uACF3 5\uAC1C"],["treasure","\u2B50","\uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30","\uC228\uC740 \uBCC4\uC0AC\uD0D5 7\uAC1C \xB7 90\uCD08"]];function Z(W="shop",Q=null){$=Q;let oe=W==="shop",ie=oe?ee:Ud;B.innerHTML=`<div class="gcard"><div class="ghead"><b>${oe?"\u{1F380} \uC18C\uD488\uC0F5 \uC0AC\uC7A5\uB2D8":"\u2615 \uCE74\uD398 \uC9C1\uC6D0"}</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${oe?"\uC5B4\uC11C \uC624\uC138\uC694! \uC2EC\uC2EC\uD558\uBA74 \uC800\uB791 \uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F60A}":Q?"\uAC8C\uC784 \uD55C \uD310 \uD558\uB294 \uB3D9\uC548 \uBA54\uB274 \uB9CC\uB4E4\uC5B4 \uB458\uAC8C\uC694! \u{1F353}":"\uCE74\uD398 \uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \uC7AC\uBC0C\uC5B4\uC694 \u{1F606}"}</p>
      <div class="gpick ${ie.length>3?"many":""}">${ie.map(([Ee,re,xe,ue])=>`<button data-m="${Ee}"><em>${re}</em><b>${xe}</b><small>${ue}</small><i class="fee">\u{1FA99} 500 \xB7 ${sg[Ee]||""}</i></button>`).join("")}</div></div>`,B.hidden=!1,oe?g("\uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F606}",4e3):d&&(d.el.textContent="\uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \u{1F606}",setTimeout(()=>d.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",4e3))}B.addEventListener("click",W=>{let Q=W.target.closest("button");if(!Q)return;B.hidden=!0;let oe=Q.dataset.m,ie=$;if($=null,oe==="close"){ie&&ie(!1);return}if(oe==="mjp")M();else if(oe==="spot")w(ie);else if(oe==="treasure"||oe==="again-treasure")l()&&r.start();else if(oe==="serving"||oe==="again-serving"){if(!l()){ie&&ie(!1);return}V=ie,a.start()}else Ud.some(Ee=>Ee[0]===oe)&&s.open(oe,ie)});let V=null;function ne({score:W,delivered:Q,spilled:oe,trips:ie,over:Ee}){let re=V;V=null,re&&re(!0);let xe=0;try{xe=+localStorage.getItem("sh-best-serving")||0}catch{}let ue=W>xe;if(ue)try{localStorage.setItem("sh-best-serving",W)}catch{}let ve=c(o?o.fromScore("serving",W,Ee):0);B.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${Ee?"\u{1F4A5} <b>\uAC8C\uC784 \uC624\uBC84!</b> \uC74C\uB8CC\uB97C 5\uC794 \uC3DF\uC558\uC5B4\uC694<br>":""}${ie}\uBC88 \uC655\uBCF5\uD574\uC11C \uC74C\uB8CC ${Q}\uC794\uC744 \uBC30\uB2EC\uD588\uC5B4\uC694!${oe?` (\uC3DF\uC740 \uC794 ${oe}\uAC1C \u{1F4A6})`:" \uD55C \uC794\uB3C4 \uC548 \uC3DF\uC558\uC5B4\uC694 \u2728"}</p>
      <p class="mscore">${W}\uC810</p>${h(ve)}<p class="mprev">${ue?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${xe}\uC810`}</p>
      <button class="go" data-m="again-serving">\u{1F501} \uB2E4\uC2DC \uD558\uAE30 <small class="fee">\u{1FA99} 500</small></button></div>`,B.hidden=!1}function q({found:W,total:Q,time:oe,done:ie}){let Ee=0;try{Ee=+localStorage.getItem("sh-best-treasure")||0}catch{}let re=W*100+(ie?Math.max(0,90-oe)*5:0),xe=re>Ee,ue=c(W*100+(ie?300+Math.max(0,90-oe)*5:0));if(xe)try{localStorage.setItem("sh-best-treasure",re)}catch{}B.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2B50 \uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${ie?`\u{1F389} ${oe}\uCD08 \uB9CC\uC5D0 \uBCC4\uC0AC\uD0D5 ${Q}\uAC1C\uB97C \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!`:`\uBCC4\uC0AC\uD0D5 ${Q}\uAC1C \uC911 ${W}\uAC1C\uB97C \uCC3E\uC558\uC5B4\uC694!`}</p>
      <p class="mscore">${re}\uC810</p>${h(ue)}<p class="mprev">${xe?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${Ee}\uC810`}</p>
      <button class="go" data-m="again-treasure">\u{1F501} \uB2E4\uC2DC \uD558\uAE30 <small class="fee">\u{1FA99} 500</small></button></div>`,B.hidden=!1}addEventListener("keydown",W=>{W.code==="Escape"&&(B.hidden?_.hidden?P.hidden||U():v():B.hidden=!0)});let J=W=>f&&Math.hypot(W.x-f.x,W.z-f.z)<2.8;return{get open(){return!_.hidden||!P.hidden||!B.hidden},mjp:M,spot:w,menu:Z,owner:f,cafeStaff:d,treasureResult:q,servingResult:ne,update(W,Q){u("mjp-btn").hidden=!J(W)||!!Q||!_.hidden||!B.hidden,u("cafegame-btn").hidden=!(d&&Math.hypot(W.x-d.x,W.z-d.z)<2.8)||!!Q||!B.hidden}}}var Fb=7,ug=90,Ob=.8;function fg({scene3d:i,data:e,canOccupy:t,player:n,camera:s,showToast:r,onFinish:a}){let l=(b=>document.getElementById(b))("treasure-hud"),c=!1,h=[],u=0,f=0,d=2,g=new Us;for(let b=0;b<10;b++){let P=b*Math.PI/5+Math.PI/2,S=b%2?.045:.1,R=Math.cos(P)*S,I=Math.sin(P)*S;b?g.lineTo(R,I):g.moveTo(R,I)}let _=new cr(g,{depth:.035,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});_.center();let p=["#ffd54a","#ff9cc0","#9fe0cf","#c6a6f0","#ffd54a","#a9d4f5","#ffb37a"],m=(()=>{let b=document.createElement("canvas");b.width=b.height=64;let P=b.getContext("2d"),S=P.createRadialGradient(32,32,0,32,32,32);return S.addColorStop(0,"rgba(255,240,180,1)"),S.addColorStop(1,"rgba(255,240,180,0)"),P.fillStyle=S,P.fillRect(0,0,64,64),new ci(b)})();function M(){let b=[],P=(L,w)=>b.every(U=>Math.hypot(U.x-L,U.z-w)>1.6),S=e.seats.slice().sort(()=>Math.random()-.5);for(let L of S){if(b.length>=3)break;P(L[0],L[1])&&b.push({x:L[0],z:L[1],y:.16,where:"\uC758\uC790 \uC544\uB798"})}let R=e.blocks.filter(L=>L[2]>.15&&L[3]>.15).sort(()=>Math.random()-.5);for(let L of R){if(b.length>=5)break;let[w,U,D,O,k]=L,F=Math.floor(Math.random()*4),B=Math.cos(k),$=Math.sin(k),ee=F<2?(F?1:-1)*(D+.3):v(-D,D),Z=F>=2?(F===3?1:-1)*(O+.3):v(-O,O),V=w+ee*B-Z*$,ne=U+ee*$+Z*B;t(V,ne,.22)&&P(V,ne)&&b.push({x:V,z:ne,y:.35,where:"\uC9C4\uC5F4\uB300 \uC606"})}let I=e.floor.map(L=>L[0]),z=e.floor.map(L=>L[1]);for(let L=0;b.length<Fb&&L<600;L++){let w=v(Math.min(...I),Math.max(...I)),U=v(Math.min(...z),Math.max(...z));t(w,U,.3)&&!t(w,U,.75)&&P(w,U)&&b.push({x:w,z:U,y:.25,where:"\uBCBD\xB7\uCEE4\uD2BC \uADFC\uCC98"})}return b}function v(b,P){return b+Math.random()*(P-b)}function y(){for(let b of h)i.remove(b.g);h=[]}function T(){y(),c=!0,u=ug,f=0,d=2,M().forEach((b,P)=>{let S=new nt;S.position.set(b.x,b.y,b.z);let R=new Je(_,new zt({color:new De(p[P%p.length]).multiplyScalar(1.6),toneMapped:!1})),I=new to(new ea({map:m,color:p[P%p.length],transparent:!0,opacity:.7,depthWrite:!1,blending:ti}));I.scale.setScalar(.5),S.add(I,R),i.add(S),h.push({g:S,m:R,glow:I,p:b,got:!1,pop:0,ph:Math.random()*6})}),r(`\u2B50 \uBCC4\uC0AC\uD0D5 ${h.length}\uAC1C\uB97C 90\uCD08 \uC548\uC5D0 \uCC3E\uC544\uC694! \uAC00\uAE4C\uC774 \uAC00\uBA74 \uC8FC\uC6CC\uC694`),x()}function E(b){c=!1,l.hidden=!0,setTimeout(y,600),a&&a({found:f,total:h.length,time:Math.round(ug-u),done:b})}function x(){l.hidden=!c,c&&(l.innerHTML=`<b>\u2B50 ${f} / ${h.length}</b><span>\u23F1 ${Math.ceil(u)}\uCD08</span><button data-t="hint" ${d?"":"disabled"}>\u{1F4A1} \uD78C\uD2B8 ${d}</button><button data-t="quit">\uADF8\uB9CC</button>`)}return l.addEventListener("click",b=>{let P=b.target.closest("button");if(P){if(P.dataset.t==="quit")return E(!1);if(P.dataset.t==="hint"&&d>0){d--;let S=h.filter(R=>!R.got).sort((R,I)=>Math.hypot(R.p.x-n.x,R.p.z-n.z)-Math.hypot(I.p.x-n.x,I.p.z-n.z))[0];if(S){let R=new H;s.getWorldDirection(R);let I=S.p.x-n.x,z=S.p.z-n.z,L=Math.hypot(I,z),w=Math.atan2(R.x*z-R.z*I,R.x*I+R.z*z),U=Math.abs(w)<.5?"\uC55E\uCABD":Math.abs(w)>2.5?"\uB4A4\uCABD":w>0?"\uC67C\uCABD":"\uC624\uB978\uCABD";r(`\u{1F4A1} \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uBCC4\uC0AC\uD0D5: ${U}\uC73C\uB85C \uC57D ${L.toFixed(1)}m \xB7 ${S.p.where}`),S.flash=2.5}x()}}}),{start:T,get active(){return c},get spots(){return h.map(b=>b.p)},update(b,P){for(let S of h)S.m.rotation.y+=b*2,S.g.position.y=S.p.y+Math.sin(P*2.5+S.ph)*.04,S.flash&&(S.flash=Math.max(0,S.flash-b),S.glow.scale.setScalar(.5+Math.sin(S.flash*12)*.25+.3)),S.got&&(S.pop+=b*3,S.g.scale.setScalar(Math.max(.001,1+S.pop*1.5)*(1-Math.min(1,S.pop))),S.g.position.y+=S.pop*.5);if(c){u-=b;for(let S of h)!S.got&&Math.hypot(S.p.x-n.x,S.p.z-n.z)<Ob&&(S.got=!0,f++,x(),r(f===h.length?"\u{1F389} \uBCC4\uC0AC\uD0D5\uC744 \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!":`\u2B50 \uCC3E\uC558\uB2E4! ${f} / ${h.length}`),vt(880,.1,"triangle",.12),vt(1320,.14,"triangle",.1,.07));if(f===h.length)return E(!0);if(u<=0)return E(!1);Math.ceil(u)!==x.last&&(x.last=Math.ceil(u),x())}}}}var Bb=60,Hh=.42,Fd=5,dg=[["melonSoda",{}],["chocoMilk",{}],["peachTea",{}],["creamSoda",{}],["bananaMilk",{}],["latte",{}]];function pg({scene3d:i,data:e,hero:t,player:n,npcs:s,showToast:r,onFinish:a}){let o=q=>document.getElementById(q),l=o("serve-hud"),c=s.find(q=>q.id==="cafe"),h=!1,u=0,f=0,d=0,g=0,_=0,p=!1,m=[],M=null,v=!1,y=0,T={roll:0,vroll:0,pitch:0,vpitch:0,px:0,pz:0,vx:0,vz:0,face:0,bump:1,bob:0,dt:0,drift:0,dcur:0},E=new H,x=new nt;x.visible=!1,i.add(x);let b=new Jt({color:"#ffc2da",roughness:.5}),P=new Je(new Gt(.42,.02,.28),b);x.add(P);for(let q of[-1,1]){let J=new Je(new Gt(.42,.035,.015),b);J.position.set(0,.02,.135*q),x.add(J)}let S=new nt;S.position.y=.012,x.add(S);let R=new yo(.42,.55,40);R.rotateX(-Math.PI/2);let I=q=>{let J=new nt,W=new Je(R,new zt({color:q,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1}));W.position.y=.02,J.add(W);let Q=new Je(new Ns(.13,.3,4),new zt({color:new De(q).multiplyScalar(1.6),toneMapped:!1}));Q.rotation.x=Math.PI,Q.position.y=1.5,J.add(Q);let oe=new Je(new lt(.5,.55,1.2,24,1,!0),new zt({color:q,transparent:!0,opacity:.22,side:Ht,depthWrite:!1,blending:ti}));return oe.position.y=.6,J.add(oe),J.userData={ring:W,cone:Q},J.visible=!1,i.add(J),J},z=I("#9fe0cf"),L=I("#ff8fb7"),w=()=>c?{x:c.x-1.6,z:c.z}:{x:e.cafe[0],z:e.cafe[1]},U=[];for(let q of e.seats){if(q[1]<2.5||q[0]>4.5)continue;let J=q[0]+Math.sin(q[2])*.5,W=q[1]+Math.cos(q[2])*.5;U.some(Q=>Math.hypot(Q.x-J,Q.z-W)<.9)||U.push({x:J,z:W,seat:q})}let D=[];function O(){S.clear(),m=[];for(let J=0;J<3;J++){let[W,Q]=dg[Math.floor(Math.random()*dg.length)],oe=sl(W,Q);oe.g.scale.setScalar(.66),oe.g.position.set((J-1)*.12,0,J%2?.04:-.03),S.add(oe.g),m.push({g:oe.g,k:W,o:Q,fall:0})}v=!0,T.roll=T.pitch=T.vroll=T.vpitch=T.dcur=0,T.dt=1.2;let q=U.filter(J=>Math.hypot(J.x-n.x,J.z-n.z)>2.2);M=(q.length?q:U)[Math.floor(Math.random()*(q.length||U.length))],L.position.set(M.x,0,M.z),L.visible=!0,z.visible=!1,vt(660,.08),vt(990,.1,"triangle",.1,.06),r("\u{1F964} \uC74C\uB8CC\uB97C \uBC1B\uC558\uC5B4\uC694! \uBC18\uC9DD\uC774\uB294 \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC870\uC2EC\uC870\uC2EC \uAC78\uC5B4\uAC00\uC694")}function k(){let q=m.filter(Q=>!Q.fall).length;m.filter(Q=>!Q.fall).forEach((Q,oe)=>{let ie=sl(Q.k,Q.o);ie.g.scale.setScalar(1.05),ie.g.position.set(M.x+(oe-1)*.14,.74,M.z+(oe%2?.05:-.05)),i.add(ie.g),D.push({g:ie.g,t:3})}),S.clear(),m=[],v=!1,d+=q,_++;let J=q*100+(q===3?50:0);f+=J,L.visible=!1;let W=w();z.position.set(W.x,0,W.z),z.visible=!0,[523,659,784].forEach((Q,oe)=>vt(Q,.14,"triangle",.12,oe*.07)),r(q===3?`\u2728 \uD55C \uBC29\uC6B8\uB3C4 \uC548 \uD758\uB838\uC5B4\uC694! +${J} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`:`\uC11C\uBE59 \uC644\uB8CC ${q}\uC794 +${J} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`),c&&(c.el.textContent="\uC798\uD588\uC5B4\uC694! \uB2E4\uC74C \uC74C\uB8CC \uC900\uBE44\uB410\uC5B4\uC694 \u2615")}function F(){if(p)return;let q=m.find(W=>!W.fall);if(!q)return;q.fall=.001,g++,T.vroll*=-.3,T.roll*=.4,T.vpitch*=-.3,T.pitch*=.4,vt(220,.25,"sawtooth",.08);let J=m.filter(W=>!W.fall).length;if(g>=Fd){r(`\u{1F4A5} \uAC8C\uC784 \uC624\uBC84! \uC74C\uB8CC\uB97C ${Fd}\uC794\uC774\uB098 \uC3DF\uC558\uC5B4\uC694`),p=!0,setTimeout($,700);return}if(r(J?`\u{1F4A6} \uC557 \uD55C \uC794 \uC3DF\uC558\uC5B4\uC694! \uB0A8\uC740 \uC74C\uB8CC ${J}\uC794`:"\u{1F4A6} \uB2E4 \uC3DF\uC558\uC5B4\uC694\u2026 \uCE74\uC6B4\uD130\uC5D0\uC11C \uB2E4\uC2DC \uBC1B\uC544 \uC640\uC694"),!J){v=!1,L.visible=!1;let W=w();z.position.set(W.x,0,W.z),z.visible=!0}}function B(){if(!U.length)return r("\uCE74\uD398 \uD14C\uC774\uBE14\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694");h=!0,p=!1,ee=null,u=Bb,f=0,d=0,g=0,_=0;let q=w();n.x=q.x,n.z=q.z,n.face=n.yaw=-Math.PI/2,n.pitch=-.32,T.px=n.x,T.pz=n.z,T.vx=T.vz=0,T.face=n.yaw,O(),Z()}function $(){h&&(h=!1,v=!1,x.visible=!1,S.clear(),m=[],L.visible=!1,z.visible=!1,l.hidden=!0,a&&a({score:f,delivered:d,spilled:g,trips:_,over:p}))}let ee=null;function Z(){if(l.hidden=!h,!h)return;ee||(l.innerHTML=`<div class="sv-top"><b></b><span class="sv-t"></span><span class="sv-cups"></span><button data-s="quit">\uADF8\uB9CC</button></div>
        <div class="sv-row"><div class="sv-dir"><i>\u2B06</i><small></small></div><div class="sv-meter"><i></i><em></em></div><div class="sv-lvl"><i></i></div></div>`,ee={b:l.querySelector("b"),t:l.querySelector(".sv-t"),c:l.querySelector(".sv-cups"),m:l.querySelector(".sv-meter i"),l:l.querySelector(".sv-lvl i"),meter:l.querySelector(".sv-meter"),di:l.querySelector(".sv-dir i"),dd:l.querySelector(".sv-dir small")});let q=m.filter(xe=>!xe.fall).length,J=ol(T.roll/Hh,-1.1,1.1),W=ol(T.pitch/Hh,-1.1,1.1);ee.b.textContent=`\u2615 ${f}\uC810`,ee.t.textContent=`\u23F1 ${Math.ceil(u)}\uCD08`,ee.c.textContent=(v?"\u{1F964}".repeat(q)+"\xB7".repeat(3-q):"\uCE74\uC6B4\uD130\uB85C!")+` \u{1F4A6}${g}/${Fd}`;let Q=v?M:w(),oe=Q.x-n.x,ie=Q.z-n.z,Ee=Math.atan2(oe,ie)-n.yaw;Ee=Math.atan2(Math.sin(Ee),Math.cos(Ee)),ee.di.style.transform=`rotate(${-Ee}rad)`,ee.dd.textContent=`${Math.hypot(oe,ie).toFixed(1)}m`,ee.m.style.left=`${50+J*45}%`,ee.l.style.transform=`translate(${J*15}px, ${-W*15}px)`;let re=Math.max(Math.abs(J),Math.abs(W))>.72;ee.meter.classList.toggle("danger",re),ee.l.parentNode.classList.toggle("danger",re)}l.addEventListener("click",q=>{let J=q.target.closest("[data-s]");J&&J.dataset.s==="quit"&&$()});let V=o("serve-bal");V.addEventListener("pointerdown",q=>{let J=q.target.closest("[data-b]");J&&(q.preventDefault(),y=+J.dataset.b)});let ne=()=>y=0;return V.addEventListener("pointerup",ne),V.addEventListener("pointercancel",ne),V.addEventListener("pointerleave",ne),addEventListener("keydown",q=>{h&&(q.code==="KeyZ"&&(y=-1),q.code==="KeyC"&&(y=1))}),addEventListener("keyup",q=>{(q.code==="KeyZ"||q.code==="KeyC")&&(y=0)}),{start:B,get active(){return h},get target(){return M},get tilt(){return[T.roll,T.pitch]},place(q,J){if(!x.visible)return;let W=Math.sin(J),Q=Math.cos(J),oe=Math.sin(T.bob)*.012;x.position.set(q.position.x+W*.5,q.position.y-.36+Math.abs(oe),q.position.z+Q*.5),x.rotation.set(0,J,0),x.rotateX(T.pitch),x.rotateZ(-T.roll+oe*.6)},update(q,J){for(let Ae=D.length-1;Ae>=0;Ae--){let Le=D[Ae];Le.t-=q,Le.t<.5&&Le.g.scale.setScalar(1.05*Math.max(.001,Le.t*2)),Le.t<=0&&(i.remove(Le.g),D.splice(Ae,1))}for(let Ae of[z,L])Ae.visible&&(Ae.userData.cone.position.y=1.5+Math.sin(J*4)*.1,Ae.userData.cone.rotation.y+=q*2,Ae.userData.ring.material.opacity=.55+Math.sin(J*5)*.3);if(V.hidden=!h||!v,!h)return;u-=q;let W=(n.x-T.px)/Math.max(q,.001),Q=(n.z-T.pz)/Math.max(q,.001),oe=(W-T.vx)/Math.max(q,.001),ie=(Q-T.vz)/Math.max(q,.001),Ee=n.yaw-T.face;Ee=Math.atan2(Math.sin(Ee),Math.cos(Ee))/Math.max(q,.001),T.px=n.x,T.pz=n.z,T.vx=W,T.vz=Q,T.face=n.yaw;let re=Math.sin(n.yaw),xe=Math.cos(n.yaw),ue=ol(oe*re+ie*xe,-12,12),ve=ol(oe*xe-ie*re,-12,12),Se=Math.hypot(W,Q);if(v){let Ae=Se>.25;T.bump-=q;let Le=0;T.bump<=0&&(T.bump=Ae?.35+Math.random()*.5:.9+Math.random(),Le=(Math.random()-.5)*(Ae?2.2:.5)),T.dt-=q,T.dt<=0&&(T.dt=.9+Math.random()*1.2,T.drift=(Math.random()<.5?-1:1)*(Ae?1.1+Math.random()*.9:.3+Math.random()*.4)),T.dcur+=(T.drift-T.dcur)*Math.min(1,q*2.5),T.vroll+=(-T.roll*4.5-T.vroll*2+T.dcur+ve*.2+ol(Ee,-5,5)*Se*.55+y*1.8)*q+Le*.7,T.vpitch+=(-T.pitch*6-T.vpitch*2.4-ue*.13)*q+Le*.35,T.roll+=T.vroll*q,T.pitch+=T.vpitch*q,(Math.abs(T.roll)>Hh||Math.abs(T.pitch)>Hh)&&F(),T.bob+=q*Se*9}for(let Ae of m)Ae.fall&&(Ae.fall+=q,Ae.g.position.y-=Ae.fall*.08,Ae.g.rotation.z+=q*6*Math.sign(T.roll||1),Ae.fall>.6&&(Ae.g.visible=!1));if(x.visible=v||m.some(Ae=>Ae.fall&&Ae.fall<.6),v&&M&&Math.hypot(n.x-M.x,n.z-M.z)<1.05&&k(),!v){let Ae=w();Math.hypot(n.x-Ae.x,n.z-Ae.z)<.9&&O()}if(u<=0)return $();Z()}}}function ol(i,e,t){return Math.max(e,Math.min(t,i))}function kb(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new ci(i);return n.colorSpace=Lt,n}function mg({scene3d:i,data:e,storeRoot:t,isTouch:n}){let s=e.ceiling||2.9,r=e.floor.map(O=>O[0]),a=e.floor.map(O=>O[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=(O,k)=>{let F=!1,B=e.floor;for(let $=0,ee=B.length-1;$<B.length;ee=$++){let[Z,V]=B[$],[ne,q]=B[ee];V>k!=q>k&&O<(ne-Z)*(k-V)/(q-V)+Z&&(F=!F)}return F},c=kb(),h=n?140:260,u=new Float32Array(h*3),f=new Float32Array(h*3),d=new Float32Array(h),g=["#ffffff","#ffd6e7","#d9f5e6","#e3dcff","#fff1c9"].map(O=>new De(O));for(let O=0;O<h;O++){let k,F;do k=o[0]+Math.random()*(o[2]-o[0]),F=o[1]+Math.random()*(o[3]-o[1]);while(!l(k,F));u.set([k,.3+Math.random()*(s-.5),F],O*3);let B=g[O%g.length];f.set([B.r,B.g,B.b],O*3),d[O]=Math.random()*100}let _=new Pt;_.setAttribute("position",new Zt(u,3)),_.setAttribute("color",new Zt(f,3));let p=new Ds(_,new is({size:.07,map:c,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:ti,sizeAttenuation:!0}));p.frustumCulled=!1,p.renderOrder=5,i.add(p);let m=u.slice(),M=[],v=e.floor,y=(o[0]+o[2])/2,T=(o[1]+o[3])/2;for(let O=0;O<v.length;O++){let[k,F]=v[O],[B,$]=v[(O+1)%v.length],ee=Math.hypot(B-k,$-F);if(ee<1.2)continue;let Z=-($-F)/ee,V=(B-k)/ee,ne=(k+B)/2,q=(F+$)/2;l(ne+Z*.2,q+V*.2)||(Z=-Z,V=-V);let J=Math.max(1,Math.round(ee/1.15)),W=6;for(let Q=0;Q<J;Q++)for(let oe=0;oe<W;oe++){let ie=(Q+oe/W)/J,Ee=oe/W,re=k+(B-k)*ie+Z*.07,xe=F+($-F)*ie+V*.07,ue=s-.14-Math.sin(Ee*Math.PI)*.16;l(re,xe)&&M.push([re,ue,xe])}}let E=["#fff4d6","#ffc2da","#c9f2dc","#fff4d6","#d9ccff"].map(O=>new De(O)),x=new zt({color:new De(2.8,2.8,2.8),toneMapped:!1}),b=new ns(new nn(.032,10,8),x,M.length),P=new Ke,S=new De;M.forEach(([O,k,F],B)=>{P.makeTranslation(O,k,F),b.setMatrixAt(B,P),b.setColorAt(B,E[B%E.length])}),b.frustumCulled=!1,i.add(b);let R=new Pt().setFromPoints(M.flatMap((O,k)=>k&&Math.hypot(O[0]-M[k-1][0],O[2]-M[k-1][2])<.4?[new H(...M[k-1]),new H(...O)]:[]));i.add(new or(R,new Ls({color:"#b7a6c9",transparent:!0,opacity:.6})));let I=new Pt;I.setAttribute("position",new Zt(new Float32Array(M.flat()),3));let z=new Float32Array(M.length*3);M.forEach((O,k)=>{let F=E[k%E.length];z.set([F.r,F.g,F.b],k*3)}),I.setAttribute("color",new Zt(z,3));let L=new Ds(I,new is({size:.3,map:c,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:ti}));L.frustumCulled=!1,i.add(L);let w=[];t.updateMatrixWorld(!0),t.traverse(O=>{if(O.isMesh&&O.material&&O.material.name==="light"){let k=new yn().setFromObject(O);w.push(k.getCenter(new H).setY(k.min.y))}});let U=new Dt({transparent:!0,depthWrite:!1,blending:ti,side:Ht,uniforms:{uColor:{value:new De("#fff3df")},uStrength:{value:.045}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:"uniform vec3 uColor; uniform float uStrength; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 2.5); float a = uStrength * smoothstep(0.0, 1.0, vY) * edge; gl_FragColor = vec4(uColor * a, a); }"}),D=Math.max(1,Math.ceil(w.length/(n?6:10)));return w.filter((O,k)=>k%D===0).forEach(O=>{let k=O.y-.02,F=new Je(new lt(.22,.7,k,24,1,!0),U);F.position.set(O.x,k/2,O.z),F.renderOrder=4,i.add(F)}),{update(O,k){let F=_.attributes.position.array;for(let B=0;B<h;B++){let $=d[B],ee=B*3;F[ee]=m[ee]+Math.sin(k*.21+$)*.25,F[ee+1]=m[ee+1]+Math.sin(k*.17+$*1.3)*.18,F[ee+2]=m[ee+2]+Math.cos(k*.19+$*.7)*.25}_.attributes.position.needsUpdate=!0,p.material.opacity=.65+Math.sin(k*1.3)*.15;for(let B=0;B<6;B++){let $=Math.floor(Math.random()*M.length);S.copy(E[$%E.length]).multiplyScalar(.55+Math.random()*.9),b.setColorAt($,S)}b.instanceColor.needsUpdate=!0}}}var Gh=class extends sr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Gt;e.deleteAttribute("uv");let t=new Jt({side:Sn}),n=new Jt,s=new ur(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ns(e,n,6),o=new Ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Je(e,Ea(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Je(e,Ea(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Je(e,Ea(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Je(e,Ea(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Je(e,Ea(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Je(e,Ea(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ea(i){return new So({color:0,emissive:16777215,emissiveIntensity:i})}var Hi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zb=new hs(-1,1,1,-1,0,1),Od=class extends Pt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},Hb=new Od,Gi=class{constructor(e){this._mesh=new Je(Hb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var wa=class extends kn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bn.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ll=class extends kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vh=class extends kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Wh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wa(Hi),this.copyPass.material.blending=gn,this.timer=new Po}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ll!==void 0&&(a instanceof ll?n=!0:a instanceof Vh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xh=class extends kn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new De}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var cl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ke},cameraWorldMatrix:{value:new Ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

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
		}`},hl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},$h={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function gg(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Gb(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new H(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new li(s,e,e);return r.wrapS=Rn,r.wrapT=Rn,r.needsUpdate=!0,r}function Gb(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var ul={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Bd(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraProjectionMatrixInverse:{value:new Ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Bd(i,e,t){let n=Vb(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Vb(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new H(Math.cos(r),Math.sin(r),a))}return n}var qh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,_=t-d,p,m;g>_?(p=1,m=0):(p=0,m=1);let M=g-p+h,v=_-m+h,y=g-1+2*h,T=_-1+2*h,E=l&255,x=c&255,b=this.perm[E+this.perm[x]]%12,P=this.perm[E+p+this.perm[x+m]]%12,S=this.perm[E+1+this.perm[x+1]]%12,R=.5-g*g-_*_;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[b],g,_));let I=.5-M*M-v*v;I<0?s=0:(I*=I,s=I*I*this._dot(this.grad3[P],M,v));let z=.5-y*y-T*T;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[S],y,T)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,_=h-g,p=u-g,m=f-g,M=e-_,v=t-p,y=n-m,T,E,x,b,P,S;M>=v?v>=y?(T=1,E=0,x=0,b=1,P=1,S=0):M>=y?(T=1,E=0,x=0,b=1,P=0,S=1):(T=0,E=0,x=1,b=1,P=0,S=1):v<y?(T=0,E=0,x=1,b=0,P=1,S=1):M<y?(T=0,E=1,x=0,b=0,P=1,S=1):(T=0,E=1,x=0,b=1,P=1,S=0);let R=M-T+d,I=v-E+d,z=y-x+d,L=M-b+2*d,w=v-P+2*d,U=y-S+2*d,D=M-1+3*d,O=v-1+3*d,k=y-1+3*d,F=h&255,B=u&255,$=f&255,ee=this.perm[F+this.perm[B+this.perm[$]]]%12,Z=this.perm[F+T+this.perm[B+E+this.perm[$+x]]]%12,V=this.perm[F+b+this.perm[B+P+this.perm[$+S]]]%12,ne=this.perm[F+1+this.perm[B+1+this.perm[$+1]]]%12,q=.6-M*M-v*v-y*y;q<0?s=0:(q*=q,s=q*q*this._dot3(this.grad3[ee],M,v,y));let J=.6-R*R-I*I-z*z;J<0?r=0:(J*=J,r=J*J*this._dot3(this.grad3[Z],R,I,z));let W=.6-L*L-w*w-U*U;W<0?a=0:(W*=W,a=W*W*this._dot3(this.grad3[V],L,w,U));let Q=.6-D*D-O*O-k*k;return Q<0?o=0:(Q*=Q,o=Q*Q*this._dot3(this.grad3[ne],D,O,k)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,_=(e+t+n+s)*l,p=Math.floor(e+_),m=Math.floor(t+_),M=Math.floor(n+_),v=Math.floor(s+_),y=(p+m+M+v)*c,T=p-y,E=m-y,x=M-y,b=v-y,P=e-T,S=t-E,R=n-x,I=s-b,z=P>S?32:0,L=P>R?16:0,w=S>R?8:0,U=P>I?4:0,D=S>I?2:0,O=R>I?1:0,k=z+L+w+U+D+O,F=a[k][0]>=3?1:0,B=a[k][1]>=3?1:0,$=a[k][2]>=3?1:0,ee=a[k][3]>=3?1:0,Z=a[k][0]>=2?1:0,V=a[k][1]>=2?1:0,ne=a[k][2]>=2?1:0,q=a[k][3]>=2?1:0,J=a[k][0]>=1?1:0,W=a[k][1]>=1?1:0,Q=a[k][2]>=1?1:0,oe=a[k][3]>=1?1:0,ie=P-F+c,Ee=S-B+c,re=R-$+c,xe=I-ee+c,ue=P-Z+2*c,ve=S-V+2*c,Se=R-ne+2*c,Ae=I-q+2*c,Le=P-J+3*c,ze=S-W+3*c,He=R-Q+3*c,tt=I-oe+3*c,X=P-1+4*c,gt=S-1+4*c,Ze=R-1+4*c,at=I-1+4*c,j=p&255,me=m&255,le=M&255,Me=v&255,N=o[j+o[me+o[le+o[Me]]]]%32,A=o[j+F+o[me+B+o[le+$+o[Me+ee]]]]%32,Y=o[j+Z+o[me+V+o[le+ne+o[Me+q]]]]%32,ge=o[j+J+o[me+W+o[le+Q+o[Me+oe]]]]%32,ae=o[j+1+o[me+1+o[le+1+o[Me+1]]]]%32,_e=.6-P*P-S*S-R*R-I*I;_e<0?h=0:(_e*=_e,h=_e*_e*this._dot4(r[N],P,S,R,I));let Te=.6-ie*ie-Ee*Ee-re*re-xe*xe;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(r[A],ie,Ee,re,xe));let ce=.6-ue*ue-ve*ve-Se*Se-Ae*Ae;ce<0?f=0:(ce*=ce,f=ce*ce*this._dot4(r[Y],ue,ve,Se,Ae));let de=.6-Le*Le-ze*ze-He*He-tt*tt;de<0?d=0:(de*=de,d=de*de*this._dot4(r[ge],Le,ze,He,tt));let Ce=.6-X*X-gt*gt-Ze*Ze-at*at;return Ce<0?g=0:(Ce*=Ce,g=Ce*Ce*this._dot4(r[ae],X,gt,Ze,at)),27*(h+u+f+d+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Aa=class i extends kn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=gg(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new kt(this.width,this.height,{type:Xt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Dt({defines:Object.assign({},cl.defines),uniforms:bn.clone(cl.uniforms),vertexShader:cl.vertexShader,fragmentShader:cl.fragmentShader,blending:gn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Mo,this.normalMaterial.blending=gn,this.pdMaterial=new Dt({defines:Object.assign({},ul.defines),uniforms:bn.clone(ul.uniforms),vertexShader:ul.vertexShader,fragmentShader:ul.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Dt({defines:Object.assign({},hl.defines),uniforms:bn.clone(hl.uniforms),vertexShader:hl.vertexShader,fragmentShader:hl.fragmentShader,blending:gn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Dt({uniforms:bn.clone(Hi.uniforms),vertexShader:Hi.vertexShader,fragmentShader:Hi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Lo,blendDst:dr,blendEquation:hi,blendSrcAlpha:Io,blendDstAlpha:dr,blendEquationAlpha:hi}),this.blendMaterial=new Dt({uniforms:bn.clone($h.uniforms),vertexShader:$h.vertexShader,fragmentShader:$h.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Cc,blendSrc:Lo,blendDst:dr,blendEquation:hi,blendSrcAlpha:Io,blendDstAlpha:dr,blendEquationAlpha:hi}),this._fsQuad=new Gi(null),this._originalClearColor=new De,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new yi;s.format=Si,s.type=fs,this.normalRenderTarget=new kt(this.width,this.height,{minFilter:Bt,magFilter:Bt,type:Xt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Bd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new qh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new li(s,e,e,Vn,Cn);return r.wrapS=Rn,r.wrapT=Rn,r.needsUpdate=!0,r}};Aa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var fl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Yh=class extends kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=bn.clone(fl.uniforms),this.material=new sa({name:fl.name,uniforms:this.uniforms,vertexShader:fl.vertexShader,fragmentShader:fl.fragmentShader}),this._fsQuad=new Gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Do?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===No?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Oo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ra=class i extends kn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new De(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,a,{type:Xt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new kt(r,a,{type:Xt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new kt(r,a,{type:Xt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=xg;this.highPassUniforms=bn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=bn.clone(Hi.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:Hi.vertexShader,fragmentShader:Hi.fragmentShader,premultipliedAlpha:!0,blending:ti,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new De,this._oldClearAlpha=1,this._basic=new zt,this._fsQuad=new Gi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Dt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ra.BlurDirectionX=new ye(1,0);Ra.BlurDirectionY=new ye(0,1);var dl=class i extends Je{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Jn,u=new H,f=new H,d=new H,g=new Ke,_=new H(0,0,-1),p=new Rt,m=new H,M=new H,v=new Rt,y=new Ke,T=new kt(r,a,{samples:c,type:Xt}),E=new Dt({name:l.name!==void 0?l.name:"unspecified",uniforms:bn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=T.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=y,this.material=E,this.onBeforeRender=function(x,b,P){let S=this.getReflectionCamera(P);if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(P.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),m.subVectors(f,d),m.dot(u)>0===!0&&this.forceUpdate===!1)return;m.reflect(u).negate(),m.add(f),g.extractRotation(P.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(d),M.subVectors(f,_),M.reflect(u).negate(),M.add(f),S.position.copy(m),S.up.set(0,1,0),S.up.applyMatrix4(g),S.up.reflect(u),S.lookAt(M),S.far=P.far,S.updateMatrixWorld(),S.projectionMatrix.copy(P.projectionMatrix),S.projectionMatrix.elements[8]*=-1,S.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(S.projectionMatrix),y.multiply(S.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(S.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let I=S.projectionMatrix;S.isOrthographicCamera?(v.x=(Math.sign(p.x)+I.elements[8])/I.elements[0],v.y=(Math.sign(p.y)+I.elements[9])/I.elements[5],v.z=-P.far,v.w=1):(v.x=(Math.sign(p.x)+I.elements[8])/I.elements[0],v.y=(Math.sign(p.y)+I.elements[9])/I.elements[5],v.z=-1,v.w=(1+I.elements[10])/I.elements[14]),p.multiplyScalar(2/p.dot(v)),I.elements[2]=p.x,I.elements[6]=p.y,S.isOrthographicCamera?(I.elements[10]=p.z-o,I.elements[14]=p.w-1):(I.elements[10]=p.z+1-o,I.elements[14]=p.w),n.visible=!1;let z=x.getRenderTarget(),L=x.xr.enabled,w=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(T),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(b,S),x.xr.enabled=L,x.shadowMap.autoUpdate=w,x.setRenderTarget(z);let U=P.viewport;U!==void 0&&x.state.viewport(U),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let b=this._reflectionCameras.get(x);return b===void 0&&(b=x.clone(),this._reflectionCameras.set(x,b)),b}}};dl.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var wt=i=>document.getElementById(i),je={canvas:wt("room"),overlay:wt("overlay"),bar:wt("bar"),pct:wt("pct"),enter:wt("enter"),where:wt("where"),map:wt("map"),toast:wt("toast"),joy:wt("joy"),knob:wt("knob"),err:wt("err")},si=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",si);var Wt;try{Wt=new yh({canvas:je.canvas,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(i){throw je.err.hidden=!1,je.err.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C 3D(WebGL)\uB97C \uCF24 \uC218 \uC5C6\uC5B4\uC694. \uCD5C\uC2E0 Chrome\xB7Safari\xB7Edge\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.",i}Wt.setPixelRatio(Math.min(window.devicePixelRatio||1,si?1.5:1.75));Wt.outputColorSpace=Lt;Wt.toneMapping=pr;Wt.toneMappingExposure=1.05;Wt.shadowMap.enabled=!0;Wt.shadowMap.type=fr;Wt.shadowMap.autoUpdate=!1;var Vt=new sr,Ag=new De("#e9e2fb");Vt.background=Ag;Vt.fog=new Ja(Ag,13,32);var bt=new on(66,1,.05,60),Wb=new ga(Wt);Vt.environment=Wb.fromScene(new Gh,.04).texture;Vt.environmentIntensity=.55;Vt.add(new wo("#fffafd","#e3d2ec",.7));var Ai=new Os("#fff6ec",2.4);Ai.position.set(-3.2,9,2.4);Ai.target.position.set(0,0,.4);Vt.add(Ai.target);Ai.castShadow=!0;Ai.shadow.mapSize.set(si?2048:3072,si?2048:3072);Object.assign(Ai.shadow.camera,{left:-10.5,right:10.5,top:10.5,bottom:-10.5,near:1,far:22});Ai.shadow.bias=-4e-4;Ai.shadow.normalBias=.025;Ai.shadow.radius=5;Ai.shadow.blurSamples=12;var Rg=new Os("#f1e9ff",.55);Rg.position.set(2.5,4,-3);Vt.add(Rg);Vt.add(Ai);var Cg=k0(),Wd={floor:"#e4d6d8",mint:"#cbeebb",trim:"#b2dca0",ceiling:"#f8f3fb",pink:"#f6b7d2",pinkChair:"#f2a6c9",mintChair:"#a9dcbf",shelf:"#fff3e3",blue:"#a9d4f5",white:"#fbf8f2",steel:"#b3b8c6",glass:"#bfe3f0",curtain:"#f2a9c8",greenDrape:"#b9d6a4",greenCloth:"#b7df8f",pegboard:"#f1dfbd",paperA:"#f2b0c2",paperB:"#a9d0ec",paperC:"#f3d08f",paperD:"#c3dca0",paperE:"#cdbcf0",light:"#fffbe9",handle:"#8fb98a",displayWire:"#e6def2",acrylicEdge:"#c9e6f2",labelInk:"#8a78b8",pinkBasket:"#e7a2c4",meshTray:"#cdc4e6",paperWhite:"#fffaf7",line:"#c8b9c9",wood:"#e6bf93",woodDark:"#c99c6e",plushCream:"#fbecc9",plushPink:"#f8b9d3",plushBlue:"#bcdcf6",clothWhite:"#fffbf6"},kd=new Map;function Xd(i){if(kd.has(i.name))return kd.get(i.name);let e=Wd[i.name]?new De(Wd[i.name]):i.color.clone(),t=new Jt({color:e,roughness:.72,metalness:0,side:Ht});return(i.name==="steel"||i.name==="handle")&&(t.metalness=.45,t.roughness=.35),i.name==="floor"&&(t.roughness=.5),i.name==="acrylicEdge"&&(t.roughness=.25),i.name==="mirror"&&(t.metalness=1,t.roughness=.04,t.color=new De("#eef3f7"),t.envMapIntensity=1.4),i.name==="leafGreen"&&(t.color=new De("#86cc78")),t.name=i.name,i.name==="glass"&&(t.transparent=!0,t.opacity=.32,t.depthWrite=!1,t.roughness=.05,t.metalness=.1),i.name==="light"&&(t.emissive=new De("#fff6e0"),t.emissiveIntensity=2.6),i.name==="ceiling"&&(t.emissive=new De("#f3ecf7"),t.emissiveIntensity=.55),(i.name==="curtain"||i.name==="greenCloth")&&(t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= 0.88 + 0.12 * te.x * te.y;`)}),kd.set(i.name,t),t}var zd=1.32,Xb=.2,_g=2.4,Ie={x:0,z:0,yaw:0,pitch:-.06,face:0},ys=!0,Vs=2.4,Pg=2.7,Qh=-.5,$d=null;try{$d=localStorage.getItem("sh-look")}catch{}var sn=md(Cg,{look:yr.includes($d)?$d:yr[Math.floor(Math.random()*yr.length)]});Vt.add(sn.root);var mt=null,_l=!1,Xs=!1,vg=!1,ii=null,_s=null,wi=null,zn=null,qd=null,xn=null,Pa=null,xs=null,qn=null,Ws=null,yg=()=>Pa&&Pa.isOpen||xn&&xn.open||ii&&ii.open||_s&&_s.open||wi&&wi.isOpen||zn&&zn.active;function Zh(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}var Ig=Array.from({length:12},(i,e)=>[Math.cos(e*Math.PI/6),Math.sin(e*Math.PI/6)]);function wr(i,e,t=Xb){if(!Zh(i,e,mt.floor))return!1;for(let[n,s]of Ig)if(!Zh(i+n*t,e+s*t,mt.floor))return!1;for(let[n,s,r,a,o]of mt.blocks){let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),d=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+d*d<t*t)return!1}return!0}function $b(i,e,t=.12){if(!Zh(i,e,mt.floor))return!1;for(let[n,s]of Ig)if(!Zh(i+n*t,e+s*t,mt.floor))return!1;for(let[n,s,r,a,o]of mt.blocks){if(Math.min(r,a)>.1)continue;let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),d=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+d*d<t*t)return!1}return!0}function Hd(i,e,t=-.06){jt=null,Ie.x=i[0],Ie.z=i[1],Ie.yaw=Ie.face=Math.atan2(e[0]-Ie.x,e[1]-Ie.z),Ie.pitch=ys?Qh:t,Vs=.5}var gl=()=>mt&&mt.scale||1,Jh={entry:()=>Hd(mt.spawn,mt.look),display:()=>Hd(mt.displayView,mt.displayLook,-.3),cafe:()=>Hd(mt.cafe,[-2.6*gl(),3.7*gl()])};async function qb(){let i=fetch("scene.json").then(r=>{if(!r.ok)throw Error("scene.json "+r.status);return r.json()}),e=7907728,t=(async()=>{let r=await fetch("store.json");if(!r.ok)throw Error("store.json "+r.status);let a;if(r.body&&r.body.getReader){let c=r.body.getReader(),h=[],u=0;for(;;){let{done:f,value:d}=await c.read();if(f)break;h.push(d),u+=d.length;let g=Math.min(99,Math.round(u/e*100));je.bar.style.width=g+"%",je.pct.textContent="\uB9E4\uC7A5 \uBD88\uB7EC\uC624\uB294 \uC911\u2026 "+g+"%"}a=new TextDecoder().decode(await new Blob(h).arrayBuffer())}else a=await r.text();let o=atob(JSON.parse(a)),l=new Uint8Array(o.length);for(let c=0;c<o.length;c++)l[c]=o.charCodeAt(c);return new Zo().parseAsync(l.buffer,"")})(),[n,s]=await Promise.all([i,t]);mt=n,s.scene.traverse(r=>{if(r.isMesh){r.material=Array.isArray(r.material)?r.material.map(Xd):Xd(r.material),r.material.name==="glass"&&(r.renderOrder=2);let a=r.material.name;r.receiveShadow=!0,r.castShadow=!["ceiling","light","glass","floor","curtain"].includes(a),r.matrixAutoUpdate=!1,r.updateMatrix()}}),Vt.add(s.scene),Wi=s.scene,s1(s.scene),i1(-.5),n1(),t1(s.scene).catch(r=>console.warn("baked light unavailable",r)),Jh.entry(),a1(),Ws=rg({showToast:Yn}),Pa=ag({showToast:Yn,coins:Ws}),xs=fg({scene3d:Vt,data:mt,canOccupy:wr,player:Ie,camera:bt,showToast:Yn,onFinish:r=>xn.treasureResult(r)}),qn=pg({scene3d:Vt,data:mt,hero:sn,player:Ie,npcs:Vi,showToast:Yn,onFinish:r=>{Ie.pitch=ys?Qh:-.06,xn.servingResult(r)}}),xn=hg({showToast:Yn,npcs:Vi,capture:Tg,views:Zd.length,minis:Pa,treasure:xs,serving:qn,coins:Ws}),ii=$0({scene3d:Vt,storeRoot:Wi,data:mt,hero:sn,npcs:Vi,showToast:Yn,isTouch:si,canOccupy:wr,playGame:r=>xn.menu("cafe",r),coins:Ws}),_s=K0({scene3d:Vt,hero:sn,npcs:Vi,showToast:Yn,inShop:r=>!mt.seats.some(a=>Math.hypot(r.x-a[0],r.z-a[1])<1.3)&&!Vi.some(a=>a.id==="cafe"&&Math.hypot(r.x-a.x,r.z-a.z)<2.8),coins:Ws}),wi=j0({showToast:Yn}),zn=J0({hero:sn,mirrors:xl,camera:bt,player:Ie,showToast:Yn,renderNow:()=>(sn.root.position.set(Ie.x,0,Ie.z),sn.root.rotation.y=Ie.face,sn.root.visible=!0,Bg(),Kn!=="low"?mi.render():Wt.render(Vt,bt),Wt.domElement)}),wt("diary-btn").addEventListener("click",r=>{wi.open(),r.currentTarget.blur()}),qd=mg({scene3d:Vt,data:mt,storeRoot:Wi,isTouch:si}),Wt.compile(Vt,bt),Wt.shadowMap.needsUpdate=!0,_l=!0,je.bar.style.width="100%",je.pct.textContent="\uC900\uBE44 \uC644\uB8CC",je.enter.disabled=!1,je.enter.textContent="\uB9E4\uC7A5 \uB4E4\uC5B4\uAC00\uAE30",window.__store={mirrors:xl,sit:r=>{let a=mt.seats[r];jt=a,Ie.x=a[0],Ie.z=a[1],Ie.face=a[2],ii.onSit(a)},get cafe(){return ii},get shop(){return _s},get diary(){return wi},get photo(){return zn},stand:()=>jt&&ml(),get seats(){return mt.seats},player:Ie,setView:r=>tp(r),setQuality:r=>{Kn=r,ip()},canOccupy:wr,spots:Jh,keys:Dn,get entered(){return Xs},info:()=>Wt.info.render,bloom:np,grade:Fg,npcs:Vi,lmFloor:jd,get root(){return Wi},shot:r=>Tg(r),get treasure(){return xs},get serving(){return qn},get coins(){return Ws},set camD(r){Pg=r}}}qb().catch(i=>{console.error(i),je.pct.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.",je.enter.textContent="\uB2E4\uC2DC \uC2DC\uB3C4",je.enter.disabled=!1,je.enter.onclick=()=>location.reload()});je.enter.addEventListener("click",()=>{_l&&(Xs=!0,Bn(),en.door(),Md.set("store"),Ws&&Ws.welcome(),je.overlay.classList.add("gone"),setTimeout(()=>je.overlay.hidden=!0,450),Yn(si?"\uC67C\uCABD \uC544\uB798 \uC6D0\uC73C\uB85C \uAC77\uACE0, \uD654\uBA74\uC744 \uB4DC\uB798\uADF8\uD574 \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694":"WASD\uB85C \uAC77\uACE0, \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8\uB85C \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694 \xB7 V \uC2DC\uC810 \uC804\uD658"))});var Dn=new Set,Yb=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyQ","KeyE"]);addEventListener("keydown",i=>{i.target.closest&&i.target.closest("input,textarea")||!Yb.has(i.code)||i.altKey||i.ctrlKey||i.metaKey||(i.preventDefault(),Dn.add(i.code))});addEventListener("keyup",i=>Dn.delete(i.code));addEventListener("blur",()=>{Dn.clear(),_n.x=_n.y=0});var pl=new Map;je.canvas.addEventListener("pointerdown",i=>{if(Xs&&!(i.pointerType==="mouse"&&i.button!==0)){pl.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now()});try{je.canvas.setPointerCapture(i.pointerId)}catch{}je.canvas.classList.add("dragging")}});je.canvas.addEventListener("pointermove",i=>{let e=pl.get(i.pointerId);if(!e)return;let t=i.pointerType==="mouse"?.0042:.0065;Ie.yaw-=(i.clientX-e.x)*t,Ie.pitch=Fi.clamp(Ie.pitch-(i.clientY-e.y)*t,ys?-1.1:-1.05,ys?-.12:.9),e.x=i.clientX,e.y=i.clientY});var Jd=i=>{let e=pl.get(i.pointerId);e&&i.type==="pointerup"&&Math.hypot(i.clientX-e.sx,i.clientY-e.sy)<9&&performance.now()-e.t<450&&Jb(i.clientX,i.clientY),pl.delete(i.pointerId),pl.size||je.canvas.classList.remove("dragging")};je.canvas.addEventListener("pointerup",Jd);je.canvas.addEventListener("pointercancel",Jd);je.canvas.addEventListener("lostpointercapture",Jd);je.canvas.addEventListener("contextmenu",i=>i.preventDefault());var _n={id:null,x:0,y:0,cx:0,cy:0};je.joy.addEventListener("pointerdown",i=>{if(_n.id!==null)return;i.preventDefault();let e=je.joy.getBoundingClientRect();_n.id=i.pointerId,_n.cx=e.left+e.width/2,_n.cy=e.top+e.height/2;try{je.joy.setPointerCapture(i.pointerId)}catch{}Lg(i)});function Lg(i){if(i.pointerId!==_n.id)return;let e=je.joy.clientWidth*.36,t=i.clientX-_n.cx,n=i.clientY-_n.cy,s=Math.hypot(t,n);s>e&&(t*=e/s,n*=e/s),_n.x=t/e,_n.y=n/e,je.knob.style.transform=`translate(${t}px, ${n}px)`}je.joy.addEventListener("pointermove",Lg);var Qd=i=>{i.pointerId===_n.id&&(_n.id=null,_n.x=_n.y=0,je.knob.style.transform="")};je.joy.addEventListener("pointerup",Qd);je.joy.addEventListener("pointercancel",Qd);je.joy.addEventListener("lostpointercapture",Qd);document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>{_l&&Jh[i.dataset.spot](),i.blur()}));var Yd=wt("burger"),Dg=wt("spots"),ep=i=>{Dg.hidden=!i,Yd.setAttribute("aria-expanded",String(i)),Yd.setAttribute("aria-label",i?"\uBA54\uB274 \uB2EB\uAE30":"\uBA54\uB274 \uC5F4\uAE30")};Yd.addEventListener("click",i=>{ep(Dg.hidden),i.currentTarget.blur()});document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>ep(!1)));je.canvas.addEventListener("pointerdown",()=>ep(!1));function Kb(i){en.sit(),jt=i,Ie.x=i[0],Ie.z=i[1],Ie.face=i[2],Ie.yaw=i[2],$n.set(0,0),ii&&ii.onSit(i)}function jb(){let i=Vi.find(e=>e.id==="cafe");return i&&mt.seats.filter(e=>e[1]>3).sort((e,t)=>Math.hypot(e[0]-i.x,e[1]-i.z)-Math.hypot(t[0]-i.x,t[1]-i.z))[0]||mt.seats[0]}document.querySelectorAll("[data-nav]").forEach(i=>i.addEventListener("click",()=>{if(i.blur(),!_l||!Xs)return;wi&&wi.isOpen&&wi.close();let e=i.dataset.nav;if(e==="shop")jt&&ml(),_s.shopping?wt("basket-btn").click():_s.open||(wt("shop-btn").hidden?(Jh.display(),setTimeout(()=>wt("shop-btn").click(),60)):wt("shop-btn").click());else if(e==="cafe"){jt&&ml();let t=Vi.find(n=>n.id==="cafe");t&&(Ie.x=t.x-1.55,Ie.z=t.z,Ie.yaw=Ie.face=Math.PI/2,Ie.pitch=ys?Qh:-.06,jt=null),setTimeout(()=>wt("order-btn").click(),60)}else if(e==="diary")jt||Kb(jb()),wi.open();else if(e==="photo"){jt&&ml();let t=xl[0];if(!t)return;Ie.x=t.c.x-1.2,Ie.z=t.c.z,Ie.yaw=Ie.face=Math.PI/2,wt("photo-btn").click()}else e==="mine"&&_s.openMine()}));wt("look-toggle").addEventListener("click",i=>{if(i.currentTarget.blur(),zn&&zn.active)return;let e=yr[(yr.indexOf(sn.look)+1)%yr.length];sn.setLook(e),sn.root.traverse(t=>{t.isMesh&&(t.frustumCulled=!1)});try{localStorage.setItem("sh-look",e)}catch{}Yn(`\u{1F457} \uCE90\uB9AD\uD130\uB97C \uBC14\uAFE8\uC5B4\uC694 \xB7 ${B0[e]}`)});wt("mjp-btn").addEventListener("click",i=>{i.currentTarget.blur(),xn.menu("shop")});wt("cafegame-btn").addEventListener("click",i=>{i.currentTarget.blur(),xn.menu("cafe")});wt("hint-toggle").addEventListener("click",i=>{let e=wt("hint");e.hidden=!e.hidden,i.currentTarget.blur()});var Ng=wt("view-toggle");function tp(i){ys=i,sn.root.visible=i,Ie.pitch=i?Qh:-.06,Vs=.5,Ng.querySelector(".lbl").textContent=i?"1\uC778\uCE6D":"3\uC778\uCE6D"}Ng.addEventListener("click",i=>{tp(!ys),i.currentTarget.blur()});var Kd=wt("sound-toggle"),Mg={all:["\u{1F3B5}","\uC18C\uB9AC \uCF2C"],sfx:["\u{1F514}","\uD6A8\uACFC\uC74C\uB9CC"],off:["\u{1F507}","\uC18C\uB9AC \uB054"]};function Ug(){let[i,e]=Mg[Sd()]||Mg.all;Kd.querySelector(".ico").textContent=i,Kd.querySelector(".lbl").textContent=e}Ug();Kd.addEventListener("click",i=>{let e=Sd(),t=e==="all"?"sfx":e==="sfx"?"off":"all";W0(t),Ug(),Yn(t==="all"?"\u{1F3B5} \uBC30\uACBD\uC74C\uC545\uACFC \uD6A8\uACFC\uC74C\uC744 \uCF30\uC5B4\uC694":t==="sfx"?"\u{1F514} \uD6A8\uACFC\uC74C\uB9CC \uB4E4\uB824\uC694":"\u{1F507} \uC18C\uB9AC\uB97C \uAED0\uC5B4\uC694"),i.currentTarget.blur()});addEventListener("pointerdown",i=>{let e=i.target.closest&&i.target.closest("button");e&&Xs&&!e.classList.contains("shutter")&&en.click()},!0);addEventListener("keydown",i=>{i.code==="KeyV"&&Xs&&!(i.target.closest&&i.target.closest("input,textarea"))&&tp(!ys)});var Sg;function Yn(i){Xs&&en.toast(),je.toast.textContent=i,je.toast.classList.add("on"),clearTimeout(Sg),Sg=setTimeout(()=>je.toast.classList.remove("on"),3600)}var yt=je.map?je.map.getContext("2d"):null,Gd=null;function Zb(){if(!je.map||je.map.hidden||!mt)return;if(!Gd){let s=mt.floor.map(l=>l[0]),r=mt.floor.map(l=>l[1]),a=[Math.min(...s),Math.min(...r),Math.max(...s),Math.max(...r)],o=Math.min((je.map.width-24)/(a[2]-a[0]),(je.map.height-24)/(a[3]-a[1]));Gd={s:o,mp:(l,c)=>[je.map.width/2+(l-(a[0]+a[2])/2)*o,je.map.height/2+(c-(a[1]+a[3])/2)*o]}}let{s:i,mp:e}=Gd;yt.clearRect(0,0,je.map.width,je.map.height),yt.beginPath(),mt.floor.forEach(([s,r],a)=>yt[a?"lineTo":"moveTo"](...e(s,r))),yt.closePath(),yt.fillStyle="#dff3e8",yt.fill(),yt.strokeStyle="#8fc7aa",yt.lineWidth=3,yt.stroke();for(let[s,r,a,o,l,c]of mt.icons)yt.save(),yt.translate(...e(s,r)),yt.rotate(l),yt.fillStyle=Wd[c]||"#"+mt.colors[c],yt.strokeStyle="#a89cc4",yt.lineWidth=1.2,yt.fillRect(-a*i/2,-o*i/2,a*i,o*i),yt.strokeRect(-a*i/2,-o*i/2,a*i,o*i),yt.restore();yt.textAlign="center",yt.font="700 19px system-ui, sans-serif",yt.fillStyle="#5d4f7c";for(let[s,[r,a]]of mt.labels)yt.fillText(s,...e(r,a));let[t,n]=e(Ie.x,Ie.z);yt.save(),yt.translate(t,n),yt.rotate(-Ie.yaw),yt.beginPath(),yt.moveTo(0,15),yt.lineTo(-9,-8),yt.lineTo(9,-8),yt.closePath(),yt.fillStyle="#9a72d8",yt.fill(),yt.lineWidth=2.5,yt.strokeStyle="#fff",yt.stroke(),yt.restore()}function eu(){let i=je.canvas.clientWidth,e=je.canvas.clientHeight;Wt.setSize(i,e,!1),typeof mi!="undefined"&&(mi.setPixelRatio(Wt.getPixelRatio()),mi.setSize(i,e)),bt.aspect=i/e;let t=74*Math.PI/180,n=2*Math.atan(Math.tan(t/2)/bt.aspect)*180/Math.PI;bt.fov=Math.min(92,Math.max(64,n)),bt.updateProjectionMatrix()}var mi=new Wh(Wt,new kt(1,1,{type:Xt,samples:si?2:4}));mi.addPass(new Xh(Vt,bt));var vs=new Aa(Vt,bt,1,1);vs.output=Aa.OUTPUT.Default;vs.blendIntensity=1;vs.updateGtaoMaterial({radius:.55,distanceExponent:1.3,thickness:1.4,scale:1.25,samples:si?8:14});vs.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:si?8:16});mi.addPass(vs);{let i=vs.render.bind(vs);vs.render=(...e)=>{for(let t of pd)t.visible=!1;i(...e);for(let t of pd)t.visible=!0}}var np=new Ra(new ye(256,256),.3,.5,2);mi.addPass(np);mi.addPass(new Yh);var Fg=new wa({uniforms:{tDiffuse:{value:null},saturation:{value:1.12},contrast:{value:1.05},warmth:{value:.025},lift:{value:.012},vignette:{value:.22}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`});mi.addPass(Fg);var Kn=si?"mid":"high";try{Kn=localStorage.getItem("sh-quality")||Kn}catch{}var Og=wt("quality-toggle");function ip(){vs.enabled=Kn==="high",np.enabled=Kn!=="low",Wt.shadowMap.enabled=Kn!=="low",Vt.traverse(i=>{i.material&&i.material.needsUpdate!==void 0&&(i.material.needsUpdate=!0)}),Wt.shadowMap.needsUpdate=!0,Og.querySelector(".lbl").textContent={high:"\uACE0\uD654\uC9C8",mid:"\uBCF4\uD1B5",low:"\uAC00\uBCCD\uAC8C"}[Kn]}Og.addEventListener("click",i=>{Kn={high:"mid",mid:"low",low:"high"}[Kn];try{localStorage.setItem("sh-quality",Kn)}catch{}ip(),eu(),i.currentTarget.blur()});ip();new ResizeObserver(eu).observe(je.canvas);eu();var jt=null,Wi=null,Kh=new Bs,bg=new ye;function Jb(i,e){if(!mt||!mt.seats||!Wi)return;let t=je.canvas.getBoundingClientRect();if(bg.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Kh.setFromCamera(bg,bt),xn&&xn.owner&&Kh.intersectObject(xn.owner.c.root,!0).length){xn.menu("shop");return}if(xn&&xn.cafeStaff&&Kh.intersectObject(xn.cafeStaff.c.root,!0).length){xn.menu("cafe");return}let n=Kh.intersectObject(Wi,!0)[0];if(!n)return;let s=null,r=.6;for(let a of mt.seats){let o=Math.hypot(a[0]-n.point.x,a[1]-n.point.z);o<r&&n.point.y<1.1&&(r=o,s=a)}s&&(jt=s,Ie.x=s[0],Ie.z=s[1],Ie.face=s[2],$n.set(0,0),Yn("\uC758\uC790\uC5D0 \uC549\uC558\uC5B4\uC694 \u{1FA91} \uC6C0\uC9C1\uC774\uBA74 \uC77C\uC5B4\uB098\uC694"),ii&&ii.onSit(s))}function ml(){let i=jt;jt=null,ii&&ii.onStand();let e=i[2]+Math.PI;for(let t of[.45,.6,.8,1,1.25])for(let n of[0,.5,-.5,1,-1,1.6,-1.6]){let s=i[0]+Math.sin(e+n)*t,r=i[1]+Math.cos(e+n)*t;if(wr(s,r)){Ie.x=s,Ie.z=r;return}}}var Qb=[/^Perimeter wall/,/^Guest floor$/,/^Ceiling$/,/^Display hall - angled partition$/,/^Cafe partition$/,/^Corridor partition$/,/^Corridor return$/,/^Cafe end wall/,/^Round column/,/^Shop counter - (staff area room|back wall|side wall)/],e1=1.12,jd={value:0};async function t1(i){let e=await fetch("light.json");if(!e.ok)return;let t=await e.json(),n=c=>{let h=atob(c),u=new Uint8Array(h.length);for(let f=0;f<h.length;f++)u[f]=h.charCodeAt(f);return u},s=await new Zo().parseAsync(n(t.shell).buffer,""),r=await createImageBitmap(new Blob([n(t.lightmap)],{type:"image/jpeg"}),{imageOrientation:"none"}),a=new tn(r);a.flipY=!1,a.colorSpace=Lt,a.needsUpdate=!0,a.anisotropy=4;{let c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d");h.drawImage(r,0,0,64,64);let u=h.getImageData(0,0,64,64).data,f=[];for(let d=0;d<u.length;d+=4)f.push(Math.pow((u[d]*.2126+u[d+1]*.7152+u[d+2]*.0722)/255,2.2));f.sort((d,g)=>d-g),jd.value=f[Math.floor(f.length*.9)]*.85}let o=c=>{c.uniforms.lmFloor=jd,c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform float lmFloor;`).replace("reflectedLight.indirectDiffuse += lightMapTexel.rgb","reflectedLight.indirectDiffuse += max(lightMapTexel.rgb, vec3(lmFloor))")},l=new Map;s.scene.traverse(c=>{if(!c.isMesh)return;let h=Array.isArray(c.material)?c.material[0]:c.material,u=h.name;if(!l.has(u)){let f=Xd(h),d=new zt({color:f.color,lightMap:a,lightMapIntensity:t.gain||e1,side:Ht});d.name=u,f.onBeforeCompile&&u==="floor"?d.onBeforeCompile=f.onBeforeCompile:d.onBeforeCompile=o,l.set(u,d)}c.material=l.get(u),c.castShadow=!1,c.receiveShadow=!1}),i.traverse(c=>{let h=(c.name||"").replace(/_/g," ");Qb.some(u=>u.test(h))&&c.traverse(u=>{u.isMesh&&(u.visible=!1)})}),Vt.add(s.scene),Wt.shadowMap.needsUpdate=!0}function n1(){Wi.updateMatrixWorld(!0);let i=new Bs,e=new H,t=new H;for(let n of mt.seats){let s=null;for(let r of[.55,.65,.75])for(let a=0;a<72;a++){let o=a*Math.PI/36;t.set(Math.sin(o),0,Math.cos(o)),e.set(n[0],r,n[1]),i.set(e,t),i.far=.9;let l=i.intersectObject(Wi,!0).find(c=>c.object.visible&&!/chair|mint|trim|pink$/i.test(c.object.material&&c.object.material.name||""));l&&(!s||l.distance<s.d-.01)&&(s={d:l.distance,a:o})}s&&s.d<.8&&(n[2]=Math.atan2(Math.sin(s.a),Math.cos(s.a)))}}function i1(i){Wi.updateMatrixWorld(!0);let e=s=>/^Cafe end - cafe order counter/.test((s&&s.name||"").replace(/_/g," ")),t=[];Wi.traverse(s=>{e(s)&&!e(s.parent)&&t.push(s)});for(let s of t){let r=s.parent.worldToLocal(new H(0,0,0)),a=s.parent.worldToLocal(new H(i,0,0));s.position.add(a.sub(r)),s.updateMatrix(),s.updateMatrixWorld(!0)}for(let s of mt.blocks)Math.abs(s[0]-5.246)<.05&&Math.abs(s[1]-4.508)<.05&&(s[0]+=i);let n=(mt.npcs||[]).find(s=>s.id==="cafe");n&&(n.x=5.55)}var Zd=[{p:[6.2,1.5,-4.6],t:[2.5,.8,-1.2]},{p:[.9,1.6,3],t:[-1.5,.7,-2]},{p:[3.4,1.5,3.6],t:[-3,.7,6.2]},{p:[3,1.5,4.5],t:[5.6,1,4.5]},{p:[5.4,1.5,-2.9],t:[4.6,.9,-5.8]},{p:[-6.4,1.6,6],t:[0,.7,2]},{p:[-2,1.7,-3],t:[3,.7,-5.2]},{p:[2.5,2.2,-.5],t:[-4,.4,4]},{p:[-1,1.6,5.8],t:[3,.8,1]},{p:[7,1.5,-2.6],t:[7,.9,2]}];function Tg(i){let e=Zd[i%Zd.length],t=960,n=720,s={p:bt.position.clone(),q:bt.quaternion.clone(),fov:bt.fov,vis:sn.root.visible};sn.root.visible=!1,Wt.setSize(t,n,!1),mi.setSize(t,n),bt.aspect=t/n,bt.fov=62,bt.updateProjectionMatrix(),bt.position.set(...e.p),bt.lookAt(...e.t),bt.updateMatrixWorld(),Kn!=="low"?mi.render():Wt.render(Vt,bt);let r=document.createElement("canvas");return r.width=t,r.height=n,r.getContext("2d").drawImage(Wt.domElement,0,0,t,n),bt.position.copy(s.p),bt.quaternion.copy(s.q),bt.fov=s.fov,sn.root.visible=s.vis,eu(),r}var xl=[];function s1(i){i.updateMatrixWorld(!0),i.traverse(e=>{if(!e.isMesh||!e.material||e.material.name!=="mirror")return;let t=e,n=!1;for(;t;)/leaning.mirror/i.test(t.name.replace(/_/g," "))&&(n=!0),t=t.parent;if(!n)return;let s=new yn().setFromObject(e),r=s.getCenter(new H),a=s.getSize(new H),o=.12,l=new H(-Math.cos(o),Math.sin(o),0),c=Math.max(a.x,a.z)-.02,h=a.y/Math.cos(o)-.02,u=Math.min(window.devicePixelRatio||1,2),f=new dl(new ss(c,h),{textureWidth:Math.round((si?384:640)*u*(c/h)*2),textureHeight:Math.round((si?384:640)*u),color:14674158,clipBias:.003});f.position.copy(r).addScaledVector(l,.02),e.visible=!1,f.lookAt(f.position.clone().add(l)),Vt.add(f),xl.push({ref:f,c:r,pane:e})})}function Bg(){for(let i of xl)i.ref.visible=(Kn!=="low"||zn&&zn.active)&&Math.hypot(Ie.x-i.c.x,Ie.z-i.c.z)<7,i.pane.visible=!i.ref.visible}var Vi=[],r1={cafe:{opt:{look:"cafe"},say:"\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615"},shop:{opt:{look:"shop"},say:"\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}"}};function a1(){for(let i of mt.npcs||[]){let e=r1[i.id];if(!e)continue;let t=md(Cg,e.opt);t.root.position.set(i.x,0,i.z),t.root.rotation.y=i.face,t.root.scale.setScalar(1.12),t.root.position.y=i.id==="shop"?.15:.2,Vt.add(t.root);let n=document.createElement("div");n.className="bubble",n.textContent=e.say,wt("bubbles").appendChild(n),Vi.push({...i,c:t,el:n,yaw:0})}}var Ca=new H;function o1(i,e){for(let t of Vi){t.c.animate(i,t.speed||0,e+t.id.length),t.y!==void 0&&(t.c.root.position.set(t.x,t.y,t.z),t.c.root.rotation.y=t.face),t.carry&&(t.c.arms[0].rotation.x=t.c.arms[1].rotation.x=-1.35);let n=Ie.x-t.x,s=Ie.z-t.z,r=Math.hypot(n,s),a=0;if(r<4&&!t.speed&&(a=Math.atan2(n,s)-t.face,a=Math.atan2(Math.sin(a),Math.cos(a)),a=Fi.clamp(a,-.9,.9)),t.yaw+=(a-t.yaw)*Math.min(1,i*5),t.c.head.rotation.y=t.yaw,t.c.head.rotation.x+=((r<4?-.22:0)-t.c.head.rotation.x)*Math.min(1,i*4),r<2.8){Ca.set(t.x,1.6,t.z).project(bt);let l=je.canvas.getBoundingClientRect(),c=Ca.z<1&&Math.abs(Ca.x)<1.1&&Math.abs(Ca.y)<1.1;t.el.style.transform=`translate(${(Ca.x*.5+.5)*l.width}px, ${(-Ca.y*.5+.5)*l.height}px) translate(-50%, -100%)`,t.el.classList.toggle("on",c)}else t.el.classList.remove("on")}}var $n=new ye,Eg=performance.now(),wg=0,jh=0,Vd=!1;function l1(){let i=gl();return jt?"\u{1FA91} \uC549\uC544\uC11C \uC26C\uB294 \uC911":Ie.z>1.75*i?"\u2615 \uCE74\uD398 \uC88C\uC11D":Ie.x>3.2*i&&Ie.z<-1.6*i?"\u{1F6AA} \uC785\uAD6C":Ie.x>3*i?"\u{1F380} \uBCF5\uB3C4":"\u{1F9F8} \uC9C4\uC5F4\uB300 \uC0AC\uC774"}function kg(i){let e=Math.min((i-Eg)/1e3,.05);if(Eg=i,_l){if(Xs){let o=(Dn.has("ArrowLeft")||Dn.has("KeyQ")?1:0)-(Dn.has("ArrowRight")||Dn.has("KeyE")?1:0);Ie.yaw+=o*1.7*e;let l=(Dn.has("KeyW")||Dn.has("ArrowUp")?1:0)-(Dn.has("KeyS")||Dn.has("ArrowDown")?1:0),c=(Dn.has("KeyD")?1:0)-(Dn.has("KeyA")?1:0);_n.id!==null&&(l=-_n.y,c=_n.x);let h=Math.hypot(l,c);h>1&&(l/=h,c/=h),jt&&h>.25&&ml(),(jt||yg())&&(l=0,c=0);let u=Dn.has("ShiftLeft")||Dn.has("ShiftRight")?1.6:1,f=Math.sin(Ie.yaw),d=Math.cos(Ie.yaw),g=(l*f-c*d)*_g*u,_=(l*d+c*f)*_g*u,p=1-Math.exp(-e*12);$n.x+=(g-$n.x)*p,$n.y+=(_-$n.y)*p;let m=$n.x*e,M=$n.y*e;Math.abs(m)+Math.abs(M)>1e-5&&(wr(Ie.x+m,Ie.z+M)?(Ie.x+=m,Ie.z+=M):(wr(Ie.x+m,Ie.z)?Ie.x+=m:$n.x=0,wr(Ie.x,Ie.z+M)?Ie.z+=M:$n.y=0));let v=Math.hypot($n.x,$n.y);if(v>.15){let T=Math.atan2($n.x,$n.y)-Ie.face;T=Math.atan2(Math.sin(T),Math.cos(T)),Ie.face+=T*Math.min(1,e*12)}sn.animate(e,v,i/1e3,!!jt),v>.5&&!jt&&!(qn&&qn.active)?(jh+=e*v*.95,jh>1&&(jh=0,Vd=!Vd,en.step(Vd))):jh=.75;{let y=Pa&&Pa.gameId,T=y||qn&&qn.active||xs&&xs.active||!wt("mjp").hidden||!wt("spot").hidden;Md.set(y==="rhythm"?null:T?"game":"store")}ii&&ii.update(e,Ie,jt),qd&&qd.update(e,i/1e3),xn&&xn.update(Ie,jt),xs&&xs.update(e,i/1e3),qn&&qn.update(e,i/1e3),_s&&_s.update(Ie,jt),zn&&(zn.update(jt),zn.applyPose(i/1e3)),wt("diary-btn").hidden=!jt||!wi||wi.isOpen,wt("actions").style.visibility=yg()||qn&&qn.active||xs&&xs.active?"hidden":"",o1(e,i/1e3),Bg(),!vg&&Ie.z>2*gl()&&Ie.x<3.6*gl()&&(vg=!0,Yn("\uCE74\uD398 \uC88C\uC11D\uC5D0 \uB3C4\uCC29\uD588\uC5B4\uC694 \u2615"))}let t=Math.sin(Ie.pitch),n=Math.cos(Ie.pitch),s=Math.sin(Ie.yaw),r=Math.cos(Ie.yaw);if(sn.root.position.set(Ie.x,0,Ie.z),sn.root.rotation.y=Ie.face,zn&&zn.camera())sn.root.visible=!0;else if(qn&&qn.active)bt.position.set(Ie.x,zd,Ie.z),bt.lookAt(Ie.x+s*n,zd+t,Ie.z+r*n),sn.root.visible=!1,qn.place(bt,Ie.yaw);else if(ys){let o=Ie.x,l=.9,c=Ie.z,h=-s,u=-r,f=Pg,d=n*f,g=d;for(let M=.2;M<=d;M+=.08)if(!$b(o+h*M,c+u*M)){g=Math.max(.15,M-.15);break}Vs+=(g-Vs)*Math.min(1,e*(g<Vs?18:3));let _=(mt.ceiling||2.65)-.25,p=Math.min(_,l-t*f);bt.position.set(o+h*Vs,p,c+u*Vs);let m=Fi.clamp(1-Vs/d,0,1);bt.lookAt(o+s*m*1.8,l+.05+m*.15,c+r*m*1.8),m>.7&&(bt.position.y=Math.min(_+.03,p+.1)),sn.root.visible=!0}else{let o=jt?1.02:zd;bt.position.set(Ie.x,o,Ie.z),bt.lookAt(Ie.x+s*n,o+t,Ie.z+r*n)}Kn!=="low"?mi.render():Wt.render(Vt,bt),zn&&zn.afterRender(Wt.domElement);let a=l1();je.where.textContent!==a&&(je.where.textContent=a),(wg=(wg+1)%2)===0&&Zb()}requestAnimationFrame(kg)}requestAnimationFrame(kg);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
