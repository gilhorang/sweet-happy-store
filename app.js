(()=>{var jf=0,Kh=1,Zf=2;var Bs=1,Jf=2,Cr=3,mi=0,hn=1,Ut=2,an=0,Pr=1,Xi=2,jh=3,Zh=4,Ol=5;var $n=100,Qf=101,ep=102,tp=103,np=104,zs=200,ip=201,sp=202,rp=203,Jh=204,Qh=205,qa=206,ap=207,$a=208,op=209,lp=210,cp=211,hp=212,up=213,dp=214,al=0,ol=1,ll=2,hr=3,cl=4,hl=5,ul=6,dl=7,Fl=0,fp=1,pp=2,gi=0,Ya=1,Ka=2,ja=3,Za=4,Ja=5,Qa=6,ks=7,Lh="attached",mp="detached",eu=300,Hs=301,Ir=302,Bl=303,zl=304,xn=1e3,Wn=1001,ur=1002,Lt=1003,kl=1004;var Gs=1005;var Jt=1006,Lr=1007;var Yn=1008;var vn=1009,tu=1010,nu=1011,Dr=1012,Hl=1013,ti=1014,zn=1015,Ot=1016,Gl=1017,Vl=1018,qi=1020,iu=35902,su=35899,ru=1021,au=1022,In=1023,Di=1026,ni=1027,Wl=1028,Xl=1029,ms=1030,ql=1031;var $l=1033,eo=33776,to=33777,no=33778,io=33779,Yl=35840,Kl=35841,jl=35842,Zl=35843,Jl=36196,Ql=37492,ec=37496,tc=37488,nc=37489,so=37490,ic=37491,sc=37808,rc=37809,ac=37810,oc=37811,lc=37812,cc=37813,hc=37814,uc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,xc=37821,_c=36492,vc=36494,yc=36495,Mc=36283,Sc=36284,ro=36285,bc=36286;var Rs=2300,Cs=2301,sl=2302,Dh=2303,Nh=2400,Uh=2401,Oh=2402,gp=2500;var ou=0,ao=1,Nr=2,xp=3200;var Ur=0,_p=1,$i="",Et="srgb",En="srgb-linear",fa="linear",yt="srgb";var rl=7680;var vp=519,yp=512,Mp=513,Sp=514,lu=515,bp=516,Tp=517,cu=518,hu=519,uu=35044;var du="300 es",Xn=2e3,dr=2001;function c0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function h0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ep(){let i=fr("canvas");return i.style.display="block",i}var tf={},pr=null;function pa(...i){let e="THREE."+i.shift();pr?pr("log",e,...i):console.log(e,...i)}function wp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=wp(i);let e="THREE."+i.shift();if(pr)pr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=wp(i);let e="THREE."+i.shift();if(pr)pr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function As(...i){let e=i.join(" ");e in tf||(tf[e]=!0,Ve(...i))}function Ap(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Rp={[al]:al,[ll]:ul,[cl]:cl,[hr]:hl,[ol]:ol,[ul]:ll,[dl]:dl,[hl]:hr},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=1234567,ca=Math.PI/180,Ps=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function fu(i,e){return(i%e+e)%e}function u0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function d0(i,e,t){return i!==e?(t-i)/(e-i):0}function ha(i,e,t){return(1-t)*i+t*e}function f0(i,e,t,n){return ha(i,e,1-Math.exp(-t*n))}function p0(i,e=1){return e-Math.abs(fu(i,e*2)-e)}function m0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function g0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function x0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _0(i,e){return i+Math.random()*(e-i)}function v0(i){return i*(.5-Math.random())}function y0(i){i!==void 0&&(nf=i);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function M0(i){return i*ca}function S0(i){return i*Ps}function b0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function T0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function E0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mu(i,e){if(e.constructor===Float32Array)return i;let t=Tc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function gu(i,e){if(e.constructor===Float32Array)return i;let t=Tc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var xi={DEG2RAD:ca,RAD2DEG:Ps,generateUUID:ii,clamp:lt,euclideanModulo:fu,mapLinear:u0,inverseLerp:d0,lerp:ha,damp:f0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:x0,randFloat:_0,randFloatSpread:v0,seededRandom:y0,degToRad:M0,radToDeg:S0,isPowerOfTwo:b0,ceilPowerOfTwo:T0,floorPowerOfTwo:pu,setQuaternionFromProperEuler:E0,normalize:gu,denormalize:mu},Su=class Su{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Su.prototype.isVector2=!0;var fe=Su,Fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);p=Math.sin(p*_)/b,o=Math.sin(o*_)/b,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bu=class bu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bu.prototype.isVector3=!0;var B=bu,rh=new B,sf=new Fn,Tu=class Tu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],b=s[4],y=s[7],A=s[2],T=s[5],x=s[8];return r[0]=a*v+o*_+l*A,r[3]=a*m+o*b+l*T,r[6]=a*p+o*y+l*x,r[1]=c*v+h*_+u*A,r[4]=c*m+h*b+u*T,r[7]=c*p+h*y+u*x,r[2]=d*v+f*_+g*A,r[5]=d*m+f*b+g*T,r[8]=d*p+f*y+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ah.makeScale(e,t)),this}rotate(e){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ah.makeRotation(-e)),this}translate(e,t){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tu.prototype.isMatrix3=!0;var Qe=Tu,ah=new Qe,rf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w0(){let i={enabled:!0,workingColorSpace:En,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[En]:{primaries:e,whitePoint:n,transfer:fa,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}var ot=w0();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ks,fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ks===void 0&&(Ks=fr("canvas")),Ks.width=e.width,Ks.height=e.height;let s=Ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},A0=0,mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oh(s[a].image)):r.push(oh(s[a]))}else r=oh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function oh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var R0=0,lh=new B,Xt=class i extends ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Jt,a=Yn,o=In,l=vn,c=i.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ii(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=eu;Xt.DEFAULT_ANISOTROPY=1;var Eu=class Eu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,A=(p+1)/2,T=(h+d)/4,x=(u+v)/4,M=(g+m)/4;return b>y&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=x/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=M/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=x/r,s=M/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eu.prototype.isVector4=!0;var Mt=Eu,pl=class extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Xt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dt=class extends pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ma=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ml=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ul=class Ul{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ul().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/js.setFromMatrixColumn(e,0).length(),r=1/js.setFromMatrixColumn(e,1).length(),a=1/js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,P0)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ns.crossVectors(n,Nn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ns.crossVectors(n,Nn)),ns.normalize(),Io.crossVectors(Nn,ns),s[0]=ns.x,s[4]=Io.x,s[8]=Nn.x,s[1]=ns.y,s[5]=Io.y,s[9]=Nn.y,s[2]=ns.z,s[6]=Io.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],b=n[7],y=n[11],A=n[15],T=s[0],x=s[4],M=s[8],N=s[12],P=s[1],D=s[5],I=s[9],U=s[13],w=s[2],C=s[6],G=s[10],z=s[14],X=s[3],O=s[7],L=s[11],F=s[15];return r[0]=a*T+o*P+l*w+c*X,r[4]=a*x+o*D+l*C+c*O,r[8]=a*M+o*I+l*G+c*L,r[12]=a*N+o*U+l*z+c*F,r[1]=h*T+u*P+d*w+f*X,r[5]=h*x+u*D+d*C+f*O,r[9]=h*M+u*I+d*G+f*L,r[13]=h*N+u*U+d*z+f*F,r[2]=g*T+v*P+m*w+p*X,r[6]=g*x+v*D+m*C+p*O,r[10]=g*M+v*I+m*G+p*L,r[14]=g*N+v*U+m*z+p*F,r[3]=_*T+b*P+y*w+A*X,r[7]=_*x+b*D+y*C+A*O,r[11]=_*M+b*I+y*G+A*L,r[15]=_*N+b*U+y*z+A*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],_=l*f-c*d,b=o*f-c*u,y=o*d-l*u,A=a*f-c*h,T=a*d-l*h,x=a*u-o*h;return t*(v*_-m*b+p*y)-n*(g*_-m*A+p*T)+s*(g*b-v*A+p*x)-r*(g*y-v*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=t*o-n*a,b=t*l-s*a,y=t*c-r*a,A=n*l-s*o,T=n*c-r*o,x=s*c-r*l,M=h*v-u*g,N=h*m-d*g,P=h*p-f*g,D=u*m-d*v,I=u*p-f*v,U=d*p-f*m,w=_*U-b*I+y*D+A*P-T*N+x*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=(o*U-l*I+c*D)*C,e[1]=(s*I-n*U-r*D)*C,e[2]=(v*x-m*T+p*A)*C,e[3]=(d*T-u*x-f*A)*C,e[4]=(l*P-a*U-c*N)*C,e[5]=(t*U-s*P+r*N)*C,e[6]=(m*y-g*x-p*b)*C,e[7]=(h*x-d*y+f*b)*C,e[8]=(a*I-o*P+c*M)*C,e[9]=(n*P-t*I-r*M)*C,e[10]=(g*T-v*y+p*_)*C,e[11]=(u*y-h*T-f*_)*C,e[12]=(o*N-a*D-l*M)*C,e[13]=(t*D-n*N+s*M)*C,e[14]=(v*b-g*A-m*_)*C,e[15]=(h*A-u*b+d*_)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,_=l*c,b=l*h,y=l*u,A=n.x,T=n.y,x=n.z;return s[0]=(1-(v+p))*A,s[1]=(f+y)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+b)*x,s[9]=(m-_)*x,s[10]=(1-(d+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=js.set(s[0],s[1],s[2]).length(),o=js.set(s[4],s[5],s[6]).length(),l=js.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let c=1/a,h=1/o,u=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Xn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Xn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===dr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Xn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Xn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===dr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ul.prototype.isMatrix4=!0;var Xe=Ul,js=new B,Zn=new Xe,C0=new B(0,0,0),P0=new B(1,1,1),ns=new B,Io=new B,Nn=new B,of=new Xe,lf=new Fn,hi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},I0=0,cf=new B,Zs=new Fn,wi=new Xe,Lo=new B,Qr=new B,L0=new B,D0=new Fn,hf=new B(1,0,0),uf=new B(0,1,0),df=new B(0,0,1),ff={type:"added"},N0={type:"removed"},Js={type:"childadded",child:null},ch={type:"childremoved",child:null},Nt=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new hi,n=new Fn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Qe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(hf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lo.copy(e):Lo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Qr,Lo,this.up):wi.lookAt(Lo,Qr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(wi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ff),Js.child=e,this.dispatchEvent(Js),Js.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N0),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ff),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new B(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var st=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},U0={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Do={h:0,s:0,l:0};function hh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=fu(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hh(a,r,e+1/3),this.g=hh(a,r,e),this.b=hh(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Cp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return ot.workingToColorSpace(gn.copy(this),e),Math.round(lt(gn.r*255,0,255))*65536+Math.round(lt(gn.g*255,0,255))*256+Math.round(lt(gn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(gn.copy(this),t);let n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Et){ot.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,s=gn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Do);let n=ha(is.h,Do.h,t),s=ha(is.s,Do.s,t),r=ha(is.l,Do.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Ce;Ce.NAMES=Cp;var ga=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Is=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new B,Ai=new B,uh=new B,Ri=new B,Qs=new B,er=new B,pf=new B,dh=new B,fh=new B,ph=new B,mh=new Mt,gh=new Mt,xh=new Mt,ls=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jn.subVectors(s,t),Ai.subVectors(n,t),uh.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Ai),l=Jn.dot(uh),c=Ai.dot(Ai),h=Ai.dot(uh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return mh.setScalar(0),gh.setScalar(0),xh.setScalar(0),mh.fromBufferAttribute(e,t),gh.fromBufferAttribute(e,n),xh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(mh,r.x),a.addScaledVector(gh,r.y),a.addScaledVector(xh,r.z),a}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),Ai.subVectors(e,t),Jn.cross(Ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Qs.subVectors(s,n),er.subVectors(r,n),dh.subVectors(e,n);let l=Qs.dot(dh),c=er.dot(dh);if(l<=0&&c<=0)return t.copy(n);fh.subVectors(e,s);let h=Qs.dot(fh),u=er.dot(fh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Qs,a);ph.subVectors(e,r);let f=Qs.dot(ph),g=er.dot(ph);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(er,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return pf.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(pf,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Qs,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Uo.subVectors(this.max,ea),tr.subVectors(e.a,ea),nr.subVectors(e.b,ea),ir.subVectors(e.c,ea),ss.subVectors(nr,tr),rs.subVectors(ir,nr),Ss.subVectors(tr,ir);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ss.z,Ss.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ss.z,0,-Ss.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ss.y,Ss.x,0];return!_h(t,tr,nr,ir,Uo)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,tr,nr,ir,Uo))?!1:(Oo.crossVectors(ss,rs),t=[Oo.x,Oo.y,Oo.z],_h(t,tr,nr,ir,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new B,new B,new B,new B,new B,new B,new B,new B],Qn=new B,No=new cn,tr=new B,nr=new B,ir=new B,ss=new B,rs=new B,Ss=new B,ea=new B,Uo=new B,Oo=new B,bs=new B;function _h(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bs.fromArray(i,r);let o=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $t=new B,Fo=new fe,O0=0,Ht=class extends ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=zn,this.version=0,this._normalizationScale=e!==void 0?Tc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gu(e,this.array)}};var xa=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _a=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},F0=new cn,ta=new B,vh=new B,Cn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):F0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);let t=ta.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ta,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(vh)),this.expandByPoint(ta.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},B0=0,Vn=new Xe,yh=new Nt,sr=new B,Un=new cn,na=new cn,rn=new B,Pt=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?_a:xa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];na.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Un.min,na.min),Un.expandByPoint(rn),rn.addVectors(Un.max,na.max),Un.expandByPoint(rn)):(Un.expandByPoint(na.min),Un.expandByPoint(na.max))}Un.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(e,c),rn.add(sr)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new B,l[N]=new B;let h=new B,u=new B,d=new B,f=new fe,g=new fe,v=new fe,m=new B,p=new B;function _(N,P,D){c[N]=c[P]=c[D]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,D),u.sub(h),d.sub(h),g.sub(f),v.sub(f);let I=1/(g.x*v.y-v.x*g.y);isFinite(I)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(I),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(I),o[N].add(m),o[P].add(m),o[D].add(m),l[N].add(p),l[P].add(p),l[D].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,P=b.length;N<P;++N){let D=b[N],I=D.start,U=D.count;for(let w=I,C=I+U;w<C;w+=3)_(e.getX(w+0),e.getX(w+1),e.getX(w+2))}let y=new B,A=new B,T=new B,x=new B;function M(N){T.fromBufferAttribute(s,N),x.copy(T);let P=o[N];y.copy(P),y.sub(T.multiplyScalar(T.dot(P))).normalize(),A.crossVectors(x,P);let I=A.dot(l[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,I)}for(let N=0,P=n.count;N<P;++N)c[N]&&M(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ht(d,h,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uu,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function mf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ii()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Tn=new B,vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Tc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gu(e,this.data.array)}},Mh=new B,z0=new B,k0=new Qe,On=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Mh.subVectors(n,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Mh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||k0.getNormalMatrix(e),s=this.coplanarPoint(Mh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},H0=0,_n=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Pr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=Qh,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new On().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Pi=new B,Sh=new B,Bo=new B,zo=new B,cs=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sh.copy(e).add(t).multiplyScalar(.5),Bo.copy(t).sub(e).normalize(),zo.copy(this.origin).sub(Sh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Bo),o=zo.dot(this.direction),l=-zo.dot(Bo),c=zo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sh).addScaledVector(Bo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);let n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,_=n.y-a.y,b=n.z-a.z,y=Math.abs(l),A=Math.abs(c),T=Math.abs(h),x,M,N,P,D,I,U,w,C,G,z,X;if(y>=A&&y>=T?(N=l,I=u,C=g,X=p,l>=0?(x=c,M=h,P=d,D=f,U=v,w=m,G=_,z=b):(x=h,M=c,P=f,D=d,U=m,w=v,G=b,z=_)):A>=T?(N=c,I=d,C=v,X=_,c>=0?(x=h,M=l,P=f,D=u,U=m,w=g,G=b,z=p):(x=l,M=h,P=u,D=f,U=g,w=m,G=p,z=b)):(N=h,I=f,C=m,X=b,h>=0?(x=l,M=c,P=u,D=d,U=g,w=v,G=p,z=_):(x=c,M=l,P=d,D=u,U=v,w=g,G=_,z=p)),N===0)return null;let O=x/N,L=M/N,F=1/N,q=P-O*I,J=D-L*I,H=U-O*C,ee=w-L*C,le=G-O*X,pe=z-L*X,he=le*ee-pe*H,ge=q*pe-J*le,Ne=H*J-ee*q;if(s){if(he<0||ge<0||Ne<0)return null}else if((he<0||ge<0||Ne<0)&&(he>0||ge>0||Ne>0))return null;let Ue=he+ge+Ne;if(Ue===0)return null;let We=F*(he*I+ge*C+Ne*X);return(Ue>0?We<0:We>0)?null:this.at(We/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gf=new Xe,Ts=new cs,ko=new Cn,xf=new B,Ho=new B,Go=new B,Vo=new B,bh=new B,Wo=new B,_f=new B,Xo=new B,et=class extends Nt{constructor(e=new Pt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(bh.fromBufferAttribute(u,e),a?Wo.addScaledVector(bh,h):Wo.addScaledVector(bh.sub(t),h))}t.add(Wo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(ko.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(ko,xf)===null||Ts.origin.distanceToSquared(xf)>(e.far-e.near)**2))&&(gf.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(gf),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,A=b;y<A;y+=3){let T=o.getX(y),x=o.getX(y+1),M=o.getX(y+2);s=qo(this,p,e,n,c,h,u,T,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=qo(this,a,e,n,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,A=b;y<A;y+=3){let T=y,x=y+1,M=y+2;s=qo(this,p,e,n,c,h,u,T,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,b=m+1,y=m+2;s=qo(this,a,e,n,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function G0(i,e,t,n,s,r,a,o){let l;if(e.side===hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===mi,o),l===null)return null;Xo.copy(o),Xo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:i}}function qo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ho),i.getVertexPosition(l,Go),i.getVertexPosition(c,Vo);let h=G0(i,e,t,n,Ho,Go,Vo,_f);if(h){let u=new B;ls.getBarycoord(_f,Ho,Go,Vo,u),s&&(h.uv=ls.getInterpolatedAttribute(s,o,l,c,u,new fe)),r&&(h.uv1=ls.getInterpolatedAttribute(r,o,l,c,u,new fe)),a&&(h.normal=ls.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new B,materialIndex:0};ls.getNormal(Ho,Go,Vo,d.normal),h.face=d,h.barycoord=u}return h}var ia=new Mt,vf=new Mt,yf=new Mt,V0=new Mt,Mf=new Xe,$o=new B,Th=new Cn,Sf=new Xe,Eh=new cs,va=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingBox.expandByPoint($o)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingSphere.expandByPoint($o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Th.copy(this.boundingSphere),Th.applyMatrix4(s),e.ray.intersectsSphere(Th)!==!1&&(Sf.copy(s).invert(),Eh.copy(e.ray).applyMatrix4(Sf),!(this.boundingBox!==null&&Eh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Eh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;vf.fromBufferAttribute(s.attributes.skinIndex,e),yf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ia.copy(t),t.set(0,0,0,0)):(ia.set(t.x,t.y,t.z,1),t.set(0,0,0)),ia.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=yf.getComponent(r);if(a!==0){let o=vf.getComponent(r);Mf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(V0.copy(ia).applyMatrix4(Mf),a)}}return t.isVector4&&(t.w=ia.w),t.applyMatrix4(this.bindMatrixInverse)}},yr=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},qn=class extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Lt,h=Lt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bf=new Xe,W0=new Xe,ya=class i{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:W0;bf.multiplyMatrices(o,t[r]),bf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qn(t,e,e,In,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ve("Skeleton: No bone found with UUID:",r),a=new yr),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ni=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new Xe,Tf=new Xe,Yo=[],Ef=new cn,X0=new Xe,sa=new et,ra=new Cn,Ui=class extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,X0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Ef.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(Ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),ra.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),e.ray.intersectsSphere(ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),Tf.multiplyMatrices(n,rr),sa.matrixWorld=Tf,sa.raycast(e,Yo);for(let a=0,o=Yo.length;a<o;a++){let l=Yo[a];l.instanceId=r,l.object=this,t.push(l)}Yo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qn(new Float32Array(s*this.count),s,this.count,Wl,zn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new Cn,q0=new fe(.5,.5),Ko=new B,hs=class{constructor(e=new On,t=new On,n=new On,s=new On,r=new On,a=new On){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],_=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-g,A-_).normalize(),s[1].setComponents(c+a,f+h,p+g,A+_).normalize(),s[2].setComponents(c+o,f+u,p+v,A+b).normalize(),s[3].setComponents(c-o,f-u,p-v,A-b).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,p-m,A-y).normalize();else if(s[4].setComponents(c-l,f-d,p-m,A-y).normalize(),t===Xn)s[5].setComponents(c+l,f+d,p+m,A+y).normalize();else if(t===dr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=q0.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ko.x=s.normal.x>0?e.max.x:e.min.x,Ko.y=s.normal.y>0?e.max.y:e.min.y,Ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wf=new Xe,gl=class i{constructor(){this.coordinateSystem=Xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];wf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hs),n[s].setFromProjectionMatrix(wf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new hs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var us=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xl=new B,_l=new B,Af=new Xe,aa=new cs,jo=new Cn,wh=new B,Rf=new B,Ls=class extends Nt{constructor(e=new Pt,t=new us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xl.fromBufferAttribute(t,s-1),_l.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xl.distanceTo(_l);e.setAttribute("lineDistance",new ft(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;Af.copy(s).invert(),aa.copy(e.ray).applyMatrix4(Af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),_=h.getX(v+1),b=Zo(this,e,aa,l,p,_,v);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=Zo(this,e,aa,l,v,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=Zo(this,e,aa,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Zo(this,e,aa,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(xl.fromBufferAttribute(o,s),_l.fromBufferAttribute(o,r),t.distanceSqToSegment(xl,_l,wh,Rf)>n)return;wh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wh);if(!(c<e.near||c>e.far))return{distance:c,point:Rf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Cf=new B,Pf=new B,Ds=class extends Ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cf.fromBufferAttribute(t,s),Pf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cf.distanceTo(Pf);e.setAttribute("lineDistance",new ft(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ma=class extends Ls{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Oi=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},If=new Xe,Fh=new cs,Jo=new Cn,Qo=new B,ds=class extends Nt{constructor(e=new Pt,t=new Oi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;If.copy(s).invert(),Fh.copy(e.ray).applyMatrix4(If);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);Qo.fromBufferAttribute(u,m),Lf(Qo,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Qo.fromBufferAttribute(u,g),Lf(Qo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lf(i,e,t,n,s,r,a){let o=Fh.distanceSqToPoint(i);if(o<t){let l=new B;Fh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Sa=class extends Xt{constructor(e=[],t=Hs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ui=class extends Xt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends Xt{constructor(e,t,n=ti,s,r,a,o=Lt,l=Lt,c,h=Di,u=1){if(h!==Di&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ba=class extends ei{constructor(e,t=ti,n=Hs,s,r,a=Lt,o=Lt,l,c=Di){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ta=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gt=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(v,m,p,_,b,y,A,T,x,M,N){let P=y/x,D=A/M,I=y/2,U=A/2,w=T/2,C=x+1,G=M+1,z=0,X=0,O=new B;for(let L=0;L<G;L++){let F=L*D-U;for(let q=0;q<C;q++){let J=q*P-I;O[v]=J*_,O[m]=F*b,O[p]=w,c.push(O.x,O.y,O.z),O[v]=0,O[m]=0,O[p]=T>0?1:-1,h.push(O.x,O.y,O.z),u.push(q/x),u.push(1-L/M),z+=1}}for(let L=0;L<M;L++)for(let F=0;F<x;F++){let q=d+F+C*L,J=d+F+C*(L+1),H=d+(F+1)+C*(L+1),ee=d+(F+1)+C*L;l.push(q,J,ee),l.push(J,H,ee),X+=6}o.addGroup(f,X,N),f+=X,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},di=class i extends Pt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,v=s+1,m=new B,p=new B;for(let _=0;_<=g;_++){let b=0,y=0,A=0,T=0;if(_<=n){let N=_/n,P=N*Math.PI/2;y=-h-e*Math.cos(P),A=e*Math.sin(P),T=-e*Math.cos(P),b=N*u}else if(_<=n+r){let N=(_-n)/r;y=-h+N*t,A=e,T=0,b=u+N*d}else{let N=(_-n-r)/n,P=N*Math.PI/2;y=h+e*Math.sin(P),A=e*Math.cos(P),T=e*Math.sin(P),b=u+d+N*u}let x=Math.max(0,Math.min(1,b/f)),M=0;_===0?M=.5/s:_===g&&(M=-.5/s);for(let N=0;N<=s;N++){let P=N/s,D=P*Math.PI*2,I=Math.sin(D),U=Math.cos(D);p.x=-A*U,p.y=y,p.z=A*I,o.push(p.x,p.y,p.z),m.set(-A*U,T,A*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+M,x)}if(_>0){let N=(_-1)*v;for(let P=0;P<s;P++){let D=N+P,I=N+P+1,U=_*v+P,w=_*v+P+1;a.push(D,I,U),a.push(I,w,U)}}}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ea=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new B,h=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ct=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function _(){let y=new B,A=new B,T=0,x=(t-e)/n;for(let M=0;M<=r;M++){let N=[],P=M/r,D=P*(t-e)+e;for(let I=0;I<=s;I++){let U=I/s,w=U*l+o,C=Math.sin(w),G=Math.cos(w);A.x=D*C,A.y=-P*n+m,A.z=D*G,u.push(A.x,A.y,A.z),y.set(C,x,G).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-P),N.push(g++)}v.push(N)}for(let M=0;M<s;M++)for(let N=0;N<r;N++){let P=v[N][M],D=v[N+1][M],I=v[N+1][M+1],U=v[N][M+1];(e>0||N!==0)&&(h.push(P,D,U),T+=3),(t>0||N!==r-1)&&(h.push(D,I,U),T+=3)}c.addGroup(p,T,0),p+=T}function b(y){let A=g,T=new fe,x=new B,M=0,N=y===!0?e:t,P=y===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),g++;let D=g;for(let I=0;I<=s;I++){let w=I/s*l+o,C=Math.cos(w),G=Math.sin(w);x.x=N*G,x.y=m*P,x.z=N*C,u.push(x.x,x.y,x.z),d.push(0,P,0),T.x=C*.5+.5,T.y=G*.5*P+.5,f.push(T.x,T.y),g++}for(let I=0;I<s;I++){let U=A+I,w=D+I;y===!0?h.push(w,w+1,U):h.push(w+1,w,U),M+=3}c.addGroup(p,M,y===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mr=class i extends ct{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new fe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new Xe;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Sr=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vl=class extends Sr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Df=new B,Nf=new B,Ah=new xu,Rh=new xu,Ch=new xu,yl=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Nf.subVectors(s[0],s[1]).add(s[0]),c=Nf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Df.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Df),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ah.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Rh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Ch.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ah.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Rh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ch.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ah.calc(l),Rh.calc(l),Ch.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function $0(i,e){let t=1-i;return t*t*e}function Y0(i,e){return 2*(1-i)*i*e}function K0(i,e){return i*i*e}function ua(i,e,t,n){return $0(i,e)+Y0(i,t)+K0(i,n)}function j0(i,e){let t=1-i;return t*t*t*e}function Z0(i,e){let t=1-i;return 3*t*t*i*e}function J0(i,e){return 3*(1-i)*i*i*e}function Q0(i,e){return i*i*i*e}function da(i,e,t,n,s){return j0(i,e)+Z0(i,t)+J0(i,n)+Q0(i,s)}var wa=class extends Bn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(e,s.x,r.x,a.x,o.x),da(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ml=class extends Bn{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(e,s.x,r.x,a.x,o.x),da(e,s.y,r.y,a.y,o.y),da(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Bn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends Bn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Bn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ua(e,s.x,r.x,a.x),ua(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends Bn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ua(e,s.x,r.x,a.x),ua(e,s.y,r.y,a.y),ua(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Uf(o,l.x,c.x,h.x,u.x),Uf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Bh=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:yl,CubicBezierCurve:wa,CubicBezierCurve3:Ml,EllipseCurve:Sr,LineCurve:Aa,LineCurve3:Sl,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:bl,SplineCurve:Ca}),Tl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Pa=class extends Tl{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Aa(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ra(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new wa(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ca(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Sr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},br=class extends Pa{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Pa().fromJSON(s))}return this}};function eg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Pp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=rg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ia(r,a,t,o,l,c,0),a}function Pp(i,e,t,n,s){let r;if(s===gg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Of(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Of(a/n|0,i[a],i[a+1],r);return r&&Tr(r,r.next)&&(Da(r),r=r.next),r}function Ns(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Tr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Da(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ia(i,e,t,n,s,r,a){if(!i)return;!a&&r&&hg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ng(i,n,s,r):tg(i)){e.push(l.i,i.i,c.i),Da(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ig(Ns(i),e),Ia(i,e,t,n,s,r,2)):a===2&&sg(i,e,t,n,s,r):Ia(Ns(i),e,t,n,s,r,1);break}}}function tg(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&oa(s,o,r,l,a,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ng(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Bt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),p=zh(f,g,e,t,n),_=zh(v,m,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=p&&y&&y.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&oa(o,h,l,u,c,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&oa(o,h,l,u,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&oa(o,h,l,u,c,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&oa(o,h,l,u,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ig(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Tr(n,s)&&Lp(n,t,t.next,s)&&La(n,s)&&La(s,n)&&(e.push(n.i,t.i,s.i),Da(t),Da(t.next),t=i=s),t=t.next}while(t!==i);return Ns(t)}function sg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fg(a,o)){let l=Dp(a,o);a=Ns(a,a.next),l=Ns(l,l.next),Ia(a,e,t,n,s,r,0),Ia(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function rg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Pp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(dg(c))}s.sort(ag);for(let r=0;r<s.length;r++)t=og(s[r],t);return t}function ag(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function og(i,e){let t=lg(i,e);if(!t)return e;let n=Dp(t,i);return Ns(n,n.next),Ns(t,t.next)}function lg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Tr(i,t))return t;do{if(Tr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ip(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);La(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&cg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function cg(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function hg(i,e,t,n){let s=i;do s.z===0&&(s.z=zh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ug(s)}function ug(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function zh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function dg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ip(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function oa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ip(i,e,t,n,s,r,a,o)}function fg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!pg(i,e)&&(La(i,e)&&La(e,i)&&mg(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||Tr(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Tr(i,e){return i.x===e.x&&i.y===e.y}function Lp(i,e,t,n){let s=tl(Bt(i,e,t)),r=tl(Bt(i,e,n)),a=tl(Bt(t,n,i)),o=tl(Bt(t,n,e));return!!(s!==r&&a!==o||s===0&&el(i,t,e)||r===0&&el(i,n,e)||a===0&&el(t,i,n)||o===0&&el(t,e,n))}function el(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function tl(i){return i>0?1:i<0?-1:0}function pg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Lp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function La(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function mg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Dp(i,e){let t=kh(i.i,i.x,i.y),n=kh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Of(i,e,t,n){let s=kh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Da(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Hh=class{static triangulate(e,t,n=2){return eg(e,t,n)}},ws=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ff(e),Bf(n,e);let a=e.length;t.forEach(Ff);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Bf(n,t[l]);let o=Hh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ff(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Na=class i extends Pt{constructor(e=new br([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:xg,b,y=!1,A,T,x,M;if(p){b=p.getSpacedPoints(h),y=!0,d=!1;let oe=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,oe),T=new B,x=new B,M=new B}d||(m=0,f=0,g=0,v=0);let N=o.extractPoints(c),P=N.shape,D=N.holes;if(!ws.isClockWise(P)){P=P.reverse();for(let oe=0,ve=D.length;oe<ve;oe++){let ye=D[oe];ws.isClockWise(ye)&&(D[oe]=ye.reverse())}}function U(oe){let ye=10000000000000001e-36,Ie=oe[0];for(let we=1;we<=oe.length;we++){let Ke=we%oe.length,Fe=oe[Ke],Ye=Fe.x-Ie.x,rt=Fe.y-Ie.y,ut=Ye*Ye+rt*rt,V=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Ie.x),Math.abs(Ie.y)),At=ye*V*V;if(ut<=At){oe.splice(Ke,1),we--;continue}Ie=Fe}}U(P),D.forEach(U);let w=D.length,C=P;for(let oe=0;oe<w;oe++){let ve=D[oe];P=P.concat(ve)}function G(oe,ve,ye){return ve||je("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ve,ye)}let z=P.length;function X(oe,ve,ye){let Ie,we,Ke,Fe=oe.x-ve.x,Ye=oe.y-ve.y,rt=ye.x-oe.x,ut=ye.y-oe.y,V=Fe*Fe+Ye*Ye,At=Fe*ut-Ye*rt;if(Math.abs(At)>Number.EPSILON){let nt=Math.sqrt(V),re=Math.sqrt(rt*rt+ut*ut),Y=ve.x-Ye/nt,ue=ve.y+Fe/nt,ce=ye.x-ut/re,Se=ye.y+rt/re,R=((ce-Y)*ut-(Se-ue)*rt)/(Fe*ut-Ye*rt);Ie=Y+Fe*R-oe.x,we=ue+Ye*R-oe.y;let S=Ie*Ie+we*we;if(S<=2)return new fe(Ie,we);Ke=Math.sqrt(S/2)}else{let nt=!1;Fe>Number.EPSILON?rt>Number.EPSILON&&(nt=!0):Fe<-Number.EPSILON?rt<-Number.EPSILON&&(nt=!0):Math.sign(Ye)===Math.sign(ut)&&(nt=!0),nt?(Ie=-Ye,we=Fe,Ke=Math.sqrt(V)):(Ie=Fe,we=Ye,Ke=Math.sqrt(V/2))}return new fe(Ie/Ke,we/Ke)}let O=[];for(let oe=0,ve=C.length,ye=ve-1,Ie=oe+1;oe<ve;oe++,ye++,Ie++)ye===ve&&(ye=0),Ie===ve&&(Ie=0),O[oe]=X(C[oe],C[ye],C[Ie]);let L=[],F,q=O.concat();for(let oe=0,ve=w;oe<ve;oe++){let ye=D[oe];F=[];for(let Ie=0,we=ye.length,Ke=we-1,Fe=Ie+1;Ie<we;Ie++,Ke++,Fe++)Ke===we&&(Ke=0),Fe===we&&(Fe=0),F[Ie]=X(ye[Ie],ye[Ke],ye[Fe]);L.push(F),q=q.concat(F)}let J;if(m===0)J=ws.triangulateShape(C,D);else{let oe=[],ve=[];for(let ye=0;ye<m;ye++){let Ie=ye/m,we=f*Math.cos(Ie*Math.PI/2),Ke=g*Math.sin(Ie*Math.PI/2)+v;for(let Fe=0,Ye=C.length;Fe<Ye;Fe++){let rt=G(C[Fe],O[Fe],Ke);ge(rt.x,rt.y,-we),Ie===0&&oe.push(rt)}for(let Fe=0,Ye=w;Fe<Ye;Fe++){let rt=D[Fe];F=L[Fe];let ut=[];for(let V=0,At=rt.length;V<At;V++){let nt=G(rt[V],F[V],Ke);ge(nt.x,nt.y,-we),Ie===0&&ut.push(nt)}Ie===0&&ve.push(ut)}}J=ws.triangulateShape(oe,ve)}let H=J.length,ee=g+v;for(let oe=0;oe<z;oe++){let ve=d?G(P[oe],q[oe],ee):P[oe];y?(x.copy(A.normals[0]).multiplyScalar(ve.x),T.copy(A.binormals[0]).multiplyScalar(ve.y),M.copy(b[0]).add(x).add(T),ge(M.x,M.y,M.z)):ge(ve.x,ve.y,0)}for(let oe=1;oe<=h;oe++)for(let ve=0;ve<z;ve++){let ye=d?G(P[ve],q[ve],ee):P[ve];y?(x.copy(A.normals[oe]).multiplyScalar(ye.x),T.copy(A.binormals[oe]).multiplyScalar(ye.y),M.copy(b[oe]).add(x).add(T),ge(M.x,M.y,M.z)):ge(ye.x,ye.y,u/h*oe)}for(let oe=m-1;oe>=0;oe--){let ve=oe/m,ye=f*Math.cos(ve*Math.PI/2),Ie=g*Math.sin(ve*Math.PI/2)+v;for(let we=0,Ke=C.length;we<Ke;we++){let Fe=G(C[we],O[we],Ie);ge(Fe.x,Fe.y,u+ye)}for(let we=0,Ke=D.length;we<Ke;we++){let Fe=D[we];F=L[we];for(let Ye=0,rt=Fe.length;Ye<rt;Ye++){let ut=G(Fe[Ye],F[Ye],Ie);y?ge(ut.x,ut.y+b[h-1].y,b[h-1].x+ye):ge(ut.x,ut.y,u+ye)}}}le(),pe();function le(){let oe=s.length/3;if(d){let ve=0,ye=z*ve;for(let Ie=0;Ie<H;Ie++){let we=J[Ie];Ne(we[2]+ye,we[1]+ye,we[0]+ye)}ve=h+m*2,ye=z*ve;for(let Ie=0;Ie<H;Ie++){let we=J[Ie];Ne(we[0]+ye,we[1]+ye,we[2]+ye)}}else{for(let ve=0;ve<H;ve++){let ye=J[ve];Ne(ye[2],ye[1],ye[0])}for(let ve=0;ve<H;ve++){let ye=J[ve];Ne(ye[0]+z*h,ye[1]+z*h,ye[2]+z*h)}}n.addGroup(oe,s.length/3-oe,0)}function pe(){let oe=s.length/3,ve=0;he(C,ve),ve+=C.length;for(let ye=0,Ie=D.length;ye<Ie;ye++){let we=D[ye];he(we,ve),ve+=we.length}n.addGroup(oe,s.length/3-oe,1)}function he(oe,ve){let ye=oe.length;for(;--ye>=0;){let Ie=ye,we=ye-1;we<0&&(we=oe.length-1);for(let Ke=0,Fe=h+m*2;Ke<Fe;Ke++){let Ye=z*Ke,rt=z*(Ke+1),ut=ve+Ie+Ye,V=ve+we+Ye,At=ve+we+rt,nt=ve+Ie+rt;Ue(ut,V,At,nt)}}}function ge(oe,ve,ye){l.push(oe),l.push(ve),l.push(ye)}function Ne(oe,ve,ye){We(oe),We(ve),We(ye);let Ie=s.length/3,we=_.generateTopUV(n,s,Ie-3,Ie-2,Ie-1);$e(we[0]),$e(we[1]),$e(we[2])}function Ue(oe,ve,ye,Ie){We(oe),We(ve),We(Ie),We(ve),We(ye),We(Ie);let we=s.length/3,Ke=_.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);$e(Ke[0]),$e(Ke[1]),$e(Ke[3]),$e(Ke[1]),$e(Ke[2]),$e(Ke[3])}function We(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function $e(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _g(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bh[s.type]().fromJSON(s)),new i(n,e.options)}},xg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new fe(r,a),new fe(o,l),new fe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-u),new fe(d,1-g),new fe(v,1-p)]:[new fe(o,1-l),new fe(h,1-u),new fe(f,1-g),new fe(m,1-p)]}};function _g(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ua=class i extends Pt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new B,d=new fe,f=new B,g=new B,v=new B,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=t;_++){let b=n+_*h*s,y=Math.sin(b),A=Math.cos(b);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*A,a.push(u.x,u.y,u.z),d.x=_/t,d.y=T/(e.length-1),o.push(d.x,d.y);let x=l[3*T+0]*y,M=l[3*T+1],N=l[3*T+0]*A;c.push(x,M,N)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,A=y,T=y+e.length,x=y+e.length+1,M=y+1;r.push(A,T,M),r.push(x,M,T)}this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("uv",new ft(o,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Fi=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let b=0;b<c;b++){let y=b*u-r;g.push(y,-_,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let b=_+c*p,y=_+c*(p+1),A=_+1+c*(p+1),T=_+1+c*p;f.push(b,y,T),f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Kt=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new B,d=new B,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],b=p/n,y=a+b*o,A=e*Math.cos(y),T=Math.sqrt(e*e-A*A),x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let N=M/t,P=s+N*r;u.x=-T*Math.cos(P),u.y=A,u.z=T*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(N+x,1-b),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let b=h[p][_+1],y=h[p][_],A=h[p+1][_],T=h[p+1][_+1];(p!==0||a>0)&&f.push(b,y,T),(p!==n-1||l<Math.PI)&&f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bi=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new B,f=new B,g=new B;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,_=(s+1)*(v-1)+m-1,b=(s+1)*(v-1)+m,y=(s+1)*v+m;l.push(p,_,y),l.push(_,b,y)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(zf(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(zf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=Vs(i[t]);for(let s in n)e[s]=n[s]}return e}function zf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var un={clone:Vs,merge:yn},yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Er=class extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jt=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wn=class extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return As('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){As('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Oa=class extends _n{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Fa=class extends _n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},El=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wl=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function la(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Sg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function kf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function bg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Al=class extends fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uh:r=e,o=2*t-n;break;case Oh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:a=e,l=2*n-t;break;case Oh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+_*a[c+A]+b*a[l+A]+y*a[u+A];return r}},Rl=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Cl=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pl=class extends fi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*d+g*2,_=u[p],b=u[p+1],y=e*d+g*2,A=h[y],T=h[y+1],x=Eg(n,t,_,A,s);r[g]=Np(x,v,b,T,m)}return r}};function Np(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Tg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Eg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Np(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Tg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),la(e.settings)&&(n.settings={inTangents:os(e.settings.inTangents,Array),outTangents:os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Cs:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break;case Dh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return sl;case this.InterpolantFactoryMethodBezier:return Dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;la(this.settings)&&(Hf(this.settings.inTangents,e),Hf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;la(this.settings)&&(Gf(this.settings.inTangents,e),Gf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&h0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,la(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Gf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Cs;var zi=class extends Pn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Rs;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};Ba.prototype.ValueTypeName="color";var ki=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};ki.prototype.ValueTypeName="number";var Il=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hi=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};Hi.prototype.ValueTypeName="quaternion";Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Pn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Rs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};fs.prototype.ValueTypeName="vector";var za=class{constructor(e="",t=-1,n=[],s=gp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ag(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Sg(l);l=kf(l,1,h),c=kf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ki(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function wg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return Ba;case"quaternion":return Hi;case"bool":case"boolean":return zi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ag(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=wg(i.type);if(i.times===void 0){let n=[],s=[];bg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),la(i.settings)&&(t.settings={inTangents:os(i.settings.inTangents,Float32Array),outTangents:os(i.settings.outTangents,Float32Array)}),t}var li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Vf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Vf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ll=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Up=new Ll,pi=class{constructor(e){this.manager=e!==void 0?e:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii={},Gh=class extends Error{constructor(e,t){super(e),this.response=t}},wr=class extends pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=li.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:s});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ii[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:b,value:y})=>{if(b)p.close();else{v+=y.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,x=h.length;T<x;T++){let M=h[T];M.onProgress&&M.onProgress(A)}p.enqueue(y),_()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Gh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{li.add(`file:${e}`,c);let h=Ii[e];delete Ii[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ii[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ar=new WeakMap,Dl=class extends pi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=li.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ar.get(a);u===void 0&&(u=[],ar.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=fr("img");function l(){h(),t&&t(this);let u=ar.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ar.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),li.remove(`image:${e}`);let d=ar.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),li.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var ka=class extends pi{constructor(e){super(e)}load(e,t,n,s){let r=new Xt,a=new Dl(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Us=class extends Nt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ha=class extends Us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ph=new Xe,Wf=new B,Xf=new B,Ar=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),Xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ph.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ph,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nl=new B,il=new Fn,oi=new B,Ga=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nl,il,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(nl,il,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new B,qf=new fe,$f=new fe,Zt=class extends Ga{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,qf,$f),t.subVectors($f,qf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ca*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vh=class extends Ar{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Va=class extends Us{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Wh=class extends Ar{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},Os=class extends Us{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Vi=class extends Ga{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xh=class extends Ar{constructor(){super(new Vi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ps=class extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Wi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ih=new WeakMap,Wa=class extends pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=li.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Ih.has(a)===!0?(s&&s(Ih.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return li.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ih.set(l,c),li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var or=-90,lr=1,Rr=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(or,lr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(or,lr,e,t);r.layers=this.layers,this.add(r);let a=new Zt(or,lr,e,t);a.layers=this.layers,this.add(a);let o=new Zt(or,lr,e,t);o.layers=this.layers,this.add(o);let l=new Zt(or,lr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Nl=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Xa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Rg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Rg(){this._document.hidden===!1&&this.reset()}var vu="\\[\\]\\.:\\/",Cg=new RegExp("["+vu+"]","g"),yu="[^"+vu+"]",Pg="[^"+vu.replace("\\.","")+"]",Ig=/((?:WC+[\/:])*)/.source.replace("WC",yu),Lg=/(WCOD+)?/.source.replace("WCOD",Pg),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yu),Ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yu),Ug=new RegExp("^"+Ig+Lg+Dg+Ng+"$"),Og=["material","materials","bones","map"],qh=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(e){let t=Ug.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Og.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=qh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dS=new Float32Array(1);var Yf=new Xe,Fs=class{constructor(e,t,n=0,s=1/0){this.ray=new cs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yf),this}intersectObject(e,t=!0,n=[]){return $h(e,this,n,t),n.sort(Kf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$h(e[s],this,n,t);return n.sort(Kf),n}};function Kf(i,e){return i.distance-e.distance}function $h(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)$h(r[a],e,t,!0)}}var wu=class wu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};wu.prototype.isMatrix2=!0;var Yh=wu;function Mu(i,e,t,n){let s=Fg(n);switch(t){case ru:return i*e;case Wl:return i*e/s.components*s.byteLength;case Xl:return i*e/s.components*s.byteLength;case ms:return i*e*2/s.components*s.byteLength;case ql:return i*e*2/s.components*s.byteLength;case au:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case $l:return i*e*4/s.components*s.byteLength;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:case Zl:return Math.max(i,16)*Math.max(e,8)/4;case Yl:case jl:return Math.max(i,8)*Math.max(e,8)/2;case Jl:case Ql:case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ec:case so:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _c:case vc:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ro:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fg(i){switch(i){case vn:case tu:return{byteLength:1,components:1};case Dr:case nu:case Ot:return{byteLength:2,components:1};case Gl:case Vl:return{byteLength:2,components:4};case ti:case Hl:case zn:return{byteLength:4,components:1};case iu:case su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function im(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hg=`#ifdef USE_ALPHAHASH
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
#endif`,Gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
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
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
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
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
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
#endif`,ex=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cx=`#define PI 3.141592653589793
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
} // validated`,hx=`vec3 transformedNormal = objectNormal;
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
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
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
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
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
#endif`,Fx=`uniform sampler2D dfgLUT;
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
}`,Bx=`
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kx=`#if defined( USE_POINTS_UV )
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
#endif`,jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
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
#endif`,e_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`#ifdef USE_MORPHTARGETS
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
#endif`,n_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l_=`#ifdef USE_NORMALMAP
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
#endif`,c_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,__=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T_=`float getShadowMask() {
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
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform float backgroundBlurriness;
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`#include <common>
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
}`,q_=`#if DEPTH_PACKING == 3200
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
}`,$_=`#define DISTANCE
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
}`,Y_=`#define DISTANCE
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`uniform float scale;
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
}`,J_=`uniform vec3 diffuse;
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
}`,Q_=`#include <common>
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#define LAMBERT
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define MATCAP
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
}`,sv=`#define MATCAP
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
}`,rv=`#define NORMAL
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
}`,av=`#define NORMAL
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
}`,ov=`#define PHONG
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
}`,lv=`#define PHONG
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
}`,cv=`#define STANDARD
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
}`,hv=`#define STANDARD
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
}`,uv=`#define TOON
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
}`,dv=`#define TOON
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
}`,fv=`uniform float size;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
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
}`,gv=`uniform vec3 color;
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
}`,xv=`uniform float rotation;
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
}`,_v=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:kg,alphahash_pars_fragment:Hg,alphamap_fragment:Gg,alphamap_pars_fragment:Vg,alphatest_fragment:Wg,alphatest_pars_fragment:Xg,aomap_fragment:qg,aomap_pars_fragment:$g,batching_pars_vertex:Yg,batching_vertex:Kg,begin_vertex:jg,beginnormal_vertex:Zg,bsdfs:Jg,iridescence_fragment:Qg,bumpmap_pars_fragment:ex,clipping_planes_fragment:tx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ax,color_pars_vertex:ox,color_vertex:lx,common:cx,defaultnormal_vertex:hx,displacementmap_pars_vertex:ux,displacementmap_vertex:dx,emissivemap_fragment:fx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:xx,envmap_common_pars_fragment:_x,envmap_pars_fragment:vx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Ix,envmap_vertex:Mx,fog_vertex:Sx,fog_pars_vertex:bx,fog_fragment:Tx,fog_pars_fragment:Ex,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Cx,lights_pars_begin:Px,lights_toon_fragment:Lx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Nx,lights_phong_pars_fragment:Ux,lights_physical_fragment:Ox,lights_physical_pars_fragment:Fx,lights_fragment_begin:Bx,lights_fragment_maps:zx,lights_fragment_end:kx,lightprobes_pars_fragment:Hx,logdepthbuf_fragment:Gx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:qx,map_pars_fragment:$x,map_particle_fragment:Yx,map_particle_pars_fragment:Kx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Jx,morphcolor_vertex:Qx,morphnormal_vertex:e_,morphtarget_pars_vertex:t_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:s_,normal_pars_fragment:r_,normal_pars_vertex:a_,normal_vertex:o_,normalmap_pars_fragment:l_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:d_,opaque_fragment:f_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:x_,dithering_pars_fragment:__,roughnessmap_fragment:v_,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:S_,shadowmap_vertex:b_,shadowmask_pars_fragment:T_,skinbase_vertex:E_,skinning_pars_vertex:w_,skinning_vertex:A_,skinnormal_vertex:R_,specularmap_fragment:C_,specularmap_pars_fragment:P_,tonemapping_fragment:I_,tonemapping_pars_fragment:L_,transmission_fragment:D_,transmission_pars_fragment:N_,uv_pars_fragment:U_,uv_pars_vertex:O_,uv_vertex:F_,worldpos_vertex:B_,background_vert:z_,background_frag:k_,backgroundCube_vert:H_,backgroundCube_frag:G_,cube_vert:V_,cube_frag:W_,depth_vert:X_,depth_frag:q_,distance_vert:$_,distance_frag:Y_,equirect_vert:K_,equirect_frag:j_,linedashed_vert:Z_,linedashed_frag:J_,meshbasic_vert:Q_,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:sv,meshnormal_vert:rv,meshnormal_frag:av,meshphong_vert:ov,meshphong_frag:lv,meshphysical_vert:cv,meshphysical_frag:hv,meshtoon_vert:uv,meshtoon_frag:dv,points_vert:fv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:xv,sprite_frag:_v},Le={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},vi={basic:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:yn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:yn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:yn([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:yn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:yn([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:yn([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:yn([Le.common,Le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:yn([Le.lights,Le.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};vi.physical={uniforms:yn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Ec={r:0,b:0,g:0},vv=new Xe,sm=new Qe;sm.set(-1,0,0,0,1,0,0,0,1);function yv(i,e,t,n,s,r){let a=new Ce(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function g(_){let b=!1,y=f(_);y===null?m(a,o):y&&y.isColor&&(m(y,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,b){let y=f(b);y&&y.isCubeTexture?(c===void 0&&(c=new et(new Gt(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Vs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vv.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sm),c.material.toneMapped=ot.getTransfer(y.colorSpace)!==yt,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new et(new Fi(2,2),new wt({name:"BackgroundMaterial",uniforms:Vs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ot.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(Ec,_u(i)),t.buffers.color.setClear(Ec.r,Ec.g,Ec.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Mv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,I,U,w,C){let G=!1,z=u(D,w,U,I);r!==z&&(r=z,c(r.object)),G=f(D,w,U,C),G&&g(D,w,U,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(D,I,U,w),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,I,U,w){let C=w.wireframe===!0,G=n[I.id];G===void 0&&(G={},n[I.id]=G);let z=D.isInstancedMesh===!0?D.id:0,X=G[z];X===void 0&&(X={},G[z]=X);let O=X[U.id];O===void 0&&(O={},X[U.id]=O);let L=O[C];return L===void 0&&(L=d(l()),O[C]=L),L}function d(D){let I=[],U=[],w=[];for(let C=0;C<t;C++)I[C]=0,U[C]=0,w[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:w,object:D,attributes:{},index:null}}function f(D,I,U,w){let C=r.attributes,G=I.attributes,z=0,X=U.getAttributes();for(let O in X)if(X[O].location>=0){let F=C[O],q=G[O];if(q===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),F===void 0||F.attribute!==q||q&&F.data!==q.data)return!0;z++}return r.attributesNum!==z||r.index!==w}function g(D,I,U,w){let C={},G=I.attributes,z=0,X=U.getAttributes();for(let O in X)if(X[O].location>=0){let F=G[O];F===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(F=D.instanceColor));let q={};q.attribute=F,F&&F.data&&(q.data=F.data),C[O]=q,z++}r.attributes=C,r.attributesNum=z,r.index=w}function v(){let D=r.newAttributes;for(let I=0,U=D.length;I<U;I++)D[I]=0}function m(D){p(D,0)}function p(D,I){let U=r.newAttributes,w=r.enabledAttributes,C=r.attributeDivisors;U[D]=1,w[D]===0&&(i.enableVertexAttribArray(D),w[D]=1),C[D]!==I&&(i.vertexAttribDivisor(D,I),C[D]=I)}function _(){let D=r.newAttributes,I=r.enabledAttributes;for(let U=0,w=I.length;U<w;U++)I[U]!==D[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function b(D,I,U,w,C,G,z){z===!0?i.vertexAttribIPointer(D,I,U,C,G):i.vertexAttribPointer(D,I,U,w,C,G)}function y(D,I,U,w){v();let C=w.attributes,G=U.getAttributes(),z=I.defaultAttributeValues;for(let X in G){let O=G[X];if(O.location>=0){let L=C[X];if(L===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),L!==void 0){let F=L.normalized,q=L.itemSize,J=e.get(L);if(J===void 0)continue;let H=J.buffer,ee=J.type,le=J.bytesPerElement,pe=ee===i.INT||ee===i.UNSIGNED_INT||L.gpuType===Hl;if(L.isInterleavedBufferAttribute){let he=L.data,ge=he.isInterleavedBuffer===!0?he.stride:he.itemSize,Ne=L.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Ue=0;Ue<O.locationSize;Ue++)p(O.location+Ue,he.meshPerAttribute);D.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<O.locationSize;Ue++)m(O.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Ue=0;Ue<O.locationSize;Ue++)b(O.location+Ue,q/O.locationSize,ee,F,ge*le,(Ne+q/O.locationSize*Ue)*le,pe)}else{if(L.isInstancedBufferAttribute){for(let he=0;he<O.locationSize;he++)p(O.location+he,L.meshPerAttribute);D.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let he=0;he<O.locationSize;he++)m(O.location+he);i.bindBuffer(i.ARRAY_BUFFER,H);for(let he=0;he<O.locationSize;he++)b(O.location+he,q/O.locationSize,ee,F,q*le,q/O.locationSize*he*le,pe)}}else if(z!==void 0){let F=z[X];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(O.location,F);break;case 3:i.vertexAttrib3fv(O.location,F);break;case 4:i.vertexAttrib4fv(O.location,F);break;default:i.vertexAttrib1fv(O.location,F)}}}}_()}function A(){N();for(let D in n){let I=n[D];for(let U in I){let w=I[U];for(let C in w){let G=w[C];for(let z in G)h(G[z].object),delete G[z];delete w[C]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let U in I){let w=I[U];for(let C in w){let G=w[C];for(let z in G)h(G[z].object),delete G[z];delete w[C]}}delete n[D.id]}function x(D){for(let I in n){let U=n[I];for(let w in U){let C=U[w];if(C[D.id]===void 0)continue;let G=C[D.id];for(let z in G)h(G[z].object),delete G[z];delete C[D.id]}}}function M(D){for(let I in n){let U=n[I],w=D.isInstancedMesh===!0?D.id:0,C=U[w];if(C!==void 0){for(let G in C){let z=C[G];for(let X in z)h(z[X].object),delete z[X];delete C[G]}delete U[w],Object.keys(U).length===0&&delete n[I]}}}function N(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Sv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function bv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==In&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Ot&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==vn&&x!==zn&&!M&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:A,samples:T}}function Tv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new On,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,b=_*4,y=p.clippingState||null;l.value=y,y=h(g,d,b,f);for(let A=0;A!==b;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==v;++b,y+=4)a.copy(u[b]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var co=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:an});r.uniforms.tEquirect.value=t;let a=new et(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Jt),new Rr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Op=256,Ev=3,wv=20,rm=256,am=16,Av=3,Rv=new B,Cv=new Ce,Fr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rr(1,10,null),this._boxMesh=new et(new Gt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Rv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Cv));let m=new Rr(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Op,pu(e))}_fromTexture(e,t){e.mapping===Hs||e.mapping===Ir?this._setSize(e.image.length===0?Op:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Fp(e,!1,!1),n=Math.log2(e)-Ev;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Hs||e.mapping===Ir?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Pv(),this._integrationMaterial=Iv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/am);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Av)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(rm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Fp(i,e,t){return new co(i,{minFilter:Yn,generateMipmaps:e,type:Ot,colorSpace:En,depthBuffer:t})}function ho(i,e,t){return new wt({name:i,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:hn,blending:an,depthTest:!1,depthWrite:!1})}function Pv(){return ho("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rm}u

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
	`)}function Iv(){return ho("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:am}},`

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
	`)}function Lv(){return ho("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wv}
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
	`)}function Bp(){return ho("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zp(){return ho("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Bl||f===zl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new co(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Bl||f===zl,v=f===Hs||f===Ir;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Fr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Fr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Bl?d.mapping=Hs:f===zl&&(d.mapping=Ir),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Nv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function Uv(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(g){let v=g.attributes;for(let m in v)e.update(v[m],i.ARRAY_BUFFER)}function u(g){let v=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let _=v!==null?v.array.length:m.array.length/3-1,b=m.count>=65535?_a:xa,y=new b(Math.ceil(_/3)*6,1),A=y.array;if(v!==null){let x=v.array;p=v.version;for(let M=0,N=0;M<_;M+=3){let P=x[M+0],D=x[M+1],I=x[M+2];A[N++]=P,A[N++]=D,A[N++]=D,A[N++]=I,A[N++]=I,A[N++]=P}}else{p=m.version;for(let x=0,M=0;x<_;x+=3){let N=x+0,P=x+1,D=x+2;A[M++]=N,A[M++]=P,A[M++]=P,A[M++]=D,A[M++]=D,A[M++]=N}}y.version=p;let T=r.get(g);T&&e.remove(T),r.set(g,y)}function d(g){let v=r.get(g);if(v){let m=g.index;m!==null&&v.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Ov(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Fv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bv(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let N=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=o.attributes.position.count*b,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*A*4*u),x=new ma(T,y,A,u);x.type=zn,x.needsUpdate=!0;let M=b*4;for(let P=0;P<u;P++){let D=m[P],I=p[P],U=_[P],w=y*A*4*P;for(let C=0;C<D.count;C++){let G=C*M;f===!0&&(s.fromBufferAttribute(D,C),T[w+G+0]=s.x,T[w+G+1]=s.y,T[w+G+2]=s.z,T[w+G+3]=0),g===!0&&(s.fromBufferAttribute(I,C),T[w+G+4]=s.x,T[w+G+5]=s.y,T[w+G+6]=s.z,T[w+G+7]=0),v===!0&&(s.fromBufferAttribute(U,C),T[w+G+8]=s.x,T[w+G+9]=s.y,T[w+G+10]=s.z,T[w+G+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new fe(y,A)},n.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zv(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var kv={[Ya]:"LINEAR_TONE_MAPPING",[Ka]:"REINHARD_TONE_MAPPING",[ja]:"CINEON_TONE_MAPPING",[Za]:"ACES_FILMIC_TONE_MAPPING",[Qa]:"AGX_TONE_MAPPING",[ks]:"NEUTRAL_TONE_MAPPING",[Ja]:"CUSTOM_TONE_MAPPING"};function Hv(i,e,t,n,s,r){let a=new Dt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Pt;h.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ft([0,2,0,0,2,0],2));let u=new Er({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new et(h,u),f=new Vi(-1,1,1,-1,0,1),g=null,v=null,m=!1,p,_=null,b=[],y=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let x=0;x<b.length;x++){let M=b[x];M.setSize&&M.setSize(A,T)}},this.setEffects=function(A){b=A,y=b.length>0&&b[0].isRenderPass===!0;let T=a.width,x=a.height;b.length>0&&o===null&&(o=new Dt(T,x,{type:Ot,depthBuffer:!1,stencilBuffer:!1}),l=new Dt(T,x,{type:Ot,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(N=>N.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new ei(T,x),r===!0&&(c.format=ni,c.type=qi)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let N=0;N<b.length;N++){let P=b[N];P.setSize&&P.setSize(T,x),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===gi&&b.length===0)return!1;if(_=T,T!==null){let x=T.width,M=T.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return y===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=gi,!0},this.hasRenderPass=function(){return y},this.end=function(A,T){A.toneMapping=p,m=!0;let x=a,M=o;for(let N=0;N<b.length;N++){let P=b[N];P.enabled!==!1&&(P.render(A,M,x,T),P.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,u.defines={},ot.getTransfer(g)===yt&&(u.defines.SRGB_TRANSFER="");let N=kv[v];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(_),A.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var om=new Xt,lm=new ei(1,1),cm=new ba(1),hm=new ma,um=new ml,dm=new Sa,kp=[],Hp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);function Br(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kp[s];if(r===void 0&&(r=new Float32Array(s),kp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rc(i,e){let t=Hp[e];t===void 0&&(t=new Int32Array(e),Hp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function qv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Wp.set(n),i.uniformMatrix2fv(this.addr,!1,Wp),en(t,n)}}function $v(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Vp.set(n),i.uniformMatrix3fv(this.addr,!1,Vp),en(t,n)}}function Yv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Gp.set(n),i.uniformMatrix4fv(this.addr,!1,Gp),en(t,n)}}function Kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function Jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function Qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Cc(i){return i.version===0&&(i.compareFunction=hu,i.needsUpdate=!0),i}function iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Cc(lm):r=om,t.setTexture2D(e||r,s)}function sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||um,s)}function ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Cc(cm):r=dm,t.setTextureCube(e||r,s)}function ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hm,s)}function oy(i){switch(i){case 5126:return Gv;case 35664:return Vv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return $v;case 35676:return Yv;case 5124:case 35670:return Kv;case 35667:case 35671:return jv;case 35668:case 35672:return Zv;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}function ly(i,e){i.uniform1fv(this.addr,e)}function cy(i,e){let t=Br(e,this.size,2);i.uniform2fv(this.addr,t)}function hy(i,e){let t=Br(e,this.size,3);i.uniform3fv(this.addr,t)}function uy(i,e){let t=Br(e,this.size,4);i.uniform4fv(this.addr,t)}function dy(i,e){let t=Br(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fy(i,e){let t=Br(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function py(i,e){let t=Br(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function my(i,e){i.uniform1iv(this.addr,e)}function gy(i,e){i.uniform2iv(this.addr,e)}function xy(i,e){i.uniform3iv(this.addr,e)}function _y(i,e){i.uniform4iv(this.addr,e)}function vy(i,e){i.uniform1uiv(this.addr,e)}function yy(i,e){i.uniform2uiv(this.addr,e)}function My(i,e){i.uniform3uiv(this.addr,e)}function Sy(i,e){i.uniform4uiv(this.addr,e)}function by(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Cc(lm):a=om;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ty(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||um,r[a])}function Ey(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Cc(cm):a=dm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function wy(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hm,r[a])}function Ay(i){switch(i){case 5126:return ly;case 35664:return cy;case 35665:return hy;case 35666:return uy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return xy;case 35669:case 35673:return _y;case 5125:return vy;case 36294:return yy;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return wy}}var Cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oy(t.type)}},Pu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ay(t.type)}},Iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Au=/(\w+)(\])?(\[|\.)?/g;function Xp(i,e){i.seq.push(e),i.map[e.id]=e}function Ry(i,e,t){let n=i.name,s=n.length;for(Au.lastIndex=0;;){let r=Au.exec(n),a=Au.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xp(t,c===void 0?new Cu(o,i,e):new Pu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Iu(o),Xp(t,u)),t=u}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ry(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function qp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cy=37297,Py=0;function Iy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var $p=new Qe;function Ly(i){ot._getMatrix($p,ot.workingColorSpace,i);let e=`mat3( ${$p.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case fa:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Iy(i.getShaderSource(e),o)}else return r}function Dy(i,e){let t=Ly(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ny={[Ya]:"Linear",[Ka]:"Reinhard",[ja]:"Cineon",[Za]:"ACESFilmic",[Qa]:"AgX",[ks]:"Neutral",[Ja]:"Custom"};function Uy(i,e){let t=Ny[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wc=new B;function Oy(){ot.getLuminanceCoefficients(wc);let i=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function By(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function lo(i){return i!==""}function Kp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(i){return i.replace(ky,Hy)}function Hy(i,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Lu(t)}var Gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(i){return i.replace(Gy,Vy)}function Vy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Wy={[Bs]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function Xy(i){return Wy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qy={[Ir]:"ENVMAP_MODE_REFRACTION"};function $y(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yy={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[fp]:"ENVMAP_BLENDING_MIX",[pp]:"ENVMAP_BLENDING_ADD"};function Ky(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yy[i.combine]||"ENVMAP_BLENDING_NONE"}function jy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Xy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$y(t),u=Ky(t),d=Fy(t),f=By(r),g=s.createProgram(),v,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(lo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(lo).join(`
`),m.length>0&&(m+=`
`)):(v=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),m=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ht.tonemapping_pars_fragment:"",t.toneMapping!==gi?Uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Dy("linearToOutputTexel",t.outputColorSpace),Oy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),a=Lu(a),a=Kp(a,t),a=jp(a,t),o=Lu(o),o=Kp(o,t),o=jp(o,t),a=Zp(a),o=Zp(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=p+v+a,b=p+m+o,y=qp(s,s.VERTEX_SHADER,_),A=qp(s,s.FRAGMENT_SHADER,b);s.attachShader(g,y),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",I=s.getShaderInfoLog(y)||"",U=s.getShaderInfoLog(A)||"",w=D.trim(),C=I.trim(),G=U.trim(),z=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,A);else{let O=Yp(s,y,"vertex"),L=Yp(s,A,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+w+`
`+O+`
`+L)}else w!==""?Ve("WebGLProgram: Program Info Log:",w):(C===""||G==="")&&(X=!1);X&&(P.diagnostics={runnable:z,programLog:w,vertexShader:{log:C,prefix:v},fragmentShader:{log:G,prefix:m}})}s.deleteShader(y),s.deleteShader(A),x=new Or(s,g),M=zy(s,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,Cy)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Py++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}var Zy=0,Du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nu(e),t.set(e,n)),n}},Nu=class{constructor(e){this.id=Zy++,this.code=e,this.usedTimes=0}};function Jy(i){return i===ms||i===so||i===ro}function Qy(i,e,t,n,s,r){let a=new gr,o=new Du,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,M,N,P,D,I){let U=P.fog,w=D.geometry,C=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||C,G),X=d[x.type],O=n.precision;x.precision!==null&&(O=n.getMaxPrecision(x.precision),O!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",O,"instead."));let L=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,F=L!==void 0?L.length:0,q=0;w.morphAttributes.position!==void 0&&(q=1),w.morphAttributes.normal!==void 0&&(q=2),w.morphAttributes.color!==void 0&&(q=3);let J,H,ee,le;if(X){let Pe=vi[X];J=Pe.vertexShader,H=Pe.fragmentShader}else{J=x.vertexShader,H=x.fragmentShader;let Pe=o.getVertexShaderStage(x),Tt=o.getFragmentShaderStage(x);o.update(x,Pe,Tt),ee=Pe.id,le=Tt.id}let pe=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),ge=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,Ue=!!x.map,We=!!x.matcap,$e=!!z,oe=$e&&z.isPMREMTexture===!0,ve=!!x.aoMap,ye=!!x.lightMap,Ie=!!x.bumpMap&&x.wireframe===!1,we=!!x.normalMap,Ke=!!x.displacementMap,Fe=!!x.emissiveMap,Ye=!!x.metalnessMap,rt=!!x.roughnessMap,ut=x.anisotropy>0,V=x.clearcoat>0,At=x.diffuseRoughness>0,nt=x.dispersion>0,re=x.retroreflectivity>0,Y=x.iridescence>0,ue=x.sheen>0,ce=x.transmission>0,Se=ut&&!!x.anisotropyMap,R=V&&!!x.clearcoatMap,S=V&&!!x.clearcoatNormalMap,$=V&&!!x.clearcoatRoughnessMap,ae=At&&!!x.diffuseRoughnessMap,Q=Y&&!!x.iridescenceMap,de=Y&&!!x.iridescenceThicknessMap,xe=ue&&!!x.sheenColorMap,ne=ue&&!!x.sheenRoughnessMap,ie=!!x.specularMap,me=!!x.specularColorMap,k=!!x.specularIntensityMap,se=ce&&!!x.transmissionMap,j=ce&&!!x.thicknessMap,be=!!x.gradientMap,Me=!!x.alphaMap,Te=x.alphaTest>0,Oe=!!x.alphaHash,tt=!!x.extensions,_e=gi;x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Ge=oe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Je={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:H,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:O,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:ge,instancingColor:ge&&D.instanceColor!==null,instancingMorph:ge&&D.morphTexture!==null,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:We,envMap:$e,envMapMode:$e&&z.mapping,envMapPMREM:oe,envMapMaxLod:oe?Ge.length-1:null,envMapSize:oe?Ge[0].width:null,aoMap:ve,lightMap:ye,bumpMap:Ie,normalMap:we,displacementMap:Ke,emissiveMap:Fe,normalMapObjectSpace:we&&x.normalMapType===_p,normalMapTangentSpace:we&&x.normalMapType===Ur,packedNormalMap:we&&x.normalMapType===Ur&&Jy(x.normalMap.format),metalnessMap:Ye,roughnessMap:rt,anisotropy:ut,anisotropyMap:Se,clearcoat:V,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:$,diffuseRoughness:At,diffuseRoughnessMap:ae,dispersion:nt,retroreflection:re,iridescence:Y,iridescenceMap:Q,iridescenceThicknessMap:de,sheen:ue,sheenColorMap:xe,sheenRoughnessMap:ne,specularMap:ie,specularColorMap:me,specularIntensityMap:k,transmission:ce,transmissionMap:se,thicknessMap:j,gradientMap:be,opaque:x.transparent===!1&&x.blending===Pr&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:Te,alphaHash:Oe,combine:x.combine,mapUv:Ue&&f(x.map.channel),aoMapUv:ve&&f(x.aoMap.channel),lightMapUv:ye&&f(x.lightMap.channel),bumpMapUv:Ie&&f(x.bumpMap.channel),normalMapUv:we&&f(x.normalMap.channel),displacementMapUv:Ke&&f(x.displacementMap.channel),emissiveMapUv:Fe&&f(x.emissiveMap.channel),metalnessMapUv:Ye&&f(x.metalnessMap.channel),roughnessMapUv:rt&&f(x.roughnessMap.channel),anisotropyMapUv:Se&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&f(x.sheenRoughnessMap.channel),specularMapUv:ie&&f(x.specularMap.channel),specularColorMapUv:me&&f(x.specularColorMap.channel),specularIntensityMapUv:k&&f(x.specularIntensityMap.channel),transmissionMapUv:se&&f(x.transmissionMap.channel),thicknessMapUv:j&&f(x.thicknessMap.channel),alphaMapUv:Me&&f(x.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(we||ut),vertexNormals:!!w.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!w.attributes.uv&&(Ue||Me),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||w.attributes.normal===void 0&&we===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:I.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:Fe&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ut,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function v(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)M.push(N),M.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(M,x),p(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function p(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let M=d[x.type],N;if(M){let P=vi[M];N=un.clone(P.uniforms)}else N=x.uniforms;return N}function b(x,M){let N=h.get(M);return N!==void 0?++N.usedTimes:(N=new jy(i,M,x,s),c.push(N),h.set(M,N)),N}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:_,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:T}}function eM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function em(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function l(d,f,g,v,m,p,_){_.reversedDepth===!0&&(m=-m);let b=o(d,f,g,v,m,p);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(d,f,g,v,m,p){let _=o(d,f,g,v,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||tM),n.length>1&&n.sort(f||Qp),s.length>1&&s.sort(f||Qp)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function nM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new em,i.set(n,[a])):s>=r.length?(a=new em,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function iM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ce};break;case"SpotLight":t={position:new B,direction:new B,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function sM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rM=0;function aM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oM(i){let e=new iM,t=sM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Xe,a=new Xe;function o(c){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,b=0,y=0,A=0,T=0,x=0,M=0,N=0,P=0;c.sort(aM);for(let I=0,U=c.length;I<U;I++){let w=c[I],C=w.color,G=w.intensity,z=w.distance,X=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ms?X=w.shadow.map.texture:X=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=C.r*G,u+=C.g*G,d+=C.b*G;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],G);P++}else if(w.isSunLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let L=w.shadow,F=t.get(w);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[g]=F,n.sunShadowMap[g]=X;let q=L.getViewportCount();for(let J=0;J<q;J++)n.sunShadowMatrix[v+J]=L.getMatrix(J),n.sunShadowCascade[v+J]=L._cascadeData[J];v+=q,g++}n.sun[f]=O,f++}else if(w.isDirectionalLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let L=w.shadow,F=t.get(w);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize=L.mapSize,n.directionalShadow[m]=F,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=w.shadow.matrix,A++}n.directional[m]=O,m++}else if(w.isSpotLight){let O=e.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(C).multiplyScalar(G),O.distance=z,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[_]=O;let L=w.shadow;if(w.map&&(n.spotLightMap[M]=w.map,M++,L.updateMatrices(w),w.castShadow&&N++),n.spotLightMatrix[_]=L.matrix,w.castShadow){let F=t.get(w);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize=L.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=X,x++}_++}else if(w.isRectAreaLight){let O=e.get(w);O.color.copy(C).multiplyScalar(G),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[b]=O,b++}else if(w.isPointLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){let L=w.shadow,F=t.get(w);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize=L.mapSize,F.shadowCameraNear=L.camera.near,F.shadowCameraFar=L.camera.far,n.pointShadow[p]=F,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=w.shadow.matrix,T++}n.point[p]=O,p++}else if(w.isHemisphereLight){let O=e.get(w);O.skyColor.copy(w.color).multiplyScalar(G),O.groundColor.copy(w.groundColor).multiplyScalar(G),n.hemi[y]=O,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==M||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=b,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-N,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=M,D.numLightProbes=P,n.version=rM++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let y=c[_];if(y.isSunLight){let A=n.sun[u];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(y.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function tm(i){let e=new oM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function lM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new tm(i),e.set(s,[o])):r>=a.length?(o=new tm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`,uM=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],dM=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],nm=new Xe,oo=new B,Ru=new B;function fM(i,e,t){let n=new hs,s=new fe,r=new fe,a=new Mt,o=new El,l=new wl,c={},h=t.maxTextureSize,u={[mi]:hn,[hn]:mi,[Ut]:Ut},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:cM,fragmentShader:hM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let p=this.type;this.render=function(T,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Jf&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);let N=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(an),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=p!==this.type;U&&x.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(C=>C.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,C=T.length;w<C;w++){let G=T[w],z=G.shadow;if(z===void 0){Ve("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let X=z.getFrameExtents();s.multiply(X),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,z.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=O,z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Cr){if(G.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Dt(s.x,s.y,{format:ms,type:Ot,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new ei(s.x,s.y,zn),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Di,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Lt,z.map.depthTexture.magFilter=Lt}else G.isPointLight?(z.map=new co(s.x),z.map.depthTexture=new ba(s.x,ti)):(z.map=new Dt(s.x,s.y),z.map.depthTexture=new ei(s.x,s.y,ti)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Di,this.type===Bs?(z.map.depthTexture.compareFunction=O?cu:lu,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Lt,z.map.depthTexture.magFilter=Lt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let L=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();G.isPointLight!==!0&&z.updateMatrices(G,M);let F=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let q=0;q<L;q++){let J=z.getCamera(q);if(G.isPointLight){let H=z.camera,ee=z.matrix,le=G.distance||H.far;le!==H.far&&(H.far=le,H.updateProjectionMatrix()),oo.setFromMatrixPosition(G.matrixWorld),H.position.copy(oo),Ru.copy(H.position),Ru.add(uM[q]),H.up.copy(dM[q]),H.lookAt(Ru),H.updateMatrixWorld(),ee.makeTranslation(-oo.x,-oo.y,-oo.z),nm.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),z._frustum.setFromProjectionMatrix(nm,H.coordinateSystem,H.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,q),i.clear();else{q===0&&(i.setRenderTarget(z.map),i.clear());let H=z.getViewport(q);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),I.viewport(a)}n=z.getFrustum(q),y(x,M,J,G,F,this.type)}z.isPointLightShadow!==!0&&this.type===Cr&&_(z,M),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(N,P,D)};function _(T,x){let M=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Dt(s.x,s.y,{format:ms,type:Ot}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,M,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,M,f,v,null)}function b(T,x,M,N){let P=null,D=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)P=D;else if(P=M.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let I=P.uuid,U=x.uuid,w=c[I];w===void 0&&(w={},c[I]=w);let C=w[U];C===void 0&&(C=P.clone(),w[U]=C,x.addEventListener("dispose",A)),P=C}if(P.visible=x.visible,P.wireframe=x.wireframe,N===Cr?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:u[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let I=i.properties.get(P);I.light=M}return P}function y(T,x,M,N,P,D){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Cr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let w=e.update(T),C=T.material;if(Array.isArray(C)){let G=w.groups;for(let z=0,X=G.length;z<X;z++){let O=G[z],L=C[O.materialIndex];if(L&&L.visible){let F=b(T,L,N,D);T.onBeforeShadow(i,T,x,M,w,F,O),i.renderBufferDirect(M,null,w,F,T,O),T.onAfterShadow(i,T,x,M,w,F,O)}}}else if(C.visible){let G=b(T,C,N,D);T.onBeforeShadow(i,T,x,M,w,G,null),i.renderBufferDirect(M,null,w,G,T,null),T.onAfterShadow(i,T,x,M,w,G,null)}}let U=T.children;for(let w=0,C=U.length;w<C;w++)y(U[w],x,M,N,P,D)}function A(T){T.target.removeEventListener("dispose",A);for(let M in c){let N=c[M],P=T.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function pM(i,e){function t(){let k=!1,se=new Mt,j=null,be=new Mt(0,0,0,0);return{setMask:function(Me){j!==Me&&!k&&(i.colorMask(Me,Me,Me,Me),j=Me)},setLocked:function(Me){k=Me},setClear:function(Me,Te,Oe,tt,_e){_e===!0&&(Me*=tt,Te*=tt,Oe*=tt),se.set(Me,Te,Oe,tt),be.equals(se)===!1&&(i.clearColor(Me,Te,Oe,tt),be.copy(se))},reset:function(){k=!1,j=null,be.set(-1,0,0,0)}}}function n(){let k=!1,se=!1,j=null,be=null,Me=null;return{setReversed:function(Te){if(se!==Te){let Oe=e.get("EXT_clip_control");Te?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),se=Te;let tt=Me;Me=null,this.setClear(tt)}},getReversed:function(){return se},setTest:function(Te){Te?he(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Te){j!==Te&&!k&&(i.depthMask(Te),j=Te)},setFunc:function(Te){if(se&&(Te=Rp[Te]),be!==Te){switch(Te){case al:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=Te}},setLocked:function(Te){k=Te},setClear:function(Te){Me!==Te&&(Me=Te,se&&(Te=1-Te),i.clearDepth(Te))},reset:function(){k=!1,j=null,be=null,Me=null,se=!1}}}function s(){let k=!1,se=null,j=null,be=null,Me=null,Te=null,Oe=null,tt=null,_e=null;return{setTest:function(Ge){k||(Ge?he(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Ge){se!==Ge&&!k&&(i.stencilMask(Ge),se=Ge)},setFunc:function(Ge,Je,Pe){(j!==Ge||be!==Je||Me!==Pe)&&(i.stencilFunc(Ge,Je,Pe),j=Ge,be=Je,Me=Pe)},setOp:function(Ge,Je,Pe){(Te!==Ge||Oe!==Je||tt!==Pe)&&(i.stencilOp(Ge,Je,Pe),Te=Ge,Oe=Je,tt=Pe)},setLocked:function(Ge){k=Ge},setClear:function(Ge){_e!==Ge&&(i.clearStencil(Ge),_e=Ge)},reset:function(){k=!1,se=null,j=null,be=null,Me=null,Te=null,Oe=null,tt=null,_e=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,_=null,b=null,y=null,A=null,T=null,x=null,M=new Ce(0,0,0),N=0,P=!1,D=null,I=null,U=null,w=null,C=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,X=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=X>=2);let L=null,F={},q=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),H=new Mt().fromArray(q),ee=new Mt().fromArray(J);function le(k,se,j,be){let Me=new Uint8Array(4),Te=i.createTexture();i.bindTexture(k,Te),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<j;Oe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(se+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Te}let pe={};pe[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(hr),Ie(!1),we(Kh),he(i.CULL_FACE),ve(an);function he(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function ge(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ne(k,se){return d[k]!==se?(i.bindFramebuffer(k,se),d[k]=se,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ue(k,se){let j=g,be=!1;if(k){j=f.get(se),j===void 0&&(j=[],f.set(se,j));let Me=k.textures;if(j.length!==Me.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Oe=Me.length;Te<Oe;Te++)j[Te]=i.COLOR_ATTACHMENT0+Te;j.length=Me.length,be=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,be=!0);be&&i.drawBuffers(j)}function We(k){return v!==k?(i.useProgram(k),v=k,!0):!1}let $e={[$n]:i.FUNC_ADD,[Qf]:i.FUNC_SUBTRACT,[ep]:i.FUNC_REVERSE_SUBTRACT};$e[tp]=i.MIN,$e[np]=i.MAX;let oe={[zs]:i.ZERO,[ip]:i.ONE,[sp]:i.SRC_COLOR,[Jh]:i.SRC_ALPHA,[lp]:i.SRC_ALPHA_SATURATE,[$a]:i.DST_COLOR,[qa]:i.DST_ALPHA,[rp]:i.ONE_MINUS_SRC_COLOR,[Qh]:i.ONE_MINUS_SRC_ALPHA,[op]:i.ONE_MINUS_DST_COLOR,[ap]:i.ONE_MINUS_DST_ALPHA,[cp]:i.CONSTANT_COLOR,[hp]:i.ONE_MINUS_CONSTANT_COLOR,[up]:i.CONSTANT_ALPHA,[dp]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(k,se,j,be,Me,Te,Oe,tt,_e,Ge){if(k===an){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(he(i.BLEND),m=!0),k!==Ol){if(k!==p||Ge!==P){if((_!==$n||A!==$n)&&(i.blendEquation(i.FUNC_ADD),_=$n,A=$n),Ge)switch(k){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",k);break}else switch(k){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jh:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",k);break}b=null,y=null,T=null,x=null,M.set(0,0,0),N=0,p=k,P=Ge}return}Me=Me||se,Te=Te||j,Oe=Oe||be,(se!==_||Me!==A)&&(i.blendEquationSeparate($e[se],$e[Me]),_=se,A=Me),(j!==b||be!==y||Te!==T||Oe!==x)&&(i.blendFuncSeparate(oe[j],oe[be],oe[Te],oe[Oe]),b=j,y=be,T=Te,x=Oe),(tt.equals(M)===!1||_e!==N)&&(i.blendColor(tt.r,tt.g,tt.b,_e),M.copy(tt),N=_e),p=k,P=!1}function ye(k,se){k.side===Ut?ge(i.CULL_FACE):he(i.CULL_FACE);let j=k.side===hn;se&&(j=!j),Ie(j),k.blending===Pr&&k.transparent===!1?ve(an):ve(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let be=k.stencilWrite;o.setTest(be),be&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(k){D!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),D=k)}function we(k){k!==jf?(he(i.CULL_FACE),k!==I&&(k===Kh?i.cullFace(i.BACK):k===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),I=k}function Ke(k){k!==U&&(z&&i.lineWidth(k),U=k)}function Fe(k,se,j){k?(he(i.POLYGON_OFFSET_FILL),(w!==se||C!==j)&&(w=se,C=j,a.getReversed()&&(se=-se,j=-j),i.polygonOffset(se,j))):ge(i.POLYGON_OFFSET_FILL)}function Ye(k){k?he(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function rt(k){k===void 0&&(k=i.TEXTURE0+G-1),L!==k&&(i.activeTexture(k),L=k)}function ut(k,se,j){j===void 0&&(L===null?j=i.TEXTURE0+G-1:j=L);let be=F[j];be===void 0&&(be={type:void 0,texture:void 0},F[j]=be),(be.type!==k||be.texture!==se)&&(L!==j&&(i.activeTexture(j),L=j),i.bindTexture(k,se||pe[k]),be.type=k,be.texture=se)}function V(){let k=F[L];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function At(){try{i.compressedTexImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function re(){try{i.texSubImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function Y(){try{i.texSubImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function ce(){try{i.compressedTexSubImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function Se(){try{i.texStorage2D(...arguments)}catch(k){je("WebGLState:",k)}}function R(){try{i.texStorage3D(...arguments)}catch(k){je("WebGLState:",k)}}function S(){try{i.texImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function $(){try{i.texImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function ae(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function Q(k,se){u[k]!==se&&(i.pixelStorei(k,se),u[k]=se)}function de(k){H.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),H.copy(k))}function xe(k){ee.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ee.copy(k))}function ne(k,se){let j=c.get(se);j===void 0&&(j=new WeakMap,c.set(se,j));let be=j.get(k);be===void 0&&(be=i.getUniformBlockIndex(se,k.name),i.uniformBlockBinding(se,be,be),j.set(k,be))}function ie(k,se,j){let Me=c.get(se).get(k);l[Me]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,Me,j),l[Me]=j)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},L=null,F={},d={},l={},f=new WeakMap,g=[],v=null,m=!1,p=null,_=null,b=null,y=null,A=null,T=null,x=null,M=new Ce(0,0,0),N=0,P=!1,D=null,I=null,U=null,w=null,C=null,H.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:ge,bindFramebuffer:Ne,drawBuffers:Ue,useProgram:We,setBlending:ve,setMaterial:ye,setFlipSided:Ie,setCullFace:we,setLineWidth:Ke,setPolygonOffset:Fe,setScissorTest:Ye,activeTexture:rt,bindTexture:ut,unbindTexture:V,compressedTexImage2D:At,compressedTexImage3D:nt,texImage2D:S,texImage3D:$,pixelStorei:Q,getParameter:ae,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Se,texStorage3D:R,texSubImage2D:re,texSubImage3D:Y,compressedTexSubImage2D:ue,compressedTexSubImage3D:ce,scissor:de,viewport:xe,reset:me}}function mM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,v=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,S){return m?new OffscreenCanvas(R,S):fr("canvas")}function _(R,S,$){let ae=1,Q=Se(R);if((Q.width>$||Q.height>$)&&(ae=$/Math.max(Q.width,Q.height)),ae<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let de=Math.floor(ae*Q.width),xe=Math.floor(ae*Q.height);d===void 0&&(d=p(de,xe));let ne=S?p(de,xe):d;return ne.width=de,ne.height=xe,ne.getContext("2d").drawImage(R,0,0,de,xe),Ve("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+de+"x"+xe+")."),ne}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function b(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,S,$,ae,Q,de=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xe;ae&&(xe=e.get("EXT_texture_norm16"),xe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===i.RED&&($===i.FLOAT&&(ne=i.R32F),$===i.HALF_FLOAT&&(ne=i.R16F),$===i.UNSIGNED_BYTE&&(ne=i.R8),$===i.UNSIGNED_SHORT&&xe&&(ne=xe.R16_EXT),$===i.SHORT&&xe&&(ne=xe.R16_SNORM_EXT)),S===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ne=i.R8UI),$===i.UNSIGNED_SHORT&&(ne=i.R16UI),$===i.UNSIGNED_INT&&(ne=i.R32UI),$===i.BYTE&&(ne=i.R8I),$===i.SHORT&&(ne=i.R16I),$===i.INT&&(ne=i.R32I)),S===i.RG&&($===i.FLOAT&&(ne=i.RG32F),$===i.HALF_FLOAT&&(ne=i.RG16F),$===i.UNSIGNED_BYTE&&(ne=i.RG8),$===i.UNSIGNED_SHORT&&xe&&(ne=xe.RG16_EXT),$===i.SHORT&&xe&&(ne=xe.RG16_SNORM_EXT)),S===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ne=i.RG8UI),$===i.UNSIGNED_SHORT&&(ne=i.RG16UI),$===i.UNSIGNED_INT&&(ne=i.RG32UI),$===i.BYTE&&(ne=i.RG8I),$===i.SHORT&&(ne=i.RG16I),$===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),$===i.UNSIGNED_INT&&(ne=i.RGB32UI),$===i.BYTE&&(ne=i.RGB8I),$===i.SHORT&&(ne=i.RGB16I),$===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),$===i.UNSIGNED_INT&&(ne=i.RGBA32UI),$===i.BYTE&&(ne=i.RGBA8I),$===i.SHORT&&(ne=i.RGBA16I),$===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&($===i.UNSIGNED_SHORT&&xe&&(ne=xe.RGB16_EXT),$===i.SHORT&&xe&&(ne=xe.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),S===i.RGBA){let ie=de?fa:ot.getTransfer(Q);$===i.FLOAT&&(ne=i.RGBA32F),$===i.HALF_FLOAT&&(ne=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ne=ie===yt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&xe&&(ne=xe.RGBA16_EXT),$===i.SHORT&&xe&&(ne=xe.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(R,S){let $;return R?S===null||S===ti||S===qi?$=i.DEPTH24_STENCIL8:S===zn?$=i.DEPTH32F_STENCIL8:S===Dr&&($=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ti||S===qi?$=i.DEPTH_COMPONENT24:S===zn?$=i.DEPTH_COMPONENT32F:S===Dr&&($=i.DEPTH_COMPONENT16),$}function M(R,S){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function N(R){let S=new WeakRef(R);n.get(R).__ref=S,g.add(S),v.register(R,S,S)}function P(R){let S=n.get(R).__ref;S!==void 0&&(g.delete(S),v.unregister(S))}function D(R){U(R.target)}function I(R){w(R.target)}function U(R){R.removeEventListener("dispose",D),P(R),G(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function w(R){R.removeEventListener("dispose",I),P(R),X(R)}function C(){for(let R of g){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?w(S):U(S))}g.clear(),u.clear()}function G(R){let S=n.get(R);if(S.__webglInit===void 0)return;let $=R.source,ae=f.get($);if(ae){let Q=ae[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&z(R),Object.keys(ae).length===0&&f.delete($)}n.remove(R)}function z(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let $=R.source,ae=f.get($);delete ae[S.__cacheKey],a.memory.textures--}function X(R){let S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let $=R.depthTexture;if($&&$.renderTarget===R&&U($),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let de=0;de<S.__webglFramebuffer[Q].length;de++)i.deleteFramebuffer(S.__webglFramebuffer[Q][de]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ae=R.textures;for(let Q=0,de=ae.length;Q<de;Q++){let xe=n.get(ae[Q]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(ae[Q])}n.remove(R)}let O=0;function L(){O=0}function F(){return O}function q(R){O=R}function J(){let R=O;return R>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function H(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function ee(R,S){let $=n.get(R);if(R.isVideoTexture&&ue(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){let ae=R.image;if(ae===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ye($,R,S);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+S)}function le(R,S){let $=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){ye($,R,S);return}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+S)}function pe(R,S){let $=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){ye($,R,S);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+S)}function he(R,S){let $=n.get(R);if(R.version>0&&$.__version!==R.version){Ie($,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+S)}let ge={[xn]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[ur]:i.MIRRORED_REPEAT},Ne={[Lt]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[Lr]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Ue={[yp]:i.NEVER,[hu]:i.ALWAYS,[Mp]:i.LESS,[lu]:i.LEQUAL,[Sp]:i.EQUAL,[cu]:i.GEQUAL,[bp]:i.GREATER,[Tp]:i.NOTEQUAL};function We(R,S){if(S.type===zn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===Lr||S.magFilter===Gs||S.magFilter===Yn||S.minFilter===Jt||S.minFilter===Lr||S.minFilter===Gs||S.minFilter===Yn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ge[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ge[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ge[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ne[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ne[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Lt||S.minFilter!==Gs&&S.minFilter!==Yn||S.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function $e(R,S){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",D),N(S));let ae=S.source,Q=f.get(ae);Q===void 0&&(Q={},f.set(ae,Q));let de=H(S);if(de!==R.__cacheKey){Q[de]===void 0&&(Q[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),Q[de].usedTimes++;let xe=Q[R.__cacheKey];xe!==void 0&&(Q[R.__cacheKey].usedTimes--,xe.usedTimes===0&&z(S)),R.__cacheKey=de,R.__webglTexture=Q[de].texture}return $}function oe(R,S,$){return Math.floor(Math.floor(R/$)/S)}function ve(R,S,$,ae){let de=R.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,$,ae,S.data);else{de.sort((k,se)=>k.start-se.start);let xe=0;for(let k=1;k<de.length;k++){let se=de[xe],j=de[k],be=se.start+se.count,Me=oe(j.start,S.width,4),Te=oe(se.start,S.width,4);j.start<=be+1&&Me===Te&&oe(j.start+j.count-1,S.width,4)===Me?se.count=Math.max(se.count,j.start+j.count-se.start):(++xe,de[xe]=j)}de.length=xe+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let k=0,se=de.length;k<se;k++){let j=de[k],be=Math.floor(j.start/4),Me=Math.ceil(j.count/4),Te=be%S.width,Oe=Math.floor(be/S.width),tt=Me,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,Te,Oe,tt,_e,$,ae,S.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ye(R,S,$){let ae=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=i.TEXTURE_3D);let Q=$e(R,S),de=S.source;t.bindTexture(ae,R.__webglTexture,i.TEXTURE0+$);let xe=n.get(de);if(de.version!==xe.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let _e=ot.getPrimaries(ot.workingColorSpace),Ge=S.colorSpace===$i?null:ot.getPrimaries(S.colorSpace),Je=S.colorSpace===$i||_e===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=_(S.image,!1,s.maxTextureSize);ie=ce(S,ie);let me=r.convert(S.format,S.colorSpace),k=r.convert(S.type),se=T(S.internalFormat,me,k,S.normalized,S.colorSpace,S.isVideoTexture);We(ae,S);let j,be=S.mipmaps,Me=S.isVideoTexture!==!0,Te=xe.__version===void 0||Q===!0,Oe=de.dataReady,tt=M(S,ie);if(S.isDepthTexture)se=x(S.format===ni,S.type),Te&&(Me?t.texStorage2D(i.TEXTURE_2D,1,se,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,me,k,null));else if(S.isDataTexture)if(be.length>0){Me&&Te&&t.texStorage2D(i.TEXTURE_2D,tt,se,be[0].width,be[0].height);for(let _e=0,Ge=be.length;_e<Ge;_e++)j=be[_e],Me?Oe&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,j.width,j.height,me,k,j.data):t.texImage2D(i.TEXTURE_2D,_e,se,j.width,j.height,0,me,k,j.data);S.generateMipmaps=!1}else Me?(Te&&t.texStorage2D(i.TEXTURE_2D,tt,se,ie.width,ie.height),Oe&&ve(S,ie,me,k)):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,me,k,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Me&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,se,be[0].width,be[0].height,ie.depth);for(let _e=0,Ge=be.length;_e<Ge;_e++)if(j=be[_e],S.format!==In)if(me!==null)if(Me){if(Oe)if(S.layerUpdates.size>0){let Je=Mu(j.width,j.height,S.format,S.type);for(let Pe of S.layerUpdates){let Tt=j.data.subarray(Pe*Je/j.data.BYTES_PER_ELEMENT,(Pe+1)*Je/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Pe,j.width,j.height,1,me,Tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,j.width,j.height,ie.depth,me,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,se,j.width,j.height,ie.depth,0,j.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,j.width,j.height,ie.depth,me,k,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,se,j.width,j.height,ie.depth,0,me,k,j.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Me&&Te&&t.texStorage2D(i.TEXTURE_2D,tt,se,be[0].width,be[0].height);for(let _e=0,Ge=be.length;_e<Ge;_e++)j=be[_e],S.format!==In?me!==null?Me?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,j.width,j.height,me,j.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,se,j.width,j.height,0,j.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?Oe&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,j.width,j.height,me,k,j.data):t.texImage2D(i.TEXTURE_2D,_e,se,j.width,j.height,0,me,k,j.data)}else if(S.isDataArrayTexture)if(Me){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,se,ie.width,ie.height,ie.depth),Oe)if(S.layerUpdates.size>0){let _e=Mu(ie.width,ie.height,S.format,S.type);for(let Ge of S.layerUpdates){let Je=ie.data.subarray(Ge*_e/ie.data.BYTES_PER_ELEMENT,(Ge+1)*_e/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ge,ie.width,ie.height,1,me,k,Je)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,k,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,ie.width,ie.height,ie.depth,0,me,k,ie.data);else if(S.isData3DTexture)Me?(Te&&t.texStorage3D(i.TEXTURE_3D,tt,se,ie.width,ie.height,ie.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,k,ie.data)):t.texImage3D(i.TEXTURE_3D,0,se,ie.width,ie.height,ie.depth,0,me,k,ie.data);else if(S.isFramebufferTexture){if(Te)if(Me)t.texStorage2D(i.TEXTURE_2D,tt,se,ie.width,ie.height);else{let _e=ie.width,Ge=ie.height;for(let Je=0;Je<tt;Je++)t.texImage2D(i.TEXTURE_2D,Je,se,_e,Ge,0,me,k,null),_e>>=1,Ge>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ie.parentNode!==_e){_e.appendChild(ie),u.add(S),_e.onpaint=Ge=>{let Je=Ge.changedElements;for(let Pe of u)Je.includes(Pe.image)&&(Pe.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Je=i.RGBA,Pe=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Je,Pe,Tt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(Me&&Te){let _e=Se(be[0]);t.texStorage2D(i.TEXTURE_2D,tt,se,_e.width,_e.height)}for(let _e=0,Ge=be.length;_e<Ge;_e++)j=be[_e],Me?Oe&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,me,k,j):t.texImage2D(i.TEXTURE_2D,_e,se,me,k,j);S.generateMipmaps=!1}else if(Me){if(Te){let _e=Se(ie);t.texStorage2D(i.TEXTURE_2D,tt,se,_e.width,_e.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,k,ie)}else t.texImage2D(i.TEXTURE_2D,0,se,me,k,ie);b(S)&&S.mipmapsAutoUpdate===!0&&y(ae),xe.__version=de.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ie(R,S,$){if(S.image.length!==6)return;let ae=$e(R,S),Q=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+$);let de=n.get(Q);if(Q.version!==de.__version||ae===!0){t.activeTexture(i.TEXTURE0+$);let xe=ot.getPrimaries(ot.workingColorSpace),ne=S.colorSpace===$i?null:ot.getPrimaries(S.colorSpace),ie=S.colorSpace===$i||xe===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,k=S.image[0]&&S.image[0].isDataTexture,se=[];for(let Pe=0;Pe<6;Pe++)!me&&!k?se[Pe]=_(S.image[Pe],!0,s.maxCubemapSize):se[Pe]=k?S.image[Pe].image:S.image[Pe],se[Pe]=ce(S,se[Pe]);let j=se[0],be=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),Te=T(S.internalFormat,be,Me,S.normalized,S.colorSpace),Oe=S.isVideoTexture!==!0,tt=de.__version===void 0||ae===!0,_e=Q.dataReady,Ge=M(S,j);We(i.TEXTURE_CUBE_MAP,S);let Je;if(S.isDepthTexture){if(Te=x(S.format===ni,S.type),tt)if(Oe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Te,j.width,j.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,j.width,j.height,0,be,Me,null)}else if(me){Oe&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,Te,j.width,j.height);for(let Pe=0;Pe<6;Pe++){Je=se[Pe].mipmaps;for(let Tt=0;Tt<Je.length;Tt++){let nn=Je[Tt];S.format!==In?be!==null?Oe?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Tt,0,0,nn.width,nn.height,be,nn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Tt,Te,nn.width,nn.height,0,nn.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Tt,0,0,nn.width,nn.height,be,Me,nn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Tt,Te,nn.width,nn.height,0,be,Me,nn.data)}}}else{if(Je=S.mipmaps,Oe&&tt){Je.length>0&&Ge++;let Pe=Se(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,Te,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(k){Oe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,se[Pe].width,se[Pe].height,be,Me,se[Pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,se[Pe].width,se[Pe].height,0,be,Me,se[Pe].data);for(let Tt=0;Tt<Je.length;Tt++){let es=Je[Tt].image[Pe].image;Oe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Tt+1,0,0,es.width,es.height,be,Me,es.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Tt+1,Te,es.width,es.height,0,be,Me,es.data)}}else{Oe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,be,Me,se[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,be,Me,se[Pe]);for(let Tt=0;Tt<Je.length;Tt++){let nn=Je[Tt];Oe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Tt+1,0,0,be,Me,nn.image[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Tt+1,Te,be,Me,nn.image[Pe])}}}b(S)&&S.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),de.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function we(R,S,$,ae,Q,de){let xe=r.convert($.format,$.colorSpace),ne=r.convert($.type),ie=T($.internalFormat,xe,ne,$.normalized,$.colorSpace),me=n.get(S),k=n.get($);if(k.__renderTarget=S,!me.__hasExternalTextures){let se=Math.max(1,S.width>>de),j=Math.max(1,S.height>>de);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,de,ie,se,j,S.depth,0,xe,ne,null):t.texImage2D(Q,de,ie,se,j,0,xe,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Y(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Q,k.__webglTexture,0,re(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,Q,k.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(R,S,$){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let ae=S.depthTexture,Q=ae&&ae.isDepthTexture?ae.type:null,de=x(S.stencilBuffer,Q),xe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Y(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(S),de,S.width,S.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(S),de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,R)}else{let ae=S.textures;for(let Q=0;Q<ae.length;Q++){let de=ae[Q],xe=r.convert(de.format,de.colorSpace),ne=r.convert(de.type),ie=T(de.internalFormat,xe,ne,de.normalized,de.colorSpace);Y(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(S),ie,S.width,S.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(S),ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(R,S,$){let ae=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(S.depthTexture);Q.__renderTarget=S;let de=ae?S.depthTexture.image[0]:S.depthTexture.image;(!Q.__webglTexture||de.width!==S.width||de.height!==S.height)&&(de.width=S.width,de.height=S.height,S.depthTexture.needsUpdate=!0),ae?he(S.depthTexture,0):ee(S.depthTexture,0);let xe=Q.__webglTexture,ne=re(S),ie=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,me=S.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Di)Y(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ie,xe,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,me,ie,xe,0);else if(S.depthTexture.format===ni)Y(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ie,xe,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,me,ie,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(R){let S=n.get(R),$=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ae=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ae){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ae.removeEventListener("dispose",Q)};ae.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=ae}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let ae=0;ae<6;ae++)Fe(S.__webglFramebuffer[ae],R,ae);else R.texture.mipmaps.length>0?Fe(S.__webglFramebuffer[0],R,0):Fe(S.__webglFramebuffer,R,0);else if($){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]===void 0)S.__webglDepthbuffer[ae]=i.createRenderbuffer(),Ke(S.__webglDepthbuffer[ae],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,de)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ke(S.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,S,$){let ae=n.get(R);S!==void 0&&we(ae.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Ye(R)}function ut(R){let S=R.texture,$=n.get(R),ae=n.get(S);R.addEventListener("dispose",I),N(R);let Q=R.textures,de=R.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=S.version,a.memory.textures++),de){$.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps.length>0){$.__webglFramebuffer[ne]=[];for(let ie=0;ie<S.mipmaps.length;ie++)$.__webglFramebuffer[ne][ie]=i.createFramebuffer()}else $.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(S.mipmaps.length>0){$.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)$.__webglFramebuffer[ne]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ne=0,ie=Q.length;ne<ie;ne++){let me=n.get(Q[ne]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Y(R)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ne=0;ne<Q.length;ne++){let ie=Q[ne];$.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ne]);let me=r.convert(ie.format,ie.colorSpace),k=r.convert(ie.type),se=T(ie.internalFormat,me,k,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),j=re(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,se,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,$.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke($.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),We(i.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)we($.__webglFramebuffer[ne][ie],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else we($.__webglFramebuffer[ne],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);b(S)?y(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let ne=0,ie=Q.length;ne<ie;ne++){let me=Q[ne],k=n.get(me),se=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,k.__webglTexture),We(se,me),we($.__webglFramebuffer,R,me,i.COLOR_ATTACHMENT0+ne,se,0),b(me)&&y(se)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,ae.__webglTexture),We(ne,S),S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)we($.__webglFramebuffer[ie],R,S,i.COLOR_ATTACHMENT0,ne,ie);else we($.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,ne,0);b(S)?y(ne):S.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Ye(R)}function V(R){let S=R.textures;for(let $=0,ae=S.length;$<ae;$++){let Q=S[$];if(b(Q)&&Q.mipmapsAutoUpdate===!0){let de=A(R),xe=n.get(Q).__webglTexture;t.bindTexture(de,xe),y(de),t.unbindTexture()}}}let At=[];function nt(R){if(R.samples>0){if(Y(R)===!1){let S=R.textures,$=R.width,ae=R.height,Q=i.COLOR_BUFFER_BIT,de=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(R),ne=S.length>1;if(ne)for(let me=0;me<S.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let me=0;me<S.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);let k=n.get(S[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,$,ae,0,0,$,ae,Q,i.NEAREST),l===!0&&(At.length=0,At.push(i.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&At.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let me=0;me<S.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);let k=n.get(S[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,k,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function re(R){return Math.min(s.maxSamples,R.samples)}function Y(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ue(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ce(R,S){let $=R.colorSpace,ae=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==En&&$!==$i&&(ot.getTransfer($)===yt?(ae!==In||Q!==vn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",$)),S}function Se(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=L,this.getTextureUnits=F,this.setTextureUnits=q,this.setTexture2D=ee,this.setTexture2DArray=le,this.setTexture3D=pe,this.setTextureCube=he,this.rebindTextures=rt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Y,this.dispose=C}function gM(i,e){function t(n,s=$i){let r,a=ot.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tu)return i.BYTE;if(n===nu)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Ot)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===au)return i.RGB;if(n===In)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===$l)return i.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===Kl||n===jl||n===Zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Ql||n===ec||n===tc||n===nc||n===so||n===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===Ql)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return r.COMPRESSED_R11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===so)return r.COMPRESSED_RG11_EAC;if(n===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===vc||n===yc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_c)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===Sc||n===ro||n===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_M=`
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

}`,Uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wt({vertexShader:xM,fragmentShader:_M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends ci{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding!="undefined",m=new Uu,p={},_=t.getContextAttributes(),b=null,y=null,A=[],T=[],x=new fe,M=null,N=null,P=new Zt;P.viewport=new Mt;let D=new Zt;D.viewport=new Mt;let I=[P,D],U=new Nl,w=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=A[H];return ee===void 0&&(ee=new xr,A[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=A[H];return ee===void 0&&(ee=new xr,A[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=A[H];return ee===void 0&&(ee=new xr,A[H]=ee),ee.getHandSpace()};function G(H){let ee=T.indexOf(H.inputSource);if(ee===-1)return;let le=A[ee];le!==void 0&&(le.update(H.inputSource,H.frame,c||a),le.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let H=0;H<A.length;H++){let ee=T[H];ee!==null&&(T[H]=null,A[H].disconnect(ee))}w=null,C=null,m.reset();for(let H in p)delete p[H];if(e.setRenderTarget(b),f=null,d=null,u=null,s=null,y=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),N!==null){let H=N.camera;H.fov=N.fov,H.zoom=N.zoom,H.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,pe=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?ni:Di,pe=_.stencil?qi:ti);let ge={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Dt(d.textureWidth,d.textureHeight,{format:In,type:vn,depthTexture:new ei(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dt(f.framebufferWidth,f.framebufferHeight,{format:In,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(H){for(let ee=0;ee<H.removed.length;ee++){let le=H.removed[ee],pe=T.indexOf(le);pe>=0&&(T[pe]=null,A[pe].disconnect(le))}for(let ee=0;ee<H.added.length;ee++){let le=H.added[ee],pe=T.indexOf(le);if(pe===-1){for(let ge=0;ge<A.length;ge++)if(ge>=T.length){T.push(le),pe=ge;break}else if(T[ge]===null){T[ge]=le,pe=ge;break}if(pe===-1)break}let he=A[pe];he&&he.connect(le)}}function O(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let ee=H.near,le=H.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(le=m.depthFar)),U.near=D.near=P.near=ee,U.far=D.far=P.far=le,(w!==U.near||C!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),w=U.near,C=U.far),U.layers.mask=H.layers.mask|6,P.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let pe=H.parent,he=U.cameras;O(U,pe);for(let ge=0;ge<he.length;ge++)O(he[ge],pe);U.projectionMatrix.copy(P.projectionMatrix),U.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&H.isPerspectiveCamera&&(N={camera:H,fov:H.fov,zoom:H.zoom}),L(H,U,pe)};function L(H,ee,le){le===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ps*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(H){return p[H]};let F=null;function q(H,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let le=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let pe=!1;le.length!==U.cameras.length&&(U.cameras.length=0,pe=!0);for(let Ue=0;Ue<le.length;Ue++){let We=le[Ue],$e=null;if(f!==null)$e=f.getViewport(We);else{let ve=u.getViewSubImage(d,We);$e=ve.viewport,Ue===0&&(e.setRenderTargetTextures(y,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(y))}let oe=I[Ue];oe===void 0&&(oe=new Zt,oe.layers.enable(Ue),oe.viewport=new Mt,I[Ue]=oe),oe.matrix.fromArray(We.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(We.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set($e.x,$e.y,$e.width,$e.height),Ue===0&&(U.matrix.copy(oe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),pe===!0&&U.cameras.push(oe)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Ue=u.getDepthInformation(le[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,s.renderState)}if(he&&he.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ue=0;Ue<le.length;Ue++){let We=le[Ue].camera;if(We){let $e=p[We];$e||($e=new Ta,p[We]=$e);let oe=u.getCameraImage(We);$e.sourceTexture=oe}}}}for(let le=0;le<A.length;le++){let pe=T[le],he=A[le];pe!==null&&he!==void 0&&he.update(pe,ee,c||a)}F&&F(H,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let J=new im;J.setAnimationLoop(q),this.setAnimationLoop=function(H){F=H},this.dispose=function(){}}},vM=new Xe,fm=new Qe;fm.set(-1,0,0,0,1,0,0,0,1);function yM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_u(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),b=_.envMap,y=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(vM.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(fm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function MM(i,e,t,n){let s={},r={};function a(_,b){let y=b.program;n.uniformBlockBinding(_,y,s[_.id])}function o(_,b){let y=s[_.id];y===void 0&&(g(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",m));let A=b.program;n.updateUBOMapping(_,A);let T=e.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let b=i.createBuffer(),y=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],y=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,x=y.length;T<x;T++){let M=y[T];if(Array.isArray(M))for(let N=0,P=M.length;N<P;N++)h(M[N],T,N,A);else h(M,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,b,y,A){if(d(_,b,y,A)===!0){let T=_.__offset,x=_.value;if(Array.isArray(x)){let M=0;for(let N=0;N<x.length;N++){let P=x[N],D=v(P,!0);u(P,_.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,_.__data)}}function u(_,b,y){typeof _=="number"||typeof _=="boolean"?b[y]=_:_.isMatrix3?(b[y]=_.elements[0],b[y+1]=_.elements[1],b[y+2]=_.elements[2],b[y+3]=0,b[y+4]=_.elements[3],b[y+5]=_.elements[4],b[y+6]=_.elements[5],b[y+7]=0,b[y+8]=_.elements[6],b[y+9]=_.elements[7],b[y+10]=_.elements[8],b[y+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-y),y):_.toArray(b,y)}function d(_,b,y,A){let T=_.value,x=b+"_"+y;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);let M=A[x],N=!1;for(let P=0;P<T.length;P++)f(T[P],M,P)===!0&&(N=!0);return N}return f(T,A,x)}function f(_,b,y){if(b[y]===void 0)return typeof _=="number"||typeof _=="boolean"?b[y]=_:ArrayBuffer.isView(_)?b[y]=_.slice():b[y]=_.clone(),!0;{let A=b[y];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return b[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function g(_){let b=_.uniforms,y=0,A=16;for(let x=0,M=b.length;x<M;x++){let N=Array.isArray(b[x])?b[x]:[b[x]];for(let P=0,D=N.length;P<D;P++){let I=N[P],U=Array.isArray(I.value)?I.value:[I.value],w=Array.isArray(b[x])||Array.isArray(I.value),C=y;for(let z=0,X=U.length;z<X;z++){let O=U[z],L=v(O,w),F=y%A,q=F%L.boundary,J=F+q;y+=q,J!==0&&A-J<L.storage&&(y+=A-J),z===0&&(C=y),y+=L.storage}let G=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new G((y-C)/Float32Array.BYTES_PER_ELEMENT),I.__offset=C}}let T=y%A;return T>0&&(y+=A-T),_.__size=y,_.__cache={},this}function v(_,b){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){let b=_.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:p}}var SM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function bM(){return _i===null&&(_i=new qn(SM,16,16,ms,Ot),_i.name="DFG_LUT",_i.minFilter=Jt,_i.magFilter=Jt,_i.wrapS=Wn,_i.wrapT=Wn,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Ac=class{constructor(e={}){let{canvas:t=Ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([$l,ql,Xl]),p=new Set([vn,ti,Dr,qi,Gl,Vl]),_=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},A=null,T=null,x=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,I=null,U=null,w=null,C=null;this._outputColorSpace=Et;let G=0,z=0,X=null,O=-1,L=null,F=new Mt,q=new Mt,J=null,H=new Ce(0),ee=0,le=t.width,pe=t.height,he=1,ge=null,Ne=null,Ue=new Mt(0,0,le,pe),We=new Mt(0,0,le,pe),$e=!1,oe=new hs,ve=new gl,ye=!1,Ie=!1,we=new Xe,Ke=new B,Fe=new Mt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function ut(){return X===null?he:1}let V=n;function At(E,W){return t.getContext(E,W)}let nt,re,Y,ue,ce,Se,R,S,$,ae,Q,de,xe,ne,ie,me,k,se,j,be,Me,Te,Oe;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),V===null){let W="webgl2";if(V=At(W,E),V===null)throw At(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(E){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),je("WebGLRenderer: "+E.message),E}function tt(){nt=new Nv(V),nt.init(),Me=new gM(V,nt),re=new bv(V,nt,e,Me),Y=new pM(V,nt),re.reversedDepthBuffer&&d&&Y.buffers.depth.setReversed(!0),U=V.createFramebuffer(),w=V.createFramebuffer(),C=V.createFramebuffer(),ue=new Fv(V),ce=new eM,Se=new mM(V,nt,Y,ce,re,Me,ue),R=new Dv(P),S=new zg(V),Te=new Mv(V,S),$=new Uv(V,S,ue,Te),ae=new zv(V,$,S,Te,ue),se=new Bv(V,re,Se),ie=new Tv(ce),Q=new Qy(P,R,nt,re,Te,ie),de=new yM(P,ce),xe=new nM,ne=new lM(nt),k=new yv(P,R,Y,ae,g,l),me=new fM(P,ae,re),Oe=new MM(V,ue,re,Y),j=new Sv(V,nt,ue),be=new Ov(V,nt,ue),ue.programs=Q.programs,P.capabilities=re,P.extensions=nt,P.properties=ce,P.renderLists=xe,P.shadowMap=me,P.state=Y,P.info=ue}v!==vn&&(N=new Hv(v,t.width,t.height,o,s,r));let _e=new Ou(P,V);this.xr=_e,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(E){E!==void 0&&(he=E,this.setSize(le,pe,!1))},this.getSize=function(E){return E.set(le,pe)},this.setSize=function(E,W,te=!0){if(_e.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}le=E,pe=W,t.width=Math.floor(E*he),t.height=Math.floor(W*he),te===!0&&(t.style.width=E+"px",t.style.height=W+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(le*he,pe*he).floor()},this.setDrawingBufferSize=function(E,W,te){le=E,pe=W,he=te,t.width=Math.floor(E*te),t.height=Math.floor(W*te),this.setViewport(0,0,E,W)},this.setEffects=function(E){if(v===vn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let W=0;W<E.length;W++)if(E[W].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(F)},this.getViewport=function(E){return E.copy(Ue)},this.setViewport=function(E,W,te,K){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,W,te,K),Y.viewport(F.copy(Ue).multiplyScalar(ut()).round())},this.getScissor=function(E){return E.copy(We)},this.setScissor=function(E,W,te,K){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,W,te,K),Y.scissor(q.copy(We).multiplyScalar(ut()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(E){Y.setScissorTest($e=E)},this.setOpaqueSort=function(E){ge=E},this.setTransparentSort=function(E){Ne=E},this.getClearColor=function(E){return E.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(E=!0,W=!0,te=!0){let K=0;if(E){let Z=!1;if(X!==null){let Re=X.texture.format;Z=m.has(Re)}if(Z){let Re=X.texture.type,Be=p.has(Re),Ae=k.getClearColor(),De=k.getClearAlpha(),He=Ae.r,it=Ae.g,pt=Ae.b;Be?(_[0]=He,_[1]=it,_[2]=pt,_[3]=De,V.clearBufferuiv(V.COLOR,0,_)):(b[0]=He,b[1]=it,b[2]=pt,b[3]=De,V.clearBufferiv(V.COLOR,0,b))}else K|=V.COLOR_BUFFER_BIT}W&&(K|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),k.dispose(),xe.dispose(),ne.dispose(),Se.dispose(),ce.dispose(),R.dispose(),ae.dispose(),$.dispose(),Te.dispose(),Oe.dispose(),Q.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Xd),_e.removeEventListener("sessionend",qd),vs.stop()};function Ge(E){E.preventDefault(),pa("WebGLRenderer: Context Lost."),D=!0}function Je(){pa("WebGLRenderer: Context Restored."),D=!1;let E=ue.autoReset,W=me.enabled,te=me.autoUpdate,K=me.needsUpdate,Z=me.type;tt(),ue.autoReset=E,me.enabled=W,me.autoUpdate=te,me.needsUpdate=K,me.type=Z}function Pe(E){je("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Tt(E){let W=E.target;W.removeEventListener("dispose",Tt),nn(W)}function nn(E){es(E),ce.remove(E)}function es(E){let W=ce.get(E).programs;W!==void 0&&(W.forEach(function(te){Q.releaseProgram(te)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,te,K,Z,Re){W===null&&(W=Ye);let Be=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ae=a0(E,W,te,K,Z);Y.setMaterial(K,Be);let De=te.index,He=1;if(K.wireframe===!0){if(De=$.getWireframeAttribute(te),De===void 0)return;He=2}let it=te.drawRange,pt=te.attributes.position,ze=it.start*He,mt=(it.start+it.count)*He;Re!==null&&(ze=Math.max(ze,Re.start*He),mt=Math.min(mt,(Re.start+Re.count)*He)),De!==null?(ze=Math.max(ze,0),mt=Math.min(mt,De.count)):pt!=null&&(ze=Math.max(ze,0),mt=Math.min(mt,pt.count));let qt=mt-ze;if(qt<0||qt===1/0)return;Te.setup(Z,K,Ae,te,De);let It,Rt=j;if(De!==null&&(It=S.get(De),Rt=be,Rt.setIndex(It)),Z.isMesh)K.wireframe===!0?(Y.setLineWidth(K.wireframeLinewidth*ut()),Rt.setMode(V.LINES)):Rt.setMode(V.TRIANGLES);else if(Z.isLine){let fn=K.linewidth;fn===void 0&&(fn=1),Y.setLineWidth(fn*ut()),Z.isLineSegments?Rt.setMode(V.LINES):Z.isLineLoop?Rt.setMode(V.LINE_LOOP):Rt.setMode(V.LINE_STRIP)}else Z.isPoints?Rt.setMode(V.POINTS):Z.isSprite&&Rt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let fn=Z._multiDrawStarts,ke=Z._multiDrawCounts,bn=Z._multiDrawCount,St=De?S.get(De).bytesPerElement:1,ys=ce.get(K).currentProgram.getUniforms();for(let pn=0;pn<bn;pn++)ys.setValue(V,"_gl_DrawID",pn),Rt.render(fn[pn]/St,ke[pn])}else if(Z.isInstancedMesh)Rt.renderInstances(ze,qt,Z.count);else if(te.isInstancedBufferGeometry){let fn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ke=Math.min(te.instanceCount,fn);Rt.renderInstances(ze,qt,ke)}else Rt.render(ze,qt)};function Wd(E,W,te,K){I!==null&&E.isNodeMaterial&&I.setObject(K,E),ye===!0&&ie.setState(E,te,!1),E.transparent===!0&&E.side===Ut&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,Jr(E,W,K),E.side=mi,E.needsUpdate=!0,Jr(E,W,K),E.side=Ut):Jr(E,W,K)}this.compile=function(E,W,te=null){te===null&&(te=E),I!==null&&I.renderStart(E,W,te),T=ne.get(te),T.init(W),M.push(T),te.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),E!==te&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),Ie=this.localClippingEnabled,ye=ie.init(this.clippingPlanes,Ie),ye===!0&&ie.setGlobalState(this.clippingPlanes,W),I!==null&&me.render(T.state.shadowsArray,te,W);let K=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Re=Z.material;if(Re)if(Array.isArray(Re))for(let Be=0;Be<Re.length;Be++){let Ae=Re[Be];Wd(Ae,te,W,Z),K.add(Ae)}else Wd(Re,te,W,Z),K.add(Re)}),T=M.pop(),I!==null&&I.renderEnd(),K},this.compileAsync=function(E,W,te=null){let K=this.compile(E,W,te);return new Promise(Z=>{function Re(){if(K.forEach(function(Be){let De=ce.get(Be).currentProgram;(De===void 0||De.isReady())&&K.delete(Be)}),K.size===0){Z(E);return}setTimeout(Re,10)}nt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let ih=null;function s0(E){ih&&ih(E)}function Xd(){vs.stop()}function qd(){vs.start()}let vs=new im;vs.setAnimationLoop(s0),typeof self!="undefined"&&vs.setContext(self),this.setAnimationLoop=function(E){ih=E,_e.setAnimationLoop(E),E===null?vs.stop():vs.start()},_e.addEventListener("sessionstart",Xd),_e.addEventListener("sessionend",qd),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(E,W);let te=_e.enabled===!0&&_e.isPresenting===!0,K=N!==null&&(X===null||te)&&N.begin(P,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,W,X),T=ne.get(E,M.length),T.init(W),T.state.textureUnits=Se.getTextureUnits(),M.push(T),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ve.setFromArrayCamera(W):oe.setFromProjectionMatrix(we,Xn,W.reversedDepth),Ie=this.localClippingEnabled,ye=ie.init(this.clippingPlanes,Ie),A=xe.get(E,x.length),A.init(),x.push(A),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let Be=P.xr.getDepthSensingMesh();Be!==null&&sh(Be,W,-1/0,P.sortObjects)}sh(E,W,0,P.sortObjects),A.finish(),I!==null&&I.updateLights(T.state.lightsArray),P.sortObjects===!0&&A.sort(ge,Ne),rt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,rt&&k.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),ye===!0&&ie.beginShadows();let Z=T.state.shadowsArray;if(me.render(Z,E,W),ye===!0&&ie.endShadows(),(K&&N.hasRenderPass())===!1){let Be=A.opaque,Ae=A.transmissive;if(T.setupLights(),W.isArrayCamera){let De=W.cameras;if(Ae.length>0)for(let He=0,it=De.length;He<it;He++){let pt=De[He];Yd(Be,Ae,E,pt)}rt&&k.render(E);for(let He=0,it=De.length;He<it;He++){let pt=De[He];$d(A,E,pt,pt.viewport)}}else Ae.length>0&&Yd(Be,Ae,E,W),rt&&k.render(E),$d(A,E,W)}X!==null&&z===0&&(Se.updateMultisampleRenderTarget(X),Se.updateRenderTargetMipmap(X)),K&&N.end(P),E.isScene===!0&&E.onAfterRender(P,E,W),Te.resetDefaultState(),O=-1,L=null,M.pop(),M.length>0?(T=M[M.length-1],Se.setTextureUnits(T.state.textureUnits),ye===!0&&ie.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,I!==null&&I.renderEnd()};function sh(E,W,te,K){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Be=W.isArrayCamera?ve:oe;if(!E.frustumCulled||E.intersectsFrustum(Be)){K&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);let Ae=ae.update(E),De=E.material;De.visible&&A.push(E,Ae,De,te,Fe.z,null,W)}}else if(E.isMesh||E.isLine||E.isPoints){let Be=W.isArrayCamera?ve:oe;if(!E.frustumCulled||E.intersectsFrustum(Be)){let Ae=ae.update(E),De=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Fe.copy(Ae.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(De)){let He=Ae.groups;for(let it=0,pt=He.length;it<pt;it++){let ze=He[it],mt=De[ze.materialIndex];mt&&mt.visible&&A.push(E,Ae,mt,te,Fe.z,ze,W)}}else De.visible&&A.push(E,Ae,De,te,Fe.z,null,W)}}}let Re=E.children;for(let Be=0,Ae=Re.length;Be<Ae;Be++)sh(Re[Be],W,te,K)}function $d(E,W,te,K){let{opaque:Z,transmissive:Re,transparent:Be}=E;T.setupLightsView(te),ye===!0&&ie.setGlobalState(P.clippingPlanes,te),K&&Y.viewport(F.copy(K)),Z.length>0&&Co(Z,W,te),Re.length>0&&Co(Re,W,te),Be.length>0&&Co(Be,W,te),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Yd(E,W,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let ze=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new Dt(1,1,{generateMipmaps:!0,type:ze?Ot:vn,minFilter:Yn,samples:Math.max(4,re.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Re=T.state.transmissionRenderTarget[K.id],Be=K.viewport||F;Re.setSize(Be.z*P.transmissionResolutionScale,Be.w*P.transmissionResolutionScale);let Ae=P.getRenderTarget(),De=P.getActiveCubeFace(),He=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(H),ee=P.getClearAlpha(),ee<1&&P.setClearColor(16777215,.5),P.clear(),rt&&k.render(te);let it=P.toneMapping;P.toneMapping=gi;let pt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),ye===!0&&ie.setGlobalState(P.clippingPlanes,K),Co(E,te,K),Se.updateMultisampleRenderTarget(Re),Se.updateRenderTargetMipmap(Re),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let mt=0,qt=W.length;mt<qt;mt++){let It=W[mt],{object:Rt,geometry:fn,material:ke,group:bn}=It;if(ke.side===Ut&&Rt.layers.test(K.layers)){let St=ke.side;ke.side=hn,ke.needsUpdate=!0,Kd(Rt,te,K,fn,ke,bn),ke.side=St,ke.needsUpdate=!0,ze=!0}}ze===!0&&(Se.updateMultisampleRenderTarget(Re),Se.updateRenderTargetMipmap(Re))}P.setRenderTarget(Ae,De,He),P.setClearColor(H,ee),pt!==void 0&&(K.viewport=pt),P.toneMapping=it}function Co(E,W,te){let K=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Re=E.length;Z<Re;Z++){let Be=E[Z],{object:Ae,geometry:De,group:He}=Be,it=Be.material;it.allowOverride===!0&&K!==null&&(it=K),Ae.layers.test(te.layers)&&Kd(Ae,W,te,De,it,He)}}function Kd(E,W,te,K,Z,Re){I!==null&&Z.isNodeMaterial&&I.setObject(E,Z),E.onBeforeRender(P,W,te,K,Z,Re),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(P,W,te,K,E,Re),Z.transparent===!0&&Z.side===Ut&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,P.renderBufferDirect(te,W,K,Z,E,Re),Z.side=mi,Z.needsUpdate=!0,P.renderBufferDirect(te,W,K,Z,E,Re),Z.side=Ut):P.renderBufferDirect(te,W,K,Z,E,Re),E.onAfterRender(P,W,te,K,Z,Re)}function jd(E){let W=0;for(let te of E)te.texture!==null&&W++;return W}function Jr(E,W,te){W.isScene!==!0&&(W=Ye);let K=ce.get(E),Z=T.state.lights,Re=T.state.shadowsArray,Be=Z.state.version,Ae=Q.getParameters(E,Z.state,Re,W,te,T.state.lightProbeGridArray),De=Q.getProgramCacheKey(Ae),He=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?W.environment:null,K.fog=W.fog;let it=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=R.get(E.envMap||K.environment,it),K.envMapRotation=K.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",Tt),He=new Map,K.programs=He,K.programVariants=new Map);let pt=He.get(De);if(pt!==void 0){if(K.currentProgram===pt&&K.lightsStateVersion===Be)return Jd(E,Ae),pt}else Ae.uniforms=Q.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,te,Ae),E.onBeforeCompile(Ae,P),pt=Q.acquireProgram(Ae,De),He.set(De,pt),K.uniforms=Ae.uniforms;let ze=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=ie.uniform),Jd(E,Ae),K.needsLights=l0(E),K.lightsStateVersion=Be,K.needsLights&&(ze.ambientLightColor.value=Z.state.ambient,ze.lightProbe.value=Z.state.probe,ze.sunLights.value=Z.state.sun,ze.sunLightShadows.value=Z.state.sunShadow,ze.directionalLights.value=Z.state.directional,ze.directionalLightShadows.value=Z.state.directionalShadow,ze.spotLights.value=Z.state.spot,ze.spotLightShadows.value=Z.state.spotShadow,ze.rectAreaLights.value=Z.state.rectArea,ze.ltc_1.value=Z.state.rectAreaLTC1,ze.ltc_2.value=Z.state.rectAreaLTC2,ze.pointLights.value=Z.state.point,ze.pointLightShadows.value=Z.state.pointShadow,ze.hemisphereLights.value=Z.state.hemi,ze.sunShadowMatrix.value=Z.state.sunShadowMatrix,ze.sunShadowCascade.value=Z.state.sunShadowCascade,ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ze.spotLightMatrix.value=Z.state.spotLightMatrix,ze.spotLightMap.value=Z.state.spotLightMap,ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.numLightProbeGrids=jd(T.state.lightProbeGridArray),K.currentProgram=pt,K.uniformsList=null,pt}function r0(E,W,te,K,Z){let Re=ce.get(E),Be=Re.currentProgram.id+","+K+","+Z,Ae=Re.programVariants.get(Be);return Ae===void 0?(Ae=Jr(E,W,te),Re.programVariants.set(Be,Ae)):(Re.currentProgram=Ae,Re.uniformsList=null,Re.outputColorSpace=K,Re.toneMapping=Z),Ae}function Zd(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=Or.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function Jd(E,W){let te=ce.get(E);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function a0(E,W,te,K,Z){W.isScene!==!0&&(W=Ye),Se.resetTextureUnits();let Re=W.fog,Be=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?W.environment:null,Ae=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ot.workingColorSpace,De=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,He=R.get(K.envMap||Be,De),it=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pt=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,qt=!!te.morphAttributes.color,It=gi;K.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(It=P.toneMapping);let Rt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,fn=Rt!==void 0?Rt.length:0,ke=ce.get(K),bn=T.state.lights;if(ye===!0&&(Ie===!0||E!==L)){let Ft=E===L&&K.id===O;ie.setState(K,E,Ft)}let St=!1,ys=!1;K.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==bn.state.version||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isBatchedMesh&&ke.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&ke.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ke.instancingMorph===!1&&Z.morphTexture!==null||ke.envMap!==He||K.fog===!0&&ke.fog!==Re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ie.numPlanes||ke.numIntersection!==ie.numIntersection)||ke.vertexAlphas!==it||ke.vertexTangents!==pt||ke.morphTargets!==ze||ke.morphNormals!==mt||ke.morphColors!==qt||ke.morphTargetsCount!==fn||ke.numLightProbeGrids!==jd(T.state.lightProbeGridArray)?St=!0:(ke.outputColorSpace!==Ae||ke.toneMapping!==It)&&(ys=!0):(St=!0,ke.__version=K.version);let pn=ke.currentProgram;(St===!0||ys===!0)&&(pn=ys===!0?r0(K,W,Z,Ae,It):Jr(K,W,Z),I&&K.isNodeMaterial&&I.onUpdateProgram(K,pn,ke));let Po=!1,ts=!1,Ms=!1,vt=pn.getUniforms(),ln=ke.uniforms;if(Y.useProgram(pn.program)&&(Po=!0,ts=!0,Ms=!0),K.id!==O&&(O=K.id,ts=!0),Po||L!==E){Y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),vt.setValue(V,"projectionMatrix",E.projectionMatrix),vt.setValue(V,"viewMatrix",E.matrixWorldInverse);let sn=vt.map.cameraPosition;sn!==void 0&&sn.setValue(V,Ke.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&vt.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),L!==E&&(L=E,ts=!0,Ms=!0)}if(ke.needsLights&&(bn.state.sunShadowMap.length>0&&vt.setValue(V,"sunShadowMap",bn.state.sunShadowMap,Se),bn.state.directionalShadowMap.length>0&&vt.setValue(V,"directionalShadowMap",bn.state.directionalShadowMap,Se),bn.state.spotShadowMap.length>0&&vt.setValue(V,"spotShadowMap",bn.state.spotShadowMap,Se),bn.state.pointShadowMap.length>0&&vt.setValue(V,"pointShadowMap",bn.state.pointShadowMap,Se)),Z.isSkinnedMesh){vt.setOptional(V,Z,"bindMatrix"),vt.setOptional(V,Z,"bindMatrixInverse");let Ft=Z.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),vt.setValue(V,"boneTexture",Ft.boneTexture,Se))}Z.isBatchedMesh&&(vt.setOptional(V,Z,"batchingTexture"),vt.setValue(V,"batchingTexture",Z._matricesTexture,Se),vt.setOptional(V,Z,"batchingIdTexture"),vt.setValue(V,"batchingIdTexture",Z._indirectTexture,Se),vt.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&vt.setValue(V,"batchingColorTexture",Z._colorsTexture,Se));let jn=te.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&se.update(Z,te,pn),(ts||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,vt.setValue(V,"receiveShadow",Z.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&W.environment!==null&&(ln.envMapIntensity.value=W.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=bM()),ts){if(vt.setValue(V,"toneMappingExposure",P.toneMappingExposure),ke.needsLights&&o0(ln,Ms),Re&&K.fog===!0&&de.refreshFogUniforms(ln,Re),de.refreshMaterialUniforms(ln,K,he,pe,T.state.transmissionRenderTarget[E.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Ft=y,sn=0;for(let Ei of T.state.lightProbeGridArray)Ei.texture!==null&&(Ft.textures[sn]=Ei.texture,Ft.min[sn]=Ei.boundingBox.min,Ft.max[sn]=Ei.boundingBox.max,Ft.resolution[sn]=Ei.resolution,sn++);for(let Ei in Ft)Ft[Ei].length=sn;ln.probesSH.value=Ft.textures,ln.probesMin.value=Ft.min,ln.probesMax.value=Ft.max,ln.probesResolution.value=Ft.resolution}Or.upload(V,Zd(ke),ln,Se)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Or.upload(V,Zd(ke),ln,Se),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(V,"center",Z.center),vt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),vt.setValue(V,"normalMatrix",Z.normalMatrix),vt.setValue(V,"modelMatrix",Z.matrixWorld),K.uniformsGroups!==void 0){let Ft=K.uniformsGroups;for(let sn=0,Ei=Ft.length;sn<Ei;sn++){let ef=Ft[sn];Oe.update(ef,pn),Oe.bind(ef,pn)}}return pn}function o0(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.sunLights.needsUpdate=W,E.sunLightShadows.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function l0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,W,te){let K=ce.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ce.get(E.texture).__webglTexture=W,ce.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,W){let te=ce.get(E);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,te=0){X=E,G=W,z=te;let K=null,Z=!1,Re=!1;if(E){let Ae=ce.get(E);if(Ae.__useDefaultFramebuffer!==void 0){Y.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),F.copy(E.viewport),q.copy(E.scissor),J=E.scissorTest,Y.viewport(F),Y.scissor(q),Y.setScissorTest(J),O=-1;return}else if(Ae.__webglFramebuffer===void 0)Se.setupRenderTarget(E);else if(Ae.__hasExternalTextures)Se.rebindTextures(E,ce.get(E.texture).__webglTexture,ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let it=E.depthTexture;if(Ae.__boundDepthTexture!==it){if(it!==null&&ce.has(it)&&(E.width!==it.image.width||E.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);let He=ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[W])?K=He[W][te]:K=He[W],Z=!0):E.samples>0&&Se.useMultisampledRTT(E)===!1?K=ce.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?K=He[te]:K=He,F.copy(E.viewport),q.copy(E.scissor),J=E.scissorTest}else F.copy(Ue).multiplyScalar(he).floor(),q.copy(We).multiplyScalar(he).floor(),J=$e;if(te!==0&&(K=U),Y.bindFramebuffer(V.FRAMEBUFFER,K)&&Y.drawBuffers(E,K),Y.viewport(F),Y.scissor(q),Y.setScissorTest(J),Z){let Ae=ce.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,te)}else if(Re){let Ae=W;for(let De=0;De<E.textures.length;De++){let He=ce.get(E.textures[De]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+De,He.__webglTexture,te,Ae)}}else if(E!==null&&te!==0){let Ae=ce.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,te)}O=-1};function Qd(E){let W=ce.get(E);return(W.__readFormat!==E.format||W.__readType!==E.type)&&(W.__readFormat=E.format,W.__readType=E.type,W.__formatReadable=re.textureFormatReadable(E.format),W.__typeReadable=re.textureTypeReadable(E.type)),W}this.readRenderTargetPixels=function(E,W,te,K,Z,Re,Be,Ae=0){if(!(E&&E.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Be!==void 0&&(De=De[Be],Array.isArray(De)&&(De=De[0])),De){Y.bindFramebuffer(V.FRAMEBUFFER,De);try{let He=E.textures[Ae],it=He.format,pt=He.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);let ze=Qd(He);if(ze.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-K&&te>=0&&te<=E.height-Z&&V.readPixels(W,te,K,Z,Me.convert(it),Me.convert(pt),Re)}finally{let He=X!==null?ce.get(X).__webglFramebuffer:null;Y.bindFramebuffer(V.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(E,W,te,K,Z,Re,Be,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Be!==void 0&&(De=De[Be],Array.isArray(De)&&(De=De[0])),De)if(W>=0&&W<=E.width-K&&te>=0&&te<=E.height-Z){Y.bindFramebuffer(V.FRAMEBUFFER,De);let He=E.textures[Ae],it=He.format,pt=He.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);let ze=Qd(He);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.bufferData(V.PIXEL_PACK_BUFFER,Re.byteLength,V.STREAM_READ),V.readPixels(W,te,K,Z,Me.convert(it),Me.convert(pt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let qt=X!==null?ce.get(X).__webglFramebuffer:null;Y.bindFramebuffer(V.FRAMEBUFFER,qt);let It=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ap(V,It,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Re),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(mt),V.deleteSync(It),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,W=null,te=0){let K=Math.pow(2,-te),Z=Math.floor(E.image.width*K),Re=Math.floor(E.image.height*K),Be=W!==null?W.x:0,Ae=W!==null?W.y:0;Se.setTexture2D(E,0),V.copyTexSubImage2D(V.TEXTURE_2D,te,0,0,Be,Ae,Z,Re),Y.unbindTexture()},this.copyTextureToTexture=function(E,W,te=null,K=null,Z=0,Re=0){let Be,Ae,De,He,it,pt,ze,mt,qt,It=E.isCompressedTexture?E.mipmaps[Re]:E.image;if(te!==null)Be=te.max.x-te.min.x,Ae=te.max.y-te.min.y,De=te.isBox3?te.max.z-te.min.z:1,He=te.min.x,it=te.min.y,pt=te.isBox3?te.min.z:0;else{let vt=Math.pow(2,-Z);Be=Math.floor(It.width*vt),Ae=Math.floor(It.height*vt),E.isDataArrayTexture?De=It.depth:E.isData3DTexture?De=Math.floor(It.depth*vt):De=1,He=0,it=0,pt=0}K!==null?(ze=K.x,mt=K.y,qt=K.z):(ze=0,mt=0,qt=0);let Rt=Me.convert(W.format),fn=Me.convert(W.type),ke;W.isData3DTexture?(Se.setTexture3D(W,0),ke=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Se.setTexture2DArray(W,0),ke=V.TEXTURE_2D_ARRAY):(Se.setTexture2D(W,0),ke=V.TEXTURE_2D),Y.activeTexture(V.TEXTURE0),Y.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),Y.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Y.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);let bn=Y.getParameter(V.UNPACK_ROW_LENGTH),St=Y.getParameter(V.UNPACK_IMAGE_HEIGHT),ys=Y.getParameter(V.UNPACK_SKIP_PIXELS),pn=Y.getParameter(V.UNPACK_SKIP_ROWS),Po=Y.getParameter(V.UNPACK_SKIP_IMAGES);Y.pixelStorei(V.UNPACK_ROW_LENGTH,It.width),Y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,It.height),Y.pixelStorei(V.UNPACK_SKIP_PIXELS,He),Y.pixelStorei(V.UNPACK_SKIP_ROWS,it),Y.pixelStorei(V.UNPACK_SKIP_IMAGES,pt);let ts=E.isDataArrayTexture||E.isData3DTexture,Ms=W.isDataArrayTexture||W.isData3DTexture;if(E.isDepthTexture){let vt=ce.get(E),ln=ce.get(W),jn=ce.get(vt.__renderTarget),Ft=ce.get(ln.__renderTarget);Y.bindFramebuffer(V.READ_FRAMEBUFFER,jn.__webglFramebuffer),Y.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let sn=0;sn<De;sn++)ts&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ce.get(E).__webglTexture,Z,pt+sn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ce.get(W).__webglTexture,Re,qt+sn)),V.blitFramebuffer(He,it,He+Be,it+Ae,ze,mt,ze+Be,mt+Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);Y.bindFramebuffer(V.READ_FRAMEBUFFER,null),Y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||ce.has(E)){let vt=ce.get(E),ln=ce.get(W);Y.bindFramebuffer(V.READ_FRAMEBUFFER,w),Y.bindFramebuffer(V.DRAW_FRAMEBUFFER,C);for(let jn=0;jn<De;jn++)ts?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vt.__webglTexture,Z,pt+jn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vt.__webglTexture,Z),Ms?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ln.__webglTexture,Re,qt+jn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ln.__webglTexture,Re),Z!==0?V.blitFramebuffer(He,it,He+Be,it+Ae,ze,mt,ze+Be,mt+Ae,V.COLOR_BUFFER_BIT,V.NEAREST):Ms?V.copyTexSubImage3D(ke,Re,ze,mt,qt+jn,He,it,Be,Ae):V.copyTexSubImage2D(ke,Re,ze,mt,He,it,Be,Ae);Y.bindFramebuffer(V.READ_FRAMEBUFFER,null),Y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ms?E.isDataTexture||E.isData3DTexture?V.texSubImage3D(ke,Re,ze,mt,qt,Be,Ae,De,Rt,fn,It.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,Re,ze,mt,qt,Be,Ae,De,Rt,It.data):V.texSubImage3D(ke,Re,ze,mt,qt,Be,Ae,De,Rt,fn,It):E.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Re,ze,mt,Be,Ae,Rt,fn,It.data):E.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Re,ze,mt,It.width,It.height,Rt,It.data):V.texSubImage2D(V.TEXTURE_2D,Re,ze,mt,Be,Ae,Rt,fn,It);Y.pixelStorei(V.UNPACK_ROW_LENGTH,bn),Y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St),Y.pixelStorei(V.UNPACK_SKIP_PIXELS,ys),Y.pixelStorei(V.UNPACK_SKIP_ROWS,pn),Y.pixelStorei(V.UNPACK_SKIP_IMAGES,Po),Re===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&V.generateMipmap(ke),Y.unbindTexture()},this.initRenderTarget=function(E){ce.get(E).__webglFramebuffer===void 0&&Se.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Se.setTextureCube(E,0):E.isData3DTexture?Se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Se.setTexture2DArray(E,0):Se.setTexture2D(E,0),Y.unbindTexture()},this.resetState=function(){G=0,z=0,X=null,Y.reset(),Te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};function Fu(i,e){if(e===ou)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Nr||e===ao){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Nr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function pm(i){let e=new Map,t=new Map,n=i.clone();return mm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function mm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)mm(i.children[n],e.children[n],t)}var fo=class extends pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Pc(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pc(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new sd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Wi.extractUrlBase(e);a=Wi.resolveURL(c,this.path)}else a=Wi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ym){try{a[dt.KHR_BINARY_GLTF]=new rd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new dd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new Gu;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new ad(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new od;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new ld;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function TM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function zt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hu=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],En);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ps(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Os(h),c.distance=u;break;case"spot":c=new Va(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Gu=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,n){let s=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],En),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}},Vu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Wu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(r,r)}return Promise.all(s)}},Xu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},qu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},$u=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Yu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],En)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Et)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Ku=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},ju=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],En),Promise.all(s)}},Zu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ju=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],En),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Et)),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return zt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},nd=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},id=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Pc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},sd=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Kn.TRIANGLES&&c.mode!==Kn.TRIANGLE_STRIP&&c.mode!==Kn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let v=new Xe,m=new B,p=new Fn,_=new B(1,1,1),b=new Ui(g.geometry,g.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,A),l.SCALE&&_.fromBufferAttribute(l.SCALE,A),b.setMatrixAt(A,v.compose(m,p,_));let y=null;for(let A in l)if(A==="_COLOR_0"){let T=l[A];b.instanceColor=new Ni(T.array,T.itemSize,T.normalized)}else if(A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"){if(y===null){let x=b.geometry;y=new Pt,y.name=x.name;for(let M in x.attributes)y.setAttribute(M,x.attributes[M]);for(let M in x.morphAttributes)y.morphAttributes[M]=x.morphAttributes[M];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let M of x.groups)y.addGroup(M.start,M.count,M.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),b.geometry=y}let T=l[A];y.setAttribute(A,new Ni(T.array,T.itemSize,T.normalized))}Nt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ym="glTF",uo=12,gm={JSON:1313821514,BIN:5130562},rd=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ym)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-uo,r=new DataView(e,uo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===gm.JSON){let c=new Uint8Array(e,uo+a,o);this.content=n.decode(c)}else if(l===gm.BIN){let c=uo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ad=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=hd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=hd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=kr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,En,d)})})}},od=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ld=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},Ic=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,_=1-m,b=p-d+u;for(let y=0;y!==o;y++){let A=a[v+y+o],T=a[v+y+l]*h,x=a[g+y+o],M=a[g+y]*h;r[y]=_*A+b*T+m*x+p*M}return r}},EM=new Fn,cd=class extends Ic{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return EM.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xm={9728:Lt,9729:Jt,9984:kl,9985:Lr,9986:Gs,9987:Yn},_m={33071:Wn,33648:ur,10497:xn},Bu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wM={CUBICSPLINE:void 0,LINEAR:Cs,STEP:Rs},zu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),i.DefaultMaterial}function Ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function RM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function CM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PM(i){let e,t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ku(t.attributes):e=i.indices+":"+ku(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ku(i.targets[n]);return e}function ku(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ud(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function IM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var LM=new Xe,dd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?(this.textureLoader=new ka(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Wa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ws(r,o,s),yi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Wi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Bu[s.type],o=kr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ht(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Bu[s.type],c=kr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(_);b||(v=new c(o,p*f,s.count*f/h),b=new _r(v,f/h),t.cache.add(_,b)),m=new vr(b,l,d%f/h,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),m=new Ht(v,l,g);if(s.sparse!==void 0){let p=Bu.SCALAR,_=kr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,A=new _(a[1],b,s.sparse.count*p),T=new c(a[2],y,s.sparse.count*l);o!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,M=A.length;x<M;x++){let N=A[x];if(m.setX(N,T[x*l]),l>=2&&m.setY(N,T[x*l+1]),l>=3&&m.setZ(N,T[x*l+2]),l>=4&&m.setW(N,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=xm[d.magFilter]||Jt,h.minFilter=xm[d.minFilter]||Yn,h.wrapS=_m[d.wrapS]||xn,h.wrapT=_m[d.wrapT]||xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Lt&&h.minFilter!==Jt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let v=f;t.isImageBitmapLoader===!0&&(v=function(m){let p=new Xt(m);p.needsUpdate=!0,f(p)}),t.load(Wi.resolveURL(d,r.path),v,void 0,g)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),yi(d,a),d.userData.mimeType=a.mimeType||IM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Oi,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new us,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],En),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Et)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ut);let h=r.alphaMode||zu.OPAQUE;if(h===zu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Yt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Yt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Yt){let u=r.emissiveFactor;o.emissive=new Ce().setRGB(u[0],u[1],u[2],En)}return r.emissiveTexture!==void 0&&a!==Yt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),yi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ws(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return vm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=PM(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=vm(new Pt,c,t),c.mode===Kn.TRIANGLE_STRIP?d=d.then(f=>Fu(f,ao)):c.mode===Kn.TRIANGLE_FAN&&(d=d.then(f=>Fu(f,Nr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?AM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],m=a[f],p,_=c[f];if(m.mode===Kn.TRIANGLES||m.mode===Kn.TRIANGLE_STRIP||m.mode===Kn.TRIANGLE_FAN||m.mode===void 0){let b=r.isSkinnedMesh===!0,y=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");b&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=b&&y?new va(v,_):new et(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Kn.LINES)p=new Ds(v,_);else if(m.mode===Kn.LINE_STRIP)p=new Ls(v,_);else if(m.mode===Kn.LINE_LOOP)p=new Ma(v,_);else if(m.mode===Kn.POINTS)p=new ds(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&CM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),yi(p,r),m.extensions&&Ws(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ws(s,u[0],r),u[0];let d=new st;r.extensions&&Ws(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(xi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Vi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ya(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let b=0,y=d.length;b<y;b++){let A=d[b],T=f[b],x=g[b],M=v[b],N=m[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let P=n._createAnimationTracks(A,T,x,M,N);if(P)for(let D=0;D<P.length;D++)p.push(P[D])}let _=new za(r,void 0,p);return yi(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,LM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new B().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new yr:c.length>1?h=new st:c.length===1?h=c[0]:h=new Nt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),yi(h,r),r.extensions&&Ws(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new st;n.name&&(r.name=s.createUniqueName(n.name)),yi(r,n),n.extensions&&Ws(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(pm(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof _n||d instanceof Xt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}gs[r.path]===gs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(gs[r.path]){case gs.weights:h=ki;break;case gs.rotation:h=Hi;break;case gs.translation:case gs.scale:h=fs;break;default:n.itemSize===1?h=ki:h=fs;break}let u=s.interpolation!==void 0?wM[s.interpolation]:Cs,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let v=new h(l[f]+"."+gs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ud(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Hi?cd:Ic;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function DM(i,e,t){let n=e.attributes,s=new cn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){let h=ud(kr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new B,l=new B;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=ud(kr[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Cn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function vm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=hd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ot.workingColorSpace!==En&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),yi(i,e),DM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?RM(i,e.targets,t):i})}var Xs=["guestA","guestB","guestC"],Sm={guestA:"\uB370\uB2D8 \uBCC4\uBB34\uB2AC",guestB:"\uAE08\uBC1C \uB54B\uC740 \uBA38\uB9AC",guestC:"\uD770 \uC6D0\uD53C\uC2A4"},pd=new Set;function bm(){let i=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]),e=new qn(i,3,1);return e.minFilter=e.magFilter=Lt,e.needsUpdate=!0,e}var po="#fde9e7",NM="#f5c6c9",Lc=2732/2e3,Mm={guestA:{hair:"#2a2226",hairStyle:"long",top:"#bfe2f1",sleeve:null,bottom:"pants",bottomColor:"#8fa1df",shoes:"#bfe2f1",head:[0,228,292,500,560],topCrop:[0,262,560,452,752],legL:[0,215,752,362,1082],legR:[0,358,752,505,1082]},guestB:{hair:"#fbe89a",hairStyle:"braids",top:"#ffffff",sleeve:"#ffcaca",bottom:"shorts",bottomColor:"#cdebc9",warmers:"#ffffff",shoes:"#ffcaca",head:[0,800,295,1080,560],topCrop:[0,838,552,1040,762],lowCrop:[0,820,735,1080,862]},guestC:{hair:"#8f7a5c",hairStyle:"wavy",top:"#fffdfb",sleeve:"#fffdfb",longSleeve:!0,bottom:"dress",bottomColor:"#fffdfb",boots:"#8c6d58",head:[0,1360,310,1640,580],lowCrop:[0,1385,578,1625,882]},shop:{hair:"#2a2226",hairStyle:"bob",top:"#bfe2f1",sleeve:"#bfe2f1",bottom:"dress",bottomColor:"#fbf09b",shoes:"#bfe2f1",head:[1,228,292,500,565],lowCrop:[1,238,572,495,1e3]},cafe:{hair:"#2a2226",hairStyle:"ponytail",top:"#fbdede",sleeve:"#fbdede",bottom:"dress",bottomColor:"#d4efbf",shoes:"#fbdede",head:[1,840,300,1105,565],lowCrop:[1,862,572,1108,1010]}},Dc=["chars1.png","chars2.png"].map(i=>{let e=new Image;return e.src=i,e}),fd=new Map;function UM(i,e,t=256){let n=i.join(",")+e;if(fd.has(n))return fd.get(n);let[s,r,a,o,l]=i,c=Math.round(t*(l-a)/(o-r)),h=document.createElement("canvas");h.width=t,h.height=c;let u=h.getContext("2d");u.fillStyle=e,u.fillRect(0,0,t,c);let d=new ui(h);d.colorSpace=Et,d.anisotropy=4;let f=()=>{u.drawImage(Dc[s],r*Lc,a*Lc,(o-r)*Lc,(l-a)*Lc,0,0,t,c),d.needsUpdate=!0};return Dc[s].complete&&Dc[s].naturalWidth?f():Dc[s].addEventListener("load",f,{once:!0}),fd.set(n,d),d}function md(i,e={}){let t=new st,n=[],s=[],r={root:t,arms:n,head:null,animate:m,setLook:u,look:null},a=null,o=document.createElement("canvas");o.width=o.height=64;let l=o.getContext("2d"),c=l.createRadialGradient(32,32,4,32,32,30);c.addColorStop(0,"rgba(90,60,120,0.32)"),c.addColorStop(1,"rgba(90,60,120,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new et(new Fi(.62,.62),new Yt({map:new ui(o),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.004,t.add(h);function u(p){a&&t.remove(a);let _=Mm[p]||Mm.guestA;r.look=p;let b=new Map,y=(w,C=1)=>{let G=w+C;return b.has(G)||b.set(G,new Yt({color:new Ce(w).multiplyScalar(C)})),b.get(G)},A=(w,C)=>new Yt({map:UM(w,C),side:Ut}),T=(w,C,G,z=0,X=0,O=0)=>{let L=new et(C,G);return L.position.set(z,X,O),L.castShadow=!0,w.add(L),L},x=(w,C=10,G=8)=>new Kt(w,C,G),M=(w,C,G,z,X,O,L,F=0,q=8)=>(T(w,new ct(C,G,z,q,1,!0,-Math.PI/2,Math.PI),X,0,L,F),T(w,new ct(C,G,z,q,1,!1,Math.PI/2,Math.PI),y(O,.94),0,L,F));a=new st,t.add(a),n.length=0,s.length=0;for(let w of[-1,1]){let C=new st;if(C.position.set(.07*w,.34,0),a.add(C),_.bottom==="pants"){let G=new st;G.position.y=-.12,C.add(G),M(G,.075,.085,.28,A(w<0?_.legL:_.legR,_.bottomColor),_.bottomColor,0)}else T(C,new ct(.044,.04,.24,6),y(po),0,-.12,0);_.warmers&&T(C,new ct(.058,.06,.11,7),y(_.warmers),0,-.205,0),_.boots?(T(C,new ct(.06,.058,.14,7),y(_.boots),0,-.2,0),T(C,x(.066,8,6),y(_.boots),0,-.275,.02).scale.set(1,.6,1.3)):T(C,x(.066,8,6),y(_.shoes),0,-.29,.022).scale.set(1,.62,1.35),s.push(C)}T(a,new ct(.05,.055,.06,6),y(po),0,.66,0),_.bottom==="dress"?M(a,.12,.25,.4,A(_.lowCrop,_.bottomColor),_.bottomColor,.44):(M(a,.115,.135,.28,A(_.topCrop,_.top),_.top,.5),_.bottom==="pants"&&M(a,.135,.15,.06,y(_.bottomColor),_.bottomColor,.37),_.bottom==="shorts"&&M(a,.14,.17,.13,A(_.lowCrop,_.bottomColor),_.bottomColor,.33));for(let w of[-1,1]){let C=new st;C.position.set(.14*w,.61,0),a.add(C),_.sleeve&&T(C,x(_.longSleeve?.06:.07,8,6),y(_.sleeve),.01*w,-.03,0).scale.set(1,1.1,1),T(C,new ct(.036,.04,.2,6),y(_.longSleeve?_.sleeve:po),.012*w,-.12,0),_.longSleeve&&T(C,x(.05,8,6),y(_.sleeve),.014*w,-.19,0).scale.set(1,.7,1),T(C,x(.055,8,6),y(po),.016*w,-.245,.006),C.rotation.z=.32*w,n.push(C)}let N=new st;N.position.set(0,.89,0),a.add(N);let P=.24,D=1.12,I=.97;T(N,x(P*1.04,12,9),y(_.hair,.94)).scale.set(D,I,1),T(N,new Kt(P*1.06,14,10,Math.PI/2-1.35,2.7,0,Math.PI*.8),A(_.head,_.hair)).scale.set(D,I,1);for(let w of[-1,1])T(N,x(.08,8,6),y(po),.3*w,-.03,.02).scale.set(.55,1,.75),T(N,x(.048,8,6),y(NM),.32*w,-.03,.035).scale.set(.35,.8,.6);d(N,_,T,y,x),r.head=N,t.traverse(w=>{w.isMesh&&(w.frustumCulled=!1)})}function d(p,_,b,y,A){let T=y(_.hair,.97),x=(N,P,D,I,U,w=.05)=>{let C=b(p,new di(w,I,2,6),T,N,P,D);return C.rotation.z=U,C},M=(N,P=1.3)=>x(0,-.1-N/2,-.14,N,0,.17).scale.set(P,1,.7);if(_.hairStyle==="long"){M(.2);for(let N of[-1,1])x(.22*N,-.17,-.02,.18,-.12*N),x(.26*N,-.33,.02,.07,-.9*N,.045)}if(_.hairStyle==="bob"){M(.1);for(let N of[-1,1])x(.26*N,-.2,.02,.05,-1.1*N,.045)}if(_.hairStyle==="wavy"){M(.12);for(let N of[-1,1])x(.26*N,-.25,.04,.06,-1*N,.05)}if(_.hairStyle==="braids"){M(.06);for(let N of[-1,1])for(let P=0;P<5;P++)b(p,A(.045-P*.003,7,5),T,(.2-P*.006)*N,-.15-P*.065,.09+P*.012).scale.set(1,.85,1)}if(_.hairStyle==="ponytail"){M(.04),b(p,A(.075,8,6),T,.17,.25,.02);let N=b(p,new di(.085,.16,2,7),T,.25,.31,0);N.rotation.z=-.9;let P=b(p,new di(.08,.34,2,7),T,.34,.05,-.02);P.rotation.z=.12,b(p,new di(.05,.14,2,6),T,.32,-.22,-.02).rotation.z=.3}}let f=0,g=0,v=0;function m(p,_,b,y=!1,A=!1){let T=r.head;if(v+=((y?1:0)-v)*Math.min(1,p*10),v>.02){s[0].rotation.x=s[1].rotation.x=-1.45*v,n[0].rotation.x=n[1].rotation.x=-.5*v,a.position.y=.11*v,a.rotation.x=0,T.rotation.z=0,g=0;return}let x=Math.min(1,_/2);g+=(x-g)*Math.min(1,p*10),f+=p*(5+_*3.2);let M=Math.sin(f)*.75*g;s[0].rotation.x=M,s[1].rotation.x=-M,n[0].rotation.x=-M*.8,n[1].rotation.x=M*.8,n[0].rotation.z=-.32,n[1].rotation.z=.32,A&&(n[0].rotation.x=n[1].rotation.x=-1.2),a.position.y=Math.abs(Math.sin(f))*.035*g+Math.sin(b*2.2)*.006*(1-g),T.rotation.z=Math.sin(f*.5)*.05*g,a.rotation.x=.07*g}return u(e.look||"guestA"),r}var OM=500,Nc=6,Bc=1.05,Yi={tteok:{name:"\uB5A1\uAF2C\uCE58",price:2e3,emoji:"\u{1F361}",tag:"\uB300\uD45C",desc:"\uB2EC\uCF64\uC9ED\uC9E4 \uC18C\uC2A4 \uB5A1\uAF2C\uCE58 \xB7 \uD3EC\uC7A5 \uAC00\uB2A5",model:"skewer"},mochi:{name:"\uACFC\uC77C\uCC39\uC300\uB5A1",price:4500,emoji:"\u{1F353}",desc:"\uBCF4\uB4E4\uBCF4\uB4E4\uD55C \uD53C\uC5D0 \uACFC\uC77C\uC774 \uAC00\uB4DD",model:"mochi",opts:{flavor:["\uC694\uAC70\uC0E4\uC778\uBA38\uC2A4\uCF13","\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"]}},kiwiPf:{name:"\uD0A4\uC704 \uD30C\uC778 \uD06C\uB9BC \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",price:12e3,emoji:"\u{1F95D}",desc:"\uACFC\uC77C \uAC00\uB4DD, \uCAC0\uCAC0\uD55C \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",model:"kiwiParfait"},puddPf:{name:"\uD478\uB529\uCD08\uCF54\uD30C\uB974\uD398",price:12e3,emoji:"\u{1F36E}",desc:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529\uACFC \uBC14\uB098\uB098\uC758 \uC870\uD569",model:"puddingParfait"},tangSoda:{name:"\uADE4\uC18C\uB2E4",price:6e3,emoji:"\u{1F34A}",model:"soda",c:"#ffa81e",scoop:"#fff4dc"},melonSoda:{name:"\uBA54\uB860\uC18C\uB2E4",price:6e3,emoji:"\u{1F348}",model:"soda",c:"#6fd34a",scoop:"#d6f2c4"},creamSoda:{name:"\uD06C\uB9BC\uC18C\uB2E4",price:6e3,emoji:"\u{1FAE7}",desc:"\uC5F4\uB300\uACFC\uC77C + \uB77C\uBB34\uB124\uB9DB",model:"soda",c:"#2f93ee",scoop:"#fff0c8"},chocoMilk:{name:"\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F36B}",model:"milk",c:"#7b4a33",drizzle:!0},greenMilk:{name:"\uB179\uCC28\uC6B0\uC720",price:6e3,emoji:"\u{1F375}",model:"milk",c:"#86a95b",drizzle:!0},melonMilk:{name:"\uBA54\uB860\uC6B0\uC720",price:6e3,emoji:"\u{1F348}",model:"milk",c:"#b9e3a0"},bananaMilk:{name:"\uBC14\uB098\uB098\uC6B0\uC720",price:6e3,emoji:"\u{1F34C}",model:"milk",c:"#f3dc8e"},mintMilk:{name:"\uBBFC\uD2B8\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F33F}",model:"milk",c:"#7d5a47",cream:"#d4f5e6"},americano:{name:"\uC544\uBA54\uB9AC\uCE74\uB178",price:4500,emoji:"\u2615",desc:"\uB354\uCE58 \uC6D0\uC561\uC744 \uC368\uC694",model:"coffee",opts:{temp:["\uC544\uC774\uC2A4","\uD56B"],shot:!0}},latte:{name:"\uC5F0\uC720\uB77C\uB5BC",price:5e3,emoji:"\u{1F95B}",desc:"\uC544\uC774\uC2A4\uB9CC \uAC00\uB2A5\uD574\uC694",model:"latte",opts:{shot:!0}},sodaSlush:{name:"\uC18C\uB2E4 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F9CA}",model:"slush",c:"#9dd6ff"},mintSlush:{name:"\uBBFC\uD2B8\uCD08\uCF54 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F367}",model:"slush",c:"#bdeedb",chips:!0},pineSando:{name:"\uD30C\uC778\uC560\uD50C \uC0B0\uB3C4",price:6500,emoji:"\u{1F96A}",model:"sando"},pudding:{name:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529",price:4500,emoji:"\u{1F36E}",model:"pudding"},peachTea:{name:"\uBCF5\uC22D\uC544 \uC544\uC774\uC2A4\uD2F0",price:4500,emoji:"\u{1F351}",model:"tea",c:"#f0a050"}},gd=[["\uCD94\uCC9C",["tteok","mochi","kiwiPf","puddPf"]],["\uC18C\uB2E4",["tangSoda","melonSoda","creamSoda"]],["\uC6B0\uC720",["chocoMilk","greenMilk","melonMilk","bananaMilk","mintMilk"]],["\uCEE4\uD53C",["americano","latte"]],["\uC2AC\uB7EC\uC2DC",["sodaSlush","mintSlush"]],["\uB514\uC800\uD2B8",["pineSando","puddPf","pudding"]],["\uD2F0",["peachTea"]]],xd=i=>i.toLocaleString("ko-KR")+"\uC6D0",_d=new Map;function at(i,e={}){let t=i+JSON.stringify(e);return _d.has(t)||_d.set(t,new jt({color:i,roughness:.45,metalness:0,...e})),_d.get(t)}var zc=()=>at("#eef8fc",{transparent:!0,opacity:.32,roughness:.05,depthWrite:!1});function Ze(i,e,t,n=0,s=0,r=0){let a=new et(e,t);return a.position.set(n,s,r),i.add(a),a}var go=(i,e=20)=>new Ua(i.map(([t,n])=>new fe(t,n)),e);function Uc(i,e,{h:t=.17,w:n=.04}={}){Ze(i,go([[0,0],[.034,0],[.035,.006],[.008,.014],[.007,.06-.008],[.014,.06],[n*.75,.06+.035],[n,t-.02],[n+.002,t]]),zc()).renderOrder=3;let r=new st;return r.position.y=.06+.002,i.add(r),Ze(r,go([[0,0],[.012,0],[n*.72,.035],[n-.004,t-.06-.03],[0,t-.06-.03]]),at(e,{roughness:.3})),{lv:r,top:t-.02}}function vd(i,e,t="#fffaf3",n=1){let s=new st;s.position.y=e,i.add(s);let r=at(t,{roughness:.75});return Ze(s,new Kt(.036*n,12,8),r,0,.008,0).scale.y=.6,Ze(s,new Kt(.027*n,12,8),r,0,.028*n,0).scale.y=.7,Ze(s,new Mr(.018*n,.03*n,10),r,0,.05*n,0),s}function mo(i,e,t,n){let s=new st;s.position.set(e,t,n),i.add(s),Ze(s,new Kt(.013,10,8),at("#e0142f",{roughness:.15}));let r=Ze(s,new ct(.0015,.0015,.04,4),at("#5b7a2a"),.006,.022,0);return r.rotation.z=-.35,s}function Oc(i,e,t,n=.12){let s=Ze(i,new ct(.004,.004,n,6),at(e));return s.position.set(.012,t,.005),s.rotation.z=-.22,s}function Fc(i,e=.085){Ze(i,new ct(e,e*.8,.01,24),at("#fffdf8",{roughness:.3}),0,.005,0)}function Tm(i,e){let t=Yi[i],n=new st,s=[],r=[],a=null;switch(t.model){case"soda":{let o=Uc(n,t.c);a=o.lv;let l=Ze(n,new Kt(.035,14,10),at(t.scoop,{roughness:.85}),0,o.top+.012,0);l.scale.y=.85,s.push(l),s.push(mo(n,.012,o.top+.048,.012));break}case"milk":{let o=Uc(n,t.c);a=o.lv;let l=vd(n,o.top-.004,t.cream);if(s.push(l),t.drizzle)for(let c=0;c<3;c++){let h=Ze(l,new Bi(.026-c*.006,.0025,4,18),at("#4a2a1d"),0,.015+c*.016,0);h.rotation.x=Math.PI/2}s.push(mo(n,0,o.top+.066,0));break}case"slush":{let o=Uc(n,t.c,{h:.16,w:.042});a=o.lv;let l=Ze(n,new Kt(.043,14,8,0,Math.PI*2,0,Math.PI/2),at(t.c,{roughness:.95}),0,o.top-.004,0);if(l.scale.y=.7,s.push(l),t.chips)for(let c=0;c<6;c++)s.push(Ze(n,new Gt(.008,.004,.008),at("#3b2418"),Math.cos(c)*.022,o.top+.016,Math.sin(c*1.7)*.022));s.push(Oc(n,"#ff8fb8",o.top));break}case"tea":{let o=Ze(n,go([[0,0],[.034,0],[.04,.15],[.041,.15]]),zc());o.renderOrder=3,a=new st,a.position.y=.004,n.add(a),Ze(a,new ct(.037,.032,.13,18),at(t.c,{roughness:.25,transparent:!0,opacity:.88}),0,.065,0);for(let c=0;c<3;c++)Ze(a,new Gt(.02,.02,.02),at("#ffffff",{transparent:!0,opacity:.55,roughness:.05}),Math.cos(c*2.1)*.016,.115,Math.sin(c*2.1)*.016).rotation.y=c;let l=Ze(n,new ct(.02,.02,.005,14),at("#ffd58a"),.03,.15,0);l.rotation.z=Math.PI/2,s.push(l),s.push(Oc(n,"#9be0c4",.14,.16));break}case"coffee":{if(e.temp==="\uD56B"){Ze(n,new ct(.075,.06,.008,20),at("#fffdf8"),0,.004,0),Ze(n,new ct(.042,.034,.08,18,1,!0),at("#fffaf2",{side:Ut}),0,.048,0),Ze(n,new ct(.034,.034,.004,18),at("#fffaf2"),0,.01,0);let o=Ze(n,new Bi(.02,.006,6,12,Math.PI),at("#fffaf2"),.042,.05,0);o.rotation.z=-Math.PI/2,a=new st,a.position.y=.012,n.add(a),Ze(a,new ct(.039,.034,.066,18),at("#3a2014",{roughness:.15}),0,.033,0)}else{let o=Ze(n,go([[0,0],[.034,0],[.04,.15],[.041,.15]]),zc());o.renderOrder=3,a=new st,a.position.y=.004,n.add(a),Ze(a,new ct(.037,.032,.13,18),at("#3a1f12",{roughness:.2,transparent:!0,opacity:.92}),0,.065,0);for(let l=0;l<3;l++)Ze(a,new Gt(.02,.02,.02),at("#ffffff",{transparent:!0,opacity:.5,roughness:.05}),Math.cos(l*2.1)*.016,.118,Math.sin(l*2.1)*.016).rotation.y=l;s.push(Oc(n,"#2b2b2b",.14,.16))}break}case"latte":{let o=Ze(n,go([[0,0],[.034,0],[.04,.15],[.041,.15]]),zc());o.renderOrder=3,a=new st,a.position.y=.004,n.add(a),Ze(a,new ct(.034,.032,.03,18),at("#fff6e2"),0,.015,0),Ze(a,new ct(.036,.034,.05,18),at("#f1e5d2"),0,.055,0),Ze(a,new ct(.037,.036,.05,18),at("#8a5634",{roughness:.25}),0,.105,0),s.push(Oc(n,"#f7b6cf",.14,.16));break}case"puddingParfait":case"kiwiParfait":{let o=Uc(n,t.model==="kiwiParfait"?"#f6efe0":"#5a3322",{h:.15,w:.045});a=o.lv;let l=o.top;if(s.push(vd(n,l-.006,"#fffaf3",1.25)),t.model==="puddingParfait"){let c=new st;c.position.set(-.012,l+.02,.012),n.add(c),s.push(c),Ze(c,new ct(.022,.028,.032,18),at("#f7c75a",{roughness:.35}),0,.016,0),Ze(c,new ct(.0225,.022,.008,18),at("#8c4a12",{roughness:.2}),0,.034,0),s.push(mo(n,-.012,l+.072,.012));for(let u=0;u<3;u++){let d=Ze(n,new ct(.013,.013,.006,12),at("#fff2c4"),.03,l+.01+u*.012,-.02+u*.016);d.rotation.x=Math.PI/2-.4,s.push(d)}let h=Ze(n,new Kt(.009,8,6),at("#ff9cc0"),.028,l+.032,.028);h.scale.z=.4,s.push(h)}else{for(let h=0;h<5;h++)s.push(Ze(n,new Gt(.018,.016,.018),at("#ffd23f",{roughness:.35}),Math.cos(h*1.3)*.03,l+.022+h%2*.012,Math.sin(h*1.3)*.03));for(let h=0;h<2;h++){let u=Ze(n,new ct(.016,.016,.005,14),at("#9ccf3a",{roughness:.4}),-.026+h*.05,l+.04,.02-h*.03);u.rotation.x=Math.PI/2-.3,u.rotation.z=h?.4:-.4,s.push(u)}let c=Ze(n,new Kt(.02,12,8),at("#fffefa",{roughness:.8}),0,l+.05,0);c.scale.y=.75,s.push(c),s.push(mo(n,.004,l+.075,.004))}break}case"pudding":{Fc(n);let o=new st;n.add(o),r.push(o),Ze(o,new ct(.028,.038,.045,20),at("#f7c75a",{roughness:.35}),0,.032,0),Ze(o,new ct(.0285,.028,.01,20),at("#8c4a12",{roughness:.2}),0,.058,0);let l=vd(o,.062,"#fffaf3",.55);s.push(l),s.push(mo(o,0,.09,0));break}case"sando":{Fc(n,.095);for(let o of[-1,1]){let l=new st;l.position.set(.032*o,.01,0),l.rotation.y=.3*o,n.add(l),r.push(l),Ze(l,new Gt(.05,.065,.026),at("#fffaf2",{roughness:.9}),0,.033,0),Ze(l,new Gt(.051,.026,.02),at("#fff7e6",{roughness:.6}),0,.033,.0035);let c=Ze(l,new Mr(.012,.016,12),at("#ffcf3d",{roughness:.35}),0,.034,.014);c.rotation.x=Math.PI/2}break}case"skewer":{Fc(n,.095);let o=new st;o.position.y=.018,o.rotation.y=.5,n.add(o),r.push(o);let l=Ze(o,new ct(.0022,.0022,.2,5),at("#d9b07a"),0,0,0);l.rotation.z=Math.PI/2;for(let c=0;c<4;c++)Ze(o,new Gt(.022,.016,.03),at("#d9561e",{roughness:.25}),-.04+c*.024,0,0);break}case"mochi":{Fc(n,.07);let o=new st;n.add(o),r.push(o),Ze(o,new ct(.045,.036,.022,14,1,!0),at("#8fd16b",{side:Ut}),0,.02,0);let l=Ze(o,new Kt(.042,16,12),at("#fffefb",{roughness:.9}),0,.04,0);l.scale.y=.72;let c=e.flavor==="\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"?"#ffd23f":"#b9e46a";Ze(o,new Kt(.01,8,6),at(c),.02,.066,.012);break}}return n.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),n.scale.setScalar(Bc),{g:n,top:s,body:r,lv:a,stage:0,pop:0}}function Em({scene3d:i,storeRoot:e,data:t,hero:n,npcs:s,showToast:r,isTouch:a,canOccupy:o,playGame:l}){let c=re=>document.getElementById(re),h=c("menu"),u=c("order-btn"),d=c("eat-btn"),f=c("order-chip"),g=s.find(re=>re.id==="cafe"),v=[],m=0,p="idle",_=0,b=0,y=[],A=null,T=[],x=null,M=0,N=re=>[re.temp,re.shot?"shot":"",re.flavor].filter(Boolean).join("\xB7"),P=re=>Yi[re.key].price+(re.opt.shot?OM:0),D=()=>v.reduce((re,Y)=>re+Y.qty,0),I=()=>v.reduce((re,Y)=>re+P(Y)*Y.qty,0);function U(re,Y=4e3){g&&(clearTimeout(U.t),g.el.textContent=re,U.t=setTimeout(()=>g.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",Y))}function w(){if(p==="done")return C();let[,re]=gd[m];h.innerHTML=`
      <div class="mhead"><div><b>Soo it Happy MENU</b><span>\uC218\uC787\uD574\uD53C \uCE74\uD398 \xB7 \uC6D0\uD558\uB294 \uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="cats">${gd.map(([Y],ue)=>`<button class="${ue===m?"on":""}" data-cat="${ue}">${Y}</button>`).join("")}</div>
      ${gd[m][0]==="\uCEE4\uD53C"?'<p class="note">* \uB354\uCE58 \uC6D0\uC561 \uC0AC\uC6A9 \xB7 \uC544\uBA54\uB9AC\uCE74\uB178\uB294 \uC544\uC774\uC2A4/\uD56B \uC120\uD0DD \xB7 \uC5F0\uC720\uB77C\uB5BC\uB294 \uC544\uC774\uC2A4\uB9CC \xB7 \uC0F7 \uCD94\uAC00 +500\uC6D0</p>':""}
      <div class="items">${re.map(Y=>{let ue=Yi[Y],ce=ue.opts||{};return`<div class="item" data-key="${Y}">
          <span class="emo">${ue.emoji}</span>
          <div class="info"><b>${ue.name}${ue.tag?` <i>${ue.tag}</i>`:""}</b>${ue.desc?`<small>${ue.desc}</small>`:""}
            ${ce.temp?`<div class="seg">${ce.temp.map((Se,R)=>`<button data-opt="temp" data-v="${Se}" class="${R?"":"on"}">${Se}</button>`).join("")}</div>`:""}
            ${ce.flavor?`<div class="seg">${ce.flavor.map((Se,R)=>`<button data-opt="flavor" data-v="${Se}" class="${R?"":"on"}">${Se}</button>`).join("")}</div>`:""}
            ${ce.shot?'<label class="shot"><input type="checkbox" data-opt="shot"> \uC0F7 \uCD94\uAC00 +500\uC6D0</label>':""}
          </div>
          <div class="buy"><span class="price">${xd(ue.price)}</span><button class="add" data-act="add">\uB2F4\uAE30</button></div>
        </div>`}).join("")}</div>
      <div class="cart">
        ${v.length?`<div class="lines">${v.map((Y,ue)=>`<div class="line"><span>${Yi[Y.key].emoji} ${Yi[Y.key].name}${N(Y.opt)?` <small>(${N(Y.opt)})</small>`:""}</span>
          <span class="step"><button data-act="dec" data-i="${ue}" aria-label="\uBE7C\uAE30">\u2212</button><b>${Y.qty}</b><button data-act="inc" data-i="${ue}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join("")}</div>`:'<p class="empty">\uC544\uC9C1 \uB2F4\uC740 \uBA54\uB274\uAC00 \uC5C6\uC5B4\uC694</p>'}
        <button class="go" data-act="order" ${v.length?"":"disabled"}>${v.length?`\u{1F9FE} ${D()}\uAC1C \xB7 ${xd(I())} \uC8FC\uBB38\uD558\uAE30`:"\uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC8FC\uBB38\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p>
      </div>`}function C(){h.innerHTML=`
      <div class="mhead"><div><b>\uC8FC\uBB38 \uC644\uB8CC! \u{1F9FE}</b><span>\uC8FC\uBB38\uBC88\uD638 ${_} \xB7 ${xd(A.total)}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="done">
        <div class="list">${A.lines.map(re=>`<div>${Yi[re.key].emoji} ${Yi[re.key].name}${N(re.opt)?` (${N(re.opt)})`:""} \xD7 ${re.qty}</div>`).join("")}</div>
        <p>\uC5B4\uB5BB\uAC8C \uBC1B\uC744\uAE4C\uC694?</p>
        <button class="go" data-act="eat">\u{1F37D}\uFE0F \uADF8\uB0E5 \uBA39\uC744\uB798\uC694</button>
        <button class="go game" data-act="game">\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30 \uD558\uACE0 \uBA39\uAE30</button>
      </div>`}function G(){p==="done"&&(p="idle"),w(),h.hidden=!1,h.offsetWidth,h.classList.add("on")}function z(){h.classList.remove("on"),setTimeout(()=>{h.classList.contains("on")||(h.hidden=!0)},250)}h.addEventListener("click",re=>{let Y=re.target.closest("button");if(!Y)return;if(Y.dataset.cat){m=+Y.dataset.cat,w(),h.querySelector(".items").scrollTop=0;return}if(Y.dataset.opt){Y.parentElement.querySelectorAll("button").forEach(ce=>ce.classList.toggle("on",ce===Y));return}let ue=Y.dataset.act;if(ue==="close")z();else if(ue==="add"){let ce=Y.closest(".item"),Se=ce.dataset.key,R={};ce.querySelectorAll(".seg .on").forEach(Q=>R[Q.dataset.opt]=Q.dataset.v);let S=ce.querySelector("[data-opt=shot]");if(S&&S.checked&&(R.shot=!0),D()>=Nc){r(`\uD55C \uBC88\uC5D0 ${Nc}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}let $=v.find(Q=>Q.key===Se&&N(Q.opt)===N(R));$?$.qty++:v.push({key:Se,opt:R,qty:1}),w(),r(`${Yi[Se].emoji} ${Yi[Se].name} \uB2F4\uC558\uC5B4\uC694`);let ae=h.querySelector(".lines");ae&&(ae.scrollTop=ae.scrollHeight)}else if(ue==="inc"||ue==="dec"){let ce=v[+Y.dataset.i];if(ue==="inc"){if(D()>=Nc){r(`\uD55C \uBC88\uC5D0 ${Nc}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}ce.qty++}else--ce.qty<=0&&v.splice(+Y.dataset.i,1);w()}else if(ue==="order"){if(p!=="idle"&&p!=="done"||y.length){r("\uBA3C\uC800 \uC8FC\uBB38\uD55C \uBA54\uB274\uB97C \uBC1B\uC740 \uB4A4\uC5D0 \uB610 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694");return}_=10+Math.floor(Math.random()*89),A={lines:v.map(ce=>({...ce,opt:{...ce.opt}})),total:I()},v.length=0,p="done",w()}else ue==="eat"?(z(),p="making",b=performance.now()+4500,U(`\uC8FC\uBB38\uBC88\uD638 ${_}\uBC88, \uC8FC\uBB38 \uBC1B\uC558\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC544 \uACC4\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F353}`,6e3),r("\u{1FA91} \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694 \xB7 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694")):ue==="game"&&X(A)});function X(){if(z(),!l)return r("\u{1F3AE} \uAC8C\uC784\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694");p="gaming",l(re=>{p="making",b=performance.now()+(re?800:1500),U(re?"\uAC8C\uC784 \uC131\uACF5! \uBC14\uB85C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F389}":"\uAD1C\uCC2E\uC544\uC694! \uADF8\uB798\uB3C4 \uB9DB\uC788\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F60A}",5e3),r(re?"\u{1F389} \uC131\uACF5! \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":"\uBA54\uB274\uB294 \uADF8\uB300\uB85C \uC900\uBE44\uD574 \uB4DC\uB824\uC694 \xB7 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694")})}u.addEventListener("click",re=>{G(),re.currentTarget.blur()}),addEventListener("keydown",re=>{re.code==="Escape"&&!h.hidden&&z()});let O=new Fs,L=new B(0,-1,0),F=new B;function q(re,Y){O.set(F.set(re,1.4,Y),L),O.far=1.4;for(let ue of O.intersectObject(e,!0))if(ue.point.y>.4&&ue.point.y<1.05)return ue.point.y;return null}function J(re,Y){let ue=Math.sin(re[2]),ce=Math.cos(re[2]),Se=ce,R=-ue,S=.42,$=null;for(let de of[.3,.36,.42,.5,.58]){let xe=q(re[0]+ue*de,re[1]+ce*de);if(xe!==null){S=de+.04,$=xe;break}}$===null&&($=.74);let ae=Y.length,Q=Math.min(3,ae);Y.forEach((de,xe)=>{let ne=Math.floor(xe/3),ie=ne?ae-3:Q,k=(xe%3-(ie-1)/2)*.13,se=S+ne*.12,j=Tm(de.key,de.opt);j.g.position.set(re[0]+ue*se+Se*k,$+.002,re[1]+ce*se+R*k),j.g.rotation.y=re[2]+Math.PI+(Math.random()-.5)*.4,j.g.scale.setScalar(.001),j.pop=.001,i.add(j.g),T.push({food:j,seat:re})})}let H=g&&{x:g.x,z:g.z,face:g.face,y:g.c.root.position.y};g&&(g.y=H.y,g.speed=0);let ee=.2,le=.15,pe=1.25,he=t.floor.map(re=>re[0]),ge=t.floor.map(re=>re[1]),Ne=Math.min(...he),Ue=Math.min(...ge),We=Math.ceil((Math.max(...he)-Ne)/le)+1,$e=Math.ceil((Math.max(...ge)-Ue)/le)+1,oe=new Map,ve=re=>Ne+re*le,ye=re=>Ue+re*le;function Ie(re,Y){if(re<0||Y<0||re>=We||Y>=$e)return!1;let ue=Y*We+re,ce=oe.get(ue);return ce===void 0&&(ce=o(ve(re),ye(Y),ee),oe.set(ue,ce)),ce}function we(re,Y,ue=8){let ce=Math.round((re-Ne)/le),Se=Math.round((Y-Ue)/le);for(let R=0;R<=ue;R++){let S=null,$=1e9;for(let ae=-R;ae<=R;ae++)for(let Q=-R;Q<=R;Q++){if(Math.max(Math.abs(ae),Math.abs(Q))!==R||!Ie(ce+ae,Se+Q))continue;let de=Math.hypot(ve(ce+ae)-re,ye(Se+Q)-Y);de<$&&($=de,S=[ce+ae,Se+Q])}if(S)return S}return null}function Ke(re,Y,ue,ce){let Se=Math.ceil(Math.hypot(ue-re,ce-Y)/.06);for(let R=1;R<Se;R++)if(!o(re+(ue-re)*R/Se,Y+(ce-Y)*R/Se,ee))return!1;return!0}function Fe(re,Y,ue,ce){let Se=we(re,Y),R=we(ue,ce);if(!Se||!R)return null;let S=(j,be)=>be*We+j,$=S(R[0],R[1]),ae=[[0,Se[0],Se[1]]],Q=new Map([[S(Se[0],Se[1]),0]]),de=new Map,xe=new Set,ne=!1,ie=0;for(;ae.length&&ie++<4e4;){let j=0;for(let Oe=1;Oe<ae.length;Oe++)ae[Oe][0]<ae[j][0]&&(j=Oe);let[,be,Me]=ae.splice(j,1)[0],Te=S(be,Me);if(!xe.has(Te)){if(xe.add(Te),Te===$){ne=!0;break}for(let[Oe,tt]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let _e=be+Oe,Ge=Me+tt;if(!Ie(_e,Ge)||Oe&&tt&&(!Ie(be+Oe,Me)||!Ie(be,Me+tt)))continue;let Je=S(_e,Ge),Pe=Q.get(Te)+Math.hypot(Oe,tt);Pe<(Q.has(Je)?Q.get(Je):1e9)&&(Q.set(Je,Pe),de.set(Je,Te),ae.push([Pe+Math.hypot(_e-R[0],Ge-R[1]),_e,Ge]))}}}if(!ne)return null;let me=[];for(let j=$;j!==void 0;j=de.get(j))me.push([ve(j%We),ye(Math.floor(j/We))]);me.reverse(),me.push([ue,ce]);let k=[me[0]],se=0;for(;se<me.length-1;){let j=me.length-1;for(;j>se+1&&!Ke(me[se][0],me[se][1],me[j][0],me[j][1]);)j--;k.push(me[j]),se=j}return k}let Ye=null,rt=at("#ffc2da",{roughness:.5});function ut(re){let Y=y;if(y=[],!g){J(re,Y),p="idle";return}let ue=Math.sin(re[2]),ce=Math.cos(re[2]),Se=[re[0]+ue*.5,re[1]+ce*.5],R=null;for(let[$,ae]of[[ce,-ue],[-ce,ue],[ue,ce]])for(let Q of[.55,.7,.85]){let de=Se[0]+$*Q,xe=Se[1]+ae*Q;if(!o(de,xe,ee))continue;let ne=Fe(H.x,H.z,de,xe);if(ne){(!R||ne.length<R.length)&&(R=ne);break}}if(p="delivering",!R){J(re,Y),p="idle",r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}");return}let S=new st;S.position.set(0,.5,.24),Ze(S,new Gt(.36,.016,.26),rt),Y.slice(0,6).forEach(($,ae)=>{let Q=Tm($.key,$.opt);Q.g.scale.setScalar(Bc*.62),Q.g.position.set((ae%3-1)*.1,.008,Y.length>3?(Math.floor(ae/3)-.5)*.09:0),S.add(Q.g)}),g.c.root.add(S),Ye={stage:"go",path:[[H.x,H.z],...R],i:1,seat:re,wait:0,tray:S,items:Y,look:Se},g.carry=!0,U("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694! \u{1F370}",2e4)}function V(re){let Y=g,ue=Ye;if(ue.stage==="go"||ue.stage==="back"){let[ce,Se]=ue.path[ue.i],R=ce-Y.x,S=Se-Y.z,$=Math.hypot(R,S),ae=Math.min($,pe*re);if($>1e-4){Y.x+=R/$*ae,Y.z+=S/$*ae;let de=Math.atan2(R,S)-Y.face;de=Math.atan2(Math.sin(de),Math.cos(de)),Y.face+=de*Math.min(1,re*10)}Y.speed=pe;let Q=Math.hypot(Y.x-H.x,Y.z-H.z);Y.y=H.y*xi.clamp(1-(Q-.15)/.35,0,1),$<.02&&++ue.i>=ue.path.length&&(Y.speed=0,ue.stage==="go"?(ue.stage="serve",ue.wait=.7):(Y.x=H.x,Y.z=H.z,Y.face=H.face,Y.y=H.y,Ye=null))}else if(ue.stage==="serve"){let ce=Math.atan2(ue.look[0]-Y.x,ue.look[1]-Y.z)-Y.face;if(ce=Math.atan2(Math.sin(ce),Math.cos(ce)),Y.face+=ce*Math.min(1,re*8),ue.wait-=re,ue.wait<=0&&ue.tray)Y.c.root.remove(ue.tray),ue.tray=null,Y.carry=!1,J(ue.seat,ue.items),p="idle",U("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uB098\uC654\uC2B5\uB2C8\uB2E4! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}",4e3),r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}"),ue.wait=1.2;else if(ue.wait<=0){let Se=Fe(Y.x,Y.z,H.x,H.z);ue.stage="back",ue.path=Se?[[Y.x,Y.z],...Se.slice(0,-1),[H.x,H.z]]:[[Y.x,Y.z],[H.x,H.z]],ue.i=1,p="idle"}}}let At=()=>T.filter(re=>re.seat===x);function nt(){let re=At();if(!re.length)return;let Y=re[0].food;Y.stage++,M=.7;let ue=Y.stage;for(let ce of Y.top)ue>=2?ce.visible=!1:ce.scale.multiplyScalar(.65);Y.lv&&(Y.lv.scale.y=Math.max(.02,1-ue/3));for(let ce of Y.body)ce.scale.setScalar(Math.max(.05,1-ue*.3));ue>=3&&(Y.dying=1,setTimeout(()=>{i.remove(Y.g),T.splice(T.findIndex(ce=>ce.food===Y),1),T.some(ce=>ce.seat===x)||r("\uB2E4 \uBA39\uC5C8\uC5B4\uC694! \uB9DB\uC788\uC5C8\uB2E4 \u{1F60B} \uB610 \uC8FC\uBB38\uD574 \uBCF4\uC138\uC694")},450))}return d.addEventListener("click",re=>{nt(),re.currentTarget.blur()}),{get open(){return!h.hidden},onSit(re){x=re,p==="ready"&&y.length&&!Ye&&ut(re)},get npcBusy(){return!!Ye},onStand(){x=null},update(re,Y,ue){ue!==x&&(x=ue),p==="making"&&performance.now()>=b&&(y=A.lines.flatMap(S=>Array.from({length:S.qty},()=>({key:S.key,opt:S.opt}))),p="ready",x&&!Ye?ut(x):(U(`\uC8FC\uBB38\uBC88\uD638 ${_}\uBC88 \uBA54\uB274 \uB098\uC654\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC73C\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F370}`,7e3),r("\u{1F514} \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uCE74\uD398 \uC758\uC790\uB97C \uB20C\uB7EC \uC549\uC73C\uBA74 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694"))),Ye&&V(re);let ce=g&&!ue&&!Ye&&Math.hypot(Y.x-H.x,Y.z-H.z)<2.6;u.hidden=!ce||!h.hidden;let Se=!!ue&&At().length>0;d.hidden=!Se;let R=p==="making"?"\u{1F9D1}\u200D\u{1F373} \uBA54\uB274 \uB9CC\uB4DC\uB294 \uC911\u2026 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":p==="ready"?`\u{1F514} \uBA54\uB274 ${y.length}\uAC1C \uC900\uBE44\uB410\uC5B4\uC694 \xB7 \uCE74\uD398 \uC758\uC790\uC5D0 \uC549\uC544 \uBCF4\uC138\uC694`:p==="delivering"?"\u{1F370} \uC9C1\uC6D0\uC774 \uBA54\uB274\uB97C \uAC00\uC838\uB2E4 \uB4DC\uB9AC\uB294 \uC911\u2026":"";f.textContent!==R&&(f.textContent=R),f.hidden=!R||!h.hidden;for(let{food:S}of T){if(S.pop<1){S.pop=Math.min(1,S.pop+re*3);let $=1-Math.pow(1-S.pop,3);S.g.scale.setScalar(Bc*(.2+.8*$+Math.sin(S.pop*Math.PI)*.12))}S.dying&&(S.dying=Math.max(0,S.dying-re*2.5),S.g.scale.setScalar(Bc*S.dying))}if(M>0&&n.arms){M=Math.max(0,M-re);let S=Math.sin((1-M/.7)*Math.PI);n.arms[0].rotation.x=-.5-1.7*S,n.head.rotation.x=.12*S}}}}var qs='stroke="#4a3f66" stroke-linejoin="round" stroke-linecap="round"',_t=qs+' stroke-width="2.6"',wm=(i,e,t,n=2.6)=>`<circle cx="${i}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${e}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${i+.9}" cy="${t-.9}" r="0.9" fill="#fff"/><circle cx="${e+.9}" cy="${t-.9}" r="0.9" fill="#fff"/>`,bd=(i,e,t)=>`<ellipse cx="${i}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/><ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/>`,kc=(i,e)=>`<path d="M${i} ${e} q3 -10 9 -12" fill="none" ${qs} stroke-width="1.8"/><circle cx="${i}" cy="${e+2}" r="5.5" fill="#e8243c" ${_t}/><circle cx="${i-1.8}" cy="${e}" r="1.5" fill="#fff" opacity=".8"/>`,yd=(i,e,t)=>`
  <path d="M43 76 h14 l2 12 h-18z" fill="#eef8fc" ${_t}/><ellipse cx="50" cy="89" rx="15" ry="4" fill="#eef8fc" ${_t}/>
  <path d="M27 36 h46 l-7 36 q-16 8 -32 0z" fill="${i}" ${_t}/>
  <path d="M33 42 l-3 22" stroke="#fff" stroke-width="3" opacity=".55" stroke-linecap="round"/>
  ${e?`<circle cx="50" cy="30" r="14" fill="${e}" ${_t}/><path d="M38 34 q12 6 24 0" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`:""}
  ${t?`<path d="M30 37 q-3 -10 8 -12 q2 -10 12 -9 q10 -1 12 9 q11 2 8 12z" fill="${t}" ${_t}/><path d="M36 31 q14 -6 28 0" fill="none" stroke="#6b3b25" stroke-width="2.4" stroke-linecap="round"/>`:""}`,xo=(i,e,t=1,n="")=>`<g transform="translate(${i} ${e}) scale(${t})">
  <ellipse cx="-17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(18 -17 2)"/><ellipse cx="17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(-18 17 2)"/>
  <path d="M-16 -6 q-4 -14 8 -16 q8 -8 16 0 q12 2 8 16 q6 10 -2 20 q-14 10 -28 0 q-8 -10 -2 -20z" fill="#fff" ${_t}/>
  ${wm(-6,6,0,2.8)}<ellipse cx="0" cy="7" rx="3" ry="2.2" fill="#3b2f4a"/><path d="M-3 10 q3 3 6 0" fill="none" ${qs} stroke-width="1.6"/>
  ${bd(-11,11,8)}${n}</g>`,Md=({hair:i,hairDark:e,bun:t,glasses:n,clip:s,collar:r})=>`
  ${t?`<circle cx="50" cy="20" r="11" fill="${i}" ${_t}/>`:""}
  <path d="M22 54 q-4 -34 28 -36 q32 2 28 36 q-2 10 -8 12 l-40 0 q-6 -2 -8 -12z" fill="${i}" ${_t}/>
  <ellipse cx="50" cy="54" rx="22" ry="21" fill="#ffe6d6" ${_t}/>
  <path d="M28 46 q8 -14 22 -12 q-2 8 -10 10 q10 -2 14 -10 q8 10 18 12 q-4 -18 -22 -18 q-18 0 -22 18z" fill="${i}"/>
  <path d="M27 58 q-3 10 1 20 M73 58 q3 10 -1 20" fill="none" stroke="${e}" stroke-width="7" stroke-linecap="round"/>
  ${wm(41,59,55,3)}${bd(35,65,63)}<path d="M46 65 q4 4 8 0" fill="none" ${qs} stroke-width="1.8"/>
  ${n?'<circle cx="41" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><circle cx="59" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><path d="M48 54 h4" stroke="#4a3326" stroke-width="2.4"/>':""}
  ${s?`<circle cx="32" cy="36" r="5" fill="#e8243c" ${qs} stroke-width="1.8"/><path d="M30 31 l2 -3 l2 3" fill="#6cc05a"/>`:""}
  ${r?`<path d="M34 78 q16 8 32 0 l6 10 q-22 10 -44 0z" fill="${r}" ${_t}/>`:""}`,$s={menu:{name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",color:"#d6efbf",stickers:[yd("#2f93ee","#fff0c8")+kc(57,14),yd("#6fd34a","#d6f2c4")+kc(57,14),`<ellipse cx="50" cy="80" rx="34" ry="9" fill="#fff" ${_t}/><path d="M32 78 l6 -34 h24 l6 34z" fill="#f7c75a" ${_t}/><path d="M38 44 h24 l-1 7 q-11 4 -22 0z" fill="#8c4a12" ${_t}/>
       <path d="M40 44 q-3 -9 6 -10 q4 -8 8 0 q9 1 6 10z" fill="#fffaf3" ${_t}/>${kc(50,24)}<path d="M37 70 q13 4 26 0" stroke="#fff" stroke-width="2.4" opacity=".5" fill="none"/>`,`<path d="M18 86 L84 20" stroke="#d9b07a" stroke-width="4" stroke-linecap="round"/>
       ${[0,1,2,3].map(i=>`<rect x="${24+i*13}" y="${56-i*13}" width="15" height="12" rx="4" fill="#e0622a" ${_t} transform="rotate(-45 ${31+i*13} ${62-i*13})"/>`).join("")}
       <path d="M30 60 l40 -40" stroke="#fff" stroke-width="2" opacity=".45" stroke-linecap="round"/>`,`<path d="M22 64 h56 l-6 18 h-44z" fill="#8fd16b" ${_t}/><path d="M28 64 l4 18 M40 64 l1 18 M52 64 l-1 18 M64 64 l-3 18" stroke="#6aa94a" stroke-width="1.6"/>`+xo(50,44,1.05),yd("#7b4a33",null,"#fffaf3")+kc(54,10)]},staff:{name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",color:"#ffe1ee",stickers:[Md({hair:"#7a5640",hairDark:"#64432f",bun:!0,collar:"#c4e76a"}),Md({hair:"#3d3346",hairDark:"#2c2433",glasses:!0,collar:"#fff0a3"}),Md({hair:"#f7a9c8",hairDark:"#ec8db5",clip:!0,collar:"#aee3cf"}),`<path d="M10 24 q0 -12 14 -12 h52 q14 0 14 12 v30 q0 12 -14 12 h-36 l-14 14 l2 -14 q-18 0 -18 -12z" fill="#fff" ${_t}/>
       <text x="50" y="47" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="12.5" fill="#e0457b">\uC5B4\uC11C\uC624\uC138\uC694!</text>`,`<path d="M50 86 C10 58 12 22 34 20 C44 19 50 28 50 32 C50 28 56 19 66 20 C88 22 90 58 50 86z" fill="#f6a9c9" ${_t}/>
       <text x="50" y="54" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="13" fill="#c2477e">\uC218\uC787\uD574\uD53C</text>`,`<path d="M50 50 l-30 -18 q-8 -2 -8 8 v20 q0 10 8 8z M50 50 l30 -18 q8 -2 8 8 v20 q0 10 -8 8z" fill="#ff9cc0" ${_t}/>
       <path d="M44 52 l-10 30 l8 -4 l4 8 l6 -32z M56 52 l10 30 l-8 -4 l-4 8 l-6 -32z" fill="#ff86b2" ${_t}/><circle cx="50" cy="50" r="8" fill="#ffb8d2" ${_t}/>`]},dog:{name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",color:"#e3f3ff",stickers:[xo(50,52,1.5,'<path d="M-3 12 q3 5 6 0z" fill="#ff8fb0" stroke="#4a3f66" stroke-width="1.4"/>'),`<ellipse cx="52" cy="72" rx="24" ry="16" fill="#fff" ${_t}/><ellipse cx="38" cy="84" rx="7" ry="5" fill="#fff" ${_t}/><ellipse cx="62" cy="84" rx="7" ry="5" fill="#fff" ${_t}/>
       <path d="M74 66 q12 -6 8 -16" fill="none" ${qs} stroke-width="5"/><path d="M74 66 q12 -6 8 -16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`+xo(48,40,1.05),`<ellipse cx="50" cy="66" rx="34" ry="18" fill="#fff" ${_t}/><path d="M24 62 q-4 -16 12 -18 q10 -10 20 0" fill="#fff" ${_t}/>
       <path d="M30 60 q4 3 8 0 M44 60 q4 3 8 0" fill="none" ${qs} stroke-width="2"/><ellipse cx="41" cy="67" rx="2.6" ry="2" fill="#3b2f4a"/>${bd(28,54,68)}
       <text x="66" y="38" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="15" fill="#9a8cc4">z</text><text x="76" y="26" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="11" fill="#9a8cc4">z</text>`,xo(50,54,1.4)+`<path d="M50 24 l-14 -8 q-4 0 -4 4 v8 q0 4 4 4z M50 24 l14 -8 q4 0 4 4 v8 q0 4 -4 4z" fill="#ff8fb7" ${_t}/><circle cx="50" cy="24" r="4.5" fill="#ffb3cf" ${_t}/>`,`<ellipse cx="50" cy="62" rx="18" ry="15" fill="#f7a9c8" ${_t}/>${[[28,40],[42,30],[58,30],[72,40]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="7" ry="8.5" fill="#f7a9c8" ${_t}/>`).join("")}`,`<path d="M14 20 q0 -10 12 -10 h48 q12 0 12 10 v26 q0 10 -12 10 h-30 l-14 12 l2 -12 h-6 q-12 0 -12 -10z" fill="#fffbe0" ${_t}/>
       <text x="50" y="42" text-anchor="middle" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="18" fill="#4a3f66">\uBA4D!</text>`+xo(70,76,.8)]}},Sd=new Map;function si(i,e){let t=i+e;if(!Sd.has(t)){let n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" width="224" height="224">
      <defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feMorphology in="SourceAlpha" operator="dilate" radius="4.5" result="d"/>
      <feFlood flood-color="#ffffff"/><feComposite in2="d" operator="in" result="w"/>
      <feGaussianBlur in="d" stdDeviation="1.6" result="s"/><feOffset in="s" dy="1.4" result="so"/><feFlood flood-color="#6a53a0" flood-opacity=".28"/><feComposite in2="so" operator="in" result="sh"/>
      <feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g filter="url(#b)">${$s[i].stickers[e]}</g></svg>`;Sd.set(t,"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n))}return Sd.get(t)}var tn={stkMenu:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"menu",desc:"\uD06C\uB9BC\uC18C\uB2E4\xB7\uBA54\uB860\uC18C\uB2E4\xB7\uD478\uB529\xB7\uB5A1\uAF2C\uCE58\u2026",color:"#d6efbf"},stkStaff:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"staff",desc:"\uCE74\uD398 \uC5B8\uB2C8\xB7\uC18C\uD488\uC0F5 \uC5B8\uB2C8\xB7\uC190\uB2D8",color:"#ffd3e4"},stkDog:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"dog",desc:"\uBABD\uAE00\uBABD\uAE00 \uD558\uC580 \uAC15\uC544\uC9C0",color:"#dcefff"},diary:{cat:"\uBB38\uAD6C",name:"\uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9",price:5e3,emoji:"\u{1F4D2}",desc:"\uCE74\uD398 \uC790\uB9AC\uC5D0\uC11C \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694",color:"#f7c9dc"},penBear:{cat:"\uBB38\uAD6C",name:"\uACF0\uB3CC\uC774 \uBCFC\uD39C",price:2500,emoji:"\u{1F43B}",desc:"\uCD08\uCF54 \uBE0C\uB77C\uC6B4 \uC789\uD06C",ink:"#7a4a33",color:"#c99c6e"},penBerry:{cat:"\uBB38\uAD6C",name:"\uB538\uAE30 \uBCFC\uD39C",price:2500,emoji:"\u{1F353}",desc:"\uB538\uAE30 \uD551\uD06C \uC789\uD06C",ink:"#e0457b",color:"#f48fb9"},penMint:{cat:"\uBB38\uAD6C",name:"\uBBFC\uD2B8 \uC824\uD39C",price:2500,emoji:"\u{1F33F}",desc:"\uBBFC\uD2B8 \uC789\uD06C",ink:"#2f9d8f",color:"#9fe0cf"},tapeHeart:{cat:"\uBB38\uAD6C",name:"\uD558\uD2B8 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F497}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"heart",color:"#ffc2da"},tapeCheck:{cat:"\uBB38\uAD6C",name:"\uAE45\uC5C4 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F49A}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"check",color:"#bfe6a8"},memo:{cat:"\uBB38\uAD6C",name:"\uB9D0\uB791 \uBA54\uBAA8\uC9C0",price:2e3,emoji:"\u{1F5D2}\uFE0F",color:"#fff3b0"},letter:{cat:"\uBB38\uAD6C",name:"\uD3B8\uC9C0\uC9C0 \uC138\uD2B8",price:3500,emoji:"\u{1F48C}",color:"#ffe1ee"},postcard:{cat:"\uBB38\uAD6C",name:"\uC218\uC787\uD574\uD53C \uC5FD\uC11C",price:1500,emoji:"\u{1F5BC}\uFE0F",color:"#cdbcf0"},plushDog:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC778\uD615",price:15e3,emoji:"\u{1F436}",color:"#ffffff"},keyBear:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uACF0\uB3CC\uC774 \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F9F8}",color:"#e6bf93"},keyBunny:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD1A0\uB07C \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F430}",color:"#f8b9d3"},hairpin:{cat:"\uC7A1\uD654",name:"\uB538\uAE30 \uBA38\uB9AC\uD540",price:3e3,emoji:"\u{1F380}",color:"#ff8fb0"}},Am=["\uC2A4\uD2F0\uCEE4","\uBB38\uAD6C","\uC778\uD615\xB7\uD0A4\uB9C1","\uC7A1\uD654"],Hc=i=>i.toLocaleString("ko-KR")+"\uC6D0",Td=i=>{let e=tn[i];return e.sheet?`<img src="${si(e.sheet,0)}" alt="">`:e.emoji},Ln={items:{},stickers:{}};try{Object.assign(Ln,JSON.parse(localStorage.getItem("sh-inv"))||{})}catch{}function Gc(){try{localStorage.setItem("sh-inv",JSON.stringify(Ln))}catch{}}var Vc=i=>(Ln.items[i]||0)>0;function FM(){let i=document.createElement("canvas");i.width=512,i.height=128;let e=i.getContext("2d");e.fillStyle="#f4a7bf",e.fillRect(0,0,512,128),e.globalCompositeOperation="destination-out";let t=(s,r,a)=>{e.beginPath(),e.moveTo(s,r+a*.9),e.bezierCurveTo(s-a*1.3,r,s-a*.7,r-a*.9,s,r-a*.3),e.bezierCurveTo(s+a*.7,r-a*.9,s+a*1.3,r,s,r+a*.9),e.fill()};for(let s=0;s<2;s++)for(let r=0;r<16;r++)t(16+r*32+(s?16:0),44+s*42,11);let n=new ui(i);return n.colorSpace=Et,n.wrapS=xn,n.anisotropy=4,n}function BM(){let i=new st,e=new jt({color:"#f4a7bf",roughness:.55}),t=new jt({map:FM(),alphaTest:.5,side:Ut,roughness:.55}),n=new st;n.scale.set(1.3,1,.85),i.add(n);let s=.1,r=new et(new ct(.11,.08,s,28,1,!0),t);r.position.y=s/2,n.add(r);let a=new et(new Ea(.08,24),e);a.rotation.x=-Math.PI/2,a.position.y=.002,n.add(a);let o=new et(new Bi(.11,.008,6,32),e);o.rotation.x=Math.PI/2,o.position.y=s,n.add(o);for(let c of[-1,1]){let h=new et(new Bi(.075,.009,6,18,Math.PI),e);h.position.set(0,s,.07*c),h.rotation.x=.25*c,i.add(h)}let l=new st;return l.position.y=.01,i.add(l),i.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),{g:i,goods:l}}function Rm({scene3d:i,hero:e,npcs:t,showToast:n,inShop:s}){let r=D=>document.getElementById(D),a=r("shop"),o=r("shop-btn"),l=r("basket-btn"),c=r("stop-btn"),h=t.find(D=>D.id==="shop"),u=BM();u.g.position.set(.21,.29,.24),u.g.rotation.y=Math.PI/2;let d=!1,f="browse",g=0,v=0,m={},p=()=>Object.values(m).reduce((D,I)=>D+I,0),_=()=>Object.entries(m).reduce((D,[I,U])=>D+tn[I].price*U,0),b=()=>h&&Math.hypot(e.root.position.x-h.x,e.root.position.z-h.z)<2.8;function y(){u.goods.clear();let D=0;for(let[I,U]of Object.entries(m))for(let w=0;w<U&&D<10;w++,D++){let C=tn[I],G=new et(C.sheet?new Gt(.06,.004,.08):new Gt(.045,.035,.04),new jt({color:C.color,roughness:.6}));G.position.set((D%3-1)*.06,.02+Math.floor(D/3)*.025,(D%2-.5)*.04),G.rotation.set(.2*(D%2-.5),D*.7,.15*(D%3-1)),u.goods.add(G)}}function A(){d=!0,e.root.add(u.g),y(),n("\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8\uB97C \uB4E4\uC5C8\uC5B4\uC694! \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"),M("browse")}function T(){d=!1,e.root.remove(u.g);for(let D of Object.keys(m))delete m[D];N(),n("\uC1FC\uD551\uC744 \uADF8\uB9CC\uB480\uC5B4\uC694. \uBC14\uAD6C\uB2C8\uB294 \uC81C\uC790\uB9AC\uC5D0 \uB450\uC5C8\uC5B4\uC694")}function x(){let D=p(),I=`<div class="cats">${[["browse","\u{1F6CD}\uFE0F \uC0C1\uD488"],["cart",`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${D}`],["mine","\u{1F392} \uB0B4 \uBB3C\uAC74"]].map(([w,C])=>`<button class="${f===w?"on":""}" data-tab="${w}">${C}</button>`).join("")}</div>`,U="";if(f==="browse")U=`<div class="cats sub">${Am.map((w,C)=>`<button class="${C===g?"on":""}" data-cat="${C}">${w}</button>`).join("")}</div>
      <div class="items">${Object.entries(tn).filter(([,w])=>w.cat===Am[g]).map(([w,C])=>`
        <div class="item"><span class="emo">${Td(w)}</span>
          <div class="info"><b>${C.name}</b>${C.desc?`<small>${C.desc}</small>`:""}
            ${C.sheet?`<div class="mini">${$s[C.sheet].stickers.map((G,z)=>`<img src="${si(C.sheet,z)}" alt="">`).join("")}</div>`:""}</div>
          <div class="buy"><span class="price">${Hc(C.price)}</span><button class="add" data-add="${w}">${m[w]?`\uB2F4\uC74C ${m[w]}`:"\uB2F4\uAE30"}</button></div>
        </div>`).join("")}</div>
      <div class="cart"><button class="go" data-tab="cart" ${D?"":"disabled"}>${D?`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 \uBCF4\uAE30 \xB7 ${D}\uAC1C \xB7 ${Hc(_())}`:"\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"}</button></div>`;else if(f==="cart"){let w=b();U=`<div class="items">${D?Object.entries(m).map(([C,G])=>`
        <div class="item"><span class="emo">${Td(C)}</span><div class="info"><b>${tn[C].name}</b><small>${Hc(tn[C].price)}</small></div>
          <span class="step"><button data-dec="${C}" aria-label="\uBE7C\uAE30">\u2212</button><b>${G}</b><button data-inc="${C}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join(""):'<p class="empty">\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694</p>'}</div>
      <div class="cart">
        <button class="go" data-act="pay" ${D&&w?"":"disabled"}>${D?w?`\u{1F4B3} ${Hc(_())} \uACC4\uC0B0\uD558\uAE30`:"\u{1F380} \uACC4\uC0B0\uB300 \uC9C1\uC6D0\uC5D0\uAC8C \uAC00\uBA74 \uACC4\uC0B0\uD560 \uC218 \uC788\uC5B4\uC694":"\uB2F4\uC740 \uC0C1\uD488\uC774 \uC5C6\uC5B4\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC1FC\uD551\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p></div>`}else{let w=Object.entries(Ln.items).filter(([,C])=>C>0);U=`<div class="items">${w.length?w.map(([C,G])=>`
        <div class="item"><span class="emo">${Td(C)}</span><div class="info"><b>${tn[C].name}</b><small>${G}\uAC1C \uAC00\uC9C0\uACE0 \uC788\uC5B4\uC694</small></div></div>`).join(""):'<p class="empty">\uC544\uC9C1 \uC0B0 \uBB3C\uAC74\uC774 \uC5C6\uC5B4\uC694</p>'}
        <p class="fine">\u{1F4D2} \uB2E4\uC774\uC5B4\uB9AC + \uC2A4\uD2F0\uCEE4 + \uBCFC\uD39C\uC774 \uC788\uC73C\uBA74 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694</p></div>`}a.innerHTML=`<div class="mhead"><div><b>\uC218\uC9D1\uC218\uC9D1 \uC18C\uD488\uC0F5</b><span>${d?"\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uACE0 \uACC4\uC0B0\uB300\uC5D0\uC11C \uACC4\uC0B0\uD574\uC694":"\uB0B4\uAC00 \uC0B0 \uBB3C\uAC74"}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>${I}${U}`}function M(D){f=D||f,x(),a.hidden=!1,a.offsetWidth,a.classList.add("on")}function N(){a.classList.remove("on"),setTimeout(()=>{a.classList.contains("on")||(a.hidden=!0)},250)}a.addEventListener("click",D=>{let I=D.target.closest("button");if(!I)return;let U=I.dataset;if(U.act==="close")return N();if(U.tab)return!d&&U.tab!=="mine"?void 0:(f=U.tab,x());if(U.cat)return g=+U.cat,x();if(U.add)return p()>=20?n("\uBC14\uAD6C\uB2C8\uAC00 \uAC00\uB4DD \uCC3C\uC5B4\uC694"):(m[U.add]=(m[U.add]||0)+1,y(),n(`\u{1F9FA} ${tn[U.add].name} \uB2F4\uC558\uC5B4\uC694`),x());if(U.inc)return m[U.inc]++,y(),x();if(U.dec)return--m[U.dec]<=0&&delete m[U.dec],y(),x();if(U.act==="pay"){for(let[w,C]of Object.entries(m)){Ln.items[w]=(Ln.items[w]||0)+C;let G=tn[w].sheet;G&&$s[G].stickers.forEach((z,X)=>{Ln.stickers[G+":"+X]=(Ln.stickers[G+":"+X]||0)+C}),delete m[w]}Gc(),y(),h&&(h.el.textContent="\uAC10\uC0AC\uD569\uB2C8\uB2E4! \uB610 \uB180\uB7EC \uC624\uC138\uC694 \u{1F380}",setTimeout(()=>h.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",5e3)),n("\u{1F4B3} \uACC4\uC0B0 \uC644\uB8CC! \uC0B0 \uBB3C\uAC74\uC740 \u{1F392} \uB0B4 \uBB3C\uAC74\uC5D0 \uC788\uC5B4\uC694"),f="mine",x()}}),o.addEventListener("click",D=>{A(),D.currentTarget.blur()}),l.addEventListener("click",D=>{M(p()?"cart":"browse"),D.currentTarget.blur()}),c.addEventListener("click",D=>{if(D.currentTarget.blur(),p()&&performance.now()-v>3e3)return v=performance.now(),c.textContent="\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uB0B4\uB824\uB193\uC544\uC694",n("\uB2F4\uC740 \uC0C1\uD488\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB0B4\uB824\uB193\uC544\uC694");T()}),addEventListener("keydown",D=>{D.code==="Escape"&&!a.hidden&&N()});let P=null;return{get open(){return!a.hidden},get shopping(){return d},openMine(){M("mine")},update(D,I){let U=s(D);if(o.hidden=d||!!I||!U,l.hidden=!d,c.hidden=!d,d){let C=`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${p()}`;l.textContent!==C&&(l.textContent=C),performance.now()-v>3e3&&c.textContent!=="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30"&&(c.textContent="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30")}u.g.visible=!I,d&&!I&&(e.arms[1].rotation.x=-.95,e.arms[1].rotation.z=.12);let w=b();w!==P&&(P=w,!a.hidden&&f==="cart"&&x())}}}async function Hr(i,e){let t=await new Promise(a=>i.toBlob(a,"image/jpeg",.92)),n=new File([t],e,{type:"image/jpeg"});if(matchMedia("(pointer:coarse)").matches&&navigator.canShare&&navigator.canShare({files:[n]}))try{return await navigator.share({files:[n],title:"\uC218\uC787\uD574\uD53C"}),"shared"}catch(a){if(a.name==="AbortError")return"cancel"}let r=document.createElement("a");return r.href=URL.createObjectURL(t),r.download=e,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},4e3),"downloaded"}var Gr=()=>{let i=new Date;return`${i.getFullYear()}.${String(i.getMonth()+1).padStart(2,"0")}.${String(i.getDate()).padStart(2,"0")}`};var Ed='"Gamja Flower", "Poor Story", cursive',Xc=6,zM={heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="25" height="25" patternUnits="userSpaceOnUse">
    <path d="M12.5 19 C3 12 5 5 9 5 C11 5 12.5 7 12.5 8 C12.5 7 14 5 16 5 C20 5 22 12 12.5 19z" fill="#ff8fb7"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="#ffd9e7" opacity=".88"/>
    <rect x="4" y="0" width="242" height="50" fill="url(#p)" opacity=".85"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#eaf7df"/><rect width="8" height="16" fill="#a9db8a" opacity=".55"/><rect width="16" height="8" fill="#a9db8a" opacity=".55"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="url(#p)" opacity=".9"/></svg>`},wd=i=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(zM[i]),Ys={page:0,pages:Array.from({length:Xc},()=>[])};try{let i=JSON.parse(localStorage.getItem("sh-diary"));i&&i.pages&&(Ys=i)}catch{}var Wc=()=>{try{return localStorage.setItem("sh-diary",JSON.stringify(Ys)),!0}catch{return!1}};function Cm({showToast:i}){let t=(L=>document.getElementById(L))("diary");t.innerHTML=`
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
    </div></div>`;let n=t.querySelector(".dpage"),s=t.querySelector(".dsel"),r=t.querySelector(".dinput"),a=r.querySelector("input"),o=t.querySelector(".dtabs"),l=t.querySelector(".dlist"),c=t.querySelector(".dfile"),h=t.querySelector(".dcrop"),u=h.querySelector(".dview"),d=u.querySelector("img"),f=h.querySelector(".dzoom"),g="stk",v=null,m=null,p=null,_=()=>Ys.pages[Ys.page];function b(){t.querySelector(".pg").textContent=`${Ys.page+1} / ${Xc}`;let L=n.clientWidth;n.innerHTML=_().map((F,q)=>{let J=`left:${F.x*100}%;top:${F.y*100}%;transform:translate(-50%,-50%) rotate(${F.r}deg)`;if(F.t==="x")return`<div class="de dt ${m===q?"on":""}" data-i="${q}" style="${J};color:${F.color};font-size:${F.s*L}px;max-width:${.84*L}px">${F.text.replace(/[<&]/g,ee=>ee==="<"?"&lt;":"&amp;")}</div>`;let H=F.t==="i"?F.src:F.t==="s"?si(...F.k.split(":").map((ee,le)=>le?+ee:ee)):wd(F.k);return`<img class="de${F.t==="i"?" dph":""} ${m===q?"on":""}" data-i="${q}" src="${H}" style="${J};width:${F.s*L}px" draggable="false" alt="">`}).join(""),s.hidden=m===null}function y(){let L=Object.keys(tn).filter(q=>tn[q].ink&&Vc(q)),F=Object.keys(tn).filter(q=>tn[q].tape&&Vc(q));if(!v&&L.length&&(v=L[0]),o.innerHTML=[["stk","\u{1F31F} \uC2A4\uD2F0\uCEE4"],["photo","\u{1F4F7} \uC0AC\uC9C4"],["pen","\u270F\uFE0F \uBCFC\uD39C"],["tape","\u{1F380} \uD14C\uC774\uD504"]].map(([q,J])=>`<button class="${g===q?"on":""}" data-tab="${q}">${J}</button>`).join(""),g==="stk"){let q=Object.entries(Ln.stickers).filter(([,J])=>J>0);l.innerHTML=q.length?q.map(([J,H])=>{let[ee,le]=J.split(":");return`<button class="dst" data-stk="${J}"><img src="${si(ee,+le)}" alt=""><i>${H}</i></button>`}).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uC2A4\uD2F0\uCEE4\uB97C \uC0AC \uC624\uBA74 \uC5EC\uAE30\uC11C \uB5BC\uC5B4 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F31F}</p>"}else g==="photo"?l.innerHTML='<button class="dpen" data-pick="1">\u{1F5BC}\uFE0F \uB0B4 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uC0AC\uC9C4 \uACE0\uB974\uAE30</button><p class="tip">\uACE0\uB978 \uC0AC\uC9C4\uC740 \uC798\uB77C\uC11C \uD06C\uAE30\uB97C \uB9DE\uCD98 \uB4A4 \uBD99\uC5EC\uC694</p>':g==="pen"?l.innerHTML=L.length?L.map(q=>`<button class="dpen ${v===q?"on":""}" data-pen="${q}"><span style="background:${tn[q].ink}"></span>${tn[q].name}</button>`).join("")+'<p class="tip">\uB2E4\uC774\uC5B4\uB9AC \uBE48 \uACF3\uC744 \uD1A1 \uB204\uB974\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694</p>':"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uC190\uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694 \u270F\uFE0F</p>":l.innerHTML=F.length?F.map(q=>`<button class="dtape" data-tape="${tn[q].tape}"><img src="${wd(tn[q].tape)}" alt=""></button>`).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504\uB97C \uC0AC \uC624\uBA74 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F380}</p>"}let A=L=>{_().push(L),m=_().length-1,Wc()||(_().pop(),m=null,i("\uB2E4\uC774\uC5B4\uB9AC \uC800\uC7A5 \uACF5\uAC04\uC774 \uAF49 \uCC3C\uC5B4\uC694. \uC0AC\uC9C4\uC744 \uBA87 \uC7A5 \uB5BC\uACE0 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694")),b()},T=null,x="1",M={s:1,x:0,y:0,base:1},N=()=>{let L=Math.min(300,innerWidth-80),F=x==="circle"?1:+x;return[L,L/F]};function P(){let[L,F]=N();u.style.width=L+"px",u.style.height=F+"px",u.classList.toggle("circle",x==="circle"),M.base=Math.max(L/T.width,F/T.height),D(),I()}function D(){let[L,F]=N(),q=M.base*M.s,J=T.width*q,H=T.height*q;M.x=Math.min(0,Math.max(L-J,M.x)),M.y=Math.min(0,Math.max(F-H,M.y))}function I(){let L=M.base*M.s;d.style.width=T.width*L+"px",d.style.transform=`translate(${M.x}px,${M.y}px)`}c.addEventListener("change",async()=>{let L=c.files&&c.files[0];if(L)try{let F=URL.createObjectURL(L),q=new Image;q.src=F,await q.decode(),T=q,d.src=F,x="1",M={s:1,x:0,y:0,base:1},f.value=1,h.querySelectorAll("[data-shape]").forEach(le=>le.classList.toggle("on",le.dataset.shape===x)),h.hidden=!1,P();let[J,H]=N(),ee=M.base;M.x=(J-T.width*ee)/2,M.y=(H-T.height*ee)/2,D(),I()}catch{i("\uC774 \uC0AC\uC9C4\uC740 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uB978 \uC0AC\uC9C4\uC744 \uACE8\uB77C \uC8FC\uC138\uC694")}}),f.addEventListener("input",()=>{let[L,F]=N(),q=M.base*M.s;M.s=+f.value;let J=M.base*M.s;M.x=L/2-(L/2-M.x)*J/q,M.y=F/2-(F/2-M.y)*J/q,D(),I()});let U=null;u.addEventListener("pointerdown",L=>{U={id:L.pointerId,x:L.clientX-M.x,y:L.clientY-M.y},u.setPointerCapture(L.pointerId),L.preventDefault()}),u.addEventListener("pointermove",L=>{!U||L.pointerId!==U.id||(M.x=L.clientX-U.x,M.y=L.clientY-U.y,D(),I())}),u.addEventListener("pointerup",()=>U=null),u.addEventListener("pointercancel",()=>U=null),u.addEventListener("wheel",L=>{L.preventDefault(),f.value=Math.min(4,Math.max(1,+f.value-L.deltaY*.002)),f.dispatchEvent(new Event("input"))},{passive:!1}),h.addEventListener("click",L=>{let F=L.target.closest("button");if(F){if(F.dataset.shape){x=F.dataset.shape,h.querySelectorAll("[data-shape]").forEach(q=>q.classList.toggle("on",q===F)),P();return}if(F.dataset.crop==="cancel"){h.hidden=!0;return}if(F.dataset.crop==="ok"){let[q,J]=N(),H=M.base*M.s,ee=x==="circle",le=ee?420:560,pe=Math.round(le*J/q),he=Math.round(le*.05),ge=document.createElement("canvas");ge.width=le+he*2,ge.height=pe+he*2;let Ne=ge.getContext("2d");ee?(Ne.fillStyle="#fff",Ne.beginPath(),Ne.arc(ge.width/2,ge.height/2,ge.width/2,0,7),Ne.fill(),Ne.save(),Ne.beginPath(),Ne.arc(ge.width/2,ge.height/2,le/2,0,7),Ne.clip()):(Ne.fillStyle="#fff",Ne.fillRect(0,0,ge.width,ge.height)),Ne.drawImage(T,-M.x/H,-M.y/H,q/H,J/H,he,he,le,pe),ee&&Ne.restore();let Ue=ee?ge.toDataURL("image/png"):ge.toDataURL("image/jpeg",.84);h.hidden=!0,A({t:"i",src:Ue,x:.5,y:.45,s:x==="0.75"?.4:.48,r:Math.round((Math.random()-.5)*10)})}}}),o.addEventListener("click",L=>{let F=L.target.closest("[data-tab]");F&&(g=F.dataset.tab,r.hidden=!0,y())}),l.addEventListener("click",L=>{let F=L.target.closest("button");if(F)if(F.dataset.stk){let q=F.dataset.stk;if(!(Ln.stickers[q]>0))return;Ln.stickers[q]--,Gc(),A({t:"s",k:q,x:.35+Math.random()*.3,y:.3+Math.random()*.4,s:.26,r:Math.round((Math.random()-.5)*24)}),y()}else F.dataset.pick?(c.value="",c.click()):F.dataset.pen?(v=F.dataset.pen,y()):F.dataset.tape&&A({t:"p",k:F.dataset.tape,x:.5,y:.2+Math.random()*.6,s:.55,r:Math.round((Math.random()-.5)*16)})});let w=null;n.addEventListener("pointerdown",L=>{let F=L.target.closest(".de"),q=n.getBoundingClientRect();if(F){m=+F.dataset.i;let J=_()[m];w={id:L.pointerId,ox:J.x-(L.clientX-q.left)/q.width,oy:J.y-(L.clientY-q.top)/q.height,node:F},n.setPointerCapture(L.pointerId),s.hidden=!1,n.querySelectorAll(".de.on").forEach(H=>H!==F&&H.classList.remove("on")),F.classList.add("on"),L.preventDefault();return}m=null,b(),g==="pen"&&v?(p={x:(L.clientX-q.left)/q.width,y:(L.clientY-q.top)/q.height},r.hidden=!1,a.value="",setTimeout(()=>a.focus(),30)):g==="pen"&&i("\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694")}),n.addEventListener("pointermove",L=>{if(!w||L.pointerId!==w.id)return;let F=n.getBoundingClientRect(),q=_()[m];q.x=Math.min(1,Math.max(0,(L.clientX-F.left)/F.width+w.ox)),q.y=Math.min(1,Math.max(0,(L.clientY-F.top)/F.height+w.oy)),w.node.style.left=q.x*100+"%",w.node.style.top=q.y*100+"%"});let C=L=>{w&&L.pointerId===w.id&&(w=null,Wc())};n.addEventListener("pointerup",C),n.addEventListener("pointercancel",C),r.addEventListener("submit",L=>{L.preventDefault();let F=a.value.trim();r.hidden=!0,a.blur(),!(!F||!p)&&A({t:"x",text:F,color:tn[v].ink,x:p.x,y:p.y,s:.07,r:Math.round((Math.random()-.5)*8)})}),t.addEventListener("click",async L=>{let F=L.target.closest("[data-act]");if(!F)return;let q=F.dataset.act,J=m!==null?_()[m]:null;if(q==="close")return O();if(q==="prev"||q==="next")return Ys.page=(Ys.page+(q==="next"?1:Xc-1))%Xc,m=null,r.hidden=!0,Wc(),b();if(q==="save")return z();J&&(q==="rotl"?J.r-=12:q==="rotr"?J.r+=12:q==="big"?J.s=Math.min(J.t==="x"?.2:.9,J.s*1.18):q==="small"?J.s=Math.max(J.t==="x"?.03:.08,J.s/1.18):q==="del"&&(_().splice(m,1),J.t==="s"&&(Ln.stickers[J.k]=(Ln.stickers[J.k]||0)+1,Gc(),y()),m=null),Wc(),b())});function G(L,F,q){L.fillStyle="#fffdf6",L.fillRect(0,0,F,q),L.fillStyle="#e9dcef";for(let J=60;J<q;J+=36)for(let H=90;H<F-20;H+=36)L.beginPath(),L.arc(H,J,2,0,7),L.fill();L.fillStyle="#f6e3ec",L.fillRect(0,0,54,q);for(let J=40;J<q;J+=60)L.fillStyle="#d8cde6",L.beginPath(),L.arc(27,J,9,0,7),L.fill()}async function z(){try{await document.fonts.load(`40px ${Ed}`)}catch{}let L=900,F=1200,q=document.createElement("canvas");q.width=L,q.height=F;let J=q.getContext("2d");G(J,L,F);for(let ee of _()){if(J.save(),J.translate(ee.x*L,ee.y*F),J.rotate(ee.r*Math.PI/180),ee.t==="x"){J.font=`${ee.s*L}px ${Ed}`,J.fillStyle=ee.color,J.textAlign="center",J.textBaseline="middle";let le=[],pe="";for(let ge of ee.text.split(/(\s+)/))pe&&J.measureText(pe+ge).width>L*.84?(le.push(pe.trim()),pe=ge.trimStart()):pe+=ge;le.push(pe.trim());let he=ee.s*L*1.05;le.forEach((ge,Ne)=>J.fillText(ge,0,(Ne-(le.length-1)/2)*he))}else{let le=new Image;le.src=ee.t==="i"?ee.src:ee.t==="s"?si(...ee.k.split(":").map((ge,Ne)=>Ne?+ge:ge)):wd(ee.k),await le.decode().catch(()=>{});let pe=ee.s*L,he=pe*(le.naturalHeight/le.naturalWidth||1);J.drawImage(le,-pe/2,-he/2,pe,he)}J.restore()}J.font=`28px ${Ed}`,J.fillStyle="#b9a6cf",J.textAlign="right",J.fillText(`\uC218\uC787\uD574\uD53C \uB2E4\uC774\uC5B4\uB9AC \xB7 ${Gr()}`,L-30,F-30);let H=await Hr(q,`suithappy-diary-${Date.now()}.jpg`);i(H==="downloaded"?"\u{1F4BE} \uB2E4\uC774\uC5B4\uB9AC\uB97C \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5\uD588\uC5B4\uC694":H==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}function X(){if(!Vc("diary"))return i("\u{1F4D2} \uC18C\uD488\uC0F5\uC5D0\uC11C \uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9\uC744 \uC0AC \uC624\uBA74 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694");t.hidden=!1,m=null,r.hidden=!0,y(),requestAnimationFrame(b)}function O(){t.hidden=!0,r.hidden=!0}return addEventListener("resize",()=>{t.hidden||b()}),addEventListener("keydown",L=>{L.code==="Escape"&&!t.hidden&&r.hidden&&O()}),{open:X,close:O,get isOpen(){return!t.hidden}}}var Pm={v:{label:"\u270C\uFE0F \uBE0C\uC774",arm:[-2.75,.32],tilt:.12},heart:{label:"\u{1FAF6} \uD558\uD2B8",arm:[-3.05,-.55],tilt:-.1},chin:{label:"\u{1F338} \uAF43\uBC1B\uCE68",arm:[-2,-.62],tilt:.2}};function Im({hero:i,mirrors:e,camera:t,player:n,showToast:s,renderNow:r}){let a=z=>document.getElementById(z),o=a("photo-btn"),l=a("photo-bar"),c=a("shot");l.innerHTML=`<div class="poses">${Object.entries(Pm).map(([z,X])=>`<button data-pose="${z}">${X.label}</button>`).join("")}</div>
    <div class="prow"><button class="pclose" data-act="exit">\uB2EB\uAE30</button><button class="shutter" data-act="shoot" aria-label="\uCC0D\uAE30"></button><span class="ptip">\uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uCC30\uCE75!</span></div>`;let h=z=>new jt({color:z,roughness:.4}),u=new st,d=new et(new Gt(.07,.13,.014),h("#9f8af0"));u.add(d);let f=new et(new ct(.006,.006,.004,10),h("#3b2f4a"));f.rotation.x=Math.PI/2,f.position.set(-.018,.048,.008),u.add(f),u.position.set(0,-.27,.035),u.rotation.x=Math.PI/2;let g=new st;g.position.set(.012,-.27,0);let v=h("#ffe3d0"),m=new st;g.add(m);for(let z of[-1,1]){let X=new et(new di(.011,.05,3,6),v);X.position.set(.012*z,-.04,0),X.rotation.z=.28*z,m.add(X)}let p=new st,_=new br;_.moveTo(0,-.05),_.bezierCurveTo(-.07,0,-.04,.05,0,.025),_.bezierCurveTo(.04,.05,.07,0,0,-.05),p.add(new et(new Na(_,{depth:.015,bevelEnabled:!1}),h("#ff6fa5"))),p.position.set(0,1.38,.05),p.scale.setScalar(1.8);let b=new st;for(let z=0;z<5;z++){let X=new et(new Kt(.03,8,6),h(z%2?"#ffd1e3":"#fff3b0"));X.position.set(Math.cos(z*1.256)*.05,0,Math.sin(z*1.256)*.05),b.add(X)}b.position.set(0,.92,.2);let y=!1,A=null,T="v",x=!1,M=0,N=0,P=new B;function D(){for(let z of e){let X=z.c.x-n.x,O=n.z-z.c.z;if(X>.6&&X<2.6&&Math.abs(O)<.85)return z}return null}function I(z){T=z,l.querySelectorAll("[data-pose]").forEach(X=>X.classList.toggle("on",X.dataset.pose===z)),m.visible=z==="v",p.visible=z==="heart",b.visible=z==="chin"}function U(){if(A=D(),!!A){y=!0,n.face=Math.PI/2,N=t.fov,t.fov=64,t.updateProjectionMatrix();try{document.fonts.load('40px "Gamja Flower"')}catch{}i.arms[0].add(u),i.arms[1].add(g),i.root.add(p),i.root.add(b),I(T),l.hidden=!1,o.hidden=!0,document.body.classList.add("photo"),s("\u{1F4F8} \uAC70\uC6B8\uC0F7 \uBAA8\uB4DC! \uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uB3D9\uADF8\uB780 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC694")}}function w(){y=!1,l.hidden=!0,document.body.classList.remove("photo"),N&&(t.fov=N,t.updateProjectionMatrix()),i.arms[0].remove(u),i.arms[1].remove(g),i.root.remove(p),i.root.remove(b),i.head.rotation.z=0}l.addEventListener("click",z=>{let X=z.target.closest("button");X&&(X.dataset.pose?I(X.dataset.pose):X.dataset.act==="exit"?w():X.dataset.act==="shoot"&&(M=1,G.applyPose(performance.now()/1e3),i.root.updateMatrixWorld(!0),G.camera(),x=!0,G.afterRender(r())))}),o.addEventListener("click",z=>{U(),z.currentTarget.blur()});let C=null;c.addEventListener("click",async z=>{let X=z.target.closest("button");if(X&&(X.dataset.act==="again"&&(c.hidden=!0),X.dataset.act==="save"&&C)){let O=await Hr(C,`suithappy-mirror-${Date.now()}.jpg`);s(O==="downloaded"?"\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":O==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}}),addEventListener("keydown",z=>{z.code==="Escape"&&y&&(c.hidden?w():c.hidden=!0)});let G={get active(){return y},update(z){o.hidden=y||!!z||!D()},applyPose(z){if(!y)return;let X=Pm[T];i.arms[0].rotation.x=-1.95,i.arms[0].rotation.z=-.55,i.arms[1].rotation.x=X.arm[0],i.arms[1].rotation.z=X.arm[1],i.head.rotation.z=X.tilt,i.head.rotation.y=0,p.rotation.y=Math.sin(z*2)*.3,p.position.y=1.38+Math.sin(z*3)*.02},camera(){if(!y)return!1;let z=n.face,X=Math.sin(z),O=Math.cos(z),L=O,F=-X;return t.position.set(n.x+X*.42-L*.1,.78,n.z+O*.42-F*.1),t.lookAt(A.c.x,.72,n.z*.7+A.c.z*.3),!0},afterRender(z){let X=document.getElementById("flash");if(M>0&&(M=Math.max(0,M-.08),X.style.opacity=M),!x)return;x=!1;let O=900,L=1200,F=document.createElement("canvas");F.width=O,F.height=L;let q=F.getContext("2d"),J=z.width,H=z.height,ee=3/4,le=J,pe=J/ee;pe>H&&(pe=H,le=H*ee),q.fillStyle="#fff",q.fillRect(0,0,O,L),q.drawImage(z,(J-le)/2,(H-pe)/2,le,pe,30,30,O-60,L-150),q.fillStyle="#ff8fb7",q.font='700 40px "Gamja Flower", cursive',q.textAlign="left",q.fillText("Soo it Happy \u{1F353} \uC218\uC9D1\uC218\uC9D1",40,L-62),q.fillStyle="#b9a6cf",q.font='30px "Gamja Flower", cursive',q.textAlign="right",q.fillText(Gr(),O-40,L-62),C=F,c.innerHTML=`<div class="shotcard"><img src="${F.toDataURL("image/jpeg",.85)}" alt="\uCC0D\uC740 \uAC70\uC6B8\uC0F7"><div class="srow"><button data-act="again">\uB2E4\uC2DC \uCC0D\uAE30</button><button class="go" data-act="save">\u{1F4F2} \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5</button></div></div>`,c.hidden=!1}};return G}var qc={title:"\uBB35\uCC0C\uBE60 \uC2B9\uB9AC \uCFE0\uD3F0",benefit:"\uC18C\uD488 10% \uD560\uC778",note:"\uC624\uD504\uB77C\uC778 \uB9E4\uC7A5 \uACC4\uC0B0\uB300\uC5D0\uC11C \uC9C1\uC6D0\uC5D0\uAC8C \uBCF4\uC5EC \uC8FC\uC138\uC694",days:30},Vr={muk:{emo:"\u270A",name:"\uBB35"},jji:{emo:"\u270C\uFE0F",name:"\uCC0C"},ppa:{emo:"\u{1F590}\uFE0F",name:"\uBE60"}},Lm={muk:"jji",jji:"ppa",ppa:"muk"},Dm=i=>i[Math.floor(Math.random()*i.length)],kM=i=>new Promise(e=>setTimeout(e,i));function Nm({showToast:i,npcs:e}){let t=I=>document.getElementById(I),n=e.find(I=>I.id==="shop"),s=(I,U=3500)=>{n&&(clearTimeout(s.t),n.el.textContent=I,s.t=setTimeout(()=>n.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",U))},r=t("mjp"),a=null,o=!1;function l(){a={me:0,boss:0,round:1,attacker:null,log:"\uAC00\uC704\uBC14\uC704\uBCF4\uB85C \uACF5\uACA9\uD560 \uC0AC\uB78C\uC744 \uC815\uD574\uC694!"},r.hidden=!1,h("?","?"),s("\uBB35\uCC0C\uBE60 \uD55C \uD310 \uD574\uC694! \uC0BC\uC138\uD310\uC774\uC5D0\uC694 \u270A\u270C\uFE0F\u{1F590}\uFE0F",5e3)}let c=()=>{r.hidden=!0,a=null};function h(I,U,w=!1){let C=a.attacker==="me"?"\uB0B4\uAC00 \uACF5\uACA9 \uC911 \u{1F525}":a.attacker==="boss"?"\uC0AC\uC7A5\uB2D8\uC774 \uACF5\uACA9 \uC911 \u{1F525}":"\uAC00\uC704\uBC14\uC704\uBCF4!";r.innerHTML=`<div class="gcard">
      <div class="ghead"><b>\u270A \uC0AC\uC7A5\uB2D8\uACFC \uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310</b><button class="x" data-g="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="gscore"><span>\uB098 <i>${a.me}</i></span><small>${a.round}\uD310\uC9F8 \xB7 2\uBC88 \uBA3C\uC800 \uC774\uAE30\uBA74 \uC2B9\uB9AC</small><span><i>${a.boss}</i> \uC0AC\uC7A5\uB2D8</span></div>
      <div class="garena ${w?"shake":""}"><div><em>${I}</em><small>\uB098</small></div><b>VS</b><div><em>${U}</em><small>\uC0AC\uC7A5\uB2D8</small></div></div>
      <p class="gturn">${C}</p><p class="glog">${a.log}</p>
      ${a.done?a.done==="win"?`<div class="gcoupon"><img alt="\uCFE0\uD3F0" src="${g().toDataURL("image/png")}"><button class="go" data-g="coupon">\u{1F4F2} \uCFE0\uD3F0 \uC774\uBBF8\uC9C0 \uC800\uC7A5</button><button class="gsub" data-g="close">\uB2EB\uAE30</button></div>`:'<button class="go" data-g="again">\u{1F501} \uB2E4\uC2DC \uB3C4\uC804</button>':`<div class="ghands">${Object.entries(Vr).map(([G,z])=>`<button data-h="${G}" ${o?"disabled":""}><em>${z.emo}</em>${z.name}</button>`).join("")}</div>`}
    </div>`}async function u(I){if(o||!a||a.done)return;o=!0;let U=Dm(Object.keys(Vr));for(let G of["muk","jji","ppa"])a.log=a.attacker?`${Vr[G].name}!`:["\uAC00\uC704","\uBC14\uC704","\uBCF4!"][Object.keys(Vr).indexOf(G)],h("\u270A","\u270A",!0),await kM(260);let w=Vr[I],C=Vr[U];if(!a.attacker)I===U?a.log=`\uB458 \uB2E4 ${w.name}! \uB2E4\uC2DC \uAC00\uC704\uBC14\uC704\uBCF4 \u{1F648}`:(a.attacker=Lm[I]===U?"me":"boss",a.log=a.attacker==="me"?"\uB0B4\uAC00 \uC774\uACBC\uC5B4\uC694! \uC774\uC81C \uB0B4\uAC00 \uACF5\uACA9, \uAC19\uC740 \uAC78 \uB0B4\uAC8C \uB9CC\uB4E4\uC5B4\uC694":"\uC0AC\uC7A5\uB2D8\uC774 \uC774\uACBC\uC5B4\uC694! \uC0AC\uC7A5\uB2D8 \uACF5\uACA9, \uB2E4\uB978 \uAC78 \uB0B4\uC57C \uBC84\uD168\uC694");else if(I===U){let G=a.attacker==="me";if(G?a.me++:a.boss++,a.log=G?`\uB458 \uB2E4 ${w.name}! \uB0B4\uAC00 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F389}`:`\uB458 \uB2E4 ${w.name}! \uC0AC\uC7A5\uB2D8\uC774 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F61D}`,s(G?"\uC557 \uC84C\uB2E4\u2026! \u{1F633}":"\uC81C\uAC00 \uC774\uACBC\uC8E0? \u{1F60E}"),a.attacker=null,a.round++,(a.me>=2||a.boss>=2)&&(a.done=a.me>=2?"win":"lose",a.log=a.done==="win"?`${a.me} : ${a.boss} \uC0BC\uC138\uD310 \uC2B9\uB9AC! \uCFE0\uD3F0\uC744 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}`:`${a.me} : ${a.boss} \uC544\uC27D\uAC8C \uC84C\uC5B4\uC694\u2026 \uB2E4\uC2DC \uB3C4\uC804\uD574 \uBCFC\uAE4C\uC694?`,s(a.done==="win"?"\uCD95\uD558\uD574\uC694! \uCFE0\uD3F0 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}":"\uB2E4\uC74C\uC5D0 \uB610 \uB3C4\uC804\uD574\uC694! \u{1F606}",6e3),a.done==="win")){f();try{localStorage.setItem("sh-coupon",JSON.stringify(d))}catch{}}}else a.attacker=Lm[I]===U?"me":"boss",a.log=`${w.name} vs ${C.name} \u2192 ${a.attacker==="me"?"\uACF5\uACA9\uAD8C\uC774 \uB098\uC5D0\uAC8C!":"\uACF5\uACA9\uAD8C\uC774 \uC0AC\uC7A5\uB2D8\uAED8!"}`;o=!1,h(w.emo,C.emo)}let d=null;function f(){let I="SH-"+Math.random().toString(36).slice(2,6).toUpperCase()+"-"+String(Date.now()%1e4).padStart(4,"0"),U=new Date(Date.now()+qc.days*864e5);d={code:I,issued:Gr(),until:`${U.getFullYear()}.${String(U.getMonth()+1).padStart(2,"0")}.${String(U.getDate()).padStart(2,"0")}`}}function g(){d||f();let I=1080,U=600,w=document.createElement("canvas");w.width=I,w.height=U;let C=w.getContext("2d"),G=C.createLinearGradient(0,0,I,U);G.addColorStop(0,"#ffe3ef"),G.addColorStop(1,"#e4f6ea"),C.fillStyle=G,C.fillRect(0,0,I,U),C.fillStyle="#ffffff66";for(let X=30;X<U;X+=60)for(let O=X/60%2?30:60;O<I;O+=60)C.beginPath(),C.arc(O,X,10,0,7),C.fill();C.fillStyle="#fffdfb",C.beginPath(),C.roundRect(40,40,I-80,U-80,36),C.fill(),C.setLineDash([14,10]),C.strokeStyle="#f48fb9",C.lineWidth=5,C.beginPath(),C.roundRect(56,56,I-112,U-112,28),C.stroke(),C.setLineDash([]),C.strokeStyle="#f3c6d8",C.lineWidth=3,C.beginPath(),C.moveTo(760,80),C.lineTo(760,U-80),C.stroke(),C.textAlign="left",C.fillStyle="#f27fae",C.font='700 40px "Gamja Flower", sans-serif',C.fillText("\uC218\uC9D1\uC218\uC9D1 \xD7 \uC218\uC787\uD574\uD53C",100,130),C.fillStyle="#4a3f66",C.font='900 34px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',C.fillText(qc.title+" \u270A\u270C\uFE0F\u{1F590}\uFE0F",100,190),C.fillStyle="#e0457b",C.font='900 84px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',C.fillText(qc.benefit,100,310),C.fillStyle="#7a6c99",C.font='600 26px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',C.fillText(qc.note,100,380),C.fillText(`\uBC1C\uAE09 ${d.issued} \xB7 ${d.until}\uAE4C\uC9C0 \xB7 1\uC778 1\uD68C`,100,420),C.fillStyle="#4a3f66",C.font="800 30px ui-monospace, Consolas, monospace",C.fillText(d.code,100,480);let z=new Image;return z.src=si("staff",1),z.complete&&C.drawImage(z,790,150,240,240),C.textAlign="center",C.fillStyle="#f27fae",C.font='700 34px "Gamja Flower", sans-serif',C.fillText("\uC0AC\uC7A5\uB2D8\uC744 \uC774\uACBC\uC5B4\uC694!",910,440),w}{let I=new Image;I.src=si("staff",1)}r.addEventListener("click",async I=>{let U=I.target.closest("button");if(!U)return;if(U.dataset.h)return u(U.dataset.h);let w=U.dataset.g;if(w==="close"&&c(),w==="again"&&l(),w==="coupon"){let C=await Hr(g(),`suithappy-coupon-${d.code}.jpg`);i(C==="downloaded"?"\u{1F4BE} \uCFE0\uD3F0\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":C==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}});let v=t("spot"),m=Array.from({length:10},(I,U)=>`spot/${U+1}.jpg`),p=null,_=[],b=null,y=Object.keys($s).flatMap(I=>$s[I].stickers.map((U,w)=>[I,w]));function A(I){b=I||null,_.length||(_=m.slice().sort(()=>Math.random()-.5)),v.hidden=!1,x()}function T(){v.hidden=!0;let I=b;b=null,p=null,I&&I(!1)}async function x(){_.length||(_=m.slice().sort(()=>Math.random()-.5));let I=_.pop();v.innerHTML=`<div class="spwrap"><div class="ghead"><b>\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30</b><span class="spcount">\uBD88\uB7EC\uC624\uB294 \uC911\u2026</span><button class="gsub" data-s="hint">\u{1F4A1} \uD78C\uD2B8</button><button class="x" data-s="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="sppair"><div class="spimg"><canvas></canvas><small>\uC6D0\uB798 \uADF8\uB9BC</small></div><div class="spimg"><canvas></canvas><small>\uB2E4\uB978 \uACF3 5\uAC1C\uB97C \uCC3E\uC544\uC694</small></div></div>
      <p class="spmsg">${b?"\uB2E4 \uCC3E\uC73C\uBA74 \uC8FC\uBB38\uD55C \uBA54\uB274\uAC00 \uB098\uC640\uC694! \u2615":"\uB450 \uADF8\uB9BC \uC911 \uC544\uBB34 \uCABD\uC774\uB098 \uB2E4\uB978 \uACF3\uC744 \uB20C\uB7EC\uC694"}</p></div>`;let U=new Image;U.src=I,await U.decode();let[w,C]=v.querySelectorAll("canvas"),G=U.naturalWidth,z=U.naturalHeight;for(let X of[w,C])X.width=G,X.height=z,X.getContext("2d").drawImage(U,0,0);p={W:G,H:z,ca:w,cb:C,base:w.getContext("2d").getImageData(0,0,G,z),diffs:M(C,G,z),found:0,miss:0},N(),P()}function M(I,U,w){let C=I.getContext("2d"),G=[],z=["hue","flip","sticker","erase","swap","hue","sticker"].sort(()=>Math.random()-.5),X=0;for(;G.length<5&&X++<400;){let O=Math.round(U*(.08+Math.random()*.05)),L=Math.round(U*.05+Math.random()*(U*.9-O)),F=Math.round(w*.06+Math.random()*(w*.88-O));if(G.some(H=>Math.abs(H.x-L)<(H.s+O)/2+30&&Math.abs(H.y-F)<(H.s+O)/2+30))continue;let q=z[G.length],J={x:L,y:F,s:O,k:q,hit:!1};if(q==="hue"||q==="swap"){let H=C.getImageData(L,F,O,O),ee=H.data,le=(100+Math.random()*140)*Math.PI/180,pe=Math.cos(le),he=Math.sin(le),ge=[.299+.701*pe+.168*he,.587-.587*pe+.33*he,.114-.114*pe-.497*he,.299-.299*pe-.328*he,.587+.413*pe+.035*he,.114-.114*pe+.292*he,.299-.3*pe+1.25*he,.587-.588*pe-1.05*he,.114+.886*pe-.203*he];for(let Ne=0;Ne<ee.length;Ne+=4){let Ue=ee[Ne],We=ee[Ne+1],$e=ee[Ne+2];if(q==="swap"){ee[Ne]=$e,ee[Ne+2]=Ue;continue}ee[Ne]=ge[0]*Ue+ge[1]*We+ge[2]*$e,ee[Ne+1]=ge[3]*Ue+ge[4]*We+ge[5]*$e,ee[Ne+2]=ge[6]*Ue+ge[7]*We+ge[8]*$e}C.putImageData(H,L,F)}else if(q==="flip"){let H=document.createElement("canvas");H.width=H.height=O,H.getContext("2d").drawImage(I,L,F,O,O,0,0,O,O),C.save(),C.translate(L+O,F),C.scale(-1,1),C.drawImage(H,0,0),C.restore(),Math.random()<.5&&(C.save(),C.translate(L,F+O),C.scale(1,-1),C.drawImage(H,0,0),C.restore())}else if(q==="sticker"){let H=new Image,[ee,le]=Dm(y);H.src=si(ee,le),H.decode().then(()=>C.drawImage(H,L,F,O,O)).catch(()=>{})}else{let H=L+O+12<U-O?L+O+12:L-O-12,ee=document.createElement("canvas");ee.width=ee.height=O;let le=ee.getContext("2d");le.drawImage(I,H,F,O,O,0,0,O,O);let pe=le.createRadialGradient(O/2,O/2,O*.3,O/2,O/2,O*.5);pe.addColorStop(0,"#000"),pe.addColorStop(1,"rgba(0,0,0,0)"),le.globalCompositeOperation="destination-in",le.fillStyle=pe,le.fillRect(0,0,O,O),C.drawImage(ee,L,F)}G.push(J)}return G}function N(){for(let I of[p.ca,p.cb]){let U=I.getContext("2d");for(let w of p.diffs)w.hit&&(U.lineWidth=Math.max(4,p.W/200),U.strokeStyle="#ff3d8b",U.shadowColor="#fff",U.shadowBlur=6,U.beginPath(),U.arc(w.x+w.s/2,w.y+w.s/2,w.s*.72,0,7),U.stroke(),U.shadowBlur=0)}}let P=()=>{let I=v.querySelector(".spcount");I&&p&&(I.textContent=`\uCC3E\uC740 \uACF3 ${p.found} / 5`)};v.addEventListener("click",I=>{let U=I.target.closest("button");if(U&&U.dataset.s==="close")return T();if(U&&U.dataset.s==="next")return x();if(U&&U.dataset.s==="done"){let L=b;b=null,v.hidden=!0,p=null,L&&L(!0);return}if(U&&U.dataset.s==="hint"&&p){let L=p.diffs.find(F=>!F.hit);if(!L)return;for(let F of[p.ca,p.cb]){let q=F.getBoundingClientRect(),J=document.createElement("div");J.className="sphint";let H=q.width/p.W;Object.assign(J.style,{left:q.left+(L.x-L.s*.3)*H+"px",top:q.top+(L.y-L.s*.3)*H+"px",width:L.s*1.6*H+"px",height:L.s*1.6*H+"px"}),document.body.appendChild(J),setTimeout(()=>J.remove(),1400)}return}let w=I.target.closest("canvas");if(!w||!p)return;let C=w.getBoundingClientRect(),G=(I.clientX-C.left)*p.W/C.width,z=(I.clientY-C.top)*p.H/C.height,X=p.W*.02,O=p.diffs.find(L=>!L.hit&&G>L.x-X&&G<L.x+L.s+X&&z>L.y-X&&z<L.y+L.s+X);if(O)O.hit=!0,p.found++,N(),P(),p.found===5&&(v.querySelector(".spmsg").innerHTML=`\u{1F389} \uB2E4 \uCC3E\uC558\uC5B4\uC694! ${p.miss?`(\uD5DB\uD074\uB9AD ${p.miss}\uBC88)`:"\uD55C \uBC88\uB3C4 \uC548 \uD2C0\uB838\uC5B4\uC694!"}
          ${b?'<button class="go" data-s="done">\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30</button>':'<button class="go" data-s="next">\uB2E4\uC74C \uADF8\uB9BC \u25B6</button>'}`);else{p.miss++;let L=I.clientX,F=I.clientY,q=document.createElement("div");q.className="spmiss",q.textContent="\u2715",Object.assign(q.style,{left:L+"px",top:F+"px"}),document.body.appendChild(q),setTimeout(()=>q.remove(),600)}}),addEventListener("keydown",I=>{I.code==="Escape"&&(r.hidden?v.hidden||T():c())});let D=I=>n&&Math.hypot(I.x-n.x,I.z-n.z)<2.8;return{get open(){return!r.hidden||!v.hidden},mjp:l,spot:A,update(I,U){t("mjp-btn").hidden=!D(I)||!!U||!r.hidden}}}function HM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new ui(i);return n.colorSpace=Et,n}function Um({scene3d:i,data:e,storeRoot:t,isTouch:n}){let s=e.ceiling||2.9,r=e.floor.map(X=>X[0]),a=e.floor.map(X=>X[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=(X,O)=>{let L=!1,F=e.floor;for(let q=0,J=F.length-1;q<F.length;J=q++){let[H,ee]=F[q],[le,pe]=F[J];ee>O!=pe>O&&X<(le-H)*(O-ee)/(pe-ee)+H&&(L=!L)}return L},c=HM(),h=n?140:260,u=new Float32Array(h*3),d=new Float32Array(h*3),f=new Float32Array(h),g=["#ffffff","#ffd6e7","#d9f5e6","#e3dcff","#fff1c9"].map(X=>new Ce(X));for(let X=0;X<h;X++){let O,L;do O=o[0]+Math.random()*(o[2]-o[0]),L=o[1]+Math.random()*(o[3]-o[1]);while(!l(O,L));u.set([O,.3+Math.random()*(s-.5),L],X*3);let F=g[X%g.length];d.set([F.r,F.g,F.b],X*3),f[X]=Math.random()*100}let v=new Pt;v.setAttribute("position",new Ht(u,3)),v.setAttribute("color",new Ht(d,3));let m=new ds(v,new Oi({size:.07,map:c,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Xi,sizeAttenuation:!0}));m.frustumCulled=!1,m.renderOrder=5,i.add(m);let p=u.slice(),_=[],b=e.floor,y=(o[0]+o[2])/2,A=(o[1]+o[3])/2;for(let X=0;X<b.length;X++){let[O,L]=b[X],[F,q]=b[(X+1)%b.length],J=Math.hypot(F-O,q-L);if(J<1.2)continue;let H=-(q-L)/J,ee=(F-O)/J,le=(O+F)/2,pe=(L+q)/2;l(le+H*.2,pe+ee*.2)||(H=-H,ee=-ee);let he=Math.max(1,Math.round(J/1.15)),ge=6;for(let Ne=0;Ne<he;Ne++)for(let Ue=0;Ue<ge;Ue++){let We=(Ne+Ue/ge)/he,$e=Ue/ge,oe=O+(F-O)*We+H*.07,ve=L+(q-L)*We+ee*.07,ye=s-.14-Math.sin($e*Math.PI)*.16;l(oe,ve)&&_.push([oe,ye,ve])}}let T=["#fff4d6","#ffc2da","#c9f2dc","#fff4d6","#d9ccff"].map(X=>new Ce(X)),x=new Yt({color:new Ce(2.8,2.8,2.8),toneMapped:!1}),M=new Ui(new Kt(.032,10,8),x,_.length),N=new Xe,P=new Ce;_.forEach(([X,O,L],F)=>{N.makeTranslation(X,O,L),M.setMatrixAt(F,N),M.setColorAt(F,T[F%T.length])}),M.frustumCulled=!1,i.add(M);let D=new Pt().setFromPoints(_.flatMap((X,O)=>O&&Math.hypot(X[0]-_[O-1][0],X[2]-_[O-1][2])<.4?[new B(..._[O-1]),new B(...X)]:[]));i.add(new Ds(D,new us({color:"#b7a6c9",transparent:!0,opacity:.6})));let I=new Pt;I.setAttribute("position",new Ht(new Float32Array(_.flat()),3));let U=new Float32Array(_.length*3);_.forEach((X,O)=>{let L=T[O%T.length];U.set([L.r,L.g,L.b],O*3)}),I.setAttribute("color",new Ht(U,3));let w=new ds(I,new Oi({size:.3,map:c,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:Xi}));w.frustumCulled=!1,i.add(w);let C=[];t.updateMatrixWorld(!0),t.traverse(X=>{if(X.isMesh&&X.material&&X.material.name==="light"){let O=new cn().setFromObject(X);C.push(O.getCenter(new B).setY(O.min.y))}});let G=new wt({transparent:!0,depthWrite:!1,blending:Xi,side:Ut,uniforms:{uColor:{value:new Ce("#fff3df")},uStrength:{value:.045}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:"uniform vec3 uColor; uniform float uStrength; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 2.5); float a = uStrength * smoothstep(0.0, 1.0, vY) * edge; gl_FragColor = vec4(uColor * a, a); }"}),z=Math.max(1,Math.ceil(C.length/(n?6:10)));return C.filter((X,O)=>O%z===0).forEach(X=>{let O=X.y-.02,L=new et(new ct(.22,.7,O,24,1,!0),G);L.position.set(X.x,O/2,X.z),L.renderOrder=4,i.add(L)}),{update(X,O){let L=v.attributes.position.array;for(let F=0;F<h;F++){let q=f[F],J=F*3;L[J]=p[J]+Math.sin(O*.21+q)*.25,L[J+1]=p[J+1]+Math.sin(O*.17+q*1.3)*.18,L[J+2]=p[J+2]+Math.cos(O*.19+q*.7)*.25}v.attributes.position.needsUpdate=!0,m.material.opacity=.65+Math.sin(O*1.3)*.15;for(let F=0;F<6;F++){let q=Math.floor(Math.random()*_.length);P.copy(T[q%T.length]).multiplyScalar(.55+Math.random()*.9),M.setColorAt(q,P)}M.instanceColor.needsUpdate=!0}}}var $c=class extends Is{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Gt;e.deleteAttribute("uv");let t=new jt({side:hn}),n=new jt,s=new Os(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new et(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ui(e,n,6),o=new Nt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new et(e,Wr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new et(e,Wr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new et(e,Wr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new et(e,Wr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new et(e,Wr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new et(e,Wr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Wr(i){return new Fa({color:0,emissive:16777215,emissiveIntensity:i})}var Mi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var An=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},GM=new Vi(-1,1,1,-1,0,1),Ad=class extends Pt{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}},VM=new Ad,Si=class{constructor(e){this._mesh=new et(VM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xr=class extends An{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=un.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Si(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _o=class extends An{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Yc=class extends An{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Kc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ot}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xr(Mi),this.copyPass.material.blending=an,this.timer=new Xa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_o!==void 0&&(a instanceof _o?n=!0:a instanceof Yc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var jc=class extends An{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ce}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var vo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new fe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Xe},cameraProjectionMatrixInverse:{value:new Xe},cameraWorldMatrix:{value:new Xe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

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
		}`},yo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Zc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Om(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=WM(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new B(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new qn(s,e,e);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}function WM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Mo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Rd(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new fe},cameraProjectionMatrixInverse:{value:new Xe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Rd(i,e,t){let n=XM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function XM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new B(Math.cos(r),Math.sin(r),a))}return n}var Jc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,v=t-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let _=g-m+h,b=v-p+h,y=g-1+2*h,A=v-1+2*h,T=l&255,x=c&255,M=this.perm[T+this.perm[x]]%12,N=this.perm[T+m+this.perm[x+p]]%12,P=this.perm[T+1+this.perm[x+1]]%12,D=.5-g*g-v*v;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[M],g,v));let I=.5-_*_-b*b;I<0?s=0:(I*=I,s=I*I*this._dot(this.grad3[N],_,b));let U=.5-y*y-A*A;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[P],y,A)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,_=e-v,b=t-m,y=n-p,A,T,x,M,N,P;_>=b?b>=y?(A=1,T=0,x=0,M=1,N=1,P=0):_>=y?(A=1,T=0,x=0,M=1,N=0,P=1):(A=0,T=0,x=1,M=1,N=0,P=1):b<y?(A=0,T=0,x=1,M=0,N=1,P=1):_<y?(A=0,T=1,x=0,M=0,N=1,P=1):(A=0,T=1,x=0,M=1,N=1,P=0);let D=_-A+f,I=b-T+f,U=y-x+f,w=_-M+2*f,C=b-N+2*f,G=y-P+2*f,z=_-1+3*f,X=b-1+3*f,O=y-1+3*f,L=h&255,F=u&255,q=d&255,J=this.perm[L+this.perm[F+this.perm[q]]]%12,H=this.perm[L+A+this.perm[F+T+this.perm[q+x]]]%12,ee=this.perm[L+M+this.perm[F+N+this.perm[q+P]]]%12,le=this.perm[L+1+this.perm[F+1+this.perm[q+1]]]%12,pe=.6-_*_-b*b-y*y;pe<0?s=0:(pe*=pe,s=pe*pe*this._dot3(this.grad3[J],_,b,y));let he=.6-D*D-I*I-U*U;he<0?r=0:(he*=he,r=he*he*this._dot3(this.grad3[H],D,I,U));let ge=.6-w*w-C*C-G*G;ge<0?a=0:(ge*=ge,a=ge*ge*this._dot3(this.grad3[ee],w,C,G));let Ne=.6-z*z-X*X-O*O;return Ne<0?o=0:(Ne*=Ne,o=Ne*Ne*this._dot3(this.grad3[le],z,X,O)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,v=(e+t+n+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),_=Math.floor(n+v),b=Math.floor(s+v),y=(m+p+_+b)*c,A=m-y,T=p-y,x=_-y,M=b-y,N=e-A,P=t-T,D=n-x,I=s-M,U=N>P?32:0,w=N>D?16:0,C=P>D?8:0,G=N>I?4:0,z=P>I?2:0,X=D>I?1:0,O=U+w+C+G+z+X,L=a[O][0]>=3?1:0,F=a[O][1]>=3?1:0,q=a[O][2]>=3?1:0,J=a[O][3]>=3?1:0,H=a[O][0]>=2?1:0,ee=a[O][1]>=2?1:0,le=a[O][2]>=2?1:0,pe=a[O][3]>=2?1:0,he=a[O][0]>=1?1:0,ge=a[O][1]>=1?1:0,Ne=a[O][2]>=1?1:0,Ue=a[O][3]>=1?1:0,We=N-L+c,$e=P-F+c,oe=D-q+c,ve=I-J+c,ye=N-H+2*c,Ie=P-ee+2*c,we=D-le+2*c,Ke=I-pe+2*c,Fe=N-he+3*c,Ye=P-ge+3*c,rt=D-Ne+3*c,ut=I-Ue+3*c,V=N-1+4*c,At=P-1+4*c,nt=D-1+4*c,re=I-1+4*c,Y=m&255,ue=p&255,ce=_&255,Se=b&255,R=o[Y+o[ue+o[ce+o[Se]]]]%32,S=o[Y+L+o[ue+F+o[ce+q+o[Se+J]]]]%32,$=o[Y+H+o[ue+ee+o[ce+le+o[Se+pe]]]]%32,ae=o[Y+he+o[ue+ge+o[ce+Ne+o[Se+Ue]]]]%32,Q=o[Y+1+o[ue+1+o[ce+1+o[Se+1]]]]%32,de=.6-N*N-P*P-D*D-I*I;de<0?h=0:(de*=de,h=de*de*this._dot4(r[R],N,P,D,I));let xe=.6-We*We-$e*$e-oe*oe-ve*ve;xe<0?u=0:(xe*=xe,u=xe*xe*this._dot4(r[S],We,$e,oe,ve));let ne=.6-ye*ye-Ie*Ie-we*we-Ke*Ke;ne<0?d=0:(ne*=ne,d=ne*ne*this._dot4(r[$],ye,Ie,we,Ke));let ie=.6-Fe*Fe-Ye*Ye-rt*rt-ut*ut;ie<0?f=0:(ie*=ie,f=ie*ie*this._dot4(r[ae],Fe,Ye,rt,ut));let me=.6-V*V-At*At-nt*nt-re*re;return me<0?g=0:(me*=me,g=me*me*this._dot4(r[Q],V,At,nt,re)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var qr=class i extends An{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Om(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Dt(this.width,this.height,{type:Ot,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new wt({defines:Object.assign({},vo.defines),uniforms:un.clone(vo.uniforms),vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,blending:an,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Oa,this.normalMaterial.blending=an,this.pdMaterial=new wt({defines:Object.assign({},Mo.defines),uniforms:un.clone(Mo.uniforms),vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new wt({defines:Object.assign({},yo.defines),uniforms:un.clone(yo.uniforms),vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,blending:an}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new wt({uniforms:un.clone(Mi.uniforms),vertexShader:Mi.vertexShader,fragmentShader:Mi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:$a,blendDst:zs,blendEquation:$n,blendSrcAlpha:qa,blendDstAlpha:zs,blendEquationAlpha:$n}),this.blendMaterial=new wt({uniforms:un.clone(Zc.uniforms),vertexShader:Zc.vertexShader,fragmentShader:Zc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ol,blendSrc:$a,blendDst:zs,blendEquation:$n,blendSrcAlpha:qa,blendDstAlpha:zs,blendEquationAlpha:$n}),this._fsQuad=new Si(null),this._originalClearColor=new Ce,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new ei;s.format=ni,s.type=qi,this.normalRenderTarget=new Dt(this.width,this.height,{minFilter:Lt,magFilter:Lt,type:Ot,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Rd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Jc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new qn(s,e,e,In,vn);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}};qr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var So={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Qc=class extends An{constructor(){super(),this.isOutputPass=!0,this.uniforms=un.clone(So.uniforms),this.material=new Er({name:So.name,uniforms:this.uniforms,vertexShader:So.vertexShader,fragmentShader:So.fragmentShader}),this._fsQuad=new Si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ya?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ks?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ja&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var $r=class i extends An{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(r,a,{type:Ot,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Dt(r,a,{type:Ot,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Dt(r,a,{type:Ot,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Fm;this.highPassUniforms=un.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=un.clone(Mi.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:Mi.vertexShader,fragmentShader:Mi.fragmentShader,premultipliedAlpha:!0,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ce,this._oldClearAlpha=1,this._basic=new Yt,this._fsQuad=new Si(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new wt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};$r.BlurDirectionX=new fe(1,0);$r.BlurDirectionY=new fe(0,1);var bo=class i extends et{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Ce(t.color):new Ce(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new On,u=new B,d=new B,f=new B,g=new Xe,v=new B(0,0,-1),m=new Mt,p=new B,_=new B,b=new Mt,y=new Xe,A=new Dt(r,a,{samples:c,type:Ot}),T=new wt({name:l.name!==void 0?l.name:"unspecified",uniforms:un.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=A.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=y,this.material=T,this.onBeforeRender=function(x,M,N){let P=this.getReflectionCamera(N);if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(N.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(d,f),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(d),g.extractRotation(N.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(f),_.subVectors(d,v),_.reflect(u).negate(),_.add(d),P.position.copy(p),P.up.set(0,1,0),P.up.applyMatrix4(g),P.up.reflect(u),P.lookAt(_),P.far=N.far,P.updateMatrixWorld(),P.projectionMatrix.copy(N.projectionMatrix),P.projectionMatrix.elements[8]*=-1,P.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(P.projectionMatrix),y.multiply(P.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(P.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let I=P.projectionMatrix;P.isOrthographicCamera?(b.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],b.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],b.z=-N.far,b.w=1):(b.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],b.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],b.z=-1,b.w=(1+I.elements[10])/I.elements[14]),m.multiplyScalar(2/m.dot(b)),I.elements[2]=m.x,I.elements[6]=m.y,P.isOrthographicCamera?(I.elements[10]=m.z-o,I.elements[14]=m.w-1):(I.elements[10]=m.z+1-o,I.elements[14]=m.w),n.visible=!1;let U=x.getRenderTarget(),w=x.xr.enabled,C=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(A),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(M,P),x.xr.enabled=w,x.shadowMap.autoUpdate=C,x.setRenderTarget(U);let G=N.viewport;G!==void 0&&x.state.viewport(G),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let M=this._reflectionCameras.get(x);return M===void 0&&(M=x.clone(),this._reflectionCameras.set(x,M)),M}}};bo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var bt=i=>document.getElementById(i),qe={canvas:bt("room"),overlay:bt("overlay"),bar:bt("bar"),pct:bt("pct"),enter:bt("enter"),where:bt("where"),map:bt("map"),toast:bt("toast"),joy:bt("joy"),knob:bt("knob"),err:bt("err")},Gn=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Gn);var Wt;try{Wt=new Ac({canvas:qe.canvas,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(i){throw qe.err.hidden=!1,qe.err.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C 3D(WebGL)\uB97C \uCF24 \uC218 \uC5C6\uC5B4\uC694. \uCD5C\uC2E0 Chrome\xB7Safari\xB7Edge\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.",i}Wt.setPixelRatio(Math.min(window.devicePixelRatio||1,Gn?1.5:1.75));Wt.outputColorSpace=Et;Wt.toneMapping=ks;Wt.toneMappingExposure=1.05;Wt.shadowMap.enabled=!0;Wt.shadowMap.type=Bs;Wt.shadowMap.autoUpdate=!1;var Vt=new Is,qm=new Ce("#e9e2fb");Vt.background=qm;Vt.fog=new ga(qm,13,32);var dn=new Zt(66,1,.05,60),qM=new Fr(Wt);Vt.environment=qM.fromScene(new $c,.04).texture;Vt.environmentIntensity=.55;Vt.add(new Ha("#fffafd","#e3d2ec",.7));var ai=new ps("#fff6ec",2.4);ai.position.set(-3.2,9,2.4);ai.target.position.set(0,0,.4);Vt.add(ai.target);ai.castShadow=!0;ai.shadow.mapSize.set(Gn?2048:3072,Gn?2048:3072);Object.assign(ai.shadow.camera,{left:-10.5,right:10.5,top:10.5,bottom:-10.5,near:1,far:22});ai.shadow.bias=-4e-4;ai.shadow.normalBias=.025;ai.shadow.radius=5;ai.shadow.blurSamples=12;var $m=new ps("#f1e9ff",.55);$m.position.set(2.5,4,-3);Vt.add($m);Vt.add(ai);var Ym=bm(),Ld={floor:"#e4d6d8",mint:"#cbeebb",trim:"#b2dca0",ceiling:"#f8f3fb",pink:"#f6b7d2",pinkChair:"#f2a6c9",mintChair:"#a9dcbf",shelf:"#fff3e3",blue:"#a9d4f5",white:"#fbf8f2",steel:"#b3b8c6",glass:"#bfe3f0",curtain:"#f2a9c8",greenDrape:"#b9d6a4",greenCloth:"#b7df8f",pegboard:"#f1dfbd",paperA:"#f2b0c2",paperB:"#a9d0ec",paperC:"#f3d08f",paperD:"#c3dca0",paperE:"#cdbcf0",light:"#fffbe9",handle:"#8fb98a",displayWire:"#e6def2",acrylicEdge:"#c9e6f2",labelInk:"#8a78b8",pinkBasket:"#e7a2c4",meshTray:"#cdc4e6",paperWhite:"#fffaf7",line:"#c8b9c9",wood:"#e6bf93",woodDark:"#c99c6e",plushCream:"#fbecc9",plushPink:"#f8b9d3",plushBlue:"#bcdcf6",clothWhite:"#fffbf6"},Cd=new Map;function Dd(i){if(Cd.has(i.name))return Cd.get(i.name);let e=Ld[i.name]?new Ce(Ld[i.name]):i.color.clone(),t=new jt({color:e,roughness:.72,metalness:0,side:Ut});return(i.name==="steel"||i.name==="handle")&&(t.metalness=.45,t.roughness=.35),i.name==="floor"&&(t.roughness=.5),i.name==="acrylicEdge"&&(t.roughness=.25),i.name==="mirror"&&(t.metalness=1,t.roughness=.04,t.color=new Ce("#eef3f7"),t.envMapIntensity=1.4),i.name==="leafGreen"&&(t.color=new Ce("#86cc78")),t.name=i.name,i.name==="glass"&&(t.transparent=!0,t.opacity=.32,t.depthWrite=!1,t.roughness=.05,t.metalness=.1),i.name==="light"&&(t.emissive=new Ce("#fff6e0"),t.emissiveIntensity=2.6),i.name==="ceiling"&&(t.emissive=new Ce("#f3ecf7"),t.emissiveIntensity=.55),(i.name==="curtain"||i.name==="greenCloth")&&(t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= 0.88 + 0.12 * te.x * te.y;`)}),Cd.set(i.name,t),t}var $M=1.32,YM=.2,Bm=2.4,Ee={x:0,z:0,yaw:0,pitch:-.06,face:0},Ji=!0,xs=2.4,Km=2.7,nh=-.5,Nd=null;try{Nd=localStorage.getItem("sh-look")}catch{}var Sn=md(Ym,{look:Xs.includes(Nd)?Nd:Xs[Math.floor(Math.random()*Xs.length)]});Vt.add(Sn.root);var xt=null,Ao=!1,Zr=!1,zm=!1,Hn=null,ji=null,ri=null,Rn=null,Ud=null,Qi=null,km=()=>Qi&&Qi.open||Hn&&Hn.open||ji&&ji.open||ri&&ri.isOpen||Rn&&Rn.active;function eh(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}var jm=Array.from({length:12},(i,e)=>[Math.cos(e*Math.PI/6),Math.sin(e*Math.PI/6)]);function Kr(i,e,t=YM){if(!eh(i,e,xt.floor))return!1;for(let[n,s]of jm)if(!eh(i+n*t,e+s*t,xt.floor))return!1;for(let[n,s,r,a,o]of xt.blocks){let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),d=Math.max(0,Math.abs(l*h+c*u)-r),f=Math.max(0,Math.abs(-l*u+c*h)-a);if(d*d+f*f<t*t)return!1}return!0}function KM(i,e,t=.12){if(!eh(i,e,xt.floor))return!1;for(let[n,s]of jm)if(!eh(i+n*t,e+s*t,xt.floor))return!1;for(let[n,s,r,a,o]of xt.blocks){if(Math.min(r,a)>.1)continue;let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),d=Math.max(0,Math.abs(l*h+c*u)-r),f=Math.max(0,Math.abs(-l*u+c*h)-a);if(d*d+f*f<t*t)return!1}return!0}function Pd(i,e,t=-.06){kt=null,Ee.x=i[0],Ee.z=i[1],Ee.yaw=Ee.face=Math.atan2(e[0]-Ee.x,e[1]-Ee.z),Ee.pitch=Ji?nh:t,xs=.5}var Eo=()=>xt&&xt.scale||1,th={entry:()=>Pd(xt.spawn,xt.look),display:()=>Pd(xt.displayView,xt.displayLook,-.3),cafe:()=>Pd(xt.cafe,[-2.6*Eo(),3.7*Eo()])};async function jM(){let i=fetch("scene.json").then(r=>{if(!r.ok)throw Error("scene.json "+r.status);return r.json()}),e=7907728,t=(async()=>{let r=await fetch("store.json");if(!r.ok)throw Error("store.json "+r.status);let a;if(r.body&&r.body.getReader){let c=r.body.getReader(),h=[],u=0;for(;;){let{done:d,value:f}=await c.read();if(d)break;h.push(f),u+=f.length;let g=Math.min(99,Math.round(u/e*100));qe.bar.style.width=g+"%",qe.pct.textContent="\uB9E4\uC7A5 \uBD88\uB7EC\uC624\uB294 \uC911\u2026 "+g+"%"}a=new TextDecoder().decode(await new Blob(h).arrayBuffer())}else a=await r.text();let o=atob(JSON.parse(a)),l=new Uint8Array(o.length);for(let c=0;c<o.length;c++)l[c]=o.charCodeAt(c);return new fo().parseAsync(l.buffer,"")})(),[n,s]=await Promise.all([i,t]);xt=n,s.scene.traverse(r=>{if(r.isMesh){r.material=Array.isArray(r.material)?r.material.map(Dd):Dd(r.material),r.material.name==="glass"&&(r.renderOrder=2);let a=r.material.name;r.receiveShadow=!0,r.castShadow=!["ceiling","light","glass","floor","curtain"].includes(a),r.matrixAutoUpdate=!1,r.updateMatrix()}}),Vt.add(s.scene),_s=s.scene,oS(s.scene),aS(-.5),rS(s.scene).catch(r=>console.warn("baked light unavailable",r)),th.entry(),cS(),Qi=Nm({showToast:Ki,npcs:bi}),Hn=Em({scene3d:Vt,storeRoot:_s,data:xt,hero:Sn,npcs:bi,showToast:Ki,isTouch:Gn,canOccupy:Kr,playGame:r=>Qi.spot(r)}),ji=Rm({scene3d:Vt,hero:Sn,npcs:bi,showToast:Ki,inShop:r=>!xt.seats.some(a=>Math.hypot(r.x-a[0],r.z-a[1])<1.3)&&!bi.some(a=>a.id==="cafe"&&Math.hypot(r.x-a.x,r.z-a.z)<2.8)}),ri=Cm({showToast:Ki}),Rn=Im({hero:Sn,mirrors:wo,camera:dn,player:Ee,showToast:Ki,renderNow:()=>(Sn.root.position.set(Ee.x,0,Ee.z),Sn.root.rotation.y=Ee.face,Sn.root.visible=!0,n0(),kn!=="low"?Ti.render():Wt.render(Vt,dn),Wt.domElement)}),bt("diary-btn").addEventListener("click",r=>{ri.open(),r.currentTarget.blur()}),Ud=Um({scene3d:Vt,data:xt,storeRoot:_s,isTouch:Gn}),Wt.compile(Vt,dn),Wt.shadowMap.needsUpdate=!0,Ao=!0,qe.bar.style.width="100%",qe.pct.textContent="\uC900\uBE44 \uC644\uB8CC",qe.enter.disabled=!1,qe.enter.textContent="\uB9E4\uC7A5 \uB4E4\uC5B4\uAC00\uAE30",window.__store={mirrors:wo,sit:r=>{let a=xt.seats[r];kt=a,Ee.x=a[0],Ee.z=a[1],Ee.face=a[2],Hn.onSit(a)},get cafe(){return Hn},get shop(){return ji},get diary(){return ri},get photo(){return Rn},stand:()=>kt&&jr(),get seats(){return xt.seats},player:Ee,setView:r=>kd(r),setQuality:r=>{kn=r,Vd()},canOccupy:Kr,spots:th,keys:Mn,get entered(){return Zr},info:()=>Wt.info.render,bloom:Gd,grade:e0,npcs:bi,lmFloor:Fd,get root(){return _s},set camD(r){Km=r}}}jM().catch(i=>{console.error(i),qe.pct.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.",qe.enter.textContent="\uB2E4\uC2DC \uC2DC\uB3C4",qe.enter.disabled=!1,qe.enter.onclick=()=>location.reload()});qe.enter.addEventListener("click",()=>{Ao&&(Zr=!0,qe.overlay.classList.add("gone"),setTimeout(()=>qe.overlay.hidden=!0,450),Ki(Gn?"\uC67C\uCABD \uC544\uB798 \uC6D0\uC73C\uB85C \uAC77\uACE0, \uD654\uBA74\uC744 \uB4DC\uB798\uADF8\uD574 \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694":"WASD\uB85C \uAC77\uACE0, \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8\uB85C \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694 \xB7 V \uC2DC\uC810 \uC804\uD658"))});var Mn=new Set,ZM=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyQ","KeyE"]);addEventListener("keydown",i=>{i.target.closest&&i.target.closest("input,textarea")||!ZM.has(i.code)||i.altKey||i.ctrlKey||i.metaKey||(i.preventDefault(),Mn.add(i.code))});addEventListener("keyup",i=>Mn.delete(i.code));addEventListener("blur",()=>{Mn.clear(),on.x=on.y=0});var To=new Map;qe.canvas.addEventListener("pointerdown",i=>{if(Zr&&!(i.pointerType==="mouse"&&i.button!==0)){To.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now()});try{qe.canvas.setPointerCapture(i.pointerId)}catch{}qe.canvas.classList.add("dragging")}});qe.canvas.addEventListener("pointermove",i=>{let e=To.get(i.pointerId);if(!e)return;let t=i.pointerType==="mouse"?.0042:.0065;Ee.yaw-=(i.clientX-e.x)*t,Ee.pitch=xi.clamp(Ee.pitch-(i.clientY-e.y)*t,Ji?-1.1:-1.05,Ji?-.12:.9),e.x=i.clientX,e.y=i.clientY});var Bd=i=>{let e=To.get(i.pointerId);e&&i.type==="pointerup"&&Math.hypot(i.clientX-e.sx,i.clientY-e.sy)<9&&performance.now()-e.t<450&&nS(i.clientX,i.clientY),To.delete(i.pointerId),To.size||qe.canvas.classList.remove("dragging")};qe.canvas.addEventListener("pointerup",Bd);qe.canvas.addEventListener("pointercancel",Bd);qe.canvas.addEventListener("lostpointercapture",Bd);qe.canvas.addEventListener("contextmenu",i=>i.preventDefault());var on={id:null,x:0,y:0,cx:0,cy:0};qe.joy.addEventListener("pointerdown",i=>{if(on.id!==null)return;i.preventDefault();let e=qe.joy.getBoundingClientRect();on.id=i.pointerId,on.cx=e.left+e.width/2,on.cy=e.top+e.height/2;try{qe.joy.setPointerCapture(i.pointerId)}catch{}Zm(i)});function Zm(i){if(i.pointerId!==on.id)return;let e=qe.joy.clientWidth*.36,t=i.clientX-on.cx,n=i.clientY-on.cy,s=Math.hypot(t,n);s>e&&(t*=e/s,n*=e/s),on.x=t/e,on.y=n/e,qe.knob.style.transform=`translate(${t}px, ${n}px)`}qe.joy.addEventListener("pointermove",Zm);var zd=i=>{i.pointerId===on.id&&(on.id=null,on.x=on.y=0,qe.knob.style.transform="")};qe.joy.addEventListener("pointerup",zd);qe.joy.addEventListener("pointercancel",zd);qe.joy.addEventListener("lostpointercapture",zd);document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>{Ao&&th[i.dataset.spot](),i.blur()}));var Od=bt("burger"),Jm=bt("spots"),Ro=i=>{Jm.hidden=!i,Od.setAttribute("aria-expanded",String(i)),Od.setAttribute("aria-label",i?"\uBA54\uB274 \uB2EB\uAE30":"\uBA54\uB274 \uC5F4\uAE30")};Od.addEventListener("click",i=>{Ro(Jm.hidden),i.currentTarget.blur()});document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>Ro(!1)));qe.canvas.addEventListener("pointerdown",()=>Ro(!1));function JM(i){kt=i,Ee.x=i[0],Ee.z=i[1],Ee.face=i[2],Ee.yaw=i[2],Dn.set(0,0),Hn&&Hn.onSit(i)}function QM(){let i=bi.find(e=>e.id==="cafe");return i&&xt.seats.filter(e=>e[1]>3).sort((e,t)=>Math.hypot(e[0]-i.x,e[1]-i.z)-Math.hypot(t[0]-i.x,t[1]-i.z))[0]||xt.seats[0]}document.querySelectorAll("[data-nav]").forEach(i=>i.addEventListener("click",()=>{if(i.blur(),!Ao||!Zr)return;ri&&ri.isOpen&&ri.close();let e=i.dataset.nav;if(e==="shop")kt&&jr(),ji.shopping?bt("basket-btn").click():ji.open||(bt("shop-btn").hidden?(th.display(),setTimeout(()=>bt("shop-btn").click(),60)):bt("shop-btn").click());else if(e==="cafe"){kt&&jr();let t=bi.find(n=>n.id==="cafe");t&&(Ee.x=t.x-1.55,Ee.z=t.z,Ee.yaw=Ee.face=Math.PI/2,Ee.pitch=Ji?nh:-.06,kt=null),setTimeout(()=>bt("order-btn").click(),60)}else if(e==="diary")kt||JM(QM()),ri.open();else if(e==="photo"){kt&&jr();let t=wo[0];if(!t)return;Ee.x=t.c.x-1.2,Ee.z=t.c.z,Ee.yaw=Ee.face=Math.PI/2,bt("photo-btn").click()}else e==="mine"&&ji.openMine()}));bt("look-toggle").addEventListener("click",i=>{if(i.currentTarget.blur(),Rn&&Rn.active)return;let e=Xs[(Xs.indexOf(Sn.look)+1)%Xs.length];Sn.setLook(e),Sn.root.traverse(t=>{t.isMesh&&(t.frustumCulled=!1)});try{localStorage.setItem("sh-look",e)}catch{}Ki(`\u{1F457} \uCE90\uB9AD\uD130\uB97C \uBC14\uAFE8\uC5B4\uC694 \xB7 ${Sm[e]}`)});function eS(){let i=bi.find(e=>e.id==="shop");i&&(kt&&jr(),Ee.x=i.x+Math.sin(i.face)*1.3,Ee.z=i.z+Math.cos(i.face)*1.3,Ee.yaw=Ee.face=Math.atan2(i.x-Ee.x,i.z-Ee.z),Ee.pitch=Ji?nh:-.06)}bt("mjp-btn").addEventListener("click",i=>{i.currentTarget.blur(),Qi.mjp()});bt("mjp-open").addEventListener("click",i=>{i.currentTarget.blur(),Ro(!1),eS(),Qi.mjp()});bt("spot-open").addEventListener("click",i=>{i.currentTarget.blur(),Ro(!1),Qi.spot()});bt("hint-toggle").addEventListener("click",i=>{let e=bt("hint");e.hidden=!e.hidden,i.currentTarget.blur()});var Qm=bt("view-toggle");function kd(i){Ji=i,Sn.root.visible=i,Ee.pitch=i?nh:-.06,xs=.5,Qm.querySelector(".lbl").textContent=i?"1\uC778\uCE6D":"3\uC778\uCE6D"}Qm.addEventListener("click",i=>{kd(!Ji),i.currentTarget.blur()});addEventListener("keydown",i=>{i.code==="KeyV"&&Zr&&!(i.target.closest&&i.target.closest("input,textarea"))&&kd(!Ji)});var Hm;function Ki(i){qe.toast.textContent=i,qe.toast.classList.add("on"),clearTimeout(Hm),Hm=setTimeout(()=>qe.toast.classList.remove("on"),3600)}var gt=qe.map?qe.map.getContext("2d"):null,Id=null;function tS(){if(!qe.map||qe.map.hidden||!xt)return;if(!Id){let s=xt.floor.map(l=>l[0]),r=xt.floor.map(l=>l[1]),a=[Math.min(...s),Math.min(...r),Math.max(...s),Math.max(...r)],o=Math.min((qe.map.width-24)/(a[2]-a[0]),(qe.map.height-24)/(a[3]-a[1]));Id={s:o,mp:(l,c)=>[qe.map.width/2+(l-(a[0]+a[2])/2)*o,qe.map.height/2+(c-(a[1]+a[3])/2)*o]}}let{s:i,mp:e}=Id;gt.clearRect(0,0,qe.map.width,qe.map.height),gt.beginPath(),xt.floor.forEach(([s,r],a)=>gt[a?"lineTo":"moveTo"](...e(s,r))),gt.closePath(),gt.fillStyle="#dff3e8",gt.fill(),gt.strokeStyle="#8fc7aa",gt.lineWidth=3,gt.stroke();for(let[s,r,a,o,l,c]of xt.icons)gt.save(),gt.translate(...e(s,r)),gt.rotate(l),gt.fillStyle=Ld[c]||"#"+xt.colors[c],gt.strokeStyle="#a89cc4",gt.lineWidth=1.2,gt.fillRect(-a*i/2,-o*i/2,a*i,o*i),gt.strokeRect(-a*i/2,-o*i/2,a*i,o*i),gt.restore();gt.textAlign="center",gt.font="700 19px system-ui, sans-serif",gt.fillStyle="#5d4f7c";for(let[s,[r,a]]of xt.labels)gt.fillText(s,...e(r,a));let[t,n]=e(Ee.x,Ee.z);gt.save(),gt.translate(t,n),gt.rotate(-Ee.yaw),gt.beginPath(),gt.moveTo(0,15),gt.lineTo(-9,-8),gt.lineTo(9,-8),gt.closePath(),gt.fillStyle="#9a72d8",gt.fill(),gt.lineWidth=2.5,gt.strokeStyle="#fff",gt.stroke(),gt.restore()}function Hd(){let i=qe.canvas.clientWidth,e=qe.canvas.clientHeight;Wt.setSize(i,e,!1),typeof Ti!="undefined"&&(Ti.setPixelRatio(Wt.getPixelRatio()),Ti.setSize(i,e)),dn.aspect=i/e;let t=74*Math.PI/180,n=2*Math.atan(Math.tan(t/2)/dn.aspect)*180/Math.PI;dn.fov=Math.min(92,Math.max(64,n)),dn.updateProjectionMatrix()}var Ti=new Kc(Wt,new Dt(1,1,{type:Ot,samples:Gn?2:4}));Ti.addPass(new jc(Vt,dn));var Zi=new qr(Vt,dn,1,1);Zi.output=qr.OUTPUT.Default;Zi.blendIntensity=1;Zi.updateGtaoMaterial({radius:.55,distanceExponent:1.3,thickness:1.4,scale:1.25,samples:Gn?8:14});Zi.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:Gn?8:16});Ti.addPass(Zi);{let i=Zi.render.bind(Zi);Zi.render=(...e)=>{for(let t of pd)t.visible=!1;i(...e);for(let t of pd)t.visible=!0}}var Gd=new $r(new fe(256,256),.3,.5,2);Ti.addPass(Gd);Ti.addPass(new Qc);var e0=new Xr({uniforms:{tDiffuse:{value:null},saturation:{value:1.12},contrast:{value:1.05},warmth:{value:.025},lift:{value:.012},vignette:{value:.22}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`});Ti.addPass(e0);var kn=Gn?"mid":"high";try{kn=localStorage.getItem("sh-quality")||kn}catch{}var t0=bt("quality-toggle");function Vd(){Zi.enabled=kn==="high",Gd.enabled=kn!=="low",Wt.shadowMap.enabled=kn!=="low",Vt.traverse(i=>{i.material&&i.material.needsUpdate!==void 0&&(i.material.needsUpdate=!0)}),Wt.shadowMap.needsUpdate=!0,t0.querySelector(".lbl").textContent={high:"\uACE0\uD654\uC9C8",mid:"\uBCF4\uD1B5",low:"\uAC00\uBCCD\uAC8C"}[kn]}t0.addEventListener("click",i=>{kn={high:"mid",mid:"low",low:"high"}[kn];try{localStorage.setItem("sh-quality",kn)}catch{}Vd(),Hd(),i.currentTarget.blur()});Vd();new ResizeObserver(Hd).observe(qe.canvas);Hd();var kt=null,_s=null,Gm=new Fs,Vm=new fe;function nS(i,e){if(!xt||!xt.seats||!_s)return;let t=qe.canvas.getBoundingClientRect();Vm.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Gm.setFromCamera(Vm,dn);let n=Gm.intersectObject(_s,!0)[0];if(!n)return;let s=null,r=.6;for(let a of xt.seats){let o=Math.hypot(a[0]-n.point.x,a[1]-n.point.z);o<r&&n.point.y<1.1&&(r=o,s=a)}s&&(kt=s,Ee.x=s[0],Ee.z=s[1],Ee.face=s[2],Dn.set(0,0),Ki("\uC758\uC790\uC5D0 \uC549\uC558\uC5B4\uC694 \u{1FA91} \uC6C0\uC9C1\uC774\uBA74 \uC77C\uC5B4\uB098\uC694"),Hn&&Hn.onSit(s))}function jr(){let i=kt;kt=null,Hn&&Hn.onStand();let e=i[2]+Math.PI;for(let t of[.45,.6,.8,1,1.25])for(let n of[0,.5,-.5,1,-1,1.6,-1.6]){let s=i[0]+Math.sin(e+n)*t,r=i[1]+Math.cos(e+n)*t;if(Kr(s,r)){Ee.x=s,Ee.z=r;return}}}var iS=[/^Perimeter wall/,/^Guest floor$/,/^Ceiling$/,/^Display hall - angled partition$/,/^Cafe partition$/,/^Corridor partition$/,/^Corridor return$/,/^Cafe end wall/,/^Round column/,/^Shop counter - (staff area room|back wall|side wall)/],sS=1.12,Fd={value:0};async function rS(i){let e=await fetch("light.json");if(!e.ok)return;let t=await e.json(),n=c=>{let h=atob(c),u=new Uint8Array(h.length);for(let d=0;d<h.length;d++)u[d]=h.charCodeAt(d);return u},s=await new fo().parseAsync(n(t.shell).buffer,""),r=await createImageBitmap(new Blob([n(t.lightmap)],{type:"image/jpeg"}),{imageOrientation:"none"}),a=new Xt(r);a.flipY=!1,a.colorSpace=Et,a.needsUpdate=!0,a.anisotropy=4;{let c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d");h.drawImage(r,0,0,64,64);let u=h.getImageData(0,0,64,64).data,d=[];for(let f=0;f<u.length;f+=4)d.push(Math.pow((u[f]*.2126+u[f+1]*.7152+u[f+2]*.0722)/255,2.2));d.sort((f,g)=>f-g),Fd.value=d[Math.floor(d.length*.9)]*.85}let o=c=>{c.uniforms.lmFloor=Fd,c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform float lmFloor;`).replace("reflectedLight.indirectDiffuse += lightMapTexel.rgb","reflectedLight.indirectDiffuse += max(lightMapTexel.rgb, vec3(lmFloor))")},l=new Map;s.scene.traverse(c=>{if(!c.isMesh)return;let h=Array.isArray(c.material)?c.material[0]:c.material,u=h.name;if(!l.has(u)){let d=Dd(h),f=new Yt({color:d.color,lightMap:a,lightMapIntensity:t.gain||sS,side:Ut});f.name=u,d.onBeforeCompile&&u==="floor"?f.onBeforeCompile=d.onBeforeCompile:f.onBeforeCompile=o,l.set(u,f)}c.material=l.get(u),c.castShadow=!1,c.receiveShadow=!1}),i.traverse(c=>{let h=(c.name||"").replace(/_/g," ");iS.some(u=>u.test(h))&&c.traverse(u=>{u.isMesh&&(u.visible=!1)})}),Vt.add(s.scene),Wt.shadowMap.needsUpdate=!0}function aS(i){_s.updateMatrixWorld(!0);let e=s=>/^Cafe end - cafe order counter/.test((s&&s.name||"").replace(/_/g," ")),t=[];_s.traverse(s=>{e(s)&&!e(s.parent)&&t.push(s)});for(let s of t){let r=s.parent.worldToLocal(new B(0,0,0)),a=s.parent.worldToLocal(new B(i,0,0));s.position.add(a.sub(r)),s.updateMatrix(),s.updateMatrixWorld(!0)}for(let s of xt.blocks)Math.abs(s[0]-5.246)<.05&&Math.abs(s[1]-4.508)<.05&&(s[0]+=i);let n=(xt.npcs||[]).find(s=>s.id==="cafe");n&&(n.x=5.55)}var wo=[];function oS(i){i.updateMatrixWorld(!0),i.traverse(e=>{if(!e.isMesh||!e.material||e.material.name!=="mirror")return;let t=e,n=!1;for(;t;)/leaning.mirror/i.test(t.name.replace(/_/g," "))&&(n=!0),t=t.parent;if(!n)return;let s=new cn().setFromObject(e),r=s.getCenter(new B),a=s.getSize(new B),o=.12,l=new B(-Math.cos(o),Math.sin(o),0),c=Math.max(a.x,a.z)-.02,h=a.y/Math.cos(o)-.02,u=Math.min(window.devicePixelRatio||1,2),d=new bo(new Fi(c,h),{textureWidth:Math.round((Gn?384:640)*u*(c/h)*2),textureHeight:Math.round((Gn?384:640)*u),color:14674158,clipBias:.003});d.position.copy(r).addScaledVector(l,.02),e.visible=!1,d.lookAt(d.position.clone().add(l)),Vt.add(d),wo.push({ref:d,c:r,pane:e})})}function n0(){for(let i of wo)i.ref.visible=(kn!=="low"||Rn&&Rn.active)&&Math.hypot(Ee.x-i.c.x,Ee.z-i.c.z)<7,i.pane.visible=!i.ref.visible}var bi=[],lS={cafe:{opt:{look:"cafe"},say:"\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615"},shop:{opt:{look:"shop"},say:"\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}"}};function cS(){for(let i of xt.npcs||[]){let e=lS[i.id];if(!e)continue;let t=md(Ym,e.opt);t.root.position.set(i.x,0,i.z),t.root.rotation.y=i.face,t.root.scale.setScalar(1.12),t.root.position.y=i.id==="shop"?.15:.2,Vt.add(t.root);let n=document.createElement("div");n.className="bubble",n.textContent=e.say,bt("bubbles").appendChild(n),bi.push({...i,c:t,el:n,yaw:0})}}var Yr=new B;function hS(i,e){for(let t of bi){t.c.animate(i,t.speed||0,e+t.id.length),t.y!==void 0&&(t.c.root.position.set(t.x,t.y,t.z),t.c.root.rotation.y=t.face),t.carry&&(t.c.arms[0].rotation.x=t.c.arms[1].rotation.x=-1.35);let n=Ee.x-t.x,s=Ee.z-t.z,r=Math.hypot(n,s),a=0;if(r<4&&!t.speed&&(a=Math.atan2(n,s)-t.face,a=Math.atan2(Math.sin(a),Math.cos(a)),a=xi.clamp(a,-.9,.9)),t.yaw+=(a-t.yaw)*Math.min(1,i*5),t.c.head.rotation.y=t.yaw,t.c.head.rotation.x+=((r<4?-.22:0)-t.c.head.rotation.x)*Math.min(1,i*4),r<2.8){Yr.set(t.x,1.6,t.z).project(dn);let l=qe.canvas.getBoundingClientRect(),c=Yr.z<1&&Math.abs(Yr.x)<1.1&&Math.abs(Yr.y)<1.1;t.el.style.transform=`translate(${(Yr.x*.5+.5)*l.width}px, ${(-Yr.y*.5+.5)*l.height}px) translate(-50%, -100%)`,t.el.classList.toggle("on",c)}else t.el.classList.remove("on")}}var Dn=new fe,Wm=performance.now(),Xm=0;function uS(){let i=Eo();return kt?"\u{1FA91} \uC549\uC544\uC11C \uC26C\uB294 \uC911":Ee.z>1.75*i?"\u2615 \uCE74\uD398 \uC88C\uC11D":Ee.x>3.2*i&&Ee.z<-1.6*i?"\u{1F6AA} \uC785\uAD6C":Ee.x>3*i?"\u{1F380} \uBCF5\uB3C4":"\u{1F9F8} \uC9C4\uC5F4\uB300 \uC0AC\uC774"}function i0(i){let e=Math.min((i-Wm)/1e3,.05);if(Wm=i,Ao){if(Zr){let o=(Mn.has("ArrowLeft")||Mn.has("KeyQ")?1:0)-(Mn.has("ArrowRight")||Mn.has("KeyE")?1:0);Ee.yaw+=o*1.7*e;let l=(Mn.has("KeyW")||Mn.has("ArrowUp")?1:0)-(Mn.has("KeyS")||Mn.has("ArrowDown")?1:0),c=(Mn.has("KeyD")?1:0)-(Mn.has("KeyA")?1:0);on.id!==null&&(l=-on.y,c=on.x);let h=Math.hypot(l,c);h>1&&(l/=h,c/=h),kt&&h>.25&&jr(),(kt||km())&&(l=0,c=0);let u=Mn.has("ShiftLeft")||Mn.has("ShiftRight")?1.6:1,d=Math.sin(Ee.yaw),f=Math.cos(Ee.yaw),g=(l*d-c*f)*Bm*u,v=(l*f+c*d)*Bm*u,m=1-Math.exp(-e*12);Dn.x+=(g-Dn.x)*m,Dn.y+=(v-Dn.y)*m;let p=Dn.x*e,_=Dn.y*e;Math.abs(p)+Math.abs(_)>1e-5&&(Kr(Ee.x+p,Ee.z+_)?(Ee.x+=p,Ee.z+=_):(Kr(Ee.x+p,Ee.z)?Ee.x+=p:Dn.x=0,Kr(Ee.x,Ee.z+_)?Ee.z+=_:Dn.y=0));let b=Math.hypot(Dn.x,Dn.y);if(b>.15){let A=Math.atan2(Dn.x,Dn.y)-Ee.face;A=Math.atan2(Math.sin(A),Math.cos(A)),Ee.face+=A*Math.min(1,e*12)}Sn.animate(e,b,i/1e3,!!kt),Hn&&Hn.update(e,Ee,kt),Ud&&Ud.update(e,i/1e3),Qi&&Qi.update(Ee,kt),ji&&ji.update(Ee,kt),Rn&&(Rn.update(kt),Rn.applyPose(i/1e3)),bt("diary-btn").hidden=!kt||!ri||ri.isOpen,bt("actions").style.visibility=km()?"hidden":"",hS(e,i/1e3),n0(),!zm&&Ee.z>2*Eo()&&Ee.x<3.6*Eo()&&(zm=!0,Ki("\uCE74\uD398 \uC88C\uC11D\uC5D0 \uB3C4\uCC29\uD588\uC5B4\uC694 \u2615"))}let t=Math.sin(Ee.pitch),n=Math.cos(Ee.pitch),s=Math.sin(Ee.yaw),r=Math.cos(Ee.yaw);if(Sn.root.position.set(Ee.x,0,Ee.z),Sn.root.rotation.y=Ee.face,Rn&&Rn.camera())Sn.root.visible=!0;else if(Ji){let o=Ee.x,l=.9,c=Ee.z,h=-s,u=-r,d=Km,f=n*d,g=f;for(let _=.2;_<=f;_+=.08)if(!KM(o+h*_,c+u*_)){g=Math.max(.15,_-.15);break}xs+=(g-xs)*Math.min(1,e*(g<xs?18:3));let v=(xt.ceiling||2.65)-.25,m=Math.min(v,l-t*d);dn.position.set(o+h*xs,m,c+u*xs);let p=xi.clamp(1-xs/f,0,1);dn.lookAt(o+s*p*1.8,l+.05+p*.15,c+r*p*1.8),p>.7&&(dn.position.y=Math.min(v+.03,m+.1)),Sn.root.visible=!0}else{let o=kt?1.02:$M;dn.position.set(Ee.x,o,Ee.z),dn.lookAt(Ee.x+s*n,o+t,Ee.z+r*n)}kn!=="low"?Ti.render():Wt.render(Vt,dn),Rn&&Rn.afterRender(Wt.domElement);let a=uS();qe.where.textContent!==a&&(qe.where.textContent=a),(Xm=(Xm+1)%2)===0&&tS()}requestAnimationFrame(i0)}requestAnimationFrame(i0);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
